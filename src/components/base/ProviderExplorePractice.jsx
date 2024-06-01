import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShuffel } from "../../utils/helper";
import {
  providerPracticeData,
  providerPracticeOption,
} from "../../redux/actions";

const ProviderExplorePractice = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { getLessonResources, tempPracticeStore, tempPracticeOptionStore } =
    useSelector((state) => state.collections);

  const [practiceStep, setPracticeStep] = useState(0);
  const [practiceData, setPracticeData] = useState();
  const [apiOption, setApiOption] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});

  useEffect(() => {
    if (getLessonResources) {
      setPracticeData(
        getShuffel(
          getLessonResources && getLessonResources?.records[0].practice
        )
      );
    }
  }, [getLessonResources]);

  const handleOption = (questionKey, option) => {
    selectedQuestion[questionKey] = option.id;
    let val = Object.values(selectedQuestion);
    setApiOption(val);
    var temp = { ...practiceData };
    setPracticeData(
      Object.entries(temp).map(([name, obj]) => ({ name, ...obj }))
    );
  };

  const handleSubmit = () => {
    let totalCorrect = 0;
    for (let i = 0; i < practiceData.length; i++) {
      let isAllCorrect = true;
      for (let j = 0; j < practiceData[i].options.length; j++) {
        let opt = practiceData[i].options;
        if (practiceData[i]?.type === "RADIOQ") {
          if (i in selectedQuestion) {
            if (opt[j]?.id == selectedQuestion[i]) {
              practiceData[i].options[j].isUserSelected = true;
              practiceData[i].attempted = true;
            }
          }
        } else if (practiceData[i]?.type === "CHECKBOXQ") {
          if (practiceData[j]?.isUserSelected) {
            practiceData[i].attempted = true;
          }
        }
      }
      if (practiceData[i]?.attempted && isAllCorrect) {
        totalCorrect++;
      }
    }
    const practicData = {
      isSubmit: true,
      quiz: practiceData,
    };
    // dispatch(providerPracticeOption("option"))
    dispatch(providerPracticeData(practicData));
    setSubmitted(true);
  };

  const handleNext = (isNext) => {
    let totalPractice = practiceData?.length;
    let count = practiceStep;
    if (isNext) {
      if (totalPractice - 1 > count) {
        ++count;
      }
    } else {
      if (count != 0) {
        --count;
      }
    }
    setPracticeStep(count);
  };

  const handleCheckBoxOption = (questionIndex, optionIndex) => {
    let question = practiceData[questionIndex];
    question["options"][optionIndex].isUserSelected =
      !question["options"][optionIndex].isUserSelected;
    practiceData[questionIndex] = question;
  };
  const practiceQ = tempPracticeStore?.quiz[practiceStep];
  return (
    <>
      {tempPracticeStore?.isSubmit && (
        <div className="Quizresult">
          <p>
            {/* <span className='Correctq'>You have already attempted</span> */}
            <span className="Correctq">
              You have completed the practice test. Please take the quiz if you
              haven’t already to earn points.
            </span>
          </p>
        </div>
      )}

      <div className="w-100 Quizscreenheight" key={practiceStep}>
        {practiceData && (
          <div className="ScenecerelateddQuiz">
            <div className="signupType m-0 mb-3">
              <h4 className="mb-3">
                <span>
                  <i className="fa-light fa-clipboard-question"></i>
                </span>{" "}
                {practiceData[practiceStep]?.question.substring(0, 4) ==
                  "http" ||
                practiceData[practiceStep]?.question.substring(0, 5) ==
                  "https" ? (
                  <img
                    src={practiceData[practiceStep]?.question}
                    alt=""
                    width={500}
                    height={500}
                  />
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: practiceData[practiceStep]?.question,
                    }}
                  />
                )}
                {/* <span
									dangerouslySetInnerHTML={{
										__html: practiceData[practiceStep]?.question,
									}}
								/> */}
              </h4>

              {practiceData[practiceStep]?.type == "RADIOQ" &&
                practiceData[practiceStep]?.options.map((opt, key) => (
                  <label
                    key={key}
                    className={`Selcheckbox ${
                      tempPracticeStore?.isSubmit &&
                      practiceQ?.options[key]?.isUserSelected
                        ? opt?.isCorrect
                          ? " RightQuzAnswer"
                          : " WrongQuzAnswer"
                        : practiceQ?.attempted &&
                          practiceQ?.options[key]?.isCorrect
                        ? " RightQuzAnswer"
                        : ""
                    }`}
                  >
                    {opt?.question.substring(0, 4) == "http" ||
                    opt?.question.substring(0, 5) == "https" ? (
                      <img
                        src={opt?.question}
                        alt=""
                        width={300}
                        height={300}
                      />
                    ) : (
                      <span
                        dangerouslySetInnerHTML={{ __html: opt?.question }}
                      />
                    )}
                    <input
                      type="radio"
                      id="Public"
                      name={"Question" + practiceStep}
                      onClick={() => handleOption(practiceStep, opt)}
                    ></input>

                    {tempPracticeStore?.isSubmit &&
                      practiceQ?.options[key]?.isUserSelected &&
                      !practiceQ?.options[key]?.isCorrect && (
                        <span className="WrongQuizAns">
                          <i className="fa-solid fa-xmark m-0"></i>
                        </span>
                      )}
                    <span className="checkmark"></span>
                  </label>
                ))}
              {practiceData &&
                practiceData[practiceStep]?.type == "CHECKBOXQ" && (
                  <>
                    <div className="signupType checktypequestion m-0">
                      {practiceData &&
                        practiceData[practiceStep]?.options?.map(
                          (option, optionIndex) => (
                            <label
                              className={`Selcheckbox ${
                                tempPracticeStore?.isSubmit &&
                                practiceQ?.options[optionIndex]?.isUserSelected
                                  ? practiceQ?.options[optionIndex]?.isCorrect
                                    ? " RightQuzAnswer"
                                    : " WrongQuzAnswer"
                                  : practiceData[practiceStep]?.attempted &&
                                    practiceQ?.options[optionIndex]?.isCorrect
                                  ? " RightQuzAnswer"
                                  : ""
                              }`}
                            >
                              {option?.question.substring(0, 4) == "http" ||
                              option?.question.substring(0, 5) == "https" ? (
                                <img
                                  src={option?.question}
                                  alt=""
                                  width={300}
                                  height={300}
                                />
                              ) : (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: option?.question,
                                  }}
                                />
                              )}
                              {tempPracticeStore?.isSubmit ||
                              practiceData?.isPracticeAttempted ? (
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="Question"
                                  value="PUBLIC"
                                  checked={
                                    practiceQ?.options[optionIndex]
                                      ?.isUserSelected
                                      ? practiceQ?.options[optionIndex]
                                          ?.isUserSelected ==
                                        practiceQ?.options[optionIndex]
                                          ?.isCorrect
                                        ? true
                                        : false
                                      : false
                                  }
                                ></input>
                              ) : (
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="Question"
                                  value="PUBLIC"
                                  onClick={() =>
                                    handleCheckBoxOption(
                                      practiceStep,
                                      optionIndex
                                    )
                                  }
                                  defaultChecked={
                                    practiceQ?.options[optionIndex]
                                      ?.isUserSelected
                                      ? true
                                      : false
                                  }
                                ></input>
                              )}
                              {tempPracticeStore?.isSubmit
                                ? practiceQ?.options[optionIndex]
                                    ?.isUserSelected &&
                                  !practiceQ?.options[optionIndex]
                                    ?.isCorrect && (
                                    <span className="WrongQuizAns">
                                      <i className="fa-solid fa-xmark m-0"></i>
                                    </span>
                                  )
                                : ""}
                              <span className="checkmark"></span>
                            </label>
                          )
                        )}
                    </div>
                  </>
                )}
            </div>
          </div>
        )}
      </div>
      <div className="input-group full-Width-group basic_details_form pagebuttonStripEx">
        <div className="form-group BDsubmitbutton d-flex m-0">
          {practiceStep > 0 && (
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5 m-0 back_button"
              onClick={() => handleNext(false)}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i> Back
            </button>
          )}
          {practiceStep + 1 < practiceData?.length ? (
            <div className="buttonDistribotion">
              <button
                type="submit"
                className="btn-blue btn-login d-block mb-5"
                onClick={() => handleNext(true)}
              >
                Next<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
              </button>
            </div>
          ) : (
            <>
              {!tempPracticeStore?.isSubmit && (
                <button
                  type="button"
                  className="btn-blue btn-login d-block mb-5"
                  onClick={() => handleSubmit()}
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProviderExplorePractice;

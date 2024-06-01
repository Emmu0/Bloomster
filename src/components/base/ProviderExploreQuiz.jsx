import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getShuffel } from "../../utils/helper";
import { providerQuizData, providerQuizOption } from "../../redux/actions";

const ProviderExploreQuiz = ({ selectedCourse, areaId, resourceInnerData }) => {
  const { getLessonResources, tempQuizStore, tempQuizOptionStore } =
    useSelector((state) => state.collections);
  const [quiz, setQuiz] = useState([]);

  const path = useParams();
  const dispatch = useDispatch();
  const [quizStep, setQuizStep] = useState(0);
  const [apiOption, setApiOption] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});

  const quizQ = tempQuizOptionStore && tempQuizOptionStore[quizStep];
  useEffect(() => {
    if (getLessonResources) {
      //  setApiOption([]);
      //  setquizDataRecords(getLessonResources && getLessonResources?.records[0]);
      setQuiz(
        getShuffel(getLessonResources && getLessonResources?.records[0].quiz)
      );
      setQuizStep(0);
      // setSubmitted(false);
      setApiOption([]);
    }
  }, [resourceInnerData, getLessonResources]);

  const handleOption = (questionIndex, optionData) => {
    selectedQuestion[questionIndex] = optionData.id;
    let val = Object.values(selectedQuestion);
    setApiOption(val);
    var temp = { ...quiz };
    setQuiz(Object.entries(temp).map(([name, obj]) => ({ name, ...obj })));
  };

  const handleSubmit = () => {
    let totalAttempted = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let total = quiz?.length;
    let totalCheckboxCorrect = 0;
    let totalCheckboxSelected = 0;
    for (let i = 0; i < quiz.length; i++) {
      let isAllCorrect = true;
      for (let j = 0; j < quiz[i].options.length; j++) {
        let opt = quiz[i].options;
        if (quiz[i]?.type === "RADIOQ") {
          if (i in selectedQuestion) {
            if (opt[j]?.id == selectedQuestion[i]) {
              quiz[i].options[j].isUserSelected = true;
              quiz[i].attempted = true;
            }
          }
          if (opt[j]?.isUserSelected && opt[j]?.isCorrect) {
            totalCorrect++;
          }
        } else if (quiz[i]?.type === "CHECKBOXQ") {
          if (opt[j]?.isUserSelected) {
            quiz[i].attempted = true;
          }
          if (!opt[j]?.isCorrect && opt[j]?.isUserSelected) {
            isAllCorrect = false;
          }
          if (opt[j]?.isCorrect) {
            totalCheckboxCorrect++;
            if (opt[j]?.isUserSelected) {
              totalCheckboxSelected++;
            }
          }
        }
      }

      if (
        quiz[i]?.attempted &&
        quiz[i]?.type === "CHECKBOXQ" &&
        isAllCorrect &&
        totalCheckboxCorrect === totalCheckboxSelected
      ) {
        totalCorrect++;
      }
      if (quiz[i]?.attempted) {
        totalAttempted++;
      }
    }

    const QuizData = {
      isSubmit: true,
      totalAttempted: totalAttempted,
      total: total,
      totalIncorrect: totalIncorrect,
      totalCorrect: totalCorrect,
    };
    dispatch(providerQuizOption(quiz));
    dispatch(providerQuizData(QuizData));
    // setSubmitted(true);
  };

  const handleNext = (isNext) => {
    let totalQuiz = quiz?.length;
    let count = quizStep;
    if (isNext) {
      if (totalQuiz - 1 > count) {
        ++count;
      }
    } else {
      if (count != 0) {
        --count;
      }
    }
    setQuizStep(count);
  };

  const handleCheckBoxOption = (questionIndex, optionIndex) => {
    let question = quiz[questionIndex];

    question["options"][optionIndex].isUserSelected =
      !question["options"][optionIndex].isUserSelected;
    quiz[questionIndex] = question;
  };

  // useEffect(() => {
  //     if (quiz) {
  //         let totalAttempted = 0;
  //         let totalCorrect = 0;
  //         let totalIncorrect = 0;
  //         let total = quiz?.length;
  //         quiz.map((val, key) => {
  //             val?.options.map((vl, ky) => {
  //                 if (vl?.isUserSelected) {
  //                     totalAttempted++;
  //                     if (vl?.isCorrect) {
  //                         totalCorrect++;
  //                     } else {
  //                         totalIncorrect++;
  //                     }
  //                 }
  //             });
  //         });
  //         setDataResult({ totalCorrect, totalIncorrect, total, totalAttempted });
  //     }
  // }, [quiz]);

  return (
    <>
      {tempQuizStore?.isSubmit && (
        <div className="Quizresult">
          <h5 className="flex">
            {/* Quiz Result:{" "}
                        <span>
                            Points: {quizDataPoints[0]?.quizPoints}
                            <img alt="" />
                        </span> */}
          </h5>
          <p>
            Total Questions: <b>{tempQuizStore?.total}</b>; Total Attempted:{" "}
            <b className="text-primary">{tempQuizStore?.totalAttempted}</b>;
            Total Correct Answers:{" "}
            <b className="text-success">{tempQuizStore?.totalCorrect}</b>
          </p>
        </div>
      )}
      {/* You have attempted X questions out of a total of Y. You have given A
      correct and B incorrect answers. */}
      <div className="w-100 Quizscreenheight" key={quiz[quizStep]?.id}>
        <div className="ScenecerelateddQuiz">
          {quiz && (
            <div className="signupType m-0 mb-3">
              <h4 className="mb-3">
                <span>
                  {/* <i className="fa-solid fa-user"></i>
										<i className="fa-solid fa-thought-bubble mr-2"></i> */}
                  <i className="fa-light fa-clipboard-question"></i>
                </span>
                {quiz[quizStep]?.question.substring(0, 4) == "http" ||
                quiz[quizStep]?.question.substring(0, 5) == "https" ? (
                  <img
                    src={quiz[quizStep]?.question}
                    alt=""
                    width={500}
                    height={500}
                  />
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: quiz[quizStep]?.question,
                    }}
                  />
                )}
              </h4>

              {quiz[quizStep]?.type == "RADIOQ" &&
                quiz[quizStep]?.options?.map((opt, key) => (
                  <label
                    key={key}
                    className={`Selcheckbox ${
                      tempQuizStore?.isSubmit &&
                      quizQ?.options[key]?.isUserSelected
                        ? quizQ?.options[key]?.isCorrect
                          ? " RightQuzAnswer"
                          : " WrongQuzAnswer"
                        : quizQ?.attempted && quizQ?.options[key]?.isCorrect
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
                    )}{" "}
                    {/* {"L" + opt?.isCorrect} */}
                    {tempQuizStore?.isSubmit ? (
                      <input
                        type="radio"
                        id="Public"
                        name={"Question" + quizStep}
                        disabled="true"
                        checked={
                          quizQ?.options[key]?.isUserSelected
                            ? quizQ?.options[key]?.isUserSelected ==
                              quizQ?.options[key]?.isCorrect
                              ? true
                              : false
                            : false
                        }
                      ></input>
                    ) : (
                      <>
                        <input
                          type="radio"
                          id={"Question" + quizStep}
                          name={"Question" + quizStep}
                          defaultChecked={
                            apiOption.includes(opt?.id) ? "checked" : ""
                          }
                          onClick={() => handleOption(quizStep, opt)}
                        ></input>
                      </>
                    )}
                    {tempQuizStore?.isSubmit &&
                      quizQ?.options[key]?.isUserSelected &&
                      !quizQ?.options[key]?.isCorrect && (
                        <span className="WrongQuizAns">
                          <i className="fa-solid fa-xmark m-0"></i>
                        </span>
                      )}
                    {/* {opt?.isUserSelected &&
											opt?.isUserSelected != opt?.isCorrect && (
												<span className="WrongQuizAns">
													<span className="checkmark "></span>
												</span>
											)}
										{opt?.isUserSelected ? (
											opt?.isUserSelected == opt?.isCorrect ? (
												<>
													{" "}
													<span className="checkmark "></span>
												</>
											) : (
												<span className="WrongQuizAns">
													<i className="fa-solid fa-xmark m-0"></i>
												</span>
											)
										) : (
											""
										)} */}
                    <span className="checkmark"></span>
                  </label>
                ))}
              {quiz && quiz[quizStep]?.type == "CHECKBOXQ" && (
                <>
                  <div className="signupType checktypequestion m-0">
                    {quiz &&
                      quiz[quizStep]?.options?.map((option, optionIndex) => (
                        <label
                          className={`Selcheckbox ${
                            tempQuizStore?.isSubmit &&
                            quizQ?.options[optionIndex]?.isUserSelected
                              ? quizQ?.options[key]?.isCorrect
                                ? " RightQuzAnswer"
                                : " WrongQuzAnswer"
                              : quizQ?.attempted &&
                                quizQ?.options[optionIndex]?.isCorrect
                              ? " RightQuzAnswer"
                              : ""
                          }`}
                          // (quiz[quizStep]?.attempted && option?.isCorrect ? " RightQuzAnswer" : "")
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
                          {/* {"L" + option?.isCorrect} */}
                          {tempQuizStore?.isSubmit ? (
                            <input
                              type="checkbox"
                              id="Public"
                              name="Question"
                              value="PUBLIC"
                              checked={
                                quizQ?.options[optionIndex]?.isUserSelected
                                  ? quizQ?.options[optionIndex]
                                      ?.isUserSelected ==
                                    quizQ?.options[optionIndex]?.isCorrect
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
                                handleCheckBoxOption(quizStep, optionIndex)
                              }
                              defaultChecked={
                                option?.isUserSelected ? true : false
                              }
                            ></input>
                          )}
                          {tempQuizStore?.isSubmit
                            ? quizQ?.options[optionIndex]?.isUserSelected &&
                              !quizQ?.options[optionIndex]?.isCorrect && (
                                <span className="WrongQuizAns">
                                  <i className="fa-solid fa-xmark m-0"></i>
                                </span>
                              )
                            : ""}
                          <span className="checkmark"></span>
                        </label>
                      ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="input-group full-Width-group basic_details_form pagebuttonStripEx">
        <div className="form-group BDsubmitbutton d-flex m-0">
          {quizStep > 0 && (
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5 back_button"
              onClick={() => handleNext(false)}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i> Back
            </button>
          )}

          {quizStep + 1 < quiz?.length ? (
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
              {!tempQuizStore?.isSubmit && (
                <button
                  type="button"
                  className="btn-blue btn-login d-block mb-5"
                  onClick={() => handleSubmit()}
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>&nbsp;Submit
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProviderExploreQuiz;

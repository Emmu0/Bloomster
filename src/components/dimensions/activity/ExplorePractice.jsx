import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QuizOption } from "../../../redux/actions/APIs";
import { useParams } from "react-router-dom";
import { isLoading } from "../../../redux/actions";
import { getShuffel } from "../../../utils/helper";
import VickyComingSoon from "../../widget/VickyComingSoon";
import { COMING_SOON } from "../../../utils/DataObjects";
import { ShimmerCategoryList } from "react-shimmer-effects";

const ExplorePractice = ({ areaId, selectedCourse, resourceInnerData }) => {
  const [isSubmitted, setSubmitted] = useState(false);

  const { getLessonResources, selectedDim, dimension, quizResponse } =
    useSelector((state) => state.collections);

  const dispatch = useDispatch();
  const path = useParams();
  const [practiceStep, setPracticeStep] = useState(0);
  const [practiceData, setPracticeData] = useState();
  const [practiceDataRecords, setPracticeDataRecords] = useState();
  const [apiOption, setApiOption] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [practiceDataPoints, setPracticeDataPoints] = useState();
  const [shimmerload, setShimmerload] = useState();
  const [loaderSubmit, setLoaderSubmit] = useState();

  useEffect(() => {
    if (getLessonResources) {
      setApiOption([]);
      setPracticeDataRecords(
        getLessonResources && getLessonResources?.records[0]
      );
      setPracticeData(
        getShuffel(
          getLessonResources && getLessonResources?.records[0].practice
        )
      );
    }
  }, [getLessonResources]);

  useEffect(() => {
    if (getLessonResources) {
      setPracticeDataPoints(getLessonResources?.records);
      setPracticeStep(0);
    }
  }, [getLessonResources]);

  useEffect(() => {
    if (practiceData) {
      setTimeout(() => {
        setShimmerload(practiceData);
      }, 1000);
    }
  }, [practiceData]);

  const handleOption = (questionKey, option) => {
    selectedQuestion[questionKey] = option.id;
    let val = Object.values(selectedQuestion);
    setApiOption(val);
    var temp = { ...practiceData };
    setPracticeData(
      Object.entries(temp).map(([name, obj]) => ({ name, ...obj }))
    );
  };
  let courseId = selectedCourse?.id;
  let activityId = selectedCourse?.activities[0]?.id;
  let moduleId = resourceInnerData?.resourceContent;

  const handleSubmit = () => {
    setLoaderSubmit(true);
    dispatch(isLoading(true));
    let checkboxIds = [];
    for (let i = 0; i < practiceData.length; i++) {
      for (let j = 0; j < practiceData[i].options.length; j++) {
        let opt = practiceData[i].options;
        if (practiceData[i]?.type == "CHECKBOXQ") {
          if (opt[j]?.isUserSelected) {
            checkboxIds.push(opt[j]?.id);
          }
        }
      }
    }
    let formData = {
      optionIds: apiOption.toString(),
      isQuiz: false,
    };
    if (checkboxIds.length > 0) {
      let comma = "";
      if (formData.optionIds.length > 0) {
        comma = ",";
      }
      formData.optionIds = formData.optionIds + comma + checkboxIds.toString();
    }
    dispatch(
      QuizOption(
        path?.id,
        practiceData[0]?.surveyId,
        areaId,
        courseId,
        activityId,
        formData,
        moduleId,
        dimension,
        selectedDim
      )
    );
    setSubmitted(true);
  };

  useEffect(() => {
    if (quizResponse) {
      dispatch(isLoading(false));
    }
  }, [quizResponse]);

  const handleNext = (isNext) => {
    let totalPractice = practiceDataRecords?.practice?.length;
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

  const [disableButton, setDisableButton] = useState([]);
  const [selectedOptionIds, setSelectedOptionIds] = useState([]);

  const handleCheckBoxOption = (questionIndex, optionIndex) => {
    let question = practiceData[questionIndex];
    question["options"][optionIndex].isUserSelected =
      !question["options"][optionIndex].isUserSelected;
    practiceData[questionIndex] = question;

    const option = question.options[optionIndex];
    const optionId = option.id;
    setSelectedOptionIds((prevSelectedOptionIds) => {
      if (option.isUserSelected) {
        return [...prevSelectedOptionIds, optionId];
      } else {
        return prevSelectedOptionIds.filter((id) => id !== optionId);
      }
    });
  };

  useEffect(() => {
    if (apiOption?.length > 0) {
      setDisableButton(apiOption);
    } else {
      setDisableButton(selectedOptionIds);
    }
  }, [apiOption, selectedOptionIds]);

  return (
    <>
      {practiceDataPoints && practiceDataPoints[0]?.isPracticeAttempted && (
        <div className='Quizresult'>
          <p>
            {/* <span className="Correctq">You have already attempted</span> */}
            <span className='Correctq'>
              You have completed the practice test. Please take the quiz if you
              haven’t already to earn points.
            </span>
          </p>
        </div>
      )}

      {shimmerload?.length > 0 ? (
        <>
          <div className='w-100 Quizscreenheight' key={practiceStep}>
            {practiceData && (
              <div className='ScenecerelateddQuiz'>
                <div className='signupType m-0 mb-3'>
                  <h4 className='mb-3'>
                    <span>
                      <i className='fa-light fa-clipboard-question'></i>
                    </span>{" "}
                    {practiceData[practiceStep]?.question.substring(0, 4) ==
                      "http" ||
                      practiceData[practiceStep]?.question.substring(0, 5) ==
                      "https" ? (
                      <img
                        src={practiceData[practiceStep]?.question}
                        alt=''
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
                  </h4>

                  {practiceData &&
                    practiceData[practiceStep]?.type == "RADIOQ" &&
                    practiceData[practiceStep]?.options.map((opt, key) => (
                      <label
                        key={key}
                        className={`Selcheckbox ${!practiceData[practiceStep]?.attempted ===
                          opt?.isUserSelected &&
                          opt?.isCorrect &&
                          " RightQuzAnswer"
                          } ${opt?.isUserSelected &&
                          opt?.isUserSelected != opt?.isCorrect &&
                          "WrongQuzAnswer"
                          }`}>
                        {opt?.question.substring(0, 4) == "http" ||
                          opt?.question.substring(0, 5) == "https" ? (
                          <img
                            src={opt?.question}
                            alt=''
                            width={300}
                            height={300}
                          />
                        ) : (
                          <span
                            dangerouslySetInnerHTML={{ __html: opt?.question }}
                          />
                        )}
                        {/* <span dangerouslySetInnerHTML={{ __html: opt?.question }} /> */}

                        {practiceDataRecords?.isPracticeAttempted ? (
                          <input
                            type='radio'
                            id='Public'
                            name={"Question" + practiceStep}
                            disabled={true}
                            checked={
                              opt?.isUserSelected
                                ? opt?.isUserSelected == opt?.isCorrect
                                  ? true
                                  : false
                                : false
                            }></input>
                        ) : (
                          <input
                            type='radio'
                            id='Public'
                            name={"Question" + practiceStep}
                            defaultChecked={
                              apiOption.includes(opt?.id) ? "checked" : ""
                            }
                            onClick={() =>
                              handleOption(practiceStep, opt)
                            }></input>
                        )}

                        {opt?.isUserSelected ? (
                          opt?.isUserSelected == opt?.isCorrect ? (
                            <span className='checkmark'></span>
                          ) : (
                            <span className='WrongQuizAns'>
                              <i className='fa-solid fa-xmark m-0'></i>
                            </span>
                          )
                        ) : (
                          ""
                        )}
                        <span className='checkmark'></span>
                      </label>
                    ))}
                  {practiceData &&
                    practiceData[practiceStep]?.type == "CHECKBOXQ" && (
                      <>
                        <div className='signupType checktypequestion m-0'>
                          {practiceData &&
                            practiceData[practiceStep]?.options?.map(
                              (option, optionIndex) => (
                                <label
                                  className={`Selcheckbox ${practiceData[practiceStep]?.attempted &&
                                      option?.isUserSelected
                                      ? option?.isCorrect
                                        ? " RightQuzAnswer"
                                        : " WrongQuzAnswer"
                                      : practiceData[practiceStep]?.attempted &&
                                        option?.isCorrect
                                        ? " RightQuzAnswer"
                                        : ""
                                    }`}>
                                  {option?.question.substring(0, 4) == "http" ||
                                    option?.question.substring(0, 5) ==
                                    "https" ? (
                                    <img
                                      src={option?.question}
                                      alt=''
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
                                  {isSubmitted ||
                                    practiceData?.isPracticeAttempted ? (
                                    <input
                                      type='checkbox'
                                      id='Public'
                                      name='Question'
                                      value='PUBLIC'
                                      checked={
                                        option?.isUserSelected
                                          ? option?.isUserSelected ==
                                            option?.isCorrect
                                            ? true
                                            : false
                                          : false
                                      }></input>
                                  ) : (
                                    <input
                                      type='checkbox'
                                      id='Public'
                                      name='Question'
                                      value='PUBLIC'
                                      onClick={() =>
                                        handleCheckBoxOption(
                                          practiceStep,
                                          optionIndex
                                        )
                                      }
                                      defaultChecked={
                                        option?.isUserSelected ? true : false
                                      }></input>
                                  )}
                                  {practiceData[practiceStep]?.attempted
                                    ? option?.isUserSelected &&
                                    !option?.isCorrect && (
                                      <span className='WrongQuizAns'>
                                        <i className='fa-solid fa-xmark m-0'></i>
                                      </span>
                                    )
                                    : ""}
                                  <span className='checkmark'></span>
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
          <div className='input-group full-Width-group basic_details_form pagebuttonStripEx'>
            <div className='form-group BDsubmitbutton d-flex m-0'>
              {practiceStep > 0 && (
                <button
                  type='button'
                  className='btn-blue btn-login d-block mb-5 back_button'
                  onClick={() => handleNext(false)}>
                  <i className='fa-solid fa-arrow-left mr-2'></i> Back
                </button>
              )}

              {practiceStep + 1 < practiceDataRecords?.practice?.length ? (
                <div className='buttonDistribotion'>
                  <button
                    type='submit'
                    className='btn-blue btn-login d-block mb-5'
                    onClick={() => handleNext(true)}>
                    Next<i className='fa-solid fa-arrow-right ml-2 m-0'></i>
                  </button>
                </div>
              ) : (
                <>
                  {practiceDataPoints &&
                    !practiceDataPoints[0]?.isPracticeAttempted && (
                      <div className='buttonDistribotion'>
                        {loaderSubmit ? (
                          <button
                            className='btn-blue btn-login d-block mb-5 '
                            key={Math.random()}
                            disabled>
                            <span className='RounAnimation'></span> Please
                            wait...
                          </button>
                        ) : (
                          <button
                            type='button'
                            className='btn-blue btn-login d-block mb-5'
                            disabled={disableButton?.length === 0}
                            onClick={() => handleSubmit()}>
                            <i className='fa-solid fa-paper-plane'></i>Submit
                          </button>
                        )}
                      </div>
                    )}
                </>
              )}
            </div>
          </div>
        </>
      ) : shimmerload === undefined ? (
        <ShimmerCategoryList items={2} categoryStyle='STYLE_SIX' />
      ) : (
        <div className='p-5 m-auto resourcessc'>
          <VickyComingSoon description={COMING_SOON[2]?.description} />
        </div>
      )}
    </>
  );
};

export default ExplorePractice;

import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { QuizOption } from "../../../redux/actions/APIs";
import { getShuffel } from "../../../utils/helper";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { isLoading } from "../../../redux/actions";
import VickyComingSoon from "../../widget/VickyComingSoon";
import { COMING_SOON } from "../../../utils/DataObjects";
import { ShimmerCategoryList } from "react-shimmer-effects";

const ExploreQuiz = ({ selectedCourse, areaId, resourceInnerData }) => {
  const { getLessonResources, selectedDim, dimension } = useSelector(
    (state) => state.collections
  );

  const [quiz, setQuiz] = useState([]);
  const [quizDataRecords, setquizDataRecords] = useState();

  const path = useParams();
  const dispatch = useDispatch();
  const [quizStep, setQuizStep] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);
  const [apiOption, setApiOption] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [result, setDataResult] = useState([]);
  const [quizDataPoints, setQuizDataPoints] = useState();
  const [shimmerload, setShimmerload] = useState(undefined);
  const [loaderSubmit, setLoaderSubmit] = useState();

  useEffect(() => {
    if (getLessonResources) {
      setApiOption([]);
      setquizDataRecords(getLessonResources && getLessonResources?.records[0]);
      setQuiz(
        getShuffel(getLessonResources && getLessonResources?.records[0].quiz)
      );
    }
  }, [getLessonResources]);

  useEffect(() => {
    if (quiz) {
      setShimmerload(quiz);
    }
  }, [quiz]);

  useEffect(() => {
    if (getLessonResources) {
      setQuizDataPoints(getLessonResources?.records);
      setQuizStep(0);
    }
  }, [getLessonResources]);

  const handleOption = (questionIndex, optionData) => {
    selectedQuestion[questionIndex] = optionData.id;
    let val = Object.values(selectedQuestion);
    setApiOption(val);
    var temp = { ...quiz };
    setQuiz(Object.entries(temp).map(([name, obj]) => ({ name, ...obj })));
  };

  let courseId = selectedCourse?.id;
  let activityId = selectedCourse?.activities[0].id;
  let moduleId = resourceInnerData?.resourceContent;

  const handleSubmit = () => {
    setLoaderSubmit(true);
    dispatch(isLoading(true));
    let rightCount = 0;
    let checkboxQuestionAttemptedCount = 0;
    let checkboxIds = [];
    for (let i = 0; i < quiz.length; i++) {
      let totalCorrectOption = 0;
      let questionSelectedOption = 0;
      let correctSelectedOption = 0;
      let isCheckboxQuestionAttempted = false;
      for (let j = 0; j < quiz[i].options.length; j++) {
        let opt = quiz[i].options;
        if (quiz[i]?.type == "RADIOQ") {
          if (i in selectedQuestion) {
            if (opt[j].id == selectedQuestion[i]) {
              quiz[i].options[j].isUserSelected = true;
            }
            // if (opt[j].id == selectedQuestion[i] && opt[j].isCorrect) {
            // 	rightCount++;
            // }
          }
        } else if (quiz[i]?.type == "CHECKBOXQ") {
          // if (opt[j].isCorrect) {
          // 	totalCorrectOption++;
          // }
          if (opt[j]?.isUserSelected) {
            checkboxIds.push(opt[j]?.id);
            // isCheckboxQuestionAttempted = true;
            // questionSelectedOption++;
            // if (opt[j]?.isUserSelected == opt[j].isCorrect) {
            // 	correctSelectedOption++;
            // }
          }
        }
      }
      // if (isCheckboxQuestionAttempted) {
      // 	checkboxQuestionAttemptedCount++;
      // 	if (
      // 		totalCorrectOption === questionSelectedOption &&
      // 		totalCorrectOption === correctSelectedOption
      // 	) {
      // 		rightCount++;
      // 	}
      // }
    }
    let responseBody = {
      optionIds: apiOption.toString(),
      isQuiz: true,
    };

    if (checkboxIds.length > 0) {
      let comma = "";
      if (responseBody.optionIds.length > 0) {
        comma = ",";
      }
      responseBody.optionIds =
        responseBody.optionIds + comma + checkboxIds.toString();
    }

    dispatch(
      QuizOption(
        path?.id,
        quiz[0]?.surveyId,
        areaId,
        courseId,
        activityId,
        responseBody,
        moduleId,
        dimension,
        selectedDim
      )
    );
    setSubmitted(true);
    //	let totalAttempted = Object.keys(selectedQuestion).length + checkboxQuestionAttemptedCount;
    //	let wrongCount = totalAttempted - rightCount;
    //	let total = quiz?.length;
    //	setDataResult({ rightCount, wrongCount, total, totalAttempted });
  };

  const handleNext = (isNext, type) => {
    let totalQuiz = quizDataRecords?.quiz?.length;
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

  //	when again open the quiz screen
  useEffect(() => {
    if (quiz) {
      let totalAttempted = 0;
      let totalCorrect = 0;
      let totalIncorrect = 0;
      let total = quiz?.length;
      quiz.map((val, key) => {
        let totalCheckboxCorrect = 0;
        let totalCheckboxSelected = 0;
        let isAllCorrect = true;
        if (val?.attempted) {
          totalAttempted++;
        }
        if (val?.type === "RADIOQ") {
          val?.options.map((vl, ky) => {
            if (vl?.isUserSelected && vl?.isCorrect) {
              totalCorrect++;
            }
          });
        }
        if (val?.type === "CHECKBOXQ") {
          val?.options.map((vl, ky) => {
            if (!vl?.isCorrect && vl?.isUserSelected) {
              isAllCorrect = false;
            }
            if (vl?.isCorrect) {
              totalCheckboxCorrect++;
              if (vl?.isUserSelected) {
                totalCheckboxSelected++;
              }
            }
            // if (vl?.isCorrect) {
            // 	totalCorrectOption++;
            // }
            // if (vl?.isUserSelected) {
            // 	correctSelectedOption++;
            // }
          });
          if (
            val?.attempted &&
            isAllCorrect &&
            totalCheckboxCorrect === totalCheckboxSelected &&
            val?.type === "CHECKBOXQ"
          ) {
            totalCorrect++;
          }
        }
        //	val?.options.map((vl, ky) => {
        // if (vl?.isUserSelected) {
        // 	totalAttempted++;
        // 	if (vl?.isCorrect) {
        // 		totalCorrect++;
        // 	} else {
        // 		totalIncorrect++;
        // 	}
        // }
        //	});
      });
      setDataResult({ totalCorrect, totalIncorrect, total, totalAttempted });
    }
  }, [quiz]);

  const handleCheckBoxOption = (questionIndex, optionIndex) => {
    let question = quiz[questionIndex];

    question["options"][optionIndex].isUserSelected =
      !question["options"][optionIndex].isUserSelected;
    quiz[questionIndex] = question;
  };

  return (
    <>
      {shimmerload?.length > 0 ? (
        <>
          {quizDataPoints && quizDataPoints[0]?.isQuizAttempted && (
            <div className="Quizresult">
              <h5 className="flex">
                Quiz Result:{" "}
                <span>
                  Points: {quizDataPoints[0]?.quizPoints}
                  <img alt="" />
                </span>
              </h5>
              <p>
                Total Questions: <b>{result?.total}</b>; Total Attempted:{" "}
                <b className="text-primary">{result?.totalAttempted}</b>; Total
                Correct Answers:{" "}
                <b className="text-success">{result?.totalCorrect}</b>
              </p>
            </div>
          )}

          <div className="w-100 Quizscreenheight" key={quizStep}>
            <div className="ScenecerelateddQuiz">
              {quiz && (
                <div className="signupType m-0 mb-3">
                  <h4 className="mb-3">
                    <span>
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
                  {quiz &&
                    quiz[quizStep]?.type == "RADIOQ" &&
                    quiz[quizStep]?.options?.map((opt, key) => (
                      <label
                        key={key}
                        className={`Selcheckbox ${
                          !quiz[quizStep]?.attempted === opt?.isUserSelected &&
                          opt?.isCorrect &&
                          " RightQuzAnswer"
                        } ${
                          opt?.isUserSelected &&
                          opt?.isUserSelected != opt?.isCorrect &&
                          "WrongQuzAnswer"
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
                        {isSubmitted || quizDataRecords?.isQuizAttempted ? (
                          <input
                            type="radio"
                            id="Public"
                            name={"Question" + quizStep}
                            disabled="true"
                            checked={
                              opt?.isUserSelected
                                ? opt?.isUserSelected == opt?.isCorrect
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
                        {isSubmitted &&
                          opt?.isUserSelected &&
                          !opt?.isCorrect && (
                            <span className="WrongQuizAns">
                              <i className="fa-solid fa-xmark m-0"></i>
                            </span>
                          )}
                        {opt?.isUserSelected &&
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
                        )}
                        <span className="checkmark"></span>
                        {/* {opt?.isCorrect + "E"} */}
                      </label>
                    ))}
                  {quiz && quiz[quizStep]?.type == "CHECKBOXQ" && (
                    <>
                      <div className="signupType checktypequestion m-0">
                        {quiz &&
                          quiz[quizStep]?.options?.map(
                            (option, optionIndex) => (
                              <label
                                className={`Selcheckbox ${
                                  quiz[quizStep]?.attempted &&
                                  option?.isUserSelected
                                    ? option?.isCorrect
                                      ? " RightQuzAnswer"
                                      : " WrongQuzAnswer"
                                    : quiz[quizStep]?.attempted &&
                                      option?.isCorrect
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
                                {isSubmitted ||
                                quizDataRecords?.isQuizAttempted ? (
                                  <input
                                    type="checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                    checked={
                                      option?.isUserSelected
                                        ? option?.isUserSelected ==
                                          option?.isCorrect
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
                                        quizStep,
                                        optionIndex
                                      )
                                    }
                                    defaultChecked={
                                      option?.isUserSelected ? true : false
                                    }
                                  ></input>
                                )}
                                {quiz[quizStep]?.attempted
                                  ? option?.isUserSelected &&
                                    !option?.isCorrect && (
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
              )}
            </div>
          </div>
          <div className="input-group full-Width-group basic_details_form pagebuttonStripEx">
            <div className="form-group BDsubmitbutton d-flex m-0">
              {quizStep > 0 && (
                <button
                  type="button"
                  className="btn-blue btn-login d-block mb-5 back_button"
                  onClick={() => handleNext(false, false, quiz[quizStep]?.type)}
                >
                  <i className="fa-solid fa-arrow-left mr-2"></i> Back
                </button>
              )}
              {quizStep + 1 < quizDataRecords?.quiz?.length ? (
                <div className="buttonDistribotion">
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block mb-5"
                    onClick={() =>
                      handleNext(true, false, quiz[quizStep]?.type)
                    }
                  >
                    Next<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                  </button>
                </div>
              ) : (
                <>
                  {quizDataPoints && !quizDataPoints[0]?.isQuizAttempted && (
                    <div className="buttonDistribotion">
                      {loaderSubmit ? (
                        <button
                          className="btn-blue btn-login d-block mb-5 "
                          key={Math.random()}
                          disabled
                        >
                          <span className="RounAnimation"></span> Please wait...
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn-blue btn-login d-block mb-5 "
                          disabled={apiOption?.length === 0}
                          onClick={() => handleSubmit()}
                        >
                          <i className="fa-solid fa-paper-plane"></i>Submit
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
        <ShimmerCategoryList items={2} categoryStyle="STYLE_SIX" />
      ) : (
        <div className="p-5 m-auto resourcessc">
          <VickyComingSoon description={COMING_SOON[2]?.description} />
        </div>
      )}
    </>
  );
};

export default ExploreQuiz;

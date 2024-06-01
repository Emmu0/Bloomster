import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { breadcrumb, resetMultiquizResponse } from "../../redux/actions";
import {
  getMultiQuiz,
  userAttemptedMultiSurvey,
} from "../../redux/actions/APIs";
import ProgressBar from "../../components/controls/ProgressBar";
import IntelligenceQuizResult from "./IntelligenceQuizResult";
import { ShimmerCategoryList } from "react-shimmer-effects";
import {
  getDimShuffle,
  getRoundNumber,
  getSequnceSort,
} from "../../utils/helper";

import { beginMultiQuiz } from "../../redux/actions";

const SmartMultiQuiz = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { multiQuizData, userAttemptedResponse, breadcrumbData, beginQuiz } =
    useSelector((state) => state.collections);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [totalAttempt, setTotalAttempt] = useState(0);
  const [quizData, setQuizData] = useState({});
  const [finalArray, setFinalArray] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [quizQuestionCount, setQuizQuestionCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [loadRespone, setLoadResponse] = useState(false);

  useEffect(() => {
    dispatch(resetMultiquizResponse());
    setLoadResponse(true);
    dispatch(getMultiQuiz());
    dispatch(beginMultiQuiz(false));
    dispatch(getMultiQuiz(params.id));
  }, [params.id]);

  useEffect(() => {
    if (userAttemptedResponse?.success) {
      setLoader(false);
      setTotalAttempt(0);
    }
  }, [userAttemptedResponse, loader, totalAttempt]);

  useEffect(() => {
    if (!breadcrumbData) {
      dispatch(
        breadcrumb({
          title: "Check Your Smarts",
          icon: image.multipleintellQuiz,
        })
      );
    }
  }, [breadcrumbData]);

  useEffect(() => {
    if (multiQuizData) {
      window.scrollTo(0, 0);
      setQuizData(getDimShuffle(multiQuizData?.records[0]?.questions));
      setLoadResponse(false);
    }
  }, [multiQuizData]);

  useEffect(() => {
    if (multiQuizData?.recordsCount) {
      setQuizQuestionCount(multiQuizData?.recordsCount - 1);
    }
  }, [multiQuizData?.recordsCount]);

  const selectOption = (event, currentQuestionIndex, selectedOptIndx) => {
    let isSelected = 2.5;

    let data = [...quizData];
    if (!isOptionSelected && data[currentQuestionIndex].attempted == false) {
      setTotalAttempt(totalAttempt + isSelected);
    }

    data[currentQuestionIndex].attempted = event.target.checked;

    data[currentQuestionIndex].options[selectedOptIndx].isUserSelected =
      event.target.checked;

    //make other options false
    data[currentQuestionIndex].options.forEach((option, index) => {
      if (index !== selectedOptIndx) {
        option.isUserSelected = false;
      }
    });

    setQuizData(data);
    setIsOptionSelected(true);
    let selectedFinalAnswer = [...finalArray];
    let selectedData = {
      surveyId: data[currentQuestionIndex].surveyId,
      quesId: data[currentQuestionIndex].id,
      optId: data[currentQuestionIndex].options[selectedOptIndx].id,
      point: quizData[currentQuestionIndex].options[selectedOptIndx].points,
    };
    selectedFinalAnswer[currentQuestionIndex] = selectedData;
    setFinalArray(selectedFinalAnswer);
  };

  const handleContinue = (nextQuestionIndex, type) => {
    let data = [...quizData];

    if (type === "Back") {
      window.scrollTo(0, 0);
      setIsOptionSelected(true);
      setSelectedQuestionIndex(nextQuestionIndex);
    } else {
      window.scrollTo(0, 0);
      setIsOptionSelected(false);
      setSelectedQuestionIndex(nextQuestionIndex);
    }
  };

  const handleSubmit = () => {
    setLoader(true);
    dispatch(userAttemptedMultiSurvey(params.id, finalArray));
  };
  let quizResponse = multiQuizData && multiQuizData?.records[0]?.multiintel;

  const handleQuiz = () => {
    dispatch(beginMultiQuiz(true));
    setTotalAttempt(0);
    setSelectedQuestionIndex(0);
    if (multiQuizData) {
      window.scrollTo(0, 0);
      setQuizData(getDimShuffle(multiQuizData?.records[0]?.questions));
    }
  };

  return (
    <>
      {userAttemptedResponse || (multiQuizData && quizResponse?.length > 0) ? (
        <IntelligenceQuizResult
          quizResponse={quizResponse}
          loadRespone={loadRespone}
        />
      ) : !multiQuizData || (!quizResponse && !loadRespone) ? (
        <div className='quizblok'>
          <ShimmerCategoryList items={5} categoryStyle='STYLE_SIX' />{" "}
        </div>
      ) : !loadRespone ? (
        quizResponse?.length === 0 && !beginQuiz ? (
          <>
            <div className='smartquizbanner'>
              <img src={image.howyousmartbanner} alt='' />
            </div>
            <div className='pt-3 mt-3 mb-3 beginAssessmentbtn'>
              <button
                onClick={() => handleQuiz()}
                className='btn-blue btn-login d-block  m-auto w-auto'>
                <i className='fa-solid fa-paper-plane mr-2'></i>Begin Assessment
              </button>
            </div>
          </>
        ) : (
          beginQuiz && (
            <div className='quizblok'>
              <ProgressBar value={totalAttempt} data={totalAttempt} />
              <span className='procompt'>
                {totalAttempt > 0 && getRoundNumber(totalAttempt)}{" "}
                {totalAttempt > 0 && "%"} {totalAttempt == 0 && "0%"}
              </span>
              <div className='smartquizwrapper'>
                <div className='smqzQueslist'>
                  <div className='signupType m-0 mb-3'>
                    <div key={Math.random()}>
                      <h3 className='mb-3'>
                        <span>
                          <i className='fa-light fa-clipboard-question mr-2'></i>
                        </span>{" "}
                        {quizData && quizData[selectedQuestionIndex]?.question}
                      </h3>
                      {quizData &&
                        quizData[selectedQuestionIndex]?.options &&
                        getSequnceSort(
                          quizData[selectedQuestionIndex]?.options
                        )?.map((opt, optInd) => (
                          <label
                            className={`Selcheckbox ${
                              quizData[selectedQuestionIndex].options[optInd]
                                .isUserSelected
                                ? "selActivelabel"
                                : ""
                            }`}
                            key={optInd}>
                            {opt?.question}

                            <input
                              type='radio'
                              id={opt.id}
                              value={opt?.id}
                              checked={opt?.isUserSelected}
                              onChange={(event) =>
                                selectOption(
                                  event,
                                  selectedQuestionIndex,
                                  optInd
                                )
                              }></input>

                            <span className='checkmark'></span>
                          </label>
                        ))}
                    </div>
                    <div className='form-group BDsubmitbutton d-flex mt-3'>
                      {selectedQuestionIndex > 0 && (
                        <button
                          type='button'
                          className='btn-blue btn-login d-block mb-5 ml-auto back_button'
                          onClick={() =>
                            handleContinue(selectedQuestionIndex - 1, "Back")
                          }>
                          <i className='fa-solid fa-arrow-left mr-2'></i> Back
                        </button>
                      )}

                      {quizData && quizData.length > 0 && (
                        <div className='w-100'>
                          {selectedQuestionIndex + 1 <
                            multiQuizData?.recordsCount && (
                            <div className='priceWrap p-0'>
                              <button
                                type='submit'
                                className='btn-blue btn-login d-block w-auto mb-5 ml-auto'
                                disabled={
                                  !quizData[selectedQuestionIndex]?.attempted
                                }
                                onClick={() => {
                                  handleContinue(
                                    selectedQuestionIndex + 1,
                                    "Next"
                                  );
                                }}>
                                Next
                                <i className='fa-solid fa-arrow-right ml-2 m-0'></i>
                              </button>
                            </div>
                          )}
                          {selectedQuestionIndex + 1 ===
                            multiQuizData?.recordsCount &&
                            (loader ? (
                              <div className='priceWrap p-0'>
                                <button
                                  className='btn-blue btn-login d-block w-auto mb-5 ml-auto'
                                  key={Math.random()}
                                  disabled>
                                  <span className='RounAnimation mr-1'></span>
                                  Please wait
                                </button>
                              </div>
                            ) : (
                              <div className='priceWrap p-0'>
                                <button
                                  type='submit'
                                  className='btn-blue btn-login d-block w-auto mb-5 ml-auto'
                                  onClick={() => {
                                    handleSubmit();
                                  }}
                                  disabled={
                                    !quizData[selectedQuestionIndex]?.attempted
                                  }>
                                  <i className='fa-solid fa-paper-plane mr-2'></i>
                                  Submit
                                </button>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <ShimmerCategoryList items={5} categoryStyle='STYLE_SIX' />
      )}
    </>
  );
};

export default SmartMultiQuiz;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as image from "../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { resetMultiquizResponse } from "../../../redux/actions";
import {
  getEmpathyQuiz,
  postAttemptedEmpathyQuiz,
} from "../../../redux/actions/APIs";
import ProgressBar from "../../../components/controls/ProgressBar";
import EmpathyResult from "./EmpathyResult";

import {
  getRoundNumber,
  getSequnceSort,
  getShuffel,
} from "../../../utils/helper";

import { beginMultiQuiz } from "../../../redux/actions";

const EmpathyQuizz = ({ selectedTab }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const { beginQuiz, empathyQuizData, userEmpathyResponse, loggedInUser } =
    useSelector((state) => state.collections);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [totalAttempt, setTotalAttempt] = useState(0);
  const [quizData, setQuizData] = useState({});
  const [finalArray, setFinalArray] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loadRespone, setLoadResponse] = useState(false);
  const surveyName = "Empathy Quiz Survey";
  const isProvider = loggedInUser?.role?.name === "PROVIDER" ? true : false;

  useEffect(() => {
    if (selectedTab === "empthyQuiz") {
      dispatch(getEmpathyQuiz());
      dispatch(getEmpathyQuiz(params.id, "Empathy Quiz Survey"));
    }
  }, [selectedTab]);

  useEffect(() => {
    dispatch(postAttemptedEmpathyQuiz());
    dispatch(resetMultiquizResponse());
    dispatch(beginMultiQuiz(false));
    setLoadResponse(true);
    dispatch(getEmpathyQuiz(params.id, "Empathy Quiz Survey"));
  }, [params.id]);

  useEffect(() => {
    if (userEmpathyResponse) {
      setLoader(false);
      setTotalAttempt(0);
      dispatch(getEmpathyQuiz());
      dispatch(getEmpathyQuiz(params.id, "Empathy Quiz Survey"));
    }
  }, [userEmpathyResponse]);

  useEffect(() => {
    if (empathyQuizData) {
      window.scrollTo(0, 0);
      let quizSequnce = getSequnceSort(empathyQuizData?.records);
      if (quizSequnce) {
        quizSequnce.map((vl) => getShuffel(vl.options));
        setQuizData(quizSequnce);
      }

      setLoadResponse(false);
    }
  }, [empathyQuizData]);

  const selectOption = (event, currentQuestionIndex, selectedOptIndx) => {
    let isSelected = 6.66;

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

    let selectedFinalAnswer = [...empathyQuizData?.records];
    selectedFinalAnswer[currentQuestionIndex].attempted = event.target.checked;
    selectedFinalAnswer[currentQuestionIndex].options[
      selectedOptIndx
    ].attempted = event.target.checked;
    selectedFinalAnswer[currentQuestionIndex].options[
      selectedOptIndx
    ].isCorrect = event.target.checked;
    selectedFinalAnswer[currentQuestionIndex].options.forEach(
      (option, index) => {
        if (index !== selectedOptIndx) {
          option.attempted = false;
          option.isCorrect = false;
        }
      }
    );
    setFinalArray(selectedFinalAnswer);
  };

  const handleContinue = (nextQuestionIndex, type) => {
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
    setLoadResponse(true);
    dispatch(postAttemptedEmpathyQuiz(params.id, isProvider, finalArray));
  };

  const handleQuiz = () => {
    dispatch(beginMultiQuiz(true));
    setTotalAttempt(0);
    setSelectedQuestionIndex(0);
    if (empathyQuizData) {
      window.scrollTo(0, 0);
      // let quizSequnce = getSequnceSort(empathyQuizData?.records);
      // quizSequnce.map((vl) => getShuffel(vl.options));
      // setQuizData(quizSequnce);
    }
  };

  return (
    <>
      {!beginQuiz && empathyQuizData?.records.length > 3 && (
        <>
          <div className="smartquizbanner">
            <img src={image.empathyquizbanner} alt="" />
          </div>
          <div className="pt-3 mt-3 mb-3 beginAssessmentbtn">
            <button
              onClick={() => handleQuiz()}
              className="btn-blue btn-login d-block  m-auto w-auto"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>Begin Quiz
            </button>
          </div>
        </>
      )}

      {empathyQuizData?.records.length === 3 || userEmpathyResponse ? (
        <EmpathyResult loadRespone={loadRespone} data={empathyQuizData} />
      ) : (
        beginQuiz && (
          <div className="quizblok">
            <ProgressBar value={totalAttempt} data={totalAttempt} />
            <span className="procompt">
              {totalAttempt > 0 && getRoundNumber(totalAttempt)}
              {totalAttempt > 0 && "%"} {totalAttempt == 0 && "0%"}
            </span>
            <div className="smartquizwrapper">
              <div className="smqzQueslist">
                <div className="signupType m-0 mb-3">
                  <div key={selectedQuestionIndex}>
                    <h3 className="mb-3">
                      <span>
                        <i className="fa-light fa-clipboard-question mr-2"></i>
                      </span>{" "}
                      {quizData && quizData[selectedQuestionIndex]?.question}
                    </h3>

                    {quizData &&
                      quizData[selectedQuestionIndex]?.options &&
                      quizData[selectedQuestionIndex]?.options?.map(
                        (opt, optInd) => (
                          <label
                            className={`Selcheckbox ${
                              quizData[selectedQuestionIndex].options[optInd]
                                .isUserSelected
                                ? "selActivelabel"
                                : ""
                            }`}
                            key={optInd + "_" + selectedQuestionIndex}
                          >
                            {opt?.question}

                            <input
                              type="radio"
                              id={opt.id}
                              value={opt?.id}
                              checked={opt?.isUserSelected}
                              onChange={(event) =>
                                selectOption(
                                  event,
                                  selectedQuestionIndex,
                                  optInd
                                )
                              }
                            ></input>

                            <span className="checkmark"></span>
                          </label>
                        )
                      )}
                  </div>
                  <div className="form-group BDsubmitbutton d-flex mt-3">
                    {selectedQuestionIndex > 0 && !loader && (
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 ml-auto back_button"
                        onClick={() =>
                          handleContinue(selectedQuestionIndex - 1, "Back")
                        }
                      >
                        <i className="fa-solid fa-arrow-left mr-2"></i> Back
                      </button>
                    )}

                    {quizData && quizData.length > 0 && (
                      <div className="w-100">
                        {selectedQuestionIndex + 1 <
                          empathyQuizData?.recordsCount && (
                          <div className="priceWrap p-0">
                            <button
                              type="submit"
                              className="btn-blue btn-login d-block w-auto mb-5 ml-auto"
                              disabled={
                                !quizData[selectedQuestionIndex]?.attempted
                              }
                              onClick={() => {
                                handleContinue(
                                  selectedQuestionIndex + 1,
                                  "Next"
                                );
                              }}
                            >
                              Next
                              <i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                            </button>
                          </div>
                        )}

                        {selectedQuestionIndex + 1 ===
                          empathyQuizData?.recordsCount &&
                          (loader ? (
                            <div className="priceWrap p-0">
                              <button
                                className="btn-blue btn-login d-block w-auto mb-5 ml-auto"
                                key={Math.random()}
                                disabled
                              >
                                <span className="RounAnimation mr-1"></span>
                                Please wait
                              </button>
                            </div>
                          ) : (
                            <div className="priceWrap p-0">
                              <button
                                type="submit"
                                className="btn-blue btn-login d-block w-auto mb-5 ml-auto"
                                onClick={() => {
                                  handleSubmit();
                                }}
                                disabled={
                                  !quizData[selectedQuestionIndex]?.attempted
                                }
                              >
                                <i className="fa-solid fa-paper-plane mr-2"></i>
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
      )}
    </>
  );
};

export default EmpathyQuizz;

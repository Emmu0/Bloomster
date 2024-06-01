import React, { useEffect, useState } from "react";
import GrowthProgress from "./GrowthProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getGrowthSurveyData,
  postGrowthSurveyData,
} from "../../../../redux/actions/APIs";
import * as image from "../../../../resources/images";
import { selectOptionData, setSurveyAss } from "../../../../redux/actions";
import { useParams } from "../../../../utils/Packages";
import { getSequnceSort } from "../../../../utils/helper";

const Survey = ({ courseData }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { growthSurveyData, growthAttemptedResponse, surveyAssOpen } =
    useSelector((state) => state.collections);
  const [quizData, setQuizData] = useState({});
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [totalAttempt, setTotalAttempt] = useState(0);
  const [finalArray, setFinalArray] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [loader, setLoader] = useState(false);

  let courseId = courseData?.records && courseData?.records[0]?.courseId;

  const handleQuiz = () => {
    dispatch(setSurveyAss(true));
  };

  useEffect(() => {
    dispatch(setSurveyAss(false));
    dispatch(
      getGrowthSurveyData(
        "512619db-ac66-481b-8ad2-569421f595d5",
        "PREGS",
        params.id
      )
    );
  }, [params.id]);

  useEffect(() => {
    if (
      growthSurveyData &&
      growthSurveyData?.records[0]?.preGrowthSurveyBehavior?.length > 0
    ) {
      setQuizData([
        ...growthSurveyData.records[0].preGrowthSurveyBehavior,
        ...(growthSurveyData.records[0].preGrowthSurveyKnowledge || []),
      ]);
    }
  }, [growthSurveyData]);

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

  const selectOption = (event, currentQuestionIndex, selectedOptIndx, opt) => {
    dispatch(selectOptionData(opt));
    let isSelected = 6.25;
    let data = [...quizData];
    if (!isOptionSelected && data[currentQuestionIndex].attempted == false) {
      setTotalAttempt(totalAttempt + isSelected);
    }

    data[currentQuestionIndex].attempted = event.target.checked;

    data[currentQuestionIndex].options[selectedOptIndx].isUserSelected =
      event.target.checked;

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

  useEffect(() => {
    if (growthAttemptedResponse?.success) {
      setLoader(false);
      dispatch(
        getGrowthSurveyData(
          "512619db-ac66-481b-8ad2-569421f595d5",
          "PREGS",
          params.id
        )
      );
    }
  }, [growthAttemptedResponse, loader]);

  const handleSubmit = () => {
    setLoader(true);
    if (finalArray) {
      dispatch(postGrowthSurveyData(params.id, finalArray));
    }
  };

  return (
    <React.Fragment>
      {surveyAssOpen ? (
        <div id='GrowthSurvey'>
          <GrowthProgress
            value={
              growthSurveyData?.records[0]?.progress
                ? growthSurveyData?.records[0]?.progress
                : totalAttempt
            }
            quizData={quizData}
            handleContinue={handleContinue}
            selectedQuestionIndex={selectedQuestionIndex}
          />

          <div className='pt-4 ps-5 pe-5 smqzQueslist'>
            <div className='topHeading ps-2'>
              <span>
                <img src={image.questionIcon} className='mr-2' alt='' />
                {quizData && quizData[selectedQuestionIndex]?.question}
              </span>
            </div>

            <div className='pt-3'>
              {quizData &&
                quizData[selectedQuestionIndex]?.options &&
                getSequnceSort(quizData[selectedQuestionIndex]?.options)?.map(
                  (opt, optInd) => (
                    <label class='Selcheckbox' key={optInd}>
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
                            optInd,
                            quizData[selectedQuestionIndex]
                          )
                        }></input>

                      <span className='checkmark'></span>
                    </label>
                  )
                )}
            </div>
            {quizData && quizData.length > 0 && (
              <div className='next_button p-10'>
                {selectedQuestionIndex + 1 < quizData?.length && (
                  <div className='buttonDistribotion '>
                    <button
                      type='submit'
                      data-toggle='modal'
                      data-target='#schoolactivity75'
                      className='btn-blue btn-login d-block mb-5 w-auto'
                      disabled={!quizData[selectedQuestionIndex]?.attempted}
                      onClick={() => {
                        handleContinue(selectedQuestionIndex + 1, "Next");
                      }}>
                      Next<i className='fa-solid fa-arrow-right m-0 ml-2'></i>
                    </button>
                  </div>
                )}

                {selectedQuestionIndex + 1 === quizData.length &&
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
                    !growthAttemptedResponse?.success &&
                    !growthSurveyData?.records[0]?.growthSurvey?.length > 0 && (
                      <div className='priceWrap p-0'>
                        <button
                          type='submit'
                          className='btn-blue btn-login d-block w-auto mb-5 ml-auto'
                          disabled={!quizData[selectedQuestionIndex]?.attempted}
                          onClick={() => {
                            handleSubmit();
                          }}>
                          <i className='fa-solid fa-paper-plane mr-2'></i>
                          Submit
                        </button>
                      </div>
                    )
                  ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div id='GrowthSurvey'>
          <div className='p-5'>
            <div className='topHeading d-flex align-items-center'>
              <span className='pe-2'>
                <i class='fa fa-lightbulb-o' aria-hidden='true'></i>
              </span>
              <h3>Introduction</h3>
            </div>
            <div className='introContent pt-4'>
              <p>
                The growth survey is an easy way for you to see how much you
                gain from each course. You will take the survey now before you
                begin lessons to see your starting placement and then again
                after the course to see your final placement. Then you will
                compare them side by side!
              </p>

              <p>
                All growth is good growth so no matter where you place on the
                chart, you should be proud! This is not a test, there are no
                wrong answers, answer honestly to how the questions relate to
                your life.
              </p>

              <p>
                The growth survey only takes a few minutes, click the button
                below to get started.
              </p>
            </div>

            <div className='pt-5 mt-5 beginAssessmentbtn'>
              <button
                className='btn-blue btn-login d-block  m-auto w-auto'
                onClick={() => handleQuiz()}>
                <i className='fa-solid fa-paper-plane mr-2'></i>Begin Survey
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Survey;

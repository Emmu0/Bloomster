import React from "react";
import * as image from "../../../../resources/images";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSequnceSort, kFormatter } from "../../../../utils/helper";

const KnowledgeSidebar = (props) => {
  const { seriesScenesData } = useSelector((state) => state.collections);

  const [seriesData, setSeriesData] = useState({});
  const loadDataOnlyOnce = () => {
    //	alert(props?.sceneIndex);
    setSeriesData(seriesScenesData?.records[props?.sceneIndex]);
    setRightAnswer("");
    setEarnPoint(10);
    showNuggetHelpText("");
  };

  // This function will called only once
  useEffect(() => {
    loadDataOnlyOnce();
  }, [props]);

  const [isReadMore, setReadMore] = useState(false);
  const [nuggetHelpText, showNuggetHelpText] = useState([]);
  const [earnPoint, setEarnPoint] = useState(10);
  const [isRightAnswer, setRightAnswer] = useState("");
  const [submitResponse, setSubmitResponse] = useState([]);
  const handleOption = (questionIndex, optionIndex, nugget, questionId) => {
    let question = seriesData?.surveyQuestionDtos[questionIndex];
    let invalidattempt = question.invalidAttempt;
    //	let temp = { ...seriesData };
    if (question?.options[optionIndex]?.isCorrect) {
      question.isCompleted = true;
      let points = parseInt(question?.points);
      let totalOptions = question?.options?.length;
      let result = 0;
      if (invalidattempt === 0) {
        //	alert(earnPoint);
        //	alert(points);
        result = points;
        setEarnPoint(earnPoint + points);
      } else {
        if (points > 0) {
          result = (points / totalOptions) * (totalOptions - invalidattempt);
          setEarnPoint(earnPoint + result);
        } else {
          result = points;
          setEarnPoint(earnPoint + points);
        }
      }
      for (let i = 0; i < totalOptions; i++) {
        if (i === optionIndex || question.options[i]?.isAttempted) {
        } else {
          nugget += "**7##8@@9**";
          nugget += question?.options[i]?.help;
        }
      }

      submitResponse.push({ points: result, questionId: questionId });

      setRightAnswer("Great! Keep it up");
    } else {
      seriesData["surveyQuestionDtos"][questionIndex].invalidAttempt =
        invalidattempt + 1;
      setRightAnswer("Attempt One More Time");
    }
    question["options"][optionIndex].isAttempted = true;
    seriesData["surveyQuestionDtos"][questionIndex] = question;
    showNuggetHelpText(nugget.split("**7##8@@9**"));
  };
  return (
    <React.Fragment>
      <div className='heading'>
        <h2 className='flex'>
          <span>
            {" "}
            <img src={image.Scenenavigation} className='' alt='...' />{" "}
            {seriesData?.nugget !== null ? "Nugget" : "Knowledge Check"}
          </span>
          <span>
            <span className='earnnoCoin'>
              {kFormatter(earnPoint) || earnPoint}
            </span>
            <img src={image.money_bag} alt='' />
          </span>
        </h2>
      </div>
      {seriesData?.nugget !== null && (
        <div className='LessionDtlOverview'>
          {/* <div className="OptionNUgResult">
						<div className="SmilyExp">
							<span className="smillybx">
								<i class="fa-regular fa-face-thinking"></i>
							</span>{" "}
							Attempt One More Time
						</div>
					</div> */}
          <div className='d-flex align-items-start'>
            <span>
              <i className='fa-light fa-lightbulb-exclamation-on mr-2 mt-2'></i>
            </span>
            <p>
              {seriesData?.nugget?.length > 50 ? (
                <div>
                  {isReadMore
                    ? seriesData?.nugget
                    : seriesData?.nugget?.slice(0, 50)}
                  <a href='#' onClick={() => setReadMore(!isReadMore)}>
                    {isReadMore ? "...Read Less" : "...Read More"}
                  </a>
                </div>
              ) : (
                <div>{" " + seriesData?.nugget} </div>
              )}
            </p>
          </div>
        </div>
      )}
      {seriesData?.nugget === null && (
        <>
          {nuggetHelpText && (
            <div className='LessionDtlOverview'>
              {isRightAnswer && (
                <div className='OptionNUgResult'>
                  <div className='SmilyExp'>
                    <span className='smillybx'>
                      <i className='fa-regular fa-face-thinking'></i>
                    </span>
                    {isRightAnswer}
                  </div>
                </div>
              )}
              {nuggetHelpText?.map((val, index) => (
                <div className='d-flex align-items-start'>
                  <span>
                    <i className='fa-light fa-lightbulb-exclamation-on mr-2 mt-2'></i>
                  </span>
                  <p>{val}</p>
                </div>
              ))}
            </div>
          )}
          <div className='ScenecerelateddQuiz'>
            {getSequnceSort(seriesData?.surveyQuestionDtos)?.map(
              (data, index) => (
                <div className='signupType mb-2' key={index}>
                  <h4 className='mb-2 d-flex'>
                    <span>
                      <img src={image.SceneQuestionicon} alt='' />
                      {/* <i class="fa-duotone fa-clipboard-question"></i> */}
                      {/* <i className="fa-solid fa-user"></i>
                                        <i className="fa-solid fa-thought-bubble mr-2"></i> */}
                    </span>
                    {data?.question}
                  </h4>
                  {getSequnceSort(data?.options)?.map((innerData, i) => (
                    <>
                      {data?.isCompleted ? (
                        <label className='Selcheckbox'>
                          {innerData?.question}
                          <input
                            type='radio'
                            id='Public'
                            name={"option" + index}
                            value='PUBLIC'
                            disabled
                            checked={innerData?.isCorrect}></input>
                          <span className='checkmark'></span>
                        </label>
                      ) : (
                        <>
                          {" "}
                          {index === 0 ||
                          seriesData["surveyQuestionDtos"][index - 1]
                            ?.isCompleted ? (
                            <label className='Selcheckbox'>
                              {innerData?.question}
                              <input
                                type='radio'
                                id='Public'
                                name={"option" + index}
                                value='PUBLIC'
                                onClick={() =>
                                  handleOption(
                                    index,
                                    i,
                                    innerData?.help,
                                    innerData?.id
                                  )
                                }></input>
                              <span className='checkmark'></span>
                            </label>
                          ) : (
                            <label className='Selcheckbox'>
                              {innerData?.question}
                              <input
                                type='radio'
                                id='Public'
                                name={"option" + index}
                                value='PUBLIC'
                                disabled></input>
                              <span className='checkmark'></span>
                            </label>
                          )}{" "}
                        </>
                      )}
                    </>
                  ))}
                </div>
              )
            )}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default KnowledgeSidebar;

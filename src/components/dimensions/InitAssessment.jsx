/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../resources/images";
import RangeSlider1 from "../controls/RangeSlider1";
import { updateAssessment } from "../../redux/actions/APIs";
import { getScore, isLoading, resetResponse } from "../../redux/actions";
import { getName, getProfileName, getUrlSegment } from "../../utils/helper";
import { PieChart, useHistory, useParams } from "../../utils/Packages";
import { PATHS } from "../../utils";
import { ASSESSMNET_DATA } from "../../utils/DataObjects";
import { SITEFNAME } from "../../utils/Messages";

const InitAssessment = ({ inactive, data }) => {
  const [assessmentData, setAssessmentData] = useState([]);

  const { studentScore, loading, updateResponse } = useSelector(
    (state) => state.collections
  );

  const history = useHistory();
  let dispatch = useDispatch();
  const path = useParams();

  var childDetails = [];

  const changePage = (direction) => {
    if (direction === "save") {
      dispatch(isLoading(true));
      dispatch(updateAssessment(data.initialAssessmentId, studentScore)).then(
        () => {
          setTimeout(() => {
            dispatch(resetResponse());
            if ("/" + getUrlSegment()[0] + "/" === PATHS.DIMENSION_STR) {
              window.location.assign(PATHS.DIMENSION_STR + data.id);
            } else {
              history.push(PATHS.DIMENSION_STR + data.id);
            }
          }, 5000);
        }
      );
    }
  };

  childDetails = data?.initialAssessmentScores;
  useEffect(() => {
    dispatch(getScore(childDetails));

    if (updateResponse) {
      dispatch(updateAssessment("reset"));
      dispatch(isLoading(false));
    }
  }, [loading, path, data]);

  useEffect(() => {
    setAssessmentData([]);
    let score = [];
    let mainData = [];
    if (studentScore) {
      studentScore.map((vl, ky) => {
        score.push({
          title: vl?.title,
          score: vl?.score,
        });
      });
      ASSESSMNET_DATA.map((value, key) => {
        if (score[key].title === value.key) {
          value.value.map((vl1, ky1) => {
            if (vl1?.score == score[key].score) {
              let stuName = vl1.text.replace(
                "[STUDENT]",
                "<b>" + getCapitalized(getName(data)) + "</b>"
              );
              mainData.push({
                title: stuName,
              });
              setAssessmentData(mainData);
            }
          });
        }
      });
    }
  }, [studentScore]);

  return (
    <>
      <div className='halfPagePOpup AssumptionPopup'>
        <div
          className='modal fade show d-block'
          id='exampleModalCenter'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <div className='heading'>
                  <h2>
                    <img src={image.information} className='mr-2' alt='...' />
                  {SITEFNAME.NAME}'s Assumptions
                  </h2>

                  {/* <button
                    type="button"
                    className="close"
                    onClick={() => close()}
                  >
                    &times;
                  </button> */}
                </div>
              </div>

              <div className='modal-body'>
                <div className='AssemptionWrap d-flex flex-wrap'>
                  <div className='Assemptionleftbar w-50'>
                    <h4 className='mb-2'>
                    {SITEFNAME.NAME} is assuming the following for{" "}
                      {getCapitalized(getName(data))}. Please edit any of these
                      assumptions to modify {getCapitalized(getName(data))}'s
                      starting profile.{" "}
                    </h4>
                    <h3 className='mb-4 flex'>
                      Starting Profile Assumptions <span>Score</span>
                    </h3>
                    <div className='Questions'>
                      {data?.initialAssessmentScores &&
                        data?.initialAssessmentScores.map((ques, index) => (
                          <div className='QuestionList d-flex' key={index}>
                            <div className='QuestionText'>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: ques.question.replace(
                                    "[YOURSTUDENT]",
                                    "<b>" +
                                      getCapitalized(getName(data)) +
                                      "</b>"
                                  ),
                                }}
                              />
                            </div>
                            <RangeSlider1 key={index} ques={ques} />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className='Assemptionrightbar w-50'>
                    <div className='learnerAssumtion'>
                      <div className='AssumptionProfile d-flex align-items-center mb-3'>
                        <div className='Asslearnerimage'>
                          <span>{getProfileName(data)}</span>
                        </div>
                        <div className='AlearnerProname ml-3'>
                          <h3>
                            <span>Learner:</span>{" "}
                            {getCapitalized(getName(data))}
                          </h3>
                          <p>
                            <span>Grade:</span>
                            {data?.level?.name}
                          </p>
                        </div>
                      </div>
                      <div className='position-relative'>
                        <h3
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'>
                          Starting Profile{" "}
                          <i className='fa-solid fa-angle-down'></i>{" "}
                        </h3>
                        <div className='DiemensionPiechart dropdown-menu'>
                          <PieChart
                            className=''
                            data={[
                              {
                                type: " Intellectual - (20%) ",
                                value: 20,
                                color: "#85b812",
                              },
                              {
                                type: " Physical - (20%) ",
                                value: 20,
                                color: "#1ec1d9",
                              },
                              {
                                type: " Social - (20%) ",
                                value: 20,
                                color: "#e9b72f",
                              },
                              {
                                type: " Emotional - (20%) ",
                                value: 20,
                                color: "#e46666",
                              },
                              {
                                type: " Spritiual - (20%) ",
                                value: 20,
                                color: "#a86adb",
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className='learnerprofilelist mt-3'>
                        <ul>
                          {assessmentData.map((val, key) => (
                            <li
                              key={key}
                              dangerouslySetInnerHTML={{ __html: val.title }}
                            />
                          ))}
                        </ul>
                      </div>
                      <div className='form-group BDsubmitbutton d-flex mt-3'>
                        <div className=''></div>
                      </div>
                    </div>
                  </div>
                  <div className='w-100 PopupConclusion flex'>
                    <p>
                      Click <span>'Continue'</span> if you agree with {SITEFNAME.NAME}'s
                      assumptions. {SITEFNAME.NAME} will create{" "}
                      {getCapitalized(getName(data))}'s Dimensional view
                      accordingly.
                    </p>

                    <button
                      type='button'
                      onClick={() => changePage("save")}
                      className='btn-blue btn-login d-block '>
                      Continue <i className='fa-solid fa-arrow-right ml-2'></i>
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`LeftbarPannel p-0 ${inactive ? "inactive" : ""}`}>
        <div className='heading d-flex'>
          <h2>
            <img src={image.information} alt='' className='mr-2' style={{}} />
            Initial Assessment
          </h2>
          <div className='VKprofile'>
            <div className='vkprofilename'>
              <a href='#' title='Leaner Name'>
                <i className='fa fa-user'></i>

                {getCapitalized(getName(data))}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitAssessment;

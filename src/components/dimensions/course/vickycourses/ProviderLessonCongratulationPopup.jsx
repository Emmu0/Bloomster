import { useEffect, useState } from "react";
import * as image from "../../../../resources/images";

import { useDispatch, useSelector } from "react-redux";

import { getSeriesQuiz } from "../../../../redux/actions/APIs";
import { useParams } from "react-router-dom";
import { getLastQuiz } from "../../../../redux/actions";
const ProviderLessonCongratulationsPopup = ({
  handleTabChange,
  handleCongratulationPopup,
  _redirectOnCoursePage,
  selectedTab,
  activityContentData,
  providerSceneView,
  providerQuizData,
}) => {
  const { seriesData, selectedDim, socialActivityData } = useSelector(
    (state) => state.collections
  );
  const [preload, setPreload] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const [totalQuizScore, setTotalQuizScore] = useState(0);
  const [yourQuizScore, setYourQuizScore] = useState(0);

  useEffect(() => {
    $("#showModal").modal({ backdrop: "static", keyboard: false });
  }, []);

  const handleGotoLesson = () => {
    dispatch(getSeriesQuiz());
    handleTabChange("Lessons");
    handleCongratulationPopup(false);
  };

  const handleGotoQuiz = () => {
    dispatch(getLastQuiz(1));
    handleTabChange("Quiz");
    handleCongratulationPopup(false);
  };

  useEffect(() => {
    const lessonQuizpoint = [];
    let tQuizScore = 0;
    if (providerQuizData) {
      providerQuizData?.map((val) => {
        tQuizScore += val?.points;
        if (val?.type === "RADIOQ") {
          val?.options?.map((val2) => {
            if (val2?.isCorrect === true && val2?.isUserSelected === true) {
              lessonQuizpoint.push(val.points);
            }
          });
        } else if (val?.type === "CHECKBOXQ") {
          const areAllSelectedOptionsCorrect = val.options
            .filter((val2) => val2.isUserSelected)
            .every((val2) => val2.isCorrect);

          if (areAllSelectedOptionsCorrect) {
            lessonQuizpoint.push(val.points);
          }
        }
        const sum = lessonQuizpoint.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );

        setTotalQuizScore(tQuizScore);
        setYourQuizScore(sum);
      });
    }
  }, [providerQuizData]);

  return (
    <>
      <div
        className="modal d-block congratulationPopup"
        id="showModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="Modal-header">
              <div className="modal-title flex h4 w-100">
                <div className="NuggetPopupTitle  w-100 flex">
                  <div className="NuggetVickyImage d-flex align-items-center">
                    <img
                      src={image.Week_Completion_Congrats}
                      alt=""
                      className="mr-2"
                    />
                    <h4> Congratulation </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center p-3 position-relative">
              <h4 className="mb-2 mt-2">Your scorecard for the section</h4>
              <div className="congconfeti">
                <img src={image.congratulation_confeti} alt="" />
              </div>
              <div className="congratesiocn">
                <img src={image.congratesicon} alt="" />
              </div>
              <>
                <div className="scrorecardWrap">
                  <ul className="scorecard_table">
                    <li>
                      <table className="w-100 scoringtable">
                        <tbody>
                          <tr>
                            <th>Section Activity</th>
                            <th>Total Score</th>
                            <th>Your Score</th>
                          </tr>

                          <tr>
                            <td>Lessons</td>
                            <td>
                              {activityContentData?.series?.scenes?.length}
                            </td>
                            <td>{providerSceneView?.length}</td>
                          </tr>
                          <tr>
                            <td>Quiz</td>
                            <td>{totalQuizScore}</td>
                            <td>{yourQuizScore}</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  </ul>
                </div>
              </>
            </div>

            {/***************** */}

            <div className="modal-footer p-2 flex">
              <button
                type="button"
                className="btn-blue btn-login d-block w-auto m-0"
                onClick={() => _redirectOnCoursePage()}
              >
                <i className="fa-regular fa-house mr-2"></i>Go to Course Home
              </button>
              {selectedTab === "Series" && (
                <button
                  type="button"
                  className="btn-blue btn-login d-block w-auto ml-auto"
                  onClick={() => handleGotoQuiz()}
                >
                  Go to Quiz<i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              )}
              {selectedTab === "Quiz" && (
                <button
                  type="button"
                  className="btn-blue btn-login d-block w-auto ml-auto"
                  onClick={() => handleGotoLesson()}
                >
                  Go to Lesson<i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderLessonCongratulationsPopup;

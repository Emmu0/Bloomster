import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { PATHS } from "../../../../utils";
import ReactTooltip from "react-tooltip";
import { textTrim } from "../../../../utils/helper";
import {
  resetResponse,
  beginMultiQuiz,
  resetMultiquizResponse,
  lockPopup,
  setSubscribeModal,
  parentLoginAction,
  showModalObj,
  courseSectionModal,
} from "../../../../redux/actions";
import RoundProgress from "../../../controls/RoundProgress";
import * as image from "../../../../resources/images";
import CongratulationCard from "../../../widget/CongratulationCard";
import LessonCongratulationsPopup from "../vickycourses/LessonCongratulationsPopup";
import { getSocialActivityDetail } from "../../../../redux/actions/APIs";

const WeekActivity = ({
  skills,
  skillId,
  activity,
  handlePopUp,
  keyvalue,
  course,
  viewReward,
  handleCloseSKillModel,
  _authenticate,
  // openScoreCard,
}) => {
  let skilId = skillId ? skillId : skills?.id;
  const {
    selectedDim,
    getSelectedUser,
    loggedInUser,
    defaultChildData,
    modalData,
    childNm,
    lockPopupData,
    setting_responseOK,
    courseSectionObj,
  } = useSelector((state) => state.collections);

  const history = useHistory();
  const param = useParams();
  const dispatch = useDispatch();

  // const [startPopup, setStartPopup] = useState(false);
  // const [type, setType] = useState();

  const [showCongratulationModel, setShowCongratulationModel] = useState(false);
  const [congratulationPopup, setCongratulationPopup] = useState(false);
  const [courseActivityId, setCourseActivityId] = useState([]);
  const [sectionData, setSectionData] = useState([]);

  const handleCongratulationPopup = (vl) => {
    setCongratulationPopup(vl);
    dispatch(getSocialActivityDetail());
  };

  const handleOpenpopup = (result, data, completion) => {
    if (completion > 0) {
      if (course?.isAcademic) {
        setCongratulationPopup(result);
      } else {
        setShowCongratulationModel(result);
      }
      setCourseActivityId(data);
    }
  };

  useEffect(() => {
    if (setting_responseOK?.success && courseSectionObj?.isCoursePage) {
      if (localStorage.getItem("sensitiveCourse")) {
        let sensitiveCourseArray = JSON.parse(
          localStorage.getItem("sensitiveCourse")
        );
        let userExists = false;
        sensitiveCourseArray?.map((value, key) => {
          if (
            value?.userid === defaultChildData?.id &&
            value?.id === courseSectionObj?.course?.id
          ) {
            userExists = true;
            return;
          }
        });
        if (!userExists) {
          let obj = {
            id: courseSectionObj?.course?.id,
            userid: defaultChildData?.id,
          };
          sensitiveCourseArray.push(obj);
          localStorage.setItem(
            "sensitiveCourse",
            JSON.stringify(sensitiveCourseArray)
          );
        }
      } else {
        localStorage.setItem(
          "sensitiveCourse",
          JSON.stringify([
            { id: courseSectionObj?.course?.id, userid: defaultChildData?.id },
          ])
        );
      }

      let course = { id: courseSectionObj?.course?.id };
      _redirectLesson(
        courseSectionObj?.activity,
        courseSectionObj?.type,
        [],
        course
      );
      dispatch(courseSectionModal());
    }
  }, [sectionData, setting_responseOK, courseSectionObj]);

  const [userSignInId, setuserSignInId] = useState("");

  useEffect(() => {
    if (param?.id) {
      let sensitiveCourseArray = JSON.parse(
        localStorage.getItem("sensitiveCourse")
      );
      setuserSignInId(
        sensitiveCourseArray?.find(
          (val) =>
            val?.userid === defaultChildData?.id && val?.id === course?.id
        )
      );
    }
  }, [param?.id]);

  const _redirectLesson = (activity, type, skillData, course) => {
    if (
      course?.isSensitive &&
      !course?.isEnrolled &&
      !userSignInId &&
      loggedInUser?.role?.name !== "PROVIDER"
    ) {
      dispatch(
        courseSectionModal({
          activity: activity,
          isCoursePage: type,
          course: course,
        })
      );
      setSectionData({ activity: activity, type: type, course: course });
      dispatch(showModalObj({ isCourse: true, isSection: true }));
      dispatch(parentLoginAction("verifyUser"));
      return;
    }
    let LessonDetail;
    if (activity?.isLesson) {
      LessonDetail = PATHS.LESSIONDETAIL_STR;
    } else {
      LessonDetail = PATHS.SOCIALCOURSE_STR;
    }
    dispatch(resetResponse());
    let childId;
    if (defaultChildData?.id) {
      childId = defaultChildData?.id;
    } else if (childNm?.id) {
      childId = childNm?.id;
    } else {
      childId = param?.id;
    }

    history.push({
      pathname:
        LessonDetail +
        childId +
        "/" +
        course?.id +
        "/" +
        skilId +
        "/" +
        activity?.id,
      state: {
        tab: type,
        dimension: selectedDim,
        isEnrolled: course?.isEnrolled,
        course: course,
      },
    });
  };

  const _redirectWeek = (courseObj, skillId) => {
    if (selectedDim) {
      courseObj.dimId = selectedDim?.key;
      courseObj.dimName = selectedDim?.value;
    }

    dispatch(lockPopup({ isLocked: activity?.isLocked, type: courseObj }));
    if (getSelectedUser?.isSubscriber) {
    } else {
      dispatch(setSubscribeModal(courseObj));
      if (handlePopUp) {
        handlePopUp(courseObj, skillId);
      }
    }
  };

  // useEffect(() => {
  //   if (course?.name === "Diversity Dynamics") {
  //     console.log("activity", activity);
  //     activity.isLocked = false;
  //   }
  // }, [course]);

  return (
    <>
      <div
        className={`Activity selfmadeActivity weeklyActivity ${
          course?.name
        }_Course_Sections ${course?.isEnrolled ? "cardLock" : "noCardLock"}   ${
          activity?.isLocked ? "lockedSection" : ""
        }`}
        data-id={`${course?.name}_Course_Section   `}>
        <div className={`ActivitycrdTitle activityCap`}>
          <h3 className='ActivyTitleName'>
            <div
              onClick={() => {
                !activity.isLocked
                  ? _redirectLesson(
                      activity,
                      course?.isAcademic ? "Lessons" : "Series",
                      // (selectedDim?.value === "Intellectual" &&
                      //     skills?.courses?.length === 2) ||
                      //     (loggedInUser.role.name === "PROVIDER" &&
                      //         activity?.isLesson)
                      //     ? "Lessons"
                      //     : "Series",
                      skills,
                      course
                    )
                  : _redirectWeek(course, skilId);
              }}
              className='pointer'>
              <span className='ThumnailTeacher'> M{keyvalue + 1} </span>{" "}
              <React.Fragment>
                {activity?.name?.length > 32 ? (
                  <ReactTooltip id={activity.name} className={"tooltip"}>
                    <p data-id={`${course?.name}_Course_activity_name`}>
                      {activity.name}
                    </p>
                  </ReactTooltip>
                ) : (
                  ""
                )}

                <div data-for={activity.name} data-event-off='' data-tip>
                  {textTrim(activity.name, 35)}
                </div>
              </React.Fragment>
            </div>
            {course?.isSensitive &&
              !course?.isEnrolled &&
              keyvalue === 0 &&
              !userSignInId &&
              loggedInUser?.role?.name !== "PROVIDER" && (
                <span className='Activitymenubar specialkeysec'>
                  <i className='fa-solid fa-key mr-2'></i>
                </span>
              )}
            <div className='dropdownlistmodl flex'>
              {!activity?.isLocked
                ? loggedInUser?.role?.name != "PROVIDER" && (
                    <div className='position-relative Coursecompprcent'>
                      <p className='text-right'>
                        <RoundProgress data={activity?.completion} />
                      </p>
                    </div>
                  )
                : ""}
              <div className='d-flex'>
                {activity?.isLocked && (
                  <div
                    className='Activitymenubar ml-2'
                    onClick={() => _redirectWeek(course, skilId)}>
                    <i className='fa-sharp fa-solid fa-lock'></i>
                  </div>
                )}
              </div>

              {!activity.isLocked ? (
                <>
                  <strong
                    className='Activitymenubar ml-2 pointer '
                    aria-haspopup='true'
                    aria-expanded='false'
                    id='barlistdropdown'
                    data-toggle='dropdown'>
                    <i className='fa-solid fa-bars'></i>
                  </strong>
                  <ul
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='barlistdropdown'>
                    {activity?.completion > 0 && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_Scorecard`}
                        onClick={() => {
                          !activity.isLocked
                            ? handleOpenpopup(
                                true,
                                [
                                  defaultChildData?.id,
                                  course?.id,
                                  activity?.id,
                                ],
                                activity?.completion
                              )
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          {" "}
                          <img src={image.Scorecardicon} alt='' />
                          Scorecard
                        </p>
                      </li>
                    )}

                    {activity.showReward && (
                      <li
                        onClick={() => viewReward(activity, false, keyvalue)}
                        data-id={`${course?.name}_Course_Reward`}>
                        <p className='pointer'>
                          <img src={image.rewardimg} alt='' />
                          Reward
                        </p>
                      </li>
                    )}

                    {/* {!activity.showReward &&
											<li
												onClick={() => _authenticate(course, "addReward", activity)}
												data-id={`${course?.name}_Course_Reward`}
											>
												<p className="pointer">
													<img src={image.rewardimg} alt="" />
													Add reward
												</p>
											</li>
										} */}

                    {/* {activity.showReward &&
											<li
												onClick={() => _authenticate(course, "viewReward", activity)}
												data-id={`${course?.name}_Course_Reward`}
											>
												<p className="pointer">
													<img src={image.rewardimg} alt="" />
													View reward
												</p>
											</li>
										} */}

                    {activity?.isLesson && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_Lesson`}
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(
                                activity,
                                "Lessons",
                                skills,
                                course
                              )
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          {" "}
                          <img src={image.lesson_icon} alt='' /> Lesson
                        </p>
                      </li>
                    )}

                    <li
                      className='pointer'
                      data-id={`${course?.name}_Course_Series`}
                      onClick={() => {
                        !activity.isLocked
                          ? _redirectLesson(activity, "Series", skills, course)
                          : _redirectWeek(course, skilId);
                      }}>
                      <p className='pointer'>
                        <img src={image.Seriesicon} alt='' /> Series
                      </p>
                    </li>

                    {activity?.isLesson && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_Quiz`}
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(activity, "Quiz", skills, course)
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          {" "}
                          <img src={image.book_open_reader} alt='' /> Quiz
                        </p>
                      </li>
                    )}

                    {activity?.isChar && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_Characters`}
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(
                                activity,
                                "Characters",
                                skills,
                                course
                              )
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          {" "}
                          <img src={image.wavehand} alt='' /> Characters
                        </p>
                      </li>
                    )}
                    {/* {activity?.completion > 0 && (
                  <li
                    className="pointer"
                    onClick={() => openScoreCard(activity, skills)}
                  >
                    <p>
                      {" "}
                      <img src={image.wavehand} alt="" /> Score card
                    </p>
                  </li>
                )} */}
                    {activity?.isRef && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_References`}
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(
                                activity,
                                "References",
                                skills,
                                course
                              )
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          <img src={image.SceneRefrence} alt='' />
                          References
                        </p>
                      </li>
                    )}
                    {activity?.isPersonalityType && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_Personality_Type`}
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(
                                activity,
                                "Personalities",
                                skills,
                                course
                              )
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          <img src={image.peronalitytypeicon} alt='' />
                          Personality Type
                        </p>
                      </li>
                    )}
                    {activity?.isMultiIntel && (
                      <li
                        className='pointer'
                        data-id={`${course?.name}_Course_Multiple_Intelligences`}
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(
                                activity,
                                "multiQuiz",
                                skills,
                                course
                              )
                            : _redirectWeek(course, skilId);
                          dispatch(beginMultiQuiz(false));
                          dispatch(resetMultiquizResponse());
                        }}>
                        <p>
                          <img src={image.multipleintellQuiz} alt='' />
                          Multiple Intelligences
                        </p>
                      </li>
                    )}
                    {activity?.isEq && (
                      <li
                        className='pointer'
                        onClick={() => {
                          !activity.isLocked
                            ? _redirectLesson(
                                activity,
                                "empthyQuiz",
                                skills,
                                course
                              )
                            : _redirectWeek(course, skilId);
                        }}>
                        <p>
                          <img src={image.empathyicon} alt='' />
                          Empathy Check
                        </p>
                      </li>
                    )}
                  </ul>
                </>
              ) : (
                <div
                  className='Activitymenubar ml-2 pointer '
                  onClick={() => _redirectWeek(course, skilId)}>
                  <i className='fa-solid fa-bars'></i>
                </div>
              )}
            </div>
          </h3>
        </div>
      </div>

      {showCongratulationModel && !course?.isAcademic && (
        <CongratulationCard
          courseActivityId={courseActivityId}
          handleOpenpopup={handleOpenpopup}
          isContinueButtonClick={false}
        />
      )}

      {congratulationPopup && course?.isAcademic && (
        <LessonCongratulationsPopup
          handleCongratulationPopup={handleCongratulationPopup}
          courseActivityId={courseActivityId}
        />
      )}
    </>
  );
};

export default WeekActivity;

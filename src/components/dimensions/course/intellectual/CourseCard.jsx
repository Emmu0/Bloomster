/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";

import {
  getImage,
  getSequnceSort,
  kFormatter,
  getCapitalized,
  getUrlSegment,
} from "../../../../utils/helper";
import ActivityCard from "../../activity/ActivityCard";
import {
  courseEnrollment,
  courseJourney,
  getCourseSummary,
  getIntelligences,
  getRewardData,
  getStartEnrollCourses,
} from "../../../../redux/actions/APIs";
import {
  dimDataStore,
  enrollModal,
  enrollmentPopup,
  parentLoginAction,
  parentToolsModal,
  resetResponse,
  sensitiveVideo,
  setCourseModal,
  setJourneyCoursModal,
  setShowMore,
  setSubscribeModal,
  showModal,
  showModalObj,
} from "../../../../redux/actions";
import RoundProgress from "../../../controls/RoundProgress";
import CourseRatings from "../../../controls/CourseRatings";
import {
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import DimensionGrowth from "../../../home/DimensionGrowth";
import SkillGrowth from "../../../home/SkillGrowth";
import { PATHS } from "../../../../utils";
import { ViewVideo } from "../../activity";
import { getCourseDetails } from "../../../../redux/actions/Home";

const CourseCard = ({
  skills,
  data,
  showAddActivity,
  showViewActivity,
  showActivity,
  dimensionName,
  handlePopUp,
  closeModal,
  viewCertificate,
  viewReward,
  handleCloseSKillModel,
  setRatingClass,
  journeySelected,
  courseData,
  isJourneyHalfScreen,
  recommanded,
}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const {
    loggedInUser,
    selectedDim,
    getSelectedUser,
    courseAbtToEnroll,
    journeyData,
    courseEnrollResponse,
    setting_responseOK,
    defaultChildData,
    dimension,
    enrollmentObj,
    dimDataObj,
    rewardData,
    response,
    openSettingModal,
    viewVideoModal,
    parentLogin,
    modalData,
    getParentToolResponses,
    childNm,
  } = useSelector((state) => state.collections);

  const [showWizad, setShowWizad] = useState(undefined);
  const [parentSection, setParentSection] = useState();
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [actvityData, setActivity] = useState();

  const _closeCourseDetailPage = () => {
    dispatch(getCourseDetails());
    dispatch(setCourseModal());
    dispatch(setShowMore());
  };

  useEffect(() => {
    if (courseEnrollResponse) {
      _closeCourseDetailPage();
      if (courseEnrollResponse?.recordId === data.id) {
        data.isEnrolled = true;
        dispatch(showModal({ isHighLIghtCourseId: data.id }));
        /*
                      history.replace({
                        ...history.location,
                        state: { courseId: courseEnrollResponse?.recordId },
                      });
                    */
        let activitySeq = getSequnceSort(data?.activities);
        if (data?.activities?.length > 0) {
          activitySeq?.map((vl, key) => {
            if (
              activitySeq[key]?.sequence === 1 &&
              activitySeq[key]?.completion >= 100
            ) {
              if (activitySeq[1]?.sequence === 2) {
                activitySeq[1].isLocked = false;
              }
            }
          });
        }
      }
      /*
                        let urlSegmetcorId = dimDataObj?.record?.id;
                        history.push({
                        pathname:
                          PATHS.DIMENSION_STR +
                          dimDataObj?.record?.dimId +
                          "/" +
                          defaultChildData?.id,
                        state: { courseId: urlSegmetcorId },
                        urlSegmetcorId,
                        });
                        */
    }
  }, [courseEnrollResponse]);

  useEffect(() => {
    if (!getParentToolResponses && modalData?.isHighLIghtCourseId) {
      history.replace({
        ...history.location,
        state: { courseId: modalData?.isHighLIghtCourseId },
      });
      dispatch(showModal());
    }
  }, [getParentToolResponses]);

  useEffect(() => {
    if (data.isEnrolled === true) {
      let activitySeq = getSequnceSort(data?.activities);
      if (data?.activities?.length > 0) {
        activitySeq?.map((vl, key) => {
          if (
            activitySeq[key]?.sequence === 2 &&
            activitySeq[key]?.completion >= 100
          ) {
            if (activitySeq[2]?.sequence === 3) {
              activitySeq[2].isLocked = false;
            }
          }
        });
      }
    }
  }, [data]);

  useEffect(() => {
    if (courseAbtToEnroll?.courseId && courseAbtToEnroll?.skillId) {
      runCourseEnroll(courseAbtToEnroll?.courseId, courseAbtToEnroll?.skillId);
    }
  }, [courseAbtToEnroll]);

  const [enrollData, setEnrollData] = useState([]);
  const [loader, setLoader] = useState(false);

  const runCourseEnroll = (record, skillId) => {
    dispatch(enrollmentPopup(record));
    if (record.isSensitive) {
      setEnrollData(record);
      dispatch(showModalObj({ isCourse: true }));
      dispatch(parentLoginAction("verifyUser"));
      return false;
    } else {
      let data = record;
      setEnrollData(record);
      if (record?.isAcademic) {
        if (data?.dimId) {
          data.dimension = { key: data.dimId, name: data.dimName };
        }
        setLoader(true);
        dispatch(
          courseEnrollment(
            defaultChildData?.id,
            data?.dimension,
            data?.skillId,
            data?.id,
            dimension,
            data?.dimension?.name,
            false,
            false
          )
        ).then(() => {
          dispatch(parentToolsModal({ isConfirmation: true, data: data }));
          setLoader(false);
          record.isEnrolled = true;
        });
      } else {
        dispatch(enrollModal(record));
      }
    }
  };

  useEffect(() => {
    if (setting_responseOK?.success && enrollmentObj) {
      dispatch(showModal());
      // dispatch(parentLoginAction());
      //     // dispatch(resetResponse());
      if (enrollmentObj?.isAcademic) {
        if (enrollmentObj?.dimId) {
          enrollmentObj.dimension = {
            key: enrollmentObj.dimId,
            name: enrollmentObj.dimName,
          };
        }
        setLoader(true);
        dispatch(
          courseEnrollment(
            defaultChildData?.id,
            enrollmentObj?.dimension,
            enrollmentObj?.skillId,
            enrollmentObj?.id,
            dimension,
            enrollmentObj?.dimension?.name,
            false,
            false
          )
        ).then(() => {
          dispatch(
            parentToolsModal({ isConfirmation: false, data: enrollmentObj })
          );
          dispatch(showModal({ type: "setting" }));
          setLoader(false);
          enrollmentObj.isEnrolled = true;
        });
      } else {
        dispatch(enrollModal(enrollmentObj));
      }
    }
  }, [setting_responseOK, enrollmentObj]);

  const handleEnrollment = (record, skillId) => {
    //	dispatch(dimDataStore({ record: record, skillId: skillId }))
    if (getSelectedUser?.isSubscriber) {
      if (isJourneyHalfScreen) {
        let courseIds = [];
        courseData?.map((value, index) => {
          let obj = {
            skillId: value?.skillId,
            courseId: value?.id,
            isEnrolled:
              value?.id === data?.id || value?.isEnrolled ? true : false,
          };
          courseIds.push(obj);
        });
        record.courseIds = courseIds;
        record.isJourneyModelEnroll = true;
        record.jEnroll = false;
      } else if (getUrlSegment()[0] === "journey") {
        let courseIds = [];
        courseData?.map((value, index) => {
          let obj = {
            skillId: value?.skillId,
            courseId: value?.id,
            isEnrolled:
              value?.id === data?.id || value?.isEnrolled ? true : false,
          };
          courseIds.push(obj);
        });
        record.journeyId = journeySelected;
        record.courseIds = courseIds;
        record.isJourneyEnroll = true;
      } else {
        record.dimId = record?.dimension?.key
          ? record?.dimension?.key
          : selectedDim?.key;
        record.dimName = record?.dimension?.value
          ? record?.dimension?.value
          : selectedDim?.value;
      }

      runCourseEnroll(record, skillId);
    } else {
      dispatch(setSubscribeModal(record));
      if (handlePopUp) {
        handlePopUp(record, skillId);
      }
    }
  };

  const courseDetail = (obj, skills) => {
    if (obj?.id !== journeyData?.recordId) {
      dispatch(courseJourney(obj?.id));
    }

    if (!selectedDim.key) {
      obj.dimension = data.dimension;
    } else {
      obj.dimension = selectedDim;
    }
    obj.skillId = skills?.id;
    obj.skillName = skills?.name;
    dispatch(setCourseModal(obj));
  };

  const [selectedLevel, setSelectedLevel] = useState({
    level: "1",
    course: [],
  });

  useEffect(() => {
    setSelectedLevel({
      level: "1",
      course: data,
    });
  }, [data]);

  let isComingSoon = false;
  if (selectedLevel?.course?.activities?.length === 0) {
    isComingSoon = true;
  }

  useEffect(() => {
    if (setting_responseOK?.success && parentSection) {
      dispatch(resetResponse());
      dispatch(showModal());
      let corseObj = selectedCourse;
      let obj = {};
      let isCourse = true;
      if (corseObj) {
        if (actvityData) {
          corseObj = actvityData;
          isCourse = false;
        }
        obj = {
          data: corseObj,
          userId: defaultChildData?.id,
          courseId: selectedCourse?.id,
          activityId: actvityData?.id,
          type: parentSection === "viewReward" ? "view" : "",
          wk: actvityData?.sequence - 1,
        };
      }

      if (parentSection === "Tips") {
        dispatch(parentToolsModal({ isTips: true, data: selectedCourse }));
      } else if (parentSection === "Insights") {
        dispatch(parentToolsModal({ isInsights: true, data: selectedCourse }));
      } else if (parentSection === "learned") {
        dispatch(
          getIntelligences(params?.id, selectedCourse?.evalCourseSurveyId)
        ).then(() => {
          dispatch(
            parentToolsModal({ isParentDiscover: true, data: selectedCourse })
          );
        });
      } else if (parentSection === "addReward") {
        dispatch(parentToolsModal({ isShowReward: true, data: obj }));
      } else if (parentSection === "viewReward") {
        dispatch(
          parentToolsModal({
            isShowReward: true,
            data: obj,
            isViewReward: true,
          })
        );
        dispatch(
          getRewardData(defaultChildData?.id, corseObj?.rewardId, isCourse)
        );
      } else if (parentSection === "sensitiveCourse") {
        dispatch(
          parentToolsModal({ isSensitiveCourse: true, data: selectedCourse })
        );
      }

      setParentSection("");
      dispatch(parentLoginAction());
    }
  }, [setting_responseOK]);

  useEffect(() => {
    if (
      response?.records &&
      selectedLevel?.course?.id === response?.records[0]?.courseId
    ) {
      selectedLevel.course.showReward = true;
    }
    /*
      if (response?.success) {
        dispatch(getStartEnrollCourses(defaultChildData?.id));
      }
      */
    /*
                if (response && selectedCourse && actvityData) {
                selectedCourse?.activities?.map((val) => {
                  if (val?.id === actvityData?.id) {
                  val.showReward = true;
                  }
                })
                }
                */
  }, [response]);

  const handleParentToolTips = (course, value) => {
    if (loggedInUser?.role?.name === "PROVIDER") {
      dispatch(parentToolsModal({ isTips: true, data: course }));
      return;
    }
    if (course?.isEnrolled) {
      _authenticate(course, value);
    } else {
      dispatch(parentToolsModal({ isTips: true, data: course }));
    }
  };

  const handleParentToolInsights = (course, value) => {
    if (loggedInUser?.role?.name === "PROVIDER") {
      dispatch(parentToolsModal({ isInsights: true, data: course }));
      return;
    }
    if (course?.isEnrolled) {
      _authenticate(course, value);
    } else {
      dispatch(parentToolsModal({ isInsights: true, data: course }));
    }
  };

  const handleParentToolDiscover = (course, value) => {
    if (loggedInUser?.role?.name === "PROVIDER") {
      dispatch(getIntelligences(params?.id, course?.evalCourseSurveyId)).then(
        () => {
          dispatch(parentToolsModal({ isParentDiscover: true, data: course }));
        }
      );
      return;
    }
    if (course?.completion >= 100) {
      _authenticate(course, value);
    } else {
      dispatch(parentToolsModal({ isDiscover: true, data: course }));
    }
  };

  const handleParentToolAddViewReward = (course, value, reward) => {
    if (course?.points === course?.tpoints) {
      return;
    }
    if (value === "viewReward" && (reward?.isExpired || reward?.isCompleted)) {
      viewReward(data, true, reward);
      return;
    }
    if (
      value === "addReward" &&
      !reward?.isExpired &&
      !reward?.isCompleted &&
      reward?.id
    ) {
      return;
    }
    if (course?.isEnrolled) {
      _authenticate(course, value, reward);
    } else {
      dispatch(parentToolsModal({ isAddViewReward: true, data: course }));
    }
  };

  const handleParentToolSensitiveCourse = (course, value) => {
    if (loggedInUser?.role?.name === "PROVIDER") {
      dispatch(parentToolsModal({ isSensitiveCourse: true, data: course }));
      return;
    }
    if (course?.isSensitive) {
      _authenticate(course, value);
    }
  };

  const _authenticate = (course, value, reward) => {
    course.rewardId = reward?.id ? reward?.id : "";
    setParentSection(value);
    setSelectedCourse(course);
    dispatch(parentLoginAction("verifyUser"));
  };

  const journeyModal = (course) => {
    course.skills = skills;
    dispatch(courseJourney(course?.id));
    dispatch(parentToolsModal({ isJourneyScreen: true, data: course }));
  };

  const handleCourseReviewModal = (course) => {
    dispatch(getCourseSummary(params?.id, course?.id));
    dispatch(parentToolsModal({ isCourseReview: true, data: course }));
  };

  let JourneyName = "";
  if (data?.journey?.name) {
    JourneyName = data?.journey?.name;
  } else if (skills?.name && loggedInUser?.role?.name === "PROVIDER") {
    JourneyName = skills?.name;
  }

  let SkillNm = "";
  if (data?.skills?.name) {
    SkillNm = data?.skills?.name;
  } else if (skills?.name) {
    SkillNm = skills?.name;
  }

  // const showDimensionPopup = (result, data, b, c) => {
  // 	setinfoPopupData(data);
  //     setShowDimInfo(result);
  // }

  const [infoPopupData, setinfoPopupData] = useState({});
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [selectedDimension, setSelectedDimension] = useState([]);
  const [dimenName, setDimenName] = useState("");

  const handleShowInfoPopup = (result, name, data, filter, selectedLevel) => {
    setSelectedDimension(filter?.dimName);
    setShowInfoPopup(result);
    setinfoPopupData({
      name: name,
      description: skills.description,
      alert: skills?.alert,
      courses: data?.courseCount,
    });
    setDimenName(
      selectedLevel?.course?.dimension?.name
        ? selectedLevel?.course?.dimension?.name
        : selectedLevel?.course?.dimension?.value
    );

    document.body.scrollTop = 0;
    if (document.getElementById("learnerEnrollCourse")) {
      document.getElementById("learnerEnrollCourse").scrollTop = 0;
    }
    document.documentElement.scrollTop = 0;
    if (document.getElementById("pathwayinfopopup")) {
      document
        .getElementById("pathwayinfopopup")
        .classList.add("PathwaySelLit");
    }
  };

  const setShowSkillPopup = (result) => {
    setShowInfoPopup(result);
  };

  const [selectedCourseCard, setSelectedCourseCard] = useState(null);

  useEffect(() => {
    if (selectedLevel?.course.id) {
      setSelectedCourseCard(selectedLevel?.course.id);

      const timeoutId = setTimeout(() => {
        setSelectedCourseCard(null);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedLevel, location]);

  useEffect(() => {
    if (!parentLogin) {
      setParentSection();
      setSelectedCourse([]);
    }
  }, [parentLogin]);
  {
    /* Growth Survey 10 May 2024 */
  }
  const redirectTab = (activity, type) => {
    let LessonDetail;
    if (activity?.course?.isLesson) {
      LessonDetail = PATHS.LESSIONDETAIL_STR;
    } else {
      LessonDetail = PATHS.SOCIALCOURSE_STR;
    }

    let childId;
    if (defaultChildData?.id) {
      childId = defaultChildData?.id;
    } else if (childNm?.id) {
      childId = childNm?.id;
    } else {
      childId = params?.id;
    }
    history.push({
      pathname:
        LessonDetail +
        childId +
        "/" +
        activity?.course?.id +
        "/" +
        activity?.course?.skillId +
        "/" +
        activity?.course?.activities[0]?.id,
      state: {
        tab: type,
        dimension: activity?.course?.dimension,
        isEnrolled: activity?.course?.isEnrolled,
        course: activity?.course,
      },
    });
  };

  return (
    <>
      <div
        id={`myCourse${selectedLevel?.course.id}`}
        // className={`${
        //   selectedCourseCard === location?.state?.courseId
        //     ? "highlightCard"
        //     : ""
        // }`}
      >
        <div className='gridSection'>
          <div
            className={`JourneyCoursecard newCourseCard ${
              selectedCourseCard === location?.state?.courseId ||
              location?.courseData?.includes(selectedCourseCard)
                ? "highlightCard"
                : ""
            }`}
            data-id={`${selectedLevel?.course?.name}_Course_Card`}>
            <div className='GridCardTitle'>
              <h3>
                <div
                  className={`pointer cardSubtitles [${selectedLevel?.course?.name}]_Course_Name`}
                  data-id={`${selectedLevel?.course?.name}_Course_Name`}
                  onClick={() => courseDetail(selectedLevel?.course, skills)}>
                  <img src={image.mortarboard} alt='' className='mr-2' />
                  {selectedLevel?.course?.name}
                  <span>
                    <i className='fa-solid fa-up-right-from-square'></i>
                  </span>
                </div>
                {selectedLevel?.course?.rank && recommanded && (
                  <span className='recommandedribon'>Recommended</span>
                )}
                <div className='pricewrap w-auto p-0 Course_Enroll_btn'>
                  {(selectedLevel?.course?.type === "VICKY" &&
                    ["Math", "English"].includes(skills?.name) &&
                    selectedLevel?.course?.isEnrolled === true &&
                    selectedLevel?.course?.pctCompleted > 0) ||
                  ["Science", "Social Studies"].includes(skills?.name) ? (
                    <div className='priceWrap enrolledBtn pt-0'>
                      <img src={image.enrolledicon} className='mr-1' alt='' />{" "}
                      Enrolled
                    </div>
                  ) : (
                    ""
                  )}

                  {!isComingSoon &&
                    selectedLevel?.course?.type === "PROVIDER" &&
                    loggedInUser?.role?.name !== "PROVIDER" &&
                    getUrlSegment()[0] !== "pathway" && (
                      <>
                        {!selectedLevel?.course?.isEnrolled ? (
                          !loader ? (
                            <button
                              className={`btn-blue btn-login d-block w-100 m-0 back_button`}
                              data-id={`${selectedLevel?.course?.name}_Course_Enroll`}
                              onClick={() =>
                                handleEnrollment(
                                  selectedLevel?.course,
                                  skills?.id
                                )
                              }>
                              <span key={skills?.id}>
                                <i className='fa-solid fa-paper-plane mr-2'></i>
                              </span>{" "}
                              Enroll
                            </button>
                          ) : (
                            <div className='buttonDistribotion justify-content-end'>
                              <button
                                className='btn-blue btn-login d-block ml-auto mr-2  w-auto'
                                disabled>
                                <span className='RounAnimation mr-1'></span>{" "}
                                Please Wait...
                              </button>
                            </div>
                          )
                        ) : (
                          <div className='priceWrap enrolledBtn pt-0'>
                            <img
                              src={image.enrolledicon}
                              className='mr-1'
                              alt=''
                            />{" "}
                            Enrolled
                          </div>
                        )}
                      </>
                    )}
                  {getUrlSegment()[0] === "pathway" &&
                    selectedLevel?.course?.isEnrolled && (
                      <div className='priceWrap enrolledBtn pt-0'>
                        <img src={image.enrolledicon} className='mr-1' alt='' />{" "}
                        Enrolled
                      </div>
                    )}
                </div>
              </h3>
            </div>

            <div className='Gridcard SocialGridcard border-0 mt-0'>
              <div className='Gridsocialsec'>
                <div className='GridiamgeCard'>
                  <div className='Gridimage position-relative courseCardImg'>
                    <img
                      alt=''
                      src={getImage(selectedLevel?.course?.imageUrl)}
                      data-id={`${selectedLevel?.course?.name}_Course_image`}
                    />

                    {selectedLevel?.course &&
                      selectedLevel?.course?.isreporting === false && (
                        <span className='notinterestedribon'>
                          Not Interested
                        </span>
                      )}
                  </div>
                  <div
                    className={`ratepopupp position-relative [${selectedLevel?.course?.name}]_Course_Rating`}
                    data-id={`${selectedLevel?.course?.name}_Course_Rating`}>
                    {!isComingSoon &&
                      selectedLevel?.course?.type === "PROVIDER" && (
                        <CourseRatings
                          setRatingClass={setRatingClass}
                          data={selectedLevel?.course}
                        />
                      )}
                  </div>
                </div>
              </div>

              <div className='GridDetails'>
                {/*=================== Start Parent Tools and Learner Center========================== */}
                <div className=''>
                  {!isComingSoon &&
                    (selectedLevel?.course?.isSensitive ||
                      selectedLevel?.course?.sensitivevideourl ||
                      selectedLevel?.course?.collabEmail ||
                      selectedLevel?.course?.evalCourseSurveyId) && (
                      <div className='coursecardnav dropdownlistmodl flex'>
                        <ul className='w-60 d-flex'>
                          {
                            <li
                              className={`pointer [${selectedLevel?.course?.name}]_Parent_Tools`}
                              data-id={`${selectedLevel?.course?.name}_Course_Parent_Tool`}>
                              <strong
                                aria-haspopup='true'
                                aria-expanded='false'
                                className=''
                                id='Parenttools'
                                data-toggle='dropdown'>
                                {" "}
                                <img src={image.gensettings} alt='' />
                                Parent Tools
                                <span>
                                  <i
                                    class='fa fa-angle-down ps-1 fa-sm'
                                    aria-hidden='true'></i>
                                </span>
                              </strong>
                              <ul
                                className='dropdown-menu dropdown-menu-end'
                                aria-labelledby='Parenttools'>
                                <li
                                  id='RewardDropdwn'
                                  data-toggle='dropdown'
                                  className={`rewardDrpDwnd  ${
                                    selectedLevel?.course?.points ===
                                      selectedLevel?.course?.tpoints &&
                                    selectedLevel?.course?.rewards?.length === 0
                                      ? "diabledAddrewrd p-0"
                                      : ""
                                  }`}>
                                  <p
                                    className={`flex  ${
                                      selectedLevel?.course?.points ===
                                        selectedLevel?.course?.tpoints &&
                                      selectedLevel?.course?.rewards?.length ===
                                        0
                                        ? "AdRedisabled"
                                        : ""
                                    }`}>
                                    <span>
                                      <img
                                        src={image.rewardimg}
                                        alt=''
                                        className='ParentToolRewardImage'
                                      />
                                      Reward{" "}
                                    </span>
                                    {selectedLevel?.course?.points ===
                                      selectedLevel?.course?.tpoints &&
                                    selectedLevel?.course?.rewards?.length ===
                                      0 ? (
                                      <></>
                                    ) : (
                                      <span>
                                        <i className='fa-solid fa-angle-right'></i>
                                      </span>
                                    )}
                                  </p>
                                  <div class='aboutProgdesc'>
                                    <div class='Courseporogresspopup'>
                                      <p class='m-0'>
                                        You cannot add a reward as your child
                                        has completed the course
                                      </p>
                                    </div>
                                  </div>
                                  {
                                    <ul className='dropdown-menu dropdown-menu-end newrewardDropdwn'>
                                      {selectedLevel?.course?.points !==
                                        selectedLevel?.course?.tpoints && (
                                        <li
                                          onMouseUp={(e) => {
                                            e.preventDefault();
                                            handleParentToolAddViewReward(
                                              selectedLevel?.course,
                                              "addReward",
                                              selectedLevel?.course?.rewards[0]
                                            );
                                          }}
                                          className={`${
                                            !selectedLevel?.course?.rewards[0]
                                              ?.isCompleted &&
                                            !selectedLevel?.course?.rewards[0]
                                              ?.isExpired &&
                                            selectedLevel?.course?.rewards
                                              ?.length > 0
                                              ? "AdRedisabled"
                                              : ""
                                          }`}>
                                          <p className='flex'>
                                            <span className='flexone'>
                                              <i className='fa-solid fa-circle-plus mr-2'></i>
                                              Add reward{" "}
                                            </span>
                                            {!selectedLevel?.course
                                              ?.isEnrolled && (
                                              <span>
                                                <i className='fa-sharp fa-solid fa-lock ml-2'></i>
                                              </span>
                                            )}
                                            {selectedLevel?.course
                                              ?.isEnrolled && (
                                              <span className='Activitymenubar ml-2'>
                                                <i className='fa-solid fa-key'></i>
                                              </span>
                                            )}
                                          </p>
                                        </li>
                                      )}
                                      <div class='aboutProgdesc'>
                                        <div class='Courseporogresspopup'>
                                          <p class='m-0'>
                                            You can add a reward once your child
                                            achieves current reward target
                                          </p>
                                        </div>
                                      </div>
                                      {getSequnceSort(
                                        selectedLevel?.course?.rewards
                                      )?.map((reward, index) => (
                                        <li>
                                          <p
                                            className='text-left flex align-items-center'
                                            onMouseUp={(e) => {
                                              e.preventDefault();
                                              handleParentToolAddViewReward(
                                                selectedLevel?.course,
                                                "viewReward",
                                                reward
                                              );
                                            }}>
                                            <p className='flex w-100'>
                                              <span className='flexone'>
                                                <span className='jumponscene'>
                                                  R{index + 1}
                                                </span>
                                                <span
                                                  className={`juweeknametext ${
                                                    reward?.isExpired ? "" : ""
                                                  } ${
                                                    reward?.isCompleted
                                                      ? ""
                                                      : ""
                                                  }`}>
                                                  {getCapitalized(
                                                    reward?.title
                                                  )}
                                                </span>
                                              </span>
                                              <span>
                                                {reward?.isExpired ? (
                                                  <img
                                                    src={image.rewardexpire}
                                                  />
                                                ) : (
                                                  ""
                                                )}
                                                {reward?.isCompleted ? (
                                                  <img
                                                    src={image.newcheckicon}
                                                  />
                                                ) : (
                                                  ""
                                                )}
                                              </span>
                                            </p>
                                            {!reward?.isExpired &&
                                              !reward?.isCompleted && (
                                                <span className='Activitymenubar ml-2'>
                                                  {/* <i className="fa-solid fa-key"></i> */}
                                                  <i class='fa-light fa-pencil active'></i>
                                                </span>
                                              )}
                                          </p>
                                        </li>
                                      ))}
                                      {/* <li>
																			<p className="text-left flex align-items-center">
																				<p className="flexone">
																					<span className="jumponscene">
																						R1
																					</span>
																					<span className="juweeknametext">
																						Reward 1 Title
																					</span>
																				</p>
																				<span className="Activitymenubar ml-2">
																					<i className="fa-solid fa-key"></i>
																				</span>
																			</p>
																		</li>
																		<li>
																			<p className="text-left d-flex align-items-center">
																				<span className="jumponscene">R2</span>
																				<span className="juweeknametext Green_reward">
																					Reward 2 Title
																				</span>
																			</p>
																		</li>
																		<li>
																			<p className="text-left d-flex align-items-center">
																				<span className="jumponscene">R3</span>
																				<span className="juweeknametext Red_reward">
																					Reward 3 Title
																				</span>
																			</p>
																		</li> */}
                                    </ul>
                                  }
                                </li>
                                {selectedLevel?.course?.isSensitive &&
                                  selectedLevel?.course?.sensitivevideourl && (
                                    <li
                                      onClick={() =>
                                        handleParentToolSensitiveCourse(
                                          selectedLevel?.course,
                                          "sensitiveCourse"
                                        )
                                      }
                                      className={`pointer`}>
                                      <p className='flex'>
                                        <span>
                                          <img
                                            src={image.handleSenstive}
                                            alt=''
                                          />
                                          Additional guidance for parents
                                        </span>
                                        {loggedInUser?.role?.name !==
                                          "PROVIDER" && (
                                          <span>
                                            <i className='fa-solid fa-key'></i>
                                          </span>
                                        )}
                                      </p>
                                    </li>
                                  )}
                                {/* {selectedLevel?.course?.support && (
																	<li
																		className={`pointer [${selectedLevel?.course?.name}]_Parent_support`}
																		onClick={() =>
																			handleParentToolTips(
																				selectedLevel?.course,
																				"Tips"
																			)
																		}
																	>
																		<p className="flex">
																			<span>
																				<img src={image.Supporticon} alt="" />
																				Tips to better support{" "}
																				{getCapitalized(
																					defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName
																				)}
																			</span>
																			{!selectedLevel?.course?.isEnrolled && loggedInUser?.role?.name != "PROVIDER" ? (
																				<span>
																					<i className="fa-sharp fa-solid fa-lock ml-2"></i>
																				</span>
																			) : (
																				""
																			)}
																		</p>
																	</li>
																)} */}
                                {selectedLevel?.course?.collabEmail && (
                                  <li
                                    className={`pointer [${selectedLevel?.course?.name}]_Parent_Collabration`}
                                    data-id={`${selectedLevel?.course?.name}_Course_Parent_Collabration`}
                                    onClick={() =>
                                      handleParentToolInsights(
                                        selectedLevel?.course,
                                        "Insights"
                                      )
                                    }>
                                    <p className='flex'>
                                      <span>
                                        <img
                                          src={image.collabrationicon}
                                          alt=''
                                        />
                                        Insights for connecting with{" "}
                                        {getCapitalized(
                                          defaultChildData?.firstName
                                            ? defaultChildData?.firstName
                                            : loggedInUser?.firstName
                                        )}
                                      </span>
                                      {loggedInUser?.role?.name !=
                                        "PROVIDER" && (
                                        <>
                                          {!selectedLevel?.course
                                            ?.isEnrolled && (
                                            <span>
                                              <i className='fa-sharp fa-solid fa-lock ml-2'></i>
                                            </span>
                                          )}
                                          {selectedLevel?.course
                                            ?.isEnrolled && (
                                            <span>
                                              <i className='fa-solid fa-key'></i>
                                            </span>
                                          )}
                                        </>
                                      )}
                                    </p>
                                  </li>
                                )}
                                {selectedLevel?.course?.evalCourseSurveyId && (
                                  <li
                                    onClick={() =>
                                      handleParentToolDiscover(
                                        selectedLevel?.course,
                                        "learned"
                                      )
                                    }
                                    className={`pointer [${selectedLevel?.course?.name}]_Skill_Evaluation`}
                                    data-id={`${selectedLevel?.course?.name}_Course_Skill_Evaluation`}>
                                    <p className='flex'>
                                      <span>
                                        <img src={image.evaluateicon} alt='' />
                                        See what{" "}
                                        {getCapitalized(
                                          defaultChildData?.firstName
                                            ? defaultChildData?.firstName
                                            : loggedInUser?.firstName
                                        )}{" "}
                                        learned
                                      </span>

                                      {selectedLevel?.course?.completion <
                                        100 &&
                                        loggedInUser?.role?.name !=
                                          "PROVIDER" && (
                                          <span>
                                            <i className='fa-sharp fa-solid fa-lock ml-2'></i>
                                          </span>
                                        )}
                                      {selectedLevel?.course?.completion >=
                                        100 &&
                                        loggedInUser?.role?.name !=
                                          "PROVIDER" && (
                                          <span>
                                            <i className='fa-solid fa-key'></i>
                                          </span>
                                        )}
                                    </p>
                                  </li>
                                )}
                                {/* {loggedInUser?.role?.name !== "PROVIDER" &&
																	!selectedLevel?.course?.showReward && (
																		<li
																			onClick={() =>
																				handleParentToolAddViewReward(
																					selectedLevel?.course,
																					"addReward"
																				)
																			}
																			className={`pointer [${selectedLevel?.course?.name}]_Skill_Evaluation`}
																			data-id={`${selectedLevel?.course?.name}_Course_Skill_Evaluation`}
																		>
																			<p className="flex">
																				<span>
																					<img src={image.rewardimg} alt="" />
																					Add reward{" "}
																				</span>
																				{!selectedLevel?.course?.isEnrolled && (
																					<span>
																						<i className="fa-sharp fa-solid fa-lock ml-2"></i>
																					</span>
																				)}
																				{selectedLevel?.course?.isEnrolled && (
																					<span className="Activitymenubar ml-2">
																						<i className="fa-solid fa-key"></i>
																					</span>
																				)}
																			</p>
																		</li>
																	)} */}
                                {/* {loggedInUser?.role?.name !== "PROVIDER" &&
																	selectedLevel?.course?.showReward && (
																		<li
																			onClick={() =>
																				handleParentToolAddViewReward(
																					selectedLevel?.course,
																					"viewReward"
																				)
																			}
																			className={`pointer [${selectedLevel?.course?.name}]_Skill_Evaluation`}
																			data-id={`${selectedLevel?.course?.name}_Course_Skill_Evaluation`}
																		>
																			<p className="flex">
																				<span className="flexone">
																					<img src={image.rewardimg} alt="" />
																					View / update reward{" "}
																				</span>
																				<i className="fa-solid fa-key"></i>
																			</p>
																		</li>
																	)} */}
                                {/* {!selectedLevel?.course?.showReward ? (
																<li
																	onClick={() =>
																		handleParentToolAddViewReward(
																			selectedLevel?.course,
																			"addReward"
																		)
																	}
																	className={`pointer [${selectedLevel?.course?.name}]_Skill_Evaluation`}
																	data-id={`${selectedLevel?.course?.name}_Course_Skill_Evaluation`}
																>
																	<p className="flex">
																		<span>
																			<img src={image.rewardimg} alt="" />
																			Add reward{" "}
																		</span>
																		{!selectedLevel?.course?.isEnrolled &&
																			loggedInUser?.role?.name !=
																			"PROVIDER" && (
																				<span>
																					<i className="fa-sharp fa-solid fa-lock ml-2"></i>
																				</span>
																			)}
																		{selectedLevel?.course?.isEnrolled &&
																			loggedInUser?.role?.name !=
																			"PROVIDER" && (
																				<span className="Activitymenubar ml-2">
																					<i className="fa-solid fa-key"></i>
																				</span>
																			)}
																	</p>
																</li>
															) : (
																<li
																	onClick={() =>
																		handleParentToolAddViewReward(
																			selectedLevel?.course,
																			"viewReward"
																		)
																	}
																	className={`pointer [${selectedLevel?.course?.name}]_Skill_Evaluation`}
																	data-id={`${selectedLevel?.course?.name}_Course_Skill_Evaluation`}
																>
																	<p className="flex">
																		<span className="flexone">
																			<img src={image.rewardimg} alt="" />
																			View / update reward{" "}
																		</span>
																		<i className="fa-solid fa-key"></i>
																	</p>
																</li>
															)} */}
                              </ul>
                            </li>
                          }
                          {loggedInUser?.role?.name != "PROVIDER" && (
                            <li
                              className={`pointer [${selectedLevel?.course?.name}]_learning_center`}
                              data-id={`${selectedLevel?.course?.name}_Course_learning_center`}>
                              <strong
                                aria-haspopup='true'
                                aria-expanded='false'
                                id='lernercennter'
                                className=''
                                data-toggle='dropdown'>
                                <img
                                  src={image.Electiclistiocn}
                                  className='electriIcon'
                                  alt=''
                                />
                                Learner Center
                                <span>
                                  <i
                                    class='fa fa-angle-down ps-1 fa-sm'
                                    aria-hidden='true'></i>
                                </span>
                              </strong>
                              {console.log("selectedLevel", selectedLevel)}
                              <ul
                                className='dropdown-menu dropdown-menu-end'
                                aria-labelledby='lernercennter'>
                                <li
                                  className={`pointer _Course Summary`}
                                  onClick={() =>
                                    redirectTab(selectedLevel, "growth")
                                  }>
                                  <p>
                                    <img src={image.growthSurveyIcon} alt='' />
                                    Growth Survey
                                  </p>
                                </li>
                                <li
                                  className={`pointer [${selectedLevel?.course?.name}]_Course Summary`}
                                  data-id={`${selectedLevel?.course?.name}_Course_Summary`}
                                  onClick={() =>
                                    handleCourseReviewModal(
                                      selectedLevel?.course
                                    )
                                  }>
                                  <p>
                                    <img src={image.reviewicon} alt='' />
                                    Course Progress
                                  </p>
                                </li>
                                {selectedLevel?.course?.completion >= 100 && (
                                  <li
                                    className={`pointer [${selectedLevel?.course?.name}]_Course_Certificate`}
                                    data-id={`${selectedLevel?.course?.name}_Course_Certificate`}
                                    onClick={() =>
                                      viewCertificate(true, data, skills)
                                    }>
                                    <p>
                                      <img src={image.certificate} alt='' />
                                      Course Certificate
                                    </p>
                                  </li>
                                )}
                              </ul>
                            </li>
                          )}
                        </ul>
                        {loggedInUser?.role?.name != "PROVIDER" && (
                          <ul className='w-30 flex justify-content-end'>
                            {data.showReward && data.isEnrolled && (
                              <li
                                // className={`pointer [${selectedLevel?.course?.name}]_Course_Reward`}
                                // data-id={`${selectedLevel?.course?.name}_Course_Reward`}
                                // onClick={() => viewReward(data, true)}
                                aria-haspopup='true'
                                aria-expanded='false'
                                className='pointer'
                                id='regularrewardwn'
                                data-toggle='dropdown'>
                                <span className='earnnoCoin mr-1'>
                                  {selectedLevel?.course?.rewards?.length}
                                </span>
                                <img src={image.rewardimg} alt='' />
                                <ul
                                  className='dropdown-menu dropdown-menu-end newrewardDropdwn'
                                  aria-labelledby='regularrewardwn'>
                                  {selectedLevel?.course?.rewards?.map(
                                    (reward, index) => (
                                      <li>
                                        <p className='text-left flex align-items-center'>
                                          <p
                                            className='flex w-100'
                                            onMouseUp={() =>
                                              viewReward(data, true, reward)
                                            }>
                                            <span className='flexone'>
                                              <span className='jumponscene'>
                                                R{index + 1}
                                              </span>
                                              <span className='juweeknametext'>
                                                {getCapitalized(reward?.title)}
                                              </span>
                                            </span>
                                            <span>
                                              {reward?.isExpired ? (
                                                <img src={image.rewardexpire} />
                                              ) : (
                                                ""
                                              )}
                                              {reward?.isCompleted ? (
                                                <img src={image.newcheckicon} />
                                              ) : (
                                                ""
                                              )}
                                            </span>
                                          </p>
                                        </p>
                                      </li>
                                    )
                                  )}
                                  {/* <li>
																		<p className="text-left flex align-items-center">
																			<p className="flexone">
																				<span className="jumponscene">R2</span>
																				<span className="juweeknametext">
																					Reward 2 Title
																				</span>
																			</p>
																		</p>
																	</li> */}
                                </ul>
                              </li>
                            )}
                            <li>
                              <span className='Score_points'>
                                <span className='score_bedge'>
                                  <span className='earnnoCoin'>
                                    {data.badges}
                                  </span>
                                  <img src={image.score_badge} alt='' />
                                </span>
                                {loggedInUser?.role?.name != "PROVIDER" && (
                                  <>
                                    <span className='earnnoCoin'>
                                      {kFormatter(
                                        selectedLevel?.course?.points
                                      ) || selectedLevel?.course?.points}
                                    </span>
                                    <img src={image.money_bag} alt='' />
                                  </>
                                )}
                              </span>
                            </li>
                          </ul>
                        )}
                      </div>
                    )}
                </div>
                {/*=================== End ParentTool and Learner Center========================== */}
                <div className='gridActivity'>
                  <div className='activityListitems mt-2'>
                    {selectedLevel?.course?.activities &&
                    selectedLevel?.course?.activities?.length > 0 ? (
                      getSequnceSort(selectedLevel?.course?.activities).map(
                        (val, key) => {
                          return (
                            <React.Fragment key={key}>
                              <ActivityCard
                                skills={skills}
                                showActivity={showActivity}
                                data={val}
                                keyvalue={key}
                                courseData={selectedLevel?.course}
                                showAddActivity={showAddActivity}
                                showViewActivity={showViewActivity}
                                showWizad={showWizad}
                                onClickOutside={() => {
                                  setShowWizad(undefined);
                                }}
                                dimensionName={dimensionName}
                                viewActivityFlag={true}
                                handlePopUp={handlePopUp}
                                closeModal={closeModal}
                                viewReward={viewReward}
                                handleCloseSKillModel={handleCloseSKillModel}
                                _authenticate={_authenticate}
                                // openScoreCard={openScoreCard}
                              />
                            </React.Fragment>
                          );
                        }
                      )
                    ) : (
                      <div className='w-100 commingsoonActivity'>
                        <div className='activityListitems'>
                          <div className='Activity selfmadeActivity weeklyActivity cardLock Course_Sections'>
                            <div className='ActivitycrdTitle activityCap'>
                              <h3 className='ActivyTitleName'>
                                <div className='pointer'>
                                  <span className='ThumnailTeacher'>S1</span>
                                  <div>Coming Soon...</div>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className='Activity selfmadeActivity weeklyActivity cardLock Course_Sections'>
                            <div className='ActivitycrdTitle activityCap'>
                              <h3 className='ActivyTitleName'>
                                <div className='pointer'>
                                  <span className='ThumnailTeacher'>S2</span>
                                  <div>Coming Soon...</div>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className='Activity selfmadeActivity weeklyActivity cardLock Course_Sections'>
                            <div className='ActivitycrdTitle activityCap'>
                              <h3 className='ActivyTitleName'>
                                <div className='pointer'>
                                  <span className='ThumnailTeacher'>S3</span>
                                  <div>Coming Soon...</div>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className='Activity selfmadeActivity weeklyActivity cardLock Course_Sections'>
                            <div className='ActivitycrdTitle activityCap'>
                              <h3 className='ActivyTitleName'>
                                <div className='pointer'>
                                  <span className='ThumnailTeacher'>S4</span>
                                  <div>Coming Soon...</div>
                                </div>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*=================== Start SKill and Info icon and Progress Bar========================== */}
                <div className='GridCardTitle border-0'>
                  <h3>
                    {/* <div onClick={() => journeyModal(selectedLevel?.course)}>
											<p className="p-0 pointer">
												<span className="SCourseLevel levelnevimg">
													<img
														src={image.sCourseleve3lcon}
														className="mr-2"
														alt=""
													/>
													{selectedLevel?.course?.isAcademic
														? "Course"
														: "Level"}{" "}
													{selectedLevel?.course?.level}{" "}
													{selectedLevel?.course?.totalLevel > 1
														? "of " + selectedLevel?.course?.totalLevel
														: ""}
												</span>
												<span className="cardSubtitles">
													<i className="fa-solid fa-up-right-from-square"></i>
												</span>
											</p>
										</div> */}
                    <div>
                      <p className='p-0'>
                        <span className='flex'>
                          <img
                            src={image.CourseTitleIcon}
                            className='mr-2'
                            alt=''
                          />
                          {SkillNm}
                          <img
                            src={image.chat_icon}
                            className='ml-2 chat_icon mt-0 pointer'
                            // onClick={() =>
                            // 	showDimensionPopup(true, selectedLevel, skills, SkillNm

                            // 	)
                            //   }
                            onClick={() =>
                              handleShowInfoPopup(
                                true,
                                SkillNm,
                                skills,
                                {
                                  dimId: selectedLevel?.course?.dimension?.key,
                                  dimName:
                                    selectedLevel?.course?.dimension?.name,
                                },
                                selectedLevel
                              )
                            }
                          />
                        </span>
                      </p>
                    </div>
                    {!isComingSoon &&
                      loggedInUser?.role?.name != "PROVIDER" && (
                        <p className='p-0 Coursecompprcent position-relative text-right coursecomptcertifie'>
                          <span>
                            <RoundProgress
                              data={
                                selectedLevel?.course?.type === "VICKY"
                                  ? selectedLevel?.course?.pctCompleted
                                  : selectedLevel?.course?.completion
                              }
                              type={true}
                              className='m-1'
                            />
                          </span>
                        </p>
                      )}
                  </h3>
                </div>
                {/*=================== Start SKill and Info icon and Progress Bar========================== */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showInfoPopup && (
        <SkillGrowth
          data={infoPopupData}
          dimName={dimenName}
          setShowSkillPopup={setShowSkillPopup}
        />
      )}
    </>
  );
};

export default CourseCard;

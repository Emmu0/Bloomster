import React, { useState } from "react";
import * as image from "../../resources/images";
import {
  getCapitalized,
  getDimIcon,
  getProfileName,
  getRankSort,
  getSequnceSort,
  isDimension,
  showRoundValue,
  textTrim,
} from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import CourseProgress from "./CourseProgress";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { setCourseModal } from "../../redux/actions";
import CourseComingSoon from "./CourseComingSoon";
import {
  getCourseDetails,
  getDashboard,
  showOverallModal,
} from "../../redux/actions/Home";
import CongratulationCard from "../widget/CongratulationCard";
import LessonCongratulationsPopup from "../dimensions/course/vickycourses/LessonCongratulationsPopup";
import ShowOverallProgressPopup from "./ShowOverallProgressPopup";
import ShareCoursePopup from "./ShareCoursePopup";
import {
  getSocialActivityDetail,
  getStartEnrollCourses,
  popularCourses,
} from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import { useHistory } from "../../utils/Packages";

const Sidebar = ({ data, toggleState, handleToggleState }) => {
  const {
    dimViewObj,
    skillProg,
    popularCourseObj,
    dashboardData,
    courseDetails,
  } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    // dispatch(getPopularCourse());
  }, []);
  const {
    selectedDim,
    defaultChildData,
    startEnrollCourses,
    courseEnrollResponse,
  } = useSelector((state) => state.collections);

  const { dimSkillObj } = useSelector((state) => state.home);
  const [showProgress, setShowProgress] = useState(true);
  const [numberOfCourses, setNumberOfCourses] = useState(1);

  const showEnrolledCourse = (result) => {
    setShowProgress(!showProgress);
  };
  let totalProgress = 0;
  let numDimensions = 0;

  dashboardData &&
    dashboardData?.dimensions &&
    dashboardData.dimensions.forEach((vl, ky) => {
      totalProgress += vl.progress;
      numDimensions++;
    });

  const avgValue = totalProgress / numDimensions + 20;

  useEffect(() => {
    if (courseDetails) {
      //  console.log('courseDetails : ', courseDetails);
      courseDetails.totalLevel = totalLevel;
      dispatch(setCourseModal(courseDetails));
    }
  }, [courseDetails]);

  const [totalLevel, setTotalLevels] = useState(0);

  const handleExploreClick = (courseId, totalLevel) => {
    setTotalLevels(totalLevel);
    dispatch(getCourseDetails(courseId, defaultChildData.id));
  };

  const [showCongratulationModel, setShowCongratulationModel] = useState(false);
  const [congratulationPopup, setCongratulationPopup] = useState(false);
  const [courseDetail, setCourseDetail] = useState([]);

  const [courseActivityId, setCourseActivityId] = useState([]);

  const handleCongratulationPopup = (vl) => {
    setCongratulationPopup(vl);
  };

  const getDataFromCourseProgress = (result, data, course) => {
    setCourseDetail(course);
    setCourseActivityId(data);
    dispatch(getSocialActivityDetail());
    if (course?.isAcademic) {
      setCongratulationPopup(result);
    } else {
      setShowCongratulationModel(result);
    }
  };

  const showOverall = () => {
    dispatch(showOverallModal(true));
  };

  const [showOverallProgressPopup, setShowOverallProgressPopup] =
    useState(false);
  const [shareCoursePopup, setShareCoursePopup] = useState();

  const handleShowOverallProgressPopup = (result) => {
    setShowOverallProgressPopup(result);
  };

  const handleSharePopup = (value) => {
    setShareCoursePopup(value);
    if (defaultChildData?.id) {
      // dispatch(getStartEnrollCourses(defaultChildData?.id));
      dispatch(getDashboard(defaultChildData?.id));
    }
  };

  const [showDimCourse, setShowDimCourse] = useState(false);
  const [dimCourse, setDimCourse] = useState([]);
  let [enrollCount, setEnrollCount] = useState(0);

  useEffect(() => {
    setShowDimCourse(false);
    getSequnceSort(dashboardData?.dimensions)?.map((dimension, key) => {
      if (dimension?.id === selectedDim?.key) {
        setDimCourse(dimension?.skills);
        let counter = 0;
        dimension?.skills?.map((course, index) => {
          if (
            course?.completion > 0 ||
            (course?.isEnrolled && course?.type !== "VICKY")
          ) {
            counter++;
          }
        });
        setEnrollCount(counter);
      }
    });
  }, [selectedDim?.key]);

  const handleShowDimCourse = (result) => {
    setShowDimCourse(result);
  };

  useEffect(() => {
    if (courseEnrollResponse && defaultChildData?.id) {
      dispatch(popularCourses(defaultChildData?.id));
    }
  }, [courseEnrollResponse]);

  const [showAllPopularCourses, setShowAllPopularCourses] = useState(false);

  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    if (popularCourseObj) {
      const allCourses =
        popularCourseObj.records.length > 0 &&
        getSequnceSort(popularCourseObj.records).flatMap((dimension) => {
          const skills = getSequnceSort(dimension.skills);
          if (skills.length > 0) {
            return (
              skills.length > 0 &&
              skills.flatMap((skill) => {
                const courses = getSequnceSort(skill.courses);

                if (courses) {
                  return courses.map((course) => {
                    const modifiedCourse = {
                      ...course,
                      skills: {
                        id: skill.id,
                        name: skill.name,
                      },
                      dimension: {
                        key: dimension?.id,
                        value: dimension?.name,
                      },
                    };

                    return modifiedCourse;
                  });
                } else {
                  return [];
                }
              })
            );
          } else {
            return [];
          }
        });

      setCourseList(getRankSort(allCourses));
    }
  }, [popularCourseObj]);

  const visiblePopularCourses = showAllPopularCourses
    ? courseList &&
      courseList?.length > 0 &&
      courseList.slice(0, 5 * numberOfCourses)
    : courseList &&
      courseList?.length > 0 &&
      courseList.slice(0, 5 * numberOfCourses);
  const totlecal = showRoundValue(dashboardData?.progress) * 0.3;

  const showLearnerPlan = () => {
    //	history.push(PATHS.STR_LEARNER_PLAN + defaultChildData?.id)
  };

  return (
    <>
      <div className='RightbarPannel p-0 rightpannelSticky'>
        <div className='heading'>
          {dimViewObj && !skillProg ? (
            <h2 className='flex'>
              <span>
                <img src={image.Chartimgicon} alt='' className='mr-2' />
                Holistic View
              </span>
              <div className='form-check form-switch m-0 flex p-0'>
                <label
                  className='form-check-label pointer'
                  htmlFor='flexSwitchCheckDefault'>
                  Courses
                </label>
                <input
                  className='form-check-input avltogglebutton pointer'
                  type='radio'
                  role='switch'
                  id='flexSwitchCheckDefault'
                  checked={showDimCourse}
                  onClick={() => handleShowDimCourse(!showDimCourse)}
                  disabled={enrollCount > 0 ? false : true}
                />
              </div>
              {/* <span>
								<img
									src={image.chat_icon}
									className="chat_icon pointer"
									alt=""
									onClick={() => showOverall()}
								/>
							</span> */}
            </h2>
          ) : isDimension(selectedDim?.value) ? (
            <h2 className='flex'>
              <span>
                {getDimIcon(selectedDim.value)} {selectedDim.value} Dimension
              </span>

              {/* <div className="form-check form-switch m-0 flex">
								<label
									className="form-check-label pointer"
									htmlFor="flexSwitchCheckDefault"
								>
									Section
								</label>
								<input
									className="form-check-input avltogglebutton pointer"
									type="radio"
									role="switch"
									id="flexSwitchCheckDefault"
									onClick={() => showEnrolledCourse(showProgress)}
									checked={showProgress}
								/>
							</div> */}
            </h2>
          ) : (
            <h2 className='flex summery_plan'>
              <span>
                <img src={image.mortarboard} alt='' className='mr-2' />
                Most Popular Courses
              </span>
              {dashboardData?.userPlans?.length > 0 && (
                <div className='form-check form-switch fixedexpandall flexone p-0 '>
                  <label class='form-check-label' for='flexSwitchCheckDefault'>
                    Plan
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    role='switch'
                    checked={toggleState}
                    id='flexSwitchCheckDefault'
                    onClick={() => handleToggleState(true)}
                  />
                </div>
              )}
            </h2>
          )}
        </div>
        {!dimViewObj && (
          <div className='popularcourse pt-2'>
            <ul>
              {visiblePopularCourses &&
                visiblePopularCourses.map((value, key) => (
                  <li key={key}>
                    {value.name.length > 26 ? (
                      <ReactTooltip id={value?.name}>
                        {value?.name}
                      </ReactTooltip>
                    ) : (
                      ""
                    )}
                    <span
                      data-for={value.name}
                      data-event-off=''
                      data-tip
                      className='pointer'
                      onClick={() =>
                        handleExploreClick(value?.id, value?.totalLevel)
                      }>
                      <img src={value.imageUrl} alt='' />
                      {textTrim(value.name, 26)}
                    </span>
                    <button
                      type='button'
                      className='btn-blue btn-login d-block pt-1 pb-1 w-auto left_auto'
                      onClick={() =>
                        handleExploreClick(value?.id, value?.totalLevel)
                      }>
                      <i className='fa-sharp fa-regular fa-magnifying-glass-arrow-right mr-2'></i>
                      Explore{" "}
                    </button>
                  </li>
                ))}

              {/* {!showAllPopularCourses && courseList.length > 5 ? (
								<li>
									<a href="#" onClick={() => setShowAllPopularCourses(true)}>
										Show More...
									</a>
								</li>
							) : courseList.length === 5 ? (
								""
							) : (
								<li>
									<a href="#" onClick={() => setShowAllPopularCourses(false)}>
										Show Less
									</a>
								</li>
							)} */}

              {courseList &&
                courseList.length > 5 &&
                (courseList.length === visiblePopularCourses?.length ? (
                  <li>
                    <a
                      href='#'
                      onClick={() => {
                        setShowAllPopularCourses(false), setNumberOfCourses(1);
                      }}>
                      Show Less
                    </a>
                  </li>
                ) : (
                  <li>
                    <a
                      href='#'
                      onClick={() => {
                        setShowAllPopularCourses(true),
                          setNumberOfCourses(numberOfCourses + 2);
                      }}>
                      Show More...
                    </a>
                  </li>
                ))}
            </ul>
            <CourseComingSoon handleSharePopup={handleSharePopup} />
          </div>
        )}

        {dimViewObj && !skillProg && dashboardData && !showDimCourse ? (
          <div className='HolisticgrowthFlwr'>
            <div className='HGmaincircle flextwo'>
              <div
                className='HGInner_cirlce flextwo flex-wrap'
                style={{
                  height: `calc(${showRoundValue(
                    dashboardData?.progress
                  )}% + 30px - ${totlecal}px)`,
                  width: `calc(${showRoundValue(
                    dashboardData?.progress
                  )}% + 30px - ${totlecal}px)`,
                  minWidth: `calc(${showRoundValue(
                    dashboardData?.progress
                  )}% + 30px - ${totlecal}px)`,
                }}

                // style={{
                //   width: avgValue + "%",
                //   height: avgValue + "%",
                //   minWidth: avgValue + "%",
                // }}
              >
                <p className='w-100 text-center'>
                  {showRoundValue(dashboardData?.progress)}
                  {/* {dashboardData?.progress?.toFixed(1) < 0.50 ? (dashboardData?.progress === 0 ? dashboardData?.progress : dashboardData?.progress?.toFixed(1)) : Math.round(dashboardData?.progress)} */}
                  {/* {dashboardData?.progress.toFixed()} */}
                  <span className='percentage_sign'>%</span>
                </p>
                {/* {avgValue <= 30 && (
                  <h3 className="w-100 text-center">
                    {getProfileName(defaultChildData)}
                  </h3>
                )}{" "} */}
              </div>

              {dashboardData &&
                dashboardData?.dimensions &&
                dashboardData.dimensions.map((vl, ky) => {
                  return (
                    <div
                      className={`HolinnerProgcircle HG${vl.name}crl flextwo`}
                      key={ky}>
                      <div
                        className='Dimen_Circle_inner '
                        style={{
                          height: `calc(${vl?.progress}% + 9px)`,
                          width: `calc(${vl?.progress}% + 9px)`,
                          minWidth: `calc(${vl?.progress}% + 9px)`,
                        }}>
                        <p
                          className={
                            vl.progress > 9
                              ? "planetProgress"
                              : vl.progress === 100
                              ? "fullprogress"
                              : vl.dimPro === 0
                              ? "plazeroprogress"
                              : vl.dimPro < 0.51
                              ? "planetprog"
                              : ""
                          }>
                          {showRoundValue(vl.dimPro)}
                          {/* {vl.dimPro?.toFixed(1) < 0.50 ? (vl.dimPro === 0 ? vl.dimPro : vl.dimPro?.toFixed(1)) : Math.round(vl.dimPro)} */}
                          <span className='percentage_sign'>%</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <h4 className='text-center mt-4 pt-5'>
              {getCapitalized(defaultChildData.firstName)}'s Overall Progress{" "}
              <img
                src={image.chat_icon}
                className='chat_icon pointer'
                alt=''
                onClick={() => handleShowOverallProgressPopup(true)}
              />
            </h4>

            <div className='Holisticcharttengent'>
              <ul className='flex flex-wrap justify-content-center'>
                <li>
                  <span className='GRtengent OverallTeggent'></span>Overall
                  Progress
                </li>
                <li>
                  <span className='GRtengent SocialTeggent'></span>Social
                </li>
                <li>
                  <span className='GRtengent EmotionalTeggent'></span>
                  Emotional
                </li>
                <li>
                  <span className='GRtengent SpritiualTeggent'></span>
                  Mindfulness
                </li>
                <li>
                  <span className='GRtengent PhysicalTeggent'></span>Physical
                </li>
                <li>
                  <span className='GRtengent intelTeggent'></span>Intellectual
                </li>
              </ul>
            </div>
          </div>
        ) : (
          showDimCourse &&
          !skillProg && (
            <>
              <CourseProgress
                courseObj={dimCourse}
                showProgress={showProgress}
                getDataFromCourseProgress={getDataFromCourseProgress}
              />
            </>
          )
        )}
        {skillProg && dimViewObj && (
          <>
            <CourseProgress
              showProgress={showProgress}
              getDataFromCourseProgress={getDataFromCourseProgress}
            />{" "}
          </>
        )}
      </div>
      {showCongratulationModel && !courseDetail?.isAcademic && (
        <CongratulationCard
          courseActivityId={courseActivityId}
          handleOpenpopup={getDataFromCourseProgress}
          isContinueButtonClick={false}
        />
      )}
      {congratulationPopup && courseDetail?.isAcademic && (
        <LessonCongratulationsPopup
          handleCongratulationPopup={handleCongratulationPopup}
          courseActivityId={courseActivityId}
        />
      )}
      {showOverallProgressPopup && (
        <ShowOverallProgressPopup
          handleShowOverallProgressPopup={handleShowOverallProgressPopup}
        />
      )}

      {shareCoursePopup && (
        <ShareCoursePopup handleSharePopup={handleSharePopup} />
      )}
    </>
  );
};

export default Sidebar;

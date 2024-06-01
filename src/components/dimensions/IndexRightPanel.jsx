/** @format */

import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { DIMENSION_HINT } from "../../utils/DataObjects";
import RoundProgress from "../controls/RoundProgress";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import DoughnutChart from "../home/DoughnutChart";
import {
  getProfileName,
  getSequnceSort,
  getToolTip,
  showRoundValue,
  textTrim,
} from "../../utils/helper";
import { PATHS } from "../../utils";
import { getHelpModal, lockPopup } from "../../redux/actions";
import CourseProgress from "../home/CourseProgress";
import CongratulationCard from "../widget/CongratulationCard";
import LessonCongratulationsPopup from "./course/vickycourses/LessonCongratulationsPopup";
import ReactTooltip from "react-tooltip";
const IndexRightPanel = ({
  data,
  progressObj,
  selectedTab,
  viewReward,
  showActivity,
}) => {
  const {
    defaultChildData,
    dimension,
    courseEnrollResponse,
    response,
    selectedDim,
  } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const [isSectionShow, setSectionShow] = useState(true);
  const [loader, setloader] = useState();
  const [type, setType] = useState();
  const [isShowEnrolledSection, setShowEnrolledSection] = useState(false);
  const [isEnrolledCour, setIsEnrolledCour] = useState(false);
  const handleSection = () => {
    setSectionShow(!isSectionShow);
  };

  let EnrooledCourse = [];
  let skillData = [];
  if (dimension[selectedTab?.value]?.skills) {
    getSequnceSort(dimension[selectedTab.value].skills)?.map((skill, key) => {
      skillData.push(skill);
      if (!isEnrolledCour && skill.isEnrolled) {
        setIsEnrolledCour(true);
      }
      skill.showCourseCount = 0;
      if (["Math", "English"]?.includes(skill?.name)) {
        skill?.courses?.map((course, ky) => {
          if (course.isEnrolled || course?.progress > 0) {
            skill.showCourseCount++;
          }
          // if (course?.isreporting && course?.type === "VICKY") {
          // 	skill.isreporting = course?.isreporting;
          // }
        });
      } else if (["Social Studies", "Science"]?.includes(skill?.name)) {
        skill?.courses?.map((course, ky) => {
          if (course.isEnrolled && course?.progress > 0) {
            skill.showCourseCount++;
          }
          // if (course?.isreporting && course?.type === "VICKY") {
          // 	skill.isreporting = course?.isreporting;
          // }
        });
      } else {
        skill.showCourseCount = skill?.courses?.length;
      }
      /*			
			skills?.journey?.map((journey, ky) => {
				getSequnceSort(journey?.clevel)[0]?.courses?.map((courses, key3) => {
					if (courses.isEnrolled || courses?.progress > 0) {
						EnrooledCourse.push(courses);
					}
					if (courses?.isreporting) {
						skills.isreporting = courses?.isreporting;
					}
				});
			});
			*/
    });
  }

  useEffect(() => {
    if (courseEnrollResponse) {
      setloader(true);
    } else if (EnrooledCourse?.length > 0) {
      setloader(false);
    }
  }, [courseEnrollResponse, EnrooledCourse]);

  const _redirect = (data) => {
    history.replace({
      pathname: PATHS.DIMENSION_STR + params?.dimId + "/" + params.id,
      state: { skillId: data?.skillId },
    });
  };

  const _redirectLesson = (courses, activity) => {
    if (selectedDim) {
      courses.dimId = selectedDim?.key;
      courses.dimName = selectedDim?.value;
    }
    setType(courses);
    if (activity?.isLocked) {
      dispatch(lockPopup({ isLocked: activity?.isLocked, type: courses }));
    } else {
      let LessonDetail;
      if (activity.isLesson) {
        LessonDetail = PATHS.LESSIONDETAIL_STR;
      } else {
        LessonDetail = PATHS.SOCIALCOURSE_STR;
      }
      history.push(
        LessonDetail +
          params.id +
          "/" +
          courses.id +
          "/" +
          courses?.skillId +
          "/" +
          activity.id
      );
    }
  };

  const handleShowEnrollSection = () => {
    setShowEnrolledSection(!isShowEnrolledSection);
  };

  const [showCongratulationModel, setShowCongratulationModel] = useState(false);
  const [courseActivityId, setCourseActivityId] = useState([]);
  const [congratulationPopup, setCongratulationPopup] = useState(false);
  const [courseDetail, setCourseDetail] = useState([]);

  const getDataFromCourseProgress = (result, data, course) => {
    setCourseDetail(course);
    setCourseActivityId(data);
    if (course?.isAcademic) {
      setCongratulationPopup(result);
    } else {
      setShowCongratulationModel(result);
    }
  };

  const handleCongratulationPopup = (vl) => {
    setCongratulationPopup(vl);
  };

  let count = 0;
  let skillCount = 0;
  const dimpropercent = progressObj?.progress * 0.3;
  return (
    <React.Fragment key={progressObj?.id}>
      <div className="RightbarPannel p-0 rightpannelSticky">
        <div className="heading">
          <h2 className="flex">
            <span>
              <img src={image.DiemensionProgress} alt="" className="mr-2" />
              <span>Progress</span>: {progressObj?.name}
            </span>
            {/* <div className="form-check form-switch m-0 flex p-0">
							<label
								className="form-check-label pointer"
								htmlFor="flexSwitchCheckDefault"
							>
								Enrolled
							</label>
							<input
								className="form-check-input avltogglebutton pointer"
								type="radio"
								role="switch"
								id="flexSwitchCheckDefault"
								checked={isShowEnrolledSection}
								onClick={() => handleShowEnrollSection()}
								disabled={isEnrolledCour ? false : true}
							/>
						</div> */}
          </h2>
        </div>
        {isShowEnrolledSection ? (
          <div className="RPenrolledCourseList">
            {
              <ul>
                {getSequnceSort(progressObj?.skills)?.map((skill, index) =>
                  getSequnceSort(skill?.courses)?.map((course, CKey) => (
                    <li className="flex " key={CKey}>
                      <span
                        onClick={() => _redirect(course)}
                        data-for={course?.name}
                        data-tip
                        data-event-off=""
                      >
                        {course?.name?.length > 36 && (
                          <ReactTooltip id={course?.name} className="tooltip">
                            <p>{course?.name}</p>
                          </ReactTooltip>
                        )}
                        <i className="fa-regular fa-minus mr-2"></i>
                        {textTrim(course?.name, 38)}
                      </span>
                      <div className="flex">
                        <div className="position-relative Coursecompprcent mr-3">
                          {course.type === "VICKY" ? (
                            <p>
                              <RoundProgress data={course?.completion} />
                            </p>
                          ) : (
                            <p className="text-right">
                              <RoundProgress data={course?.completion} />
                            </p>
                          )}
                        </div>
                        <span
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="barlistdropdown"
                          data-toggle="dropdown"
                          className="pointer"
                        >
                          {" "}
                          <i className="fa-solid fa-bars"></i>
                        </span>
                        <ul
                          className="dropdown-menu dropdown-menu-end enrollassetsval"
                          aria-labelledby="barlistdropdown"
                        >
                          <li className="assetscourselistitem pe-none">
                            <p className="pe-none">
                              <span className="jumponscene">
                                <img src={image.money_bag} alt="" />
                              </span>
                              <span className="ribbonPoint">
                                <span className="earnnoCoin">
                                  {course?.points}{" "}
                                </span>
                              </span>
                              Points
                            </p>
                          </li>
                          {course?.showReward && (
                            <li
                              className="assetscourselistitem"
                              onClick={() => viewReward(course, true, CKey)}
                            >
                              <p className="pointer">
                                <span className="jumponscene">
                                  <img src={image.rewardimg} alt="" />
                                </span>
                                Reward
                              </p>
                            </li>
                          )}
                          {course?.activities?.map(
                            (activity, AKey) =>
                              activity?.type !== "CUSTOM" && (
                                <li
                                  onClick={() => {
                                    activity?.name == "Learning Center"
                                      ? showActivity(
                                          course?.modules,
                                          "Vicky",
                                          course?.name,
                                          course,
                                          skillData[AKey]
                                        )
                                      : _redirectLesson(course, activity);
                                  }}
                                  key={AKey}
                                >
                                  <span className="pointer flex w-100">
                                    <div className="flexone">
                                      {activity?.name == "Learning Center" ? (
                                        <div className="TeacherActivityimg mr-2">
                                          <img
                                            src={image.greenflag}
                                            alt="..."
                                          />
                                        </div>
                                      ) : (
                                        <span className="ThumnailTeacher jumponscene">
                                          S{AKey + 1}
                                        </span>
                                      )}
                                      {activity?.name}
                                    </div>
                                    {activity?.isLocked && (
                                      <span className="ml-auto">
                                        <i className="fa-sharp fa-solid fa-lock"></i>
                                      </span>
                                    )}
                                  </span>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            }
            {/* {EnrooledCourse?.length == 0 &&
							!loader &&
							progressObj !== undefined ? (
							<div className="LessionDtlOverview p-3">
								<p className="">
									<strong>
										You have not enrolled in any courses yet. Please click the{" "}
										<img src={image.Enrollbtnimage} alt="" className="enbtn" />{" "}
										button for the courses you are interested in and start your
										learning journey!
									</strong>
								</p>
							</div>
						) : progressObj == undefined ? (
							<div className="GridCardList">
								<ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
							</div>
						) : (
							<>
							</>
						)} */}
          </div>
        ) : progressObj ? ( //	1st side of right panel
          <div className="pagescrollauto">
            <div className="holisticflowr dimension_skilflow rghtpnl_Skill">
              <div className="skilanddimensioncircle">
                <div
                  className={`dimensionskills ${progressObj?.name}_Skils_center`}
                  style={{
                    height: `calc(${progressObj?.progress}% + 30px - ${dimpropercent}px)`,
                    width: `calc(${progressObj?.progress}% + 30px - ${dimpropercent}px)`,
                  }}
                >
                  <p>
                    {showRoundValue(progressObj?.progress)}
                    <span className="percentage_sign">%</span>
                  </p>
                </div>
                <div className="skillCircleList AllSkillschart">
                  {getSequnceSort(progressObj?.skills)?.map(
                    (skill, index) =>
                      skill?.showCourseCount > 0 && (
                        <div className="skill_pnlcircle" key={index}>
                          <div
                            key={index}
                            className="Skill_innercircle flextwo"
                            style={{
                              height: `calc(${skill?.progress}% + 18.39px)`,
                              minWidth: `calc(${skill?.progress}% + 18.39px)`,
                              width: `calc(${skill?.progress}% + 18.39px)`,
                            }}
                          >
                            <span className="skils_list">{++count}</span>
                            <p
                              className={`${
                                skill?.progress > 9
                                  ? "SkillPlanatryprog"
                                  : skill?.progress === 100
                                  ? "SkillPlanatryprog"
                                  : skill?.progress === 0
                                  ? "Zeroprogress"
                                  : skill?.progress < 0.5
                                  ? "SkillPlantry"
                                  : ""
                              }`}
                            >
                              {showRoundValue(skill?.progress)}
                              <span className="percentage_sign">%</span>
                            </p>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
            {count > 0 && (
              <div className="Skillslegent">
                <ul className="flextwo flex-wrap justify-content-start">
                  {getSequnceSort(progressObj?.skills)?.map(
                    (skill, index) =>
                      skill?.showCourseCount > 0 && (
                        <li
                          key={index}
                          className={`${
                            skill?.name.length > 20 ? "skillcount_txt" : ""
                          }`}
                        >
                          <strong>{++skillCount}</strong>
                          <span className="">
                            {" "}
                            {skill?.name}{" "}
                            <span className="skillCountlegend">
                              {" "}
                              {skill?.showCourseCount > 0 &&
                                " [" + skill?.showCourseCount + "]"}
                            </span>
                          </span>
                        </li>
                      )
                  )}
                </ul>
              </div>
            )}
            {progressObj && (
              <CourseProgress
                courseObj={progressObj?.skills}
                showProgress={isSectionShow}
                getDataFromCourseProgress={getDataFromCourseProgress}
                selectedTab={selectedTab}
                type={"dimension"}
              />
            )}
          </div>
        ) : (
          <div className="GridCardList">
            <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
          </div>
        )}
      </div>
      {showCongratulationModel && (
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
    </React.Fragment>
  );
};

export default IndexRightPanel;

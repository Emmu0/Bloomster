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
import { getProfileName, getToolTip, textTrim } from "../../utils/helper";
import { PATHS } from "../../utils";
import { getHelpModal, lockPopup } from "../../redux/actions";
import CourseProgress from "../home/CourseProgress";
const Progress = ({
  data,
  progressObj,
  selectedTab,
  viewReward,
  showActivity,
}) => {
  const { defaultChildData, dimension, courseEnrollResponse, response } =
    useSelector((state) => state.collections);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const [startPopup, setStartPopup] = useState(false);
  const [dimInfoData, setDimInfoData] = useState();
  const [DoughnutToggle, setDoughnutToggle] = useState(false);

  const [type, setType] = useState();
  const [ShowCourse, setShowCourse] = useState(false);
  const [selectedSkill, setselectedSkill] = useState();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    let header = document.querySelector(".RightbarPannel");
    let scrollTop = "";
    if (header) {
      scrollTop = window && window.scrollY;
      scrollTop >= 0
        ? header.classList.add("rightpannelSticky")
        : header.classList.remove("rightpannelSticky");
    }
  };
  useEffect(() => {
    if (DIMENSION_HINT) {
      let infoData = DIMENSION_HINT.filter((data) =>
        data?.name.includes(selectedTab?.value)
      );
      setDimInfoData(infoData[0]);
    }
  }, [DIMENSION_HINT, selectedTab]);

  if (selectedTab && progressObj) {
    progressObj.name = selectedTab?.value;
  }

  useEffect(() => {
    setDoughnutToggle(false);
  }, [selectedTab?.key, params.id]);
  const [loader, setloader] = useState();

  let EnrooledCourse = [];
  let skillData = [];
  if (dimension[selectedTab?.value]?.skills) {
    dimension[selectedTab.value].skills?.map((skills, key) => {
      skillData.push(skills);
      skills.courses.map((courses, ky) => {
        if (courses.isEnrolled) {
          if (courses?.type !== "VICKY") {
            EnrooledCourse.push(courses);
          } else if (
            courses?.pctCompleted > 0 ||
            ["Science", "Social Studies"].includes(skills?.name)
          ) {
            EnrooledCourse.push(courses);
          }
        }
      });
    });
  }

  const _redirectLesson = (courses, activity) => {
    setType(courses);
    if (activity?.isLocked) {
      dispatch(lockPopup({ isLocked: activity?.isLocked, type: courses }));
      setStartPopup(true);
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

  const _redirect = (data) => {
    history.replace({
      pathname: PATHS.DIMENSION_STR + params?.dimId + "/" + params.id,
      state: { skillId: data?.skillId },
    });
  };

  const showCourseData = (show, skill) => {
    setShowCourse(show);
    setselectedSkill(skill);
  };

  const openHelp = (data) => {
    dispatch(getHelpModal(data));
  };

  useEffect(() => {
    if (DoughnutToggle) {
      setShowCourse(false);
    }
  }, [DoughnutToggle]);

  useEffect(() => {
    if (courseEnrollResponse) {
      setloader(true);
    } else if (EnrooledCourse?.length > 0) {
      setloader(false);
    }
  }, [courseEnrollResponse, EnrooledCourse]);

  useEffect(() => {
    if (response) {
      setDoughnutToggle(!DoughnutToggle);
    }
  }, [response]);

  return (
    <React.Fragment key={progressObj?.id}>
      <div className="RightbarPannel p-0 rightpannelSticky enrolledCourseAssetsstr">
        <div className="heading d-flex">
          <h2 className="flex w-100">
            <span>
              <img src={image.DiemensionProgress} className="mr-2" alt="" />
              <span className="">{selectedTab?.value}</span>:{" "}
              {!DoughnutToggle ? " Enrolled Courses" : " Progress"}
            </span>

            <div className="form-check form-switch m-0 flex p-0">
              <label
                className="form-check-label pointer"
                htmlFor="flexSwitchCheckDefault"
              >
                Progress
              </label>
              <input
                className="form-check-input avltogglebutton pointer"
                type="radio"
                checked={DoughnutToggle}
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  setDoughnutToggle(!DoughnutToggle);
                }}
              />
            </div>
          </h2>
        </div>

        {selectedTab?.key && progressObj?.skills?.length > 0 ? (
          <>
            {!DoughnutToggle ? (
              <div className="RPenrolledCourseList">
                {EnrooledCourse?.length == 0 && !loader ? (
                  <div className="LessionDtlOverview p-3">
                    <p className="">
                      <strong>
                        You have not enrolled in any courses yet. Please click
                        the{" "}
                        <img
                          src={image.Enrollbtnimage}
                          alt=""
                          className="enbtn"
                        />{" "}
                        button for the courses you are interested in and start
                        your learning journey!
                      </strong>
                    </p>
                  </div>
                ) : loader ? (
                  <div className="GridCardList">
                    <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
                  </div>
                ) : (
                  EnrooledCourse?.length > 0 && (
                    <ul>
                      {EnrooledCourse?.map((course, CKey) => (
                        <li className="flex " key={CKey}>
                          <span
                            onClick={() => _redirect(course)}
                            data-for={course?.name}
                            data-tip
                            data-event-off=""
                          >
                            {course?.name.length > 38 && (
                              <span> {getToolTip(course?.name, 38)}</span>
                            )}
                            <i className="fa-regular fa-minus mr-2"></i>
                            {textTrim(course?.name, 38)}
                          </span>
                          <div className="flex">
                            <div className="position-relative Coursecompprcent mr-3">
                              {course.type === "VICKY" ? (
                                <p>
                                  <RoundProgress data={course?.pctCompleted} />
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
                                          {activity?.name ==
                                          "Learning Center" ? (
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
                      ))}
                    </ul>
                  )
                )}
              </div>
            ) : !ShowCourse ? (
              <div className="Rpprogresbar">
                <div className="fusionchart position-relative text-center">
                  <CourseProgress courseObj={data.tag} />
                  <DoughnutChart progressObj={dimension[selectedTab.value]} />

                  {defaultChildData && defaultChildData?.imageUrl ? (
                    <div className="chartprofilemenu">
                      <img
                        className="rounded-circle"
                        src={defaultChildData?.imageUrl}
                        alt="..."
                      />
                    </div>
                  ) : defaultChildData?.firstName ? (
                    <div className="text-dark bg-secondary fw-bold  chartprofilemenu">
                      {getProfileName(defaultChildData)}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="DChartWrap">
                  {/* <h4 className="skillscharttitle">Skills</h4> */}
                  <div className="DChartWrap chartlistprogrss">
                    <div className={`DchartContnr  donatchartEmotional`}>
                      <div className="ProgressDetails courseProgresschart w-100">
                        <ul className="Cprogreslisting">
                          {progressObj?.skills?.map(
                            (skills, Skey) =>
                              skills?.courseCount > 0 && (
                                <li key={Skey}>
                                  {/* {skills.isCore && skills.isDef && skills?.proficiency === 0 && 0 + "% - "} */}
                                  {skills?.courseCount > 0 &&
                                    skills?.proficiency + "% - "}
                                  {skills?.courseCount > 0 && skills?.name} [
                                  {skills?.courses?.length}]
                                  {/* {skills?.courseCount == 0 && " (coming soon...)"} */}
                                  <span
                                    className={`${
                                      skills?.courseCount === 0
                                        ? "TotleCProgCOMMING"
                                        : "TotleCProg"
                                    }`}
                                    style={{
                                      width: `${
                                        skills?.proficiency === 0
                                          ? 0.1
                                          : skills?.proficiency
                                      }%`,
                                      color: "red",
                                    }}
                                  ></span>
                                  <div
                                    className="leftexpendgraph"
                                    onClick={() => showCourseData(true, skills)}
                                  >
                                    <div className="expendgraphicon pointer">
                                      <img src={image.expendicon} alt="" />
                                    </div>
                                  </div>
                                  <div className="rightexpendgraph">
                                    {/* <div className="progresssignals">
                                      <span className="prosignal1 ActProSignl"></span>
                                      <span className="prosignal2 ActProSignl"></span>
                                      <span className="prosignal3"></span>
                                      <span className="prosignal4"></span>
                                      <span className="prosignal5"></span>
                                    </div> */}
                                  </div>
                                </li>
                              )
                          )}
                        </ul>

                        {/* <div className='DcverticleParameter'></div> */}
                        <div className="DcHorizontalParameter">
                          <span>PROFICIENCY</span>
                          <ul>
                            <li>0</li>
                            <li>25</li>
                            <li>50</li>
                            <li>75</li>
                            <li>100</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="Rpprogresbar">
                <div className="fusionchart position-relative text-center">
                  <CourseProgress />
                  {/* <DoughnutChart progressObj={selectedSkill} /> */}

                  {defaultChildData && defaultChildData?.imageUrl ? (
                    <div className="chartprofilemenu">
                      <img
                        className="rounded-circle"
                        src={defaultChildData?.imageUrl}
                        alt="..."
                      />
                    </div>
                  ) : defaultChildData?.firstName ? (
                    <div className="text-dark bg-secondary fw-bold  chartprofilemenu">
                      {getProfileName(defaultChildData)}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="skillsgraphtitle">
                  <h3 className="text-center">
                    <img
                      src={image.prependicon}
                      alt=""
                      className="pointer mr-2"
                      onClick={() => showCourseData(false)}
                    />
                    {selectedSkill?.name}{" "}
                    <span className="ml-1">
                      [{selectedSkill?.courses?.length}]
                    </span>
                  </h3>
                </div>
                <div className="DChartWrap">
                  {/* <h4 className="skillscharttitle">Skills</h4> */}
                  <div className="DChartWrap chartlistprogrss">
                    <div className={`DchartContnr  donatchartEmotional`}>
                      <div className="ProgressDetails courseProgresschart w-100">
                        <ul className="Cprogreslisting">
                          {selectedSkill?.courses?.map((courses, Ckey) => (
                            <li>
                              {courses?.proficiency + "% - "}
                              {courses?.name}{" "}
                              <span
                                className="TotleCProg"
                                style={{
                                  width: `${
                                    courses?.proficiency === 0
                                      ? 0.1
                                      : courses?.proficiency
                                  }%`,
                                }}
                              ></span>
                              <div
                                className="leftexpendgraph pointer"
                                onClick={() => openHelp(courses)}
                              >
                                <div className="expendgraphicon inficononchart">
                                  <img src={image.chat_icon} alt="" />
                                </div>
                              </div>
                              {/* <div className="rightexpendgraph">
                                <div className="progresssignals">
                                  <span className="prosignal1 ActProSignl"></span>
                                  <span className="prosignal2"></span>
                                  <span className="prosignal3"></span>
                                  <span className="prosignal4"></span>
                                  <span className="prosignal5"></span>
                                </div>
                              </div> */}
                            </li>
                          ))}
                        </ul>

                        {/* <div className='DcverticleParameter'></div> */}
                        <div className="DcHorizontalParameter">
                          <span>PROFICIENCY</span>
                          <ul>
                            <li>0</li>
                            <li>25</li>
                            <li>50</li>
                            <li>75</li>
                            <li>100</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="GridCardList">
            <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Progress;

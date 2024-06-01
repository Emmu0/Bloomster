import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Home from "../Home";

import {
  getProviderCourse,
  getAllUsersDetail,
  courseEnrollment,
  EnrollCoursesJson,
  courseJourney,
  getRewardData,
} from "../../redux/actions/APIs";
import { breadcrumb, billingPlan, showModal } from "../../redux/actions";
import * as image from "../../resources/images";
// import StartCourseCard from "../home/StartCourseCard";
import SubscribePopUp from "../dimensions/SubscribePopUp";
import Subscription from "../subscription/Subscription";
import { ShimmerCategoryList } from "react-shimmer-effects";

import { getDimIcon, getSequnceSort } from "../../utils/helper";
import RewardPopUp from "./RewardPopUp";
import useSound from "use-sound";
import correct from "../../resources/sound/right.mp3";

const ParentCourseFilter = () => {
  const dispatch = useDispatch();
  const [right] = useSound(correct);
  const [enrollLoader, setEnrollLoader] = useState();
  const [courseDetailId, setCourseDetailId] = useState("");
  const [isCourseDetailOpen, setCourseDetailOpen] = useState(false);
  const [teacherDataOpen, setTeacherDataOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState();
  const [selectedDim, setSelectedDim] = useState();
  const [loader, setLoader] = useState([]);
  const [courseEnrolling, setCourseEnrolling] = useState();
  const [allSkill, setAllSkill] = useState();
  const [selectedSkillIndex, setSelectedSkillIndex] = useState();
  const [enrollData, setEnrollData] = useState();
  const [getEnrolled, setEnrolled] = useState(false);
  const [selectedActi, setSelectedActi] = useState();
  const [countDisplay, setCountDisplay] = useState();
  const [openReward, setOpenReward] = useState();
  const [getObj, setObj] = useState([]);
  const [getType, setType] = useState("all");
  const path = useParams();

  const {
    loggedInUser,
    defaultChildData,
    getSelectedUser,
    enrollCoursesJson,
    journeyData,
    courseEnrollResponse,
    response,
    getResponse,
  } = useSelector((state) => state.collections);

  const viewReward = (data, isCourse, wk) => {
    setOpenReward(data);
    dispatch(getRewardData(path?.id, data?.id, isCourse));
  };

  useEffect(() => {
    if (courseEnrollResponse && courseEnrolling) {
      courseEnrolling.isEnrolled = true;
      // right();
      courseEnrolling.points = courseEnrollResponse?.records[0]?.points;

      let activitySeq = getSequnceSort(courseEnrolling?.activities);
      if (courseEnrolling?.activities?.length > 0) {
        activitySeq?.map((vl, key) => {
          if (activitySeq[key] === 0 && activitySeq[key].completation >= 100) {
            if (vl.sequence == 2) {
              vl.isLocked = false;
            }
          }
        });
      }
    }
  }, [courseEnrollResponse]);

  useEffect(() => {
    if (
      enrollCoursesJson &&
      path?.id == enrollCoursesJson?.records[0].user_id
    ) {
      setLoader(enrollCoursesJson?.records);
      setEnrollLoader("");
    }
  }, [enrollCoursesJson?.records]);

  useEffect(() => {
    setEnrolled(false);
    setEnrollData();
    setSelectedDim();
    setSelectedSkill();
    setSelectedSkillIndex();
    setSelectedActi();
    setCourseEnrolling();
  }, [path.id]);

  // const handleEnrollment = (course, skillid, dimName, dimId) => {
  //   if (getSelectedUser?.isSubscriber) {
  //     setEnrollLoader(course?.id);
  //     setCourseEnrolling(course);

  //     dispatch(
  //       courseEnrollment(
  //         defaultChildData?.id,
  //         { key: dimId },
  //         skillid,
  //         course?.id,
  //         "",
  //         dimName
  //       )
  //     );
  //   } else {
  //     handlePopUp(course, skillid, dimName, { key: dimId });
  //   }
  // };

  useEffect(() => {
    if (loggedInUser) {
      if (loggedInUser?.role?.name === "PROVIDER") {
        dispatch(getProviderCourse(path?.id));
      }
    }
  }, [path?.id, loggedInUser]);

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Skills and Courses",
      })
    );
    if (path?.id && !courseEnrollResponse) {
      dispatch(EnrollCoursesJson(path?.id));
    }
  }, [path?.id]);

  useEffect(() => {
    if (response || getResponse) {
      dispatch(EnrollCoursesJson(path?.id));
    }
  }, [response, getResponse]);

  useEffect(() => {
    setSelectedSkillIndex("");
    setSelectedActi();
    setLoader();
  }, [path?.id]);

  const handleSkillIndex = (obj) => {
    setObj(obj?.courses);
    setType(obj.type);

    if (obj) {
      setSelectedSkill(obj.id);
      setSelectedActi(obj.id);
      let isEnrolled = true;
      if (obj?.courses.length > 0) {
        obj?.courses.map((vl, ky) => {
          if (vl.type === "PROVIDER" && !isEnrolled) {
            isEnrolled = false;
          }
        });
      }
      let enrollObj = obj?.courses.filter((data) => data.isEnrolled);

      if (enrollObj.length == 0) {
        setEnrolled(false);
        setEnrollData();
      }

      if (!obj?.isEnrolled) {
        setEnrolled(false);
        setEnrollData();
      } else {
      }

      if (!getEnrolled) {
        setEnrollData();
      }
      setSelectedSkillIndex(obj.id);
    } else {
      setSelectedSkill();
    }
  };

  const resetAll = (type) => {
    setSelectedSkill();
    setEnrolled(false);
    setSelectedSkillIndex();
    setSelectedActi();
    setEnrollData();
    setSelectedDim();
    setType("all");
  };
  const handleSkill = (skills) => {
    setAllSkill(skills);
  };

  const [subscribeData, setSubscribeData] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSubs, setShowSubs] = useState(false);

  const [courseDetail, setCourseDetail] = useState(false);
  const [showCourseDetail, setShowCourseDetail] = useState("");
  const [teacherData, showTeacherData] = useState(undefined);
  const [skillId, setSkillId] = useState("");
  const [lastStage, setLastStage] = useState("");

  // const handlePopUp = (course, skillid, dimName, dimId) => {
  //   //	already subscribe
  //   if (defaultChildData?.isSubscriber) {
  //     if (dimName) {
  //       dispatch(
  //         courseEnrollment(
  //           defaultChildData?.id,
  //           dimId,
  //           skillid,
  //           course?.id,
  //           "",
  //           dimName
  //         )
  //       );
  //     }
  //   } else {
  //     //	for subscription
  //     let obj = {
  //       courseObj: course,
  //       skillId: skillid,
  //       dimension: { key: dimId.key, value: dimName },
  //     };
  //     setSubscribeData(obj);
  //     setShowPopUp(true);
  //     setShowSubs(false);
  //   }
  // };

  const handleSubscribe = () => {
    if (courseDetail) {
      setLastStage("courseDetail");
    } else {
      setLastStage("");
    }
    setShowSubs(true);
    setShowPopUp(false);
    setCourseDetail(false);
    //	setStartEnroll(false); //  iska mtlb
  };

  const closePopup = () => {
    setShowPopUp(false);
  };

  const closeSub = (courseObj) => {
    // dispatch(deleteDimension(getSelectedUser?.id, selectedTab?.key, dimension));

    dispatch(getAllUsersDetail());
    dispatch(billingPlan());
    setShowSubs(false);
    if (lastStage === "courseDetail") {
      setCourseDetail(true);
    } else {
      setCourseDetail(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".RightbarPannel");
    const scrollTop = window.scrollY;
    scrollTop >= 0
      ? header.classList.add("rightpannelSticky")
      : header.classList.remove("rightpannelSticky");
  };

  const providerPopup = (data, courseData) => {
    if (courseData?.id !== journeyData?.recordId) {
      dispatch(showModal({ type: "JourneyShimmer" }));
      dispatch(courseJourney(courseData?.id));
    }
    setShowCourseDetail(courseData);
    setTeacherDataOpen(true);
    showTeacherData(data);
  };

  const close = () => {
    showTeacherData(undefined);
    setTeacherDataOpen(false);
  };

  const closeModal = () => {
    showTeacherData(undefined);
    setTeacherDataOpen(false);
    setCourseDetail(false);
    setShowCourseDetail(undefined);
    // dispatch(resetResponse());
  };
  const [accordionObj, setAccordionObj] = useState([]);

  useEffect(() => {
    if (enrollCoursesJson?.records) {
      const accordionObj = enrollCoursesJson.records.map((vl) => vl.id);
      setAccordionObj(accordionObj);
      enrollCoursesJson.records.forEach((vl) => {
        if (vl.id === showCourseDetail?.dimId) {
          const skil = vl.areas?.length > 0 ? vl.areas : vl.skills;
          skil.forEach((vl1) => {
            if (vl1.id === showCourseDetail?.skillId) {
              const course = vl1.courses.find(
                (vl2) => vl2.id === showCourseDetail?.id
              );
              if (course) {
                setShowCourseDetail(course);
                showTeacherData(course.provider);
                setEnrollLoader(undefined);
              }
            }
          });
        }
      });
    }
  }, [enrollCoursesJson?.records, response]);

  const childCollapsehandler = (id) => {
    setAccordionObj((prevAccordionObj) => {
      const updatedAccordionObj = [...prevAccordionObj];
      const index = updatedAccordionObj.indexOf(id);
      if (index !== -1) {
        updatedAccordionObj.splice(index, 1);
      } else {
        updatedAccordionObj.push(id);
      }
      return updatedAccordionObj;
    });
  };

  const [checkk, setCheckk] = useState();

  const handleCard = (e) => {
    if (getEnrolled) {
      setCountDisplay([]);
    }
    let courseArray = [];
    enrollCoursesJson &&
      enrollCoursesJson.records.map((vl) => {
        vl.skills.map((vl1) => {
          if (vl1.courses.length > 0) {
            vl1.courses.map((vl2) => {
              courseArray.push(vl2);
            });
          }
        });
      });

    if (courseArray.length > 0) {
      let isEnrollData = courseArray.filter((c1) => c1.isEnrolled);
      if (!selectedSkill && !selectedDim) {
        if (isEnrollData.length === 0) {
          setEnrolled(false);
          setEnrollData();
          setSelectedSkillIndex(false);
        } else {
          setEnrolled(true);
          setEnrollData();
          setSelectedSkillIndex(!getEnrolled);
        }
      }
    }

    let disabled = false;
    enrollCoursesJson &&
      enrollCoursesJson.records.map((vl) => {
        if (selectedDim && vl.id === selectedDim) {
          vl.skills.map((vl1) => {
            if (selectedSkill && vl1.id === selectedSkill) {
              if (vl1.courses.length > 0) {
                let isEnrolledCheck = vl1.courses.filter(
                  (data) => data?.isEnrolled
                );

                if (isEnrolledCheck.length === 0) {
                  disabled = true;
                  setEnrolled(false);
                  return false;
                }
              }
            }
          });
        }
      });

    if (selectedDim || selectedSkill) {
      if (!disabled) {
        let check = !getEnrolled;

        setEnrolled(check);
        setEnrollData(check ? "Enrolled" : "");
        setCheckk(check);
        setSelectedSkillIndex(check);
      }
    } else {
      let disable = false;
      let courseArray = [];
      enrollCoursesJson &&
        enrollCoursesJson.records.map((vl) => {
          vl.skills.map((vl1) => {
            if (vl1.courses.length > 0) {
              vl1.courses.map((vl2) => {
                courseArray.push(vl2);
              });
            }
          });
        });

      if (courseArray.length > 0) {
        let isEnrollData = courseArray.filter((c1) => c1?.isEnrolled);
        if (isEnrollData.length === 0) {
          let check = false;

          setEnrolled(check);
          setEnrollData();
          setSelectedSkillIndex(check);
        } else {
          let check = !getEnrolled;

          setEnrolled(check);
          setEnrollData(check ? "Enrolled" : "");
        }
      }
    }
  };
  const _viewCourseDetail = (data, id) => {
    setCourseDetail(true);
    setShowCourseDetail(data);
    setSkillId(id);
    setCourseDetailOpen(true);
    setCourseDetailId(data.id);
  };

  const enrollToggle = (isEnroll, displayCourse) => {
    isEnroll ? setEnrolled(true) : setEnrolled(false);
  };

  return (
    <>
      <Home>
        <div className='LeftbarPannel p-0' id='School_information'>
          {loader && (
            <div className='form-title mt-0 mb-0 Enrollcoursetitle heading'>
              <h2
                data-toggle='collapse'
                className='m-0 pt-0 pb-1 w-100 flex justify-content-between '>
                {getEnrolled ? (
                  <span>
                    {" "}
                    <img src={image.mortarboard} alt='' className='mr-2' />{" "}
                    Enrolled Courses{" "}
                    {loader &&
                      countDisplay?.length > 0 &&
                      "[" + countDisplay?.length + "]"}
                  </span>
                ) : (
                  <span>
                    {" "}
                    <img src={image.mortarboard} alt='' className='mr-2' />{" "}
                    Available Courses
                  </span>
                )}

                <div className='form-check form-switch m-0 flex'>
                  <label
                    className={`form-check-label pointer checkEnrolled`}
                    htmlFor='flexSwitchCheckDefault'>
                    Enrolled
                  </label>
                  <input
                    className={`form-check-input avltogglebutton pointer ${
                      getType === "PROVIDER"
                    }`}
                    type='radio'
                    role='switch'
                    disabled={
                      getType === "PROVIDER" &&
                      getObj?.every((e) => e?.isEnrolled == true)
                        ? true
                        : false
                    }
                    checked={getEnrolled}
                    id='flexSwitchCheckDefault'
                    onClick={(e) => handleCard(e)}
                  />
                </div>
              </h2>
            </div>
          )}

          {/* <div className='AllCourseList enrolledCoursePagewrap'>
            <StartCourseCard
              handleSkill={handleSkill}
              handlePopUp={handlePopUp}
              selectedSkillIndex={selectedSkillIndex}
              handleEnrollment={handleEnrollment}
              enrollLoader={enrollLoader}
              providerPopup={providerPopup}
              _viewCourseDetail={_viewCourseDetail}
              enrollData={enrollData}
              selectedSkill={selectedSkill}
              getEnrolled={getEnrolled}
              checkk={checkk}
              setCountDisplay={setCountDisplay}
              loader={loader}
              viewReward={viewReward}
              enrollToggle={enrollToggle}
            />
          </div> */}
        </div>
        <div className='RightbarPannel p-0 Courseskilledlist'>
          <div className='heading'>
            <h2 className='flex'>
              <span>
                <img src={image.mainProfilebar} alt='' className='mr-2' />
                Dimensions and Skills
              </span>
              <div className='Allcourselink'>
                <p
                  className='text-right pointer'
                  onClick={() => resetAll("All")}>
                  All Skills
                </p>
              </div>
            </h2>
          </div>

          {loader ? (
            <div className='PannelContent border-0 all_skills_list'>
              {enrollCoursesJson?.records &&
                getSequnceSort(enrollCoursesJson?.records)?.map((val, key) => (
                  <div className='profile_division' key={key}>
                    <div className='Profileheading' key={val?.id}>
                      <h4
                        className={`panel-title heding-title justify-content-between `}
                        data-toggle='collapse'
                        href={"#section_" + key}
                        aria-expanded={
                          accordionObj.includes(val.id) ? true : false
                        }
                        onClick={() => {
                          childCollapsehandler(val?.id);
                        }}>
                        <span>
                          <i>{getDimIcon(val?.name)}</i>
                          <span className=''>{val?.name} </span>
                        </span>

                        <span>
                          <i className='fa fa-chevron-down icon-show'></i>
                        </span>
                      </h4>
                    </div>
                    <div
                      className={`panel-collapse collapse ${
                        accordionObj.includes(val.id) ? "show" : ""
                      } `}
                      id={"#section_" + key}>
                      <ul className='w-100'>
                        {getSequnceSort(val?.skills)?.map(
                          (skill, key) =>
                            skill?.courses?.length > 0 && (
                              <div
                                key={key}
                                className={`panel-body d-flex justify-content-between py-1 ${
                                  skill?.id === selectedActi
                                    ? "Activeskills"
                                    : ""
                                }`}
                                onClick={() => {
                                  handleSkillIndex(skill);
                                  setSelectedDim(val?.id);
                                }}>
                                <li className='d-flex align-items-center'>
                                  <span>
                                    <img
                                      src={image.CourseTitleIcon}
                                      alt=''
                                      className='mr-2'
                                    />
                                  </span>
                                  <span className=''>
                                    {skill?.name} [{skill?.courses.length}]
                                  </span>
                                </li>
                              </div>
                            )
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <ShimmerCategoryList items={3} categoryStyle='STYLE_SIX' />
          )}
        </div>
      </Home>
      {/* {showPopUp && (
        <SubscribePopUp
          handleSubscribe={handleSubscribe}
          closePopup={closePopup}
        />
      )} */}
      {showSubs && (
        <Subscription close={closeSub} subscribeData={subscribeData} />
      )}

      {openReward && (
        <RewardPopUp
          closeReward={viewReward}
          rewardDataWithoutAPI={openReward}
        />
      )}
    </>
  );
};
export default ParentCourseFilter;

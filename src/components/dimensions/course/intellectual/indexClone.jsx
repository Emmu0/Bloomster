/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";
import {
  billingPlan,
  resetResponse,
  resetStripePlans,
  selectTab,
  setProviderModal,
  showModal,
} from "../../../../redux/actions";
import {
  getCurriculam,
  getDimensionData,
  getMetaData,
  learnerEnrolled,
  turnNotification,
  deleteDimension,
  logoutAction,
  courseJourney,
  getRewardData,
  getLesson,
  getJourny,
  subMitUserGrade,
} from "../../../../redux/actions/APIs";
import Home from "../../../Home";
import { Progress, AddVdoActivity } from "../../";
import CourseCard from "../intellectual/CourseCard";
import {
  ShimmerCategoryList,
  useHistory,
  useParams,
} from "../../../../utils/Packages";
import { getSequnceSort } from "../../../../utils/helper";
import ActivityView from "../../activity/ActivityView";

import CurriculumDetails from "../../../dimensions/activity/CurriculumDetails";

import { DIMENSION, TIPS } from "../../../../utils/DataObjects";
import CourseConfirmedPage from "../../courseConfirmedPage";

import { KeyArea, DimTab, ChooseSubject } from "../common";
import ExploreView from "../../activity/ExploreView";
import SubscribePopUp from "../../SubscribePopUp";
import Subscription from "../../../subscription/Subscription";

import { PATHS } from "../../../../utils";
import { getHelpModal } from "../../../../redux/actions";
import DimensionHint from "../../../widget/DimensionHint";
import { ShimmerThumbnail } from "react-shimmer-effects";
import Certificate from "../../../base/Certificate";
import RewardPopUp from "../../../base/RewardPopUp";

import SkillCourseIcon from "./SkillCourseIcon";

import CongratulationCard from "../../../widget/CongratulationCard";
import IndexRightPanel from "../../IndexRightPanel";
import SkillGrowth from "../../../home/SkillGrowth";
import DimInfoPopup from "../../DimInfoPopup";
import GradePopup from "./GradePopup";

const Intellectual = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [chooseSubjectObj, setChooseSubject] = useState([]);
  const [noti, setNoti] = useState(true);
  const [selectedTab, setSelectedTab] = useState();
  const [teacherData, showTeacherData] = useState(undefined);
  const [teacherDataOpen, setTeacherDataOpen] = useState(false);
  const [courseDetail, setCourseDetail] = useState(false);
  const [showCourseDetail, setShowCourseDetail] = useState("");
  const [previewState, setPreviewState] = useState(false);
  const [resourceInnerData, setResourceInnerData] = useState({});
  const [skillId, setSkillId] = useState("");
  const [courseDetailId, setCourseDetailId] = useState("");
  const [viewActivity, setViewActivity] = useState({
    view: false,
    data: "",
    activityObj: "",
  });
  let [showCurriculum, setShowCurriculum] = useState({
    flag: false,
    data: "",
    type: "",
    courses: "",
    courseSubject: "",
    name: "",
    skills: "",
  });

  const [showChooseSubject, setShowChooseSubject] = useState(false);
  const [showActivityForm, setActivityForm] = useState({});
  const [showmodal, setShowModal] = useState(false);
  const [courseIds, setCourseIds] = useState([]);
  const [curriculamData, setCurriculamData] = useState({
    type: false,
    name: "",
  });
  const [corPopup, setCorPopup] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSubs, setShowSubs] = useState(false);

  const [subscribeData, setSubscribeData] = useState();
  const [isChooseSubject, setIsChooseSubject] = useState(false);
  const [showTips, setShowTips] = useState();
  const [tipsData, setTipsData] = useState();
  const [showCongratulationModel, setShowCongratulationModel] = useState(false);
  const [info, setInfo] = useState();
  const [enrollDisable, setEnrollDisable] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [showGradePopup, setShowGradePopup] = useState(false);
  const [curricullumSkill, setCurricullumSkill] = useState(false);

  const {
    dimension,
    getSelectedUser,
    loggedInUser,
    courseList,
    response,
    activityData,
    activyDetails,
    getAssessData,
    notification,
    getdimension,
    getLessonResources,
    selectedDim,
    defaultChildData,
    signinresponse,
    signupresponse,
    alluserdetails,
    addLearner,
    nfRedirect,
    journeyData,
    modalData,
    addVideoResponse,
    lockPopupData,
    getCurriculamData,
    userGradeResponse,
  } = useSelector((state) => state.collections);

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   if (addLearner?.success) {
  //     history.push({
  //       pathname:
  //         PATHS.DIMENSION_STR +
  //         getdimension?.records[3]?.id +
  //         "/" +
  //         addLearner?.recordId,
  //     });
  //     dispatch(showModal({ type: "journeySkills" }));
  //     dispatch(getDimensionData());
  //   }
  // }, [addLearner, getdimension]);

  useEffect(() => {
    if (signinresponse?.success && getdimension && !nfRedirect) {
      // dispatch(showModal({ type: "DimRedirect" }));
    } else if (signupresponse?.success && getdimension) {
      dispatch(
        showModal({
          type: "journeySkills",
          childId: signupresponse.records[0].childId,
        })
      );
    }
  }, [getdimension]);
  let dimensionId = history?.location?.state?.dimId;
  let dimensionName = history?.location?.state?.dimName;

  useEffect(() => {
    let dimensionDetail = getdimension?.records;
    let currentDimension = [];
    //	to get the dimension name
    for (let index = 0; index < dimensionDetail?.length; index++) {
      if (dimensionDetail[index]?.id === params?.dimId) {
        currentDimension = dimensionDetail[index];
        break;
      }
    }

    let previousState = localStorage.getItem("previousState");

    if (previousState == null || previousState == "null") {
      if (loggedInUser) {
        let dataObj = {
          parentid: loggedInUser?.id
            ? loggedInUser?.id
            : signupresponse?.records[0]?.parentId,
          uistate: [
            {
              userid:
                defaultChildData && defaultChildData?.id
                  ? defaultChildData?.id
                  : signupresponse && signupresponse?.records[0]?.childId,
              detail: {
                dimension: currentDimension?.name,
                skill: "",
                course: "",
                scene: "",
                kc: "",
                dimId: params?.dimId,
              },
              page: "",
            },
          ],
        };
        localStorage.setItem("previousState", JSON.stringify(dataObj));
      } else {
        if (!localStorage.getItem("access_token")) {
          dispatch(logoutAction());
        }
      }
    } else {
      previousState = JSON.parse(previousState);
      let uistate = previousState?.uistate;
      let isLearnerExists = false;
      for (let index = 0; index < uistate?.length; index++) {
        if (uistate[index]?.userid === params?.id) {
          isLearnerExists = true;
          uistate[index].detail = {
            dimension: currentDimension?.name,
            skill: "",
            course: "",
            scene: "",
            kc: "",
            dimId: params?.dimId,
          };
          uistate[index].page = "";
          localStorage.setItem("previousState", JSON.stringify(previousState));
          break;
        }
      }
      if (!isLearnerExists) {
        let obj = {
          userid: params?.id,
          detail: {
            dimension: currentDimension?.name,
            skill: "",
            course: "",
            scene: "",
            kc: "",
            dimId: params?.dimId,
          },
          page: "",
        };
        uistate.push(obj);
        localStorage.setItem("previousState", JSON.stringify(previousState));
      }
    }
  }, [params]);

  useEffect(() => {
    if (dimensionId) {
      dispatch(
        selectTab({
          key: dimensionId,
          value: dimensionName,
        })
      );
    }
  }, [dimensionId]);

  useEffect(() => {
    dispatch(resetResponse());
  }, [response]);

  let redirectState = history?.location?.state?.redirect;

  useEffect(() => {
    if (getdimension && !selectedDim?.key && !redirectState) {
      if (getdimension?.records[3]?.id == params?.dimId) {
        dispatch(
          selectTab({
            key: getdimension?.records[3]?.id,
            value: getdimension?.records[3]?.name,
          })
        );
      }
    } else if (redirectState) {
      dispatch(
        selectTab({
          key: redirectState?.id,
          value: redirectState?.name,
        })
      );
    } else if (selectedDim?.key) {
      let selectedDimTab = getdimension?.records.filter(
        (data) => data.id === params.dimId
      );
      if (selectedDimTab) {
        dispatch(
          selectTab({
            key: selectedDimTab[0]?.id,
            value: selectedDimTab[0]?.name,
          })
        );
      }
    }
  }, [getdimension]);

  const setCourseObject = (tab) => {
    let tag = [];
    if (tab) {
      let data = dimension[tab?.value];
      setSelectedTab({
        key: selectedDim,
        data: data && data,
        tag: dimension[tab?.value]?.skills,
      });
    }
  };
  //	03060552 - 71ae - 4ba4 - 89bc - 6784c4b428c7, Intellectual
  const toggleTab = (index, data) => {
    history.push({
      pathname: PATHS.DIMENSION_STR + data?.id + "/" + getSelectedUser?.id,
    });
    dispatch(
      selectTab({
        key: data.id,
        value: data?.name,
      })
    );
    if (getSelectedUser && getSelectedUser?.role?.name === "LEARNER") {
      let selectedTab = {
        key: data.id,
        value: data.name,
      };

      if (!dimension[selectedTab.value]) {
        dispatch(getDimensionData(params?.id, selectedTab, dimension)).then(
          () => {
            setCourseObject(data?.name);
          }
        );
      }
    }
  };

  // useEffect(() => {
  //   if (response) {
  //     toggleTab(0, { id: params?.dimId, name: "Intellectual" });
  //   }
  // }, [response]);

  const [target, setTarget] = useState("");
  const [cortarget, setcorTarget] = useState("");
  const [abandonCourses, setAbandomCourse] = useState();
  useEffect(() => {
    if (history?.location?.state?.courseId) {
      const scrollToTarget = document.getElementById(
        "myCourse" + history?.location?.state?.courseId
      );

      setcorTarget(scrollToTarget);

      if (scrollToTarget) {
        scrollToTarget.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [params?.id, selectedTab?.tag?.value, selectedTab?.data, cortarget]);

  useEffect(() => {
    if (history?.location?.state?.skillId) {
      const scrollToTarget = document.getElementById(
        "mytab" + history?.location?.state?.skillId
      );

      setTarget(scrollToTarget);

      if (scrollToTarget) {
        scrollToTarget.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        // scrollToTarget.scrollIntoView(scrollTo(scrollToTarget.scrollY, 20));
        // let dims = blue.getBoundingClientRect();
        // window.scrollTo(scrollToTarget.scrollX, 0 + 5);
        // window.scrollTop += 10;
      }
    }
  }, [history?.location?.state?.skillId]);
  useEffect(() => {
    if (history?.location?.state?.skillId) {
      const scrollToTarget = document.getElementById(
        "mytab" + history?.location?.state?.skillId
      );

      setTarget(scrollToTarget);

      if (scrollToTarget) {
        scrollToTarget.scrollIntoView({ behavior: "smooth", block: "center" });
        // scrollToTarget.scrollIntoView(scrollTo(scrollToTarget.scrollY, 20));
        // let dims = blue.getBoundingClientRect();
        // window.scrollTo(scrollToTarget.scrollX, 0 + 5);
        // window.scrollTop += 10;
      }
    }
  }, [params?.id, selectedTab?.tag?.value, selectedTab?.data, target]);

  useEffect(() => {
    let dimObj = getdimension?.records.find(
      (data) => data?.id === params?.dimId
    );

    if (dimObj) {
      let ob = {
        key: dimObj.id,
        value: dimObj.name,
      };

      dispatch(selectTab(ob));
      if (getSelectedUser?.id) {
        dispatch(deleteDimension(params?.id, ob, dimension, "all"));

        // dispatch(getDimensionData(params?.id, ob, dimension));
      }
    }
  }, [getSelectedUser?.id, dimension]);

  useEffect(() => {
    setCourseObject(selectedDim);
  }, [courseList, selectedDim]);

  useEffect(() => {
    if (!selectedDim) {
      let dimObj = getdimension?.records.find(
        (data) => data?.id === params?.dimId
      );

      if (dimObj) {
        let ob = {
          key: dimObj.id,
          value: dimObj.name,
        };

        dispatch(selectTab(ob));
      }
    }
  }, [selectedDim]);

  const showAddActivity = (type, data, obj) => {
    setActivityForm({ type, data, obj });
  };

  const closeModal = () => {
    setActivityForm(undefined);
    showTeacherData(undefined);
    setShowCurriculum(undefined);
    setCourseDetail(false);
    setShowCourseDetail(undefined);
    setShowModal(false);
    dispatch(resetResponse());
  };

  const closePro = () => {
    setActivityForm(undefined);
    showTeacherData(undefined);
    setTeacherDataOpen(false);

    if (!courseDetail) {
      setCourseDetail(false);
      setShowCourseDetail(undefined);
    }
    setShowModal(false);
    dispatch(resetResponse());
  };

  const closeModalSub = () => {
    setActivityForm(undefined);
    dispatch(resetResponse());
    setViewActivity({
      view: false,
      data: undefined,
      activityObj: undefined,
      selectedCourse: undefined,
    });
  };
  const closeModalEdit = () => {
    setViewActivity({
      view: false,
      data: undefined,
      activityObj: undefined,
      selectedCourse: undefined,
    });
  };
  useEffect(() => {
    if (addVideoResponse) {
      setActivityForm({});
      dispatch(resetResponse());
      dispatch(selectTab(selectedDim));
    }
  }, [addVideoResponse, selectedTab]);

  const handleCloseGradePopup = (result) => {
    setShowGradePopup(result);
  };

  const [showCurriResourcePopup, setShowCurriResource] = useState(false);
  const [isResourceClick, setIsResourceClick] = useState(false);
  const handleCurriResourcePopup = (result, isResource) => {
    setShowCurriResource(result);
    setIsResourceClick(isResource);
  };

  const showActivity = (
    data,
    type,
    courseName,
    courseSubject,
    skills,
    isResource
  ) => {
    skills.isResource = isResource;
    setCurricullumSkill(skills);

    if (getSelectedUser?.grade == null) {
      //	dispatch(subMitUserGrade());
      setShowGradePopup(true);
      return true;
    }

    dispatch(getCurriculam());
    dispatch(getCurriculam(getSelectedUser?.id, courseSubject?.id));
    setShowCurriculum({
      flag: true,
      data: data,
      type: type,
      courses: "courses[0]",
      name: courseName,
      userId: getSelectedUser?.id,
      courseId: courseSubject?.id,
      courseSubject: courseSubject,
      skills: skills,
    });

    if (isResource) {
      setActiveTab(2);
    } else {
      setActiveTab(1);
    }
  };

  let selectLessonName = [];
  let complextObj = [];
  selectLessonName = getCurriculamData?.records?.map((item, key) => {
    if (item?.isComplex) {
      selectLessonName = getSequnceSort(item?.lesssons)?.map(
        (vl, ky) =>
          vl?.isComplex &&
          vl?.countOfResources &&
          complextObj.push({
            modLessId: vl.moduleLessonId,
            lesson: vl.name,
            module: item.name,
            sequence: item.sequence,
          })
      );
      return complextObj;
    }
  });

  let selectLesson = [];
  selectLessonName &&
    getSequnceSort(complextObj)?.map(
      (vl, ky) => (
        selectLesson.push(vl), (selectLesson = getSequnceSort(selectLesson))
      )
    );

  selectLesson = getSequnceSort(selectLesson);

  useEffect(() => {
    if (getCurriculamData && selectLesson) {
      dispatch(getLesson(getSelectedUser?.id, selectLesson[0]?.modLessId)).then(
        () => { }
      );
    }
    dispatch(subMitUserGrade());
  }, [getCurriculamData]);

  useEffect(() => {
    if (getLessonResources) {
      dispatch(subMitUserGrade());
    }
  }, [getLessonResources]);

  const _viewCourseDetail = (data, id) => {
    setCourseDetail(true);
    setShowCourseDetail(data);
    setSkillId(id);
    setCourseDetailId(data.id);
  };

  const openCurriculam = (data) => {
    setCurriculamData({
      type: !curriculamData?.type,
      name: data?.name,
      modules: data?.courseModules,
      enroll: 0,
    });
  };

  const providerPopup = (data, courseData) => {
    if (courseData?.id !== journeyData?.recordId) {
      dispatch(showModal({ type: "JourneyShimmer" }));
      dispatch(courseJourney(courseData?.id));
    }

    setShowCourseDetail(courseData);
    setCourseDetailId(courseData.id);
    setTeacherDataOpen(true);
    if (showCurriculum) {
      data.resourceType = "resourceProvider";
      data.courseData = courseData;
    }

    dispatch(setProviderModal(data));
    showTeacherData(data);
    setIsChooseSubject(true);
  };

  const close = () => {
    setPreviewState(false);
    showTeacherData(undefined);
    setShowChooseSubject(false);
    setTeacherDataOpen(false);
    setChooseSubject([]);
    setIsChooseSubject(false);
  };

  const onSubmit = () => {
    if (noti === false) {
      dispatch(turnNotification(false));
    }
    if (courseIds.length > 0) {
      let formData = {
        courseIds: courseIds.join(","),
      };

      if (formData.courseIds === "") {
        closeModal();
      } else {
        dispatch(learnerEnrolled(getSelectedUser.id, formData));
        closeModal();
      }
    }
  };

  const setSubject = (data, type) => {
    let obj = data?.courses;
    obj.area = { id: data?.id, name: data?.name };
    setChooseSubject(obj);
    setShowChooseSubject(true);
  };

  const showViewActivity = (data, courseData, dimName, type) => {
    dispatch(getMetaData(data?.id));
    setViewActivity({
      view: true,
      data: data,
      activityObj: data?.activityDetails,
      selectedCourse: courseData,
      dimName: selectedDim?.value,
      type: type,
    });
  };

  const handlePopUp = (data, skillId, dimName, location) => {
    let obj = {
      courseObj: data,
      skillId: skillId,
    };

    setSubscribeData(obj);
    setShowPopUp(true);
    setShowSubs(false);
    if (location) {
      setIsChooseSubject(true);
    }
  };

  const closePopup = () => {
    setShowPopUp(false);
  };

  const closeSub = () => {
    dispatch(deleteDimension(getSelectedUser?.id, selectedTab?.key, dimension));
    dispatch(billingPlan());
    dispatch(resetStripePlans());
    setShowSubs(false);
  };

  const showResourceInnerDetail = (data) => {
    setResourceInnerData(data);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".SpecialLeftpanel");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("LPwidth")
      : header.classList.remove("LPwidth");
  };

  const openHelp = (data) => {
    dispatch(getHelpModal(data));
  };

  const closeExploreView = () => {
    // $("#resourceInnerModal").addClass("hide");
    // $("#resourceInnerModal").removeClass("show");
  };

  // const openDipInfoPopup = (courName) => {
  //   const dimPopupData = JSON.parse(localStorage.getItem("dimPopup")) || {};

  //   if (!dimPopupData[courName]) {
  //     dimPopupData[courName] = true;
  //     localStorage.setItem("dimPopup", JSON.stringify(dimPopupData));
  //     setAbandomCourse(dimPopupData);
  //   }
  // };

  const dimPopupData = JSON.parse(localStorage.getItem("dimPopup"));

  useEffect(() => {
    if (courseList) {
      const dimPopupData = JSON.parse(localStorage.getItem("dimPopup")) || {};
      if (selectedTab?.key?.value && !dimPopupData[selectedTab.key.value]) {
        if (dimPopupData[selectedTab.key.value] === undefined) {
          dimPopupData[selectedTab.key.value] = true;
          localStorage.setItem("dimPopup", JSON.stringify(dimPopupData));
          setAbandomCourse(dimPopupData);
        }
      }

      // if (!JSON.parse(localStorage.getItem("dimPopup"))) {
      //   openDipInfoPopup(courseList?.name);
      // }

      if (chooseSubjectObj?.area?.id) {
        let selectedSub = chooseSubjectObj?.area?.id;
        let skillObj = [];
        if (courseList && courseList?.areas?.length > 0) {
          skillObj = courseList?.areas;
        } else if (courseList?.skills.length > 0) {
          skillObj = courseList?.skills;
        }
        skillObj.map((vl, ky) => {
          if (vl?.id === selectedSub) {
            let obj = vl?.courses;
            obj.area = chooseSubjectObj?.area;

            setChooseSubject(obj);
          }
        });
      }
    }
  }, [courseList]);

  useEffect(() => {
    if (courseList && courseList?.skills) {
      courseList?.skills?.map((vl, ky) => {
        vl?.courses?.map((cour) => {
          if (cour.id === courseDetailId) {
            setShowCourseDetail(cour);
            showTeacherData(cour?.provider);
          }
        });
      });
    }
    if (courseList && courseList?.areas) {
      courseList?.areas?.map((vl, ky) => {
        vl?.courses?.map((cour) => {
          if (cour.id === courseDetailId) {
            setShowCourseDetail(cour);
            showTeacherData(cour?.provider);
          }
        });
      });
    }
  }, [showCourseDetail, courseList, teacherData, courseDetailId]);

  const [certificate, setCertificate] = useState();
  const [certificateData, setCertificateData] = useState();
  const [certificateskilldata, setcertificateskilldata] = useState();
  const [openReward, setOpenReward] = useState();

  const viewCertificate = (data, courseData, skills) => {
    setCertificate(data);
    setCertificateData(courseData);
    setcertificateskilldata(skills);
  };

  const viewReward = (data, isCourse, wk) => {
    setOpenReward(data);

    dispatch(getRewardData(params?.id, data?.id, isCourse));
  };

  const coursePageRedirect = (skillId) => {
    dispatch(getJourny(false));
    history.push({
      pathname: PATHS.COURSEPAGE_STR + params?.id,
      state: { isFilter: true, dimId: selectedTab?.key?.key, skillId: skillId },
    });

    //	history.push(PATHS.COURSEPAGE_STR + defaultChildData?.id);
  };

  const setDimensionSkill = (skill, course, journey) => {
    course.skills = {
      skillId: skill?.id,
      skillName: skill?.name,
      name: skill?.name,
      description: skill?.description,
      id: skill?.id,
    };
    course.journey = journey;
    return course;
  };
  // useEffect(() => {
  // 	if (selectedTab?.data) {
  getSequnceSort(selectedTab?.data?.skills)?.map((skill, index) => {
    skill.showCount = 0;
    skill.showText = true;
    skill.showProgressCount = 0;
    if (
      ["Math", "English", "Social Studies", "Science"]?.includes(skill?.name)
    ) {
      skill?.courses?.map((course, key2) => {
        setDimensionSkill(skill, course, "");
        if (course?.isEnrolled || course?.progress) {
          skill.showCount++;
          skill.showProgressCount++;
        }
        if (
          (course?.isEnrolled && course?.type !== "VICKY") ||
          (course?.progress && course?.type !== "VICKY")
        ) {
          skill.showText = false;
        }
      });
    }
    skill?.journey?.map((journey, key2) => {
      getSequnceSort(journey?.clevel)[0]?.courses?.map((course, key3) => {
        setDimensionSkill(skill, course, journey);
        if (
          (course?.isEnrolled && course?.type !== "VICKY") ||
          course?.progress
        ) {
          skill.showCount++;
        }
        if (
          (course?.isEnrolled && course?.type !== "VICKY") ||
          (course?.progress && course?.type !== "VICKY")
        ) {
          skill.showText = false;
        }

        if (course?.isreporting) {
          skill.showProgressCount++;
        }
      });
    });
  });

  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [infoPopupData, setinfoPopupData] = useState({});
  const [selectedDimension, setSelectedDimension] = useState([]);

  const handleShowInfoPopup = (result, data) => {
    setSelectedDimension(selectedTab?.key?.value);
    setShowInfoPopup(result);
    setinfoPopupData({
      name: data?.name,
      description: data?.description,
      alert: data?.alert,
      courses: data.courses,
    });
  };

  const setShowSkillPopup = (result) => {
    setShowInfoPopup(result);
  };

  const closeDipInfoPopup = (courName) => {
    const dimPopupData = JSON.parse(localStorage.getItem("dimPopup")) || {};
    if (dimPopupData[courName]) {
      dimPopupData[courName] = false;
      localStorage.setItem("dimPopup", JSON.stringify(dimPopupData));
      setCorPopup(localStorage.removeItem("abondonPop", true));
      setAbandomCourse(dimPopupData);
    }
    abandonSelectedValue = false;
  };

  let abandonSelectedValue;
  if (selectedTab && dimPopupData && selectedTab?.key?.value in dimPopupData) {
    if (selectedTab?.key?.value in dimPopupData) {
      abandonSelectedValue = dimPopupData[selectedTab.key.value];
    }
  }

  return (
    <>
      <Home>
        {/* {(["", "null", null].includes(alluserdetails?.records[0]?.uistate) &&
          showTips &&
          !modalData) ||
        localStorage.getItem("skip") === "false" ? (
          <DimensionHint
            skip={skip}
            data={tipsData}
            next={next}
            // setShowInfoPopup={setShowInfoPopup}
          />
        ) : (
          ""
        )} */}

        <div className="d-flex flex-wrap SpecialLeftpanel w-100">
          <div className="d-flex w-100 align-items-start overflow-visible">
            <div className="LeftbarPannel p-0">
              {/* {selectedTab?.data?.skills?.length > 0 ? (
                <>
                  <KeyArea
                    data={selectedTab?.data?.skills}
                    setSubject={setSubject}
                    tag={dimension[selectedTab?.key]}
                    tab={selectedTab?.key}
                  />
                </>
              ) : (
                <div className='GridCardList'>
                  <ShimmerThumbnail height={80} />
                </div>
              )} */}
              <div className="CourseCardWrapper">
                <div className="heading  gridSection d-flex w-100 p-0 border-0">
                  {getdimension && (
                    <DimTab
                      toggleTab={toggleTab}
                      data={getdimension}
                      toggleState={selectedDim}
                    />
                  )}
                </div>
                <div className="gridSection mt-2">
                  {/* {DIMENSION && loggedInUser ? (
                    <> */}

                  {selectedTab?.data?.skills?.length > 0 ? (
                    <>

                      <div className="content-tabs gridBody">
                        {selectedTab?.data?.skills &&
                          getSequnceSort(selectedTab?.data?.skills).map(
                            (value, key) => (
                              <div
                                key={key}
                                className={` content active-content`}
                                id={`mytab${value?.id}`}
                              >
                                <div className="SocialCoursecardWrap">
                                  <h4
                                    data-toggle={`${!value.showText &&
                                      value.type === "PROVIDER"
                                      ? "collapse"
                                      : ""
                                      }`}
                                    className={`flex KATitle collapse ${value.type === "PROVIDER" &&
                                      value?.courses?.length > 0 &&
                                      "pointer"
                                      }`}
                                    aria-expanded={`${!value.showText &&
                                      value.type === "PROVIDER"
                                      ? "true"
                                      : ""
                                      }`}
                                    href={`#socialcardAcordian${value?.id}`}
                                  >
                                    <span>
                                      {" "}
                                      <img src={image.CourseTitleIcon} alt="" />
                                      {!["Social Studies", "Science"]?.includes(
                                        value?.name
                                      ) && value?.name}
                                      {value?.courses?.length === 1 &&
                                        ["Social Studies", "Science"]?.includes(
                                          value?.name
                                        ) &&
                                        value?.courses[0]?.name}
                                      {value?.courses?.length === 3 &&
                                        ["Social Studies", "Science"]?.includes(
                                          value?.name
                                        ) &&
                                        value?.name}
                                      {value?.showCount > 0 &&
                                        " [" + value?.showCount + "]"}
                                    </span>
                                  </h4>

                                  <SkillCourseIcon
                                    data={value}
                                    openHelp={openHelp}
                                    setSubject={setSubject}
                                    selectedTab={selectedTab}
                                    disable={disable}
                                    showActivity={showActivity}
                                    handleShowInfoPopup={handleShowInfoPopup}
                                    handleCurriResourcePopup={
                                      handleCurriResourcePopup
                                    }
                                  />
                                  <React.Fragment key={key}>
                                    {[
                                      "Intellectual",
                                      "Physical",
                                      "Social",
                                      "Emotional",
                                      "Mindfulness",
                                    ].includes(selectedTab?.key?.value) && (
                                        <div
                                          className={`AllsCaedwrap collapse ${value?.id ==
                                            props?.location?.state?.skillId ||
                                            [
                                              "Intellectual",
                                              "Physical",
                                              "Social",
                                              "Emotional",
                                              "Mindfulness",
                                            ].includes(selectedTab?.key?.value)
                                            ? "show"
                                            : "hide"
                                            }`}
                                          id={`socialcardAcordian${value?.id}`}
                                        >
                                          {/* value?.showCount > 0 &&
																						!value?.showText */}
                                          {value?.showCount > 0 &&
                                            !value?.showText ? (
                                            getSequnceSort(value?.journey)?.map(
                                              (journey, key2) =>
                                                journey?.clevel[0]?.courses?.map(
                                                  (course, ky) => (
                                                    <span
                                                      key={ky}
                                                      id={`myCourse${course?.id}`}
                                                    >
                                                      {course?.type !==
                                                        "VICKY" && (
                                                          <CourseCard
                                                            skills={value}
                                                            data={course}
                                                            dimensionName={
                                                              course?.key
                                                            }
                                                            type={course?.type}
                                                            selectedTab={
                                                              selectedTab
                                                            }
                                                            setSubject={setSubject}
                                                            showViewActivity={
                                                              showViewActivity
                                                            }
                                                            activityData={
                                                              activityData
                                                            }
                                                            showActivity={
                                                              showActivity
                                                            }
                                                            showAddActivity={
                                                              showAddActivity
                                                            }
                                                            handlePopUp={
                                                              handlePopUp
                                                            }
                                                            closeModal={closeModal}
                                                            viewCertificate={
                                                              viewCertificate
                                                            }
                                                            viewReward={viewReward}
                                                            setEnrollDisable={
                                                              setEnrollDisable
                                                            }
                                                            enrollDisable={
                                                              enrollDisable
                                                            }
                                                          // openScoreCard={openScoreCard}
                                                          />
                                                        )}
                                                    </span>
                                                  )
                                                )
                                            )
                                          ) : value?.name === "Science" ||
                                            value?.name === "Social Studies" ? (
                                            <p className="notenrolledcourses">
                                              We are in the process of creating
                                              courses for this skill; please stay
                                              tuned for further updates.
                                            </p>
                                          ) : (
                                            value?.showText &&
                                            value?.courseCount > 0 && (
                                              <p className="notenrolledcourses">
                                                You have not enrolled in any
                                                courses yet.{" "}
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={() =>
                                                    coursePageRedirect(value?.id)
                                                  }
                                                >
                                                  Click here
                                                </a>{" "}
                                                to view available courses and
                                                enroll.
                                              </p>
                                            )
                                          )}
                                        </div>
                                      )}
                                  </React.Fragment>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </>
                  ) : (
                    <div className="GridCardList">
                      <ShimmerCategoryList
                        items={3}
                        categoryStyle="STYLE_SIX"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <IndexRightPanel
              progressObj={selectedTab?.data}
              selectedTab={selectedTab?.key}
              data={selectedTab}
              showActivity={showActivity}
              viewReward={viewReward}
            />
            {showmodal && notification === true && (
              <CourseConfirmedPage
                closeModal={closeModal}
                courseIds={courseIds}
                setCourseIds={setCourseIds}
                onSubmit={onSubmit}
                noti={noti}
                setNoti={setNoti}
              />
            )}
          </div>
        </div>
      </Home>
      {showActivityForm?.obj && (
        <AddVdoActivity
          obj={showActivityForm?.obj}
          type={showActivityForm?.data}
          closeModal={closeModal}
          showActivityForm={showActivityForm}
        />
      )}
      {viewActivity.view && (
        <ActivityView
          records={activyDetails}
          data={viewActivity?.data}
          object={viewActivity?.activityObj}
          closeModalSub={closeModalSub}
          closeModalEdit={closeModalEdit}
          dimName={viewActivity?.dimName}
          type={viewActivity?.type}
          selectedCourse={viewActivity?.selectedCourse}
          showActivity={showActivity}
          showViewActivity={showViewActivity}
          showAddActivity={showAddActivity}
        />
      )}
      {showCurriculum?.flag === true && (
        <CurriculumDetails
          data={showCurriculum?.data}
          closeModal={closeModal}
          type={showCurriculum?.type}
          courses={showCurriculum?.courses}
          courseName={showCurriculum?.courseSubject}
          showViewActivity={showViewActivity}
          showActivity={showActivity}
          dimensionName={showCurriculum?.courses?.key}
          selectedTab={selectedTab}
          showResourceInnerDetail={showResourceInnerDetail}
          handlePopUp={handlePopUp}
          providerPopup={providerPopup}
          setShowChooseSubject={setShowChooseSubject}
          tabIndex={activeTab}
          selectedLesson={selectLesson && selectLesson[0]?.modLessId}
        />
      )}
      {curriculamData?.type && (
        <CurriculumDetails
          closeModal={openCurriculam}
          getLessonResources={getLessonResources}
          courseName={curriculamData}
          data={curriculamData?.modules}
          enroll={curriculamData?.enroll}
          selectedTab={selectedTab}
          showActivity={showActivity}
          handlePopUp={handlePopUp}
          providerPopup={providerPopup}
          tabIndex={activeTab}
        />
      )}
      {showCurriculum?.courseSubject && (
        <ExploreView
          resourceInnerData={resourceInnerData}
          selectedCourse={showCurriculum?.courseSubject}
          handlePopUp={handlePopUp}
          getLessonResources={getLessonResources}
          areaId={showCurriculum?.skills?.id}
          providerPopup={providerPopup}
          closeExploreView={closeExploreView}
        />
      )}
      <div key={chooseSubjectObj.length}>
        {showChooseSubject && (
          <ChooseSubject
            data={chooseSubjectObj}
            close={close}
            selectedTab={selectedTab}
            handlePopUp={handlePopUp}
            _viewCourseDetail={_viewCourseDetail}
            setDisable={setDisable}
          />
        )}
      </div>
      {showSubs && (
        <Subscription close={closeSub} subscribeData={subscribeData} />
      )}
      {certificate && (
        <Certificate
          _redirectLesson={viewCertificate}
          certificateData={certificateData}
          certificateskilldata={certificateskilldata}
        />
      )}
      {openReward && (
        <RewardPopUp
          closeReward={viewReward}
          rewardDataWithoutAPI={openReward}
        />
      )}
      {abandonSelectedValue &&
        selectedTab?.data?.abandonedCourses.length > 0 && (
          <DimInfoPopup
            closeDipInfoPopup={closeDipInfoPopup}
            coursesData={selectedTab?.data?.abandonedCourses}
          />
        )}
      {showInfoPopup && (
        <SkillGrowth
          data={infoPopupData}
          dimName={selectedDimension}
          setShowSkillPopup={setShowSkillPopup}
        />
      )}
      {showGradePopup && (
        <GradePopup
          handleCloseGradePopup={handleCloseGradePopup}
          data={curricullumSkill}
          showActivity={showActivity}
        />
      )}

      {showCurriResourcePopup && (
        <div className="newinfo_popupdimension Whatadmcndo resoandcurriculum">
          <div
            className="modal fade show d-block"
            id="schoolactivity11"
            role="dialog"
          >
            <div className="modal-dialog modal-lg  gradepopup">
              <div className="modal-content courseInformation">
                <div className="modal-header">
                  <div className="heading border-0 p-0 w-100">
                    <h2 className="flex">
                      <span>
                        {isResourceClick ? (
                          <i className="fa-regular fa-person-chalkboard mr-2"></i>
                        ) : (
                          <i className="fa-regular fa-folders mr-2"></i>
                        )}
                        {isResourceClick ? "Resources" : "Curriculum"}
                      </span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleCurriResourcePopup(false, false)}
                      >
                        <i className="fa-regular fa-xmark m-0"></i>
                      </button>
                    </h2>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="infopopup_wrap  align-items-start">
                    <div className="infopopupright align-items-start pb-2">
                      <div className="WelcomScreen">
                        <div className="welcomscreenContent welcomscreentwo ">
                          <div className="w-100  pb-0 coursedescstyl curriresopopup">
                            <p className="d-flex align-items-start">
                              {isResourceClick
                                ? "Explore our Resources link to discover a curated collection of top-quality internet resources, quizzes, and practice tests that cover all modules and lessons relevant to your selected subject and grade level."
                                : "Select the Curriculum link to access a comprehensive list of modules and lessons included within the Common Core Plus curriculum for your chosen grade level."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer dontshowagain">
                  <div className="form-group BDsubmitbutton m-0 d-flex">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                        onClick={() => handleCurriResourcePopup(false, false)}
                      >
                        <i className="fa-solid fa-xmark"></i> Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Intellectual;

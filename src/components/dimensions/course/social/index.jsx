import React, { useEffect, useState } from "react";
import Home from "../../../Home";
import LessonWeekSidebar from "./LessonWeekSidebar";
import Series from "./Series";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as image from "../../../../resources/images";
import { getSequnceSort } from "../../../../utils/helper";
import useSound from "use-sound";
import correct from "../../../../resources/sound/right.mp3";
import ViewVideo from "../../activity/ViewVideo";
import Personality from "./Personality";
import { PATHS } from "../../../../utils";
import {
  addRatingsData,
  getCourseRating,
  getJournyCourseData,
  getJournyData,
  GetRibbon,
  getSocialActivityDetail,
  NextScene,
  updatekcstate,
} from "../../../../redux/actions/APIs";
import {
  sceanIndex,
  selectTab,
  beginMultiQuiz,
  showModal,
  setCourseModal,
  selectOptionData,
} from "../../../../redux/actions";
import Recap from "./Recap";

import Characters from "./Characters";
import CongratulationCard from "../../../widget/CongratulationCard";
import Certificate from "../../../base/Certificate";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShimmerCategoryList } from "react-shimmer-effects";
import SmartMultiQuiz from "../../../profile/SmartMultiQuiz";
import { postData } from "../../../../redux/actions/PersonalityAPIs";
import CompleteCourseGuide from "../../../base/CompleteCourseGuide";
import RewardUnlockPopup from "../../../widget/RewardUnlockPopup";
import AddRatings from "../../../widget/AddRatings";
import EmpathyQuizz from "../../../profile/empathy-quiz/EmpathyQuizz";
import Sidebar from "../../../profile/empathy-quiz/Sidebar";
import Tab from "./Tab";
import Survey from "../assessment/Survey";

const SocialLession = (props) => {
  const history = useHistory();
  const param = useParams();
  const [right] = useSound(correct);
  const dispatch = useDispatch();
  const [seriesSceneStep, setSeriesSceneStep] = useState(0);
  const [leftPanelLimit, setLeftPanelLimit] = useState(0);
  const [showCongratulationModel, setShowCongratulationModel] = useState(false);
  const [providerEarnPoint, setProviderEarnPoint] = useState(0);
  const [providerSceneEarnPoint, setProviderSceneEarnPoint] = useState(0);
  const [providerSceneReview, setProviderSceneReview] = useState([]);
  const [providerPointsData, setProviderPointsData] = useState();
  const [isNextButtonDisable, setNextButtonDisable] = useState(true);
  const [seriesScenesData, setSeriesScenesData] = useState();
  const [previousPoint, setPreviousPoint] = useState(0);
  const [isKcRequiredDisabled, setIsKcRequiredDisabled] = useState(true);
  const [disableKcRequiredList, setDisabledKcRequiredList] = useState([]);
  const [senceCompletedArray, setSenceCompletedArray] = useState([]);
  const [playVideo, setPlayVideo] = useState(true);
  const [showRewardUnlock, setShowRewardUnlock] = useState(false);
  const [isContinueButtonClick, setIsContinueButtonClick] = useState(false);
  const [rewardData, setRewardData] = useState([]);
  const [ratingPopup, setRatingPopup] = useState(false);
  const [myRating, setMyRating] = useState([]);
  const [courseData, setCourseData] = useState([]);

  const handleShowRewardUnlockPopup = (result, imageUrl, rewardName) => {
    setShowRewardUnlock(result);
    let obj = {
      imageUrl: imageUrl,
      rewardName: rewardName,
    };
    setRewardData(obj);
  };

  const handleNextButtonDisable = (result) => {
    window.scrollTo(0, 0);
    setNextButtonDisable(result);
  };

  const {
    socialActivityData,
    selectedDim,
    next_scene_response,
    loggedInUser,
    kcStateResponse,
    getdimension,
    signinresponse,
    knowladge_check_response,
    modalData,
    nfRedirect,
    defaultChildData,
    response,
    courseRating,
    dimension,
  } = useSelector((state) => state.collections);
  useEffect(() => {
    if (next_scene_response || knowladge_check_response) {
      dispatch(GetRibbon(defaultChildData?.id));
    }
  }, [next_scene_response, knowladge_check_response]);

  let dimName = socialActivityData?.records[0]?.dimName;
  let innerSocialDim = getdimension?.records.find(
    (data) => data?.name === dimName
  );
  const handleCongratulationModel = (
    exceriseEarnPoint,
    points,
    totalAttemptedQuestion,
    totalExcerise,
    isRewardPopupShow,
    rewardData
  ) => {
    setShowCongratulationModel(true);
    setIsContinueButtonClick(isRewardPopupShow);
    setRewardData(rewardData);

    dispatch(showModal({ type: "congratulation" }));
    let obj = {
      points: points,
      totalAttemptedQuestion: totalAttemptedQuestion,
      totalExcerise: totalExcerise,
      providerSceneEarnPoint: providerSceneEarnPoint,
      exceriseEarnPoint: exceriseEarnPoint,
    };
    setProviderPointsData(obj);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(showModal());
    dispatch(getJournyData());
    dispatch(getJournyCourseData());
  }, [param?.id]);

  // need to check this condition again 27 July
  // useEffect(() => {
  // 	dispatch(
  // 		getSocialActivityDetail(
  // 			param?.id,
  // 			param?.courseId,
  // 			param?.activityId,
  // 			selectedDim?.value
  // 		)
  // 	);
  // }, [param]);

  const [selectedTab, setSelectedTab] = useState(
    props?.location?.state?.tab ? props?.location?.state?.tab : "Series"
  );
  const selectTabs = (tab, ind) => {
    if (modalData?.type == "courseHint") {
      dispatch(showModal());
    }
    dispatch(selectOptionData());
    let socialObj =
      socialActivityData &&
      socialActivityData?.records &&
      socialActivityData?.records[0];
    if (socialObj) {
      let currentScene = !next_scene_response
        ? socialObj?.currentScene - 1
        : next_scene_response?.records[0]?.currentScene - 1;
      dispatch(sceanIndex(socialObj?.series?.scenes[currentScene]));
      setSelectedTab(tab);
      setSeriesSceneStep(currentScene);
      if (tab === "Series" && !ind) {
        /*
        if (
          !socialActivityData?.records[0]?.series?.scenes[seriesSceneStep]
            ?.videourl
        ) {
          nextSceneHandler(currentScene);
        } else {
          videoSceneHandler(currentScene);
        }
        */
        nextSceneHandler(
          currentScene,
          socialActivityData?.records[0]?.series?.scenes[seriesSceneStep]
            ?.videourl
        );
        videoSceneHandler(currentScene);
        let value = !kcStateResponse
          ? socialObj?.currentKc > 1
            ? socialObj?.currentKc - 1
            : 0
          : kcStateResponse?.records[0]?.currentKc > 1
            ? kcStateResponse?.records[0]?.currentKc - 1
            : 0;
        kcStateUpdateHandler(currentScene, value);
      } else if (ind) {
        jumpToScene(ind);
      }
    }
  };

  useEffect(() => {
    if (next_scene_response) {
      setSeriesSceneStep(next_scene_response?.records[0]?.currentScene - 1);
      setPreviousPoint(next_scene_response?.records[0]?.points);
      let dataArray = getSequnceSort(
        socialActivityData?.records[0]?.series?.scenes
      );

      // && dataArray[seriesSceneStep]?.kc?.length == 0
      if (next_scene_response?.records[0]?.compScene) {
        if (
          dataArray &&
          !senceCompletedArray.includes(dataArray[seriesSceneStep]?.id)
        ) {
          let arr = senceCompletedArray;
          arr.push(dataArray[seriesSceneStep]?.id);
          setSenceCompletedArray(arr);
        }
      }
    }
  }, [next_scene_response]);

  useEffect(() => {
    if (knowladge_check_response) {
      setPreviousPoint(knowladge_check_response?.records[0]?.points);
    }
  }, [knowladge_check_response]);

  useEffect(() => {
    if (selectedTab) {
      dispatch(selectTab(selectedTab));
    }
  }, [selectedTab]);

  const getSocialActicityDetail = () => {
    console.log("step 1");
    dispatch(
      getSocialActivityDetail(
        param?.id,
        param?.courseId,
        param?.activityId,
        selectedDim?.value
      )
    );
  };

  useEffect(() => {
    getSocialActicityDetail();
    //	dispatch(setCourseModal({}));
  }, [param?.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    //	getSocialActicityDetail();
    let previousState = localStorage.getItem("previousState");

    let dimensionId = "";
    if (previousState != null) {
      previousState = JSON.parse(previousState);
      let uistate = previousState?.uistate;
      for (let index = 0; index < uistate?.length; index++) {
        if (uistate[index]?.userid === param?.id) {
          uistate[index].detail.scene = window.location.href;
          uistate[index].page = "";
          dimensionId = uistate[index]?.detail?.dimId;
          break;
        }
      }
      localStorage.setItem("previousState", JSON.stringify(previousState));
    } /* else {
			getSocialActicityDetail();
		}*/
    if (signinresponse?.success && !nfRedirect) {
      // dispatch(showModal({ type: "DimRedirect" }));
    }
  }, []);

  useEffect(() => {
    if (socialActivityData) {
      setLeftPanelLimit(socialActivityData?.records[0]?.series?.scenes?.length);
      getSequnceSort(socialActivityData?.records[0]?.series?.scenes);
      setSeriesSceneStep(socialActivityData?.records[0]?.currentScene - 1);
      setPreviousPoint(socialActivityData?.records[0]?.points);
    }
  }, [socialActivityData?.records]);

  useEffect(() => {
    if (socialActivityData && selectedTab === "Series") {
      /*
      if (
        !socialActivityData?.records[0]?.series?.scenes[seriesSceneStep]
          ?.videourl
      ) {
        nextSceneHandler(socialActivityData?.records[0]?.currentScene - 1);
      } else {
        handleNextButtonDisable(false);
        videoSceneHandler(socialActivityData?.records[0]?.currentScene - 1);
      }
      */
      nextSceneHandler(
        socialActivityData?.records[0]?.currentScene - 1,
        socialActivityData?.records[0]?.series?.scenes[seriesSceneStep]
          ?.videourl
      );
      videoSceneHandler(socialActivityData?.records[0]?.currentScene - 1);
      let myArray = [];
      let isKcRequired = false;
      socialActivityData?.records[0]?.series?.scenes?.map((val, index) => {
        myArray[index + 1] = isKcRequired;
        if (val?.kcRequired && !isKcRequired) {
          let isAllAttempted = false;
          socialActivityData?.records[0]?.series?.scenes[index]?.kc?.map(
            (val, index) => {
              if (!val?.attempted) {
                isAllAttempted = true;
              }
            }
          );
          isKcRequired = isAllAttempted ? true : false;
        }
      });
      myArray.shift();
      setDisabledKcRequiredList(myArray);
      // seriesSceneStep
      let currentScene = socialActivityData?.records[0]?.currentScene - 1;

      if (
        socialActivityData?.records[0]?.series?.scenes[currentScene]?.kcRequired
      ) {
        let isAllAttempted = false;
        socialActivityData?.records[0]?.series?.scenes[currentScene]?.kc?.map(
          (val, index) => {
            if (!val?.attempted) {
              isAllAttempted = true;
            }
          }
        );
        setIsKcRequiredDisabled(isAllAttempted);
      } else {
        setIsKcRequiredDisabled(
          socialActivityData?.records[0]?.series?.scenes[currentScene]
            ?.kcRequired
        );
      }

      let value =
        socialActivityData?.records[0]?.currentKc > 1
          ? socialActivityData?.records[0]?.currentKc - 1
          : 0;
      kcStateUpdateHandler(
        socialActivityData?.records[0]?.currentScene - 1,
        value
      );

      // if (
      // 	!senceCompletedArray.includes(
      // 		socialActivityData?.records[0]?.series?.scenes[currentScene]?.id
      // 	) &&
      // 	socialActivityData?.records[0]?.series?.scenes[currentScene]?.kc
      // 		?.length == 0
      // ) {
      // 	let arr = senceCompletedArray;
      // 	arr.push(
      // 		socialActivityData?.records[0]?.series?.scenes[currentScene]?.id
      // 	);
      // 	setSenceCompletedArray(arr);
      // }

      socialActivityData?.records[0]?.series?.scenes?.map((val, index) => {
        if (val?.kc?.length > 0) {
          let isAllAttempted = true;
          val?.kc?.map((val2, index2) => {
            if (!val2?.attempted) {
              isAllAttempted = false;
            }
          });
          /*
                                              if (isAllAttempted && !senceCompletedArray.includes(val?.id)) {
                                                let arr = senceCompletedArray;
                                                arr.push(val?.id);
                                                setSenceCompletedArray(arr);
                                              }
                                              */
        }
      });
    }
  }, [socialActivityData?.records]);

  const handleSeriesSceneStep = (isNext) => {
    //	setSeriesSceneStep(index);
    handleNext(isNext);
  };

  const handleKcEnableDisabled = (result) => {
    setIsKcRequiredDisabled(result);
    if (!result) {
      let myArray = [];
      let isKcRequired = false;
      socialActivityData?.records[0]?.series?.scenes?.map((val, index) => {
        myArray[index + 1] = isKcRequired;
        if (val?.kcRequired && !isKcRequired) {
          let isAllAttempted = false;
          socialActivityData?.records[0]?.series?.scenes[index]?.kc?.map(
            (val, index) => {
              if (!val?.attempted) {
                isAllAttempted = true;
              }
            }
          );
          isKcRequired = isAllAttempted ? true : false;
        }
      });
      myArray.shift();
      setDisabledKcRequiredList(myArray);
    }
  };

  /*
           const handleKcSceneComplete = (result) => {
           if (!result) {
          if (
            !senceCompletedArray.includes(seriesScenesData[seriesSceneStep]?.id)
          ) {
            let arr = senceCompletedArray;
            arr.push(seriesScenesData[seriesSceneStep]?.id);
            setSenceCompletedArray(arr);
             
          }
           }
           };
           */

  useEffect(() => {
    if (socialActivityData) {
      dispatch(
        sceanIndex(
          socialActivityData?.records[0]?.series?.scenes[
          socialActivityData?.records[0]?.currentScene - 1
          ]
        )
      );
    }
  }, [socialActivityData?.records]);

  const nextSceneHandler = async (count, videoUrl) => {
    let sceanData = getSequnceSort(
      socialActivityData?.records[0]?.series?.scenes
    );

    let isSkill = true;
    /*		
    if (
      socialActivityData?.records[0]?.dimName == "Social" ||
      socialActivityData?.records[0]?.dimName == "Emotional" ||
      socialActivityData?.records[0]?.dimName == "Spiritual"
    ) {
      isSkill = true;
    }
    */

    if (videoUrl) {
      isSkill = false;
    }

    setTimeout(() => {
      if (loggedInUser && loggedInUser?.role?.name != "PROVIDER") {
        dispatch(
          NextScene(
            param?.id,
            param?.activityId,
            param?.courseId,
            param?.skillId,
            sceanData[count]?.id,
            isSkill
          )
        );
      }
    }, 100);

    videoSceneHandler(count);
  };

  const videoSceneHandler = (count) => {
    let sceanData = getSequnceSort(
      socialActivityData?.records[0]?.series?.scenes
    );
    if (loggedInUser?.role?.name === "PROVIDER") {
      //	if (sceanData && sceanData[count]?.kc?.length == 0) {
      if (!providerSceneReview.includes(sceanData[count]?.id)) {
        providerSceneReview.push(sceanData[count]?.id);
        let p = providerEarnPoint;
        p += 10;
        setProviderEarnPoint(p);
        setProviderSceneReview(providerSceneReview);
        setProviderSceneEarnPoint(providerSceneEarnPoint + 10);
      }
      //	}
    }
  };

  const kcStateUpdateHandler = async (sceneIndex, questionIndex) => {
    let sceanData = getSequnceSort(
      socialActivityData?.records[0]?.series?.scenes
    );
    if (
      sceanData &&
      sceanData[sceneIndex] &&
      sceanData[sceneIndex]?.kc?.length > 0
    ) {
      setTimeout(() => {
        if (loggedInUser?.role?.name != "PROVIDER") {
          dispatch(
            updatekcstate(
              param?.id,
              param?.activityId,
              sceanData[sceneIndex]?.id,
              sceanData[sceneIndex]?.kc[questionIndex]?.id
            )
          );
        }
      }, 300);
    }
  };
  const cb = React.useRef();

  const handleNext = (isNext) => {
    if (modalData?.type == "courseHint") {
      dispatch(showModal());
    }
    //	setTimeout(() => {\
    let activityData = getSequnceSort(
      socialActivityData?.records[0]?.series?.scenes
    );
    setSeriesScenesData(getSequnceSort(activityData));
    //	}, 2000);
    window.scrollTo(0, 0);

    let totalScene = activityData?.length;
    let count = seriesSceneStep;
    if (isNext) {
      //	setSeriesScenesData(undefined);
      if (totalScene - 1 > count) {
        if (loggedInUser?.role?.name !== "PROVIDER") {
          handleNextButtonDisable(true);
        } else {
        }

        ++count;

        nextSceneHandler(count, activityData[count]?.videourl).then((res) => {
          kcStateUpdateHandler(count, 0);
        });
        videoSceneHandler(count);

        /*
        if (!activityData[count]?.videourl) {
          nextSceneHandler(count).then((res) => {
            kcStateUpdateHandler(count, 0);
          });
        } else {
          videoSceneHandler(count);
          kcStateUpdateHandler(count, 0);
        }
        */

        /*
                                    if (
                                      activityData[count]?.kc?.length == 0										
                                    ) {
                                      if (
                                      !providerSceneReview.includes(
                                       activityData[count]?.id
                                      )
                                      ) {
                                      providerSceneReview.push(
                                       activityData[count]?.id
                                      );
                                      let p = providerEarnPoint;
                                      p += 10;
                                      setProviderEarnPoint(p);
                                      }
                                    }
                                     	
                                    setProviderSceneReview(providerSceneReview);
                                    */
        /*
                                    if (
                                      !senceCompletedArray.includes(seriesScenesData[count]?.id) &&
                                      seriesScenesData[count]?.kc?.length == 0
                                    ) {
                                      let arr = senceCompletedArray;
                                      arr.push(seriesScenesData[count]?.id);
                                      setSenceCompletedArray(arr);
                                    }
                                    */
      } else if (totalScene - 1 == count) {
        handleCongratulationModel();
      }
    } else {
      if (count != 0) {
        --count;

        handleNextButtonDisable(true);
        nextSceneHandler(count, activityData[count]?.videourl).then((res) => {
          kcStateUpdateHandler(count, 0);
        });
        videoSceneHandler(count);

        /*
        if (!activityData[count]?.videourl) {
          handleNextButtonDisable(true);
          nextSceneHandler(count).then((res) => {
            kcStateUpdateHandler(count, 0);
          });
        } else {
          videoSceneHandler(count);
          kcStateUpdateHandler(count, 0);
        }
        */

        /*
                                    if (
                                      !senceCompletedArray.includes(seriesScenesData[count]?.id) &&
                                      seriesScenesData[count]?.kc?.length == 0
                                    ) {
                                      let arr = senceCompletedArray;
                                      arr.push(seriesScenesData[count]?.id);
                                      setSenceCompletedArray(arr);
                                      console.log("arr", arr);
                                    }
                                    */
      }
    }

    //	For Breadcrum
    dispatch(sceanIndex(activityData[count]));
    setSeriesSceneStep(count);

    if (activityData[count]?.kcRequired) {
      let isAllAttempted = false;
      activityData[count]?.kc?.map((val, index) => {
        if (!val?.attempted) {
          isAllAttempted = true;
        }
      });
      setIsKcRequiredDisabled(isAllAttempted);
    } else {
      setIsKcRequiredDisabled(activityData[count]?.kcRequired);
    }
  };

  const [popup, setPopUp] = useState("");
  const vediopopup = (data) => {
    setPopUp(data);
  };
  const close = () => {
    setPopUp(false);
  };

  const [isBeginQuizShow, setIsBeginQuizShow] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const showQuiz = (isShow) => {
    setIsShow(isShow);
  };
  useEffect(() => {
    setIsBeginQuizShow(false);
  }, []);
  // End Modified By Najab 20-March-2023

  window.addEventListener("click", (event) => {
    if (event?.target && event?.target?.title === "Personality Type") {
      event.preventDefault();
      if (selectedTab !== "Personality Type") {
        selectTabs("Personalities");
        return false;
      }
    } else if (
      event?.target &&
      event?.target?.title === "Multiple Intelligences"
    ) {
      event.preventDefault();
      if (selectedTab !== "Multiple") {
        selectTabs("multiQuiz");
        return false;
      }
    } else if (event?.target && event?.target?.title === "EmpathyQuiz") {
      event.preventDefault();
      if (selectedTab !== "empthyQuiz") {
        selectTabs("empthyQuiz");
      }
    }
    if (event?.target && event?.target?.href) {
      if (event?.target?.href.includes("youtube")) {
        event.preventDefault();
        setPopUp(event.target?.href);
        setPlayVideo(false);
        return false;
      }
    }
  });

  const handleProviderPoint = (points) => {
    console.log(points, "points prince");
    setProviderEarnPoint(points);
  };

  const viewcertficate = (data) => {
    setShowCertificate(data);
  };

  const _redirectFromweekComplete = (type) => {
    if (loggedInUser?.role?.name != "PROVIDER") {
      let dimName = socialActivityData?.records[0]?.dimName;
      if (innerSocialDim?.id) {
        dispatch(
          selectTab({
            key: innerSocialDim?.id,
            value: innerSocialDim?.name,
          })
        );
        history.push({
          pathname: PATHS.DIMENSION_STR + innerSocialDim?.id + "/" + param.id,
          state: { courseId: param?.courseId },
        });
      }
    } else {
      history.push(PATHS.COURSE_STR + param.id);
    }
  };

  let openBox = false;

  if (modalData?.type === "courseHint") {
    openBox = true;
  }
  // if (modalData?.type === "courseHint") {
  //    showModal()
  // }

  if (modalData?.type === "courseHint") {
    openBox = true;
  }
  // if (modalData?.type === "courseHint") {
  //    showModal()
  // }

  const jumpToScene = (index) => {
    if (index !== seriesSceneStep) {
      kcStateUpdateHandler(index, 0);
      handleNextButtonDisable(true);
      setSeriesSceneStep(index);
      setNextButtonDisable(false);
      // if (socialActivityData?.records[0]?.series?.scenes[index]?.videourl) {
      // 	setNextButtonDisable(false);
      // }
      dispatch(
        sceanIndex(socialActivityData?.records[0]?.series?.scenes[index])
      );
      nextSceneHandler(
        index,
        socialActivityData?.records[0]?.series?.scenes[index]?.videourl
      );
      videoSceneHandler(index);
      /*
      if (
        !socialActivityData?.records[0]?.series?.scenes[seriesSceneStep]
          ?.videourl
      ) {
        nextSceneHandler(index);
      } else {
        videoSceneHandler(index);
      }
      */
      if (socialActivityData?.records[0]?.series?.scenes[index]?.kcRequired) {
        let isAllAttempted = false;
        socialActivityData?.records[0]?.series?.scenes[index]?.kc?.map(
          (val, i) => {
            if (!val?.attempted) {
              isAllAttempted = true;
            }
          }
        );
        setIsKcRequiredDisabled(isAllAttempted);
      } else {
        setIsKcRequiredDisabled(
          socialActivityData?.records[0]?.series?.scenes[index]?.kcRequired
        );
      }

      // if (
      // 	!senceCompletedArray.includes(seriesScenesData[index]?.id) &&
      // 	seriesScenesData[index]?.kc?.length == 0
      // ) {
      // 	let arr = senceCompletedArray;
      // 	arr.push(seriesScenesData[index]?.id);
      // 	setSenceCompletedArray(arr);
      // 	console.log("arr", arr);
      // }
    }
  };

  const handleOpenpopup = (result) => {
    setShowCongratulationModel(result);
  };

  const handleSetPlayVideo = (isFalse) => {
    setPlayVideo(isFalse);
  };

  const showRatingWizad = () => {
    dispatch(
      getCourseRating(
        defaultChildData?.id,
        socialActivityData?.records[0]?.courseId
      )
    );
  };

  useEffect(() => {
    if (courseRating) {
      setMyRating(courseRating?.records);
      setRatingPopup(!ratingPopup);
      setCourseData({
        id: socialActivityData?.records[0]?.courseId,
        name: socialActivityData?.records[0]?.courseName,
      });
    }
  }, [courseRating]);

  const showRating = () => {
    setRatingPopup(!ratingPopup);
    if (ratingPopup) {
      dispatch(getCourseRating());
    }
  };

  const saveRating = async (rating, userId, data) => {
    let ratingType = "course";

    if (courseData?.id) {
      dispatch(
        addRatingsData(
          rating,
          courseData?.id,
          userId,
          ratingType,
          dimension,
          selectedDim,
          param?.id
        )
      );
    }
  };

  useEffect(() => {
    if (response) {
      dispatch(getCourseRating());
      _redirectFromweekComplete();
    }
  }, [response]);

  return (
    <Home>
      {!showCertificate ? (
        <div className='d-flex flex-wrap SpecialLeftpanel w-100'>
          {socialActivityData?.records ? (
            <div className='d-flex w-100 align-items-start overflow-visible'>
              <div className='LeftbarPannel p-0 '>
                <div className='CourseCardWrapper fullHeight100'>
                  <div className='tabgrid m-0 socialgridtab flex'>
                    {socialActivityData && (
                      <Tab
                        socialActivityData={socialActivityData}
                        selectTabs={selectTabs}
                        selectedTab={selectedTab}
                      />
                    )}

                    <div className="LRSlidearrow CourseSlidearrrow">
                      {selectedTab == "Series" && (
                        <>
                          <span
                            className={`pointer ${seriesSceneStep == 0 || isNextButtonDisable
                                ? "DissableArrow"
                                : ""
                              }`}
                            onClick={() => handleNext(false)}>
                            <i className='fa-light fa-chevron-left'></i>
                          </span>
                          <span className='ScenePagination'>
                            <strong className='mr-2 '>
                              {/* Pankaj */}

                              {seriesSceneStep + 1}
                            </strong>
                            of
                            <strong className='ml-2'>
                              {socialActivityData &&
                                socialActivityData?.records[0] &&
                                socialActivityData?.records[0]?.series?.scenes
                                  ?.length}
                            </strong>
                          </span>
                          {/*socialActivityData?.records[0]?.kcRequired*/}

                          <span
                            className={`pointer ${isKcRequiredDisabled ||
                                seriesSceneStep == leftPanelLimit - 1 ||
                                isNextButtonDisable
                                ? "DissableArrow"
                                : ""
                              }`}
                            onClick={() => handleNext(true)}>
                            <i className='fa-light fa-chevron-right'></i>
                          </span>
                        </>
                      )}
                      {/* <span className="AudioIcon p-0 mr-2">
										<img src={image.Audioicon} alt="" />
									</span> */}
                    </div>
                    {selectedTab === "Series" && (
                      <div className='jumptopagescene dropdownlistmodl'>
                        <span
                          className={`Activitymenubar pointer jumptodropicn ${isNextButtonDisable ? "DissableArrow" : ""
                            }`}
                          aria-haspopup='true'
                          aria-expanded='false'
                          id={`barlistsubdropdown`}
                          data-toggle='dropdown'>
                          <i className='fa-regular fa-angle-down'></i>
                        </span>
                        <ul
                          className='dropdown-menu dropdown-menu-end'
                          aria-labelledby={`barlistsubdropdown`}>
                          {socialActivityData?.records[0]?.series?.scenes?.map(
                            (val, index) => (
                              <React.Fragment key={index}>
                                <li
                                  className={`pointer d-flex align-items-center ${disableKcRequiredList[index]
                                      ? "disable"
                                      : ""
                                    } ${seriesSceneStep === index
                                      ? "SceneActivePage"
                                      : ""
                                    }`}
                                  onClick={() => {
                                    jumpToScene(index);
                                  }}>
                                  <p className='text-left d-flex align-items-center'>
                                    <span className='mr-1 jumponscene'>
                                      {index + 1}
                                    </span>
                                    <span className='juweeknametext'>
                                      {val?.name}
                                    </span>
                                  </p>
                                  {(val?.isCompleted ||
                                    senceCompletedArray.includes(val?.id) ||
                                    providerSceneReview.includes(val?.id)) && (
                                      <span className='flex'>
                                        <img
                                          src={image.enrolledicon}
                                          alt=''
                                          className='alreadysceneed'
                                        />
                                      </span>
                                    )}
                                </li>
                              </React.Fragment>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className='Course_height'>
                    {selectedTab === "Series" &&
                      socialActivityData?.records && (
                        <Series
                          handleSeriesSceneStep={handleSeriesSceneStep}
                          seriesScenes={getSequnceSort(
                            socialActivityData?.records[0]?.series?.scenes
                          )}
                          weekData={socialActivityData?.records}
                          currentScene={seriesSceneStep}
                          isNextButtonDisable={isNextButtonDisable}
                          seriesScenesData={seriesScenesData}
                          setSeriesScenesData={setSeriesScenesData}
                          isKcRequiredDisabled={isKcRequiredDisabled}
                          showCongratulationModel={showCongratulationModel}
                          senceCompletedArray={senceCompletedArray}
                          setPlayVideo={setPlayVideo}
                          playVideo={playVideo}
                        />
                      )}
                    {selectedTab === "Characters" && (
                      <Characters
                        charimage={
                          socialActivityData &&
                          socialActivityData?.records[0]?.series?.charImage
                        }
                      />
                    )}
                    {/* {selectedTab === "Quiz" && <Quiz />} */}
                    {selectedTab === "References" && (
                      <Recap
                        data={socialActivityData?.records[0]?.series?.reference}
                      />
                    )}
                    {/* Added by Najab Maghribi 09-Feb-2023 for showing Personality Tab Content whenever tab will be active */}
                    {selectedTab === "Personalities" &&
                      socialActivityData?.records && (
                        <Personality
                          showQuiz={showQuiz}
                          setIsBeginQuizShow={setIsBeginQuizShow}
                        />
                      )}
                    {selectedTab === "multiQuiz" &&
                      socialActivityData?.records && <SmartMultiQuiz />}

                    {selectedTab === "empthyQuiz" && (
                      <EmpathyQuizz selectedTab={selectedTab} />
                    )}
                    {/* Growth Survey 9 May 2024 */}
                    {selectedTab === "growth" && <Survey />}
                  </div>
                </div>
              </div>

              {socialActivityData && (
                <LessonWeekSidebar
                  tab={selectedTab}
                  charDesc={socialActivityData?.records[0]?.series?.charDesc}
                  rptitle={
                    socialActivityData?.records[0]?.series?.scenes[
                      seriesSceneStep
                    ]?.rptitle
                  }
                  vediopopup={vediopopup}
                  application={
                    socialActivityData?.records[0]?.series?.scenes[
                      seriesSceneStep
                    ]?.application
                  }
                  reading={socialActivityData?.records[0]?.series?.reading}
                  kc={
                    socialActivityData?.records[0]?.series?.scenes[
                      seriesSceneStep
                    ]?.kc?.length > 0
                      ? getSequnceSort(
                        socialActivityData?.records[0]?.series?.scenes[
                          seriesSceneStep
                        ]?.kc
                      )
                      : socialActivityData?.records[0]?.series?.scenes[
                        seriesSceneStep
                      ]?.kc
                  }
                  currentScene={seriesSceneStep}
                  handleSeriesSceneStep={handleSeriesSceneStep}
                  totalSence={
                    socialActivityData?.records[0]?.series?.scenes?.length
                  }
                  points={socialActivityData?.records[0]?.points}
                  handleCongratulationModel={handleCongratulationModel}
                  seriesId={
                    socialActivityData?.records[0]?.series &&
                    socialActivityData?.records[0]?.series.id
                  }
                  setIsBeginQuizShow={setIsBeginQuizShow}
                  isShow={isShow}
                  setShowRepeat={setShowRepeat}
                  providerPoints={providerEarnPoint}
                  handleProviderPoint={handleProviderPoint}
                  handleNextButtonDisable={handleNextButtonDisable}
                  kcStateUpdateHandler={kcStateUpdateHandler}
                  seriesScenesData={seriesScenesData}
                  setSeriesScenesData={setSeriesScenesData}
                  previousPoint={previousPoint}
                  handleKcEnableDisabled={handleKcEnableDisabled}
                  //	handleKcSceneComplete={handleKcSceneComplete}
                  isKcRequiredDisabled={isKcRequiredDisabled}
                  isNextButtonDisable={isNextButtonDisable}
                  handleShowRewardUnlockPopup={handleShowRewardUnlockPopup}
                  handleSetPlayVideo={handleSetPlayVideo}
                  showCongratulationModel={showCongratulationModel}
                  setPlayVideo={setPlayVideo}
                />
              )}
            </div>
          ) : (
            <ShimmerCategoryList items={3} categoryStyle='STYLE_SIX' />
          )}

          {showCongratulationModel && !ratingPopup && (
            <CongratulationCard
              providerPointsData={providerPointsData}
              viewcertficate={viewcertficate}
              pctComplete={
                socialActivityData?.records &&
                socialActivityData?.records[0].courseIsCompleted
              }
              _redirectLesson={_redirectFromweekComplete}
              handleOpenpopup={handleOpenpopup}
              handleShowRewardUnlockPopup={handleShowRewardUnlockPopup}
              isContinueButtonClick={isContinueButtonClick}
              rewardData={rewardData}
              showRatingWizad={showRatingWizad}
            />
          )}
          {ratingPopup && (
            <AddRatings
              saveRating={saveRating}
              myRating={courseRating?.records}
              ratingUserId={defaultChildData?.id}
              showRating={showRating}
              data={courseData}
            />
          )}
        </div>
      ) : (
        <Certificate
          _redirectLesson={viewcertficate}
          //	_redirectLesson={_redirectFromweekComplete}
          CourseAndSkillId={socialActivityData?.records[0]}
        />
      )}

      {popup && <ViewVideo close={close} data={popup} />}
      <div key={Math.random()}>{openBox && <CompleteCourseGuide />}</div>

      {showRewardUnlock && (
        <RewardUnlockPopup
          handleShowRewardUnlockPopup={handleShowRewardUnlockPopup}
          rewardData={rewardData}
        />
      )}
    </Home>
  );
};

export default SocialLession;

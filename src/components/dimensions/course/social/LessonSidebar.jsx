import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { PATHS } from "../../../../utils";
import { selectTab, showModal } from "../../../../redux/actions";
import { getSequnceSort, kFormatter, textTrim } from "../../../../utils/helper";
import useSound from "use-sound";
import correct from "../../../../resources/sound/right.mp3";
import wrong from "../../../../resources/sound/wrong.mp3";

import ReactTooltip from "react-tooltip";
import {
  Knowladgecheck,
  sendCollabrationEmail,
  sendRewardEmail,
} from "../../../../redux/actions/APIs";
import Vicky from "../../../controls/Vicky";
import { ShimmerCategoryList } from "react-shimmer-effects";
import Sidebar from "../../../profile/empathy-quiz/Sidebar";
const LessonSidebar = ({ data }) => {
  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    selectedDim,
    knowladge_check_response,
    socialActivityData,
    getdimension,
    next_scene_response,
    loggedInUser,
    kcStateResponse,
    modalData,
    defaultChildData,
    growthSurveyData,
    selectOptData,
    surveyAssOpen,
  } = useSelector((state) => state.collections);

  const [selectedTab, setSelectedTab] = useState(data?.tab);
  const [quizData, setQuizData] = useState({});
  const [isValidOption, setValidOption] = useState(false);
  const [nuggetTitle, setNuggetTitle] = useState();
  const [rightNugget, setRightNugget] = useState(false);
  const [isRecentCorrent, setRecentCorrect] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [nugget, setNugget] = useState("");
  const [earnPoint, setEarnPoint] = useState(data?.points);
  const [isNuggetDisplay, setNuggetDisplay] = useState(false);
  const [showData, setShowData] = useState();
  const [summary, setSummary] = useState("");
  const [changePoint, setChangePoint] = useState(false);
  const [attemptedAns, setAttemptedAns] = useState();
  const [QueIndex, setQueIndex] = useState();
  const [instructions, setInstructions] = useState();
  const [selectedRadioOptionId, setSelectedRedioOptionId] = useState("");
  const [showCongratulationModel, setShowCongratulationModel] = useState(false);
  const [totalExceriseAttempted, setTotalExceriseAttempted] = useState(0);
  const [totalQuestionAttempted, setTotalQuestionAttempted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isExerciseSubmit, setExeriseSubmit] = useState(false);
  const [showPleaseWait, setShowPleaseWait] = useState(false);
  const [exceriseLearnPointState, setExceriseLearnPointState] = useState(0);
  const [isRewardPopupShow, setRewardPopupShow] = useState(false);
  const [isCourseRewardPopupShow, setCourseRewardPopupShow] = useState(false);
  const [rewardData, setRewardData] = useState([]);
  const [currentIncrasePoint, setCurrentIncreasePoint] = useState(0);
  const [collabEmailData, setCollabEmailData] = useState([]);
  const [completeSceneArray, setCompleteSceneArray] = useState([]);
  const [allSceneDataArray, setAllSceneDataArray] = useState([]);
  const [sceneTextMessage, setSceneTextMessage] = useState(
    "View all scenes, including the current one, before answering the questions."
  );
  useEffect(() => {
    if (socialActivityData?.records) {
      if (loggedInUser?.role?.name != "PROVIDER") {
        let completeScene =
          socialActivityData?.records[0]?.sceneCount?.split(",");
        setCompleteSceneArray(completeScene);
        let allScene = getSequnceSort(
          socialActivityData?.records[0]?.series?.scenes
        );
        let isPreviousTrue = true;
        for (let i = 1; i <= allScene?.length; i++) {
          if (completeScene?.includes(i.toString())) {
            if (isPreviousTrue) {
              allScene[i - 1].showTooltip = false;
            } else {
              allScene[i - 1].showTooltip = true;
            }
          } else {
            allScene[i - 1].showTooltip = true;
            isPreviousTrue = false;
          }
          // console.log('Debug :', allScene[i - 1].showTooltip, allScene[i - 1]?.name, allScene[i - 1]?.kc?.length)
        }
        setAllSceneDataArray(allScene);
      }
      let obj = {
        userId: loggedInUser?.id,
        childFirstName: defaultChildData?.firstName,
        childName: defaultChildData?.name,
        courseName: socialActivityData?.records[0]?.courseName,
        parentCollabScreen: "",
        parentCollabEmail: socialActivityData?.records[0]?.parentCollabEmail,
        childId: param?.id,
        courseId: param?.courseId,
      };
      setCollabEmailData(obj);
      //	setAllSceneDataArray(allScene);
      //	console.log('setAllSceneDataArray : ', allScene, completeSceneArray)
    }
  }, [socialActivityData?.records]);

  //console.log(isRecentCorrent, 'isRecentCorrent ==>');
  let counter = 0;
  const _redirectLesson = (type) => {
    let dimName = socialActivityData?.records[0]?.dimName;
    let selectedDim1 = getdimension.records.find(
      (data) => data?.name === dimName
    );

    if (selectedDim1?.id) {
      dispatch(
        selectTab({
          key: selectedDim1?.id,
          value: selectedDim1?.name,
        })
      );
      history.push({
        pathname: PATHS.DIMENSION_STR + selectedDim1?.id + "/" + param.id,
        state: { skillId: param?.skillId },
      });
    }
  };

  useEffect(() => {
    if (!data?.showCongratulationModel) {
      setShowCongratulationModel(false);
    }
  }, [data?.showCongratulationModel]);

  useEffect(() => {
    setNuggetDisplay(false);

    setSelectedQuestionIndex(0);
    setRecentCorrect(false);
    setIsResult(true);
    //	setEarnPoint(data?.points);
    //	setEarnPoint(earnPoint);
  }, [data?.currentScene]);

  useEffect(() => {
    if (kcStateResponse !== undefined) {
      setSelectedQuestionIndex(kcStateResponse?.records[0]?.currentKc - 1);
      setIsLoading(false);
    }
  }, [kcStateResponse?.records]);

  const [play] = useSound(correct);
  const [play1] = useSound(wrong);

  useEffect(() => {
    //	data?.handleNextButtonDisable(true);
    if (loggedInUser?.role?.name != "PROVIDER") {
      if (next_scene_response !== undefined) {
        handleSectionRewardPopup(next_scene_response, false);
        handleCourseRewardPopup(next_scene_response, false);
        setNuggetDisplay(false);
        setSelectedQuestionIndex(selectedQuestionIndex);
        setRecentCorrect(false);
        let currentPoint = next_scene_response?.records[0]?.points;
        let point =
          earnPoint > data?.previousPoint ? earnPoint : data?.previousPoint;
        //
        if (point != currentPoint) {
          data?.handleNextButtonDisable(true);
          setChangePoint(true);
          play();
          setTimeout(() => {
            setChangePoint(false);
            data?.handleNextButtonDisable(false);
          }, 3000);
        } else {
          data?.handleNextButtonDisable(false);
        }

        if (next_scene_response?.records[0]?.compScene) {
          let allSceneArray = getSequnceSort(
            socialActivityData?.records[0]?.series?.scenes
          );
          let sequence = allSceneArray[data?.currentScene]?.sequence;
          let sceneArray = completeSceneArray;
          // console.log('socialActivityData?.records[0] : ', sceneArray)
          if (!sceneArray?.includes(sequence)) {
            sceneArray.push(sequence);
            setCompleteSceneArray(sceneArray);
          }

          for (let i = 1; i <= allSceneArray?.length; i++) {
            // console.log('socialActivityData ', sceneArray?.includes(i.toString()), sceneArray?.includes(i))
            if (sceneArray?.includes(i.toString()) || sceneArray?.includes(i)) {
              allSceneArray[i - 1].showTooltip = false;
            } else {
              break;
              allSceneArray[i - 1].showTooltip = true;
            }
            // console.log('socialActivityData?.records[0] : ', allSceneArray[i - 1]?.name, allSceneArray[i - 1]?.showTooltip)
          }

          setAllSceneDataArray(allSceneArray);
        }
        /*
            if (!sceneArray?.includes(sequence)) {
              console.log("In If");
              sceneArray.push(sequence);
              setCompleteSceneArray(sceneArray);
            }
            console.log("EEE : ", sceneArray);
            for (let i = 1; i <= allSceneArray?.length; i++) {
              if (sceneArray?.includes(i.toString())) {
                console.log("EEE : If");
                allSceneArray[i - 1].showTooltip = false;
              } else {
                console.log("EEE : else", i);
                allSceneArray[i - 1].showTooltip = true;
              }
            }
            */

        setEarnPoint(currentPoint);
        if (
          socialActivityData?.records[0]?.isEnrolled &&
          !socialActivityData?.records[0]?.isPCEmailSent &&
          socialActivityData?.records[0]?.parentCollabEmail
        ) {
          dispatch(sendCollabrationEmail(loggedInUser?.id, collabEmailData));
          socialActivityData.records[0].isPCEmailSent = true;
        }
      }
    }
  }, [next_scene_response?.records]);

  const handleSectionRewardPopup = (responses, isContinue) => {
    let activityData = socialActivityData?.records[0];
    let isPopupAlreadyShow = isRewardPopupShow;
    let showTextLineOnCongratulationModel = false;
    if (activityData?.points >= activityData?.rewardTargetPoints) {
      isPopupAlreadyShow = true;
      setRewardPopupShow(true);
    } else if (
      !isPopupAlreadyShow &&
      responses?.records[0]?.points >= activityData?.rewardTargetPoints
    ) {
      if (!isContinue) {
        data?.handleShowRewardUnlockPopup(
          true,
          activityData?.rimageUrl,
          activityData?.rname
        );
      } else {
        showTextLineOnCongratulationModel = true;
      }
      isPopupAlreadyShow = true;
      setRewardPopupShow(true);
      handleSendRewardEmail(true, false, activityData);
    }
    //	console.log('Test 1 : ', showTextLineOnCongratulationModel);
    return showTextLineOnCongratulationModel;
  };

  const handleCourseRewardPopup = (responses, isContinue) => {
    let activityData = socialActivityData?.records[0];
    let tempPoint = responses?.records[0]?.points - activityData?.points;
    let isPopupAlreadyShow = isCourseRewardPopupShow;
    let showTextLineOnCongratulationModel = false;
    if (activityData?.ucPoints >= activityData?.rewardCTargetPoints) {
      isPopupAlreadyShow = true;
      setCourseRewardPopupShow(true);
    } else if (
      !isPopupAlreadyShow &&
      activityData?.ucPoints + tempPoint >= activityData?.rewardCTargetPoints &&
      activityData?.rcShowRewardPop
    ) {
      if (!isContinue) {
        data?.handleShowRewardUnlockPopup(
          true,
          activityData?.rcImageUrl,
          activityData?.rcName
        );
      } else {
        showTextLineOnCongratulationModel = true;
      }
      setCourseRewardPopupShow(true);
      handleSendRewardEmail(false, true, activityData);
    }
    //	console.log('Test 2 : ', showTextLineOnCongratulationModel);
    return showTextLineOnCongratulationModel;
  };

  const handleSendRewardEmail = (isActivity, isCourse, activityData) => {
    let values = {
      userCourseId: activityData?.ucId,
      userActivityId: activityData?.uaId,
      learnerId: defaultChildData?.id,
      courseId: activityData?.courseId,
      isCourse: isCourse,
      isActivity: isActivity,
    };
    dispatch(sendRewardEmail(values));
  };

  const handleShowRewardPopup = (responses, isContinue) => {
    //	userScpoints
    let testPoint =
      responses?.records[0]?.points - socialActivityData?.records[0]?.points;
    setCurrentIncreasePoint(testPoint);
    //	For Section PoPup
    let isRewardPopupDisplay = isRewardPopupShow;
    if (
      socialActivityData?.records[0]?.points >=
      socialActivityData?.records[0]?.rewardTargetPoints
    ) {
      isRewardPopupDisplay = true;
      setRewardPopupShow(true);
    } else if (
      responses?.records[0]?.points >=
        socialActivityData?.records[0]?.rewardTargetPoints &&
      !isRewardPopupDisplay
    ) {
      if (!isContinue) {
        data?.handleShowRewardUnlockPopup(
          true,
          socialActivityData?.records[0]?.rimageUrl,
          socialActivityData?.records[0]?.rname
        );
      }
      setRewardPopupShow(true);
      let values = {
        userCourseId: socialActivityData?.records[0]?.ucId,
        userActivityId: socialActivityData?.records[0]?.uaId,
        learnerId: defaultChildData?.id,
        courseId: socialActivityData?.records[0]?.courseId,
        isCourse: false,
        isActivity: true,
      };
      dispatch(sendRewardEmail(values));
    }

    //	userScpoints
    //	For Course PoPup
    //	console.log('Test Point : ', testPoint, socialActivityData?.records[0]?.ucPoints, (socialActivityData?.records[0]?.ucPoints + testPoint), socialActivityData?.records[0]?.rewardCTargetPoints);
    let isCourseRewardPopupDisplay = isCourseRewardPopupShow;
    if (
      socialActivityData?.records[0]?.ucPoints >=
      socialActivityData?.records[0]?.rewardCTargetPoints
    ) {
      isCourseRewardPopupDisplay = true;
      setCourseRewardPopupShow(true);
    } else if (
      socialActivityData?.records[0]?.ucPoints + testPoint >=
        socialActivityData?.records[0]?.rewardCTargetPoints &&
      !isCourseRewardPopupDisplay
    ) {
      if (!isContinue) {
        data?.handleShowRewardUnlockPopup(
          true,
          socialActivityData?.records[0]?.rcImageUrl,
          socialActivityData?.records[0]?.rcName
        );
      }
      setCourseRewardPopupShow(true);
      let values = {
        userCourseId: socialActivityData?.records[0]?.ucId,
        userActivityId: socialActivityData?.records[0]?.uaId,
        learnerId: defaultChildData?.id,
        courseId: socialActivityData?.records[0]?.courseId,
        isCourse: true,
        isActivity: false,
      };
      dispatch(sendRewardEmail(values));
    }
  };

  useEffect(() => {
    if (knowladge_check_response !== undefined) {
      if (data?.currentScene == data?.totalSence - 1) {
        let isAllNotAttempted = false;
        if (data?.seriesScenesData[data?.currentScene]?.kcRequired) {
          data?.kc?.map((val, index) => {
            if (!val?.attempted) {
              isAllNotAttempted = true;
            }
          });
          data?.handleKcEnableDisabled(isAllNotAttempted);
        }
        /*
                          isAllNotAttempted = false;
                          data?.kc?.map((val, index) => {
                          if (!val?.attempted) {
                          isAllNotAttempted = true;
                          }
                          });
                          data?.handleKcSceneComplete(isAllNotAttempted);
                          */
      }
      setIsLoading(false);
      setExeriseSubmit(false);
      if (showCongratulationModel) {
        let sectionResult = handleSectionRewardPopup(
          knowladge_check_response,
          true
        );
        let courseResult = handleCourseRewardPopup(
          knowladge_check_response,
          true
        );

        let activityData = socialActivityData?.records[0];
        let obj = {
          imageUrl: activityData?.rimageUrl,
          rewardName: activityData?.rname,
        };
        if (courseResult) {
          obj.imageUrl = activityData?.rcImageUrl;
          obj.rewardName = activityData?.rcName;
          data?.handleCongratulationModel(0, 0, 0, 0, courseResult, obj);
        } else {
          data?.handleCongratulationModel(0, 0, 0, 0, sectionResult, obj);
        }
      } else {
        handleSectionRewardPopup(knowladge_check_response, false);
        handleCourseRewardPopup(knowladge_check_response, false);
      }

      setSelectedQuestionIndex(selectedQuestionIndex);
      let currentPoint = knowladge_check_response?.records[0]?.points;

      let point = data?.previousPoint;
      if (point != currentPoint) {
        if (data?.currentScene != data?.totalSence - 1) {
          if (isNuggetDisplay) {
            setNuggetDisplay(true);
          }
          setRecentCorrect(true);
        }
        setChangePoint(true);
        play();
        setTimeout(() => {
          setChangePoint(false);
        }, 3000);
      }

      setEarnPoint(knowladge_check_response?.records[0]?.points);
      if (loggedInUser?.role?.name != "PROVIDER") {
        if (
          socialActivityData?.records[0]?.isEnrolled &&
          !socialActivityData?.records[0]?.isPCEmailSent &&
          socialActivityData?.records[0]?.parentCollabEmail
        ) {
          dispatch(sendCollabrationEmail(loggedInUser?.id, collabEmailData));
          socialActivityData.records[0].isPCEmailSent = true;
        }
      }
    }
  }, [knowladge_check_response?.records]);

  useEffect(() => {
    setEarnPoint(data?.previousPoint);
    if (kcStateResponse !== undefined) {
      setSelectedQuestionIndex(kcStateResponse?.records[0]?.currentKc - 1);
    }
  }, [data?.previousPoint, kcStateResponse?.records]);

  const [prevPoint, setPrevPoint] = useState(data?.providerPoints);
  useEffect(() => {
    //	setEarnPoint(data?.points);
    //	setEarnPoint(loggedInUser?.role?.name != "PROVIDER" ? data?.points : data?.providerPoints)
    if (data?.providerPoints != 0 && loggedInUser?.role?.name === "PROVIDER") {
      play();
    }
    if (
      loggedInUser?.role?.name === "PROVIDER" &&
      data?.providerPoints != 0 &&
      prevPoint != data?.providerPoints
    ) {
      data?.handleNextButtonDisable(true);
      setChangePoint(true);
      //play();

      setEarnPoint(data?.providerPoints);
      setPrevPoint(data?.providerPoints);
      setTimeout(() => {
        setChangePoint(false);
        data?.handleNextButtonDisable(false);
      }, 3000);
    } else if (
      loggedInUser?.role?.name === "PROVIDER" &&
      prevPoint == data?.providerPoints
    ) {
      setEarnPoint(data?.providerPoints);
    }
  }, [play, data?.providerPoints]);

  //	Submit knowladgeCheck response
  const KnowladgecheckHandler = async (isCorrectAttemptBody) => {
    let isSkill = false;
    if (
      socialActivityData?.records[0]?.dimName == "Social" ||
      socialActivityData?.records[0]?.dimName == "Emotional" ||
      socialActivityData?.records[0]?.dimName == "Spiritual"
    ) {
      isSkill = true;
    }
    if (loggedInUser?.role?.name != "PROVIDER") {
      if (data?.currentScene == data?.totalSence - 1) {
        setExeriseSubmit(true);
      }
      setIsLoading(true);
      dispatch(
        Knowladgecheck(
          param.id,
          data?.kc[selectedQuestionIndex]?.surveyId,
          param?.courseId,
          param?.activityId,
          param?.skillId,
          isCorrectAttemptBody,
          isSkill
        )
      );
    }
  };

  const [isResult, setIsResult] = useState(true);

  const handleNext = (isNext, isContinue, type, instructions, kcdata) => {
    setRecentCorrect(false);
    if (loggedInUser?.role?.name != "PROVIDER") {
      setIsLoading(true);
    }
    if (modalData?.type == "courseHint") {
      dispatch(
        showModal({
          type: modalData?.type === "courseHint" ? "" : "courseHint",
        })
      );
    }
    let count = selectedQuestionIndex;
    let totalQuestion = data?.kc?.length;
    let totalLearnPoint = earnPoint;
    let totalExceriseQuestion = totalExceriseAttempted;
    let exceriseLearnPoint = exceriseLearnPointState;
    if (type == "RADIOQ" && data?.currentScene == data?.totalSence - 1) {
      let question = data?.kc[selectedQuestionIndex];
      if (selectedRadioOptionId != "") {
        const isCorrectAttemptBody = {
          questionId: data.kc[selectedQuestionIndex].id,
          invalidAttempt: 0,
          type: type,
          answer: "",
          optionIds: [selectedRadioOptionId],
        };
        setSelectedRedioOptionId("");
        question["options"].map((value, index) => {
          if (value.attempted) {
            data.kc[selectedQuestionIndex]["options"][index].attempted = false;
          }
        });
        data.kc[selectedQuestionIndex]["options"][
          QueIndex - 1
        ].attempted = true;
        if (loggedInUser?.role?.name == "PROVIDER" && !question.attempted) {
          setChangePoint(true);
          play();
          setTimeout(() => {
            setChangePoint(false);
          }, 3000);

          setEarnPoint(earnPoint + question?.points);
          setExceriseLearnPointState(
            exceriseLearnPointState + question?.points
          );
          data?.handleProviderPoint(earnPoint + question?.points);
          totalLearnPoint += question?.points;
          exceriseLearnPoint += question?.points;
          setTotalExceriseAttempted(totalExceriseAttempted + 1);
          totalExceriseQuestion += 1;
        }
        KnowladgecheckHandler(isCorrectAttemptBody);
        question.attempted = true;
      }
    }
    if (type == "CHECKBOXQ") {
      let question = data?.kc[selectedQuestionIndex];
      let optIdsArray = [];
      question["options"].map((value, index) => {
        if (value.attempted) {
          optIdsArray.push(value?.id);
        }
      });
      const isCorrectAttemptBody = {
        questionId: data.kc[selectedQuestionIndex].id,
        invalidAttempt: 0,
        type: type,
        answer: "",
        optionIds: optIdsArray,
      };
      if (optIdsArray?.length > 0) {
        if (loggedInUser?.role?.name == "PROVIDER" && !question.attempted) {
          setChangePoint(true);
          play();
          setTimeout(() => {
            setChangePoint(false);
          }, 3000);

          setEarnPoint(earnPoint + question?.points);
          setExceriseLearnPointState(
            exceriseLearnPointState + question?.points
          );
          data?.handleProviderPoint(earnPoint + question?.points);
          totalLearnPoint += question?.points;
          exceriseLearnPoint += question?.points;
        }
        question.attempted = true;
        KnowladgecheckHandler(isCorrectAttemptBody);
        setTotalExceriseAttempted(totalExceriseAttempted + 1);
        totalExceriseQuestion += 1;
      }
    }
    var answer;
    if (type == "COMMENTQ") {
      let question = data?.kc[selectedQuestionIndex];
      answer = document.getElementById("questionResponse" + count).value.trim();

      question["options"][0]["answer"] = answer;

      const isCorrectAttemptBody = {
        questionId: data.kc[selectedQuestionIndex].id,
        invalidAttempt: 0,
        type: type,
        answer: answer,
        optionIds: [],
      };
      if (!answer == "") {
        if (loggedInUser?.role?.name == "PROVIDER" && !question.attempted) {
          setChangePoint(true);
          play();
          setTimeout(() => {
            setChangePoint(false);
          }, 3000);

          setEarnPoint(earnPoint + question?.points);
          setExceriseLearnPointState(
            exceriseLearnPointState + question?.points
          );
          data?.handleProviderPoint(earnPoint + question?.points);
          totalLearnPoint += question?.points;
          setTotalExceriseAttempted(totalExceriseAttempted + 1);
          totalExceriseQuestion += 1;
          exceriseLearnPoint += question?.points;
        }
        question.attempted = true;

        KnowladgecheckHandler(isCorrectAttemptBody);
      }
      setNuggetDisplay(false);
      setRecentCorrect(false);
    }
    if (
      data?.currentScene == data?.totalSence - 1 &&
      selectedQuestionIndex == totalQuestion - 1 &&
      isContinue
    ) {
      if (loggedInUser?.role?.name == "PROVIDER") {
        data?.handleCongratulationModel(
          exceriseLearnPoint,
          totalLearnPoint,
          totalQuestionAttempted,
          totalExceriseQuestion
        );
        return;
      }
      if (answer == "" || type == "CHECKBOXQ" || type == "RADIOQ") {
        //	setShowPleaseWait(true);
        data?.handleCongratulationModel();
        return;
      }
      setShowCongratulationModel(isContinue);
      return;
    }

    if (selectedQuestionIndex == totalQuestion - 1 && isContinue) {
      data?.handleSeriesSceneStep(true);
    } else {
      if (isNext) {
        if (totalQuestion - 1 > count) {
          ++count;
        }
      } else {
        --count;
      }
    }
    data?.kcStateUpdateHandler(data?.currentScene, count);

    setSelectedQuestionIndex(count);
    setNuggetDisplay(false);
    setInstructions(instructions);
  };

  const handleCloseNugget = () => {
    setNuggetDisplay(false);
  };

  const handleCommentChange = (value, index) => {
    if (value?.trim()?.length > 0) {
      data?.handleSetPlayVideo(false);
    }
    if (
      data?.currentScene == data?.totalSence - 1 &&
      data?.kc?.length - 1 === index
    ) {
      if (value?.length > 0) {
        data?.handleSetPlayVideo(false);
        let isBool = false;
        for (var i = 0; i < data?.kc?.length - 1; i++) {
          if (!data?.kc[i].attempted) {
            isBool = true;
          }
        }
        setIsResult(isBool);
      } else {
        setIsResult(true);
      }
    }
  };

  const handleOption = (questionIndex, optionIndex, nugget, questionId) => {
    if (
      getSequnceSort(socialActivityData?.records[0]?.series?.scenes)[
        data?.currentScene
      ]?.showTooltip
    ) {
      return;
    }
    let question = data?.kc[questionIndex];
    let points = parseInt(question?.points);
    setQueIndex(question.options[optionIndex].sequence);
    data?.handleSetPlayVideo(false);
    //for exercise
    console.log('checking 1');

    if (data?.currentScene == data?.totalSence - 1) {
    console.log('checking ');

      setRecentCorrect(false);
      setChangePoint(false);
      //	alert(question["options"][optionIndex]?.id);
      setSelectedRedioOptionId(question["options"][optionIndex]?.id);
      let isBool = false;
      for (var i = 0; i < data?.kc?.length - 1; i++) {
        if (!data?.kc[i].attempted) {
          isBool = true;
        }
      }
      setIsResult(isBool);
      if (
        question["options"][optionIndex]?.help &&
        question["options"][optionIndex]?.help != "None"
      ) {
        setNugget(question["options"][optionIndex]?.help);
        setNuggetDisplay(true);
        setNuggetTitle("Food for Thought!");
        setRightNugget(true);
      }
    }

    let invalidattempt = question.invalidAttempt;
    let option = question?.options[optionIndex];
    data["kc"][questionIndex].invalidAttempt = invalidattempt + 1;

    if (
      !option.isUserSelected &&
      !question.attempted &&
      data?.currentScene !== data?.totalSence - 1
    ) {
      option.isUserSelected = true;
      option.attempted = true;

      const checking = data?.kc[selectedQuestionIndex]?.options.filter(
        (vl, ky) => vl.isUserSelected == true
      );
      const kcpoints =
        checking?.length === 1 ? 10 : checking?.length === 2 ? 5 : 0;
      const isCorrectAttemptBody = {
        questionId: data.kc[selectedQuestionIndex].id,
        invalidAttempt: data["kc"][questionIndex].invalidAttempt,
        type: data?.kc[selectedQuestionIndex]?.type,
        answer: "",
        optionIds: [option.id],
        kcpoints: question?.options[optionIndex]?.isCorrect ? kcpoints : 0,
      };
      KnowladgecheckHandler(isCorrectAttemptBody);
      counter = 0;
      if (question?.options[optionIndex]?.isCorrect) {
        setRecentCorrect(true);
        // setChangePoint(true);
        question.attempted = true;
      }
      if (!data["kc"][questionIndex]?.attempted) {
        play1();
      }
      if (loggedInUser?.role?.name == "PROVIDER") {
        let totalPoint = earnPoint + 10;
        /*
                        if (invalidattempt === 0) {
                          result = points;
                          totalPoint = earnPoint + points;
                      	
                          setEarnPoint(totalPoint);
                        } else if (invalidattempt >= totalOptions) {
                          totalPoint = earnPoint + 2;
                      	
                          setEarnPoint(totalPoint);
                        } else {
                          if (points > 0) {
                          result = (points / totalOptions) * (totalOptions - invalidattempt);
                          totalPoint = earnPoint + Math.ceil(result);
                      	
                          setEarnPoint(totalPoint);
                          } else {
                          result = points;
                          totalPoint = earnPoint + points;
                      	
                          setEarnPoint(totalPoint);
                          }
                        } 
                        */
        data?.handleProviderPoint(totalPoint);
        play();
        setTimeout(() => {
          setChangePoint(false);
        }, 3000);

        setTotalQuestionAttempted(totalQuestionAttempted + 1);
      }
    } else {
      setRecentCorrect(false);
    }
    question["options"][optionIndex].attempted = true;
    data["kc"][questionIndex] = question;
    setNugget(nugget);

    if (data?.currentScene !== data?.totalSence - 1) {
      if (question?.options[optionIndex]?.isCorrect) {
        setNuggetTitle("Well Done!");
        let isAllNotAttempted = false;
        if (data?.seriesScenesData[data?.currentScene]?.kcRequired) {
          data["kc"]?.map((val, index) => {
            if (!val?.attempted) {
              isAllNotAttempted = true;
            }
          });
          data?.handleKcEnableDisabled(isAllNotAttempted);
        }
        /*
                      isAllNotAttempted = false;
                      data["kc"]?.map((val, index) => {
                      if (!val?.attempted) {
                      isAllNotAttempted = true;
                      }
                      });
                      data?.handleKcSceneComplete(isAllNotAttempted);
                      */
        setRightNugget(true);
      } else {
        setNuggetTitle("Close! Keep Going!");
        setRightNugget(false);
      }
    }

    if (nugget) {
      setNuggetDisplay(true);
    } else {
      setNuggetDisplay(false);
    }
  };

  useEffect(() => {
    if (data?.tab === "Series") {
      setShowData(data?.seriesScenesData);
    } else {
      setShowData(data);
    }
  }, [data]);

  const handleCheckBoxOption = (questionIndex, optionIndex, nugget) => {
    data?.handleSetPlayVideo(false);
    let question = data?.kc[questionIndex];
    question["options"][optionIndex].attempted =
      !question["options"][optionIndex].attempted;
    data["kc"][questionIndex] = question;
    setQueIndex(question?.options[optionIndex].sequence);

    if (data?.currentScene == data?.totalSence - 1) {
      let attemptedCount = 0;
      question?.options?.map((val, index) => {
        if (val?.attempted) {
          attemptedCount++;
        }
      });
      if (attemptedCount > 0) {
        let isBool = false;
        for (var i = 0; i < data?.kc?.length - 1; i++) {
          if (!data?.kc[i].attempted) {
            isBool = true;
          }
        }
        setIsResult(isBool);
      } else {
        setIsResult(true);
      }
    }

    if (nugget && nugget != "None") {
      setNugget(nugget);
      setNuggetDisplay(true);
      setNuggetTitle("Food for Thought!");
      setRightNugget(true);
    }
  };

  const viewCCG = (data) => {
    dispatch(
      showModal({ type: modalData?.type === "courseHint" ? "" : "courseHint" })
    );
  };
  useEffect(() => {
    if (
      growthSurveyData &&
      growthSurveyData?.records[0]?.preGrowthSurveyBehavior?.length > 0
    ) {
      setQuizData([
        ...growthSurveyData.records[0].preGrowthSurveyBehavior,
        ...(growthSurveyData.records[0].preGrowthSurveyKnowledge || []),
      ]);
    }
  }, [growthSurveyData]);

  return (
    <React.Fragment>
      {data?.tab !== "empthyQuiz" && (
        <div className='heading'>
          <h2 className='flex'>
            {data?.rptitle?.length > 25 ? (
              <ReactTooltip
                place='bottom'
                id={
                  data?.tab == "Series"
                    ? data?.kc?.length > 0
                      ? data?.currentScene == data?.totalSence - 1
                        ? "Exercise"
                        : "Knowledge Check"
                      : data?.rptitle
                    : data?.tab
                }>
                <p>
                  {data?.tab == "Series"
                    ? data?.kc?.length > 0
                      ? data?.currentScene == data?.totalSence - 1
                        ? "Exercise"
                        : "Knowledge Check"
                      : data?.rptitle
                    : data.tab === "References"
                    ? "Additional Resources"
                    : data?.tab}
                </p>
              </ReactTooltip>
            ) : (
              ""
            )}
            <span
              data-for={
                data?.tab == "Series"
                  ? data?.kc?.length > 0
                    ? data?.currentScene == data?.totalSence - 1
                      ? "Exercise"
                      : "Knowledge Check"
                    : textTrim(data?.rptitle, 50)
                  : textTrim(data?.tab, 50)
              }
              data-event-off=''
              data-tip>
              {data?.tab == "Series" ? (
                <img
                  src={
                    data?.kc?.length > 0
                      ? data?.currentScene == data?.totalSence - 1
                        ? image.RPExcercise
                        : image.Scenenavigation
                      : image.scenelessonicon
                  }
                  className='mr-2'
                  alt=''
                />
              ) : (
                <>
                  {data?.tab == "Characters" ? (
                    <img src={image.RPcharacher} className='mr-2' alt='' />
                  ) : data?.tab === "empthyQuiz" ? (
                    <img src={image.empathyicon} className='mr-2' alt='' />
                  ) : data?.tab === "growth" ? (
                    <img
                      src={image.growthsurveyPreviewIcon}
                      className='mr-2'
                      alt=''
                    />
                  ) : (
                    <img src={image.SceneRefrence} className='mr-2' alt='' />
                  )}
                </>
              )}
              {data?.tab == "Series" ? (
                data?.kc?.length > 0 ? (
                  data?.currentScene == data?.totalSence - 1 ? (
                    "Exercise"
                  ) : (
                    "Knowledge Check"
                  )
                ) : (
                  textTrim(data?.rptitle, 30)
                )
              ) : (
                <>
                  {data.tab === "References" ? (
                    "Additional Resources"
                  ) : (
                    <>
                      {data?.tab === "empthyQuiz" ? (
                        "How Empathetic Are You?"
                      ) : (
                        <>
                          {/* Growth Survey 9 May 2024 */}
                          {data?.tab === "growth"
                            ? "Growth Survey Preview"
                            : data?.tab}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </span>
            {data?.tab === "Series" && (
              <span>
                <span
                  className={`${changePoint ? "earnplusCoin" : "earnnoCoin"}`}>
                  {earnPoint === 0 ? earnPoint : kFormatter(earnPoint)}
                </span>
                <img src={image.money_bag} alt='' />
              </span>
            )}
          </h2>
        </div>
      )}

      {data?.kc?.length > 1 && data?.tab == "Series" && (
        <>
          <div className='AllNuggQuestionList QuestionListSlide'>
            <ul>
              <li
                className={`pointer ${
                  selectedQuestionIndex === 0 || isLoading || isExerciseSubmit
                    ? "DissableArrow"
                    : ""
                }`}
                onClick={() =>
                  handleNext(
                    false,
                    false,
                    data?.kc[selectedQuestionIndex]?.type,
                    data?.kc[selectedQuestionIndex]?.instructions,
                    data?.kc[selectedQuestionIndex]
                  )
                }>
                <span key={data?.kc[selectedQuestionIndex]?.id}>
                  <i className='fa-regular fa-angle-left'></i>
                  Back
                </span>
              </li>
              {data?.kc?.map((QAttempt, key) => (
                <li
                  key={key}
                  className={
                    data?.kc[key]?.attempted == true
                      ? "bg-success text-light"
                      : key == selectedQuestionIndex && "QAttemptAct"
                  }>
                  {key + 1}
                </li>
              ))}
              <li
                className={`pointer ${
                  selectedQuestionIndex === data?.kc?.length - 1 ||
                  isLoading ||
                  isExerciseSubmit
                    ? "DissableArrow"
                    : ""
                }`}
                onClick={() =>
                  handleNext(
                    true,
                    false,
                    data?.kc[selectedQuestionIndex]?.type,
                    data?.kc[selectedQuestionIndex]?.instructions,
                    data?.kc[selectedQuestionIndex]
                  )
                }>
                <span key={data?.kc[selectedQuestionIndex]?.id}>
                  Next
                  <i className='fa-regular fa-angle-right'></i>
                </span>
              </li>
            </ul>
          </div>
        </>
      )}

      {showData ? (
        <div className='lSidebarcontentwrap'>
          {data && data?.tab == "Series" && data?.kc?.length > 0 && (
            <div className='intructionsBox ScenecerelateddQuiz Analysistxt  seneriotext'>
              <p className='d-inline'>
                <span key={data?.tab}>
                  <i className='fa-solid fa-quote-left'></i>
                </span>
                <em>
                  <span
                    className='m-0'
                    dangerouslySetInnerHTML={{
                      __html: data?.kc[selectedQuestionIndex]?.instructions
                        ? data?.kc[selectedQuestionIndex]?.instructions
                        : "Please view the video or illustration on your left before attempting the questions below.",
                    }}
                  />
                </em>
                <span key={data?.kc[selectedQuestionIndex]?.id}>
                  <i className='fa-solid fa-quote-right'></i>
                </span>
              </p>

              {/* <p className="m-0">
						{instructions != null
							? instructions
							: "Please review the comic strip on your left before attempting the questions."}
					</p> */}
            </div>
          )}
          {isNuggetDisplay && data?.tab == "Series" && (
            <div className='NuggetPopup'>
              <div className='NuggetPopupTitle flex'>
                <div className='NuggetVickyImage'>
                  <h4>
                    {rightNugget ? (
                      <img src={image.vikylogoicon} alt='' className='mr-2' />
                    ) : (
                      <img src={image.vikylogoicon} alt='' className='mr-2' />
                    )}
                    {/* <img src={image.Nugget_Wrong} alt="" className="mr-3" />{" "}
                                <img src={image.openmouth_more_excited} alt="" className="mr-3" />{" "} */}
                    {/* <img src={image.Robovicky} alt="" /> */}
                    {nuggetTitle}
                  </h4>
                </div>
                <div className='powrBulbicon'>
                  <img src={image.Powericon} alt='' />
                </div>
              </div>
              <div className='NuggetPopupDesc d-flex align-items-start justify-content-between'>
                <div className='NugeetsSolution'>
                  <div className='nuggetsolitems'>
                    <h6>
                      <strong> Option {QueIndex}:</strong>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            data?.kc[selectedQuestionIndex]?.options[
                              QueIndex - 1
                            ]?.question,
                        }}
                      />
                    </h6>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: nugget,
                      }}
                    />
                  </div>

                  {isRecentCorrent && (
                    <>
                      {data?.kc &&
                        data?.kc[selectedQuestionIndex]?.options?.map(
                          (option, optionIndex) =>
                            !option?.attempted && (
                              <React.Fragment key={optionIndex}>
                                {counter++ == 0 && (
                                  <React.Fragment>
                                    <br />
                                    <h5>
                                      Nice work! But here’s the other choices
                                      you haven’t seen, to get some better
                                      insight...
                                    </h5>
                                  </React.Fragment>
                                )}
                                <div className='otherOptionssol'>
                                  <p>
                                    <div className='nuggetsolitems'>
                                      <h6>
                                        <strong>
                                          {" "}
                                          Option {`${option?.sequence}`}:
                                        </strong>{" "}
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: option?.question,
                                          }}
                                        />{" "}
                                      </h6>
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: option?.help,
                                        }}
                                      />{" "}
                                    </div>
                                    {nugget && (
                                      <Vicky
                                        text={
                                          "option " +
                                          option?.sequence +
                                          " ..." +
                                          option?.question +
                                          "  ..." +
                                          option?.help
                                        }
                                        id={option?.sequence}
                                        data={data}
                                      />
                                    )}
                                  </p>
                                  <br />
                                </div>
                              </React.Fragment>
                            )
                        )}
                    </>
                  )}
                </div>

                {nugget && (
                  <Vicky
                    text={nugget}
                    title={
                      "option" +
                      QueIndex +
                      " ..." +
                      data?.kc[selectedQuestionIndex]?.options[QueIndex - 1]
                        ?.question +
                      "  ..."
                    }
                    id={QueIndex}
                    data={data}
                  />
                )}
              </div>
              {/* <div className="NuggetPopupDesc">
						<div className="d-flex align-items-start justify-content-between">
							<p>
								<span className="fw-bold">{`${QueIndex}.`}</span>&nbsp;{nugget}
							</p>
							{nugget && (
								<Vicky
									text={nugget}
									other={
										isRecentCorrent && data?.kc[selectedQuestionIndex]?.options
									}
								/>
							)}
						</div>
						{isRecentCorrent && (
							<>
								{data?.kc &&
									data?.kc[selectedQuestionIndex]?.options?.map(
										(option, optionIndex) =>
											!option?.attempted && (
												<>
													{counter++ == 0 && (
														<>
															<br />
															<h4>Learn why other Options...</h4>
														</>
													)}
													<div className="mr-3 pr-3 mb-2">
														<p>
															<span className="fw-bold">
																{`${option?.sequence}.`}&nbsp;
															</span>
															{option?.help}
														</p>
														<br />
													</div>
												</>
											)
									)}
							</>
						)}
					</div> */}
              <div className='NuggetPopupFooter d-flex'>
                <div className='input-group full-Width-group basic_details_form'>
                  <div className='form-group BDsubmitbutton d-flex m-0 '>
                    {/* <div className="checkIconnuggmsg flexone">
											<p>
												<i class="fa-solid fa-check-double mr-2"></i>
												you have already selected this nuggets options
											</p>
										</div> */}
                    <button
                      type='button'
                      className='btn-blue btn-login d-block mb-5 ml-auto mr-2 cancelbutton'
                      onClick={() => handleCloseNugget()}>
                      <span
                        key={
                          data?.kc?.length > 0 &&
                          data?.kc[selectedQuestionIndex].id
                        }>
                        <i className='fa-solid fa-xmark mr-2'></i>
                      </span>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {data?.tab == "Characters" && (
            <div className='LessionDtlOverview'>
              <div className='d-flex align-items-start flex-wrap'>
                <div className='flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar'>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data?.charDesc && data?.charDesc,
                    }}
                  />
                </div>
                <Vicky text={data?.charDesc} data={data} />
              </div>
            </div>
          )}
          {data?.tab == "References" && (
            <div className='LessionDtlOverview'>
              <div className='d-flex align-items-start flex-wrap'>
                <div
                  className='flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar'
                  dangerouslySetInnerHTML={{ __html: data?.reading }}></div>
                <Vicky text={data?.reading} data={data} />
              </div>
            </div>
          )}
          {data?.tab == "empthyQuiz" && <Sidebar />}
          {data?.tab == "Series" && data?.kc?.length == 0 && (
            <>
              <div className='LessionDtlOverview' key={Math.random()}>
                <div className='d-flex align-items-start flex-wrap'>
                  <div className='flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar'>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.application && data?.application,
                      }}
                    />
                  </div>
                  <Vicky text={data?.application} data={data} />
                </div>
              </div>
            </>
          )}

          {/* Growth Survey 9 May 2024 */}
          {data?.tab == "growth" && (
            <div className='growthsurveyPreview p-0'>
              {(surveyAssOpen && selectOptData) ||
              (surveyAssOpen &&
                growthSurveyData?.records[0]?.growthSurvey?.length > 0) ? (
                <>
                  <div className='growthSurveyCollapse'>
                    <h3 className='mt-3 flex'>
                      <div className=''>
                        <span className='collapse-title'>
                          Pre Growth Survey Behavior
                        </span>
                      </div>
                      <span
                        className='pointer'
                        data-toggle='collapse'
                        href={`#GrowthSurveyColl`}
                        aria-expanded='true'>
                        <i className='fa fa-chevron-down icon-show'></i>
                      </span>
                    </h3>

                    <div
                      className='panel-collapse collapse show'
                      id='GrowthSurveyColl'>
                      <div className='p-3'>
                        {quizData &&
                          quizData?.length > 0 &&
                          quizData?.map(
                            (opt, ind) =>
                              opt?.attempted &&
                              opt?.surveyName ===
                                "PRE Growth Survey Behavior" && (
                                <div
                                  className='pb-3 d-flex flex-column'
                                  key={ind}>
                                  <span className='question'>
                                    <i
                                      class='fa fa-question-circle-o pr-2'
                                      aria-hidden='true'></i>
                                    {opt?.question}
                                  </span>
                                  {opt?.options.map(
                                    (val, key) =>
                                      val?.isUserSelected && (
                                        <span className='answer' key={key}>
                                          <span>
                                            <img
                                              src={image.greentickarrow}
                                              className='mr-2'
                                            />
                                          </span>
                                          {val?.question}
                                        </span>
                                      )
                                  )}
                                </div>
                              )
                          )}
                      </div>
                    </div>
                  </div>
                  {quizData &&
                    quizData[12]?.attempted &&
                    quizData[12]?.surveyName ===
                      "PRE Growth Survey Knowledge" && (
                      <div className='growthSurveyCollapse'>
                        <h3 className='mt-3 flex'>
                          <div className=''>
                            <span className='collapse-title'>
                              Pre Growth Survey Knowledge
                            </span>
                          </div>
                          <span
                            className='pointer'
                            data-toggle='collapse'
                            href={`#GrowthSurveyColl1`}
                            aria-expanded='true'>
                            <i className='fa fa-chevron-down icon-show'></i>
                          </span>
                        </h3>
                        <div
                          className='panel-collapse collapse show'
                          id='GrowthSurveyColl1'>
                          {quizData &&
                            quizData?.length > 0 &&
                            quizData?.map(
                              (opt, ind) =>
                                opt?.attempted &&
                                opt?.surveyName ===
                                  "PRE Growth Survey Knowledge" && (
                                  <div className='p-3' key={ind}>
                                    <div className='pb-4 d-flex flex-column'>
                                      <span className='question'>
                                        <i
                                          class='fa fa-question-circle-o pr-2'
                                          aria-hidden='true'></i>
                                        {opt?.question}
                                      </span>
                                      {opt?.options.map(
                                        (val, key) =>
                                          val?.isUserSelected && (
                                            <span className='answer' key={key}>
                                              <span>
                                                <img
                                                  src={image.greentickarrow}
                                                  className='mr-2'
                                                />
                                              </span>
                                              {val?.question}
                                            </span>
                                          )
                                      )}
                                    </div>
                                  </div>
                                )
                            )}
                        </div>
                      </div>
                    )}
                </>
              ) : (
                <div className='growthsurveyData p-0'>
                  <div class='p-3'>
                    <div className='d-flex pt-'>
                      <div className='pe-4 levelNames'>
                        <p>Pro</p>
                        <p>Advanced</p>
                        <p>Beginner</p>
                      </div>

                      <div className='gradientBox'>
                        <div className='gradientStar'>
                          <img src={image.starIcon} className='mr-2' alt='' />
                        </div>
                        <div className='gradientCircle'>
                          <i
                            className='fa fa-circle fa-lg pe-2'
                            aria-hidden='true'></i>
                        </div>
                      </div>
                    </div>

                    <div className='d-flex justify-content-around pt-4 align-item-center'>
                      <div className='placementname'>
                        <i
                          className='fa fa-circle fa-lg pe-2'
                          aria-hidden='true'></i>
                        <span>Current Placement</span>
                      </div>
                      <div className='placementname'>
                        <span>
                          <img
                            src={image.starIcon}
                            className='mr-2'
                            alt=''
                            style={{ width: "28px" }}
                          />
                        </span>
                        <span>Projected Placement</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className='ScenecerelateddQuiz'>
            {
              <div
                className='signupType rangetypeQuestion textAreatypeQuestion mb-2'
                key={data?.kc && data?.kc[selectedQuestionIndex]?.question}>
                {data?.kc?.length > 0 && data?.tab == "Series" && (
                  <h4 className='mb-2 d-flex'>
                    <span>
                      <img src={image.SceneQuestionicon} alt='' />
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          data?.kc && data?.kc[selectedQuestionIndex]?.question,
                      }}
                    />
                  </h4>
                )}
                {data &&
                  data?.kc &&
                  data?.kc[selectedQuestionIndex]?.type == "RADIOQ" &&
                  data?.tab == "Series" &&
                  getSequnceSort(data?.kc[selectedQuestionIndex]?.options)?.map(
                    (option, optionIndex) => (
                      <label
                        className='Selcheckbox align-items-start d-block'
                        key={optionIndex}>
                        <span className='fw-bold'>{option?.sequence}</span>
                        {". "}
                        {option?.question}
                        {data &&
                        data?.kc[selectedQuestionIndex]?.attempted &&
                        data?.currentScene != data?.totalSence - 1 ? (
                          <input
                            type='radio'
                            id={"option" + selectedQuestionIndex}
                            name={"option" + selectedQuestionIndex}
                            checked={
                              data?.kc[selectedQuestionIndex]?.attempted
                                ? option?.isCorrect
                                : false
                            }
                            onClick={() => {
                              handleOption(
                                selectedQuestionIndex,
                                optionIndex,
                                option?.help,
                                option?.id
                              );
                            }}
                          />
                        ) : (
                          <input
                            type='radio'
                            id={"option" + selectedQuestionIndex}
                            name={"option" + selectedQuestionIndex}
                            onClick={() => {
                              handleOption(
                                selectedQuestionIndex,
                                optionIndex,
                                option?.help,
                                option?.id
                              );
                            }}
                            defaultChecked={
                              data?.currentScene == data?.totalSence - 1 &&
                              option?.attempted
                                ? true
                                : false
                            }
                            disabled={
                              isLoading || //added for school enhancement
                              data?.isNextButtonDisable ||
                              allSceneDataArray[data?.currentScene]?.showTooltip
                            }
                          />
                        )}
                        {option.isUserSelected &&
                          !option.isCorrect &&
                          data?.currentScene !== data?.totalSence - 1 && (
                            <>
                              <ReactTooltip
                                id='#dobulecheckedmsgIcon'
                                className={"tooltip"}>
                                Already Selected
                              </ReactTooltip>

                              <span
                                data-for='#dobulecheckedmsgIcon'
                                data-event-off=''
                                data-tip>
                                <i class='fa-light fa-check-double ps-2 pt-1 dobulecheckedmsgIcon'></i>
                              </span>
                            </>
                          )}

                        <span className='checkmark'></span>
                        {allSceneDataArray[data?.currentScene]?.showTooltip && (
                          <div className='aboutProgdesc'>
                            <div class='Courseporogresspopup'>
                              <p className='m-0'>{sceneTextMessage}</p>
                            </div>
                          </div>
                        )}
                      </label>
                    )
                  )}

                {data?.kc &&
                  data?.tab == "Series" &&
                  data?.kc[selectedQuestionIndex]?.type == "CHECKBOXQ" && (
                    <>
                      <div className='signupType checktypequestion m-0'>
                        {data &&
                          data?.kc &&
                          getSequnceSort(
                            data?.kc[selectedQuestionIndex]?.options
                          )?.map((option, optionIndex) => (
                            <label className='Selcheckbox align-items-start'>
                              <span className='fw-bold'>
                                {option?.sequence}
                              </span>
                              {". "}
                              {option?.question}
                              <input
                                type='checkbox'
                                id='Public'
                                name='Question'
                                value='PUBLIC'
                                onClick={() =>
                                  handleCheckBoxOption(
                                    selectedQuestionIndex,
                                    optionIndex,
                                    option?.help
                                  )
                                }
                                defaultChecked={option?.attempted}
                                disabled={
                                  allSceneDataArray[data?.currentScene]
                                    ?.showTooltip
                                }></input>
                              {/* start Added By Alfaiz on 23-04-2024  for add checked icon and tooptip */}
                              <ReactTooltip
                                id='#dobulecheckedmsgIcon'
                                className={"tooltip"}>
                                Already Selected
                              </ReactTooltip>

                              {/* <span data-for="#dobulecheckedmsgIcon" data-event-off="" data-tip>
																<i class="fa-light fa-check-double ps-2 pt-1 dobulecheckedmsgIcon"></i>
															</span> */}
                              {/* End Added By Alfaiz on 23-04-2024  for add checked icon and tooptip */}
                              <span className='checkmark'></span>
                              {allSceneDataArray[data?.currentScene]
                                ?.showTooltip && (
                                <div className='aboutProgdesc'>
                                  <div class='Courseporogresspopup'>
                                    <p className='m-0'>{sceneTextMessage}</p>
                                  </div>
                                </div>
                              )}
                            </label>
                          ))}
                      </div>
                      {/* <div className="input-group full-Width-group basic_details_form mt-3 pt-5">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<button
											type="submit"
											className="btn-blue btn-login d-block mb-5 ml-auto"
											onClick={() => handleNext(true, false)}
										>
											Continue <i className="fa-light fa-forward ml-2"></i>
										</button>
									</div>
								</div> */}
                    </>
                  )}
                {/* {readOnly = { data?.kc[selectedQuestionIndex]?.attempted} */}
                {data?.kc &&
                  data?.tab == "Series" &&
                  data?.kc[selectedQuestionIndex]?.type == "COMMENTQ" && (
                    <>
                      <div className='textareabox'>
                        <textarea
                          name='questionResponse'
                          id={"questionResponse" + selectedQuestionIndex}
                          className='w-100'
                          defaultValue={
                            data?.kc[selectedQuestionIndex]?.options[0]?.answer
                          }
                          onChange={(e) =>
                            handleCommentChange(
                              e.target.value,
                              selectedQuestionIndex
                            )
                          }
                          disabled={
                            allSceneDataArray[data?.currentScene]?.showTooltip
                          }
                          placeholder={
                            allSceneDataArray[data?.currentScene]?.showTooltip
                              ? sceneTextMessage
                              : ""
                          }></textarea>
                      </div>
                    </>
                  )}

                {data?.tab == "Series" && data?.kc?.length > 0 && (
                  <>
                    <div className='input-group full-Width-group basic_details_form pt-0 continuebtn'>
                      <div className='form-group BDsubmitbutton flex m-0'>
                        {/* <div
													className="courseguide"
													onClick={() => viewCCG(true)}
												>
													<span className="pointer">
														<React.Fragment key={data?.tab}>
															<i className="fa-regular fa-circle-info mr-2"></i>
														</React.Fragment>
														Course Guide
													</span>
												</div> */}

                        {/* Added by Alfaiz ansari 18-04-2024 for course guide and view report showing in dropdown*/}

                        <div className='learner_pLan_dropdown ActivitycrdTitle'>
                          <strong
                            className='Activitymenubar ml-2 pointer '
                            aria-haspopup='true'
                            aria-expanded='false'
                            id='barlistdropdown'
                            data-toggle='dropdown'>
                            <i className='fa-solid fa-bars fa-lg'></i>
                          </strong>
                          <ul
                            className='dropdown-menu dropdown-menu-end lPDropdwnList'
                            aria-labelledby='barlistdropdown'>
                            {loggedInUser?.role?.name === "TEACHER" ? (
                              <>
                                <li className='pointer'>
                                  <p>
                                    <img src={image.viewReport} alt='' />
                                    View Report
                                  </p>
                                </li>

                                <li className='pointer'>
                                  <p onClick={() => viewCCG(true)}>
                                    <img src={image.courseguide} alt='' />
                                    Course Guide
                                  </p>
                                </li>
                              </>
                            ) : (
                              <li className='pointer'>
                                <p onClick={() => viewCCG(true)}>
                                  <img src={image.courseguide} alt='' />
                                  Course Guide
                                </p>
                              </li>
                            )}
                          </ul>
                        </div>
                        {/* End Added by Alfaiz ansari 18-04-2024 for  course guide and view report showing in dropdown*/}

                        {showPleaseWait ? (
                          <button
                            type='button'
                            className='btn-blue btn-login d-block mb-5 changepasswordbtn'
                            key={Math.random()}
                            disabled>
                            <span className='RounAnimation mr-1'></span>
                            Please Wait...
                          </button>
                        ) : (
                          <button
                            disabled={
                              (data?.isKcRequiredDisabled &&
                                data?.kc?.length - 1 ===
                                  selectedQuestionIndex &&
                                isResult) ||
                              isLoading ||
                              isExerciseSubmit
                                ? true
                                : ""
                            }
                            type='submit'
                            className='btn-blue btn-login d-block mb-5 ml-auto'
                            onClick={() =>
                              handleNext(
                                true,
                                true,
                                data?.kc[selectedQuestionIndex]?.type,
                                data?.kc[selectedQuestionIndex]?.instructions,
                                data?.kc[selectedQuestionIndex]
                              )
                            }>
                            Continue{" "}
                            <React.Fragment>
                              <i className='fa-solid fa-arrow-right ml-2 m-0'></i>
                            </React.Fragment>
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {data &&
                  data?.tab == "Series" &&
                  data?.kc &&
                  data?.kc?.length == 0 && (
                    <>
                      <div className='input-group full-Width-group basic_details_form pt-0 continuebtn'>
                        <div className='form-group BDsubmitbutton flex m-0'>
                          {/* <div
														className="courseguide"
														onClick={() => viewCCG(true)}
													>
														<span className="pointer" key={data?.tab}>
															<i className="fa-regular fa-circle-info mr-2"></i>
															Course Guide
														</span>
													</div> */}

                          {/* Added by Alfaiz ansari 18-04-2024 for course guide and view report showing in dropdown*/}

                          <div className='learner_pLan_dropdown ActivitycrdTitle'>
                            <strong
                              className='Activitymenubar ml-2 pointer '
                              aria-haspopup='true'
                              aria-expanded='false'
                              id='barlistdropdown'
                              data-toggle='dropdown'>
                              <i className='fa-solid fa-bars fa-lg'></i>
                            </strong>
                            <ul
                              className='dropdown-menu dropdown-menu-end lPDropdwnList CourseGuideDropdown'
                              aria-labelledby='barlistdropdown'>
                              {loggedInUser?.role?.name === "TEACHER" ? (
                                <>
                                  <li className='pointer'>
                                    <p>
                                      <img src={image.viewReport} alt='' />
                                      View Report
                                    </p>
                                  </li>

                                  <li className='pointer'>
                                    <p onClick={() => viewCCG(true)}>
                                      <img src={image.courseguide} alt='' />
                                      Course Guide
                                    </p>
                                  </li>
                                </>
                              ) : (
                                <li className='pointer'>
                                  <p onClick={() => viewCCG(true)}>
                                    <img src={image.courseguide} alt='' />
                                    Course Guide
                                  </p>
                                </li>
                              )}
                            </ul>
                          </div>
                          {/* End Added by Alfaiz ansari 18-04-2024 for  course guide and view report showing in dropdown*/}
                          <button
                            disabled={data?.isNextButtonDisable ? true : ""}
                            type='submit'
                            className='btn-blue btn-login d-block mb-5 ml-auto'
                            onClick={() => {
                              data?.handleSeriesSceneStep(true);
                            }}>
                            Continue{" "}
                            <span key={data?.tab}>
                              <i className='fa-solid fa-arrow-right ml-2 m-0'></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
              </div>
              //	))
            }
          </div>
        </div>
      ) : (
        <ShimmerCategoryList items={3} categoryStyle='STYLE_SIX' />
      )}
    </React.Fragment>
  );
};

export default LessonSidebar;

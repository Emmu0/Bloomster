/** @format */
import { getUserSessionId } from "../../utils/helper";
import {
  SIDEBAR,
  ISLOADING,
  STUSCORE,
  SELECTED_USER,
  RESPONSE,
  RESPONSE_FAILURE,
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  LOGGEDIN_USER,
  CHILD_LOGIN,
  PARENT_LOGIN,
  UPDATE_INIT_ASS_RESPONSE,
  GET_PROVIDER,
  TECHERASSESSSUBMIT,
  GET_ASSDATA,
  ENROLL_RESPONSE,
  GET_ASSESS_OF_LEARNERS,
  GET_ENROLLED_LEARNERS,
  ADD_PROVIDER_DETAIL,
  RESET_SONG,
  META_RESPONSE,
  GET_ALL_SCORE,
  ADD_LEARNER,
  SELECTED_DIMTAB,
  BILLING_PLAN,
  GET_SOCIAL_ACTIVITY_DATA,
  GET_INTEREST_CATEGORIES,
  GET_ALPHABET_DATA,
  USER_SIGNUP,
  GET_INTEREST_CATEGORY_BY_ID,
  BREADCRUMB,
  HELPMODAL,
  SHOWFORM,
  GET_USER_NAME_RESPONSE,
  RESPONSE_OK,
  KNOWLADGE_CHECK,
  NEXT_SCENE_RESPONSE,
  DEFAULT_CHILD,
  GET_LESSON,
  SUBSCRIBDATA,
  RIBBON_OPEN,
  GET_PATH,
  LOGINRESPONSE_FAILURE,
  COURSE_ENROLLED,
  COURSEENROLL,
  FORGOT_PASSWORD,
  COURATINGS,
  PROVIDERRATINGS,
  PAYMENT_FAILURE,
  ENROLLCOURSEDETAIL,
  ACCORDIAN_STATUS,
  LOGINUSERID,
  PLANS,
  USER_ATTEMPTED_SURVEY,
  BEGIN_QUIZ,
  QUOTE_RES,
  GET_START_ENROLL_COURSES,
  NF_REDIRECT,
  SET_TIME_OUT,
  GET_COROBJ,
  GET_RESPONSE,
  SETTING_VERIFY,
  LASTQUIZ,
  LEARNER_ATTEMPT_QUIZ,
  ENROLL_COURSES_JSON,
  QUIZ_STORE,
  QUIZ_OPTION_STORE,
  PRACTICE_OPTION_STORE,
  PRACTICE_STORE,
  CHILD_NM,
  LOCKPOPUP_DATA,
  COURSE_MODAL,
  PROVIDER_MODAL,
  SHOW_MORE,
  SUBSCRIBE_MODAL,
  SET_COURSEJOURNEYID,
  GET_JOURNY_ENROLL_DATA,
  ENROLL_MODAL,
  DOWNGRADE_MODAL,
  DOWNGRADE_USER,
  SELECTCHILD_MODAL,
  SELECTED_OPTION,
  JOURNEY_COURSE_MODAL,
  RESETCARD,
  PARENT_TOOLS_DATA,
  COURSES_TAG,
  ENROLLMENT,
  SHOW_MODAL_OBJ,
  COUNTDATA,
  COURSEPAGE_KEY,
  HOMEPAGE_KEY,
  DIM_STORE,
  PATHWAYPAGE_KEY,
  DIMPAGE_KEY,
  DELETEAGE_KEY,
  SUBSCRIPTION_KEY,
  DIMDATASTORE,
  CNAMEPAGE_KEY,
  SENSITIVEMODAL,
  SENSITIVEVIDEO,
  OPENSETTING,
  VIEWVDOSENSITIVE,
  COURSERATINGMOODAL,
  COURSESECTIONOBJ,
  VIEW_LEARNER_PLAN,
  MODULE_DETAIL_MODAL,
  CHANGE_PACE_MODAL,
  CLASS_SCHEDULE,
  VERIFY_EMAIL_RESPONSE,
  SELECTED_OPTION_DATA,
  GROWTH_RIGHTPANEL_OPEN,
} from "./Types";

import { PILOTUSER } from "./FeedbackTypes";

export const resetStripePlans = () => async (dispatch) => {
  dispatch({ type: PLANS, payload: undefined });
};

export const resetPaymentError = () => async (dispatch) => {
  dispatch({ type: PAYMENT_FAILURE, payload: undefined });
};
export const resetEnroll = () => async (dispatch) => {
  dispatch({ type: COURSEENROLL, payload: undefined });
};

export const getEnrollCourseDetail = (object) => async (dispatch) => {
  dispatch({ type: ENROLLCOURSEDETAIL, payload: object });
};

export const ResetSong = (type) => async (dispatch) => {
  dispatch({ type: RESET_SONG, payload: type });
};
export const selectTab = (data) => async (dispatch) => {
  dispatch({ type: SELECTED_DIMTAB, payload: data });
};

export const getCourseEnrolled = (courseId, skillId) => async (dispatch) => {
  let obj = {
    courseId: courseId,
    skillId: skillId,
  };
  dispatch({ type: COURSE_ENROLLED, payload: obj });
};
export const sceanIndex = (data) => async (dispatch) => {
  dispatch({ type: BREADCRUMB, payload: data });
};

export const breadcrumb = (data) => async (dispatch) => {
  if (data) {
    dispatch({ type: BREADCRUMB, payload: data });
  } else {
    dispatch({ type: BREADCRUMB, payload: undefined });
  }
};

export const sidebarCollapse = (flag) => async (dispatch) => {
  dispatch({ type: SIDEBAR, payload: flag });
};

export const widgetOpenFlag = (flag) => async (dispatch) => {
  dispatch({ type: RIBBON_OPEN, payload: flag });
};

export const isLoading = (flag) => async (dispatch) => {
  dispatch({ type: ISLOADING, payload: flag });
};

export const getScore = (data) => async (dispatch) => {
  dispatch({ type: STUSCORE, payload: data });
};

export const resetGuestResponse = () => async (dispatch) => {
  dispatch({ type: RESPONSE, payload: "" });
  dispatch({ type: RESPONSE_FAILURE, payload: "" });
  dispatch({ type: RESPONSE_OK, payload: "" });
};

export const resetPasswordRes = () => async (dispatch) => {
  dispatch({ type: RESPONSE_FAILURE, payload: "" });
};

export const resetGetResponse = () => async (dispatch) => {
  dispatch({ type: GET_RESPONSE, payload: undefined });
};

export const resetResponse = () => async (dispatch) => {
  // dispatch({ type: GET_SOCIAL_ACTIVITY_DATA, payload: undefined });
  dispatch({ type: SETTING_VERIFY, payload: undefined });
  dispatch({ type: NEXT_SCENE_RESPONSE, payload: undefined });
  dispatch({ type: KNOWLADGE_CHECK, payload: undefined });
  // dispatch({ type: SELECTED_DIMTAB, payload: undefined });
  dispatch({ type: RESPONSE, payload: "" });
  dispatch({ type: RESPONSE_FAILURE, payload: "" });
  //  dispatch({ type: ADD_LEARNER, payload: undefined });
  dispatch({ type: USER_LOGIN, payload: "" });
  dispatch({ type: USER_LOGIN_FAILURE, payload: "" });
  dispatch({ type: UPDATE_INIT_ASS_RESPONSE, payload: "" });
  dispatch({ type: GET_ASSESS_OF_LEARNERS, payload: "" });
  dispatch({ type: GET_ASSDATA, payload: "" });
  dispatch({ type: GET_ENROLLED_LEARNERS, payload: "" });
  dispatch({ type: META_RESPONSE, payload: undefined });
  dispatch({ type: GET_PROVIDER, payload: "" });

  dispatch({ type: ENROLL_RESPONSE, payload: "" });
  dispatch({ type: ADD_PROVIDER_DETAIL, payload: "" });
  dispatch({ type: GET_ALL_SCORE, payload: "" });
  dispatch({ type: BILLING_PLAN, payload: "" });

  // dispatch({ type: GET_GRADE_LEVEL, payload: "" });
  dispatch({ type: GET_INTEREST_CATEGORIES, payload: "" });
  dispatch({ type: GET_ALPHABET_DATA, payload: "" });
  dispatch({ type: USER_SIGNUP, payload: "" });
  dispatch({ type: GET_INTEREST_CATEGORY_BY_ID, payload: "" });
  dispatch({ type: GET_LESSON, payload: "" });
  //verify user name API response reset method 14 May 2024
  dispatch({ type: VERIFY_EMAIL_RESPONSE, payload: "" });
};

export const resetBreadCrumb = () => async (dispatch) => {
  dispatch({ type: GET_SOCIAL_ACTIVITY_DATA, payload: undefined });
};

export const defaultChild = (obj) => async (dispatch) => {
  if (obj) {
    dispatch({ type: DEFAULT_CHILD, payload: obj });
  }
};

export const resetEnrollResponse = () => async (dispatch) => {
  dispatch({ type: ENROLL_RESPONSE, payload: "" });
};

export const resetError = () => async (dispatch) => {
  dispatch({ type: RESPONSE_FAILURE, payload: "" });
};
export const updateScore = (data) => async (dispatch) => {
  // let masterItem = [];

  // let item = [];

  // if (data) {
  //   item = data.map((value, ky) => {
  //     masterItem[ky] = value;
  //     if (value.title === score.title) {
  //       masterItem[ky]["score"] = id;
  //     }
  //   });
  // }

  dispatch({ type: STUSCORE, payload: data });
};

export const selectedUser = (data) => async (dispatch) => {
  dispatch({ type: SELECTED_USER, payload: data });
};

export const childLogin = (data) => async (dispatch) => {
  dispatch({ type: CHILD_LOGIN, payload: data });
};

export const parentLoginAction = (data) => async (dispatch) => {
  dispatch({ type: PARENT_LOGIN, payload: data });
};

export const getLoggedInUser = (data) => async (dispatch) => {
  if (getUserSessionId()) {
    if (data.recordId === getUserSessionId()) {
      dispatch({ type: LOGGEDIN_USER, payload: data.records[0] });
    } else if (
      data?.records[0]?.children &&
      data?.records[0]?.children?.length > 0
    ) {
      data.records[0]?.children.map((vl, ky) => {
        if (vl.id === getUserSessionId()) {
          vl.parent = data?.records[0];

          dispatch({ type: LOGGEDIN_USER, payload: vl });
        }
      });
    }
  }
};

export const responseFailure = (data) => async (dispatch) => {
  if (data?.response?.data?.message) {
    dispatch({
      type: RESPONSE_FAILURE,
      payload: data?.response?.data?.message,
    });
  } else {
    dispatch({ type: RESPONSE_FAILURE, payload: data?.message });
  }
};

export const loginResponseFailure = (data) => async (dispatch) => {
  if (data?.response?.data?.message) {
    dispatch({
      type: LOGINRESPONSE_FAILURE,
      payload: data?.response?.data?.message,
    });
  } else {
    dispatch({ type: LOGINRESPONSE_FAILURE, payload: data?.message });
  }
};

export const resetLoginResponseFailure = () => async (dispatch) => {
  dispatch({ type: LOGINRESPONSE_FAILURE, payload: "" });
  dispatch({ type: FORGOT_PASSWORD, payload: "" });
};

export const resetActivityResponse = () => async (dispatch) => {
  dispatch({ type: COURATINGS, payload: "" });
  dispatch({ type: PROVIDERRATINGS, payload: "" });
};

export const getTeacherAssesSubmit = (data) => async (dispatch) => {
  dispatch({ type: TECHERASSESSSUBMIT, payload: data });
};

export const billingPlan = (data) => async (dispatch) => {
  dispatch({ type: BILLING_PLAN, payload: data });
};

export const getHelpModal = (data) => async (dispatch) => {
  dispatch({ type: HELPMODAL, payload: data });
};

export const showModal = (obj) => async (dispatch) => {
  if (process.env.REACT_APP_BLOCK_SIGNUP === "true" && obj?.type !== "SignUp") {
    dispatch({ type: SHOWFORM, payload: obj });
  } else if (process.env.REACT_APP_BLOCK_SIGNUP === "false") {
    dispatch({ type: SHOWFORM, payload: obj });
  }
  dispatch({ type: SHOWFORM, payload: obj });
};

export const resetEmailResponse = () => async (dispatch) => {
  dispatch({ type: GET_USER_NAME_RESPONSE, payload: "" });
  dispatch({ type: ADD_LEARNER, payload: "" });
};

export const resetSubscription = () => async (dispatch) => {
  dispatch({ type: SUBSCRIBDATA, payload: "" });
};

export const getPathName = (obj) => async (dispatch) => {
  dispatch({ type: GET_PATH, payload: obj });
};
export const getAccordian = (obj, id) => async (dispatch) => {
  dispatch({ type: ACCORDIAN_STATUS, payload: obj });
};
export const getprofile = (id) => async (dispatch) => {
  dispatch({ type: LOGINUSERID, payload: id });
};

export const resetMultiquizResponse = () => async (dispatch) => {
  dispatch({ type: USER_ATTEMPTED_SURVEY, payload: "" });
};

export const beginMultiQuiz = (flag) => async (dispatch) => {
  dispatch({ type: BEGIN_QUIZ, payload: flag });
};
export const getRandomDimension = (data) => async (dispatch) => {
  // dispatch({ type: RANDOM_DIM, payload: data });
};

export const showProviderQuote = (flag) => async (dispatch) => {
  dispatch({ type: QUOTE_RES, payload: flag });
};

export const resetPilotuser = () => async (dispatch) => {
  dispatch({ type: PILOTUSER, payload: "" });
};

export const resetLoginResponse = () => async (dispatch) => {
  dispatch({ type: USER_LOGIN, payload: undefined });
  dispatch({ type: ADD_LEARNER, payload: undefined });
  dispatch({ type: USER_SIGNUP, payload: "" });
};

export const collapsAll = (type, key, state) => async (dispatch) => {
  try {
    let { data } = {};

    if (type == "expand-all") {
      data = [true, true, true, true, true, true, true, true, true, true];
    } else if (type == "collaps-all") {
      data = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
    } else if (type == "toggle") {
      let newState = state;
      newState[key] = !newState[key];
      data = newState;
    }
    dispatch({ type: COLLAPSDATA, payload: data });
  } catch (error) {
    throw new Error("reducer configuration");
  }
};

export const resetEnrollCourse = () => async (dispatch) => {
  dispatch({ type: GET_START_ENROLL_COURSES, payload: "s" });
};

export const NlRedirect = (data) => async (dispatch) => {
  dispatch({ type: NF_REDIRECT, payload: data });
};
export const setTimeOuthandler = (data) => async (dispatch) => {
  dispatch({ type: SET_TIME_OUT, payload: data });
};

export const getCourseObj = (data) => async (dispatch) => {
  dispatch({ type: GET_COROBJ, payload: data });
};

export const getLastQuiz = (data) => async (dispatch) => {
  dispatch({ type: LASTQUIZ, payload: data });
};

export const resetEnrollCourseJson = () => async (dispatch) => {
  dispatch({ type: ENROLL_COURSES_JSON, payload: "" });
};

export const providerQuizData = (data) => async (dispatch) => {
  if (data) {
    dispatch({ type: QUIZ_STORE, payload: data });
  } else {
    dispatch({ type: QUIZ_STORE, payload: undefined });
  }
};
export const providerQuizOption = (data) => async (dispatch) => {
  if (data) {
    dispatch({ type: QUIZ_OPTION_STORE, payload: data });
  } else {
    dispatch({ type: QUIZ_OPTION_STORE, payload: undefined });
  }
};

export const providerPracticeData = (data) => async (dispatch) => {
  if (data) {
    dispatch({ type: PRACTICE_STORE, payload: data });
  } else {
    dispatch({ type: PRACTICE_STORE, payload: undefined });
  }
};

export const getChildName = (data) => async (dispatch) => {
  if (data) {
    dispatch({ type: CHILD_NM, payload: data });
  }
};

export const lockPopup = (data) => async (dispatch) => {
  dispatch({ type: LOCKPOPUP_DATA, payload: data });
};

export const setCourseModal = (data) => async (dispatch) => {
  dispatch({ type: COURSE_MODAL, payload: data });
};
export const setSubscribeModal = (data) => async (dispatch) => {
  dispatch({ type: SUBSCRIBE_MODAL, payload: data });
};

export const setProviderModal = (data) => async (dispatch) => {
  dispatch({ type: PROVIDER_MODAL, payload: data });
};

export const setShowMore = (data) => async (dispatch) => {
  dispatch({ type: SHOW_MORE, payload: data });
};

export const setCourseJourneyId = (data) => async (dispatch) => {
  dispatch({ type: SET_COURSEJOURNEYID, payload: data });
};

export const resetJourney = () => async (dispatch) => {
  dispatch({ type: GET_JOURNY_ENROLL_DATA, payload: "" });
};

export const enrollModal = (data) => async (dispatch) => {
  dispatch({ type: ENROLL_MODAL, payload: data });
};

export const downgradeModal = (data) => async (dispatch) => {
  dispatch({ type: DOWNGRADE_MODAL, payload: data });
};

export const downGradeUser = (data) => async (dispatch) => {
  dispatch({ type: DOWNGRADE_USER, payload: data });
};

export const selectChilModal = (data) => async (dispatch) => {
  dispatch({ type: SELECTCHILD_MODAL, payload: data });
};

export const selectedCheckOption = (data) => async (dispatch) => {
  dispatch({ type: SELECTED_OPTION, payload: data });
};
export const setJourneyCoursModal = (data) => async (dispatch) => {
  dispatch({ type: JOURNEY_COURSE_MODAL, payload: data });
};

export const getResetCard = (data) => async (dispatch) => {
  dispatch({ type: RESETCARD, payload: data });
};

export const setPaymentFailure = (data) => async (dispatch) => {
  dispatch({ type: PAYMENT_FAILURE, payload: data });
};

export const parentToolsModal = (data) => async (dispatch) => {
  dispatch({ type: PARENT_TOOLS_DATA, payload: data });
};

export const searchCourseTag = (tag) => async (dispatch) => {
  dispatch({ type: COURSES_TAG, payload: tag });
};

export const enrollmentPopup = (data) => async (dispatch) => {
  dispatch({ type: ENROLLMENT, payload: data });
};

export const countData = (data) => async (dispatch) => {
  dispatch({ type: COUNTDATA, payload: data });
};

export const coursePageNode = (data) => async (dispatch) => {
  dispatch({ type: COURSEPAGE_KEY, payload: data });
};

export const showModalObj = (data) => async (dispatch) => {
  if (data) {
    dispatch({ type: SHOW_MODAL_OBJ, payload: data });
  } else {
    dispatch({ type: SHOW_MODAL_OBJ, payload: undefined });
  }
};

export const homePageNode = (data) => async (dispatch) => {
  dispatch({ type: HOMEPAGE_KEY, payload: data });
};

export const dimStore = (data) => async (dispatch) => {
  dispatch({ type: DIM_STORE, payload: data });
};
export const pathwayPageNode = (data) => async (dispatch) => {
  dispatch({ type: PATHWAYPAGE_KEY, payload: data });
};

export const dimPageNode = (data) => async (dispatch) => {
  dispatch({ type: DIMPAGE_KEY, payload: data });
};
export const deletePageNode = (data) => async (dispatch) => {
  dispatch({ type: DELETEAGE_KEY, payload: data });
};

export const subscriptionPageNode = (data) => async (dispatch) => {
  dispatch({ type: SUBSCRIPTION_KEY, payload: data });
};

export const dimDataStore = (data) => async (dispatch) => {
  dispatch({ type: DIMDATASTORE, payload: data });
};

export const cnamePageNode = (data) => async (dispatch) => {
  dispatch({ type: CNAMEPAGE_KEY, payload: data });
};

export const sensitiveModal = (data) => async (dispatch) => {
  dispatch({ type: SENSITIVEMODAL, payload: data });
};

export const sensitiveVideo = (data) => async (dispatch) => {
  dispatch({ type: SENSITIVEVIDEO, payload: data });
};

export const openSetting = (data) => async (dispatch) => {
  dispatch({ type: OPENSETTING, payload: data });
};

export const viewSensitiveVdo = (data) => async (dispatch) => {
  dispatch({ type: VIEWVDOSENSITIVE, payload: data });
};
export const courseRatingModal = (data) => async (dispatch) => {
  dispatch({ type: COURSERATINGMOODAL, payload: data });
};
export const courseSectionModal = (data) => async (dispatch) => {
  dispatch({ type: COURSESECTIONOBJ, payload: data });
};

export const viewLernerPlan = (data) => async (dispatch) => {
  dispatch({ type: VIEW_LEARNER_PLAN, payload: data });
};

export const changePace = (data) => async (dispatch) => {
  dispatch({ type: CHANGE_PACE_MODAL, payload: data });
};
export const showModuleDetail = (data) => async (dispatch) => {
  dispatch({ type: MODULE_DETAIL_MODAL, payload: data });
};

/* Class Schedule 8 may 2024 */

export const setClassSchedule = (data) => async (dispatch) => {
  dispatch({ type: CLASS_SCHEDULE, payload: data });
};

export const selectOptionData = (data) => async (dispatch) => {
  dispatch({ type: SELECTED_OPTION_DATA, payload: data });
};

export const setSurveyAss = (data) => async (dispatch) => {
  dispatch({ type: GROWTH_RIGHTPANEL_OPEN, payload: data });
};

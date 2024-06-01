/** @format */

import {
  FREE_SIGNUP,
  USER_LOGIN,
  LOGOUT_JWT,
  USER_LOGIN_FAILURE,
  GET_ALL_USERS_DETAIL_SUCCESS,
  CHILD_DETAIL_SUCCESS,
  CHILD_DETAIL_FAILURE,
  GET_DEGREES_SUCCESS,
  GET_FIELDS_SUCCESS,
  GET_SCHOOLS_KEYWORDS_SUCCESS,
  GET_INDUSTRIES_SUCCESS,
  USER_EDUCATION,
  SELF_SIGNUP_SUCCESS,
  SELF_SIGNUP_FAILURE,
  ADD_SCHOOL,
  CHANGE_PASSWORD,
  SIDEBAR,
  COURSEGUIDE,
  GET_COMPANIES_SUCCESS,
  ISLOADING,
  GET_GRADE_LEVEL,
  STUSCORE,
  UPDATE_INIT_ASS_RESPONSE,
  SELECTED_USER,
  GET_COMPANY_BYKEYWORD,
  RESPONSE,
  RESPONSE_FAILURE,
  GET_EDUCATION,
  GET_COURSE,
  GET_ENRICH_KEYWORDS_SUCCESS,
  AUTH_TRUE,
  LOGGEDIN_USER,
  GET_INTEREST_KEYWORDS_SUCCESS,
  GET_INTEREST_SUCCESS,
  CHILD_LOGIN,
  PARENT_LOGIN,
  GET_INTERESTBY_ID_SUCCESS,
  GET_DIMENSIONS_SUCCESS,
  UPLOAD_RESPONSE,
  ADD_INTEREST_RESPONSE,
  RESPONSE_OK,
  COURSELIST,
  GET_TITLE_BYKEYWORD,
  GET_INDUSTRY_BYKEYWORD,
  GET_DIVISION_BYKEYWORD,
  GET_ACTIVITY,
  FORGOT_PASSWORD,
  META_RESPONSE,
  RATINGS,
  RESOURCES_RATINGS,
  ACTIVITY_RATING,
  GET_SKILLS,
  // GET_SERVICES,
  IMAGEDOWNLOAD,
  ADD_SKILLS,
  GET_POPULAR_TITLES,
  ADD_TITLE,
  UPLOAD_VIDEO,
  ADD_PROVIDER_DETAIL,
  USER_SIGNUP,
  GET_ASSDATA,
  GET_PROVIDER,
  TECHERASSESSSUBMIT,
  GET_CURRICULAM,
  GET_COUNTRIES,
  PRIMARY_SKILLS,
  GET_STATE,
  ENROLL_RESPONSE,
  CHECK_ASSESSMENT,
  GET_METADATA,
  GET_RESOURCES,
  VERIFY_USER,
  RESPONSE_ERROR,
  GET_USER_ACTIVITY,
  GET_ENROLLED_LEARNERS,
  GET_ASSESS_OF_LEARNERS,
  GET_PROGRESS_CHART,
  GET_INTEREST_CATEGORIES,
  GET_INTEREST_CATEGORY_BY_ID,
  GET_INTEREST_LEVEL_BY_ID,
  GET_ALL_INDUSTRIES,
  GET_GRADES,
  GET_IND_SCORE,
  GET_ALL_SCORE,
  GET_TITLES_BYCHARACTER,
  // GET_COMPLEX,
  GET_LESSON,
  TURN_NOTIFICATION,
  RESET_SONG,
  GET_RESOURCESDATA,
  GET_SOCIAL_ACTIVITY_DATA,
  GET_SERIES_SCENES_DATA,
  ADD_LEARNER,
  KEYAREA,
  SELECTED_DIMTAB,
  SELECTED_PLAN,
  BILLING_PLAN,
  GET_ALPHABET_DATA,
  GET_PROVIDER_COURSES,
  BREADCRUMB,
  DASHBOARD,
  HELPMODAL,
  SHOWFORM,
  GET_USER_NAME_RESPONSE,
  KNOWLADGE_CHECK,
  NEXT_SCENE_RESPONSE,
  GET_RIBBON,
  DEFAULT_CHILD,
  QUIZ_DATA,
  COURATINGS,
  GET_HOLISTIC,
  PROVIDERRATINGS,
  SUBSCRIBDATA,
  RIBBON_OPEN,
  RESPONSE_ERROR_DATA,
  GET_PATH,
  PLANS,
  LOGINRESPONSE_FAILURE,
  COURSE_ENROLLED,
  COURSEENROLL,
  RESET_PASSWORD,
  GET_START_ENROLL_COURSES,
  PAYMENT_FAILURE,
  PILOT_USER,
  PILOT_USER_ERROR,
  GET_CURATOR_COURSE,
  ENROLLCOURSEDETAIL,
  VERIFY_PILOT,
  MODIFY_TOKEN_RESPONSE,
  VERIFY_PILOT_ERR,
  ACCORDIAN_STATUS,
  LOGINUSERID,
  GET_DIMENSIONSREDIRECT,
  GET_MULTIQUIZ_DATA,
  USER_ATTEMPTED_SURVEY,
  USER_EMPATHY_QUIZ,
  BEGIN_QUIZ,
  RANDOM_DIM,
  KC_STATE_RESPONSES,
  RANDOM_COURSE,
  QUOTE_RES,
  COLLAPSDATA,
  NF_REDIRECT,
  SET_TIME_OUT,
  ENROLL_COURSES_JSON,
  COURSE_JOURNEY,
  SETTING_DATA,
  REWARD_DATA,
  GET_COROBJ,
  GET_RESPONSE,
  SETTING_VERIFY,
  GET_DIM,
  GET_SERIES_DATA,
  LEARNER_ATTEMPT_QUIZ,
  QUIZ_RESPONSE,
  LASTQUIZ,
  VIDEO_RESPONSE,
  QUIZ_STORE,
  QUIZ_OPTION_STORE,
  GET_JOURNY_DATA,
  GET_JOURNY_COURSE_DATA,
  PRACTICE_STORE,
  PRACTICE_OPTION_STORE,
  ENROLL_COURSEJOURNY,
  CHILD_NM,
  LOCKPOPUP_DATA,
  COURSE_MODAL,
  SUBSCRIBE_MODAL,
  PROVIDER_MODAL,
  GET_JOURNY_COURSES,
  GET_JOURNY,
  GET_JOURNY_ENROLL_DATA,
  ENROLL_COURSEWISEJOURNY,
  SET_COURSEJOURNEYID,
  ENROLL_MODAL,
  USER_GRADE_RESP,
  POST_RESPONSE,
  GET_BILLING_DATA,
  DOWNGRADE_MODAL,
  DOWNGRADE_PLAN,
  DOWNGRADE_USER,
  SELECTCHILD_MODAL,
  GET_INTELLIGENCES_DATA,
  POST_INTELLIGENCES_DATA,
  PAYMENT_UPDATE,
  SELECTED_OPTION,
  JOURNEY_COURSE_MODAL,
  GET_COURSE_SUMMARY_DATA,
  RESETCARD,
  GET_EMPATHYQUIZ_DATA,
  POST_SENDCOLLABEMAIL_DATA,
  POPULARCOURSES_DATA,
  PARENT_TOOLS_DATA,
  SHOW_MORE,
  TAGS_COURSES,
  TAGCOURSES_DATA,
  COURSES_TAG,
  DIM_SKILL_OBJ,
  ENROLLMENT,
  COUNTDATA,
  SHOW_MODAL_OBJ,
  COURSEPAGE_KEY,
  HOMEPAGE_KEY,
  DIM_STORE,
  DIM_MASTERDATA,
  PATHWAYPAGE_KEY,
  DIMPAGE_KEY,
  DELETEAGE_KEY,
  SUBSCRIPTION_KEY,
  DIMDATASTORE,
  HUBSPOT_SIGNUP,
  CNAMEPAGE_KEY,
  APPLY_DISCOUNT,
  SENSITIVEMODAL,
  SENSITIVEVIDEO,
  OPENSETTING,
  VIEWVDOSENSITIVE,
  APPLY_DISCOUNT_ERR,
  USER_AUTHENTICATE,
  GET_VERIFY_USER_RESPONSE,
  COUREVIEWRATINGS,
  COURSERATINGMOODAL,
  COURSESECTIONOBJ,
  CERT_IMAGE_RESPONSE,
  LEARNER_PLAN,
  VIEW_LEARNER_PLAN,
  GET_DIMNSION_PLAN,
  CHANGE_PACE_MODAL,
  MODULE_DETAIL_MODAL,
  DIMENSION_UPDATE_PLAN,
  LEARNER_PLAN_TAGS,
  CREATE_NEW_PLAN,
  DIM_SKILL_COURSES,
  CLASS_SCHEDULE,
  VERIFY_EMAIL_RESPONSE,
  GROWTH_SURVEY_DATA,
  SELECTED_OPTION_DATA,
  GROWTH_ATTEMPTED_SURVEY,
  GROWTH_RIGHTPANEL_OPEN,
} from "../actions/Types";

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  loading: false,
  error: null,
  jwt: localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : null,
  sidebar: false,
  notification: false,
  dimension: [],
  beginQuiz: false,
  showQuote: false,
};

// changed to arrow function
const collections = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        signinresponse: action.payload,
        loading: true,
        isAuth: true,
      };
    case USER_SIGNUP:
      return {
        ...state,
        signupresponse: action.payload,
        loading: true,
        isAuth: true,
      };
    case SIDEBAR:
      return { ...state, sidebar: action.payload, isAuth: true };
    case COURSEGUIDE:
      return { ...state, CourseGuide: action.payload, isAuth: true };
    case ISLOADING:
      return { ...state, loading: action.payload, isAuth: state.isAuth };

    case LOGOUT_JWT:
      return { user: [], users: [], isAuth: false, loading: false };
    case FREE_SIGNUP:
      return {
        ...state,
        freesignup: action.payload,
        isAuth: true,
        jwt: action.payload.jwt,
      };
    case SELF_SIGNUP_SUCCESS:
      return { ...state, selfsignupresponse: action.payload };
    case SELF_SIGNUP_FAILURE:
      return { ...state, loading: true, error: action.payload };
    case USER_LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case GET_ALL_USERS_DETAIL_SUCCESS:
      return { ...state, loading: true, alluserdetails: action.payload };

    case CHILD_DETAIL_SUCCESS:
      return { ...state, updatechilddetail: action.payload };
    case CHILD_DETAIL_FAILURE:
      return { ...state, error: action.payload };

    case GET_SCHOOLS_KEYWORDS_SUCCESS:
      return { ...state, schoolsbykeyword: action.payload, loading: false };

    case GET_FIELDS_SUCCESS:
      return { ...state, fielddetail: action.payload, loading: false };
    case GET_DEGREES_SUCCESS:
      return { ...state, degreedetail: action.payload, loading: false };
    case USER_EDUCATION:
      return { ...state, education: action.payload };
    case GET_INDUSTRIES_SUCCESS:
      return { ...state, allindustries: action.payload };

    case ADD_SCHOOL:
      return { ...state, addschools: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, response: action.payload };
    case GET_COMPANIES_SUCCESS:
      return { ...state, companies: action.payload };
    case GET_GRADE_LEVEL:
      return { ...state, gradelevel: action.payload };

    case STUSCORE:
      return { ...state, studentScore: action.payload };

    case UPDATE_INIT_ASS_RESPONSE:
      return { ...state, updateResponse: action.payload, loading: true };

    case SELECTED_USER:
      return { ...state, getSelectedUser: action.payload };
    case GET_COMPANY_BYKEYWORD:
      return { ...state, companyByKeywords: action.payload };
    case RESPONSE:
      return { ...state, response: action.payload, loading: false };
    case "RESPONSE1":
      return { ...state, response1: action.payload, loading: false };
    case AUTH_TRUE:
      return { ...state, isAuth: true };
    case RESPONSE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case GET_EDUCATION:
      return { ...state, educationItem: action.payload, loading: true };
    case GET_COURSE:
      return { ...state, courseItem: action.payload };
    case GET_ENRICH_KEYWORDS_SUCCESS:
      return { ...state, enrichByKeywords: action.payload };
    case LOGGEDIN_USER:
      return { ...state, loggedInUser: action.payload, isAuth: true };
    case GET_INTEREST_KEYWORDS_SUCCESS:
      return { ...state, interestByKeywords: action.payload, loading: true };
    case GET_INTEREST_SUCCESS:
      return { ...state, getinterests: action.payload };
    case CHILD_LOGIN:
      return { ...state, dataLoading: action.payload };
    case PARENT_LOGIN:
      return { ...state, parentLogin: action.payload };
    case GET_INTERESTBY_ID_SUCCESS:
      return { ...state, interestById: action.payload, loading: true };
    case GET_DIMENSIONS_SUCCESS:
      return { ...state, getdimension: action.payload, loading: true };
    case GET_DIMENSIONSREDIRECT:
      return { ...state, getdimensionsuccess: action.payload, loading: true };
    case UPLOAD_RESPONSE:
      return { ...state, uploadInterest: action.payload };
    case ADD_INTEREST_RESPONSE:
      return { ...state, addInt: action.payload };

    case RESPONSE_OK:
      return { ...state, response_ok: action.payload, loading: false };
    case SETTING_VERIFY:
      return { ...state, setting_responseOK: action.payload, loading: false };
    case COURSELIST:
      return { ...state, courseList: action.payload, loading: false };
    case GET_TITLE_BYKEYWORD:
      return { ...state, titleByKeywords: action.payload };
    case GET_INDUSTRY_BYKEYWORD:
      return { ...state, industryByKeywords: action.payload };
    case GET_DIVISION_BYKEYWORD:
      return { ...state, divisionByKeywords: action.payload };
    case GET_ACTIVITY:
      return { ...state, activityData: action.payload };
    case FORGOT_PASSWORD:
      return { ...state, forgotResponse: action.payload };
    case META_RESPONSE:
      return { ...state, activyDetails: action.payload };
    case RESOURCES_RATINGS:
      return { ...state, resourcesRatingData: action.payload };
    case RATINGS:
      return { ...state, ratingData: action.payload };
    case ACTIVITY_RATING:
      return { ...state, overAllRating: action.payload };
    case GET_SKILLS:
      return { ...state, skills: action.payload };
    // case GET_SERVICES:
    //   return { ...state, services: action.payload };
    case IMAGEDOWNLOAD:
      return { ...state, downloadImage: action.payload };
    case ADD_SKILLS:
      return { ...state, addSkill: action.payload };
    case GET_POPULAR_TITLES:
      return { ...state, popularTitle: action.payload };
    case ADD_TITLE:
      return { ...state, addTitle: action.payload };
    case UPLOAD_VIDEO:
      return { ...state, uploadVideo: action.payload };
    case ADD_PROVIDER_DETAIL:
      return { ...state, addProvDetail: action.payload };
    case GET_ASSDATA:
      return { ...state, getAssessData: action.payload };
    case GET_PROVIDER:
      return { ...state, providerDetails: action.payload };
    case TECHERASSESSSUBMIT:
      return { ...state, teacherAsseSubmit: action.payload };
    case GET_CURRICULAM:
      return { ...state, getCurriculamData: action.payload };
    case GET_COUNTRIES:
      return { ...state, getcountries: action.payload };
    case GET_STATE:
      return { ...state, getstate: action.payload, loading: false };
    case PRIMARY_SKILLS:
      return { ...state, primarySkillsData: action.payload };
    case ENROLL_RESPONSE:
      return { ...state, enrollResponse: action.payload, loading: false };
    case CHECK_ASSESSMENT:
      return { ...state, assessmentName: action.payload, loading: false };
    case GET_METADATA:
      return { ...state, getLessonData: action.payload };
    case GET_RESOURCES:
      return { ...state, lessonResourcesData: action.payload };
    case VERIFY_USER:
      return { ...state, verifyUserData: action.payload };
    case RESPONSE_ERROR:
      return { ...state, responseError: action.payload };
    case GET_USER_ACTIVITY:
      return { ...state, userActivityData: action.payload };
    case GET_ENROLLED_LEARNERS:
      return { ...state, getenrolledlearners: action.payload };
    case GET_PROGRESS_CHART:
      return { ...state, getProgressChart: action.payload };
    case GET_ASSESS_OF_LEARNERS:
      return { ...state, getassessoflearners: action.payload };
    case GET_INTEREST_CATEGORIES:
      return { ...state, getinterestcategories: action.payload };
    case GET_INTEREST_CATEGORY_BY_ID:
      return { ...state, getinterestcategoriesbyid: action.payload };
    case GET_INTEREST_LEVEL_BY_ID:
      return { ...state, getinterestlevelbyid: action.payload };
    case GET_ALL_INDUSTRIES:
      return { ...state, getallindustries: action.payload };
    case GET_GRADES:
      return { ...state, getGradesData: action.payload };
    case GET_IND_SCORE:
      return { ...state, getIndData: action.payload };
    case GET_ALL_SCORE:
      return { ...state, getAllData: action.payload };
    case GET_TITLES_BYCHARACTER:
      return { ...state, titlesByCharacter: action.payload };

    case GET_LESSON:
      return { ...state, getLessonResources: action.payload };
    case GET_RESOURCESDATA:
      return { ...state, getResourcesData: action.payload };
    case TURN_NOTIFICATION:
      return { ...state, notification: action.payload };
    case RESET_SONG:
      return { ...state, resetSong: action.payload };
    case GET_SOCIAL_ACTIVITY_DATA:
      return { ...state, socialActivityData: action.payload };
    case GET_SERIES_SCENES_DATA:
      return { ...state, seriesScenesData: action.payload };
    case ADD_LEARNER:
      return { ...state, addLearner: action.payload, loading: true };
    case KEYAREA:
      return { ...state, keyarea: action.payload };
    case SELECTED_DIMTAB:
      return { ...state, selectedDim: action.payload };

    case SELECTED_PLAN:
      return { ...state, typeSelected: action.payload };
    case BILLING_PLAN:
      return { ...state, billingDetails: action.payload };
    case GET_ALPHABET_DATA:
      return { ...state, alphabetData: action.payload };
    case GET_PROVIDER_COURSES:
      return { ...state, providercousers: action.payload };
    case BREADCRUMB:
      return { ...state, breadcrumbData: action.payload };
    case DASHBOARD:
      return { ...state, dashboardData: action.payload };
    case HELPMODAL:
      return { ...state, helpData: action.payload };
    case SHOWFORM:
      return { ...state, modalData: action.payload };
    case GET_USER_NAME_RESPONSE:
      return { ...state, validateUser: action.payload };
    case QUIZ_DATA:
      return { ...state, quizData: action.payload };
    case KNOWLADGE_CHECK:
      return { ...state, knowladge_check_response: action.payload };
    case NEXT_SCENE_RESPONSE:
      return { ...state, next_scene_response: action.payload };
    case GET_RIBBON:
      return { ...state, ribbonData: action.payload };
    case DEFAULT_CHILD:
      return { ...state, defaultChildData: action.payload };
    case COURATINGS:
      return { ...state, courseRating: action.payload };
    case PROVIDERRATINGS:
      return { ...state, providerRating: action.payload };
    case GET_HOLISTIC:
      return { ...state, holisticChartData: action.payload };
    case SUBSCRIBDATA:
      return { ...state, subscribResponseData: action.payload };
    case RESPONSE_ERROR_DATA:
      return { ...state, responseErrorData: action.payload };
    case RIBBON_OPEN:
      return { ...state, ribbonOpen: action.payload };
    case GET_PATH:
      return { ...state, getPath: action.payload };
    case PLANS:
      return { ...state, planData: action.payload };
    case LOGINRESPONSE_FAILURE:
      return { ...state, loginResponseError: action.payload };
    case COURSE_ENROLLED:
      return { ...state, courseAbtToEnroll: action.payload };
    case COURSEENROLL:
      return { ...state, courseEnrollResponse: action.payload };
    case RESET_PASSWORD:
      return { ...state, resetResponse: action.payload };
    case GET_START_ENROLL_COURSES:
      return { ...state, startEnrollCourses: action.payload };
    case ENROLL_COURSES_JSON:
      return { ...state, enrollCoursesJson: action.payload };
    case PAYMENT_FAILURE:
      return { ...state, paymentFailure: action.payload };
    case PILOT_USER:
      return { ...state, pilotResponse: action.payload };
    case GET_CURATOR_COURSE:
      return { ...state, curatorCourses: action.payload };
    case ENROLLCOURSEDETAIL:
      return { ...state, enrolledCourseDetail: action.payload };
    case VERIFY_PILOT:
      return { ...state, verifyPilotData: action.payload };
    case MODIFY_TOKEN_RESPONSE:
      return { ...state, modifyToken: action.payload };
    case VERIFY_PILOT_ERR:
      return { ...state, verifyErr: action.payload };
    case ACCORDIAN_STATUS:
      return { ...state, accordianStatus: action.payload };
    case LOGINUSERID:
      return { ...state, logInUserId: action.payload };
    case GET_MULTIQUIZ_DATA:
      return { ...state, multiQuizData: action.payload };
    case USER_ATTEMPTED_SURVEY:
      return { ...state, userAttemptedResponse: action.payload };
    case USER_EMPATHY_QUIZ:
      return { ...state, userEmpathyResponse: action.payload };
    case BEGIN_QUIZ:
      return { ...state, beginQuiz: action.payload };
    case RANDOM_DIM:
      return { ...state, randomDimension: action.payload };
    case KC_STATE_RESPONSES:
      return { ...state, kcStateResponse: action.payload };
    case RANDOM_COURSE:
      return { ...state, randomCourseObj: action.payload };
    case QUOTE_RES:
      return { ...state, showQuote: action.payload };
    case COLLAPSDATA:
      return { ...state, collapsData: action.payload };
    case NF_REDIRECT:
      return { ...state, nfRedirect: action.payload };
    case SET_TIME_OUT:
      return { ...state, seTimeOut: action.payload };
    case COURSE_JOURNEY:
      return { ...state, journeyData: action.payload };
    case SETTING_DATA:
      return { ...state, settingData: action.payload };
    case REWARD_DATA:
      return { ...state, rewardData: action.payload };
    case GET_COROBJ:
      return { ...state, corData: action.payload };
    case GET_RESPONSE:
      return { ...state, getResponse: action.payload };
    case GET_DIM:
      return { ...state, dimension: action.payload };
    // case GET_COMPLEX:
    //   return { ...state, getComplexData: action.payload };
    case GET_SERIES_DATA:
      return { ...state, seriesData: action.payload };
    case QUIZ_RESPONSE:
      return { ...state, quizResponse: action.payload };
    case LEARNER_ATTEMPT_QUIZ:
      return { ...state, learnerAtttemptedResponse: action.payload };
    case VIDEO_RESPONSE:
      return { ...state, addVideoResponse: action.payload };
    case LASTQUIZ:
      return { ...state, lastQuizKey: action.payload };
    case QUIZ_STORE:
      return { ...state, tempQuizStore: action.payload };
    case QUIZ_OPTION_STORE:
      return { ...state, tempQuizOptionStore: action.payload };
    case GET_JOURNY_DATA:
      return { ...state, getJournyResponse: action.payload };
    case GET_JOURNY_COURSE_DATA:
      return { ...state, getJournyCourseResponse: action.payload };
    case PRACTICE_STORE:
      return { ...state, tempPracticeStore: action.payload };
    case ENROLL_COURSEJOURNY:
      return { ...state, enrollCourseResponse: action.payload };
    case CHILD_NM:
      return { ...state, childNm: action.payload };
    case LOCKPOPUP_DATA:
      return { ...state, lockPopupData: action.payload };
    case COURSE_MODAL:
      return { ...state, courseModal: action.payload };
    case PROVIDER_MODAL:
      return { ...state, providerModal: action.payload };
    case GET_JOURNY:
      return { ...state, getDimJournyResponse: action.payload };
    case GET_JOURNY_COURSES:
      return { ...state, getDimJournyCoursesResponse: action.payload };
    case SUBSCRIBE_MODAL:
      return { ...state, subscribeModal: action.payload };
    case GET_JOURNY_ENROLL_DATA:
      return { ...state, journeyEnrollResponse: action.payload };
    case ENROLL_COURSEWISEJOURNY:
      return { ...state, courseWiseJourneyResponse: action.payload };
    case SET_COURSEJOURNEYID:
      return { ...state, getSelectedCourseJourneyId: action.payload };
    case ENROLL_MODAL:
      return { ...state, enrollObj: action.payload };
    case USER_GRADE_RESP:
      return { ...state, userGradeResponse: action.payload };
    case POST_RESPONSE:
      return { ...state, postResponse: action.payload };

    case GET_BILLING_DATA:
      return { ...state, billingData: action.payload };
    case DOWNGRADE_MODAL:
      return { ...state, downgradeObj: action.payload };
    case DOWNGRADE_PLAN:
      return { ...state, downGradePlanData: action.payload };
    case DOWNGRADE_USER:
      return { ...state, downGradeUserObj: action.payload };
    case SELECTCHILD_MODAL:
      return { ...state, selectChildObj: action.payload };
    case GET_INTELLIGENCES_DATA:
      return { ...state, getIntelligenceResponse: action.payload };
    case "SELECTED_CVV":
      return { ...state, clientSecObj: action.payload };
    case POST_INTELLIGENCES_DATA:
      return { ...state, response_ok: action.payload };
    case PAYMENT_UPDATE:
      return { ...state, paymentUpdateObj: action.payload };
    case SELECTED_OPTION:
      return { ...state, selectedcheckbox: action.payload };
    case JOURNEY_COURSE_MODAL:
      return { ...state, journeyCourseRes: action.payload };
    case GET_COURSE_SUMMARY_DATA:
      return { ...state, courseSummaryResponse: action.payload };
    case GET_EMPATHYQUIZ_DATA:
      return { ...state, empathyQuizData: action.payload };
    case RESETCARD:
      return { ...state, resetCardResponse: action.payload };
    case POST_SENDCOLLABEMAIL_DATA:
      return { ...state, collabEmailResponse: action.payload };
    case POPULARCOURSES_DATA:
      return { ...state, getPopularCoursesResp: action.payload };
    case PARENT_TOOLS_DATA:
      return { ...state, getParentToolResponses: action.payload };
    case SHOW_MORE:
      return { ...state, showMore: action.payload };
    case TAGS_COURSES:
      return { ...state, tagsCouresData: action.payload };
    case TAGCOURSES_DATA:
      return { ...state, coursesbykeyword: action.payload };
    case COURSES_TAG:
      return { ...state, courseTagObj: action.payload };
    case DIM_SKILL_OBJ:
      return { ...state, dimSkillObj: action.payload };
    case ENROLLMENT:
      return { ...state, enrollmentObj: action.payload };
    case COUNTDATA:
      return { ...state, countSkillData: action.payload };
    case SHOW_MODAL_OBJ:
      return { ...state, modalObj: action.payload };
    case COURSEPAGE_KEY:
      return { ...state, coursePageObj: action.payload };
    case HOMEPAGE_KEY:
      return { ...state, homePageObj: action.payload };
    case DIM_STORE:
      return { ...state, dimDataObj: action.payload };
    case DIM_MASTERDATA:
      return { ...state, dimMasterDataRes: action.payload };
    case PATHWAYPAGE_KEY:
      return { ...state, pathwayPageObj: action.payload };
    case DIMPAGE_KEY:
      return { ...state, dimPageObj: action.payload };
    case DELETEAGE_KEY:
      return { ...state, deletePageObj: action.payload };
    case DIMDATASTORE:
      return { ...state, dimDataObj: action.payload };
    case SUBSCRIPTION_KEY:
      return { ...state, subscriptionPageObj: action.payload };
    case HUBSPOT_SIGNUP:
      return { ...state, hubspotData: action.payload };
    case CNAMEPAGE_KEY:
      return { ...state, cnamePageObj: action.payload };
    case APPLY_DISCOUNT:
      return { ...state, discount: action.payload };
    case SENSITIVEMODAL:
      return { ...state, viewSensitiveModal: action.payload };
    case SENSITIVEVIDEO:
      return { ...state, viewSensitiveVideo: action.payload };
    case OPENSETTING:
      return { ...state, openSettingModal: action.payload };
    case VIEWVDOSENSITIVE:
      return { ...state, viewVideoModal: action.payload };
    case APPLY_DISCOUNT_ERR:
      return { ...state, discountErr: action.payload };
    case USER_AUTHENTICATE:
      return { ...state, userAuthResponse: action.payload };
    case GET_VERIFY_USER_RESPONSE:
      return { ...state, verifyUserResponse: action.payload };
    case COUREVIEWRATINGS:
      return { ...state, courseRatingObj: action.payload };
    case COURSERATINGMOODAL:
      return { ...state, courseRatingView: action.payload };
    case COURSESECTIONOBJ:
      return { ...state, courseSectionObj: action.payload };
    case CERT_IMAGE_RESPONSE:
      return { ...state, certImageResp: action.payload };
    case LEARNER_PLAN:
      return { ...state, learnerPlanResponse: action.payload };
    case VIEW_LEARNER_PLAN:
      return { ...state, viewLearnerPlanObj: action.payload };
    case GET_DIMNSION_PLAN:
      return { ...state, getDimPlanData: action.payload };
    case CHANGE_PACE_MODAL:
      return { ...state, changePaceResp: action.payload };
    case MODULE_DETAIL_MODAL:
      return { ...state, moduleDetailResp: action.payload };
    case LEARNER_PLAN_TAGS:
      return { ...state, learnerTagsResponse: action.payload };
    case CREATE_NEW_PLAN:
      return { ...state, getNewPlanResponse: action.payload };
    case DIM_SKILL_COURSES:
      return { ...state, dimSkillCourseResp: action.payload };
    /* Class Schedule 8 may 2024 */
    case CLASS_SCHEDULE:
      return { ...state, classScheduleData: action.payload };
    //verify user name API response 14 May 2024
    case VERIFY_EMAIL_RESPONSE:
      return { ...state, emailResponse: action.payload };
    /* Growth Survey 16 May 2024 */
    case GROWTH_SURVEY_DATA:
      return { ...state, growthSurveyData: action.payload };
    case SELECTED_OPTION_DATA:
      return { ...state, selectOptData: action.payload };
    case GROWTH_ATTEMPTED_SURVEY:
      return { ...state, growthAttemptedResponse: action.payload };
    case GROWTH_RIGHTPANEL_OPEN:
      return { ...state, surveyAssOpen: action.payload };
    default:
      return { ...state };
  }
};

export default collections;

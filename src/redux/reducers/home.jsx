/** @format */

import {
  DIMVIEW,
  SIDEBAR_PROGRESS,
  POPULAR_COURSES,
  GROWTH_MODAL,
  SKILL_MODAL,
  HOMEDIM,
  DIM_SKILL,
  COMING_COURSES,
  DASHBOARD,
  SKILL_PROGRESS,
  COURSE_DETAILS,
  DONTSHOW,
  GROWTH_SKILLPOPUP,
  OVERALL_MODAL,
  HOLISTIC_DATA,
  DIM_GUIDANCE,
} from "../actions/Types";

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  notification: true,
};
const home = (state = initialState, action) => {
  switch (action.type) {
    case DIMVIEW:
      return {
        ...state,
        dimViewObj: action.payload,
        isAuth: true,
      };
    case SIDEBAR_PROGRESS:
      return {
        ...state,
        skillProg: action.payload,
        isAuth: true,
      };
    case POPULAR_COURSES:
      return {
        ...state,
        popularCourseObj: action.payload,
        isAuth: true,
      };
    case GROWTH_MODAL:
      return {
        ...state,
        growthModal: action.payload,
        isAuth: true,
      };
    case SKILL_MODAL:
      return {
        ...state,
        growthSkillObj: action.payload,
        isAuth: true,
      };
    case HOMEDIM:
      return {
        ...state,
        homeCourseObj: action.payload,
        isAuth: true,
      };
    case DIM_SKILL:
      return {
        ...state,
        dimSkillObj: action.payload,
        isAuth: true,
      };
    case COMING_COURSES:
      return {
        ...state,
        comingCourseObj: action.payload,
        isAuth: true,
      };
    case DASHBOARD:
      return { ...state, dashboardData: action.payload };
    case SKILL_PROGRESS:
      return { ...state, skillDataObj: action.payload };
    case COURSE_DETAILS:
      return { ...state, courseDetails: action.payload };
    case DONTSHOW:
      return { ...state, dontShowResponse: action.payload };
    case GROWTH_SKILLPOPUP:
      return {
        ...state,
        growthSkillPopup: action.payload,
        isAuth: true,
      };
    case OVERALL_MODAL:
      return {
        ...state,
        showoverModal: action.payload,
        isAuth: true,
      };
    case HOLISTIC_DATA:
      return {
        ...state,
        getHolisticObj: action.payload,
        isAuth: true,
      };
    case DIM_GUIDANCE:
      return {
        ...state,
        getGuidanceData: action.payload,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};

export default home;
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
  HOLISTIC_DATA,
  DASHBOARD,
  COURSE_DETAILS,
  RESPONSE_OK,
  GROWTH_SKILLPOPUP,
  OVERALL_MODAL,
  DIM_GUIDANCE,
  TAGS_COURSES,
} from "./Types";

import { API_PATHS } from "../../utils";
import { responseFailure } from ".";
import { getAxios } from "../../utils/helper";

import RightPanelCourseJson from "../json/home/RightPanelCourseJson.json";

export const dimView = (data) => async (dispatch) => {
  dispatch({ type: DIMVIEW, payload: data });
};

export const sideBarProgress = (data) => async (dispatch) => {
  dispatch({ type: SIDEBAR_PROGRESS, payload: data });
};

// export const popularCourses = (data) => async (dispatch) => {
//   dispatch({ type: POPULAR_COURSES, payload: PopularCourses });
//   if (
//     window.location.hostname === "uat.d3q8d8fs329b3i.amplifyapp.com" ||
//     window.location.hostname === "www.vickyknows.com"
//   ) {
//     console.log("UAT");
//     dispatch({ type: POPULAR_COURSES, payload: PopularCoursesUAT });
//   } else {
//     console.log("DEV");
//   }
// };

export const comingSoonCourse = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_COMING_SOON_API}`);

    dispatch({
      type: COMING_COURSES,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const tagsCourse = (userid) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_TAGS_API + userid}`);

    dispatch({
      type: TAGS_COURSES,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const showGrowthModal = (data) => async (dispatch) => {
  dispatch({ type: GROWTH_MODAL, payload: data });
};

export const showSkillModal = (data) => async (dispatch) => {
  dispatch({ type: SKILL_MODAL, payload: data });
};

export const dimSkillData = (data) => async (dispatch) => {
  dispatch({ type: DIM_SKILL, payload: data });
};

export const getDashboard = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}dashboard/${userId}`
      );

      dispatch({
        type: DASHBOARD,
        payload: data.records[0],
      });
    } else {
      dispatch({
        type: DASHBOARD,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getHomeDimension =
  (userId, dimTab, dimension) => async (dispatch, getState) => {
    try {
      if (userId && dimTab?.key && dimTab?.value) {
        if (!dimension[dimTab?.value]) {
          const instance = getAxios();
          const { data } = await instance.get(
            `${API_PATHS.COURSE_API}${userId}/${dimTab?.key}/${dimTab.value}`
          );
          dimension[dimTab?.value] = data?.records[0];
          dispatch({
            type: HOMEDIM,
            payload: dimension,
          });
        }
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getCourseDetails = (courseId, userId) => async (dispatch) => {
  try {
    if (courseId && userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_DETAILS_API}${courseId}/${userId}`
      );

      dispatch({
        type: COURSE_DETAILS,
        payload: data.records[0],
      });
    } else {
      dispatch({
        type: COURSE_DETAILS,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const dontShowAgain = (userId, levelId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.USER_DETAILBY_ID_API + "/entryPop/"}${userId}`
      );
      dispatch({
        type: RESPONSE_OK,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const showSkillgrowthModal = (data) => async (dispatch) => {
  dispatch({ type: GROWTH_SKILLPOPUP, payload: data });
};

export const showDimGuidanceModal = (data) => async (dispatch) => {
  dispatch({ type: DIM_GUIDANCE, payload: data });
};

export const showOverallModal = (data) => async (dispatch) => {
  dispatch({ type: OVERALL_MODAL, payload: data });
};

export const getHolistic = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(`${API_PATHS.HOLISTIC_API}${userId}`);

      dispatch({
        type: HOLISTIC_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: HOLISTIC_DATA,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

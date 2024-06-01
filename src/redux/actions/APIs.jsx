/** @format */

import axios from "axios";
import {
  datesorting,
  getCapitalized,
  getDimShuffle,
  getToken,
  getUrlSegment,
} from "../../utils/helper";
export const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH;

import {
  USER_LOGIN,
  GET_ALL_USERS_DETAIL_SUCCESS,
  GET_DEGREES_SUCCESS,
  GET_FIELDS_SUCCESS,
  GET_INDUSTRIES_SUCCESS,
  ADD_SCHOOL,
  CHILD_DETAIL_SUCCESS,
  CHILD_DETAIL_FAILURE,
  GET_SCHOOLS_KEYWORDS_SUCCESS,
  CHANGE_PASSWORD,
  USER_LOGIN_FAILURE,
  LOGOUT_UISTATE,
  LOGOUT_JWT,
  SIDEBAR,
  GET_COMPANIES_SUCCESS,
  GET_GRADE_LEVEL,
  UPDATE_INIT_ASS_RESPONSE,
  GET_COMPANY_BYKEYWORD,
  RESPONSE,
  GET_EDUCATION,
  GET_COURSE,
  GET_ENRICH_KEYWORDS_SUCCESS,
  GET_INTEREST_KEYWORDS_SUCCESS,
  GET_INTEREST_SUCCESS,
  GET_INTERESTBY_ID_SUCCESS,
  GET_DIMENSIONS_SUCCESS,
  UPLOAD_RESPONSE,
  ADD_INTEREST_RESPONSE,
  RESPONSE_OK,
  COURSELIST,
  FORGOT_PASSWORD,
  GET_TITLE_BYKEYWORD,
  GET_INDUSTRY_BYKEYWORD,
  GET_DIVISION_BYKEYWORD,
  GET_COURSEDATA,
  META_RESPONSE,
  RATINGS,
  ACTIVITY_RATING,
  GET_SKILLS,
  GET_SERVICES,
  ADD_SKILLS,
  // GET_POPULAR_TITLES,
  ADD_TITLE,
  USER_SIGNUP,
  GET_ASSDATA,
  GET_PROVIDER,
  GET_CURRICULAM,
  GET_COUNTRIES,
  GET_STATE,
  PRIMARY_SKILLS,
  ENROLL_RESPONSE,
  CHECK_ASSESSMENT,
  GET_METADATA,
  GET_RESOURCES,
  VERIFY_USER,
  RESPONSE_ERROR,
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
  GET_LESSON,
  TURN_NOTIFICATION,
  GET_RESOURCESDATA,
  GET_SOCIAL_ACTIVITY_DATA,
  GET_SERIES_SCENES_DATA,
  ADD_LEARNER,
  GET_ALPHABET_DATA,
  GET_PROVIDER_COURSES,
  RESOURCES_RATINGS,
  DASHBOARD,
  GET_USER_NAME_RESPONSE,
  KNOWLADGE_CHECK,
  NEXT_SCENE_RESPONSE,
  GET_RIBBON,
  QUIZ_DATA,
  COURATINGS,
  PROVIDERRATINGS,
  GET_HOLISTIC,
  SUBSCRIBDATA,
  RESPONSE_ERROR_DATA,
  SELECTED_PLAN,
  DOWNGRADE_PLAN,
  PLANS,
  COURSEENROLL,
  RESET_PASSWORD,
  GET_START_ENROLL_COURSES,
  PAYMENT_FAILURE,
  GET_CURATOR_COURSE,
  PILOT_USER,
  VERIFY_PILOT,
  MODIFY_TOKEN_RESPONSE,
  QUIZ_RESPONSE,
  VERIFY_PILOT_ERR,
  GET_DIMENSIONSREDIRECT,
  GET_MULTIQUIZ_DATA,
  USER_ATTEMPTED_SURVEY,
  KC_STATE_RESPONSES,
  RANDOM_DIM,
  RANDOM_COURSE,
  ENROLL_COURSES_JSON,
  SETTING_DATA,
  REWARD_DATA,
  GET_RESPONSE,
  SETTING_VERIFY,
  COURSE_JOURNEY,
  // GET_COMPLEX,
  GET_DIM,
  GET_SERIES_DATA,
  LEARNER_ATTEMPT_QUIZ,
  GET_POPULAR_TITLES,
  VIDEO_RESPONSE,
  GET_JOURNY_DATA,
  GET_JOURNY_COURSE_DATA,
  ENROLL_COURSEJOURNY,
  GET_JOURNY,
  GET_JOURNY_COURSES,
  ENROLL_COURSEWISEJOURNY,
  GET_JOURNY_ENROLL_DATA,
  USER_GRADE_RESP,
  POST_RESPONSE,
  GET_BILLING_DATA,
  GET_INTELLIGENCES_DATA,
  POST_INTELLIGENCES_DATA,
  PAYMENT_UPDATE,
  GET_COURSE_SUMMARY_DATA,
  POPULAR_COURSES,
  POST_SENDCOLLABEMAIL_DATA,
  GET_EMPATHYQUIZ_DATA,
  USER_EMPATHY_QUIZ,
  POPULARCOURSES_DATA,
  TAGCOURSES_DATA,
  DIM_SKILL_OBJ,
  DIM_MASTERDATA,
  APPLY_DISCOUNT,
  APPLY_DISCOUNT_ERR,
  HUBSPOT_SIGNUP,
  USER_AUTHENTICATE,
  GET_VERIFY_USER_RESPONSE,
  COUREVIEWRATINGS,
  CERT_IMAGE_RESPONSE,
  LEARNER_PLAN_QUIZ,
  LEARNER_PLAN,
  GET_DIMNSION_PLAN,
  LEARNER_PLAN_TAGS,
  CREATE_NEW_PLAN,
  DIM_SKILL_COURSES,
  VERIFY_EMAIL_RESPONSE,
  GROWTH_SURVEY_DATA,
  GROWTH_ATTEMPTED_SURVEY,
} from "./Types";

import { API_PATHS, PATHS } from "../../utils";
import {
  isLoading,
  responseFailure,
  loginResponseFailure,
  showModal,
  getChildName,
} from ".";
import {
  getUnauthedAxios,
  getAxios,
  getMultipartAxios,
  getPubMultipartAxios,
} from "../../utils/helper";
import { getDashboard } from "./Home";
import { SITEURLNAME } from "../../utils/Messages";

export const userSignup = (formData, pilotToken) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(
      `${API_PATHS.FREE_SIGNUP_API}`,
      formData
    );

    let record = data?.records[0];

    localStorage.setItem("access_token", record?.jwt + "##" + record?.parentId);

    if (record?.jwt) {
      formData.sendNewsletter = true;
      const headers = {
        Authorization: `Bearer ${record.jwt}`,
        "Content-Type": "application/json",
      };

      try {
        const { data } = await instance.post(
          `${API_PATHS.HUBSPOT_SIGNUP_API}`,
          formData,
          { headers }
        );
        dispatch({ type: HUBSPOT_SIGNUP, payload: data });
      } catch (error) {
        console.error("Error sending request:", error);
      }
    }

    if (pilotToken) {
      dispatch(modifyToken(pilotToken));
    }

    dispatch(getChildName(record?.childName));
    dispatch({ type: USER_SIGNUP, payload: data });
    dispatch(getAllUsersDetail());

    return data;
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const userSignupForInviteParent =
  (formData, pilotToken) => async (dispatch) => {
    try {
      const instance = getUnauthedAxios();
      const { data } = await instance.post(
        `${API_PATHS.INVITE_PARENT_SIGNUP_API}`,
        formData
      );

      let record = data?.records[0];

      localStorage.setItem(
        "access_token",
        record?.jwt + "##" + record?.parentId
      );

      if (record?.jwt) {
        formData.sendNewsletter = true;
        const headers = {
          Authorization: `Bearer ${record.jwt}`,
          "Content-Type": "application/json",
        };

        try {
          const { data } = await instance.post(
            `${API_PATHS.HUBSPOT_SIGNUP_API}`,
            formData,
            { headers }
          );
          dispatch({ type: HUBSPOT_SIGNUP, payload: data });
        } catch (error) {
          console.error("Error sending request:", error);
        }
      }

      if (pilotToken) {
        dispatch(modifyToken(pilotToken));
      }

      dispatch(getChildName(record?.childName));
      dispatch({ type: USER_SIGNUP, payload: data });
      dispatch(getAllUsersDetail());

      return data;
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

/********************************************************* */
export const userSelfSignup = (formData) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(
      `${API_PATHS.SELF_SIGNUP_API}`,
      formData
    );

    localStorage.setItem(
      "access_token",
      data?.records[0]?.jwt + "##" + data?.records[0]?.userId
    );
    dispatch({ type: USER_SIGNUP, payload: data });
    dispatch(getAllUsersDetail());
    return data;
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const createLogin = (formData, id, fname) => async (dispatch) => {
  try {
    if (formData && id && fname) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.CREATE_LOGIN_API}${id}`,
        formData
      );
      // dispatch({ type: RESPONSE, payload: data });
      dispatch({
        type: RESPONSE,
        payload: {
          success: true,
          message: `${getCapitalized(fname)}'s login has been created `,
        },
      });

      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getVerifyUser = (token) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(`${API_PATHS.USERVERIFY_API + token}`);
    dispatch({ type: VERIFY_USER, payload: data });
  } catch (error) {
    dispatch({ type: RESPONSE_ERROR, payload: error });
  }
};

// users/uistate/{userId}
export const logoutAction = (loggedInUser) => async (dispatch, newstate) => {
  try {
    if (loggedInUser && loggedInUser?.records[0]?.role?.name === "PROVIDER") {
      let username = localStorage.getItem("username");
      let checkbox = localStorage.getItem("checkbox");
      localStorage.clear();
      localStorage.setItem("username", username);
      localStorage.setItem("checkbox", checkbox);
      window.location.assign(PATHS.LANDINGPAGE);
    }
    if (loggedInUser || newstate()?.collections?.alluserdetails) {
      if (localStorage.getItem("access_token")) {
        const instance = getAxios();

        let userId = loggedInUser?.records[0]?.id
          ? loggedInUser?.records[0]?.id
          : newstate()?.collections?.alluserdetails?.records[0]?.id;
        const { data } = await instance.post(
          `${API_PATHS.UPDATE_UISTATE + "/" + userId}`,
          localStorage.getItem("previousState")
        );

        if (loggedInUser) {
          dispatch({ type: LOGOUT_UISTATE, payload: data });

          if (data?.success) {
            dispatch(logOutJWT(userId));
            window.location.assign(PATHS.LANDINGPAGE);
          }
        } else {
          dispatch({ type: LOGOUT_UISTATE, payload: data });
        }
      }
      // else {
      //   window.location.assign(PATHS.LANDINGPAGE);
      // }
    }
    // else {
    //   if (!localStorage.getItem("access_token")) {
    //     window.location.assign(PATHS.LANDINGPAGE);
    //   }
    // }
    let username = localStorage.getItem("username");
    let checkbox = localStorage.getItem("checkbox");
    localStorage.clear();
    localStorage.setItem("username", username);
    localStorage.setItem("checkbox", checkbox);
  } catch (error) {
    console.log("Store Error", error);
  }
};

export const logOutJWT = (loggedInUser) => async (dispatch, newstate) => {
  try {
    if (loggedInUser) {
      const instance = getAxios();
      const token = getToken();
      const { data } = await instance.post(
        `${API_PATHS.LOGOUT_API + "/" + loggedInUser + "/" + token}`
      );

      dispatch({ type: LOGOUT_JWT, payload: data });
    }
  } catch (error) {
    console.log("Store Error", error);
  }
};
export const deleteDimension = (userId, tab, dim, type) => async (dispatch) => {
  if (type == "all") {
    delete dim["Social"];
    delete dim["Intellectual"];
    delete dim["Physical"];
    delete dim["Mindfulness"];
    delete dim["Emotional"];
    dispatch(getDimensionData(userId, tab, dim));
  }
  if (!type && dim && dim[tab?.value]?.user_id == userId) {
    if (!tab?.value) {
      delete dim["Social"];
      delete dim["Intellectual"];
    } else {
      delete dim[tab?.value];

      dispatch(getDimensionData(userId, tab, dim));
    }
  } else if (!type && dim[tab?.value]?.user_id !== userId) {
    delete dim["Social"];
    delete dim["Intellectual"];
    delete dim["Physical"];
    delete dim["Mindfulness"];
    delete dim["Emotional"];

    dispatch(getDimensionData(userId, tab, dim));
  }
};
export const sidebarCollapse = (flag) => async (dispatch) => {
  dispatch({ type: SIDEBAR, payload: flag });
};

export const userSignin = (formData, type) => async (dispatch) => {
  if (type !== "personaChange") {
    dispatch({ type: USER_LOGIN_FAILURE, payload: "" });
    localStorage.removeItem("access_token");
  }
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(API_PATHS.FREE_SIGNIN_API, formData);

    localStorage.setItem("access_token", data?.jwt + "##" + data?.id);
    dispatch({ type: USER_LOGIN, payload: data });
    dispatch(getAllUsersDetail());
    localStorage.setItem("abondonPop", true);
  } catch (error) {
    if (type !== "personaChange") {
      localStorage.removeItem("access_token");
    }
    dispatch(loginResponseFailure(error));
  }
};

export const userAuthenticate = (formData) => async (dispatch) => {
  try {
    if (formData) {
      console.log("data### : ", formData);
      const instance = getUnauthedAxios();
      const { data } = await instance.post(API_PATHS.FREE_SIGNIN_API, formData);

      dispatch({
        type: USER_AUTHENTICATE,
        payload: data,
      });
    } else {
      dispatch({
        type: USER_AUTHENTICATE,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(loginResponseFailure(error));
  }
};

/********************************************************* */
export const getAllUsersDetail = () => async (dispatch, newState) => {
  dispatch(isLoading(true));
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.USER_DETAILBY_ID_API}`);

    let obj = data;
    obj.records[0].children = datesorting(obj?.records[0]?.children);

    dispatch({
      type: GET_ALL_USERS_DETAIL_SUCCESS,
      payload: obj,
    });

    if (!newState()?.collections?.randomCourseObj) {
      if (
        ["", "null", null].includes(data?.records[0]?.uistate) &&
        data?.records[0]?.role?.name !== "PROVIDER"
      ) {
        if (!localStorage.getItem("randomCor")) {
          if (data?.records[0]?.children.length > 0) {
            // dispatch(getRandomCourse(data?.records[0]?.children[0]?.id));
          } else {
            // dispatch(getRandomCourse(data?.records[0]?.id));
          }
        }
      }
    }

    //
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/********************************************************* */
export const updateUsersBasicDetail = (formData, id) => async (dispatch) => {
  try {
    if (formData && id) {
      const instance = getAxios();
      const { data } = await instance.patch(
        `${API_PATHS.UPDATE_BASIC_DETAIL_API + "/" + id}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addStudentEducation = (formData, userId) => async (dispatch) => {
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.STUDENT_EDU_ADD_API}${userId}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
  //STUDENT_EDU_ADD_API
};

export const addUserEducation = (formData, userId) => async (dispatch) => {
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.USER_EDUCATION_API}/${userId}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteUserEducation = (eduId, userId) => async (dispatch) => {
  try {
    if (userId && eduId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.UPDATE_EDUCATION_API}${userId}/${eduId}`
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/************get school by keywords*************/
export const getAllSchoolsByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_ALL_SCHOOLS_KEYWORD_API + "?name=" + keyword}`
      );

      dispatch({
        type: GET_SCHOOLS_KEYWORDS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const getAllFields = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_ALL_FIELDS_API}`);
    dispatch({
      type: GET_FIELDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const getDegrees = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_DEGREES_API}`);
    dispatch({
      type: GET_DEGREES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const getCourses = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_COURSE_API}/${userId}`
      );
      dispatch({
        type: GET_COURSE,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_COURSE,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/********************************************************* */
export const createUserExperience = (formData, userId) => async (dispatch) => {
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.CREATE_USER_EXPERIENCE_API}/${userId}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addTeacherToSchool = (formData, id) => async (dispatch) => {
  try {
    if (formData && id) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.ADD_TEACHER_TOSCHOOL_API}/${id}`,
        formData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/***********DELETE FILES************/

export const deleteAvatar = (id, fileName) => async (dispatch) => {
  dispatch(isLoading(true));
  try {
    if (id && fileName) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.REMOVE_AVATAR_API + id + "/" + fileName}`
      );
      dispatch({
        type: RESPONSE_OK,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/********************************************************* */

export const updateUserProfilePicture =
  (profileImage, id) => async (dispatch) => {
    if (profileImage && id) {
      try {
        const instance = getMultipartAxios();
        const formData = new FormData();
        formData.append("file", profileImage);
        const { data } = await instance.post(
          `${API_PATHS.UPDATE_PROFILE_PICTURE_API}/${id}`,
          formData
        );
        dispatch({
          type: RESPONSE_OK,
          payload: data,
        });
        dispatch(getAllUsersDetail());
      } catch (error) {
        dispatch(responseFailure(error));
      }
    }
  };

/******* Change Password ************ */

export const changePassword = (password, userId) => async (dispatch) => {
  try {
    if (password && userId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.CHANGE_PASSWORD_API + "/" + userId}`,
        password
      );
      dispatch({
        type: CHANGE_PASSWORD,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getGradeLevel = () => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.get(`${API_PATHS.GET_GRADE_LEVEL_API}`);
    dispatch({
      type: GET_GRADE_LEVEL,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GRADE_LEVEL,
      payload: error,
    });
  }
};

export const AddNewChild = (formData, id, tab, dim) => async (dispatch) => {
  try {
    if (formData && id) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.ADD_CHILD_API + "/" + id}`,
        formData
      );

      dispatch({
        type: ADD_LEARNER,
        payload: data,
      });

      dispatch(getAllUsersDetail());
      delete dim[tab?.value];
      if (data?.recordId) {
        dispatch(getDimensionData(data?.recordId, tab, dim));
      }
    } else {
      dispatch({
        type: ADD_LEARNER,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const updateAssessment = (id, object) => async (dispatch) => {
  try {
    if (id !== "reset") {
      const instance = getAxios();
      if (id && object) {
        let body = {};
        object.map((data) => {
          body[data.subTitle] = data.score;
        });
        const { data } = await instance.patch(
          API_PATHS.UPDATE_INIT_ASSESS + id,
          body
        );
        dispatch({ type: UPDATE_INIT_ASS_RESPONSE, payload: data });
      }
    } else {
      dispatch({ type: UPDATE_INIT_ASS_RESPONSE, payload: "" });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_INIT_ASS_RESPONSE,
      payload: error.response?.data?.message,
    });
  }
};

/************get company by keywords*************/
export const getCompaniesByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_COMPANY_BYKEYWORD_API + "?name=" + keyword}`
      );
      dispatch({
        type: GET_COMPANY_BYKEYWORD,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const updateTeacher =
  (formData, learnerId, teacherId) => async (dispatch) => {
    try {
      if (learnerId && teacherId) {
        const instance = getAxios();
        const { data } = await instance.patch(
          `${API_PATHS.UPDATE_TEACHER_UPDATE}${learnerId}/${teacherId}`,
          formData
        );
        dispatch({
          type: RESPONSE,
          payload: data,
        });
        dispatch(getAllUsersDetail());
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getEnrichByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_ENRICH_KEYWORD_API + "?name=" + keyword}`
      );

      dispatch({
        type: GET_ENRICH_KEYWORDS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addEnrichCenter = (formData, userId) => async (dispatch) => {
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.ADD_ENRICHMENT_API}/${userId}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addTeacherToEnrichment = (formData, id) => async (dispatch) => {
  try {
    if (formData && id) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.ADD_TEACHER_TOENRICH_API}/${id}`,
        formData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteUserExperience = (expId, userId) => async (dispatch) => {
  try {
    if (userId && expId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.DELETE_EXPERIENCE_API}${userId}/${expId}`
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteEnrichment = (enrId, userId) => async (dispatch) => {
  try {
    if (userId && enrId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.DELETE_ENRICHMENT_API}${userId}/${enrId}`
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteEduTeacher =
  (userId, schoolId, teacherId, courseid, type) => async (dispatch) => {
    try {
      if (userId && schoolId && teacherId && courseid) {
        const instance = getAxios();
        let APIPATH = "";
        if (type === "school") {
          APIPATH = API_PATHS.DEL_EDU_TEACHER;
        } else {
          APIPATH = API_PATHS.DEL_EDU_EN_TEACHER;
        }
        const { data } = await instance.delete(
          `${APIPATH}${userId}/${schoolId}/${teacherId}/${courseid}`
        );
        dispatch({ type: RESPONSE, payload: data });
        dispatch(getAllUsersDetail());
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getInterestByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_INTEREST_KEYWORD_API + "?name=" + keyword}`
      );
      dispatch({
        type: GET_INTEREST_KEYWORDS_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getInterests = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_INTEREST_API}`);
    dispatch({
      type: GET_INTEREST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addInterest = (formData, userId) => async (dispatch) => {
  // dispatch({ type: ADD_INTEREST_RESPONSE, payload: "" });
  dispatch({ type: RESPONSE, payload: "" });
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.GET_INTEREST_API}/${userId}`,
        formData
      );
      // dispatch({ type: ADD_INTEREST_RESPONSE, payload: data });
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getInterestByID(userId));
      dispatch(getInterests());
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getInterestByID = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_INTEREST_API}/${userId}`
      );
      dispatch({
        type: GET_INTERESTBY_ID_SUCCESS,
        payload: data,
      });
    }
  } catch (e) { }
};

export const uploadInterestPic = (profileImage, id) => async (dispatch) => {
  dispatch({ type: ADD_INTEREST_RESPONSE, payload: "" });
  if (profileImage && id) {
    try {
      const instance = getMultipartAxios();
      const formData = new FormData();
      formData.append("file", profileImage);
      const { data } = await instance.post(
        `${API_PATHS.UPLOAD_INTEREST_PICTURE_API}${id}`,
        formData
      );
      dispatch({
        type: UPLOAD_RESPONSE,
        payload: data,
      });
    } catch (error) {
      dispatch(responseFailure(error));
    }
  }
};
export const getDimensions = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_DIMENSIONS_API}`);
    dispatch({
      type: GET_DIMENSIONS_SUCCESS,
      payload: data,
    });
    dispatch({
      type: GET_DIMENSIONSREDIRECT,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getRandomDimension = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_DIMENSIONS_API}`);
    let dataObj = getDimShuffle(data?.records);
    dispatch({
      type: RANDOM_DIM,
      payload: dataObj,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteUserSchool = (userId, eduId) => async (dispatch) => {
  try {
    if (userId && eduId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.UPDATE_SCHOOL_API}${userId}/${eduId}`
      );

      dispatch({ type: RESPONSE_OK, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteInterest = (userId, interestId) => async (dispatch) => {
  try {
    if (userId && interestId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.GET_INTEREST_API}/${userId}/${interestId}`
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
      // dispatch(getInterestByID(userId));
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getDimensionData =
  (userId, dimTab, dimension) => async (dispatch, getState) => {
    try {
      if (userId && dimTab?.key && dimTab?.value) {
        if (!dimension[dimTab?.value] || dimTab?.istDimensionApi) {
          const instance = getAxios();
          const { data } = await instance.get(
            `${API_PATHS.COURSE_API}${userId}/${dimTab?.key}/${dimTab.value}`
          );
          dimension[dimTab?.value] = data?.records[0];

          dispatch({
            type: GET_DIM,
            payload: dimension,
          });
          dispatch({
            type: COURSELIST,
            payload: dimension[dimTab?.value],
          });
        }
      }
      //dispatch(getProgress(userId, dimTab?.key));
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

//FORGOT_API;

export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(`${API_PATHS.FORGOT_API}`, formData);
    dispatch({ type: FORGOT_PASSWORD, payload: data });
  } catch (error) {
    dispatch(loginResponseFailure(error));
  }
};

export const resetPassword = (formData, token) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    if (formData && token) {
      const { data } = await instance.post(
        `${API_PATHS.FORGOT_API + "/" + token}`,
        formData
      );
      dispatch({ type: RESET_PASSWORD, payload: data });
    } else if (token) {
      const { data } = await instance.post(
        `${API_PATHS.FORGOT_API + "/" + token}`
      );
      dispatch({ type: RESET_PASSWORD, payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

const updateDimNode = (tab, dim) => {
  let courses = delete dim[tab?.value];
};

export const addActivityData =
  (formData, tab, dim, courseArea, obj) => async (dispatch) => {
    try {
      const instance = getAxios();
      if ((formData, tab, dim)) {
        const { data } = await instance.post(
          `${API_PATHS.ACTIVITY_API}`,
          formData
        );

        dispatch({
          type: VIDEO_RESPONSE,
          payload: data,
        });
        delete dim[tab?.value];
        dispatch(getDimensionData(formData?.userId, tab, dim));
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getTitlesByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_TITLE_BYKEYWORD_API + "?name=" + keyword}`
      );
      dispatch({
        type: GET_TITLE_BYKEYWORD,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
export const getIndustryByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_INDUSTRY_BYKEYWORD_API + "?name=" + keyword}`
      );
      dispatch({
        type: GET_INDUSTRY_BYKEYWORD,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
export const getDivisionByKeyWords = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_DIVISION_BYKEYWORD_API + "?name=" + keyword}`
      );
      dispatch({
        type: GET_DIVISION_BYKEYWORD,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getMetaData = (id) => async (dispatch) => {
  try {
    if (id) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_META_DATA + "/" + id}`
      );
      dispatch({ type: META_RESPONSE, payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addRatingsData =
  (
    rating,
    activityId,
    userId,
    type,
    dim,
    tab,
    childId,
    resource,
    modlessonId
  ) =>
    async (dispatch) => {
      try {
        let flag = "";
        const instance = getAxios();
        if (type === "provider") {
          flag = type + "/";
        } else if (type === "activities") {
          flag = type + "/";
        } else if (type == "course") {
        }
        const { data } = await instance.post(
          `${API_PATHS.COURSE_API + flag + "rating/" + userId + "/" + activityId
          }`,
          type === "provider" || type === "activities" || !type == "course"
            ? { rating }
            : rating
        );
        dispatch({
          type: RESPONSE,
          payload: data,
        });

        if (type && getUrlSegment()[0] === "dimensions") {
          delete dim[tab?.value];
          dispatch(getDimensionData(childId, tab, dim));
        }

        if (modlessonId) {
          dispatch(getLesson(userId, modlessonId));
        }

        dispatch(getStartEnrollCourses(userId));
      } catch (error) {
        dispatch(responseFailure(error));
      }
    };

export const deleteActivity =
  (userId, courseId, activityId, selectedId, tab, dim, area) =>
    async (dispatch) => {
      try {
        const instance = getAxios();
        const { data } = await instance.delete(
          `${API_PATHS.COURSE_API}${userId}/${courseId}/${activityId}`
        );
        dispatch({ type: RESPONSE, payload: data });
        updateDimNode(tab, dim);
        dispatch(getDimensionData(selectedId, tab, dim));
      } catch (error) {
        dispatch(responseFailure(error));
      }
    };

export const delActivityDetail =
  (userId, activityId, activityDetailId) => async (dispatch) => {
    try {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.COURSE_API}activityDetails/${userId}/${activityId}/${activityDetailId}`
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getMetaData(activityId));
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getActivityRating = (activityId) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(
      `${API_PATHS.COURSE_API + "averageratings/" + activityId}`
    );
    dispatch({
      type: ACTIVITY_RATING,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addProviderDetail = (formData, id) => async (dispatch) => {
  try {
    if (formData && id) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.ABOUTAPI}/${id}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getProviderCourse = (userId) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(
      `${API_PATHS.COURSE_API + "provider/" + userId}`
    );
    dispatch({
      type: GET_COURSE,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getSkills = (userId, levelId, keyWord) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.COURSE_API + "skills/" + userId + "/" + levelId}`,
        { ...(keyWord && { search: keyWord }) }
      );
      dispatch({
        type: GET_SKILLS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addUserSkill = (formData, userId, skillId) => async (dispatch) => {
  try {
    if (userId && skillId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.SKILL_API}${userId}/${skillId}`,
        formData
      );
      // dispatch({
      //   type: ADD_SKILLS,
      //   payload: data,
      // });
      dispatch({
        type: RESPONSE,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteUserSkill = (userId, skillId) => async (dispatch) => {
  try {
    if (userId && skillId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.SKILL_API}${userId}/${skillId}`
      );
      // dispatch({ type: RESPONSE_OK, payload: data });
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
      // dispatch(getInterestByID(userId));
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getPopularTitle = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.TITLE_API}`);
    dispatch({
      type: GET_POPULAR_TITLES,
      payload: data,
    });
    // dispatch(getAllUsersDetail());
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addUserTitle = (formData, userId, titleId) => async (dispatch) => {
  try {
    if (userId && titleId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.TITLE_API}/${userId}/${titleId}`
      );
      // dispatch({
      //   type: ADD_TITLE,
      //   payload: data,
      // });
      dispatch({
        type: RESPONSE,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const deleteUserTitle = (userId, titleId) => async (dispatch) => {
  try {
    if (userId && titleId) {
      const instance = getAxios();
      const { data } = await instance.delete(
        `${API_PATHS.TITLE_API}/${userId}/${titleId}`
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const uploadProviderVideo = (videoData, userId) => async (dispatch) => {
  try {
    if (videoData && userId) {
      const instance = getMultipartAxios();
      const formData = new FormData();
      formData.append("file", videoData);
      const { data } = await instance.post(
        `${API_PATHS.UPDATE_PROFILE_PICTURE_API + "/" + "videos"}/${userId}`,
        formData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getCurriculam =
  (userId, courseId, userType) => async (dispatch) => {
    try {
      if (userId && courseId && userType !== "PROVIDER") {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.COURSE_API}curriculum/${userId}/${courseId}`
        );

        dispatch({
          type: GET_CURRICULAM,
          payload: data,
        });
      } else if (courseId && userType === "PROVIDER") {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.COURSE_API}curator/curriculum/${courseId}/${userId}`
        );

        dispatch({
          type: GET_CURRICULAM,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_CURRICULAM,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const needHelpLesson =
  (userId, moduleId, lessonId, needHelp, courseId) => async (dispatch) => {
    try {
      if (userId && moduleId && lessonId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.COURSE_API}needHelpLesson/${userId}/${moduleId}/${lessonId}`,
          {
            needHelp: needHelp,
          }
        );

        dispatch({ type: RESPONSE_OK, payload: data });
        dispatch(getCurriculam(userId, courseId));
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const completeLesson =
  (userId, moduleId, lessonId, needHelp, courseId) => async (dispatch) => {
    try {
      if (userId && moduleId && lessonId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.COURSE_API}completedLesson/${userId}/${moduleId}/${lessonId}`,
          {
            isCompleted: needHelp,
          }
        );
        dispatch({ type: RESPONSE_OK, payload: data });
        dispatch(getCurriculam(userId, courseId));
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getCourseRating = (userId, courseId) => async (dispatch) => {
  try {
    if (userId && courseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}rating/${userId}/${courseId}`
      );
      dispatch({
        type: COURATINGS,
        payload: data,
      });
    } else {
      dispatch({
        type: COURATINGS,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getProviderRating = (userId, courseId) => async (dispatch) => {
  try {
    if (userId && courseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}provider/rating/${userId}/${courseId}`
      );
      dispatch({
        type: PROVIDERRATINGS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/********Get Countries*************** */
export const getCountries = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_COUNTRIES_API}`);
    dispatch({
      type: GET_COUNTRIES,
      payload: data,
    });
  } catch (error) { }
};
/********Get State*************** */
export const getState = (id) => async (dispatch) => {
  try {
    if (id) {
      // const instance = getAxios();
      const { data } = await axios.get(`${API_PATHS.GET_STATE_API + "/" + id}`);
      dispatch({
        type: GET_STATE,
        payload: data,
      });
    }
  } catch (error) {
    console.log("Store Error", error);
  }
};

export const enrollLearner = (userId, courseId) => async (dispatch) => {
  try {
    if (userId && courseId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.COURSE_API}add/${userId}/${courseId}`
      );
      dispatch({
        type: ENROLL_RESPONSE,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const socialLogin = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.SOCIAL_LOGIN}`,
        formData
      );
      localStorage.setItem("access_token", data?.jwt + "##" + data?.id);
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    }
  } catch (error) {
    localStorage.removeItem("access_token");
    dispatch(loginResponseFailure(error));
  }
};

export const learnerEnrolled = (userId, formData) => async (dispatch) => {
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.COURSE_API}learner/isEnrolled/${userId}`,
        formData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
      dispatch(getAllUsersDetail());
      dispatch(getCourses(userId));
      dispatch(getDimensionData(userId));
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getProgress = (userId, dimName) => async (dispatch) => {
  try {
    if (userId && dimName) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}progress/chart/${userId}/${dimName}`
      );
      dispatch({
        type: GET_PROGRESS_CHART,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_PROGRESS_CHART,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const interestCategories = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(
      `${API_PATHS.GET_INTEREST_API}/categories`
    );
    dispatch({
      type: GET_INTEREST_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const interestByCategoryId = (categoryId) => async (dispatch) => {
  try {
    if (categoryId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_INTEREST_API}/categories/${categoryId}`
      );
      dispatch({
        type: GET_INTEREST_CATEGORY_BY_ID,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const interestByLevelId = (levelId) => async (dispatch) => {
  try {
    if (levelId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.INTEREST_BY_LEVEL_ID}${levelId}`
      );
      dispatch({
        type: GET_INTEREST_LEVEL_BY_ID,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getAllIndustries = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(`${API_PATHS.GET_ALL_INDUSTRIES_API}`);
    dispatch({
      type: GET_ALL_INDUSTRIES,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const searchByCharacter = (value) => async (dispatch) => {
  try {
    if (value) {
      const instance = getAxios();
      let keyword = value;
      const { data } = await instance.get(
        `${API_PATHS.GET_TITLE_BYKEYWORD_API + "?name=" + keyword}`
      );

      dispatch({
        type: GET_TITLES_BYCHARACTER,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getLesson =
  (userId, modLessId, userType) => async (dispatch, newstate) => {
    try {
      if (
        (userId && modLessId && userType !== "PROVIDER") ||
        !newstate()?.collections?.getLessonResources
      ) {
        if (userId && modLessId) {
          const instance = getAxios();
          const { data } = await instance.get(
            `${API_PATHS.COURSE_API}lesson/resources/${userId}/${modLessId}`
          );
          dispatch({
            type: GET_LESSON,
            payload: data,
          });
        }
      } else if (userId && modLessId && userType === "PROVIDER") {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.COURSE_API}curator/lesson/resources/${modLessId}/${userId}`
        );
        dispatch({
          type: GET_LESSON,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_LESSON,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const resourcesData = (userId, courseId) => async (dispatch) => {
  try {
    if (userId && courseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}resources/${userId}/${courseId}`
      );
      dispatch({
        type: GET_RESOURCESDATA,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const turnNotification = (flag) => async (dispatch) => {
  dispatch({ type: TURN_NOTIFICATION, payload: flag });
};

export const addContent = (profileImage) => async (dispatch) => {
  try {
    const instance = getPubMultipartAxios();
    const formData = new FormData();
    formData.append("file", profileImage);
    const { data } = await instance.post(API_PATHS.ADD_CONTENT, formData);

    dispatch({
      type: RESPONSE,
      payload: data,
    });
  } catch (error) {
    console.log("Store Error", error);
  }
};

export const addContent1 = (profileImage) => async (dispatch) => {
  try {
    const instance = getPubMultipartAxios();
    const formData = new FormData();
    formData.append("file", profileImage);
    const { data } = await instance.post(
      API_BASE_PATH + "/courses/upload/resource",
      formData
    );

    dispatch({
      type: "RESPONSE1",
      payload: data,
    });
  } catch (error) {
    console.log("Store Error", error);
  }
};

export const getSocialActivityDetail =
  (learnerId, courseId, activityId, dimName) => async (dispatch) => {
    try {
      // if (dimName == "Social") {
      //   dispatch({
      //     type: GET_SOCIAL_ACTIVITY_DATA,
      //     //	payload: data,
      //     payload: SocialCourseDetail,
      //   });
      // } else if (dimName == "Emotional") {
      //   dispatch({
      //     type: GET_SOCIAL_ACTIVITY_DATA,
      //     //	payload: data,
      //     payload: EmotionalCourseDetail,
      //   });
      // }
      //  /4c0c5cd5-de04-4025-9013-a8fda83f78a4/${courseId}
      if ((learnerId, courseId, activityId)) {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.COURSE_API}activity/content/${learnerId}/${activityId}`
        );

        dispatch({
          type: GET_SOCIAL_ACTIVITY_DATA,
          payload: data,
          //	payload: SocialCourseDetail,
        });
      } else {
        dispatch({
          type: GET_SOCIAL_ACTIVITY_DATA,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const shuffleArea =
  (userId, obj, selectedDim, dimension) => async (dispatch) => {
    try {
      if (userId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.SHUFFLE_AREA}${userId}/${selectedDim?.key}`,
          obj
        );
        dispatch({
          type: RESPONSE,
          payload: data,
        });
        delete dimension[selectedDim?.value];
        dispatch(getDimensionData(userId, selectedDim, dimension));
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getProviderCourses = (learnerId, CourseId) => async (dispatch) => {
  try {
    if (learnerId && CourseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}all/lesson/courses/${learnerId}/${CourseId}`
      );
      dispatch({
        type: GET_PROVIDER_COURSES,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const enrollCourse =
  (userId, selectedDim, areaId, courseId, dimension, type) =>
    async (dispatch) => {
      try {
        if (userId && selectedDim && areaId && courseId) {
          const instance = getAxios();
          const { data } = await instance.post(
            //  `${API_PATHS.ENROLL_COURSE}${userId}/${selectedDim?.key}/${areaId}/${courseId}/${type}`
            `${API_PATHS.ENROLL_COURSE}${userId}/${areaId}/${courseId}/${type}/false`
          );
          if (type && getUrlSegment()[0] === "home") {
            dispatch(getDashboard(userId));
          }
          dispatch({
            type: RESPONSE,
            payload: data,
          });

          dispatch(GetRibbon(userId));
          // if (dimension[selectedDim?.value]) {
          //   console.log("step 11", dimension, selectedDim);
          //   delete dimension[selectedDim?.value];
          //   dispatch(getDimensionData(userId, selectedDim, dimension));
          // }
        }
        if (getUrlSegment()[0] === "home") {
          dispatch(getDashboard(userId));
        }
      } catch (error) {
        dispatch(responseFailure(error));
      }
    };

export const SocialEnroll =
  (userId, dimId, skillId, courseId, dimension) => async (dispatch) => {
    try {
      if (userId && dimId && skillId && courseId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.COURSE_API}enroll/skill/course/${userId}/${dimId?.key}/${skillId}/${courseId}`
        );

        dispatch({
          type: RESPONSE,
          payload: data,
        });
        delete dimension[dimId?.value];
        dispatch(getDimensionData(userId, dimId, dimension));
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const ResourceRating =
  (userId, resourceId, rating, dim, tab, modlessonId) => async (dispatch) => {
    try {
      if (userId && resourceId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.COURSE_API}resource/rating/${userId}/${resourceId}`,
          { rating }
        );

        // dispatch({
        //   type: RESPONSE,
        //   payload: { success: true, message: "Ratings Added" },
        // });

        dispatch({ type: RESPONSE, payload: data });
        delete dim[tab?.value];
        dispatch(getDimensionData(userId, tab, dim));
        dispatch(getLesson(userId, modlessonId));
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getResourceRating = (userId, resourceId) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(
      `${API_PATHS.COURSE_API}resource/rating/${userId}/${resourceId}`
    );
    dispatch({
      type: RESOURCES_RATINGS,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const QuizOption =
  (
    userId,
    surveyId,
    areaId,
    courseId,
    activityId,
    formData,
    moduleId,
    dim,
    tab
  ) =>
    async (dispatch) => {
      try {
        if (userId && surveyId && courseId && activityId && formData) {
          const instance = getAxios();
          const { data } = await instance.post(
            `${API_PATHS.COURSE_API}learner/survey/${userId}/${surveyId}/${areaId}/${courseId}/${activityId}`,
            formData
          );

          dispatch({
            type: QUIZ_RESPONSE,
            payload: data,
          });
          dispatch(getLesson(userId, moduleId));
          delete dim[tab?.value];
          dispatch(getDimensionData(userId, tab, dim));

          dispatch(getProgress(userId, tab?.key));

          dispatch(GetRibbon(userId));
        }
      } catch (error) {
        dispatch({ type: RESPONSE_ERROR_DATA, payload: error });
        dispatch(responseFailure(error));
      }
    };

export const NextScene =
  (learnerId, activityId, courseId, skillId, sceneId, isSkill) =>
    async (dispatch) => {
      try {
        if (learnerId && activityId && courseId && skillId && sceneId) {
          const instance = getAxios();
          const { data } = await instance.post(
            `${API_PATHS.COURSE_API}activity/scene/${learnerId}/${activityId}/${courseId}/${skillId}/${sceneId}/${isSkill}`
          );

          dispatch({
            type: NEXT_SCENE_RESPONSE,
            payload: data,
          });
        } else {
          dispatch({
            type: NEXT_SCENE_RESPONSE,
            payload: undefined,
          });
        }
      } catch (error) {
        dispatch(responseFailure(error));
      }
    };
//  /courses/scene / { learnerId } / { surveyId } / { courseId } / {skillId} / { activityId }
export const Knowladgecheck =
  (
    learnerId,
    surveyId,
    courseId,
    activityId,
    skillId,
    isCorrectAttemptBody,
    isSkill
  ) =>
    async (dispatch) => {
      try {
        if (
          learnerId &&
          surveyId &&
          courseId &&
          activityId &&
          skillId &&
          isCorrectAttemptBody
        ) {
          const instance = getAxios();
          console.log("isCorrectAttemptBody in APIS = ", isCorrectAttemptBody);
          const { data } = await instance.post(
            `${API_PATHS.COURSE_API}scene/${learnerId}/${surveyId}/${courseId}/${skillId}/${activityId}/${isSkill}`,
            isCorrectAttemptBody
          );
          dispatch({
            type: KNOWLADGE_CHECK,
            payload: data,
          });
        } else {
          dispatch({
            type: KNOWLADGE_CHECK,
            payload: undefined,
          });
        }
      } catch (error) {
        dispatch(responseFailure(error));
      }
    };

export const getUserByUsername = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getUnauthedAxios();
      const { data } = await instance.post(
        `${API_PATHS.GET_USER_BY_USERNAME_API}`,
        formData
      );

      dispatch({
        type: GET_USER_NAME_RESPONSE,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_USER_NAME_RESPONSE,
        dispatch: "",
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getverifyUser = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getUnauthedAxios();
      const { data } = await instance.post(
        `${API_PATHS.GET_VERIFY_USER_API}`,
        formData
      );

      dispatch({
        type: GET_VERIFY_USER_RESPONSE,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_VERIFY_USER_RESPONSE,
        dispatch: "",
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const courseEnrollment =
  (userId, dimId, skillId, courseId, dimension, dimName, flag, isSupport) =>
    async (dispatch) => {
      try {
        let dimensionId = typeof dimId === "object" ? dimId?.key : dimId;
        let newSkillId = typeof skillId === "object" ? skillId?.id : skillId;
        if (userId && skillId && courseId) {
          const instance = getAxios();
          if (["Social", "Emotional", "Mindfulness"].includes(dimName)) {
            const { data } = await instance.post(
              `${API_PATHS.COURSE_API}enroll/skill/course/${userId}/${newSkillId}/${courseId}/${flag}/${isSupport}`
            );
            dispatch({
              type: COURSEENROLL,
              payload: data,
            });
          } else {
            const { data } = await instance.post(
              `${API_PATHS.COURSE_API}enroll/provider/course/${userId}/${dimensionId}/${newSkillId}/${courseId}/${flag}/${isSupport}`
            );
            dispatch({
              type: COURSEENROLL,
              payload: data,
            });
          }

          dispatch(GetRibbon(userId));
          if (dimId?.value && getUrlSegment()[0] === "dimensions") {
            delete dimension[dimId?.value];
            dispatch(getDimensionData(userId, dimId, dimension));
          }
        } else {
          dispatch({
            type: COURSEENROLL,
            payload: undefined,
          });
        }
      } catch (error) {
        dispatch(responseFailure(error));
      }
    };

export const GetRibbon = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.UPDATE_BASIC_DETAIL_API}/ribbon/${userId}`
      );
      dispatch({
        type: GET_RIBBON,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getSubscriberFormData = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getUnauthedAxios();
      const { data } = await instance.post(
        `${API_PATHS.SUBSCRIBER_API}`,
        formData
      );
      dispatch({ type: SUBSCRIBDATA, payload: data });
    }
    // } else {
    //   dispatch({ type: SUBSCRIBDATA, payload: undefined });
    // }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getHolistic = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}holistic/${userId}`
      );
      dispatch({
        type: GET_HOLISTIC,
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

export const selectedPlan = (formData) => async (dispatch) => {
  try {
    if (formData) {
      let object = {
        leanerId: formData?.userId,
        name: formData?.stripeObj?.billing_details?.name,
        paymentId: formData?.stripeObj?.id,
        line1: formData?.stripeObj?.billing_details?.address?.line1,
        line2: formData?.stripeObj?.billing_details?.address?.line2,
        city: formData?.stripeObj?.billing_details?.address?.city,
        state: formData?.stripeObj?.billing_details?.address?.state,
        // country: formData?.stripeObj?.billing_details?.address?.country,
        country: "USA",
        postal_code: formData?.stripeObj?.billing_details?.address?.postal_code,
        priceId: formData?.planData?.stripePriceId,
        planType: formData?.planData?.planType,
        stripe_promocode:
          formData?.stripePromocode && formData?.stripePromocode,
        promocode_id: formData?.promocode_id && formData?.promocode_id,
      };

      const instance = getAxios();
      const { data } = await instance.post(`${API_PATHS.STRIPE_API}`, object);
      dispatch({ type: SELECTED_PLAN, payload: data });
    } else {
      dispatch({ type: SELECTED_PLAN, payload: undefined });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: PAYMENT_FAILURE, payload: "paymentFailure" });
  }
};

// export const sendCVV = (obj, userId) => async (dispatch) => {
//   const instance = getAxios();

//   const { data } = await instance.post(
//     `https://vickyknowsapi-dev.link/api/v1/stripe/checkcvc/${userId}`,
//     obj
//   );
//   dispatch({ type: "SELECTED_CVV", payload: data });
// };
export const upgradePlan = (formData, userId) => async (dispatch) => {
  try {
    if (formData && userId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.STRIPE_UPGRADES + userId}`,
        formData
      );

      dispatch({ type: SELECTED_PLAN, payload: data });
    }
  } catch (error) {
    dispatch({ type: PAYMENT_FAILURE, payload: "paymentFailure" });
  }
};
export const stripePlans = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(API_PATHS.STRIPE_PLANS);
    dispatch({ type: PLANS, payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getStartEnrollCourses = (userId, obj) => async (dispatch) => {
  try {
    let ENV;
    if (window.location.hostname === "uat.d3q8d8fs329b3i.amplifyapp.com") {
      ENV = "UAT";
    } else if (window.location.hostname === SITEURLNAME.urlName) {
      ENV = "PROD";
    } else {
      ENV = "DEV";
    }
    const instance = getAxios();
    let params = {};
    if (!obj) {
      params = {
        popularCourse: true,
        envName: ENV,
      };
    }
    let skillArray = [];
    if (obj && obj.length > 0) {
      obj.map((vl) => {
        vl.skillIds.map((v2) => {
          if (v2?.id) {
            skillArray.push(v2.id);
          }
        });
      });
    }
    let isPopularCourse = true;
    if (obj && obj?.type === "Search") {
      isPopularCourse = false;
    }

    if (skillArray.length > 0) {
      isPopularCourse = false;
    }
    if (obj) {
      params = {
        popularCourse:
          obj?.type === "Search"
            ? false
            : skillArray.length === 0
              ? true
              : false,
        envName: ENV,
        skillIds: skillArray.length > 0 ? skillArray : undefined,
        tags: obj && obj?.type === "Search" ? obj.filter : undefined,
      };
    }
    const { data } = await instance.post(
      `${API_PATHS.COURSE_API}start/enrolling/${userId}`,
      params
    );

    dispatch({
      type: GET_START_ENROLL_COURSES,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

///users/newsletter/unsubscribe/{email}
export const getUnsubscribed = (email) => async (dispatch) => {
  try {
    const instance = getUnauthedAxios();
    const { data } = await instance.post(`${API_PATHS.UNSUBSCRIBE_NL + email}`);
    dispatch({
      type: RESPONSE,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

// /courses/curator/{curatorId}
export const getCuratorCourse = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_API}curator/${userId}`
      );
      dispatch({
        type: GET_CURATOR_COURSE,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getVerifyToken = (token) => async (dispatch) => {
  try {
    if (token) {
      const instance = getUnauthedAxios();
      const { data } = await instance.get(`${API_PATHS.VERIFY_PILOT}${token}`);

      dispatch({
        type: VERIFY_PILOT,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: VERIFY_PILOT_ERR,
      payload: error,
    });
  }
};

export const modifyToken = (token) => async (dispatch) => {
  try {
    if (token) {
      const instance = getAxios();
      const { data } = await instance.post(`${API_PATHS.MODIFY_TOKEN}${token}`);

      dispatch({
        type: MODIFY_TOKEN_RESPONSE,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getMultiQuiz = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_INTELLIGENCE_QUES}/${userId}`
      );
      dispatch({
        type: GET_MULTIQUIZ_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_MULTIQUIZ_DATA,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const userAttemptedMultiSurvey =
  (userId, formData) => async (dispatch) => {
    try {
      if (userId && formData) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.GET_INTELLIGENCE_QUES}/${userId}`,
          formData
        );
        dispatch({
          type: USER_ATTEMPTED_SURVEY,
          payload: data,
        });
        // dispatch(getMultiQuiz(userId))
        dispatch(getAllUsersDetail());
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getEmpathyQuiz = (userId, surveyname) => async (dispatch) => {
  try {
    if (userId && surveyname) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_EMPATHY_API}${userId}/${surveyname}`
      );
      dispatch({
        type: GET_EMPATHYQUIZ_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_EMPATHYQUIZ_DATA,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const postAttemptedEmpathyQuiz =
  (userId, isProvider, formData) => async (dispatch) => {
    try {
      if (!isProvider && userId && formData) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.GET_EMPATHY_API}${userId}/${isProvider}`,
          formData
        );

        dispatch({
          type: USER_EMPATHY_QUIZ,
          payload: data,
        });
        dispatch(getAllUsersDetail());
      } else if (isProvider) {
        dispatch({
          type: USER_EMPATHY_QUIZ,
          payload: "ProviderEmpathyResult",
        });
      } else {
        dispatch({
          type: USER_EMPATHY_QUIZ,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

// /courses/activity / scene / { learnerId } / { activityId } / { courseId } / { sceneId }
export const updatekcstate =
  (learnerId, activityId, sceneId, questionId) => async (dispatch) => {
    try {
      if (learnerId && activityId && sceneId && questionId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.COURSE_API}activity/kc/state/${learnerId}/${activityId}/${sceneId}/${questionId}`
        );
        dispatch({
          type: KC_STATE_RESPONSES,
          payload: data,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getRandomCourse = (userId) => async (dispatch, getState) => {
  try {
    // if (!localStorage.getItem("randomCor")) {
    if (
      localStorage.getItem("access_token") &&
      userId
      // &&
      // !localStorage.getItem("randomCor")
    ) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.PICK_COURSE_API + userId}`
      );
      dispatch({
        type: RANDOM_COURSE,
        payload: data,
      });
    } else {
      dispatch({
        type: RANDOM_COURSE,
        payload: undefined,
      });
    }
    // }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const shareCertificatePostAPI = (formData) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.post(
      `${API_PATHS.SHARE_CERTIFICATE}`,
      formData
    );
    dispatch({ type: CERT_IMAGE_RESPONSE, payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const EnrollCoursesJson = (userId) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(
      `${API_PATHS.COURSE_API}start/enrolling/${userId}`
    );
    dispatch({
      type: ENROLL_COURSES_JSON,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const courseJourney = (courseId) => async (dispatch) => {
  try {
    if (courseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_JOURNEY}${courseId}`
      );
      dispatch({ type: COURSE_JOURNEY, payload: data });
    } else {
      dispatch({ type: COURSE_JOURNEY, payload: undefined });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getSettingData = (userId, levelId) => async (dispatch) => {
  try {
    if (userId && levelId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.SETTING_DATA}${userId}/${levelId}`
      );
      dispatch({ type: SETTING_DATA, payload: data });
    } else {
      dispatch({ type: SETTING_DATA, payload: undefined });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addReward = (learnerId, formData) => async (dispatch) => {
  try {
    if (learnerId && formData) {
      const instance = getMultipartAxios();
      const { data } = await instance.post(
        `${API_PATHS.SETTING_DATA}reward/${learnerId}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const addsetting = (learnerId, formData, type) => async (dispatch) => {
  try {
    if (learnerId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.COURSE_API}addsetting/${learnerId}/${type}`,
        formData
      );
      dispatch({ type: GET_RESPONSE, payload: data });
      dispatch(getDashboard());
      // dispatch(GetRibbon(learnerId));
    } else {
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getRewardData =
  (learnerId, courseActivityId, isCourse) => async (dispatch) => {
    try {
      if (learnerId && courseActivityId) {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.REWARD_DATA}${learnerId}/${courseActivityId}/${isCourse}`
        );

        dispatch({ type: REWARD_DATA, payload: data });
      } else {
        dispatch({ type: REWARD_DATA, payload: undefined });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

// /users/password/verification/{userId}----------------------------
export const settingVerify =
  (userId, formData) => async (dispatch, newdata) => {
    try {
      if (userId && formData) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.SETTING_PASSWORD_VERIFY}/${userId}`,
          formData
        );

        dispatch({ type: SETTING_VERIFY, payload: data });
      } else {
        dispatch({ type: SETTING_VERIFY, payload: undefined });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getSeriesQuiz = (userId, activityId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_ACTIVITY}series/quiz/${userId}/${activityId}`
      );
      dispatch({
        type: GET_SERIES_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_SERIES_DATA,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const learnerAttemptQuiz =
  (userId, surveyId, formData, activityId) => async (dispatch) => {
    try {
      if (userId && surveyId && formData) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.COURSE_ACTIVITY}provider/quiz/${userId}/${surveyId}`,
          formData
        );
        dispatch({
          type: LEARNER_ATTEMPT_QUIZ,
          payload: data,
        });
        dispatch(getSeriesQuiz(userId, activityId));
      } else {
        dispatch({
          type: LEARNER_ATTEMPT_QUIZ,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getJournyData = (userId, levelId) => async (dispatch) => {
  try {
    if (userId && levelId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.JOURNY_API}area/skill/${userId}/${levelId}`
      );
      dispatch({
        type: GET_JOURNY_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_JOURNY_DATA,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getJournyCourseData = (userId, skillIds) => async (dispatch) => {
  try {
    if (userId && skillIds) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.JOURNY_API}course/journey/${userId}`,
        skillIds
      );
      dispatch({
        type: GET_JOURNY_COURSE_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_JOURNY_COURSE_DATA,
        payload: "",
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getJournyEnrollData = (userId, levelId) => async (dispatch) => {
  try {
    if (userId && levelId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.JOURNY_API}course/cujourney/${userId}/${levelId}`
      );
      dispatch({
        type: GET_JOURNY_ENROLL_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_JOURNY_ENROLL_DATA,
        payload: "",
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const enrollCourseJourny =
  (userId, formData, dimId, dimension, kcCheck) => async (dispatch) => {
    console.log("form : ", formData);
    //	return;
    try {
      if (userId && formData) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.JOURNY_API}course/addujourney/${userId}/${kcCheck}`,
          formData
        );
        dispatch({
          type: RESPONSE,
          payload: data,
        });
        dispatch(GetRibbon(userId));
        if (
          getUrlSegment()[2] === userId &&
          getUrlSegment()[0] === "dimensions"
        ) {
          delete dimension[dimId?.value];
          dispatch(getDimensionData(userId, dimId, dimension));
        }
      } else {
        dispatch({
          type: RESPONSE,
          payload: "",
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const getJourny = (result, userId) => async (dispatch) => {
  try {
    if (result) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.DIM_JOURNY_API}journey/${userId}`
      );

      dispatch({
        type: GET_JOURNY,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_JOURNY,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getJournyCourses = (userId, uJourneyId) => async (dispatch) => {
  try {
    if (userId && uJourneyId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.DIM_JOURNY_COURSES_API}courses/${userId}/${uJourneyId}`
      );

      dispatch({
        type: GET_JOURNY_COURSES,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_JOURNY_COURSES,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const enrollFromCourseJourney =
  (userId, journeyId, formData, kcCheck) => async (dispatch) => {
    try {
      if (userId && journeyId && formData) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.JOURNY_API}course/vujourneyenroll/${userId}/${journeyId}/${kcCheck}`,
          formData
        );

        dispatch({
          type: RESPONSE,
          payload: data,
        });
      } else {
        console.log("Error : one of the argument is null");
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const subMitUserGrade = (userId, levelId) => async (dispatch) => {
  try {
    if (userId && levelId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.USERS_GRADE}/${userId}/${levelId}`
      );
      dispatch({
        type: USER_GRADE_RESP,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    } else {
      dispatch({
        type: USER_GRADE_RESP,
        payload: "",
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const postAbandoned = (learnerId, formData) => async (dispatch) => {
  try {
    if (learnerId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.ADD_ABANDONED_API}/${learnerId}`,
        formData
      );
      dispatch({ type: POST_RESPONSE, payload: data });
    } else {
      dispatch({ type: POST_RESPONSE, payload: undefined });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const postShareCourses = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.COURSE_API}request`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const sendRewardEmail = (formData) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.post(
      `${API_PATHS.REWARD_SENDMAIL}/${formData.userCourseId}/${formData.userActivityId}/${formData.learnerId}/${formData.courseId}/${formData.isCourse}/${formData.isActivity}`
    );
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getBillingData = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.BILLING_GET_API}${userId}`
      );

      dispatch({
        type: GET_BILLING_DATA,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const cancelSubscriptionPlan = (stripeSubId) => async (dispatch) => {
  try {
    if (stripeSubId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.STRIPE_CANCEL}/subscription/${stripeSubId}`
      );

      dispatch({
        type: RESPONSE,
        payload: data,
      });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const downGradePlan = (formData, userId) => async (dispatch) => {
  try {
    if (formData && userId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.STRIPE_DOWNGRADES + userId}`,
        formData
      );
      dispatch({ type: RESPONSE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch({ type: PAYMENT_FAILURE, payload: "paymentFailure" });
  }
};

export const getIntelligences =
  (userId, evalCourseSurveyId) => async (dispatch) => {
    try {
      if (userId && evalCourseSurveyId) {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.INTELLIGENCES_API}${userId}/${evalCourseSurveyId}`
        );

        dispatch({
          type: GET_INTELLIGENCES_DATA,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_INTELLIGENCES_DATA,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const renewSubscription =
  (formData, subscriptionId) => async (dispatch) => {
    try {
      if (formData && subscriptionId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.STRIPE_RENEW_API + subscriptionId}`,
          formData
        );
        dispatch({ type: SELECTED_PLAN, payload: data });
        dispatch(getAllUsersDetail());
      }
    } catch (error) {
      dispatch({ type: PAYMENT_FAILURE, payload: "paymentFailure" });
    }
  };

export const paymentUpdateInfo = (userId, formData) => async (dispatch) => {
  try {
    if (formData && userId) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.STRIPE_PAYMENT_UPDATE + userId}`,
        formData
      );
      dispatch({ type: PAYMENT_UPDATE, payload: data });
      dispatch(getAllUsersDetail());
    }
  } catch (error) {
    dispatch({ type: PAYMENT_FAILURE, payload: error });
  }
};

export const postIntelligences =
  (userId, surveyId, optionIdArr) => async (dispatch) => {
    try {
      if (userId && surveyId && optionIdArr) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.POST_INTELLIGENCES_API}${userId}/${surveyId}`,
          optionIdArr
        );

        dispatch({
          type: POST_INTELLIGENCES_DATA,
          payload: data,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

// /courses/summary/{learnerId}/{courseId}
export const getCourseSummary = (userId, courseId) => async (dispatch) => {
  try {
    if (userId && courseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_COURSE_SUMMARY_API}${userId}/${courseId}`
      );

      dispatch({
        type: GET_COURSE_SUMMARY_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_COURSE_SUMMARY_DATA,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const popularCourses = (userId) => async (dispatch) => {
  try {
    // let ENV;
    // if (window.location.hostname === "uat.d3q8d8fs329b3i.amplifyapp.com") {
    //   ENV = "UAT";
    // } else if (window.location.hostname === SITEURLNAME.urlName) {
    //   ENV = "PROD";
    // } else {
    //   ENV = "DEV";
    // }

    // const instance = getAxios();
    // const { data } = await instance.get(
    //   `${API_PATHS.GET_POPULAR_COURSE_API}${ENV}`
    // );

    let ENV;
    if (window.location.hostname === "uat.d3q8d8fs329b3i.amplifyapp.com") {
      ENV = "UAT";
    } else if (window.location.hostname === SITEURLNAME.urlName) {
      ENV = "PROD";
    } else {
      ENV = "DEV";
    }
    if (userId) {
      const instance = getAxios();

      const { data } = await instance.post(
        `${API_PATHS.COURSE_API}start/enrolling/${userId}`,
        {
          popularCourse: true,
          envName: ENV,
        }
      );

      dispatch({
        type: POPULAR_COURSES,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
export const sendCollabrationEmail =
  (userId, collabEmailData) => async (dispatch) => {
    try {
      if (userId) {
        const instance = getAxios();
        const { data } = await instance.post(
          `${API_PATHS.POST_SENDCOLLABEMAIL_API}sendparentcollabemail/${userId}`,
          collabEmailData
        );

        dispatch({
          type: POST_SENDCOLLABEMAIL_DATA,
          payload: data,
        });
      } else {
        dispatch({
          type: POST_SENDCOLLABEMAIL_DATA,
          payload: undefined,
        });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

// export const getPopularCourses = () => async (dispatch) => {
//   try {
//     let ENV;
//     if (window.location.hostname === "uat.d3q8d8fs329b3i.amplifyapp.com") {
//       ENV = "UAT";
//     } else if (window.location.hostname === "www.bloomster.com") {
//       ENV = "PROD";
//     } else {
//       ENV = "DEV";
//     }
//     if (ENV) {
//       const instance = getAxios();
//       const { data } = await instance.get(
//         `${API_PATHS.GET_POPULARCOURSES_API}${ENV}`
//       );

//       dispatch({
//         type: POPULARCOURSES_DATA,
//         payload: data,
//       });
//     } else {
//       dispatch({
//         type: POPULARCOURSES_DATA,
//         payload: undefined,
//       });
//     }
//   } catch (error) {
//     dispatch(responseFailure(error));
//   }
// };

export const fetchCourseTags = (keyword) => async (dispatch) => {
  try {
    if (keyword) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_ALL_COURSES_TAG_API + keyword}`
      );

      dispatch({
        type: TAGCOURSES_DATA,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const dimensionSkill = (userId) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(
      `${API_PATHS.GET_DIM_SKILLS}/${userId}`
    );

    dispatch({
      type: DIM_SKILL_OBJ,
      payload: data,
    });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const fetchDimMasterData = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.GET_DIM_MASTERDATA + userId}`
      );

      dispatch({
        type: DIM_MASTERDATA,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
export const userDelete = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.POST_DELETE_USER}`,
        formData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const applyDiscount = (formData) => async (dispatch) => {
  try {
    if (formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.STRIPE_PROMOCODE}`,
        formData
      );
      dispatch({
        type: APPLY_DISCOUNT,
        payload: data,
      });
    } else {
      dispatch({
        type: APPLY_DISCOUNT,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: APPLY_DISCOUNT_ERR,
      payload: error?.response?.data.message,
    });
  }
};

export const getCourseReviewRating = (courseId) => async (dispatch) => {
  try {
    if (courseId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.COURSE_RATING_API}/courserating/${courseId}`
      );
      dispatch({
        type: COUREVIEWRATINGS,
        payload: data,
      });
    } else {
      dispatch({
        type: COUREVIEWRATINGS,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getLearnerPlanWeekWise = (obj) => async (dispatch) => {
  try {
    if (obj) {
      const instance = getAxios();
      const { data } = await instance.post(`${API_PATHS.LEARNER_PLAN}`, obj);
      dispatch({
        type: LEARNER_PLAN,
        payload: data,
      });
    } else {
      dispatch({
        type: LEARNER_PLAN,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const createLearnerPlan = (planData) => async (dispatch) => {
  try {
    if (planData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.LEARNER_PLAN}`,
        planData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
    } else {
      dispatch({
        type: RESPONSE,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const updateLearnerPlan = (userId, planData) => async (dispatch) => {
  console.log("updateLearnerPlan : ", userId, planData);
  try {
    if ((userId, planData)) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.LEARNER_UPDATE_PLAN}/${userId}`,
        planData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
    } else {
      dispatch({
        type: RESPONSE,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getDimensionPlanData = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.DIMNSION_PLAN}/${userId}`
      );
      dispatch({
        type: GET_DIMNSION_PLAN,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_DIMNSION_PLAN,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getDimensionUpdatePlan = (planData) => async (dispatch) => {
  try {
    if (planData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.DIMNSION_UPDATE_PLAN}`,
        planData
      );
      dispatch({
        type: RESPONSE,
        payload: data,
      });
    } else {
      dispatch({
        type: RESPONSE,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getLearnerPlanTags = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.LEARNER_PLAN_TAGS}/${userId}`
      );
      dispatch({
        type: LEARNER_PLAN_TAGS,
        payload: data,
      });
    } else {
      dispatch({
        type: LEARNER_PLAN_TAGS,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getUpdateLearnerPlan = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const instance = getAxios();
      const { data } = await instance.get(
        `${API_PATHS.LEARNER_UPDATE_PLAN}/${userId}`
      );
      dispatch({
        type: CREATE_NEW_PLAN,
        payload: data,
      });
    } else {
      dispatch({
        type: CREATE_NEW_PLAN,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const getDimSkillCourses = (userId, planData) => async (dispatch) => {
  try {
    if ((userId, planData)) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.DIM_SKILL_COURSES}/${userId}`,
        planData
      );
      dispatch({
        type: DIM_SKILL_COURSES,
        payload: data,
      });
    } else {
      dispatch({
        type: DIM_SKILL_COURSES,
        payload: undefined,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
//verify user name API 13 May 2024
export const varificationEmail = (userName) => async (dispatch) => {
  try {
    if (userName) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.VARIFICATION_EMAIL}/${userName}`
      );
      dispatch({ type: VERIFY_EMAIL_RESPONSE, payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/* Growth Survey 16 May 2024 */

export const getGrowthSurveyData =
  (courseId, typeData, userId) => async (dispatch) => {
    try {
      if (courseId && userId) {
        const instance = getAxios();
        const { data } = await instance.get(
          `${API_PATHS.GROWTH_SURVEY}/${courseId}/${typeData}/${userId}`
        );
        dispatch({ type: GROWTH_SURVEY_DATA, payload: data });
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

export const postGrowthSurveyData = (userId, formData) => async (dispatch) => {
  try {
    if (userId && formData) {
      const instance = getAxios();
      const { data } = await instance.post(
        `${API_PATHS.GROWTH_SURVEY_POST}/${userId}`,
        formData
      );
      dispatch({
        type: GROWTH_ATTEMPTED_SURVEY,
        payload: data,
      });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
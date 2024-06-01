/** @format */

import {
  FEEDBACKS,
  HELPINFO,
  PILOTUSER,
  INVITEFRIEND,
} from "../actions/FeedbackTypes";

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  notification: true,
};

const feedback = (state = initialState, action) => {
  switch (action.type) {
    case FEEDBACKS:
      return {
        ...state,
        feedbackDataResponse: action.payload,
        isAuth: true,
      };
    case PILOTUSER:
      return {
        ...state,
        pilotUserDataResponse: action.payload,
        isAuth: true,
      };

    case INVITEFRIEND:
      return {
        ...state,
        inviteFriendDataResponse: action.payload,
        isAuth: true,
      };
    case HELPINFO:
      return {
        ...state,
        helpFormUserData: action.payload,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};

export default feedback;

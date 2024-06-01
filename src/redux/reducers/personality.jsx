/** @format */

import {
  PERSONALITYLIST,
  PERSONALITYQUIZ,
  SELECTEDPERSONALITYQUIZDATA,
  RESULTPERSONALITYTYPE,
  BEGUNQUIZ,
} from "../actions/PersonalityTypes";

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  notification: true,
};

const personality = (state = initialState, action) => {
  switch (action.type) {
    case PERSONALITYLIST:
      return {
        ...state,
        personalitiesResponse: action.payload,
        isAuth: true,
      };
    case PERSONALITYQUIZ:
      return {
        ...state,
        personalityQuizData: action.payload,
        isAuth: true,
      };
    case SELECTEDPERSONALITYQUIZDATA:
      return {
        ...state,
        personalityQuizSelectedData: action.payload,
        // isAuth: true,
      };
    case RESULTPERSONALITYTYPE:
      return {
        ...state,
        resultPersonalityType: action.payload,
        isAuth: true,
      };
    case BEGUNQUIZ:
      return {
        ...state,
        begunQuizType: action.payload,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};

export default personality;

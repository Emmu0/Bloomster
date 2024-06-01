/** @format */

import {
  FRIENDLIST,
  GETFRIENDS,
  MESSAGESRESPONSE,
  SELECTEDFRIENDMSGS,
  GETGROUPS,
  GROUPMSGRESPONSE,
  SELECTEDGRPMSGS,
} from "../actions/MsgTypes";

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  notification: true,
};

const messaging = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDLIST:
      return {
        ...state,
        loggedInChatbox: action.payload,
        isAuth: true,
      };
    case MESSAGESRESPONSE:
      return {
        ...state,
        messagesResponse: action.payload,
        isAuth: true,
      };
    case SELECTEDFRIENDMSGS:
      return {
        ...state,
        selectedFriendMsgsResponse: action.payload,
        isAuth: true,
      };
    case GETFRIENDS:
      return {
        ...state,
        getFriends: action.payload,
        isAuth: true,
      };
    case GETGROUPS:
      return {
        ...state,
        groupsResponse: action.payload,
        isAuth: true,
      };
    case GROUPMSGRESPONSE:
      return {
        ...state,
        groupsMsg: action.payload,
        isAuth: true,
      };
    case SELECTEDGRPMSGS:
      return {
        ...state,
        seletedGrpMsg: action.payload,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};

export default messaging;

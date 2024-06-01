/** @format */

//import axios from "axios";

import {
  FRIENDLIST,
  GETFRIENDS,
  MESSAGESRESPONSE,
  SELECTEDFRIENDMSGS,
  GETGROUPS,
  GROUPMSGRESPONSE,
  ADDFRIEND,
  SELECTEDGRPMSGS,
  ADDROOMPARTICIPANT,
} from "./MsgTypes";
import { API_PATHS } from "../../utils";
import { responseFailure } from ".";
import { getAxios } from "../../utils/helper";

/********************************************************* */
export const addResponse = (loggedInUser) => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(API_PATHS.MSG_FRIENDS);

    dispatch({ type: FRIENDLIST, payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const messagesResponseData = (friendId) => async (dispatch) => {
  try {
    if (friendId) {
      const instance = getAxios();
      const { data } = await instance.get(
        API_PATHS.MSG_CONVERSATION + friendId
      );
      dispatch({ type: MESSAGESRESPONSE, payload: data });
    } else {
      dispatch({ type: MESSAGESRESPONSE, payload: "" });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const frndSearchResponse = (searchKey) => async (dispatch) => {
  try {
    const instance = getAxios();
    if (searchKey) {
      const { data } = await instance.get(
        API_PATHS.MSG_FIND_FRIENDS + searchKey
      );

      dispatch({ type: GETFRIENDS, payload: data });
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

/********************************************************* */
export const addFriend = (loggedInUser, friendDetails) => async (dispatch) => {
  try {
    const instance = getAxios();

    const { data } = await instance.post(
      API_PATHS.MSG_ADD_FRIENDS + loggedInUser.id + "/" + friendDetails.id
    );

    dispatch({ type: ADDFRIEND, payload: data });
    if (data.statusCode === 200) {
      dispatch(addResponse(loggedInUser));
    }
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const groupsResponseData = () => async (dispatch) => {
  try {
    const instance = getAxios();
    const { data } = await instance.get(API_PATHS.MSG_ROOMS);

    dispatch({ type: GETGROUPS, payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};
/********************************************************* */
export const groupsMsgResponse =
  (loggedInUser, currentGrpId) => async (dispatch) => {
    try {
      const groupsMsgResponseData = {
        recordId: null,
        success: true,
        objectName: "Groups",
        records: [
          {
            id: "111",
            owner: "Adam Markram",
            name: "College Group",
            imageUrl: "https://xyz",
            createdDate: "",
            messages: [
              {
                friendlyDate: "Today",
                msgs: [
                  {
                    id: "4332323",
                    content: "How are you?",
                    createdDate: "12/23/2022 13:05:35",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                  {
                    id: "4343",
                    content: "I am fine what about you?",
                    date: "12/23/2022 13:05:45",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "1212",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                  {
                    id: "433232",
                    content: "I am good, What's your plan for weekend?",
                    date: "12/23/2022 13:05:50",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                  {
                    id: "43431",
                    content: "Nothing about College Group",
                    date: "12/23/2022 13:05:55",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "1212",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                ],
              },
              {
                friendlyDate: "Yesterday",
                msgs: [
                  {
                    id: "12331",
                    content: "Hello All",
                    date: "12/22/2022 13:05:11",
                    friendlyDate: "Yesterday",
                    messageTime: "13:05",
                    fromUser: {
                      id: "1212",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                  {
                    id: "5343",
                    content: "Hello Sara",
                    createdDate: "12/22/2022 13:05:15",
                    friendlyDate: "Yesterday",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                ],
              },
              {
                friendlyDate: "Feb 9, 2022",
                msgs: [
                  {
                    id: "12331",
                    content: "Hello All",
                    createdDate: "12/22/2022 13:05:11",
                    friendlyDate: "Feb 9, 2022",
                    messageTime: "13:05",
                    fromUser: {
                      id: "1212",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                  {
                    id: "5343",
                    content: "Hello Sara",
                    createdDate: "12/22/2022 13:05:15",
                    friendlyDate: "Feb 9, 2022",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                ],
              },
            ],
            lastMessage: {
              id: "23hsjdh824",
              content: "Ok Done",
              createdDate: "12/23/2022 10:09:12",
              friendlyDate: "Dec 23, 2022",
              messageTime: "10:09:12",
              fromUser: {
                id: "125",
                imageUrl: "https://xyz",
                name: "John Fernandes",
              },
            },
          },
        ],
        statusCode: 200,
        message: "",
        recordsCount: 1,
      };
      dispatch({ type: GROUPMSGRESPONSE, payload: groupsMsgResponseData });
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };
/********************************************************* */
export const selectedgrpMsgsResponse =
  (loggedInUser, currentGrpId) => async (dispatch) => {
    try {
      const selectedgrpMsgs = {
        recordId: null,
        success: true,
        objectName: "Groups",
        records: [
          {
            id: "6e8d3c67-b195-4115-9a70-780ba5a8f864",
            owner: "Adam Markram",
            name: "College Group",
            imageUrl: "https://xyz",
            createdDate: "",
            messages: [
              {
                friendlyDate: "Today",
                msgs: [
                  {
                    id: "4332323",
                    content: "How are you?",
                    createdDate: "12/23/2022 13:05:35",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                  {
                    id: "4343",
                    content: "I am fine what about you?",
                    date: "12/23/2022 13:05:45",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "cbff578f-2df0-46b6-9568-a055dc888290",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                  {
                    id: "433232",
                    content: "I am good, What's your plan for weekend?",
                    date: "12/23/2022 13:05:50",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                  {
                    id: "43431",
                    content: "Nothing about Social Community Group",
                    date: "12/23/2022 13:05:55",
                    friendlyDate: "Today",
                    messageTime: "13:05",
                    fromUser: {
                      id: "cbff578f-2df0-46b6-9568-a055dc888290",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                ],
              },
              {
                friendlyDate: "Yesterday",
                msgs: [
                  {
                    id: "12331",
                    content: "Hello All",
                    date: "12/22/2022 13:05:11",
                    friendlyDate: "Yesterday",
                    messageTime: "13:05",
                    fromUser: {
                      id: "cbff578f-2df0-46b6-9568-a055dc888290",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                  {
                    id: "5343",
                    content: "Hello Sara",
                    createdDate: "12/22/2022 13:05:15",
                    friendlyDate: "Yesterday",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                ],
              },
              {
                friendlyDate: "Feb 9, 2022",
                msgs: [
                  {
                    id: "12331",
                    content: "Hello All",
                    createdDate: "12/22/2022 13:05:11",
                    friendlyDate: "Feb 9, 2022",
                    messageTime: "13:05",
                    fromUser: {
                      id: "cbff578f-2df0-46b6-9568-a055dc888290",
                      imageUrl: "https://xyz",
                      name: "Sara Williams",
                    },
                  },
                  {
                    id: "5343",
                    content: "Hello Sara",
                    createdDate: "12/22/2022 13:05:15",
                    friendlyDate: "Feb 9, 2022",
                    messageTime: "13:05",
                    fromUser: {
                      id: "729738",
                      imageUrl: "https://xyz",
                      name: "Adam Markram",
                    },
                  },
                ],
              },
            ],
            lastMessage: {
              id: "23hsjdh824",
              content: "Ok Done",
              createdDate: "12/23/2022 10:09:12",
              friendlyDate: "Dec 23, 2022",
              messageTime: "10:09:12",
              fromUser: {
                id: "125",
                imageUrl: "https://xyz",
                name: "John Fernandes",
              },
            },
          },
        ],
        statusCode: 200,
        message: "",
        recordsCount: 1,
      };
      dispatch({ type: SELECTEDGRPMSGS, payload: selectedgrpMsgs });
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

/********************************************************* */
export const sendMessagePostAPI = (msg) => async (dispatch) => {
  try {
    const instance = getAxios();

    const { data } = await instance.post(
      API_PATHS.MSG_SEND + msg.friendid,
      msg
    );

    dispatch({ type: SELECTEDFRIENDMSGS, payload: data });
  } catch (error) {
    dispatch(responseFailure(error));
  }
};

export const createdGroupPostAPI =
  (createGroupWithParticipantIds) => async (dispatch) => {
    try {
      const instance = getAxios();
      const { data } = await instance.post(
        API_PATHS.MSG_ADD_Rooms_AND_PARTICIPANTS,
        createGroupWithParticipantIds
      );

      dispatch({ type: ADDROOMPARTICIPANT, payload: data });
      if (data.statusCode === 200) {
        dispatch(groupsResponseData());
      }
    } catch (error) {
      dispatch(responseFailure(error));
    }
  };

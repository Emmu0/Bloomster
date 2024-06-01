import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MsgHeader from "./MsgHeader";
import MsgBody from "./MsgBody";
import MsgFooter from "./MsgFooter";
import MsgFriendRequest from "./MsgFriendRequest";
import { MSG } from "../../utils/Messages";
import { ShimmerCategoryItem } from "../../utils/Packages";
import {
  messagesResponseData,
  groupsMsgResponse,
  groupsResponseData,
  selectedgrpMsgsResponse,
  sendMessagePostAPI,
} from "../../redux/actions/MsgPanelAPIs";

const MessagingLeftPanel = ({
  currentFrndId,
  currentGrpId,
  friendRecId,
  friendIsActive,
  toggleState,
}) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState();
  const { groupMsgResponse } = useSelector((state) => state.messaging);
  const [friendsRecords, setFriendsRecords] = useState();
  const [isCalled, setIsCalled] = useState(false);
  const { loggedInUser } = useSelector((state) => state.collections);

  const {
    loggedInChatbox,
    messagesResponse,
    groupsMsg,
    groupsResponse,
    seletedGrpMsg,
  } = useSelector((state) => state.messaging);

  useEffect(() => {
    // 👇️ don't run on initial render
    if (
      friendRecId !== undefined &&
      friendRecId !== "" &&
      friendRecId !== null
    ) {
      msgFiltering();
    }
  }, [friendRecId]);

  useEffect(() => {
    // 👇️ don't run on initial render
    if (
      currentFrndId !== undefined &&
      currentFrndId !== "" &&
      currentFrndId !== null
    ) {
      msgFiltering();
    }
  }, [currentFrndId]);

  useEffect(() => {
    // 👇️ don't run on initial render
    if (
      currentGrpId !== undefined &&
      currentGrpId !== "" &&
      currentGrpId !== null
    ) {
      grpMsgFiltering();
    }
  }, [currentGrpId]);

  useEffect(() => {
    if (!isCalled) {
      dispatch(messagesResponseData(friendRecId));
      setIsCalled(true);
    }
  }, [friendRecId]);

  useEffect(() => {
    if (messagesResponse && toggleState === 1) {
      setMessages(messagesResponse);
    }
  }, [messagesResponse]);

  const msgFiltering = () => {
    dispatch(messagesResponseData(friendRecId));
  };
  const grpMsgFiltering = () => {
    if (currentGrpId === "111" && toggleState === 2) {
      dispatch(groupsMsgResponse(loggedInUser, currentGrpId));
      dispatch(groupsResponseData(loggedInUser, currentGrpId));
    } else if (
      currentGrpId === "6e8d3c67-b195-4115-9a70-780ba5a8f864" &&
      toggleState === 2
    ) {
      dispatch(groupsMsgResponse(loggedInUser, currentGrpId));
      dispatch(selectedgrpMsgsResponse(loggedInUser, currentGrpId));
    }
  };
  useEffect(() => {
    if (loggedInChatbox && toggleState === 1) {
      setFriendsRecords(loggedInChatbox);
    }
  }, [loggedInChatbox]);
  useEffect(() => {
    if (groupsMsg && toggleState === 2) {
      //setMessages("");
      setMessages(groupsMsg);
    }
  }, [groupsMsg]);

  useEffect(() => {
    if (seletedGrpMsg && toggleState === 2) {
      //setMessages("");
      setMessages(seletedGrpMsg);
    }
  }, [seletedGrpMsg]);

  useEffect(() => {
    if (groupsResponse && toggleState === 2) {
      setFriendsRecords(groupsResponse);
    }
  }, [groupsResponse]);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const sendMessage = (data) => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var today = new Date();
    var dayName = days[today.getDay()];
    var timeDate = today.getHours() + ":" + today.getMinutes("m:mm a");
    let updatedMessages = { ...messages };

    let fromUserRec;
    let toUserRec;
    if (
      updatedMessages?.records[0]?.messages.length > 0 &&
      updatedMessages?.records[0]?.messages[0].msgs.length > 0
    ) {
      fromUserRec =
        updatedMessages?.records[0]?.messages[0]?.msgs[0]?.toUser.id ===
        loggedInUser.id
          ? updatedMessages?.records[0]?.messages[0]?.msgs[0]?.toUser
          : updatedMessages?.records[0]?.messages[0]?.msgs[0]?.fromUser;
      toUserRec =
        updatedMessages?.records[0]?.messages[0]?.msgs[0]?.toUser.id !==
        loggedInUser.id
          ? updatedMessages?.records[0]?.messages[0]?.msgs[0]?.toUser
          : updatedMessages?.records[0]?.messages[0]?.msgs[0]?.fromUser;
    } else {
      fromUserRec = loggedInUser;
    }

    const newChatSendMessages = {
      id: randomNumberInRange(5, 1000000000000),
      content: data,
      createdDate: new Date().toLocaleString(),
      friendlyDate: dayName,
      messageTime: timeDate,
      fromUser: fromUserRec,
      toUser: toUserRec,
    };
    let msgsToday = updatedMessages.records[0].messages.find(
      (msg) => msg.friendlyDate.toLowerCase() === "today"
    );
    if (msgsToday) {
      msgsToday.msgs.push(newChatSendMessages);
    } else {
      updatedMessages.records[0].messages.unshift({
        friendlyDate: "Today",
        msgs: [newChatSendMessages],
      });
    }
    const postMessages = {
      friendid: friendRecId,
      content: data,
    };
    setMessages(updatedMessages);
    dispatch(sendMessagePostAPI(postMessages));
  };

  return (
    <div className="LeftbarPannel p-0" id="ChatBoard">
      <div className="chatingBoard">
        {friendsRecords ? (
          <MsgHeader
            data={friendsRecords.records}
            currentFrndId={currentFrndId}
            currentGrpId={currentGrpId}
            loggedInUser={loggedInUser}
          ></MsgHeader>
        ) : (
          MSG.RECNTFOUND
        )}

        {friendIsActive === false ? (
          <MsgFriendRequest></MsgFriendRequest>
        ) : messages !== undefined && messages !== null && messages.records ? (
          <MsgBody
            data={messages.records[0]}
            currentFrndId={currentFrndId}
            currentGrpId={currentGrpId}
            loggedInUser={loggedInUser}
          ></MsgBody>
        ) : (
          <ShimmerCategoryItem />
        )}
        <MsgFooter sendMessage={sendMessage} />
      </div>
    </div>
  );
};
export default MessagingLeftPanel;

import React, { useState } from "react";
import Home from "../Home";
import MsgRightPanel from "./MsgRightPanel";
import MsgLeftPanel from "./MsgLeftPanel";

const MsgPanel = () => {
  const [currentFrndId, setcurrentFrndId] = useState("");
  const [currentGrpId, setCurrentGrpId] = useState("");
  const [friendRecId, setFriendRecId] = useState("");
  const [currentfrndIsActive, setcurrentfrndIsActive] = useState("");
  const [toggleState, setToggleState] = useState(1);
  const currentTabState = (toggleState) => {
    setToggleState(toggleState);
  };
  const currentFriendId = (friendUserId, friendId, friendIsActive) => {
    setcurrentFrndId(friendUserId);
    setFriendRecId(friendId);

    setcurrentfrndIsActive(friendIsActive);
  };
  const selectGroupId = (grpMessageId) => {
    setCurrentGrpId(grpMessageId);
  };
  return (
    <Home>
      <div className="d-flex w-100 VCharboard">
        <MsgLeftPanel
          currentFrndId={currentFrndId}
          currentGrpId={currentGrpId}
          friendRecId={friendRecId}
          friendIsActive={currentfrndIsActive}
          toggleState={toggleState}
        />
        <MsgRightPanel
          currentFriendId={currentFriendId}
          selectGroupId={selectGroupId}
          currentTabState={currentTabState}
        />
      </div>
    </Home>
  );
};
export default MsgPanel;

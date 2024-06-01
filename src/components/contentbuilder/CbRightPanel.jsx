import React, { useState, useEffect } from "react";
import ContentUploaderMain from "./ContentUploaderMain";
const MsgRightPanel = ({ handleRightPanel }) => {
  return (
    <div className="RightbarPannel p-0">
      <div className="heading">
        <h2>Right Pannel</h2>
      </div>
      <div>
        <ContentUploaderMain handleRightPanel={handleRightPanel} />
      </div>
    </div>
  );
};
export default MsgRightPanel;

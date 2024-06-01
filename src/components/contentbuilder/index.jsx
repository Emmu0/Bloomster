import React from "react";
import CbLeftPanel from "./CbLeftPanel";
import CbRightPanel from "./CbRightPanel";
import Home from "../Home";
const ContentBuilder = () => {
  const handleLeftPanel = (data) => {};
  const handleRightPanel = (data) => {};
  const handleSave = () => {};
  return (
    <Home>
      <div className="d-flex w-100 VCharboard">
        <CbLeftPanel handleLeftPanel={handleLeftPanel} />
        <CbRightPanel />
      </div>
    </Home>
  );
};
export default ContentBuilder;

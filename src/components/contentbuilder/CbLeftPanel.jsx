import React from "react";
import ScreensUploader from "./ScreensUploader";

const ContentBuilderLeftPanel = ({handleLeftPanel}) => {
  
  return (
    <div className="LeftbarPannel p-0" id="ChatBoard">
      <div className="CourseCardWrapper">
        <div className="heading d-flex">
            <h2>Left Pannel</h2>
        </div>
        <div className="gridSection mt-2">
            <ScreensUploader handleLeftPanel={handleLeftPanel}/>
        </div>
        </div>
    </div>
  );
};
export default ContentBuilderLeftPanel;

import React from "react";
import LessonSidebar from "./LessonSidebar";
import PersonalitySidebar from "./PersonalitySidebar";
import SmartQuizRightSidebar from "./SmartQuizRightSidebar";
const LessonWeekSidebar = (props) => {
  return (
    <div
      className={
        props.tab === "Personalities"
          ? "RightbarPannel p-0 personalityrightpannel"
          : "RightbarPannel p-0 rightpannelSticky"
      }>
      {props.tab !== "Personalities" && props.tab !== "multiQuiz" && (
        <LessonSidebar data={props} />
      )}
      {props.tab === "Personalities" && (
        <>
          <PersonalitySidebar
            setIsBeginQuizShow={props.setIsBeginQuizShow}
            setShowRepeat={props.setShowRepeat}
            isShow={props.isShow}
            seriesId={props.seriesId}
          />
        </>
      )}
      {props.tab === "multiQuiz" && (
        <>
          <SmartQuizRightSidebar />
        </>
      )}

      {/* {props?.selectedTab == "Characters" && (
				<LessonSidebar chardesc={props?.chardesc} tab={props?.selectedTab} />
			)}
			{props?.selectedTab == "Series" && (
				<LessonSidebar application={props?.application} rptitle={props?.rptitle} tab={props?.selectedTab} />
			)} */}
      {/* {props?.selectedTab !== "Series" && (
        <LessonSidebar realApplication={props?.applicationData} />
      )} */}
      {/* {props?.selectedTab === "Series" && (
        <KnowledgeSidebar series={props?.data} sceneIndex={props?.sceneStep} />
      )} */}
    </div>
  );
};

export default LessonWeekSidebar;

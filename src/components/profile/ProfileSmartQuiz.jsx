import React from "react";
import SmartMultiQuiz from "./SmartMultiQuiz";
import Home from "../Home";
import SmartQuizRightSidebar from "../dimensions/course/social/SmartQuizRightSidebar";

const ProfileSmartQuiz = () => {
  return (
    <div>
      <Home>
        <div className="d-flex align-items-flex-start w-100">
          <div className="LeftbarPannel p-0">
            <SmartMultiQuiz />{" "}
          </div>
          <div className="RightbarPannel p-0 IntelligenceWisetex">
            <SmartQuizRightSidebar />
          </div>
        </div>
      </Home>
    </div>
  );
};

export default ProfileSmartQuiz;

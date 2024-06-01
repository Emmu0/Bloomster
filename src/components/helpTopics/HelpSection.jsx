import React from "react";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../utils";
import { getUrlSegment } from "../../utils/helper";

const HelpSection = () => {
  const history = useHistory();
  return (
    <div className="RightbarPannel p-0 rightpannelSticky">
      <div className="heading">
        <h2>Help Topics</h2>
      </div>
      <div className="imagePart w-100 text-left">
        <ul>
        <li
            className={getUrlSegment()[1] === "progressandscore" ? "active" : ""}
            onClick={() => {
              history.push(PATHS.PROGRESSSCORING);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>Progress and Scoring
          </li>
          <li
            className={getUrlSegment()[1] === "courses" ? "active" : ""}
            onClick={() => {
              history.push(PATHS.HELPCOURSE);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>Course Details & Enrollment
          </li>
       
          <li
            className={
              getUrlSegment()[1] === "userprofile-view" ? "active" : ""
            }
            onClick={() => {
              history.push(PATHS.HELPUSERPROFILE);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>Learner Pathway
          </li>
          <li
            className={getUrlSegment()[1] === "mycourseetting" ? "active" : ""}
            onClick={() => {
              history.push(PATHS.COURSESETTING);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>
            My & Course Settings
          </li>
          <li
            className={getUrlSegment()[1] === "dim-skill" ? "active" : ""}
            onClick={() => {
              history.push(PATHS.HELPDIMSKILL);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>
            My Dimensions
          </li>
          <li
            className={
              getUrlSegment()[1] === "holistic-progress-view" ? "active" : ""
            }
            onClick={() => {
              history.push(PATHS.HELPHOLISTICVIEW);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>
            Holistic Perspective
          </li>
          <li
            className={getUrlSegment()[1] === "billing" ? "active" : ""}
            onClick={() => {
              history.push(PATHS.HELPBILLING);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>
            Subscription
          </li>
          <li
            className={getUrlSegment()[1] === "query" ? "active" : ""}
            onClick={() => {
              history.push(PATHS.HELPQUERY);
            }}
          >
            <i className="fa-regular fa-circle-nodes mr-2"></i>
            Anything Else?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpSection;

import { React, useState } from "react";
import { PATHS } from "../../utils";
import { useParams, useHistory } from "react-router-dom";

const SocialList = ({ index, socialData, handlePopUp }) => {
  const param = useParams();
  const history = useHistory();

  const _redirectLesson = (activityId, type) => {
    history.push({
      pathname: PATHS.SOCIALCOURSE_STR + param.id + "/" + activityId,
      state: type,
    });
  };
  return (
    <>
      {socialData.name === "Week 1" ? (
        <li key={index} onClick={() => _redirectLesson(socialData?.id)}>
          <i className="fa-regular fa-file-import mr-2"></i>
          {socialData?.name}
        </li>
      ) : (
        <li key={index} onClick={() => handlePopUp()}>
          <i className="fa-regular fa-file-import mr-2"></i>
          {socialData?.name}
          {
            <span className="Activitymenubar">
              <i className="fa-sharp fa-solid fa-lock"></i>
            </span>
          }
        </li>
      )}
    </>
  );
};

export default SocialList;

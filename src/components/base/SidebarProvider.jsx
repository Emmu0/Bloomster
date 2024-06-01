import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../utils";
import * as image from "../../resources/images"

const SidebarParent = ({ activeTab }) => {
  const history = useHistory();
  const { loggedInUser } = useSelector((state) => state.collections);
  return (
    <>
      <li
        data-toggle="collapse"
        href="#Courses"
        key={Math.random()}
        aria-expanded={
          activeTab === "courses" &&
          localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
        }
        className={`ParentChildSidebar ${
          activeTab == "courses" ? "ActiveSidebr" : ""
        }`}
        onClick={() => {
          if (loggedInUser?.id) {
            history.push(PATHS.COURSE_STR + loggedInUser?.id);
          }
        }}
      >
        <div className="NsideBrDimWrap d-flex">
          <span className="flex">
          <img src={image.mortarboard_white} alt="" />
          </span>
          <span className="OpnNsidebartxt">Courses</span>
        </div>
      </li>
    </>
  );
};
export default SidebarParent;

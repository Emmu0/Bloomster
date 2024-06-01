import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";
import { useSelector } from "react-redux";

const HolisticGrowthFooter = ({ close, currentPage }) => {
  const history = useHistory();
  const { defaultChildData } = useSelector((state) => state.collections);
  const _goToPage = () => {
    close();
    history.push(PATHS.COURSEPAGE_STR + defaultChildData.id);
  };
  return (
    <div className="modal-footer dontshowagain">
      <div className="form-group BDsubmitbutton m-0 d-flex">
        <div className="buttonDistribotion justify-content-start">
          <div className="signupType">
            <label htmlFor="dontshow" className={`Selcheckbox ActiveQQst m-0`}>
              <span className="QQtitle">Don't Show Again</span>
              <input type="checkbox" id="dontshow" value="true"></input>
              <span className="checkmark"></span>
            </label>
          </div>
          {currentPage === 3 && (
            <button
              type="button"
              onClick={() => _goToPage()}
              className="btn-blue btn-login d-block mb-5 explore_course"
            >
              <i className="fa-sharp fa-regular fa-magnifying-glass-arrow-right mr-2"></i>
              Explore Courses
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HolisticGrowthFooter;

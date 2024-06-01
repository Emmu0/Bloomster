import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "../../utils/Packages";
import {
  showModal,
  resetEmailResponse,
  resetLoginResponse,
  setCourseJourneyId,
  resetMultiquizResponse,
} from "../../redux/actions";

import * as image from "../../resources/images";
import { PATHS } from "../../utils";
import { getSequnceSort } from "../../utils/helper";
import { SITENAME } from "../../utils/Messages";

const DimRedirectPopup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const {
    addLearner,
    loggedInUser,
    alluserdetails,
    getdimension,
    getSelectedCourseJourneyId,
  } = useSelector((state) => state.collections);

  let userData = "";
  if (addLearner?.recordId) {
    userData = addLearner?.recordId;
  } else if (loggedInUser?.children[0]?.id) {
    userData = loggedInUser?.children[0]?.id;
  } else if (loggedInUser?.role?.name === "LEARNER") {
    userData = loggedInUser?.id;
  }

  const hideShowBox = () => {
    dispatch(showModal());
    dispatch(resetLoginResponse());
    dispatch(resetEmailResponse());
  };

  const dimredirect = (userid) => {
    let previousState = alluserdetails?.records[0]?.uistate; //	localStorage.getItem("previousState");

    let isLearnerExists = false;
    let dimensions = getSequnceSort(getdimension?.records);

    if (previousState) {
      previousState = JSON.parse(previousState);

      let uistate = previousState?.uistate;
      for (let index = 0; index < uistate?.length; index++) {
        if (uistate[index]?.userid && uistate[index]?.userid === userid) {
          isLearnerExists = true;
          if (uistate[index]?.detail?.scene) {
            history.push(new URL(uistate[index]?.detail?.scene)?.pathname);
          } else if (uistate[index]?.page) {
            history.push(new URL(uistate[index]?.page)?.pathname);
          } else {
            history.push(
              PATHS.DIMENSION_STR + uistate[index]?.detail?.dimId + "/" + userid
            );
          }
          break;
        }
      }
      if (!isLearnerExists) {
        let obj = {
          userid: userid,
          detail: {
            dimension: dimensions[0]?.name,
            skill: "",
            course: "",
            scene: "",
            kc: "",
            dimId: dimensions[0]?.id,
          },
          page: "",
        };
        uistate.push(obj);
        localStorage.setItem("previousState", JSON.stringify(previousState));
        if (dimensions[0]?.id && userid) {
          history.push(PATHS.DIMENSION_STR + dimensions[0]?.id + "/" + userid);
        }
      }
    } else {
      if (dimensions[0]?.id && userid) {
        history.push(PATHS.DIMENSION_STR + dimensions[0]?.id + "/" + userid);
      }
    }
  };

  const _whereYouLeft = () => {
    hideShowBox();
    dimredirect(params?.id);
  };

  const viewEnrollCourse = () => {
    hideShowBox();
    history.push(
      PATHS.DIMENSION_STR +
        getSequnceSort(getdimension?.records)[0]?.id +
        "/" +
        params?.id
    );
  };

  const viewAvailableCourse = () => {
    dispatch(resetMultiquizResponse());
    hideShowBox();
    dispatch(setCourseJourneyId({ allCourse: true }));
  };
  return (
    <>
      <div className="AddChildPopup hoosrSubModlPopup AreyousurePopup whereyouleft">
        <div className="modal d-flex" id="schoolactivity50" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header p-0">
                <div className="heading w-100 border-0 p-0">
                  <div className="NuggetPopupTitle border-0 w-100 flex">
                    <div className=" d-flex align-items-center">
                      <img src={image.greenflag} alt="" className="mr-2" />
                      <h4>Welcome to {SITENAME.NAME} </h4>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={() => hideShowBox()}
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-body p-0">
                <div className="whereYouleftwtrap newwhrulft p-3 m-3">
                  <div className="wlCard m-0">
                    <h3
                      className="whleftbtn pointer"
                      onClick={() => _whereYouLeft()}
                    >
                      <img src={image.booknavigation} alt="" />
                      Pickup where you left off!
                    </h3>
                  </div>
                  <h2 className="h1 text-center m-minus-15 orbutton">
                    <span className="bg-white">or</span>
                  </h2>

                  <div className="AlltypeDimensionbtn ">
                    <div className="wlCard">
                      <h3
                        className="whleftbtn pointer"
                        onClick={() => viewEnrollCourse()}
                      >
                        <img src={image.mortarboard} alt="" />
                        View your enrolled courses
                      </h3>
                    </div>
                  </div>
                  <h2 className="h1 text-center m-minus-15 orbutton">
                    <span className="bg-white">or</span>
                  </h2>
                  <div className="AlltypeDimensionbtn ">
                    <div className="wlCard">
                      <h3
                        className="whleftbtn pointer"
                        onClick={() => viewAvailableCourse()}
                      >
                        <img src={image.Explorecourses} alt="" />
                        Explore most popular courses
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-group BDsubmitbutton m-0 d-flex">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 cancelbutton"
                      onClick={() => hideShowBox()}
                    >
                      <i className="fa-solid fa-xmark"></i> Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DimRedirectPopup;

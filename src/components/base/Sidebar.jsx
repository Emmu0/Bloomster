/** @format */

import React, { useEffect, useState, useRef, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import { useSelector, useDispatch } from "react-redux";
import { resetStripePlans, sidebarCollapse } from "../../redux/actions";
import { logoutAction } from "../../redux/actions/APIs";
import { useLocation, useHistory } from "react-router-dom";
import { getUrlSegment } from "../../utils/helper";
import { getDimensions } from "../../redux/actions/APIs";
import Feedback from "../feedback";
import { feedbackDataPostAPI } from "../../redux/actions/FeedbackAPIs";
import { showModal, resetMultiquizResponse } from "../../redux/actions";
import SidebarParent from "./SidebarParent";
import SidebarProvider from "./SidebarProvider";
import ReactTooltip from "react-tooltip";

const Sidebar = ({ dimredirect }) => {
  const path = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    sidebar,
    loggedInUser,
    getdimension,
    alluserdetails,
    modalData,
    defaultChildData,
  } = useSelector((state) => state.collections);

  const [collapse, setCollapse] = useState();
  const [random, setRandom] = useState(Math.random());

  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    dispatch(sidebarCollapse(sidebar));
  }, [sidebar]);

  const activeLink = () => {
    let res;
    if (
      getUrlSegment()[0] === "dimensions" ||
      getUrlSegment()[0] === "dimension"
    ) {
      res = "dimensions";
    }
    if (getUrlSegment()[0] === "messaging") {
      res = "messaging";
    }
    if (getUrlSegment()[0] === "network") {
      res = "network";
    }
    if (getUrlSegment()[0] === "contentbuilder") {
      res = "contentbuilder";
    }
    if (getUrlSegment()[0] === "feedback") {
      res = "feedback";
    }

    if (getUrlSegment()[0] === "courses") {
      res = "courses";
    }
    if (getUrlSegment()[0] === "journey") {
      res = "journey";
    }

    if (getUrlSegment()[0] === "home") {
      res = "home";
    }
    if (getUrlSegment()[0] === "help") {
      res = "help";
    }

    return res;
  };

  useEffect(() => {
    setActiveTab(activeLink());
  }, [getUrlSegment()[0]]);

  useEffect(() => {
    if (!getdimension) {
      dispatch(getDimensions());
    }
  }, []);
  useEffect(() => {
    if (!modalData) {
      setActiveTab(getUrlSegment()[0]);

      dispatch(showModal());
    }
  }, [modalData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setRandom(Math.random());
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const ref = useRef(null);

  let childId = defaultChildData?.id;
  if (!childId) {
    childId = loggedInUser && loggedInUser?.children[0]?.id;
  }

  const _dimensionRediret = (userId) => {
    dispatch(showModal());
    dispatch(resetMultiquizResponse());

    if (window.location?.search.includes("?learnerId=")) {
      let querySt = window.location?.search.toString().split("?learnerId=");
      dimredirect(querySt[1]);
    } else {
      dimredirect(childId);
    }

    // if (userId && userId?.children?.length > 0) {
    //   dimredirect(userId?.children[0]?.id);
    // } else {
    // dimredirect(path?.id);
    //   }
  };

  const [showPopup, setShowPopup] = useState(false);
  const openModal = () => {
    dispatch(showModal({ type: "feedback" }));

    dispatch(feedbackDataPostAPI());
    setShowPopup(true);
  };
  const closeModal = (isFalse) => {
    dispatch(showModal());
    setShowPopup(isFalse);
  };

  $(document).click(function (e) {
    if (!$(e.target).is(".panel-body")) {
      $(".NSsubMenu.collapse").collapse("hide");
    }
  });

  const handleCloseSKillPopup = (childOBj) => {
    // if (childOBj && childOBj.isJourney) {
    //   dispatch(showModal());
    //   history.push(PATHS.LEARNER_JOURNEY_STR + childOBj.id);
    // } else {
    //   dispatch(showModal({ type: "journeySkills", childId: childOBj?.id }));
    //   dispatch(getChildName(childOBj?.firstName));
    // }

    if (window.location?.search.includes("?learnerId=")) {
      let querySt = window.location?.search.toString().split("?learnerId=");
      let newChild = alluserdetails?.records[0].children.filter(
        (data) => data.id === querySt[1]
      );
      dispatch(showModal());
      //	history.push(PATHS.LEARNER_JOURNEY_STR + newChild[0].id);
      history.push(PATHS.LEARNER_PATHWAY_STR + newChild[0].id);
      /*
          if (newChild[0]?.isJourney) {
            dispatch(showModal());
            history.push(PATHS.LEARNER_JOURNEY_STR + newChild[0].id);
          } else {
            dispatch(showModal({ type: "journeySkills", childId: newChild[0].id }));
            dispatch(getChildName(newChild[0]?.firstName));
          }
          */
    } else {
      dispatch(showModal());
      //	history.push(PATHS.LEARNER_JOURNEY_STR + childId);
      history.push(PATHS.LEARNER_PATHWAY_STR + childId);
      /*
          if (defaultChildData.isJourney) {
            dispatch(showModal());
            history.push(PATHS.LEARNER_JOURNEY_STR + defaultChildData?.id);
          } else {
            dispatch(showModal({ type: "journeySkills", childId: defaultChildData.id }));
            dispatch(getChildName(defaultChildData?.firstName));
          }
          */
    }
  };

  const handlePopUp = () => {
    dispatch(resetStripePlans());
    dispatch(showModal({ type: "Subscription" }));
  };

  return useMemo(
    () => (
      <div
        ref={ref}
        id="accordion"
        className={`NSidebar ${localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
          ? "ActiveNSidebar"
          : "nonActiveSideBar"
          }`}
      >
        <ul className="w-100">
          {localStorage.getItem("sidebarCollapse" + loggedInUser?.id) ? (
            <li className="top-section">
              <div className="flex  NsidebarLogondback">
                <span
                  key={Math.random()}
                  onClick={() => history.push(PATHS.HOME)}
                >
                  <img src={image.Sidebarlogo} alt="" />
                </span>
                <span
                  className="leftClosebar"
                  key={Math.random()}
                  onClick={() => {
                    localStorage.removeItem(
                      "sidebarCollapse" + loggedInUser?.id
                    );
                    dispatch(sidebarCollapse(false));
                    setCollapse(false);
                  }}
                >
                  <i className={`fa fa-arrow-left`}></i>
                </span>
              </div>

              <div className="Nsidebarbars">
                <span className="Nsidebarbars" key={Math.random()}></span>
              </div>
            </li>
          ) : (
            <li
              className="top-section"
              onClick={() => {
                localStorage.setItem(
                  "sidebarCollapse" + loggedInUser?.id,
                  true
                );
                dispatch(sidebarCollapse(true));
                setCollapse(true);
              }}
            >
              <div className="Nsidebarbars">
                <span className="Nsidebarbars" key={Math.random()}>
                  <i className="fa-sharp fa-solid fa-bars"></i>
                </span>
              </div>
            </li>
          )}

          {loggedInUser && loggedInUser?.role?.name !== "PROVIDER" && (
            <SidebarParent
              activeTab={activeTab}
              handleCloseSKillPopup={handleCloseSKillPopup}
              _dimensionRediret={_dimensionRediret}
            />
          )}
          {loggedInUser && loggedInUser?.role?.name === "PROVIDER" && (
            <SidebarProvider activeTab={activeTab} />
          )}
        </ul>
        {loggedInUser && (
          <ul className="w-100 helpAndlogout">
            {loggedInUser?.role?.name !== "PROVIDER" && (
              <>
                <li
                  className={` ${getUrlSegment()[0] == "feedback" ? "ActiveSidebr" : ""
                    }`}
                  onClick={() => handlePopUp()}
                >
                  <span className="d-flex">
                    <i class="fa-regular fa-circle-arrow-up"></i>
                    {/* <img src={image.white_subscription}  alt="" /> */}
                    <span
                      className={`OpnNsidebartxt ${getUrlSegment()[0] == "feedback" ? "ActiveSidebr" : ""
                        }`}
                    >
                      {" "}
                      Subscribe Now
                    </span>
                  </span>
                </li>
                <li
                  className={` ${getUrlSegment()[0] == "feedback" ? "ActiveSidebr" : ""
                    }`}
                  onClick={openModal}
                >
                  <span className="d-flex">
                    <i className="fa-regular fa-pen-to-square "></i>
                    <span
                      className={`OpnNsidebartxt ${getUrlSegment()[0] == "feedback" ? "ActiveSidebr" : ""
                        }`}
                    >
                      {" "}
                      Feedback
                    </span>
                  </span>
                </li>
                <li className={` ${activeTab == "help" ? "ActiveSidebr" : ""}`}>
                  <span>
                    <NavLink
                      className={"text-white d-flex"}
                      to={PATHS.HELP}
                      onClick={() => {
                        dispatch(showModal());
                      }}
                    >
                      <i className="fa-regular fa-question "></i>
                      <span className={"OpnNsidebartxt"}> Help</span>
                    </NavLink>
                  </span>
                </li>
              </>
            )}
            <li onClick={() => dispatch(logoutAction(alluserdetails))}>
              <span className="flex">
                {!localStorage.getItem(
                  "sidebarCollapse" + loggedInUser?.id
                ) && (
                    <ReactTooltip id="#sign">
                      <p>{"Sign out"}</p>
                    </ReactTooltip>
                  )}
                <span data-for="#sign" data-event-off="" data-tip>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
                <span className="OpnNsidebartxt">Sign out</span>
              </span>
            </li>
          </ul>
        )}
        {modalData?.type === "feedback" && <Feedback closeModal={closeModal} />}
      </div>
    ),
    [
      activeTab,
      sidebar,
      loggedInUser,
      getdimension,
      alluserdetails,
      modalData,
      defaultChildData,
    ]
  );
};

export default Sidebar;

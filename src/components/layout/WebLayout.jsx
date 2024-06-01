/** @format */

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import { Topbar as PrivateTopbar } from "../base";
import Footer from "./Footer";
import SignInPG from "../base/SigninPG";
import { SignUp } from "../base";
import {
  isLoading,
  resetResponse,
  resetError,
  showModal,
  NlRedirect,
  coursePageNode,
  homePageNode,
  pathwayPageNode,
  dimPageNode,
  subscriptionPageNode,
  cnamePageNode,
} from "../../redux/actions";
import ForgotPassword from "../base/ForgotPasswordNew";
import { PATHS, TOAST_TIMER } from "../../utils";
import { getUrlSegment } from "../../utils/helper";
import { toast } from "react-toastify";
import Error from "../notifications/Error";
import PilotUser from "../base/PilotUser";
import PilotUserThanks from "../base/PilotUserThanks";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import jQuery from "jquery";
import { useState } from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
import Vicky from "../controls/Vicky";

const WebLayout = ({ children, className }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const {
    error,
    signinresponse,
    modalData,
    verifyErr,
    verifyPilotData,
    alluserdetails,
  } = useSelector((state) => state.collections);

  const [shimmerObj, setShimmerObj] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (getUrlSegment()[0]) {
      window.scrollTo(0, 0);
    }
  }, [getUrlSegment()[0]]);

  useEffect(() => {
    if (history?.location?.state?.NlPath) {
      dispatch(NlRedirect(history?.location?.state?.NlPath));
    }
  }, [history?.location?.state?.NlPath]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (verifyErr?.message) {
      setShimmerObj(false);
      history.push(PATHS.VERIFYERROR);
    }
  }, [verifyErr]);

  useEffect(() => {
    if (error) {
      toast.error(<Error error={error} />, {
        position: "top-center",
        autoClose: TOAST_TIMER,
      });

      setTimeout(() => {
        dispatch(resetError());
        dispatch(isLoading(false));
      }, 5000);
    }
  }, [error]);

  // useEffect(() => {
  //   if (signinresponse && signinresponse?.success) {
  //     dispatch(resetResponse());
  //     history.push(PATHS.HOME);
  //     window.scrollTo(0, 0);
  //   }
  // }, [signinresponse]);

  if (["SignUp", "forceSignUp"].includes(modalData?.type)) {
    jQuery("body").css("overflow", "hidden");
    //document.getElementsByTagName('body').css("overflow", "hidden")
  } else {
    jQuery("body").css("overflow", "auto");
  }

  useEffect(() => {
    if (window.location?.search.includes("?nl=true")) {
      let querySt = window.location?.search.split("?nl=true");
      dispatch(showModal({ type: "SignIn" }));
    }
  }, []);

  useEffect(() => {
    if (window.location?.search.includes("?nlr=true")) {
      dispatch(showModal({ type: "SignUp" }));
    }
  }, []);

  useEffect(() => {
    if (window.location?.search.includes("?signin")) {
      history.push(PATHS.USERSIGNIN);
      // dispatch(showModal({ type: "SignIn" }));
    }
  }, []);

  useEffect(() => {
    if (window.location?.search.includes("?signup")) {
      history.push(PATHS.USERSIGNUP);
      // dispatch(showModal({ type: "SignUp" }));
    }
  }, []);

  // useEffect(() => {
  // 	if (window.location?.search.includes("?course")) {
  // 		const queryParameters = new URLSearchParams(location.search);
  // 		let urlQuery = queryParameters.get("course");
  // 		dispatch(coursePageNode(urlQuery));
  // 		dispatch(showModal({ type: "SignIn", isCourse: true }));
  // 	} else if (window.location?.search.includes("?home")) {
  // 		const queryParameters = new URLSearchParams(location.search);
  // 		let urlQuery = "home";
  // 		console.log("urlQuery home: ", urlQuery);
  // 		dispatch(homePageNode(urlQuery));
  // 		dispatch(showModal({ type: "SignIn" }));
  // 	}
  // }, []);

  useEffect(() => {
    if (window.location?.search.includes("?course")) {
      const queryParameters = new URLSearchParams(location.search);
      let urlQuery = queryParameters.get("course");
      urlQuery = urlQuery ? urlQuery.split("/") : urlQuery;
      dispatch(coursePageNode({ urlQuery: urlQuery }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?cname")) {
      const queryParameters = new URLSearchParams(location.search);
      let urlQuery = queryParameters.get("cname");
      urlQuery = urlQuery ? urlQuery.replaceAll("_", " ") : urlQuery;

      dispatch(cnamePageNode({ urlQuery: urlQuery }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?home")) {
      const queryParameters = new URLSearchParams(location.search);
      let childId = queryParameters.get("home");
      dispatch(homePageNode({ childId: childId }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?pathway")) {
      const queryParameters = new URLSearchParams(location.search);
      let childId = queryParameters.get("pathway");
      dispatch(pathwayPageNode({ childId: childId }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?dimension")) {
      const queryParameters = new URLSearchParams(location.search);
      let urlQuery = queryParameters.get("dimension");
      let dimPath = urlQuery?.split("/");
      dispatch(dimPageNode({ dimPath: dimPath }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?dim")) {
      const queryParameters = new URLSearchParams(location.search);
      let dimensionName = queryParameters.get("dim")
        ? queryParameters.get("dim")
        : "social";
      dispatch(dimPageNode({ dimensionName: dimensionName }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?settings")) {
      dispatch(cnamePageNode({ isSetting: true }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?subscription")) {
      const queryParameters = new URLSearchParams(location.search);
      let childId = queryParameters.get("subscription");
      dispatch(subscriptionPageNode({ isPage: true }));
      history.push(PATHS.USERSIGNIN);
    } else if (window.location?.search.includes("?feedback")) {
      dispatch(cnamePageNode({ isFeedback: true }));
      history.push(PATHS.USERSIGNIN);
    }
  }, []);

  useEffect(() => {
    if (verifyPilotData?.records) {
      setShimmerObj(false);
    }
  }, [verifyPilotData?.records, verifyPilotData?.records[0]?.state]);

  useEffect(() => {
    if (!window.location?.search.includes("?pilotverification=")) {
      setShimmerObj(false);
    }
  }, []);

  const url = history?.location?.pathname;
  const pathSegments = url.split("/");

  return (
    <>
      {shimmerObj ? (
        <ShimmerContentBlock />
      ) : (
        <div className="container-fluid landing-page">
          <div className={`LargeScrenResponsive  outerPagesHeader `}>
            {localStorage.getItem("access_token") &&
            !(
              history?.location?.pathname === "/privacypolicy" ||
              history?.location?.pathname === "/useragreement" ||
              pathSegments[1] === "verify-user"
            ) ? (
              <div className="privateTopBar">
                <PrivateTopbar />
              </div>
            ) : (
              !(
                history?.location?.pathname === "/privacypolicy" ||
                history?.location?.pathname === "/useragreement" ||
                pathSegments[1] === "verify-user"
              ) && <Topbar />
            )}

            {/* <ToastContainer /> */}
          </div>
          {children}
          {modalData?.type === "SignIn" && <SignInPG />}

          {process.env.REACT_APP_PILOT_LAUNCH == "false" &&
            modalData?.type === "SignUp" && <SignUp />}

          {process.env.REACT_APP_PILOT_LAUNCH == "true" &&
            modalData?.type === "forceSignUp" && <SignUp />}

          {process.env.REACT_APP_PILOT_LAUNCH == "true" &&
            modalData?.type === "SignUp" && <PilotUser />}

          {process.env.REACT_APP_PILOT_LAUNCH == "true" &&
            modalData?.type === "ThanksPilotUser" && (
              <PilotUserThanks pilotUser={modalData?.pilotUser} />
            )}

          {/* {modalData?.type === "forgotPassword" && <ForgotPassword />} */}

          <Footer />
        </div>
      )}
    </>
  );
};

export default WebLayout;

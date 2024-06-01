/** @format */

import React, { useEffect, Suspense, useState } from "react";

import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AOS, useJwt } from "./utils/Packages";
import { PATHS, TOAST_TIMER } from "./utils";
import { SignUp, WebHome } from "./components/base";
import { Error403, Error404 } from "./components/errors";
import { Dimension, InitAssessment } from "./components/dimensions";

import { VerifyUser } from "./components/auth";
import { VerifyError } from "./components/auth";
import jQuery from "jquery";

import ChangePassword from "./components/profile/ChangePassword";
import CreateLogin from "./components/profile/CreateLogin";
import EnrichmentInfo from "./components/profile/EnrichmentInfo";
import Interests from "./components/profile/Interests";
import ProfilePersonality from "./components/profile/ProfilePersonality";
import SchoolInfo from "./components/profile/SchoolInfo";
import Experience from "./components/profile/Experience";
import Education from "./components/profile/Education";
import BasicDetails from "./components/profile/BasicDetails";

import ResetPassword from "./components/base/ResetPassword";
import { logoutAction } from "./redux/actions/APIs";
import { PrivateRoute, PublicRoute } from "./utils";
import Home from "./components/home/Home";
import Courses from "./components/base/Courses";
import Interestlist from "./components/base/Interestlist";
import ParentJourney from "./components/base/ParentJourney";
import BackgroundCheck from "./components/profile/BackgroundCheck";

import AboutUs from "./components/profile/AboutUs";
import Schoolactivity from "./components/dimensions/activity/Schoolactivity";

import Whyholisticgrowth from "./components/base/Whyholisticgrowth";

import Success from "./components/base/Success";
import TokenError from "./components/base/TokenError";
import ProviderFlow from "./components/base/ProviderFlow";
import Chatbox from "./components/base/Chatbox";

import SocialLesson from "./components/dimensions/course/social";
import PublicContent from "./components/public";
import SocialLessonGrp from "./components/base/SocialLessonGrp";
import Network from "./components/base/Network";
import Blog from "./components/blogs/Blog";
import Howvickycanhelp from "./components/base/Howvickycanhelp";

import ChatBox from "./components/messaging";
import Landing from "./components/base/Landing";
import blogDetails from "./components/blogs/blogDetails";
import Help from "./components/base/Help";
import HelpDetail from "./components/base/HelpDetail";
import Personality from "./components/base/Personality";
import PersonalityProfile from "./components/base/PersonalityProfile";
import ContentBuilder from "./components/contentbuilder";
import Feedback from "./components/feedback";
import Anythingelse from "./components/helpTopics/Anythingelse";
import Billing from "./components/helpTopics/Billing";
import CoursesHelp from "./components/helpTopics/CoursesHelp";
import DimSkill from "./components/helpTopics/DimSkill";
import HolisticProgress from "./components/helpTopics/HolisticProgress";
import ParentLearnerProfile from "./components/helpTopics/ParentLearnerProfile";
import progressandscore from "./components/helpTopics/progressandscoring";

import blogDetailstwo from "./components/blogs/blogDetailstwo";
import blogdetailsthree from "./components/blogs/blogDetailsthree";
import blogdetailsfour from "./components/blogs/blogDetailsfour";
import blogdetailsfive from "./components/blogs/blogDetailsfive";

import VerifyReset from "./components/auth/VerifyReset";
import LaunchingSoon from "./components/base/LaunchingSoon";

import UnSubscribe from "./components/base/UnSubscribe";
import Comingsoon from "./components/base/Comingsoon";
import Privacypolicy from "./components/base/Privacypolicy";
import Useraggrement from "./components/base/Useraggrement";
import VickyGuide from "./components/base/VickyGuide";
import { ToastContainer } from "react-toastify";
import IdleTimeOutHandler from "./IdleTimeOutHandler";
import Smartquiz from "./components/base/Smartquiz";
import ProfileSmartQuiz from "./components/profile/ProfileSmartQuiz";
import VickyUnsubscribe from "./components/unsubscribe/VickyUnsubscribe";
import Setting from "./components/base/Setting";
import { LessonDetails } from "./components/dimensions/course/vickycourses";
import Enrilledandprogress from "./components/base/Enrilledandprogress";
import Landingpagedemo1 from "./components/base/Landingpagedemo1";
import { CoursePage } from "./components/coursePage";
import { JourneyPage } from "./components/journey";
import Coursesetting from "./components/helpTopics/Mycoursesetting";
import EmpathyQuiz from "./components/base/EmpathyQuiz";
import EmpathyContainer from "./components/profile/empathy-quiz/EmpathyContainer";
import LearnerPathway from "./components/learnerpathway/LearnerPathways";
import CourseStaticPage from "./components/base/CourseStaticPage";
import Deactivateaccout from "./components/base/Deactivateaccout";
import SignInPG from "./components/base/SigninPG";
import Contactus from "./components/base/Contactus";
import RedirectionPage from "./components/base/RedirectionPage";
import CertificateImage from "./components/base/CertificateImage";
import AfterSignUp from "./components/base/AfterSignUp";
import LearnerPlan from "./components/learnerplan/LearnerPlan";
import AfterSubscription from "./components/base/AfteerSubscription";
import UiTestingPage from "./components/base/UiTestingPage";
import Myplan from "./components/learnerplan/Myplan";

const App = () => {
  const dispatch = useDispatch();

  const { isExpired } = useJwt(localStorage.getItem("access_token"));

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.key === "access_token" && event?.oldValue) {
        let oldTokenData = event?.oldValue;
        let newtokenData = event?.newValue;
        if (oldTokenData && newtokenData) {
          let oldToken = oldTokenData.split("##");
          let newToken = newtokenData.split("##");
          if (oldToken[0] !== newToken[0]) {
            dispatch(logoutAction());
          }
        }
      }
    });
  }, []);

  AOS.init();

  useEffect(() => {
    if (isExpired && localStorage.getItem("access_token")) {
      dispatch(logoutAction());
      window.location.assign(PATHS.LANDINGPAGE);
    }
  }, [isExpired]);

  if (process.env.REACT_APP_BLOCK_CONTENT == "true") {
    jQuery("body").addClass("blockcontent");
    document.addEventListener(
      "contextmenu",
      function (event) {
        event.preventDefault();
      },
      false
    );

    function ctrlShiftKey(e, keyCode) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
      if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      )
        return false;
    };
  }

  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={TOAST_TIMER}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<div>Loading...</div>}>
        <IdleTimeOutHandler
          onActive={() => {
            setIsActive(true);
          }}
          onIdle={() => {
            setIsActive(false);
          }}
        />
        <BrowserRouter>
          <Switch>
            <PublicRoute
              exact
              path={PATHS.LANDINGPAGE}
              component={SignInPG}
              restricted={true}
            />
            <PublicRoute path={PATHS.BLOG} component={Blog} restricted={true} />

            <PublicRoute
              path={PATHS.PROVIDERFLOW}
              component={ProviderFlow}
              restricted={true}
            />

            <PublicRoute
              exact
              path={PATHS.VERIFYRESET}
              component={VerifyReset}
            />
            <PublicRoute
              exact
              path={PATHS.VERIFYPASSWORD}
              component={VerifyUser}
            />

            <PublicRoute
              exact
              path={PATHS.VERIFYERROR}
              component={VerifyError}
              restricted={true}
            />

            <PublicRoute
              path={PATHS.USERSIGNUP}
              component={SignUp}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.USERSIGNIN}
              component={SignInPG}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.RESETPASSWORD}
              component={ResetPassword}
              restricted={true}
            />

            <PrivateRoute
              exact
              path={PATHS.INIT_ASSESS}
              component={InitAssessment}
            />
            <PrivateRoute exact path={PATHS.HOME} component={Home} />
            <PrivateRoute path={PATHS.AFTERSIGNUP} component={AfterSignUp} />
            <PrivateRoute path={PATHS.LEARNER_PLAN} component={LearnerPlan} />
            <PrivateRoute
              path={PATHS.AFTERSUBSCRIPTION}
              component={AfterSubscription}
            />
            <PrivateRoute path={PATHS.DIMENSION} component={Dimension} />
            <PrivateRoute path={PATHS.EDUCATION} component={Education} />
            <PrivateRoute path={PATHS.EXPERIENCE} component={Experience} />
            <PrivateRoute path={PATHS.INTERESTS} component={Interests} />
            <PrivateRoute
              path={PATHS.PROFILEPERSONALITY}
              component={ProfilePersonality}
            />
            <PrivateRoute
              path={PATHS.PROFILESMARTQUIZ}
              component={ProfileSmartQuiz}
            />
            <PrivateRoute
              path={PATHS.CHANGEPASSWORD}
              component={ChangePassword}
            />
            <PrivateRoute
              exact
              path={PATHS.BASICDETAILS}
              roles={"child"}
              component={BasicDetails}
            />
            <PrivateRoute path={PATHS.SCHOOLINFO} component={SchoolInfo} />
            <PrivateRoute
              path={PATHS.ENRICHMENTINFO}
              component={EnrichmentInfo}
            />
            <PrivateRoute path={PATHS.CREATELGOIN} component={CreateLogin} />
            <PrivateRoute path={PATHS.COURSE} component={Courses} />
            <PrivateRoute path={PATHS.INTERESTLIST} component={Interestlist} />
            <PrivateRoute
              path={PATHS.LEARNER_JOURNEY}
              component={JourneyPage}
            />
            <PrivateRoute
              path={PATHS.PARENTJOURNEY}
              component={ParentJourney}
            />
            <PrivateRoute
              path={PATHS.BACKGROUNDCHECK}
              component={BackgroundCheck}
            />

            <PrivateRoute path={PATHS.ABOUTUS} component={AboutUs} />
            <PrivateRoute
              path={PATHS.SCHOOLACTIVITY}
              component={Schoolactivity}
            />

            <PrivateRoute path={PATHS.SOCIALCOURSE} component={SocialLesson} />
            <PrivateRoute path={PATHS.CHATBOXPATH} component={Comingsoon} />
            <PrivateRoute
              path={PATHS.CONTENTBUILDERPATH}
              component={ContentBuilder}
            />
            <PrivateRoute path={PATHS.FEEDBACKPATH} component={Feedback} />
            <PublicRoute
              path={PATHS.PUBLIC_ADDCOURSE}
              component={PublicContent}
            />
            {/* <PublicRoute path={PATHS.PROVIDERFLOW} component={ProviderFlow} /> */}
            <PublicRoute path={PATHS.SUCCESS} component={Success} />
            <PublicRoute path={PATHS.CHATBOX} component={Chatbox} />

            <PublicRoute
              path={PATHS.SOCIALLESSONGRP}
              component={SocialLessonGrp}
            />
            <PublicRoute path={PATHS.NETWORK} component={Comingsoon} />
            <PublicRoute
              path={PATHS.WHYHOLISTICGROWTH}
              component={Whyholisticgrowth}
            />
            <PublicRoute
              path={PATHS.HOWVICKYCANHELPS}
              component={Howvickycanhelp}
            />
            <PublicRoute path={PATHS.LANDING} component={Landing} />
            {/* <PublicRoute path={PATHS.BLOG} component={Blog} /> */}
            <PublicRoute
              path={PATHS.BLOGDETAIL}
              component={blogDetails}
              restricted={true}
            />
            <PrivateRoute path={PATHS.HELP} component={Help} />
            {/* <PublicRoute path={PATHS.HELPDETAIL} component={HelpDetail} /> */}
            <PublicRoute
              path={PATHS.BLOGDETAILTWO}
              component={blogDetailstwo}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.BLOGDETAILSTHREE}
              component={blogdetailsthree}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.BLOGDETAILSFOUR}
              component={blogdetailsfour}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.BLOGDETAILSFIVE}
              component={blogdetailsfive}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.LAUNCHINGSOON}
              component={LaunchingSoon}
              restricted={true}
            />
            <PublicRoute
              path={PATHS.VICKYGUIDE}
              component={VickyGuide}
              restricted={true}
            />
            <PublicRoute path={PATHS.PERSONALITY} component={Personality} />
            <PublicRoute
              path={PATHS.PERSONALPROFILE}
              component={PersonalityProfile}
            />
            <PublicRoute path={PATHS.TOKENERROR} component={TokenError} />
            <PrivateRoute path={PATHS.ACCESS_DENIED} component={Error403} />
            <PrivateRoute path={PATHS.HELPCOURSE} component={CoursesHelp} />
            <PrivateRoute
              path={PATHS.HELPUSERPROFILE}
              component={ParentLearnerProfile}
            />
            <PrivateRoute path={PATHS.HELPDIMSKILL} component={DimSkill} />
            <PrivateRoute
              path={PATHS.HELPHOLISTICVIEW}
              component={HolisticProgress}
            />
            <PublicRoute path={PATHS.PRIVACYPOLICY} component={Privacypolicy} />
            <PublicRoute path={PATHS.USERAGGREMENT} component={Useraggrement} />
            <PublicRoute
              path={PATHS.LANDINGPAGEDEMO1}
              component={Landingpagedemo1}
            />

            <PrivateRoute path={PATHS.SMARTQUIZ} component={Smartquiz} />
            <PrivateRoute path={PATHS.HELPBILLING} component={Billing} />
            <PrivateRoute path={PATHS.HELPQUERY} component={Anythingelse} />
            <PrivateRoute
              path={PATHS.PROGRESSSCORING}
              component={progressandscore}
            />
            <PublicRoute path={PATHS.EMPATHYQUIZZ} component={EmpathyQuiz} />

            <PrivateRoute
              path={PATHS.EMPATHYQUIZ}
              component={EmpathyContainer}
            />

            <PublicRoute path={PATHS.SETTING} component={Setting} />
            <PublicRoute
              path={PATHS.COURSESTATIC}
              component={CourseStaticPage}
              // restricted={true}
            />
            {/* Added by Alfaiz */}
            <PublicRoute
              path={PATHS.UI_TESTING_PAGE}
              component={UiTestingPage}
            />

            <PublicRoute
              path={PATHS.DELETEACCOUNT}
              component={Deactivateaccout}
            />

            <PublicRoute
              path={PATHS.CERTIFICATEIMAGE}
              component={CertificateImage}
            />

            <PublicRoute path={PATHS.REDIECTION} component={RedirectionPage} />
            <PublicRoute
              path={PATHS.ENROLLEDPROG}
              component={Enrilledandprogress}
            />
            <PublicRoute path={PATHS.CONTACTUS} component={Contactus} />
            <PrivateRoute path={PATHS.COURSEPAGE} component={CoursePage} />
            <PublicRoute
              path={PATHS.UNSUBSCRIBE}
              component={VickyUnsubscribe}
            />
            <PrivateRoute
              path={PATHS.LESSIONDETAIL}
              component={LessonDetails}
            />
            <PrivateRoute
              path={PATHS.COURSESETTING}
              component={Coursesetting}
            />
              <PublicRoute
              path={PATHS.MYPLAN}
              component={Myplan}
            />
            <PrivateRoute
              path={PATHS.LEARNER_PATHWAY}
              component={LearnerPathway}
            />
            <PublicRoute path={PATHS.CONTACTUS} component={Contactus} />

            <PublicRoute path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;

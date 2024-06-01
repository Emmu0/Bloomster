/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sidebar, Topbar, ParentSignIn } from "./base";

import {
  isLoading,
  selectedUser,
  resetResponse,
  widgetOpenFlag,
  getAccordian,
  selectTab,
  resetGetResponse,
  setSubscribeModal,
  subscriptionPageNode,
  sensitiveVideo,
  showModal,
  showModalObj,
  viewSensitiveVdo,
} from "../redux/actions";

import { PATHS, TOAST_TIMER } from "../utils";
import {
  getSequnceSort,
  getUserDetails,
  getUserSessionId,
} from "../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./widget/Cards";
import Breadcrumb from "./controls/Breadcrumb";
import Success from "./notifications/Success";
import InviteFriend from "./base/InviteFriend";
import InviteParent from "./base/InviteParent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./notifications/Error";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logoutAction, settingVerify } from "../redux/actions/APIs";
import DimRedirectPopup from "./dimensions/DimRedirectPopup";
import KnowYourself from "./controls/KnowYourself";
import CourseDetailsPage from "./dimensions/CourseDetailsPage";
import TeacherProfile from "./profile/teacher/TeacherProfile";
import SubscribePopUp from "./dimensions/SubscribePopUp";
import Subscription from "./subscription/Subscription";
import HolisticGrowthPopup from "./dimensions/HolisticGrowthPopup";
import Enrollment from "./controls/Enrollment";
import DowngradeModal from "./subscription/DowngradeModal";
import SelectChildPopup from "./subscription/SelectChildPopup";
import DimensionGrowth from "./home/DimensionGrowth";
import { ViewVideo } from "./dimensions/activity";
import SkillGrowth from "./home/SkillGrowth";
import ClassScheduleDetails from "./learnerplan/ClassScheduleDetails";

const Home = ({ children }, props) => {
  const path = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    loading,
    alluserdetails,
    error,
    response,
    dataLoading,
    parentLogin,
    loggedInUser,
    modalData,
    dashboardData,
    ribbonOpen,
    getdimension,
    socialActivityData,
    getResponse,
    courseModal,
    providerModal,
    subscribeModal,
    defaultChildData,
    enrollObj,
    downgradeObj,
    selectChildObj,
    viewSensitiveVideo,
    viewVideoModal,
    classScheduleData,
    signinresponse,
  } = useSelector((state) => state.collections);

  const { growthModal, growthSkillObj } = useSelector((state) => state.home);

  const [widgetOpn, setWidgetOpn] = useState(false);

  //verify user name API response reset 14 May 2024
  useEffect(() => {
    if (signinresponse && signinresponse?.success) {
      dispatch(resetResponse());
    }
  }, []);

  useEffect(() => {
    if (
      alluserdetails?.recordId &&
      getUserSessionId() !== alluserdetails?.recordId
    ) {
      if (path?.id && getUserSessionId() !== path?.id) {
        // window.location.assign(PATHS.ACCESS_DENIED);
      }
    }
  }, [alluserdetails]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path?.id]);

  const [pctCompleted, setPctCompleted] = useState();

  useEffect(() => {
    if (socialActivityData?.records) {
      setPctCompleted(socialActivityData?.records[0]);
    }
  }, [socialActivityData]);

  useEffect(() => {
    if (error) {
      if (error === "Request failed with status code 403") {
        localStorage.removeItem("access_token");
        window.location.assign(PATHS.LANDINGPAGE);
        dispatch(logoutAction());
      } else if (error === "Unauthorized Access") {
        toast.error(<Error error={error} />, {
          position: "top-center",
          autoClose: TOAST_TIMER,
        });
        dispatch(resetResponse()).then(() => {
          dispatch(isLoading(false)).then(() => {
            // window.location.assign(PATHS.ACCESS_DENIED);
          });
        });
      } else {
        toast.error(<Error error={error} />, {
          position: "top-center",
          autoClose: TOAST_TIMER,
        });
        dispatch(resetResponse());
        dispatch(isLoading(false));
      }
    }
  }, [error]);

  console.log("response", response);

  useEffect(() => {
    if (response && response?.success) {
      toast.info(<Success response={response} />, {});
      dispatch(resetResponse());
    }
  }, [response]);
  useEffect(() => {
    if (getResponse) {
      toast.info(<Success response={getResponse} />, {});
      dispatch(resetGetResponse());
    }
  }, [getResponse]);

  useEffect(() => {
    dispatch(selectedUser(getUserDetails(alluserdetails, path))).then(() => {
      if (loading) {
        setTimeout(() => {
          dispatch(isLoading(false));
        }, 1000);
      }
    });
    setWidgetOpn(localStorage.getItem("widgetCard" + loggedInUser?.id));
  }, [loading, path]);

  const widgetOpen = (data) => {
    dispatch(widgetOpenFlag(data));
  };

  const [accordianSetail, setAccordianSetail] = useState([
    { parentId: alluserdetails?.records[0]?.id, status: false },
  ]);
  useEffect(() => {
    if (alluserdetails) {
      alluserdetails?.records[0]?.children?.map((data, key) => {
        accordianSetail.push({ userid: data?.id, status: false });
      });
      dispatch(getAccordian(accordianSetail));
    }
  }, [alluserdetails]);

  const dimredirect = (userid) => {
    let dimensions = getSequnceSort(getdimension?.records);
    let previousState = localStorage.getItem("previousState");
    let isLearnerExists = false;
    if (previousState) {
      previousState = JSON.parse(previousState);
      let uistate = previousState?.uistate;

      for (let index = 0; index < uistate?.length; index++) {
        if (uistate[index]?.userid && uistate[index]?.userid === userid) {
          isLearnerExists = true;
          let selectedTab = {
            key: uistate[index]?.detail?.dimId,
            value: uistate[index]?.detail?.dimension,
          };

          dispatch(selectTab(selectedTab));
          history.push(
            PATHS.DIMENSION_STR + uistate[index]?.detail?.dimId + "/" + userid
          );

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

  const [subscribeData, setSubscribeData] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSubs, setShowSubs] = useState(false);
  const [isChooseSubject, setIsChooseSubject] = useState(false);

  const handlePopUp = (data, skillId, dimName, location) => {
    dispatch(setSubscribeModal(data));
    let obj = {
      courseObj: data,
      skillId: skillId,
    };

    setSubscribeData(obj);
    setShowPopUp(true);
    setShowSubs(false);
    if (location) {
      setIsChooseSubject(true);
    }
  };

  const handleSubscribe = () => {
    dispatch(setSubscribeModal());
    setShowPopUp(false);
    setShowSubs(true);
  };

  const closePopup = () => {
    setShowPopUp(false);
  };

  const closeSub = () => {
    setShowSubs(false);
    dispatch(subscriptionPageNode());
  };

  let showEntry = defaultChildData && defaultChildData?.showEntryPopup;
  const close = () => {
    dispatch(sensitiveVideo(false));
    dispatch(settingVerify());
    dispatch(showModalObj());
    dispatch(viewSensitiveVdo());
  };
  return (
    <div>
      {parentLogin && parentLogin ? <ParentSignIn /> : ""}
      <div className='LargeScreenBody'>
        <Topbar dashboardData={dashboardData} dimredirect={dimredirect} />
        <div className='Main'>
          <div className='container-fluid LargescreenView'>
            <Sidebar dimredirect={dimredirect} />
            {modalData?.type === "Knowyourself" && <KnowYourself />}
            <div
              className={`MainContent ${localStorage.getItem("sidebarCollapse" + loggedInUser?.id) ===
                  "true"
                  ? "inactive"
                  : ""
                }  ${ribbonOpen ? "stickyRibbon" : ""}`}>
              {loggedInUser?.role?.name !== "PROVIDER" && (
                <Cards widgetOpen={widgetOpen} />
              )}

              <Breadcrumb dimredirect={dimredirect} />
              <div className='d-flex mobilePannelDirction'>
                {children && children}
              </div>
            </div>
          </div>
        </div>
        {/* } */}
      </div>

      {modalData?.type === "DimRedirect" && <DimRedirectPopup />}
      {/* {modalData?.type === "Holisticgrowth" && !showEntry && (
        <HolisticGrowthPopup />
      )} */}

      {modalData?.type === "Invite" && <InviteFriend />}
      {modalData?.type === "InviteParent" && <InviteParent />}
      {dataLoading && dataLoading ? (
        <div className='lodaingBackgropund'>
          <div className='VickeyLoder'>
            <div className='dlogo'>
              <span className='dimen-1'></span>
              <span className='dimen-1 dimen-2'></span>
              <span className='dimen-1 dimen-3'></span>
              <span className='dimen-1 dimen-4'></span>
              <span className='dimen-1 dimen-5'></span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {courseModal && (
        <CourseDetailsPage data={courseModal} handlePopUp={handlePopUp} />
      )}
      {providerModal && (
        <TeacherProfile data={providerModal} handlePopUp={handlePopUp} />
      )}

      {downgradeObj && <DowngradeModal data={downgradeObj} />}

      {selectChildObj && <SelectChildPopup data={selectChildObj} />}

      {showSubs && (
        <Subscription close={closeSub} subscribeData={subscribeData} />
      )}

      {subscribeModal && (
        <SubscribePopUp
          handleSubscribe={handleSubscribe}
          closePopup={closePopup}
        />
      )}

      {enrollObj && <Enrollment data={enrollObj} />}

      {growthModal && <DimensionGrowth data={growthModal} />}

      {growthSkillObj && (
        <SkillGrowth data={growthSkillObj} dimName={growthSkillObj?.dimName} />
      )}

      {viewSensitiveVideo && viewVideoModal && (
        <ViewVideo close={close} data={"https://youtu.be/DrVuH57SyJg"} />
      )}
      {/* Class Schedule 8 may 2024 */}
      {classScheduleData && <ClassScheduleDetails />}
    </div>
  );
};

export default Home;

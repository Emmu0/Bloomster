import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../resources/images";
import CourseSetting from "./CourseSetting";

import {
  datesorting,
  getCapitalized,
  getName,
  textTrim,
} from "../../utils/helper";
import AddReward from "./AddReward";
import {
  getSettingData,
  addsetting,
  getRewardData,
} from "../../redux/actions/APIs";
import { selectTab } from "../../redux/actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ConfirmPopup from "./ConfirmPopup";
import RewardPopUp from "../base/RewardPopUp";

const GeneralSetting = ({ closeSetting, generalUserId, settingUserId }) => {
  const {
    loggedInUser,
    defaultChildData,
    corData,
    rewardData,
    getResponse,
    getdimension,
    settingData,
    response
  } = useSelector((state) => state.collections);
  const [allchild, setAllchild] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const [selectedChild, setSelectedChild] = useState(getName(defaultChildData));
  const [activeTab, setActiveTab] = useState(2);
  const [showReward, setShowReward] = useState(false);
  const [courId, setCourId] = useState("");
  const [type, setType] = useState([]);
  const [rewardLoader, setRewardLoader] = useState(false);
  const [userId, setUserId] = useState(defaultChildData?.id);
  const [confirmMsg, setConfirmMsg] = useState(false);
  const [startPopup, setStartPopup] = useState(false);
  const [userValue, setUserValue] = useState();
  useEffect(() => {
    generalUserId(defaultChildData?.id);
  }, []);

  useEffect(() => {
    if (response?.success) {
      dispatch(getSettingData(defaultChildData.id, defaultChildData.level.id));
    }

  }, [response]);

  useEffect(() => {
    if (getResponse) {
      setRewardLoader(false);
      setConfirmMsg(false);
    }
  }, [getResponse]);

  const chooseTab = (data) => {
    setActiveTab(data);
  };

  const userChange = (vl) => {
    setUserValue(vl);
    if (confirmMsg) {
      setStartPopup(true);
    } else {
      updatePage(false, vl);
    }
  };

  const updatePage = (update, val) => {
    if (update) {
      dispatch(addsetting(userId, corData, false));
      dispatch(getSettingData());
      setSelectedChild(getName(val));
      setUserId(val.id);
      generalUserId(val.id);
      dispatch(getSettingData(val.id, val.level.id));
    } else {
      dispatch(getSettingData());
      setSelectedChild(getName(val));
      setUserId(val.id);
      generalUserId(val.id);
      dispatch(getSettingData(val.id, val.level.id));
    }
  };

  const [rewardObj, setRewardObj] = useState();
  const viewReward = (data, courseId, activityId, flag, index, type) => {
    setConfirmMsg(true);
    setType(type);
    let isCourse = true;
    let settingId = courseId;
    if (activityId) {
      isCourse = false;
      settingId = activityId;
    }

    setRewardObj({
      data: data,
      userId: userId,
      courseId: courseId,
      activityId: activityId,
      type: flag,
      wk: index,
    });
    setCourId(courseId);

    if (!flag) {
      setShowReward(true);
    } else {
      dispatch(getRewardData(userId, settingId, isCourse));
    }
  };

  useEffect(() => {
    if (rewardData) {
      setShowReward(true);
    }
  }, [rewardData]);
  const closeReward = () => {
    dispatch(getRewardData());
    setShowReward(false);
    setCourId();
  };
  const handleSettings = () => {
    setConfirmMsg(true);
    if (params?.dimId) {
      let dimObj = getdimension?.records.find(
        (data) => data?.id === params?.dimId
      );
      if (dimObj) {
        let dimData = {
          key: dimObj.id,
          value: dimObj.name,
        };
        dispatch(selectTab(dimData));
      }
    }

    setRewardLoader(true);
    if (allchild) {
      dispatch(addsetting(loggedInUser?.id, corData, true));
    } else {
      dispatch(addsetting(userId, corData, false));
    }
    // dispatch(EnrollCoursesJson(userId));
  };
  const [initialState, setinitialState] = useState([]);
  const [state, collapseDispatch] = React.useReducer(reducer, initialState);

  const handleNextButtonClick = () => {
    collapseDispatch({ type: "collaps-all" });
  };

  useEffect(() => {
    if (settingData) {
      collapseDispatch({ type: "collaps-all" });
    }
  }, [settingData]);

  function reducer(state, { type, key }) {
    switch (type) {
      case "expand-all":
        let arr = [];
        settingData?.records?.map((data) => {
          arr.push(true);
        });
        return arr;
      case "collaps-all":
        let newArr = [];
        settingData &&
          settingData?.records?.map((data) => {
            newArr.push(false);
          });
        return newArr;
      case "toggle":
        let newState = [...state];
        newState[key] = !newState[key];
        return newState;
      default:
        throw new Error("reducer configuration");
    }
  }

  const [openReward, setOpenReward] = useState();
  const handleOpenReward = (data) => {
    if (!data) {
      dispatch(getRewardData());
    }
    setOpenReward(data)
  }

  return (
    <>
      <div className='halfPagePOpup feedbacklabel SchoolActivityPopup'>
        <div className='modal d-flex' id='settingId' role='dialog'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content courseInformation'>
              <div className='modal-header'>
                <div className='heading border-0 p-0'>
                  <h2 className='flex'>
                    <span>
                      <img src={image.settingicons} className='mr-2' />
                      Settings
                    </span>
                    <button
                      className='btn btn-primary'
                      data-dismiss='modal'
                      onClick={() => closeSetting()}>
                      <i className='fa-regular fa-xmark m-0'></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className='modal-body pt-0 pb-0 d-flex align-content-center'>
                <div className='tabgrid w-100'>
                  <ul>
                    {/* <li
                      onClick={() => chooseTab(1)}
                      className={`tabs1 ${
                        activeTab == 1 ? "active-tabs" : ""
                      } `}
                    >
                      <img src={image.gensettings} /> General
                    </li> */}
                    {/* <li className="tabs"><img src={image.CourseTitleIcon} alt="" /> Skills</li> */}
                    <li
                      onClick={() => chooseTab(2)}
                      className={`tabs1 ${activeTab == 2 ? "active-tabs" : ""
                        } `}>
                      <img src={image.mortarboard} alt='' /> Courses
                    </li>
                  </ul>
                  <div className='setuserprofile'>
                    <div className='VKprofile'>
                      <div className='vkprofilename'>
                        <span className='insceptionFilter  ml-auto '>
                          <div
                            id='navbarDropdown'
                            className='text-dark'
                            role='button'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            {loggedInUser?.children?.length > 1 ? (
                              <i className='fa-regular fa-user-group mr-2'></i>
                            ) : (
                              <i className='fa fa-user'></i>
                            )}
                            {textTrim(getCapitalized(selectedChild, 25))}
                            {loggedInUser?.children?.length > 1 ? (
                              <i className='fa-regular fa-chevron-down' />
                            ) : (
                              ""
                            )}
                          </div>

                          <div
                            className='Prifg dropdown-menu '
                            aria-labelledby='navbarDropdown'>
                            <ul className=''>
                              {loggedInUser?.children &&
                                datesorting(loggedInUser?.children).map(
                                  (vl, ky) => (
                                    <li key={ky} onClick={() => userChange(vl)}>
                                      <span>
                                        <i className='fa-regular fa-user mr-2'></i>
                                        {textTrim(
                                          getCapitalized(getName(vl), 20)
                                        )}
                                      </span>
                                    </li>
                                  )
                                )}
                            </ul>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <div className='form-check form-switch m-0 flex p-0 justify-content-right'>
                      <label
                        className={
                          state?.length === settingData?.records?.length
                            ? "form-check-label ml-auto"
                            : ""
                        }>
                        Expand All
                      </label>
                      <input
                        class='form-check-input avltogglebutton pointer'
                        type='checkbox'
                        checked={
                          state?.every((s) => s === true) &&
                          !state?.every((s) => s === false) &&
                          true
                        }
                        role={"switch"}
                        id='flexSwitchCheckDefault'
                        onChange={() => {
                          state.every((s) => s === true)
                            ? collapseDispatch({ type: "collaps-all" })
                            : collapseDispatch({ type: "expand-all" });
                        }}
                      />
                    </div>
                  </div>
                  {activeTab === 2 && (
                    <CourseSetting
                      viewReward={viewReward}
                      closeReward={closeReward}
                      courId={courId}
                      type={type}
                      userId={userId}
                      state={state}
                      collapseDispatch={collapseDispatch}
                      setConfirmMsg={setConfirmMsg}
                      handleNextButtonClick={handleNextButtonClick}
                      handleOpenReward={handleOpenReward}
                    />
                  )}
                </div>
              </div>

              {/* {loggedInUser?.children?.length > 1 && (
                <div className="Applyforall">
                  <label className="Selcheckbox">
                    Apply to all children
                    <input
                      type="checkbox"
                      id="Public"
                      name="schoolType"
                      value="PUBLIC"
                    />
                    <span
                      className="checkmark "
                      onClick={() => setAllchild(!allchild)}
                    ></span>
                  </label>
                </div>
              )} */}

              <div className='modal-footer'>
                <div className='form-group BDsubmitbutton d-flex m-0'>
                  <div className='buttonDistribotion'>
                    <div className='buttonDistribotion'>
                      {!rewardLoader && (
                        <button
                          onClick={() => closeSetting()}
                          type='button'
                          className='btn-blue btn-login d-block mb-5 cancelbutton'>
                          <i className='fa-solid fa-xmark'></i> Cancel
                        </button>
                      )}
                      {rewardLoader ? (
                        <button
                          className='btn-blue btn-login d-block mb-5 '
                          key={Math.random()}
                          disabled>
                          <span className='RounAnimation mr-1'></span> Please
                          Wait...
                        </button>
                      ) : (
                        <button
                          type='button'
                          onClick={() => handleSettings()}
                          className='btn-blue btn-login d-block mb-5'
                          disabled={
                            corData && corData.every((e) => !e.showCourse)
                          }>
                          <i className='fa-solid fa-paper-plane ml-1'></i> Save
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="model-footer">
                <div className="sharecertificate">
                  <span className="shareback mr-2">
                    <i className="fa-solid fa-xmark mr-2"></i>Close
                  </span>

                  <span>Share with Friends & Family</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {(showReward && courId) && <AddReward closeReward={closeReward} object={rewardObj} />}

      {startPopup && (
        <ConfirmPopup
          setStartPopup={setStartPopup}
          updatePage={updatePage}
          setConfirmMsg={setConfirmMsg}
          userValue={userValue}
          selectedChild={selectedChild}
        />
      )}

      {openReward && (
        <RewardPopUp
          closeReward={handleOpenReward}
          rewardDataWithoutAPI={openReward}
        />
      )}
    </>
  );
};

export default GeneralSetting;

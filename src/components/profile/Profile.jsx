/** @format */

import React, { useState, useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";
import * as image from "../../resources/images";
import { ShimmerCategoryList } from "../../utils/Packages";
import { PATHS } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import AddChild from "../base/AddChild";
import {
  datesorting,
  getCapitalized,
  getCounts,
  getName,
  getToolTip,
  textTrim,
} from "../../utils/helper";

import {
  showModal,
  getprofile,
  getAccordian,
  showProviderQuote,
  getChildName,
} from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { postData } from "../../redux/actions/PersonalityAPIs";
import { getJournyData } from "../../redux/actions/APIs";

let childData = [];
const Profile = (props, { resetForm, isReset = false }) => {
  const dispatch = useDispatch();
  const {
    alluserdetails,
    loggedInUser,
    logInUserId,
    accordianStatus,
    getJournyResponse,
  } = useSelector((state) => state.collections);
  const params = useParams();
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [initialData, setInitialData] = useState(undefined);
  const [chilCountArray, setChilCountArray] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSubs, setShowSubs] = useState(false);

  if (alluserdetails?.records[0]?.role.name === "LEARNER") {
    childData = alluserdetails?.records;
  } else if (alluserdetails?.records[0]?.children?.length > 0) {
    childData = alluserdetails?.records[0]?.children;
  }

  let userData = alluserdetails?.records[0];
  const handlePopUp = () => {
    dispatch(showModal({ type: "Subscription" }));
  };

  const handleSubscribe = () => {
    dispatch(showModal({ type: "Subscription" }));
  };

  const closeSub = () => {
    setShowSubs(false);
  };

  useEffect(() => {
    if (isReset) {
      resetForm();
    }
  }, [history?.location?.pathname?.split("/")?.[3]]);

  useEffect(() => {
    setCount(getCounts(userData, "parent"));
    setChilCountArray(getCounts(childData, "child"));
  }, [userData]);
  useEffect(() => {
    if (history?.location?.state?.role) {
      if (history?.location?.state?.role === "PARENT") {
        setInitialData(loggedInUser?.children[0]);
      } else if (history?.location?.state?.role === "LEARNER") {
        setInitialData(loggedInUser);
      }
    }
  }, [history?.location?.state?.role, loggedInUser]);

  const close = () => {
    setInitialData(undefined);
  };
  const childCollapsehandler = (id) => {
    logInUserId?.map((accdata) => {
      if (accdata?.userId == id && accdata?.status == false) {
        accdata.status = true;
        dispatch(getprofile(logInUserId));
      } else if (accdata?.userId == id && accdata?.status == true) {
        accdata.status = false;
        dispatch(getprofile(logInUserId));
      }
    });
  };
  const [accordianSetail, setAccordianSetail] = useState([]);

  useEffect(() => {
    accordianSetail.push({
      userId: alluserdetails?.records[0]?.id,
      status: false,
    });
    alluserdetails?.records[0]?.children?.map((data, key) => {
      accordianSetail.push({ userId: data?.id, status: false });
    });

    dispatch(getAccordian(accordianSetail));
    if (alluserdetails && accordianSetail) {
      accordianStatus?.map((accdata) => {
        if (accdata?.userId == params?.id) {
          accdata.status = true;
          dispatch(getprofile(accordianStatus));
        }
      });
    }
  }, [alluserdetails]);

  const checkUser = (id) => {
    let abc = logInUserId?.filter((val) => val?.userId === id);

    if (abc && abc[0] && abc[0]?.status) {
      return "show";
    }
  };

  const _redirectJourney = (childOBj) => {
    if (childOBj && childOBj.isJourney) {
      history.push(PATHS.LEARNER_JOURNEY_STR + childOBj.id);
      // dispatch(getJournyData(childOBj.id, childOBj.level.id));
    } else {
      dispatch(showModal({ type: "journeySkills", childId: childOBj?.id }));
      dispatch(getChildName(childOBj?.firstName));
    }
  };

  return (
    <div className="RightbarPannel p-0">
      {!alluserdetails ? (
        <div className="PannelContent">
          <ShimmerCategoryList />
        </div>
      ) : (
        <>
          <div className="heading">
            <h2>
              <img src={image.mainProfilebar} alt="" className="mr-2" />
              Profile
            </h2>
          </div>

          {loggedInUser?.role.name === "PARENT" ? (
            <div className="PannelContent lernerparents">
              <div className="">
                <div className="profile_division">
                  <div className="Profileheading">
                    <h4
                      className={`panel-title heding-title justify-content-between ${checkUser(loggedInUser?.id) && "active_profile"
                        } ${loggedInUser?.id === params.id && "active_profile_green"
                        }`}
                      data-toggle="collapse"
                      href="#multiCollapseExample1"
                      aria-expanded={checkUser(loggedInUser?.id) ? true : false}
                      onClick={() => {
                        childCollapsehandler(loggedInUser?.id);
                      }}
                    >
                      <span
                        data-for={getName(loggedInUser)}
                        data-event-off=""
                        data-tip
                      >
                        <i>
                          <img src={image.parents_icon} alt="..." />
                        </i>

                        {textTrim(getCapitalized(getName(loggedInUser), 25))}

                        <span className="profilecategory"> &nbsp;(Parent)</span>
                      </span>
                      <i className="fa fa-chevron-down icon-show"></i>
                    </h4>
                  </div>

                  <div
                    className={`panel-collapse collapse ${checkUser(
                      loggedInUser?.id
                    )}`}
                    id="multiCollapseExample1"
                  // aria-expanded="true"
                  >
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.BASICDETAILS_STR + alluserdetails?.recordId,
                        })
                      }
                    >
                      {userData?.email && userData?.mobile && (
                        <p>
                          <NavLink
                            to={
                              PATHS.BASICDETAILS_STR + alluserdetails?.recordId
                            }
                            activeclassname="selectedActive"
                          >
                            <i className="fa-solid fa-circle-check circlegreen"></i>
                            Personal Details
                          </NavLink>
                        </p>
                      )}
                      {alluserdetails?.records[0]?.email == null ||
                        alluserdetails?.records[0]?.mobile == null ? (
                        <p>
                          <NavLink
                            to={
                              PATHS.BASICDETAILS_STR + alluserdetails?.recordId
                            }
                            activeclassname="selectedActive"
                          >
                            <i
                              className="fa fa-caret-right rightIcon"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus-circle circleIcon"
                              aria-hidden="true"
                            ></i>
                            Personal Details
                          </NavLink>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.CHANGEPASSWORD_STR +
                            alluserdetails?.records[0]?.id,
                        })
                      }
                    >
                      <p>
                        <NavLink
                          to={
                            PATHS.CHANGEPASSWORD_STR +
                            alluserdetails?.records[0]?.id
                          }
                          activeclassname="selectedActive"
                        >
                          <i
                            className="fa fa-caret-right rightIcon"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-minus-circle circleIcon"
                            aria-hidden="true"
                          ></i>
                          Change Password{" "}
                        </NavLink>
                      </p>
                    </div>
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.EDUCATION_STR +
                            alluserdetails?.records[0]?.id,
                        })
                      }
                    >
                      {userData?.educations?.length > 0 ? (
                        <p>
                          <NavLink
                            to={
                              PATHS.EDUCATION_STR +
                              alluserdetails?.records[0]?.id
                            }
                            activeclassname="selectedActive"
                          >
                            <i className="fa-solid fa-circle-check circlegreen"></i>
                            Education
                          </NavLink>
                        </p>
                      ) : (
                        ""
                      )}
                      {alluserdetails?.records[0]?.educations?.length === 0 ? (
                        <p>
                          <NavLink
                            to={
                              PATHS.EDUCATION_STR +
                              alluserdetails?.records[0]?.id
                            }
                            activeclassname="selectedActive"
                          >
                            <i
                              className="fa fa-caret-right rightIcon"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus-circle circleIcon"
                              aria-hidden="true"
                            ></i>
                            Education
                          </NavLink>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.EXPERIENCE_STR +
                            alluserdetails?.records[0]?.id,
                        })
                      }
                    >
                      {userData?.experiences?.length > 0 ? (
                        <NavLink
                          to={
                            PATHS.EXPERIENCE_STR +
                            alluserdetails?.records[0]?.id
                          }
                          activeclassname="selectedActive"
                        >
                          <i className="fa-solid fa-circle-check circlegreen"></i>
                          Experience{" "}
                        </NavLink>
                      ) : (
                        ""
                      )}

                      {alluserdetails?.records[0].experiences.length == 0 ? (
                        <p>
                          <NavLink
                            to={
                              PATHS.EXPERIENCE_STR +
                              alluserdetails?.records[0]?.id
                            }
                            activeclassname="selectedActive"
                          >
                            <i
                              className="fa fa-caret-right rightIcon"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus-circle circleIcon"
                              aria-hidden="true"
                            ></i>
                            Experience
                          </NavLink>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.INTERESTS_STR +
                            alluserdetails?.records[0]?.id,
                        })
                      }
                    >
                      {userData?.interests?.length > 0 ? (
                        <p>
                          <NavLink
                            to={
                              PATHS.INTERESTS_STR +
                              alluserdetails?.records[0]?.id
                            }
                            activeclassname="selectedActive"
                          >
                            <i className="fa-solid fa-circle-check circlegreen"></i>
                            Interests
                          </NavLink>
                        </p>
                      ) : (
                        ""
                      )}
                      {alluserdetails?.records[0]?.interests?.length === 0 ? (
                        <p>
                          <NavLink
                            to={
                              PATHS.INTERESTS_STR +
                              alluserdetails?.records[0]?.id
                            }
                            activeclassname="selectedActive"
                          >
                            <i
                              className="fa fa-caret-right rightIcon"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus-circle circleIcon"
                              aria-hidden="true"
                            ></i>
                            Interests{" "}
                          </NavLink>
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="panel-body d-flex justify-content-between py-1">
                      {userData?.subscription ? (
                        <p onClick={() => handlePopUp()}>
                          <i className="fa-solid fa-circle-check circlegreen mr-3"></i>
                          Subscribe
                        </p>
                      ) : (
                        <p onClick={() => handlePopUp()}>
                          <i
                            className="fa fa-caret-right rightIcon"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-minus-circle circleIcon"
                            aria-hidden="true"
                          ></i>{" "}
                          Subscribe
                        </p>
                      )}
                    </div>

                    <div className="panel-body d-flex justify-content-between py-1">
                      {alluserdetails?.records[0]?.role.name === "PARENT" ? (
                        <div>
                          <AddChild />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {loggedInUser?.children?.length > 0
            ? childData &&
            datesorting(childData).map((value, key) => (
              <div className="PannelContent child_profiles" key={key}>
                <div className="">
                  <div className="profile_division">
                    <div className="Profileheading">
                      <h4
                        className={`panel-title heding-title ${checkUser(value?.id) ? "active_profile" : ""
                          } ${value?.id === params?.id
                            ? "active_profile_green"
                            : ""
                          }`}
                        data-toggle="collapse"
                        aria-expanded={checkUser(value?.id) ? true : false}
                        href={"#section_" + key}
                        onClick={() => {
                          childCollapsehandler(value?.id);
                        }}
                      >
                        {/* {getName(value)?.length > 25 ? (
                            <ReactTooltip id={getName(value)}>
                              <p>{getName(value)}</p>
                            </ReactTooltip>
                          ) : (
                            ""
                          )} */}

                        <span
                          className="Username flex"
                          data-for={getName(value)}
                          data-event-off=""
                          data-tip
                        >
                          <i className="fas fa-user"></i>
                          {textTrim(getCapitalized(getName(value), 25))}
                          <span className="profilecategory">
                            &nbsp;(Learner)
                          </span>
                        </span>
                        <i className="fa fa-chevron-down icon-show"></i>
                      </h4>
                    </div>
                    <div
                      id={"section_" + key}
                      className={`panel-collapse collapse ${checkUser(
                        value?.id
                      )}`}
                      aria-expanded="true"
                    >
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        key={key}
                        onClick={() =>
                          history.push({
                            pathname: PATHS.BASICDETAILS_STR + value.id,
                          })
                        }
                      >
                        {value?.address1 ? (
                          <p>
                            <NavLink
                              to={PATHS.BASICDETAILS_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                              Personal Details
                            </NavLink>{" "}
                          </p>
                        ) : (
                          ""
                        )}
                        {value?.address1 == "" || value?.address1 == null ? (
                          <p>
                            <NavLink
                              to={PATHS.BASICDETAILS_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              Personal Details
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push(
                            value.username === null
                              ? { pathname: PATHS.CREATELGOIN_STR + value.id }
                              : {
                                pathname:
                                  PATHS.CHANGEPASSWORD_STR + value.id,
                              }
                          )
                        }
                      >
                        {value.username ? (
                          <NavLink
                            to={PATHS.CHANGEPASSWORD_STR + value.id}
                            activeclassname="selectedActive"
                          >
                            <i
                              className="fa fa-caret-right rightIcon"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus-circle circleIcon"
                              aria-hidden="true"
                            ></i>
                            Change Password
                          </NavLink>
                        ) : (
                          ""
                        )}
                        {value.username === null ? (
                          <p>
                            <NavLink
                              to={PATHS.CREATELGOIN_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              Create Login
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push({
                            pathname: PATHS.SCHOOLINFO_STR + value.id,
                          })
                        }
                      >
                        {value?.schoolDetails?.school ? (
                          <p>
                            <NavLink
                              to={PATHS.SCHOOLINFO_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                              School
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                        {value?.schoolDetails?.school == null ? (
                          <p>
                            <NavLink
                              to={PATHS.SCHOOLINFO_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              School
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push({
                            pathname: PATHS.ENRICHMENTINFO_STR + value.id,
                          })
                        }
                      >
                        {value?.enrichmentDetails?.length > 0 ? (
                          <p>
                            <NavLink
                              to={PATHS.ENRICHMENTINFO_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                              Enrichment
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                        {value?.enrichmentDetails?.length == 0 ? (
                          <p>
                            <NavLink
                              to={PATHS.ENRICHMENTINFO_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              Enrichment
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push({
                            pathname: PATHS.INTERESTS_STR + value.id,
                          })
                        }
                      >
                        {value?.interests?.length > 0 ? (
                          <p>
                            <NavLink
                              to={PATHS.INTERESTS_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                              Interests{""}
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                        {value?.interests?.length === 0 ? (
                          <p>
                            <NavLink
                              to={PATHS.INTERESTS_STR + value.id}
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              Interests{""}
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* {value.isJourney ? (
                          <div
                            className='panel-body d-flex justify-content-between py-1'
                            onClick={() => _redirectJourney(value)}>
                            <p>
                              <i className='fa-solid fa-circle-check circlegreen'></i>
                              {"  "}
                              Learner Journey
                            </p>
                          </div>
                        ) : (
                          <div
                            className='panel-body d-flex justify-content-between py-1'
                            onClick={() => _redirectJourney(value)}>
                            <p>
                              <i className='fa fa-minus-circle circleIcon'></i>
                              Learner Journey
                            </p>
                          </div>
                        )} */}

                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push({
                            pathname:
                              PATHS.PROFILEPERSONALITY_STR + value?.id,
                          })
                        }
                      >
                        <p>
                          <NavLink
                            to={PATHS.PROFILEPERSONALITY_STR + value?.id}
                            onClick={() => dispatch(postData())}
                            activeclassname="selectedActive"
                          >
                            {value.personality != null ? (
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                            ) : (
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                            )}
                            Personality Type
                          </NavLink>
                        </p>
                      </div>
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push({
                            pathname: PATHS.PROFILESMARTQUIZ_STR + value?.id,
                            state: { userId: value?.id },
                          })
                        }
                      >
                        <p
                          onClick={() =>
                            history.push({
                              pathname:
                                PATHS.PROFILESMARTQUIZ_STR + value?.id,
                              state: { userId: value?.id },
                            })
                          }
                          activeclassname="selectedActive"
                        >
                          <i
                            className={`${value?.isMultipleIntel
                              ? "fa-solid fa-circle-check circlegreen pr-2"
                              : "fa fa-minus-circle circleIcon"
                              }
                              `}
                          ></i>
                          Multiple Intelligences
                        </p>
                      </div>
                      <div
                        className="panel-body d-flex justify-content-between py-1"
                        onClick={() =>
                          history.push({
                            pathname: PATHS.EMPATHYQUIZ_STR + value?.id,
                            state: { userId: value?.id },
                          })
                        }
                      >
                        <p
                          onClick={() =>
                            history.push({
                              pathname: PATHS.EMPATHYQUIZ_STR + value?.id,
                              state: { userId: value?.id },
                            })
                          }
                          activeclassname="selectedActive"
                        >
                          <i
                            className={`${value?.isMultipleIntel
                              ? "fa-solid fa-circle-check circlegreen pr-2"
                              : "fa fa-minus-circle circleIcon"
                              }
                              `}
                          ></i>
                          Empathy Quiz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : childData &&
            datesorting(childData)?.map((value, key) =>
              value?.id === loggedInUser?.id ? (
                <div className="PannelContent child_profiles" key={key}>
                  <div className="">
                    <div className="profile_division">
                      <div className="Profileheading">
                        <h4
                          className={`panel-title heding-title ${history.location?.state?.learnerId ===
                            value?.id || value?.id === params?.id
                            ? "active_profile"
                            : ""
                            } ${value?.id === params?.id
                              ? "active_profile_green"
                              : ""
                            }`}
                          data-toggle="collapse"
                          aria-expanded="true"
                          href={"#section_" + key}
                        >
                          <span className="Username flex">
                            <i className="fas fa-user"></i>{" "}
                            {getCapitalized(getName(value))}
                            <span className="profilecategory">
                              &nbsp;(Learner)
                            </span>
                          </span>
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>

                      <div
                        id={"section_" + key}
                        className="panel-collapse collapse show"
                      >
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname: PATHS.BASICDETAILS_STR + value.id,
                            })
                          }
                        >
                          {value?.address1 ? (
                            <p>
                              <NavLink
                                to={PATHS.BASICDETAILS_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i className="fa-solid fa-circle-check circlegreen"></i>
                                Personal Details
                              </NavLink>{" "}
                            </p>
                          ) : (
                            ""
                          )}
                          {value?.address1 == "" ||
                            value?.address1 == null ? (
                            <p>
                              <NavLink
                                to={PATHS.BASICDETAILS_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i
                                  className="fa fa-caret-right rightIcon"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-minus-circle circleIcon"
                                  aria-hidden="true"
                                ></i>
                                Personal Details
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        {/* <div className='panel-body d-flex justify-content-between py-1'>
                            {value.username ? (
                              <NavLink
                                to={PATHS.CHANGEPASSWORD_STR + value.id}
                                activeclassname='selectedActive'>
                                <i
                                  className='fa fa-caret-right rightIcon'
                                  aria-hidden='true'></i>
                                <i
                                  className='fa fa-minus-circle circleIcon'
                                  aria-hidden='true'></i>
                                Change Password
                              </NavLink>
                            ) : (
                              ""
                            )}
                            {value.username === null ? (
                              <p>
                                <NavLink
                                  to={PATHS.CREATELGOIN_STR + value.id}
                                  activeclassname='selectedActive'>
                                  <i
                                    className='fa fa-caret-right rightIcon'
                                    aria-hidden='true'></i>
                                  <i
                                    className='fa fa-minus-circle circleIcon'
                                    aria-hidden='true'></i>
                                  Create Login
                                </NavLink>
                              </p>
                            ) : (
                              ""
                            )}
                          </div> */}
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname: PATHS.SCHOOLINFO_STR + value.id,
                            })
                          }
                        >
                          {value?.schoolDetails?.school ? (
                            <p>
                              <NavLink
                                to={PATHS.SCHOOLINFO_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i className="fa-solid fa-circle-check circlegreen"></i>
                                School
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}

                          {value?.schoolDetails?.school == null ? (
                            <p>
                              <NavLink
                                to={PATHS.SCHOOLINFO_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i
                                  className="fa fa-caret-right rightIcon"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-minus-circle circleIcon"
                                  aria-hidden="true"
                                ></i>
                                Schools
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname: PATHS.ENRICHMENTINFO_STR + value.id,
                            })
                          }
                        >
                          {value?.enrichmentDetails?.length > 0 ? (
                            <p>
                              <NavLink
                                to={PATHS.ENRICHMENTINFO_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i className="fa-solid fa-circle-check circlegreen"></i>
                                Enrichment
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}
                          {value?.enrichmentDetails?.length == 0 ? (
                            <p>
                              <NavLink
                                to={PATHS.ENRICHMENTINFO_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i
                                  className="fa fa-caret-right rightIcon"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-minus-circle circleIcon"
                                  aria-hidden="true"
                                ></i>
                                Enrichment
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname: PATHS.INTERESTS_STR + value.id,
                            })
                          }
                        >
                          {value?.interests?.length > 0 ? (
                            <p>
                              <NavLink
                                to={PATHS.INTERESTS_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i className="fa-solid fa-circle-check circlegreen"></i>
                                Interests{""}
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}
                          {value?.interests?.length === 0 ? (
                            <p>
                              <NavLink
                                to={PATHS.INTERESTS_STR + value.id}
                                activeclassname="selectedActive"
                              >
                                <i
                                  className="fa fa-caret-right rightIcon"
                                  aria-hidden="true"
                                ></i>
                                <i
                                  className="fa fa-minus-circle circleIcon"
                                  aria-hidden="true"
                                ></i>
                                Interests{""}
                              </NavLink>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        {/* {value.isJourney && (
                            <div className="panel-body d-flex justify-content-between py-1">
                              <p>
                                <NavLink
                                  to={PATHS.LEARNER_JOURNEY_STR + value.id}
                                  activeclassname="selectedActive"
                                >
                                  <i className="fa-solid fa-circle-check circlegreen"></i>
                                  Learner Journey
                                </NavLink>
                              </p>
                            </div>
                          )} */}
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname:
                                PATHS.PROFILEPERSONALITY_STR + value.id,
                            })
                          }
                        >
                          {value.id ? (
                            <NavLink
                              to={PATHS.PROFILEPERSONALITY_STR + value.id}
                              onClick={() => dispatch(postData())}
                              activeclassname="selectedActive"
                            >
                              {value.personality != null ? (
                                <i className="fa-solid fa-circle-check circlegreen"></i>
                              ) : (
                                <i
                                  className="fa fa-minus-circle circleIcon"
                                  aria-hidden="true"
                                ></i>
                              )}
                              Personality Type
                            </NavLink>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname:
                                PATHS.PROFILESMARTQUIZ_STR + value?.id,
                              state: { userId: value?.id },
                            })
                          }
                        >
                          <p
                            onClick={() =>
                              history.push({
                                pathname:
                                  PATHS.PROFILESMARTQUIZ_STR + value?.id,
                                state: { userId: value?.id },
                              })
                            }
                            activeclassname="selectedActive"
                          >
                            <i
                              className={`${value?.isMultipleIntel
                                ? "fa-solid fa-circle-check circlegreen pr-2"
                                : "fa fa-minus-circle circleIcon"
                                }`}
                              aria-hidden="true"
                            ></i>
                            Multiple Intelligences
                          </p>
                        </div>
                        <div
                          className="panel-body d-flex justify-content-between py-1"
                          onClick={() =>
                            history.push({
                              pathname: PATHS.EMPATHYQUIZ_STR + value?.id,
                              state: { userId: value?.id },
                            })
                          }
                        >
                          <p
                            onClick={() =>
                              history.push({
                                pathname: PATHS.EMPATHYQUIZ_STR + value?.id,
                                state: { userId: value?.id },
                              })
                            }
                            activeclassname="selectedActive"
                          >
                            <i
                              className={`${value?.isMultipleIntel
                                ? "fa-solid fa-circle-check circlegreen pr-2"
                                : "fa fa-minus-circle circleIcon"
                                }`}
                              aria-hidden="true"
                            ></i>
                            Empathy Quiz
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}

          {loggedInUser?.role?.name === "PROVIDER" ? (
            <div className="PannelContent ProviderProfile">
              <div className="">
                <div className="profile_division">
                  <div className="Profileheading">
                    <h4 className="panel-title heding-title justify-content-between">
                      <span className="Username">
                        <i>
                          <img src={image.parents_icon} alt="..." />
                        </i>
                        {getCapitalized(getName(loggedInUser))}{" "}
                        <span className="profilecategory ml-1">
                          {" "}
                          (Course Creator)
                        </span>
                      </span>
                    </h4>
                  </div>
                  <div
                    className="panel-collapse collapse show"
                    id="multiCollapseExample2"
                  >
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname: PATHS.COURSE_STR + alluserdetails?.recordId,
                        })
                      }
                    >
                      <p>
                        <NavLink
                          to={PATHS.COURSE_STR + alluserdetails?.recordId}
                          activeclassname="selectedActive"
                          onClick={() => dispatch(showProviderQuote(false))}
                        >
                          <i className="fa-solid fa-circle-check circlegreen"></i>
                          My Courses
                        </NavLink>
                      </p>
                    </div>

                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.BASICDETAILS_STR + alluserdetails?.recordId,
                        })
                      }
                    >
                      <p>
                        <NavLink
                          to={PATHS.BASICDETAILS_STR + alluserdetails?.recordId}
                          activeclassname="selectedActive"
                          onClick={() => dispatch(showProviderQuote(false))}
                        >
                          <i className="fa-solid fa-circle-check circlegreen"></i>
                          Personal Details
                        </NavLink>
                      </p>
                    </div>
                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.CHANGEPASSWORD_STR +
                            alluserdetails?.records[0]?.id,
                        })
                      }
                    >
                      <p>
                        <NavLink
                          to={
                            PATHS.CHANGEPASSWORD_STR +
                            alluserdetails?.records[0]?.id
                          }
                          activeclassname="selectedActive"
                          onClick={() => dispatch(showProviderQuote(false))}
                        >
                          <i
                            className="fa fa-caret-right rightIcon"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-minus-circle circleIcon"
                            aria-hidden="true"
                          ></i>
                          Change Password{" "}
                        </NavLink>
                      </p>
                    </div>

                    <div
                      className="panel-body d-flex justify-content-between py-1"
                      onClick={() =>
                        history.push({
                          pathname:
                            PATHS.ABOUTUS_STR + alluserdetails?.recordId,
                        })
                      }
                    >
                      {alluserdetails?.providerDetail?.quote == null ||
                        (alluserdetails?.providerDetail?.aboutMe == null && (
                          <p>
                            <NavLink
                              to={PATHS.ABOUTUS_STR + alluserdetails?.recordId}
                              activeclassname="selectedActive"
                              onClick={() => dispatch(showProviderQuote(false))}
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              About Me
                            </NavLink>
                          </p>
                        ))}
                      {loggedInUser?.providerDetail?.quote &&
                        loggedInUser?.providerDetail?.aboutMe && (
                          <p>
                            <NavLink
                              to={PATHS.ABOUTUS_STR + alluserdetails?.recordId}
                              activeclassname="selectedActive"
                              onClick={() => dispatch(showProviderQuote(false))}
                            >
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                              About Me
                            </NavLink>
                          </p>
                        )}
                    </div>

                    {loggedInUser?.role?.name != "PROVIDER" && (
                      <div className="panel-body d-flex justify-content-between py-1">
                        {userData?.educations?.length > 0 ? (
                          <p>
                            <NavLink
                              to={
                                PATHS.EDUCATION_STR +
                                alluserdetails?.records[0]?.id
                              }
                              activeclassname="selectedActive"
                            >
                              <i className="fa-solid fa-circle-check circlegreen"></i>
                              Education
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                        {alluserdetails?.records[0]?.educations?.length ===
                          0 ? (
                          <p>
                            <NavLink
                              to={
                                PATHS.EDUCATION_STR +
                                alluserdetails?.records[0]?.id
                              }
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              Education
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}

                    {loggedInUser?.role?.name != "PROVIDER" && (
                      <div className="panel-body d-flex justify-content-between py-1">
                        {userData?.experiences?.length > 0 ? (
                          <NavLink
                            to={
                              PATHS.EXPERIENCE_STR +
                              alluserdetails?.records[0]?.id
                            }
                            activeclassname="selectedActive"
                          >
                            <i className="fa-solid fa-circle-check circlegreen"></i>
                            Experience{" "}
                          </NavLink>
                        ) : (
                          ""
                        )}
                        {alluserdetails?.records[0].experiences.length == 0 ? (
                          <p>
                            <NavLink
                              to={
                                PATHS.EXPERIENCE_STR +
                                alluserdetails?.records[0]?.id
                              }
                              activeclassname="selectedActive"
                            >
                              <i
                                className="fa fa-caret-right rightIcon"
                                aria-hidden="true"
                              ></i>
                              <i
                                className="fa fa-minus-circle circleIcon"
                                aria-hidden="true"
                              ></i>
                              Experience
                            </NavLink>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Profile;

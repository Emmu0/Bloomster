/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useHistory } from "react-router-dom";
import ParentSignin from "../base/ParentSignIn";
import { TIPS } from "../../utils/DataObjects";
import * as image from "../../resources/images";
import Link from "antd/es/typography/Link";
import {
	getToken,
	getUserDetails,
	getProfileName,
	getName,
	textTrim,
	getToolTip,
	getCapitalized,
	getUrlSegment,
	datesorting,
	dateFormatter,
	getMobileSubscriber,
} from "../../utils/helper";
import {
	getAllUsersDetail,
	GetRibbon,
	logoutAction,
	getSettingData,
	getDimensionData,
	deleteDimension,
	getJournyEnrollData,
	getStartEnrollCourses,
	getMultiQuiz,
	getRewardData,
	fetchDimMasterData,
} from "../../redux/actions/APIs";
import { getDashboard } from "../../redux/actions/Home";
import {
	isLoading,
	selectedUser,
	getLoggedInUser,
	childLogin,
	parentLoginAction,
	getHelpModal,
	defaultChild,
	widgetOpenFlag,
	resetEnroll,
	showModal,
	getAccordian,
	getprofile,
	resetStripePlans,
	resetMultiquizResponse,
	beginMultiQuiz,
	getRandomDimension,
	resetResponse,
	selectTab,
	getChildName,
	resetGuestResponse,
	parentToolsModal,
	resetLoginResponse,
	showModalObj,
	dimStore,
	homePageNode,
	coursePageNode,
	deletePageNode,
	subscriptionPageNode,
	pathwayPageNode,
	dimPageNode,
	openSetting,
	changePace,
} from "../../redux/actions";
import Spinner from "./Spinner";

import { PATHS } from "../../utils";
import { AddChild } from "./";
import UploadPhoto from "../profile/UploadPhoto";
import InfoModal1 from "../controls/InfoModal1";
import Subscription from "../subscription/Subscription";
import HolisticModal from "../controls/HolisticModal";
import GeneralSetting from "../setting/GeneralSetting";
import TimeOutModal from "../controls/TimeOutModal";
import { postData } from "../../redux/actions/PersonalityAPIs";
import DimensionsSkills from "../journey/DimensionsSkills";
import LearnerEnrolledCoursePopUp from "../journey/LearnerEnrolledCoursePopUp";
import LockPopup from "../controls/LockPopup";
import DimensionHint from "../widget/DimensionHint";
import { CHILD_NM, COURSE_ENROLLED } from "../../redux/actions/Types";
import TipsPopup from "../dimensions/course/intellectual/TipsPopup";
import InsightsPopup from "../dimensions/course/intellectual/InsightsPopup";
import DisCoverPopup from "../dimensions/course/intellectual/DiscoverPopup";
import ParentToolIdeasPopup from "../dimensions/course/intellectual/ParentToolIdeasPopup";
import ParentToolTipsPopup from "../dimensions/course/intellectual/ParentToolTipsPopup";
import ParentLevelHalfScreen from "../dimensions/course/intellectual/ParentLevelHalfScreen";
import JourneyHalfScreen from "../dimensions/course/intellectual/JourneyHalfScreen";
import CourseReview from "../dimensions/course/intellectual/CourseReview";
import AddRewardLockPopup from "../dimensions/course/intellectual/AddRewardLockPopup";
import PaymentFailed from "../subscription/PaymentFailed";
import EnrollmentConfirmation from "../controls/EnrollmentConfirmation";
import AddReward from "../setting/AddReward";
import CourseProgressPopup from "../dimensions/course/intellectual/CourseProgressPopup";
import CourseReviewHalfScreen from "../dimensions/course/intellectual/CourseReviewHalfScreen";
import { feedbackDataPostAPI } from "../../redux/actions/FeedbackAPIs";
import { ViewVideo } from "../dimensions/activity";
import ThanksPopUp from "../subscription/ThanksPopUp";
import LearnerPlan from "../learnerplan/LearnerPlan";
import ChangePacePopUp from "../learnerplan/ChangePacePopUp";
import LearnerModulePlanDetails from "../learnerplan/LearnerModulePlanDetails";
import LearnerPlanInfo from "../learnerplan/LearnerPlanInfo";
import LearnerPlanRedirectionPopUp from "./LearnerPlanRedirectionPopUp";
import WhyAPlanPopup from "../learnerplan/WhyAPlanPopup";

const Topbar = ({ dimredirect }) => {
	const dispatch = useDispatch();
	const path = useParams();
	let history = useHistory();

	const [showTips, setShowTips] = useState();
	const [tipsData, setTipsData] = useState();

	const {
		alluserdetails,
		isAuth,
		loggedInUser,
		getdimension,
		getSelectedUser,
		defaultChildData,
		holisticChartData,
		courseEnrollResponse,
		modalData,
		signinresponse,
		signupresponse,
		parentLogin,
		setting_responseOK,
		dimension,
		getResponse,
		response,
		addLearner,
		childNm,
		lockPopupData,
		enrollCourseResponse,
		getParentToolResponses,
		coursePageObj,
		homePageObj,
		dimMasterDataRes,
		pathwayPageObj,
		dimPageObj,
		deletePageObj,
		subscriptionPageObj,
		cnamePageObj,
		courseRatingView,
		viewLearnerPlanObj,
		dashboardData,
		changePaceResp
	} = useSelector((state) => state.collections);
	const [childName, setChildName] = useState();

	useEffect(() => {
		if (loggedInUser && !localStorage.getItem("defauldChildId")) {
			localStorage.setItem("defauldChildId", loggedInUser?.children[0]?.id);
		}
	}, [loggedInUser]);

	document.addEventListener("visibilitychange", function () {
		if (document.visibilityState === "visible") {
			if (
				localStorage.getItem("access_token") === null &&
				getUrlSegment().length > 0 &&
				modalData?.type !== "timeout"
			) {
				window.location.assign(PATHS.LANDINGPAGE);
			}
		}
	});

	useEffect(() => {
		if (homePageObj && loggedInUser) {
			if (homePageObj?.childId) {
				let childObj = loggedInUser?.children?.filter(
					(val) => val?.id === homePageObj?.childId
				);
				dispatch(defaultChild(childObj[0]));
				dispatch(getDashboard(childObj[0]?.id));
			} else {
				dispatch(defaultChild(loggedInUser?.children[0]));
			}
			history.push(PATHS.HOME);
			dispatch(resetLoginResponse());
			dispatch(homePageNode());
		}
	}, [homePageObj, loggedInUser]);

	useEffect(() => {
		if (pathwayPageObj?.isLearnerIdExists) {
			history.push(PATHS.LEARNER_PATHWAY_STR + pathwayPageObj?.childId);
		}

		if (loggedInUser && !pathwayPageObj?.isLearnerIdExists && pathwayPageObj) {
			history.push(PATHS.LEARNER_PATHWAY_STR + loggedInUser?.children[0]?.id);
		}

		if (pathwayPageObj && loggedInUser) {
			dispatch(resetLoginResponse());
			dispatch(pathwayPageNode());
		}
	}, [pathwayPageObj, loggedInUser]);

	useEffect(() => {
		if (dimPageObj) {
			if (dimPageObj?.dimPath) {
				let urlSegmetcorId = dimPageObj?.dimPath[2];
				history.push({
					pathname:
						PATHS.DIMENSION_STR +
						dimPageObj?.dimPath[0] +
						"/" +
						dimPageObj?.dimPath[1],
					state: { courseId: urlSegmetcorId },
					urlSegmetcorId,
				});
			} else if (dimPageObj?.dimensionName && loggedInUser && getdimension) {
				let dimObj = getdimension?.records?.filter(
					(val) =>
						val?.name?.toLowerCase() ===
						dimPageObj?.dimensionName?.toLowerCase()
				);

				history.push({
					pathname:
						PATHS.DIMENSION_STR +
						dimObj[0]?.id +
						"/" +
						loggedInUser?.children[0]?.id,
				});
				dispatch(dimPageNode());
			}
			dispatch(resetLoginResponse());
		}
	}, [dimPageObj, loggedInUser, getdimension]);

	useEffect(() => {
		if (coursePageObj && !dimMasterDataRes) {
			dispatch(fetchDimMasterData(defaultChildData?.id));
		}
	}, [coursePageObj]);

	useEffect(() => {
		if (cnamePageObj && loggedInUser) {
			if (cnamePageObj?.urlQuery) {
				let urlSegmetcorId = [];
				dimMasterDataRes?.records.map((dim, dimIndex) => {
					dim?.skills.map((skill, ind) => {
						skill?.courses.map((cor, key) => {
							if (
								cor?.name?.toLowerCase() ===
								cnamePageObj?.urlQuery?.toLowerCase()
							) {
								urlSegmetcorId?.push(cor?.id);
							}
						});
					});
				});

				history.push({
					pathname: PATHS.COURSEPAGE_STR + loggedInUser?.children[0]?.id,
					state: true,
					courseData: urlSegmetcorId,
				});
			}
			if (cnamePageObj?.isSetting) {
				history.push(PATHS.COURSEPAGE_STR + loggedInUser?.children[0]?.id);
				dispatch(
					getSettingData(
						loggedInUser?.children[0]?.id,
						loggedInUser?.children[0]?.level?.id
					)
				);
				dispatch(showModal({ type: "setting" }));
			}
			if (cnamePageObj?.isFeedback) {
				history.push(PATHS.COURSEPAGE_STR + loggedInUser?.children[0]?.id);
				dispatch(showModal({ type: "feedback" }));

				dispatch(feedbackDataPostAPI());
			}
			dispatch(resetLoginResponse());
		}
	}, [cnamePageObj, loggedInUser, dimMasterDataRes]);

	useEffect(() => {
		if (subscriptionPageObj) {
			handlePopUp();
		}
	}, [subscriptionPageObj, path]);

	useEffect(() => {
		if (window.location?.search.includes("?subscription")) {
			console.log("yyyyy", getUrlSegment[0]);
		}
	}, []);

	useEffect(() => {
		if (loggedInUser && window.location?.search.includes("?subscription")) {
			const queryParameters = new URLSearchParams(location.search);
			let childId = queryParameters.get("subscription");

			history.push(PATHS.COURSEPAGE_STR + loggedInUser?.children[0]?.id);
			dispatch(subscriptionPageNode({ childId: childId }));
		}
	}, [loggedInUser]);

	useEffect(() => {
		if (deletePageObj && deletePageObj?.isPage && signinresponse?.success) {
			history.push(PATHS.DELETEACCOUNT);
			deletePageObj.isPage = false;
			dispatch(deletePageNode());
			dispatch(resetLoginResponse());
		}
	}, [deletePageObj]);

	let showEntry = defaultChildData && defaultChildData?.showEntryPopup;

	useEffect(() => {
		if (
			signinresponse?.success &&
			alluserdetails?.success &&
			defaultChildData && dashboardData
		) {
			let userObj = alluserdetails?.records[0];
			if (userObj?.role.name === "PARENT") {
				let check = datesorting(userObj?.children);
				if (coursePageObj) {
					let userId = coursePageObj?.urlQuery[0]
						? coursePageObj?.urlQuery[0]
						: check[0].id;
					history.push(PATHS.COURSEPAGE_STR + userId);
				} else {
					//	dispatch(showModal({ type: "DimRedirect" }));
					//	history.push(PATHS.COURSEPAGE_STR + check[0].id);
					/*
					if (dashboardData?.userPlans?.length > 0) {
						history.push(PATHS.HOME);
					} else {
						history.push(PATHS.STR_LEARNER_PLAN + check[0].id)
					}
					*/
					history.push(PATHS.HOME);
				}
				if (subscriptionPageObj) {
					let userId = coursePageObj?.urlQuery[0]
						? coursePageObj?.urlQuery[0]
						: check[0].id;
					history.push(PATHS.COURSEPAGE_STR + userId);
				}
				dispatch(resetLoginResponse());
				/*
																						if (!modalData?.isCourse && !coursePageObj) {
																							if (showEntry) {
																								dispatch(showModal({ type: "DimRedirect" }));
																							} else {
																								// dispatch(showModal({ type: "Holisticgrowth" }));
																								dispatch(showModal({ type: "DimRedirect" }));
																							}
																							dispatch(resetLoginResponse());
																							//   history.push(PATHS.COURSEPAGE_STR + check[0].id);
																							if (coursePageObj || (!coursePageObj && !homePageObj)) {
																								history.push(PATHS.COURSEPAGE_STR + check[0].id);
																								dispatch(coursePageNode());
																							}
																						} else {
																							history.push(PATHS.COURSEPAGE_STR + check[0].id);
																						}
																						*/
			} else if (userObj?.role.name === "LEARNER") {
				if (showEntry) {
					dispatch(showModal({ type: "DimRedirect" }));
				} else {
					// dispatch(showModal({ type: "Holisticgrowth" }));
					dispatch(showModal({ type: "DimRedirect" }));
				}
				history.push(PATHS.COURSEPAGE_STR + userObj.id);
			}
		}
	}, [signinresponse, alluserdetails, defaultChildData, coursePageObj, dashboardData]);

	//   useEffect(() => {
	//     if (
	//       startEnrollCourses?.records &&
	//       startEnrollCourses?.records?.length > 0
	//     ) {
	//       console.log("startEnrollCourses?.records :", startEnrollCourses?.records);
	//       let filter = [];
	//       startEnrollCourses?.records?.map((dimension, dimIndex) => {
	//         dimension?.skills?.map((skill, index) => {
	//           if (skill?.name === "Conflict Resolution") {
	//             console.log("Name : ", skill, dimension);
	//             filter = {
	//               name: dimension?.name,
	//               skillIds: [
	//                 {
	//                   id: skill?.id,
	//                   value: skill?.name,
	//                   description: skill?.description,
	//                   alert: skill?.alert,
	//                 },
	//               ],
	//             };
	//           }
	//         });
	//       });
	//       let userObj = alluserdetails?.records[0];
	//       let check = datesorting(userObj?.children);
	//       history.push({
	//         pathname: PATHS.COURSEPAGE_STR + check[0].id,
	//         type: "dimCatlog",
	//         state: {
	//           data: { filter: [filter] },
	//         },
	//       });
	//     }
	//   }, [startEnrollCourses?.records]);

	const [openProfile, setOpenProfile] = useState(false);
	const [pointsData, setPointsData] = useState();
	const [openChildProfile, setOpenChildProfile] = useState(false);
	const [childId, setChildId] = useState("");
	const [childData, setChildData] = useState("");

	// const [generalUserId, setGeneralUserId] = useState(generalUserId)
	useEffect(() => {
		if (getUrlSegment()[0]) {
			dispatch(widgetOpenFlag());
		}
	}, [getUrlSegment()[0]]);

	useEffect(() => {
		if (courseEnrollResponse?.success) {
			if (getUrlSegment()[0] === "home") {
				dispatch(getDashboard(defaultChildData.id));
			}
			//  toast.info(<Success response={courseEnrollResponse} />);
			dispatch(resetEnroll());
		}
	}, [courseEnrollResponse?.success]);

	useEffect(() => {
		if (!alluserdetails && isAuth) {
			dispatch(getAllUsersDetail()).then(() => {
				dispatch(selectedUser(getUserDetails(alluserdetails, path))).then(
					() => {
						dispatch(isLoading(false));
					}
				);
			});
		}
	}, [alluserdetails]);

	useEffect(() => {
		if (holisticChartData) {
			setPointsData(holisticChartData?.records[0]);
		}
	}, [holisticChartData]);

	useEffect(() => {
		if (alluserdetails && isAuth) {
			dispatch(getLoggedInUser(alluserdetails)).then(() => { });
		}
	}, [alluserdetails]);

	useEffect(() => {
		if (!homePageObj) {
			if (loggedInUser?.role?.name === "LEARNER") {
				dispatch(defaultChild(loggedInUser));
			} else if (loggedInUser?.children.length > 0 && !path?.id) {
				if (!defaultChildData) {
					dispatch(defaultChild(loggedInUser?.children[0]));
				}
			} else if (path?.id && getSelectedUser?.role?.name === "LEARNER") {
				dispatch(defaultChild(getSelectedUser));
			} else {
				if (getSelectedUser?.role?.name === "LEARNER") {
					dispatch(defaultChild(getSelectedUser));
				}
			}
		}
	}, [getSelectedUser, path]);

	const holisticData = () => {
		dispatch(showModal({ type: "holistic" }));
		// dispatch(getHolistic(defaultChildData?.id));
	};

	useEffect(() => {
		if (defaultChildData) {
			dispatch(GetRibbon(defaultChildData?.id));
			// dispatch(getDashboard(defaultChildData.id));
		}
	}, [defaultChildData, enrollCourseResponse]);

	useEffect(() => {
		if (enrollCourseResponse) {
			dispatch(getAllUsersDetail());
		}
	}, [enrollCourseResponse]);
	useEffect(() => {
		if (loggedInUser && process.env.REACT_APP_PENDO_KEY) {
			(function (apiKey) {
				(function (p, e, n, d, o) {
					var v, w, x, y, z;
					o = p[d] = p[d] || {};
					o._q = o._q || [];
					v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
					for (w = 0, x = v.length; w < x; ++w)
						(function (m) {
							o[m] =
								o[m] ||
								function () {
									o._q[m === v[0] ? "unshift" : "push"](
										[m].concat([].slice.call(arguments, 0))
									);
								};
						})(v[w]);
					y = e.createElement(n);
					y.async = !0;
					y.src = "https://cdn.pendo.io/agent/static/" + apiKey + "/pendo.js";
					z = e.getElementsByTagName(n)[0];

					if (z && z.parentNode && y) {
						z.parentNode.insertBefore(y, z);
					}
				})(window, document, "script", "pendo");

				// This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
				// This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
				// Call this function after users are authenticated in your app and your visitor and account id values are available
				// Please use Strings, Numbers, or Bools for value types.
				pendo.initialize({
					visitor: {
						id: loggedInUser?.id, // Required if user is logged in, default creates anonymous ID
						//email: loggedInUser?.email, // Recommended if using Pendo Feedback, or NPS Email
						FullName: loggedInUser?.name, // Recommended if using Pendo Feedback
						role: loggedInUser?.role?.name,
						country: loggedInUser?.country,
						VisitorState: loggedInUser?.state,
						// You can add any additional visitor level key-values here,
						// as long as it's not one of the above reserved names.
					},

					account: {
						id: loggedInUser?.id, // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
						name: loggedInUser?.name, // Optional
						// is_paying:    // Recommended if using Pendo Feedback
						// monthly_value:// Recommended if using Pendo Feedback
						// planLevel:    // Optional
						// planPrice:    // Optional
						// creationDate: // Optional

						// You can add any additional account level key-values here,
						// as long as it's not one of the above reserved names.
					},
				});
			})(process.env.REACT_APP_PENDO_KEY);
		}
	}, []);

	const childLoading = (data) => {
		dispatch(getMultiQuiz());
		if (data?.id) {
			dispatch(childLogin(true)).then(() => {
				let access = localStorage.getItem("access_token");
				let tokenData = access.split("##");
				localStorage.setItem("access_token", tokenData[0] + "##" + data.id);
				setTimeout(() => {
					let previousState = localStorage.getItem("previousState");
					if (previousState) {
						previousState = JSON.parse(previousState);
						let uistate = previousState?.uistate;
						for (let index = 0; index < uistate?.length; index++) {
							if (uistate[index]?.userid === data?.id) {
								if (uistate[index]?.detail?.scene) {
									history.push(
										new URL(uistate[index]?.detail?.scene)?.pathname
									);
								} else {
									history.push(PATHS.COURSEPAGE_STR + data?.id);
								}
								break;
							}
						}
					} else {
						history.push(PATHS.COURSEPAGE_STR + data?.id);
					}

					dispatch(getAllUsersDetail()).then(() => {
						dispatch(
							showModal({
								type: "DimRedirect",
								signinresponse: signinresponse?.success,
								signupresponse: signupresponse?.success,
							})
						);

						dispatch(childLogin(false));
					});
				}, 1000);
			});
		}
	};

	const [accordianSetail, setAccordianSetail] = useState([]);

	useEffect(() => {
		if (signupresponse && alluserdetails) {
			let childId = signupresponse.records[0].childId;
			// dispatch(showModal({ type: "journeySkills", childId: childId }));
			//	dispatch(showModal({ type: "Holisticgrowth" }));
			setChildName(
				getCapitalized(alluserdetails?.records[0]?.children[0]?.firstName)
			);
		}
	}, [signupresponse, alluserdetails]);
	useEffect(() => {
		if (childNm) {
			setChildName(getCapitalized(childNm.firstName));
		}
	}, [childNm]);
	useEffect(() => {
		if (addLearner?.success && alluserdetails) {
			dispatch(getAllUsersDetail()).then(
				// history.push({
				// 	pathname: PATHS.COURSEPAGE_STR + addLearner?.recordId,
				// })
				history.push(PATHS.STR_LEARNER_PLAN + addLearner?.recordId)
			);
			setChildName(getCapitalized(childNm.firstName));
			// dispatch(
			//   showModal({ type: "journeySkills", childId: addLearner?.recordId })
			// );
		}
	}, [addLearner, getdimension, alluserdetails]);

	useEffect(() => {
		if (alluserdetails) {
			accordianSetail.push({
				userId: alluserdetails?.records[0]?.id,
				status: false,
			});
			alluserdetails?.records[0]?.children?.map((data, key) => {
				if (data.id) {
					accordianSetail.push({ userId: data?.id, status: false });
				}
			});
			dispatch(getAccordian(accordianSetail));
		}
	}, [alluserdetails]);
	const editProfileHandler = (id, data) => {
		dispatch(resetMultiquizResponse());
		if (!accordianSetail.every((data) => data.status == false)) {
			accordianSetail?.map((data, key) => {
				if (data.userId && data?.userId == id) {
					accordianSetail[key].status = false;
				} else {
					accordianSetail[key].status = false;
				}
			});
		}
		if (accordianSetail.every((data) => data.status == false)) {
			accordianSetail?.map((accdata) => {
				if (accdata?.userId == id && accdata.status == false) {
					accdata.status = true;
					dispatch(getprofile(accordianSetail)).then(() => {
						if (!data?.username) {
							history.push({
								pathname: PATHS.CREATELGOIN.replace(":id", id),
								state: { edit: true },
							});
						} else {
							history.push({
								pathname: PATHS.BASICDETAILS.replace(":id", id),
								state: { edit: true },
							});
						}
					});
				}
			});
		}
	};

	const editChild = (id, data, url) => {
		dispatch(beginMultiQuiz(false));
		dispatch(postData());
		dispatch(resetMultiquizResponse());
		if (!accordianSetail.every((data) => data.status == false)) {
			accordianSetail?.map((data, key) => {
				if (data.userId && data?.userId == id) {
					accordianSetail[key].status = false;
				} else {
					accordianSetail[key].status = false;
				}
			});
		}
		if (accordianSetail.every((data) => data.status == false)) {
			accordianSetail?.map((accdata) => {
				if (accdata?.userId == id && accdata.status == false) {
					accdata.status = true;
					dispatch(getprofile(accordianSetail)).then(() => {
						if (url) {
							history.push({
								pathname: url,
								// state: { edit: true },
							});
						}
					});
				}
			});
		} else {
			accordianSetail?.map((accdata) => {
				if (accdata?.userId == id && accdata.status == false) {
					accdata.status = true;
					dispatch(getprofile(accordianSetail));
				}
			});
		}
	};

	const parentLoginhandler = () => {
		dispatch(parentLoginAction(true));
	};

	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	});

	// useLayoutEffect(() => {
	//   window.scrollTo(0, 0);
	// }, [location.pathname]);

	/* Method that will fix header after a specific scrollable */
	const isSticky = (e) => {
		const header = document.querySelector(".header");
		const scrollTop = window.scrollY;
		scrollTop >= 50
			? header.classList.add("is-sticky")
			: header.classList.remove("is-sticky");
	};
	const onClickOutside1 = (data) => {
		dispatch(getHelpModal());
	};
	const _dimensionRediret = (userId) => {
		dimredirect(userId);
	};
	const dimensionLink = () => {
		if (loggedInUser?.role?.name !== "PROVIDER") {
			if (loggedInUser?.children.length === 1) {
				return (
					<li
						onClick={() => _dimensionRediret(loggedInUser?.children[0]?.id)}
						className="pointer"
					>
						<img
							src={image.dimension3d}
							alt="..."
							className="diemensionicon m-0"
						/>
					</li>
				);
			} else if (loggedInUser?.children?.length > 1) {
				return (
					<>
						<li className="position-relative pointer">
							<img
								src={image.dimension3d}
								alt="..."
								className="diemensionicon m-0"
								id="navbardropdownAct"
								data-toggle="dropdown"
							/>
							<ul className="dropdown-menu">
								{loggedInUser?.children.map((vl, ky) => (
									<li key={ky} onClick={() => _dimensionRediret(vl?.id)}>
										<span data-for={getName(vl)} data-event-off="" data-tip>
											<i className="fa-regular fa-user mr-2"></i>
											{textTrim(getName(vl), 20)}
										</span>
									</li>
								))}
							</ul>
						</li>
					</>
				);
			} else {
				return (
					<li>
						<NavLink
							to={
								PATHS.DIMENSION_STR +
								getdimension?.records[0]?.id +
								"/" +
								loggedInUser?.id
							}
						>
							<img
								src={image.dimension3d}
								alt="..."
								className="diemensionicon m-0"
							/>
						</NavLink>
					</li>
				);
			}
		}
	};

	const profileHandler = (type) => {
		setOpenChildProfile(false);
		setChildId("");
		// dispatch(getAccordian(accordianSetail));
		// dispatch(getprofile(accordianSetail));
		if (type === "open") {
			setOpenProfile(true);
		} else if (type === "close") {
			setOpenProfile(false);
		}
	};

	const childProfileHandler = (type, data) => {
		setOpenProfile(false);
		setChildId(data.id);
		setChildData(data);
		if (data.id === childId && openChildProfile === true) {
			setOpenChildProfile(false);
		} else if (type === "open") {
			setOpenChildProfile(true);
		} else if (type === "close") {
			setOpenChildProfile(false);
		}
	};

	const handlePopUp = (value) => {
		dispatch(resetStripePlans());
		if (value === "upgrade") {
			dispatch(showModal({ type: "Subscription", isDiscount: true }));
		} else {
			dispatch(showModal({ type: "Subscription" }));
		}
	};

	const handleSetting = () => {
		let userId = defaultChildData?.id;
		let levelId = defaultChildData?.level?.id;
		dispatch(parentLoginAction("verifyUser"));
		dispatch(getSettingData(userId, levelId));
		dispatch(openSetting(true));
	};

	useEffect(() => {
		if (setting_responseOK?.success && !modalData?.type) {
			dispatch(showModal({ type: "setting" }));
			dispatch(parentLoginAction());
			dispatch(showModalObj());
			dispatch(resetResponse());
		}
	}, [setting_responseOK]);

	const handleInvite = (type) => {
		dispatch(showModal({ type: type }));
	};

	const closePopup = () => {
		dispatch(showModal());
	};

	const closeSub = () => {
		dispatch(showModal());
		dispatch(subscriptionPageNode());
		localStorage.removeItem("subscriptionData");
		//	setSubscriptionData([]);
		//	setOpenNewModal(false);
		// setShowSubs(false);
	};
	const [settingUserId, setsettingUserId] = useState();
	const generalUserId = (userId) => {
		setsettingUserId(userId);
	};

	useEffect(() => {
		if (!defaultChildData) {
			dispatch(defaultChild(loggedInUser?.children[0]));
		}
	}, [defaultChildData]);

	useEffect(() => {
		if (getResponse) {
			if (defaultChildData?.id == settingUserId) {
				if (getUrlSegment()[0] === "dimensions") {
					dimension;
					let dimObj = getdimension?.records.find(
						(data) => data?.id === path?.dimId
					);
					let dimData = {
						key: dimObj.id,
						value: dimObj.name,
					};
					dispatch(selectTab(dimData)).then(() => {
						dispatch(
							deleteDimension(defaultChildData?.id, dimData, dimension, "all")
						);
					});
					dispatch(getDashboard(defaultChildData?.id));
					dispatch(getDimensionData(defaultChildData?.id, dimData, dimension));
				} else if (getUrlSegment()[0] === "home") {
					dispatch(getDashboard(defaultChildData?.id));
				} else if (getUrlSegment()[0] === "courses") {
					dispatch(getStartEnrollCourses(path?.id));
				} else if (getUrlSegment()[0] === "journey") {
					dispatch(
						getJournyEnrollData(
							defaultChildData?.id,
							defaultChildData?.level.id
						)
					);
				}
			}
		}
	}, [getResponse]);

	useEffect(() => {
		if (response && response.objectName === "Reward") {
			if (defaultChildData?.id == settingUserId) {
				if (getUrlSegment()[0] === "dimensions") {
					let dimObj = getdimension?.records.find(
						(data) => data?.id === path?.dimId
					);
					let dimData = {
						key: dimObj?.id,
						value: dimObj?.name,
					};
					if (dimData) {
						dispatch(selectTab(dimData)).then(() => {
							dispatch(
								deleteDimension(defaultChildData?.id, dimData, dimension, "all")
							);
						});
					}

					dispatch(getDimensionData(defaultChildData?.id, dimData, dimension));
				} else if (getUrlSegment()[0] === "home") {
					dispatch(getDashboard(defaultChildData?.id));
				} else if (getUrlSegment()[0] === "courses") {
					dispatch(getStartEnrollCourses(defaultChildData?.id));
				} else if (getUrlSegment()[0] === "journey") {
					dispatch(
						getJournyEnrollData(
							defaultChildData?.id,
							defaultChildData?.level.id
						)
					);
				}
			}
		}
	}, [response]);

	const closeSetting = () => {
		dispatch(showModal());
		dispatch(dimStore());
		dispatch(openSetting(false));
	};

	var containingElement = document.querySelector("#ProfileMenuPopup");
	document.body.addEventListener("click", function (event) {
		if (containingElement && containingElement.contains(event.target)) {
			if (
				event.target.classList.contains("active") ||
				event.target.classList.value == ""
			) {
				document.getElementById("ProfileMenuPopup").style.display = "none";
				jQuery("body").removeClass("modal-open");
				document
					.getElementById("ProfileMenuPopup")
					.setAttribute("aria-hidden", true);
			} else {
				jQuery("body").addClass("modal-open");
				document.getElementById("ProfileMenuPopup").style.display = "block";
				document
					.getElementById("ProfileMenuPopup")
					.setAttribute("aria-modal", true);
				document
					.getElementById("ProfileMenuPopup")
					.setAttribute("role", "dialog");
			}
		}
	});

	const ParentRedirectForm = (data) => {
		accordianSetail?.map((accdata) => {
			if (
				accdata?.userId == alluserdetails?.records[0]?.id &&
				accdata?.status == false
			) {
				accdata.status = true;
				dispatch(getprofile(accordianSetail));
			}
		});

		if (!accordianSetail.every((data) => data.status == false)) {
			accordianSetail?.map((data, key) => {
				if (data.userId && data?.userId == alluserdetails?.records[0]?.id) {
					accordianSetail[key].status = false;
				} else {
					accordianSetail[key].status = false;
				}
			});
		}
		if (accordianSetail.every((data) => data.status == false)) {
			accordianSetail?.map((accdata) => {
				if (
					accdata?.userId == alluserdetails?.records[0]?.id &&
					accdata.status == false
				) {
					accdata.status = true;
					dispatch(getprofile(accordianSetail)).then(() => {
						if (data == "personalDetails") {
							history.push({
								pathname: PATHS.BASICDETAILS_STR + alluserdetails?.recordId,
							});
						} else if (data == "education") {
							history.push({
								pathname: PATHS.EDUCATION_STR + alluserdetails?.records[0]?.id,
							});
						} else if (data == "experience") {
							history.push({
								pathname: PATHS.EXPERIENCE_STR + alluserdetails?.records[0]?.id,
							});
						} else if (data == "interest") {
							history.push({
								pathname: PATHS.INTERESTS_STR + alluserdetails?.records[0]?.id,
							});
						}
					});
				}
			});
		}
	};

	const [showSkill, setShowSkill] = useState(false);
	const [showEnrollJourney, setShowEnrollJourney] = useState(false);

	const handleCloseSKillPopup = (childOBj) => {
		if (childOBj && childOBj.isJourney) {
			history.push(PATHS.LEARNER_JOURNEY_STR + childOBj.id);
			// dispatch(getJournyData(childOBj.id, childOBj.level.id));
		} else {
			dispatch(showModal({ type: "journeySkills", childId: childOBj?.id }));
			dispatch(getChildName(childOBj?.firstName));
		}
	};

	const handleCloseEnrollPopup = (value, childId) => {
		dispatch(showModal({ type: "journeyEnroll", childId: childId }));
		setShowSkill(false);
		setShowEnrollJourney(value);
	};
	const [step, setStep] = useState(0);
	const next = (hintIndex, classname) => {
		setStep(1);
		if (classname == "WelcomePOpScreen") {
			setTipsData(TIPS[1]);
			document.body.classList.remove("first-place");
			document.body.classList.add("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "first-place") {
			setTipsData(TIPS[2]);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.add("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "third-place") {
			setTipsData(TIPS[5]);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.add("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "ninth-place") {
			setTipsData(TIPS[6]);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.add("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "sixth-place") {
			setShowTips(false);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
			localStorage.setItem("skip", true);
		}
		if (classname == "seventh-place") {
			setTipsData(TIPS[4]);
			// setShowTips(false);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.add("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "eighth-place") {
			setTipsData(TIPS[3]);
			// setShowTips(false);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.add("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.add("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "fivth-place") {
			setTipsData(TIPS[7]);
			// setShowTips(false);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.add("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "fourth-place") {
			setTipsData(TIPS[6]);
			// setShowTips(false);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.add("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.add("ninth-place");
			document.body.classList.remove("tenth-place");
		}
		if (classname == "tenth-place") {
			// setTipsData(TIPS[8]);
			setShowTips(false);
			document.body.classList.remove("first-place");
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
			document.body.classList.remove("ninth-place");
			document.body.classList.remove("tenth-place");
			localStorage.setItem("skip", true);
		}
	};
	const skip = () => {
		window.scrollTo(0, 0);
		setShowTips(false);
		document.body.classList.remove("first-place");
		document.body.classList.remove("second-place");
		document.body.classList.remove("third-place");
		document.body.classList.remove("fourth-place");
		document.body.classList.remove("fivth-place");
		document.body.classList.remove("sixth-place");
		document.body.classList.remove("seventh-place");
		document.body.classList.remove("eighth-place");
		document.body.classList.remove("ninth-place");
		document.body.classList.remove("tenth-place");
		localStorage.setItem("skip", true);
	};

	useEffect(() => {
		if (
			alluserdetails?.records[0]?.uistate &&
			loggedInUser?.role?.name == "PARENT"
		) {
			setShowTips(false);
			document.body.classList.remove("second-place");
			document.body.classList.remove("third-place");
			document.body.classList.remove("fourth-place");
			document.body.classList.remove("fivth-place");
			document.body.classList.remove("sixth-place");
			document.body.classList.remove("seventh-place");
			document.body.classList.remove("eighth-place");
		} else {
			if (localStorage.getItem("skip")) {
				document.body.classList.remove("second-place");
				document.body.classList.remove("third-place");
				document.body.classList.remove("fourth-place");
				document.body.classList.remove("fivth-place");
				document.body.classList.remove("sixth-place");
				document.body.classList.remove("seventh-place");
				document.body.classList.remove("eighth-place");
				setShowTips(false);
			} else {
				if (step === 0) {
					setTipsData(TIPS[0]);
					document.body.classList.add("WelcomePOpScreen");
					setShowTips(true);
				}
			}
		}
	}, [alluserdetails, alluserdetails?.records[0]?.uistate]);


	useEffect(() => {
		if (modalData?.type === "DimensionHintPopup") {
			setTipsData(TIPS[0]);
			document.body.classList.add("WelcomePOpScreen");
			setShowTips(true);
		}
	}, [modalData?.type])


	const currentDate = new Date();
	let nextBillDt =
		alluserdetails?.records[0]?.subscription?.nextBillDate &&
		new Date(alluserdetails?.records[0]?.subscription?.nextBillDate);

	const viewReward = () => {
		dispatch(getRewardData());
		dispatch(parentToolsModal());
	};

	const handleShowPlanModule = () => {
		dispatch(changePace());
	}

	/*
	const [openNewModal, setOpenNewModal] = useState(false);
	const [subscriptionData, setSubscriptionData] = useState();
	useEffect(() => {
		if (window.location.href.includes("?thankyou")) {
			setSubscriptionData(JSON.parse(localStorage.getItem("subscriptionData")));
			console.log("window : ", window.location);
			setOpenNewModal(true);
		}
	}, [])
	*/

	const handleRedirectPopUp = () => {
		dispatch(showModal());
		history.push(PATHS.STR_LEARNER_PLAN + defaultChildData?.id)

	}

	return (
		<>
			<header className="header">
				<div className="container-fluid topbarlandindwidth">
					<div className="vickyLogo">
						<div className="logoTitle pointer">
							<h3
								className="Logo"
								onClick={() => {
									history.push(PATHS.HOME);
								}}
							>
								{" "}
								<img
									className="internallogo"
									src={image.newvickylogo}
									alt="..."
								/>
							</h3>
						</div>

						{getToken() && (
							<div className="menuList ">
								<ul className="d-flex align-items-center">
									<li className="betaversion">
										{/* <span>
											Beta <span>3.0</span>
										</span> */}

										{alluserdetails?.records[0]?.subscription &&
											alluserdetails?.records[0].role.name === "PARENT" &&
											nextBillDt &&
											nextBillDt > currentDate &&
											!alluserdetails.records[0].subscription.cardNumber &&
											!getMobileSubscriber(
												alluserdetails.records[0].subscription
											) && (
												<>


													<p className="free_trail_text">
														Your free trial ends on{" "}
														{dateFormatter(
															alluserdetails.records[0].subscription?.nextBillDate
														)}
														{/* <a href="#" onClick={() => handlePopUp()}>
                            Click here
                          </a>{" "}
                          to subscribe. */}
													</p>
													<p>
														<Link to="" onClick={() => handlePopUp("upgrade")}>Upgrade Now</Link>	to get a 25% discount on your first bill payment.</p>
												</>
											)}
									</li>
									{/*{loggedInUser?.role?.name === "PARENT" && (
										<li className="Subscribe_topbarbtn pointer">
											<h4 onClick={() => handlePopUp()}> Subscribe</h4>
										</li>
									)}*/}


									{/* {loggedInUser?.role?.name !== "PROVIDER" && (
                    <>
                      <li
                        className="HolisticView"
                        onClick={() => holisticData()}
                      >
                        <img src={image.Holisticbullseyes} alt="" />
                      </li>
                      {dimensionLink()}
                    </>
                  )} */}
									<li className="position-relative m-0">
										<div className="nav-item dropdown clModal">
											<span
												className="nav-link dropdown-toggle px-0"
												data-toggle="modal"
												data-target="#ProfileMenuPopup"
												data-bs-toggle="modal"
												data-bs-auto-close="false"
												aria-expanded="false"
												onClick={() => {
													dispatch(showModal());
													profileHandler("close");
												}}
											>
												{loggedInUser && loggedInUser?.imageUrl ? (
													<img
														className="rounded-circle"
														src={loggedInUser?.imageUrl}
														alt="..."
													/>
												) : loggedInUser?.firstName ? (
													<> {getProfileName(loggedInUser)}</>
												) : (
													""
												)}
											</span>

											<div className="ProfileMenuPopup">
												<div
													className="modal fade"
													id="ProfileMenuPopup"
													role="dialog"
												>
													<div className="modal-dialog modal-lg">
														<div className="modal-content ProfilepopupWidth">
															<div className="modal-body Subject_Curriculam p-0 border-0">
																<div className="PProfilePoup">
																	<div className="PpUser">
																		<div className="PProimage ">
																			<UploadPhoto topbarSelect={true} />
																		</div>
																		<span
																			className="editPProIcon active"
																			onClick={() =>
																				editProfileHandler(
																					loggedInUser?.id,
																					loggedInUser
																				)
																			}
																		>
																			<i className="fa-light fa-pencil active"></i>
																		</span>
																		<div className="PPUserRInfo">
																			{getName(loggedInUser)?.length > 26 ? (
																				<div id={getName(loggedInUser)}>
																					{getToolTip(
																						getCapitalized(
																							getName(loggedInUser),
																							25
																						)
																					)}
																				</div>
																			) : (
																				""
																			)}
																			<h3
																				data-for={getName(loggedInUser)}
																				data-event-off=""
																				data-tip
																			>
																				{textTrim(
																					getCapitalized(
																						getName(loggedInUser),
																						25
																					)
																				) &&
																					textTrim(
																						getCapitalized(
																							getName(loggedInUser),
																							25
																						)
																					)}
																			</h3>
																			<p>
																				{textTrim(loggedInUser?.username, 35) &&
																					textTrim(loggedInUser?.username, 35)}
																			</p>
																		</div>

																		<div className="PPuserDtl">
																			<div className="PPUserRelatedSet">
																				{loggedInUser?.username === "" ||
																					loggedInUser?.username === null ? (
																					<div
																						className=" text-left"
																						title="Create Login"
																					>
																						<NavLink
																							className="d-flex align-items-center"
																							to={
																								PATHS.CREATELGOIN_STR +
																								loggedInUser.id
																							}
																						// key={Math.random()}
																						>
																							<span className="ProSettng">
																								<i className="fa-solid fa-key"></i>
																							</span>
																							Create Login
																						</NavLink>
																					</div>
																				) : (
																					<div
																						className=" text-left"
																						title="Change Password"
																					>
																						<NavLink
																							className="d-flex align-items-center"
																							to={
																								PATHS.CHANGEPASSWORD_STR +
																								loggedInUser?.id
																							}
																						// key={Math.random()}
																						>
																							<span className="ProSettng">
																								<i className="fa-solid fa-key"></i>
																							</span>
																							Change Password
																						</NavLink>
																					</div>
																				)}
																				<div
																					className=" text-left"
																					onClick={() =>
																						dispatch(
																							logoutAction(alluserdetails)
																						)
																					}
																				>
																					<span
																						title="Sign Out"
																						className="ProSettng"
																					>
																						<i className="fa-solid fa-arrow-right-from-bracket"></i>
																					</span>
																					Sign out
																				</div>
																			</div>
																			<div className="PPUserprofile dropdown-toggle">
																				{openProfile ? (
																					<h5
																						className="flex"
																						onClick={() =>
																							profileHandler("close")
																						}
																					>
																						<span className="profileClass">
																							{" "}
																							<img
																								className="profileClass"
																								src={image.bar_menu}
																								alt=""
																							/>{" "}
																							My Profile{" "}
																						</span>
																						<span>
																							<i className="fa-solid fa-chevron-right"></i>
																						</span>{" "}
																					</h5>
																				) : (
																					<h5
																						className="flex"
																						onClick={() =>
																							profileHandler("open")
																						}
																					>
																						<span className="profileClass">
																							{" "}
																							<img
																								className="profileClass"
																								src={image.bar_menu}
																								alt=""
																							/>{" "}
																							My Profile{" "}
																						</span>
																						<span>
																							<i className="fa-solid fa-chevron-right"></i>
																						</span>{" "}
																					</h5>
																				)}
																				{openProfile &&
																					loggedInUser?.role?.name ===
																					"PARENT" && (
																						<div className="Prifg">
																							<ul>
																								<li
																									activeclassname="selectedActive"
																									className="link active"
																									onClick={() => {
																										ParentRedirectForm(
																											"personalDetails"
																										);
																									}}
																								>
																									<span className="active">
																										<img
																											className="active"
																											src={image.notebook}
																											alt=""
																										/>
																										Personal Details
																									</span>
																								</li>
																								<li
																									activeclassname="selectedActive"
																									className="link active"
																									onClick={() => {
																										ParentRedirectForm(
																											"education"
																										);
																									}}
																								>
																									<span className="active">
																										<img
																											className="active"
																											src={image.mortarboard}
																											alt=""
																										/>{" "}
																										Education
																									</span>
																								</li>
																								<li
																									activeclassname="selectedActive"
																									className="link active"
																									onClick={() => {
																										ParentRedirectForm(
																											"experience"
																										);
																									}}
																								>
																									<span className="active">
																										<img
																											className="active"
																											src={image.experience}
																											alt=""
																										/>{" "}
																										Experience
																									</span>
																								</li>
																								<li
																									activeclassname="selectedActive"
																									className="link active"
																									onClick={() => {
																										ParentRedirectForm(
																											"interest"
																										);
																									}}
																								>
																									<span className="active">
																										<img
																											className="active"
																											src={image.addintresr}
																											alt=""
																										/>
																										Interests
																									</span>
																								</li>
																							</ul>
																						</div>
																					)}

																				{openProfile &&
																					loggedInUser?.role?.name ===
																					"LEARNER" && (
																						<div className="Prifg">
																							<ul>
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.BASICDETAILS_STR +
																											loggedInUser?.id
																										}
																									>
																										{/* <i
                                                      className='fa fa-minus-circle circleIcon mr-2'
                                                      aria-hidden='true'></i> */}
																										<img
																											src={image.notebook}
																											alt=""
																										/>{" "}
																										Personal Details
																									</NavLink>
																								</li>
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.SCHOOLINFO_STR +
																											loggedInUser?.id
																										}
																									>
																										{/* <i
                                                      className='fa fa-minus-circle circleIcon mr-2'
                                                      aria-hidden='true'></i> */}
																										<img
																											src={image.enrichment}
																											alt=""
																										/>{" "}
																										School
																									</NavLink>
																								</li>
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.ENRICHMENTINFO_STR +
																											loggedInUser?.id
																										}
																									>
																										{/* <i
                                                      className='fa fa-minus-circle circleIcon mr-2'
                                                      aria-hidden='true'></i> */}
																										<img
																											src={image.enrichmentIcon}
																											alt=""
																										/>{" "}
																										Enrichment
																									</NavLink>
																								</li>

																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.INTERESTS_STR +
																											loggedInUser?.id
																										}
																									>
																										{/* <i
                                                      className='fa fa-minus-circle circleIcon mr-2'
                                                      aria-hidden='true'></i> */}
																										<img
																											src={image.addintresr}
																											alt=""
																										/>{" "}
																										Interests
																									</NavLink>
																								</li>

																								{/* {loggedInUser.isJourney && (
                                                  <li>
                                                    <NavLink
                                                      activeclassname="selectedActive"
                                                      to={
                                                        PATHS.LEARNER_JOURNEY_STR +
                                                        loggedInUser?.id
                                                      }
                                                    >
                                                      <img
                                                        src={image.compassicon}
                                                        alt=""
                                                      />
                                                      Learner Journey
                                                    </NavLink>
                                                  </li>
                                                )} */}

																								{/** Start here */}
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.PROFILEPERSONALITY_STR +
																											loggedInUser?.id
																										}
																									>
																										{/* <i
                                                      className='fa fa-minus-circle circleIcon mr-2'
                                                      aria-hidden='true'></i> */}
																										<img
																											src={
																												image.bussinessdiagram
																											}
																											alt=""
																										/>{" "}
																										Personality Type
																									</NavLink>
																								</li>
																								{/** End here */}
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.PROFILESMARTQUIZ_STR +
																											loggedInUser?.id
																										}
																									>
																										<img
																											src={
																												image.multipleintellQuiz
																											}
																											alt=""
																										/>{" "}
																										Multiple Intelligences
																									</NavLink>
																								</li>
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.EMPATHYQUIZ_STR +
																											loggedInUser?.id
																										}
																									>
																										<img
																											src={image.empathyicon}
																											alt=""
																										/>{" "}
																										Empathy Check
																									</NavLink>
																								</li>
																							</ul>
																						</div>
																					)}

																				{openProfile &&
																					loggedInUser?.role?.name ===
																					"PROVIDER" && (
																						<div className="Prifg">
																							<ul>
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.COURSE_STR +
																											alluserdetails?.recordId
																										}
																									>
																										<img
																											src={image.courses}
																											alt=""
																										/>{" "}
																										My Courses
																									</NavLink>
																								</li>
																								<li>
																									<NavLink
																										to={
																											PATHS.BASICDETAILS_STR +
																											alluserdetails?.recordId
																										}
																										activeclassname="selectedActive"
																									>
																										{/* <i
                                                    className="fa fa-minus-circle circleIcon mr-2"
                                                    aria-hidden="true"
                                                  ></i> */}
																										<img
																											src={image.notebook}
																											alt=""
																										/>
																										Personal Details
																									</NavLink>
																								</li>
																								<li>
																									<NavLink
																										activeclassname="selectedActive"
																										to={
																											PATHS.ABOUTUS_STR +
																											alluserdetails?.recordId
																										}
																									>
																										<img
																											src={image.notebook}
																											alt=""
																										/>{" "}
																										About Me
																									</NavLink>
																								</li>
																							</ul>
																						</div>
																					)}
																				{loggedInUser?.role?.name ===
																					"PARENT" && (
																						<h5
																							className=" flex active"
																							onClick={() => handleSetting()}
																						>
																							<span className="active">
																								<img
																									src={image.settingicons}
																									alt=""
																								/>{" "}
																								Settings
																							</span>
																						</h5>
																					)}
																				{loggedInUser?.role?.name ===
																					"PARENT" && (
																						<h5
																							className=" flex active"
																							onClick={() => handlePopUp()}
																						>
																							<span className="active">
																								<img
																									src={image.subscription}
																									alt=""
																								/>{" "}
																								Subscribe Now
																							</span>
																						</h5>
																					)}
																				{loggedInUser?.role?.name ===
																					"PARENT" && (
																						<h5
																							className=" flex active"
																							onClick={() => handleInvite("InviteParent")}
																						>
																							<span className="active">
																								<img
																									src={image.invite_parents_icon}
																									alt=""
																									className="active"
																								/>{" "}
																								Invite a Parent
																							</span>
																						</h5>
																					)}
																				{loggedInUser?.role?.name ===
																					"PARENT" && (
																						<h5
																							className=" flex active"
																							onClick={() => handleInvite("Invite")}
																						>
																							<span className="active">
																								<img
																									src={image.inviteafriend}
																									alt=""
																									className="active"
																								/>{" "}
																								Invite a Friend
																							</span>
																						</h5>
																					)}
																			</div>

																			<div className="OtherCProfile">
																				{loggedInUser?.role?.name ===
																					"PARENT" && (
																						<h5
																							className="flex"
																							style={{ cursor: "auto" }}
																						>
																							<span>
																								<img
																									src={image.learnerProfiles}
																									alt=""
																								/>{" "}
																								Learner Profile{" "}
																							</span>
																						</h5>
																					)}
																				{loggedInUser?.children.map(
																					(data, key) => (
																						<div
																							className={`OtherChPPLstitm ${data.id == childId
																								? "activepchild"
																								: ""
																								}`}
																							key={key}
																						>
																							<div
																								className="OchPPlisting"
																								onClick={() => {
																									childProfileHandler(
																										"open",
																										data
																									);
																								}}
																							>
																								<div className="OchpListimg">
																									{data?.imageUrl ? (
																										<img
																											className="rounded-circle"
																											src={data?.imageUrl}
																											alt="..."
																										/>
																									) : (
																										<span className="ProfileChild">
																											{getProfileName(data)}
																										</span>
																									)}
																								</div>
																								<div className="OchpListdtl w-100">
																									<span className="flex">
																										<span className="tooltip1">
																											{data?.firstName ? (
																												getCapitalized(
																													textTrim(
																														getName(data)
																													)
																												)
																											) : (
																												<Spinner />
																											)}
																										</span>
																										<span
																											onClick={() =>
																												editChild(data.id, data)
																											}
																										>
																											<i className="fa-solid fa-chevron-right"></i>
																										</span>
																									</span>
																								</div>
																							</div>
																							{openChildProfile && (
																								<div className="Prifg childpersonalprofile">
																									<ul>
																										<li className="gotochildprofile">
																											<span
																												className="selectedActive d-flex"
																												onClick={() =>
																													childLoading(
																														childData
																													)
																												}
																											>
																												<i className="fa-solid fa-circle-user mr-2"></i>
																												Go to{" "}
																												{getCapitalized(
																													childData?.firstName
																												)}
																												's Profile
																											</span>
																										</li>
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.BASICDETAILS_STR +
																													childId
																												)
																											}
																										>
																											<span
																												activeclassname="selectedActive"
																											// to={
																											//   PATHS.BASICDETAILS_STR +
																											//   childId
																											// }
																											>
																												<img
																													src={image.notebook}
																													alt=""
																												/>{" "}
																												Personal Details
																											</span>
																										</li>
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.INTERESTS_STR +
																													childId
																												)
																											}
																										>
																											<span
																												activeclassname="selectedActive"
																											// to={
																											//   PATHS.INTERESTS_STR +
																											//   childId
																											// }
																											>
																												<img
																													src={image.invite_parents_icon}
																													alt=""
																												/>{" "}
																												Invite a Parent
																											</span>
																										</li>

																										{childData?.username ===
																											"" ||
																											childData?.username ===
																											null ? (
																											<li
																												onClick={() =>
																													editChild(
																														childData.id,
																														data,
																														PATHS.CREATELGOIN_STR +
																														childId
																													)
																												}
																											>
																												<span
																													activeclassname="selectedActive"
																												// to={
																												//   PATHS.CREATELGOIN_STR +
																												//   childId
																												// }
																												>
																													<img
																														src={image.login}
																														alt=""
																													/>{" "}
																													Create Login
																												</span>
																											</li>
																										) : (
																											<li
																												onClick={() =>
																													editChild(
																														childData.id,
																														data,
																														PATHS.CHANGEPASSWORD_STR +
																														childId
																													)
																												}
																											>
																												<span
																													activeclassname="selectedActive"
																												// to={
																												//   PATHS.CHANGEPASSWORD_STR +
																												//   childId
																												// }
																												>
																													<span className="ProSettng">
																														<i className="fa-solid fa-key mr-2"></i>
																													</span>{" "}
																													Change Password
																												</span>
																											</li>
																										)}
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.SCHOOLINFO_STR +
																													childId
																												)
																											}
																										>
																											<span
																												activeclassname="selectedActive"
																											// to={
																											//   PATHS.SCHOOLINFO_STR +
																											//   childId
																											// }
																											>
																												<img
																													src={image.enrichment}
																													alt=""
																												/>{" "}
																												School
																											</span>
																										</li>
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.ENRICHMENTINFO_STR +
																													childId
																												)
																											}
																										>
																											<span
																												activeclassname="selectedActive"
																											// to={
																											//   PATHS.ENRICHMENTINFO_STR +
																											//   childId
																											// }
																											>
																												<img
																													src={
																														image.enrichmentIcon
																													}
																													alt=""
																												/>{" "}
																												Enrichment
																											</span>
																										</li>
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.INTERESTS_STR +
																													childId
																												)
																											}
																										>
																											<span
																												activeclassname="selectedActive"
																											// to={
																											//   PATHS.INTERESTS_STR +
																											//   childId
																											// }
																											>
																												<img
																													src={image.addintresr}
																													alt=""
																												/>{" "}
																												Interests
																											</span>
																										</li>

																										{/* <li
                                                      onClick={() =>
                                                        handleCloseSKillPopup(
                                                          childData
                                                        )
                                                      }
                                                    >
                                                      <span activeclassname="selectedActive">
                                                        <img
                                                          src={
                                                            image.compassicon
                                                          }
                                                          alt=""
                                                        />{" "}
                                                        Learner Journey
                                                      </span>
                                                    </li> */}
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.PROFILEPERSONALITY_STR +
																													childId
																												)
																											}
																										>
																											<span
																												activeclassname="selectedActive"
																											// to={
																											//   PATHS.PROFILEPERSONALITY_STR +
																											//   childId
																											// }
																											>
																												<img
																													src={
																														image.bussinessdiagram
																													}
																													alt=""
																												/>{" "}
																												Personality Type
																											</span>
																										</li>
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.PROFILESMARTQUIZ_STR +
																													childId
																												)
																											}
																										>
																											<span activeclassname="selectedActive">
																												<img
																													src={
																														image.multipleintellQuiz
																													}
																													alt=""
																												/>{" "}
																												Multiple Intelligences
																											</span>
																										</li>
																										<li
																											onClick={() =>
																												editChild(
																													childData.id,
																													data,
																													PATHS.EMPATHYQUIZ_STR +
																													childId
																												)
																											}
																										>
																											<span activeclassname="selectedActive">
																												<img
																													src={
																														image.empathyicon
																													}
																													alt=""
																												/>{" "}
																												Empathy Check
																											</span>
																										</li>
																									</ul>
																								</div>
																							)}
																						</div>
																					)
																				)}
																				{loggedInUser?.parent && (
																					<div className="OtherChPPLstitm">
																						<div className="OchPPlisting">
																							<div className="OchpListimg">
																								{loggedInUser?.parent
																									?.imageUrl ? (
																									<img
																										onClick={() =>
																											parentLoginhandler(
																												loggedInUser?.parent
																											)
																										}
																										className="rounded-circle"
																										src={
																											loggedInUser?.parent
																												?.imageUrl
																										}
																										alt="..."
																									/>
																								) : (
																									<span
																										onClick={() =>
																											parentLoginhandler(
																												loggedInUser?.parent
																											)
																										}
																										className="ProfileChild"
																									>
																										{getProfileName(
																											loggedInUser?.parent
																										)}
																									</span>
																								)}
																							</div>
																							<div
																								className="OchpListdtl w-100"
																								onClick={() =>
																									parentLoginhandler(
																										loggedInUser?.parent
																									)
																								}
																							>
																								<p className="flex">
																									<span>
																										{loggedInUser?.parent
																											?.firstName ? (
																											getCapitalized(
																												getName(
																													loggedInUser?.parent
																												)
																											)
																										) : (
																											<Spinner />
																										)}
																									</span>
																								</p>
																							</div>
																						</div>
																					</div>
																				)}
																				{loggedInUser?.role?.name ===
																					"PROVIDER" && (
																						<a
																							className="dropdown- icon_color"
																							onClick={() =>
																								history.push(
																									PATHS.COURSE_STR +
																									loggedInUser?.id
																								)
																							}
																							href={() => false}
																						>
																							<i className="icon icon-v2-solution-new mr-2" />{" "}
																							My Courses
																						</a>
																					)}
																			</div>
																			{loggedInUser?.role?.name ===
																				"PARENT" && (
																					<div className="PPAddNewChild">
																						<AddChild data={true} />
																					</div>
																				)}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul >
							</div >
						)}
					</div >
				</div >
			</header >
			{modalData?.type === "holistic" && <HolisticModal data={pointsData} />}
			<InfoModal1 onClickOutside1={onClickOutside1} />
			{/* {modalData?.type === "Subscribepopup" && (
        <SubscribePopUp
          handleSubscribe={handleSubscribe}
          closePopup={closePopup}
        />
      )} */}
			{modalData?.type === "timeout" && <TimeOutModal />}
			{modalData?.type === "Subscription" && <Subscription close={closeSub} />}
			{parentLogin && parentLogin && <ParentSignin />}
			{
				modalData?.type === "setting" && (
					<GeneralSetting
						closeSetting={closeSetting}
						generalUserId={generalUserId}
						settingUserId={settingUserId}
					/>
				)
			}
			{
				modalData?.type === "journeySkills" && (
					<DimensionsSkills
						handleCloseEnrollPopup={handleCloseEnrollPopup}
						childName={getCapitalized(defaultChildData?.firstName)}
					/>
				)
			}
			{
				modalData?.type === "journeyEnroll" && (
					<LearnerEnrolledCoursePopUp
						childName={getCapitalized(defaultChildData?.firstName)}
					/>
				)
			}

			{
				defaultChildData?.isSubscriber && lockPopupData?.isLocked && (
					<LockPopup type={lockPopupData?.type} />
				)
			}
			{
				alluserdetails &&
				alluserdetails.records[0].id &&
				alluserdetails.records[0].role.name == "PARENT" &&
				!alluserdetails.records[0].isActive &&
				getUrlSegment()[0] !== "deleteaccount" &&
				(showTips || localStorage.getItem("skip") === "false") && (
					<></>
					// <DimensionHint skip={skip} data={tipsData} next={next} />
				)
			}
			{
				alluserdetails &&
				alluserdetails.records[0].id &&
				alluserdetails.records[0].role.name == "LEARNER" &&
				!alluserdetails.records[0].uistate &&
				getUrlSegment()[0] !== "deleteaccount" &&
				(showTips || localStorage.getItem("skip") === "false") && (
					<></>
					// <DimensionHint skip={skip} data={tipsData} next={next} />
				)
			}

			{modalData?.type === "DimensionHintPopup" && <DimensionHint skip={skip} data={tipsData} next={next} />}

			{
				getParentToolResponses &&
				getParentToolResponses?.isTips &&
				!getParentToolResponses?.data?.isEnrolled &&
				alluserdetails.records[0].role.name !== "PROVIDER" && (
					<TipsPopup data={getParentToolResponses?.data} />
				)
			}
			{
				getParentToolResponses &&
				getParentToolResponses?.isTips &&
				(getParentToolResponses?.data?.isEnrolled ||
					alluserdetails.records[0].role.name == "PROVIDER") && (
					<ParentToolIdeasPopup data={getParentToolResponses?.data} />
				)
			}
			{
				getParentToolResponses &&
				getParentToolResponses?.isInsights &&
				!getParentToolResponses?.data?.isEnrolled &&
				alluserdetails.records[0].role.name !== "PROVIDER" && (
					<InsightsPopup data={getParentToolResponses?.data} />
				)
			}
			{
				getParentToolResponses &&
				getParentToolResponses?.isInsights &&
				(getParentToolResponses?.data?.isEnrolled ||
					alluserdetails.records[0].role.name == "PROVIDER") && (
					<ParentToolTipsPopup data={getParentToolResponses?.data} />
				)
			}
			{
				getParentToolResponses && getParentToolResponses?.isDiscover && (
					<DisCoverPopup data={getParentToolResponses?.data} />
				)
			}

			{
				getParentToolResponses && getParentToolResponses?.isParentDiscover && (
					<ParentLevelHalfScreen data={getParentToolResponses?.data} />
				)
			}
			{
				getParentToolResponses && getParentToolResponses?.isJourneyScreen && (
					<JourneyHalfScreen data={getParentToolResponses?.data} />
				)
			}
			{
				getParentToolResponses && getParentToolResponses?.isCourseReview && (
					<CourseReview data={getParentToolResponses?.data} />
				)
			}

			{
				getParentToolResponses && getParentToolResponses?.isConfirmation && (
					<EnrollmentConfirmation data={getParentToolResponses?.data} />
				)
			}

			{
				getParentToolResponses && getParentToolResponses?.isShowReward && (
					<AddReward
						object={getParentToolResponses?.data}
						closeReward={viewReward}
					/>
				)
			}

			{
				getParentToolResponses && getParentToolResponses?.isAddViewReward && (
					<AddRewardLockPopup data={getParentToolResponses?.data} />
				)
			}

			{
				getParentToolResponses &&
				getParentToolResponses?.isCourseProgressShow && <CourseProgressPopup />
			}

			{
				getParentToolResponses && getParentToolResponses?.isSensitiveCourse && (
					<ViewVideo close={viewReward} data={getParentToolResponses?.data} />
				)
			}

			{
				courseRatingView && courseRatingView?.type === "ShowCourseRating" && (
					<CourseReviewHalfScreen />
				)
			}

			{
				changePaceResp?.type === "changePacePopup" && (
					<ChangePacePopUp handleShowPlanModule={handleShowPlanModule} />
				)
			}

			{
				changePaceResp?.type === "showModuleDetail" && (
					<LearnerModulePlanDetails handleShowPlanModule={handleShowPlanModule} />
				)
			}
			{console.log('signupresponse@@@ 3333 : ', modalData, signupresponse)}
			{modalData?.type === "learnerPlanInfo" && <LearnerPlanInfo closePopup={closePopup} />}

			{
				modalData?.type === "LearnerPlanRedirectionPopUp" && (<LearnerPlanRedirectionPopUp handleRedirectPopUp={handleRedirectPopUp} />)
			}

			{modalData?.type === "WhyAPlanPopup" && <WhyAPlanPopup closePopup={closePopup} />}


			{/* {openNewModal &&
				<>
					<div className="halfPagePOpup SchoolActivityPopup subscriptionwrapcard">
						<ThanksPopUp data={subscriptionData?.summaryPlanData}
							existingSubscription={subscriptionData?.existingSubscription}
							close={closeSub}
						/>
					</div>
				</>
			} */}
		</>
	);
};

export default Topbar;

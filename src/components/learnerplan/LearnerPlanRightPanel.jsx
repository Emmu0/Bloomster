import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import {
	addDaysInDate,
	addOneDayInDate,
	calculateEndDate,
	calculateSeactionEndDate,
	getCurrentDateInFormat,
	getDateByAddDays,
	textTrim,
} from "../../utils/helper";
import {
	ShimmerCategoryItem,
	ShimmerPostItem,
	ShimmerSimpleGallery,
	ShimmerText,
} from "react-shimmer-effects";
import NavLink from "antd/es/typography/Link";
import {
	getCourseDetails,
	getDashboard,
	showOverallModal,
} from "../../redux/actions/Home";
import { useState } from "react";
import {
	useHistory,
	useLocation,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "../Home";
import {
	convertedNumber,
	dateFormateBycCourseDuration,
	dateFormatterWithMonthName,
	dateLongFormat,
	getCapitalized,
	getSequnceSort,
} from "../../utils/helper";
import { PATHS } from "../../utils";
import {
	changePace,
	setClassSchedule,
	setCourseModal,
	showModal,
} from "../../redux/actions";
import ReactTooltip from "react-tooltip";
import DeletePlanActivities from "./DeletePlanActivities";
import { param } from "jquery";
import {
	createLearnerPlan,
	getDimensionUpdatePlan,
	getUpdateLearnerPlan,
	updateLearnerPlan,
} from "../../redux/actions/APIs";

const LearnerPlanRightPanel = ({ screen,
	selectedSitting,
	selectedMinutes,
	dimensionTree,
	userDate,
	selectedOption,
	handleMoreOptions,
	pathwayTree,
	coursesArr,
	getJourneyId,
	handleRemoveTagDimSkillCourse,
	dimSkillCoursePlanTree,
	getCourseId,
	handleRemoveDimensionSkillCourse,
	handlePopUpOpen,
	getDImSkillData,
	showPathwayShimmar,
	handleNumberOfCourses,
	editPlan,
	setEditPlan,
	setCoursePlanTree,
	coursePlanTree
}) => {
	console.log("showPathwayShimmar : ", showPathwayShimmar);
	const dispatch = useDispatch();
	const history = useHistory();
	const params = useParams();
	const location = useLocation();
	const currentDate = new Date();

	const {
		defaultChildData,
		learnerPlanResponse,
		response,
		getDimJournyCoursesResponse,
		getNewPlanResponse,
		signupresponse,
	} = useSelector((state) => state.collections);
	const { dashboardData, showoverModal, courseDetails } = useSelector(
		(state) => state.home
	);

	const [totalSelectedCourse, setTotalSelectedCourse] = useState(0);
	const [loader, setLoader] = useState(false);
	const [totalLevel, setTotalLevel] = useState(5);
	const [learnerPlanData, setLearnerPlanData] = useState([]);
	const [refreshShimmar, setRefreshShimmar] = useState(false);
	const [myCoursePlan, setMyCoursePlan] = useState(dashboardData?.userPlans?.courses);

	useEffect(() => {
		if (courseDetails) {
			courseDetails.isLearnerRightPanel = true;
			courseDetails.totalLevel = totalLevel;
			dispatch(setCourseModal(courseDetails));
		}
	}, [courseDetails]);

	useEffect(() => {
		if (dimensionTree) {
			let total = 0;
			dimensionTree?.map((dim, index) => {
				dim?.skills?.map((skill, key) => {
					skill?.courses?.map((course, count) => {
						total++;
					});
				});
			});
			setTotalSelectedCourse(total);
		}
	}, [dimensionTree]);

	const getLearnerName = () => {
		return getCapitalized(defaultChildData?.firstName);
	};

	const courseDetailPage = (obj) => {
		setTotalLevel(obj?.totalLevel);
		dispatch(getCourseDetails(obj?.id, defaultChildData.id));
	};

	const handleShowPlanModule = (courses) => {
		dispatch(changePace({ type: "showModuleDetail", courseName: courses }));
	};

	const handleSeatingsDate = (seat, time, corInd, modeInd) => {
		let getMod = corInd * 4 + modeInd;
		if (time == 15) {
			if ([1, 2, 4].includes(seat)) {
				return 28 / seat;
			} else if (seat == 3) {
				if (getMod % 3 === 0) {
					return 12;
				} else {
					return 8;
				}
			} else if (seat == 5) {
				if ([1, 6, 11, 16, 21, 26, 31, 36, 41].includes(getMod)) {
					return 4;
				} else {
					return 6;
				}
			} else if (seat == 6) {
				if (
					[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40].includes(getMod)
				) {
					return 4;
				} else {
					return 5;
				}
			} else if (seat == 7) {
				return 4;
			}
		} else if (time == 30 || time == 45) {
			if ([1, 2].includes(seat)) {
				return 14 / seat;
			} else if (seat == 3) {
				if (
					[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40].includes(getMod)
				) {
					return 2;
				} else {
					return 6;
				}
			} else if (seat == 4) {
				if (getMod % 2 === 1) {
					return 2;
				} else {
					return 5;
				}
			} else if (seat == 5) {
				if (
					[
						3, 5, 8, 10, 13, 15, 18, 20, 23, 25, 28, 30, 33, 35, 38, 40,
					].includes(getMod)
				) {
					return 4;
				} else {
					return 2;
				}
			} else if (seat == 6) {
				if (getMod % 3 === 0) {
					return 3;
				} else {
					return 2;
				}
			} else if (seat == 7) {
				return 2;
			}
		} else if (time == 60) {
			if (seat == 1) {
				return 7;
			}
			if (seat == 2) {
				if (getMod % 2 === 1) {
					return 1;
				} else {
					return 6;
				}
			} else if (seat == 3) {
				if (getMod % 3 === 0) {
					return 5;
				} else {
					return 1;
				}
			} else if (seat == 4) {
				if (getMod % 4 === 0) {
					return 4;
				} else {
					return 1;
				}
			} else if (seat == 5) {
				if (getMod % 5 === 0) {
					return 3;
				} else {
					return 1;
				}
			} else if (seat == 6) {
				if (getMod % 6 === 0) {
					return 2;
				} else {
					return 1;
				}
			} else if (seat == 7) {
				return 1;
			}
		}
	};

	const handleCalculateStartDateEndDate = (data, sitting, duration) => {
		let newArray = [];
		getSequnceSort(data)?.map((courses, index) => {
			getSequnceSort(courses?.activities)?.map((module, key) => {
				let getDay = handleSeatingsDate(
					parseInt(sitting),
					parseInt(duration),
					index,
					key + 1
				);
				let currentDate = new Date();
				if (index === 0 && key === 0) {
					currentDate = userDate ? new Date(userDate) : new Date();
				} else if (index !== 0 && key === 0) {
					currentDate = getDateByAddDays(
						data[index - 1]?.activities[3]?.endDate,
						1
					);
				} else {
					currentDate = getDateByAddDays(
						courses?.activities[key - 1]?.endDate,
						1
					);
				}
				module.startDate = new Date(currentDate).toLocaleString("en-us", {
					month: "long",
					year: "numeric",
					day: "numeric",
				});
				module.endDate = new Date(
					getDateByAddDays(module.startDate, getDay - 1)
				).toLocaleString("en-us", {
					month: "long",
					year: "numeric",
					day: "numeric",
				});
			});
			courses.startDate = courses?.activities[0]?.startDate;
			courses.endDate = courses?.activities[3]?.endDate;
			newArray.push(courses);
		});
		setLearnerPlanData(newArray);
	};

	useEffect(() => {
		if (
			dashboardData &&
			dashboardData?.userPlans &&
			location?.state?.show !== "recommended"
		) {
			if (dashboardData?.userPlans?.isrecommendedplan) {
				handleCalculateStartDateEndDate(
					dashboardData?.userPlans?.courses,
					2,
					30
				);
			} else {
				setLearnerPlanData(getSequnceSort(dashboardData?.userPlans?.courses));
			}
		}
	}, [dashboardData]);

	useEffect(() => {
		if (getNewPlanResponse) {
			handleCalculateStartDateEndDate(
				getNewPlanResponse?.records,
				selectedSitting,
				selectedMinutes
			);
			setRefreshShimmar(false);
		}
	}, [getNewPlanResponse]);

	useEffect(() => {
		if (selectedMinutes && learnerPlanData?.length > 0) {
			handleCalculateStartDateEndDate(
				learnerPlanData,
				selectedSitting,
				selectedMinutes
			);
		}
	}, [selectedMinutes]);

	useEffect(() => {
		if (selectedSitting && learnerPlanData?.length > 0) {
			handleCalculateStartDateEndDate(
				learnerPlanData,
				selectedSitting,
				selectedMinutes
			);
		}
	}, [selectedSitting]);

	useEffect(() => {
		if (userDate && learnerPlanData?.length > 0) {
			handleCalculateStartDateEndDate(
				learnerPlanData,
				selectedSitting,
				selectedMinutes
			);
		}
	}, [userDate]);

	const createRecommendedPlan = (data) => {
		let newArray = [];
		data?.map((courses, index) => {
			let courseArr = {
				id: courses?.id,
				duration: selectedMinutes,
				sittings: selectedSitting,
				startDate: "",
				endDate: "",
				activities: [],
			};
			getSequnceSort(courses?.activities)?.map((module, key) => {
				let getDay = handleSeatingsDate(
					parseInt(selectedSitting),
					parseInt(selectedMinutes),
					index,
					key + 1
				);
				let currentDate = new Date();
				if (index === 0 && key === 0) {
					currentDate = userDate ? new Date(userDate) : new Date();
				} else if (index !== 0 && key === 0) {
					currentDate = getDateByAddDays(
						newArray[index - 1]?.activities[3]?.endDate,
						1
					);
				} else {
					currentDate = getDateByAddDays(
						courses?.activities[key - 1]?.endDate,
						1
					);
				}
				module.startDate = new Date(currentDate).toLocaleString("en-us", {
					month: "long",
					year: "numeric",
					day: "numeric",
				});
				module.endDate = new Date(
					getDateByAddDays(module.startDate, getDay - 1)
				).toLocaleString("en-us", {
					month: "long",
					year: "numeric",
					day: "numeric",
				});
				let obj = {
					id: module?.id,
					startDate: module?.startDate,
					endDate: module?.endDate,
					duration: selectedMinutes,
					sittings: selectedSitting,
				};
				courseArr.activities.push(obj);
			});
			//	console.log('$$@@', courseArr.activities);
			courseArr.startDate = courseArr.activities[0]?.startDate;
			courseArr.endDate = courseArr.activities[3]?.endDate;
			newArray.push(courseArr);
		});

		let array = {
			sittings: selectedSitting,
			duration: selectedMinutes,
			courses: newArray,
		};
		setLoader(true);
		//	console.log('$$@@ array : ', array, screen);
		dispatch(updateLearnerPlan(defaultChildData?.id, array));
	};

	const createPlan = (courseTree) => {
		let newArray = [];
		let index = 0;
		courseTree?.map((dim, count) => {
			dim?.skills?.map((skill, key2) => {
				skill?.courses?.map((courses, i) => {
					if (courses?.isSelected || screen === 3) {
						let courseArr = {
							id: courses?.id,
							duration: selectedMinutes,
							sittings: selectedSitting,
							startDate: "",
							endDate: "",
							activities: [],
						};
						getSequnceSort(courses?.activities)?.map((module, key) => {
							let getDay = handleSeatingsDate(
								parseInt(selectedSitting),
								parseInt(selectedMinutes),
								index,
								key + 1
							);
							let currentDate = new Date();
							if (index === 0 && key === 0) {
								currentDate = new Date(userDate);
							} else if (index !== 0 && key === 0) {
								currentDate = getDateByAddDays(
									newArray[index - 1]?.activities[3]?.endDate,
									1
								);
							} else {
								currentDate = getDateByAddDays(
									courses?.activities[key - 1]?.endDate,
									1
								);
							}
							module.startDate = new Date(currentDate).toLocaleString("en-us", {
								month: "long",
								year: "numeric",
								day: "numeric",
							});
							module.endDate = new Date(
								getDateByAddDays(module.startDate, getDay - 1)
							).toLocaleString("en-us", {
								month: "long",
								year: "numeric",
								day: "numeric",
							});
							let obj = {
								id: module?.id,
								startDate: module?.startDate,
								endDate: module?.endDate,
								duration: selectedMinutes,
								sittings: selectedSitting,
							};
							courseArr.activities.push(obj);
						});
						courseArr.startDate = courseArr.activities[0]?.startDate;
						courseArr.endDate = courseArr.activities[3]?.endDate;
						newArray.push(courseArr);
						index++;
					}
				});
			});
		});
		let array = {};
		if (screen === 6) {
			array = {
				sittings: selectedSitting,
				duration: selectedMinutes,
				ujourneyId: getJourneyId,
				courses: newArray,
			};
		} else if ([3, 5]?.includes(screen)) {
			array = {
				sittings: selectedSitting,
				duration: selectedMinutes,
				courses: newArray,
			};
		}
		setLoader(true);
		//	console.log('$$@@ array : ', array, screen);
		dispatch(updateLearnerPlan(defaultChildData?.id, array));
	};

	const handleLearnerUpdatePlan = () => {
		let array = {
			sittings: selectedSitting,
			duration: selectedMinutes,
			iscourseupdate: true,
			userId: params?.id,
			courses: [],
		};

		learnerPlanData?.map((value, key) => {
			let courseArr = {
				id: value?.id,
				duration: value?.duration,
				sittings: value?.sittings,
				startDate: value?.startDate,
				endDate: value?.endDate,
				activities: [],
			};
			value?.activities?.map((data, index) => {
				let obj = {
					id: data?.id,
					startDate: data?.startDate,
					endDate: data?.endDate,
					duration: data?.duration,
					sittings: data?.sittings,
				};
				courseArr.activities.push(obj);
			});

			array.courses.push(courseArr);
		});
		//	console.log('&&@@@@@@@', array);
		setLoader(true);
		dispatch(getDimensionUpdatePlan(array));
	};

	useEffect(() => {
		if (response?.success) {
			dispatch(getDashboard(defaultChildData?.id));
			history.push(PATHS.HOME);
			setLoader(false);
		}
		if (response?.success && signupresponse?.success) {
			dispatch(showModal({ type: "DimensionHintPopup" }));
		}
	}, [response]);

	const refreshNewPlan = () => {
		//	setRefreshPage(true);
		setRefreshShimmar(true);
		dispatch(getUpdateLearnerPlan(defaultChildData?.id));
	};

	/* Class Schedule method 7 may 2024 */
	const hanleClassSchedule = (type) => {
		dispatch(setClassSchedule(type));
	};

	const handleWhyAPlanPopup = () => {
		dispatch(showModal({ type: "WhyAPlanPopup" }));
	};

	const handleEdiitPlan = () => {
		history.push({
			pathname: PATHS.STR_LEARNER_PLAN + defaultChildData?.id,
			state: {
				show: "EditCoursePlan",
				screen: 1,
			},
		});
	};

	useEffect(() => {
		if (location?.state?.show === "EditCoursePlan") {
			setCoursePlanTree(getCoursesInTreeFormat());
			setEditPlan(true);
		}
	}, [location?.state?.show])

	const getCoursesInTreeFormat = () => {
		let arr = [...coursePlanTree];
		console.log('coursePlanTree : ', coursePlanTree, dashboardData?.userPlans?.courses);
		dashboardData?.userPlans?.courses?.map((course, key) => {
			const dimKey = arr?.findIndex(
				(item) => item?.name === course?.dimName
			);
			if (dimKey === -1) {
				let skillObj = {
					name: course?.skillName,
					id: course?.skillId,
					courses: [course],
				};
				let dimObj = {
					name: course?.dimName,
					id: course?.dimId,
					skills: [skillObj],
				};
				arr?.push(dimObj);
			} else {
				const skillKey = arr[dimKey]?.skills?.findIndex(
					(item) => item?.name === course?.skillName
				);
				if (skillKey === -1) {
					let skillObj = {
						name: course?.skillName,
						id: course?.skillId,
						courses: [course],
					};
					arr[dimKey]?.skills?.push(skillObj);
				} else {
					arr[dimKey]?.skills[skillKey]?.courses?.push(course);
				}
			}
		});
		console.log('coursePlanTree 2: ', arr);
		return arr;
	};

	return (
		<>
			<div className="heading p-0 border-0">
				<div class="form-title mt-0 mb-0 Enrollcoursetitle heading summery_plan">
					<h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
						<span> <img src={image.leanerPlan} className='mr-2' alt="" />
							{
								(!dashboardData?.userPlans?.isrecommendedplan && (selectedOption === "home" || selectedOption === "changePace")) && (
									<>
										{getLearnerName()}'s Learning Plan
									</>
								)
							}
							{
								((selectedOption === "recommended" || dashboardData?.userPlans?.isrecommendedplan) && !["filter", "pathway", "dimension"]?.includes(selectedOption)) && (
									<>
										{getLearnerName()}'s Recommended Learning Plan
									</>
								)
							}
							{
								["filter", "pathway", "dimension"]?.includes(selectedOption) && (
									<>
										{getLearnerName()}'s Draft Learning Plan
									</>
								)
							}
							{/* <>{getLearnerName()}'s {(dashboardData?.userPlans?.isrecommendedplan && selectedOption === "recommended") ? "Recommended" : (selectedOption === "recommended" ? "Recommended" : (["filter", "pathway", "dimension"]?.includes(selectedOption) ? "Draft" : ""))} Learning Plan</> */}
						</span>
						<div className="learner_pLan_dropdown">
							<span aria-haspopup="true"
								className="pointer"
								aria-expanded="false"
								id="leaneringplndwn"
								data-toggle="dropdown">
								<i class="fa-sharp fa-solid fa-bars"></i>
							</span>
							<ul className="dropdown-menu dropdown-menu-end lPDropdwnList" aria-labelledby="leaneringplndwn">
								<li onClick={() => handleWhyAPlanPopup()}>
									<p> <img src={image.SceneQuestionicon} className="mr-2" />Why A Plan?</p>
								</li>
								{/* {
									(!dashboardData?.userPlans?.isrecommendedplan && selectedOption !== "recommended") && (
										<li>
											<p onClick={() => handleMoreOptions("changePace")}> <img src={image.paceIcon} className="mr-2" />Change Pace</p>
										</li>
									)
								} */}
								<li>
									<p onClick={() => handleMoreOptions("createNewPlan")}>
										{" "}
										<img src={image.newleaner_plan} className="mr-2" />
										Create New Plan
									</p>
								</li>
								{/* <li>
									<p><i class="fa-light fa-pencil mr-2"></i>Edit Plan</p>
								</li> */}
								<li>
									<p onClick={() => handleMoreOptions("courseCatlog")}> <img src={image.mortarboard} className="mr-2" />Course Catalog</p>
								</li>
								{/* Class Schedule 7 may 2024 */}
								<li>
									<p onClick={() => hanleClassSchedule("classSchedule")}>
										{" "}
										<img src={image.newleaner_plan} className='mr-2' />
										Class Schedule
									</p>
								</li>
							</ul>
						</div>
					</h2>
				</div>
			</div>
			{dashboardData ? (
				<>
					{(screen === 1 || selectedOption === "recommended") && coursePlanTree?.length === 0 && (
						<div className="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
							<div className="learnerplanOrderone" >
								<div className="Selected_paced ">
									{/* <span className="d-inline-block text-nowrap">Pace :</span>
									<strong className="ml-2">
										{convertedNumber(selectedSitting)} {" "} ({selectedSitting}) 
										sittings with {selectedMinutes} minutes per sitting per week.
									</strong> */}
									{
										(!dashboardData?.userPlans?.isrecommendedplan && selectedOption === "home") ? (
											<>
												<p><span>Sessions per week: </span>{" "}{convertedNumber(dashboardData?.userPlans?.pace?.sittings)} {" "} ({dashboardData?.userPlans?.pace?.sittings}) </p>
												<p><span>Duration per session: </span> {dashboardData?.userPlans?.pace?.duration} minutes</p>
											</>
										) : (
											<>
												<p><span>Sessions per week: </span>{" "}{convertedNumber(selectedSitting)} {" "} ({selectedSitting}) </p>
												<p><span>Duration per session: </span> {selectedMinutes} minutes</p>
											</>
										)
									}

								</div>
							</div>
							<div className="learner_Planrighpnl pb-3">
								{
									!refreshShimmar ? (
										<>
											<div className="lerner_jounry_plan m-0">
												<div className="Multi_learner_plan"
													data-toggle="collapse"
													href="#learner_planone"
													aria-expanded="true"
												>
													<h5 className="flex"><i class="fa-light fa-rocket-launch mr-2"></i>Plan:
														<p className="timint_date mr-auto ml-2 mt-1">
															{
																learnerPlanData && (
																	<span>{learnerPlanData[0]?.startDate} - {learnerPlanData[learnerPlanData?.length - 1]?.endDate}</span>
																)
															}

														</p>
														<span><i class="fa-light fa-image-polaroid mr-3"></i></span>
														<span className="pointer"
															onClick={() => handleEdiitPlan()}><i class="fa-light fa-pencil active mr-3"></i></span>
														<span> <i class="fa-light fa-chevron-down"></i></span></h5>
												</div>
												<div className={`panel-collapse collapse show Plandetal_collapse`}
													id="learner_planone">
													{/* <div className="flexone selStartPlan pt-2">
														<div className="User_inisal mr-2">
															<i class="fa-light fa-rocket-launch"></i>
														</div>
														<div className="userPLan_start w-100">
															<h4 className="mb-0 flexone align-items-center">Start of {getLearnerName()}'s Learning Plan
																 <span onClick={() => handlePopUpOpen("whyplan")}><img src={image.chat_icon} className="ml-2 ichat_icon pointer" /></span>
															</h4>
															<p className="timint_date">
																{
																	learnerPlanData && (
																		<span>{learnerPlanData[0]?.startDate} - {learnerPlanData[learnerPlanData?.length - 1]?.endDate}</span>
																	)
																}
																{
																	(!dashboardData?.userPlans?.isrecommendedplan && selectedOption !== "recommended") && (
																		<>
																			<span className="clenderIcon"><i class="fa-sharp fa-light fa-calendar ml-2"></i></span>
																			<a href="javascript:void(0)" onClick={() => handleMoreOptions("changePace")} className="changes_pace pl-2">Change Pace</a>
																		</>
																	)
																}
															</p>
														</div>
													</div> */}
													{
														getSequnceSort(learnerPlanData)?.map((course, index) => (
															<div className="LPrpcomponent ">
																<div className="d-flex align-items-center plan_course_name">
																	<div className="User_inisal mr-2">
																		<i class="fa-solid fa-graduation-cap"></i>
																	</div>
																	<div className="userPLan_start">
																		<p className="outCometxt">Course:</p>
																		<p className="flexone">
																			<React.Fragment>
																				{course?.name?.length > 42 ? (
																					<ReactTooltip id={course?.name}>
																						<p>{course?.name}</p>
																					</ReactTooltip>
																				) : (
																					""
																				)}
																				<div data-for={course.name} data-event-off="" data-tip>
																					<strong className="pointer Course_NamePland" onClick={() => courseDetailPage(course)}>
																						{textTrim(course.name, 42)}
																					</strong>
																				</div>
																			</React.Fragment>
																			<span className="pointer" onClick={() => courseDetailPage(course)}><i class="fa-solid fa-up-right-from-square"></i></span>
																		</p>
																		<p className="timint_date">{course?.startDate} - {course?.endDate} <a href="javascript:void(0)" onClick={() => handleShowPlanModule(course)} className="pl-2 ml-2">Show details</a>
																			{course?.isStarted && (<span className="inprogress_Course"> (In Progress)</span>)}
																		</p>
																	</div>
																</div>
																<div className="flexone LPdestination_mark">
																	<div className="User_inisal mr-2">
																		<i class="fa-sharp fa-solid fa-location-dot"></i>
																	</div>
																	<div className="userPLan_start course_destination">
																		<p className="outCometxt">Outcome:</p>
																		<p>
																			<React.Fragment>
																				{course?.outcome?.length > 78
																					? (
																						<ReactTooltip id={course?.outcome}>
																							<p>
																								{getLearnerName()} {course?.outcome}
																							</p>
																						</ReactTooltip>
																					) : (
																						""
																					)}
																				<div data-for={course.outcome} data-event-off="" data-tip>
																					<span>
																						{getLearnerName()}{" "}{textTrim(course.outcome, 78)}
																					</span>
																				</div>
																			</React.Fragment>
																		</p>
																	</div>
																</div>
															</div>
														))
													}
													<div className="Contionur_Arrow pb-5 mb-5">
														<h4 className="flexone align-items-center">
															<span className="p-0 mr-2 flagchecked"><i class="fa-solid fa-flag-checkered"></i></span>{getLearnerName()} has grown
															through this learning plan and is ready for a new set of courses!
														</h4>
													</div>
												</div>
											</div>

										</>
									) : (
										<ShimmerPostItem
											card
											title
											cta
											imageType="thumbnail"
											imageWidth={80}
											imageHeight={80}
											contentCenter
										/>
									)
								}
							</div>
							{
								(dashboardData?.userPlans?.isrecommendedplan || selectedOption === "recommended") && (
									<div className="learner_planordr_three m-0">
										<div className="form-group BDsubmitbutton d-flex m-0">
											<div className="buttonDistribotion justify-content-between  align-items-center">
												{
													loader ? (
														<div className="justify-content-end">
															<button
																className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
																disabled
															>
																<span className="RounAnimation mr-1"></span> Please
																Wait...
															</button>
														</div>
													) : (
														<>
															<p className="courserefresh">
																<a href="javascript:void(0)" onClick={() => refreshNewPlan()}><i class="fa-light fa-arrows-rotate mr-2"></i>Refresh Courses</a>
															</p>
															<button
																type="button"
																className="btn-blue btn-login d-block mb-5"
																onClick={() => createRecommendedPlan(learnerPlanData)}
															>
																<span><i class="fa-solid fa-paper-plane mr-2"></i></span>Select Plan
															</button>
														</>
													)
												}
											</div>
										</div>
									</div>
								)
							}
							{
								selectedOption === "changePace" && (
									<div className="learner_planordr_three m-0">
										<div className="form-group BDsubmitbutton d-flex m-0">
											<div className="buttonDistribotion">
												{
													loader ? (
														<div className="justify-content-end">
															<button
																className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
																disabled
															>
																<span className="RounAnimation mr-1"></span> Please
																Wait...
															</button>
														</div>
													) : (
														<button
															type="button"
															className="btn-blue btn-login d-block mb-5"
															onClick={() => handleLearnerUpdatePlan()}
														>
															<span><i class="fa-solid fa-paper-plane mr-2"></i></span>Update Plan
														</button>
													)
												}
											</div>
										</div>
									</div>
								)
							}
						</div>
					)}
				</>
			) : (
				<ShimmerPostItem
					card
					title
					cta
					imageType="thumbnail"
					imageWidth={80}
					imageHeight={80}
					contentCenter
				/>
			)}

			{[1, 2]?.includes(screen) && coursePlanTree?.length > 0 && (
				<div className="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
					<div className="learnerplanOrderone">
						<div className="Selected_paced ">

							{!dashboardData?.userPlans?.isrecommendedplan &&
								selectedOption === "home" ? (
								<>
									<p>
										<span>Sessions per week: </span> {" "}
										{convertedNumber(
											dashboardData?.userPlans?.pace?.sittings
										)}{" "}
										({dashboardData?.userPlans?.pace?.sittings}){" "}
									</p>
									<p>
										<span>Duration per session: </span>{" "}
										{dashboardData?.userPlans?.pace?.duration} minutes
									</p>
								</>
							) : (
								<>
									<p>
										<span>Sessions per week: </span>{" "}
										{convertedNumber(selectedSitting)} ({selectedSitting}){" "}
									</p>
									<p>
										<span>Duration per session: </span> {selectedMinutes}{" "}
										minutes
									</p>
								</>
							)}
						</div>
					</div>
					<div className="learner_Planrighpnl p-3">
						<div className=" p-0 allcourselj pb-5 mb-3">
							<div className="DraftSelctionList">
								{coursePlanTree?.length === 0 ? (
									<div className="DS_List">
										<h4 className="flexone pt-0">
											<i class="fa-solid fa-play mr-2"></i>Dimension(s)
										</h4>
										<span>
											<i class="fa-regular fa-hyphen mr-2"></i>
											<i>Dimension(s) will be added per your selections.</i>
										</span>
										<div className="DS_List">
											<h4 className="flexone">
												<i class="fa-solid fa-play mr-2"></i>Skill(s)
											</h4>
											<span>
												<i class="fa-regular fa-hyphen mr-2"></i>
												<i>Skill(s) will be added per your selections.</i>
											</span>
											<div className="DS_List">
												<h4 className="flexone">
													<i class="fa-solid fa-play mr-2"></i>Course(s)
												</h4>
												<span>
													<i class="fa-regular fa-hyphen mr-2"></i>
													<i>Course(s) will be added per your selections.</i>
												</span>
											</div>
										</div>
									</div>
								) : (
									<div className="DS_List">
										{/* <h4 className={`flexone mb-2 pt-0 dim_Name_att`}><i class="fa-solid fa-play mr-2"></i > Dimension(s) </h4> */}
										<ul className="DSdimensionList">
											{coursePlanTree?.map((value, index) => (
												<li className="dimensionNamehg">
													<span>
														<img
															src={image.greentickarrow}
															className="mr-2"
														/>
														{value?.name}
														<span
															className="pointer"
															onClick={() =>
																handleRemoveTagDimSkillCourse(
																	"dimension",
																	value,
																	"",
																	"",
																	true
																)
															}
														>
															<i class="fa-regular fa-trash-can"></i>
														</span>
													</span>
													<div className="DS_List">
														{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i > Skill(s)</h4> */}
														{value?.skills?.map((skill, key) => (
															<ul className="DSskillsList">
																<li>
																	<img
																		src={image.greentickarrow}
																		className="mr-2"
																	/>
																	{skill?.name}
																	<span
																		className="pointer"
																		onClick={() =>
																			handleRemoveTagDimSkillCourse(
																				"skill",
																				value,
																				skill,
																				"",
																				true
																			)
																		}
																	>
																		<i class="fa-regular fa-trash-can"></i>
																	</span>
																	<div className="DS_List">
																		{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i > Course(s)</h4> */}
																		{skill?.courses?.map(
																			(course, count) =>
																				<ul className="DSCoursenameList">
																					<li
																						className={`${course?.name.length > 36
																							? "longCourse_Name"
																							: ""
																							}`}
																					>
																						<span>
																							<img
																								src={image.mortarboard}
																								className="mr-2"
																							/>
																							{/* {course?.name} */}
																							<React.Fragment>
																								{course?.name?.length >
																									36 ? (
																									<ReactTooltip
																										id={course?.name}
																									>
																										<p>{course?.name}</p>
																									</ReactTooltip>
																								) : (
																									""
																								)}
																								<div
																									data-for={course.name}
																									data-event-off=""
																									data-tip
																								>
																									<p
																										className="pointer"
																									>
																										{textTrim(
																											course.name,
																											36
																										)}
																									</p>
																								</div>
																							</React.Fragment>
																							<span
																								className="pointer"
																								onClick={() =>
																									handleRemoveTagDimSkillCourse(
																										"course",
																										value,
																										skill,
																										course,
																										true
																									)
																								}
																							>
																								<i class="fa-regular fa-trash-can"></i>
																							</span>
																						</span>
																					</li>
																				</ul>
																		)}
																	</div>
																</li>
															</ul>
														))}
													</div>
												</li>
											))}
										</ul>
									</div>
								)}
							</div >
						</div >
					</div >
				</div >
			)}

			{
				(screen === 3 || selectedOption === "filter") && !editPlan && (
					<div className="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
						<div className="learnerplanOrderone">
							<div className="Selected_paced ">
								<>
									<p><span>Sessions per week: </span>{" "}{convertedNumber(selectedSitting)} {" "} ({selectedSitting}) </p>
									<p><span>Duration per session: </span> {selectedMinutes} minutes</p>
								</>
							</div>
						</div>
						<div className="learner_Planrighpnl p-3">
							<div className=" p-0 allcourselj pb-5 mb-3">
								<div className="DraftSelctionList">
									{totalSelectedCourse == 0 ? (
										<div className="DS_List">
											<h4 className="flexone pt-0"><i class="fa-solid fa-play mr-2"></i>Dimension(s)</h4>
											<span><i class="fa-regular fa-hyphen mr-2"></i><i>Dimension(s) will be added per your selections.</i></span>
											<div className="DS_List">
												<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skill(s)
												</h4>
												<span><i class="fa-regular fa-hyphen mr-2"></i><i>Skill(s) will be added per your selections.</i></span>
												<div className="DS_List">
													<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
													</h4>
													<span><i class="fa-regular fa-hyphen mr-2"></i><i>Course(s) will be added per your selections.</i></span>
												</div>
											</div>

										</div>
									) : (
										<div className="DS_List">
											{/* <h4 className={`flexone mb-2 pt-0 dim_Name_att`}><i class="fa-solid fa-play mr-2"></i>Dimension(s) </h4> */}
											<ul className="DSdimensionList">
												{
													dimensionTree?.map((value, index) => (
														<li className="dimensionNamehg ">
															<span>
																<img src={image.greentickarrow} className="mr-2" />
																{value?.name}
																<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("dimension", value, '', '', true)}><i class="fa-regular fa-trash-can"></i></span>
															</span>
															<div className="DS_List">
																{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Skill(s)</h4> */}
																{
																	value?.skills?.map((skill, key) => (
																		<ul className="DSskillsList">
																			<li>
																				<img src={image.greentickarrow} className="mr-2" />
																				{skill?.name}
																				<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("skill", value, skill, '', true)}><i class="fa-regular fa-trash-can"></i></span>
																				<div className="DS_List">
																					{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Course(s)</h4> */}
																					{
																						skill?.courses?.map((course, count) => (
																							<ul className="DSCoursenameList">
																								<li className={`${course?.name.length > 32 ? "longCourse_Name" : ""}`}>
																									<span>
																										<img src={image.mortarboard} className="mr-2" />
																										{/* {course?.name} */}
																										<React.Fragment>
																											{course?.name?.length > 32 ? (
																												<ReactTooltip id={course?.name}>
																													<p>{course?.name}</p>
																												</ReactTooltip>
																											) : (
																												""
																											)}
																											<div data-for={course.name} data-event-off="" data-tip>
																												<p className="pointer Course_Name_tip">
																													{textTrim(course.name, 32)}
																												</p>
																											</div>
																										</React.Fragment>
																										<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("course", value, skill, course, true)}>
																											<i class="fa-regular fa-trash-can"></i>
																										</span>
																									</span>
																								</li>
																							</ul>
																						))
																					}
																				</div>
																			</li>
																		</ul>
																	))
																}
															</div>
														</li>
													))
												}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
						{
							(totalSelectedCourse > 1 && totalSelectedCourse < 7) && (
								<div className="learner_planordr_three m-0">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<div className="buttonDistribotion">
											{loader ? (
												<div className="justify-content-end">
													<button
														className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
														disabled
													>
														<span className="RounAnimation mr-1"></span> Please
														Wait...
													</button>
												</div>) : (
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5"
													onClick={() => createPlan(dimensionTree)}
												>
													<i class="fa-solid fa-paper-plane mr-2"></i>Create Plan
												</button>
											)}
										</div>
									</div>
								</div>
							)
						}
					</div >
				)
			}
			{
				(screen !== 5 && selectedOption === "dimension") && !editPlan && (
					<div className="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
						<div className="learnerplanOrderone">
							<div className="Selected_paced ">
								<>
									<p><span>Sessions per week: </span>{" "}{convertedNumber(selectedSitting)} {" "} ({selectedSitting}) </p>
									<p><span>Duration per session: </span> {selectedMinutes} minutes</p>
								</>
							</div>
						</div>
						<div className="learner_Planrighpnl p-3">
							<div className=" p-0 allcourselj pb-5 mb-3">
								<div className="DraftSelctionList">
									{getDImSkillData?.length === 0 ? (
										<div className="DS_List">
											<h4 className="flexone pt-0"><i class="fa-solid fa-play mr-2"></i>Dimension(s)</h4>
											<span><i class="fa-regular fa-hyphen mr-2"></i><i>Dimension(s) will be added per your selections.</i></span>
											<div className="DS_List">
												<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skill(s)
												</h4>
												<span><i class="fa-regular fa-hyphen mr-2"></i><i>Skill(s) will be added per your selections.</i></span>
												<div className="DS_List">
													<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
													</h4>
													<span><i class="fa-regular fa-hyphen mr-2"></i><i>Course(s) will be added per your selections.</i></span>
												</div>
											</div>

										</div>
									) : (
										<div className="DS_List">
											{/* <h4 className={`flexone mb-2 pt-0 dim_Name_att`}><i class="fa-solid fa-play mr-2"></i>Dimension(s) </h4> */}
											<ul className="DSdimensionList">
												{
													getDImSkillData?.map((value, index) => (
														(
															<li className="dimensionNamehg ">
																<span>
																	<i class="fa-regular fa-hyphen mr-2"></i>
																	{value?.name}
																	<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("dimension", value, '', '', true)}><i class="fa-regular fa-trash-can"></i></span>
																</span>
																<div className="DS_List">
																	{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Skill(s)</h4> */}
																	{
																		value?.skills?.map((skill, key) => (
																			(
																				<ul className="DSskillsList">
																					<li>
																						<i class="fa-regular fa-hyphen mr-2"></i>
																						{skill?.name}
																						<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("skill", value, skill, '', true)}><i class="fa-regular fa-trash-can"></i></span>
																						{
																							skill?.isCompleted ? (
																								<div className="DS_List">
																									{
																										skill?.courses?.map((course, count) => (
																											course?.isSelected && (
																												<ul className="DSCoursenameList">
																													<li className={`${course?.name.length > 32 ? "longCourse_Name" : ""}`}>
																														<span>
																															<img src={image.mortarboard} className="mr-2" />
																															{/* {course?.name} */}
																															<React.Fragment>
																																{course?.name?.length > 32 ? (
																																	<ReactTooltip id={course?.name}>
																																		<p>{course?.name}</p>
																																	</ReactTooltip>
																																) : (
																																	""
																																)}
																																<div data-for={course.name} data-event-off="" data-tip>
																																	<p className="pointer Course_Name_tip">
																																		{textTrim(course.name, 32)}
																																	</p>
																																</div>
																															</React.Fragment>
																															<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("course", value, skill, course, true)}>
																																<i class="fa-regular fa-trash-can"></i>
																															</span>
																														</span>
																													</li>
																												</ul>
																											)
																										))
																									}
																								</div>
																							) : (
																								<div className="DS_List">
																									<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
																									</h4>
																									<span><i class="fa-regular fa-hyphen mr-2"></i><i>Course(s) will be added per your selections.</i></span>
																								</div>
																							)
																						}
																					</li>
																				</ul>
																			)

																		))
																	}
																</div>
															</li>
														)

													))
												}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>

					</div>
				)
			}
			{
				[5]?.includes(screen) && (
					<div className="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
						<div className="learnerplanOrderone">
							<div className="Selected_paced ">
								<>
									<p><span>Sessions per week: </span>{" "}{convertedNumber(selectedSitting)} {" "} ({selectedSitting}) </p>
									<p><span>Duration per session: </span> {selectedMinutes} minutes</p>
								</>
							</div>
						</div>
						<div className="learner_Planrighpnl p-3">
							<div className=" p-0 allcourselj pb-5 mb-3">
								<div className="DraftSelctionList">
									{!dimSkillCoursePlanTree?.find((value) => value?.isSelected === true) ? (
										<div className="DS_List">
											<h4 className="flexone pt-0"><i class="fa-solid fa-play mr-2"></i>Dimension(s)</h4>
											<span><i class="fa-regular fa-hyphen mr-2"></i><i>Dimension(s) will be added per your selections.</i></span>
											<div className="DS_List">
												<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skill(s)
												</h4>
												<span><i class="fa-regular fa-hyphen mr-2"></i><i>Skill(s) will be added per your selections.</i></span>
												<div className="DS_List">
													<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
													</h4>
													<span><i class="fa-regular fa-hyphen mr-2"></i><i>Course(s) will be added per your selections.</i></span>
												</div>
											</div>
										</div>
									) : (
										<div className="DS_List">
											{/* <h4 className={`flexone mb-2 pt-0 dim_Name_att`}><i class="fa-solid fa-play mr-2"></i>Dimension(s) </h4> */}
											<ul className="DSdimensionList">
												{
													dimSkillCoursePlanTree?.map((value, index) => (
														value?.isSelected && (
															<li className="dimensionNamehg ">
																{value?.isCompleted ? <img src={image.greentickarrow} className="mr-2" /> : (<span><i class="fa-regular fa-hyphen mr-2"></i></span>)}
																{value?.name}
																<span className="pointer" onClick={() => handleRemoveDimensionSkillCourse("dimension", value, '', '', true)}><i class="fa-regular fa-trash-can"></i></span>
																<div className="DS_List">
																	{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Skill(s)</h4> */}
																	{
																		value?.skills?.map((skill, key) => (
																			skill?.isSelected && (
																				<ul className="DSskillsList">
																					<li>
																						{skill?.isCompleted ? <img src={image.greentickarrow} className="mr-2" /> : (<span><i class="fa-regular fa-hyphen mr-2"></i></span>)}
																						{skill?.name}
																						<span className="pointer" onClick={() => handleRemoveDimensionSkillCourse("skill", value, skill, '', true)}><i class="fa-regular fa-trash-can"></i></span>
																						{
																							skill?.isCompleted ? (
																								<div className="DS_List">
																									{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Course(s)</h4> */}
																									{
																										skill?.courses?.map((course, count) => (
																											course?.isSelected && (
																												<ul className="DSCoursenameList">
																													<li className={`${course?.name.length > 32 ? "longCourse_Name" : ""}`}>
																														<span>
																															<img src={image.mortarboard} className="mr-2" />
																															{/* {course?.name} */}
																															<React.Fragment>
																																{course?.name?.length > 32 ? (
																																	<ReactTooltip id={course?.name}>
																																		<p>{course?.name}</p>
																																	</ReactTooltip>
																																) : (
																																	""
																																)}
																																<div data-for={course.name} data-event-off="" data-tip>
																																	<p className="pointer Course_Name_tip">
																																		{textTrim(course.name, 32)}
																																	</p>
																																</div>
																															</React.Fragment>
																															<span className="pointer" onClick={() => handleRemoveDimensionSkillCourse("course", value, skill, course, true)}>
																																<i class="fa-regular fa-trash-can"></i>
																															</span>
																														</span>
																													</li>
																												</ul>
																											)
																										))
																									}
																								</div>
																							) : (
																								<div className="DS_List">
																									<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
																									</h4>
																									<span><i class="fa-regular fa-hyphen mr-2"></i><i>Course(s) will be added per your selections.</i></span>
																								</div>
																							)
																						}
																					</li>
																				</ul>
																			)

																		))
																	}
																</div>
															</li>
														)

													))
												}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
						{
							(getCourseId?.length >= 2 && getCourseId?.length <= 6) && (
								<div className="learner_planordr_three m-0">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<div className="buttonDistribotion">
											{loader ? (
												<div className="justify-content-end">
													<button
														className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
														disabled
													>
														<span className="RounAnimation mr-1"></span> Please
														Wait...
													</button>
												</div>) : (
												<>
													<button
														type="button"
														className="btn-blue btn-login d-block mb-5"
														onClick={() => {
															dimSkillCoursePlanTree?.find((item) => item?.isSelected === true && item?.isCompleted === false)
																? handleNumberOfCourses("createplan")
																: createPlan(dimSkillCoursePlanTree);
														}}
													>
														<i class="fa-solid fa-paper-plane mr-2"></i>Create Plan
													</button>
												</>
											)}
										</div>
									</div>
								</div>
							)
						}
					</div>
				)
			}
			{
				(screen === 6 || selectedOption === "pathway") && (
					<div className="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
						<div className="learnerplanOrderone">
							<div className="Selected_paced ">
								<>
									<p><span>Sessions per week: </span>{" "}{convertedNumber(selectedSitting)} {" "} ({selectedSitting}) </p>
									<p><span>Duration per session: </span> {selectedMinutes} minutes</p>
								</>
							</div>
						</div>
						<div className="learner_Planrighpnl p-3">
							<div className=" p-0 allcourselj pb-5 mb-3">
								<div className="DraftSelctionList">
									{pathwayTree?.length === 0 && !showPathwayShimmar ? (
										<div className="DS_List">
											<h4 className="flexone pt-0"><i class="fa-solid fa-play mr-2"></i>Dimension(s)</h4>
											<span><i class="fa-regular fa-hyphen mr-2"></i><i>Dimension(s) will be added per your selections.</i></span>
											<div className="DS_List">
												<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skill(s)
												</h4>
												<span><i class="fa-regular fa-hyphen mr-2"></i><i>Skill(s) will be added per your selections.</i></span>
												<div className="DS_List">
													<h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
													</h4>
													<span><i class="fa-regular fa-hyphen mr-2"></i><i>Course(s) will be added per your selections.</i></span>
												</div>
											</div>
										</div>
									) : (
										<>
											{
												!showPathwayShimmar ? (
													<div className="DS_List">
														{/* <h4 className={`flexone mb-2 pt-0 dim_Name_att`}><i class="fa-solid fa-play mr-2"></i>Dimension(s) </h4> */}
														<ul className="DSdimensionList">
															{
																pathwayTree?.map((value, index) => (
																	<li className="dimensionNamehg ">
																		<span>
																			<img src={image.greentickarrow} className="mr-2" />
																			{value?.name}
																			<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("dimension", value, '', '', true)}><i class="fa-regular fa-trash-can"></i></span>
																		</span>
																		<div className="DS_List">
																			{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Skill(s)</h4> */}
																			{
																				value?.skills?.map((skill, key) => (
																					<ul className="DSskillsList">
																						<li>
																							<img src={image.greentickarrow} className="mr-2" />
																							{skill?.name}
																							<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("skill", value, skill, '', true)}><i class="fa-regular fa-trash-can"></i></span>
																							<div className="DS_List">
																								{/* <h4 className={`flexone`}><i class="fa-solid fa-play mr-2"></i>Course(s)</h4> */}
																								{
																									skill?.courses?.map((course, count) => (
																										course?.isSelected && (
																											<ul className="DSCoursenameList">
																												<li className={`${course?.name.length > 32 ? "longCourse_Name" : ""}`}>
																													<span>
																														<img src={image.mortarboard} className="mr-2" />
																														{/* {course?.name} */}
																														<React.Fragment>
																															{course?.name?.length > 32 ? (
																																<ReactTooltip id={course?.name}>
																																	<p>{course?.name}</p>
																																</ReactTooltip>
																															) : (
																																""
																															)}
																															<div data-for={course.name} data-event-off="" data-tip>
																																<p className="pointer Course_Name_tip">
																																	{textTrim(course.name, 32)}
																																</p>
																															</div>
																														</React.Fragment>
																														<span className="pointer" onClick={() => handleRemoveTagDimSkillCourse("course", value, skill, course, true)}>
																															<i class="fa-regular fa-trash-can"></i>
																														</span>
																													</span>
																												</li>
																											</ul>
																										)

																									))
																								}
																							</div>
																						</li>
																					</ul>
																				))
																			}
																		</div>
																	</li>
																))
															}
														</ul>
													</div>
												) : (
													<ShimmerPostItem
														card
														title
														cta
														imageType="thumbnail"
														imageWidth={80}
														imageHeight={120}
														contentCenter
													/>
												)
											}
										</>
									)}
								</div>
							</div>
						</div>
						{
							(coursesArr?.length >= 2 && coursesArr?.length <= 6) && (
								<div className="learner_planordr_three m-0">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<div className="buttonDistribotion">
											{loader ? (
												<div className="justify-content-end">
													<button
														className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
														disabled
													>
														<span className="RounAnimation mr-1"></span> Please
														Wait...
													</button>
												</div>) : (
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5"
													onClick={() => createPlan(pathwayTree)}
												>
													<i class="fa-solid fa-paper-plane mr-2"></i>Create Plan
												</button>
											)}
										</div>
									</div>
								</div>
							)
						}
					</div>
				)
			}
		</>
	);
};

export default LearnerPlanRightPanel;

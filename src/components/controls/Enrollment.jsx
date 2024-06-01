import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import {
	enrollModal,
	enrollmentPopup,
	lockPopup,
	parentLoginAction,
	parentToolsModal,
	resetEnroll,
	resetResponse,
	showModal,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import RoundProgress from "./RoundProgress";
import {
	formatDate,
	getCapitalized,
	getSequnceSort,
	getUrlSegment,
} from "../../utils/helper";
import {
	courseEnrollment,
	enrollCourseJourny,
	enrollFromCourseJourney,
	getJournyCourseData,
	getJournyCourses,
	getStartEnrollCourses,
	sendCollabrationEmail,
} from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "../notifications/Success";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getDashboard } from "../../redux/actions/Home";

const Enrollment = ({ data }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [check, setChecked] = useState(true);
	const [confirm, setConfirm] = useState(!data.isSensitive);
	const [isDisable, setIsDisable] = useState(data.isSensitive || true);
	const [loader, setLoader] = useState(false);
	const [isFilter, setIsFilter] = useState(data?.isAcademic || !data?.support);
	const [isEnrol, setEnrol] = useState(isFilter || data.jEnroll ? 3 : 1);
	const [isOption, setIsoption] = useState();
	const [showEnrollmentRewardPopup, setShowEnrollmentRewardPopup] = useState(
		data.jEnroll ? true : false
	);
	const [isSupport, setIsSupport] = useState(false);
	const {
		defaultChildData,
		dimension,
		courseEnrollResponse,
		response,
		enrollCourseResponse,
		loggedInUser,
		setting_responseOK,
	} = useSelector((state) => state.collections);

	const [collabEmailData, setCollabEmailData] = useState({
		userId: loggedInUser?.id,
		childFirstName: defaultChildData?.firstName,
		childName: defaultChildData?.name,
		courseName: data?.name,
		parentCollabScreen: data?.collabScreen,
		parentCollabEmail: data?.collabEmail,
	});

	//	From Journey enroll
	useEffect(() => {
		if (enrollCourseResponse) {
			closePopup();
			toast.info(<Success response={enrollCourseResponse} />, {});
			dispatch(enrollCourseJourny());
			dispatch(getJournyCourseData());
			dispatch(showModal());
			//	history.push(PATHS.LEARNER_JOURNEY_STR + data?.userId);
			history.push(PATHS.LEARNER_JOURNEY_STR + defaultChildData?.id);
		}
	}, [enrollCourseResponse]);

	//	For single course enroll
	useEffect(() => {
		if (courseEnrollResponse) {
			dispatch(showModal({ isHighLIghtCourseId: data.id }));
			data.isEnrolled = true;
			let activitySeq = getSequnceSort(data?.activities);
			if (data?.activities?.length > 0) {
				activitySeq?.map((vl, key) => {
					if (
						activitySeq[key]?.sequence === 1 &&
						activitySeq[key]?.completion >= 100
					) {
						if (activitySeq[1]?.sequence === 2) {
							activitySeq[1].isLocked = false;
						}
					}
				});
			}
			setLoader(false);
			closePopup();
			dispatch(lockPopup());
			dispatch(resetEnroll());
			dispatch(parentToolsModal({ isConfirmation: true, data: data }));
			if (getUrlSegment()[0] === "home") {
				dispatch(getStartEnrollCourses(defaultChildData.id));
			}

			/*
						if (data?.collabEmail) {
							dispatch(sendCollabrationEmail(loggedInUser?.id, collabEmailData));
						}
						*/
		}
	}, [courseEnrollResponse]);

	useEffect(() => {
		if (response) {
			setLoader(false);
			closePopup();
			dispatch(lockPopup());
			dispatch(getJournyCourses(defaultChildData?.id, data?.journeyId));
		}
	}, [response]);

	const closePopup = () => {
		dispatch(enrollModal());
		dispatch(enrollmentPopup());
	};

	const handleOption = (value) => {
		setIsoption(value);
		if (confirm) {
			setIsDisable(false);
		}
		if (value === "option1") {
			setIsSupport(true);
		} else {
			setIsSupport(false);
		}
	};

	let currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 4);
	let dateObj = [];
	for (let i = 0; i < 3; i++) {
		let futureDate = new Date(currentDate);
		futureDate.setDate(currentDate.getDate() + 4);
		if (i === 0) {
			dateObj.push(formatDate(currentDate));
		}
		dateObj.push(formatDate(futureDate));
		currentDate = futureDate;
	}

	const _kcChecked = () => {
		setChecked(!check);
	};
	const _confirm = () => {
		if (isOption) {
			setIsDisable(false);
		}
		setConfirm(!confirm);
	};

	// useEffect(() => {
	//   if (setting_responseOK?.success) {
	//     dispatch(showModal());
	//     dispatch(parentLoginAction());
	//     // dispatch(resetResponse());

	//     if (data?.isJourneyEnroll) {
	//       console.log("hiiiii1111")
	//       setLoader(true);
	//       dispatch(
	//         enrollFromCourseJourney(
	//           defaultChildData?.id,
	//           data?.journeyId,
	//           data?.courseIds,
	//           check
	//         )
	//       );
	//     } else if (data?.isJourneyModelEnroll) {
	//       console.log("hiiiii22222")
	//       setLoader(true);
	//       dispatch(
	//         enrollCourseJourny(defaultChildData?.id, data?.courseIds, "", "", check)
	//       );
	//     } else {
	//       console.log("hiiiii3333")
	//       if (data?.dimId) {
	//         data.dimension = { key: data.dimId, name: data.dimName };
	//       }
	//       setLoader(true);
	//       dispatch(
	//         courseEnrollment(
	//           defaultChildData?.id,
	//           data?.dimension,
	//           data?.skillId,
	//           data?.id,
	//           dimension,
	//           data?.dimension?.name,
	//           check,
	//           isSupport
	//         )
	//       );
	//     }
	//   }
	// }, [setting_responseOK]);

	const _enroll = () => {
		// if(data.isSensitive){
		// 	dispatch(parentLoginAction("verifyUser"))
		// 	console.log("hiiiiii1111", data)
		// 	return false;
		// }
		// dispatch(parentLoginAction(true));
		// return false;
		/*
				if (data.dim) {
					setLoader(true);
					dispatch(
						courseEnrollment(
							defaultChildData?.id,
							data.dim,
							data.skillId,
							data.id,
							dimension,
							data.dim.name,
							check,
							isSupport
						)
					);
				}
				*/
		if (data?.isJourneyEnroll) {
			setLoader(true);
			dispatch(
				enrollFromCourseJourney(
					defaultChildData?.id,
					data?.journeyId,
					data?.courseIds,
					check
				)
			);
		} else if (data?.isJourneyModelEnroll) {
			setLoader(true);
			dispatch(
				enrollCourseJourny(defaultChildData?.id, data?.courseIds, "", "", check)
				/*
								enrollCourseJourny(
									data?.userId,
									data?.courseIds,
									data?.dimDetails[0],
									data?.dimDetails[1],
									check
								)
								*/
			);
		} else {
			if (data?.dimId) {
				data.dimension = { key: data.dimId, name: data.dimName };
			}
			setLoader(true);
			dispatch(
				courseEnrollment(
					defaultChildData?.id,
					data?.dimension,
					data?.skillId,
					data?.id,
					dimension,
					data?.dimension?.name,
					check,
					isSupport
				)
			);
		}
	};

	return (
		<>
			<div className="newinfo_popupdimension enrollZindex newEnrollCoursPopup">
				<div className="modal show d-flex">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.mortarboard} className="mr-2" />
											Enroll: {data.name}
										</span>
										<button
											className="btn btn-primary"
											onClick={() => closePopup()}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							{data?.isAcademic ? (
								<div className="modal-body p-0modal-body parents_Support p-0">
									<div className="newenrolledpopup ">
										<h3
											data-toggle="collapse"
											href="#newenrollepopup2"
											aria-expanded="true"
											className="flex HomeProgresstilt"
										>
											Course Evaluation
										</h3>
										<div
											className="newenrollepopup panel-collapse show"
											id="newenrollepopup2"
										>
											<h4 className="mb-2 text-left">
												Your course progress is calculated based on Proficiency,
												Completion, and Pace.{" "}
											</h4>
											<div className="Course_evaluation">
												<div className="skillprogrs">
													<span>Progress</span>
												</div>

												<div className="progressstyl">
													<span className="proficencyprog">
														<img src={image.blueArrow} alt="" />
														<div className="position-relative Coursecompprcent m-auto">
															<p className="">
																<RoundProgress data={60} className="m-1" />
															</p>
														</div>
														<p>Proficiency</p>
													</span>
													<span className="CompltProgress">
														<img src={image.smallArrow} alt="" />
														<div className="position-relative Coursecompprcent m-auto">
															<p className="">
																<RoundProgress data={30} className="m-1" />
															</p>
														</div>
														<p>Completion</p>
													</span>
													<span className="TimProgress">
														<img src={image.blueArrow} alt="" />
														<div className="position-relative Coursecompprcent m-auto">
															<p className="">
																<RoundProgress data={10} className="m-1" />
															</p>
														</div>
														<p>Pace</p>
													</span>
												</div>
											</div>
											<h4 className="recommendtxt">Recommended Pace </h4>
											<div className="coursesteps">
												<ul className="flex">
													<li>
														<span className="startsteps">Start</span>

														<span className="Completeindays">
															<p>4 days</p>
															<img src={image.smallArrow} alt="" />
														</span>
														<p className="m-0">
															<strong>Today</strong>
														</p>
													</li>
													{dateObj.map((vl, ky) => (
														<li className={ky === 3 ? "laststep" : ""}>
															<span className="Coursesteps">S{ky + 1}</span>
															<span className="Completeindays">
																<p>4 days</p>
																<img src={image.smallArrow} alt="" />
															</span>
															<p>{vl}</p>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className="modal-body p-0modal-body parents_Support p-0">
									<div className="newenrollepopup mt-2">
										<h3
											data-toggle="collapse"
											href="#newenrollepopup"
											aria-expanded="true"
											class="HomeProgresstilt"
										>
											<img src={image.settingicons} alt="" /> Course Settings
										</h3>
										<div
											className="newenrollepopup panel-collapse collapse show "
											id="newenrollepopup"
										>
											<h4 className="mb-3 mt-3">
												For optimal learning, we recommend you keep knowledge
												checks and module exercises required:
												{/* <img src={image.chat_icon} className="chat_icon" alt="" /> */}
											</h4>
											<div className="newcoursesetting flex  align-items-start">
												<div>
													<h4 className="p-0">
														Knowledge Checks and Module Exercises Required
													</h4>
													<p>
														You can change this from the settings module in
														your profile.
													</p>
												</div>
												<div class="form-check form-switch m-0 flex  p-0 mt-2">
													<label
														class="form-check-label pointer"
														for="flexSwitchCheckDefault"
													></label>
													<input
														className="form-check-input avltogglebutton pointer"
														type="checkbox"
														checked={check}
														role={"switch"}
														id="flexSwitchCheckDefault"
														onChange={() => _kcChecked()}
													/>
												</div>
											</div>
											{/* <h5 class="text-left pl-0 pt-3 pb-3"><i class="fa-regular fa-note mr-2"></i>
											Note: Watch the entire video / illustration to earn 10 
											points and get completion credit!</h5> */}
										</div>
									</div>
									<div className="newenrollepopup parent_Support mb-3 mt-2">
										<h3 class=" HomeProgresstilt">
											<img src={image.Supporticon} alt="" /> Parent Support
										</h3>
										<div class="ScenecerelateddQuiz p-0  pl-2 w-100 border-0">
											<div class="signupType mt-3">
												<h4 class="mb-3">
													<strong class="">
														Select how you'd like to support{" "}
														{getCapitalized(defaultChildData?.firstName)}'s
														learning:
														<span class="mandatoryField">*</span>
													</strong>
												</h4>

												<div class="flexone mb-3">
													<label class="Selcheckbox m-0 ActiveQQst">
														<span class="QQtitle">
															I will collaborate with and support{" "}
															{getCapitalized(defaultChildData?.firstName)}
														</span>
														<input
															type="radio"
															name="skill0"
															onClick={() => handleOption("option1")}
														/>
														<span class="checkmark"></span>
													</label>
												</div>
												<div class="flexone mb-3">
													<label class="Selcheckbox m-0 ActiveQQst">
														<span class="QQtitle">
															I am ok with {getCapitalized(defaultChildData?.firstName)}{" "} managing on their own
														</span>
														<input
															type="radio"
															name="skill0"
															onClick={() => handleOption("option2")}
														/>
														<span class="checkmark"></span>
													</label>
												</div>
												{data?.collabEmail && (
													<p className="mt-3">
														We will send curated tips and insights to support{" "}
														{getCapitalized(defaultChildData?.firstName)}{" "}
														directly to your inbox. You can also find them in
														the{" "}
														<span className="heghlightedstar">
															{" "}
															<img src={image.gensettings} />
															Parent Tools
														</span>{" "}
														menu at the bottom left of the course card.
														{/* You can find helpful tips for supporting {getCapitalized(defaultChildData?.firstName)} in the <span className="heghlightedstar"> <img src={image.gensettings} />Parent Tools</span> menu at the bottom left of the course card. */}
														{/* We will send curated tips and insights to support {getCapitalized(defaultChildData?.firstName)} directly to your inbox.
															You can also find them in the <span className="heghlightedstar"> <img src={image.gensettings} />Parent Tools</span> menu at the bottom left of the
															course card. */}
													</p>
												)}
											</div>
										</div>
										{/* <div class="dropdownsec heigh_light_star pb-3 mt-3">
											    <span>*</span>
												<img src={image.parrent_support} className="w-100 border" />
												<i class="fa-solid fa-arrow-up-long"></i>

											</div> */}
									</div>

									{data?.isSensitive && (
										<div className="newenrollepopup paddingbtmpopup mb-3">
											<h3 class="HomeProgresstilt">Course Confirmation</h3>
											<div className="newenrollepopup">
												<div className="signupType mb-2 mt-3">
													<label className={`Selcheckbox ActiveQQst m-0`}>
														<span className="QQtitle">
															{" "}
															I have reviewed the course description and approve
															of my child enrolling in this course.
															<span class="mandatoryField">*</span>
														</span>
														<input
															type="radio"
															id="Public"
															name="dimensionQuestion"
															value="PUBLIC"
															onClick={() => _confirm()}
															checked={confirm}
														></input>
														<span className="checkmark"></span>
													</label>
												</div>
											</div>
										</div>
									)}
								</div>
							)}
							<div className="modal-footer dontshowagain">
								<div className="form-group BDsubmitbutton m-0 d-flex">
									<div className="buttonDistribotion">
										{!loader ? (
											<>
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5 cancelbutton"
													onClick={() => closePopup()}
												>
													<i className="fa-solid fa-xmark"></i>Close
												</button>
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5"
													disabled={isDisable}
													onClick={() => _enroll()}
												>
													<i className="fa-solid fa-paper-plane mr-2"></i>
													Enroll
												</button>
											</>
										) : (
											<div className="buttonDistribotion justify-content-end">
												<button
													className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
													disabled
												>
													<span className="RounAnimation mr-1"></span> Please
													Wait...
												</button>
											</div>
										)}
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

export default Enrollment;

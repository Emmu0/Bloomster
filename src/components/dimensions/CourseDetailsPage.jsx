import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../resources/images";
import { getSequnceSort, getProfileName } from "../../utils/helper";
import { ShimmerCategoryList, useParams } from "../../utils/Packages";

import {
	getActivityRating,
	getCourseRating,
	getProviderRating,
	addRatingsData,
	courseJourney,
	courseEnrollment,
	settingVerify,
} from "../../redux/actions/APIs";

import ProviderProfile from "../controls/ProviderProfile";
import AddRatings from "../widget/AddRatings";
import {
	enrollModal,
	setCourseModal,
	setProviderModal,
	showModal,
	setShowMore,
	parentToolsModal,
	showModalObj,
	parentLoginAction,
	sensitiveModal,
	sensitiveVideo,
	enrollmentPopup,
	courseSectionModal,
} from "../../redux/actions";
import CourseContent from "./CourseContent";
import CourseJourney from "./CourseJourney";
import ReadMore from "../controls/ReadMore";
import CourseRatings from "../controls/CourseRatings";
import Vicky from "../controls/Vicky";
import { getCourseDetails } from "../../redux/actions/Home";
import { ViewVideo } from "./activity";
import SensitiveModal from "../base/SensitiveModal";

const CourseDetailsPage = ({ data, handlePopUp }) => {

	const dispatch = useDispatch();

	const path = useParams();
	const [showWizad, setShowWizad] = useState({ type: "", status: false });
	const [ratingPopup, setRatingPopup] = useState(false);
	const [activityData1, setActivityData] = useState("");
	const [myRating, setMyRating] = useState(0);
	const [ratingClass, setRatingClass] = useState(false);

	const {
		ratingData,
		courseRating,
		getSelectedUser,
		selectedDim,
		dimension,
		response,
		defaultChildData,
		modalData,
		journeyData,
		setting_responseOK,
		viewSensitiveModal,
		loggedInUser,
		courseSectionObj
	} = useSelector((state) => state.collections);

	useEffect(() => {
		dispatch(courseJourney());
		if (data && data?.id) {
			dispatch(courseJourney(data.id));
		}
	}, []);

	useEffect(() => {
		if (!response) {
			setRatingPopup(false);
		}
	}, [response]);

	const showRating = (data, activityData) => {
		setActivityData(activityData);
		setMyRating(data?.records);
		setRatingPopup(!ratingPopup);
		setShowWizad(false);

		// setShowWizad({ type: showWizad.type, status: false });
	};

	const showRatingWizad = (data, type) => {
		setShowWizad(undefined);
		if (type === "course") {
			dispatch(getCourseRating(getSelectedUser?.id, data?.id)).then(() => {
				setShowWizad({ type: type, status: true });
				dispatch(getActivityRating(data?.id)).then(() => {
					setMyRating(data?.id);
				});
			});
		} else if (type === "provider") {
			dispatch(getActivityRating(data?.provider?.id)).then(() => {
				setShowWizad({ type: type, status: true });
				dispatch(getProviderRating(path?.id, data?.provider?.id)).then(() => {
					setMyRating(ratingData?.records);
				});
			});
		} else {
			dispatch(getActivityRating(data?.id)).then(() => {
				setShowWizad({ type: type, status: true });
				dispatch(getProviderRating(path?.id, data?.id)).then(() => {
					setMyRating(ratingData?.records);
				});
			});
		}
	};

	const saveRating = async (rating, userId, data) => {
		let ratingType = "activities";

		if (activityData1?.type === "PROVIDER") {
			ratingType = "course";
		}

		if (activityData1?.id) {
			dispatch(
				addRatingsData(
					rating,
					activityData1?.id,
					userId,
					ratingType,
					dimension,
					selectedDim,
					path?.id
				)
			);
		}
	};

	const [enrollData, setEnrollData] = useState(undefined);

	useEffect(() => {
		if (setting_responseOK?.success && courseSectionObj?.sectionRecord) {
			dispatch(showModal());
			dispatch(enrollModal(courseSectionObj?.sectionRecord));
			dispatch(courseSectionModal());
		}
	}, [setting_responseOK, enrollData]);

	const handleEnrollment = (record) => {
		if (record?.type === "VICKY" || defaultChildData?.isSubscriber) {
			if (record.isSensitive) {
				setEnrollData(record);
				dispatch(courseSectionModal({ sectionRecord: record }));
				dispatch(showModalObj({ isCourse: true, isSection: false }));
				dispatch(parentLoginAction("verifyUser"));
				return false;
			} else {
				dispatch(enrollModal(record));
			}
		} else {
			handlePopUp(record, record?.skillId, record.dimension?.value, {
				key: record.dimension?.key,
			});
		}
	};

	useEffect(() => {
		if (modalData?.type == "JourneyShimmer") {
			setTimeout(() => {
				dispatch(showModal());
			}, 800);
		}
	}, []);
	const _closeModal = () => {
		dispatch(getCourseDetails());
		dispatch(setCourseModal());
		dispatch(setShowMore());
	};

	const setProviderPopup = (provider, data) => {
		provider.courseObj = data;
		dispatch(setProviderModal(provider));
	};

	const vickyPlay = () => {
		dispatch(setShowMore(true));
	};

	const [loader, setLoader] = useState(false);
	const _enroll = (data) => {
		setLoader(true);
		dispatch(
			courseEnrollment(
				defaultChildData?.id,
				data?.dimension,
				data?.skillId,
				data?.id,
				dimension,
				data?.dimension?.name,
				false,
				false
			)
		).then(() => {
			dispatch(parentToolsModal({ isConfirmation: true, data: data }));
			setLoader(false);
			data.isEnrolled = true;
		});
	};

	const journeyModal = (data) => {
		if (data?.totalLevel > 1) {
			dispatch(courseJourney(data?.id));
			dispatch(parentToolsModal({ isJourneyScreen: true, data: data }));
		}
	};

	const [isLearnMore, setIsLearnMore] = useState(false);
	const _learnMore = () => {
		if (loggedInUser?.role?.name === "PROVIDER") {
			dispatch(sensitiveModal(true));
			return;
		}
		setIsLearnMore(true);
		dispatch(parentLoginAction("verifyUser"));
		dispatch(enrollmentPopup(data));
		dispatch(showModalObj({ isCourse: true, isLearnMore: true }));
		setEnrollData();
	};

	useEffect(() => {
		if (setting_responseOK?.success && isLearnMore) {
			dispatch(parentLoginAction(false));
			dispatch(sensitiveVideo(false));
			dispatch(sensitiveModal(true));
			dispatch(showModal());
			setIsLearnMore(false);
		}
	}, [setting_responseOK]);

	const close = () => {
		dispatch(settingVerify());
		dispatch(sensitiveModal(false));
		dispatch(showModal());
		dispatch(sensitiveVideo(false));
	};
	return (
		<>
			<div className="halfPagePOpup coursedetailpopuppage">
				<div
					className={`modal d-flex ${ratingClass ? "overflow-hidden" : " "}`}
					id="coursedetailpage"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content w-100 max-width-100">
							<div className="modal-header">
								<div className="heading border-0 p-0">
									<h2 className="flex">
										<span>
											<img src={image.information} alt="..." className="mr-2" />
											Course Details
										</span>

										<button
											data-dismiss="modal"
											className="btn btn-primary"
											onClick={() => _closeModal()}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body p-0">
								<section>
									<div className="Coursebanner">
										<div className="container ">
											<div className="CoursebannerWrap flex align-items-start">
												<div className="bannerleft">
													<div className="coursedtlImage">
														{data?.imageUrl ? (
															<img src={data?.imageUrl} alt="..." />
														) : (
															<img
																alt="..."
																className="img-fluid"
																src={image.noImage}
															/>
														)}
													</div>
												</div>
												<div className="bannerright coursedetailbnr">
													<div className="PageTitle">
														<div className="flex p-0">
															<div>
																<h3>{data && data.name}</h3>
																<div className="ratepopupp flex position-relative ">
																	<CourseRatings
																		data={data}
																		setRatingClass={setRatingClass}
																	/>
																</div>
															</div>

															{data?.provider?.name && (
																<div className="ProCoursename d-flex align-items-center mt-2">
																	<span
																		className="TeacherActivityimg mr-2 pointer"
																		onClick={() =>
																			setProviderPopup(data?.provider, data)
																		}
																	>
																		{data?.provider?.imageUrl ? (
																			<img
																				src={data?.provider?.imageUrl}
																				alt="..."
																			/>
																		) : (
																			<span className="ProfileChild pointer">
																				{getProfileName(data?.provider)}
																			</span>
																		)}
																	</span>
																	<div className="teachername">
																		<span
																			className="pointer"
																			onClick={() =>
																				setProviderPopup(data?.provider, data)
																			}
																		>
																			{data?.provider?.name}
																		</span>

																		{Object.keys(data.provider).length > 0 &&
																			data?.type === "PROVIDER" && (
																				<ProviderProfile
																					showRatingWizad={showRatingWizad}
																					data={data}
																					setRatingClass={setRatingClass}
																					provId={data.provider}
																				/>
																			)}
																	</div>
																</div>
															)}
														</div>

														<div className="Procourselevel flex">
															{/* {(getSelectedUser?.level?.name ||
															defaultChildData) && (
																<span className="">
																	<img src={image.mortarboard} alt="" /> Grade{" "}
																	<strong>
																		{getSelectedUser?.level?.name
																			? getSelectedUser?.level?.name
																			: defaultChildData?.level?.name}
																	</strong>
																</span>
															)} */}

															<span
																className={`${data?.totalLevel > 1 ? "pointer" : ""
																	}`}
																onClick={() => journeyModal(data)}
															>
																<>
																	<img
																		src={image.sCourseleve3lcon}
																		className="mr-2"
																		alt=""
																	/>
																	{/* <strong>Level {data?.level}</strong> */}
																	<strong>
																		{data?.isAcademic ? "Course " : "Level "}
																		{data?.level}{" "}
																		{data?.totalLevel > 1
																			? "of " + data?.totalLevel
																			: ""}
																	</strong>
																</>
															</span>

															{data?.type === "PROVIDER" && !data?.isLearnerRightPanel &&
																getSelectedUser?.role?.name !== "PROVIDER" &&
																data?.activities?.length > 0 && (
																	<div
																		className="EnrolledCourse"
																		key={Math.random()}
																	>
																		{!data?.isEnrolled ? (
																			!loader ? (
																				<div className="priceWrap p-0">
																					<button
																						className={`btn-blue btn-login d-block w-auto m-0 ml-auto`}
																						onClick={() =>
																							data?.isAcademic
																								? _enroll(data)
																								: handleEnrollment(data)
																						}
																					>
																						<i className="fa-solid fa-paper-plane mr-2"></i>{" "}
																						Enroll
																					</button>
																				</div>
																			) : (
																				<div className="buttonDistribotion justify-content-end">
																					<button
																						className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
																						disabled
																					>
																						<span className="RounAnimation mr-1"></span>{" "}
																						Please Wait...
																					</button>
																				</div>
																			)
																		) : (
																			<div className="priceWrap enrolledBtn justify-content-end p-2">
																				<span className="flex">
																					<img
																						src={image.enrolledicon}
																						className="mr-1"
																						alt=""
																					/>
																					Enrolled
																				</span>
																			</div>
																		)}
																	</div>
																)}
														</div>

														<div className="CourseDetails">
															<h4 className="position-relative">
																About Course
																<p className="your_AudioIocn">
																	<Vicky
																		vickyPlay={vickyPlay}
																		text={data.description}
																	/>
																</p>
															</h4>
															<p>{data?.description}</p>
														</div>
														{data?.isSensitive && (
															<p className="senstivenote">
																<strong className="mr-1">
																	<i class="fa-regular fa-note mr-2"></i>Note:
																</strong>
																<strong>
																	{" "}
																	Some material in this course can be considered
																	sensitive. Parental discretion is advised.{" "}
																	{data?.sensitivecontent && (
																		<>
																			<span
																				className="pointer linkblue"
																				onClick={() => _learnMore()}
																			>
																				Learn more
																			</span>
																		</>
																	)}
																</strong>
															</p>
														)}
													</div>
												</div>
											</div>

											{journeyData ? (
												<>
													{data?.activities && data?.activities.length > 0 && (
														<div className="CourseDetails pt-3">
															<h4>
																{data && data.name}{" "}
																{!data?.isAcademic &&
																	"(Level" + data?.level + ")"}
															</h4>
															{getSequnceSort(data?.activities).map(
																(val, key) => {
																	return (
																		<React.Fragment key={key}>
																			<CourseContent
																				data={val}
																				value={data}
																				index={key}
																				_closeModal={_closeModal}
																			/>
																		</React.Fragment>
																	);
																}
															)}
														</div>
													)}

													{/* <CourseJourney data={data} /> */}
												</>
											) : (
												<ShimmerCategoryList
													items={3}
													categoryStyle="STYLE_SIX"
												/>
											)}
										</div>
									</div>
								</section>
							</div>
							<div className="modal-footer ">
								<div className="input-group full-Width-group basic_details_form flex m-0">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<button
											type="submit"
											className="btn-blue btn-login d-block mb-5 m-0 ml-auto cancelbutton"
											onClick={() => _closeModal()}
										>
											<i className="fa-solid fa-xmark mr-2"></i>
											Close
										</button>

										{data?.type === "PROVIDER" && !data?.isLearnerRightPanel &&
											getSelectedUser?.role?.name !== "PROVIDER" && (
												<div className="EnrolledCourse" key={Math.random()}>
													{/* {!data?.isEnrolled ? (
													<button
														className="btn-blue btn-login d-block ml-auto  w-auto"
														disabled
														key={data.id}
													>
														<span className="RounAnimation mr-1"></span> Please
														Wait...
													</button>
												) : ( */}
													{!data?.isEnrolled &&
														data?.activities?.length > 0 && (
															<React.Fragment>
																{!loader ? (
																	<button
																		className="btn-blue btn-login d-block mb-5 ml-3"
																		onClick={() =>
																			data?.isAcademic
																				? _enroll(data)
																				: handleEnrollment(data)
																		}
																	>
																		<i className="fa-solid fa-paper-plane mr-2"></i>{" "}
																		Enroll
																	</button>
																) : (
																	<div className="buttonDistribotion justify-content-end">
																		<button
																			className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
																			disabled
																		>
																			<span className="RounAnimation mr-1"></span>{" "}
																			Please Wait...
																		</button>
																	</div>
																)}
															</React.Fragment>
														)}
												</div>
											)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{ratingPopup && (
					<AddRatings
						saveRating={saveRating}
						showRating={showRating}
						data={data}
						myRating={courseRating?.records}
						ratingUserId={getSelectedUser?.id}
					/>
				)}
			</div>
			{viewSensitiveModal && <SensitiveModal close={close} data={data} />}
		</>
	);
};
export default CourseDetailsPage;

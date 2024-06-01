/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SelectPicker, Rating, useForm } from "../../utils/Packages";
import RoundProgress from "../controls/RoundProgress";
import * as image from "../../resources/images";
import {
	EnrollCoursesJson,
	GetRibbon,
	enrollCourseJourny,
	getJournyCourseData,
	getJournyData,
	getJournyEnrollData,
	getRewardData,
} from "../../redux/actions/APIs";
import {
	getDimIcon,
	getImage,
	getSequnceSort,
	getCapitalized,
} from "../../utils/helper";
import {
	showModal,
	setSubscribeModal,
	enrollModal,
	getHelpModal,
	showModalObj,
	parentLoginAction,
	resetResponse,
	subscriptionPageNode,
} from "../../redux/actions";
import DimensionCourseSkillsPopup from "./DimensionCourseSkillsPopup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "../notifications/Success";
import SubscribePopUp from "../dimensions/SubscribePopUp";
import Subscription from "../subscription/Subscription";
import { PATHS } from "../../utils";
import SkillGrowth from "../home/SkillGrowth";
import DimensionGrowth from "../home/DimensionGrowth";
import CourseDescriptionPopup from "./CourseDescriptionPopup";
import CourseCard from "../../components/dimensions/course/intellectual/CourseCard";
import { ShimmerCategoryList } from "react-shimmer-effects";
import RewardPopUp from "../base/RewardPopUp";
import Certificate from "../base/Certificate";
export default function LearnerEnrolledCoursePopUp({ childName }) {
	const dispatch = useDispatch();
	const params = useParams();
	const {
		enrollCoursesJson,
		defaultChildData,
		loggedInUser,
		getJournyCourseResponse,
		getSelectedUser,
		enrollCourseResponse,
		getdimension,
		selectedDim,
		courseItem,
		dimension,
		childNm,
		alluserdetails,
		modalData,
		journeyEnrollResponse,
		setting_responseOK,
		modalObj,
	} = useSelector((state) => state.collections);

	const [sortCourses, setSortCourses] = useState([]);
	const [showInfoPopup, setShowInfoPopup] = useState(false);
	const [infoPopupData, setinfoPopupData] = useState({});
	const [enrollLoader, setEnrollLoader] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [showSubs, setShowSubs] = useState(false);
	const [selectedDimension, setSelectedDimension] = useState([]);
	const [showDimInfo, setShowDimInfo] = useState(false);
	const [showCourseInfo, setShowCourseInfo] = useState(false);
	const [courseInfoData, setCourseInfoData] = useState([]);
	const [courseData, setCourseData] = useState([]);
	const [courseJourneyData, setCourseJourneyData] = useState([]);
	const [openReward, setOpenReward] = useState();
	const [certificate, setCertificate] = useState();
	const [certificateData, setCertificateData] = useState();
	const [certificateskilldata, setcertificateskilldata] = useState();

	const history = useHistory();

	const {
		register,
		control,
		formState: { errors },
	} = useForm({ mode: "onTouched" });

	const closeSub = () => {
		setShowSubs(false);
		dispatch(subscriptionPageNode());
	};

	useEffect(() => {
		if (defaultChildData?.isJourney) {
			dispatch(
				getJournyEnrollData(defaultChildData?.id, defaultChildData?.level?.id)
			);
		} else {
			let courses = getSequnceSort(getJournyCourseResponse?.records);
			setSortCourses(courses);
		}
	}, []);

	useEffect(() => {
		if (getJournyCourseResponse) {
			let myArray = [];
			getJournyCourseResponse?.records?.map((data, key) =>
				getSequnceSort(data?.skills)?.map((value, key1) =>
					value?.courses?.map((course, key2) => {
						myArray.push(setDimensionSkill(data, value, course, ""));
					})
				)
			);
			setCourseJourneyData(myArray);
		}
	}, [getJournyCourseResponse]);

	//	console.log('myArray : ', getJournyCourseResponse);
	useEffect(() => {
		if (journeyEnrollResponse && journeyEnrollResponse?.records?.length > 0) {
			let myArray = [];
			getSequnceSort(journeyEnrollResponse?.records)?.map((dim, index) => {
				dim?.skills?.map((skill, key) => {
					skill?.journey?.map((journey, i) => {
						let obj = {
							dimName: dim?.name,
							dimDesc: dim?.description,
							dimAlert: dim?.alert,
						};
						obj.skillName = skill?.name;
						obj.skillDesc = skill?.description;
						obj.skillAlert = skill?.alert;
						obj.courseName = journey?.course?.name;
						obj.courseDesc = journey?.course?.description;
						obj.imageUrl = journey?.course?.imageUrl;
						obj.isEnrolled = journey?.course?.isEnrolled;
						myArray.push(obj);
					});
				});
			});
			setSortCourses(myArray);
		}
	}, [journeyEnrollResponse]);

	const setDimensionSkill = (dimension, skill, course, journey) => {
		course.dimension = {
			key: dimension?.id,
			value: dimension?.name,
			name: dimension?.name,
			description: dimension?.description,
		};
		course.skills = {
			skillId: skill?.id,
			skillName: skill?.name,
			name: skill?.name,
			description: skill?.description,
			id: skill?.id,
			alert: skill?.alert
		};
		course.journey = journey;
		return course;
	};

	const handleShowInfoPopup = (result, name, description, data, type) => {
		setSelectedDimension(data?.dimName);
		setShowInfoPopup(result);
		setinfoPopupData({
			name: name,
			description: description,
			alert: data?.skillAlert,
		});
	};

	const _closeEnroll = () => {
		dispatch(showModal());
		dispatch(getJournyCourseData());
		document.getElementById("pathwayinfopopup").classList.remove("PathwaySelLit")

	};

	let [isSensitiveCount, setIsSensitiveCount] = useState(0);
	const [enrollData, setEnrollData] = useState({});

	const [pathwayValue, setPathwayValue] = useState();

	const handlePathway = (e) => {
		setPathwayValue(e.target.value);
	}

	const handleEnroll = () => {
		let courseIds = [];
		let isSensitive = false;
		let isSupport = false;
		let alreadyEnroll = false;
		let count = 1;
		getJournyCourseResponse.records?.map((value, i) => {
			value?.skills?.map((skill, index) => {
				skill?.courses?.map((course, key) => {
					let obj = {
						skillId: skill?.id,
						courseId: course?.id,
						sequence: count++,
						kcRequired: true,
						isSupport: course?.collabEmail ? true : false,
						isEnrolled: true,
						pathwayName: defaultChildData?.firstName + " Custom Pathway",
					};
					courseIds.push(obj);
					if (course?.isSensitive && !isSensitive) {
						isSensitive = course?.isSensitive;
					}
					if (course?.collabEmail && !isSupport) {
						isSupport = true;
					}
					if (!course?.isEnrolled) {
						alreadyEnroll = true;
					}
				});
			});
		});
		if (!defaultChildData?.isSubscriber) {
			dispatch(setSubscribeModal(courseIds));
			return false;
		}

		let journeyDataArray = {
			journeyName: pathwayValue,
			journeyCourses: courseIds

		};

		console.log('journeyDataArray : ', journeyDataArray);

		let enrollObj = {
			name: "Learner Pathway",
			isJourneyModelEnroll: true,
			courseIds: journeyDataArray,
			isSensitive: isSensitive,
			isAcademic: false,
			collabEmail: isSupport,
			isEnollmentpopupShow: true,
		};

		setEnrollData(enrollObj);

		if (isSensitive) {
			dispatch(showModalObj({ isPathway: true }));
			dispatch(parentLoginAction("verifyUser"));
			return false;
		}

		if (alreadyEnroll) {
			dispatch(enrollModal(enrollObj));
		} else {
			//	setLoader(true);
			dispatch(
				enrollCourseJourny(defaultChildData?.id, journeyDataArray, "", "", false)
			);
		}
	};

	useEffect(() => {
		if (
			setting_responseOK?.success &&
			enrollData?.isEnollmentpopupShow &&
			modalObj
		) {
			dispatch(parentLoginAction());
			dispatch(resetResponse());
			//	dispatch(showModal());
			dispatch(enrollModal(enrollData));
			dispatch(showModalObj());
			let obj = enrollData;
			obj.isEnollmentpopupShow = false;
			setEnrollData(obj);
		}
	}, [setting_responseOK]);

	// const handleEnroll = () => {
	// 	if (!defaultChildData?.isSubscriber) {
	// 		dispatch(setSubscribeModal(getJournyCourseResponse.records));
	// 		setShowPopUp(true);
	// 		return false;
	// 	}
	// 	let selectedDim1 = getdimension.records.find(
	// 		(data) => data?.id === params?.dimId
	// 	);
	// 	let dimData = selectedDim;
	// 	if (!dimData) {
	// 		dimData = {
	// 			key: selectedDim1?.id,
	// 			value: selectedDim1?.name,
	// 		};
	// 	}

	// 	getJournyCourseResponse.records?.map((value, index) => {
	// 		if (value?.isSensitive) {
	// 			setIsSensitiveCount(isSensitiveCount++);
	// 		}
	// 	});

	// 	if (modalData?.childId) {
	// 		dispatch(
	// 			enrollModal({
	// 				name: "Learner journey",
	// 				isJourneyModelEnroll: false,
	// 				dimDetails: [dimData, dimension],
	// 				courseIds: getJournyCourseResponse.records,
	// 				userId: modalData.childId,
	// 				isSensitive: isSensitiveCount > 0 ? true : false,
	// 				isAcademic: false,
	// 			})
	// 		);
	// 	}
	// };

	const setShowSkillPopup = (result) => {
		setShowInfoPopup(result);
	};

	const showDimensionPopup = (result, name, description, data) => {
		setinfoPopupData({
			name: name,
			description: description,
			alert: data?.dimAlert,
		});
		setShowDimInfo(result);
	};

	const handleCourseInfoData = (result, data) => {
		setShowCourseInfo(result);
		setCourseInfoData(data);
	};

	//	show reward
	const viewReward = (data, isCourse, wk) => {
		setOpenReward(data);
		dispatch(getRewardData(params?.id, data?.id, isCourse));
	};

	//	show certificate
	const viewCertificate = (data, courseData, skills) => {
		setCertificate(data);
		setCertificateData(courseData);
		setcertificateskilldata(skills);
	};

	return (
		<>
			<div className="halfPagePOpup SchoolActivityPopup ljpopups" id="pathwayinfopopup">
				<div
					className="modal fade show d-block"
					id="learnerEnrollCourse"
					role="dialog"
				>
					<div className="modal-dialog modal-lg Skill_popup_half">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.pathwaysicon} alt="" className="mr-2" />
											Recommended Learner Pathway
										</span>
										<button
											className="btn btn-primary"
											onClick={() => _closeEnroll()}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body Subject_Curriculam">
								<div className="ljuserview">
									{!defaultChildData?.isJourney ? (
										<h2 className="mt-3 mb-3">
											{/* Here is a learning journey for{" "}
											{getCapitalized(defaultChildData?.firstName)} */}
											Here is a recommended learner pathway for{" "}
											{getCapitalized(defaultChildData?.firstName)}. Click
											‘Enroll’ to begin.
											{/* Here is a recommended learner journey for {getCapitalized(defaultChildData?.firstName)} based on the skills you selected */}
										</h2>
									) : (
										<h2 className="text-center mt-3 leanerjstament ">
											{getCapitalized(defaultChildData?.firstName)} is enrolled
											in the learning journey below. Please wait for{" "}
											{getCapitalized(defaultChildData?.firstName)} to complete
											it before enrolling in a new learning journey.
										</h2>
									)}
									<div className="input-group patways_name_ent mt-2 mb-2">
										<div className="form-group flexone">
											<label className="mr-3">Pathway Name<span class="mandatoryField">*</span></label>
											<input type="text"
												className={`form-control ${errors.customPathway ? "is-invalid" : ""
													}`}
												{...register("customPathway", {
													onChange: (e) => handlePathway(e),
													required: {
														value: true,
														message: "Pathway name is required",
													},

												})}
											// placeholder="Custom Pathway" 
											/>
										</div>
										<div className="invalid-feedback">
											{errors?.customPathway?.message}
										</div>
									</div>
									{courseJourneyData?.map((value, index) => (
										<React.Fragment key={index}>
											<CourseCard
												data={value}
												skills={value?.skills}
												viewReward={viewReward}
												viewCertificate={viewCertificate}
												isJourneyHalfScreen={true}
												courseData={courseJourneyData}
											/>
										</React.Fragment>
									))}

									{/* <div className='ljuseraddedlist'>
										{sortCourses?.map((value, index) => (
											<div className='ljuserlistitems phyitem flex' key={index}>
												<div className='ljuserlistitemimg'>
													<img src={getImage(value?.imageUrl)} alt='' />
												</div>
												<div className='ljuserlistitemDesc'>
													<h3 className='flex'>
														<span className='flexone'>
															<img
																src={image.CourseTitleIcon}
																className='mr-2 skill_book_icon'
																alt=''
															/>{" "}
															{value?.skillName + " "}
															<span className='flexone'>
																<img
																	src={image.chat_icon}
																	alt=''
																	className='ml-2 pointer'
																	onClick={() =>
																		handleShowInfoPopup(
																			true,
																			value?.skillName,
																			value?.skillDesc,
																			value,
																			"skill"
																		)
																	}
																/>
															</span>
														</span>
														{value.isEnrolled && (
															<span className='JnrEnrCrsCard flexone'>
																<img
																	src={image.enrolledicon}
																	alt=''
																	className='mr-2'
																/>
																Enrolled
															</span>
														)}
													</h3>
													<div className='flex'>
														<div className='ljuserlistitemAsset flexone'>
															<strong>
																<img
																	src={image.mortarboard}
																	alt=''
																	className='mr-2'
																/>
															</strong>
															{value?.courseName}
															<span className='flexone'>
																<img
																	src={image.chat_icon}
																	alt=''
																	className='ml-2 ichat_icon pointer'
																	onClick={() =>
																		handleCourseInfoData(true, {
																			name: value?.courseName,
																			description: value?.courseDesc,
																			imageUrl: value?.imageUrl,
																		})
																	}
																/>
															</span>
														</div>
														<div className='ljuserlistitemAsset flexone'>
															<strong>
																{getDimIcon(value)}
																{" " + value?.dimName}
															</strong>
															<span className='flexone'>
																<img
																	src={image.chat_icon}
																	alt=''
																	className='ml-2 ichat_icon pointer'
																	onClick={() =>
																		showDimensionPopup(
																			true,
																			value?.dimName,
																			value?.dimDesc,
																			value
																		)
																	}
																/>
															</span>
														</div>
													</div>
												</div>
											</div>
										))}
									</div> */}
								</div>
								{/* {console.log(courseItem,"redd")} */}
							</div>
							<div className="modal-footer position-sticky">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											onClick={() => _closeEnroll()}
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
										>
											{" "}
											<i className="fa-solid fa-xmark"></i>Close
										</button>
										<button
											type="submit"
											onClick={() => {
												handleEnroll();
											}}
											data-toggle="modal"
											data-target="#schoolactivity75"
											className="btn-blue btn-login d-block mb-5"
											disabled={!pathwayValue}
										>
											<i className="fa-solid fa-paper-plane mr-2"></i>Enroll
											<span></span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showInfoPopup && (
				<SkillGrowth
					data={infoPopupData}
					dimName={selectedDimension}
					setShowSkillPopup={setShowSkillPopup}
				/>
			)}

			{showDimInfo && (
				<DimensionGrowth
					data={infoPopupData}
					showDimensionPopup={showDimensionPopup}
				/>
			)}

			{showCourseInfo && (
				<CourseDescriptionPopup
					data={courseInfoData}
					handleCourseInfoData={handleCourseInfoData}
				/>
			)}

			{showSubs && <Subscription close={closeSub} />}

			{openReward && (
				<RewardPopUp
					closeReward={viewReward}
					rewardDataWithoutAPI={openReward}
				/>
			)}

			{certificate && (
				<Certificate
					_redirectLesson={viewCertificate}
					certificateData={certificateData}
					certificateskilldata={certificateskilldata}
				/>
			)}
		</>
	);
}

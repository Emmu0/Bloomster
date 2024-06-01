import React, { useEffect } from "react";
import Home from "../Home";
import { ShimmerCategoryList } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { getCapitalized, getSequnceSort } from "../../utils/helper";
import CourseCard from "../dimensions/course/intellectual/CourseCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
	breadcrumb,
	enrollModal,
	setSubscribeModal,
	showModal,
} from "../../redux/actions";
import {
	getAllUsersDetail,
	getJourny,
	getJournyCourses,
	getJournyEnrollData,
	getRewardData,
} from "../../redux/actions/APIs";
import * as image from "../../resources/images";
import RewardPopUp from "../base/RewardPopUp";
import Certificate from "../base/Certificate";
import CourseProgress from "../home/CourseProgress";
import CongratulationCard from "../widget/CongratulationCard";

const JourneyPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const path = useParams();
	const {
		getDimJournyResponse,
		defaultChildData,
		getDimJournyCoursesResponse,
		journeyEnrollResponse,
		enrollCourseResponse,
		getResponse,
		response,
		courseEnrollResponse,
		modalData
	} = useSelector((state) => state.collections);

	const [showRightShimmer, setShowRightShimmer] = useState(true);
	const [showLeftShimmer, setShowLeftShimmer] = useState(true);
	const [selectedJourneyData, setSelectedJourneyData] = useState([]);
	const [courseData, setCourseData] = useState([]);
	const [openReward, setOpenReward] = useState();
	const [certificate, setCertificate] = useState();
	const [certificateData, setCertificateData] = useState();
	const [certificateskilldata, setcertificateskilldata] = useState();
	let [isSensitiveCount, setIsSensitiveCount] = useState(0);
	const [viewJourney, setViewJourney] = useState(false);
	const [CourseProgressData, setCourseProgressData] = useState([]);
	const [showCongratulationModel, setShowCongratulationModel] = useState(false);
	const [courseActivityId, setCourseActivityId] = useState([]);
	const [vickyTypeJourneyData, setVickyTypeJourneyData] = useState([]);

	useEffect(() => {
		if (enrollCourseResponse) {
			setViewJourney(true);
			handleViewJourney(true);
		}
	}, [enrollCourseResponse]);

	useEffect(() => {
		setShowRightShimmer(true);
		setShowLeftShimmer(true);
		setViewJourney(false);
		dispatch(
			breadcrumb({
				title: "Learner Journey",
			})
		);

		dispatch(getJourny(true));

		let previousState = localStorage.getItem("previousState");
		if (previousState != null) {
			previousState = JSON.parse(previousState);
			let uistate = previousState?.uistate;
			for (let index = 0; index < uistate?.length; index++) {
				if (uistate[index]?.userid === defaultChildData?.id) {
					uistate[index].detail.scene = "";
					uistate[index].page = window.location.href;
					break;
				}
			}
			localStorage.setItem("previousState", JSON.stringify(previousState));
		}
	}, [path?.id]);

	//	handle first journey data
	useEffect(() => {
		if (getDimJournyResponse && !viewJourney) {
			let myArray = [];
			getDimJournyResponse?.records?.map((value, key) => {
				if (defaultChildData?.ujourneyId === value?.id) {
					myArray.unshift(value);
				} else {
					myArray.push(value);
				}
			})
			handleJourneyCourse(myArray[0], true);
			setShowRightShimmer(false);
			setVickyTypeJourneyData(myArray);
		}
	}, [getDimJournyResponse, defaultChildData]);

	//	display journey courses
	useEffect(() => {
		if (getDimJournyCoursesResponse) {
			setShowLeftShimmer(false);
			displayJourneyAllCourse();
		}
	}, [getDimJournyCoursesResponse]);

	const displayJourneyAllCourse = () => {
		let myArray = [];
		getSequnceSort(getDimJournyCoursesResponse?.records)?.map((data, key) => {
			//	console.log('journey :', data);
			getSequnceSort(data?.skills)?.map((value, key1) => {
				value?.journey?.map((journey, key2) => {
					myArray.push(setDimensionSkill(data, value, journey?.course, journey));
				});
			})
		});
		setCourseData(myArray);
	};

	const handleJourneyCourse = (data, isCallAgain) => {
		window.scrollTo(0, 0);
		if (isCallAgain) {
			setShowLeftShimmer(true);
			setSelectedJourneyData(data);
			dispatch(getJournyCourses(path?.id, data?.id));
		}
	};

	//	show reward
	const viewReward = (data, isCourse, wk) => {
		setOpenReward(data);
		dispatch(getRewardData(path?.id, data?.id, isCourse));
	};

	//	show certificate
	const viewCertificate = (data, courseData, skills) => {
		setCertificate(data);
		setCertificateData(courseData);
		setcertificateskilldata(skills);
	};

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
		};
		course.journey = journey;
		return course;
	};

	const handleEnroll = () => {
		let courseIds = [];
		courseData?.map((value, index) => {
			let obj = {
				skillId: value?.skillId,
				courseId: value?.id,
			};
			courseIds.push(obj);
			if (value?.isSensitive) {
				setIsSensitiveCount(isSensitiveCount++);
			}
		});

		let obj = {
			courseIds: courseIds,
			selectedJourneyData: selectedJourneyData,
		};

		if (defaultChildData?.isJourney) {
			dispatch(showModal({ type: "journeyEnroll", childId: path?.id }));
			return false;
		}

		if (!defaultChildData?.isSubscriber) {
			dispatch(setSubscribeModal(courseIds));
			return false;
		}

		dispatch(
			enrollModal({
				name: "Learner journey",
				isJourneyEnroll: true,
				journeyId: selectedJourneyData?.id,
				courseIds: courseIds,
				isSensitive: isSensitiveCount,
				isAcademic: false,
			})
		);
	};

	const handleOwnJourney = () => {
		//	console.log('modalData', modalData);
		if (defaultChildData?.isJourney) {
			dispatch(showModal({ type: "journeyEnroll", childId: path?.id }));
			return false;
		}
		dispatch(showModal({ type: "journeySkills", childId: path?.id }));
	};

	const handleViewJourney = (result) => {
		setViewJourney(result);
		setShowLeftShimmer(true);
		if (result) {
			dispatch(
				getJournyEnrollData(defaultChildData?.id, defaultChildData?.level?.id)
			);
		} else {
			dispatch(getJournyCourses(path?.id, selectedJourneyData?.id));
		}
	};

	useEffect(() => {
		if (
			journeyEnrollResponse &&
			journeyEnrollResponse?.records?.length > 0 &&
			viewJourney
		) {
			let myArray = [];
			let progressData = [];
			getSequnceSort(journeyEnrollResponse?.records)?.map((dim, index) => {
				dim?.skills?.map((skill, key) => {
					progressData.push(skill);
					skill?.journey?.map((journey, key2) => {
						myArray.push(setDimensionSkill(dim, skill, journey?.course, journey));
					});
				});
			});
			setCourseData(myArray);
			setCourseProgressData(progressData);
			setShowLeftShimmer(false);
		}
	}, [journeyEnrollResponse]);

	const getDataFromCourseProgress = (result, data) => {
		setCourseActivityId(data);
		setShowCongratulationModel(result);
	};

	useEffect(() => {
		if (getResponse) {
			handleJourneyCourse(selectedJourneyData, true);
		}
	}, [getResponse]);

	useEffect(() => {
		if (courseEnrollResponse) {
			dispatch(getAllUsersDetail());
		}
	}, [courseEnrollResponse]);

	return (
		<Home>
			<div className='d-flex flex-wrap SpecialLeftpanel w-100'>
				<div className='d-flex w-100 align-items-start overflow-visible'>
					<div className='LeftbarPannel p-0' id=''>
						<div className='CourseCardWrapper fullHeight100'>
							<div class='form-title mt-0 mb-0 Enrollcoursetitle heading'>
								<h2
									data-toggle='collapse'
									class='m-0 pt-0 pb-1 w-100 flex justify-content-between '>
									<span>
										<img src={image.mortarboard} className='mr-2' alt='' />
										{!showLeftShimmer &&
											(!viewJourney
												? selectedJourneyData?.name
												: "Enrolled Courses")}
									</span>
									{defaultChildData?.isJourney && (
										<div class='form-check form-switch m-0 flex p-0'>
											<label
												class='form-check-label pointer'
												htmlFor='flexSwitchCheckDefault'>
												My Journey
											</label>
											<input
												className='form-check-input avltogglebutton pointer'
												type='radio'
												role='switch'
												id='flexSwitchCheckDefault'
												onClick={() => handleViewJourney(!viewJourney)}
												checked={viewJourney}
											/>
										</div>
									)}
								</h2>
							</div>

							{
								<div className='gridSection coursepagelist pt-0'>
									{!showLeftShimmer ? (
										getSequnceSort(courseData)?.map((data, key) => {
											return (
												<React.Fragment key={key}>
													<CourseCard
														data={data}
														journeySelected={selectedJourneyData?.id}
														viewReward={viewReward}
														viewCertificate={viewCertificate}
														skills={data?.skills}
														courseData={courseData}
														isMyJourneyToggle={viewJourney}
													/>
												</React.Fragment>
											);
										})
									) : (
										<ShimmerCategoryList
											items={4}
											categoryStyle='STYLE_SEVEN'
										/>
									)}
								</div>
							}
							{/* {!showLeftShimmer &&
								!viewJourney &&
								defaultChildData?.ujourneyId != selectedJourneyData?.id && (
									<div className='LeftPanelFooter'>
										<button
											className='btn-blue btn-login d-block  ml-auto w-auto'
											onClick={() => handleEnroll()}>
											<i className='fa-solid fa-paper-plane mr-2'></i> Enroll
										</button>
									</div>
								)} */}
						</div>
					</div>
					<div className='RightbarPannel p-0 rightpannelSticky'>
						<div className='heading'>
							<h2 className='flex'>
								<span>
									<img src={image.compassicon} alt='' className='mr-2' />
									Learner Journey {viewJourney ? "Progress" : ""}
								</span>
							</h2>
						</div>
						{viewJourney ? (
							<div className='alltypeCourseFilter'>
								{showLeftShimmer ? (
									<ShimmerCategoryList items={4} categoryStyle='STYLE_SEVEN' />
								) : (
									<CourseProgress
										courseObj={CourseProgressData}
										showProgress={true}
										getDataFromCourseProgress={getDataFromCourseProgress}
										type={"journey"}
									/>

								)}
							</div>
						) : (
							<div className='alltypeCourseFilter'>
								{showRightShimmer ? (
									<ShimmerCategoryList items={4} categoryStyle='STYLE_SEVEN' />
								) : (
									<div className='ScenecerelateddQuiz p-0 allcourselj'>
										<div className='dimensionshorting border-0 p-0 lernerjourrecumCourse whereYouleftwtrap'>
											{
												!defaultChildData?.ujourneyId ? (
													<>
														<div className='madeYourownJourney mb-3 pt-2  mt-3'>
															<h3 onClick={() => handleOwnJourney()}>
																<a href='#'>
																	<i class='fa-solid fa-minus mr-2'></i>Create Your
																	Own Journey
																</a>
															</h3>
														</div>
														<h2 class='h1 text-center m-minus-15 orbutton'>
															<span class='bg-white'>or</span>
														</h2>
													</>
												) : ""
											}
											<h3 className='mb-3 pb-3'>
												Select what{" "}
												{defaultChildData &&
													getCapitalized(defaultChildData?.firstName)}{" "}
												is struggling with to discover tailored learning
												journeys
											</h3>
											<div className='signupType m-0 mb-3'>
												{vickyTypeJourneyData &&
													vickyTypeJourneyData?.map((value, key) => (
														<label
															className={`Selcheckbox ActiveQQst ${value?.id === selectedJourneyData?.id ||
																defaultChildData?.ujourneyId === value?.id
																? "EnroledJournyCourse"
																: ""
																}`}
															key={key}>
															<span className='QQtitle'>
																{value.description}
															</span>
															{defaultChildData?.ujourneyId === value?.id && (
																<span class='takenJourneytag'>My Journey</span>
															)}
															{defaultChildData?.ujourneyId === value?.id ? (
																<input
																	type='radio'
																	id='Public'
																	name='dimensionQuestion1'
																	value='PUBLIC'
																	checked={true}
																	onClick={() =>
																		handleJourneyCourse(
																			value,
																			value?.id !== selectedJourneyData?.id
																		)
																	}></input>
															) : (
																<input
																	type='radio'
																	id='Public'
																	name='dimensionQuestion'
																	value='PUBLIC'
																	checked={
																		value?.id === selectedJourneyData?.id
																			? true
																			: false
																	}
																	onClick={() =>
																		handleJourneyCourse(
																			value,
																			value?.id !== selectedJourneyData?.id
																		)
																	}></input>
															)}
															<span className='checkmark'></span>
														</label>
													))}
											</div>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

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

			{showCongratulationModel && (
				<CongratulationCard
					courseActivityId={courseActivityId}
					handleOpenpopup={getDataFromCourseProgress}
					isContinueButtonClick={false}
				/>
			)}
		</Home>
	);
};

export default JourneyPage;

import React, { useEffect } from "react";
import Home from "../Home";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { getCapitalized, getDimIcon, getSequnceSort } from "../../utils/helper";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
	breadcrumb,
	enrollModal,
	parentLoginAction,
	resetResponse,
	setSubscribeModal,
	showModal,
	showModalObj,
} from "../../redux/actions";
import {
	courseJourney,
	enrollCourseJourny,
	enrollFromCourseJourney,
	getAllUsersDetail,
	getJourny,
	getJournyCourseData,
	getJournyCourses,
	getJournyEnrollData,
	getRewardData,
} from "../../redux/actions/APIs";
import * as image from "../../resources/images";
import RoundProgress from "../controls/RoundProgress";
import { Rating } from "react-simple-star-rating";
import CourseCard from "../dimensions/course/intellectual/CourseCard";
import CourseProgress from "../home/CourseProgress";
import CongratulationCard from "../widget/CongratulationCard";
import RewardPopUp from "../base/RewardPopUp";
import Certificate from "../base/Certificate";

const LearnerPathways = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const path = useParams();
	const {
		getDimJournyResponse,
		defaultChildData,
		getDimJournyCoursesResponse,
		journeyEnrollResponse,
		response,
		getdimension,
		setting_responseOK,
		modalObj
	} = useSelector((state) => state.collections);

	const [selectedJourneyData, setSelectedJourneyData] = useState([]);
	const [vickyTypeJourneyData, setVickyTypeJourneyData] = useState([]);
	const [journeyCourse, setJourneyCourse] = useState([]);
	const [course, setCourse] = useState([]);
	const [selectedTab, setSelectedTab] = useState(
		defaultChildData?.ujourneyId ? 2 : 1
	);
	const [showCongratulationModel, setShowCongratulationModel] = useState(false);
	const [courseActivityId, setCourseActivityId] = useState([]);
	const [enrolledJourneyName, setEnrolledJourneyName] = useState([]);
	const [openReward, setOpenReward] = useState();
	const [certificate, setCertificate] = useState();
	const [certificateData, setCertificateData] = useState();
	const [certificateskilldata, setcertificateskilldata] = useState();
	let [isSensitiveCount, setIsSensitiveCount] = useState(0);
	const [showIcon, setShowIcon] = useState(true);
	const [skillData, setSkillData] = useState([]);

	useEffect(() => {
		if (response?.success) {
			getJournyEnrollData(defaultChildData?.id, defaultChildData?.level?.id);
		}
	}, [response])

	useEffect(() => {
		dispatch(
			breadcrumb({
				title: "Learner Pathways",
			})
		);
		if (getDimJournyResponse === undefined) {
			dispatch(getJourny(true, path?.id));
		}
		setEnrolledJourneyName([]);
		setShowIcon(true);
	}, [path?.id, response]);

	useEffect(() => {
		window.scrollTo(0, 0);
		//	getSocialActicityDetail();
		let previousState = localStorage.getItem("previousState");

		//	let dimensionId = "";
		if (previousState != null) {
			previousState = JSON.parse(previousState);
			let uistate = previousState?.uistate;
			for (let index = 0; index < uistate?.length; index++) {
				if (uistate[index]?.userid === path?.id) {
					uistate[index].detail.scene = window.location.href;
					uistate[index].page = "";
					//	dimensionId = uistate[index]?.detail?.dimId;
					break;
				}
			}
			localStorage.setItem("previousState", JSON.stringify(previousState));
		}
	}, [path]);

	//	handle predefine pathways
	useEffect(() => {
		if (getDimJournyResponse) {
			//	setSelectedTab(defaultChildData?.ujourneyId ? 2 : 1);

			filterEnrolledPathway();

			setSelectedJourneyData([]);
		}
		if (defaultChildData) {
			if (defaultChildData?.ujourneyId) {
				handleTabs(2);
			} else {
				handleTabs(1);
			}
		}
	}, [getDimJournyResponse, defaultChildData]);

	const filterEnrolledPathway = () => {
		let myArray = [];
		getDimJournyResponse?.records?.map((value, key) => {
			if (defaultChildData?.ujourneyId === value?.id) {
				myArray.unshift(value);
				setEnrolledJourneyName(value);
			} else {
				myArray.push(value);
			}
		});
		setVickyTypeJourneyData(myArray);
	};

	useEffect(() => {
		if (getDimJournyCoursesResponse) {
			let array = [];
			let cour = [];
			getDimJournyCoursesResponse?.records?.map((value, index) => {
				value?.skills?.map((skill, key) => {
					array.push(skill);
					skill?.courses?.map((course, key) => {
						course.skill = skill;
						course.dimension = {
							key: value.id,
							name: value.name,
						};
						cour.push(course);
					});
				});
			});
			setJourneyCourse(array);
			setCourse(cour);
			//	console.log('cour : ', cour);
			handleSkills(cour);
		}
	}, [getDimJournyCoursesResponse]);

	const handleJourneyCourse = (data) => {
		window.scrollTo(0, 0);
		setShowIcon(true);
		//	setShowLeftShimmer(true);
		setSelectedTab(1);
		setSelectedJourneyData(data);
		dispatch(getJournyCourses(path?.id, data?.id));
	};

	const [enrollData, setEnrollData] = useState({});

	const handleEnroll = () => {
		let courseIds = [];
		let isSensitive = false;
		let isSupport = false;
		let alreadyEnroll = false;
		journeyCourse?.map((skill, index) => {
			skill?.courses?.map((course, key) => {
				let obj = {
					skillId: skill?.id,
					courseId: course?.id,
					sequence: course?.sequence,
					kcRequired: true,
					isSupport: course?.collabEmail ? true : false,
					isEnrolled: true,
					pathwayName: selectedJourneyData?.name
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

		if (!defaultChildData?.isSubscriber) {
			dispatch(setSubscribeModal(courseIds));
			return false;
		}

		let enrollObj = {
			name: "Learner Pathway",
			isJourneyEnroll: true,
			journeyId: selectedJourneyData?.id,
			courseIds: courseIds,
			isSensitive: isSensitive,
			isAcademic: false,
			collabEmail: isSupport,
			isEnollmentpopupShow: true
		};
		setEnrollData(enrollObj);

		if (isSensitive) {
			dispatch(showModalObj({ isPathway: true }));
			dispatch(parentLoginAction("verifyUser"));
			return false;
		}

		if (alreadyEnroll) {
			dispatch(
				enrollModal(enrollObj)
			);
		} else {
			//	setLoader(true);
			dispatch(
				enrollFromCourseJourney(
					defaultChildData?.id,
					selectedJourneyData?.id,
					courseIds,
					false
				)
			);
		}
	};

	useEffect(() => {
		if (setting_responseOK?.success && enrollData?.isEnollmentpopupShow && modalObj) {
			dispatch(parentLoginAction());
			dispatch(resetResponse());
			dispatch(showModal());
			dispatch(enrollModal(enrollData));
			dispatch(showModalObj());
			let obj = enrollData;
			obj.isEnollmentpopupShow = false;
			setEnrollData(obj);
		}
	}, [setting_responseOK]);

	const handleTabs = (tab) => {
		if (!enrolledJourneyName?.name) {
			setShowIcon(false);
		}
		setSelectedTab(tab);
		setJourneyCourse([]);
		if (tab === 2 && defaultChildData?.ujourneyId) {
			dispatch(
				getJournyEnrollData(defaultChildData?.id, defaultChildData?.level?.id)
			);
		} else if (tab === 1 && selectedJourneyData?.id) {
			dispatch(getJournyCourses(path?.id, selectedJourneyData?.id));
		}
	};

	useEffect(() => {
		//	console.log('journeyEnrollResponse :', journeyEnrollResponse?.journeyName)
		if (journeyEnrollResponse) {
			let array = [];
			let cour = [];
			journeyEnrollResponse?.records?.map((value, index) => {
				value?.skills?.map((skill, key) => {
					array.push(skill);
					skill?.courses?.map((course, key) => {
						course.skill = skill;
						course.dimension = {
							key: value.id,
							name: value.name,
						};
						cour.push(course);
					});
				});
			});
			setJourneyCourse(array);
			setCourse(cour);

			handleSkills(cour);
		}
	}, [journeyEnrollResponse]);

	const handleSkills = (course) => {
		let skillArray = [];
		getSequnceSort(course)?.map((course, index) => {
			if (!skillArray?.includes(course?.skill?.name)) {
				skillArray.push(course?.skill?.name);
			}
		});
		setSkillData(skillArray);
	};

	useEffect(() => {
		if (response) {
			dispatch(getAllUsersDetail());
			handleTabs(2);
			dispatch(enrollCourseJourny());
			dispatch(getJournyCourseData());
			dispatch(showModal());
		}
	}, [response]);

	const getDataFromCourseProgress = (result, data) => {
		setCourseActivityId(data);
		setShowCongratulationModel(result);
	};

	const handleOwnJourney = () => {
		dispatch(showModal({ type: "journeySkills", childId: path?.id }));
	};

	//	show reward
	const viewReward = (data, isCourse, reward) => {
		setOpenReward(data);
		dispatch(getRewardData(path?.id, reward?.id, isCourse));
	};

	//	show certificate
	const viewCertificate = (data, courseData, skills) => {
		setCertificate(data);
		setCertificateData(courseData);
		setcertificateskilldata(skills);
	};

	return (
		<Home>
			<div className='d-flex flex-wrap SpecialLeftpanel w-100'>
				<div className='d-flex w-100 align-items-start overflow-visible'>
					<div className='LeftbarPannel p-0' id=''>
						<div className='CourseCardWrapper fullHeight100'>
							<div class='p-0 heading border-0'>
								<div class='tabgrid w-100 m-0'>
									<ul>
										<li
											class={`tabs w-50 ${selectedTab === 1 ? "active-tabs" : ""
												}`}
											onClick={() => handleTabs(1)}>
											<img src={image.pathwaysicon} alt='' />
											{selectedJourneyData?.id
												? "Selected Pathway"
												: "What is a Pathway?"}
										</li>
										<li
											class={`tabs w-50 ${selectedTab === 2 ? "active-tabs" : ""
												}`}
											onClick={() => handleTabs(2)}>
											<img src={image.mypathwaysicon} alt='' /> My Pathway
										</li>
									</ul>
								</div>
							</div>
							{selectedTab === 1 && !selectedJourneyData?.id && (
								<div className=''>
									<div className='learnerpathwaysec'>
										<div className='d-flex align-items-center mb-3 pl-3 pr-3'>
											<div>
												<img src={image.pathway_icon} />
											</div>
											<div>
												<h2>Pathways</h2>
												<h4>
													{" "}
													Build skills through curated sets of courses that
													target current and complex issues children commonly
													face.
												</h4>
											</div>
										</div>
									</div>
									<div className='pathwaysarrow'>
										<img src={image.pathway_icon1} className='pl-1' />
									</div>
									<div className='learnerpathwaysec'>
										<h4 className='p-0'>
											<strong>
												Pathways provide a holistic solution to issues such as:
											</strong>
										</h4>
									</div>
									<div className='pathwayslistitm'>
										<span>
											<ul>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Peer Pressure
												</li>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Attention Issues
												</li>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Managing Emotions
												</li>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Independence and Safety
												</li>
											</ul>
										</span>
										<span>
											<ul>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Fear and Anxiety
												</li>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Attitude and Mindset
												</li>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													Proper Communication
												</li>
												<li>
													<img src={image.Capturevdfhfveh} className='mr-2' />
													And Many More...
												</li>
											</ul>
										</span>
									</div>

									<div className='learnerpathwaysec'>
										<span className='d-flex align-items-center pathway_root'>
											<span>
												<img src={image.pathway_img} className='iconstyle' />
											</span>

											<h4 className='p-3'>
												{" "}
												Built by professionals in childhood development to
												create a program tailored to your child’s needs.
											</h4>
										</span>
										<span className='d-flex align-items-center pathway_root'>
											<span>
												<img src={image.pathway_img1} className='iconstyle' />
											</span>

											<h4 className='p-3'>
												{" "}
												Pathways are the easiest and quickest way to get your
												child onto a structured learning path.
											</h4>
										</span>
									</div>

									<div className='learnerpathwaysec'>
										<div className='d-flex align-items-center pb-3 mb-3 pl-3 pr-3'>
											<img src={image.pathway_icon} />
											<h4>
												{" "}
												Finding the right pathway for your child is easy.{" "}
												<span>Simply select</span> what you'd like to address
												from the right-side menu.
												<br />
												{!defaultChildData?.ujourneyId && (
													<>
														<h4>OR </h4>
														<a href='#' onClick={() => handleOwnJourney()}>
															Create Your Own Pathway!
														</a>
													</>
												)}
											</h4>
										</div>
									</div>
									<div className='learnerpathwaybar'>
										<div className='pathwaybar2'></div>
										<div className='pathwaybar3'></div>
										<div className='pathwaybar6'></div>
										<div className='pathwaybar4'></div>
										<div className='pathwaybar5'></div>
										
										<div className='pathwaybar1'></div>
									</div>
								</div>
							)}
							{selectedTab === 2 && !defaultChildData?.ujourneyId && (
								<div className='notenrollednanycourses'>
									<div class='learnerpathwaysec'>
										<div class='d-flex align-items-center pb-3 mb-3 pl-3 pr-3 mypathwytb'>
											<img src={image.pathway_icon} />
											<div>
												{/* <h4 className="mb-3"> You haven’t enrolled your child in a pathway yet.</h4> */}
												<h4>
													{" "}
													Finding the right pathway for your child is easy.{" "}
													<span>Simply select</span> what you'd like to address
													from the right-side menu.
													{!defaultChildData?.ujourneyId && (
														<>
															<h4>OR </h4>
															<a href='#' onClick={() => handleOwnJourney()}>
																Create Your Own Pathway!
															</a>
														</>
													)}
												</h4>
											</div>
										</div>
									</div>
								</div>
							)}
							{((selectedTab === 1 && selectedJourneyData?.id) ||
								(selectedTab === 2 && defaultChildData?.ujourneyId)) && (
									<>
										<div className='gridSection mx-2 px-1 mb-2 pb-1'>
											<div className='skillSeltaglist coursepagelist'>
												{selectedTab === 1 ? (
													<>
														<div
															className='pathways_back_button mb-3 mt-2 pointer'
															onClick={() => setSelectedJourneyData([])}>
															<h5 className='flexone'>
																<i class='fa-solid fa-angle-left mr-1'></i>What is
																a Pathway?
															</h5>
														</div>
														<div className='selctedpathwaytitle mt-3 pt-2 mb-2'>
															<h3 className="flexone">
																<img src={image.pathwaysicon} className='mr-2' />
																{selectedJourneyData?.name}
															</h3>
														</div>
													</>
												) : (
													selectedTab === 2 && (
														<div className='selctedpathwaytitle mt-3 pt-2 mb-2'>
															<h3 className="flexone">
																<img src={image.pathwaysicon} className='mr-2' />
																{enrolledJourneyName?.name
																	? enrolledJourneyName?.name
																	: journeyEnrollResponse?.journeyName}
															</h3>
														</div>
													)
												)}

												<div className='coveredDimensionpathway d-flex align-items-baseline'>
													<h4 className=' mt-3 mb-3'>
														<img src={image.CourseTitleIcon} className='mr-2' />
													</h4>
													<div className='skillSeltaglist coursepagelist pl-0 border-0'>
														<div class='intrestlisting dimpagetags p-0'>
															{skillData?.map((skill, index) => (
																<div class='instlistitem'>
																	<div class='carditem '>
																		<label class='Selcheckbox ActiveQQst m-0 p-0'>
																			<span class='QQtitle flexone pointer'>
																				{" "}
																				<h4 class='flex w-100'>{skill}</h4>
																			</span>
																		</label>
																	</div>
																</div>
															))}
														</div>
													</div>
												</div>
												{selectedJourneyData?.description &&
													selectedTab === 1 && (
														<div class='CourseardDesc px-0'>
															<div class='d-flex welcomscreenContent patwaysbulleys p-0 w-100'>
																<span className='pathwat_desc_icon'>
																	<img src={image.pathwaydesc} alt='' />
																</span>
																<span
																	className='m-0 pathway_htm_desc'
																	dangerouslySetInnerHTML={{
																		__html: selectedJourneyData?.description
																			? selectedJourneyData?.description
																			: enrolledJourneyName?.description,
																	}}
																/>
															</div>
														</div>
													)}
												{enrolledJourneyName?.description &&
													selectedTab === 2 && (
														<div class='CourseardDesc px-0'>
															<div class='d-flex welcomscreenContent patwaysbulleys p-0 w-100'>
																<span className='pathwat_desc_icon'>
																	<img src={image.pathwaydesc} alt='' />
																</span>
																<span
																	className='m-0 pathway_htm_desc'
																	dangerouslySetInnerHTML={{
																		__html: selectedJourneyData?.description
																			? selectedJourneyData?.description
																			: enrolledJourneyName?.description,
																	}}></span>
															</div>
														</div>
													)}
												{/* <div className="welcomscreenContent patwaysbulleys p-0 w-100 ">
												<ul className="p-0 w-100">
													<li>
														{" "}
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>Using self-awareness</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Communicating with compassion
														</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Analyzing conflict
														</h4>
													</li>
												</ul>
											</div> */}
											</div>
											{getSequnceSort(course)?.map((course, key) => (
												<React.Fragment key={key}>
													<CourseCard
														data={course}
														skills={course?.skill}
														viewReward={viewReward}
														viewCertificate={viewCertificate}
													/>
												</React.Fragment>
											))}
										</div>
										{!defaultChildData?.ujourneyId && (
											<div class='LeftPanelFooter'>
												<button
													class='btn-blue btn-login d-block  ml-auto w-auto'
													onClick={() => handleEnroll()}>
													<i class='fa-solid fa-paper-plane mr-2'></i>Enroll
												</button>
											</div>
										)}
									</>
								)}
							{/* {selectedTab === 2 && (
								<>
									<div className="gridSection mx-2 px-1">
									
										<div className="skillSeltaglist coursepagelist">
										<div className="selctedpathwaytitle mt-3 pt-2 mb-2">
										  <h3><img src={image.pathwaysicon} className="mr-2" />{selectedJourneyData?.name}</h3>
                                        </div>
											<div className="coveredDimensionpathway d-flex align-items-baseline">
												<h4 className=" mt-3 mb-3">
													<img src={image.CourseTitleIcon} className="mr-2" />
												</h4>
												<div className="skillSeltaglist coursepagelist pl-0 border-0">
													<div class="intrestlisting dimpagetags p-0">
														{
															getSequnceSort(journeyCourse)?.map((skill, index) => (
																<div class="instlistitem">
																	<div class="carditem ">
																		<label class="Selcheckbox ActiveQQst m-0 p-0">
																			<span class="QQtitle flexone pointer"> <h4 class="flex w-100">{skill?.name}</h4></span>
																		</label>
																	</div>
																</div>
															))
														}
													</div>
												</div>
											</div>
											<div class="CourseardDesc px-0">
												<div class="d-flex">
													<span><img src={image.pathwaydesc} alt="" /></span>
													<p id="textheight" class="pathwatdestxt">
														<span class="">
															This pathway combines four courses to create a comprehensive set to teach nutrition, fosters self-confidence, cultivates compassion, and understanding on the importance of diversity. By the end of this pathway students will be able to understand and demonstrate complex concepts such as:
														</span>
													</p>
												</div>
											</div>
											<div className="welcomscreenContent patwaysbulleys p-0 w-100 ">
												<ul className="p-0 w-100">
													<li>
														{" "}
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>Using self-awareness</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Communicating with compassion
														</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Analyzing conflict
														</h4>
													</li>
												</ul>
											</div>
										</div>
										{
											getSequnceSort(journeyCourse)?.map((skill, index) => (
												skill?.courses?.map((course, key) => (
													<React.Fragment key={key}>
														<CourseCard
															data={course}
															skills={skill}
														/>
													</React.Fragment>
												))
											))
										}
									</div>
								</>
							)} */}
						</div>
					</div>
					<div className='RightbarPannel p-0 rightpannelSticky'>
						<div className='heading'>
							<h2 className='flex'>
								<span>
									{defaultChildData?.ujourneyId && selectedTab === 2 ? (
										<span>
											{" "}
											<img
												src={image.DiemensionProgress}
												alt=''
												className='mr-2'
											/>
											Progress: My Pathway{" "}
										</span>
									) : (
										<span>
											{" "}
											<img src={image.selectiPWcon} alt='' className='' />{" "}
											{defaultChildData?.ujourneyId
												? "Select to view other pathways"
												: "Select or Create Your Own"}
										</span>
									)}
								</span>
							</h2>
						</div>
						<div className='alltypeCourseFilter'>
							{defaultChildData?.ujourneyId && selectedTab === 2 ? (
								<CourseProgress
									showProgress={true}
									getDataFromCourseProgress={getDataFromCourseProgress}
									type={"journey"}
									pathwayCourse={course}
								/>
							) : (
								<div class='alltypeCourseFilter'>
									<div class='ScenecerelateddQuiz p-0 allcourselj'>
										<div class='dimensionshorting border-0 p-0 lernerjourrecumCourse whereYouleftwtrap'>
											{!defaultChildData?.ujourneyId ? (
												<>
													<div class='madeYourownJourney'>
														<h3 onClick={() => handleOwnJourney()}>
															<a href='#'>
																<i class='fa-solid fa-minus mr-2'></i>
																Create Your Own Pathway
															</a>
														</h3>
													</div>
												</>
											) : (
												""
											)}
											<div class='signupType m-0 mb-3'>
												{vickyTypeJourneyData?.map((value, index) => (
													<label
														onClick={() => handleJourneyCourse(value)}
														class={`Selcheckbox EnroledJournyCourse flex-wrap p-0 ${defaultChildData?.ujourneyId === value?.id
															? "ActiveQQst"
															: ""
															} ${value?.id === selectedJourneyData?.id
																? "selectedpw"
																: ""
															}`}>
														<span class='QQtitle'>
															<img
																src={image.pathwaysicon}
																className='ml-0 mr-2 '
															/>
															{value?.name}
														</span>
														{defaultChildData?.ujourneyId === value?.id && (
															<span class='takenJourneytag'>My Pathway</span>
														)}
														<ul className='w-100 flexone'>
															{getSequnceSort(value?.dimensions)?.map(
																(dim, key) => (
																	<li className={dim?.name + "dimpathway"}>
																		<div className='CDimenCircle'>
																			{getDimIcon(dim)}
																			{/* <img src={image.courselevel4} alt="" /> */}
																		</div>
																		<p>{dim?.name}</p>
																	</li>
																)
															)}
														</ul>
													</label>
												))}
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
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
export default LearnerPathways;
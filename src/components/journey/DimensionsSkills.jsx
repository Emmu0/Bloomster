/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import * as image from "../../resources/images";
import {
	getJournyData,
	getJournyCourseData,
	getRewardData,
} from "../../redux/actions/APIs";
import { getCapitalized, getSequnceSort } from "../../utils/helper";
import {
	resetLoginResponse,
	resetResponse,
	showModal,
} from "../../redux/actions";
import DimensionCourseSkillsPopup from "./DimensionCourseSkillsPopup";

import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import LockPopup from "../controls/LockPopup";

import Subscription from "../subscription/Subscription";
import SubscribePopUp from "../dimensions/SubscribePopUp";
import RewardPopUp from "../base/RewardPopUp";
import Certificate from "../base/Certificate";
import SkillGrowth from "../home/SkillGrowth";
import DimensionGrowth from "../home/DimensionGrowth";

export default function DimensionsSkills({
	handleCloseEnrollPopup,
	childName,
	childId,
}) {
	const dispatch = useDispatch();
	const param = useParams();
	const history = useHistory();

	const {
		defaultChildData,
		getJournyResponse,
		getJournyCourseResponse,
		alluserdetails,
		getSelectedUser,
		selectedDim,
		journeyData,
		childNm,
		modalData,
		addLearner,
		response,
		journeyEnrollResponse,
	} = useSelector((state) => state.collections);

	const [courseDetail, setCourseDetail] = useState(false);
	const [sortDimensions, setSortDimension] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [showInfoPopup, setShowInfoPopup] = useState(false);
	const [infoPopupData, setinfoPopupData] = useState([]);
	const [enrollLoader, setEnrollLoader] = useState(false);
	const [enrollCourseData, setEnrollCourseData] = useState([]);
	const [startPopup, setStartPopup] = useState(false);
	const [type, setType] = useState();
	const [shimmerData, setShimmerData] = useState(true);
	const [dimName, setDimName] = useState("");

	const [showSkillPopup, setShowSkillPopup] = useState("");
	const [skillInfoPopup, setSkillInfoPopup] = useState(false);
	const [selectedSkills, setSelectedSkills] = useState([]);

	useEffect(() => {
		if (getJournyCourseResponse?.success) {
			setEnrollLoader(false);
		}
	}, [getJournyCourseResponse]);

	useEffect(() => {
		if (addLearner || response) {
			const journeyChildid = alluserdetails?.records[0]?.children?.filter(
				(dta) => dta?.id == modalData?.childId
			);

			dispatch(
				getJournyData(
					addLearner?.records?.childId || journeyChildid[0]?.id,
					addLearner?.records?.levelId || journeyChildid[0]?.level?.id
				)
			);
			dispatch(resetLoginResponse());
		}
	}, [addLearner, response]);

	useEffect(() => {
		let childObj = defaultChildData;
		if (!childObj?.id) {
			childObj = childNm;
		}

		if (modalData?.childId) {
			dispatch(resetLoginResponse());
			const journeyChildid = alluserdetails?.records[0]?.children?.find(
				(dta) => dta?.id == modalData?.childId
			);

			if (journeyChildid) {
				setShimmerData(true);
				dispatch(getJournyData(journeyChildid?.id, journeyChildid?.level?.id)); //	journeyChildid?.level?.id
			}
		}
	}, [alluserdetails]);

	useEffect(() => {
		if (getJournyResponse && getJournyResponse?.records) {
			if (getJournyResponse?.recordId === null) {
				let dimensions = getSequnceSort(getJournyResponse?.records[0]);
				dimensions =
					dimensions &&
					dimensions.map((vl) => {
						return {
							...vl,
							isAttempted: false,
						};
					});
				setSortDimension(dimensions);
			} else {
				setEnrollCourseData(getJournyResponse?.records[0]?.skills);
			}
		}
	}, [getJournyResponse]);

	useEffect(() => {
		if (getJournyResponse !== undefined) {
		}
	}, [getJournyResponse]);

	const handleNext = (isBoolean, index) => {
		if (index === 4 && selectedSkills?.length < 4 && isBoolean) {
			setMinimumSkillErrorMessage(true);
			return;
		}
		if (isBoolean) {
			index++;
			if (sortDimensions?.length === index) {
				setEnrollLoader(true);
				dispatch(getJournyCourseData(modalData?.childId, selectedSkills));
				return;
			} else {
				setSelectedIndex(index);
			}
		} else {
			setSelectedIndex(index - 1);
		}
	};

	useEffect(() => {
		if (getJournyCourseResponse?.records != undefined) {
			if (modalData?.childId) {
				handleCloseEnrollPopup(true, modalData.childId);
			}
		}
	}, [getJournyCourseResponse?.records]);

	let classNames = ["ljsocial", "jemotional", "ljintellectual", "ljmindfulness", "ljphyusical",];

	const handleCloseSKillModel = () => {
		dispatch(showModal());
		dispatch(getJournyData());
		dispatch(getJournyCourseData());
	};

	const handleSkillClick = (skillId, index) => {
		setSortDimension((prevDimensions) => {
			const updatedDimensions = prevDimensions.map((dimension, i) => {
				if (i === index) {
					return {
						...dimension,
						isAttempted: true,
					};
				}
				return dimension;
			});
			return updatedDimensions;
		});


		/*
		let arr = selectedSkills;
		arr[selectedIndex] = skillId;
		setSelectedSkills(arr);
		*/
		let skillIndex = selectedSkills?.length;
		if (skillIndex >= 3) {
			setMinimumSkillErrorMessage(false);
		}
		selectedSkills?.find((val, key) => {
			if (val === skillId) {
				skillIndex = key;
			}
		})

		if (skillIndex === selectedSkills?.length) {
			selectedSkills?.splice(skillIndex, 1, skillId)
		} else {
			selectedSkills?.splice(skillIndex, 1)
		}
	};

	const handleShowInfoPopup = (result, data, dimname) => {
		// return false;
		if (dimname) {
			setShowSkillPopup(result);
			setSkillInfoPopup(data);
			setDimName(dimname);
		} else {
			setShowInfoPopup(result);
			setinfoPopupData(data);
			// setDimName(dimname)
		}
	};

	const _close = () => {
		setShowSkillPopup(false);
		setSkillInfoPopup("");
		setDimName("");
		setShowInfoPopup(false);
		setinfoPopupData("");
	};

	const [showCourseDetail, setShowCourseDetail] = useState("");
	const [courseDetailId, setCourseDetailId] = useState("");
	const [skillId, setSkillId] = useState("");
	const [chooseSubjectObj, setChooseSubject] = useState([]);
	const [showmodal, setShowModal] = useState(false);
	const [showActivityForm, setActivityForm] = useState({});
	const [teacherData, showTeacherData] = useState(undefined);
	const [selectedTab, setSelectedTab] = useState();
	const [teacherDataOpen, setTeacherDataOpen] = useState(false);
	const [isChooseSubject, setIsChooseSubject] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [showSubs, setShowSubs] = useState(false);
	const [openReward, setOpenReward] = useState();
	const [rewardWK, setRewardWK] = useState();
	const [ratingClass, setRatingClass] = useState(false);

	const [certificate, setCertificate] = useState();
	const [certificateData, setCertificateData] = useState();
	const [certificateskilldata, setcertificateskilldata] = useState();

	useEffect(() => {
		if (getJournyResponse) {
			getJournyResponse?.records[0]?.skills?.map((data, key) => {
				data?.courses?.map((cData, key) => {
					if (cData?.id == showCourseDetail?.id) {
						setShowCourseDetail(cData);
						showTeacherData(cData.provider);
						setShimmerData(true);
					}
				});
			});
		} else {
			setShimmerData(false);
		}
	}, [getJournyResponse]);

	const [subscribeData, setSubscribeData] = useState();

	const closePro = () => {
		setActivityForm(undefined);
		showTeacherData(undefined);
		setTeacherDataOpen(false);

		if (!courseDetail) {
			setCourseDetail(false);
			setShowCourseDetail(undefined);
		}
		setShowModal(false);
		dispatch(resetResponse());
	};

	const closeSub = () => {
		// dispatch(deleteDimension(getSelectedUser?.id, selectedTab?.key, dimension));
		// dispatch(billingPlan());
		// dispatch(resetStripePlans());
		setShowSubs(false);
	};

	const handleSubscribe = () => {
		setShowPopUp(false);
		setShowSubs(true);
	};

	const closePopup = () => {
		setShowPopUp(false);
	};

	const viewReward = (data, isCourse, wk) => {
		setOpenReward(data);
		setRewardWK(wk);
		dispatch(getRewardData(modalData?.childId, data?.id, isCourse));
	};

	const viewCertificate = (data, courseData, skills) => {
		setCertificate(data);
		setCertificateData(courseData);
		setcertificateskilldata(skills);
	};

	const [showDimInfo, setShowDimInfo] = useState(false);
	const showDimensionPopup = (result, data, description) => {
		setinfoPopupData(data);
		setShowDimInfo(result);
	};

	const [minimumSkillErrorMessage, setMinimumSkillErrorMessage] = useState(false);

	return (
		<>
			{modalData?.type === "journeySkills" &&
				enrollCourseData?.length === 0 &&
				getJournyResponse?.recordId === null && (
					<div className='ljpopups halfPagePOpup SchoolActivityPopup'>
						<div
							className='modal  show d-block'
							id='dimensionSkillModel'
							role='dialog'>
							<div className='modal-dialog modal-lg certificatePopup'>
								<div className='modal-content'>
									<div className='modal-header'>
										<div className='heading p-0 border-0 w-100'>
											<h2 className='flex'>
												<span className='flex'>
													{" "}
													<img
														src={image.pathwaysicon}
														alt=''
														className='mr-2'
													/>
													Create Your Own Pathway
												</span>
												<button
													className='btn btn-primary'
													onClick={() => handleCloseSKillModel()}>
													<i className='fa-regular fa-xmark m-0'></i>
												</button>
											</h2>
										</div>
									</div>

									<div className='modal-body'>
										<div className='ljourney'>
											{/* <h3 className='text-center'>
												Create a learning journey for{" "}
												{childName
													? getCapitalized(childName)
													: getCapitalized(childNm)}
											</h3> */}
											<div className='ljourneysteps'>
												<div className='ljourneyitems flex'>
													{sortDimensions?.map((val, index) => (
														<span
															className={`ljdimension ${index <= selectedIndex ? classNames[index] : ""
																}`}
															key={index}>
															{index < selectedIndex && (
																<span>
																	<i className='fa-duotone fa-check'></i>
																</span>
															)}
															{index >= selectedIndex && (
																<span>{index + 1}</span>
															)}
															{index !== sortDimensions?.length - 1 && (
																<span className='tracks'></span>
															)}
														</span>
													))}
												</div>
											</div>

											<div className="  multipleSkillssel mb-3 ms-4 mt-5" id="multipleSkillssel">
												<p className="mt-0">Select 4-6 skills to create your pathway. </p>
												{
													selectedSkills?.length > 0 && (<p className="SkillCounter ps-2">Skills selected: <strong>{selectedSkills?.length}</strong> of 6 </p>)
												}
											</div>
											<div className='ScenecerelateddQuiz custom_pathways flex position-relative flex-wrap' id="ScenecerelateddQuiz">
												<div className='signupType m-0 '>
													<h4 className='mb-3'>
														{sortDimensions[selectedIndex]?.skills?.length ===
															0 ? (
															/*
															<div className='flexone mb-3'>
															  No courses are currently visible in the{" "}
															  {sortDimensions[selectedIndex]?.name} dimension
															  due to your choice to hide them. Proceed to the
															  next step or update your settings to make them
															  visible.
															</div>
															*/
															<div className='flexone mb-3'>
																No courses are currently visible in the{" "}
																{sortDimensions[selectedIndex]?.name} dimension due to your choice to hide them.
																Skip this step or update your settings to make them visible and restart.
															</div>
														) : (
															<>
																<span className='m-0'>
																	<i className='fa-light fa-clipboard-question'></i>
																</span>{" "}
																<strong className=''>
																	What would you like{" "}
																	{!childNm
																		? getCapitalized(childName)
																		: getCapitalized(childNm)}{" "}
																	to focus on in the{" "}
																	{sortDimensions &&
																		sortDimensions[selectedIndex]?.name + " "}
																	dimension?
																	<img
																		src={image.chat_icon}
																		className='ml-2 pointer jinfoicon'
																		alt=''
																		onClick={() =>
																			showDimensionPopup(
																				true,
																				sortDimensions &&
																				sortDimensions[selectedIndex]
																			)
																		}
																	/>
																</strong>
															</>
														)}
													</h4>

													{sortDimensions &&
														getSequnceSort(
															sortDimensions[selectedIndex]?.skills
														)?.map((value, index) => (
															<div className='flexone mb-3' key={index}>

																<label
																	className={`Selcheckbox m-0 ${index === 0 ? "ActiveQQst" : ""
																		}`}
																	key={value?.id}>
																	<span className='QQtitle'>{value?.name}</span>
																	<input
																		type='checkbox'
																		name={"skill" + selectedIndex}
																		defaultChecked={
																			selectedSkills?.includes(value?.id)
																		}
																		disabled={!selectedSkills?.includes(value?.id) && selectedSkills?.length > 5}
																		onChange={() =>
																			handleSkillClick(value?.id, selectedIndex)
																		}
																	/>
																	<span className='checkmark'></span>
																	{!selectedSkills?.includes(value?.id) && selectedSkills?.length > 5 &&
																		<div class="aboutProgdesc">
																			<div class="Courseporogresspopup">
																				<p class="m-0">You have reached the maximum of 6 skills. Unselect one to choose a new skill.</p>
																			</div>
																		</div>
																	}
																</label>
																<img
																	src={image.chat_icon}
																	className='ml-2 ichat_icon pointer'
																	alt=''
																	onClick={() =>
																		handleShowInfoPopup(
																			true,
																			value,
																			sortDimensions[selectedIndex]?.name
																		)
																	}
																/>{" "}
															</div>
														))}
												</div>
												{
													minimumSkillErrorMessage && (
														<div className="w-100 create_customp">
															<p className="text-danger">You need to select a minimum of 4 skills to create your own pathway.</p></div>
													)
												}
												{/* <div className="  multipleSkillssel mb-3">
													<p className="mt-0">Select 4-6 skills to create your pathway. </p>
													{
														selectedSkills?.length > 0 && (<p className="SkillCounter">Skills selected: <strong>{selectedSkills?.length}</strong> of 6 </p>)
													}
												</div> */}
											</div>

										</div>
									</div>

									<div className='modal-footer'>
										<div
											className='form-group BDsubmitbutton d-flex m-0'
											key={Math.random()}>
											{selectedIndex !== 0 && !enrollLoader && (
												<button
													className='btn-blue btn-login d-block mb-5 back_button'
													onClick={() => handleNext(false, selectedIndex)}>
													<i className='fa-solid fa-arrow-left m-0 mr-2'></i>
													Back
												</button>
											)}

											<div className='buttonDistribotion'>
												{enrollLoader ? (
													<button
														className='btn-blue btn-login d-block mb-5 '
														key={Math.random()}
														disabled>
														<span className='RounAnimation mr-1'></span> Please
														Wait...
													</button>
												) : (
													<button
														className={`btn-blue  btn-login d-block mb-5`}
														disabled={minimumSkillErrorMessage && selectedIndex === 4}
														onClick={() => handleNext(true, selectedIndex)}>
														Next
														<i className='fa-solid fa-arrow-right m-0 ml-2'></i>
													</button>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

			{/* {showInfoPopup && (
				<DimensionCourseSkillsPopup
					handleShowInfoPopup={handleShowInfoPopup}
					infoPopupData={infoPopupData}
				// dimName={dimName}
				/>
			)} */}

			{showDimInfo && (
				<DimensionGrowth
					data={infoPopupData}
					showDimensionPopup={showDimensionPopup}
				/>
			)}

			{showSkillPopup && (
				<SkillGrowth
					data={skillInfoPopup}
					setShowSkillPopup={setShowSkillPopup}
					dimName={dimName}
				/>
			)}

			{defaultChildData?.isSubscriber && startPopup && (
				<LockPopup setStartPopup={setStartPopup} type={type} />
			)}

			{/* {showSubs && (
        <Subscription close={closeSub} subscribeData={subscribeData} />
      )}
      {showPopUp && (
        <SubscribePopUp
          handleSubscribe={handleSubscribe}
          closePopup={closePopup}
        />
      )} */}

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

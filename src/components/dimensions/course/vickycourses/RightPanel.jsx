import React from "react";
import * as image from "../../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerCategoryList } from "react-shimmer-effects";
import Vicky from "../../../controls/Vicky";
import { showModal } from "../../../../redux/actions";
import CompleteCourseGuide from "../../../base/CompleteCourseGuide";
import { useState } from "react";
import { useEffect } from "react";
import { sendCollabrationEmail, sendRewardEmail } from "../../../../redux/actions/APIs";
const RightPanel = ({
	selectedTab,
	step,
	loader,
	handleNext,
	videoStep,
	quizStep,
	handleQuizStep,
	handleCongratulationPopup,
	providerSceneEarnPoint,
	handleShowRewardUnlockPopup
}) => {
	const dispatch = useDispatch();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isRewardPopupShow, setRewardPopupShow] = useState(false);
	const [isCourseRewardPopupShow, setCourseRewardPopupShow] = useState(false);
	const [collabEmailData, setCollabEmailData] = useState([]);

	const { socialActivityData, seriesData, modalData, next_scene_response, loggedInUser, defaultChildData, learnerAtttemptedResponse } =
		useSelector((state) => state.collections);

	/*
	useEffect(() => {
		if (socialActivityData?.records) {
			let obj = {
				userId: loggedInUser?.id,
				childFirstName: defaultChildData?.firstName,
				childName: defaultChildData?.name,
				courseName: socialActivityData?.records[0]?.courseName,
				parentCollabScreen: "",
				parentCollabEmail: socialActivityData?.records[0]?.parentCollabEmail,
			}
			setCollabEmailData(obj);
		}
	}, [socialActivityData?.records]);
	*/

	useEffect(() => {
		setCurrentQuestion(quizStep);
	}, [quizStep]);

	const handleContinue = (val) => {
		if (seriesData?.records[0]?.quiz?.length === val + 1) {
			return handleCongratulationPopup(true);
		}
		handleQuizStep(val + 1);
	};

	let title = "";
	let icon = "";
	const [points, setPoints] = useState(0);
	if (selectedTab === "Lessons") {
		title = "Pre-requisites";
		icon = image.prereqisits;
	} else if (selectedTab === "Series") {
		title = socialActivityData?.records[0]?.series?.scenes[step]?.rptitle;
		icon = image.scenelessonicon;
	} else if (selectedTab === "Quiz") {
		title = "Helpful Hints";
		icon = image.helpsandhints;
	} else if (selectedTab === "References") {
		title = " Additional Resources";
		icon = image.SceneRefrence;
	}

	const [guideType, setGuideType] = useState();
	const [changePoint, setChangePoint] = useState(false);

	const viewCCG = (data) => {
		setGuideType("Intellectual_Guide");
		dispatch(
			showModal({ type: modalData?.type === "courseHint" ? "" : "courseHint" })
		);
	};

	const handleSectionRewardPopup = (responses) => {
		let activityData = socialActivityData?.records[0];
		let isPopupAlreadyShow = isRewardPopupShow;
		if (activityData?.points >= activityData?.rewardTargetPoints) {
			isPopupAlreadyShow = true;
			setRewardPopupShow(true);
		} else if (!isPopupAlreadyShow && responses?.records[0]?.points >= activityData?.rewardTargetPoints) {
			handleShowRewardUnlockPopup(true, activityData?.rimageUrl, activityData?.rname);
			isPopupAlreadyShow = true;
			setRewardPopupShow(true);
			handleSendRewardEmail(true, false, activityData)
		}
	}

	const handleCourseRewardPopup = (responses) => {
		let activityData = socialActivityData?.records[0];
		let tempPoint = responses?.records[0]?.points - activityData?.points;
		let isPopupAlreadyShow = isCourseRewardPopupShow;
		if (activityData?.ucPoints >= activityData?.rewardCTargetPoints) {
			isPopupAlreadyShow = true;
			setCourseRewardPopupShow(true);
		} else if (!isPopupAlreadyShow && (activityData?.ucPoints + tempPoint) >= activityData?.rewardCTargetPoints && activityData?.rcShowRewardPop) {
			handleShowRewardUnlockPopup(true, activityData?.rcImageUrl, activityData?.rcName);
			setCourseRewardPopupShow(true);
			handleSendRewardEmail(false, true, activityData)
		}
	}

	const handleSendRewardEmail = (isActivity, isCourse, activityData) => {
		let values = {
			userCourseId: activityData?.ucId,
			userActivityId: activityData?.uaId,
			learnerId: defaultChildData?.id,
			courseId: activityData?.courseId,
			isCourse: isCourse,
			isActivity: isActivity
		};
		dispatch(sendRewardEmail(values))
	}

	/*
	const handleShowRewardPopup = (responses, isContinue) => {
		let testPoint = responses?.records[0]?.points - socialActivityData?.records[0]?.points;
		let isRewardPopupDisplay = isRewardPopupShow;
		if (socialActivityData?.records[0]?.points >= socialActivityData?.records[0]?.rewardTargetPoints) {
			isRewardPopupDisplay = true;
			setRewardPopupShow(true);
		} else if (responses?.records[0]?.points >= socialActivityData?.records[0]?.rewardTargetPoints && !isRewardPopupDisplay) {
			if (!isContinue) {
				handleShowRewardUnlockPopup(true, socialActivityData?.records[0]?.rimageUrl, socialActivityData?.records[0]?.rname);
			}
			setRewardPopupShow(true);
			let values = {
				userCourseId: socialActivityData?.records[0]?.ucId,
				userActivityId: socialActivityData?.records[0]?.uaId,
				learnerId: defaultChildData?.id,
				courseId: socialActivityData?.records[0]?.courseId,
				isCourse: false,
				isActivity: true
			};
			dispatch(sendRewardEmail(values))
		}

		let isCourseRewardPopupDisplay = isCourseRewardPopupShow;
		if (socialActivityData?.records[0]?.ucPoints >= socialActivityData?.records[0]?.rewardCTargetPoints) {
			isCourseRewardPopupDisplay = true;
			setCourseRewardPopupShow(true);
		} else if ((socialActivityData?.records[0]?.ucPoints + testPoint) >= socialActivityData?.records[0]?.rewardCTargetPoints && !isCourseRewardPopupDisplay) {
			if (!isContinue) {
				handleShowRewardUnlockPopup(true, socialActivityData?.records[0]?.rcImageUrl, socialActivityData?.records[0]?.rcName);
			}
			setCourseRewardPopupShow(true);
			let values = {
				userCourseId: socialActivityData?.records[0]?.ucId,
				userActivityId: socialActivityData?.records[0]?.uaId,
				learnerId: defaultChildData?.id,
				courseId: socialActivityData?.records[0]?.courseId,
				isCourse: true,
				isActivity: false
			};
			dispatch(sendRewardEmail(values))
		}
	}
	*/

	useEffect(() => {
		if (next_scene_response !== undefined && loggedInUser?.role?.name !== "PROVIDER") {
			setPoints(next_scene_response?.records[0]?.points);
			handleSectionRewardPopup(next_scene_response);
			handleCourseRewardPopup(next_scene_response);
			if (
				next_scene_response?.records[0]?.points !==
				socialActivityData?.records[0]?.points
			) {
				setChangePoint(true);
				setTimeout(() => {
					setChangePoint(false);
				}, 3000);
			}

			/*
			if (socialActivityData?.records[0]?.isEnrolled && !socialActivityData?.records[0]?.isPCEmailSent
				&& socialActivityData?.records[0]?.parentCollabEmail) {
				dispatch(sendCollabrationEmail(loggedInUser?.id, collabEmailData));
				socialActivityData.records[0].isPCEmailSent = true;
			}
			*/
		}
	}, [next_scene_response?.records]);

	/*
	useEffect(() => {
		if (learnerAtttemptedResponse) {
			if (socialActivityData?.records[0]?.isEnrolled && !socialActivityData?.records[0]?.isPCEmailSent
				&& socialActivityData?.records[0]?.parentCollabEmail) {
				dispatch(sendCollabrationEmail(loggedInUser?.id, collabEmailData));
				socialActivityData.records[0].isPCEmailSent = true;
			}
		}
	}, [learnerAtttemptedResponse]);
	*/

	useEffect(() => {
		if (socialActivityData !== undefined && loggedInUser?.role?.name !== "PROVIDER") {
			setPoints(socialActivityData?.records[0]?.points);
		}
	}, [socialActivityData?.records]);

	useEffect(() => {
		if (providerSceneEarnPoint !== 0 && loggedInUser?.role?.name === "PROVIDER") {
			setPoints(providerSceneEarnPoint);
			setChangePoint(true);
			setTimeout(() => {
				setChangePoint(false);
			}, 3000);
		}
	}, [providerSceneEarnPoint]);
	return (
		<div className="RightbarPannel p-0 rightpannelSticky">
			<div className="heading">
				<h2 className="flex">
					<span>
						<img src={icon} alt="" className="mr-2" />
						{title}
					</span>
					{selectedTab === "Series" && (
						<span>
							<span
								className={`${changePoint ? "earnplusCoin" : "earnnoCoin"}`}
							>
								{points}
							</span>
							<img src={image.money_bag} alt="" />
						</span>
					)}
				</h2>
			</div>

			{loader ? (
				<div className="lSidebarcontentwrap">
					{selectedTab === "Lessons" && (
						<div className="LessionDtlOverview">
							<div className="d-flex align-items-start flex-wrap">
								<div
									className="flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar"
									dangerouslySetInnerHTML={{
										__html: socialActivityData?.records[0]?.series?.rplesson,
									}}
								></div>
								<Vicky
									text={socialActivityData?.records[0]?.series?.rplesson}
								/>
							</div>
						</div>
					)}
					{selectedTab === "Series" && (
						<div className="LessionDtlOverview">
							<div className="d-flex align-items-start flex-wrap">
								<div
									className=" w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar"
									dangerouslySetInnerHTML={{
										__html:
											socialActivityData?.records[0]?.series?.scenes[step]
												?.application,
									}}
								></div>
								<Vicky
									text={
										socialActivityData?.records[0]?.series?.scenes[step]
											?.application
									}
								/>
							</div>
						</div>
					)}
					{selectedTab === "Quiz" && (
						<div className="LessionDtlOverview">
							<div className="d-flex align-items-start flex-wrap">
								<div
									className="w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar"
									dangerouslySetInnerHTML={{
										__html: seriesData && seriesData?.records[0]?.helpfulHints,
									}}
								></div>
								<Vicky text={seriesData?.records[0]?.helpfulHints} />
							</div>
						</div>
					)}

					{selectedTab === "References" && (
						<div className="LessionDtlOverview">
							<div className="d-flex align-items-start flex-wrap">
								<div
									className="w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar"
									dangerouslySetInnerHTML={{
										__html: socialActivityData?.records[0]?.series.reading,
									}}
								></div>
								<Vicky text={socialActivityData?.records[0]?.series.reading} />
							</div>
						</div>
					)}
					{selectedTab === "Series" && (
						<div className="ScenecerelateddQuiz">
							<div className="signupType rangetypeQuestion textAreatypeQuestion mb-2">
								<div className="input-group full-Width-group basic_details_form pt-0 continuebtn">
									<div className="form-group BDsubmitbutton flex m-0">
										<div className="courseguide" onClick={() => viewCCG(true)}>
											<span className="pointer">
												<i className="fa-regular fa-circle-info mr-2"></i>
												Course Guide
											</span>
										</div>
										<button
											type="submit"
											className="btn-blue btn-login d-block mb-5 ml-auto"
											onClick={() => handleNext(true)}
										>
											Continue
											<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* {selectedTab === "Quiz" && (
            <div className="ScenecerelateddQuiz">
              <div className="signupType rangetypeQuestion textAreatypeQuestion mb-2">
                <div className="input-group full-Width-group basic_details_form pt-0 continuebtn">
                  <div className="form-group BDsubmitbutton flex m-0">
                    <button
                      type="submit"
                      className="btn-blue btn-login d-block mb-5 ml-auto"
                      onClick={() => handleContinue(currentQuestion)}
                    >
                      Continue
                      <i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )} */}

					{/* {selectedTab === "Quiz" && (
            <div className="ScenecerelateddQuiz">
              <div className="signupType rangetypeQuestion textAreatypeQuestion mb-2">
                <div className="input-group full-Width-group basic_details_form pt-0 continuebtn">
                  <div className="form-group BDsubmitbutton flex m-0">
                    <button
                      disabled={
                        videoStep ===
                        socialActivityData?.records[0]?.series?.scenes?.length -
                          1
                      }
                      type="submit"
                      className="btn-blue btn-login d-block mb-5 ml-auto"
                      onClick={() => handleQuizStep(true)}
                    >
                      Continue
                      <i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )} */}
				</div>
			) : (
				<ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
			)}
			{modalData?.type === "courseHint" && (
				<div key={Math.random()}>
					{<CompleteCourseGuide guideType={guideType} />}
				</div>
			)}
		</div>
	);
};

export default RightPanel;

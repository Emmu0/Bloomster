import React, { useEffect } from "react";
import Home from "../../../Home";
import * as image from "../../../../resources/images";
import LessonNavBar from "./LessonNavBar";
import LessonQuiz from "./LessonQuiz";
import LessonReference from "./LessonReference";
import LessonSeries from "./LessonSeries";
import Lessons from "./Lessons";
import LessonCongratulationsPopup from "./LessonCongratulationsPopup";
import { useState } from "react";
import { PATHS } from "../../../../utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	sceanIndex,
	selectTab,
	showModal,
	getLastQuiz,
} from "../../../../redux/actions";
import {
	getSeriesQuiz,
	getSocialActivityDetail,
} from "../../../../redux/actions/APIs";
import RightPanel from "./RightPanel";
import { getSequnceSort } from "../../../../utils/helper";
import { tab } from "@testing-library/user-event/dist/tab";
import ProviderLessonCongratulationsPopup from "./ProviderLessonCongratulationPopup";
import RewardUnlockPopup from "../../../widget/RewardUnlockPopup";
import Certificate from "../../../base/Certificate";

const LessonDetails = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const param = useParams();
	const {
		socialActivityData,
		getdimension,
		loggedInUser,
		selectedDim,
		seriesData,
		modalData,
		next_scene_response,
	} = useSelector((state) => state.collections);
	useEffect(() => {
		dispatch(
			getSocialActivityDetail(
				param?.id,
				param?.courseId,
				param?.activityId,
				selectedDim?.value
			)
		);
	}, []);

	const [selectedTab, setSelectedTab] = useState(
		props?.location?.state?.tab ? props?.location?.state?.tab : "Lessons"
	);

	const [congratulationPopup, setCongratulationPopup] = useState(false);
	const [providerCongratulationPopup, setProviderCongratulationPopup] =
		useState(false);
	const [loader, setLoader] = useState();

	const [videoStep, setVideoStep] = useState(0);
	const [quizStep, setQuizStep] = useState(0);

	const [providerSceneView, setProviderSceneView] = useState([]);
	const [providerSceneEarnPoint, setProviderSceneEarnPoint] = useState(0);
	const [providerQuizData, setProviderQuizData] = useState([]);
	const [showRewardUnlock, setShowRewardUnlock] = useState(false);
	const [isContinueButtonClick, setIsContinueButtonClick] = useState(false);
	const [rewardData, setRewardData] = useState([]);
	const [showCertificate, setShowCertificate] = useState(false);

	const viewcertficate = (isFalse) => {
		setShowCertificate(isFalse);
	}

	const handleShowRewardUnlockPopup = (result, imageUrl, rewardName) => {
		setShowRewardUnlock(result);
		let obj = {
			imageUrl: imageUrl,
			rewardName: rewardName,
		};
		setRewardData(obj);
	};

	const videoSceneHandler = (count) => {
		let sceneData = getSequnceSort(
			socialActivityData?.records[0]?.series?.scenes
		);
		if (loggedInUser?.role?.name === "PROVIDER") {
			if (!providerSceneView.includes(sceneData[count]?.id)) {
				if (sceneData[count]?.id !== undefined) {
					providerSceneView.push(sceneData[count]?.id);
					let p = providerSceneEarnPoint;
					p += 10;
					setProviderSceneEarnPoint(p);
					setProviderSceneView(providerSceneView);
				}
			}
		}
	};

	const handleProviderQuizData = (data) => {
		setProviderQuizData(data);
		setProviderCongratulationPopup(true);
	};

	const handleQuizStep = (value) => {
		setQuizStep(value);
	};

	const handleTabChange = (tabValue, val, data) => {
		if (selectedTab !== "Quiz") {
			setQuizStep(0);
		}
		if (tabValue !== "Quiz") {
			dispatch(getSeriesQuiz());
		}
		setSelectedTab("Lessons");
		if (next_scene_response !== undefined) {
			setVideoStep(next_scene_response?.records[0]?.currentScene - 1);
		} else {
			setVideoStep(socialActivityData?.records[0]?.currentScene - 1);
		}
		dispatch(sceanIndex(socialActivityData?.records[0]?.series?.scenes[0]));
		setSelectedTab(tabValue);
		const index = getSequnceSort(
			socialActivityData?.records[0]?.series.scenes
		).findIndex((vl) => vl?.id === data?.id);
		if (index >= 0) {
			setVideoStep(index);
			dispatch(
				sceanIndex(socialActivityData?.records[0]?.series?.scenes[index])
			);
		}
		if (loggedInUser?.role?.name === "PROVIDER" && tabValue === "Series") {
			videoSceneHandler(val);
		}
	};
	const handleCongratulationPopup = (vl, v2) => {
		if (loggedInUser?.role?.name !== "PROVIDER") {
			setCongratulationPopup(vl);
			setIsContinueButtonClick(v2);
		} else {
			setProviderCongratulationPopup(vl);
		}
	};

	useEffect(() => {
		if (selectedTab) {
			dispatch(selectTab(selectedTab));
		}
	}, [selectedTab]);

	const _redirectOnCoursePage = () => {
		if (loggedInUser?.role?.name != "PROVIDER") {
			let dimension = getdimension?.records.find(
				(data) => data?.name === socialActivityData?.records[0]?.dimName
			);
			if (dimension?.id) {
				dispatch(
					selectTab({
						key: dimension?.id,
						value: dimension?.name,
					})
				);
				dispatch(getSeriesQuiz());
				history.push({
					pathname: PATHS.DIMENSION_STR + dimension?.id + "/" + param.id,
					state: { courseId: param?.courseId },
				});
			}
		} else {
			history.push(PATHS.COURSE_STR + param.id);
		}
	};
	const [setLessonData, getLessonData] = useState([]);

	useEffect(() => {
		let lessonData = socialActivityData?.records[0]?.series?.lessons;
		getLessonData(lessonData);
		setLoader(socialActivityData);
		if (!congratulationPopup) {
			setVideoStep(socialActivityData?.records[0]?.currentScene - 1);
		}
	}, [socialActivityData]);

	const handleNextLesson = (isNext) => {
		if (modalData?.type == "courseHint") {
			dispatch(
				showModal({
					type: modalData?.type === "courseHint" ? "" : "courseHint",
				})
			);
		}
		let totalVideo = socialActivityData?.records[0]?.series?.scenes?.length;
		let count = videoStep;
		if (isNext) {
			if (totalVideo - 1 == count) {
				handleCongratulationPopup(true);
			}
			if (totalVideo - 1 > count) {
				++count;
				// setCongratulationPopup(true);
			}
		} else {
			if (count != 0) {
				--count;
			}
		}
		setVideoStep(count);
		dispatch(sceanIndex(socialActivityData?.records[0]?.series?.scenes[count]));
		if (loggedInUser?.role?.name === "PROVIDER") {
			videoSceneHandler(count);
		}
	};

	const quizReview = () => {
		let dat = getSequnceSort(seriesData?.records[0]?.quiz);
		setQuizStep(0);
		seriesData?.records[0]?.quiz?.map((data, ky) => {
			if (data?.id == dat?.id) {
				// setFirstQuiz(ky)
			}
		});
		setCongratulationPopup(false);
	};

	// let sequence = getSequnceSort(socialActivityData?.records[0]?.series.scenes);

	return (
		<Home>
			<div className='d-flex flex-wrap SpecialLeftpanel w-100'>
				<div className='d-flex w-100 align-items-start overflow-visible'>
					<div className='LeftbarPannel p-0' id=''>
						<div className='CourseCardWrapper fullHeight100'>
							<LessonNavBar
								data={socialActivityData?.records[0]?.series}
								selectedTab={selectedTab}
								handleTabChange={handleTabChange}
								handleNext={handleNextLesson}
								videoStep={videoStep}
								handleQuizStep={handleQuizStep}
								quizCurrentIndex={quizStep}
								providerSceneView={providerSceneView}
							/>

							{selectedTab === "Lessons" && (
								<Lessons
									handleTabChange={handleTabChange}
									data={setLessonData}
									loader={loader}
									providerSceneView={providerSceneView}
								/>
							)}

							{selectedTab === "Series" && (
								<LessonSeries
									handleNext={handleNextLesson}
									handleCongratulationPopup={handleCongratulationPopup}
									congratulationPopup={congratulationPopup}
									videoStep={videoStep}
									data={getSequnceSort(
										socialActivityData?.records[0]?.series.scenes
									)}
									loader={loader}
									videoSceneHandler={videoSceneHandler}
								/>
							)}
							{selectedTab === "Quiz" && (
								<LessonQuiz
									handleCongratulationPopup={handleCongratulationPopup}
									loader={loader}
									quizStep={quizStep}
									handleQuizStep={handleQuizStep}
									selectedTab={selectedTab}
									handleProviderQuizData={handleProviderQuizData}
								/>
							)}
							{selectedTab === "References" && (
								<LessonReference data={socialActivityData?.records[0]} />
							)}
						</div>
					</div>

					{/* Right Panel Section */}

					<RightPanel
						selectedTab={selectedTab}
						step={videoStep}
						loader={loader}
						handleNext={handleNextLesson}
						videoStep={videoStep}
						quizStep={quizStep}
						handleQuizStep={handleQuizStep}
						handleCongratulationPopup={handleCongratulationPopup}
						providerSceneEarnPoint={providerSceneEarnPoint}
						handleShowRewardUnlockPopup={handleShowRewardUnlockPopup}
					/>

					{congratulationPopup && (
						<LessonCongratulationsPopup
							handleTabChange={handleTabChange}
							handleCongratulationPopup={handleCongratulationPopup}
							_redirectOnCoursePage={_redirectOnCoursePage}
							selectedTab={selectedTab}
							activityContent={socialActivityData?.records[0]}
							handleShowRewardUnlockPopup={handleShowRewardUnlockPopup}
							isContinueButtonClick={true}
							viewcertficate={viewcertficate}
						/>
					)}

					{providerCongratulationPopup && (
						<ProviderLessonCongratulationsPopup
							handleTabChange={handleTabChange}
							handleCongratulationPopup={handleCongratulationPopup}
							_redirectOnCoursePage={_redirectOnCoursePage}
							selectedTab={selectedTab}
							activityContentData={socialActivityData?.records[0]}
							providerSceneView={providerSceneView}
							providerQuizData={providerQuizData}
						/>
					)}

					{showRewardUnlock && (
						<RewardUnlockPopup
							handleShowRewardUnlockPopup={handleShowRewardUnlockPopup}
							rewardData={rewardData}
						/>
					)}

					{
						showCertificate && (<Certificate
							_redirectLesson={viewcertficate}
							CourseAndSkillId={socialActivityData?.records[0]}
						/>)
					}

				</div>
			</div>
		</Home>
	);
};

export default LessonDetails;

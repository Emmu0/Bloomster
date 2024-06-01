import { useEffect, useState } from "react";
import * as image from "../../../../resources/images";
import RoundProgress from "../../../controls/RoundProgress";
import { useDispatch, useSelector } from "react-redux";
import { getUrlSegment } from "../../../../utils/helper";
import {
	addRatingsData,
	getCourseRating,
	getSeriesQuiz,
	getSocialActivityDetail,
} from "../../../../redux/actions/APIs";
import { useParams } from "react-router-dom";
import { getLastQuiz } from "../../../../redux/actions";
import { ShimmerSocialPost, ShimmerThumbnail } from "react-shimmer-effects";
import AddRatings from "../../../widget/AddRatings";
const LessonCongratulationsPopup = ({
	handleTabChange,
	handleCongratulationPopup,
	_redirectOnCoursePage,
	selectedTab,
	courseActivityId,
	handleShowRewardUnlockPopup,
	isContinueButtonClick,
	viewcertficate,
}) => {
	const {
		seriesData,
		selectedDim,
		socialActivityData,
		defaultChildData,
		courseRating,
		response,
		dimension,
	} = useSelector((state) => state.collections);
	const [preload, setPreload] = useState(false);
	const dispatch = useDispatch();
	const params = useParams();
	const [totalScore, setTotalScore] = useState(0);
	let [yourScore, setYourScore] = useState(0);
	const [yourScoreCount, setYourScoreCount] = useState(0);
	const [totalQuizScore, setTotalQuizScore] = useState(0);
	const [yourQuizScore, setYourQuizScore] = useState(0);
	const [showLoader, setShowLoader] = useState(true);
	const [type, setType] = useState(true);
	const [showRewardLine, setShowRewardLine] = useState(false);
	const [rewardData, setRewardData] = useState([]);
	const [courseCompPoint, setCourseCompPoint] = useState([]);

	const [ratingPopup, setRatingPopup] = useState(false);
	const [myRating, setMyRating] = useState([]);
	const [courseData, setCourseData] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		if (socialActivityData !== undefined) {
			//	setCourseCompPoint(100);
			setCourseCompPoint(socialActivityData?.records[0]?.courseComp);
			let tScore = 0,
				yScore = 0,
				yScoreCount = 0;
			socialActivityData?.records[0]?.series?.scenes?.map((value, index) => {
				tScore += value?.points;
				if (value?.isCompleted) {
					yScore += value?.points;
					yScoreCount++;
				}
			});
			setTotalScore(tScore);
			setYourScore(yScore);
			setYourScoreCount(yScoreCount);

			if (isContinueButtonClick) {
				if (
					socialActivityData?.records[0]?.rewardTargetPoints > 0 &&
					socialActivityData?.records[0]?.points >=
					socialActivityData?.records[0]?.rewardTargetPoints
				) {
					setShowRewardLine(true);
					let obj = {
						imageUrl: socialActivityData?.records[0]?.rimageUrl,
						rewardName: socialActivityData?.records[0]?.rname,
					};
					setRewardData(obj);
				}
				if (
					socialActivityData?.records[0]?.rewardCTargetPoints > 0 &&
					socialActivityData?.records[0]?.ucPoints >=
					socialActivityData?.records[0]?.rewardCTargetPoints
				) {
					setShowRewardLine(true);
					let obj = {
						imageUrl: socialActivityData?.records[0]?.rcImageUrl,
						rewardName: socialActivityData?.records[0]?.rcName,
					};
					setRewardData(obj);
				}
			}
		}
	}, [socialActivityData?.records]);

	useEffect(() => {
		if (!preload) {
			if (courseActivityId) {
				dispatch(
					getSeriesQuiz(
						params.id ? params?.id : defaultChildData?.id,
						courseActivityId[1]
					)
				);
				dispatch(
					getSocialActivityDetail(
						params.id ? params?.id : defaultChildData?.id,
						courseActivityId[0],
						courseActivityId[2],
						courseActivityId[1]
					)
				);
			} else {
				dispatch(getSeriesQuiz(params.id, params.activityId));
				dispatch(
					getSocialActivityDetail(
						params?.id,
						params?.courseId,
						params?.activityId,
						selectedDim?.value
					)
				);
			}
			setPreload(true);
		}
	}, [params.id, defaultChildData?.id]);

	useEffect(() => {
		$("#showModal").modal({ backdrop: "static", keyboard: false });
	}, []);

	const handleGotoLesson = () => {
		dispatch(getSeriesQuiz());
		handleTabChange("Lessons");
		handleCongratulationPopup(false);
	};

	const handleGotoQuiz = () => {
		dispatch(getLastQuiz(1));
		handleTabChange("Quiz");
		handleCongratulationPopup(false);
	};

	let activityData = socialActivityData && socialActivityData.records[0];
	let sceanpoint = 0;
	activityData?.series?.scenes.map((vl) => {
		sceanpoint = sceanpoint + vl.points;
	});

	useEffect(() => {
		const lessonQuizpoint = [];
		let tQuizScore = 0;
		if (seriesData) {
			seriesData?.records[0]?.quiz.map((val) => {
				tQuizScore += val?.points;
				if (val?.attempted && val?.type === "RADIOQ") {
					val?.options?.map((val2) => {
						if (val2?.isCorrect === true && val2?.isUserSelected === true) {
							lessonQuizpoint.push(val.points);
						}
					});
				} else if (val?.attempted && val?.type === "CHECKBOXQ") {
					const areAllSelectedOptionsCorrect = val.options
						.filter((val2) => val2.isUserSelected)
						.every((val2) => val2.isCorrect);

					if (areAllSelectedOptionsCorrect) {
						lessonQuizpoint.push(val.points);
					}
				}
				const sum = lessonQuizpoint.reduce(
					(accumulator, currentValue) => accumulator + currentValue,
					0
				);

				setTotalQuizScore(tQuizScore);
				setYourQuizScore(sum);
			});
		}
	}, [seriesData]);
	let quizAvg = (yourQuizScore / totalQuizScore) * 100;

	let quizCompleted = seriesData?.records[0]?.quiz.every(
		(data) => data.attempted
	);
	let scenseCompleted = activityData?.series?.scenes?.every(
		(data) => data.isCompleted
	);

	let totalLessonPoint =
		totalScore !== 0 ? totalScore : activityData?.series?.scenes?.length * 10;
	//if (proficiency >= 80) {
	// yourScore =
	//   yourScore !== 0 ? yourScore : activityData.series.scenes.length * 10;
	//}
	let receivedLessonPoint = yourScore !== 0 ? yourScore : yourScoreCount * 10;
	let avgLessonPoint = (receivedLessonPoint / totalLessonPoint) * 100;
	let totalPoint = totalLessonPoint + totalQuizScore;
	let yourPoint = receivedLessonPoint + yourQuizScore;
	let profeciency1 = (parseInt(yourPoint) / parseInt(totalPoint)) * 100;
	let profeciancy =
		quizAvg < 80
			? ((receivedLessonPoint + yourQuizScore) /
				(totalQuizScore + receivedLessonPoint)) *
			100
			: 100;

	let completation =
		profeciancy === 100
			? 100
			: ((100 - profeciancy) * receivedLessonPoint) / totalLessonPoint +
			profeciancy;

	let heading = "Scorecard";
	if (selectedTab === "Series" && scenseCompleted && quizCompleted) {
		heading = "Congratulations! Section Complete";
	} else if (selectedTab === "Quiz" && quizAvg >= 80 && quizCompleted) {
		heading = "Congratulations! Section Complete";
	} else if (selectedTab === "Quiz" && quizAvg < 80 && scenseCompleted) {
		heading = "Congratulations! Section Complete";
	} else if (
		selectedTab === "Series" &&
		!scenseCompleted &&
		quizCompleted &&
		quizAvg >= 80
	) {
		heading = "Congratulations! Section Complete";
	} else {
		heading = "Section Scorecard";
	}

	const showConfityAndBadge = () => {
		return (
			<>
				{/* <h4 className="mb-2 mt-2">Your scorecard for the section</h4> */}

				{selectedTab === "Series" && quizCompleted && quizAvg >= 80 && (
					<div className="congconfeti">
						<img src={image.congratulation_confeti} alt="" />
					</div>
				)}

				{selectedTab === "Series" &&
					scenseCompleted &&
					quizCompleted &&
					quizAvg >= 80 && (
						<div className="congconfeti">
							<img src={image.congratulation_confeti} alt="" />
						</div>
					)}

				{selectedTab === "Series" && scenseCompleted && quizCompleted && (
					<div className="congconfeti">
						<img src={image.congratulation_confeti} alt="" />
					</div>
				)}

				{selectedTab === "Quiz" && quizAvg >= 80 && quizCompleted && (
					<div className="congconfeti">
						<img src={image.congratulation_confeti} alt="" />
					</div>
				)}

				{selectedTab === "Quiz" && quizAvg < 80 && scenseCompleted && (
					<div className="congconfeti">
						<img src={image.congratulation_confeti} alt="" />
					</div>
				)}
				{/* {heading === "Congratulations! Section Complete" && (
					<div className="congratesiocn">
						<img src={image.congratesicon} alt="" />
					</div>
				)} */}
			</>
		);
	};

	useEffect(() => {
		const delayTime = 1000;
		const timer = setTimeout(() => {
			setShowLoader(false);
		}, delayTime);

		return () => clearTimeout(timer);
	}, [heading, completation, completation]);

	const showRatingWizad = () => {
		dispatch(
			getCourseRating(
				defaultChildData?.id,
				socialActivityData?.records[0]?.courseId
			)
		);
	};

	useEffect(() => {
		if (courseRating) {
			setMyRating(courseRating?.records);
			setRatingPopup(!ratingPopup);
			setLoader(false);
			setCourseData({
				id: socialActivityData?.records[0]?.courseId,
				name: socialActivityData?.records[0]?.courseName,
			});
		}
	}, [courseRating]);

	const showRating = () => {
		setRatingPopup(!ratingPopup);
		if (ratingPopup) {
			dispatch(getCourseRating());
		}
	};

	const saveRating = async (rating, userId, data) => {
		let ratingType = "course";

		if (courseData?.id) {
			dispatch(
				addRatingsData(
					rating,
					courseData?.id,
					userId,
					ratingType,
					dimension,
					selectedDim,
					params?.id
				)
			);
		}
	};

	useEffect(() => {
		if (response) {
			dispatch(getCourseRating());
			_redirectOnCoursePage();
		}
	}, [response]);

	return (
		<>
			{(getUrlSegment()[0] === "lesson-details" ||
				getUrlSegment()[0] === "dimensions" ||
				getUrlSegment()[0] === "home") && (
					<div
						className="modal d-block congratulationPopup"
						id="schoolactivity69"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog" role="document">
							{showLoader ? (
								<ShimmerThumbnail height={500} width={500} />
							) : (
								<div className="modal-content">
									{/* <div className="modal-header">
										<div className="heading border-0 p-0 w-100">
											<h2 className="flex">
												<span>
													{heading === "Congratulations! Section Complete" ? (
														<>
															<img
																src={image.congratulationpopup}
																alt=""
																className="mr-2"
															/>
															{heading}
														</>
													) : (
														<>
															<img
																src={image.Scorecardicon}
																alt=""
																className="mr-2"
															/>
															{heading}
														</>
													)}
												</span>
												<button
													className="btn btn-primary"
													onClick={() => handleCongratulationPopup(false)}
												>
													<i className="fa-regular fa-xmark m-0"></i>
												</button>
											</h2>
										</div>
									</div> */}
									{/* <div className="modal-body">
										<div className="infopopup_wrap  align-items-start">
											<div className="infopopupright align-items-start pb-2">
												<div className="WelcomScreen">
													{showConfityAndBadge()}
													<div className="welcomscreenContent welcomscreentwo">
														<h4 className="text-center">Section Progress</h4>
														<div className="welcirculuarContent overallcircle flextwo">
															<h3>
																{activityData?.progress}
																<span className="percenrSign">%</span>
															</h3>
														</div>

														<div className="w-50 m-auto">
															<div className="progressstyl">
																<span className="proficencyprog">
																	<div className="position-relative Coursecompprcent m-auto">
																		<p className="">
																			<RoundProgress
																				data={activityData?.proficiency}
																				type={type}
																				className="m-1"
																			/>
																		</p>
																	</div>

																	<p className="aboutProgdesc">
																		Proficiency
																		<div className="Courseporogresspopup">
																			<h4>Proficiency</h4>
																			<p>
																				Assesses your child's comprehension of the
																				subject matter.
																			</p>
																		</div>
																	</p>
																</span>
																<span className="CompltProgress">
																	<div className="position-relative Coursecompprcent m-auto">
																		<p className="">
																			<RoundProgress
																				data={activityData?.completion}
																				type={type}
																				className="m-1"
																			/>
																		</p>
																	</div>
																	<p className="aboutProgdesc">
																		Completion
																		<div className="Courseporogresspopup">
																			<h4>Completion</h4>
																			<p>
																				Quantifies content your child has accessed
																				from the total available content.
																			</p>
																		</div>
																	</p>
																</span>
																<span className="TimProgress">
																	<div className="position-relative Coursecompprcent m-auto">
																		<p className="">
																			<RoundProgress
																				data={activityData?.pace}
																				type={type}
																				className="m-1"
																			/>
																		</p>
																	</div>
																	<p className="aboutProgdesc">
																		Pace
																		<div className="Courseporogresspopup">
																			<h4>Pace</h4>
																			<p>
																				Evaluates your child's learning pace
																				compared to the recommended optimal pace.
																			</p>
																		</div>
																	</p>
																</span>
															</div>
														</div>

														<div className="w-100">
															<ul>
																<li>
																	<span>
																		<i className="fa-solid fa-play mr-2"></i>
																	</span>
																	Section progress is calculated based on your
																	child’s proficiency, completion, and pace
																</li>
																{showRewardLine && isContinueButtonClick && (
																	<li className="rewardpoupgreentxt">
																		{" "}
																		<span>
																			<i className="fa-solid fa-play mr-2"></i>
																		</span>
																		<span>
																			You've unlocked a reward from your parents!{" "}
																			<a
																				href="#"
																				onClick={() =>
																					handleShowRewardUnlockPopup(
																						true,
																						rewardData?.imageUrl,
																						rewardData?.rewardName
																					)
																				}
																			>
																				{" "}
																				Click here{" "}
																			</a>{" "}
																			to see it.
																		</span>
																	</li>
																)}
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div> */}
									<div className="modal-header">
										<div className="heading border-0 p-0 w-100">
											<h2 className="flex">
												<span>
													{heading === "Congratulations! Section Complete" ? (
														<>
															<img
																src={image.congratulationpopup}
																alt=""
																className="mr-2"
															/>
															{heading}
														</>
													) : (
														<>
															<img
																src={image.Scorecardicon}
																alt=""
																className="mr-2"
															/>
															{heading}
														</>
													)}
												</span>
												<button
													className="btn btn-primary"
													onClick={() => handleCongratulationPopup(false)}
												>
													<i className="fa-regular fa-xmark m-0"></i>
												</button>
											</h2>
										</div>
									</div>
									<div className="text-center p-3 position-relative">
										<div className="skillprogrs">
											<span>
												{activityData?.progress}
												<span className="percentage_sign">%</span>
											</span>
										</div>
										<h4 className="sectionhvr">Section Progress</h4>

										{showConfityAndBadge()}
										<div className="scrorecardWrap">
											<ul className="scorecard_table">
												<li className="flex scorecardtitle">
													<div className="flex profoncard">
														<b>Proficiency:</b>
														<div className="position-relative Coursecompprcent ml-3  text-right">
															<p>
																<RoundProgress
																	data={activityData?.proficiency}
																	type={true}
																	className="m-1"
																/>
															</p>
															{/* <img src={image.enrolledicon} alt="" /> */}
														</div>
													</div>
													<div className="flex comploncard">
														<b>Completion:</b>
														<div className="position-relative Coursecompprcent ml-3 text-right">
															<p>
																<RoundProgress
																	data={activityData?.completion}
																	type={true}
																	className="m-1"
																/>
															</p>
														</div>
													</div>
												</li>
												{/* <li className="flex scorecardtitl">
													<div className="flex understandtitle">
														<b>Proficiency:</b>
														<div className="position-relative Coursecompprcent ml-3">
															<p>
																<RoundProgress data={profeciancy} className="m-1" />
															</p>
														</div>
													</div>
													<div className="flex  completeTitle">
														<b>Completion:</b>
														<div className="position-relative Coursecompprcent ml-3">
															<p>
																<RoundProgress data={completation} className="m-1" />
															</p>
														</div>
													</div>
												</li> */}
												<li>
													<table className="w-100 scoringtable">
														<tbody>
															<tr>
																<th>Section Activity</th>
																<th>Total Score</th>
																<th>Your Score</th>
															</tr>

															<tr>
																<td>Videos</td>
																<td>{activityData?.scPoints}</td>
																<td>{activityData?.userScpoints}</td>
																{/* <td>
																	{totalScore !== 0
																		? totalScore
																		: activityData.series.scenes.length * 10}
																</td>
																<td>
																	{yourScore !== 0
																		? yourScore
																		: yourScoreCount * 10}
																</td> */}
															</tr>
															{/* <tr>
																<td>Quiz</td>
																<td>{totalQuizScore}</td>
																<td>{yourQuizScore}</td>
															</tr> */}
															<tr>
																<td>Quiz</td>
																<td>{activityData?.isAcdKcPoints}</td>
																<td>{activityData?.userKcPoints}</td>
															</tr>
														</tbody>
													</table>
												</li>
												<li className="flex scorecardtitle">
													<b>Pace:</b>
													<div className="position-relative Coursecompprcent paceclr">
														<p>
															<RoundProgress
																data={activityData?.pace}
																type={true}
																className="m-1"
															/>
														</p>
													</div>
												</li>
												<li>
													<table className="w-100 scoringtable">
														<tr>
															<th>Pace Metric</th>
															<th>Recommended Pace</th>
															<th>Your Pace</th>
														</tr>
														<tr>
															<td>Time to Complete</td>
															<td>{activityData?.recommendedPace}</td>
															<td>{activityData?.learnerPace}</td>
														</tr>
													</table>
												</li>
											</ul>
											{selectedTab === "Series" &&
												!scenseCompleted &&
												quizCompleted &&
												quizAvg >= 80 && (
													<p className="mt-2">
														Based on your quiz results you have demonstrated a
														high level of proficiency and are not required to view
														lesson videos{" "}
													</p>
												)}

											{selectedTab === "Quiz" &&
												quizCompleted &&
												quizAvg >= 80 && (
													<p className="mt-2">
														Based on your quiz results you have demonstrated a
														high level of proficiency and are not required to view
														lesson videos{" "}
													</p>
												)}

											{selectedTab === "Quiz" &&
												quizAvg < 80 &&
												!scenseCompleted && (
													<p className="mt-2 ">
														Finish viewing the lesson videos to complete this
														section{" "}
													</p>
												)}
										</div>
										<>
											{/*
										{selectedTab === "Series" &&
											!scenseCompleted &&
											quizCompleted &&
											quizAvg >= 80 && (
												<p className="mt-2">
													Based on your quiz results you have demonstrated a
													high level of proficiency and are not required to
													view lesson videos{" "}
												</p>
											)
										}

										{selectedTab === "Quiz" &&
											quizCompleted &&
											quizAvg >= 80 && (
												<p className="mt-2">
													Based on your quiz results you have demonstrated a
													high level of proficiency and are not required to
													view lesson videos{" "}
												</p>
											)
										}

										{selectedTab === "Quiz" &&
											quizAvg < 80 &&
											!scenseCompleted && (
												<p className="mt-2 ">
													Finish viewing the lesson videos to complete this
													section{" "}
												</p>
											)
											}
										*/}
										</>
										{showRewardLine && isContinueButtonClick && (
											<ul>
												<li className="rewardpoupgreentxt">
													{" "}
													<span>
														<i className="fa-solid fa-play mr-2"></i>
													</span>
													<span>
														You've unlocked a reward from your parents!{" "}
														<a
															href="#"
															onClick={() =>
																handleShowRewardUnlockPopup(
																	true,
																	rewardData?.imageUrl,
																	rewardData?.rewardName
																)
															}
														>
															{" "}
															Click here{" "}
														</a>{" "}
														to see it.
													</span>
												</li>
											</ul>
										)}
									</div>
									{/* <div className="text-center p-3 position-relative">
									{showConfityAndBadge()}
									<>
										<div className="scrorecardWrap">
											<ul className="scorecard_table">
												<li className="flex scorecardtitl">
													<div className="flex  completeTitle">
														<b>Completion:</b>
														<div className="position-relative Coursecompprcent ml-3">
															<p className="text-right">
																<RoundProgress
																	data={completation}
																	className="m-1"
																/>
															</p>
														</div>
													</div>
													<div className="flex understandtitle">
														<b>Proficiency:</b>
														<div className="position-relative Coursecompprcent ml-3">
															<p>
																<RoundProgress
																	data={profeciancy}
																	className="m-1"
																/>
															</p>
														</div>
													</div>
												</li>
												<li>
													<table className="w-100 scoringtable">
														<tbody>
															<tr>
																<th>Section Activity</th>
																<th>Total Score</th>
																<th>Your Score</th>
															</tr>

															<tr>
																<td>Lessons</td>
																<td>
																	{totalScore !== 0
																		? totalScore
																		: activityData.series.scenes.length * 10}
																</td>
																<td>
																	{yourScore !== 0
																		? yourScore
																		: yourScoreCount * 10}
																</td>
															</tr>
															<tr>
																<td>Quiz</td>
																<td>{totalQuizScore}</td>
																<td>{yourQuizScore}</td>
															</tr>
														</tbody>
													</table>
												</li>
											</ul>

											{selectedTab === "Series" &&
												!scenseCompleted &&
												quizCompleted &&
												quizAvg >= 80 && (
													<p className="mt-2">
														Based on your quiz results you have demonstrated a
														high level of proficiency and are not required to
														view lesson videos{" "}
													</p>
												)
											}

											{selectedTab === "Quiz" &&
												quizCompleted &&
												quizAvg >= 80 && (
													<p className="mt-2">
														Based on your quiz results you have demonstrated a
														high level of proficiency and are not required to
														view lesson videos{" "}
													</p>
												)
											}

											{selectedTab === "Quiz" &&
												quizAvg < 80 &&
												!scenseCompleted && (
													<p className="mt-2 ">
														Finish viewing the lesson videos to complete this
														section{" "}
													</p>
												)
											}
										</div>
									</>
								</div> */}

									{courseCompPoint >= 100 && !courseActivityId && (
										<div className="modal-footer p-2 flex">
											<button
												type="button"
												className="'btn-blue btn-login d-block w-auto ml-0"
												onClick={() => {
													showRatingWizad(), setLoader(true);
												}}
												disabled={loader ? true : false}
											>
												<i className="fa-regular fa-magnifying-glass-arrow-right mr-2"></i>
												Review Course
											</button>
											<button
												type="button"
												className="btn-blue btn-login d-block w-auto flex"
												onClick={() => viewcertficate(true)}
											>
												<i className="fa-solid fa-eye mr-2"></i> View Certificate
											</button>
										</div>
									)}


									{/***************** */}
									{selectedTab === "Series" &&
										quizCompleted &&
										quizAvg < 80 &&
										!scenseCompleted &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto flex"
													onClick={() => _redirectOnCoursePage()}
												>
													<i className="fa-regular fa-house mr-2"></i>Go to Course
													Home
												</button>
											</div>
										)}

									{selectedTab === "Series" &&
										quizCompleted &&
										quizAvg >= 80 &&
										!scenseCompleted &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto flex"
													onClick={() => _redirectOnCoursePage()}
												>
													<i className="fa-regular fa-circle-check mr-2"></i>
													Complete Section
												</button>
											</div>
										)}

									{selectedTab === "Series" &&
										!quizCompleted &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 flex">
												<button
													type="button"
													className="btn-blue btn-login d-block w-auto m-0 flex"
													onClick={() => _redirectOnCoursePage()}
												>
													<i className="fa-regular fa-house mr-2"></i>Go to Course
													Home
												</button>
												<button
													type="button"
													className="btn-blue btn-login d-block w-auto ml-auto flex"
													onClick={() => handleGotoQuiz()}
												>
													Go to Quiz
													<i className="fa-solid fa-arrow-right ml-2"></i>
												</button>
											</div>
										)}

									{selectedTab === "Series" &&
										quizCompleted &&
										scenseCompleted &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto flex"
													onClick={() => _redirectOnCoursePage()}
												>
													<i className="fa-regular fa-circle-check mr-2"></i>{" "}
													Complete Section
												</button>
											</div>
										)}

									{/*************************/}

									{selectedTab === "Quiz" &&
										quizCompleted &&
										quizAvg >= 80 &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto flex"
													onClick={() => handleGotoQuiz()}
												>
													<i className="fa-regular fa-magnifying-glass-arrow-right mr-2"></i>
													Review Quiz
												</button>
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto flex"
													onClick={() => _redirectOnCoursePage()}
												>
													<i className="fa-regular fa-circle-check mr-2"></i>{" "}
													Complete Section
												</button>
											</div>
										)}

									{selectedTab === "Quiz" &&
										quizAvg < 80 &&
										scenseCompleted &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto flex"
													onClick={() => handleGotoQuiz()}
												>
													<i className="fa-regular fa-magnifying-glass-arrow-right mr-2"></i>
													Review Quiz
												</button>
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto flex"
													onClick={() => _redirectOnCoursePage()}
												>
													<i className="fa-regular fa-circle-check mr-2"></i>
													Complete Section
												</button>
											</div>
										)}

									{selectedTab === "Quiz" &&
										quizAvg < 80 &&
										!scenseCompleted &&
										courseCompPoint < 100 && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto flex"
													onClick={() => handleGotoQuiz()}
												>
													<i className="fa-regular fa-magnifying-glass-arrow-right mr-2"></i>
													Review Quiz
												</button>
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto "
													onClick={() => handleGotoLesson()}
												>
													Go to Lesson
													<i className="fa-solid fa-arrow-right ml-2"></i>
												</button>
											</div>
										)}

									{(getUrlSegment()[0] === "dimensions" ||
										getUrlSegment()[0] === "home") && (
											<div className="modal-footer p-2 ">
												<button
													type="button"
													className="'btn-blue btn-login d-block w-auto ml-auto cancelbutton"
													onClick={() => handleCongratulationPopup(false)}
												>
													<i className="fa-solid fa-xmark"></i> Close
												</button>
											</div>
										)}
								</div>
							)}
						</div>
					</div>
				)}
			{ratingPopup && (
				<AddRatings
					saveRating={saveRating}
					myRating={courseRating?.records}
					ratingUserId={defaultChildData?.id}
					showRating={showRating}
					data={courseData}
				/>
			)}
		</>
	);
};

export default LessonCongratulationsPopup;

/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as image from "../../resources/images";
import { Circle } from "rc-progress";
import { getSequnceSort } from "../../utils/helper";
import { useEffect, useState } from "react";
import {
  addRatingsData,
  getCourseRating,
  getSocialActivityDetail,
} from "../../redux/actions/APIs";
import { ShimmerSocialPost, ShimmerThumbnail } from "react-shimmer-effects";
import RoundProgress from "../controls/RoundProgress";
import AddRatings from "./AddRatings";

export default function CongratulationCard({
  providerPointsData,
  viewcertficate,
  pctComplete,
  _redirectLesson,
  congratulationsData,
  courseActivityId,
  handleOpenpopup,
  handleShowRewardUnlockPopup,
  isContinueButtonClick,
  rewardData,
  showRatingWizad,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const param = useParams();
  const [showLoader, setShowLoader] = useState(true);
  const [sortedScene, setSortedScene] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [showRewardLine, setShowRewardLine] = useState(true);
  const [type, setType] = useState(true);
  const [loader, setLoader] = useState(false);

  const {
    getdimension,
    socialActivityData,
    next_scene_response,
    loggedInUser,
    courseRating,
    defaultChildData,
    selectedDim,
    dimension,
    response,
  } = useSelector((state) => state.collections);

  const getSocialActicityDetail = () => {
    if (courseActivityId) {
      dispatch(
        getSocialActivityDetail(
          courseActivityId[0],
          courseActivityId[1],
          courseActivityId[2]
        )
      );
    } else {
      dispatch(
        getSocialActivityDetail(param?.id, param?.courseId, param?.activityId)
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getSocialActicityDetail();
  }, []);

  useEffect(() => {
    $("#exampleModal").modal({ backdrop: "static", keyboard: false });
    if (congratulationsData) {
      setActivityData(congratulationsData);
    } else if (socialActivityData?.records !== undefined) {
      setActivityData(socialActivityData?.records[0]);
      let arr = getSequnceSort(socialActivityData?.records[0]?.series?.scenes);
      setSortedScene(arr);
    }
  }, [socialActivityData?.records]);

  const totalScenes =
    socialActivityData?.records &&
    socialActivityData?.records[0]?.series?.scenes?.length;
  let totalPoints = socialActivityData?.records[0]?.tpoints;
  let earnPoints = socialActivityData?.records[0]?.points;
  let totalQuestions = 0;
  let totalAttemptedQuestion = 0;
  let totalExcerise = 0;
  let tpoint = 0;
  let weekProgress = socialActivityData?.records
    ? socialActivityData?.records[0]?.completion
    : 0;
  weekProgress = loggedInUser?.role?.name === "PROVIDER" ? 100 : weekProgress;
  let totalExcerisePoints = 0;
  let totalExceriseAttemptedPoints = 0;
  let totalKCPoints = 0;
  let totalKCAttemptedPoints = 0;
  for (var count = 0; count < totalScenes - 1; count++) {
    if (socialActivityData?.records[0]?.series?.scenes[count]?.kc?.length > 0) {
      totalQuestions +=
        socialActivityData?.records[0]?.series?.scenes[count]?.kc?.length;
      for (
        var index = 0;
        index <
        socialActivityData?.records[0]?.series?.scenes[count]?.kc?.length;
        index++
      ) {
        totalKCPoints +=
          socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]
            ?.points;
        if (
          socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]
            ?.attempted
        ) {
          totalAttemptedQuestion += 1;
          totalKCAttemptedPoints +=
            socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]
              ?.points;
        }
        tpoint +=
          socialActivityData?.records &&
          socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]
            ?.points;
      }
    } else {
      tpoint += 10;
    }
  }
  for (
    var index = 0;
    index <
    socialActivityData?.records[0]?.series?.scenes[totalScenes - 1]?.kc?.length;
    index++
  ) {
    if (
      socialActivityData?.records[0]?.series?.scenes[totalScenes - 1]?.kc[index]
        ?.attempted
    ) {
      totalExcerise += 1;
      totalExceriseAttemptedPoints +=
        socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]
          ?.points;
    }
    tpoint +=
      socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]?.points;
    totalExcerisePoints +=
      socialActivityData?.records[0]?.series?.scenes[count]?.kc[index]?.points;
  }
  useEffect(() => {
    if (socialActivityData?.records) {
      setShowLoader(false);
    }
    // const delayTime = 1000;
    // const timer = setTimeout(() => {
    // 	setShowLoader(false);
    // }, delayTime);

    // return () => clearTimeout(timer);
  }, [
    weekProgress,
    providerPointsData,
    pctComplete,
    socialActivityData?.records,
  ]);

  return (
    <>
      <div
        className='modal d-block congratulationPopup newEnrollCoursPopup'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          {showLoader ? (
            <ShimmerThumbnail height={500} width={500} />
          ) : (
            // <div className="modal-content courseInformation">
            // 	<div className="modal-header">
            // 		<div className="heading border-0 p-0 w-100">
            // 			<h2 className="flex">
            // 				<span>
            // 					{weekProgress >= 100 ? (
            // 						<>
            // 							<img
            // 								src={image.congratulationpopup}
            // 								className="mr-2"
            // 								alt=""
            // 							/>
            // 							Congratulations! {activityData?.courseComp >= 100 && !courseActivityId ? "Course" : "Section"} Complete
            // 						</>
            // 					) : (
            // 						<>
            // 							<img
            // 								src={image.Scorecardicon}
            // 								className="mr-2"
            // 								alt=""
            // 							/>
            // 							Section Scorecard
            // 						</>
            // 					)}
            // 				</span>
            // 				{
            // 					activityData?.courseComp >= 100 && !courseActivityId ? (<button
            // 						className="btn btn-primary"
            // 						onClick={() => _redirectLesson()}
            // 					>
            // 						<i className="fa-regular fa-xmark m-0"></i>
            // 					</button>) : (<button
            // 						className="btn btn-primary"
            // 						onClick={() => handleOpenpopup(false, [], true)}
            // 					>
            // 						<i className="fa-regular fa-xmark m-0"></i>
            // 					</button>)
            // 				}

            // 			</h2>
            // 		</div>
            // 	</div>

            // 	<div className="modal-body">
            // 		<div className="infopopup_wrap  align-items-start">
            // 			<div className="infopopupright align-items-start pb-2">
            // 				<div className="WelcomScreen">
            // 					<div className="welcomscreenContent welcomscreentwo">
            // 						{weekProgress >= 100 && (
            // 							<div className="congconfeti">
            // 								<img src={image.congratulation_confeti} alt="" />
            // 							</div>
            // 						)}
            // 						<h4 className="text-center">Section Progress</h4>
            // 						<div className="welcirculuarContent overallcircle flextwo">
            // 							<h3>
            // 								{activityData?.progress}
            // 								<span className="percenrSign">%</span>
            // 							</h3>
            // 						</div>

            // 						<div className="w-50 m-auto">
            // 							<div className="progressstyl">
            // 								<span className="proficencyprog">
            // 									<div className="position-relative Coursecompprcent m-auto">
            // 										<p className="">
            // 											<RoundProgress
            // 												data={activityData?.proficiency}
            // 												type={type}
            // 												className="m-1"
            // 											/>
            // 										</p>
            // 									</div>

            // 									<p className="aboutProgdesc">
            // 										Proficiency
            // 										<div className="Courseporogresspopup">
            // 											<h4>Proficiency</h4>
            // 											<p>
            // 												Assesses your child's comprehension of the subject matter.
            // 											</p>
            // 										</div>
            // 									</p>
            // 								</span>
            // 								<span className="CompltProgress">
            // 									<div className="position-relative Coursecompprcent m-auto">
            // 										<p className="">
            // 											<RoundProgress
            // 												data={activityData?.completion}
            // 												type={type}
            // 												className="m-1"
            // 											/>
            // 										</p>
            // 									</div>
            // 									<p className="aboutProgdesc">
            // 										Completion
            // 										<div className="Courseporogresspopup">
            // 											<h4>Completion</h4>
            // 											<p>
            // 												Quantifies content your child has accessed from the total available content.
            // 											</p>
            // 										</div>
            // 									</p>
            // 								</span>
            // 								<span className="TimProgress">
            // 									<div className="position-relative Coursecompprcent m-auto">
            // 										<p className="">
            // 											<RoundProgress
            // 												data={activityData?.pace}
            // 												type={type}
            // 												className="m-1"
            // 											/>
            // 										</p>
            // 									</div>
            // 									<p className="aboutProgdesc">
            // 										Pace
            // 										<div className="Courseporogresspopup">
            // 											<h4>Pace</h4>
            // 											<p>
            // 												Evaluates your child's learning pace compared to the recommended optimal pace.
            // 											</p>
            // 										</div>
            // 									</p>
            // 								</span>
            // 							</div>
            // 						</div>

            // 						<div className="w-100">
            // 							<ul>
            // 								<li>
            // 									{" "}
            // 									<span>
            // 										<i className="fa-solid fa-play mr-2"></i>
            // 									</span>
            // 									Section progress is calculated based on your child’s
            // 									proficiency, completion, and pace
            // 								</li>

            // 								{showRewardLine && isContinueButtonClick && (
            // 									<li className="rewardpoupgreentxt">
            // 										{" "}
            // 										<span>
            // 											<i className="fa-solid fa-play mr-2"></i>
            // 										</span>
            // 										<span>
            // 											You've unlocked a reward from your parents! <a href="#" onClick={() => handleShowRewardUnlockPopup(true, rewardData?.imageUrl, rewardData?.rewardName)}> Click here </a> to see it.</span></li>)
            // 								}
            // 							</ul>
            // 						</div>
            // 					</div>
            // 				</div>
            // 			</div>
            // 		</div>
            // 	</div>
            // 	<div className="modal-footer dontshowagain">
            // 		<div className="form-group BDsubmitbutton m-0 d-flex">
            // 			<div className="buttonDistribotion">
            // 				{activityData?.courseComp >= 100 && !courseActivityId ? (
            // 					<div className="flex w-100">
            // 						<button
            // 							type="button"
            // 							className="'btn-blue btn-login d-block w-auto ml-0"
            // 							onClick={() => { showRatingWizad(), setLoader(true) }}
            // 							disabled={loader ? true : false}
            // 						>
            // 							<i className="fa-regular fa-magnifying-glass-arrow-right mr-2"></i>
            // 							Review Course
            // 						</button>
            // 						<button
            // 							type="button"
            // 							className="btn-blue btn-login d-block w-auto flex"
            // 							onClick={() => viewcertficate(true)}
            // 						>
            // 							<i className="fa-solid fa-eye mr-2"></i> View Certificate
            // 						</button>
            // 					</div>
            // 				) : courseActivityId ? (
            // 					<button
            // 						type="button"
            // 						className="btn-blue btn-login d-block mb-5 cancelbutton m-0"
            // 						onClick={() => handleOpenpopup(false, [], true)}
            // 						key={weekProgress}
            // 					>
            // 						<i className="fa-regular fa-xmark mr-2"></i>Close
            // 					</button>
            // 				) : (
            // 					<button
            // 						type="button"
            // 						className="btn-blue btn-login d-block w-auto ml-auto flex"
            // 						onClick={() => _redirectLesson()}
            // 						key={weekProgress}
            // 					>
            // 						{weekProgress >= 100 ? (
            // 							<>
            // 								<i className="fa-regular fa-circle-check mr-2"></i>{" "}
            // 								Complete Section
            // 							</>
            // 						) : (
            // 							<>
            // 								<i className="fa-regular fa-home mr-2"></i> Go to
            // 								Course Home
            // 							</>
            // 						)}
            // 					</button>
            // 				)}
            // 			</div>
            // 		</div>
            // 	</div>
            // </div>
            /**
             * Old Popups
             */

            <div className='modal-content'>
              <div className='modal-header'>
                <div className='heading border-0 p-0 w-100'>
                  <h2 className='flex'>
                    <span>
                      {weekProgress >= 100 ? (
                        <>
                          <img
                            src={image.congratulationpopup}
                            className='mr-2'
                            alt=''
                          />
                          Congratulations! Module Complete
                        </>
                      ) : (
                        <>
                          <img
                            src={image.Scorecardicon}
                            className='mr-2'
                            alt=''
                          />
                          Module Scorecard
                        </>
                      )}
                    </span>
                    <button
                      className='btn btn-primary'
                      onClick={() => handleOpenpopup(false, [], true)}>
                      <i className='fa-regular fa-xmark m-0'></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className='text-center p-3 pt-2 position-relative'>
                <>
                  <div className='skillprogrs'>
                    <span>
                      {activityData?.progress}
                      <span className='percentage_sign'>%</span>
                    </span>
                    <h4 className='sectionhvr'>Module Progress</h4>
                  </div>
                </>
                {/* <h4 className="mb-2 mt-2">Your scorecard for the section</h4> */}
                {weekProgress >= 100 && (
                  <>
                    <div className='congconfeti'>
                      <img src={image.congratulation_confeti} alt='' />
                    </div>
                    {/* <div className="congratesiocn">
					<img src={image.congratesicon} alt="" />
				</div> */}
                  </>
                )}
                {/* logged in by prodiver */}
                <div className='scrorecardWrap'>
                  {loggedInUser?.role?.name === "PROVIDER" ? (
                    <ul className='scorecard_table'>
                      <li className='flex scorecardtitle'>
                        <b>Completion:</b>
                        {/* <div className="position-relative Coursecompprcent">
							<p>
								<RoundProgress
									data={
										activityData?.completion === null
											? 0
											: activityData?.completion
									}
									className="m-1"
								/>
							</p>
						</div> */}
                      </li>
                      <li>
                        <table className='w-100 scoringtable'>
                          <tr>
                            <th>Completion Metric</th>
                            <th>Total</th>
                            <th>Viewed</th>
                          </tr>
                          <tr>
                            <td># of Scenes</td>
                            <td>{totalScenes}</td>
                            <td>
                              {providerPointsData?.providerSceneEarnPoint / 10}
                            </td>
                          </tr>
                        </table>
                      </li>
                      <li className='flex scorecardtitle'>
                        <b>Proficiency:</b>
                        {/* <div className="position-relative Coursecompprcent">
							<p>
								<RoundProgress
									data={
										activityData?.proficiency === null
											? 0
											: activityData?.proficiency
									}
									className="m-1"
								/>
							</p>
						</div> */}
                      </li>
                      <li>
                        <table className='w-100 scoringtable'>
                          <tr>
                            <th>Module Activity</th>
                            <th>Total Score</th>
                            <th>Your Score</th>
                          </tr>
                          <tr>
                            <td>Scenes</td>
                            <td>{totalScenes * 10}</td>
                            <td>
                              {providerPointsData?.providerSceneEarnPoint}
                            </td>
                          </tr>
                          <tr>
                            <td>Knowledge Check</td>
                            <td>{totalQuestions * 10}</td>
                            <td>
                              {providerPointsData?.totalAttemptedQuestion * 10}
                            </td>
                          </tr>
                          <tr>
                            <td>Exercise</td>
                            <td>{totalExcerisePoints}</td>
                            <td>{providerPointsData?.exceriseEarnPoint}</td>
                          </tr>
                        </table>
                      </li>
                    </ul>
                  ) : (
                    // <div className="modal-body">
                    // 	<div className="infopopup_wrap  align-items-start">
                    // 		<div className="infopopupright align-items-start pb-2">
                    // 			<div className="WelcomScreen">

                    // 				<div className="welcomscreenContent welcomscreentwo">

                    // 					<h4 className="text-center">Section Progress</h4>
                    // 					<div className="welcirculuarContent overallcircle flextwo">
                    // 						<h3>70<span className="percenrSign">%</span></h3>
                    // 					</div>

                    // 					<div className="w-50 m-auto">
                    // 						<div className="progressstyl">
                    // 							<span className="proficencyprog">
                    // 								<div className="position-relative Coursecompprcent m-auto">
                    // 									<p className="">
                    // 										<RoundProgress data={30} className="m-1" />
                    // 									</p>
                    // 								</div>

                    // 								<p className="aboutProgdesc">Proficiency
                    // 									<div className="Courseporogresspopup"><h4>Course Progress</h4><p>Your course progress is calculated based on your proficiency, completion, and pace.</p></div>
                    // 								</p>
                    // 							</span>
                    // 							<span className="CompltProgress">
                    // 								<div className="position-relative Coursecompprcent m-auto">
                    // 									<p className="">
                    // 										<RoundProgress data={70} className="m-1" />
                    // 									</p>
                    // 								</div>
                    // 								<p className="aboutProgdesc">Completion
                    // 									<div className="Courseporogresspopup"><h4>Course Progress</h4><p>Your course progress is calculated based on your proficiency, completion, and pace.</p></div>
                    // 								</p>
                    // 							</span>
                    // 							<span className="TimProgress">
                    // 								<div className="position-relative Coursecompprcent m-auto">
                    // 									<p className="">
                    // 										<RoundProgress data={10} className="m-1" />
                    // 									</p>
                    // 								</div>
                    // 								<p className="aboutProgdesc">Pace
                    // 									<div className="Courseporogresspopup"><h4>Course Progress</h4><p>Your course progress is calculated based on your proficiency, completion, and pace.</p></div>
                    // 								</p>
                    // 							</span>
                    // 						</div>
                    // 					</div>

                    // 					<div className="w-100">
                    // 						<ul>
                    // 							<li> <span>
                    // 								<i className="fa-solid fa-play mr-2"></i>
                    // 							</span>Section progress is calculated based on your child’s proficiency, completion,
                    // 								and pace
                    // 							</li>
                    // 						</ul>

                    // 					</div>

                    // 				</div>
                    // 			</div>
                    // 		</div>
                    // 	</div>
                    // </div>
                    <>
                      <ul className='scorecard_table scorecardnewdesign'>
                        <li className='flex scorecardtitle blueprogresscircle'>
                          <b>Proficiency:</b>
                          <div className='position-relative Coursecompprcent'>
                            <p className='text-right'>
                              <span className='PercentCompleted'>
                                {activityData?.proficiency}
                                <span className='percenrSign'>%</span>
                              </span>
                              <Circle
                                percent={activityData?.proficiency}
                                strokeWidth={12}
                                strokeColor='#3ec093'
                              />

                              {/* <RoundProgress
                                data={
                                  activityData?.proficiency === null
                                    ? 0
                                    : activityData?.proficiency
                                }
                                className="m-1"
                              /> */}
                            </p>
                          </div>
                        </li>
                        <li>
                          <table className='w-100 scoringtable'>
                            <tr>
                              <th>Module Activity</th>
                              <th>Total Score</th>
                              <th>Your Score</th>
                            </tr>
                            <tr>
                              <td>Scenes</td>
                              <td>{activityData?.scPoints}</td>
                              <td>{activityData?.userScpoints}</td>
                              {/* <td>{totalScenes * 10}</td>
														<td>
															{activityData?.sceneCount === null
																? 0
																: activityData?.sceneCount
																	?.split(",")
																	.includes("0")
																	? (activityData?.sceneCount?.split(",")?.length -
																		1) *
																	10
																	: activityData?.sceneCount?.split(",")?.length *
																	10}
														</td> */}
                            </tr>
                            <tr>
                              <td>Knowledge Check</td>
                              <td>{activityData?.kcPoints}</td>
                              <td>{activityData?.userKcPoints}</td>
                              {/* <td>{totalQuestions * 10}</td>
														<td>{totalAttemptedQuestion * 10}</td> */}
                            </tr>
                            <tr>
                              <td>Exercise</td>
                              <td>{activityData?.exPoints}</td>
                              <td>{activityData?.userExPoints}</td>
                              {/* <td>{totalExcerisePoints}</td>
														<td>{totalExceriseAttemptedPoints}</td> */}
                            </tr>
                          </table>
                        </li>
                        <li className='flex scorecardtitle'>
                          <b>Completion:</b>
                          <div className='position-relative Coursecompprcent'>
                            <p className='text-right'>
                              <span className='PercentCompleted'>
                                {activityData?.completion}
                                <span className='percenrSign'>%</span>
                              </span>
                              <Circle
                                percent={activityData?.completion}
                                strokeWidth={12}
                                strokeColor='#3ec093'
                              />
                              {/* <RoundProgress
                                data={
                                  activityData?.completion === null
                                    ? 0
                                    : activityData?.completion
                                }
                                className="m-1"
                              /> */}
                            </p>
                          </div>
                        </li>
                        <li>
                          <table className='w-100 scoringtable'>
                            <tr>
                              <th>Completion Metric</th>
                              <th>Total</th>
                              <th>Viewed</th>
                            </tr>
                            <tr>
                              <td># of Scenes</td>
                              <td>{activityData?.secScCount}</td>
                              <td>{activityData?.userScViewed}</td>
                              {/* <td>{totalScenes}</td>
														<td>
															{activityData?.sceneCount === null
																? 0
																: activityData?.sceneCount
																	?.split(",")
																	.includes("0")
																	? activityData?.sceneCount?.split(",")?.length - 1
																	: activityData?.sceneCount?.split(",")?.length}
														</td> */}
                            </tr>
                          </table>
                        </li>
                        <li className='flex scorecardtitle'>
                          <b>Pace:</b>
                          <div className='position-relative Coursecompprcent paceclr'>
                            <p>
                              {/* <RoundProgress data={activityData?.userTiming} className="m-1" /> */}
                              <span className='PercentCompleted'>
                                {activityData?.pace}
                                <span className='percenrSign'>%</span>
                              </span>
                              <Circle
                                percent={activityData?.pace}
                                strokeWidth={12}
                                strokeColor='#3ec093'
                              />
                            </p>
                          </div>
                        </li>
                        <li>
                          <table className='w-100 scoringtable'>
                            <tr>
                              <th>Pace Metric</th>
                              <th>Recommended Pace</th>
                              <th>Your Pace</th>
                            </tr>
                            <tr>
                              <td>Time to Complete</td>
                              <td>{activityData?.recommendedPace}</td>
                              <td>{activityData?.learnerPace}</td>
                              {/* <td>5 Days</td> */}
                            </tr>
                          </table>
                        </li>
                      </ul>
                      {/* <ul>
												<li>
													<b>Points: </b>
												</li>
												<li>
													Total Points:
													<span>
														<strong>{totalPoints}</strong>
													</span>
												</li>
												<li>
													Points Earned:{" "}
													<span>
														<strong>{earnPoints}</strong>
													</span>
												</li>
												<li>
													<b>Knowledge Checks: </b>
												</li>
												<li>
													Total Questions:{" "}
													<span>
														<strong>{totalQuestions}</strong>
													</span>
												</li>
												<li>
													Total Attempted:{" "}
													<span>
														<strong>{totalAttemptedQuestion}</strong>
													</span>
												</li>
												<li>
													<b>Exercise: </b>
												</li>
												<li>
													Total Questions:{" "}
													<span>
														<strong>
															{socialActivityData?.records &&
																socialActivityData?.records[0]?.series?.scenes[
																	totalScenes - 1
																]?.kc?.length}
														</strong>
													</span>
												</li>
												<li>
													Total Attempted :{" "}
													<span>
														<strong>{totalExcerise}</strong>
													</span>
												</li>
											</ul> */}
                    </>
                  )}
                </div>
                {showRewardLine && isContinueButtonClick && (
                  <ul>
                    <li className='rewardpoupgreentxt'>
                      {" "}
                      <span>
                        <i className='fa-solid fa-play mr-2'></i>
                      </span>
                      <span>
                        You've unlocked a reward from your parents!{" "}
                        <a
                          href='#'
                          onClick={() =>
                            handleShowRewardUnlockPopup(
                              true,
                              rewardData?.imageUrl,
                              rewardData?.rewardName
                            )
                          }>
                          {" "}
                          Click here{" "}
                        </a>{" "}
                        to see it.
                      </span>
                    </li>
                  </ul>
                )}
              </div>
              <div className='modal-footer p-2 BDsubmitbutton'>
                {pctComplete ? (
                  <button
                    type='button'
                    className='btn-blue btn-login d-block w-auto flex'
                    onClick={() => viewcertficate(true)}>
                    <i className='fa-solid fa-eye mr-2'></i> View Certificate
                  </button>
                ) : courseActivityId ? (
                  <button
                    type='button'
                    className='btn-blue btn-login d-block mb-5 mb-0  cancelbutton w-auto m-0'
                    onClick={() => handleOpenpopup(false, [], true)}
                    key={weekProgress}>
                    <i className='fa-regular fa-xmark mr-2'></i>Close
                  </button>
                ) : (
                  <button
                    type='button'
                    className='btn-blue btn-login d-block w-auto ml-auto flex'
                    onClick={() => _redirectLesson()}
                    key={weekProgress}>
                    {weekProgress >= 100 ? (
                      <>
                        <i className='fa-regular fa-circle-check mr-2'></i>{" "}
                        Complete Module
                      </>
                    ) : (
                      <>
                        <i className='fa-regular fa-home mr-2'></i> Go to Course
                        Home
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

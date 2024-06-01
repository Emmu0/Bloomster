import React, { useState, useEffect } from "react";
import * as image from "../../resources/images";
import { useSelector } from "react-redux";
import ProgressBar from "../controls/ProgressBar";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { getCapitalized, getToolTip, textTrim } from "../../utils/helper";
const RewardPopUp = ({ closeReward, rewardDataWithoutAPI }) => {
	const { rewardData } = useSelector((state) => state.collections);
	const [rewards, setRewardsData] = useState([]);

	useEffect(() => {
		if (rewardData) {
			setRewardsData(rewardData?.records[0]);
		}
	}, [rewardData]);
	let currentDt = new Date();
	let endDt = new Date(rewards.lastDate);

	// Calculate the time difference in milliseconds
	let timeDiff = endDt.getTime() - currentDt.getTime();

	// Convert the time difference to days
	let daysToGo = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

	let progress = (rewards.points / rewards.tpoints) * 100;
	let progressLen = progress <= 5 ? 5 : progress.toFixed();
	return (
		<>
			<div className="Addrewardform ">
				<div className="modal d-flex" id="rewardPopupId" role="dialog">
					<div className="modal-dialog modal-lg certificatePopup">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									{rewardDataWithoutAPI?.name.length > 30 && (
										<p> {getToolTip(rewardDataWithoutAPI?.name, 30)}</p>
									)}
									<h2 className="flex">
										<span
											className="flex"
											data-for={rewardDataWithoutAPI?.name}
											data-event-off=""
											data-tip
										>
											{" "}
											<img src={image.rewardimg} alt="" className="mr-2" />
											Reward: {textTrim(rewardDataWithoutAPI?.name, 30)}
										</span>
										<button
											className="btn btn-primary"
											onClick={() => closeReward()}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body">
								{rewards?.id ? (
									<div className="rewardPopupcontent">
										<ul>
											{rewards?.points >= 0 && (
												<li>
													{" "}
													<h4 className="" key={progress}>
														<span>Progress:</span>

														{progressLen >= 100 ? (
															<span className="ml-1">
																<img src={image.enrolledicon} alt="" />
															</span>
														) : (
															<>
																<span className="TotleProgressInsub">
																	{/* {Math.round(progress)}% */}
																	{Math.round(rewards?.progress)}%
																</span>
																{rewards?.progress > 0 ? (
																	<ProgressBar
																		value={Math.round(rewards?.progress)}
																	/>
																) : (
																	<ProgressBar color={"#e5e5e5"} />
																)}

																<span className="text-center">
																	{rewards?.tpoints} Points
																</span>
															</>
														)}
													</h4>
												</li>
											)}
											{
												progressLen >= 100 && (
													<li>
														<h4>
															<span>Achieved:</span> {rewards?.tpoints} Points
														</h4>
													</li>
												)
											}
											<li>
												<h4>
													<span>Reward:</span> {getCapitalized(rewards?.name)}
												</h4>
											</li>
											<li>
												<h4>
													<span>Description:</span> {rewards?.description}
												</h4>
											</li>
											<li>
												<h4>
													<span>Expiry Date:</span>{" "}
													<strong
														className={` ${progress.toFixed() < 100 && daysToGo < 0
															? "expireddated"
															: ""
															}`}
													>
														{rewards?.lastDate}
													</strong>
													{progress.toFixed() < 100 && daysToGo >= 0 && (
														<span className="rewarddaysleft">
															Days Left: {parseInt(daysToGo)}
														</span>
													)}
													{progress.toFixed() < 100 &&
														rewards?.id &&
														daysToGo < 0 && (
															<span className="pl-3 rewarddaysleft timeexpiretxt">
																Time Expired!
															</span>
														)}
												</h4>
											</li>
											{rewards?.imageurl ? (
												<li className="rewarduploadimg">
													<h4>
														<span>Image:</span>{" "}
														<img
															key={Math.random()}
															src={rewards?.imageurl}
															alt=""
														/>
													</h4>
												</li>
											) : (
												<li className="rewarduploadimg">
													<h4>
														<span>Image:</span>{" "}
														<img src={image.rewardimg} alt="" />
													</h4>
												</li>
											)}
										</ul>
									</div>
								) : (
									<ShimmerThumbnail width={480} height={379} className="m-0" />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RewardPopUp;

import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";
import RoundProgress from "../../../controls/RoundProgress";
import { getSequnceSort, textTrim } from "../../../../utils/helper";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { parentToolsModal } from "../../../../redux/actions";
const CourseReview = ({ data }) => {
	const dispatch = useDispatch();
	const { courseSummaryResponse } = useSelector((state) => state.collections);

	const closePopup = () => {
		dispatch(parentToolsModal());
	}

	return courseSummaryResponse ? (
		<div className="newinfo_popup newinfo_popupdimension enrollZindex newEnrollCoursPopup">
			<div
				className="modal fade show d-block downgradepopup sectionscorecard"
				id="schoolactivity131"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<div className="heading border-0 p-0 w-100">
								<h2 className="flex">
									<span data-for={data?.name} data-event-off="" data-tip>
										<img src={image.reviewicon} className="mr-2" alt="" />
										{data?.name.length > 40 ? (
											<ReactTooltip id={data?.name}>
												<p>{data?.name}</p>
											</ReactTooltip>
										) : (
											""
										)}
										Course Summary: {textTrim(data?.name, 45)}
									</span>
									<button
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() => closePopup()}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>

						<div className="text-center px-3 py-2 flex flex-wrap position-relative">
							<div className="scrorecardWrap p-0">
								{data?.activities.map((actv, key) => (
									<ul className="sectionscore" key={key}>
										<li
											className="scorecardtitle flex pointer"
											data-toggle="collapse"
											href={"#coursesummary" + key}
											aria-expanded="false"
										>
											<div className="flexone">
												<div className="position-relative Coursecompprcent text-center mr-2">
													{actv?.progress < 100 ? (
														<p>
															<RoundProgress
																data={actv?.completion}
																className="m-1"
															/>
														</p>
													) : (
														<img src={image.enrolledicon}></img>
													)}
												</div>
												{(actv?.progress >= 100 || actv?.completion >= 100) && (
													<b>
														Great job! You have completed Module {key + 1}{" "}
													</b>
												)}
												{(actv?.progress > 0 && actv?.completion < 100) && (actv?.progress < 100 && actv?.completion < 100) && (
													<b>
														Module {key + 1} is in progress
														{/* Click the down arrow to see what's remaining. */}
													</b>
												)}
												{(actv?.progress === 0 && actv?.completion === 0) && (
													<b>You have not started Module {key + 1} yet</b>
												)}
											</div>
											<span>
												<i className="fa-regular fa-chevron-down"></i>
											</span>
										</li>
										<li
											className={`panel-collapse collapse `}
											id={"coursesummary" + key}
										>
											<table className="w-100 scoringtable">
												<tr>
													<th>Module Activity</th>
													<th>Total</th>
													<th>Completed</th>
												</tr>
												<tr>
													<td>{data?.isAcademic ? "Videos" : "Scenes"}</td>
													<td>
														{
															getSequnceSort(courseSummaryResponse?.records)[
																key
															]?.scCount
														}
													</td>
													<td>
														{courseSummaryResponse?.records[key]?.userScCount}
													</td>
												</tr>
												<tr>
													<td>{data?.isAcademic ? "Quiz" : "Knowledge Checks"}</td>
													<td>
														{courseSummaryResponse?.records[key]?.kcCount}
													</td>
													<td>
														{courseSummaryResponse?.records[key]?.userKcCount}
													</td>
												</tr>
												{
													!data?.isAcademic && (<tr>
														<td>Module Exercise</td>
														<td>
															{courseSummaryResponse?.records[key]?.exerciseCount}
														</td>
														<td>
															{
																courseSummaryResponse?.records[key]
																	?.userExerciseCount
															}
														</td>
													</tr>)
												}
											</table>
										</li>
									</ul>
								))}
							</div>
						</div>
						<div className="modal-footer dontshowagain">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion justify-content-between">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton"
										onClick={() => {
											closePopup();
										}}
									>
										<i className="fa-solid fa-xmark"></i>Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};
export default CourseReview;

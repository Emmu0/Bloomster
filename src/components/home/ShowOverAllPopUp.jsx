import React from "react";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { showOverallModal } from "../../redux/actions/Home";
import { getCapitalized } from "../../utils/helper";

const showOverallPopup = () => {
	let dispatch = useDispatch();
	const { defaultChildData } = useSelector((state) => state.collections);
	return (
		<div className="newinfo_popup holisticview">
			<div className="modal d-flex" id="schoolactivity105" role="dialog">
				<div className="modal-dialog modal-lg mt-0 mb-0">
					<div className="modal-content courseInformation">
						<div className="modal-header">
							<div className="heading border-0 p-0 w-100">
								<h2 className="flex">
									<span>
										<img src={image.Chartimgicon} className="mr-2" />
										Holistic View
									</span>
									<button className="btn btn-primary" onClick={() => dispatch(showOverallModal())}>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>

						<div className="modal-body">
							<div className="infopopup_wrap  align-items-start">
								<div className="infopopupright align-items-start pb-2">
									<div className="info_related_text w-100">
										<div className="infopopup_txt">
											<p className="m-0">
												Holistic Growth is an approach that focuses on the whole person, where growth and development is balanced across all aspects of life, rather than focusing on just the academic aspect. It encompasses the five (5) key dimensions intrinsic to an individual's ability to lead a fulfilling life: the <strong>Social</strong>, <strong>Emotional</strong>, <strong>Spiritual</strong>, <strong>Physical</strong>, and <strong>Intellectual</strong>.
											</p>
											<p className="mt-2">The holistic view provides a consolidated perspective of how your child is doing in these interconnected and interdependent dimensions and what they can work on to thrive in a rapidly changing world.</p>
										</div>
									</div>
									<div className="flex pb-1">
										<div className="holisticnewappoch">
											<div className="centeralapproch">
												<h4>Holistic<br />View</h4>
											</div>
											<div className="dimensionapproch">
												<div className="Seocialaaproch EmotioanlApproch ">
													<p>Emotional</p>
												</div>
												<span><img src={image.emotinalarrow} className="emotionalarrow" /></span>
												<div className="Seocialaaproch socialcircle">
													<p>Social</p>
												</div>
												<span><img src={image.socialarrow} className="socialarrow" /></span>
												<div className="Seocialaaproch SpritiualApproch">
													<p>Spiritual</p>
												</div>
												<span><img src={image.spiritualarrow} className="spiritualarrow" /></span>
												<div className="Seocialaaproch PhysicalApproch">
													<p>Physical</p>
												</div>
												<span><img src={image.physicalarrow} className="physicalarrow" /></span>
												<div className="Seocialaaproch intellectualApproch">
													<p>Intellectual</p>
												</div>
												<span><img src={image.intellectualarrow} className="intellectualarrow" /></span>
											</div>
										</div>
										<div className="Straightarrow"> <img src={image.holisticstrightarrow} alt="" /></div>

										<div class="holisticflowr w-40"><div class="skilanddimensioncircle Holisticgtflr  mt-2"><div class="Holosticcircle"><h4>{defaultChildData && getCapitalized(defaultChildData.firstName)}</h4></div><div class="Dimen_Circle SocicalCircle"></div><div class="Dimen_Circle EmotionalCircle"></div><div class="Dimen_Circle SpritiuslCircle"></div><div class="Dimen_Circle PhysicalCircle"></div><div class="Dimen_Circle intellectualCircle"></div></div></div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<div className="form-group BDsubmitbutton m-0 d-flex">
								<div className="buttonDistribotion">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton"
										onClick={() => dispatch(showOverallModal())}
									>
										<i className="fa-solid fa-xmark"></i> Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="modal d-flex" id="schoolactivity93" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content courseInformation">
						<div className="modal-header">
							<div className="heading border-0 p-0 w-100">
								<h2 className="flex">
									<span>
										<i class="fa-duotone fa-circle-three-quarters-stroke mr-2"></i>
										Overall Progress
									</span>
									<button
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() => dispatch(showOverallModal())}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>

						<div className="modal-body">
							<div className="infopopup_wrap  align-items-start">
								<div className="infopopupright align-items-start pb-2">
									<div className="WelcomScreen">
										<div className="welcomscreenContent welcomscreentwo flex">
											<div className="w-60">
												<ul>
													<li>
														{" "}
														<span>
															<i class="fa-solid fa-play mr-2"></i>
														</span>
														Overall progress is your child’s consolidated
														progress across the five (5) dimensions
													</li>
													<li>
														{" "}
														<span>
															<i class="fa-solid fa-play mr-2"></i>
														</span>
														Dimension progress is the consolidated progress for
														all skills your child is working on in that
														dimension
													</li>
													<li>
														{" "}
														<span>
															<i class="fa-solid fa-play mr-2"></i>
														</span>
														Skill progress is the average of progress for
														completed and in-progress courses in that skill
													</li>
													<li>
														{" "}
														<span>
															<i class="fa-solid fa-play mr-2"></i>
														</span>
														Progress in a course is calculated based on your
														child’s proficiency, completion, and pace
													</li>
												</ul>
											</div>
											<div className="w-40">
												<img src={image.overallprogressimg} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer dontshowagain">
							<div className="form-group BDsubmitbutton m-0 d-flex">
								<div className="buttonDistribotion">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton"
										onClick={() => dispatch(showOverallModal())}
									>
										<i className="fa-solid fa-xmark"></i> Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default showOverallPopup;

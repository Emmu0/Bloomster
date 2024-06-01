import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCapitalized } from "../../utils/helper";
const WhyAPlanPopup = ({ closePopup }) => {
	const { modalData, defaultChildData } = useSelector((state) => state.collections);
	return (
		<div className="newinfo_popup holisticview" id="whyPlanPopup">
			<div className="modal d-flex newEnrollCoursPopup" id="schoolactivity71" role="dialog">
				<div className="modal-dialog modal-lg mt-0 mb-0">
					<div className="modal-content">
						<div className="modal-header">
							<div className="heading border-0 p-0 w-100">
								<h2 className="flex">
									<span>
										<img src={image.SceneQuestionicon} className="mr-2" />
										Why A Plan?
									</span>
									<button className="btn btn-primary" onClick={() => closePopup()}>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>

						<div className="modal-body">
							<div className="infopopup_wrap  align-items-start">
								<div className="infopopupright align-items-start pb-2 d-flex">
									<div className="info_related_text flex-child">
										<div className="infopopup_txt">
											<p className="pb-4">
												Creating a learning plan helps parents and students work Bloomster into a regular habit and maintain consistency for maximum effectiveness.
											</p>

											<p className="pb-4">
												We've organized essential skills into five key dimensions of growth, offering courses designed to empower your children with soft skills relevant to their development. At Bloomster, we understand the unique challenges of parenting in the digital age.Our mission is to support you in nurturing confident, well - rounded individuals who can thrive in a world of constant change and unpredictability.
											</p>

											<p className="">
												Thank you for taking the time to build a learning plan to set your child up for success.
											</p>
										</div>
									</div>
									<div className="pb-1 flex-child">
										<div className="holisticnewappoch">
											<div className="centeralapproch">
												<h4>Holistic<br />Growth</h4>
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
												<div className="Seocialaaproch MindfulnessApproch">
													<p>Mindfulness</p>
												</div>
												<span><img src={image.spiritualarrow} className="mindfulnessarrow" /></span>
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
										<div className="downArrow"> <img src={image.downArrowImg} alt="" /></div>

										<div class="holisticflowr w-100"><div class="skilanddimensioncircle Holisticgtflr  mt-2"><div class="Holosticcircle"><h4>{getCapitalized(defaultChildData?.firstName)}</h4></div><div class="Dimen_Circle SocicalCircle"></div><div class="Dimen_Circle EmotionalCircle"></div><div class="Dimen_Circle SpritiuslCircle"></div><div class="Dimen_Circle PhysicalCircle"></div><div class="Dimen_Circle intellectualCircle"></div></div></div>
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
										onClick={() => closePopup()}
									>
										<i className="fa-solid fa-xmark"></i> Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default WhyAPlanPopup;
import React, { useState } from "react";
import * as image from "../../../../resources/images";
const QuizResult = ({ data, close }) => {
	
	return (
		<React.Fragment>
			<div className="halfPagePOpup HolisticProgress EnrollcConfimation">
				<div
					className="modal fade show d-block"
					id="schoolactivity26"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-body p-0">
								<div className="flex p-3 flex-wrap ">
									<div className="Poupleftimage">
										<img alt="" src={image.subscribePopup} />
									</div>
									<div className="popuprightmsg flex flex-wrap">
										<div>
											<button
												type="button"
												className="close"
												onClick={() => close(false)}
											>
												&times;
											</button>
											<div className="quizPreview">
												<h4 className="justify-content-center">
													{" "}
													<strong>Quiz Result</strong>{" "}
												</h4>
												<p>
													You have attempted {data?.totalAttempted} question out of{" "}
													{data?.total}.
												</p>
												<p>
													{data?.rightCount} answer is correct &{" "}
													{data?.wrongCount} is incorrect.
												</p>
												<button
													type="submit"
													className="btn-blue btn-login d-block mb-5 mt-3"
												>
													Preview your Answer{" "}
													<i className="fa-solid fa-arrow-right ml-2"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer p-0 pl-3 pr-3">
								<div className="form-group BDsubmitbutton d-flex m-0 mt-2 mb-2">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 ml-auto cancelbutton "
										onClick={() => close()}
									>
										<i className="fa-solid fa-xmark mr-2"></i>Cancel
									</button>
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5"
									>
										<i className="fa-solid fa-paper-plane mr-2"></i> Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default QuizResult;

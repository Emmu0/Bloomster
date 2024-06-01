import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { getCapitalized } from "../../../../utils/helper";
import { enrollModal, enrollmentPopup, parentLoginAction, parentToolsModal, setSubscribeModal, showModalObj } from "../../../../redux/actions";
const DisCoverPopup = ({ data }) => {
	const dispatch = useDispatch();
	const {
		defaultChildData, getSelectedUser
	} = useSelector((state) => state.collections)

	const parentTooEnroll = () => {
		if (data?.isSensitive) {
			dispatch(enrollmentPopup(data));
			dispatch(showModalObj({ isCourse: true }));
			dispatch(parentLoginAction("verifyUser"));
			dispatch(parentToolsModal());
			return false;
		}
		if (!getSelectedUser?.isSubscriber) {
			dispatch(setSubscribeModal(data));
			dispatch(parentToolsModal());
			return
		}
		dispatch(enrollModal(data));
		closePopup();
	};

	const closePopup = () => {
		dispatch(parentToolsModal());
	}

	return (
		<div className=" coursecardmenulocked  AddChildPopup lockedcontentpopup">
			<div className="modal d-block" role="dialog"
				id="schoolactivity138"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content  ">
						<div className="modal-header NuggetPopupTitle">
							<div className="heading border-0 w-100 NuggetVickyImage p-0">
								<h4 className="flex">
									<span>
										{" "}
										<img
											src={image.locked_icon}
											alt=""
											className="mr-2 p-1"
										/>
										See new life skills {getCapitalized(defaultChildData?.firstName)} will learn in this course
									</span>
									<button
										className="btn btn-primary"
										onClick={() => closePopup()}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h4>
							</div>
						</div>

						<div className="modal-body Subject_Curriculam  flex align-items-center feeAnalysispopup">

							<div className="welcomscreenContent">
								<ul>
									<li>
										<i className="fa-solid fa-play mr-2 mt-1"></i>
										<h4>
											{" "}
											We’ve created a tool for you to check out new life skills {getCapitalized(defaultChildData?.firstName)} will learn in this course.
										</h4>
									</li>
									<li>
										<i className="fa-solid fa-play mr-2 mt-1"></i>
										<h4>
											It will be available as soon as {getCapitalized(defaultChildData?.firstName)} completes this course.
										</h4>
									</li>
									{
										!data?.isEnrolled && (<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												Click 'Enroll' to kickstart {getCapitalized(defaultChildData?.firstName)}'s learning journey.
											</h4>
										</li>)
									}

								</ul>

							</div>



						</div>

						<div className="modal-footer closebtnreset">
							<div className="form-group BDsubmitbutton d-flex m-0 ">




								<button
									type="button"
									className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
									onClick={() => closePopup()}
								>
									<i className="fa-solid fa-xmark mr-2"></i> Close
								</button>
								{
									!data?.isEnrolled && (<button
										type="button"
										onClick={() => parentTooEnroll()}
										className="btn-blue btn-login d-block ml-0 w-auto"
									>
										<i className="fa-solid fa-paper-plane mr-2"></i>
										Enroll
									</button>)
								}
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
export default DisCoverPopup;
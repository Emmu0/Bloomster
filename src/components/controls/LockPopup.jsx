/** @format */

import React, { useState } from "react";
import * as image from "../../resources/images";
import { enrollModal, enrollmentPopup, lockPopup, parentLoginAction, parentToolsModal, showModalObj } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { courseEnrollment } from "../../redux/actions/APIs";

const LockPopup = ({ type }) => {
	const dispatch = useDispatch();

	const { defaultChildData, dimension } = useSelector(
		(state) => state.collections
	);

	const [loader, setLoader] = useState(false);
	const _enroll = () => {
		let data = type;
		if (data?.isSensitive) {
			dispatch(enrollmentPopup(type));
			dispatch(showModalObj({ isCourse: true }));
			dispatch(parentLoginAction("verifyUser"));
			dispatch(lockPopup());
			return false;
		}
		if (type?.isAcademic) {
			if (data?.dimId) {
				data.dimension = { key: data.dimId, name: data.dimName };
			}
			setLoader(true);
			dispatch(
				courseEnrollment(
					defaultChildData?.id,
					data?.dimension,
					data?.skillId,
					data?.id,
					dimension,
					data?.dimension?.name,
					false,
					false
				)
			).then(() => {
				dispatch(lockPopup());
				dispatch(parentToolsModal({ isConfirmation: true, data: data }));
				setLoader(false);
				type.isEnrolled = true;
			});
		} else {
			dispatch(enrollModal(type));
		}
	};
	return (
		<div className=" hoosrSubModlPopup AreyousurePopup AddChildPopup lockedcontentpopup">
			<div className=" hoosrSubModlPopup AreyousurePopup">
				<div className="modal d-block" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
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
											Locked Content
										</span>
										<button
											className="btn btn-primary"
											onClick={() => {
												dispatch(lockPopup());
											}}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h4>
								</div>
							</div>

							<div className="modal-body Subject_Curriculam  flex align-items-center feeAnalysispopup">
								{type?.isEnrolled ? (
									// <h2 className=" lockContentPOpups">
									//   This section will be unlocked after you complete the
									//   previous sections.{" "}
									// </h2>
									<div className="welcomscreenContent">
										<ul>
											<li>
												<i className="fa-solid fa-play mr-2 mt-1"></i>
												<h4>
													{" "}
													To unlock this module, watch all scenes in previous
													modules for 100% completion credit.
												</h4>
											</li>
											<li>
												<i className="fa-solid fa-play mr-2 mt-1"></i>
												<h4>
													{" "}
													Scenes with a
													<img
														src={image.enrolledicon}
														className="Viewcheckedicon"
													/>
													on the top right of the video or illustration are the
													ones you've already watched.
												</h4>
											</li>
											<li>
												<i className="fa-solid fa-play mr-2 mt-1"></i>{" "}
												<h4>
													Click the <img src={image.jumptoicon} alt="" />* in
													the top right corner of any scene to jump to scenes
													you’ve missed.
												</h4>
											</li>
										</ul>
										<div className="dropdownsec">
											<span>*</span>
											<img src={image.dropdownsec} alt="" />
											<i className="fa-solid fa-arrow-up-long"></i>
										</div>
									</div>
								) : (
									<div className=" lockContentPOpups w-100 p-0 welcomscreenContent">
										<h4 className="lockedpopuptitl">To unlock this module:</h4>
										<ul>
											<li>
												<i className="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Enroll in the course</h4>
											</li>
											<li>
												<i className="fa-solid fa-play mr-2 mt-1"></i>{" "}
												<h4>
													Watch all scenes in previous sections after enrolling
												</h4>
											</li>
										</ul>
										{/* Please enroll to access locked content. */}
									</div>
								)}
							</div>

							<div className="modal-footer closebtnreset">
								<div className="form-group BDsubmitbutton d-flex m-0 ">
									{type?.isEnrolled ? (
										<button
											type="button"
											onClick={() => {
												dispatch(lockPopup());
											}}
											className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
										>
											<i className="fa-solid fa-xmark mr-2"></i> Close
										</button>
									) : (
										<>
											<button
												type="button"
												onClick={() => {
													dispatch(lockPopup());
												}}
												className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
											>
												<i className="fa-solid fa-xmark mr-2"></i> Close
											</button>
											{!loader ? (
												<button
													type="button"
													onClick={() => _enroll()}
													className="btn-blue btn-login d-block ml-0 w-auto"
												>
													<i className="fa-solid fa-paper-plane mr-2"></i>
													Enroll
												</button>
											) : (
												<div className="justify-content-end">
													<button
														className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
														disabled
													>
														<span className="RounAnimation mr-1"></span> Please
														Wait...
													</button>
												</div>
											)}
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LockPopup;

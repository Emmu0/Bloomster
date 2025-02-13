/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { SelectPickerVal, getCapitalized } from "../../utils/helper";
import { MSG } from "../../utils/Messages";
import { useForm, Controller, SelectPicker, toast } from "../../utils/Packages";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/Regex";
import { getState, getUserByUsername } from "../../redux/actions/APIs";
import { resetEmailResponse, showModal } from "../../redux/actions";
import { inviteParentDataPostAPI } from "../../redux/actions/FeedbackAPIs";
import Success from "../notifications/Success";
import { Select } from "antd";
const InviteFriend = () => {
	const { Option } = Select;
	const { loggedInUser, getstate, validateUser } = useSelector((state) => state.collections);
	const [invUsername, setInvUsername] = useState(true);
	const { inviteFriendDataResponse } = useSelector((state) => state.feedback);
	const dispatch = useDispatch();
	const {
		register,
		control,
		handleSubmit,
		setValue,
		clearErrors,
		setError,
		formState: { errors },
	} = useForm({ mode: "onTouched" });

	const [submitLoader, setSubmitLoader] = useState(false);

	useEffect(() => {
		if (inviteFriendDataResponse) {
			setSubmitLoader(false);
			toast.info(<Success response={inviteFriendDataResponse} />);
			dispatch(inviteParentDataPostAPI());
			hidePilotUser();
		}
	}, [inviteFriendDataResponse]);

	const hidePilotUser = () => {
		dispatch(showModal());
		dispatch(getUserByUsername());
	};

	const _onSubmit = (values) => {
		if (validateUser?.message) {
			return false;
		}
		values["accesscode"] = "PARENT";
		if (invUsername) {
			setError("username", { type: "custom", message: MSG.INVITEMSG });
			return false;
		}
		setSubmitLoader(true);
		dispatch(inviteParentDataPostAPI(values));
	};

	const isValidEmail = (email) => {
		if (EMAIL_REGEX.test(email)) {
			return true;
		}
		return false;
	};

	const handleInvite = (e) => {
		if (loggedInUser?.username.toLowerCase() === e.target.value.toLowerCase()) {
			setError("username", { type: "custom", message: MSG.INVITEMSG });
			setInvUsername(true);
		} else {
			clearErrors("username");
			setInvUsername(false);
		}

		let emailAddress = e.target.value;
		let formData = {
			email: emailAddress,
		};

		if (isValidEmail(emailAddress)) {
			dispatch(getUserByUsername(formData));
		}

		if (emailAddress?.length === 0) {
			dispatch(resetEmailResponse());
		}
	};
	return (
		<>
			<div
				className="fade  AddChildPopup modal show d-block invite_frnd"
				role="dialog"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body p-0">
							<div className="modal-header">
								<div className="modal-title flex h4">
									<img src={image.invite_parents_icon} alt="" class="mr-2" />{" "}
									Invite a Parent
								</div>
								<button
									className="btn btn-primary"
									data-dismiss="modal"
									onClick={() => hidePilotUser()}
								>
									<i className="fa-regular fa-xmark m-0"></i>
								</button>
							</div>
							<div>
								<form
									name="freesignin"
									className="bg-white content"
									onSubmit={handleSubmit(_onSubmit)}
								>
									<div className="modal-body p-0">
										<div className="modal-body addChildProf Subject_Curriculam">
											<div className="EnrollTitle flex">

												<div className="popupboxstyl">
													<p className="flex text-left align-items-start p-0">
														Please provide the parent's details you wish to invite below.
													</p>
												</div>
											</div>
											<div className="wrapper mt-0 mb-2">
												<div className="input-group">
													<label htmlFor="">
														First Name<span className="mandatoryField">*</span>
													</label>
													<div className="form-group">
														<input
															type="text"
															className={`form-control ${errors.firstname ? "is-invalid" : ""
																}`}
															{...register("firstname", {
																required: {
																	value: true,
																	message: MSG.FNAMEREQ,
																},
																pattern: {
																	value: NAME_REGEX,
																	message: "First name " + MSG.ALPHAREQ,
																},
																maxLength: {
																	value: 100,
																	message: MSG.MAX100CHREQ,
																},
															})}
														/>
														<div className="invalid-feedback">
															{errors?.firstname?.message}
														</div>
													</div>
												</div>
												<div className="input-group">
													<label htmlFor="">
														Last Name<span className="mandatoryField">*</span>
													</label>
													<div className="form-group">
														<input
															type="text"
															className={`form-control ${errors.lastname ? "is-invalid" : ""
																}`}
															{...register("lastname", {
																required: {
																	value: true,
																	message: MSG.LNAMEREQ,
																},
																pattern: {
																	value: NAME_REGEX,
																	message: "Last name " + MSG.ALPHAREQ,
																},
																maxLength: {
																	value: 100,
																	message: MSG.MAX100CHREQ,
																},
															})}
														/>
														<div className="invalid-feedback">
															{errors?.lastname?.message}
														</div>
													</div>
												</div>
												<div className="input-group">
													<label htmlFor="">
														Email/Username{""}
														<span className="mandatoryField">*</span>
													</label>
													<div className="form-group">
														<input
															type="text"
															className={`form-control ${errors.username || validateUser?.message ? "is-invalid" : ""
																}`}
															{...register("username", {
																onChange: (e) => handleInvite(e),
																required: {
																	value: true,
																	message: MSG.EMAILREQ,
																},
																pattern: {
																	value: EMAIL_REGEX,
																	message: MSG.INVEMAILREQ,
																},
																maxLength: {
																	value: 100,
																	message: MSG.MAX100CHREQ,
																},
															})}
															onBlur={(e) => handleInvite(e)}
														/>
														<div className="invalid-feedback">
															{errors?.username?.message ? errors?.username?.message : validateUser?.message}
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="modal-footer w-100">
											<div className="form-group BDsubmitbutton d-flex m-0 ">
												{!submitLoader && <button
													type="button"
													className="btn-blue btn-login d-block mb-5 cancelbutton ml-auto"
													onClick={() => hidePilotUser()}
												>
													<i className="fa-solid fa-xmark mr-2"></i> Cancel
												</button>}
												{submitLoader ? (
													<button
														className="btn-blue btn-login d-block mb-5 left_auto"
														disabled
														key={Math.random()}
													>
														<span className="RounAnimation mr-1"></span> Please
														wait...
													</button>
												) : (
													<button
														type="submit"
														className="btn-blue btn-login d-block ml-0 w-auto"
													>
														<i className="fa-solid fa-paper-plane mr-2"></i>
														Submit
													</button>
												)}
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* { isThanks &&
          <PilotUserThanks hidePilotUser={hidePilotUser}/>
        } */}
		</>
	);
};

export default InviteFriend;

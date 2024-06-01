import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import * as image from "../../resources/images";
import SubscriberForm from "./SubscriberForm";
import { DELETEACCOUNT } from "../../utils/DataObjects";
import { MSG } from "../../utils/Messages";
import { useForm, Controller, SelectPicker } from "../../utils/Packages";
import { getverifyUser, userDelete } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-bootstrap";
import SecHeader from "./SecHeader";
import { PATHS } from "../../utils";
import DeleteUserVerificationPopup from "./DeleteUserVerificationPopup";
import { EMAIL_REGEX } from "../../utils/Regex";
import { resetEmailResponse } from "../../redux/actions";
const Deactivateaccout = () => {
	const {
		register,
		setValue,
		handleSubmit,
		control,
		watch,
		setError,
		clearErrors,
		getValues,
		formState: { errors },
	} = useForm({ mode: "onTouched" });

	const [selopt, setselopt] = useState("");
	const [dadel, setdadel] = useState("");

	const dispatch = useDispatch();
	const { alluserdetails, response, verifyUserResponse } = useSelector(
		(state) => state.collections
	);
	useEffect(() => {
		if (alluserdetails) {
			let loginUser = alluserdetails?.records[0];
			setValue("firstName", loginUser.firstName);
			setValue("lastName", loginUser.lastName);
			setValue("userEmail", loginUser.username);
		}
	}, [alluserdetails]);

	const [isSubmit, setIsSubmit] = useState(false);
	const [data, setData] = useState(false);

	const _DeleteAccountSubmit = (userdata) => {
		let obj = {
			firstName: "x",
			lastName: "x",
			confirmPassword: "",
			userEmail: userdata?.userEmail,
			isDeactivate: true,
			isDelete: false,
			reason: userdata?.reason
		}
		setdadel("Deactivate");
		if (userdata.reason === "Other") {
			obj.reason = userdata.writereason;
		}
		if (userdata?.isDeactivate === "Delete Account") {
			obj.isDeactivate = false;
			obj.isDelete = true;
			setdadel("Delete");
		}
		setData(obj);
		setIsSubmit(true);
		return;
		let loginUser = alluserdetails?.records[0];
		userdata.firstName = loginUser.firstName;
		userdata.lastName = loginUser.lastName;
		userdata.userEmail = loginUser.username;

		if (userdata.reason === "Other") {
			userdata.reason = userdata.writereason;
		}
		if (userdata?.isDeactivate === "Delete Account") {
			userdata.isDeactivate = false;
			userdata.isDelete = true;
			setdadel("Delete");
		}
		if (userdata?.isDeactivate === "Deactivate Account") {
			userdata.isDeactivate = true;
			userdata.isDelete = false;
			setdadel("Deactivate");
		}

		delete userdata.writereason;
		delete userdata.delreason;
		delete userdata.DeleteAccount;

		dispatch(userDelete(userdata));
	};

	const isValidEmail = (email) => {
		if (EMAIL_REGEX.test(email)) {
			return true;
		}
		return false;
	};

	const handleEmail = (e) => {
		let emailAddress = e.target.value;
		let formData = {
			email: emailAddress,
		};

		if (isValidEmail(emailAddress)) {
			dispatch(getverifyUser(formData));
		}

		if (emailAddress?.length === 0) {
			dispatch(resetEmailResponse());
		}
	};

	const close = () => {
		setIsSubmit(false);
	}

	const [isSubmitDisable, setIsSubmitDisabled] = useState(false);
	useEffect(() => {
		if (verifyUserResponse?.success) {
			setIsSubmitDisabled(true);
		} else {
			setIsSubmitDisabled(false);
		}
	}, [verifyUserResponse])

	return (
		<div>
			{response?.success ? (
				<div className="Successpage text-center deleteAccountpage">
					<img src={image.newvickylogo} alt="" />
					<h2>We are sorry to see you go!</h2>
					<br />
					<h3 className=" mb-3">
						{/* We have received your request to <span>{dadel}</span> your account.
						<br />
						We will notify you once your request has been completed. */}
						{
							dadel === "Delete" ? (<>

								We acknowledge your account deletion request.  <br />
								Your access has been revoked with immediate effect, and your data will be
								deleted within 30 days.
								We will notify you once it's deleted. <br />


							</>) : (<>
								Your account has been deactivated and you no longer have access to Bloomster.
								<br />
							</>
							)
						}

						<br />
						If you had a subscription, it has been canceled, and you won't be billed again.
					</h3>
					<div className="Successimsge flex  m-auto">
						<div class="w-25 m-auto">
							{/* {dadel === "Delete" ? (
								<img src={image.deletaaccountimg} alt="..." />
							) : (
								<img src={image.accountdeactivate} alt="..." />
							)} */}
						</div>
					</div>
				</div>
			) : (
				<div className="providerF">
					<div className="BlogList pt-0">
						<div className="Blogbanner text-left">
							<div className="container">
								<h3>
									<span>Delete / Deactivate Account</span>
								</h3>
							</div>
						</div>

						<section className="deletYrAccount">
							<div className="">
								<div className="modal-content">
									<div className="modal-body optvarification Subject_Curriculam p-0">
										<div className="PannelContent basicdetailsform ">
											<form onSubmit={handleSubmit(_DeleteAccountSubmit)}>
												<div className="wrapper mx-auto">
													<div className="input-group w-100">
														<label className="mt3 selectactionlabl">
															Select your action
															<span class="mandatoryField">*</span>
														</label>
														<div className="signupType m-0 mb-3 selectYourAction deletetab">
															<ul>
																<li>
																	<label className="Selcheckbox flex-wrap ActiveQQst m-0 pl-0">
																		<h4>Deactivate Account</h4>
																		<p>
																			Deactivating your account will remove
																			your access while keeping your data
																		</p>
																		<input
																			type="radio"
																			selected
																			value="Deactivate Account"
																			{...register("isDeactivate", {
																				required: {
																					value: true,
																					message: "Please select an action",
																				},
																			})}
																			id=""
																		/>
																		<span className="checkmark"></span>
																	</label>
																</li>
																<li>
																	<label className="Selcheckbox flex-wrap ActiveQQst m-0 pl-0">
																		<h4>Delete Account</h4>
																		<p>
																			Deleting your account will remove your
																			access and delete all your data
																			permanently
																		</p>
																		<input
																			type="radio"
																			value="Delete Account"
																			{...register("isDeactivate", {
																				required: {
																					value: true,
																					message: "Please select an action",
																				},
																			})}
																			id=""
																		/>

																		<span className="checkmark"></span>
																	</label>
																</li>
															</ul>
														</div>
														<div className="invalid-feedback">
															{errors?.isDeactivate?.message}
														</div>
													</div>
													{/* <div className="input-group">
														<label>First Name</label>
														<div class="form-group">
															<input
																type="text"
																maxlength="15"
																class="form-control "
																{...register("firstName", {
																	required: {
																		value: true,
																		message: "",
																	},
																})}
																disabled={watch("firstName")}
															/>
														</div>
													</div>
													<div className="input-group">
														<label>Last Name</label>
														<div class="form-group">
															<input
																type="text"
																maxlength="15"
																class="form-control "
																{...register("lastName", {
																	required: {
																		value: true,
																		message: "",
																	},
																})}
																disabled={watch("lastName")}
															/>
														</div>
													</div> */}
													<div className="input-group w-100">
														<label>
															Email/Username
															<span className="mandatoryField">*</span>
														</label>
														<div class="form-group">
															<input
																type="text"
																maxlength=""
																class="form-control "
																{...register("userEmail", {
																	onChange: (e) => handleEmail(e),
																	required: {
																		value: true,
																		message: "Please enter your email/username",
																	},
																	pattern: {
																		value: EMAIL_REGEX,
																		message: MSG.INVEMAILREQ,
																	},
																})}
															/>
														</div>
														<div className="invalid-feedback">
															{errors?.userEmail?.message ? errors?.userEmail?.message : verifyUserResponse?.message}
														</div>
													</div>
													{/* <div className="input-group">
														<label>
															Confirm Password
															<span class="mandatoryField">*</span>
														</label>
														<div class="form-group">
															<input
																type="Password"
																maxlength=""
																className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
																	}`}
																{...register("confirmPassword", {
																	required: {
																		value: true,
																		message: MSG.PASSREQ,
																	},
																})}
															/>
															<div className="invalid-feedback">
																{errors?.confirmPassword?.message}
															</div>
														</div>
													</div> */}

													<div className="input-group w-100">
														<label>
															Please tell us why you are deleting/deactivating
															your account
															<span className="mandatoryField">*</span>
														</label>
														<Controller
															{...register("reason", {
																required: {
																	value: true,
																	message: "Please provide a reason for requesting account deletion/deactivation",
																},
															})}
															control={control}
															render={({ field: { onChange, value } }) => {
																onChange = (event) => {
																	setValue("reason", event);
																	setselopt(event);
																	clearErrors("reason");
																};

																return (
																	<SelectPicker
																		className={`w-100 p-0 ${errors.reasonForDeactivate
																			? "is-invalid"
																			: ""
																			}`}
																		data={DELETEACCOUNT}
																		defaultValue={value}
																		onChange={onChange}
																		cleanable={false}
																		searchable={false}
																		placement={"topEnd"}
																	/>
																);
															}}
														/>
														{errors.reason && (
															<p className="text-danger">
																{errors.reason.message}
															</p>
														)}
													</div>
													{selopt === "Other" ? (
														<div className="input-group w-100">
															<label>
																Please specify any other reason for
																deleting/deactivating your account
																<span className="mandatoryField">*</span>
															</label>

															<div class="form-group">
																<textarea
																	className="form-control"
																	{...register("writereason", {
																		required: {
																			value: true,
																			message: "Please provide a reason for requesting account deletion/deactivation",
																		},
																	})}
																	placeholder=" We are sorry to see you go! Please provide a reason for
                                   requesting account deletion/deactivation."
																></textarea>
																<div className="invalid-feedback">
																	{errors?.writereason?.message}
																</div>
															</div>
														</div>
													) : (
														""
													)}
												</div>
												<div className="sharecertificate flexone justify-content-end  m-0 pt-3">
													<button className="btn-blue btn-login d-block  cancelbutton w-auto m-0 ml-auto">
														<i className="fa-solid fa-xmark mr-2"></i>Cancel
													</button>

													<button
														type="Submit"
														className="btn-blue btn-login d-block w-auto"
														disabled={isSubmitDisable}
													>
														<i className="fa-solid fa-paper-plane mr-2"></i>{" "}
														Submit
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>

								{/* <SubscriberForm locationState={locationState} /> */}
							</div>
						</section>
					</div>
					{
						isSubmit && (<DeleteUserVerificationPopup close={close} data={data} />)
					}
				</div>
			)
			}
		</div >
	);
};

export default Deactivateaccout;

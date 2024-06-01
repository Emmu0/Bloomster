/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home";

import { useForm, useHistory, useParams } from "../../utils/Packages";
import * as image from "../../resources/images";
import { Profile } from "./";
import { createLogin, getUserByUsername } from "../../redux/actions/APIs";
import { breadcrumb, resetEmailResponse } from "../../redux/actions";
import { PATHS } from "../../utils";
import {
	SPECIAL_CHAR,
	GET_LOWER_CASE,
	GET_UPPER_CASE,
	GET_NUMBER,
	EMAIL_REGEX,
} from "../../utils/Regex";
import { MSG } from "../../utils/Messages";

const CreateLogin = () => {
	let history = useHistory();
	const params = useParams();

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState,
		getValues,
		setError,
		clearErrors,
	} = useForm({ mode: "onTouched" });
	const { errors } = formState;

	const { getSelectedUser, response, getdimension, validateUser, loading } =
		useSelector((state) => state.collections);

	const [eightState, getEightState] = useState(false);
	const [specialCharState, getSpecialCharState] = useState(false);
	const [upperCaseComplexity, getUpperCaseComplexity] = useState(false);
	const [lowerCaseComplexity, getLowerCaseComplexity] = useState(false);
	const [numberComplexity, getNumberComplexity] = useState(false);

	const [type, setType] = useState("password");

	const [pass, confirmPasswordShow] = useState("");
	const [passwordComplexity, setPasswordComplexity] = useState(false);
	const [enrollLoader, setEnrollLoader] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		reset();
	}, [getSelectedUser?.id]);

	useEffect(() => {
		dispatch(resetEmailResponse());
	}, []);

	const _onSubmit = (formData) => {
		if (passwordComplexity) {
			setError("newPassword", {
				type: "custom",
				message: MSG.STRNGPWD,
			});
			return false;
		}
		if (validateUser.message) {
			return false;
		}

		setEnrollLoader(true);

		let data = {
			email: formData.userName,
			password: formData.newPassword,
		};

		dispatch(
			createLogin(data, getSelectedUser?.id, getSelectedUser?.firstName)
		);
		getEightState(false);
		getSpecialCharState(false);
		getUpperCaseComplexity(false);
		getLowerCaseComplexity(false);
		getNumberComplexity(false);
		reset();
	};

	const toggleShow = () => {
		setType(type === "text" ? "password" : "text");
	};

	const checkPassword = () => {
		confirmPasswordShow("newPassword");
	};

	const typePassword = (e) => {
		setPasswordComplexity(false);

		let item = e.target.value;

		if (item.length == 0) {
			setError("newPassword", {
				type: "custom",
				message: MSG.NEWPASSREQ,
			});
		} else if (item.length >= 8) {
			getEightState(true);
			clearErrors("newPassword");
			setPasswordComplexity(false);
		} else if (item.length < 8) {
			setError("newPassword", {
				type: "custom",
				message: MSG.STRNGPWD,
			});
			getEightState(false);
			setPasswordComplexity(true);
		}

		if (SPECIAL_CHAR.test(item)) {
			getSpecialCharState(true);
		} else {
			setPasswordComplexity(true);
			getSpecialCharState(false);
		}

		if (GET_LOWER_CASE.test(item)) {
			getLowerCaseComplexity(true);
		} else {
			setPasswordComplexity(true);
			getLowerCaseComplexity(false);
		}

		if (GET_UPPER_CASE.test(item)) {
			getUpperCaseComplexity(true);
		} else {
			setPasswordComplexity(true);
			getUpperCaseComplexity(false);
		}
		if (GET_NUMBER.test(item)) {
			getNumberComplexity(true);
		} else {
			setPasswordComplexity(true);
			getNumberComplexity(false);
		}

		if (getValues("confirmPassword") === "") {
		} else if (item !== getValues("confirmPassword")) {
			setError("confirmPassword", {
				type: "custom",
				message: MSG.PWDNOTMTCH,
			});
		} else if (
			getValues("confirmPassword") !== "" &&
			item === getValues("confirmPassword")
		) {
			clearErrors("confirmPassword");
		}
	};

	useEffect(() => {
		if (response?.success) {
			setEnrollLoader(false);
			setTimeout(() => {
				history.push(PATHS.BASICDETAILS_STR + params.id);
			}, 5000);
		}
	}, [response]);

	const resetForm = () => {
		getEightState(false);
		getSpecialCharState(false);
		getUpperCaseComplexity(false);
		getLowerCaseComplexity(false);
		getNumberComplexity(false);
		reset();
		dispatch(resetEmailResponse());
	};
	useEffect(() => {
		dispatch(breadcrumb({ title: "Create Login", icon: image.login }));
	}, [params.id]);

	const isValidEmail = (email) => {
		if (EMAIL_REGEX.test(email)) {
			return true;
		}
		return false;
	};
	const handleEmail = (e) => {
		let emailAddress = e.target.value;
		if (emailAddress) {
			let formData = {
				email: emailAddress,
			};
			if (isValidEmail(emailAddress)) {
				dispatch(getUserByUsername(formData));
			}
		} else {
			dispatch(getUserByUsername());
		}
	};

	return (
		<Home>
			<div className='LeftbarPannel p-0' id='create_login'>
				<div className='PannelContent basicdetailsform  px-5'>
					<div className='wrapper mx-auto'>
						<div className='Accountrelated'>
							<form
								className='bg-white content'
								onSubmit={handleSubmit(_onSubmit)}>
								<div className='input-group'>
									<label>
										Email/Username
										<span className='mandatoryField'>*</span>
									</label>
									<div>
										<input
											type='text'
											className={`form-control ${errors.userName || validateUser?.message
												? "is-invalid"
												: ""
												}`}
											{...register("userName", {
												onChange: (e) => handleEmail(e),
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
												}
											})}
										/>

										<p className='text-danger m-0'>
											{" "}
											{errors?.userName?.message}
										</p>
										{!errors?.userName && (
											<p className='text-danger m-0'>
												{" "}
												{validateUser?.message}
											</p>
										)}
									</div>
								</div>

								<div className='input-group' key='password'>
									<label htmlFor='newPassword'>
										Password<span className='mandatoryField'>*</span>
									</label>
									<div className=' mb15 ' key={type}>
										<div className=''>
											<span
												htmlFor='password'
												className='form-label PasswordeyeIcon'
												onClick={() => toggleShow()}>
												<i
													className={`fa-solid ${type === "password" ? "fa-eye-slash" : "fa-eye"
														} `}></i>
											</span>
											<input
												className={`form-control ${errors.newPassword ? "is-invalid" : ""
													}`}
												{...register("newPassword", {
													required: {
														value: true,
														message: MSG.PASSREQ,
													},
												})}
												type={type}
												id={"getPassword"}
												onChange={typePassword}
											/>
										</div>
									</div>
									{errors.newPassword && (
										<p className='text-danger'>{errors.newPassword?.message}</p>
									)}
									{/* <div className='invalid-feedback'>
                    {errors?.newPassword?.message} */}
									{/* {passwordComplexity && MSG.STRNGPWD} */}
									{/* </div> */}
								</div>
								<div className='input-group' key='confirmPassword'>
									<label htmlFor='confirmpassword'>
										Confirm Password<span className='mandatoryField'>*</span>
									</label>
									<div className=' mb15'>
										<div className=''>
											<span
												htmlFor='confirmPassword'
												className='form-label PasswordeyeIcon'
												key={Math.random()}>
												{getValues("confirmPassword") !== "" &&
													getValues("confirmPassword") !== undefined &&
													(getValues("newPassword") ===
														getValues("confirmPassword") ? (
														<span>
															<i className='fa-solid fa-check text-success' />
														</span>
													) : (
														<span>
															<i className='fa-solid fa-xmark text-danger' />
														</span>
													))}
											</span>
											<input
												className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
													}`}
												{...register("confirmPassword", {
													onBlur: (e) => {
														checkPassword();
													},
													required: {
														value: true,
														message: MSG.CPASSREQ,
													},
													validate: (val) => {
														if (watch("newPassword") != val) {
															return MSG.PWDNOTMTCH;
														}
													},
												})}
												type={`password`}
												id={"confirmPassword"}
											/>
										</div>
									</div>
									{errors.confirmPassword && (
										<p className='text-danger'>
											{errors.confirmPassword?.message}
										</p>
									)}
								</div>
								<div className='input-group full-width basic_details_form changepasswordbutns'>
									<div className='form-group BDsubmitbutton d-flex'>
										{!enrollLoader && (
											<button
												type='button'
												onClick={() => resetForm()}
												className='btn-blue btn-login d-block mb-5 cancelbutton ml-auto'>
												<i className='fa-solid fa-xmark'></i> Cancel
											</button>
										)}

										{enrollLoader ? (
											<button
												className='btn-blue btn-login d-block mb-5 changepasswordbtn'
												key={Math.random()}
												disabled>
												<span className='RounAnimation mr-1'></span> Please
												Wait...
											</button>
										) : (
											<button
												type='submit'
												className='btn-blue btn-login d-block mb-5 changepasswordbtn'>
												<i className='fa-solid fa-right-to-bracket'></i> Create
												Login
											</button>
										)}
									</div>
								</div>
							</form>
							<div className='PasswordIntruction'>
								<h4>Password must use:</h4>
								<ul className='list-group'>
									<li
										className={`list-group-item bg-light d-flex ${eightState && "text-success"
											}`}>
										{eightState ? (
											<span className='check'></span>
										) : (
											<div>
												<i className='fa fa-minus-circle circleIcon' />
											</div>
										)}{" "}
										{MSG.EIGHTCHAR}
									</li>

									<li
										className={`list-group-item bg-light d-flex ${upperCaseComplexity && lowerCaseComplexity
											? "text-success"
											: ""
											}`}>
										{upperCaseComplexity && lowerCaseComplexity ? (
											<span className='check'></span>
										) : (
											<div>
												<i className='fa fa-minus-circle circleIcon' />
											</div>
										)}
										{MSG.UPPRLWRCHAR}
									</li>
									<li
										className={`list-group-item bg-light d-flex ${numberComplexity ? "text-success" : ""
											}`}>
										{numberComplexity ? (
											<span className='check'></span>
										) : (
											<div>
												<i className='fa fa-minus-circle circleIcon' />
											</div>
										)}
										{MSG.ONENUM}
									</li>

									<li
										className={`list-group-item bg-light d-flex ${specialCharState ? "text-success" : ""
											}`}>
										{specialCharState ? (
											<span className='check'></span>
										) : (
											<div>
												<i className='fa fa-minus-circle circleIcon' />
											</div>
										)}
										{MSG.SPCLCHAR}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Profile />
		</Home>
	);
};
export default CreateLogin;

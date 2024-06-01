import React, { useEffect, useState } from "react";
import { useForm, yupResolver, Yup, Modal, Button } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import {
	getAllUsersDetail,
	getDimensions,
	settingVerify,
	userSignin,
} from "../../redux/actions/APIs";
import {
	isLoading,
	parentLoginAction,
	childLogin,
	resetLoginResponseFailure,
	showModal,
	resetResponse,
	enrollmentPopup,
	parentToolsModal,
	showModalObj,
	dimStore,
	setCourseModal,
	courseSectionModal,
} from "../../redux/actions";
import { ModalFooter, NavLink } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { MSG } from "../../utils/Messages";
const ParentSignIn = () => {
	const formSchema = Yup.object().shape({
		password: Yup.string().required(MSG.PASSREQ),
	});

	const formOptions = { resolver: yupResolver(formSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;
	const {
		loggedInUser,
		loginResponseError,
		getdimension,
		signinresponse,
		alluserdetails,
		validateUser,
		parentLogin,
		setting_responseOK,
		isAuth,
		modalObj,
		modalData,
		enrollmentObj
	} = useSelector((state) => state.collections);
	const dispatch = useDispatch();
	const [type, setType] = useState("password");
	const history = useHistory();
	const [enrollLoader, setEnrollLoader] = useState(false);
	const [isToastShown, setIsToastShown] = useState(false);
	const [msgResponse, setMsgResponse] = useState();
	const [massageResponse, setMassageResponse] = useState();
	const [isAutofilled, setIsAutofilled] = useState(false);

	useEffect(() => {
		if (
			loginResponseError ===
			"You have entered an incorrect Email/Username or Password"
		) {
			setMsgResponse("You have entered an incorrect password");
		} else {
			setMassageResponse(loginResponseError);
		}
	}, [loginResponseError]);

	const _onSubmit = (values) => {
		dispatch(parentToolsModal());
		if (!alluserdetails && isAuth) {
			dispatch(getAllUsersDetail());
		}
		if (loginResponseError) {
			dispatch(resetLoginResponseFailure());
		}
		setEnrollLoader(true);
		values.username = loggedInUser?.parent?.username;
		dispatch(isLoading(true));
		dispatch(userSignin(values, "personaChange"));
		dispatch(showModal({ type: "DimRedirect" }));
	};

	useEffect(() => {
		setEnrollLoader(false);
	}, [validateUser, setting_responseOK]);

	useEffect(() => {
		if (loginResponseError) {
			setEnrollLoader(false);
		}
	}, [loginResponseError]);

	useEffect(() => {
		if (!getdimension) {
			dispatch(getDimensions());
		}
	}, [signinresponse, getdimension]);

	const handleChange = (e) => {
		setIsAutofilled("passworde", e.target.value);
		setMsgResponse();
		dispatch(resetLoginResponseFailure());
	};
	const handlePasswordRemove = () => {
		setIsAutofilled("password", "");

		dispatch(resetLoginResponseFailure());
	};

	useEffect(() => {
		dispatch(resetLoginResponseFailure());
	}, []);

	useEffect(() => {
		if (signinresponse && alluserdetails?.records[0]?.role?.name !== "PROVIDER") {
			localStorage.setItem(
				"access_token",
				signinresponse?.jwt + "##" + signinresponse?.id
			);
			setEnrollLoader(false);
			dispatch(parentLoginAction(false));

			dispatch(childLogin(true)).then(() => {
				setTimeout(() => {
					dispatch(getAllUsersDetail()).then(() => {
						let previousState = localStorage.getItem("previousState");
						let userId = alluserdetails?.records[0]?.children[0]?.id;
						if (previousState) {
							previousState = JSON.parse(previousState);
							let uistate = previousState?.uistate;
							for (let index = 0; index < uistate?.length; index++) {
								if (uistate[index]?.userid === userId) {
									if (uistate[index]?.detail?.scene) {
										history.push(
											new URL(uistate[index]?.detail?.scene)?.pathname
										);
									} else {
										history.push(
											PATHS.DIMENSION_STR +
											uistate[index]?.detail?.dimId +
											"/" +
											userId
										);
									}
									break;
								}
							}
						} else {
							history.push(
								PATHS.DIMENSION_STR +
								getdimension?.records[3]?.id +
								"/" +
								userId
							);
						}
						dispatch(childLogin(false));
						dispatch(showModal({ type: "DimRedirect" }));
						//dispatch(showModal({ type: "Holisticgrowth" }));
					});
				}, 1000);
			});
		}
	});

	const _verifyOnSubmit = (data) => {
		dispatch(parentToolsModal());
		setIsToastShown(false);
		if (modalObj?.isLearnMore) {
			dispatch(enrollmentPopup());
		}
		if (data) {
			setEnrollLoader(true);
			dispatch(settingVerify(loggedInUser?.id, data));
		}
	};

	const showHide = () => {
		setType((prevType) => (prevType === "password" ? "text" : "password"));
	};
	const close = () => {
		dispatch(courseSectionModal());
		dispatch(resetResponse());
		dispatch(parentLoginAction(false));
		dispatch(enrollmentPopup());
		dispatch(showModalObj());
		dispatch(dimStore());
	};

	const courseDetail = () => {
		dispatch(enrollmentPopup());
		dispatch(setCourseModal(enrollmentObj));
		dispatch(parentLoginAction(false));

	};
	return (
		<div className="BDsubmitbutton Addchieldbtn  addEnrichbtn pr-10">
			<Modal show={true} className="AddChildPopup parent_signin">
				<Modal.Header>
					<Modal.Title>
						<img src={image.ParentsLogin} className="mr-2" />
						{parentLogin == "verifyUser" ? "Password Required" : "Parent Login"}
					</Modal.Title>
					<Button data-dismiss="modal" onClick={() => close()}>
						<i className="fa-regular fa-xmark"></i>
					</Button>
				</Modal.Header>

				<div className="wrapper">
					<div id="signin">
						<div className="wrapper mx-auto">
							<form
								name="freesignin"
								className="bg-white p content"
								onSubmit={handleSubmit(
									parentLogin == "verifyUser" ? _verifyOnSubmit : _onSubmit
								)}
							>
								<Modal.Body>
									{massageResponse && (
										<p className="text-danger">{massageResponse}</p>
									)}
									{modalObj?.isCourse && (
										<div className="input-group">
											<span className="parentloginst">
												Password is required to{" "}
												{modalObj?.isSection ? "view the course" : "enroll"} as
												some material in this course can be considered
												sensitive. Parental discretion is advised, please refer
												to the {modalObj?.isSection ? "course description" : (<NavLink onClick={() => courseDetail()}> course description </NavLink>)} for more information.
											</span>
										</div>
									)}
									{modalObj?.isPathway && (
										<div className="input-group">
											<span className="parentloginst">
												Password is required to enroll as some material in this
												pathway can be considered sensitive. Parental discretion
												is advised, please refer to the individual course
												descriptions for more information.
											</span>
										</div>
									)}
									<div className="input-group">
										<label className="m-0">
											Email/Username
											<span className="mandatoryField">*</span>
										</label>
										<div className="form-group">
											<input
												type="text"
												disabled
												className="form-control"
												value={
													parentLogin == "verifyUser"
														? loggedInUser?.username
														: loggedInUser?.parent?.username
												}
											/>
										</div>
									</div>
									<div className="input-group position-relative">
										<label>
											Password <span className="mandatoryField">*</span>
										</label>

										<div className="form-group">
											<input
												className={`form-control ${errors.password ? "is-invalid" : ""
													}`}
												{...register("password", {
													onChange: (e) => handleChange(e),
												})}
												type={type}
												autoComplete={isAutofilled ? "off" : "password"}
												onBlur={() => handlePasswordRemove()}
											/>

											<div className="invalid-feedback">
												{errors.password?.message}
												{!setting_responseOK?.success &&
													setting_responseOK?.message}
												{msgResponse}
											</div>
											<div onClick={() => showHide()}>
												{type === "password" ? (
													<span className="PasswordeyeIcon">
														<i className="fa-solid fa-eye-slash"></i>
													</span>
												) : (
													<p>
														<span className="PasswordeyeIcon">
															<i className="fa-solid fa-eye"></i>
														</span>
													</p>
												)}
											</div>
										</div>
									</div>
								</Modal.Body>
								<ModalFooter>
									<div className="form-group BDsubmitbutton d-flex justify-content-end m-0">
										<div className="buttonDistribotion">
											{enrollLoader ? (
												<button
													className="btn-blue btn-login d-block mb-5 "
													key={Math.random()}
													disabled
												>
													<span className="RounAnimation mr-1"></span> Please
													Wait...
												</button>
											) : (
												<>
													<button
														type="button"
														onClick={() => close()}
														className="btn-blue btn-login d-block mb-5  ml-auto  cancelbutton"
													>
														<i className="fa-solid fa-xmark mr-2"></i>
														<span> Cancel </span>
													</button>
													<button
														type="submit"
														className="btn-blue btn-login d-block mb-5"
													>
														<i className="fa-solid fa-paper-plane mr-2"></i>
														<span>
															{parentLogin == "verifyUser"
																? "Submit"
																: "Sign In"}
														</span>
													</button>
												</>
											)}
										</div>
									</div>
								</ModalFooter>
							</form>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ParentSignIn;

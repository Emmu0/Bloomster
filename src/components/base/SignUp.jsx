/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
	EMAIL_REGEX,
	SPECIAL_CHAR,
	GET_LOWER_CASE,
	GET_UPPER_CASE,
	GET_NUMBER,
	NAME_REGEX,
} from "../../utils/Regex";
import {
	useForm,
	Controller,
	moment,
	SelectPicker,
	DatePicker,
} from "../../utils/Packages";
import { PATHS } from "../../utils";

import {
	userSignup,
	userSelfSignup,
	getGradeLevel,
	getCountries,
	getState,
	getUserByUsername,
	getVerifyToken,
	userSignupForInviteParent,
} from "../../redux/actions/APIs";
import * as image from "../../resources/images";
import {
	showModal,
	resetEmailResponse,
	resetPilotuser,
	getChildName,
} from "../../redux/actions";

import "rsuite/dist/rsuite.css";
import { SelectPickerVal, onBlurDate } from "../../utils/helper";
import { MSG, SITENAME, SITEURL } from "../../utils/Messages";
import { Select } from "antd";

import SecHeader from "./SecHeader";

const SignUp = () => {
	const { Option } = Select;
	let history = useHistory();
	const {
		gradelevel,
		response,
		getcountries,
		getstate,
		validateUser,
		pilotResponse,
		verifyPilotData,
		verifyErr,
		signupresponse,
	} = useSelector((state) => state.collections);

	const [userFormState, setUserFormState] = useState("parent");
	const [type, setType] = useState("password");
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);

	const [countryid, setCountryid] = useState("");
	const [countryName, setCountryName] = useState("");
	const [pass, confirmPasswordShow] = useState("");
	const [passwordComplexity, setPasswordComplexity] = useState(false);
	const [eightState, getEightState] = useState(false);
	const [specialCharState, getSpecialCharState] = useState(false);
	const [upperCaseComplexity, getUpperCaseComplexity] = useState(false);
	const [lowerCaseComplexity, getLowerCaseComplexity] = useState(false);
	const [numberComplexity, getNumberComplexity] = useState(false);
	const [isAutofilled, setIsAutofilled] = useState();
	const [enrollLoader, setEnrollLoader] = useState(false);
	const [agree, setAgree] = useState(false);
	const [pilotToken, setPilotToken] = useState();

	const [stateid, setStateid] = useState("");

	const [dobState, setDOBState] = useState(false);

	const [errorMsg, setErrorMsg] = useState(false);
	const [msg, setMsg] = useState("");
	const [msg1, setMsg1] = useState("");

	const [childDayDiv, setChildDayDiv] = useState("");
	const [childMonthDiv, setChildMonthDiv] = useState("");
	const [childYearDiv, setChildYearDiv] = useState("");

	const [parentDayDiv, setParentDayDiv] = useState("");
	const [parentMonthDiv, setParentMonthDiv] = useState("");
	const [parentYearDiv, setParentYearDiv] = useState("");
	const [selectState, setSelectState] = useState();
	const [hideLearnerDetail, setHideLearnerDetail] = useState(false);
	//	const [userDate, setUserDate] = useState(new Date(moment().subtract(2, "years")));
	const [userDate, setUserDate] = useState();
	const stateId = stateid;

	const countryId = countryid;

	const {
		register,
		control,
		handleSubmit,
		watch,
		getValues,
		setValue,
		reset,
		setError,
		clearErrors,
		unregister,
		formState: { errors },
	} = useForm({ mode: "onTouched" });

	useEffect(() => {
		if (hideLearnerDetail) {
			console.log('hideLearnerDetail');
			unregister('childFirstName');
			unregister('childLastName');
			unregister('dateOfBirth');
		}
	}, [hideLearnerDetail]);

	useEffect(() => {
		if (!countryId) return;
		setValue("country", countryId);
		dispatch(getState(countryId));
	}, [countryId]);

	const handlePasswordFocus = () => {
		setIsPasswordFocused(true);
	};
	const handlePasswordBlur = () => {
		setIsPasswordFocused(false);
	};
	useEffect(() => {
		getcountries?.records &&
			getcountries?.records?.map((m, index) => {
				if (m.name === "United States of America") {
					setValue("country", countryId);
					setCountryName(m.name);
					setCountryid(m.id);
				}
			});
		defaultCountry();
	}, [getcountries?.records]);

	const defaultCountry = () => {
		getcountries?.records &&
			getcountries?.records?.length &&
			getcountries?.records?.map((m, index) => {
				if (m.name === "United States of America") {
					setValue("country", countryId);
					setCountryName(m.name);
					setCountryid(m.id);
				}
			});
	};

	const toggleShow = () => {
		setType(type === "text" ? "password" : "text");
	};

	const dispatch = useDispatch();

	const typePassword = (e) => {
		setPasswordComplexity(false);
		let item = e.target.value;

		if (item.length == 0) {
			setError("password", { type: "custom", message: MSG.PASSREQ });
		} else if (item.length >= 8) {
			getEightState(true);
			clearErrors(["password"]);
		} else {
			getEightState(false);
			setPasswordComplexity(true);
			setError("password", { type: "custom", message: MSG.EIGHTCHAR });
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

		if (getValues("confirmpassword") === "") {
		} else if (item !== getValues("confirmpassword")) {
			setError("confirmpassword", {
				type: "custom",
				message: MSG.PWDNOTMTCH,
			});
		} else if (
			getValues("confirmpassword") !== "" &&
			item === getValues("confirmpassword")
		) {
			clearErrors("confirmpassword");
		}
	};
	const formReset = () => {
		reset();
		defaultCountry();
		setValue("country", countryId);
		getEightState(false);
		getSpecialCharState(false);
		getUpperCaseComplexity(false);
		getLowerCaseComplexity(false);
		getNumberComplexity(false);
	};

	useEffect(() => {
		dispatch(getCountries());
		dispatch(getGradeLevel());
	}, []);

	useEffect(() => {
		if (!gradelevel) {
			dispatch(getGradeLevel());
		}
	}, [gradelevel]);

	useEffect(() => {
		setEnrollLoader(false);
	}, [validateUser]);

	useEffect(() => {
		if (response && response?.success) {
			if (response?.records[0] && response?.records[0]?.jwt) {
				setEnrollLoader(false);
				if (response?.records[0]?.childId) {
					history.push(
						PATHS.INIT_ASSESS.replace(":id", response?.records[0].childId)
					);
				} else if (response?.records[0]?.learnerId) {
					history.push(
						PATHS.INIT_ASSESS.replace(":id", response?.records[0]?.learnerId)
					);
				}
			}
		}
	}, [response]);

	useEffect(() => {
		if (!stateId) return;
		setValue("state", stateId);
	}, [stateId]);

	useEffect(() => {
		if (verifyPilotData?.records) {
			setValue("state", stateId);
			setStateid(verifyPilotData?.records[0].state);
		}
		defaultState();
	}, [verifyPilotData?.records[0]]);

	const defaultState = () => {
		if (verifyPilotData?.records) {
			setValue("state", stateId);
			setStateid(verifyPilotData?.records[0].state);
		}
	};

	useEffect(() => {
		if (verifyPilotData?.records) {
			let record = verifyPilotData?.records[0];
			setValue("parentFirstName", record?.firstName);
			setValue("parentLastName", record?.lastName);
			setValue("email", record?.username);
			setValue("state", record?.state);
			if (record?.accessCode == "PARENT") {
				setHideLearnerDetail(true);
			}
		}
	}, [verifyPilotData?.records, verifyPilotData?.records[0]?.state]);

	const handleResetValue = () => {
		reset();
		defaultCountry();
		setSelectState(Math.random());
		dispatch(resetEmailResponse());
	};

	useEffect(() => {
		if (window.location?.search.includes("?pilotverification=")) {
			let querySt = window.location?.search.split("?pilotverification=");
			setPilotToken(querySt[1]);
			dispatch(getVerifyToken(querySt[1]));
		}
	}, []);

	useEffect(() => {
		if (verifyErr?.message) {
			dispatch(showModal());
		}
	}, [verifyErr]);

	useEffect(() => {
		if (verifyErr?.request?.response) {
			dispatch(showModal());
			let verifyErr1 = JSON.parse(verifyErr?.request?.response);
			// toast.error(<Error error={verifyErr1?.message} />, {
			//   position: "top-center",
			//   autoClose: TOAST_TIMER,
			// });
			let querySt = window.location?.search.split("?pilotverification=");

			history.push(PATHS.VERIFYERROR);
		}
	}, [verifyErr]);

	console.log('error : ', errors);

	const _onParentSubmit = (values) => {
		if (validateUser?.message) {
			return false;
		}
		if (passwordComplexity) {
			setError("password", {
				type: "custom",
				message: MSG.STRNGPWD,
			});
			return false;
		}

		if (errorMsg === true) {
			if (msg1) {
				setError("parentDateOfBirth", { type: "custom", message: msg1 });
			}
			if (msg) {
				setError("dateOfBirth", { type: "custom", message: msg });
			}

			if (childDayDiv == "" || childMonthDiv == "" || childYearDiv == "") {
				setError("dateOfBirth", { type: "custom", message: "Invalid Date" });
			}

			// if (parentDayDiv == "" || parentMonthDiv == "" || parentYearDiv == "") {
			//   setError("parentDateOfBirth", {
			//     type: "custom",
			//     message: "Invalid Date",
			//   });
			// }

			setEnrollLoader(false);
			return false;
		} else if (!hideLearnerDetail && (childMonthDiv == "" || childMonthDiv == "" || childYearDiv == "")) {
			setError("dateOfBirth", { type: "custom", message: "Invalid Date" });

			setEnrollLoader(false);
			return false;
		}

		if (
			process.env.REACT_APP_PILOT_LAUNCH == "true" &&
			!pilotResponse &&
			validateUser?.message
		) {
			return false;
		}

		if (agree) {
			console.log("hideLearnerDetail 13: ", hideLearnerDetail);
			setEnrollLoader(true);
			let formData = [];
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				userEmail: values.email
			});

			if (hideLearnerDetail) {
				formData = {
					firstName: values.parentFirstName,
					lastName: values.parentLastName,
					country: countryName,
					state: values.state,
					email: values.email,
					password: values.password,
					userId: verifyPilotData?.records[0]?.user?.id,
					sendNewsletter: true
				};
				dispatch(userSignupForInviteParent(formData, pilotToken, hideLearnerDetail));
			} else {
				dispatch(getChildName(values.childFirstName));
				formData = {
					parentFirstName: values.parentFirstName,
					parentLastName: values.parentLastName,
					country: countryName,
					state: values.state,
					email: values.email,
					parentDateOfBirth: true,
					password: values.password,
					childFirstName: values.childFirstName,
					childLastName: values.childLastName,
					dateOfBirth: moment(values.dateOfBirth).format("YYYY-MM-DD"),
					levelId: "d683a3c0-91af-4069-b5d2-96c57e791380",
				};
				dispatch(userSignup(formData, pilotToken, hideLearnerDetail));
			}
		}

	};

	const _onSelfSubmit = (values) => {
		if (passwordComplexity) {
			return false;
		}
		setEnrollLoader(true);

		if (userFormState === "self") {
			let formData = {
				firstName: values.parentFirstName,
				lastName: values.parentLastName,
				email: values.email,
				password: values.password,
				dateOfBirth: moment(values.dateOfBirth).format("YYYY-MM-DD"),
				levelId: values.grade,
				country: countryName,
				state: values.state,
				userType: "LEARNER",
			};

			dispatch(userSelfSignup(formData));
		} else if (userFormState === "provider") {
			let formData = {
				firstName: values.parentFirstName,
				lastName: values.parentLastName,
				email: values.email,
				password: values.password,
				country: countryName,
				state: values.state,
				dateOfBirth: moment(values.parentDateOfBirth).format("YYYY-MM-DD"),
				userType: "PROVIDER",
			};
			dispatch(userSelfSignup(formData));
		}
	};

	const checkPassword = (e) => {
		const confirmedPassword = e.target.value;
		const password = getValues("password");
		confirmPasswordShow("password");
	};

	useEffect(() => {
		dispatch(resetEmailResponse());
	}, []);

	// dispatch(getUserByUsername())
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
			dispatch(getUserByUsername(formData));
		}

		if (emailAddress?.length === 0) {
			dispatch(resetEmailResponse());
		}
	};

	const _onBlurParent = (
		field,
		relation,
		setValue,
		setError,
		formType,
		formMsg1,
		formMsg2,
		clearErrors,
		formMsg3
	) => {
		const parentDivWithAddedChild = document.querySelector(
			"div.signupParentClass"
		);
		if (parentDivWithAddedChild) {
			const innerDiv = parentDivWithAddedChild.querySelector(
				"div.react-date-picker__wrapper"
			);
			const innerDivClass = innerDiv.querySelector(
				".react-date-picker__inputGroup"
			);
			let monthDiv = innerDivClass.querySelector(
				".react-date-picker__inputGroup__month"
			);

			let dayDiv = innerDivClass.querySelector(
				".react-date-picker__inputGroup__day"
			);
			let yearDiv = innerDivClass.querySelector(
				".react-date-picker__inputGroup__year"
			);

			let userSelectedDt =
				dayDiv.value + "." + monthDiv.value + "." + yearDiv.value;

			setParentDayDiv(dayDiv.value);
			setParentMonthDiv(monthDiv.value);
			setParentYearDiv(yearDiv.value);

			onBlurDate(
				field,
				relation,
				setValue,
				setError,
				userSelectedDt,
				formMsg1,
				formMsg2,
				yearDiv,
				clearErrors,
				formMsg3,
				setErrorMsg,
				setMsg,
				setMsg1
			);
		}
	};

	const _onBlur = (
		field,
		relation,
		setValue,
		setError,
		formType,
		formMsg1,
		formMsg2,
		clearErrors,
		formMsg3
	) => {
		const parentDivWithAddedChild = document.querySelector(
			"div.signupChildClass"
		);
		if (parentDivWithAddedChild) {
			const innerDiv = parentDivWithAddedChild.querySelector(
				"div.react-date-picker__wrapper"
			);
			const innerDivClass = innerDiv.querySelector(
				".react-date-picker__inputGroup"
			);
			let monthDiv = innerDivClass.querySelector(
				".react-date-picker__inputGroup__month"
			);

			let dayDiv = innerDivClass.querySelector(
				".react-date-picker__inputGroup__day"
			);
			let yearDiv = innerDivClass.querySelector(
				".react-date-picker__inputGroup__year"
			);

			let userSelectedDt =
				dayDiv.value + "." + monthDiv.value + "." + yearDiv.value;

			setChildDayDiv(dayDiv.value);
			setChildMonthDiv(monthDiv.value);
			setChildYearDiv(yearDiv.value);

			onBlurDate(
				field,
				relation,
				setValue,
				setError,
				userSelectedDt,
				formMsg1,
				formMsg2,
				yearDiv,
				clearErrors,
				formMsg3,
				setErrorMsg,
				setMsg,
				setMsg1
			);
		}
	};

	const handleChange = (e) => {
		setIsAutofilled("password", "");
		clearErrors("password");
		dispatch(resetLoginResponseFailure());
		var elements = document.getElementsByClassName("PasswordIntruction");

		for (var i = 0; i < elements.length; i++) {
			elements[i].style.display = "block";
		}
	};
	const popup = document.getElementById("getPassword");
	const outsideDiv = document.getElementById("PasswordInstruction");

	if (popup) {
		popup.addEventListener("focus", function (event) {
			outsideDiv.classList.add("d-block");
			outsideDiv.classList.remove("d-none");
		});

		popup.addEventListener("blur", function (event) {
			outsideDiv.classList.remove("d-block");
			outsideDiv.classList.add("d-none");
		});
	}

	const basicForm = (
		<>
			<div className="flex flex-wrap align-items-start Sign_Up_Form">
				<div className="form-title w-100">
					<h3 data-toggle="collapse" className="mt-0 pt-0">
						<i className="fa-light fa-square-info mr-2"></i>Parent Details{" "}
					</h3>
				</div>
				<div className="input-group">
					<label>
						First Name<span className="mandatoryField">*</span>
					</label>
					<div className="form-group">
						<input
							type="text"
							id={"parentName"}
							// placeholder="First Name"
							className={`form-control ${errors.parentFirstName ? "is-invalid" : ""
								}`}
							{...register("parentFirstName", {
								required: {
									value: true,
									message: MSG.FNAMEREQ,
								},
								pattern: {
									value: NAME_REGEX,
									message: "First name " + MSG.ALPHAREQ,
								},

								maxLength: {
									value: 50,
									message: MSG.MAX50CHREQ,
								},
							})}
						/>

						<div className="invalid-feedback">
							{errors?.parentFirstName?.message}
						</div>
					</div>
				</div>
				<div className="input-group">
					<label>
						Last Name<span className="mandatoryField">*</span>
					</label>
					<div className="form-group">
						<input
							type="text"
							// placeholder="Last Name"
							className={`form-control ${errors.parentLastName ? "is-invalid" : ""
								}`}
							{...register("parentLastName", {
								required: {
									value: true,
									message: MSG.LNAMEREQ,
								},
								pattern: {
									value: NAME_REGEX,
									message: "Last name " + MSG.ALPHAREQ,
								},
								maxLength: {
									value: 50,
									message: MSG.MAX50CHREQ,
								}
							})}
						/>
						<div className="invalid-feedback">
							{errors?.parentLastName?.message}
						</div>
					</div>
				</div>
				{/* <div className="input-group">
					<label>
						Country<span className="mandatoryField">*</span>
					</label>
					<div className="form-group">
						{countryId && (
							<Controller
								{...register("country", {
									required: true,
								})}
								control={control}
								render={({ field: { onChange, value } }) => {
									onChange = (event) => {
										setValue("country", event);
										clearErrors("country");
									};
									return (
										<Select
											style={{ width: 120 }}
											showSearch
											placeholder="Select a Country"
											optionFilterProp="children"
											onChange={onChange}
											defaultValue={countryName}
											filterOption={(input, option) => {
												return (
													option.props.children
														.toLowerCase()
														.indexOf(input.toLowerCase()) === 0
												);
											}}
										>
											{getcountries?.records &&
												SelectPickerVal(getcountries?.records, "country").map(
													(vl2, ky2) => (
														<Option key={ky2} value={vl2.label}>
															{vl2.label}
														</Option>
													)
												)}
										</Select>
									);
								}}
							/>
						)}
						<div className="invalid-feedback">{errors?.country?.message}</div>
					</div>
				</div> */}

				{/* <div className="input-group" key={stateId}>
					<label>
						State<span className="mandatoryField">*</span>
					</label>
					<div
						className="form-group"
						data-toggle="collapse"
						href="#state"
						key={selectState}
					>
						<Controller
							{...register("state", {
								required: true,
							})}
							control={control}
							render={({ field: { onChange, value } }) => {
								onChange = (event) => {
									setValue("state", event);
									clearErrors("state");
								};
								return (
									<Select
										style={{ width: 120 }}
										showSearch
										placeholder="Select a State"
										optionFilterProp="children"
										onChange={onChange}
										defaultValue={stateId}
										filterOption={(input, option) => {
											return (
												option.props.children
													.toLowerCase()
													.indexOf(input.toLowerCase()) === 0
											);
										}}
									>
										{getstate?.records &&
											SelectPickerVal(getstate?.records, "label").map(
												(vl, ky) => (
													<Option key={ky} value={vl.value}>
														{vl.label}
													</Option>
												)
											)}
									</Select>
								);
							}}
						/>
						{errors.state && <p className="invalid-feedback">{MSG.STATEREQ}</p>}
					</div>
				</div> */}
				<div className="input-group ">
					<label>
						Email/Username<span className="mandatoryField">*</span>
					</label>
					<div className="form-group">
						<input
							type="text"
							className={`form-control ${errors.email || validateUser?.message ? "is-invalid" : ""
								}`}
							{...register("email", {
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
								},
							})}
							disabled={verifyPilotData?.records[0].username ? true : false}

						// onBlur={(e)=>handleEmail(e)}
						/>
						<div className="invalid-feedback">{errors?.email?.message}</div>
						<div className="invalid-feedback">{validateUser?.message}</div>
					</div>
				</div>
				<div className="input-group signupType p-0">
					<div className="parentdob">
						<label className="Selcheckbox Qwrongopton">
							<span className="QQtitle">
								I confirm I am 18 years of age or older
								<span className="mandatoryField">*</span>
							</span>

							<input
								{...register("parentDateOfBirth", {
									required: {
										value: true,
										message: MSG.VRFYAGE,
									},
								})}
								type="checkbox"
								className="mr-2 termBox"
							/>
							<span className="checkmark"></span>
						</label>
					</div>
					{errors?.parentDateOfBirth && (
						<p className="invalid-feedback">
							{errors?.parentDateOfBirth?.message}
						</p>
					)}
				</div>
				{/* <div className="input-group  datespl calender">
          <label>
            Date of Birth<span className="mandatoryField">*</span>
            <span className="clenderIcon">
              {" "}
              <img src={image.Calendericon} alt="..." />
            </span>
          </label>
          <Controller
            {...register("parentDateOfBirth", {
              required: {
                value: true,
                message: MSG.DOBREQ,
              },
            })}
            control={control}
            render={({ field: { onChange, value } }) => {
              onChange = (event) => {
                setValue("parentDateOfBirth", event);
                clearErrors("parentDateOfBirth");
              };
              return (
                <DatePicker
                  className={`form-control signupParentClass p-0 w-100   ${
                    errors.parentDateOfBirth ? "is-invalid" : ""
                  }`}
                  clearIcon={null}
                  oneTap
                  onChange={onChange}
                  defaultActiveStartDate={
                    new Date(moment().subtract(18, "years"))
                  }
                  onBlur={(e) => {
                    _onBlurParent(
                      "parentDateOfBirth",
                      "parent",
                      setValue,
                      setError,
                      "parentSignup",
                      MSG.AGE02_,
                      MSG.AGE18_,
                      clearErrors
                    );
                  }}
                  value={value}
                  dayPlaceholder={"dd"}
                  monthPlaceholder={"mm"}
                  yearPlaceholder={"yyyy"}
                  format="MM/dd/yyyy"
                  dropdownMode="select"
                  maxDate={new Date()}
                />
              );
            }}
          />

          {errors?.parentDateOfBirth && (
            <p className="invalid-feedback">
              {errors?.parentDateOfBirth?.message}
            </p>
          )}
        </div> */}
				<div className="flex w-100 align-items-start position-relative">
					<div className="input-group position-relative w-48" key="password">
						<label>
							Password<span className="mandatoryField">*</span>
						</label>
						<div className="form-group" key={type}>
							<span
								htmlFor="password"
								className="form-label PasswordeyeIcon"
								onClick={() => toggleShow()}
							>
								<i
									className={`fa-solid ${type === "password" ? "fa-eye-slash" : "fa-eye"
										} `}
								></i>
							</span>
							<input
								className={`form-control ${errors.password ? "is-invalid" : ""
									}`}
								{...register("password", {
									onChange: (e) => handleChange(e),
									required: {
										value: true,
										message: MSG.PASSREQ,
									},
								})}
								type={type}
								id={"getPassword"}
								onChange={typePassword}
								autoComplete={isAutofilled ? "off" : "new-password"}
							// onFocus={() => handlePasswordFocus()}
							// onBlur={() => handlePasswordBlur()}
							/>
							<div className="invalid-feedback">
								{errors?.password?.message}
								{/* {passwordComplexity && MSG.STRNGPWD }            */}
							</div>
							{/* } */}

							{/* {passwordComplexity === true && <div className="invalid-feedback">                
                {passwordComplexity ? passwordComplexity : ""}
                {MSG.STRNGPWD }
              </div> } */}
						</div>
					</div>
					<div
						className="input-group position-relative w-48"
						key="confirmPassword"
					>
						<label>
							Confirm Password<span className="mandatoryField">*</span>
						</label>
						<div className="form-group">
							<span
								htmlFor="confirmPassword"
								className="form-label PasswordeyeIcon"
								key={Math.random()}
							>
								{getValues("confirmpassword") !== "" &&
									getValues("confirmpassword") !== undefined &&
									(getValues("password") === getValues("confirmpassword") ? (
										<i className="fa-solid fa-check text-success"></i>
									) : (
										<i className="fa-solid fa-xmark text-danger"></i>
									))}
							</span>

							<input
								className={`form-control ${errors.confirmpassword ? "is-invalid" : ""
									}`}
								// placeholder="Confirm Password"
								{...register("confirmpassword", {
									required: {
										value: true,
										message: MSG.CPASSREQ,
									},
									validate: (val) => {
										if (document.getElementById("getPassword")?.value != val) {
											return MSG.PWDNOTMTCH;
										}
									},
								})}
								type={`password`}
								id={"confirmPassword"}
							/>
							<div className="invalid-feedback">
								{errors?.confirmpassword?.message}
							</div>
						</div>
					</div>

					<div
						id="PasswordInstruction"
						className={`PasswordIntruction d-none w-48`}
					>
						<ul className="list-group">
							<li className={`list-group-item bg-light d-flex`}>
								{eightState ? (
									<span className="check"></span>
								) : (
									<div>
										<i className="fa fa-minus-circle circleIcon" />
									</div>
								)}{" "}
								{MSG.EIGHTCHAR}
							</li>

							<li className={`list-group-item bg-light d-flex`}>
								{upperCaseComplexity && lowerCaseComplexity ? (
									<span className="check"></span>
								) : (
									<div>
										<i className="fa fa-minus-circle circleIcon" />
									</div>
								)}
								{MSG.UPPRLWRCHAR}
							</li>
							<li className={`list-group-item bg-light d-flex`}>
								{numberComplexity ? (
									<span className="check"></span>
								) : (
									<div>
										<i className="fa fa-minus-circle circleIcon" />
									</div>
								)}
								{MSG.ONENUM}
							</li>

							<li className={`list-group-item bg-light d-flex`}>
								{specialCharState ? (
									<span className="check"></span>
								) : (
									<div>
										<i className="fa fa-minus-circle circleIcon" />
									</div>
								)}
								{MSG.SPCLCHAR}
							</li>
						</ul>
					</div>
					{console.log('userFormState === "parent" && !hideLearnerDetail : ', userFormState === "parent" && !hideLearnerDetail)}
				</div>
				{userFormState === "self" ? (
					<>
						<div className="input-group">
							<label>
								Grade<span className="mandatoryField">*</span>
							</label>
							<div className="form-group ">
								<Controller
									{...register("grade", {
										required: true,
									})}
									noRef={true}
									control={control}
									render={({ field: { onChange } }) => {
										onChange = (event) => {
											setValue("grade", event);
											clearErrors("grade");
										};

										return (
											<SelectPicker
												onChange={onChange}
												placement={"topStart"}
												className={`${errors.grade ? "is-invalid" : ""}`}
												data={SelectPickerVal(gradelevel?.records, "grade")}
												searchable={false}
												cleanable={false}
												defaultValue={null}
											/>
										);
									}}
								/>
								{errors.grade && (
									<p className="invalid-feedback">{MSG.GRADEREQ}</p>
								)}
							</div>
						</div>
					</>
				) : (userFormState !== "provider" && !hideLearnerDetail) ? (
					<div className={`flex flex-wrap w-100 align-items-start LeanerDtl ${hideLearnerDetail ? 'd-none' : ''}`}>
						<div className="form-title w-100">
							<h3 data-toggle="collapse" className="mt-0">
								<i className="fa-light fa-square-info mr-2"></i>Learner (Child)
								Details{" "}
							</h3>
						</div>

						<div className="input-group">
							<label>
								First Name<span className="mandatoryField">*</span>
							</label>
							<div className="form-group">
								<input
									type="text"
									className={`form-control ${errors.childFirstName ? "is-invalid" : ""
										}`}
									{...register("childFirstName", {
										required: {
											value: userFormState === "parent" ? true : false,
											message: MSG.FNAMEREQ,
										},
										pattern: {
											value: NAME_REGEX,
											message: "First name " + MSG.ALPHAREQ,
										},
										maxLength: {
											value: 50,
											message: MSG.MAX50CHREQ,
										},
									})}
								/>
								<div className="invalid-feedback">
									{errors?.childFirstName?.message}
								</div>
							</div>
						</div>
						<div className="input-group">
							<label>
								Last Name<span className="mandatoryField">*</span>
							</label>
							<div className="form-group">
								<input
									type="text"
									// placeholder="Last Name"
									className={`form-control ${errors.childLastName ? "is-invalid" : ""
										}`}
									{...register("childLastName", {
										required: {
											value: userFormState === "parent" ? true : false,
											message: MSG.LNAMEREQ,
										},
										pattern: {
											value: NAME_REGEX,
											message: "Last name " + MSG.ALPHAREQ,
										},
										maxLength: {
											value: 50,
											message: MSG.MAX50CHREQ,
										},
									})}
								/>
								<div className="invalid-feedback">
									{errors?.childLastName?.message}
								</div>
							</div>
						</div>
						<div className="input-group  datespl calender">
							<label>
								Date of Birth<span className="mandatoryField">*</span>
								<span className="clenderIcon">
									{" "}
									<img src={image.Calendericon} alt="..." />
								</span>
							</label>

							<Controller
								{...register("dateOfBirth", {
									required: {
										value: userFormState === "parent" ? true : false,
										message: MSG.DOBREQ,
									},
								})}
								control={control}
								render={({ field: { onChange, value } }) => {
									onChange = (event) => {
										setValue("dateOfBirth", event);
										clearErrors("dateOfBirth");
									};
									return (
										// <DatePicker
										// 	className={`form-control signupChildClass p-0 w-100  ${errors.dateOfBirth ? "is-invalid" : ""
										// 		}`}
										// 	clearIcon={null}
										// 	oneTap
										// 	onChange={onChange}
										// 	defaultActiveStartDate={
										// 		new Date(moment().subtract(2, "years"))
										// 	}
										// 	onBlur={(e) => {
										// 		_onBlur(
										// 			"dateOfBirth",
										// 			"child",
										// 			setValue,
										// 			setError,
										// 			"childSignup",
										// 			MSG.AGE02_,
										// 			MSG.AGE18_,
										// 			clearErrors,
										// 			MSG._MAXAGE
										// 		);
										// 	}}
										// 	value={value}
										// 	dayPlaceholder={"dd"}
										// 	monthPlaceholder={"mm"}
										// 	yearPlaceholder={"yyyy"}
										// 	format="MM/dd/yyyy"
										// 	placement={"topEnd"}
										// 	maxDate={new Date()}
										// />
										<DatePicker
											className={`form-control signupChildClass p-0 w-100  ${errors.dateOfBirth ? "is-invalid" : ""
												}`}
											clearIcon={null}
											oneTap
											// onChange={onChange}
											onChange={(date) => {
												console.log("date ", date, userDate);
												setUserDate(date)
											}}
											value={userDate}
											defaultActiveStartDate={
												new Date(moment().subtract(2, "years"))
											}
											onBlur={(e) => {
												_onBlur(
													"dateOfBirth",
													"child",
													setValue,
													setError,
													"childSignup",
													MSG.AGE02_,
													MSG.AGE18_,
													clearErrors,
													MSG._MAXAGE
												);
											}}
											// value={value}
											dayPlaceholder={"dd"}
											monthPlaceholder={"mm"}
											yearPlaceholder={"yyyy"}
											format="MM/dd/yyyy"
											placement={"topEnd"}
											maxDate={new Date(moment().subtract(2, "years"))}
										/>
									);
								}}
							/>
							{errors.dateOfBirth && (
								<p className="invalid-feedback">
									{errors?.dateOfBirth?.message}
								</p>
							)}
						</div>
						{/* <div className="input-group parentprGrade">
              <label>
                Grade<span className="mandatoryField">*</span>
              </label>
              <div className="form-group ">
                <Controller
                  {...register("grade", {
                    required: true,
                  })}
                  noRef={true}
                  control={control}
                  render={({ field: { onChange } }) => {
                    onChange = (event) => {
                      setValue("grade", event);
                      clearErrors("grade");
                    };

                    return (
                      <SelectPicker
                        // placeholder={"Select Grade/Level"}
                        onChange={onChange}
                        placement={"topStart"}
                        className={`gradelevel ${
                          errors.grade ? "is-invalid" : ""
                        }`}
                        data={SelectPickerVal(gradelevel?.records, "grade")}
                        searchable={false}
                        cleanable={false}
                        defaultValue={null}
                      />
                    );
                  }}
                />
                {errors.grade && (
                  <p className="invalid-feedback">{MSG.GRADEREQ}</p>
                )}
              </div>
            </div> */}
					</div>
				) : null}
				<div className="tacbox input-group signupType  w-100 p-0 mt-1">
					<div className="mt-3 parentdob">
						<label for="tnc" className="Selcheckbox Qwrongopton">
							<span className="QQtitle">
								{" "}
								I agree to the terms and conditions as set out by the{" "}
								<a
									href={`https://bloomster.com/termsandprivacypolicy`}
									target="_blank"
								>
									Terms of Use{" "}
								</a>
								and{" "}
								<a
									href={`https://bloomster.com/termsandprivacypolicy`}
									className="pr-0"
									target="_blank"
								>
									Privacy Policy</a><span className="mandatoryField">*</span>
							</span>
							<input
								id="tnc"
								type="checkbox"
								className="mr-2 termBox"
								onClick={() => setAgree(!agree)}
							/>
							<span className="checkmark"></span>
						</label>
					</div>
					<div className="mt-1">
						<label className="text-dark d-block" for="newsletter">
							By signing up you are agreeing to receive

							<a href="https://www.bloomster.com" target="_blank">
								{" "}
								{SITEURL.urlName}
							</a>
							{""} newsletter and promotional emails. You can unsubscribe later.
						</label>
					</div>
				</div>
			</div>
		</>
	);

	return (
		<React.Fragment>
			{getcountries?.records && (
				<>
					<div className="hubSpotthemeSec">
						<SecHeader />

						<div
							className="fade SignupPopup AddChildPopup  show d-block"
							role="dialog"
							id="signup"
						>
							<div className="modal-dialog mb-0">
								<div className="modal-content">

									<div className="modal-body pt-0 flex signupBody_popup">
										<div className="SignupRegistration basicdetailsform w-60">
											<div class="signin_uptitle"><h2>Sign Up</h2></div>
											{/* <div className="signin_uptitle">
                        <h2 className="flex flex-wrap">
                          {" "}
                          Become a Bloomster today!
                          <span>Try Free for 30 Days!</span>
                        </h2>
                      </div> */}

											{/* <div className="modal-header">
                      <div className="modal-title flex h4"> */}
											{/* <i className="fa-solid fa-id-card mr-2 fontawsomeicon"></i> */}
											{/* <img src={image.Signupicon} alt="" className="mr-2" />
                          Sign Up - 1 Month Free 
                        </div>*/}
											{/* <button
                      className='btn btn-primary'
                      data-dismiss='modal'
                      onClick={() => {
                        dispatch(resetPilotuser());
                        dispatch(showModal());
                        history.push(PATHS.LANDINGPAGE);
                      }}>
                      <i className='fa-regular fa-xmark m-0'></i>
                    </button> 
                      </div>
                      */}
											<div id="signin">
												<div className="signupType">
													{/* <label className='Selcheckbox'>
                    Parent/Guardian
                    <input
                      type='radio'
                      id='Parent'
                      name='isParent'
                      defaultChecked={userFormState === "parent" ? true : false}
                      onClick={() => setTabhandle("parent")}></input>
                    <span className='checkmark'></span>
                  </label> */}
													{/* <label className="Selcheckbox">
                        Learner
                        <input
                          type="radio"
                          id="Self"
                          name="isParent"
                          defaultChecked={
                            userFormState === "self" ? true : false
                          }
                          onClick={() => setTabhandle("self")}
                        ></input>
                        <span className="checkmark"></span>
                      </label> */}
													{/* <label className='Selcheckbox'>
                    Provider
                    <input
                      type='radio'
                      id='Provider'
                      name='isParent'
                      defaultChecked={
                        userFormState === "provider" ? true : false
                      }
                      onClick={() => setTabhandle("provider")}></input>
                    <span className='checkmark'></span>
                  </label> */}
												</div>

												{userFormState === "parent" ? (
													<div className="">
														<form
															name="usersignup"
															className="content"
															onSubmit={handleSubmit(_onParentSubmit)}
														>
															{basicForm}

															{/* {childForm} */}
															<div className="">
																<div className="buttonDistribotion fsignupBtn m-0 bottom-dwn">
																	{!enrollLoader && (
																		<button
																			type="reset"
																			className="btn-blue btn-login d-block mb-5 m-0 cancelbutton ml-auto w-auto"
																			onClick={() => handleResetValue()}
																		>
																			{/* <i className="fa-solid fa-xmark"></i>{" "} */}
																			Reset
																		</button>
																	)}

																	{enrollLoader ? (
																		<button
																			className="btn-blue btn-login d-block  w-auto "
																			key={Math.random()}
																			disabled
																		>
																			<span className="RounAnimation mr-1"></span>{" "}
																			Please Wait...
																		</button>
																	) : (
																		<button
																			disabled={!agree && true}
																			key={Math.random()}
																			type="submit"
																			className="btn-blue btn-login d-block w-auto mb-5 back_button"
																		>
																			{/* <i className="fa-solid fa-paper-plane"></i>{" "} */}
																			Sign Up
																		</button>
																	)}

																	{/* <bu className="btn-blue btn-login d-block">
                            <span className="RounAnimation"></span> Please
                            Wait...
                          </bu
                          tton> */}
																</div>
															</div>
														</form>
													</div>
												) : (
													<div className="">
														<form
															name="selfsignup"
															className="bg-white  content"
															onSubmit={handleSubmit(_onSelfSubmit)}
														>
															{basicForm}
															<div className=" w-100">
																<div className=" fsignupBtn m-0">
																	{enrollLoader ? (
																		<button
																			className="btn-blue btn-login d-block  w-auto"
																			key={Math.random()}
																			disabled
																		>
																			<span className="RounAnimation mr-1"></span>{" "}
																			Please Wait...
																		</button>
																	) : (
																		<button
																			disabled={agree && true}
																			type="submit"
																			className="btn-blue btn-login d-block w-auto"
																		>
																			{/* <i className="fa-solid fa-paper-plane"></i>{" "} */}
																			Sign
																			{agree}
																			up
																		</button>
																	)}
																</div>
															</div>
														</form>
													</div>
												)}
											</div>
										</div>
										{/* <div className="rightside_Signup w-40">
											<div className="signin_uptitle">
												<h2 className="flex flex-wrap">
													{" "}
													Become a Bloomster today! <span className="ml-2">Try Free for 30 Days!</span>
												</h2>
											</div>
											<div className="bloomster_Heighlighter">
												<img src="https://bloomster.com/hubfs/images/Section3Image.png" alt="" />
											</div>
										</div> */}
									</div>
								</div>
							</div>
							<p className="text-center signinsignupline mb-3 ps-5">
								Already have an account?{" "}
								<NavLink to={PATHS.USERSIGNIN}> Sign In</NavLink> instead
							</p>
						</div>
						<div className="hubspotFooter">
							<div className="container-fluid footer-dnd-area2 footer__container content-wrapper">
								<div className="hubPrimaryFooter">
									<div className="flex align-items-start">
										<div className="logoFooter">
											<img src={image.vicky_logo_LP} />
											<div className="seocialiconlist">
												<ul>
													<li>
														<a
															href="https://www.facebook.com/bloomsterlearning"
															target="_blank"
														>
															<i className="fa-brands fa-facebook"></i>
														</a>
														<a
															href="https://www.instagram.com/bloomsterlearning"
															target="_blank"
														>
															<i className="fa-brands fa-square-instagram"></i>
														</a>
														{/* added by alfaiz on 19-04-2024 */}
														{/* <a
															href="https://tiktok.com/@bloomsterlearning"
															target="_blank"
														>
															<i className="fa-brands fa-tiktok"></i>
														</a> */}
														<a
															href="https://www.linkedin.com/company/bloomsterlearning"
															target="_blank"
														>
															<i className="fa-brands fa-linkedin"></i>{" "}
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="FooterAddInfo">
											<h3>
												<NavLink to={PATHS.USERSIGNUP}>
													{" "}
													Sign Up for Bloomster today!
												</NavLink>
											</h3>
											<p>
												411 S Melville Ave.,
												Tampa, Florida 33606
												USA
												<br />
												<a href="mailto:contact@bloomster.com">
													contact@bloomster.com
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className="hubsecondryFoorer flex">
									<div className="hubSeccopyright">
										<p>© 2024 Balanced Tech Inc. All Rights Reserved.</p>
									</div>

									<div className="ourpolicyandters">
										<ul>
											<li>
												<a
													href={`https://bloomster.com/termsandprivacypolicy`}
													target="_blank"
												>
													Terms of Use{" "}
												</a>{" "}
												|{" "}
											</li>{" "}
											<li>
												<a
													href={`https://bloomster.com/termsandprivacypolicy`}
													target="_blank"
												>
													Privacy Policy
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</React.Fragment>
	);
};

export default SignUp;

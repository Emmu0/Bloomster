/** @format */

import React, { useEffect, useState } from "react";
import {
	useForm,
	Controller,
	PhoneInput,
	DatePicker,
	moment,
	SelectPicker,
} from "../../utils/Packages";
import { formatPhoneNumber, onBlurDate } from "../../utils/helper";
import { GENDER, COUNTRYDATA } from "../../utils/DataObjects";
import Home from "../Home";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { updateUsersBasicDetail } from "../../redux/actions/APIs";
import AddressForm from "../controls/AddressForm";
import Profile from "./Profile";

import { useHistory } from "react-router-dom";

import UploadPhoto from "./UploadPhoto";
import { EMAIL_REGEX, MOBILE_REGEX, NAME_REGEX } from "../../utils/Regex";
import { breadcrumb, isLoading } from "../../redux/actions";
import { MSG } from "../../utils/Messages";

const BasicDetails = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const {
		register,
		setValue,
		handleSubmit,
		control,
		setError,
		clearErrors,
		getValues,
		formState: { errors },
	} = useForm({ mode: "onTouched" });

	const { getSelectedUser, response, loggedInUser, loading } = useSelector(
		(state) => state.collections
	);

	const [showForm, setShowForm] = useState(false);
	const [iconsUpdate, setIconUpdate] = useState(false);
	const [countryCode, setCountryCode] = useState("");
	const [dialingCode, setDialingCode] = useState(undefined);
	const [checkbox1, setcheckBox1] = useState(false);
	const [learnerCheckbox1, setLearnerChechbox1] = useState(false);

	const [add, setAdd] = useState("");
	const [addLear, setAddLear] = useState("");
	const [errorMsg, setErrorMsg] = useState(false);
	const [msg, setMsg] = useState("");

	const [dayDdiv, setDayDiv] = useState("");
	const [monthDdiv, setMonthDiv] = useState("");
	const [yearDdiv, setYearDiv] = useState("");
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		if (response) {
			setLoader(false);
		}
	}, [response]);

	useEffect(() => {
		if (history?.location?.state && history?.location?.state?.edit) {
			setShowForm(history?.location?.state?.edit);
		} else {
			setShowForm(false);
		}
	}, [history?.location?.state, getSelectedUser?.id]);

	useEffect(() => {
		dispatch(breadcrumb({ title: "Personal Details", icon: image.notebook }));
	}, [loggedInUser]);

	useEffect(() => {
		if (response?.success) {
			dialingCode;
			setShowForm(false);
		}
	}, [response]);

	const _onSubmit = (values) => {
		setLoader(true);
		if (!values.address1 || values.address1 == null || values.address1 == "") {
			setError("address1", { type: "custom", message: "address" });
			setLoader(false);
			return false;
		}

		if (getSelectedUser?.dateOfBirth) {
		} else if (dayDdiv == "" || monthDdiv == "" || yearDdiv == "") {
			setError("dateOfBirth", { type: "custom", message: "Invalid Date" });

			setLoader(false);
			return false;
		}

		if (errorMsg === true) {
			setError("dateOfBirth", { type: "custom", message: msg });
			setLoader(false);
			return false;
		}

		let formData = {
			firstName: values.firstName,
			middleName: values.middleName,
			lastName: values.lastName,
			dateOfBirth: moment(values.dateOfBirth).format("YYYY-MM-DD"),
			email: values.username,
			mobile: values.mobile && dialingCode + "##" + values.mobile,
			address1: values.address1,
			address2: values.address2,
			country: values.country,
			state: values.state,
			city: values.city,
			zip: values.zip,
			gender: values?.gender,
		};

		dispatch(updateUsersBasicDetail(formData, getSelectedUser.id));
	};

	const handleSetvalue = () => {
		if (getSelectedUser?.id) {
			const fields = [
				"firstName",
				"middleName",
				"lastName",
				"email",
				"state",
				"city",
				"country",
				"zip",
				"address1",
				"address2",
				"username",
				"gender",
				"mobile",
				"grade",
				"dateOfBirth"
			];

			fields.forEach((field) => {
				if (getSelectedUser[field] && getSelectedUser[field] != "null") {
					setValue(field, getSelectedUser[field]);
				} else {
					setValue(field, "");
				}
				if (getSelectedUser?.address2 === "null") {
					setValue("address2", "");
					setcheckBox1(false);
					setLearnerChechbox1(false);
				} else {
					setValue("address2", getSelectedUser?.address2);
				}

				if (getSelectedUser?.email) {
					setValue("username", getSelectedUser?.email);
				}

				if (getSelectedUser?.mobile) {
					let mob = getSelectedUser.mobile.split("##");

					COUNTRYDATA.map((vl, ky) => {
						if (vl?.dial_code === "+" + mob[0].replace("+", "")) {
							setDialingCode(vl?.dial_code);
							setCountryCode(vl?.code);
						} else if (mob[0] === "") {
							setDialingCode("+1");
							setCountryCode("us");
						}
					});

					setValue("mobile", mob[1]);
				} else {
					COUNTRYDATA.map((vl, ky) => {
						if (vl.name === getSelectedUser?.country) {
							setCountryCode(vl?.code);

							setDialingCode(vl?.dial_code);
						} else if (!getSelectedUser?.country) {
							setCountryCode("us");
							setDialingCode("+1");
						} else {
							setCountryCode("us");
							setDialingCode("+1");
						}
					});
					setValue("mobile", "");
				}
				if (getSelectedUser?.gender) {
					setValue("gender", getSelectedUser?.gender);
				}
				if (getSelectedUser?.dateOfBirth) {
					var dateOfBirth = new Date(getSelectedUser?.dateOfBirth);
					setValue("dateOfBirth", dateOfBirth);
				}
			});
		}
	};

	useEffect(() => {
		handleSetvalue();
		handleErrors();
		dispatch(breadcrumb({ title: "Personal Details", icon: image.notebook }));
	}, [getSelectedUser?.id]);

	const mobileNumberFormat = (e) => {
		const formattedPhoneNumber = formatPhoneNumber(e.target.value);
		setValue("mobile", formattedPhoneNumber);
	};

	const handleAddress = (e) => {
		setcheckBox1(e.target.checked);
		setAdd(e.target.checked);
	};

	useEffect(() => {
		if (
			loggedInUser?.role?.name === "PARENT" &&
			loggedInUser?.address1 === getSelectedUser?.address1
		) {
			setcheckBox1(true);
		} else {
			setcheckBox1(false);
		}
		if (
			loggedInUser?.role?.name === "LEARNER" &&
			loggedInUser?.parent?.address1 === getSelectedUser?.address1
		) {
			setLearnerChechbox1(true);
		} else {
			setLearnerChechbox1(false);
		}
	}, [loggedInUser, getSelectedUser, showForm]);

	const handleLearnerAddress = (e) => {
		setLearnerChechbox1(e.target.checked);
		setAddLear(e.target.checked);
	};

	const handleErrors = () => {
		clearErrors("firstName");
		clearErrors("middleName");
		clearErrors("lastName");
		clearErrors("dateOfBirth");
		clearErrors("email");
		clearErrors("state");
		clearErrors("city");
		clearErrors("country");
		clearErrors("zip");
		clearErrors("address1");
		clearErrors("address2");
		clearErrors("username");
		clearErrors("gender");
		clearErrors("mobile");
	};

	const onBlurDateOfBirth = (
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
		const parentDivWithAddedChild = document.querySelector("div.dobPicker");
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

			setDayDiv(dayDiv.value);
			setMonthDiv(monthDiv.value);
			setYearDiv(yearDiv.value);

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
				setMsg
			);
		}
	};
	return (
		<Home>
			<div className="LeftbarPannel p-0">
				<UploadPhoto color={"#1ec1d9"} />
				{showForm ? (
					<div className="PannelContent basicdetailsform px-5 Profile_form personal_dtl_form">
						<div className="wrapper">
							<form
								className=" content"
								name="basicdetailform"
								onSubmit={handleSubmit(_onSubmit)}
							>
								<div className="fomfiledList flex flex-wrap">
									<div className="form-title">
										<h3 data-toggle="collapse">
											<i className="fa-light fa-square-info"></i>Basic Details{" "}
										</h3>
									</div>
									<div className="input-group">
										<label>
											First Name<span className="mandatoryField">*</span>
										</label>
										<div className="form-group">
											<input
												type="text"
												className={`form-control ${errors.firstName ? "is-invalid" : ""
													}`}
												{...register("firstName", {
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
										</div>{" "}
										{errors.firstName && (
											<p className="text-danger">{errors.firstName.message}</p>
										)}
									</div>
									<div className="input-group">
										<label>Middle Name</label>
										<div className="form-group">
											<input
												type="text"
												className={`form-control ${errors.middleName ? "is-invalid" : ""
													}`}
												{...register("middleName", {
													maxLength: {
														value: 50,
														message: MSG.MAX50CHREQ,
													},
													pattern: {
														value: NAME_REGEX,
														message: "Middle name" + MSG.ALPHAREQ,
													},
												})}
											/>
										</div>
										{errors.middleName && (
											<p className="text-danger">
												{errors.middleName?.message}
											</p>
										)}
									</div>
									<div className="input-group">
										<label>
											Last Name<span className="mandatoryField">*</span>
										</label>
										<div className="form-group">
											<input
												type="text"
												className={`form-control ${errors.lastName ? "is-invalid" : ""
													}`}
												{...register("lastName", {
													required: {
														value: true,
														message: MSG.LNAMEREQ,
													},
													pattern: {
														value: NAME_REGEX,
														message: "Last name" + MSG.ALPHAREQ,
													},
													maxLength: {
														value: 50,
														message: MSG.MAX50CHREQ,
													},
												})}
											/>
										</div>
										{errors.lastName && (
											<p className="text-danger">{errors.lastName.message}</p>
										)}
									</div>
									<div className="input-group calender">
										<label>
											Date of Birth<span className="mandatoryField">*</span>
											<span className="clenderIcon">
												{" "}
												<img src={image.Calendericon} alt="..." />
											</span>
										</label>
										<div className="form-group">
											<Controller
												{...register("dateOfBirth", {
													required: {
														value: true,
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
														<DatePicker
															className={`form-control dobPicker ${errors.dateOfBirth ? "is-invalid" : ""
																}`}
															clearIcon={null}
															onChange={onChange}
															onkeydown="return false"
															value={value}
															peekNextMonth
															showMonthDropdown
															showYearDropdown
															dateFormat="MM/dd/yyyy"
															dayPlaceholder={"dd"}
															monthPlaceholder={"mm"}
															yearPlaceholder={"yyyy"}
															format="MM/dd/yyyy"
															placement={"bottomEnd"}
															onBlur={(e) => {
																onBlurDateOfBirth(
																	"dateOfBirth",
																	getSelectedUser?.role?.name === "PARENT" ||
																		getSelectedUser?.role?.name === "PROVIDER"
																		? "parent"
																		: "child",
																	setValue,
																	setError,
																	getSelectedUser?.role?.name === "PARENT"
																		? "parent"
																		: "child",
																	MSG.AGE02,
																	MSG.AGE18,
																	clearErrors,
																	MSG.MAXAGE
																);
															}}
															maxDate={new Date()}
														// minDate={
														//   getSelectedUser?.role?.name === "LEARNER" &&
														//   new Date(moment().subtract(18, "years"))
														// }
														// maxDate={
														//   getSelectedUser?.role?.name === "PARENT" ||
														//   getSelectedUser?.role?.name === "PROVIDER"
														//     ? new Date(moment().subtract(18, "years"))
														//     : new Date(moment().subtract(2, "years"))
														// }
														/>
													);
												}}
											/>
										</div>
										{errors.dateOfBirth && (
											<p className="text-danger">
												{errors?.dateOfBirth?.message}
											</p>
										)}
									</div>

									<div className="input-group">
										<label>
											Email
											{getSelectedUser?.role?.name !== "LEARNER" && (
												<span className="mandatoryField">*</span>
											)}
										</label>
										<div className="form-group">
											<input
												type="text"
												className={`form-control ${errors.username ? "is-invalid" : ""
													}`}
												{...register("username", {
													required: {
														value:
															getSelectedUser?.role?.name !== "LEARNER"
																? true
																: false,
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
										</div>
										{errors.username && (
											<p className="text-danger">{errors.username.message}</p>
										)}
									</div>
									<div className="input-group">
										<label>
											Mobile
											{getSelectedUser?.role?.name !== "LEARNER" && (
												<span className="mandatoryField">*</span>
											)}
										</label>

										<div className="form-group d-flex">
											{countryCode && (
												<PhoneInput
													country={countryCode.toLowerCase()}
													inputClass={"countryCode"}
													inputId={"countryCode"}
													disabled={true}
													onChange={(phone) => setCountryCode(phone)}
												/>
											)}
											<div className="w-100">
												<input
													type="text"
													maxLength="15"
													className={`form-control ${errors.mobile ? "is-invalid" : ""
														}`}
													{...register("mobile", {
														onChange: (e) => mobileNumberFormat(e),
														required: {
															value:
																getSelectedUser?.role?.name !== "LEARNER"
																	? true
																	: false,
															message: MSG.MOBNUMREQ,
														},
														pattern: {
															value: MOBILE_REGEX,
															message: MSG.INVMOBNUMREQ,
														},
													})}
												/>

												{errors.mobile && (
													<p className="text-danger">{errors.mobile.message}</p>
												)}
											</div>
										</div>
									</div>

									<div className="input-group" key={Math.random()}>
										<label>
											Gender<span className="mandatoryField">*</span>
										</label>
										<Controller
											{...register("gender", {
												required: {
													value: true,
													message: MSG.GENREQ,
												},
											})}
											control={control}
											render={({ field: { onChange, value } }) => {
												onChange = (event) => {
													setValue("gender", event);
													clearErrors("gender");
												};

												return (
													<SelectPicker
														className={`form-control w-100 p-0 ${errors.gender ? "is-invalid" : ""
															}`}
														data={GENDER}
														defaultValue={value}
														onChange={onChange}
														cleanable={false}
														searchable={false}
													/>
												);
											}}
										/>
										{errors.gender && (
											<p className="text-danger">{errors.gender.message}</p>
										)}
									</div>
									{getSelectedUser?.grade != null && (<div className="input-group">
										<label>
											Grade
										</label>
										<div className="form-group">
											<input
												type="text"
												maxLength="50"
												className={`form-control`}
												{...register("grade", {
													required: {
														value: true,
														message: MSG.GRADE,
													}
												})}
												disabled
											/>
										</div>
									</div>)}

									<div className="form-title margintitle w-100">
										<h3
											data-toggle="collapse"
											className="flex justify-content-between"
										>
											<span>
												{" "}
												<i className="fa-light fa-address-book mr-2"></i>Address{" "}
											</span>
											{/* loggedInUser?.parent?.address1 === null  */}

											{loggedInUser?.role?.name === "PARENT" &&
												getSelectedUser?.isParent === false &&
												loggedInUser?.address1 !== null && (
													<>
														<div className="signupType">
															<label className="Selcheckbox">
																Same as parent
																<input
																	type="checkbox"
																	checked={checkbox1}
																	onChange={(e) => handleAddress(e)}
																></input>
																<span className="checkmark"></span>
															</label>
														</div>
													</>
												)}

											{loggedInUser?.role?.name === "LEARNER" &&
												loggedInUser?.parent?.address1 !== null && (
													<>
														<div className="signupType">
															<label className="Selcheckbox">
																Same as parent
																<input
																	type="checkbox"
																	checked={learnerCheckbox1}
																	onChange={(e) => handleLearnerAddress(e)}
																></input>
																<span className="checkmark"></span>
															</label>
														</div>
													</>
												)}
										</h3>
									</div>

									{loggedInUser?.role?.name === "PROVIDER" && (
										<div
											className="flex flex-wrap align-items-baseline w-100"
											key={loggedInUser?.id}
										>
											<AddressForm
												showForm={showForm}
												errors={errors}
												register={register}
												setValue={setValue}
												addressData={loggedInUser}
											// showAddress={false}
											// setcheckBox1={setcheckBox1}
											// checkbox1={checkbox1}
											// setAdd={setAdd}
											// add={add}
											// showCheckout={false}
											/>
										</div>
									)}

									{getSelectedUser?.isParent === true && (
										<div
											className="flex flex-wrap align-items-baseline w-100"
											key={getSelectedUser?.id}
										>
											{showForm && (
												<AddressForm
													showForm={showForm}
													errors={errors}
													register={register}
													setValue={setValue}
													addressData={getSelectedUser}
													showAddress={false}
													setcheckBox1={setcheckBox1}
													checkbox1={checkbox1}
													setAdd={setAdd}
													add={add}
												// showCheckout={false}
												/>
											)}
										</div>
									)}

									{loggedInUser?.role?.name === "PARENT" &&
										getSelectedUser?.isParent === false &&
										checkbox1 === true && (
											<div
												className="flex flex-wrap align-items-baseline w-100"
												key={loggedInUser?.id}
											>
												{showForm && (
													<AddressForm
														showForm={showForm}
														errors={errors}
														register={register}
														setValue={setValue}
														addressData={checkbox1 ? loggedInUser : ""}
														setcheckBox1={setcheckBox1}
														checkbox1={checkbox1}
														setAdd={setAdd}
													// showAddress={false}
													// showCheckout={false}
													/>
												)}
											</div>
										)}

									{loggedInUser?.role?.name === "PARENT" &&
										getSelectedUser?.isParent === false &&
										checkbox1 === false && (
											<div
												className="flex flex-wrap align-items-baseline w-100"
												key={getSelectedUser?.id}
											>
												{showForm && (
													<AddressForm
														showForm={showForm}
														errors={errors}
														register={register}
														setValue={setValue}
														addressData={getSelectedUser}
														setcheckBox1={setcheckBox1}
														checkbox1={checkbox1}
														setAdd={setAdd}
													// showAddress={false}
													// showCheckout={false}
													/>
												)}
											</div>
										)}

									{loggedInUser?.role?.name === "LEARNER" &&
										learnerCheckbox1 === true && (
											<div
												className="flex flex-wrap align-items-baseline w-100"
												key={loggedInUser?.id}
											>
												{showForm && (
													<AddressForm
														errors={errors}
														register={register}
														setValue={setValue}
														addressData={
															learnerCheckbox1 ? loggedInUser?.parent : ""
														}
														setAddLear={setAddLear}
														addLear={addLear}
														setcheckBox1={setLearnerChechbox1}
														checkbox1={learnerCheckbox1}
													/>
												)}
											</div>
										)}

									{loggedInUser?.role?.name === "LEARNER" &&
										learnerCheckbox1 === false && (
											<div
												className="flex flex-wrap align-items-baseline w-100"
												key={getSelectedUser?.id}
											>
												{showForm && (
													<AddressForm
														// showForm={showForm}
														errors={errors}
														register={register}
														setValue={setValue}
														addressData={getSelectedUser}
														setcheckBox1={setLearnerChechbox1}
														checkbox1={learnerCheckbox1}
													// showAddress={false}
													// showCheckout={false}
													/>
												)}
											</div>
										)}
								</div>
								<div className="input-group full-Width-group basic_details_form mt-3">
									<div className="form-group BDsubmitbutton m-0 d-flex">
										<div className="buttonDistribotion">
											{!loader && (
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5 cancelbutton ml-auto"
													onClick={() => {
														handleSetvalue();
														setShowForm(false);
														setcheckBox1(false);
														setLearnerChechbox1(false);
														handleErrors();
														setAdd("");
														setAddLear("");
													}}
												>
													<i className="fa-solid fa-xmark"></i> Cancel
												</button>
											)}

											{loader ? (
												<button
													className="btn-blue btn-login d-block mb-5"
													key={Math.random()}
													disabled
												>
													<span className="RounAnimation mr-1"></span> Please
													Wait...
												</button>
											) : (
												<button
													type="submit"
													className="btn-blue btn-login d-block mb-5 "
												>
													<i className="fa-solid fa-paper-plane"></i> Save
												</button>
											)}
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				) : (
					<div className="PannelContent basicdetailsform px-5">
						<div className="wrapper mx-auto">
							<div className="form-title">
								<h3 data-toggle="collapse">
									<i className="fa-light fa-square-info mr-2"></i>Basic Details{" "}
								</h3>
							</div>
							<div className=" input-group">
								<div className="profile_fild">
									<label>First Name</label>
									<input
										type="text"
										className={`form-control`}
										{...register("firstName", {
											required: true,
										})}
										disabled
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										handleSetvalue();
										setShowForm(true);
									}}
								>
									<i className="fa fa-pencil"></i>
								</span>
							</div>

							<div className="input-group">
								<div className="profile_fild">
									<label>Middle Name</label>
									<input
										type="text"
										className={`form-control`}
										{...register("middleName")}
										disabled
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										setShowForm(true);
										handleSetvalue();
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
									{" "}
									<i className="fa-solid fa-pencil"></i>
								</span>
							</div>
							<div className="input-group">
								<div className="profile_fild">
									<label>Last Name</label>
									<input
										type="text"
										className={`form-control`}
										{...register("lastName", {
											required: true,
										})}
										disabled
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										handleSetvalue();
										setShowForm(true);
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
									<i className="fa-solid fa-pencil"></i>
								</span>
							</div>
							<div className="input-group">
								<div className="profile_fild">
									<label className="w-100">Date of Birth</label>
									<Controller
										{...register("dateOfBirth", {
											required: true,
										})}
										control={control}
										render={({ field: { onChange, value } }) => {
											return (
												<DatePicker
													clearIcon={null}
													maxDate={new Date()}
													onChange={onChange}
													value={value}
													dateFormat="MM/dd/yyyy"
													disabled
													placement={"bottomEnd"}
												/>
											);
										}}
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										setShowForm(true);
										handleSetvalue();
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
									{" "}
									<i className="fa-solid fa-pencil"></i>
								</span>
							</div>
							<div className="input-group">
								<div className="profile_fild">
									<label>Email</label>
									<input
										type="text"
										className={`form-control`}
										{...register("username", {
											required: {
												value: true,
												message: MSG.EMAILREQ,
											},
											pattern: {
												value: EMAIL_REGEX,
												message: MSG.INVEMAILREQ,
											},
										})}
										disabled
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										setShowForm(true);
										handleSetvalue();
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
									{" "}
									<i className="fa-solid fa-pencil"></i>
								</span>
							</div>
							<div className="input-group">
								<div className="profile_fild">
									<label>Mobile</label>
									<div className="mobileManage">
										{countryCode ? (
											<PhoneInput
												country={countryCode.toLowerCase()}
												disabled={true}
												inputClass={"hideCountry"}
												onChange={(phone) => setCountryCode(phone)}
											/>
										) : (
											""
										)}

										<input
											type="text"
											className={`form-control`}
											{...register("mobile")}
											disabled
										/>
									</div>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										setShowForm(true);
										handleSetvalue();
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
									{" "}
									<i className="fa-solid fa-pencil"></i>
								</span>
							</div>

							<div className="input-group">
								<div className="profile_fild">
									<label>Gender</label>
									<input
										type="text"
										style={{
											textTransform: "lowercase",
										}}
										className={`form-control capitalized`}
										{...register("gender")}
										disabled
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										setShowForm(true);
										handleSetvalue();
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
									{" "}
									<i className="fa-solid fa-pencil"></i>
								</span>
							</div>
							{getSelectedUser?.grade != null && (<div className="input-group">
								<div className="profile_fild">
									<label>Grade</label>
									<input
										type="text"
										className={`form-control`}
										{...register("grade", {
											required: true,
										})}
										disabled
									/>
								</div>
								<span
									className="UserEditForm"
									onClick={() => {
										handleSetvalue();
										setShowForm(true);
										setcheckBox1(false);
										setLearnerChechbox1(false);
										handleErrors();
										setAdd("");
										setAddLear("");
									}}
								>
								</span>
							</div>)}

							<div key={Math.random()} className="w-100">
								<div className="form-title margintitle">
									<h3 data-toggle="collapse">
										<i className="fa-light fa-address-book mr-2"></i>Address{" "}
									</h3>
								</div>
								<div className="flex flex-wrap">
									<div className="input-group">
										<div className="profile_fild">
											<label>Address 1</label>
											<input
												type="text"
												className={`form-control`}
												{...register("address1")}
												disabled
											/>
										</div>
										<span
											className="UserEditForm"
											onClick={() => {
												setShowForm(true);
												handleSetvalue();
												setcheckBox1(false);
												setLearnerChechbox1(false);
												handleErrors();
												setAdd("");
												setAddLear("");
											}}
										>
											{" "}
											<i className="fa-solid fa-pencil"></i>
										</span>
									</div>
									<div className="input-group">
										<div className="profile_fild">
											<label>Address 2 (Optional)</label>
											<div className="">
												<input
													type="text"
													className={`form-control`}
													{...register("address2", {
														maxLength: {
															value: 255,
															message: MSG.MAX255CHREQ,
														}
													})
													}
													disabled
												/>
											</div>
										</div>
										<span
											className="UserEditForm"
											onClick={() => {
												setShowForm(true);
												handleSetvalue();
												setcheckBox1(false);
												setLearnerChechbox1(false);
												handleErrors();
												setAdd("");
												setAddLear("");
											}}
										>
											{" "}
											<i className="fa-solid fa-pencil"></i>
										</span>
									</div>

									<div className="input-group">
										<div className="profile_fild">
											<label>City</label>
											<input
												type="text"
												className={`form-control`}
												{...register("city", {
													maxLength: {
														value: 255,
														message: MSG.MAX255CHREQ,
													}
												})}
												disabled
											/>
										</div>
										<span
											className="UserEditForm"
											onClick={() => {
												setShowForm(true);
												handleSetvalue();
												setcheckBox1(false);
												setLearnerChechbox1(false);
												handleErrors();
												setAdd("");
												setAddLear("");
											}}
										>
											{" "}
											<i className="fa-solid fa-pencil"></i>
										</span>
									</div>

									<div className="input-group">
										<div className="profile_fild">
											<label>State</label>
											<input
												type="text"
												className={`form-control`}
												{...register("state")}
												disabled
											/>
										</div>
										<span
											className="UserEditForm"
											onClick={() => {
												setShowForm(true);
												handleSetvalue();
												setcheckBox1(false);
												setLearnerChechbox1(false);
												handleErrors();
												setAdd("");
												setAddLear("");
											}}
										>
											{" "}
											<i className="fa-solid fa-pencil"></i>
										</span>
									</div>

									<div className="input-group">
										<div className="profile_fild">
											<label>Country</label>

											<input
												type="text"
												className={`form-control`}
												{...register("country")}
												disabled
											/>
										</div>
										<span
											className="UserEditForm"
											onClick={() => {
												setShowForm(true);
												handleSetvalue();
												setcheckBox1(false);
												setLearnerChechbox1(false);
												handleErrors();
												setAdd("");
												setAddLear("");
											}}
										>
											{" "}
											<i className="fa-solid fa-pencil"></i>
										</span>
									</div>
									<div className="input-group">
										<div className="profile_fild">
											<label>Zipcode</label>
											<div className="l">
												<input
													type="text"
													className={`form-control`}
													// placeholder='Zipcode'
													{...register("zip")}
													disabled
												/>
											</div>
										</div>
										<span
											className="UserEditForm"
											onClick={() => {
												setShowForm(true);
												handleSetvalue();
												setcheckBox1(false);
												setLearnerChechbox1(false);
												handleErrors();
												setAdd("");
												setAddLear("");
											}}
										>
											{" "}
											<i className="fa-solid fa-pencil"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<Profile />
		</Home>
	);
};

export default BasicDetails;
//891

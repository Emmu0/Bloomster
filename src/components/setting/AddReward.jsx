import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { Controller, useForm } from "react-hook-form";
import { MSG } from "../../utils/Messages";
import DatePicker from "react-date-picker";
import moment from "moment";
import { NAME_REGEX, NUM_REGEX } from "../../utils/Regex";
import { getCapitalized, getToolTip, textTrim } from "../../utils/helper";
import { addReward } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";

import Cropper from "react-easy-crop";
import { ShimmerThumbnail } from "react-shimmer-effects";

const AddReward = ({ closeReward, object }) => {
	const dispatch = useDispatch();
	const [formMode, setFormMode] = useState(
		object?.type ? object?.type : "edit"
	);
	const { response, rewardData, defaultChildData, getParentToolResponses } =
		useSelector((state) => state.collections);
	const [rewardId, setRewardId] = useState(undefined);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const {
		register,
		control,
		handleSubmit,
		clearErrors,
		setValue,
		getValues,
		setError,
		formState: { errors },
	} = useForm({ mode: "onTouched" });
	useEffect(() => {
		if (rewardData && rewardData?.records) {
			setValue("name", getCapitalized(rewardData.records[0].name));
			setValue("description", rewardData.records[0].description);
			setValue("points", rewardData.records[0].tpoints);
			setValue("endDate", new Date(rewardData.records[0].lastDate));

			setRewardId(rewardData?.records[0].id);
			if (getParentToolResponses) {
				getParentToolResponses.isViewReward = false;
			}
			console.log('rewardData : ', rewardData);
		}
	}, [rewardData]);
	const [validationMessage, setValidationMessage] = useState("");
	const [rewardLoader, setRewardLoader] = useState(false);

	let title = "";
	let points = 0;
	let coursePoint = object?.data.points > 0 ? object?.data?.points : 0;
	let courseId = "";
	let activityId = "";
	if (object?.data?.tpoints && !object?.activityId) {
		points = object.data.tpoints;
		title = object.data.name;
		courseId = object.data.id;
	} else if (object?.activityId) {
		if (object?.data?.activities) {
			object?.data?.activities.map((vl) => {
				if (vl.id == object.activityId) {
					points = vl.tpoints;
					title = vl.name;
					activityId = vl.id;
				}
			});
		} else {
			points = object?.data.tpoints;
			title = object?.data.name;
			activityId = object?.data.id;
		}
	}

	useEffect(() => {
		if (response) {
			closeReward();
			setRewardLoader(false);
		}
	}, [response]);

	const [imgSrc, setImgSrc] = useState("");
	const [img, setImg] = useState();

	function onSelectFile(e) {
		const input = document.getElementById("fileimg");
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		setImg(e.target.files[0]);
		reader.addEventListener("load", () => {
			var imageData = reader.result.toString().split(",")[1];
			setImg(imageData);
			setImgSrc(reader.result.toString() || "");
		});
	}

	const [editdate, seteditdate] = useState();
	const _onSubmit = (values) => {
		seteditdate(getValues("endDate"));
		setRewardLoader(true);
		let formData = {};

		if (rewardId) {
			formData = {
				id: rewardId,
				name: values.name,
				description: values.description,
				points: values.points,
				enddate: moment(values.endDate).format("YYYY-MM-DD"),
				courseId: courseId,
				activityId: activityId ? activityId : "",
				imageurl: img ? img : null,
			};
		} else {
			formData = {
				name: values.name,
				description: values.description,
				points: values.points,
				enddate: moment(values.endDate).format("YYYY-MM-DD"),
				courseId: courseId,
				activityId: activityId ? activityId : "",
				imageurl: img,
			};
		}

		dispatch(addReward(object.userId, formData));
	};

	const editMode = () => {
		object.type = "edit";
		setFormMode("edit");
	};

	const checkEdit = () => {
		return formMode === "view" &&
			!(rewardData?.records[0]?.points >= rewardData?.records[0]?.tpoints) ? (
			<span className="UserEditForm" onClick={() => editMode()}>
				<i className="fa fa-pencil"></i>
			</span>
		) : (
			""
		);
	};
	let minValue = 0;
	let maxValue = points;

	const _onBlur = (field, e) => {
		const rewardAdded = document.querySelector("div.rewardEndDate");
		if (rewardAdded) {
			const innerDiv = rewardAdded.querySelector(
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
				dayDiv.value + "-" + monthDiv.value + "-" + yearDiv.value;
			let currentDate = new Date();

			// Convert user-selected date and current date to the same format for comparison
			let userDate = moment(userSelectedDt, "DD-MM-YYYY").startOf("day");
			let currentDateFormatted = moment(currentDate).startOf("day");

			if (userDate.isBefore(currentDateFormatted)) {
				setError(field, { message: MSG.TARGETED });
			} else {
				clearErrors(field);
			}
		}
	};

	const inputRef = React.useRef();

	return (
		<div className="sharepopup enrollZindex AreyousurePopup ">
			<div className="modal d-flex" id="rewardId" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content courseInformation schoolcourse">
						<div className="modal-header">
							<div className="heading p-0 border-0 w-100">
								{title.length > 55 && <p> {getToolTip(title, 25)}</p>}
								<h2 className="flex">
									<span
										className="flex"
										data-for={title}
										data-event-off=""
										data-tip
									>
										{" "}
										<img src={image.rewardimg} alt="" className="mr-2" />
										Reward: {textTrim(title, 55)}
									</span>
									<button
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() => closeReward()}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>
						<form
							name="addchildform"
							className="bg-white  p content"
							onSubmit={handleSubmit(_onSubmit)}
						>
							<div className="modal-body parents_Support">
								{getParentToolResponses?.isViewReward ? (
									<ShimmerThumbnail height={600} className="m-0" rounded />
								) : (
									<div className="rewardPopupcontent setyourrewardtarget">
										{
											coursePoint > 0 && (
												<div className="input-group">
													<label>
														Current Points: <span className="Curruntpoint"> {coursePoint}</span>
													</label>
												</div>
											)
										}
										<div className="input-group">
											<label htmlFor="" className=" w-100 flex">
												Target Points
												<span className="mandatoryField mr-auto">*</span>{" "}

												<small>(Maximum Points: {points})</small>

											</label>
											<div className="form-group">
												<input
													disabled={(formMode !== "edit" || object?.type) ? true : false}
													type="text"
													className={`form-control ${errors.points ? "is-invalid" : ""
														}`}
													{...register("points", {
														required: {
															value: true,
															message: MSG.TARGETREQ,
														},
														// min:{
														//   value : object?.data?.points,
														//   message: `Achieved points is ${object?.data?.points}.`,
														// },
														pattern: {
															value: NUM_REGEX,
															message: MSG.NUMREQ,
														},

														validate: {
															positiveNumber: (value) =>
																parseFloat(value) > minValue || MSG.TARGETMIN,
															lessThanHundred: (value) =>
																parseFloat(value) <= maxValue || MSG.TARGETPT,
															minimumNumber: (value) =>
																parseFloat(value) > coursePoint ||
																getCapitalized(defaultChildData?.firstName) +
																" has already earned " +
																parseFloat(coursePoint) +
																" points. Set a target higher than " +
																getCapitalized(defaultChildData?.firstName) +
																"'s current points.",
														},
													})}
												/>
												<div className="invalid-feedback">
													{errors?.points?.message}
												</div>
											</div>
											{/* {checkEdit()} */}
										</div>

										<div className="input-group">
											<label htmlFor="">
												Title<span className="mandatoryField">*</span>
											</label>
											<div className="form-group">
												<input
													disabled={formMode !== "edit" ? true : false}
													type="text"
													className={`form-control ${errors.name ? "is-invalid" : ""
														}`}
													{...register("name", {
														required: {
															value: true,
															message: MSG.TITLEREQ,
														},
														maxLength: {
															value: 100,
															message: MSG.MAX100CHREQ,
														},

														// pattern: {
														//   value: NAME_REGEX,
														//   message: MSG.ALPHAREQ,
														// },
													})}
												/>
												<div className="invalid-feedback">
													{errors?.name?.message}
												</div>
												{checkEdit()}
											</div>
										</div>

										<div className="input-group">
											<label htmlFor="">
												Description<span className="mandatoryField">*</span>
											</label>
											<div className="form-group">
												<input
													type="text"
													disabled={formMode !== "edit" ? true : false}
													className={`form-control ${errors.description ? "is-invalid" : ""
														}`}
													{...register("description", {
														required: {
															value: true,
															message: MSG.TARGETDESC,
														},
														maxLength: {
															value: 255,
															message: MSG.MAX255CHREQ,
														},
													})}
												/>
												<div className="invalid-feedback">
													{errors?.description?.message}
												</div>
												{checkEdit()}
											</div>
										</div>
										<div className="input-group calender">
											<label>
												Expiry Date<span className="mandatoryField">*</span>
											</label>
											{formMode !== "view" && (
												<span className="clenderIcon">
													{" "}
													<img alt="..." src={image.Calendericon} />
												</span>
											)}
											<Controller
												{...register("endDate", {
													required: {
														value: true,
														message: MSG.TARGETDT,
													},
												})}
												control={control}
												render={({ field: { onChange, value } }) => {
													onChange = (event) => {
														setValue("endDate", event);
														clearErrors("endDate");
													};
													return (
														<DatePicker
															disabled={(formMode !== "edit" || object?.type) ? true : false}
															className={`form-control addChild rewardEndDate p-0 w-100 border-1 ${errors.endDate ? "is-invalid" : ""
																}`}
															clearIcon={null}
															minDate={
																formMode === "edit" ? new Date(moment()) : ""
															}
															oneTap
															dayPlaceholder={"dd"}
															monthPlaceholder={"mm"}
															yearPlaceholder={"yyyy"}
															format="MM/dd/yyyy"
															placement={"topEnd"}
															onChange={onChange}
															value={getValues("endDate")}
															onBlur={(e) => {
																_onBlur("endDate", e);
															}}
														/>
													);
												}}
											/>
											{errors.endDate && (
												<p className="text-danger">
													{errors?.endDate?.message}
												</p>
											)}
											{/* {checkEdit()} */}
										</div>

										<div className="input-group">
											<label htmlFor="">Image</label>

											<div
												className={`form-group photoUploded p-0 border-0 position-relative ${object?.type === "view"
													} `}
											>
												{imgSrc && (
													<div className="Courseimage mr-3">
														<Cropper
															image={imgSrc}
															crop={crop}
															zoom={zoom}
															cropShape="round"
															showGrid={false}
															aspect={1 / 1}
															onCropChange={setCrop}
															objectFit="contain"
														/>
														<input
															className=" form-control w-auto"
															type="file"
															title=""
															accept="image/*"
															id="fileimg"
															ref={inputRef}
															onChange={onSelectFile}
														/>
													</div>
												)}

												{!imgSrc && (
													<>
														<div className="">
															<div className={`uploadederewardimg `}>
																{rewardData &&
																	rewardData?.records[0]?.imageurl &&
																	!imgSrc && (
																		<img
																			src={
																				rewardData.records[0].imageurl +
																				"?vl=" +
																				Math.random()
																			}
																			alt={"..."}
																		/>
																	)}
																{!rewardData?.records[0]?.imageurl && (
																	<img
																		{...register("image", {})}
																		src={image.camera}
																		alt=""
																		className="cameraicon"
																	/>
																)}
															</div>

															{object?.type !== "view" ? (
																<input
																	className=" form-control w-auto"
																	type="file"
																	title=""
																	accept="image/*"
																	id="fileimg"
																	ref={inputRef}
																	// style={{ display: "none" }}
																	onChange={onSelectFile}
																/>
															) : (
																<input
																	className=" form-control w-auto"
																	type="file"
																	title=""
																	accept="image/*"
																	id="fileimg"
																	ref={inputRef}
																	style={{ display: "none" }}
																	onChange={onSelectFile}
																/>
															)}
														</div>
														{checkEdit()}
														{object?.type !== "view" && checkEdit()}
													</>
												)}
											</div>
											{errors?.image?.type == "required" && !imgSrc && (
												<p className="text-danger">{errors?.image?.message}</p>
											)}
										</div>
									</div>
								)}
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										{!rewardLoader && (
											<button
												onClick={() => closeReward()}
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton m-0"
											>
												<i className="fa-solid fa-xmark"></i> Cancel
											</button>
										)}

										{formMode !== "view" &&
											(rewardLoader ? (
												<button
													className="btn-blue btn-login d-block mb-5 Addrewardbtn"
													key={Math.random()}
													disabled
												>
													<span className="RounAnimation mr-1"></span> Please
													Wait...
												</button>
											) : (
												<button
													type="submit"
													className="btn-blue btn-login d-block mb-5 Addrewardbtn"
												>
													<i className="fa-solid fa-paper-plane"></i>
													{object?.type == "edit" ? "Update" : "Save"}
												</button>
											))}
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddReward;

import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/Regex";
import { MSG } from "../../utils/Messages";
import { shareCertificatePostAPI } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";

const ShareCertificate = ({
	_redirectLesson,
	certificateskilldata,
	certificateData,
	CourseAndSkillId,
}) => {
	const { register, handleSubmit, formState } = useForm({
		mode: "onTouched",
	});
	const { socialActivityData, defaultChildData, response, loggedInUser } =
		useSelector((state) => state.collections);
	const [submitLoader, setSubmitLoader] = useState(false);

	const { errors } = formState;
	const dispatch = useDispatch();

	useEffect(() => {
		if (response) {
			setSubmitLoader(false);
			_redirectLesson(false);
		}
	}, [response]);

	const _onSubmit = (values) => {
		let courseId = certificateData?.id
			? certificateData?.id
			: CourseAndSkillId?.courseId;
		let courseName = certificateData?.name
			? certificateData?.name
			: CourseAndSkillId?.courseName;
		let SkillName = certificateskilldata?.name
			? certificateskilldata?.name
			: CourseAndSkillId?.skillName;

		let formData = {
			learnerName: defaultChildData?.name,
			learnerId: defaultChildData?.id,
			childFirstName: defaultChildData?.firstName,
			courseName: courseName,
			courseId: courseId,
			skillName: SkillName,
			receiverName: values.familyName,
			receiverEmail: values.email,
			level: certificateData?.level ? certificateData?.level : socialActivityData?.records[0]?.level
		};
		setSubmitLoader(true);
		dispatch(shareCertificatePostAPI(formData));
	};

	return (
		<>
			<div className="sharepopup AreyousurePopup">
				<div className="modal d-flex" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.certificate} alt="" className="mr-2" />
											Share Certificate
										</span>
										<button
											className="btn btn-primary"
											data-dismiss="modal"
											onClick={() => _redirectLesson(false)}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<form onSubmit={handleSubmit(_onSubmit)}>
								<div className="modal-body">
									<div className="sharewithfrnd pb-3">
										<div className="input-group">
											<label htmlFor="">
												Name<span className="mandatoryField">*</span>
											</label>
											<div className="form-group">
												<input
													type="text"
													placeholder="Enter your friend's or family member's name"
													id="familyName"
													className={`form-control ${errors.familyName ? "is-invalid" : ""
														}`}
													{...register("familyName", {
														required: {
															value: true,
															message: MSG.NAMEPROVIDEREQ,
														},
														pattern: {
															value: NAME_REGEX,
															message: "Name " + MSG.ALPHAREQ,
														},
														maxLength: {
															value: 15,
															message: MSG.MAX15CHREQ,
														},
													})}
												/>

												<div className="invalid-feedback">
													{errors?.familyName?.message}
												</div>
											</div>
										</div>
										<div className="input-group">
											<label htmlFor="">
												Email<span className="mandatoryField">*</span>
											</label>
											<div className="form-group">
												<input
													type="text"
													placeholder="Enter your friend's or family member's email id"
													id="email"
													className={`form-control ${errors.email ? "is-invalid" : ""
														}`}
													{...register("email", {
														required: {
															value: true,
															message: MSG.EMAILPROVIDEREQ,
														},
														pattern: {
															value: EMAIL_REGEX,
															message: MSG.INVEMAILREQ,
														},
														validate: {
															EmailValid: (value) =>
																value !== loggedInUser?.email ||
																"Parent Email Same",
														},
													})}
												/>
												<div className="invalid-feedback">
													{errors?.email?.message}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<div className="buttonDistribotion">
											{!submitLoader && <button
												type="button"
												onClick={() => _redirectLesson(false)}
												className="btn-blue btn-login d-block mb-5 cancelbutton"
											>
												<i className="fa-solid fa-xmark"></i> Cancel
											</button>}
											{submitLoader ? (
												<button
													className="btn-blue btn-login d-block mb-5 "
													disabled
													key={Math.random()}
												>
													<span className="RounAnimation"></span> Please wait...
												</button>
											) : (
												<button
													type="submit"
													className="btn-blue btn-login d-block mb-5"
												>
													<i className="fa-regular fa-share-nodes mr-1"></i>{" "}
													Share
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
		</>
	);
};
export default ShareCertificate;

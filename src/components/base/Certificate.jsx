import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCapitalized } from "../../utils/helper";

import * as image from "../../resources/images";
import ShareCertificate from "./ShareCertificate";
import ShareCertificateWithFriends from "./ShareCertificateWithFriends";
import { shareCertificatePostAPI } from "../../redux/actions/APIs";

const Certificate = ({
	_redirectLesson,
	certificateData,
	certificateskilldata,
	CourseAndSkillId,
	viewcertficate,
}) => {
	const { defaultChildData, socialActivityData } = useSelector(
		(state) => state.collections
	);

	const [shareCertificate, setShareCertificate] = useState();
	const [certifyData, setCertifyData] = useState();
	const dispatch = useDispatch();

	const viewShareCertificate = (data) => {
		setShareCertificate(true);
		setCertifyData(socialActivityData?.records?.[0]);

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
			receiverName: "",
			receiverEmail: "",
			level: certificateData?.level ? certificateData?.level : socialActivityData?.records[0]?.level
		};
		dispatch(shareCertificatePostAPI(formData));
	};
	const close = () => {
		setShareCertificate(false);
	};
	console.log('## : ', certificateData, '@@ : ', socialActivityData?.records[0]);
	return (
		<>
			<div className="hoosrSubModlPopup">
				<div className="modal d-flex" role="dialog">
					<div className="modal-dialog modal-lg certificatePopup">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.certificate} alt="" className="mr-2" />
											Certificate of Completion
										</span>
										<button
											className="btn btn-primary"
											onClick={() => _redirectLesson(false)}
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body optvarification Subject_Curriculam">
								<div id="certificateMainDiv">
									<div class="main-div">
										<div class="contant-div">
											<h1 class="student-name">{getCapitalized(defaultChildData?.name)}</h1>
											<p>For completing <span>{socialActivityData?.records
												? socialActivityData?.records[0]?.courseName
												: certificateData?.name}</span> and achieving level {" "}
												{certificateData
													? certificateData?.level
													: socialActivityData?.records[0]?.level}{" "} competency in <span>{(socialActivityData?.records &&
														socialActivityData?.records[0]?.skillName) ||
														(socialActivityData?.records &&
															socialActivityData?.records[0]?.keyName) ||
														certificateskilldata?.name}</span>
											</p>
										</div>
									</div>
								</div>
								{/* <div className="certificateMain container">
									<div className="certificateContent">
										<div className="cerficatedetails text-center">
											<h3>Of Completion</h3>
											<h4>Awarded to:</h4>
											<h2>{getCapitalized(defaultChildData?.name)}</h2>
											<span className="borderBottom"></span>
											<p>
												For completing{" "}
												<strong>
													{socialActivityData?.records
														? socialActivityData?.records[0]?.courseName
														: certificateData?.name}
												</strong>{" "}
												and achieving level{" "}
												{certificateData
													? certificateData?.level
													: socialActivityData?.records[0]?.level}{" "}
												competency in{" "}
												<strong>
													{(socialActivityData?.records &&
														socialActivityData?.records[0]?.skillName) ||
														(socialActivityData?.records &&
															socialActivityData?.records[0]?.keyName) ||
														certificateskilldata?.name}
												</strong>
											</p>
										</div>
									</div>
								</div> */}
							</div>
							<div className="modal-footer">
								<div className="sharecertificate flex m-0 p-0">
									<button
										className="btn-blue btn-login d-block  cancelbutton w-auto m-0 ml-auto"
										onClick={() => _redirectLesson(false)}
									>
										<i className="fa-solid fa-xmark mr-2"></i>Close
									</button>

									<button
										onClick={() => viewShareCertificate(true)}
										className="btn-blue btn-login d-block w-auto"
									>
										<i className="fa-regular fa-share-nodes mr-2"></i> Share
										Certificate
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* {shareCertificate && (
				<ShareCertificate
					_redirectLesson={close}
					certificateskilldata={certificateskilldata}
					certificateData={certificateData}
					certifyData={certifyData}
					CourseAndSkillId={CourseAndSkillId}
				/>
			)} */}

			{shareCertificate && (
				<ShareCertificateWithFriends
					_redirectLesson={close}
					certificateData={certificateData}
					socialActivityData={socialActivityData}
					skillName={certificateskilldata?.name
						? certificateskilldata?.name
						: CourseAndSkillId?.skillName}
				/>
			)}
		</>
	);
};

export default Certificate;

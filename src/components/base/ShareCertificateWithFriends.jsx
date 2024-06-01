import React, { useEffect, useRef, useState } from "react";
import * as image from "../../resources/images";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/Regex";
import { MSG } from "../../utils/Messages";
import { shareCertificatePostAPI } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";
import { FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon, EmailIcon } from 'react-share';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'

const ShareCertificateWithFriends = ({ _redirectLesson, certificateData, socialActivityData, skillName }) => {
	const textAreaRef = useRef(null);
	const [copySuccess, setCopySuccess] = useState("");

	const { certImageResp } = useSelector(
		(state) => state.collections
	);

	function copyToClipboard(e) {
		textAreaRef.current.select();
		console.log("textAreaRef : ", textAreaRef.current);
		document.execCommand("copy");
		window.getSelection().removeAllRanges();
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		e.target.focus();
		setCopySuccess(textAreaRef.current?.value);
	}
	const [shareURL, setShareURL] = useState("");

	useEffect(() => {
		if (certImageResp) {
			setShareURL(certImageResp?.records[0]?.certificateImage + ".jpg");
			//	setShareURL("https://development.d1zlv4mifgvbiq.amplifyapp.com/certificateimage");
		}
	}, [certImageResp])

	let subject = "Sharing My Achievement – Certificate from Bloomster!";
	//	let body = "Hi,%0D%0A %0D%0AI am excited to share my certificate of completion for completing the course - " + certificateData?.name + " and achieving level " + certificateData?.level + " competency in the skill - " + (certificateData?.skills?.name ? certificateData?.skills?.name : certificateData?.skill?.name) + ".%0D%0A %0D%0AYou can view the certificate by clicking the link: " + shareURL + "%0D%0A %0D%0AThanks!";
	let body = `Hi,\n\nI am excited to share my certificate of completion for completing the course - `
		+ (socialActivityData?.records ? socialActivityData?.records[0]?.courseName : certificateData?.name)
		+ ` and achieving level ` + (certificateData ? certificateData?.level : socialActivityData?.records[0]?.level)
		+ ` competency in the skill - ` + (skillName)
		+ `.\n\nYou can view the certificate by clicking the link: ` + shareURL
		+ `\n\nThanks!`;

	return (
		<div className="sharepopup newslatterpopup AreyousurePopup">
			<div className="modal d-flex" id="schoolactivity143" role="dialog">
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

						<div className="modal-body">
							<div className="sharewithfrnd pb-3">
								<h4 className="mb-3">
									Show your friends what you have learnt on Bloomster{" "}
								</h4>
								<div className="Share_your_Certificate">
									<ul>
										<li>
											<FacebookShareButton url={shareURL} >
												<a href="#" target="_blank">
													<i className="fa-brands fa-facebook"></i>
												</a>
												Facebook
											</FacebookShareButton>
										</li>

										{/* <li>
											<a href="https://www.instagram.com" target="_blank">
												<i className="fa-brands fa-square-instagram"></i>
											</a>
											Instagram
										</li> */}
										{/* <li>
											<LinkedinShareButton url={shareURL} >
											<a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + shareURL} target="_blank">
												<i class="fa-brands fa-linkedin"></i>
											</a>
											LinkedIn
											</LinkedinShareButton>
										</li> */}

										<li>
											<TwitterShareButton url={shareURL}>
												<a href="#" target="_blank">
													<i class="fa-brands fa-square-x-twitter"></i>
												</a>
												X (Twitter)
											</TwitterShareButton>
										</li>
										<li>
											<WhatsappShareButton url={shareURL}>
												<a href="#" target="_blank">
													<i class="fa-brands fa-square-whatsapp"></i>
												</a>
												WhatsApp
											</WhatsappShareButton>
										</li>
										<li>
											{/* <EmailShareButton url={shareURL}> */}
											<a href={"mailto:?body=" + encodeURIComponent(body) + "&subject=" + subject} target="_blank">
												<i class="fa-solid fa-envelope"></i>
											</a>
											Email
											{/* </EmailShareButton> */}
										</li>
									</ul>
									<div className="input-group">
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												ref={textAreaRef}
												value={shareURL}
											/>
											<span
												className="CopyTextbtn pointer"
												onClick={copyToClipboard}
											>
												Copy
											</span>
											{/* {copySuccess} */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton"
										onClick={() => _redirectLesson(false)}
									>
										<i className="fa-solid fa-xmark"></i> Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};
export default ShareCertificateWithFriends;

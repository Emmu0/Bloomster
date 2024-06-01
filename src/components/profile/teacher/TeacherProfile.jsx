/** @format */
import React, { useState, useEffect } from "react";
import * as image from "../../../resources/images";
import { useSelector, useDispatch } from "react-redux";
import { ShimmerCategoryList } from "../../../utils/Packages";
import { getProfileName, getSequnceSort } from "../../../utils/helper";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Vicky from "../../controls/Vicky";
import ProviderProfile from "../../controls/ProviderProfile";
import CourseContent from "../../dimensions/CourseContent";
import CourseJourney from "../../dimensions/CourseJourney";
import ReadMore from "../../controls/ReadMore";
import {
	setCourseModal,
	setProviderModal,
	showModal,
} from "../../../redux/actions";
import { courseJourney } from "../../../redux/actions/APIs";
import { getCourseDetails } from "../../../redux/actions/Home";

const TeacherProfile = ({ data, coursedata, handlePopUp }) => {
	const { modalData, journeyData } = useSelector((state) => state.collections);
	const dispatch = useDispatch();

	const [ratingClass, setRatingClass] = useState(false);

	useEffect(() => {
		if (modalData?.type == "JourneyShimmer") {
			setTimeout(() => {
				dispatch(showModal());
			}, 800);
		}
	}, []);

	const _close = () => {
		dispatch(setProviderModal());
	};


	let courseObj;
	if (coursedata) {
		courseObj = coursedata;
	} else if (data.courseObj) {
		courseObj = data.courseObj;
	}

	useEffect(() => {
		dispatch(courseJourney());
		if (data?.courseObj?.id && data?.courseObj?.id) {
			dispatch(courseJourney(data.courseObj.id));
		}
	}, []);

	const _closeModal = () => {
		dispatch(getCourseDetails());
		dispatch(setCourseModal());
	};

	return (
		<div className="halfPagePOpup coursedetailpopuppage teacherdetailhalfsc">
			<div
				className={`modal d-flex ${ratingClass ? "overflow-hidden" : " "}`}
				id="coursedetailpage"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content max-width-100">
						<div className="modal-header">
							<div className="heading border-0 p-0">
								<h2 className="flex">
									<span>
										<img src={image.information} alt="..." className="mr-2" />
										Course Creator Details
									</span>

									<button
										data-dismiss="modal"
										className="btn btn-primary"
										onClick={() => {
											_close();
										}}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>
						<div className="modal-body p-0">
							<section>
								<div className="Coursebanner">
									<div className="container ">
										<div className="CoursebannerWrap flex align-items-start">
											<div className="bannerleft">
												<div className="coursedtlImage">
													{data?.imageUrl ? (
														<img
															src={
																data?.imageUrl
																	? data?.imageUrl
																	: image.CourseProviderThumb
															}
															alt="..."
														/>
													) : (
														<span className="defaulttexturl">
															{getProfileName(data?.name)}
														</span>
													)}
												</div>
											</div>
											<div className="bannerright coursedetailbnr">
												<div className="PageTitle">
													<div className="flex p-0">
														<div>
															<h3>{data?.name}</h3>
															<ProviderProfile
																data={data}
																teacherPro={"teacherPro"}
																coursedata={coursedata}
																setRatingClass={setRatingClass}
																provId={data}
															/>
															{data?.quote !== "NULL" && data?.quote && (
																<p className="d-flex">
																	<span className=" p-0">{data?.quote}</span>
																</p>
															)}
														</div>
													</div>

													{data?.aboutMe && (
														<div className="CourseDetails">
															<h4 className="mb-2 flex position-relative">About Me
																<p className="your_AudioIocn">
																	<Vicky text={data?.aboutMe} />
																</p>
															</h4>
															<ReadMore limit={500} height={50}>
																{data?.aboutMe}
															</ReadMore>
														</div>
													)}
												</div>
											</div>
										</div>

										<CourseJourney courseObj={courseObj} data={data} />

										{/* {modalData?.type !== "JourneyShimmer" &&
											journeyData?.success ? (
											<>
												{courseObj?.activities?.length > 0 &&
													courseObj?.activities &&
													journeyData?.success && (
														<>
															<div className="CourseDetails pt-3">
																<h4>
																	{" "}
																	{data?.courseObj?.name}{" "}
																	{!data?.courseObj?.isAcademic
																		? "(Level " + data?.courseObj?.level + ")"
																		: ""}
																</h4>
																{courseObj?.activities &&
																	getSequnceSort(courseObj?.activities).map(
																		(val, key) => {
																			return (
																				<React.Fragment key={key}>
																					<CourseContent
																						value={courseObj}
																						data={val}
																						_closeModal={_closeModal}
																						handlePopUp={handlePopUp}
																					/>
																				</React.Fragment>
																			);
																		}
																	)}
															</div>
														</>
													)}
											</>
										) : data?.isProvider ? (
											<ShimmerCategoryList
												items={3}
												categoryStyle="STYLE_SIX"
											/>
										) : (
											""
										)} */}
									</div>
								</div>
							</section>
						</div>
						<div className="modal-footer ">
							<div className="input-group full-Width-group basic_details_form flex m-0">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<button
										type="submit"
										className="btn-blue btn-login d-block mb-5 ml-auto cancelbutton m-0"
										onClick={() => _close()}
									>
										<i className="fa-solid fa-xmark mr-2"></i>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TeacherProfile;

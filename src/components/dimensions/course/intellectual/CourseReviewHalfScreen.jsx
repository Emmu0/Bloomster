import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";
import { Rating } from "react-simple-star-rating";
import {
	dateFormat,
	dateFormatter,
	dateFormatterWithMonthName,
	getProfileName,
	showDateFormate,
} from "../../../../utils/helper";
import { courseRatingModal } from "../../../../redux/actions";
import { addRatingsData, getCourseRating, getCourseReviewRating } from "../../../../redux/actions/APIs";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AddRatings from "../../../widget/AddRatings";

const CourseReviewHalfScreen = () => {
	const dispatch = useDispatch();
	const param = useParams();

	const { courseRatingObj,
		courseRatingView,
		courseRating,
		getSelectedUser,
		defaultChildData,
		dimension,
		selectedDim,
		response,
	} = useSelector(
		(state) => state.collections
	);

	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);
	const [courseObj, setCourseObj] = useState(courseRatingView?.courseObj);
	const [ratingPopup, setRatingPopup] = useState(false);
	const [enrollLoader, setEnrollLoader] = useState(false);
	const [last_index, setlast_index] = useState();


	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const totalPages = Math.ceil(courseRatingObj?.records.length / itemsPerPage);

	const dataToShowRating =
		courseRatingObj?.records &&
		courseRatingObj?.records?.slice(startIndex, endIndex);

	console.log("dataToShowRating : ", dataToShowRating);

	const handleNext = (result) => {
		if (result) {
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};

	const closeRatingPage = () => {
		dispatch(getCourseRating());
		dispatch(courseRatingModal());
		dispatch(getCourseReviewRating());
	};



	const showRating = (result) => {
		if (result) {
			let userId = param?.id ? param?.id : defaultChildData?.id;
			setEnrollLoader(true);
			dispatch(getCourseRating(userId, courseObj?.id));
		}
		else {
			dispatch(getCourseRating());
		}
		setRatingPopup(!ratingPopup);
		// setShowWizad({ type: showWizad.type, status: false });
	};

	useEffect(() => {
		if (courseRating) {
			setEnrollLoader(false);
		}
	}, [courseRating])

	const saveRating = async (rating, userId, data) => {
		let ratingType = "activities";

		if (courseObj?.type === "PROVIDER") {
			ratingType = "course";
		} else {
			ratingType = "activities";
		}

		if (courseObj?.id) {
			dispatch(
				addRatingsData(
					rating,
					courseObj?.id,
					userId,
					ratingType,
					dimension,
					selectedDim,
					param?.id
				)
			);
		}
	};

	useEffect(() => {
		if (response) {
			dispatch(getCourseReviewRating(courseObj?.id));
			showRating();
		}
	}, [response])

	const getUserName = (data) => {
		let getName = data?.split(" ");
		let userName = {};
		userName.firstName = getName[0];
		userName.lastName = getName[1];
		console.log("userName : ", userName);
		return userName;
	}

	const showPrevButton = currentPage > 0;
	const showNextButton = currentPage < totalPages - 1;
	const displayPageNumbers = 2;

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		setlast_index(newPage);
	};

	return (
		<div className="halfPagePOpup coursedetailpopuppage teacherdetailhalfsc ">
			<div className="modal d-flex"
				id="coursedetailpage"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content courseInformation">
						<div className="modal-header">
							<div className="heading border-0 p-0">
								<h2 className="flex">
									<span>
										<img src={image.review_ratingicon} className="mr-2" />
										Parent and Learner Reviews
									</span>
									<button
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() => closeRatingPage()}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>

						<div className="modal-body paymentinfo pt-0">
							{courseRatingObj && courseRatingObj?.records ? (
								<>
									<div className="mb-3">
										{dataToShowRating &&
											dataToShowRating?.map((course, key) => (
												<div className="ReviewComment" key={key}>
													<div className="flexone">
														<div className="RCuserimage">
															{course?.imageUrl ? <img
																className="rounded-circle"
																src={"https://vickyknows.s3-accelerate.amazonaws.com/profile-pics/" + course?.imageUrl}
																alt="..."
															/> : getProfileName(getUserName(course?.name))}
														</div>
														<div className="RCuserName">
															<p>
																<strong>{course?.name}</strong>
															</p>
														</div>
													</div>
													<div className="RCrating flexone">
														<div className="ratepopupp flex position-relative ">
															<div className=" ratepopupp position-relative">
																<div className="RatingWrap1  flex  dropdown-toggle  justify-content-center">
																	<Rating
																		initialValue={course?.rating}
																		transition={false}
																		allowHalfIcon
																		readonly
																		allowHover={false}
																		size={20}
																		emptyColor="#ccc"
																		fillColorArray={[
																			"#f17a45",
																			"#f17a45",
																			"#f17a45",
																			"#f17a45",
																			"#f17a45",
																		]}
																	/>
																</div>
															</div>
														</div>
														<h4 className="ml-3">{course?.headline}</h4>
													</div>
													<div className="RCcommenttxt">
														<p className="RCDate">
															Reviewed on {" " + dateFormatterWithMonthName(course?.createdDate)}
															{/* {document.write(new Date(course?.createdDate).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'}))}*/}
														</p>
														<p>{course?.review}</p>
														{/* <ul>
											   <li>Helpful</li>
											   <li>Report</li>
										   </ul> */}
													</div>
												</div>
											))}
									</div>


									{/* <div class="Settingpagination LRSlidearrow mb-2">									
										<span
											className={`${currentPage === 1 ? "pe-none" : "pointer"}`}
											style={{ color: currentPage === 1 ? "#dad7d7" : "" }}
											onClick={() => handleNext(false)}
											disabled={currentPage === 1}
										>
											{" "}
											<i class="fa-light fa-chevron-left"></i>
										</span>
										<span class="ScenePagination">
											{" "}
											<strong>
												{currentPage} of {totalPages}
											</strong>
										</span>
										<span
											className={`${currentPage >= totalPages ? "pe-none" : "pointer"
												}`}
											style={{
												color: currentPage >= totalPages ? "#dad7d7" : "",
											}}
											onClick={() => handleNext(true)}
											disabled={currentPage >= totalPages}
										>
											<i class="fa-light fa-chevron-right"></i>
										</span>
									</div> */}
									{
										totalPages > 1 && (
											<div className="pagination justify-content-center mt-3">
												<ul>
													<li>
														<span
															className={`flexone ${!showPrevButton ? "disabledIcon" : ""
																}`}
															onClick={() => handlePageChange(0)}
														>
															<i class="fa-light fa-angles-left"></i>
														</span>
													</li>

													<li>
														<span
															className={`flexone ${!showPrevButton ? "disabledIcon" : ""
																}`}
															onClick={() => handlePageChange(currentPage - 1)}
														>
															<i class="fa-light fa-chevron-left mr-1"></i>Prev
														</span>
													</li>

													{[...Array(displayPageNumbers).keys()].map((index) => {
														const pageNumber = currentPage + index;
														console.log("currentPage + index : ", index, currentPage, pageNumber, totalPages);
														return (
															pageNumber < totalPages && (
																<>
																	{pageNumber > 0 &&
																		currentPage + 1 === totalPages && (
																			<li>
																				<span
																					key={pageNumber}
																					onClick={() =>
																						handlePageChange(pageNumber - 1)
																					}
																					className={
																						pageNumber - 1 === currentPage
																							? "btn-primary active"
																							: ""
																					}
																				>
																					{pageNumber}
																				</span>
																			</li>
																		)}

																	<li>
																		<span
																			key={pageNumber}
																			onClick={() => handlePageChange(pageNumber)}
																			className={
																				pageNumber === currentPage
																					? "btn-primary active"
																					: ""
																			}
																		>
																			{pageNumber + 1}
																		</span>
																	</li>
																</>
															)
														);
													})}
													<li>
														<span
															className={`flexone ${!showNextButton ? "disabledIcon" : ""
																}`}
															onClick={() => handlePageChange(currentPage + 1)}
														>
															Next<i class="fa-light fa-chevron-right ml-1"></i>
														</span>
													</li>
													<li>
														<span
															className={`flexone ${!showNextButton ? "disabledIcon" : ""
																}`}
															onClick={() => handlePageChange(totalPages - 1)}
														>
															<i class="fa-light fa-angles-right"></i>
														</span>
													</li>
												</ul>
											</div>
										)
									}
								</>
							) : (
								<ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
							)}
						</div>

						<div className="modal-footer">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
											onClick={() => closeRatingPage()}
										>
											<i className="fa-solid fa-xmark"></i> Close
										</button>
										{courseObj?.isEnrolled &&
											<>
												{enrollLoader ? (
													<button
														className="btn-blue btn-login d-block ml-3 w-auto"
														key={Math.random()}
														disabled
													>
														<span className="RounAnimation mr-1"></span> Please
														Wait...
													</button>
												) : (
													<button
														type="submit"
														className="btn-blue btn-login d-block mb-5"
														onClick={() => showRating(true)}
													>
														<i className="fa-solid fa-paper-plane"></i>Review Course
													</button>
												)}
											</>

										}

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{ratingPopup && courseRating?.records && (
				<AddRatings
					saveRating={saveRating}
					showRating={showRating}
					data={courseObj}
					myRating={courseRating?.records}
					ratingUserId={
						getSelectedUser?.id ? getSelectedUser?.id : defaultChildData?.id
					}

				/>
			)}
		</div>
	);
};
export default CourseReviewHalfScreen;

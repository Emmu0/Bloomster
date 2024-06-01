import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { getSequnceSort } from "../../utils/helper";
import { showSkillModal } from "../../redux/actions/Home";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { showModal } from "../../redux/actions";
const PathwayHalfScreen = ({ courseDetailPage }) => {

	const dispatch = useDispatch();
	const { modalData, getDimJournyCoursesResponse } = useSelector(
		(state) => state.collections
	);

	const [getJourneyCourses, setJourneyCourses] = useState(modalData?.pathwayData);

	const showDimModal = (data, dimName) => {
		data.dimName = dimName;
		dispatch(showSkillModal(data));

	};
	const closePopup = () => {
		dispatch(showModal());
		setJourneyCourses();
	};
	console.log("getJourneyCourses : ", getJourneyCourses, getDimJournyCoursesResponse);
	return (
		<div className="halfPagePOpup SchoolActivityPopup ">
			<div className="modal  show d-flex" id="schoolactivity159" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content courseInformation">
						<div className="modal-header">
							<div className="heading border-0 p-0">
								<h2 className="flex">
									<span>
										<img src={image.pathwaysicon} className="mr-2" />
										{modalData?.pathwayData?.name}
									</span>
									<button
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() => closePopup()}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>
						{getJourneyCourses ? (
							<div className="modal-body paymentinfo pt-0">
								<div class="coveredDimensionpathway d-flex align-items-baseline">
									<h4 class=" mt-3 mb-3">
										<img src={image.CourseTitleIcon} class="mr-2" />
									</h4>
									<div class="skillSeltaglist coursepagelist pl-0 border-0">
										<div class="intrestlisting dimpagetags p-0">
											{
												getSequnceSort(getJourneyCourses?.skills)?.map((skill, sKey) => (
													<div class="instlistitem" key={sKey}>
														<div class="carditem ">
															<label class="Selcheckbox ActiveQQst m-0 p-0">
																<span class="QQtitle flexone pointer">
																	{" "}
																	<h4 class="flex w-100">{skill?.name}</h4>
																</span>
															</label>
														</div>
													</div>
												))
											}
										</div>
									</div>
								</div>
								<div class="CourseardDesc px-0">
									<div class="d-flex welcomscreenContent patwaysbulleys p-0 w-100">
										<span class="pathwat_desc_icon">
											<img src={image.pathwaydesc} alt="" />
										</span>
										<span class="m-0 pathway_htm_desc">
											<p id="textheight" class="pathwatdestxt">
												<span dangerouslySetInnerHTML={{
													__html: getJourneyCourses?.description
												}} />
											</p>
										</span>
									</div>
								</div>
								<div className="gridSection">
									{
										getSequnceSort(getJourneyCourses?.skills)?.map((skill, sKey) => (
											getSequnceSort(skill?.courses)?.map((course, cKey) => (
												<div className="JourneyCoursecard newCourseCard pathwaysCourseCard" key={cKey}>
													<div class="GridCardTitle">
														<h3 data-toggle="modal" data-target="#datapage">
															<div class="pointer cardSubtitles" onClick={() => courseDetailPage(course)} >
																<img src={image.mortarboard} alt="" className="mr-2" />
																{course?.name}
																<span>
																	<i class="fa-solid fa-up-right-from-square"></i>
																</span>
															</div>
														</h3>
													</div>
													<div className="Gridcard SocialGridcard border-0 mt-0 ">
														<div className="Gridsocialsec">
															<div className="GridiamgeCard">
																<div className="Gridimage">
																	<img src={course?.image ? course?.image : image.mathMatics} alt="" />
																</div>
															</div>
														</div>
														<div className="GridDetails ">
															<div class="GridCardTitle border-0">
																<h3 className="pl-0 pb-2">
																	<div>
																		<p class="p-0">
																			<span class="flex">
																				<img
																					src="/static/media/CourseTitleIcon.0005e39635fd9f8ee529.png"
																					class="mr-2"
																					alt=""
																				/>
																				{skill?.name}
																				<img
																					src="/static/media/chat-icon.2a607af3ca378ac033c1.png"
																					class="ml-2 chat_icon mt-0 pointer"
																					alt=""
																					onClick={() => showDimModal(skill, skill?.dimName)}
																				/>
																			</span>
																		</p>
																	</div>
																</h3>
															</div>
															<p>
																{course?.description}
															</p>
														</div>
													</div>
												</div>
											))
										))
									}
								</div>
							</div>
						) : (
							<ShimmerCategoryList
								items={3}
								categoryStyle="STYLE_SIX"
							/>
						)}

						<div className="modal-footer">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
											onClick={() => closePopup()}
										>
											<i className="fa-solid fa-xmark"></i> Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PathwayHalfScreen;

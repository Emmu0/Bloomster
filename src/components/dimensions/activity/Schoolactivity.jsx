import React, { useState } from "react";
import * as image from "../../../resources/images";
import jQuery from "jquery";
import { SelectPicker, Rating } from "../../../utils/Packages";
import "rsuite/dist/rsuite.css";
import OtpInput from "react-otp-input";
import RangeSlider1 from "../../controls/RangeSlider1";
import { NavLink } from "react-router-dom";
import { DatePicker } from "../../../utils/Packages";
import RoundProgress from "../../controls/RoundProgress";
import { isImage } from "rsuite/esm/utils/previewFile";
import RatingWizad from "../../widget/RatingWizad";
const Schoolactivity = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [text, settext] = useState("View More");
	const chooseTab = (data) => {
		setActiveTab(data);
	};
	const [isActive, setActive] = useState(false);

	const toggledClass = () => {
		setActive(!isActive);
		if (text === "View More") {
			settext(<i className="fa-light fa-circle-minus mr-2"></i> + "View Less");
		} else {
			settext(<i className="fa-light fa-circle-plus mr-2"></i> + "View More");
		}
	};
	const datax = [
		"Eugenia",
		"Bryan",
		"Linda",
		"Nancy",
		"Lloyd",
		"Alice",
		"Julia",
		"Albert",
	].map((item) => ({
		label: item,
		value: item,
		role: Math.random() > 0.5 ? "Owner" : "Guest",
	}));
	function compare(a, b) {
		let nameA = a.toUpperCase();
		let nameB = b.toUpperCase();

		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	}
	const data = [
		"Eugenia",
		"Bryan",
		"Linda",
		"Nancy",
		"Lloyd",
		"Alice",
		"Julia",
		"Albert",
	].map((item) => ({
		label: item,
		value: item,
		role: Math.random() > 0.5 ? "Owner" : "Guest",
	}));
	jQuery(".leftClosebar").on("click", function () {
		jQuery(this).parents(".TopicSpeclist").removeClass("JourneyCardShow");
	});
	jQuery(".courseJourneyCard").on("click", function () {
		jQuery(this).parents(".TopicSpeclist").addClass("JourneyCardShow");
	});
	jQuery(".CourseJourneyicon").on("click", function () {
		jQuery(this).parent(".coursejounercrditem").addClass("CourseJItemActive");
		jQuery(this)
			.parent(".coursejounercrditem")
			.siblings()
			.removeClass("CourseJItemActive");
	});
	const [otp, setotp] = useState("");
	const handleChange = (otp) => setotp(otp);
	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#schoolactivity71"
			>
				Launch demo modal
			</button>

			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity132"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.mortarboard} className="mr-2" alt="" />
											Enroll: Relationship Building Basics
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body parents_Support p-0">
								<div className="text-center px-3 py-2 flex flex-wrap position-relative">
									{/* <div class="ljourney w-100 skillEvaluatoin">
                    <div class="ljourneysteps">
                      <div class="ljourneyitems flex">
                        <span class="ljdimension ljsocial">
                          <span>1</span>
                          <span class="tracks"></span>
                        </span>
                        <span class="ljdimension ">
                          <span>2</span>
                          <span class="tracks"></span>
                        </span>
                        <span class="ljdimension ">
                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </div> */}
									<div className="parents_Support">
										<h3>Welcome to Caitlin’s journey of growth and empowerment with our course –
											Forgiveness Foundations: Building a Brighter Future.
										</h3>
										<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
											<h4 className="flex heighlitedboxpopup">
												We know you want to be assured you’ve done everything
												possible for Caitlin. Here are some ideas on how you can
												better support their learning journey.
											</h4>
											<ul>
												<li>
													{" "}
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Talk with your child about the importance and goal
														of their participation in this learning.
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Encourage your child to be a mindful learner who
														paces their learning to include reflection
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Express the significance of good communication
														skills now and in the future.
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Engage your child in reflective conversations about
														why Franki, the main character, wants to become an
														expert communicator
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Reflect with your child on the similarities that
														exist between them and Frank, the main character's,
														efforts and thinking
													</h4>
												</li>
											</ul>
										</div>
									</div>
									<div class="ScenecerelateddQuiz Analysistxt p-0 w-100 border-0">
										<div class="signupType mt-3">
											{/* <h4 class="mb-3">
													<span class="m-0">
														<img
															src={image.SceneQuestionicon}
															className=""
															alt=""
														/>
													</span>
													<strong class="">
														What’s your first thought? What is the most
														appropriate first step for you as a leader in this
														situation?
													</strong>
												</h4> */}

											<div class="flexone mb-3">
												<label class="Selcheckbox m-0 ActiveQQst">
													<span class="QQtitle">
														I will collaborate with and support Caitlin
													</span>
													<input type="radio" name="skill0" />
													<span class="checkmark"></span>
												</label>
											</div>
											<div class="flexone mb-3">
												<label class="Selcheckbox m-0 ActiveQQst">
													<span class="QQtitle">
														I am ok with Caitlin fending for themselves
													</span>
													<input type="radio" name="skill0" />
													<span class="checkmark"></span>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-end">
											<button
												type="button"
												data-toggle="modal"
												data-target="#schoolactivity133"
												className="btn-blue btn-login d-block mb-5  m-0"
											>
												Next<i class="fa-solid fa-arrow-right ml-2"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity133"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.mortarboard} className="mr-2" alt="" />
											Enroll: Relationship Building Basics
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body parents_Support p-0">
								<div className="text-center px-3 py-2 flex flex-wrap position-relative">
									{/* <div class="ljourney w-100 skillEvaluatoin">
                    <div class="ljourneysteps">
                      <div class="ljourneyitems flex">
                        <span class="ljdimension ljsocial">
                          <span>1</span>
                          <span class="tracks"></span>
                        </span>
                        <span class="ljdimension ljsocial">
                          <span>2</span>
                          <span class="tracks"></span>
                        </span>
                        <span class="ljdimension ">
                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </div> */}
									<div className="parents_Support">
										{/* <h3>Welcome to Caitlin’s journey of growth and empowerment with our course – 
								    Forgiveness Foundations: Building a Brighter Future.
								</h3> */}
										<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
											{/* <h4 className="flex heighlitedboxpopup">
                        We encourage you to reflect on your own life experiences
                        and be open to connecting with Caitlin on a deeper
                        level. Here are some insights to get you thinking.
                      </h4> */}
											{/* <ul>
                        <li>
                          {" "}
                          <i class="fa-solid fa-play mr-2 mt-1"></i>
                          <h4>
                            Skill Development & Growth: Think back to a time you
                            had to make a critical decision on your own. How did
                            it make you feel? Your experience can help guide
                            your child in sharpening their critical thinking
                            skills.
                          </h4>
                        </li>
                        <li>
                          <i class="fa-solid fa-play mr-2 mt-1"></i>
                          <h4>
                            Open-Mindedness & Asking Questions: Ever had an aha
                            moment when new information changed your mind? Use
                            that memory to empathize with your child's evolving
                            viewpoints.
                          </h4>
                        </li>
                        <li>
                          <i class="fa-solid fa-play mr-2 mt-1"></i>
                          <h4>
                            Problem Solving & Outliers: Reflect on those quirky
                            outliers you've encountered—those unique experiences
                            or people that made you think outside the box.
                            They're more important than you might think in
                            helping your child think outside of the box, too!
                          </h4>
                        </li>
                      </ul> */}
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-between">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5  m-0 back_button"
											>
												<i class="fa-solid fa-arrow-left mr-2"></i>Back
											</button>
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5  m-0"
											>
												Next<i class="fa-solid fa-arrow-right ml-2"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity134"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.senstivedata} className="mr-2" alt="" />
											Sensitive topics covered in this course
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body parents_Support p-0">
								<div className="text-center px-3 py-2 flex flex-wrap position-relative">
									{/* <div class="ljourney w-100 skillEvaluatoin">
										<div class="ljourneysteps">
											<div class="ljourneyitems flex">
												<span class="ljdimension ljsocial">
													<span>1</span>
													<span class="tracks"></span>
												</span>
												<span class="ljdimension ">
													<span>2</span>
													<span class="tracks"></span>
												</span>
												<span class="ljdimension ">
													<span>3</span>
													
												</span>
											
											</div>
										</div>
								</div> */}
									<div className="parents_Support">
										{/* <h3>Welcome to Caitlin’s journey of growth and empowerment with our course – 
								    Forgiveness Foundations: Building a Brighter Future.
								</h3> */}
										<div className="welcomscreenContent lockContentPOpups p-0 w-100">
											<h4 className="flex heighlitedboxpopup pt-0 pb-0 pl-0">
												<ul className="p-0">
													<li>
														{" "}
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Talk with your child about the importance and goal
															of their participation in this learning. Talk with your child about the importance and goal
															of their participation in this learning. Talk with your child about the importance and goal
															of their participation Talk with your child about the importance and goal
															of their participation in thi
														</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Encourage your child to be a mindful learner who
															paces their learning to include reflection  Encourage your child to be a mindful learner who
															paces their learning to include reflection  Encourage your child to be a mindful learner who
															paces their learning to include reflection
														</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Express the significance of good communication
															skills now and in the future.  Encourage your child to be a mindful learner who
															paces their learning to include reflection  Encourage your child to be a mindful learner who
															paces their learning to include reflection
														</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Engage your child in reflective conversations about
															why Franki, the main character, wants to become an
															expert communicator  Encourage your child to be a mindful learner who
															paces their learning to include reflection
														</h4>
													</li>
													<li>
														<i class="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Reflect with your child on the similarities that
															exist between them and Frank, the main character's,
															efforts and thinking  Encourage your child to be a mindful learner who
															paces their learning to include reflection  Encourage your child to be a mindful learner who
															paces their learning to include reflection
														</h4>
													</li>
												</ul>
											</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-end">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity135"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img
												src={image.collabrationicon}
												className="mr-2"
												alt=""
											/>
											Here are some insights for making a deeper connection with
											Caitlin
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body parents_Support p-0 parent_collabtaremenu">
								<div className="text-center px-3 py-2 flex flex-wrap position-relative">
									{/* <div class="ljourney w-100 skillEvaluatoin">
										<div class="ljourneysteps">
											<div class="ljourneyitems flex">
												<span class="ljdimension ljsocial">
													<span>1</span>
													<span class="tracks"></span>
												</span>
												<span class="ljdimension ljsocial">
													<span>2</span>
													<span class="tracks"></span>
												</span>
												<span class="ljdimension ">
													<span>3</span>
													
												</span>
											
											</div>
										</div>
								</div> */}
									<div className="parents_Support">
										{/* <h3>Welcome to Caitlin’s journey of growth and empowerment with our course – 
								    Forgiveness Foundations: Building a Brighter Future.
								</h3> */}
										<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
											<h4 className="flex heighlitedboxpopup">
												As Caitlin embarks on this adventure, here are some
												suggestions to create a nurturing home environment that
												supports Caitlin's learning:
											</h4>
											<ul>
												<li>
													{" "}
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Be Actively Involved: Your presence is a cornerstone
														that builds your child's confidence and curiosity.
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Open Dialogues, Not Monologues: Aim for
														conversations that are true dialogues, helping to
														deepen mutual understanding.
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Celebrate the Process: Acknowledge the importance of
														the journey itself, not just the end goals.
													</h4>
												</li>
											</ul>
										</div>
										<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
											<h4 className="flex heighlitedboxpopup">
												We encourage you to reflect on your own life experiences
												and be open to connecting with your child on a deeper
												level. Here are some insights to get you thinking.
											</h4>
											<ul>
												<li>
													{" "}
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Skill Development & Growth: Think back to a time you
														had to make a critical decision on your own. How did
														it make you feel? Your experience can help guide
														your child in sharpening their critical thinking
														skills.
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Open-Mindedness & Asking Questions: Ever had an aha
														moment when new information changed your mind? Use
														that memory to empathize with your child's evolving
														viewpoints.
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Problem Solving & Outliers: Reflect on those quirky
														outliers you've encountered—those unique experiences
														or people that made you think outside the box.
														They're more important than you might think in
														helping your child think outside of the box, too!
													</h4>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-end">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="coursecardmenulocked   AddChildPopup lockedcontentpopup">
				<div
					className="modal fade"
					role="dialog"
					id="schoolactivity136"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header NuggetPopupTitle">
								<div className="heading border-0 w-100 NuggetVickyImage p-0">
									<h4 className="flex">
										<span>
											{" "}
											<img
												src={image.locked_icon}
												alt=""
												className="mr-2 p-1"
											/>
											Tips to better support Adam
										</span>
										<button className="btn btn-primary">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h4>
								</div>
							</div>

							<div className="modal-body Subject_Curriculam  flex align-items-center feeAnalysispopup">
								<div className="welcomscreenContent">
									<ul>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												{" "}
												We've gathered valuable tips to enhance your support for
												Adam on their learning journey.
											</h4>
										</li>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												{" "}
												You can access them when you enroll Adam in this course.
											</h4>
										</li>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>{" "}
											<h4>
												Click 'Enroll' to kickstart Adam's learning journey.
											</h4>
										</li>
									</ul>
								</div>
							</div>

							<div className="modal-footer closebtnreset">
								<div className="form-group BDsubmitbutton d-flex m-0 ">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
									>
										<i className="fa-solid fa-xmark mr-2"></i> Close
									</button>
									<button
										type="button"
										className="btn-blue btn-login d-block ml-0 w-auto"
									>
										<i className="fa-solid fa-paper-plane mr-2"></i>
										Enroll
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" coursecardmenulocked  AddChildPopup lockedcontentpopup">
				<div
					className="modal fade"
					role="dialog"
					id="schoolactivity137"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header NuggetPopupTitle">
								<div className="heading border-0 w-100 NuggetVickyImage p-0">
									<h4 className="flex">
										<span>
											{" "}
											<img
												src={image.locked_icon}
												alt=""
												className="mr-2 p-1"
											/>
											Insights to strengthen your connection with Adam
										</span>
										<button className="btn btn-primary">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h4>
								</div>
							</div>

							<div className="modal-body Subject_Curriculam  flex align-items-center feeAnalysispopup">
								<div className="welcomscreenContent">
									<ul>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												{" "}
												We've gathered valuable tips and insights to strengthen
												your connection with Adam.
											</h4>
										</li>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												{" "}
												You can access them when you enroll Adam in this course.
											</h4>
										</li>

										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>{" "}
											<h4>
												Click 'Enroll' to kickstart Adam's learning journey.
											</h4>
										</li>
									</ul>
								</div>
							</div>

							<div className="modal-footer closebtnreset">
								<div className="form-group BDsubmitbutton d-flex m-0 ">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
									>
										<i className="fa-solid fa-xmark mr-2"></i> Close
									</button>
									<button
										type="button"
										className="btn-blue btn-login d-block ml-0 w-auto"
									>
										<i className="fa-solid fa-paper-plane mr-2"></i>
										Enroll
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" coursecardmenulocked  AddChildPopup lockedcontentpopup">
				<div
					className="modal fade"
					role="dialog"
					id="schoolactivity138"
					tabIndex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg">
						<div className="modal-content  ">
							<div className="modal-header NuggetPopupTitle">
								<div className="heading border-0 w-100 NuggetVickyImage p-0">
									<h4 className="flex">
										<span>
											{" "}
											<img
												src={image.locked_icon}
												alt=""
												className="mr-2 p-1"
											/>
											Discover new life skills Adam will learn in this course
										</span>
										<button className="btn btn-primary">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h4>
								</div>
							</div>

							<div className="modal-body Subject_Curriculam  flex align-items-center feeAnalysispopup">
								<div className="welcomscreenContent">
									<ul>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												{" "}
												We've created a tool for you to explore the new life
												skills Adam will learn in this course.
											</h4>
										</li>
										<li>
											<i className="fa-solid fa-play mr-2 mt-1"></i>
											<h4>
												It will be available as soon as Adam completes this
												course.
											</h4>
										</li>
									</ul>
								</div>
							</div>

							<div className="modal-footer closebtnreset">
								<div className="form-group BDsubmitbutton d-flex m-0 ">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
									>
										<i className="fa-solid fa-xmark mr-2"></i> Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="halfPagePOpup SchoolActivityPopup ">
				<div className="modal fade" id="schoolactivity121" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0">
									<h2 className="flex">
										<span>
											<img src={image.subscription} className="mr-2" />
											Subscription
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body paymentinfo pt-0">
								<div class="tabgrid w-100 mb-2 pb-2"><ul>
									<li class="tabs1 active-tabs "><img src="/static/media/planicon.906067b940b284e67fbe.png" alt="" />Plan</li>
								</ul></div>
								<h3 className="SplNotiPlan">
									<i class="fa-regular fa-triangle-exclamation mr-2"></i>
									You purchased your subscription from an iOS device. To manage your subscription please use your iOS device.

								</h3>
								<div class="chooseSubscription">
									<div class="form-check form-switch d-flex justify-content-center text-center p-0 subscriptionChoose"><label class="form-check-label d-flex w-90 m-auto p-0" for="flexSwitchCheckDefault"><span>Monthly</span><span class="position-relative">Annually <span class="saveuptomsg">Save 17% per year</span> </span></label><input class="form-check-input pointer" type="radio" id="planType" checked="false" /></div></div>
								<div class="subscriptioncardwrap flex justify-content-center flex-wrap">
									<div class="subscriptioncard mt-3  pointer cardDisabled ">
										<div class="subscriptioncardtitle">
											<h4>Single Child - Annually</h4>
											<div class="signupType m-0">
												<div class="flexone  filtetags w-100">
													<label class="Selcheckbox ActiveQQst m-0 w-100">
														<input type="radio" id="Public" name="dimension" value="PUBLIC" />
														<span class="checkmark"></span>
													</label>
												</div>
											</div>
											<div class="signupType m-0">
												<div class="flexone filtetags w-100">
													<label class="Selcheckbox ActiveQQst m-0 w-100"><input type="radio" id="Public" name="dimension" value="PUBLIC" checked="" />
														<span class="checkmark"></span>
													</label>
												</div>
											</div>
											<div class="cardpricewrap">
												<h2> $199.99<span class="d-block text-center">per year</span></h2>
											</div><p class="savedprice"><strong> </strong></p><p class="savedprice"><strong> Save $40 per year</strong></p><p><br /></p></div><div class="Subscriptioncardconlist "><ul class=""><li> <img src={image.rightCheck} alt="" />Unlimited access to all content</li><li> <img src={image.rightCheck} alt="" />Access for one child</li></ul></div></div><div class="subscriptioncard mt-3 SubsActivecard 
                           pointer ">
										<div class="subscriptioncardtitle"><h4>Family - Annually</h4><div class=""><div class="curruntplanstrip"><p>Current Plan</p></div></div><div class="signupType m-0"><div class="flexone  filtetags w-100"><label class="Selcheckbox ActiveQQst m-0 w-100"><input type="radio" id="Public" name="dimension" value="PUBLIC" checked /><span class="checkmark"></span></label></div></div><div class="cardpricewrap"><h2> $399.99<span class="d-block text-center">per year</span></h2></div><p class="savedprice"><strong> Save $80 per year</strong></p><p class="savedprice"><strong> </strong></p></div><div class="Subscriptioncardconlist "><ul class=""><li> <img src={image.rightCheck} alt="" />Unlimited access to all content</li><li> <img src={image.rightCheck} alt="" />No limit on the number of children</li></ul></div></div></div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="halfPagePOpup SchoolActivityPopup ">
				<div className="modal fade" id="schoolactivity142" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0">
									<h2 className="flex">
										<span>
											<img src={image.review_ratingicon} className="mr-2" />
											Parent and Learner Reviews
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body paymentinfo pt-0">
								<div className="mb-3">
									<div className="ReviewComment">
										<div className="flexone">
											<div className="RCuserimage">
												<img src={image.userProfile} />

											</div>
											<div className="RCuserName">
												<p><strong>Virat Sharma</strong></p>
											</div>
										</div>
										<div className="RCrating flexone">
											<div className="ratepopupp flex position-relative ">
												<div className=" ratepopupp position-relative">
													<div className="RatingWrap1  flex  dropdown-toggle  justify-content-center">
														<Rating
															initialValue={2}
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
											<h4 className="ml-3">Very Nice Course</h4>
										</div>
										<div className="RCcommenttxt">
											<p className="RCDate">Reviewed on February 7, 2024</p>
											<p>The product purchased in August 2022 worked well till recently. For the last 3 months water started leaking heavily from the window, where the water level indicator is placed. It looks like the plastic part there is giving away. Manfacurer may take a note of this and do corrections for this model.</p>
											{/* <ul>
									<li>Helpful</li>
									<li>Report</li>
								</ul> */}
										</div>
									</div>
									<div className="ReviewComment">
										<div className="flexone">
											<div className="RCuserimage">
												<img src={image.user} />

											</div>
											<div className="RCuserName">
												<p><strong>Virat Sharma</strong></p>
											</div>
										</div>
										<div className="RCrating flexone">
											<div className="ratepopupp flex position-relative ">
												<div className=" ratepopupp position-relative">
													<div className="RatingWrap1  flex  dropdown-toggle  justify-content-center">
														<Rating
															initialValue={2}
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
											<h4 className="ml-3">Very Nice Course</h4>
										</div>
										<div className="RCcommenttxt">
											<p className="RCDate">Reviewed on February 7, 2024</p>
											<p>The product purchased in August 2022 worked well till recently. For the last 3 months water started leaking heavily from the window, where the water level indicator is placed. It looks like the plastic part there is giving away. Manfacurer may take a note of this and do corrections for this model.</p>
											{/* <ul>
									<li>Helpful</li>
									<li>Report</li>
								</ul> */}
										</div>
									</div>
									<div className="ReviewComment">
										<div className="flexone">
											<div className="RCuserimage">
												<img src={image.unsubscribe_nugget} />

											</div>
											<div className="RCuserName">
												<p><strong>Virat Sharma</strong></p>
											</div>
										</div>
										<div className="RCrating flexone">
											<div className="ratepopupp flex position-relative ">
												<div className=" ratepopupp position-relative">
													<div className="RatingWrap1  flex  dropdown-toggle  justify-content-center">
														<Rating
															initialValue={2}
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
											<h4 className="ml-3">Very Nice Course</h4>
										</div>
										<div className="RCcommenttxt">
											<p className="RCDate">Reviewed on February 7, 2024</p>
											<p>The product purchased in August 2022 worked well till recently. For the last 3 months water started leaking heavily from the window, where the water level indicator is placed. It looks like the plastic part there is giving away. Manfacurer may take a note of this and do corrections for this model.</p>
											{/* <ul>
									<li>Helpful</li>
									<li>Report</li>
								</ul> */}
										</div>
									</div>
									<div className="ReviewComment">
										<div className="flexone">
											<div className="RCuserimage">
												<img src={image.well_dev_icon} />

											</div>
											<div className="RCuserName">
												<p><strong>Virat Sharma</strong></p>
											</div>
										</div>
										<div className="RCrating flexone">
											<div className="ratepopupp flex position-relative ">
												<div className=" ratepopupp position-relative">
													<div className="RatingWrap1  flex  dropdown-toggle  justify-content-center">
														<Rating
															initialValue={2}
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
											<h4 className="ml-3">Very Nice Course</h4>
										</div>
										<div className="RCcommenttxt">
											<p className="RCDate">Reviewed on February 7, 2024</p>
											<p>The product purchased in August 2022 worked well till recently. For the last 3 months water started leaking heavily from the window, where the water level indicator is placed. It looks like the plastic part there is giving away. Manfacurer may take a note of this and do corrections for this model.</p>
											{/* <ul>
									<li>Helpful</li>
									<li>Report</li>
								</ul> */}
										</div>
									</div>
									<div className="ReviewComment">
										<div className="flexone">
											<div className="RCuserimage">
												<img src={image.user} />

											</div>
											<div className="RCuserName">
												<p><strong>Virat Sharma</strong></p>
											</div>
										</div>
										<div className="RCrating flexone">
											<div className="ratepopupp flex position-relative ">
												<div className=" ratepopupp position-relative">
													<div className="RatingWrap1  flex  dropdown-toggle  justify-content-center">
														<Rating
															initialValue={2}
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
											<h4 className="ml-3">Very Nice Course</h4>
										</div>
										<div className="RCcommenttxt">
											<p className="RCDate">Reviewed on February 7, 2024</p>
											<p>The product purchased in August 2022 worked well till recently. For the last 3 months water started leaking heavily from the window, where the water level indicator is placed. It looks like the plastic part there is giving away. Manfacurer may take a note of this and do corrections for this model.</p>
											{/* <ul>
									<li>Helpful</li>
									<li>Report</li>
								</ul> */}
										</div>
									</div>
								</div>
								<div class="Settingpagination LRSlidearrow mb-2"><span class="pe-none" disabled=""> <i class="fa-light fa-chevron-left"></i></span><span class="ScenePagination"> <strong>1 of 6</strong></span><span class="pointer"><i class="fa-light fa-chevron-right"></i></span></div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
											>
												<i className="fa-solid fa-xmark"></i> Close
											</button>
											<button
												type="submit"
												className="btn-blue btn-login d-block mb-5"
											>
												<i className="fa-solid fa-paper-plane"></i>Review Course
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="halfPagePOpup SchoolActivityPopup parentQuizsanalysis ljpopups">
				<div className="modal fade" id="schoolactivity121" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0">
									<h2 className="flex">
										<span>
											<img src={image.skills_img} className="mr-2" /> Skill
											Evaluation: Parent-Child
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body evalscreenfst">
								<div className="subscriptioncardwrap feeAnalysispopup skillEvaluatoin p-0">
									<h3 className="mb-4 mt-3 ml-3 pt-0">
										Here’s a tool to help you assess key concepts Adam learned
										in the course The Leap to Leadership.
									</h3>
									<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
										<h4 className="mb-3">
											<strong>Key concepts Adam learned:</strong>
										</h4>
										<ul className="p-0 w-100">
											<li>
												{" "}
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Leadership involves leading and listening.</h4>
											</li>
											<li>
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>
													Leaders must develop problem-solving and
													decision-making skills.
												</h4>
											</li>
											<li>
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>
													Leaders must prioritize respect and inclusivity.
												</h4>
											</li>
											<li>
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>
													Leaders must exercise adaptability and resilience.
												</h4>
											</li>
										</ul>
										<ul
											className="p-0 w-100 panel-collapse"
											id="keyskilldropdwn"
										>
											<li>
												{" "}
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Bullet 1</h4>
											</li>
											<li>
												{" "}
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Bullet 2</h4>
											</li>
											<li>
												{" "}
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Bullet 3</h4>
											</li>
											<li>
												{" "}
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Bullet 4</h4>
											</li>
											<li>
												{" "}
												<i class="fa-solid fa-play mr-2 mt-1"></i>
												<h4>Bullet 5</h4>
											</li>
										</ul>
									</div>
									<div class="ljourney">
										<h4 className="mt-4 mb-4 pt-3 ml-3">
											Use this scenario to get the conversation with Adam
											started.
										</h4>
										<div class="ScenecerelateddQuiz Analysistxt pt-0 pb-0">
											<p className="seneriotext">
												<i class="fa-solid fa-quote-left"></i>
												<em>
													You're in a classroom engaged in a group discussion.
													You and your peers are planning to complete a history
													project. However, two group members are not
													participating and are distracted by cell phones. They
													say they will not help and that you and another
													student should plan on doing all of the work on your
													own.
												</em>{" "}
												<i class="fa-solid fa-quote-right"></i>
											</p>
											<p className="mt-4 pt-3">
												{" "}
												Based on the scenario above you will ask Adam a few
												questions. Click ‘Next’ to begin.{" "}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion">
											<button
												type="button"
												data-toggle="modal"
												data-target="#schoolactivity122"
												className="btn-blue btn-login d-block mb-5  m-0"
											>
												Next<i class="fa-solid fa-arrow-right ml-2"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="newinfo_popupdimension newEnrollCoursPopup">
				<div className="modal fade" id="schoolactivity139" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.mortarboard} className="mr-2" />
											Enroll: Course Name
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body p-0modal-body parents_Support p-0">
								<div className="newenrollepopup mt-2">
									<h3
										data-toggle="collapse"
										href="#newenrollepopup"
										aria-expanded="true"
										class="flex HomeProgresstilt"
									>
										Course Settings

									</h3>
									<div
										className="newenrollepopup panel-collapse collapse show "
										id="newenrollepopup"
									>
										<h4 className="mb-3">
											For optimal learning, we recommend you keep knowledge
											checks and section exercises required:
											{/* <img src={image.chat_icon} className="chat_icon" alt="" /> */}
										</h4>
										<div className="newcoursesetting flex  align-items-start">
											<div>
												<h4 className="p-0">
													Knowledge Checks and Section Exercises Required
												</h4>
												<p>
													You can change this from the settings section in your
													profile.
												</p>
											</div>
											<div class="form-check form-switch m-0 flex  p-0 mt-2">
												<label
													class="form-check-label pointer"
													for="flexSwitchCheckDefault"
												></label>
												<input
													class="form-check-input avltogglebutton pointer"
													type="radio"
													role="switch"
													checked
													id="flexSwitchCheckDefault"
												/>
											</div>
										</div>
										<h5 class="text-left pl-0 pt-3 pb-3"><i class="fa-regular fa-note mr-2"></i>Note: Watch the entire video / illustration to earn 10 points and get completion credit!</h5>
									</div>
								</div>


							</div>
							<div className="modal-footer dontshowagain">
								<div className="form-group BDsubmitbutton m-0 d-flex">
									<div className="buttonDistribotion justify-content-start">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
										>
											<i className="fa-solid fa-xmark"></i> Close
										</button>
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5"
										>
											<i class="fa-solid fa-paper-plane mr-2"></i>Enroll
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="newinfo_popupdimension newEnrollCoursPopup course_progress">
				<div className="modal fade" id="schoolactivity47" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.mortarboard} className="mr-2" />
											Course Progress
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body p-0">

								<div className="newenrolledpopup">

									<div className="newenrollepopup"
										id=""
									>
										<h3 className="mb-3 mt-3">
											Your course progress is calculated based on Proficiency,
											Completion, and Pace.{" "}
										</h3>
										<div className="Course_evaluation">
											{/* <p className="dmskills">
                    <strong>Skill</strong>: Conflict Resolution
                  </p> */}

											<div className="skillprogrs">
												<span>Progress</span>
												{/* <p>
                      <strong>Course Progress </strong>{" "}
                      <img
                        src={image.chat_icon}
                        alt=""
                        className="pl-1 chat_icon"
                      />
                    </p> */}
											</div>

											<div className="progressstyl">
												<span className="proficencyprog">
													<img src={image.blueArrow} alt="" />
													<div className="position-relative Coursecompprcent m-auto">
														<p className="">
															<RoundProgress data={60} className="m-1" />
														</p>
													</div>
													<p>Proficiency</p>
												</span>
												<span className="CompltProgress">
													<img src={image.smallArrow} alt="" />
													<div className="position-relative Coursecompprcent m-auto">
														<p className="">
															<RoundProgress data={30} className="m-1" />
														</p>
													</div>
													<p>Completion</p>
												</span>
												<span className="TimProgress">
													<img src={image.blueArrow} alt="" />
													<div className="position-relative Coursecompprcent m-auto">
														<p className="">
															<RoundProgress data={10} className="m-1" />
														</p>
													</div>
													<p>Pace</p>
												</span>
											</div>
										</div>
										<h4 className="recommendtxt">Recommended Pace </h4>
										<div className="coursesteps">
											<ul className="flex">
												<li>
													<span className="startsteps">Start</span>

													<span className="Completeindays">
														<p>4 days</p>
														<img src={image.smallArrow} alt="" />
													</span>
													<p className="m-0">
														<strong>Today</strong>
													</p>
												</li>
												<li>
													<span className="Coursesteps">S1</span>
													<span className="Completeindays">
														<p>4 days</p>
														<img src={image.smallArrow} alt="" />
													</span>
													<p>08/11/2023</p>
												</li>
												<li>
													{" "}
													<span className="Coursesteps">S2</span>
													<span className="Completeindays">
														<p>4 days</p>
														<img src={image.smallArrow} alt="" />
													</span>
													<p>08/15/2023</p>
												</li>
												<li>
													{" "}
													<span className="Coursesteps">S3</span>
													<span className="Completeindays">
														<p>4 days</p>
														<img src={image.smallArrow} alt="" />
													</span>
													<p>08/19/2023</p>
												</li>
												<li className="Coursesteps">
													<span className="Coursesteps">S4</span>
													<span className="Completeindays"></span>
													<p>08/23/2023</p>
												</li>
											</ul>
										</div>
										<h5 class="text-left pl-0 pt-3 pb-3"><i class="fa-regular fa-note mr-2"></i>Note: Watch the entire video / illustration to earn 10 points and get completion credit!</h5>
									</div>
								</div>
							</div>
							<div className="modal-footer dontshowagain">
								<div className="form-group BDsubmitbutton m-0 d-flex">
									<div className="buttonDistribotion justify-content-start">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
										>
											<i className="fa-solid fa-xmark"></i> Close
										</button>
										{/* <button
											type="button"
											className="btn-blue btn-login d-block mb-5"
										>
											<i class="fa-solid fa-paper-plane mr-2"></i>Enroll
										</button> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="sharepopup newslatterpopup AreyousurePopup">
				<div className="modal fade" id="schoolactivity143" role="dialog">
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
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body">
								<div className="sharewithfrnd pb-3">
									<h4 className="mb-3">
										Show your friends what you have learnt on Bloomster </h4>
									<div className="Share_your_Certificate">
										<ul>
											<li>
												<a
													href="https://www.facebook.com/"
													target="_blank"
												>
													<i className="fa-brands fa-facebook"></i>

												</a>
												Facebook
											</li>


											<li>
												<a
													href="https://linkedin.com/"
													target="_blank"
												>
													<i class="fa-brands fa-linkedin"></i>
												</a>
												LinkedIn

											</li>
											<li>
												<a
													href="https://www.twitter.com/"
													target="_blank"
												>
													<i class="fa-brands fa-square-x-twitter"></i>
												</a>
												X (Twitter)
											</li>
											<li>
												<a
													href="https://web.whatsapp.com/"
													target="_blank"
												>
													<i class="fa-brands fa-square-whatsapp"></i>
												</a>
												WhatsApp

											</li>
											<li>
												<a
													href="mailto:"
													target="_blank"
												>
													<i class="fa-solid fa-envelope"></i>
												</a>
												Email
											</li>
										</ul>
										<div className="input-group">
											<div className="form-group">
												<input type="text" className="form-control" value="https://bloomster.com/hs-fs/hubfs/4.jpg?width=365&name=4.jpg" />
												<span className="CopyTextbtn">Copy</span>
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
			<div class="fade  AddChildPopup modal  invite_frnd" role="dialog" id="schoolactivity144">
				<div class="modal-dialog"><div class="modal-content">
					<div class="modal-header">
						<div class="modal-title flex h4">
							<img src={image.invite_parents_icon} alt="" class="mr-2" />
							Invite a Parent</div><button class="btn btn-primary" data-dismiss="modal">
							<i class="fa-regular fa-xmark m-0"></i>
						</button>
					</div>
					<div>
						<form name="freesignin" class="bg-white content">
							<div class="modal-body addChildProf Subject_Curriculam">
								<div class="EnrollTitle flex">
									<div class="popupboxstyl"><p class="flex text-left align-items-start p-0">
										Please provide the parent's details you wish to invite below.
									</p>
									</div></div>
								<div class="wrapper mt-0 mb-2"><div class="input-group"><label for="">First Name<span class="mandatoryField">*</span></label><div class="form-group">
									<input type="text" class="form-control " name="firstname" />
									<div class="invalid-feedback"></div></div></div><div class="input-group">
										<label for="">Last Name<span class="mandatoryField">*</span></label><div class="form-group">
											<input type="text" class="form-control " name="lastname" />
											<div class="invalid-feedback"></div></div></div><div class="input-group">
										<label for="">Email/Username<span class="mandatoryField">*</span></label>
										<div class="form-group"><input type="text" class="form-control " name="username" />
											<div class="invalid-feedback"></div></div></div>

								</div>
							</div>
							<div class="modal-footer w-100">
								<div class="form-group BDsubmitbutton d-flex m-0 ">
									<button type="button" class="btn-blue btn-login d-block mb-5 cancelbutton ml-auto">
										<i class="fa-solid fa-xmark mr-2"></i>  Cancel</button>
									<button type="submit" class="btn-blue btn-login d-block ml-0 w-auto">
										<i class="fa-solid fa-paper-plane mr-2"></i> Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				</div>
			</div>
			<div className="sharepopup newslatterpopup AreyousurePopup">
				<div className="modal fade" id="schoolactivity145" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.paceIcon} alt="" className="mr-2" />
											Pace Change
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body paceSteps">
								<div class="ScenecerelateddQuiz p-0">
									<div class="signupType m-0 pt-3">
										<div class="PaceModeSel mb-3">
											<h3 class="d-flex align-items-baseline"> One course every
												<div class="selectecPaceWeek">
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill2" /> 1<span class="checkmark"> </span></label>
													<label class="Selcheckbox m-0 ActiveQQst"><input type="radio" name="skill2" checked="" /> 2<span class="checkmark">
													</span></label><label class="Selcheckbox m-0 ActiveQQst"><input type="radio" name="skill2" /> 3<span class="checkmark">
													</span></label><label class="Selcheckbox m-0 ActiveQQst"><input type="radio" name="skill2" /> 4<span class="checkmark" /> </label>

												</div>week(s)<span class="mandatoryField">*</span>.</h3>
											<p>We reccommend one course every Two (2) weeks for optomal learning experience for Shivi.</p></div></div></div>
							</div>

							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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

			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup pacechangepopuo">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity156"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.paceIcon} alt="" className="mr-2" />
											Pace Change
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body  m-0 pt-0 paceSteps">
								<div class="ScenecerelateddQuiz border-0">
									<div class="signupType  w-100">
										<div class="PaceModeSel mb-3">
											<h3 className=""> How many times Adam would sit for coursework? <span className="mandatoryField">*</span>
												<div className="selectecPaceWeek">
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" /> 1 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" defaultChecked /> 2 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" /> 3 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" /> 4 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
												</div>

											</h3>
											<p>We recommend at least two (2) sittings per week for optimal learning experience.</p>
										</div>


									</div>
									<div class="signupType m-0 pt-3 mt-3 seltimedaysit w-100">
										<div class="PaceModeSel mb-3">
											<h3 className=""> How many minutes would Adam spend in a sitting? <span className="mandatoryField">*</span>
												<div className="selectecPaceWeek mb-0">
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="minutes" checked /> 30 <span>Minutes</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="minutes" /> 45 <span>Minutes</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="minutes" /> 60 <span>Minutes</span>
														<span class="checkmark"> </span>
													</label>
												</div>
											</h3>
											<p>
												We recommend at least 30 mins per sitting for optimal learning experience
											</p>
										</div>


									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-end">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
											>
												<i className="fa-solid fa-xmark"></i> Close
											</button>
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5"
											>
												<i class="fa-solid fa-paper-plane mr-2"></i>Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup pacechangepopuo">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity157"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.paceIcon} alt="" className="mr-2" />
											Pace Change
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body  m-0 pt-0 paceSteps">
								<div class="ScenecerelateddQuiz border-0">
									<div class="signupType  w-100">
										<div class="PaceModeSel mb-3">
											<h3 className=""> How many times Adam would sit for coursework? <span className="mandatoryField">*</span>
												<div className="selectecPaceWeek">
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" defaultChecked /> 2 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" /> 3 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="skill" /> 4 <span>Sittings</span>
														<span class="checkmark"> </span>
													</label>
												</div>

											</h3>
											<p>We recommend at least two (2) sittings per week for optimal learning experience.</p>
										</div>


									</div>
									<div class="signupType m-0 pt-3 mt-3 seltimedaysit w-100">
										<div class="PaceModeSel mb-3">
											<h3 className=""> How many minutes would Adam spend in a sitting? <span className="mandatoryField">*</span>
												<div className="selectecPaceWeek mb-0">
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="minutes" checked /> 30 <span>Minutes</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="minutes" /> 45 <span>Minutes</span>
														<span class="checkmark"> </span>
													</label>
													<label class="Selcheckbox m-0 ActiveQQst">
														<input type="radio" name="minutes" /> 60 <span>Minutes</span>
														<span class="checkmark"> </span>
													</label>
												</div>
											</h3>
											<p>
												We recommend at least 30 mins per sitting for optimal learning experience
											</p>
										</div>


									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-end">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
											>
												<i className="fa-solid fa-xmark"></i> Close
											</button>
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5"
											>
												<i class="fa-solid fa-paper-plane mr-2"></i>Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup pacechangepopuo">
				<div
					className="modal fade downgradepopup sectionscorecard"
					id="schoolactivity158"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.mortarboard} alt="" className="mr-2" />
											Comminication Climb
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body pt-0 p-3 ">
								<div className="LPcourseDetails">
									<h4>Modules Plan Details</h4>
									<div className="LPTimingDivision mt-3">
										<ul>
											<li><h5 className="p-0">1. Module Name</h5>
												<p class="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
											</li>
											<li><h5 className="p-0">2. Module Name</h5>
												<p class="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
											</li>
											<li><h5 className="p-0">3. Module Name</h5>
												<p class="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
											</li>
											<li><h5 className="p-0">4. Module Name</h5>
												<p class="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion justify-content-end">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="halfPagePOpup SchoolActivityPopup ">
				<div className="modal fade" id="schoolactivity159" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation">
							<div className="modal-header">
								<div className="heading border-0 p-0">
									<h2 className="flex">
										<span>
											<img src={image.pathwaysicon} className="mr-2" />
											Boosting Confidence & Resilience
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>
							<div className="modal-body paymentinfo pt-0">
								<div class="coveredDimensionpathway d-flex align-items-baseline">
									<h4 class=" mt-3 mb-3">
										<img src={image.CourseTitleIcon} class="mr-2" /></h4><div class="skillSeltaglist coursepagelist pl-0 border-0"><div class="intrestlisting dimpagetags p-0"><div class="instlistitem"><div class="carditem "><label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer"> <h4 class="flex w-100">Self-Confidence</h4></span></label></div></div><div class="instlistitem"><div class="carditem "><label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer"> <h4 class="flex w-100">Leadership</h4></span></label></div></div><div class="instlistitem"><div class="carditem "><label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer"> <h4 class="flex w-100">Effective Communication</h4></span></label></div></div><div class="instlistitem"><div class="carditem "><label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer"> <h4 class="flex w-100">Problem Solving</h4></span></label></div></div></div></div></div>
								<div class="CourseardDesc px-0"><div class="d-flex welcomscreenContent patwaysbulleys p-0 w-100"><span class="pathwat_desc_icon"><img src={image.pathwaydesc} alt="" /></span><span class="m-0 pathway_htm_desc"><p id="textheight" class="pathwatdestxt"><span>Setting a goal is one thing. Planning the pathway to achievement and following through is another. These five courses will give your child the tools he or she needs to take the plan from concept to follow-through. Skills gained include:</span></p><ul class="p-0 w-100"><li>Mindfulness</li><li>Financial literacy and planning</li><li>Goal setting and solving problems along the way</li> </ul></span></div></div>
								<div className="gridSection">

									<div className="JourneyCoursecard newCourseCard pathwaysCourseCard">
										<div class="GridCardTitle">
											<h3 data-toggle="modal" data-target="#datapage">
												<div class="pointer cardSubtitles">
													<img
														src={image.mortarboard}
														alt=""
														className="mr-2"
													/>
													Understanding Our Social Identities
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
														<img src={image.mathMatics} alt="" />
													</div>

												</div>
											</div>
											<div className="GridDetails ">
												<div class="GridCardTitle border-0">
													<h3 className="pl-0 pb-2"><div><p class="p-0"><span class="flex">
														<img src="/static/media/CourseTitleIcon.0005e39635fd9f8ee529.png" class="mr-2" alt="" />
														Self-Confidence<img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 chat_icon mt-0 pointer" /></span></p></div></h3></div>
												<p>
													Kids determine their self-worth from how they are viewed by their peers
													through constant comparison with how they are perceived by the people in their lives.
													This level will cover concepts that emphasize the fact that everybody suffers from self-confidence,
													and while everyone strives for acceptance,
													it should be for who you are, and what skills we have to offer the world.
												</p>
											</div>
										</div>
									</div>
									<div className="JourneyCoursecard newCourseCard pathwaysCourseCard">
										<div class="GridCardTitle">
											<h3 data-toggle="modal" data-target="#datapage">
												<div class="pointer cardSubtitles">
													<img
														src={image.mortarboard}
														alt=""
														className="mr-2"
													/>
													Online Safety: Building Knowledgeable Digital Citizens
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
														<img src={image.mathMatics} alt="" />
													</div>

												</div>
											</div>
											<div className="GridDetails ">
												<div class="GridCardTitle border-0">
													<h3 className="pl-0 pb-2"><div><p class="p-0"><span class="flex">
														<img src="/static/media/CourseTitleIcon.0005e39635fd9f8ee529.png" class="mr-2" alt="" />
														Self-Confidence<img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 chat_icon mt-0 pointer" /></span></p></div></h3></div>
												<p>
													Kids determine their self-worth from how they are viewed by their peers
													through constant comparison with how they are perceived by the people in their lives.
													This level will cover concepts that emphasize the fact that everybody suffers from self-confidence,
													and while everyone strives for acceptance,
													it should be for who you are, and what skills we have to offer the world.
												</p>
											</div>
										</div>
									</div>
									<div className="JourneyCoursecard newCourseCard pathwaysCourseCard">
										<div class="GridCardTitle">
											<h3 data-toggle="modal" data-target="#datapage">
												<div class="pointer cardSubtitles">
													<img
														src={image.mortarboard}
														alt=""
														className="mr-2"
													/>
													Understanding Our Social Identities
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
														<img src={image.mathMatics} alt="" />
													</div>

												</div>
											</div>
											<div className="GridDetails ">
												<div class="GridCardTitle border-0">
													<h3 className="pl-0 pb-2"><div><p class="p-0"><span class="flex">
														<img src="/static/media/CourseTitleIcon.0005e39635fd9f8ee529.png" class="mr-2" alt="" />
														Self-Confidence<img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 chat_icon mt-0 pointer" /></span></p></div></h3></div>
												<p>
													Kids determine their self-worth from how they are viewed by their peers
													through constant comparison with how they are perceived by the people in their lives.
													This level will cover concepts that emphasize the fact that everybody suffers from self-confidence,
													and while everyone strives for acceptance,
													it should be for who you are, and what skills we have to offer the world.
												</p>
											</div>
										</div>
									</div>
									<div className="JourneyCoursecard newCourseCard pathwaysCourseCard">
										<div class="GridCardTitle">
											<h3 data-toggle="modal" data-target="#datapage">
												<div class="pointer cardSubtitles">
													<img
														src={image.mortarboard}
														alt=""
														className="mr-2"
													/>
													Understanding Our Social Identities
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
														<img src={image.mathMatics} alt="" />
													</div>

												</div>
											</div>
											<div className="GridDetails ">
												<div class="GridCardTitle border-0">
													<h3 className="pl-0 pb-2"><div><p class="p-0"><span class="flex">
														<img src="/static/media/CourseTitleIcon.0005e39635fd9f8ee529.png" class="mr-2" alt="" />
														Self-Confidence<img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 chat_icon mt-0 pointer" /></span></p></div></h3></div>
												<p>
													Kids determine their self-worth from how they are viewed by their peers
													through constant comparison with how they are perceived by the people in their lives.
													This level will cover concepts that emphasize the fact that everybody suffers from self-confidence,
													and while everyone strives for acceptance,
													it should be for who you are, and what skills we have to offer the world.
												</p>
											</div>
										</div>
									</div>

								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<div className="buttonDistribotion">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="newinfo_popup  newinfo_popupdimension newEnrollCoursPopup">
				<div className="modal fade" id="schoolactivity160" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.pathwaysicon} className="mr-2" />
											Boosting Confidence & Resilience
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body paceSteps p-2 m-0">

								<div class="coveredDimensionpathway d-flex align-items-baseline">
									<h4 class=" mt-3 mb-3">
										<img src={image.CourseTitleIcon} class="mr-2" /></h4>
									<div class="skillSeltaglist coursepagelist pl-0 border-0">
										<div class="intrestlisting dimpagetags p-0">
											<div class="instlistitem">
												<div class="carditem ">
													<label class="Selcheckbox ActiveQQst m-0 p-0">
														<span class="QQtitle flexone pointer p-0">
															<h4 class="flex w-100">Self-Confidence</h4></span></label>
												</div></div><div class="instlistitem">
												<div class="carditem ">
													<label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer p-0">
														<h4 class="flex w-100">Leadership</h4></span></label>
												</div></div><div class="instlistitem"><div class="carditem ">
													<label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer p-0"> <h4 class="flex w-100">Effective Communication</h4></span></label>
												</div></div><div class="instlistitem">
												<div class="carditem "><label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer p-0"> <h4 class="flex w-100">Problem Solving</h4></span></label></div></div></div></div></div>
								<div class="CourseardDesc px-0">
									<div class="d-flex welcomscreenContent patwaysbulleys p-0 w-100">
										<span class="pathwat_desc_icon"><img src={image.pathwaydesc} alt="" /></span>
										<span class="m-0 pathway_htm_desc">
											<p id="textheight" class="pathwatdestxt">
												<span>Setting a goal is one thing. Planning the pathway to achievement and
													following through is another. These five courses will give your child the
													tools he or she needs to take the plan from concept to follow-through. Skills
													gained include:</span>
											</p>
											<ul class="p-0 w-100">
												<li>Mindfulness</li>
												<li>Financial literacy and planning</li><li>Goal setting and solving problems along the way</li> </ul></span></div></div>

							</div>

							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="halfPagePOpup SchoolActivityPopup newinfo_popup newinfo_popupdimension newEnrollCoursPopup">
				<div className="modal fade show" id="schoolactivity160" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.pathwaysicon} className="mr-2" />
											Boosting Confidence & Resilience
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body paceSteps p-2 m-0">

								<div class="coveredDimensionpathway d-flex align-items-baseline">
									<h4 class=" mt-3 mb-3">
										<img src={image.CourseTitleIcon} class="mr-2" /></h4>
									<div class="skillSeltaglist coursepagelist pl-0 border-0">
										<div class="intrestlisting dimpagetags p-0">
											<div class="instlistitem">
												<div class="carditem ">
													<label class="Selcheckbox ActiveQQst m-0 p-0">
														<span class="QQtitle flexone pointer p-0">
															<h4 class="flex w-100">Self-Confidence</h4></span></label>
												</div></div><div class="instlistitem">
												<div class="carditem ">
													<label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer p-0">
														<h4 class="flex w-100">Leadership</h4></span></label>
												</div></div><div class="instlistitem"><div class="carditem ">
													<label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer p-0"> <h4 class="flex w-100">Effective Communication</h4></span></label>
												</div></div><div class="instlistitem">
												<div class="carditem "><label class="Selcheckbox ActiveQQst m-0 p-0"><span class="QQtitle flexone pointer p-0"> <h4 class="flex w-100">Problem Solving</h4></span></label></div></div></div></div></div>
								<div class="CourseardDesc px-0">
									<div class="d-flex welcomscreenContent patwaysbulleys p-0 w-100">
										<span class="pathwat_desc_icon"><img src={image.pathwaydesc} alt="" /></span>
										<span class="m-0 pathway_htm_desc">
											<p id="textheight" class="pathwatdestxt">
												<span>Setting a goal is one thing. Planning the pathway to achievement and
													following through is another. These five courses will give your child the
													tools he or she needs to take the plan from concept to follow-through. Skills
													gained include:</span>
											</p>
											<ul class="p-0 w-100">
												<li>Mindfulness</li>
												<li>Financial literacy and planning</li><li>Goal setting and solving problems along the way</li> </ul></span></div></div>

							</div>

							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="sharepopup  AreyousurePopup areyousurenewpopup">
				<div className="modal fade show" id="schoolactivity161" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">


							<div className="modal-body p-5 pb-3 mx-3">
								<div className="sharewithfrnd ">
									<h3 className="text-center"><img src={image.exclamationTrangle} className="mr-3" />Are you sure?</h3>
									<p className="mb-3 pb-2 pt-2 mt-3 text-left" >
										Click 'Ok' to delete all skills and courses selected for this dimension.</p>
									<div className="buttonDistribotion justify-content-around">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton w-auto ml-0"
										>
											<i className="fa-solid fa-xmark"></i> Cancel
										</button>
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 w-auto"
										>
											<i class="fa-solid fa-paper-plane mr-2"></i>Ok
										</button>

									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="sharepopup  AreyousurePopup areyousurenewpopup welcome_new_poup">
				<div className="modal fade show" id="schoolactivity162" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">


							<div className="modal-body p-5 mx-3">
								<div className="sharewithfrnd ">
									<h3 className="text-center">Welcome to Bloomster!</h3>
									<p className="mb-3 pb-2 pt-2 mt-3 text-left" >
										Let's get started by building a learning plan for Adam.
										We will walk you through this process in the next few screens.
									</p>
									<p>
										This only takes a few minutes and plans can be changed at any time.
									</p>
									<div className="buttonDistribotion justify-content-around mt-3">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton w-auto ml-0"
										>
											<i className="fa-solid fa-xmark"></i> Skip for Now
										</button>
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 w-auto"
										>
											<i class="fa-solid fa-paper-plane mr-2"></i>Create a Learning Plan
										</button>

									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="sharepopup  AreyousurePopup areyousurenewpopup welcome_new_poup">
				<div className="modal fade show" id="schoolactivity163" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">


							<div className="modal-body p-5 mx-3">
								<div className="sharewithfrnd ">
									<p className="mb-3 pb-2 pt-2 mt-3 text-left" >
										This start date is for the start of the learning plan.
										Start dates for individual courses can be set in the Show
										details button next to the course name in the right panel at any time.
									</p>

								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="sharepopup  AreyousurePopup areyousurenewpopup welcome_new_poup">
				<div className="modal fade show" id="schoolactivity162" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">


							<div className="modal-body p-5 mx-3">
								<div className="sharewithfrnd ">
									<h3 className="text-center">Welcome to Bloomster!</h3>
									<p className="mb-3 pb-2 pt-2 mt-3 text-left" >
										Let's get started by building a learning plan for Adam.
										We will walk you through this process in the next few screens.
									</p>
									<p>
										This only takes a few minutes and plans can be changed at any time.
									</p>
									<div className="buttonDistribotion justify-content-around mt-3">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton w-auto ml-0"
										>
											<i className="fa-solid fa-xmark"></i> Skip for Now
										</button>
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 w-auto"
										>
											<i class="fa-solid fa-paper-plane mr-2"></i>Create a Learning Plan
										</button>

									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="sharepopup  AreyousurePopup">
				<div className="modal fade" id="schoolactivity164" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.Calendericon} alt="" className="mr-2" />
											Plan Start
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body paceSteps">
								<div class="ScenecerelateddQuiz p-0">
									<p>This start date is for the start of the learning plan. Start dates for individual courses can be set in the Show details button next to the course name in the right panel at any time.</p>
								</div>
							</div>

							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="sharepopup  AreyousurePopup">
				<div className="modal fade" id="schoolactivity165" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.Calendericon} alt="" className="mr-2" />
											Recummended Plan
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body paceSteps">
								<div class="ScenecerelateddQuiz p-0">
									<p>
										More info on each course is available by clicking the arrow
										next to the course name.
									</p>
								</div>
							</div>

							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			<div className="sharepopup  AreyousurePopup">
				<div className="modal fade" id="schoolactivity166" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content courseInformation schoolcourse">
							<div className="modal-header">
								<div className="heading p-0 border-0 w-100">
									<h2 className="flex">
										<span className="flex">
											{" "}
											<img src={image.Calendericon} alt="" className="mr-2" />
											Select Dimension,Skills and Courses
										</span>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body paceSteps">
								<div class="ScenecerelateddQuiz p-0">
									<p>
										We will walk you through each step to choose what dimensions you want your child to focus on, then choose the skills within those dimensions, and finally the courses that match those skills.

									</p>
								</div>
							</div>

							<div className="modal-footer">
								<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			{/*=============================Start Added by Alfaiz ansari for Class Schedule Half PopUp Open======================================= */}
			<div className="halfPagePOpup coursedetailpopuppage">
				<div
					className="modal d-flex"
					id="schoolactivity170"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg" id="ClassSchedule">
						<div className="modal-content w-100 max-width-100">
							<div className="modal-header">
								<div className="heading border-0 p-0">
									<h2 className="flex">
										<span>
											<img src={image.information} alt="..." className="mr-2" />
											Class Schedule
										</span>

										<button
											data-dismiss="modal"
											className="btn btn-primary"
										>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body p-0">
								<div className="container p-3 mt-2">
									<div className="flex">
										<div className="teachernameDiv">
											<h5 className="">Teacher Name: <span>Richard</span></h5>
										</div>

										<div className="classtimingDiv">
											<h5 className="">Class Timing: <span>12:30 PM EST</span></h5>
										</div>

									</div>

									<div className="flex pt-3">
										<div className="classnameDiv">
											<h5 className="">Class Name: <span>Class1</span></h5>
										</div>

										<div className="float-right">
											<a href="#"><img src={image.printIcon} alt="" style={{ maxWidth: '25px' }} className="me-2" /></a>
											<a href="#"><img src={image.exportIcon} alt="" style={{ maxWidth: '23px' }} /></a>
										</div>

									</div>
								</div><hr />

								<div class="container mt-3">
									<table class="table table-bordered">
										<thead>
											<tr>
												<th>#</th>
												<th>Course / Module</th>
												<th className="heading-th"></th>
												<th className="heading-th"></th>
												<th className="heading-th"></th>
											</tr>
										</thead>
										<tbody>
											<tr className="subheading">
												<td>1</td>
												<td>Communication Foundations</td>
												<td>Session 1 <span>(30 Min)</span></td>
												<td>Session 2 <span>(45 Min)</span></td>
												<td>Session 3 <span>(30 Min)</span></td>
											</tr>
											<tr>
												<td></td>
												<td>Effective Communication Essentials</td>
												<td>Tuesday, Mar 26, 2024</td>
												<td>Thursday, Mar 28, 2024</td>
												<td>Thursday, Mar 28, 2024</td>
											</tr>
											<tr>
												<td></td>
												<td>Language and Communication</td>
												<td>Tuesday, Apr 2, 2024</td>
												<td>Thursday, Apr 4 2024</td>
												<td>Thursday, Apr 4 2024</td>
											</tr>

											<tr>
												<td></td>
												<td>Communication Challenges</td>
												<td>Tuesday, Apr 9, 2024</td>
												<td>Thursday, Apr 11 2024</td>
												<td>Thursday, Apr 11 2024</td>
											</tr>

											<tr>
												<td></td>
												<td>Digital Citizenship and Communication</td>
												<td>Tuesday, Apr 16, 2024</td>
												<td>Thursday, Apr 18 2024</td>
												<td>Thursday, Apr 18 2024</td>
											</tr>

										</tbody>
									</table>
								</div>
							</div>
							<div className="modal-footer">
								<div className="input-group full-Width-group basic_details_form flex m-0">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<button
											type="submit"
											className="btn-blue btn-login d-block mb-5 m-0 ml-auto cancelbutton"
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
			{/*=============================End Added by Alfaiz ansari for Class Schedule Half PopUp Open======================================= */}


			{/*=============================Start Added by Alfaiz ansari for Way a plan PopUp Open======================================= */}
			<div className="newinfo_popup holisticview" id="whyPlanPopup">
				<div className="modal d-flex" id="schoolactivity71" role="dialog">
					<div className="modal-dialog modal-lg mt-0 mb-0">
						<div className="modal-content">
							<div className="modal-header">
								<div className="heading border-0 p-0 w-100">
									<h2 className="flex">
										<span>
											<img src={image.SceneQuestionicon} className="mr-2" />
											Why A Plan?
										</span>
										<button className="btn btn-primary" onClick={() => dispatch(showOverallModal())}>
											<i className="fa-regular fa-xmark m-0"></i>
										</button>
									</h2>
								</div>
							</div>

							<div className="modal-body">
								<div className="infopopup_wrap  align-items-start">
									<div className="infopopupright align-items-start pb-2 d-flex">
										<div className="info_related_text flex-child">
											<div className="infopopup_txt">
												<p className="pb-4">
													Creating a learning plan helps parents and students work Bloomster into a regular habit and maintain consistency for maximum effectiveness.
												</p>

												<p className="pb-4">
													We've organized essential skills into five key dimensions of growth, offering courses designed to empower your children with soft skills relevant to their development. At Bloomster, we understand the unique challenges of parenting in the digital age.Our mission is to support you in nurturing confident, well - rounded individuals who can thrive in a world of constant change and unpredictability.
												</p>

												<p className="">
													Thank you for taking the time to build a learning plan to set your child up for success.
												</p>
											</div>
										</div>
										<div className="pb-1 flex-child">
											<div className="holisticnewappoch">
												<div className="centeralapproch">
													<h4>Holistic<br />Growth</h4>
												</div>
												<div className="dimensionapproch">
													<div className="Seocialaaproch EmotioanlApproch ">
														<p>Emotional</p>
													</div>
													<span><img src={image.emotinalarrow} className="emotionalarrow" /></span>
													<div className="Seocialaaproch socialcircle">
														<p>Social</p>
													</div>
													<span><img src={image.socialarrow} className="socialarrow" /></span>
													<div className="Seocialaaproch MindfulnessApproch">
														<p>Mindfulness</p>
													</div>
													<span><img src={image.spiritualarrow} className="mindfulnessarrow" /></span>
													<div className="Seocialaaproch PhysicalApproch">
														<p>Physical</p>
													</div>
													<span><img src={image.physicalarrow} className="physicalarrow" /></span>
													<div className="Seocialaaproch intellectualApproch">
														<p>Intellectual</p>
													</div>
													<span><img src={image.intellectualarrow} className="intellectualarrow" /></span>
												</div>
											</div>
											<div className="downArrow"> <img src={image.downArrowImg} alt="" /></div>

											<div class="holisticflowr w-100"><div class="skilanddimensioncircle Holisticgtflr  mt-2"><div class="Holosticcircle"><h4>Arhaan</h4></div><div class="Dimen_Circle SocicalCircle"></div><div class="Dimen_Circle EmotionalCircle"></div><div class="Dimen_Circle SpritiuslCircle"></div><div class="Dimen_Circle PhysicalCircle"></div><div class="Dimen_Circle intellectualCircle"></div></div></div>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<div className="form-group BDsubmitbutton m-0 d-flex">
									<div className="buttonDistribotion">
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 cancelbutton"
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
			{/*=============================End Added by Alfaiz ansari for Way a plan PopUp Open======================================= */}
		</>

	);
}

export default Schoolactivity;
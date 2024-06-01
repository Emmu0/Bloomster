import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import RoundProgress from "../controls/RoundProgress";
import DoughnutChart from "../home/DoughnutChart";
const Setting = () => {
  return (
    <div>
      <Home>
        <div className="d-flex flex-wrap SpecialLeftpanel w-100">
          <div className="d-flex w-100 align-items-start overflow-visible">
            {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100">
                <div className="tabgrid m-0 socialgridtab flex">
                  <ul>
                    <li className="tabs">
                      <img src={image.lesson_icon} alt="" />
                      Lessons
                    </li>
                    <li className="tabs ">
                      <img src={image.Seriesicon} alt="" />
                      Series
                    </li>
                    <li className="tabs active-tabs">
                      <img src={image.book_open_reader} alt="" />
                      Quiz
                    </li>
                    <li className="tabs">
                      <img src={image.SceneRefrence} alt="" />
                      References
                    </li>
                  </ul>
                  <div class="LRSlidearrow">
                    <span class="pointer DissableArrow">
                      {" "}
                      <i class="fa-light fa-chevron-left"></i>
                    </span>
                    <span class="ScenePagination">
                      <strong class="mr-2 ">1</strong>of
                      <strong class="ml-2">7</strong>
                    </span>
                    <span class="pointer ">
                      {" "}
                      <i class="fa-light fa-chevron-right"></i>
                    </span>
                  </div>
                </div>
                <div className="QuizContent">
                  <h4 className="mb-3 fst-italic">
                    <i class="fa-light fa-circle-info mr-2"></i>Please make sure
                    to answer all the questions in the quiz to receive an
                    evaluation
                  </h4>
                  <div className="ScenecerelateddQuiz">
                    <div className="signupType m-0 mb-3">
                      <h4 className="mb-3">
                        <span className="m-0">
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox ActiveQQst">
                        <span className="QQtitle">She tokenized Shauna</span>
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She tokenized the class
                        </span>

                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>

                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>

                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="signupType m-0 mb-3">
                      <h4 className="mb-3">
                        <span className="m-0">
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox Qrightopyion">
                        <span className="QQtitle">She tokenized Shauna</span>
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label
                        className="Selcheckbox Qwrongopton">
                        <span className="QQtitle">
                          {" "}
                          She tokenized the class
                        </span>

                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>

                        <span className="WrongQuizAns">
                          <i class="fa-solid fa-xmark m-0"></i>
                        </span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>

                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="signupType checkboxtypeques m-0 mb-3">
                      <h4 className="mb-3">
                        <span className="m-0">
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox ">
                        <span className="QQtitle">She tokenized Shauna</span>
                        <input
                          type="checkbox"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label
                        className="Selcheckbox

                                    "
                      >
                        <span className="QQtitle">
                          {" "}
                          She tokenized the class
                        </span>

                        <input
                          type="checkbox"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>

                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>

                        <input
                          type="checkbox"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>
                        <input
                          type="checkbox"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="signupType checkboxtypeques m-0 mb-3">
                      <h4 className="mb-3">
                        <span className="m-0">
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox Qwrongopton">
                        <span className="QQtitle">She tokenized Shauna</span>
                        <input
                          type="checkbox"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="WrongQuizAns">
                          <i class="fa-solid fa-xmark m-0"></i>
                        </span>
                      </label>
                      <label
                        className="Selcheckbox Qrightopyion

                                    "
                      >
                        <span className="QQtitle">
                          {" "}
                          She tokenized the class
                        </span>

                        <input
                          type="checkbox"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>

                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>

                        <input
                          type="checkbox"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        <span className="QQtitle">
                          {" "}
                          She was helping Shauna share her experiences as a
                          biracial student
                        </span>
                        <input
                          type="checkbox"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="input-group full-Width-group basic_details_form pagebuttonStrip">
                  <div className="form-group BDsubmitbutton d-flex m-0">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left mr-2"></i> Back
                    </button>

                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        <i className="fa-solid fa-paper-plane ml-2"></i> Submit
                      </button>
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        Next<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100">
                <div className="tabgrid m-0 socialgridtab flex">
                  <ul>
                    <li className="tabs active-tabs">
                      <img src={image.lesson_icon} alt="" />
                      Lessons
                    </li>
                    <li className="tabs ">
                      <img src={image.Seriesicon} alt="" />
                      Series
                    </li>
                    <li className="tabs">
                      <img src={image.book_open_reader} alt="" />
                      Quiz
                    </li>
                    <li className="tabs">
                      <img src={image.SceneRefrence} alt="" />
                      References
                    </li>
                  </ul>
                </div>

                <div className="LessonTable_Wrap">
                  <div className="lessonCNameList">
                    <ul>
                      <li>
                        <p className="text-right pr-3 justhintsofpage">
                          <i class="fa-light fa-circle-info mr-2"></i>Click on
                          the lesson name to navigate directly to its video
                        </p>
                        <ul className="weeklist">
                          <li className="weellistname">
                            <h4>1: Prime and composite numbers</h4>
                            <ul className="flex flex-wrap">
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle w-100">
                                    <p className="flex">
                                      <a href="#">Factors</a>
                                      <img
                                        src={image.enrolledicon}
                                        alt=""
                                        className="mr-2"
                                      />
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle">
                                    <p>
                                      <a href="#">Multiples</a>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="weellistname">
                            <h4>2: GCF and LCM Real World Applications</h4>
                            <ul className="flex flex-wrap">
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle">
                                    <p>
                                      <a href="#">
                                        GCF Real World Application I
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle">
                                    <p>
                                      <a href="#">
                                        LCM Real World Application I
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="weellistname">
                            <h4>3: GCF and LCM Real World Applications</h4>
                            <ul className="flex flex-wrap">
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle">
                                    <p>
                                      <a href="#">
                                        GCF Real World Application I
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle">
                                    <p>
                                      <a href="#">
                                        LCM Real World Application I
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex align-items-center">
                                  <div className="lessoncourseTitleimg">
                                    <img src={image.mathMatics} alt="" />
                                  </div>
                                  <div className="LCtitle">
                                    <p>
                                      <a href="#">
                                        LCM Real World Application I
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="RightbarPannel p-0 rightpannelSticky">
              <div className="heading">
                <h2 className="flex">
                  <span>
                    <img src={image.helpsandhints} alt="" className="mr-2" />
                    Helpful Hints
                  </span>
                </h2>
                <h2 className="flex">
                  <span>
                    <img src={image.prereqisits} alt="" className="mr-2" />
                    Pre-requisites
                  </span>
                </h2>
              </div>
              <div class="lSidebarcontentwrap">
                <div class="LessionDtlOverview">
                  <div class="d-flex align-items-start flex-wrap">
                    <div class="flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar">
                      <p>
                        <p>
                          Four students will embark on a new journey through
                          learning about many aspects of Physical Education.
                          Physical Education can provide more than exercises and
                          sports. In this first week the four junior high
                          students will learn about benchmarks and their
                          baseline abilities. They will learn in depth about the
                          assessment from the areas that are tested to how the
                          results will help them.
                        </p>

                        <p>&nbsp;</p>
                        <p>
                          Each student will experience this week's scenarios
                          very differently. They will also work together to
                          overcome their curiosities and feelings about the
                          assessment. Keep in mind that the test the students
                          are facing will be done in a school setting, but the
                          journey you will face will be strictly through this
                          platform with you or your parents tallying your
                          results. The assessment you will face is strictly for
                          your personal benefit and is in no way reported to
                          your school or paediatrician.
                        </p>
                      </p>
                    </div>

                    <span class="AudioIcon">
                      <img
                        src="/static/media/Audioicon.d067b50fe76b765b2664.png"
                        alt="icon"
                        class="pointer"
                      />
                    </span>
                  </div>
                </div>
                <div class="ScenecerelateddQuiz">
                  <div class="signupType rangetypeQuestion textAreatypeQuestion mb-2">
                    <div class="input-group full-Width-group basic_details_form pt-0 continuebtn">
                      <div class="form-group BDsubmitbutton flex m-0">
                        <button
                          type="submit"
                          class="btn-blue btn-login d-block mb-5 ml-auto"
                        >
                          Continue
                          <i class="fa-solid fa-arrow-right ml-2 m-0"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="LeftbarPannel p-0" id="">
							<div className=" CourseCardWrapper position-relative">
								<div class="heading  gridSection d-flex w-100 p-0 Home_two">
									<div class="tabgrid w-100 m-0 border-0">
										<ul>
											<li class="tabs active-tabs"><img src={image.courselevel4} alt="" />Social</li>
											<li class="tabs"><img src={image.CollegeJourneyicon} alt="" />Emotional</li>
											<li class="tabs"><img src={image.courselevel5} alt="" />Spiritual</li>
											<li class="tabs"><img src={image.courselevel2} alt="" />Physical</li>
											<li class="tabs"><img src={image.courselevel3} alt="" />Intellectual</li>
										</ul>

									</div>
									<span>
										<img src={image.chat_icon} className="chat_icon mr-2" alt="" />
									</span>
								</div>
								<div className="gridSection mt-2">
									<div className="content-tabs gridBody">

										<div className=" content active-content">
											<div class="SocialCoursecardWrap">
												<h4 data-toggle="collapse" class="flex KATitle collapse pointer" aria-expanded="false" href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616">
													<span><img src={image.CourseTitleIcon} alt="" /> Conflict Resolution </span>  <span> <i class="fa-solid fa-angle-down"></i></span>
												</h4>
											</div>
										</div>
										<div className=" content active-content">
											<div class="SocialCoursecardWrap">
												<h4 data-toggle="collapse" class="flex KATitle collapse pointer" aria-expanded="false" href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616">
													<span><img src={image.CourseTitleIcon} alt="" /> Effective Communication </span>  <span> <i class="fa-solid fa-angle-down"></i></span>
												</h4>
											</div>
										</div>
										<div className=" content active-content">
											<div class="SocialCoursecardWrap">
												<h4 data-toggle="collapse" class="flex KATitle collapse pointer" aria-expanded="false" href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616">
													<span><img src={image.CourseTitleIcon} alt="" /> Relationship Management </span>  <span> <i class="fa-solid fa-angle-down"></i></span>
												</h4>
											</div>
										</div>
										<div className=" content active-content">
											<div class="SocialCoursecardWrap">
												<h4 data-toggle="collapse" class="flex KATitle collapse pointer" aria-expanded="false" href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616">
													<span><img src={image.CourseTitleIcon} alt="" /> Responsible Decision Making </span>  <span> <i class="fa-solid fa-angle-down"></i></span>
												</h4>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="RightbarPannel p-0 rightpannelSticky">
							<div className="heading">
								<h2 className="flex">
									<span>
										<img src={image.DiemensionProgress} alt="" className="mr-2" />
										<span>Progress</span>: Social
									</span>
									<div class="form-check form-switch m-0 flex p-0">
										<label class="form-check-label pointer" for="flexSwitchCheckDefault">Enrolled</label><input class="form-check-input avltogglebutton pointer" type="radio" role="switch" id="flexSwitchCheckDefault" /></div>
								</h2>

							</div>
							<div className=" notenrolledanycrs">
								<div class="skilanddimensioncircle mt-5 mb-5">
									<div class="dimensionskills Social_Skils_center" style={{ width: "10%", height: "10%" }}>

										<h5>Social</h5>
									</div>
									<div class="skillCircleList AllSkillschart">
										<div class="skill_pnlcircle"><div class="Skill_innercircle flextwo" style={{ height: "15%", width: "15%" }}>
											<span className="skils_list">1</span>
											<p>0<span class="percentage_sign">%</span></p>
										</div>
										</div>
									</div></div>
								<div className="Skillslegent">
									<ul>
										<li><strong>1:</strong> SkillName1 </li>
										<li><strong>2:</strong> SkillName2 </li>
										<li><strong>3:</strong> SkillName3 </li>
										<li><strong>4:</strong> SkillName4 </li>
									</ul>
								</div>
								<div className="LessionDtlOverview p-3">
									<p className="">
										<strong> You have not enrolled in any courses yet. <a href="#">Click here</a> to view available courses and enroll.
										</strong>
									</p>
								</div>
							</div>
						</div> */}
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#schoolactivity46
        "
            >
              Launch demo modal
            </button>
        <div className="newinfo_popupdimension newEnrollCoursPopup">
        <div className="modal fade" id="schoolactivity46" role="dialog">
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

              <div className="modal-body">
                <div className="newenrolledpopup">
                  <h3
                    data-toggle="collapse"
                    href="#newenrollepopup"
                    aria-expanded="true"
                    class="flex HomeProgresstilt"
                  >
                    Course Settings
                    <span>
                      {" "}
                      <i class="fa fa-chevron-down icon-show"></i>
                    </span>
                  </h3>
                  <div
                    className="newenrollepopup panel-collapse collapse show "
                    id="newenrollepopup"
                  >
                    <h4 className="mb-3">
                    For optimal learning, we recommend you keep knowledge checks and section exercises required:
                    
                    </h4>
                    <div className="newcoursesetting flex  align-items-start">
                      <div>
                        <h4 className="p-0">Knowledge Checks and Section Exercises Required
</h4>
                        <p>
                        You can change this from the settings section in your profile.
                        
                        </p>
                      </div>
                      <div class="form-check form-switch m-0 flex  p-0 mt-2">
                        <label
                          class="form-check-label pointer"
                          for="flexSwitchCheckDefault"
                        >
                        
                        </label>
                        <input
                          class="form-check-input avltogglebutton pointer"
                          type="radio"
                          role="switch"
                          checked
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newenrolledpopup">
                  <h3
                    data-toggle="collapse"
                    href="#newenrollepopup2"
                    aria-expanded="true"
                    class="flex HomeProgresstilt"
                  >
                   Course Evaluation
                    <span>
                      {" "}
                      <i class="fa fa-chevron-down icon-show"></i>
                    </span>
                  </h3>
                  <div
                    className="newenrollepopup panel-collapse collapse "
                    id="newenrollepopup2"
                  >
                    <h4 className="mb-3">
                    Your course progress is calculated based on Proficiency, Completion, and Pace.{" "}
                    </h4>
                    <div className="Course_evaluation">
                  

                      <div className="skillprogrs">
                        <span>Progress</span>
                 
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
                          <span className="startsteps">
                             Start
                          </span>

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
                  </div>
                </div>
            
                <div className="newenrolledpopup paddingbtmpopup m-0">
                  <h3
                    data-toggle="collapse"
                    href="#newenrollepopup4"
                    aria-expanded="true"
                    class="flex HomeProgresstilt"
                  >
                    Course Confirmation
                    <span>
                      {" "}
                      <i class="fa fa-chevron-down icon-show"></i>
                    </span>
                  </h3>
                  <div
                    className="newenrollepopup panel-collapse collapse "
                    id="newenrollepopup4"
                  >
                 
                    <div className="signupType mb-2 mt-3">
                      <label className={`Selcheckbox ActiveQQst m-0`}>
                        <span className="QQtitle"> I have reviewed the course description and approve of my child enrolling in this course.</span>
                        <input
                          type="radio"
                          id="Public"
                          name="dimensionQuestion"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                 
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
            <div className="newinfo_popupdimension newEnrollCoursPopup">
              <div className="modal fade" id="schoolactivity47" role="dialog">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content courseInformation">
                    <div className="modal-header">
                      <div className="heading border-0 p-0 w-100">
                        <h2 className="flex">
                          <span>
                            <img src={image.mortarboard} className="mr-2" />
                            Enroll: Course Name
                          </span>
                          <button
                            className="btn btn-primary"
                            data-dismiss="modal"
                          >
                            <i className="fa-regular fa-xmark m-0"></i>
                          </button>
                        </h2>
                      </div>
                    </div>

                    <div className="modal-body">
                      <div className="newenrolledpopup">
                        <h3
                          data-toggle="collapse"
                          href="#newenrollepopup"
                          aria-expanded="true"
                          class="flex HomeProgresstilt"
                        >
                          Course Settings
                          <span>
                            {" "}
                            <i class="fa fa-chevron-down icon-show"></i>
                          </span>
                        </h3>
                        <div
                          className="newenrollepopup panel-collapse collapse show "
                          id="newenrollepopup"
                        >
                          <h4 className="mb-3">
                            For optimal learning, we recommend you keep
                            knowledge checks and section exercises required:
                          </h4>
                          <div className="newcoursesetting flex  align-items-start">
                            <div>
                              <h4 className="p-0">
                                Knowledge Checks and Section Exercises Required
                              </h4>
                              <p>
                                You can change this from the settings section in
                                your profile.
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
                        </div>
                      </div>
                      <div className="newenrolledpopup">
                        <h3
                          data-toggle="collapse"
                          href="#newenrollepopup2"
                          aria-expanded="true"
                          class="flex HomeProgresstilt"
                        >
                          Course Evaluation
                          <span>
                            {" "}
                            <i class="fa fa-chevron-down icon-show"></i>
                          </span>
                        </h3>
                        <div
                          className="newenrollepopup panel-collapse collapse "
                          id="newenrollepopup2"
                        >
                          <h4 className="mb-3">
                            Your course progress is calculated based on
                            Proficiency, Completion, and Pace.{" "}
                          </h4>
                          <div className="Course_evaluation">
                            <div className="skillprogrs">
                              <span>Progress</span>
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
                        </div>
                      </div>

                      <div className="newenrolledpopup paddingbtmpopup m-0">
                        <h3
                          data-toggle="collapse"
                          href="#newenrollepopup4"
                          aria-expanded="true"
                          class="flex HomeProgresstilt"
                        >
                          Course Confirmation
                          <span>
                            {" "}
                            <i class="fa fa-chevron-down icon-show"></i>
                          </span>
                        </h3>
                        <div
                          className="newenrollepopup panel-collapse collapse show"
                          id="newenrollepopup4"
                        >
                          <div className="signupType mb-2 mt-3">
                            <label className={`Selcheckbox ActiveQQst m-0`}>
                              <span className="QQtitle">
                                {" "}
                                I have reviewed the course description and
                                approve of my child enrolling in this course.
                              </span>
                              <span class="mandatoryField">
                                <strong>*</strong>
                              </span>
                              <input
                                type="checkbox"
                                checked
                                id="Public"
                                name="dimensionQuestion"
                                value="PUBLIC"
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                          </div>
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
          </div>
        </div>
      </Home>
    </div>
  );
};

export default Setting;

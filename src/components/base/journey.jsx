import React from "react";
import { SITEFNAME } from "../../utils/Messages";

const journey = () => {
  return (
    <div>
      <div className="halfPagePOpup HolisticProgress">
        <div
          className="modal fade"
          id="schoolactivity15"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    <img src={image.Robovicky} className="mr-2" />
                    Holistic Growth
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body p-0">
                <div className="DChartWrap">
                  <h3>Holistic</h3>
                  <div className="DchartContnr">
                    <div className="ProgressDetails">
                      <div className="ProgressDot">
                        <img src={image.pointingout} />
                        <span></span>
                      </div>
                      <div className="starttoendpoint">
                        <span>Follower</span>
                        <span>Leader</span>
                        <span>Challenger</span>
                        <span>Explorer</span>
                      </div>
                    </div>
                    <span className="HIPCharted">
                      Intellectual and Physical
                    </span>
                    <div className="DcverticleParameter">
                      <span>Performance</span>

                      <ul>
                        <li>100</li>
                        <li>90</li>
                        <li>80</li>
                        <li>70</li>
                        <li>60</li>
                        <li>50</li>
                        <li>40</li>
                        <li>30</li>
                        <li>20</li>
                        <li>10</li>
                        <li>0</li>
                      </ul>
                    </div>
                    <div className="DcHorizontalParameter">
                      <span className="HSESCharted">
                        Social, Emotional, and Spiritual
                      </span>
                      <span>Readiness</span>
                      <ul>
                        <li>0</li>
                        <li>10</li>
                        <li>20</li>
                        <li>30</li>
                        <li>40</li>
                        <li>50</li>
                        <li>60</li>
                        <li>70</li>
                        <li>80</li>
                        <li>90</li>
                        <li>100</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup HolisticProgress EnrollCourseConfimation">
        <div
          className="modal fade"
          id="schoolactivity13"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    {/* <img src={image.information} className="mr-2" /> */}
                    Are You Enrolled in the blow Course's Please Confirm
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body p-0 pb-3">
                <div className="SelectCourseLIst">
                  <div className="selectcourseItem d-flex">
                    <div className="selicoursetemwrap d-flex">
                      <div className="SelCourseimg">
                        <img src={image.mathMatics} />
                      </div>
                      <div className="selCourseDesc pl-2">
                        <h3>Course Name</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum{" "}
                        </p>
                        <h4>Teacher Name </h4>
                      </div>
                    </div>
                    <div className="Selvidoption">
                      <span className="rightcheck text-center">
                        <span className="d-block mb-2">Please Select</span>
                        <span className="uncheckbox"></span>
                      </span>
                    </div>
                  </div>
                  <div className="selectcourseItem d-flex">
                    <div className="selicoursetemwrap d-flex">
                      <div className="SelCourseimg">
                        <img src={image.mathMatics} />
                      </div>
                      <div className="selCourseDesc pl-2">
                        <h3>Course Name</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum{" "}
                        </p>
                        <h4>Teacher Name </h4>
                      </div>
                    </div>
                    <div className="Selvidoption">
                      <span className="rightcheck text-center">
                        <span className="d-block mb-2">Please Select</span>
                        <img src={image.rightCheck}></img>
                      </span>
                    </div>
                  </div>
                  <div className="selectcourseItem d-flex">
                    <div className="selicoursetemwrap d-flex">
                      <div className="SelCourseimg">
                        <img src={image.mathMatics} />
                      </div>
                      <div className="selCourseDesc pl-2">
                        <h3>Course Name</h3>
                        <p>Course Description</p>
                        <h4>Teacher Name </h4>
                      </div>
                    </div>
                    <div className="Selvidoption">
                      <span className="rightcheck text-center">
                        <span className="d-block mb-2">Please Select</span>
                        <img src={image.rightCheck}></img>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group BDsubmitbutton d-flex">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 mr-3 cancelbutton"
                    >
                      <i className="fa-solid fa-xmark"></i> Cancel
                    </button>
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 mr-3"
                    >
                      <i className="fa-solid fa-paper-plane"></i> Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup HolisticProgress EnrollcConfimation">
        <div
          className="modal fade"
          id="schoolactivity14"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0 pb-3">
                <div className="flex p-3 flex-wrap ">
                  <div className="Poupleftimage">
                    <img src={image.vickylearingbnr} />
                  </div>
                  <div className="popuprightmsg flex flex-wrap">
                    <div>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                      <h3 className="mb-3">See Something You Like</h3>
                      <p>
                        Thanks to Signup for an account to save Your Favourite
                        Courses
                      </p>
                    </div>
                    <div className="form-group BDsubmitbutton d-flex">
                      <div className="buttonDistribotion">
                        <button
                          type="button"
                          className="btn-blue btn-login d-block mb-5 mr-3 cancelbutton"
                        >
                          <i className="fa-solid fa-xmark"></i>No
                        </button>
                        <button
                          type="button"
                          className="btn-blue btn-login d-block mb-5 mr-3"
                        >
                          <i className="fa-solid fa-paper-plane"></i> Yes
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
      <div className="halfPagePOpup HolisticProgress EnrollcConfimation">
        <div
          className="modal fade"
          id="schoolactivity9"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="flex p-3 flex-wrap SubsCorsePopup">
                  <div className="Poupleftimage">
                    <img src={image.subscribePopup} />
                  </div>
                  <div className="popuprightmsg flex flex-wrap">
                    <div>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                      <p className="">
                        {" "}
                        <img src={image.newvickylogo} alt="" />
                      </p>
                      <h3 className="mb-3 mt-2">
                        Subscribe now to review all the courses
                      </h3>

                      <p>
                        After subscription, you can see all the courses &
                        teacher profiles as well
                      </p>
                    </div>
                    <div className="form-group BDsubmitbutton d-flex">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 mr-3 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark mr-2"></i>Cancel
                      </button>
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 mr-3"
                      >
                        <i className="fa-solid fa-paper-plane mr-2"></i>{" "}
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup HolisticProgress EnrollcConfimation">
        <div
          className="modal fade"
          id="schoolactivity26"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="flex p-3 flex-wrap ">
                  <div className="Poupleftimage">
                    <img src={image.subscribePopup} />
                  </div>
                  <div className="popuprightmsg flex flex-wrap">
                    <div>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                      <div className="quizPreview">
                        <h4 className="justify-content-center">
                          {" "}
                          <strong>Quiz Result</strong>{" "}
                        </h4>
                        <p>You have attempted 9 question out of 10.</p>
                        <p>7 answer is correct & 2 is incorrect.</p>
                        <button
                          type="submit"
                          className="btn-blue btn-login d-block mb-5 mt-3"
                        >
                          Preview your Answer{" "}
                          <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer p-0 pl-3 pr-3">
                <div className="form-group BDsubmitbutton d-flex m-0 mt-2 mb-2">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 ml-auto cancelbutton"
                  >
                    <i className="fa-solid fa-xmark mr-2"></i>Cancel
                  </button>
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i> Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.school_icon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> Delhi Public School</strong>{" "}
                        </h4>
                        <p>RDC RajNagar Ghaziabad</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li
                      onClick={() => chooseTab(1)}
                      className={`tabs1 ${
                        activeTab == 1 ? "active-tabs" : ""
                      } `}
                    >
                      Curriculum
                    </li>
                    <li
                      onClick={() => chooseTab(2)}
                      className={`tabs1 ${
                        activeTab == 2 ? "active-tabs" : ""
                      } `}
                    >
                      Grades
                    </li>
                  </ul>
                </div>
                {/*-------------------------------*/}

                {activeTab === 1 && (
                  <div className="moduleWrap">
                    <div className="moduleList mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 1{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            1. Lesson Name
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>
                          </li>
                          <li className="d-flex justify-content-between">
                            2. Lesson Name{" "}
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            3. Lesson Name{" "}
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            4. Lesson Name{" "}
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            5. Lesson Name{" "}
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            6. Lesson Name{" "}
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="moduleList mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module1"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 2{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module1"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            1. Lesson Name{" "}
                            <span className="complete">Status</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            2. Lesson Name{" "}
                            <span className="complete">Status</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            3. Lesson Name{" "}
                            <span className="Progress">Status</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            4. Lesson Name{" "}
                            <span className="incomplete">Status</span>
                          </li>
                          <li>5. Lesson Name</li>
                          <li>6. Lesson Name</li>
                        </ul>
                      </div>
                    </div>
                    <div className="moduleList mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module2"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 3{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module2"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            1. Lesson Name{" "}
                            <span className="complete">Status</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            2. Lesson Name{" "}
                            <span className="complete">Status</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            3. Lesson Name{" "}
                            <span className="Progress">Status</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            4. Lesson Name{" "}
                            <span className="incomplete">Status</span>
                          </li>
                          <li>5. Lesson Name</li>
                          <li>6. Lesson Name</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/*-------------------------------*/}
                {activeTab === 2 && (
                  <div className="assessmentWrap">
                    <div className="Assessment pb-4">
                      <h4 className="mb-3">Enter Assessment Score</h4>
                      <div className="AssessmentScore">
                        <form className="bg-white content align-items-end">
                          <div className="input-group  datespl calender">
                            <label>
                              Assessment Date
                              <span className="mandatoryField">*</span>
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                            </label>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="marksorgrade d-flex justify-content-between align-items-center p-0">
                            <div className="input-group">
                              <label>Enter Scrore</label>
                              <div className="form-group">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <label>Enter Grade</label>
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option></option>
                                  <option>Grade 1</option>
                                  <option>Grade 2</option>
                                  <option>Grade 3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="input-group submitgrade">
                            <div className="form-group BDsubmitbutton d-flex mt-2 justify-content-end">
                              <button
                                type="button"
                                className="btn-blue btn-login d-block"
                              >
                                {" "}
                                <i className="fa-solid fa-paper-plane"></i>
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="BDsubmitbutton Addchieldbtn  addEnrichbtn  pr-10 mt-3">
                      <strong className="d-block">
                        Add New Grades <span>+</span>
                      </strong>
                    </div>
                  </div>
                )}

                {/* <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs active-tabs">Curriculum</li>
                    <li className="tabs">Grades</li>
                  </ul>
                </div>
                <div className="moduleWrap">
                  <div className="moduleList mb-4">
                    <div
                      className="ModuleTitle heding-title"
                      data-toggle="collapse"
                      href="#module"
                    >
                      <h4 className="w-100 d-flex justify-content-between align-items-center">
                        Module 1{" "}
                        <i className="fa fa-chevron-down icon-show"></i>
                      </h4>
                    </div>
                    <div
                      className="submoduleList panel-collapse collapse show"
                      id="module"
                    >
                      <ul>
                        <li className="d-flex justify-content-between">
                          1. Lesson Name
                          <span>
                            <input
                              type="checkbox"
                              className="lessionStatuscheck"
                            />
                          </span>
                        </li>
                        <li className="d-flex justify-content-between">
                          2. Lesson Name{" "}
                          <span>
                            <input
                              type="checkbox"
                              className="lessionStatuscheck"
                            />
                          </span>{" "}
                        </li>
                        <li className="d-flex justify-content-between">
                          3. Lesson Name{" "}
                          <span>
                            <input
                              type="checkbox"
                              className="lessionStatuscheck"
                            />
                          </span>{" "}
                        </li>
                        <li className="d-flex justify-content-between">
                          4. Lesson Name{" "}
                          <span>
                            <input
                              type="checkbox"
                              className="lessionStatuscheck"
                            />
                          </span>{" "}
                        </li>
                        <li className="d-flex justify-content-between">
                          5. Lesson Name{" "}
                          <span>
                            <input
                              type="checkbox"
                              className="lessionStatuscheck"
                            />
                          </span>{" "}
                        </li>
                        <li className="d-flex justify-content-between">
                          6. Lesson Name{" "}
                          <span>
                            <input
                              type="checkbox"
                              className="lessionStatuscheck"
                            />
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="moduleList mb-4">
                    <div
                      className="ModuleTitle heding-title"
                      data-toggle="collapse"
                      href="#module1"
                    >
                      <h4 className="w-100 d-flex justify-content-between align-items-center">
                        Module 2{" "}
                        <i className="fa fa-chevron-down icon-show"></i>
                      </h4>
                    </div>
                    <div
                      className="submoduleList panel-collapse collapse show"
                      id="module1"
                    >
                      <ul>
                        <li className="d-flex justify-content-between">
                          1. Lesson Name{" "}
                          <span className="complete">Status</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          2. Lesson Name{" "}
                          <span className="complete">Status</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          3. Lesson Name{" "}
                          <span className="Progress">Status</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          4. Lesson Name{" "}
                          <span className="incomplete">Status</span>
                        </li>
                        <li>5. Lesson Name</li>
                        <li>6. Lesson Name</li>
                      </ul>
                    </div>
                  </div>
                  <div className="moduleList mb-4">
                    <div
                      className="ModuleTitle heding-title"
                      data-toggle="collapse"
                      href="#module2"
                    >
                      <h4 className="w-100 d-flex justify-content-between align-items-center">
                        Module 3{" "}
                        <i className="fa fa-chevron-down icon-show"></i>
                      </h4>
                    </div>
                    <div
                      className="submoduleList panel-collapse collapse show"
                      id="module2"
                    >
                      <ul>
                        <li className="d-flex justify-content-between">
                          1. Lesson Name{" "}
                          <span className="complete">Status</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          2. Lesson Name{" "}
                          <span className="complete">Status</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          3. Lesson Name{" "}
                          <span className="Progress">Status</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          4. Lesson Name{" "}
                          <span className="incomplete">Status</span>
                        </li>
                        <li>5. Lesson Name</li>
                        <li>6. Lesson Name</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="modal-body Subject_Curriculam basicdetailsform  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.school_icon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> Delhi Public School</strong>{" "}
                        </h4>
                        <p>RDC RajNagar Ghaziabad</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Curriculum</li>
                    <li className="tabs active-tabs">Grades</li>
                  </ul>
                </div>
                <div className="assessmentWrap ">
                  <div className="Assessment pb-4">
                    <h4 className="mb-3">Enter Assessment Score</h4>
                    <div className="AssessmentScore">
                      <form className="bg-white content align-items-end">
                        <div className="gradeDivsion w-100 flex align-items-center">
                          <div className="input-group  datespl calender">
                            <label>
                              Assessment Date
                              <span className="mandatoryField">*</span>
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                            </label>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="marksorgrade d-flex justify-content-between align-items-center p-0">
                            <div className="input-group">
                              <label>Enter Scrore</label>
                              <div className="form-group">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <label>Enter Grade</label>
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option></option>
                                  <option>Grade 1</option>
                                  <option>Grade 2</option>
                                  <option>Grade 3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="input-group submitgrade">
                            <div className="editcard flex justify-content-center mt-5">
                              <span>
                                <i className="fa-solid fa-trash-can"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="gradeDivsion w-100 flex align-items-end">
                          <div className="input-group  datespl calender">
                            <label>
                              Assessment Date
                              <span className="mandatoryField">*</span>
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                            </label>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="marksorgrade d-flex justify-content-between align-items-center p-0">
                            <div className="input-group">
                              <label>Enter Scrore</label>
                              <div className="form-group">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <label>Enter Grade</label>
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option></option>
                                  <option>Grade 1</option>
                                  <option>Grade 2</option>
                                  <option>Grade 3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="input-group submitgrade">
                            <div className="form-group BDsubmitbutton d-flex mt-2 justify-content-end">
                              <button
                                type="button"
                                className="btn-blue btn-login d-block"
                              >
                                {" "}
                                <i className="fa-solid fa-paper-plane"></i>
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="BDsubmitbutton Addchieldbtn  addEnrichbtn  pr-10 mt-3">
                    <strong className="d-block">
                      Add New Grades <span>+</span>
                    </strong>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity9" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> {SITEFNAME.NAME}</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Curriculum</li>
                    <li className="tabs active-tabs">Resources</li>
                    <li className="tab">Need Help</li>
                    <li className="tabs">Specialists</li>
                  </ul>
                </div>
                <div className="stuchalagelist">
                  <h3>
                  {SITEFNAME.NAME} has selected a few topics that you may find
                    challenging this year:
                  </h3>
                  <div>
                    <div className="ProleumList mt-3 flex flex-wrap justify-content-start">
                      <div className="probleumListitem ">
                        <h4>
                          Numbers 17-18
                          <span className="crossmark">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        </h4>
                      </div>
                      <div className="probleumListitem selectedProbleum">
                        <h4>
                          {" "}
                          Count tens and ones up ...
                          <span className="crossmark">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        </h4>
                      </div>
                      <div className="probleumListitem">
                        <h4>
                          Make addition sentences ...
                          <span className="crossmark">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        </h4>
                      </div>
                    </div>

                    <h3 className="mb-3 mt-2 w-100 flex">
                      Select Video
                      <span>Selected Video :3</span>
                    </h3>

                    <div className="probleumrelatedvideolist flex flex-wrap w-100">
                      <h4 className="flex">
                        <span>
                          <i className="fa-brands fa-youtube mr-2" />
                          Count tens and ones up
                        </span>

                        <div className=" flex justify-content-end">
                          {" "}
                          <span className="ProblmsoladdAct">
                            Add to Course
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                        </div>
                      </h4>
                      <div className="w-100 prolistedvidoitem">
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                        <div className=" ProbvidListItem d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription   p-2">
                            <h3>The Lorem Ipsum for photos.</h3>
                            <h5 className="mt-1 mb-1">
                              The Lorem Ipsum for photos.
                            </h5>
                            <p>
                              The Lorem Ipsum for photos. The Lorem Ipsum for
                              photos.
                            </p>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <span className="uncheckbox"></span>
                            </span>
                          </div>
                        </div>
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity2" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> {SITEFNAME.NAME}</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Curriculum</li>
                    <li className="tabs ">Resources</li>
                    <li className="tab active-tabs">Need Help</li>
                    <li className="tabs">Specialists</li>
                  </ul>
                </div>
                <div className="stuchalagelist">
                  <h3>Topics that you have identified as challenging:</h3>
                  <div>
                    <div className="ProleumList mt-3 flex flex-wrap justify-content-start">
                      <div className="probleumListitem ">
                        <h4>
                          Numbers 17-18
                          <span className="crossmark">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        </h4>
                      </div>
                      <div className="probleumListitem selectedProbleum">
                        <h4>
                          {" "}
                          Count tens and ones up ...
                          <span className="crossmark">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        </h4>
                      </div>
                      <div className="probleumListitem">
                        <h4>
                          Make addition sentences ...
                          <span className="crossmark">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        </h4>
                      </div>
                    </div>

                    <h3 className="mb-3 mt-2 w-100 flex">
                      Select Video
                      <span>Selected Video :3</span>
                    </h3>

                    <div className="probleumrelatedvideolist flex flex-wrap w-100">
                      <h4 className="flex">
                        <span>
                          <i className="fa-brands fa-youtube mr-2" />
                          Count tens and ones up
                        </span>

                        <div className=" flex justify-content-end">
                          {" "}
                          <span className="ProblmsoladdAct">
                            Add to Course
                            <i className="fa-solid fa-circle-plus"></i>
                          </span>
                        </div>
                      </h4>
                      <div className="w-100 prolistedvidoitem">
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                        <div className=" ProbvidListItem d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription   p-2">
                            <h3>The Lorem Ipsum for photos.</h3>
                            <h5 className="mt-1 mb-1">
                              The Lorem Ipsum for photos.
                            </h5>
                            <p>
                              The Lorem Ipsum for photos. The Lorem Ipsum for
                              photos.
                            </p>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <span className="uncheckbox"></span>
                            </span>
                          </div>
                        </div>
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                        <div className="ProbvidListItem checkoutVideo d-flex mb-3 position-relative">
                          <div className="VideoThumbimg">
                            <img
                              src="https://picsum.photos/200/200.jpg"
                              alt=""
                            />
                          </div>
                          <div className="videoDescription  p-2">
                            <h3>
                              Complete React JS Tutorial in Hindi with 5
                              Projects in 2022
                            </h3>
                            <h5 className="mt-1 mb-1">
                              Jul 21, 2021 Welcome, Complete React JS Tutorial
                              for Beginners In Hindi In 2022.{" "}
                            </h5>
                            <p>138K View 1 Year Ago</p>
                            <div className="mt-2 d-flex align-items-center"></div>
                          </div>

                          <div className="Selvidoption">
                            <span className="rightcheck text-center">
                              <span className="d-block mb-2">
                                Please Select
                              </span>
                              <img src={image.rightCheck}></img>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity3" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> {SITEFNAME.NAME}</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Curriculum</li>
                    <li className="tabs ">Resources</li>
                    <li className="tabs active-tabs">Courses</li>
                    <li className="tab">Grades</li>
                  </ul>
                </div>
                <div className="TopicSpeclist flex flex-wrap mt-3">
                  <div className="Topicspeclistitem flex">
                    <div className="speclistimage">
                      <img src="https://loremflickr.com/200/200" />
                      <div className="RatingWrap1   flex mb-2">
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
                        <span className="ratingCount flex">
                          <i className="fa-solid fa-angle-down ml-1" />{" "}
                          <span className="ml-1">
                            {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                            (0)
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="spacelistDesc">
                      <div className="specialistTitle">
                        <div className=" p-0">
                          <h4 className="">
                            Master Strategic Thinking and Problem Solving Skills
                          </h4>
                          <span className="AddCorsebtn">
                            Add <i className="fa-solid fa-circle-plus ml-1"></i>
                          </span>
                          <p className="speclistdesctext">
                            <span>
                              {" "}
                              <i className="fa-regular fa-notebook mr-2 mt-1"></i>
                            </span>{" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt...
                          </p>
                        </div>
                      </div>
                      <ul className="spaclistcontactlist pt-3">
                        <li className="d-flex w-100 justify-content-between">
                          <div className="Coursevidtitle">
                            <h5
                              className="w-100 flex"
                              data-toggle="collapse"
                              href="#CoveredLesson"
                              aria-expanded="true"
                            >
                              Covered Lesson{" "}
                              <i className="fa-light fa-chevron-down"></i>
                            </h5>
                            <ul
                              className="panel-collapse coverlesson collapse"
                              id="CoveredLesson"
                              aria-expanded="true"
                            >
                              <li>
                                Identify an author's statement of opinionsVicky
                              </li>
                              <li>Order of eventsVicky</li>
                              <li>
                                {" "}
                                Determine the main idea of a passageVicky
                              </li>
                              <li>
                                1.Identify an author's statement of
                                opinionsVicky
                              </li>
                              <li>Order of eventsVicky</li>
                              <li>
                                {" "}
                                Determine the main idea of a passageVicky
                              </li>
                            </ul>
                            {/* <SelectPicker data={data} groupBy="role" style={{}} />   */}
                          </div>
                          <div className="TeacherName d-flex">
                            <div className="TeacherActivityimg mr-2">
                              <img src={image.CourseProviderThumb} alt="" />
                            </div>
                            <div className="techrrat ">
                              <h5 className="">Britney Watson</h5>
                              <div className="RatingWrap1   flex">
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
                                <span className="ratingCount">
                                  <i className="fa-solid fa-angle-down ml-1" />{" "}
                                  <span className="ml-1">
                                    {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                    (0)
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li></li>
                        <li></li>
                        {/* <li>
                        <span>
                          <img src={image.teacheremail} className="mr-2"></img>
                        </span>
                        <a href="mailto:Abcd@gmail.com">Abcd@gmail.com</a>
                      </li>
                      <li>
                        <span>
                          <i className="fa-solid fa-address-book mr-2"></i>
                        </span>
                        Abc Kharjivanpur Muradnagar Gzb
                      </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity58" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading p-0 border-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.CourseTitleIcon} alt="" />
                      Math{" "}
                      <span
                        className="ml-2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdown"
                        data-toggle="dropdown"
                      >
                        <i class="fa-regular fa-chevron-down"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdown"
                      >
                        <li>
                          <span className="SubFName">M</span>
                          MathMatics
                        </li>
                        <li>
                          <span className="SubFName">S</span>
                          Science
                        </li>
                        <li>
                          <span className="SubFName">E</span>
                          English
                        </li>
                        <li>
                          <span className="SubFName">S</span>
                          Social Science
                        </li>
                        <li>
                          <span className="SubFName">G</span>
                          General Studies
                        </li>
                      </ul>
                    </span>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      <i class="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="fixedtoppar">
                  <div className="bodyTitle  mb-3">
                    <div className="subtitleHeadinhg flex">
                      <div className="bodyimagetitle flex">
                        <span>
                          {" "}
                          <img src={image.vikylogoicon} className="mr-2" />
                        </span>
                        <div>
                          <h4 className="justify-content-between">
                            {" "}
                            <strong> {SITEFNAME.NAME}</strong>{" "}
                          </h4>
                          <p>Hi, Here is how I can help you with Math</p>
                        </div>
                      </div>
                      <div className="ListIcon">
                        {" "}
                        <span
                          className="threeDots"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="navbardropdownAct"
                          data-toggle="dropdown"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </span>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbardropdownAct"
                        >
                          <li>
                            <span className="flex w-100">
                              Activity List{" "}
                              <i className="fa-solid fa-angle-down ml-2"></i>
                            </span>
                          </li>
                          <li>
                            <span className="">
                              <i className="fa-brands fa-youtube mr-1"></i>{" "}
                              Activity Name
                            </span>
                          </li>
                          <li>
                            <span className="">
                              <i className="fa-solid fa-link"></i> Activity Name
                            </span>
                          </li>
                          <li>
                            <span className="">
                              <i className="fa-solid fa-book"></i> Activity Name
                            </span>
                          </li>
                          <li>
                            <span className="">
                              <i className="fa-brands fa-youtube mr-1"></i>{" "}
                              Activity Name
                            </span>
                          </li>
                          <li>
                            <span className="">
                              <i className="fa-solid fa-book"></i> Activity Name
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tabgrid AddActivityTab">
                    <ul>
                      <li class="tabs1">
                        <i class="fa-regular fa-folders"></i>Curriculum
                      </li>
                      <li class="tabs1">
                        <button>
                          <i class="fa-regular fa-person-chalkboard"></i>
                          Resources
                        </button>
                      </li>
                      <li class="tabs1  active-tabs">
                        <i class="fa-regular fa-graduation-cap"></i>Courses
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="TopicSpeclist flex flex-wrap mt-3">
                  <div className="Gridcard SocialGridcard ">
                    <div className="Gridsocialsec">
                      <div className="GridiamgeCard">
                        <div className="Gridimage">
                          <img src={image.mathMatics} alt="" />
                        </div>
                        <div className=" ratepopupp position-relative">
                          <div className="RatingWrap1  flex  dropdown-toggle mt-2 justify-content-center">
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
                            <span className="ratingCount">
                              <i className="fa-solid fa-angle-down ml-1" />{" "}
                              <span className="ml-1">
                                {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                (0)
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="priceWrap">
                        <button class="btn-blue btn-login d-block w-100 m-0">
                          <i class="fa-solid fa-paper-plane mr-2"></i>Enroll
                        </button>
                      </div>
                    </div>
                    <div className="GridDetails">
                      <div class="GridCardTitle">
                        <h3 data-toggle="modal" data-target="#datapage">
                          <div class="pointer">Goals - Just the Basics</div>
                          <span>
                            <span class="earnnoCoin">0</span>
                            <img src={image.money_bag} alt="" />
                          </span>
                        </h3>
                      </div>
                      <div className="GridCardFullDetails">
                        <div className="GridCardTitleDesc">
                          <div class="flex">
                            <span class="gradeiconimage ml-5 d-flex">
                              <img src={image.mortarboard} />
                              <span class="flex">
                                Grade: <strong>6</strong>
                              </span>
                            </span>
                          </div>
                          <div>
                            <p>
                              <span class="SCourseLevel">
                                <img src={image.sCourseleve3lcon} alt="" />
                                Level 1
                              </span>
                            </p>
                          </div>
                          <div>
                            <p>
                              <span class="SCourseLevel pointer">
                                <img src={image.rewardimg} alt="" />
                                Reward
                              </span>
                            </p>
                          </div>
                          <div className="position-relative Coursecompprcent">
                            <p className="">
                              {/* <div>
                          <span className=" d-flex m-1">
                         
                            <span className="coursecomptcertifie flex">
                             
                             <span data-for={data?.id}
                              data-event-off=""
                              data-tip className="pointer certificateIcon">
                              <i className="fa-solid fa-trophy-star pointer"></i>
                              </span> 
                              <img
                           
                                src={image.certificate}
                                data-for={data?.id}
                                data-event-off=""
                                data-tip
                                className="pointer certificateIcon"
                              /> 
                            </span>
                          </span>
                        </div> */}

                              <span>
                                <RoundProgress data={10} className="m-1" />
                              </span>

                              <span className="courserelatedCertificate"></span>
                            </p>
                          </div>
                          <div className="GridTeacher align-items-center justify-content-end">
                            <span class="TeacherActivityimg mr-2 pointer">
                              <img src={image.teachers} alt="" />
                            </span>
                            <div class="teachername pointer">
                              <span>Amber Arevalos</span>
                              <div className="RatingWrap1  flex  dropdown-toggle TeacherratingCount">
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
                                <span className="ratingCount">
                                  <i className="fa-solid fa-angle-down ml-1" />{" "}
                                  <span className="ml-1">
                                    {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                    (0)
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="CourseardDesc">
                          <div class="d-flex">
                            <span>
                              <img src={image.myhc_92884} alt="" />
                            </span>
                            <p
                              id="textheight"
                              class="text textdescription coursetextheght"
                            >
                              <span class="textdesc">
                                As individuals, our goals are personal to either
                                the sport we play or how fast we can run and how
                                high we can jump. For each age group you reach,
                                there are benchmarks or standards we need to
                                achieve to determine your health and growth{" "}
                              </span>
                              <span class="read-or-hide pointer">
                                <span class="readmoretxt">...Read More</span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="gridActivity">
                        <div className="activityListitems mt-2">
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk1</span>
                                  <div>Goals on Goals on Goals!</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk2</span>
                                  <div>How Well Do We Know Ourselves?..</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk3</span>
                                  <div>Not all goals can be winners.....</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk4</span>
                                  <div>But What About the Perks?</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Gridcard SocialGridcard ">
                    <div className="Gridsocialsec">
                      <div className="GridiamgeCard">
                        <div className="Gridimage">
                          <img src={image.mathMatics} alt="" />
                        </div>
                        <div className=" ratepopupp position-relative">
                          <div className="RatingWrap1  flex  dropdown-toggle mt-2 justify-content-center">
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
                            <span className="ratingCount">
                              <i className="fa-solid fa-angle-down ml-1" />{" "}
                              <span className="ml-1">
                                {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                (0)
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="priceWrap">
                        <button class="btn-blue btn-login d-block w-100 m-0">
                          <i class="fa-solid fa-paper-plane mr-2"></i>Enroll
                        </button>
                      </div>
                    </div>
                    <div className="GridDetails">
                      <div class="GridCardTitle">
                        <h3 data-toggle="modal" data-target="#datapage">
                          <div class="pointer">Goals - Just the Basics</div>
                          <span>
                            <span class="earnnoCoin">0</span>
                            <img src={image.money_bag} alt="" />
                          </span>
                        </h3>
                      </div>
                      <div className="GridCardFullDetails">
                        <div className="GridCardTitleDesc">
                          <div class="flex">
                            <span class="gradeiconimage ml-5 d-flex">
                              <img src={image.mortarboard} />
                              <span class="flex">
                                Grade: <strong>6</strong>
                              </span>
                            </span>
                          </div>
                          <div>
                            <p>
                              <span class="SCourseLevel">
                                <img src={image.sCourseleve3lcon} alt="" />
                                Level 1
                              </span>
                            </p>
                          </div>
                          <div>
                            <p>
                              <span class="SCourseLevel pointer">
                                <img src={image.rewardimg} alt="" />
                                Reward
                              </span>
                            </p>
                          </div>
                          <div className="position-relative Coursecompprcent">
                            <p className="">
                              {/* <div>
                          <span className=" d-flex m-1">
                         
                            <span className="coursecomptcertifie flex">
                             
                             <span data-for={data?.id}
                              data-event-off=""
                              data-tip className="pointer certificateIcon">
                              <i className="fa-solid fa-trophy-star pointer"></i>
                              </span> 
                              <img
                           
                                src={image.certificate}
                                data-for={data?.id}
                                data-event-off=""
                                data-tip
                                className="pointer certificateIcon"
                              /> 
                            </span>
                          </span>
                        </div> */}

                              <span>
                                <RoundProgress data={10} className="m-1" />
                              </span>

                              <span className="courserelatedCertificate"></span>
                            </p>
                          </div>
                          <div className="GridTeacher align-items-center justify-content-end">
                            <span class="TeacherActivityimg mr-2 pointer">
                              <img src={image.teachers} alt="" />
                            </span>
                            <div class="teachername pointer">
                              <span>Amber Arevalos</span>
                              <div className="RatingWrap1  flex  dropdown-toggle TeacherratingCount">
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
                                <span className="ratingCount">
                                  <i className="fa-solid fa-angle-down ml-1" />{" "}
                                  <span className="ml-1">
                                    {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                    (0)
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="CourseardDesc">
                          <div class="d-flex">
                            <span>
                              <img src={image.myhc_92884} alt="" />
                            </span>
                            <p
                              id="textheight"
                              class="text textdescription coursetextheght"
                            >
                              <span class="textdesc">
                                As individuals, our goals are personal to either
                                the sport we play or how fast we can run and how
                                high we can jump. For each age group you reach,
                                there are benchmarks or standards we need to
                                achieve to determine your health and growth{" "}
                              </span>
                              <span class="read-or-hide pointer">
                                <span class="readmoretxt">...Read More</span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="gridActivity">
                        <div className="activityListitems mt-2">
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk1</span>
                                  <div>Goals on Goals on Goals!</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk2</span>
                                  <div>How Well Do We Know Ourselves?..</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk3</span>
                                  <div>Not all goals can be winners.....</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk4</span>
                                  <div>But What About the Perks?</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Gridcard SocialGridcard ">
                    <div className="Gridsocialsec">
                      <div className="GridiamgeCard">
                        <div className="Gridimage">
                          <img src={image.mathMatics} alt="" />
                        </div>
                        <div className=" ratepopupp position-relative">
                          <div className="RatingWrap1  flex  dropdown-toggle mt-2 justify-content-center">
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
                            <span className="ratingCount">
                              <i className="fa-solid fa-angle-down ml-1" />{" "}
                              <span className="ml-1">
                                {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                (0)
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="priceWrap">
                        <button class="btn-blue btn-login d-block w-100 m-0">
                          <i class="fa-solid fa-paper-plane mr-2"></i>Enroll
                        </button>
                      </div>
                    </div>
                    <div className="GridDetails">
                      <div class="GridCardTitle">
                        <h3 data-toggle="modal" data-target="#datapage">
                          <div class="pointer">Goals - Just the Basics</div>
                          <span>
                            <span class="earnnoCoin">0</span>
                            <img src={image.money_bag} alt="" />
                          </span>
                        </h3>
                      </div>
                      <div className="GridCardFullDetails">
                        <div className="GridCardTitleDesc">
                          <div class="flex">
                            <span class="gradeiconimage ml-5 d-flex">
                              <img src={image.mortarboard} />
                              <span class="flex">
                                Grade: <strong>6</strong>
                              </span>
                            </span>
                          </div>
                          <div>
                            <p>
                              <span class="SCourseLevel">
                                <img src={image.sCourseleve3lcon} alt="" />
                                Level 1
                              </span>
                            </p>
                          </div>
                          <div>
                            <p>
                              <span class="SCourseLevel pointer">
                                <img src={image.rewardimg} alt="" />
                                Reward
                              </span>
                            </p>
                          </div>
                          <div className="position-relative Coursecompprcent">
                            <p className="">
                              {/* <div>
                          <span className=" d-flex m-1">
                         
                            <span className="coursecomptcertifie flex">
                             
                             <span data-for={data?.id}
                              data-event-off=""
                              data-tip className="pointer certificateIcon">
                              <i className="fa-solid fa-trophy-star pointer"></i>
                              </span> 
                              <img
                           
                                src={image.certificate}
                                data-for={data?.id}
                                data-event-off=""
                                data-tip
                                className="pointer certificateIcon"
                              /> 
                            </span>
                          </span>
                        </div> */}

                              <span>
                                <RoundProgress data={10} className="m-1" />
                              </span>

                              <span className="courserelatedCertificate"></span>
                            </p>
                          </div>
                          <div className="GridTeacher align-items-center justify-content-end">
                            <span class="TeacherActivityimg mr-2 pointer">
                              <img src={image.teachers} alt="" />
                            </span>
                            <div class="teachername pointer">
                              <span>Amber Arevalos</span>
                              <div className="RatingWrap1  flex  dropdown-toggle TeacherratingCount">
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
                                <span className="ratingCount">
                                  <i className="fa-solid fa-angle-down ml-1" />{" "}
                                  <span className="ml-1">
                                    {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                    (0)
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="CourseardDesc">
                          <div class="d-flex">
                            <span>
                              <img src={image.myhc_92884} alt="" />
                            </span>
                            <p
                              id="textheight"
                              class="text textdescription coursetextheght"
                            >
                              <span class="textdesc">
                                As individuals, our goals are personal to either
                                the sport we play or how fast we can run and how
                                high we can jump. For each age group you reach,
                                there are benchmarks or standards we need to
                                achieve to determine your health and growth{" "}
                              </span>
                              <span class="read-or-hide pointer">
                                <span class="readmoretxt">...Read More</span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="gridActivity">
                        <div className="activityListitems mt-2">
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk1</span>
                                  <div>Goals on Goals on Goals!</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk2</span>
                                  <div>How Well Do We Know Ourselves?..</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk3</span>
                                  <div>Not all goals can be winners.....</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                              <h3 className="ActivyTitleName">
                                <div className="pointer">
                                  <span className="ThumnailTeacher">Wk4</span>
                                  <div>But What About the Perks?</div>
                                </div>
                                <div className="dropdownlistmodl flex">
                                  <div className="position-relative Coursecompprcent">
                                    <p className="">
                                      <RoundProgress
                                        data={10}
                                        className="m-1"
                                      />
                                    </p>
                                  </div>
                                  <strong
                                    class="Activitymenubar ml-2 pointer "
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="barlistdropdown"
                                    data-toggle="dropdown"
                                  >
                                    {" "}
                                    <i class="fa-solid fa-bars"></i>
                                  </strong>
                                  <ul
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="barlistdropdown"
                                  >
                                    <li class="pointer">
                                      <p class="pointer">
                                        <img
                                          src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                          alt=""
                                        />{" "}
                                        Series
                                      </p>
                                    </li>
                                    <li class="pointer">
                                      <p>
                                        <img
                                          src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                          alt=""
                                        />
                                        References
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity4" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> {SITEFNAME.NAME}</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs active-tabs">Curriculum</li>
                    <li className="tabs ">Resources</li>
                    <li className="tab">Need Help</li>
                    <li className="tabs">Specialists</li>
                  </ul>
                </div>
                <div className="CuriculmContnr">
                  <ul className="CurriMainTitle flex">
                    <li>ModuleNo</li>
                    <li>Problem Mark</li>
                    <li>Complete</li>
                  </ul>
                  <div className="moduleWrap" id="tab1">
                    <div className="moduleList border mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 1{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            <span> 1. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationfillhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 3. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 4. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 5. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="moduleList border mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module2"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 2{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse"
                        id="module2"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            <span> 1. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationfillhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 3. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 4. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 5. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="moduleList border">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module3"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 3{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse"
                        id="module3"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            <span> 1. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationfillhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 3. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 4. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 5. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <input
                                type="checkbox"
                                className="lessionStatuscheck"
                              />
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity5" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>Math </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs active-tabs">Curriculum</li>
                  </ul>
                </div>
                <div className="CuriculmContnr">
                  <ul className="CurriMainTitle flex">
                    <li>Module & Lessons </li>
                    <li>
                      Need Help{" "}
                      <span
                        className="Tooltiphelp"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Need Help information?"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </span>
                    </li>
                    <li>
                      Completed{" "}
                      <span
                        className="Tooltiphelp"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Lession Complete information?"
                      >
                        <i className="fa-regular fa-circle-question"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="form-check form-switch">
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Expand all
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={toggledClass}
                    />
                  </div>
                  <div
                    id="tab1"
                    className={isActive ? "openlist" : "AllcloseList closelist"}
                  >
                    <div className="moduleList border mb-4">
                      <div className="ModuleTitle heding-title submoduleList">
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          <ul className="w-100">
                            <li className="d-flex justify-content-between">
                              <span> Module 1</span>
                              <span className="mr-5">
                                <img src={image.exclamationhexagon} />
                              </span>
                              <span>
                                <label className="Selcheckbox">
                                  <input
                                    type="checkbox"
                                    id="Public"
                                    name="schoolType"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </span>{" "}
                            </li>
                          </ul>
                          <i
                            className="fa fa-chevron-down icon-show"
                            data-toggle="collapse"
                            href="#module"
                          ></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            <span> 1. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationfillhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 3. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 4. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 5. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="moduleList border mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module1"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 1{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module1"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            <span> 1. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationfillhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 3. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 4. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 5. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="moduleList border mb-4">
                      <div
                        className="ModuleTitle heding-title"
                        data-toggle="collapse"
                        href="#module2"
                      >
                        <h4 className="w-100 d-flex justify-content-between align-items-center">
                          Module 1{" "}
                          <i className="fa fa-chevron-down icon-show"></i>
                        </h4>
                      </div>
                      <div
                        className="submoduleList panel-collapse collapse show"
                        id="module2"
                      >
                        <ul>
                          <li className="d-flex justify-content-between">
                            <span> 1. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationfillhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 2. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 3. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 4. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            <span> 5. Lesson Name</span>
                            <span className="mr-5">
                              <img src={image.exclamationhexagon} />
                            </span>
                            <span>
                              <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  id="Public"
                                  name="schoolType"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity6" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading">
                  <button
                    type="button"
                    className="close ClosereportCard position-relative"
                    data-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body ">
                <div className="reportcardwrapper">
                  <div className="ReportTitle flex">
                    <div className="ReportcardName">
                      <h3>
                        <span>Student Name</span>Jaiden Chabbra
                      </h3>
                      <h4 className="flex">
                        <span>Grade</span>2
                      </h4>
                    </div>
                    <div className="RepoVickylogo p-2">
                      <img src={image.Sidebarlogo} />
                    </div>
                    <div className="RepoTeacherInfo">
                      <h3>
                        <span>Year</span>2020-21
                      </h3>
                      <h4 className="flex">
                        <span>Teacher</span>Teacher 1
                      </h4>
                    </div>
                  </div>
                  <div className="EvaluationScaletab">
                    <h4 className="mb-2">Evaluation Scale </h4>
                    <table>
                      <tr>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td> Exceed Expectation</td>
                        <td>Exceed Expectation</td>
                        <td>Meeting Expectation</td>
                        <td>Appropriating Expectation</td>
                        <td>Not Meeting Expectation</td>
                      </tr>
                    </table>
                  </div>
                  <div className="EvaluationScaletab QuestionList">
                    <table>
                      <tr>
                        <th>Leaning Self (Evaluation Scale 1 - 5)</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                    </table>
                  </div>
                  <div className="EvaluationScaletab QuestionList">
                    <table>
                      <tr>
                        <th>Leaning Self (Evaluation Scale 1 - 5)</th>
                        <th>A1</th>
                        <th>A2</th>
                        <th>A3</th>
                        <th>A4</th>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Follow The Owner Color</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity7" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    <img src={image.yellowflag} />
                    Add Secondary Activity
                    <button
                      type="button"
                      className="close ClosereportCard position-relative"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </h2>
                </div>
              </div>
              <div className="ActivityViewFormat">
                <div className="AViewTitle">
                  <h3>Title</h3>
                  <p>
                    The DESC command is used to sort the data returned in
                    descending order. The following SQL statement selects all
                    the columns from the "Customers" table, sorted ...
                  </p>
                  <p>
                    <span>Share Type :</span> PRIVATE
                  </p>
                </div>
                <div className="form-title">
                  <h3 data-toggle="collapse">Link(s) List :</h3>
                </div>
                <div className="AviewListing flex flex-wrap mt-3">
                  <div className="AViewListitem linkViewItem mb-3 border">
                    <div className="LinkImage pointer">
                      <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202207/dravid-rahul-sixteen_nine.jpg" />
                    </div>
                    <div className=" videoDescription m-3 LinkDescription">
                      <h3>Rahul Dravid Instagram Reel: र...</h3>
                      <p>
                        शिखर धवन की अगुवाई में भारतीय टीम यहां पर वनडे सीरीज़
                        खेलेगी, मंगलवार को जब खिलाड़ी पहुंचे तब एक वीडियो में
                        कोच राहुल द्रविड़ का अंदाज़ हर किसी को भा ...
                      </p>
                      <a href="#" className="">
                        {" "}
                        <i className="fa-brands fa-youtube mr-2"></i>
                        www.aajtak.in
                      </a>
                      <span className="deletelink">
                        <i className="fa fa-trash mr-1" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                  <div className="AViewListitem linkViewItem mb-3 border">
                    <div className="LinkImage pointer">
                      <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202207/dravid-rahul-sixteen_nine.jpg" />
                    </div>
                    <div className=" videoDescription m-3 LinkDescription">
                      <h3>Rahul Dravid Instagram Reel: र...</h3>
                      <p>
                        शिखर धवन की अगुवाई में भारतीय टीम यहां पर वनडे सीरीज़
                        खेलेगी, मंगलवार को जब खिलाड़ी पहुंचे तब एक वीडियो में
                        कोच राहुल द्रविड़ का अंदाज़ हर किसी को भा ...
                      </p>
                      <a href="#" className="">
                        {" "}
                        <i className="fa-brands fa-youtube mr-2"></i>
                        www.aajtak.in
                      </a>
                      <span className="deletelink">
                        <i className="fa fa-trash mr-1" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                  <div className="AViewListitem linkViewItem mb-3 border">
                    <div className="LinkImage pointer">
                      <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202207/dravid-rahul-sixteen_nine.jpg" />
                    </div>
                    <div className=" videoDescription m-3 LinkDescription">
                      <h3>Rahul Dravid Instagram Reel: र...</h3>
                      <p>
                        शिखर धवन की अगुवाई में भारतीय टीम यहां पर वनडे सीरीज़
                        खेलेगी, मंगलवार को जब खिलाड़ी पहुंचे तब एक वीडियो में
                        कोच राहुल द्रविड़ का अंदाज़ हर किसी को भा ...
                      </p>
                      <a href="#" className="">
                        {" "}
                        <i className="fa-brands fa-youtube mr-2"></i>
                        www.aajtak.in
                      </a>
                      <span className="deletelink">
                        <i className="fa fa-trash mr-1" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity8" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    <img src={image.yellowflag} />
                    Add Secondary Activity
                    <button
                      type="button"
                      className="close ClosereportCard position-relative"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </h2>
                </div>
              </div>
              <div className="ActivityViewFormat">
                <div className="AViewTitle">
                  <h3>Title</h3>
                  <p>
                    The DESC command is used to sort the data returned in
                    descending order. The following SQL statement selects all
                    the columns from the "Customers" table, sorted ...
                  </p>
                  <p>
                    <span>Share Type :</span> PRIVATE
                  </p>
                </div>
                <div className="form-title">
                  <h3 data-toggle="collapse">Video(s) List :</h3>
                </div>
                <div className="searchVideoList selectVideoviewList mt-3">
                  <ul>
                    <li className="d-flex mb-3 position-relative">
                      <div className="VideoThumbimg">
                        <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                      </div>
                      <div className="videoDescription ml-2">
                        <h3>Har Har Shambhu Shiv...</h3>
                        <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                        <p>
                          <span>2.6M View</span> 4 Year ago
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-3 position-relative">
                      <div className="VideoThumbimg">
                        <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                      </div>
                      <div className="videoDescription ml-2">
                        <h3>Har Har Shambhu Shiv...</h3>
                        <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                        <p>
                          <span>2.6M View</span> 4 Year ago
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-3 position-relative">
                      <div className="VideoThumbimg">
                        <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                      </div>
                      <div className="videoDescription ml-2">
                        <h3>Har Har Shambhu Shiv...</h3>
                        <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                        <p>
                          <span>2.6M View</span> 4 Year ago
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-3 position-relative">
                      <div className="VideoThumbimg">
                        <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                      </div>
                      <div className="videoDescription ml-2">
                        <h3>Har Har Shambhu Shiv...</h3>
                        <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                        <p>
                          <span>2.6M View</span> 4 Year ago
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-3 position-relative">
                      <div className="VideoThumbimg">
                        <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                      </div>
                      <div className="videoDescription ml-2">
                        <h3>Har Har Shambhu Shiv...</h3>
                        <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                        <p>
                          <span>2.6M View</span> 4 Year ago
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity10" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam basicdetailsform  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span className="flex">
                        {" "}
                        {/* <img src={image.school_icon} className="mr-2" /> */}
                        <i className="fa-solid fa-school m-0"></i>
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> Delhi Public School</strong>{" "}
                        </h4>
                        <p>RDC RajNagar Ghaziabad</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Curriculum</li>
                    <li className="tabs active-tabs">Grade/Score</li>
                  </ul>
                </div>
                <div className="assessmentWrap ">
                  <div className="signupType mt-2 mb-3">
                    <label className="Selcheckbox">
                      Math
                      <input type="radio" id="" name="Subject" checked></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="Selcheckbox">
                      All Courses
                      <input
                        type="radio"
                        id=""
                        name="Subject"
                        // value="LEARNER"
                      ></input>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="Assessment pb-4">
                    <div className="AssessmentScore">
                      <form className="bg-white content align-items-end">
                        <div className="gradeDivsion w-100 flex align-items-center">
                          <div className="input-group  datespl calender">
                            <label>
                              Assessment Date
                              <span className="mandatoryField">*</span>
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                            </label>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="marksorgrade d-flex justify-content-between align-items-center p-0">
                            <div className="input-group">
                              <label>Enter Scrore</label>
                              <div className="form-group">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <label>Enter Grade</label>
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          {/* <div className="input-group submitgrade">
                            <div className="editcard flex justify-content-center mt-5">
                              {/* <span>
                                <i className="fa-solid fa-trash-can"></i>
                              </span> 
                            </div>
                          </div> */}
                        </div>
                        <div className="gradeDivsion w-100 flex align-items-end">
                          <div className="input-group  datespl calender">
                            <label>
                              Assessment Date
                              <span className="mandatoryField">*</span>
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                            </label>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="marksorgrade d-flex justify-content-between align-items-center p-0">
                            <div className="input-group">
                              <label>Enter Scrore</label>
                              <div className="form-group">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <label>Enter Grade</label>
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input-group submitgrade w-100 mt-3">
                          <div className="form-group BDsubmitbutton d-flex mt-2 justify-content-end">
                            <button
                              type="button"
                              className="btn-blue btn-login d-block"
                            >
                              {" "}
                              <i className="fa-solid fa-paper-plane"></i>
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="BDsubmitbutton Addchieldbtn  addEnrichbtn  pr-10 mt-3">
                    <strong className="d-block">
                      Add Grade/Score <span>+</span>
                    </strong>
                  </div>
                  <div className="AllSubgradetable">
                    <div className="datatable position-relative w-100">
                      <div className="tableheader d-flex">
                        <div className="tabitem"> </div>
                        <div className="tabitem d-flex justify-content-center">
                          Period 1
                          <div className="editcard m-0">
                            <span>
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                          </div>
                        </div>

                        <div className="position-relative p-0 bg-transparent">
                          <div className="loadmoreActivity AddoreCol">
                            Add <i className="fa-solid fa-circle-plus"></i>
                          </div>
                        </div>
                      </div>
                      <div className="tablebody">
                        <div className="tabletr  d-flex">
                          <div className="tabitem">
                            {" "}
                            <i className="fa-light fa-arrow-down-to-line"></i>
                            Course / Date{" "}
                            <i className="fa-light fa-arrow-right-to-line ml-1"></i>
                          </div>

                          <div className="dateitems">
                            <div className="input-group w-100 datespl calender">
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Assessment Date..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tabletr  d-flex">
                          <div className="tabitem">Math</div>

                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tabletr  d-flex">
                          <div className="tabitem">English</div>

                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tabletr  d-flex">
                          <div className="tabitem">Science</div>

                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tabletr  d-flex">
                          <div className="tabitem">Social Science</div>

                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-group submitgrade w-100 mt-3">
                      <div className="form-group BDsubmitbutton d-flex mt-2 justify-content-end">
                        <button
                          type="button"
                          className="btn-blue btn-login d-block"
                        >
                          {" "}
                          <i className="fa-solid fa-paper-plane"></i>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity15" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="bodyTitle  mb-3">
                  <div className="flex w-100 flex-wrap">
                    <div className="Activity ActiveActivity">
                      <div className="ActivitycrdTitle">
                        <>
                          <img src={image.yellowflag} />
                          <>
                            <span className="pointer">My School</span>
                          </>
                          <div className="ShareYourActivity flex Addschoolcard">
                            <div className="dropdownlistmodl">
                              <span
                                className="Activitymenubar ml-2 "
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="barlistdropdown"
                                data-toggle="dropdown"
                              >
                                {" "}
                                <i className="fa-solid fa-bars" />
                              </span>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="barlistdropdown"
                              >
                                <li>
                                  <span className="">
                                    <i className="fa-solid fa-trash-can" />{" "}
                                    Delete
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                    <div className="Activity">
                      <div className="ActivitycrdTitle">
                        <>
                          <img src={image.yellowflag} />
                          <>
                            <span className="pointer">My School</span>
                          </>
                          <div className="ShareYourActivity flex Addschoolcard">
                            <div className="dropdownlistmodl">
                              <span
                                className="Activitymenubar ml-2 "
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="barlistdropdown"
                                data-toggle="dropdown"
                              >
                                {" "}
                                <i className="fa-solid fa-bars" />
                              </span>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="barlistdropdown"
                              >
                                <li>
                                  <span className="">
                                    <i className="fa-solid fa-trash-can" />{" "}
                                    Delete
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                    <div className="Activity">
                      <div className="ActivitycrdTitle">
                        <>
                          <img src={image.yellowflag} />
                          <>
                            <span className="pointer">My School</span>
                          </>
                          <div className="ShareYourActivity flex Addschoolcard">
                            <div className="dropdownlistmodl">
                              <span
                                className="Activitymenubar ml-2 "
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="barlistdropdown"
                                data-toggle="dropdown"
                              >
                                {" "}
                                <i className="fa-solid fa-bars" />
                              </span>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="barlistdropdown"
                              >
                                <li>
                                  <span className="">
                                    <i className="fa-solid fa-trash-can" />{" "}
                                    Delete
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                    <div className="Activity">
                      <div className="ActivitycrdTitle">
                        <>
                          <img src={image.yellowflag} />
                          <>
                            <span className="pointer">My School</span>
                          </>
                          <div className="ShareYourActivity flex Addschoolcard">
                            <div className="dropdownlistmodl">
                              <span
                                className="Activitymenubar ml-2 "
                                aria-haspopup="true"
                                aria-expanded="false"
                                id="barlistdropdown"
                                data-toggle="dropdown"
                              >
                                {" "}
                                <i className="fa-solid fa-bars" />
                              </span>
                              <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="barlistdropdown"
                              >
                                <li>
                                  <span className="">
                                    <i className="fa-solid fa-trash-can" />{" "}
                                    Delete
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex align-items-baseline">
                      {/* <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" /> 
                        
                      </span> */}

                      <div>
                        <h4 className="">
                          <strong>
                            <i className="fa-solid fa-link fontawsomeicon mr-2"></i>
                          </strong>{" "}
                          <strong> {SITEFNAME.NAME}</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="AViewTitle mt-3">
                    <p>
                      <span>Share Type :</span> PRIVATE
                    </p>
                  </div>
                  <div className="form-title">
                    <h3 data-toggle="collapse">Link(s):</h3>
                  </div>
                  <div className="AviewListing flex flex-wrap mt-3">
                    <div className="AViewListitem linkViewItem mb-3 border">
                      <div className="LinkImage pointer">
                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202207/dravid-rahul-sixteen_nine.jpg" />
                      </div>
                      <div className=" videoDescription m-3 LinkDescription">
                        <h3>Rahul Dravid Instagram Reel: र...</h3>
                        <p>
                          शिखर धवन की अगुवाई में भारतीय टीम यहां पर वनडे सीरीज़
                          खेलेगी, मंगलवार को जब खिलाड़ी पहुंचे तब एक वीडियो में
                          कोच राहुल द्रविड़ का अंदाज़ हर किसी को भा ...
                        </p>
                        <a href="#" className="">
                          {" "}
                          <i className="fa-brands fa-youtube mr-2"></i>
                          www.aajtak.in
                        </a>
                        <span className="deletelink">
                          <i
                            className="fa fa-trash mr-1"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="AViewListitem linkViewItem mb-3 border">
                      <div className="LinkImage pointer">
                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202207/dravid-rahul-sixteen_nine.jpg" />
                      </div>
                      <div className=" videoDescription m-3 LinkDescription">
                        <h3>Rahul Dravid Instagram Reel: र...</h3>
                        <p>
                          शिखर धवन की अगुवाई में भारतीय टीम यहां पर वनडे सीरीज़
                          खेलेगी, मंगलवार को जब खिलाड़ी पहुंचे तब एक वीडियो में
                          कोच राहुल द्रविड़ का अंदाज़ हर किसी को भा ...
                        </p>
                        <a href="#" className="">
                          {" "}
                          <i className="fa-brands fa-youtube mr-2"></i>
                          www.aajtak.in
                        </a>
                        <span className="deletelink">
                          <i
                            className="fa fa-trash mr-1"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                    <div className="AViewListitem linkViewItem mb-3 border">
                      <div className="LinkImage pointer">
                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202207/dravid-rahul-sixteen_nine.jpg" />
                      </div>
                      <div className=" videoDescription m-3 LinkDescription">
                        <h3>Rahul Dravid Instagram Reel: र...</h3>
                        <p>
                          शिखर धवन की अगुवाई में भारतीय टीम यहां पर वनडे सीरीज़
                          खेलेगी, मंगलवार को जब खिलाड़ी पहुंचे तब एक वीडियो में
                          कोच राहुल द्रविड़ का अंदाज़ हर किसी को भा ...
                        </p>
                        <a href="#" className="">
                          {" "}
                          <i className="fa-brands fa-youtube mr-2"></i>
                          www.aajtak.in
                        </a>
                        <span className="deletelink">
                          <i
                            className="fa fa-trash mr-1"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-title">
                    <h3 data-toggle="collapse">Video(s):</h3>
                  </div>
                  <div className="searchVideoList selectVideoviewList mt-3">
                    <ul>
                      <li className="d-flex mb-3 position-relative">
                        <div className="VideoThumbimg">
                          <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                        </div>
                        <div className="videoDescription ml-2">
                          <h3>Har Har Shambhu Shiv...</h3>
                          <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                          <p>
                            <span>2.6M View</span> 4 Year ago
                          </p>
                          <span className="deletelink">
                            <i
                              className="fa fa-trash mr-1"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </li>
                      <li className="d-flex mb-3 position-relative">
                        <div className="VideoThumbimg">
                          <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                        </div>
                        <div className="videoDescription ml-2">
                          <h3>Har Har Shambhu Shiv...</h3>
                          <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                          <p>
                            <span>2.6M View</span> 4 Year ago
                          </p>
                          <span className="deletelink">
                            <i
                              className="fa fa-trash mr-1"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </li>
                      <li className="d-flex mb-3 position-relative">
                        <div className="VideoThumbimg">
                          <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                        </div>
                        <div className="videoDescription ml-2">
                          <h3>Har Har Shambhu Shiv...</h3>
                          <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                          <p>
                            <span>2.6M View</span> 4 Year ago
                          </p>
                          <span className="deletelink">
                            <i
                              className="fa fa-trash mr-1"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </li>
                      <li className="d-flex mb-3 position-relative">
                        <div className="VideoThumbimg">
                          <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                        </div>
                        <div className="videoDescription ml-2">
                          <h3>Har Har Shambhu Shiv...</h3>
                          <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                          <p>
                            <span>2.6M View</span> 4 Year ago
                          </p>
                          <span className="deletelink">
                            <i
                              className="fa fa-trash mr-1"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </li>
                      <li className="d-flex mb-3 position-relative">
                        <div className="VideoThumbimg">
                          <img src="https://i.ytimg.com/vi/aRoMeNr1mMQ/default.jpg" />
                        </div>
                        <div className="videoDescription ml-2">
                          <h3>Har Har Shambhu Shiv...</h3>
                          <h5 className="mt-1 mb-1">Jeetu Sharma</h5>
                          <p>
                            <span>2.6M View</span> 4 Year ago
                          </p>
                          <span className="deletelink">
                            <i
                              className="fa fa-trash mr-1"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity16" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> {SITEFNAME.NAME}</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab mb-3">
                  <ul>
                    <li className="tabs1">Curriculum</li>
                    <li className="tabs1 active-tabs">Resources</li>
                    <li className="tabs1  ">Courses</li>
                    <li className="tabs1  ">Grades</li>
                  </ul>
                </div>
                <div className="resoucecardTopic mb-4">
                  <label>
                    {" "}
                    <h4 className="mb-2">Select Lesson:</h4>
                  </label>
                  {/* <SelectPicker searchable={false} cleanable={false} /> */}
                  <SelectPicker data={data} groupBy="role" style={{}} />
                </div>
                <div className="resourseCard">
                  <div className="rsCard">
                    <div className="resourseCatdTitle flex">
                      <div className="Resorctitledtl flex ss">
                        <div className="Topicnme flex">
                          <div className="Topicomage">
                            <i className="fa-regular fa-file-lines mr-2"></i>
                          </div>
                          <div className="TopicTitle">
                            <h3>Complex Lesson Name</h3>
                            <div className="RatingWrap1   flex">
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
                              <span className="ratingCount">
                                <i className="fa-solid fa-angle-down ml-1" />{" "}
                                <span className="ml-1">
                                  {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                  (0)
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="Topicnme flex">
                          <div className="Topicomage CuratedBy">
                            <i className="fa-light fa-user"></i>
                          </div>
                          <div className="TopicTitle ">
                            <h3>Teacher Name</h3>
                            <div className="RatingWrap1   flex">
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
                              <span className="ratingCount">
                                <i className="fa-solid fa-angle-down ml-1" />{" "}
                                <span className="ml-1">
                                  {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                  (0)
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="ResrcCrdDropdwn text-center"  data-toggle="collapse"
                      href="#resourcecard2">
              <span><i className="fa-regular fa-angle-down"></i></span>
            </div> */}
                    </div>
                    <div
                      id="resourcecard2"
                      className="panel-collapse collapse show"
                    >
                      <div className={isActive ? "ShowFullContent" : null}>
                        <div className="ReourcecrdLeftbar">
                          <ul>
                            <li className="activeRTab">
                              <p
                                className="RconDropdwn"
                                data-toggle="collapse"
                                href="#resourcecard1"
                              >
                                <span className="flex">
                                  <span>
                                    <i className="fa-regular fa-message-captions mr-2"></i>
                                    Content
                                  </span>
                                  <span>
                                    <i className="fa-duotone fa-check mr-3"></i>
                                    <i className="fa-regular fa-angle-down"></i>
                                  </span>
                                </span>
                              </p>
                              <div
                                className="collapse show panel-collapse"
                                id="resourcecard1"
                              >
                                <div className="w-100 prolistedvidoitem rescrdVidContent">
                                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                                    <div className="VideoThumbimg">
                                      <img
                                        src="https://picsum.photos/200/200.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="videoDescription pl-2  p-1">
                                      <h3>
                                        Complete React JS Tutorial in Hindi with
                                        5 Projects in 2022
                                      </h3>
                                      <h5 className="mt-1 mb-1">
                                        Jul 21, 2021 Welcome, Complete React JS
                                        Tutorial for Beginners In Hindi In 2022.{" "}
                                      </h5>
                                      <p>138K View 1 Year Ago</p>
                                    </div>
                                  </div>

                                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                                    <div className="VideoThumbimg">
                                      <img
                                        src="https://picsum.photos/200/200.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="videoDescription  p-2">
                                      <h3>
                                        Complete React JS Tutorial in Hindi with
                                        5 Projects in 2022
                                      </h3>
                                      <h5 className="mt-1 mb-1">
                                        Jul 21, 2021 Welcome, Complete React JS
                                        Tutorial for Beginners In Hindi In 2022.{" "}
                                      </h5>
                                      <p>138K View 1 Year Ago</p>
                                    </div>
                                  </div>
                                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                                    <div className="VideoThumbimg">
                                      <img
                                        src="https://picsum.photos/200/200.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="videoDescription  p-2">
                                      <h3>
                                        Complete React JS Tutorial in Hindi with
                                        5 Projects in 2022
                                      </h3>
                                      <h5 className="mt-1 mb-1">
                                        Jul 21, 2021 Welcome, Complete React JS
                                        Tutorial for Beginners In Hindi In 2022.{" "}
                                      </h5>
                                      <p>138K View 1 Year Ago</p>
                                    </div>
                                  </div>
                                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                                    <div className="VideoThumbimg">
                                      <img
                                        src="https://picsum.photos/200/200.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="videoDescription  p-2">
                                      <h3>
                                        Complete React JS Tutorial in Hindi with
                                        5 Projects in 2022
                                      </h3>
                                      <h5 className="mt-1 mb-1">
                                        Jul 21, 2021 Welcome, Complete React JS
                                        Tutorial for Beginners In Hindi In 2022.{" "}
                                      </h5>
                                      <p>138K View 1 Year Ago</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="activeRTab ResoQuesPractice">
                              <p
                                className="RconDropdwn"
                                data-toggle="collapse"
                                href="#resourcecard4"
                              >
                                <span className="flex">
                                  <span>
                                    <i className="fa-regular fa-file-pen mr-2"></i>
                                    Practice{" "}
                                  </span>
                                  <span>
                                    <i className="fa-sharp fa-solid fa-lock mr-3"></i>
                                    <i className="fa-regular fa-angle-down"></i>
                                  </span>
                                </span>
                              </p>
                              <div
                                className="collapse  panel-collapse"
                                id="resourcecard4"
                              >
                                <div className="RQuizlist prolistedvidoitem rescrdVidContent">
                                  <div className="RquizTitle">
                                    <h3 className="flex">Practice</h3>
                                  </div>
                                  <div className="Rquizlistitem">
                                    <div className="rQuizName">
                                      <h5 className="mb-2">
                                        <span>1.</span>Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown printer
                                        took a galley{" "}
                                      </h5>
                                    </div>
                                    <ul>
                                      <li className="SelectOption">
                                        <span>A</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                      <li>
                                        <span>B</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                      <li>
                                        <span>C</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                      <li>
                                        <span>D</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                      <li>
                                        <span>E</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="Rquizlistitem">
                                    <div className="rQuizName">
                                      <h5 className="mb-2">
                                        <span>1.</span>Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown printer
                                        took a galley{" "}
                                      </h5>
                                    </div>
                                    <ul>
                                      <li>
                                        <span>A</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                      <li className="CorrectOption">
                                        <span>B</span>
                                        <span className="CorrectIcon">
                                          <i className="fa-regular fa-check"></i>
                                        </span>
                                        Lorem ipsum, or lipsum as it is
                                        sometimes known, is dummy text used{" "}
                                      </li>
                                      <li className="WrongOption">
                                        <span>C</span>
                                        <span className="WrongQIcon">
                                          <i className="fa-regular fa-xmark"></i>
                                        </span>
                                        Lorem ipsum, or lipsum as it is
                                        sometimes known, is dummy text used{" "}
                                      </li>
                                      <li>
                                        <span>D</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                      <li>
                                        <span>E</span>Lorem ipsum, or lipsum as
                                        it is sometimes known, is dummy text
                                        used{" "}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="form-group BDsubmitbutton d-flex mb-3">
                                  <div className="buttonDistribotion">
                                    <button
                                      type="submit"
                                      className="btn-blue btn-login d-block mb-5 mr-3"
                                    >
                                      <i className="fa-solid fa-paper-plane"></i>{" "}
                                      submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="activeRTab ResoQuesPractice">
                              <p className="RconDropdwn">
                                <span className="flex">
                                  <span>
                                    <i className="fa-light fa-book-open-reader mr-2"></i>
                                    Quiz
                                  </span>
                                  <span>
                                    <i className="fa-regular fa-angle-down"></i>
                                  </span>
                                </span>
                              </p>
                            </li>
                            <li className="activeRTab">
                              <p className="RconDropdwn">
                                <span className="flex">
                                  <span>
                                    <i className="fa-regular fa-diagram-predecessor mr-2"></i>
                                    Basics
                                  </span>
                                  <span>
                                    <i className="fa-regular fa-angle-down"></i>
                                  </span>
                                </span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ExploreCard"
                    data-toggle="modal"
                    data-target="#schoolactivity19"
                  >
                    <h5>
                      Explore <i className="fa-regular fa-chevron-down "></i>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity19" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <span className="closeback" data-dismiss="modal">
                <span className="backHalscreen">Back</span>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </span>
              <div className="modal-body Subject_Curriculam  pt-0">
                <div className="bodyTitle">
                  <div className="subtitleHeadinhg flex">
                    {/* <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> Vicky</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with Math</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <div className="mt-3 mb-3 flex">
                  <div className="Resorctitledtl flex ss">
                    <div className="Topicnme flex">
                      <div className="Topicomage">
                        <i className="fa-regular fa-file-lines mr-2"></i>
                      </div>
                      <div className="TopicTitle">
                        <h3>Complex Lesson Name</h3>
                        <div className="RatingWrap1   flex">
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
                          <span className="ratingCount">
                            <i className="fa-solid fa-angle-down ml-1" />{" "}
                            <span className="ml-1">
                              {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                              (0)
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="Topicnme flex">
                      <div className="Topicomage CuratedBy">
                        <i className="fa-light fa-user"></i>
                      </div>
                      <div className="TopicTitle ">
                        <h3>Teacher Name</h3>
                        <div className="RatingWrap1   flex">
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
                          <span className="ratingCount">
                            <i className="fa-solid fa-angle-down ml-1" />{" "}
                            <span className="ml-1">
                              {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                              (0)
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contenent Active */}

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs active-tabs">Content</li>
                    <li className="tabs ">Quiz</li>

                    <li className="tabs">Practice</li>
                    <li className="tabs">Basics</li>
                  </ul>
                </div>

                <div className="w-100 ">
                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                    <div className="VideoThumbimg">
                      <img src="https://picsum.photos/200/200.jpg" alt="" />
                    </div>
                    <div className="videoDescription pl-2  p-1">
                      <h3>
                        Complete React JS Tutorial in Hindi with 5 Projects in
                        2022
                      </h3>
                      <h5 className="mt-1 mb-1">
                        Jul 21, 2021 Welcome, Complete React JS Tutorial for
                        Beginners In Hindi In 2022.{" "}
                      </h5>
                      <p>138K View 1 Year Ago</p>
                    </div>
                  </div>

                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                    <div className="VideoThumbimg">
                      <img src="https://picsum.photos/200/200.jpg" alt="" />
                    </div>
                    <div className="videoDescription  p-2">
                      <h3>
                        Complete React JS Tutorial in Hindi with 5 Projects in
                        2022
                      </h3>
                      <h5 className="mt-1 mb-1">
                        Jul 21, 2021 Welcome, Complete React JS Tutorial for
                        Beginners In Hindi In 2022.{" "}
                      </h5>
                      <p>138K View 1 Year Ago</p>
                    </div>
                  </div>
                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                    <div className="VideoThumbimg">
                      <img src="https://picsum.photos/200/200.jpg" alt="" />
                    </div>
                    <div className="videoDescription  p-2">
                      <h3>
                        Complete React JS Tutorial in Hindi with 5 Projects in
                        2022
                      </h3>
                      <h5 className="mt-1 mb-1">
                        Jul 21, 2021 Welcome, Complete React JS Tutorial for
                        Beginners In Hindi In 2022.{" "}
                      </h5>
                      <p>138K View 1 Year Ago</p>
                    </div>
                  </div>
                  <div className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative">
                    <div className="VideoThumbimg">
                      <img src="https://picsum.photos/200/200.jpg" alt="" />
                    </div>
                    <div className="videoDescription  p-2">
                      <h3>
                        Complete React JS Tutorial in Hindi with 5 Projects in
                        2022
                      </h3>
                      <h5 className="mt-1 mb-1">
                        Jul 21, 2021 Welcome, Complete React JS Tutorial for
                        Beginners In Hindi In 2022.{" "}
                      </h5>
                      <p>138K View 1 Year Ago</p>
                    </div>
                  </div>
                </div>
                {/* Quiz Active */}

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs11 active-tabs ">
                      {" "}
                      <i className="fa-regular fa-message-captions mr-2"></i>{" "}
                      Content
                    </li>
                    <li className="tabs1  ">
                      {" "}
                      <i className="fa-light fa-book-open-reader mr-2"></i>Quiz
                      <span className="ml-3 pl-3 resoQuizscore">
                        {" "}
                        10 <img src={image.money_bag} alt="" />
                      </span>
                    </li>
                    <li className="tabs1  ">
                      {" "}
                      <i className="fa-regular fa-file-pen mr-2"></i>Practice
                      <i className="fa-sharp fa-solid fa-lock pl-3 ml-3"></i>{" "}
                    </li>
                    <li className="tabs1  ">
                      {" "}
                      <i className="fa-regular fa-diagram-predecessor mr-2"></i>{" "}
                      Basics
                    </li>
                  </ul>
                </div>
                <div className="Quizresult">
                  <h5 className="flex">
                    Quiz Result:{" "}
                    <span>
                      Points: 10
                      <img src={image.money_bag} alt="" />
                    </span>
                  </h5>
                  <p>
                    3 Answers are <span className="Correctq">Correct</span> And
                    2 is <span className="incorrctq">Incorrect</span>{" "}
                  </p>
                </div>
                <div className="w-100 ">
                  <div className="ScenecerelateddQuiz">
                    <div className="signupType m-0 mb-3">
                      <h4 className="mb-3">
                        <span>
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox">
                        She tokenized Shauna
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She tokenized the class
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
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
                        <span>
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox">
                        She tokenized Shauna
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She tokenized the class
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
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
                        <span>
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox">
                        She tokenized Shauna
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She tokenized the class
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="signupType m-0 mb-3 PreviewedQuestion">
                      <h4 className="mb-3">
                        <span>
                          <i className="fa-light fa-clipboard-question"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox">
                        She tokenized Shauna
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She tokenized the class
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox RightQuzAnswer">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          checked
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox WrongQuzAnswer">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="WrongQuizAns">
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Practice Active */}
                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Content</li>
                    <li className="tabs">Quiz</li>
                    <li className="tabs active-tabs">Practice</li>
                    <li className="tabs">Basics</li>
                  </ul>
                </div>

                <div className="w-100 ">
                  <div className="ScenecerelateddQuiz">
                    <div className="signupType m-0 mb-3">
                      <h4 className="mb-3">
                        <span>
                          <i className="fa-solid fa-user"></i>
                          <i className="fa-solid fa-thought-bubble mr-2"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox">
                        She tokenized Shauna
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She tokenized the class
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="signupType m-0 mb-3 PreviewedQuestion">
                      <h4 className="mb-3">
                        <span>
                          <i className="fa-solid fa-user"></i>
                          <i className="fa-solid fa-thought-bubble mr-2"></i>
                        </span>{" "}
                        What did Mrs. Jones do?
                      </h4>
                      <label className="Selcheckbox">
                        She tokenized Shauna
                        <input
                          type="radio"
                          id="Public"
                          name="Question"
                          value="PUBLIC"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        She tokenized the class
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox RightQuzAnswer">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          checked
                          value="PRIVATE"
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox WrongQuzAnswer">
                        She was helping Shauna share her experiences as a
                        biracial student
                        <input
                          type="radio"
                          id="Private"
                          name="Question"
                          value="PRIVATE"
                        ></input>
                        <span className="WrongQuizAns">
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Basics Active */}
                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Content</li>
                    <li className="tabs">Quiz</li>
                    <li className="tabs">Practice</li>
                    <li className="tabs active-tabs">Basics</li>
                  </ul>
                </div>

                <div className="w-100 ">
                  <div className="moduleWrap">
                    <div className="moduleList mb-4">
                      <div className="submoduleList" id="module">
                        <ul>
                          <li className="d-flex justify-content-between">
                            1. Lesson Name
                          </li>
                          <li className="d-flex justify-content-between">
                            2. Lesson Name{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            3. Lesson Name{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            4. Lesson Name{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            5. Lesson Name{" "}
                          </li>
                          <li className="d-flex justify-content-between">
                            6. Lesson Name{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3">
                <div className="form-group BDsubmitbutton d-flex mt-2">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-paper-plane"></i>Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity17" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam basicdetailsform  ">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span className="flex">
                        {" "}
                        {/* <img src={image.school_icon} className="mr-2" /> */}
                        <i className="fa-solid fa-school m-0"></i>
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong> Delhi Public School</strong>{" "}
                        </h4>
                        <p>RDC RajNagar Ghaziabad</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li className="tabs">Curriculum</li>
                    <li className="tabs active-tabs">Grade/Score</li>
                  </ul>
                </div>
                <div className="assessmentWrap ">
                  <div className="signupType mt-2 mb-3">
                    <label className="Selcheckbox">
                      Math
                      <input type="radio" id="" name="Subject" checked></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="Selcheckbox">
                      All Courses
                      <input
                        type="radio"
                        id=""
                        name="Subject"
                        // value="LEARNER"
                      ></input>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="AllSubgradetable">
                    <div className="datatable position-relative w-100">
                      <div className="tableheader d-flex">
                        <div className="tabitem"> </div>
                        <div className="tabitem d-flex justify-content-center">
                          Period 1
                          <div className="editcard m-0">
                            <span>
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                          </div>
                        </div>

                        <div className="position-relative p-0 bg-transparent">
                          <div className="loadmoreActivity AddoreCol">
                            Add <i className="fa-solid fa-circle-plus"></i>
                          </div>
                        </div>
                      </div>
                      <div className="tablebody d-flex">
                        <div className="tabletr">
                          <div className="tabitem">
                            {" "}
                            <i className="fa-light fa-arrow-down-to-line"></i>
                            Course / Date{" "}
                            <i className="fa-light fa-arrow-right-to-line ml-1"></i>
                          </div>
                          <div className="tabitem">Math</div>
                          <div className="tabitem">English</div>
                          <div className="tabitem">Science</div>
                          <div className="tabitem">Music</div>
                        </div>
                        <div className="tabletr ">
                          <div className="dateitems">
                            <div className="input-group w-100 datespl calender">
                              <span className="clenderIcon">
                                {" "}
                                <img src={image.Calendericon}></img>
                              </span>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Assessment Date..."
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="tabitem">
                            <div className="input-group">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control AddScoreform"
                                  placeholder="Add Score..."
                                />
                              </div>
                            </div>
                            <span className="ortag">Or</span>
                            <div className="input-group">
                              <div className="form-group selectedField ">
                                <select className="form-control">
                                  <option>Add Grade</option>
                                  <option>A+</option>
                                  <option>A</option>
                                  <option>A-</option>
                                  <option>B+</option>
                                  <option>B</option>
                                  <option>B-</option>
                                  <option>C+</option>
                                  <option>C</option>
                                  <option>C-</option>
                                  <option>D+</option>
                                  <option>D</option>
                                  <option>D-</option>
                                  <option>F</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-group submitgrade w-100 mt-3">
                      <div className="form-group BDsubmitbutton d-flex mt-2 justify-content-end">
                        <button
                          type="button"
                          className="btn-blue btn-login d-block"
                        >
                          {" "}
                          <i className="fa-solid fa-paper-plane"></i>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SelectYourProfile">
        <div className="modal fade" id="schoolactivity18" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0 ">
                <div className="signupType m-0">
                  <label className="Selcheckbox">
                    <span>
                      Balanced Starting Profile{" "}
                      <i className="fa-duotone fa-circle-info ml-2"></i>
                    </span>
                    <span className="d-block">(Recommended)</span>
                    <input
                      type="radio"
                      id="Public"
                      name="Question"
                      value="PUBLIC"
                    ></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="Selcheckbox">
                    <span>
                      {" "}
                      Customize Starting Profile{" "}
                      <i className="fa-duotone fa-circle-info ml-2"></i>
                    </span>
                    <span className="d-block">(Brief explaination)</span>
                    <input
                      type="radio"
                      id="Private"
                      name="Question"
                      value="PRIVATE"
                    ></input>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3">
                <div className="form-group BDsubmitbutton d-flex mt-2 mb-2">
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block mb-5 ml-auto"
                  >
                    Continue <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity20" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong>Learning Center</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with English</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab mb-3">
                  <ul>
                    <li className="tabs1 active-tabs ">Curriculum</li>
                    <li className="tabs1  ">Resources</li>
                    <li className="tabs1  ">Courses</li>
                    <li className="tabs1  ">Grades</li>
                  </ul>
                </div>

                <div className="tableCurrForm position-relative">
                  <div className="form-check form-switch">
                    <label
                      className="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Expand all
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <table className="w-100 curriculumntable">
                    <tr>
                      <th>
                        <h5>Module & Lesson</h5>
                      </th>
                      <th>
                        <h5>Resource</h5>{" "}
                      </th>
                      <th>
                        <h5>Courses</h5>{" "}
                      </th>
                      <th>
                        <h5>
                          Need Help
                          <span
                            className="Tooltiphelp"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Lesson Complete information?"
                          >
                            <i className="fa-regular fa-circle-question ml-1"></i>
                          </span>
                        </h5>{" "}
                      </th>
                      <th>
                        <h5>
                          Completed
                          <span
                            className="Tooltiphelp"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Lesson Complete information?"
                          >
                            <i className="fa-regular fa-circle-question ml-1"></i>
                          </span>
                        </h5>{" "}
                      </th>
                    </tr>

                    <tr>
                      <td className="w-100 p-0 border-0" colSpan="5">
                        <table
                          className="w-100 border Nestedtable mb-3"
                          width="100%"
                        >
                          <tr
                            data-toggle="collapse"
                            href="#multiCollapseExample2"
                            aria-expanded="true"
                          >
                            <th>
                              Identify an author's statement of opinions {SITEFNAME.NAME}
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th valign="baseline">
                              <div className="position-relative">
                                <label className="Selcheckbox m-0">
                                  <input
                                    type="checkbox"
                                    id="Public"
                                    name="schoolType"
                                    className="pointer"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <span className="DownArrow">
                                  <i className="fa-regular fa-chevron-down"></i>
                                </span>
                              </div>
                            </th>
                          </tr>
                          <tr
                            className="panel-collapse collapse show"
                            id="multiCollapseExample2"
                            aria-expanded="true"
                          >
                            <td colSpan="5" className="w-100 p-0 border-0">
                              <table
                                className="w-100  Nestedtable"
                                width="100%"
                              >
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          className="w-100 border Nestedtable mb-3"
                          width="100%"
                        >
                          <tr
                            data-toggle="collapse"
                            href="#multiCollapse3"
                            aria-expanded="true"
                          >
                            <th>
                              Identify an author's statement of opinions {SITEFNAME.NAME}
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th valign="baseline">
                              <div className="position-relative">
                                <label className="Selcheckbox m-0">
                                  <input
                                    type="checkbox"
                                    id="Public"
                                    name="schoolType"
                                    className="pointer"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <span className="DownArrow">
                                  <i className="fa-regular fa-chevron-down"></i>
                                </span>
                              </div>
                            </th>
                          </tr>
                          <tr
                            className="panel-collapse collapse "
                            id="multiCollapse3"
                            aria-expanded="true"
                          >
                            <td colSpan="5" className="w-100 p-0 border-0">
                              <table
                                className="w-100  Nestedtable"
                                width="100%"
                              >
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          className="w-100 border Nestedtable mb-3"
                          width="100%"
                        >
                          <tr
                            data-toggle="collapse"
                            href="#multiCollapse4"
                            aria-expanded="true"
                          >
                            <th>
                              Identify an author's statement of opinions {SITEFNAME.NAME}
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th valign="baseline">
                              <div className="position-relative">
                                <label className="Selcheckbox m-0">
                                  <input
                                    type="checkbox"
                                    id="Public"
                                    name="schoolType"
                                    className="pointer"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <span className="DownArrow">
                                  <i className="fa-regular fa-chevron-down"></i>
                                </span>
                              </div>
                            </th>
                          </tr>
                          <tr
                            className="panel-collapse collapse "
                            id="multiCollape4"
                            aria-expanded="true"
                          >
                            <td colSpan="5" className="w-100 p-0 border-0">
                              <table
                                className="w-100  Nestedtable"
                                width="100%"
                              >
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                                <tr>
                                  <td>1. Distinguish facts from opinions</td>
                                  <td className="">
                                    {" "}
                                    <i className="fa-regular fa-folder-open mr-2"></i>{" "}
                                    (500)
                                  </td>
                                  <td>
                                    <i className="fa-duotone fa-books mr-2"></i>
                                    (500)
                                  </td>
                                  <td>
                                    <img
                                      src={image.exclamationhexagon}
                                      alt=""
                                    />
                                  </td>
                                  <td>
                                    <label className="Selcheckbox">
                                      <input
                                        type="checkbox"
                                        id="Public"
                                        name="schoolType"
                                        className="pointer"
                                        value="PUBLIC"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity21" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading border-0">
                  <h2>
                    Math{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">M</span>
                        MathMatics
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex">
                    <div className="bodyimagetitle flex">
                      <span>
                        {" "}
                        <img src={image.vikylogoicon} className="mr-2" />
                      </span>
                      <div>
                        <h4 className="justify-content-between">
                          {" "}
                          <strong>Learning Center</strong>{" "}
                        </h4>
                        <p>Hi, Here is how I can help you with English</p>
                      </div>
                    </div>
                    <div className="ListIcon">
                      {" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct"
                      >
                        <li>
                          <span className="flex w-100">
                            Activity List{" "}
                            <i className="fa-solid fa-angle-down ml-2"></i>
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-link"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-brands fa-youtube mr-1"></i>{" "}
                            Activity Name
                          </span>
                        </li>
                        <li>
                          <span className="">
                            <i className="fa-solid fa-book"></i> Activity Name
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tabgrid AddActivityTab mb-3">
                  <ul>
                    <li className="tabs1">Curriculum</li>
                    <li className="tabs1  active-tabs">Resources</li>
                  </ul>
                </div>

                <div className="CrsCrd">
                  <div className="flex commingSoonPage w-75 m-auto">
                    <div className="vickyrobot">
                      <img src={image.Robovicky} alt="" />
                    </div>
                    <div className="LessionDtlOverview">
                      <h2 className="mb-5 text-center">Coming Soon</h2>
                      <p>
                        I am working on it and will provide it to you shortly
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                {/* <div className='form-group BDsubmitbutton d-flex mt-2'>
                  <div className='buttonDistribotion'>
				  <button
															type='button'
															className='btn-blue btn-login d-block mb-5'>
															<i className='fa-solid fa-arrow-left'></i> Back
														</button>
					<div className='buttonDistribotion'>
                     <button	type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'>
                     <i className='fa-solid fa-xmark'></i> Cancel
                     </button>
                     <button
                        type='submit'
                        className='btn-blue btn-login d-block mb-5 '>
                     Next <i className='fa-solid fa-arrow-right ml-2'></i>
                     </button>
					 </div>
                  </div>
               </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity22" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header p-0">
                <div className="heading">
                  <h2 className="flex border-0">
                    Quiz Preview{" "}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg w-100">
                    <div className="bodyimagetitle w-100">
                      <div className="quizPreview">
                        <h4 className="justify-content-center">
                          {" "}
                          <strong>Quiz Result</strong>{" "}
                        </h4>
                        <p>You have attempted 9 question out of 10.</p>
                        <p>7 answer is correct & 2 is incorrect.</p>
                        <button
                          type="submit"
                          className="btn-blue btn-login d-block mb-5 mt-3"
                        >
                          Preview your Answer{" "}
                          <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 mb-3">
                <div className="form-group BDsubmitbutton d-flex mt-2">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hoosrSubModlPopup">
        <div className="modal fade" id="schoolactivity23" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header p-0">
                <div className="heading border-0 w-100">
                  <h2>
                    Choose Your Subject:
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <ul className="SlecteSub">
                  <li>
                    <a
                      href="#"
                      className="small"
                      data-value="option1"
                      tabIndex="-1"
                    >
                      <div className="signupType m-0">
                        <label className="Selcheckbox">
                          <input type="radio" />

                          <span className="checkmark"></span>
                        </label>
                        Physical Science
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="small"
                      data-value="option2"
                      tabIndex="-1"
                    >
                      <div className="signupType m-0">
                        <label className="Selcheckbox">
                          <input type="radio" />

                          <span className="checkmark"></span>
                        </label>
                        Physical Science
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="small"
                      data-value="option2"
                      tabIndex="-1"
                    >
                      <div className="signupType m-0">
                        <label className="Selcheckbox">
                          <input type="radio" />

                          <span className="checkmark"></span>
                        </label>
                        Physical Science
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="small"
                      data-value="option2"
                      tabIndex="-1"
                    >
                      <div className="signupType m-0">
                        <label className="Selcheckbox">
                          <input type="radio" />

                          <span className="checkmark"></span>
                        </label>
                        Physical Science
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="small"
                      data-value="option2"
                      tabIndex="-1"
                    >
                      <div className="signupType m-0">
                        <label className="Selcheckbox">
                          <input type="radio" />

                          <span className="checkmark"></span>
                        </label>
                        Physical Science
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3">
                <div className="form-group BDsubmitbutton d-flex mt-2 mb-2">
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block mb-5 ml-auto"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hoosrSubModlPopup AreyousurePopup AddChildPopup">
        <div className="modal fade" id="schoolactivity29" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header NuggetPopupTitle">
                <div className="heading border-0 w-100 NuggetVickyImage p-0">
                  <h4 className="flex">
                    <span>
                      {" "}
                      <img
                        src={image.Nugget_Wrong}
                        alt=""
                        className="mr-2"
                      />{" "}
                      Are You Sure?
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h4>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam text-center flex">
                <h2 className="areYouSuretext">
                  You won't be able to undo your deletion!
                </h2>
              </div>

              <div className="modal-footer ">
                <div className="form-group BDsubmitbutton d-flex m-0 ">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton  ml-auto"
                  >
                    <i className="fa-solid fa-xmark mr-2"></i> No
                  </button>
                  <buttont
                    type="submit"
                    className="btn-blue btn-login d-block ml-0 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Yes
                  </buttont>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hoosrSubModlPopup AreyousurePopup AddChildPopup">
        <div className="modal fade" id="schoolactivity30" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header p-0">
                <div className="heading border-0 w-100">
                  <h2 className="flex">
                    <span>
                      {" "}
                      <img src={image.pskhillimge} alt="" className="" />{" "}
                      Upcomming User Title
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body addChildProf Subject_Curriculam">
                <div className="EnrollTitle flex">
                  <div className="NuggetVickyImage">
                    <img src={image.Robovicky} alt="" />
                  </div>
                  <div className="LessionDtlOverview">
                    <p>
                      Start your holistic growth journey with me by enrolling in
                      the courses listed below. I’m working round the clock to
                      develop many more courses
                    </p>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="input-group">
                    <label htmlFor="">
                      First Name <span className="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <input type=" text" className="form-control" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="">
                      Last Name <span className="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <input type=" text" className="form-control" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="">
                      Email <span className="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <input type=" text" className="form-control" />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="">
                      State <span className="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <SelectPicker
                        data={data}
                        groupBy="role"
                        style={{}}
                        placement={"topStart"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer ">
                <div className="form-group BDsubmitbutton d-flex m-0 ">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton  ml-auto"
                  >
                    <i className="fa-solid fa-xmark mr-2"></i> Cancel
                  </button>
                  <buttont
                    type="submit"
                    className="btn-blue btn-login d-block ml-0 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                  </buttont>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hoosrSubModlPopup AreyousurePopup AddChildPopup">
        <div className="modal fade" id="schoolactivity32" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header p-0">
                <div className="heading border-0 w-100">
                  <h2 className="flex">
                    <span>
                      {" "}
                      <img src={image.otpicons} alt="" className="" /> OTP
                      Verification
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body optvarification Subject_Curriculam">
                <div className="EnrollTitle">
                  <div className="roboimage text-center">
                    <img src={image.Robovicky} alt="" className="m-auto" />
                  </div>
                  <div className="otpVerification text-center">
                    <h3 className="mt-3">OTP Verification</h3>
                    <p>
                      We will send you one time password on this mobile Number
                      <br />
                      <strong>+91 1234567890</strong>
                    </p>
                    <div className="input-group">
                      <label htmlFor="" className="text-left w-100">
                        Please Enter Your mobile number{" "}
                        <span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group">
                        <input type=" text" className="form-control" />
                      </div>
                      <div className="resendotp text-right">
                        <a href="#">
                          <strong>Resend Otp?</strong>
                        </a>
                      </div>
                    </div>
                    <div className="input-group mt-3 mb-3 pt-3">
                      <label htmlFor="">Enter OTP </label>
                      <div className="form-group otpinputscreen d-flex justify-content-center">
                        <OtpInput
                          value={otp}
                          onChange={handleChange}
                          numInputs={6}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer ">
                <div className="form-group BDsubmitbutton d-flex m-0 ">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton  ml-auto"
                  >
                    <i className="fa-solid fa-xmark mr-2"></i> Cancel
                  </button>
                  <buttont
                    type="submit"
                    className="btn-blue btn-login d-block ml-0 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                  </buttont>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hoosrSubModlPopup AreyousurePopup AddChildPopup">
        <div className="modal fade" id="schoolactivity31" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading border-0 p-0 w-100">
                  <h2 className="flex">
                    <span>
                      {" "}
                      <img src={image.upcomminguser} alt="" className="" />{" "}
                      Access Request Confirmation
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body addChildProf Subject_Curriculam Thanksmessage ">
                <div className="EnrollTitle flex pt-4">
                  <div className="LessionDtlOverview">
                    {/* <h3>Beta access request confirmation
                    </h3> */}
                    <p>
                      Thank you for requesting access for my beta. I’ll revert
                      back with next steps soon.
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-footer ">
                <div className="form-group BDsubmitbutton d-flex m-0 ">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton m-0  ml-auto"
                  >
                    <i className="fa-solid fa-xmark mr-2"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hoosrSubModlPopup">
        <div className="modal fade" id="schoolactivity24" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content ">
              <div className="modal-body">
                <div className="PChngeWrap">
                  <div className="ProfileChangeTitle">
                    <h3>Who's using {SITEFNAME.NAME}</h3>
                    <p>
                      {" "}
                      I want the submenu to be align with their parent and i
                      want to display the header together with the list inside
                      submenu like this image.
                    </p>
                  </div>
                  <div className="ProFileChageContnr">
                    <div className="PFCItemListitem">
                      <div className="PCItemName">
                        <h5>
                          {" "}
                          Parents Name{" "}
                          <span className="spanProfileIcons">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </span>
                        </h5>
                      </div>
                      <div className="PCItemImage">
                        <img src={image.userProfile} alt="" />
                        <p>UserName/Emailid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3">
                <div className="form-group BDsubmitbutton d-flex mt-2 mb-2">
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block mb-5 ml-auto"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PProfilePoup">
        <div className="PpUser">
          <div className="PProimage">
            <img src={image.userProfile} alt="" />
          </div>
          <div className="PPUserRInfo">
            <h3>User Name</h3>
            <p>User1@gmail.com</p>
          </div>
          <div className="PPuserDtl">
            <div className="PPUserRelatedSet">
              <div className="ProSettng" title="Change Password">
                <i className="fa-solid fa-key"></i>
              </div>
              <div className="ProSettng" title="Sign Out">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
            </div>
            <div className="PPUserprofile">
              <h5 className="flex">
                Profile{" "}
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </h5>
              <div className="Prifg d-none">
                <ul>
                  <li>Personal Detail</li>
                  <li>Personal Detail</li>
                  <li>Personal Detail</li>
                  <li>Personal Detail</li>
                </ul>
              </div>
            </div>
            <div className="OtherCProfile">
              <h5 className="flex">
                Learner Profile{" "}
                <span>
                  <i className="fa-light fa-gear"></i>
                </span>
              </h5>
              <div className="OtherChPPLstitm">
                <div className="OchPPlisting">
                  <div className="OchpListimg">
                    <img src={image.userProfile} alt="" />
                  </div>
                  <div className="OchpListdtl">
                    <p>User Name 2</p>
                  </div>
                </div>
                <div className="OchPPlisting">
                  <div className="OchpListimg">
                    <img src={image.userProfile} alt="" />
                  </div>
                  <div className="OchpListdtl">
                    <p>User Name 2</p>
                  </div>
                </div>
                <div className="OchPPlisting">
                  <div className="OchpListimg">
                    <img src={image.userProfile} alt="" />
                  </div>
                  <div className="OchpListdtl">
                    <p>User Name 2</p>
                  </div>
                </div>
                <div className="OchPPlisting">
                  <div className="OchpListdtl d-flex">
                    <p className="addLearner flex">
                      <span>
                        <i className="fa-solid fa-circle-plus mr-2"></i>
                      </span>
                      Add Learner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfileMenuPopup">
        <div className="modal fade" id="ProfileMenuPopup" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content ProfilepopupWidth">
              <div className="modal-body Subject_Curriculam">
                <div className="PProfilePoup">
                  <div className="PpUser">
                    <div className="PProimage">
                      <img src={image.userProfile} alt="" />
                    </div>
                    <div className="PPUserRInfo">
                      <h3>User Name</h3>
                      <p>User1@gmail.com</p>
                    </div>
                    <div className="PPuserDtl">
                      <div className="PPUserRelatedSet">
                        <div className="ProSettng" title="Change Password">
                          <i className="fa-solid fa-key"></i>
                        </div>
                        <div className="ProSettng" title="Sign Out">
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </div>
                      </div>
                      <div className="PPUserprofile">
                        <h5 className="flex">
                          Profile{" "}
                          <span>
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </h5>
                        <div className="Prifg d-none">
                          <ul>
                            <li>Personal Detail</li>
                            <li>Personal Detail</li>
                            <li>Personal Detail</li>
                            <li>Personal Detail</li>
                          </ul>
                        </div>
                      </div>
                      <div className="OtherCProfile">
                        <h5 className="flex">
                          Learner Profile{" "}
                          <span>
                            <i className="fa-light fa-gear"></i>
                          </span>
                        </h5>
                        <div className="OtherChPPLstitm">
                          <div className="OchPPlisting">
                            <div className="OchpListimg">
                              <img src={image.userProfile} alt="" />
                            </div>
                            <div className="OchpListdtl">
                              <p>User Name 2</p>
                            </div>
                          </div>
                          <div className="OchPPlisting">
                            <div className="OchpListimg">
                              <img src={image.userProfile} alt="" />
                            </div>
                            <div className="OchpListdtl">
                              <p>User Name 2</p>
                            </div>
                          </div>
                          <div className="OchPPlisting">
                            <div className="OchpListimg">
                              <img src={image.userProfile} alt="" />
                            </div>
                            <div className="OchpListdtl">
                              <p>User Name 2</p>
                            </div>
                          </div>
                          <div className="OchPPlisting">
                            <div className="OchpListdtl d-flex">
                              <p className="addLearner flex">
                                <span>
                                  <i className="fa-solid fa-circle-plus mr-2"></i>
                                </span>
                                Add Learner
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity25" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    Diversity{" "}
                    <span
                      className="ml-2"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      <li>
                        <span className="SubFName">E</span>
                        English
                      </li>
                      <li>
                        <span className="SubFName">S</span>
                        Science
                      </li>

                      <li>
                        <span className="SubFName">S</span>
                        Social Science
                      </li>
                      <li>
                        <span className="SubFName">G</span>
                        General Studies
                      </li>
                    </ul>
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <h5 className="VicyslCourseTitle mb-3">
                  <i className="fa-sharp fa-solid fa-book-open-cover mr-2"></i>
                  Select a Course
                </h5>
                <div className="">
                  <div className="TopicSpeclist flex flex-wrap">
                    <div className="Topicspeclistitem flex">
                      <div className="speclistimage">
                        <img src="https://loremflickr.com/200/200" />
                      </div>
                      <div className="spacelistDesc">
                        <div className="specialistTitle">
                          <div className=" p-0">
                            <h4 className="d-flex">
                              Intesectionality ({" "}
                              <div className="RatingWrap1   flex ml-1 mr-1">
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

                                <span className="ratingCount flex">
                                  <i className="fa-solid fa-angle-down ml-1" />{" "}
                                  <span className="ml-1">
                                    {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                    (0)
                                  </span>
                                </span>
                              </div>
                              )
                            </h4>
                            <span className="AddCorsebtn">
                              Enroll{" "}
                              <i className="fa-solid fa-circle-plus ml-1"></i>
                            </span>
                            <p className="speclistdesctext">
                              <span>
                                {" "}
                                <img src={image.myhc_92884} alt="" />
                              </span>{" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt...
                            </p>
                          </div>
                        </div>
                        <ul className="spaclistcontactlist pt-2">
                          <li className=" w-100 flex">
                            <div className="TeacherName courseJourneyCard flex pointer">
                              <div className="TeacherActivityimg mr-2">
                                <img
                                  src={image.course_journey}
                                  alt=""
                                  className="p-0"
                                />
                              </div>
                              <div className="techrrat ">
                                <h5 className="">Course Journey</h5>
                              </div>
                            </div>
                            <div className="TeacherName d-flex mr-3">
                              <div className="TeacherActivityimg mr-2">
                                <img
                                  src={image.CourseProviderThumb}
                                  className="p-0"
                                  alt=""
                                />
                              </div>
                              <div className="techrrat ">
                                <h5 className="">Britney Watson</h5>
                                <div className="RatingWrap1   flex">
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
                                  <span className="ratingCount">
                                    <i className="fa-solid fa-angle-down ml-1" />{" "}
                                    <span className="ml-1">
                                      {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                      (0)
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="CourseJourney" id="CourseJourney">
                          <div className="CourseJournetCard">
                            <span className="AddCorsebtn">
                              Enroll{" "}
                              <i className="fa-solid fa-circle-plus ml-1"></i>
                            </span>
                            <span className="leftClosebar">
                              <i className="fa fa-arrow-left"></i>
                            </span>

                            <div className="coursejounercrditem CJlevel1">
                              <p className="">Beginner</p>
                              <div className="CourseJourneyicon flex justify-content-center">
                                <h3 className="text-center">
                                  {" "}
                                  Level <img
                                    src={image.start_level}
                                    alt=""
                                  />{" "}
                                  <span className="d-block m-auto">1</span>
                                </h3>
                              </div>

                              <div className="CourseJourneyDtl d-none">
                                <h3 className="mb-2">
                                  Chess for Beginners - Level 1{" "}
                                </h3>

                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </div>
                            </div>

                            <div className="coursejounercrditem CJlevel3">
                              <div className="CourseJourneyicon flex justify-content-center">
                                <h3 className="text-center">
                                  {" "}
                                  Level{" "}
                                  <span className="d-block m-auto">2</span>{" "}
                                </h3>
                              </div>
                              <div className="CourseJourneyDtl d-none">
                                <h3 className="mb-2">
                                  Chess for Beginners - Level 1{" "}
                                </h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </div>{" "}
                            </div>
                            <div className="coursejounercrditem CJlevel2">
                              <div className="CourseJourneyicon flex justify-content-center">
                                <h3 className="text-center">
                                  {" "}
                                  Level{" "}
                                  <span className="d-block m-auto">3</span>{" "}
                                </h3>
                              </div>
                              <div className="CourseJourneyDtl d-none">
                                <h3 className="mb-2">
                                  Chess for Beginners - Level 1{" "}
                                </h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="coursejounercrditem CJlevel4">
                              <div className="CourseJourneyicon flex justify-content-center">
                                <h3 className="text-center">
                                  {" "}
                                  Level{" "}
                                  <span className="d-block m-auto">4</span>{" "}
                                </h3>
                              </div>
                              <div className="CourseJourneyDtl d-none">
                                <h3 className="mb-2">
                                  Chess for Beginners - Level 1{" "}
                                </h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="coursejounercrditem CJlevel5">
                              <p className="">Expert</p>
                              <div className="CourseJourneyicon flex justify-content-center">
                                <h3 className="text-center">
                                  {" "}
                                  Level <img src={image.intrest} alt="" />
                                  <span className="d-block m-auto">5</span>{" "}
                                </h3>
                              </div>
                              <div className="CourseJourneyDtl d-none">
                                <h3 className="mb-2">
                                  Chess for Beginners - Level 1{" "}
                                </h3>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="smilyicon">{'			'}
			 
       <p className="text wrapped" id="regular">  		
<span className="emojiIcon">&#128512;</span>	
<span className="emojiIcon">&#128513;</span>
<span className="emojiIcon">&#128514;</span>
<span className="emojiIcon">&#128515;</span>
<span className="emojiIcon">&#128516;</span>
<span className="emojiIcon">&#128517;</span>
<span className="emojiIcon">&#128518;</span>
<span className="emojiIcon">&#128519;</span>
<span className="emojiIcon">&#128520;</span>
<span className="emojiIcon">&#128521;</span>
<span className="emojiIcon">&#128522;</span>
<span className="emojiIcon">&#128523;</span>
<span className="emojiIcon">&#128524;</span>
<span className="emojiIcon">&#128525;</span>
<span className="emojiIcon">&#128526;</span>
<span className="emojiIcon">&#128527;</span>
<span className="emojiIcon">&#128528;</span>
<span className="emojiIcon">&#128529;</span>
<span className="emojiIcon">&#128530;</span>
<span className="emojiIcon">&#128531;</span>
<span className="emojiIcon">&#128532;</span>
<span className="emojiIcon">&#128533;</span>
<span className="emojiIcon">&#128534;</span>
<span className="emojiIcon">&#128535;</span>
<span className="emojiIcon">&#128536;</span>
<span className="emojiIcon">&#128537;</span>
<span className="emojiIcon">&#128538;</span>
<span className="emojiIcon">&#128539;</span>
<span className="emojiIcon">&#128540;</span>
<span className="emojiIcon">&#128541;</span>
<span className="emojiIcon">&#128542;</span>
<span className="emojiIcon">&#128543;</span>
<span className="emojiIcon">&#128544;</span>
<span className="emojiIcon">&#128545;</span>
<span className="emojiIcon">&#128546;</span>
<span className="emojiIcon">&#128547;</span>
<span className="emojiIcon">&#128548;</span>
<span className="emojiIcon">&#128549;</span>
<span className="emojiIcon">&#128550;</span>
<span className="emojiIcon">&#128551;</span>
<span className="emojiIcon">&#128552;</span>
<span className="emojiIcon">&#128553;</span>
<span className="emojiIcon">&#128554;</span>
<span className="emojiIcon">&#128555;</span>
<span className="emojiIcon">&#128556;</span>
<span className="emojiIcon">&#128557;</span>
<span className="emojiIcon">&#128558;</span>
<span className="emojiIcon">&#128559;</span>
<span className="emojiIcon">&#128560;</span>
<span className="emojiIcon">&#128561;</span>
<span className="emojiIcon">&#128562;</span>
<span className="emojiIcon">&#128563;</span>
<span className="emojiIcon">&#128564;</span>
<span className="emojiIcon">&#128565;</span>
<span className="emojiIcon">&#128566;</span>
<span className="emojiIcon">&#128567;</span>
<span className="emojiIcon">&#128568;</span>
<span className="emojiIcon">&#128569;</span>
<span className="emojiIcon">&#128570;</span>
<span className="emojiIcon">&#128571;</span>
<span className="emojiIcon">&#128572;</span>
<span className="emojiIcon">&#128573;</span>
<span className="emojiIcon">&#128574;</span>
<span className="emojiIcon">&#128575;</span>
<span className="emojiIcon">&#128576;</span>
<span className="emojiIcon">&#128577;</span>
<span className="emojiIcon">&#128578;</span>
<span className="emojiIcon">&#128579;</span>
<span className="emojiIcon">&#128580;</span>
       </p>
               </div> */}
              </div>

              <div className="modal-footer p-0 pl-3 pr-3">
                {/* <div className="form-group BDsubmitbutton d-flex mt-2">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity27" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2>
                    <img src={image.mortarboard} className="mr-2" />
                    Start Enrolling
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-title flex h4 w-100  border">
                <div className="NuggetPopupTitle border-0 w-100 p-0 flex">
                  <div className="NuggetVickyImage flex align-items-center w-100 px-2 mx-1">
                    <h4>
                      {" "}
                      <img src={image.Robovicky} alt="" className="mr-2" />
                      Start Enrolling Message
                    </h4>
                  </div>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam  ">
                <div className="AllCoursesDimensionlist">
                  <h3 className="DiemenTitle mb-2">
                    <img src={image.courselevel3} className="mr-2" alt="" />{" "}
                    Intellectual
                  </h3>
                  <div className="SocialCoursecardWrap">
                    <h4
                      data-toggle="collapse"
                      className="flex KATitle pointer"
                      aria-expanded="false"
                      href="#red"
                    >
                      <span>
                        <img src={image.CourseTitleIcon} alt="" />
                        {/* <i className="fa-regular fa-dash mr-1"></i> */}
                        SKills Name
                      </span>

                      <i className="fa-solid fa-angle-down"></i>
                    </h4>
                    <div
                      className="cardListoAsDie panel-collapse collapse show"
                      id="red"
                    >
                      <div className="Gridcard SocialGridcard">
                        <div className="Gridsocialsec">
                          <div className="GridiamgeCard">
                            <div className="Gridimage">
                              <img src={image.mathMatics} />
                            </div>
                            <div
                              className="RatingWrap1  flex  dropdown-toggle mt-2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <div className="d-flex align-items-center">
                                <Rating
                                  ratingValue={20}
                                  transition
                                  allowFraction
                                  readonly
                                  size={20}
                                  fillColorArray={[
                                    "#f17a45",
                                    "#f19745",
                                    "#f1a545",
                                    "#f1b345",
                                    "#f1d045",
                                  ]}
                                />

                                <span className="ratingCount">
                                  <i className="fa-solid fa-angle-down ml-1" />{" "}
                                  <span className="ml-1">0</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="priceWrap">
                            <button className="btn-blue btn-login d-block w-100 m-0">
                              <i className="fa-solid fa-paper-plane"></i> Enroll
                            </button>
                          </div>
                        </div>
                        <div className="GridDetails">
                          <div className="GridCardTitle">
                            <h3
                              data-toggle="modal"
                              data-target="#coursedetailpage"
                            >
                              Diversity
                              <span>
                                100
                                <img src={image.money_bag} alt="" />
                              </span>
                            </h3>
                          </div>
                          <div className="GridCardFullDetails">
                            <div className="GridCardTitleDesc">
                              <div class="GridCardTitleDesc w-100 p-0">
                                <div class=" flex">
                                  <span class="gradeiconimage ml-5 d-flex">
                                    <span class="">
                                      Grade: <strong>6</strong>
                                    </span>
                                  </span>
                                </div>
                                <div>
                                  <p>
                                    <span class="SCourseLevel">
                                      <img
                                        src={image.sCourseleve3lcon}
                                        alt=""
                                      />
                                      Level 1
                                    </span>
                                  </p>
                                </div>
                                <div className="Coursecompprcent mr-3 position-relative">
                                  <p>
                                    <RoundProgress data="30" />
                                  </p>
                                </div>
                                <div className="TeacherName  d-flex ">
                                  <div className="TeacherActivityimg mr-2">
                                    <img
                                      src={image.CourseProviderThumb}
                                      alt=""
                                    />
                                  </div>
                                  <div className="techrrat ">
                                    <div className="teachername">
                                      Britney Watson
                                    </div>
                                    <div className="RatingWrap1   flex">
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
                                      <span className="ratingCount">
                                        <i className="fa-solid fa-angle-down ml-1" />{" "}
                                        <span className="ml-1">(0)</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="gridActivity">
                              <div className="CourseardDesc px-0">
                                <p className="d-flex">
                                  <span>
                                    {" "}
                                    <img src={image.myhc_92884} alt="" />
                                  </span>{" "}
                                  An online chat text message service allows you
                                  to receive and reply to text messages from
                                  customers. All a customer needs is their
                                  mobile phone
                                </p>
                              </div>

                              <div className="activityListitems mt-3">
                                <div className="Activity selfmadeActivity weeklyActivity">
                                  <div className="ActivitycrdTitle ">
                                    <h3 className="ActivyTitleName pointer">
                                      {" "}
                                      <span className="ThumnailTeacher">
                                        {" "}
                                        wk4{" "}
                                      </span>{" "}
                                      Week 4{" "}
                                      <div className="dropdownlistmodl">
                                        <strong
                                          className="Activitymenubar ml-2 pointer "
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          id="barlistdropdown"
                                          data-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-bars"></i>
                                        </strong>
                                        <ul
                                          className="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="barlistdropdown"
                                        >
                                          <li>
                                            <p className="pointer">
                                              {" "}
                                              <i className="fa-regular fa-file-lines"></i>{" "}
                                              Lesson
                                            </p>
                                          </li>
                                          <li>
                                            <p className="pointer">
                                              {" "}
                                              <i className="fa-regular fa-rectangle-history"></i>{" "}
                                              Series
                                            </p>
                                          </li>
                                          <li>
                                            <p className="pointer">
                                              {" "}
                                              <i className="fa-regular fa-arrow-rotate-left"></i>{" "}
                                              Recap
                                            </p>
                                          </li>
                                          <li>
                                            <p className="pointer">
                                              {" "}
                                              <i className="fa-regular fa-users"></i>{" "}
                                              Characters
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </h3>
                                  </div>
                                </div>
                                <div className="Activity selfmadeActivity">
                                  <div className="ActivitycrdTitle">
                                    <h3 className="ActivyTitleName pointer">
                                      {" "}
                                      <span className="ThumnailTeacher">
                                        {" "}
                                        wk4{" "}
                                      </span>{" "}
                                      Week 4{" "}
                                      <i className="fa-solid fa-bars"></i>
                                    </h3>
                                    <div>
                                      <p className="flex m-0">
                                        {" "}
                                        7 Days left:
                                        <span className="LeftDate">
                                          (21/12/22)
                                        </span>
                                        <span className="Activitymenubar">
                                          <i className="fa-sharp fa-solid fa-lock"></i>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="Activity selfmadeActivity">
                                  <div className="ActivitycrdTitle">
                                    <h3 className="ActivyTitleName pointer">
                                      {" "}
                                      <span className="ThumnailTeacher">
                                        {" "}
                                        wk4{" "}
                                      </span>{" "}
                                      Week 4{" "}
                                      <i className="fa-solid fa-bars"></i>
                                    </h3>
                                    <div>
                                      <p className="flex m-0">
                                        {" "}
                                        14 Days left:
                                        <span className="LeftDate">
                                          (21/12/22)
                                        </span>
                                        <span className="Activitymenubar">
                                          {" "}
                                          <i className="fa-sharp fa-solid fa-lock"></i>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="Activity selfmadeActivity">
                                  <div className="ActivitycrdTitle">
                                    <h3 className="ActivyTitleName pointer">
                                      {" "}
                                      <span className="ThumnailTeacher">
                                        {" "}
                                        wk4{" "}
                                      </span>{" "}
                                      Week 4{" "}
                                      <i className="fa-solid fa-bars"></i>
                                    </h3>
                                    <div>
                                      <p className="flex m-0">
                                        {" "}
                                        21 Days left:
                                        <span className="LeftDate">
                                          (21/12/22)
                                        </span>
                                        <span className="Activitymenubar">
                                          {" "}
                                          <i className="fa-sharp fa-solid fa-lock"></i>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="loadmoreActivity">
                                See More{" "}
                                <i className="fa-regular fa-chevron-down"></i>
                              </div>
                            </div>
                          </div>
                        </div>
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
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 "
                      >
                        Next <i className="fa-solid fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity33" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.subscription} className="mr-2" />
                      Subscription: Cancel your plan
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <div className="cancelSubscription">
                  <div className="YourPlanWrap">
                    <h4 class="flex mb-2">
                      <span>
                        {" "}
                        <i class="fa-regular fa-bell mr-2"></i> Current
                        Subscription Plan
                      </span>{" "}
                    </h4>
                    <div className="yourplanlist w-100">
                      <div class="SUbscriptionPreview mb-3">
                        <h5>
                          Your Selected Plan:{" "}
                          <span>Single Child - Monthly for Pk </span>
                        </h5>
                        <h5>
                          Price: <span>$19.99</span>
                        </h5>
                        <h5>
                          Active Plan Date: <span>Aug 25 2023</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-5">
                    <h4 class="flex mb-2">
                      <span>
                        {" "}
                        <img
                          src={image.vikylogoicon}
                          alt=""
                          className="mr-2"
                        />{" "}
                        Exclisive {SITEFNAME.NAME} benefits You will lose
                      </span>{" "}
                    </h4>
                    <div className="youloosesomething flex">
                      <div className="missourplan">
                        <h5>Exclusive {SITEFNAME.NAME} benefits:</h5>
                        <ul>
                          <li>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </li>
                          <li>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s.
                          </li>
                          <li>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </li>
                          <li>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s.
                          </li>
                        </ul>
                      </div>
                      <div className="robovicky p-0 mr-2">
                        <img src={image.benifits_loose} />
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
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 "
                      >
                        Cancel Plan{" "}
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity34" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.subscription} className="mr-2" />
                      Subscription: Cancel your plan
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam bodyTitle">
                <div className=" areyousureeSub text-center  mb-5">
                  <h3>Are You Sure wont to cancel your plan</h3>
                  <p>
                    Your Currunt subscription paln is{" "}
                    <strong>Single Monthly Plan</strong>
                  </p>
                </div>
                <h5 className="text-center">OR</h5>
                <div className="Upgradedowngerade m-3">
                  <h3 className="text-center">Upgrade Your Plan</h3>
                  <div className="upgradeplan subscriptionPackage flex mt-3 align-items-baseline justify-content-between">
                    <div class="monthlyPackage pointer m-0">
                      <div class="p-3">
                        <div class="signupType m-0">
                          <label class="Selcheckbox pl-0">
                            <input type="radio" id="Public" value="" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <h4>Single Child - Yearly </h4>
                      </div>
                      <div class="priceList">
                        <ul>
                          <li>
                            <span>$199.99</span> (Per Year)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="monthlyPackage pointer">
                      <div class="p-3">
                        <div class="signupType m-0">
                          <label class="Selcheckbox pl-0">
                            <input type="radio" id="Public" value="" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <h4>Single Child - Yearly </h4>
                      </div>
                      <div class="priceList">
                        <ul>
                          <li>
                            <span>$199.99</span> (Per Year)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="monthlyPackage pointer m-0">
                      <div class="p-3">
                        <div class="signupType m-0">
                          <label class="Selcheckbox pl-0">
                            <input type="radio" id="Public" value="" />
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <h4>Single Child - Yearly </h4>
                      </div>
                      <div class="priceList">
                        <ul>
                          <li>
                            <span>$199.99</span> (Per Year)
                          </li>
                        </ul>
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
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 "
                      >
                        Cancel Plan{" "}
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity35" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.subscription} className="mr-2" />
                      Subscription: Confirm Subscr
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam bodyTitle flex flex-wrap align-content-center">
                <div className="willmissedyou text-center m-auto">
                  <img src={image.Nugget_Wrong} alt="" />
                  <h3 className="w-100 text-center mt-3 mb-3">
                    Confirm Subscription Plan Cancelation
                  </h3>
                </div>

                <div className=" areyousureeSub text-center mb-5 w-75 p-3 m-auto">
                  <div className="enddateof ">
                    <h4 className="justify-content-center">
                      End of September 25, 2023
                    </h4>
                  </div>
                  <p>
                    Your Currunt subscription paln is Valid Until{" "}
                    <strong>September 25, 2023</strong>
                  </p>
                </div>
              </div>

              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup SchoolActivityPopup subscriptionwrapcard">
        <div className="modal fade" id="schoolactivity36" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.subscription} className="mr-2" />{" "}
                      Subscription: Select Plan
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>
              <div className="modal-body">
                <div className="chooseSubscription">
                  <h3 className="text-center"> Select Your Plan</h3>
                  <div className="form-check form-switch d-flex justify-content-center text-center p-0  subscriptionChoose">
                    <label
                      className="form-check-label d-flex w-60 m-auto p-0"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      <span>Single Child</span>
                      <span className="position-relative">
                        Family{" "}
                        <img
                          src={image.chat_icon}
                          alt=""
                          className="familysub"
                        />
                        <div className="familydisclaimer">
                          {" "}
                          <strong className="disclamer">
                            (*For families with two or more children)
                          </strong>
                        </div>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role={"switch"}
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <div className="subscriptioncardwrap flex justify-content-center">
                  <div className="subscriptioncard">
                    <div className="subscriptioncardtitle">
                      <h4>Single Child - Monthly</h4>
                      <h2>
                        {" "}
                        <del>$19.99</del> $0<sup>*</sup>{" "}
                        <span className="d-block text-center">per month</span>
                      </h2>
                    </div>
                    <div className="Subscriptioncardconlist ">
                      <ul className="mb-3">
                        <li>
                          <img src={image.rightCheck} alt="" />
                          <sup>*</sup>Pay $0 for first 3 months
                        </li>
                        <li>
                          <img src={image.rightCheck} alt="" /> Billed monthly
                        </li>
                      </ul>
                      <button className="btn-blue btn-login d-block m-0 mt-3 ">
                        Select
                      </button>
                    </div>
                  </div>
                  {/* <div className="subscriptioncard disableSubscard">
                    <div className="subscriptioncardtitle">
                      <h4>Single Child - Monthly</h4>
                      <h2> <del>$19.99</del> $0<sup>*</sup> <span className="d-block text-center">per month</span></h2>
                     
                      
                    </div>
                    <div className="Subscriptioncardconlist ">
                      <ul className="mb-3">
                        <li><img src={image.rightCheck} alt="" /><sup>*</sup>Pay $0 for first 3 months</li>
                        <li><img src={image.rightCheck} alt="" /> Billed monthly</li>
                      </ul>
                      <button className="btn-blue btn-login d-block m-0 mt-3 ">
                         Select
                      </button>
                    </div>
                  </div>  */}
                  <div className="subscriptioncard SubsActivecard">
                    <div className="subscriptioncardtitle">
                      <h4>Single Child - Yearly</h4>
                      <h2>
                        <del>$16.66</del> $0<sup>*</sup>
                        <span className="d-block text-center">per month</span>
                      </h2>
                      <p>
                        <strong> Save $40 per year</strong>
                      </p>
                    </div>
                    <div className="Subscriptioncardconlist ">
                      <ul className="mb-3">
                        <li>
                          <img src={image.rightCheck} alt="" />
                          <sup>*</sup>Pay $0 for first 3 months
                        </li>
                        <li>
                          <img src={image.rightCheck} alt="" /> Billed annually
                        </li>
                      </ul>
                      <h4 className="yourexistingplan">
                        Your current subscription for <strong>Fname</strong>
                      </h4>
                    </div>
                  </div>
                  {/* <div className="subscriptioncard SubsActivecard">
                    <div className="subscriptioncardtitle">
                    <h4>Single Child - Yearly</h4>
                      <h2><del>$16.66</del> $0<span className="d-block text-center">per month</span></h2>
                      <p><strong> Save $40 per year</strong></p>
                    </div>
                    <div className="Subscriptioncardconlist ">
                      <ul className="mb-3">
                      <li><img src={image.rightCheck} alt="" /> $0 for first 3 months</li>
                        <li><img src={image.rightCheck} alt="" /> Billed annually</li>
                      </ul>
                        <h4 className="yourexistingplan">Your current subscription for <strong>Fname</strong></h4>
                    </div>
                  </div> 
                  <div className="subscriptioncard disableSubscard">
                    <div className="subscriptioncardtitle">
                      <h4>Family - Monthly</h4>
                      <h2>
                        {" "}
                        <del>$39.99</del> $0<sup>*</sup>{" "}
                        <span className="d-block text-center">per month</span>
                      </h2>
                    </div>
                    <div className="Subscriptioncardconlist ">
                      <ul className="mb-3">
                        <li>
                          <img src={image.rightCheck} alt="" />
                          <sup>*</sup>Pay $0 for first 3 months
                        </li>
                        <li>
                          <img src={image.rightCheck} alt="" /> Billed monthly
                        </li>
                      </ul>
                      <button className="btn-blue btn-login d-block m-0 mt-3 ">
                        Select
                      </button>
                    </div>
                  </div> */}
                  {/* <div className="subscriptioncard SubsActivecard">
                    <div className="subscriptioncardtitle">
                      <h4>Family - Yearly</h4>
                      <h2>
                        {" "}
                        <del>$33.33</del> $0<sup>*</sup>{" "}
                        <span className="d-block text-center">per month</span>
                      </h2>
                      <p>
                        <strong> Save $80 per year</strong>
                      </p>
                    </div>
                    <div className="Subscriptioncardconlist ">
                      <ul className="mb-3">
                        <li>
                          <img src={image.rightCheck} alt="" /> <sup>*</sup>Pay
                          $0 for first 3 months
                        </li>
                        <li>
                          <img src={image.rightCheck} alt="" /> Billed annually
                        </li>
                      </ul>
                      <button className="btn-blue btn-login d-block m-0 mt-3 ">
                       Select
                      </button>
                      <h4 className="yourexistingplan">
                        Your current subscription for <strong>Fname</strong>
                      </h4>
                      <h4 className="yourexistingplan">Your current subscription</h4>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <div className="buttonDistribotion">
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
      <div className="nuggetsinmodal">
        <div className="modal fade" id="schoolactivity30" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0 NuggetPopup ">
                <div className="NuggetPopupTitle flex">
                  <div className="NuggetVickyImage">
                    <h4>
                      {" "}
                      <img src={image.Robovicky} alt="" className="mr-2" /> Well
                      Done!
                    </h4>
                  </div>
                  <div className="powrBulbicon">
                    <img src={image.Powericon} alt="" />
                  </div>
                </div>
                <div className="NuggetPopupDesc d-flex align-items-start justify-content-between">
                  <div className="NugeetsSolution">
                    <div className="nuggetsolitems">
                      <h6>
                        Option 1: <span>Oprah Winfrey</span>
                      </h6>
                      <p>
                        Oprah Winfrey overcame a difficult childhood to become
                        one of America's most successful and influential people.
                        A quote attributed to her that reflects her resilience
                        is about her attitude towards failures. 'Think like a
                        queen. A queen is not afraid to fail. Failure is another
                        stepping stone to greatness.'
                      </p>
                    </div>
                    <h5>Before you close, learn about other options...</h5>
                    <div className="nuggetsolitems">
                      <h6>
                        Option 2: <span>Stephen Hawking</span>
                      </h6>
                      <p>
                        Oprah Winfrey overcame a difficult childhood to become
                        one of America's most successful and influential people.
                        A quote attributed to her that reflects her resilience
                        is about her attitude towards failures. 'Think like a
                        queen. A queen is not afraid to fail. Failure is another
                        stepping stone to greatness.'
                      </p>
                    </div>
                    <div className="nuggetsolitems">
                      <h6>
                        Option 3: <span>Rosa Parks</span>
                      </h6>

                      <p>
                        Oprah Winfrey overcame a difficult childhood to become
                        one of America's most successful and influential people.
                        A quote attributed to her that reflects her resilience
                        is about her attitude towards failures. 'Think like a
                        queen. A queen is not afraid to fail. Failure is another
                        stepping stone to greatness.'
                      </p>
                    </div>
                  </div>
                  <p className="AudioIcon">
                    <img src={image.Audioicon} alt="" className="" />
                  </p>
                </div>
                <div className="NuggetPopupFooter">
                  <div className="input-group full-Width-group basic_details_form">
                    <div className="form-group BDsubmitbutton d-flex m-0 ">
                      <button
                        type="button"
                        class="btn-blue btn-login d-block mb-5 ml-auto cancelbutton"
                      >
                        {" "}
                        <i class="fa-solid fa-xmark mr-2"></i> Close{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hoosrSubModlPopup AreyousurePopup AddChildPopup">
        <div className="modal fade" id="schoolactivity37" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.dimension3d} alt="" className="mr-2" />
                      Pick a Dimension
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body optvarification Subject_Curriculam">
                <div className="whereYouleftwtrap">
                  {/* <div className="wlCard m-0">
                    <h3 className="whleftbtn"><img src={image.booknavigation} alt="" />Pickup where you left off!</h3>
                  </div>
                  <h2 class="h1 text-center m-minus-15 orbutton"><span class="bg-white">or</span></h2> */}
                  {/* <div class="EnrollTitle flex mb-3">
                    <div class="NuggetVickyImage">
                      <img
                        src="/static/media/Robovicky.ec82a31fa7c21f6e00b7.png"
                        alt=""
                      />
                    </div>
                    <div class="LessionDtlOverview w-100">
                      <p>
                        Pick a dimension you want your child to work on today!
                      </p>
                      <p className="leftofftxt">Pickup Where you left off!</p>
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-2 mt-2 m-0 w-auto"
                      >
                        Click here
                      </button>
                    </div>
                  </div> */}
                  <h2 className="">
                    <i class="fa-light fa-list mr-2"></i> Pick a dimension you
                    want to work on
                  </h2>
                  <div className="AlltypeDimensionbtn ">
                    <div className="wlCard intellectual_card">
                      <h3>
                        <img src={image.courselevel3} alt="" />
                        Intellectual
                      </h3>
                    </div>
                    <div className="wlCard physical_card">
                      <h3>
                        <img src={image.courselevel2} alt="" />
                        Physical
                      </h3>
                    </div>
                    <div className="wlCard social_card">
                      <h3>
                        <img src={image.courselevel4} alt="" />
                        Social
                      </h3>
                    </div>
                    <div className="wlCard emotional_card">
                      <h3>
                        <img src={image.CollegeJourneyicon} alt="" />
                        Emotional
                      </h3>
                    </div>
                    <div className="wlCard spiritual_card">
                      <h3>
                        <img src={image.courselevel5} alt="" />
                        Spiritual
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hoosrSubModlPopup MIscoreDescription">
        <div className="modal fade" id="schoolactivity39" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.MIimage4} alt="" className="mr-2" />
                      Logical-Mathematical
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="intelligenceTyoedetail flex">
                  <div className="intelligenceimg">
                    <img src={image.MIimage4} alt="" />
                  </div>
                  <div className=" pl-3">
                    <h4 className="mb-3">Logical-Mathematical</h4>
                    <p>
                      Logical-Mathematical intelligence types are very good with
                      numbers and structure. They are good at making plans and
                      sticking to them. They prefer things in order and
                      following schedules. However, this type of intelligence
                      does struggle with “reading people” sometimes.
                    </p>
                  </div>
                </div>
                <div className="scoreDescription">
                  <div className="scoredivision">
                    <h4>Score below 30%:</h4>
                    <ul>
                      <li>
                        Count the number of species of plant you see in a
                        certain area (such as a 10 ft x 10 ft square). Then take
                        that number and estimate the number found in a square
                        mile.{" "}
                      </li>
                      <li>
                        Listen to music and see if you can hear the beat change.
                      </li>
                      <li>
                        Talk through steps to solve a problem with somebody.
                      </li>
                    </ul>
                  </div>
                  <div className="scoredivision">
                    <h4>Score above 90%:</h4>
                    <ul>
                      <li>
                        Have a conversation with someone about their day. Ask
                        lots of questions about how they felt and use statements
                        like “That must have felt awful because….”
                      </li>
                      <li>
                        Create a new board game and play it with friends and
                        family.
                      </li>
                      <li>Follow a recipe step by step.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup knowsyourself">
        <div className="modal fade" id="schoolactivity38" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.knowyoyrselfcolored} className="mr-2" />
                      Know Yourself
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam flex flex-wrap align-content-center">
                <div class="EnrollTitle flex w-100  justify-content-center selectionofquiztxt">
                  <div class="NuggetVickyImage">
                    <img
                      src="/static/media/Robovicky.ec82a31fa7c21f6e00b7.png"
                      alt=""
                    />
                  </div>
                  <div class="LessionDtlOverview">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it
                    </p>
                  </div>
                </div>
                <div className="flex w-100 justify-content-around">
                  <div className="knowyouselfcard">
                    <img src={image.howyousmart} alt="" />
                    <h2>Check Your Smarts</h2>
                  </div>
                  <div className="knowyouselfcard">
                    <img src={image.personalitybnr} alt="" />
                    <h2>Check Your Personality Type</h2>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">q1``</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hoosrSubModlPopup AreyousurePopup AddChildPopup">
        <div className="modal fade" id="schoolactivity40" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.mortarboard} alt="" className="mr-2" />
                      Pick a Course
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body optvarification Subject_Curriculam whereYouleftwtrap">
                <div className="firsttimecoursewrap">
                  <div className="firsrcoursecard d-flex">
                    <div className="fcImage">
                      <img src={image.mathMatics} alt="" />
                    </div>
                    <div className="fccourseDetils p-2">
                      <h4 className="mb-2">
                        <img></img> Mindfulness in Motion:
                      </h4>
                      <div className="buttonDistribotion">
                        <button
                          type="button"
                          className="btn-blue btn-login d-block m-0 w-auto ml-auto"
                        >
                          <i className="fa-solid fa-paper-plane mr-2"></i>
                          Proceed to Course
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="firsrcoursecard d-flex">
                    <div className="fcImage">
                      <img src={image.mathMatics} alt="" />
                    </div>
                    <div className="fccourseDetils p-2">
                      <h4 className="mb-2">Ethical Decision Making</h4>
                      <div className="buttonDistribotion">
                        <button
                          type="button"
                          className="btn-blue btn-login d-block m-0 w-auto ml-auto"
                        >
                          <i className="fa-solid fa-paper-plane mr-2"></i>
                          Proceed to Course
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 class="h1 text-center m-minus-15 orbutton ">
                  <span class="bg-white">or</span>
                </h2>
                <div className="pick_diemension text-center mt-2 mb-2">
                  <NavLink to="path">
                    Pick a dimension you want to work on
                  </NavLink>
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 cancelbutton m-0"
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
      <div className="serveyPoup AreyousurePopup">
        <div className="modal fade" id="schoolactivity41" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.ratingsIcons} alt="" className="mr-2" />
                      Course Review
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body RatetousPopup ">
                <div className="ratingservaylistwrap">
                  <div className="ratingservayques servayratingsec">
                    <h3>
                      <img src={image.mortarboard} alt="" className="mr-2" />{" "}
                      Social Identities - Making the Invisible, Visible
                    </h3>
                    <h4>Course rating</h4>
                    <div className="d-flex align-items-center mt-3">
                      <h2 className="mr-2">4</h2>
                      <Rating></Rating>
                    </div>
                  </div>
                  <div className="ratingservayques">
                    <div className="input-group">
                      <label htmlFor="" className="mb-2">
                        Did you find the comic strips fun and engaging?
                      </label>
                      <RangeSlider1 key={1} ques={"red"} />
                      <div className="scaleParameter">
                        <div className="flex">
                          <span>0</span>
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                        </div>
                        <div className="scaleParamerettext flex">
                          <span>Not at all</span>
                          <span>A lot</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ratingservayques">
                    <div className="input-group">
                      <label htmlFor="" className="mb-2">
                        How likely are you to recommend this course to your
                        friends?
                      </label>
                      <RangeSlider1 key={1} ques={"red"} />
                      <div className="scaleParameter">
                        <div className="flex">
                          <span>0</span>
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                        </div>
                        <div className="scaleParamerettext flex">
                          <span>Not likely</span>
                          <span>Very likely</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ratingservayques addservettext">
                    <div className="input-group">
                      <label htmlFor="" className="mb-2">
                        Would you like to tell others what you think about this
                        course?
                      </label>
                      <div className="form-group mb-3">
                        <label htmlFor="" className="mb-2">
                          Add a headline
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          {" "}
                          Add a review
                        </label>
                        <textarea
                          name=""
                          id=""
                          placeholder="What did you like or dislike about this course? What did you learn? What more or different did you expect from this course?"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 cancelbutton m-0"
                    >
                      <i className="fa-solid fa-xmark"></i> Close
                    </button>
                    <button
                      type="submit"
                      className="btn-blue btn-login d-block mb-5 ml-3"
                    >
                      <i className="fa-solid fa-paper-plane"></i> Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup feedbacklabel SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity42" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.feedbackicon} className="mr-2" />
                      Feedback
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body pt-0 pb-0 d-flex align-content-center">
                <form className="w-100 p-1 ml-3 pr-2">
                  <div className="input-group w-100">
                    <label htmlFor="feedback" className="feedback-label">
                      How often do you use {SITEFNAME.NAME}?
                      <span class="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <select className="feedback-input form-control">
                        <option value="">Select</option>
                        <option value="Once a week">
                          Twice or more a week
                        </option>
                        <option value="Twice a week">Once a week</option>
                        <option value="Once a month"> Once a fortnight</option>
                        <option value="Others">Once a month</option>
                        <option value="Rarely">Rarely</option>
                      </select>
                    </div>
                  </div>

                  <div className="ratingservayques">
                    <div className="input-group">
                      <label htmlFor="" className="mb-2">
                        Does {SITEFNAME.NAME} cover the skills and courses that are
                        important for your child?
                        <span class="mandatoryField">*</span>
                      </label>
                      <RangeSlider1 key={1} ques={"red"} className="pl-3" />
                      <div className="scaleParameter">
                        <div className="flex">
                          <span>0</span>
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                        </div>
                        <div className="scaleParamerettext flex">
                          <span>Not at all</span>
                          <span>A lot</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ratingservayques">
                    <div className="input-group">
                      <label htmlFor="" className="mb-2">
                        How easy is it to find the skills and courses you were
                        looking for?
                        <span class="mandatoryField">*</span>
                      </label>
                      <RangeSlider1 key={1} ques={"red"} className="pl-3" />
                      <div className="scaleParameter">
                        <div className="flex">
                          <span>0</span>
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                        </div>
                        <div className="scaleParamerettext flex">
                          <span>Very difficult</span>
                          <span>Very easy</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ratingservayques">
                    <div className="input-group">
                      <label htmlFor="" className="mb-2">
                        How likely are you to recommend {SITEFNAME.NAME} to your friends
                        and family?
                        <span class="mandatoryField">*</span>
                      </label>
                      <RangeSlider1 key={1} ques={"red"} className="pl-3" />
                      <div className="scaleParameter">
                        <div className="flex">
                          <span>0</span>
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                          <span>9</span>
                          <span>10</span>
                        </div>
                        <div className="scaleParamerettext flex">
                          <span>Not likely</span>
                          <span>Very likely</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-group w-100">
                    <label htmlFor="feedback" className="feedback-label">
                      What can {SITEFNAME.NAME} do to enhance your experience?
                    </label>
                    <div className="form-group">
                      <textarea
                        class="form-control feedback-textarea1 mb-0"
                        placeholder="We would love to here your suggestion!"
                        name="description"
                      ></textarea>
                    </div>
                  </div>

                  <div className="input-group w-100">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        className="checkfeedback"
                        id="Public"
                        name="feedback"
                        value="PUBLIC"
                      ></input>
                      <label className="pl-2 mt-2 mb-2">
                      {SITEFNAME.NAME} may contact me about my feedback
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>

                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        <i className="fa-solid fa-paper-plane ml-1"></i> Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sharepopup AreyousurePopup">
        <div className="modal fade" id="schoolactivity43" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.certificate} alt="" className="mr-2" />
                      Share with Friends & Family
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="sharewithfrnd pb-3">
                  <div className="input-group">
                    <label htmlFor="">
                      Name<span className="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your friend's or family member's name"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="">
                      Email<span className="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your friend's or family member's email id"
                      />
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
                      <i className="fa-solid fa-xmark"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-paper-plane"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coursepup">
        <div className="modal fade" id="schoolactivity44" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.course_journey} alt="" className="mr-2" />
                      Course Guide
                    </span>
                  </h2>
                </div>
              </div>

              <div className="modal-body coursebody">
                <div className="sharewithfrnd pb-3">
                  <p>
                    A course is divided into 4 weeks. Each week takes about
                    30-60 minutes to complete and includes the following
                    elements.
                  </p>

                  <div className="ProcessAccordian w-100" div id="accordion">
                    <div
                      className="Processaccordianlist courseStepDesc"
                      id="headingOne"
                    >
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <img src={image.Seriesicon} />
                        Series{" "}
                        <span className="AngleupDown topstyle">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="courseStepDesc collapse show"
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="coursedesc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="Processaccordianlist courseStepDesc"
                      id="headingTwo"
                    >
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-controls="collapseTwo"
                      >
                        <img src={image.wavehand} />
                        Characters{" "}
                        <span className="AngleupDown topstyle">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="courseStepDesc collapse"
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="coursedesc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="Processaccordianlist courseStepDesc"
                      id="heading5"
                    >
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse5"
                        aria-controls="collapse5"
                      >
                        <img src={image.Scenenavigation} />
                        Knowledge Check{" "}
                        <span className="AngleupDown topstyle">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="courseStepDesc collapse"
                        id="collapse5"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="coursedesc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="Processaccordianlist courseStepDesc"
                      id="heading6"
                    >
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse6"
                        aria-controls="collapse6"
                      >
                        <img src={image.multipleintellQuiz} />
                        Weekly Excercise{" "}
                        <span className="AngleupDown topstyle">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="courseStepDesc collapse"
                        id="collapse6"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="coursedesc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="Processaccordianlist courseStepDesc"
                      id="heading4"
                    >
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse4"
                        aria-controls="collapse4"
                      >
                        <img src={image.money_bag} />
                        Points Bag{" "}
                        <span className="AngleupDown topstyle">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="courseStepDesc collapse"
                        id="collapse4"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="coursedesc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="Processaccordianlist courseStepDesc"
                      id="headingThree"
                    >
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-controls="collapseThree"
                      >
                        <img src={image.SceneRefrence} />
                        References{" "}
                        <span className="AngleupDown topstyle">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="courseStepDesc collapse"
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="coursedesc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <button
                className="btn btn-primary pointer courseclosebtn"
                data-dismiss="modal"
              >
                <i className="fa-regular fa-xmark m-0"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Addrewardform ">
        <div className="modal fade" id="schoolactivity46" role="dialog">
          <div className="modal-dialog modal-lg certificatePopup">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.rewardimg} alt="" className="mr-2" />
                      Course/Week [1] Reward
                    </span>
                    <button className="btn btn-primary">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="rewardPopupcontent">
                  <ul>
                    <li>
                      {" "}
                      <h4 className="flex">
                        <span>Progress:</span>

                        <div className="Progresslistitem w-50 m-0">
                          <div className="diemensionalProgress progressbar1"></div>
                        </div>
                        <span className="text-center">500 Points</span>
                      </h4>
                    </li>
                    {/* <li>
                      {" "}
                      <h4 className="">
                        <span>Progress:</span>
                        <span className="ml-1">
                          <img src={image.enrolledicon} alt="" />
                        </span>
                        <div className="Progresslistitem w-50 m-0">
                        <div className="diemensionalProgress progressbar1"></div>
                      </div>
                      <span className="text-center">500 Points</span>
                      </h4>
                    </li> */}
                    <li>
                      <h4>
                        <span>Reward:</span> 1 hour screen time
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span>Description:</span> You will get 1 hour screen
                        time{" "}
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <span>End Date:</span> 05/30/2023{" "}
                        <span className="rewarddaysleft">Days Left: 4</span>
                      </h4>
                      <h4>
                        <span>End Date:</span>{" "}
                        <strong className="expireddated">
                          05/30/2023{" "}
                          <span className="pl-3 rewarddaysleft timeexpiretxt">
                            Time Expired!
                          </span>
                        </strong>
                      </h4>
                    </li>
                    <li className="rewarduploadimg">
                      <h4>
                        <span>Image:</span> <img src={image.rewardimg} alt="" />
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 cancelbutton"
                    >
                      <i className="fa-solid fa-xmark"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-paper-plane"></i> Share
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="sharepopup AreyousurePopup Addrewardform">
        <div className="modal fade" id="schoolactivity47" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header">
                <div className="heading p-0 border-0 w-100">
                  <h2 className="flex">
                    <span className="flex">
                      {" "}
                      <img src={image.rewardimg} alt="" className="mr-2" />
                      Add Course/Week [1] Reward
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="rewardPopupcontent setyourrewardtarget">
                  <div className="input-group">
                    <label htmlFor="" className="w-100 flex">
                      Target Points<span class="mandatoryField mr-auto">*</span>{" "}
                      <small>(Maximum Points: 1,000)</small>
                    </label>
                    <div className="form-group d-flex align-items-end">
                      <input type="text" className="form-control" />
                    </div>
                    <span class="UserEditForm">
                      {" "}
                      <i class="fa fa-pencil"></i>
                    </span>
                  </div>

                  <div className="input-group">
                    <label htmlFor="">
                      Title<span class="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <input type="text" className="form-control" />
                    </div>
                    <span class="UserEditForm">
                      {" "}
                      <i class="fa fa-pencil"></i>
                    </span>
                  </div>

                  <div className="input-group">
                    <label htmlFor="">
                      Description<span class="mandatoryField">*</span>
                    </label>
                    <div className="form-group">
                      <textarea type="text" className="form-control" />
                    </div>
                    <span class="UserEditForm">
                      {" "}
                      <i class="fa fa-pencil"></i>
                    </span>
                  </div>

                  <div className="input-group calender">
                    <label htmlFor="">
                      End Date<span class="mandatoryField">*</span>
                    </label>
                    <span className="clenderIcon">
                      {" "}
                      <img src={image.Calendericon} alt="..." />
                    </span>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="--/--/--"
                      />
                    </div>
                    <span class="UserEditForm">
                      {" "}
                      <i class="fa fa-pencil"></i>
                    </span>
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Image</label>
                    <div className="form-group photoUploded p-0 border-0 position-relative">
                      <div className="flex align-items-baseline">
                        <div className="uploadederewardimg">
                          <img
                            src={image.camera}
                            alt=""
                            className="cameraicon"
                          />
                        </div>
                        {/* <div className="uploadcloud">
                         <i class="fa-regular fa-cloud-arrow-up"></i>
                        <span>Upload</span>
                        </div> */}
                        <input type="file" className=" form-control w-auto" />
                        {/* <button className="btn-blue btn-login  w-auto">
                          <i class="fa-regular fa-cloud-arrow-up mr-2"></i>{" "}
                          Browse
                        </button> */}
                      </div>
                      <span class="UserEditForm">
                        {" "}
                        <i class="fa fa-pencil"></i>
                      </span>
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
                      <i className="fa-solid fa-xmark"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-paper-plane"></i> Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup feedbacklabel SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity48" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.settingicons} className="mr-2" />
                      Settings
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body pt-0 pb-0 d-flex align-content-center">
                <div className="tabgrid w-100">
                  <ul>
                    <li className="tabs">
                      <img src={image.gensettings} /> General
                    </li>
                    {/* <li className="tabs"><img src={image.CourseTitleIcon} alt="" /> Skills</li> */}
                    <li className="tabs active-tabs">
                      {" "}
                      <img src={image.mortarboard} alt="" /> Course
                    </li>
                  </ul>
                  <div className="setuserprofile">
                    <div class="VKprofile">
                      <div class="vkprofilename">
                        <span class="insceptionFilter  ml-auto ">
                          <div
                            id="navbarDropdown"
                            class="text-dark"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="fa-regular fa-user-group mr-2"></i>First
                            Child<i class="fa-regular fa-chevron-down"></i>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="settingtable ">
                    <table className="w-100">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>
                            {" "}
                            <span>Course Name</span>
                          </th>
                          <th>
                            {" "}
                            <label className="Selcheckbox">
                              <input
                                type="checkbox"
                                id="Public"
                                name="schoolType"
                                value="PUBLIC"
                              />
                              <span class="checkmark "></span>
                            </label>
                            Show Course
                          </th>
                          <th className="text-center">
                            {" "}
                            <span className="text-center"> Enrolled </span>
                          </th>
                          <th>
                            {" "}
                            <label className="Selcheckbox">
                              <input
                                type="checkbox"
                                id="Public"
                                name="schoolType"
                                value="PUBLIC"
                              />
                              <span class="checkmark "></span>
                            </label>
                            Show Reward
                          </th>
                          <th>
                            {" "}
                            <label className="Selcheckbox">
                              <input
                                type="checkbox"
                                id="Public"
                                name="schoolType"
                                value="PUBLIC"
                              />
                              <span class="checkmark "></span>
                            </label>
                            KC* Required
                          </th>
                          <th>
                            <span className="text-center">Reward </span>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-100 p-0 border-0" colSpan="7">
                            <table className="w-100">
                              <tr>
                                <td>1</td>
                                <td>
                                  <span>
                                    {" "}
                                    Social Identities - Making the Invisible,
                                    Visible
                                  </span>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  {/* <label className="Selcheckbox enrolledcorse">
                          <input type="checkbox" id="Public" name="schoolType" value="PUBLIC" checked /><span class="checkmark "></span>
                         </label> */}
                                  <span className="text-center">
                                    <img src={image.enrolledicon} alt="" />{" "}
                                  </span>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td
                                  data-toggle="collapse"
                                  aria-expanded="true"
                                  data-target="#collapseOne"
                                >
                                  <i class="fa-light fa-chevron-down"></i>
                                </td>
                              </tr>
                            </table>

                            <table
                              className="w-100 child_Table panel-collapse collapse"
                              id="collapseOne"
                            >
                              <tr>
                                <td></td>
                                <td>
                                  <span>Wk1: Trouble at Green Hill Middle</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <span>Wk2: Witnessing a Microaggression</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <span>
                                    {" "}
                                    Wk3: Apologizing for a Microaggression
                                  </span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <span>
                                    Wk4: Experiencing a Microaggression
                                  </span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-100 p-0 border-0" colSpan="7">
                            <table className="w-100">
                              <tr>
                                <td>2</td>
                                <td>
                                  <span>Debunking Health Myths</span>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td className="enrolledcorse">
                                  <span className="text-center">
                                    <i class="fa-solid fa-circle-minus"></i>
                                  </span>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    <a href="">View / Edit</a>
                                  </span>
                                  {/* <span className="text-center"> <img src={image.enrolledicon} alt="" /></span>  */}
                                </td>
                                <td
                                  data-toggle="collapse"
                                  aria-expanded="true"
                                  data-target="#collapseOne1"
                                >
                                  <i class="fa-light fa-chevron-down"></i>
                                </td>
                              </tr>
                            </table>
                            <table
                              className="w-100 child_Table panel-collapse collapse"
                              id="collapseOne1"
                            >
                              <tr>
                                <td></td>
                                <td>
                                  <span>Wk1: Trouble at Green Hill Middle</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <span>Wk2: Witnessing a Microaggression</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <span>
                                    {" "}
                                    Wk3: Apologizing for a Microaggression
                                  </span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <span>
                                    Wk4: Experiencing a Microaggression
                                  </span>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <label className="Selcheckbox">
                                    <input
                                      type="checkbox"
                                      id="Public"
                                      name="schoolType"
                                      value="PUBLIC"
                                    />
                                    <span class="checkmark "></span>
                                  </label>
                                </td>
                                <td>
                                  <span className="text-center">
                                    {" "}
                                    <i className="fa-solid fa-circle-plus"></i>
                                  </span>
                                </td>
                                <td></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-left mt-3">KC* = Knowledge Check</p>
                  </div>
                </div>
              </div>
              <div className="Applyforall">
                <label class="Selcheckbox">
                  Apply to all children
                  <input
                    type="checkbox"
                    id="Public"
                    name="schoolType"
                    value="PUBLIC"
                  />
                  <span class="checkmark "></span>
                </label>
              </div>
              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>

                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        <i className="fa-solid fa-paper-plane ml-1"></i> Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="model-footer">
                <div className="sharecertificate">
                  <span className="shareback mr-2">
                    <i class="fa-solid fa-xmark mr-2"></i>Close
                  </span>

                  <span>Share with Friends & Family</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="halfPagePOpup feedbacklabel SchoolActivityPopup">
        <div className="modal fade" id="schoolactivity49" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="flex">
                    <span>
                      <img src={image.compassicon} className="mr-2" />
                      Learner Journey
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body pt-0 pb-0 d-flex align-content-center">
                <div className="learning_journey w-100">
                  <h3>
                    Is Adam ready for an rapidly changing and unpredictable
                    future?
                  </h3>
                  <div className="fronzerotodest text-center">
                    <h4>A holistic learning journey tailored for Adam</h4>
                    <div className="journeytrack">
                      <img src={image.redflag} alt="" />
                    </div>
                    <h5>
                      In two (2) to three (3) month Adam will learn the below
                      skills...
                    </h5>
                  </div>
                  <div className="ljourneywrap">
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          In-School Courses <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Math</a> and{" "}
                          <a href="#">English</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Health & Nutrition{" "}
                          <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Food for Thought</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Responsible Decision Making{" "}
                          <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll:{" "}
                          <a href="#"> Introduction to Internet Safety</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Self-Awareness <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Promoting Self-Improvement</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Compassion <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Recognizing suffering</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-right ">
                    You can edit this learningjourney later.
                  </h4>
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

                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        <i className="fa-solid fa-paper-plane ml-1"></i> Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedbacklabel AreyousurePopup  ljourneypopup">
        <div className="modal fade" id="schoolactivity50" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0 w-100">
                  <h2 className="flex">
                    <span>
                      <img src={image.compassicon} className="mr-2" />
                      Learner Journey
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body p-0">
                <div className="learning_journey w-100">
                  <h3>
                    Is Adam ready for an rapidly changing and unpredictable
                    future?
                  </h3>
                  <div className="fronzerotodest text-center">
                    <h4>A holistic learning journey tailored for Adam</h4>
                    <div className="journeytrack">
                      <img src={image.redflag} alt="" />
                    </div>
                    <h5>
                      In two (2) to three (3) month Adam will learn the below
                      skills...
                    </h5>
                  </div>
                  <div className="ljourneywrap">
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          In-School Courses <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Math</a> and{" "}
                          <a href="#">English</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Health & Nutrition{" "}
                          <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Food for Thought</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Responsible Decision Making{" "}
                          <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll:{" "}
                          <a href="#"> Introduction to Internet Safety</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Self-Awareness <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Promoting Self-Improvement</a>
                        </p>
                      </div>
                    </div>
                    <div className="ljourneycarxd flex">
                      <div className="ljournyimg">
                        <img src={image.mathMatics} alt="" />
                      </div>
                      <div className="ljourneyDesc">
                        <h4>
                          Compassion <img src={image.chat_icon} alt="" />
                        </h4>
                        <p>
                          Enroll: <a href="#">Recognizing suffering</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img src={image.Robovicky_right} alt="" />
                  </div>
                  <h4 className="editjourneydiemension whereYouleftwtrap text-center">
                    <span className="flex">
                      *You can edit this learningjourney later.
                      <button
                        type="button"
                        className="btn-blue btn-login d-block  w-auto"
                      >
                        <i className="fa-solid fa-paper-plane ml-1"></i> Enroll
                      </button>
                    </span>
                    <h2 class="h1 text-center m-minus-15 orbutton">
                      <span class="bg-white">or</span>
                    </h2>
                    <a href="">
                      Pick a dimension you want your child to work on today!
                    </a>
                  </h4>
                </div>

                <div className="whereYouleftwtrap p-3 m-3">
                  <div className="wlCard m-0">
                    <h3 className="whleftbtn">
                      <img src={image.booknavigation} alt="" />
                      Pickup where you left off!
                    </h3>
                  </div>
                  <h2 class="h1 text-center m-minus-15 orbutton">
                    <span class="bg-white">or</span>
                  </h2>
                  <div class="EnrollTitle flex mb-3">
                    <div class="NuggetVickyImage">
                      <img src={image.Robovicky} alt="" />
                    </div>
                    <div class="LessionDtlOverview w-100">
                      <p>
                        Pick a dimension you want your child to work on today!
                      </p>
                      <p className="leftofftxt">Pickup Where you left off!</p>
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-2 mt-2 m-0 w-auto"
                      >
                        Click here
                      </button>
                    </div>
                  </div>
                  <h2 className="">
                    <i class="fa-light fa-list mr-2"></i> Pick a dimension you
                    want to work on
                  </h2>
                  <div className="AlltypeDimensionbtn ">
                    <div className="wlCard intellectual_card">
                      <h3>
                        <img src={image.courselevel3} alt="" />
                        Intellectual
                      </h3>
                    </div>
                    <div className="wlCard physical_card">
                      <h3>
                        <img src={image.courselevel2} alt="" />
                        Physical
                      </h3>
                    </div>
                    <div className="wlCard social_card">
                      <h3>
                        <img src={image.courselevel4} alt="" />
                        Social
                      </h3>
                    </div>
                    <div className="wlCard emotional_card">
                      <h3>
                        <img src={image.CollegeJourneyicon} alt="" />
                        Emotional
                      </h3>
                    </div>
                    <div className="wlCard spiritual_card">
                      <h3>
                        <img src={image.courselevel5} alt="" />
                        Spiritual
                      </h3>
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

                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        <i className="fa-solid fa-paper-plane ml-1"></i> Enroll
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
  );
};

export default journey;

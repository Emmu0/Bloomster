import React from "react";
import Home from "../Home";
import { Progress } from "../dimensions";
import * as image from "../../resources/images";
import { SelectPicker } from "rsuite";
import { Rating } from "../../utils/Packages";
import "rsuite/dist/rsuite.css";
import { Line, Circle } from "rc-progress";

const Success = (props) => {
  return (
    <>
      {/* <p className='text-left ml-3 mt-3 pl-3 logoerror'><img src={image.vicky_logo_LP} className=""></img></p> 
  <div className='Successpage text-center'>
        
       <h3 className=' mb-3'>Your Token has been Verified <span className='greencolo'>SuccessFully</span> </h3>
       <h2 className=''>'Thanks'</h2>
       <div className='Successimsge'>
        <img src={image.success_page_img} />
    </div>
    <div className='ErrorDescription w-100'>
						<a href='#'>
							<i className=' icon icon-dapulse-home  h4 mb-0 mr-2'></i>Go To
							Home
						</a>
					</div>
  </div> */}
      <Home>
        <div className="d-flex flex-wrap">
          <div className="breadCrum">
            <div className="heading">
              <h2 className="flex border-0">
                <ul>
                  <li>
                    {" "}
                    <i className="fa-solid fa-brain"></i> Intellectual{" "}
                    <span>&#62;</span>
                  </li>
                  <li>
                    CourseName <span>&#62;</span>
                  </li>
                  <li className="bActivepage">Week</li>
                </ul>
                <div className="VKprofile">
                  <div className="vkprofilename">
                    <a href="#">
                      <i className="fa fa-user"></i>Sid02 Sid02
                    </a>
                  </div>
                </div>
              </h2>
            </div>
          </div>
          <div className="d-flex w-100">
            <div className="LeftbarPannel p-0 ">
              <div className="PMSkillList">
                <ul>
                  <li>
                    <h5>
                      <span>
                        <img src={image.courselevel1} alt="" />
                        {/* <img src={image.courselevel2} alt="" />
                  <img src={image.courselevel3} alt="" />
                  <img src={image.courselevel4} alt="" />
                   <img src={image.CollegeJourneyicon} alt="" /> */}
                        {/* <img src={image.courselevel5} alt="" /> */}
                        {/* <img src={image.PrimarySkillicon} alt="" /> */}
                      </span>
                      <span className="Abouttaginfo">
                        <i className="fa-duotone fa-circle-info"></i>
                        <div className="abExplanation">
                          <h5>
                            <i className="fa-duotone fa-circle-info mr-2"></i>{" "}
                            Explanation
                          </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it
                          </p>
                        </div>
                      </span>
                      Key Areas
                      <span>
                        <i className="fa-regular fa-pencil ml-3"></i>
                      </span>
                    </h5>
                  </li>
                  <li>
                    <span className="CoreSkills">c</span>
                    <p>Math</p>
                    <div className="Course_progressbar">
                      <span className="TotleProgressInsub">0%</span>

                      <Line percent={0} strokeWidth={10} strokeColor="red" />
                    </div>
                  </li>
                  <li>
                    <span className="CoreSkills">c</span>
                    <p>English</p>
                    <div className="Course_progressbar">
                      <span className="TotleProgressInsub">0%</span>

                      <Line percent={0} strokeWidth={10} strokeColor="red" />
                    </div>
                  </li>
                  <li>
                    <span className="CoreSkills">c</span>
                    <span>
                      <i className="fa-regular fa-pencil ml-3"></i>
                    </span>
                    <p>Science</p>
                  </li>
                  <li>
                    <span className="CoreSkills">c</span>
                    <span>
                      <i className="fa-regular fa-pencil ml-3"></i>
                    </span>
                    <p>Social Studies</p>
                  </li>
                  <li>
                    <span className="ElectiveSkills">e</span>

                    <p>Music</p>
                    <div className="Course_progressbar">
                      Coming Soon <i className="fa-duotone fa-circle-info"></i>
                    </div>
                  </li>
                  <li>
                    <span className="ElectiveSkills">e</span>
                    <span>
                      <i className="fa-regular fa-pencil ml-3"></i>
                    </span>
                    <p>Art</p>
                  </li>
                </ul>
              </div>
              <div className="PMSkillList">
                <ul>
                  <li>
                    <h5>
                      <span>
                        <img src={image.PrimarySkillicon} alt="" />
                      </span>
                      Primary Skills
                      <span>
                        <i className="fa-duotone fa-circle-info"></i>
                        <i className="fa-regular fa-pencil ml-3"></i>
                      </span>
                    </h5>
                  </li>
                  <li>
                    <span>
                      <span className="CoreSkills">c</span>
                      <i className="fa-regular fa-pencil ml-3"></i>
                    </span>
                    <p>Diversity</p>
                    <div className="Course_progressbar"></div>
                  </li>
                  <li>
                    <span>
                      {" "}
                      <i className="fa-regular fa-pencil ml-3"></i>
                    </span>
                    <span className="CoreSkills">c</span>
                    <p>Goal Setting</p>
                    <div className="Course_progressbar"></div>
                  </li>
                  <li>
                    <span className="ElectiveSkills">e</span>
                    <p>Building Relationships</p>
                    <div className="Course_progressbar">
                      Coming Soon <i className="fa-duotone fa-circle-info"></i>
                    </div>
                  </li>
                  <li>
                    <span className="ElectiveSkills">e</span>
                    <p>Conflict Resolution</p>
                    <div className="Course_progressbar">
                      Coming Soon<i className="fa-duotone fa-circle-info"></i>
                    </div>
                  </li>
                  <li>
                    <span className="ElectiveSkills">e</span>
                    <p>Empathizing</p>
                    <div className="Course_progressbar">
                      Coming Soon <i className="fa-duotone fa-circle-info"></i>{" "}
                    </div>
                  </li>
                  <li>
                    <span className="ElectiveSkills">e</span>
                    <p>Leadership</p>
                    <div className="Course_progressbar">
                      Coming Soon <i className="fa-duotone fa-circle-info"></i>{" "}
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="PMSkillList">
                <h5>
                  <i className="fa-regular fa-bullseye-arrow mr-2"></i>Key Areas:{" "}
                  <i className="fa-thin fa-pencil ml-2 pointer"></i>
                </h5>
                <div className="intrestlisting w-75 p-0">
                  <div className="instlistitem">
                    <div className="carditem carditemCorsePercent">
                      <h4 className="flex">
                        Math
                       <i className='fa-solid fa-check ml-3'></i>
                        <div className="Course_progressbar">
                          <span className="TotleProgressInsub">80%</span>
                          <Circle
                            percent={80}
                            strokeWidth={10}
                            strokeColor="#48cfae"
                          /> 
                          <Line percent={80} strokeWidth={15} strokeColor="green" />
                        </div>
                      </h4>
                      <span className="CoreSkills">c</span>
                    </div>
                  </div>
                  <div className="instlistitem">
                    <div className="carditem carditemCorsePercent">
                      <h4 className="flex">
                        English
                        <i className="fa-solid fa-check ml-3"></i>
                      </h4>
                      <span className="CoreSkills">c</span>
                    </div>
                  </div>
                  <div className="instlistitem">
                    <div className="carditem carditemCorsePercent">
                      <h4 className="flex">
                        Science
                        <span
                          data-toggle="dropdown"
                          id="SelectSubjectbranch"
                          aria-haspopup="true"
                        >
                          {" "}
                          <i className="fa-thin fa-pencil ml-3"></i>
                        </span>
                      </h4>
                      <div
                        className="SlecteSub dropdown-menu"
                        aria-labelledby="SelectSubjectbranch"
                      >
                        <h5>Choose Your Subject:</h5>
                        <ul>
                          <li>
                            <div className="signupType m-0">
                              <label className="Selcheckbox">
                                <input
                                  type="Checkbox"
                                  id="Public"
                                  name="Question"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            Physical Science
                          </li>
                          <li>
                            <div className="signupType m-0">
                              <label className="Selcheckbox">
                                <input
                                  type="Checkbox"
                                  id="Public"
                                  name="Question"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            Physical Science
                          </li>
                          <li>
                            <div className="signupType m-0">
                              <label className="Selcheckbox">
                                <input
                                  type="Checkbox"
                                  id="Public"
                                  name="Question"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            Medical Science
                          </li>
                          <li>
                            <div className="signupType m-0">
                              <label className="Selcheckbox">
                                <input
                                  type="Checkbox"
                                  id="Public"
                                  name="Question"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            Bio Science
                          </li>
                        </ul>
                        <div className="SubmitSubBtn text-right mt-3">
                          <button className="btn-blue btn-login w-auto">
                            {" "}
                            <i className="fa-solid fa-paper-plane mr-2"></i>{" "}
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instlistitem">
                    <div className="carditem carditemCorsePercent">
                      <h4 className="flex">
                        English
                        <i className="fa-solid fa-check ml-3"></i>
                      </h4>
                      <span className="CoreSkills">c</span>
                    </div>
                  </div>
                  <div className="instlistitem">
                    <div className="carditem">
                      <h4 className="flex">
                        Science
                        <span
                          data-toggle="dropdown"
                          id="SelectSubjectbranch"
                          aria-haspopup="true"
                        >
                          {" "}
                          <i className="fa-thin fa-pencil ml-3"></i>
                        </span>
                        <div
                          className="SlecteSub dropdown-menu"
                          aria-labelledby="SelectSubjectbranch"
                        >
                          <h5>Choose Your Subject:</h5>
                          <ul>
                            <li>
                              <div className="signupType m-0">
                                <label className="Selcheckbox">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              Physical Science
                            </li>
                            <li>
                              <div className="signupType m-0">
                                <label className="Selcheckbox">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              Physical Science
                            </li>
                            <li>
                              <div className="signupType m-0">
                                <label className="Selcheckbox">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              Medical Science
                            </li>
                            <li>
                              <div className="signupType m-0">
                                <label className="Selcheckbox">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                              Bio Science
                            </li>
                          </ul>
                          <div className="SubmitSubBtn text-right mt-3">
                            <button className="btn-blue btn-login w-auto">
                              {" "}
                              <i className="fa-solid fa-paper-plane mr-2"></i>{" "}
                              Submit
                            </button>
                          </div>
                        </div>
                      </h4>

                      <span className="CoreSkills">c</span>
                    </div>
                  </div>
                  <div className="instlistitem">
                    <div className="carditem carditemCorsePercent">
                      <h4 className="flex">
                        Technology
                        <div className="Course_progressbar">
                          <span className="TotleProgressInsub">80%</span>
                          <Circle
                            percent={80}
                            strokeWidth={10}
                            strokeColor="#e9b72f"
                          />
                          {/* <Line percent={80} strokeWidth={15} strokeColor="green" /> 
                        </div>
                      </h4>
                      <span className="ElectiveSkills">e</span>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="heading d-flex w-100 p-0 border-0">
                <div className="tabgrid  w-100 m-0 ">
                  <ul>
                    <li className="tabs active-tabs">
                      <img src={image.courselevel3} alt="" />
                      Intellectual
                    </li>
                    <li className="tabs">
                      {" "}
                      <img src={image.courselevel2} alt="" /> Physical
                    </li>
                    <li className="tabs">
                      {" "}
                      <img src={image.courselevel4} alt="" />
                      Social
                    </li>
                    <li className="tabs">
                      <img src={image.CollegeJourneyicon} alt="" />
                      Emotional
                    </li>
                    <li className="tabs">
                      {" "}
                      <img src={image.courselevel5} alt="" />
                      Spiritual
                    </li>
                  </ul>
                </div>
              </div>

              <div className="gridSection mt-3">
                {/* <div className="flex">
                  <div className="GridDefaultSreen w-60 pt-5 pb-5">
                    <img src="https://vicky-dev.s3.amazonaws.com/social_tab.png" alt="" />
                  </div>
                  <div className="GridDefaultSreentxt w-40">
                    <h2 className="mb-3">Lorem Ipsum is simply dummy</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="GridDefaultSreen w-60 pt-5 pb-5">
                    <img src="https://vicky-dev.s3.amazonaws.com/emotional_tab.png" alt="" />
                  </div>
                  <div className="GridDefaultSreentxt w-40">
                    <h2 className="mb-3">Lorem Ipsum is simply dummy text </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="GridDefaultSreen w-60 pt-5 pb-5">
                    <img src="https://vicky-dev.s3.amazonaws.com/spiritual_tab.png" alt="" />
                  </div>
                  <div className="GridDefaultSreentxt w-40">
                    <h2 className="mb-3">Lorem Ipsum is simply dummy</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                </div> */}
                {/* <button
                className="btn primary-button"
                data-toggle="modal"
                data-target="#schoolactivity15"
              ></button> */}
                {/* <div className="PatahwaysSel">
            <div
              className="Selectpathways"
            
              data-toggle="modal"
              data-target="#schoolactivity14"
            >
             <h3 className="flex w-100">
              <span>
              <i className="fa-regular fa-signs-post"></i> Pathways:Bussiness & Management
              </span>
                <span>
                   <i className="fa-solid fa-pencil fontawsomeicon"></i>
                 
                  </span>
                
              </h3>
            </div>
          
          </div> */}
                <div className="GridCardList">
                  {/* <div className="Gridcard">
            <div className="Gridsocialsec">
              <div className="GridiamgeCard">
                <div className="Gridimage">
                  <img
                    // src={
                    //   process.env.REACT_APP_AWS_INTEREST_URL + data?.imageUrl
                    // }
                    src={image.mathMatics}
                  />
                </div>
                <div
                  className="RatingWrap1  flex  dropdown-toggle mt-2 pb-2 mb-3"
                  key={data?.id}
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
                      <span className="ml-1">
                        ({data?.activityRating ? data?.activityRating : "0"} )
                      </span>
                    </span>
                  </div>
                </div>
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i> Curriculum
                  </li>
                  <li className="position-relative">
                    <span className="clenderIcon">
                      {" "}
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    Schedule<i className="fa-solid fa-angle-down"></i>
                    <div className="BrifeInfomation d-none">
                      <ul>
                        <li>
                          {" "}
                          <i className="fa-solid fa-stopwatch"></i>
                          <span>50 Min </span>Per Class
                        </li>

                        <li>
                          {" "}
                          <i className="fa-solid fa-users"></i>{" "}
                          <span>1-5 </span>
                          Learner per Class
                        </li>
                        <li>
                          {" "}
                          <i className="fa-solid fa-cake-candles"></i>
                          <span>6-11</span> Year olds
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="shorSchedule">
                  <p>
                    <i className="fa-solid fa-anchor"></i>
                    Fixed
                  </p>
                  <p>
                    <img src={image.nodes} />2 class per week
                  </p>
                </div>
              </div>
              <div className="priceWrap">
                <h3>
                  $15 <span>per class</span>
                </h3>
                <button className="btn-blue btn-login d-block w-100 ">
                  <i className="fa-solid fa-paper-plane"></i> Enroll Now
                </button>
              </div>
            </div>
            <div className="GridDetails">
              <div className="GridCardTitle">
                <h3 data-toggle="modal" data-target="#coursedetailpage">
                  {data?.name}
                  <span>Grade: {getSelectedUser?.level?.name}</span>{" "}
                </h3>
              </div>
              <div className="GridCardFullDetails">
                <div className="GridCardTitleDesc">
                  <div className="GridTeacher align-items-center">
                    <span className="ProfileChild">P S</span>
                    <div className="teachername ">
                      {getTeacherName(data, getSelectedUser?.schoolDetails) ? (
                        <>
                          <span
                            data-toggle="modal"
                            className="teachernametxt"
                            data-target="#Teacherdetailpage"
                          >
                            {getTeacherName(
                              data,
                              getSelectedUser?.schoolDetails
                            )}
                          </span>
                          <div className="flex">
                            <div className="RatingWrap1  flex  dropdown-toggle"
                              key={data?.id}
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
                                  allowHover
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
                                  <span className="ml-1">
                                    ({" "}
                                    {data?.activityRating
                                      ? data?.activityRating
                                      : "0"}{" "}
                                    )
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link to={PATHS.SCHOOLINFO_STR + getSelectedUser?.id}>
                          Add Teacher
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="gridSchool w-50 p-0">
                    <div className="GridTeacher align-items-center">
                      <span>
                        <i className="fa-solid fa-school"></i>
                      </span>
                      <div className="teachername">
                        {getSelectedUser?.schoolDetails?.school?.name ? (
                          getSelectedUser?.schoolDetails?.school?.name
                        ) : (
                          <Link to={PATHS.SCHOOLINFO_STR + getSelectedUser?.id}>
                            Add School
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <p>{data?.description}</p>

                <div className="gridActivity">
                  <div className="ActivityTitle w-100">
                    <h4 className="d-flex align-items-center w-100 flex videoDescription">
                      {" "}
                      Activities{" "}
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdown"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdown"
                      >
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
                    </h4>
                    <div className="addActivity CatItemList position-relative">
                      <i className="fa-solid fa-circle-plus"></i>
                      <div className="ActivityCategory">
                        <h4>
                          <img src={image.addActivity} />
                          Add Activity
                        </h4>
                        <div className="CatItemList">
                          <ul>
                            {ACTIVITYMENU.map((value, key) => (
                              <li key={key}>
                                {value.type}{" "}
                                <i className="fa-solid fa-angle-right"></i>
                                <div className="categorryName">
                                  <h4>
                                    <img src={image[value.flag]} /> {value.type}
                                  </h4>
                                  <div className="CatItemList">
                                    <ul>
                                      {value.result.map((vl, ky) => (
                                        <li
                                          key={ky}
                                          onClick={() =>
                                            showAddActivity(
                                              value.type,
                                              vl.value,
                                              data
                                            )
                                          }
                                        >
                                          {vl.value} <span>+</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ActivityList">
                    <div className="activityListitems">
                      {data?.activities &&
                        getSorting(data?.activities).map((val, key) => (
                          <React.Fragment key={key}>
                            <ActivityCard
                              showActivity={showActivity}
                              data={val}
                              courseData={data}
                              showRating={showRating}
                              showRatingWizad={showRatingWizad}
                              showViewActivity={showViewActivity}
                              showWizad={showWizad}
                              ratingWizadId={ratingWizadId}
                              onClickOutside1={onClickOutside1}
                              onClickOutside={() => {
                                setShowWizad(false);
                              }}
                            />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                  <div className="loadmoreActivity">
                    Load More <i className="fa-solid fa-circle-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
                  {/* Intellictual Card */}
                  <div className="SocialCoursecardWrap mb-3">
                    <h4
                      data-toggle="collapse"
                      className="flex KATitle"
                      aria-expanded="true"
                      href={"#socialcardAcordian1"}
                    >
                      {/* {courseDetail?.skill} */}
                      Math
                      <i className="fa-solid fa-angle-down"></i>
                    </h4>
                    <div
                      className="AllsCaedwrap collapse show"
                      id="socialcardAcordian1"
                    >
                      <div className="Gridcard">
                        <div className="Gridsocialsec">
                          <div className="GridiamgeCard">
                            <div className="Gridimage">
                              <img
                                // src={
                                //   process.env.REACT_APP_AWS_INTEREST_URL + data?.imageUrl
                                // }
                                src={image.vikylogoicon}
                              />
                            </div>
                          </div>
                          <div className="RatingWrap1   flex m-auto">
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
                        <div className="GridDetails">
                          <div className="GridCardTitle">
                            <h3
                              data-toggle="modal"
                              data-target="#coursedetailpage"
                            >
                              Learning Center{" "}
                              <span>
                                100
                                <img src={image.money_bag} alt="" />
                              </span>
                            </h3>
                          </div>
                          <div className="GridCardFullDetails">
                            <div className="GridCardTitleDesc">
                              <p className="w-50 flex">
                                <span className="gradeiconimage ml-5 d-flex">
                                  <img src={image.mortarboard} alt="" />
                                  <span className="">
                                    Grade: <strong>6</strong>
                                  </span>
                                </span>
                              </p>
                            </div>

                            <div className="gridActivity">
                              <div className="CourseardDesc">
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Gridcard">
                        <div className="Gridsocialsec">
                          <div className="GridiamgeCard">
                            <div className="Gridimage">
                              <img
                                // src={
                                //   process.env.REACT_APP_AWS_INTEREST_URL + data?.imageUrl
                                // }
                                src={image.mathMatics}
                              />
                            </div>
                          </div>
                          <div className="RatingWrap1   flex m-auto">
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
                        <div className="GridDetails">
                          <div className="GridCardTitle">
                            <h3
                              data-toggle="modal"
                              data-target="#coursedetailpage"
                            >
                              1 Learn LCM, GCF{" "}
                              <span>
                                100
                                <img src={image.money_bag} alt="" />
                              </span>
                            </h3>
                          </div>
                          <div className="GridCardFullDetails">
                            <div className="GridCardTitleDesc">
                              <p className="w-50 flex">
                                <span className="gradeiconimage ml-5 d-flex">
                                  <img src={image.mortarboard} alt="" />
                                  <span className="">
                                    Grade: <strong>6</strong>
                                  </span>
                                </span>
                              </p>

                              <div className="TeacherName w-100 d-flex justify-content-end">
                                <div className="TeacherActivityimg mr-2">
                                  <img src={image.CourseProviderThumb} alt="" />
                                </div>
                                <div className="techrrat ">
                                  <div className="teachername">
                                    Anna Whiteley
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
                                      <span className="ml-1">
                                        {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                        (0)
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="gridActivity">
                              <div className="CourseardDesc">
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
                              <div className="Coursevidtitle mt-2">
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
                                    Identify an author's statement of
                                    opinionsVicky
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
                              <div className="">
                                <button className="">
                                  <span></span> Add Course
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Gridcard">
                        <div className="Gridsocialsec">
                          <div className="GridiamgeCard">
                            <div className="Gridimage">
                              <img
                                // src={
                                //   process.env.REACT_APP_AWS_INTEREST_URL + data?.imageUrl
                                // }
                                src={image.mathMatics}
                              />
                            </div>
                          </div>
                          <div className="RatingWrap1   flex m-auto">
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
                        <div className="GridDetails">
                          <div className="GridCardTitle">
                            <h3
                              data-toggle="modal"
                              data-target="#coursedetailpage"
                            >
                              2 Learn LCM, GCF{" "}
                              <span>
                                100
                                <img src={image.money_bag} alt="" />
                              </span>
                            </h3>
                          </div>
                          <div className="GridCardFullDetails">
                            <div className="GridCardTitleDesc">
                              <p className="w-50 flex">
                                <span className="gradeiconimage ml-5 d-flex">
                                  <img src={image.mortarboard} alt="" />
                                  <span className="">
                                    Grade: <strong>6</strong>
                                  </span>
                                </span>
                              </p>

                              <div className="TeacherName w-100 d-flex justify-content-end">
                                <div className="TeacherActivityimg mr-2">
                                  <img src={image.CourseProviderThumb} alt="" />
                                </div>
                                <div className="techrrat ">
                                  <div className="teachername">
                                    Anna Whiteley
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
                                      <span className="ml-1">
                                        {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                        (0)
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="gridActivity">
                              <div className="CourseardDesc">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="SocialCoursecardWrap">
                    <h4
                      data-toggle="collapse"
                      className="flex KATitle"
                      aria-expanded="true"
                      href={"#socialcardAcordian"}
                    >
                      {/* {courseDetail?.skill} */}
                      English
                      <i className="fa-solid fa-angle-down"></i>
                    </h4>
                    <div
                      className="AllsCaedwrap collapse show"
                      id="socialcardAcordian"
                    >
                      <div className="Gridcard">
                        <div className="Gridsocialsec">
                          <div className="GridiamgeCard">
                            <div className="Gridimage">
                              <img
                                // src={
                                //   process.env.REACT_APP_AWS_INTEREST_URL + data?.imageUrl
                                // }
                                src={image.mathMatics}
                              />
                              <p className="mt-3 flex">
                                <span className="gradeiconimage ml-5">
                                  <img src={image.mortarboard} alt="" />
                                  <span className="mt-1 d-inline-block">
                                    Grade: <strong>6</strong>
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="GridDetails">
                          <div className="GridCardTitle">
                            <h3
                              data-toggle="modal"
                              data-target="#coursedetailpage"
                            >
                              English
                              <span>
                                100
                                <img src={image.money_bag} alt="" />
                              </span>
                            </h3>
                          </div>
                          <div className="GridCardFullDetails">
                            <div className="GridCardTitleDesc">
                              <div className="TeacherName w-100 d-flex justify-content-end">
                                <div className="TeacherActivityimg mr-2">
                                  <img src={image.CourseProviderThumb} alt="" />
                                </div>
                                <div className="techrrat ">
                                  <div className="teachername">
                                    Anna Whiteley
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
                                      <span className="ml-1">
                                        {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                        (0)
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="gridActivity">
                              <div className="CourseardDesc">
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
                                <div className="Activity TeachersLive align-items-center">
                                  <div className="TeacherActivityimg">
                                    <img src={image.vikylogoicon} alt="" />
                                  </div>
                                  <div className="ActivitycrdTitle flex">
                                    <h3 className="ActivyTitleName">
                                      <span className="flex pointer">
                                        Learning Center{" "}
                                      </span>
                                    </h3>
                                    <div className="ShareYourActivity flex Addschoolcard">
                                      <div className="dropdownlistmodl">
                                        <span
                                          className="Activitymenubar ml-2 pointer "
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          id="barlistdropdown"
                                          data-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-bars"></i>
                                        </span>
                                        <ul
                                          className="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="barlistdropdown"
                                        >
                                          <li>
                                            <span className="pointer">
                                              {" "}
                                              <i className="fa-regular fa-memo-circle-info"></i>{" "}
                                              Show Details
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="Activity selfmadeActivity">
                                  <div className="ActivitycrdTitle">
                                    <div className="flex">
                                      <h3 className="ActivyTitleName pointer">
                                        Lcm Gcf{" "}
                                      </h3>
                                      <div className="dropdownlistmodl">
                                        <span
                                          className="Activitymenubar ml-2 pointer "
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          id="barlistdropdown"
                                          data-toggle="dropdown"
                                        >
                                          <i className="fa-solid fa-bars"></i>
                                        </span>
                                        <ul
                                          className="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="barlistdropdown"
                                        >
                                          <li>
                                            <span>
                                              <i className="fa-solid fa-circle-plus"></i>
                                            </span>{" "}
                                            <strong> Add Course</strong>
                                          </li>
                                          <li>
                                            <span className="pointer">
                                              {" "}
                                              <i className="fa-regular fa-memo-circle-info"></i>{" "}
                                              Show Details
                                            </span>
                                          </li>
                                          <li className="flex">
                                            {" "}
                                            <span>
                                              <i className="fa-regular fa-file-lines"></i>{" "}
                                              Lesson Name
                                            </span>{" "}
                                            <span>
                                              <i className="fa-solid fa-chevron-right"></i>
                                            </span>
                                            <ul className="LessonNameList">
                                              <li>Lesson Name 1</li>
                                              <li>Lesson Name 1</li>
                                              <li>Lesson Name 1</li>
                                              <li>Lesson Name 1</li>
                                              <li>Lesson Name 1</li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <h3 className="ActivyTitleName pointer">
                                      {" "}
                                      <span className="ThumnailTeacher">
                                        {" "}
                                        AW{" "}
                                      </span>
                                      <p>Anna Whiteley </p>
                                      <div className="flex RatingWrap1 TeacherratingCount ratepopupp mr-auto ml-2">
                                        <div className="d-flex align-items-center">
                                          ({" "}
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
                                          )
                                          <span className="ratingCount">
                                            <i className="fa-solid fa-angle-down ml-1" />{" "}
                                            <span className="ml-1">
                                              {/* ({data?.activityRating ? data?.activityRating : "0"} ) */}
                                              0
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                      <i className="fa-sharp fa-solid fa-lock"></i>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-100 loadmoreAddActivity">
                                <div className="ActivityTitle w-100">
                                  <h4 className="d-flex align-items-center w-100 flex videoDescription">
                                    <div className="allYtypeactivityList">
                                      <span
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        className="flex"
                                      >
                                        {" "}
                                        <i className="fa-solid fa-circle-plus mr-2"></i>{" "}
                                        Add Activity{" "}
                                      </span>
                                    </div>
                                  </h4>
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
                        <ul>
                          <li>
                            <p className=" flex">
                              <span className="gradeiconimage ml-5">
                                <img src={image.schooljericon} alt="" />
                                <span className="mt-1 d-inline-block">
                                  Grade: <strong>6</strong>
                                </span>
                              </span>
                            </p>
                          </li>

                          <li></li>
                        </ul>
                      </div>
                      <div className="priceWrap">
                        <button className="btn-blue btn-login d-block w-100 m-0">
                          <i className="fa-solid fa-paper-plane"></i> Enroll
                        </button>
                      </div>
                      <div className="priceWrap enrolledBtn">
                        <button className="btn-blue btn-login d-block w-100 m-0">
                          Enrolled
                        </button>
                      </div>
                    </div>
                    <div className="GridDetails">
                      <div className="GridCardTitle">
                        <h3 data-toggle="modal" data-target="#coursedetailpage">
                          Diversity
                          <span>
                            100
                            <img src={image.money_bag} alt="" />
                          </span>
                        </h3>
                      </div>
                      <div className="GridCardFullDetails">
                        <div className="GridCardTitleDesc">
                          <div className="gridSchool w-48 p-0 ">
                            <div className="GridTeacher  align-items-center">
                              <span className="">
                                <img src={image.mortarboard} alt="" />
                              </span>
                              <div className="teachername">
                                {" "}
                                <span className="skilledlist">Course:</span>
                                Intersectionality
                              </div>
                            </div>
                          </div>
                          <div className="TeacherName w-48 d-flex ">
                            <div className="TeacherActivityimg mr-2">
                              <img src={image.CourseProviderThumb} alt="" />
                            </div>
                            <div className="techrrat ">
                              <div className="teachername">Britney Watson</div>
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

                          <div className="ListIcon">
                            <span
                              className="threeDots"
                              aria-haspopup="true"
                              aria-expanded="false"
                              id="navbardropdownAct1"
                              data-toggle="dropdown"
                            >
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </span>

                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="navbardropdownAct1"
                            >
                              <li>
                                {" "}
                                <div className="ActivityCategory border-0">
                                  <h4 className="d-flex align-items-center p-0 border-0">
                                    <i className="fa-duotone fa-line-height mr-2"></i>
                                    Activities
                                  </h4>
                                </div>
                              </li>

                              <li>
                                <i className="fa-regular fa-file-import mr-2"></i>
                                Week 1
                              </li>
                              <li>
                                <i className="fa-regular fa-file-import mr-2"></i>
                                Week 2
                              </li>
                              <li>
                                <i className="fa-regular fa-file-import mr-2"></i>
                                Week 3
                              </li>
                              <li>
                                <i className="fa-regular fa-file-import mr-2"></i>
                                Week 4
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="gridActivity">
                          <div className="CourseardDesc">
                            <p className="d-flex">
                              <span>
                                {" "}
                                <img src={image.myhc_92884} alt="" />
                              </span>{" "}
                              An online chat text message service allows you to
                              receive and reply to text messages from customers.
                              All a customer needs is their mobile phone
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
                                  Week 4 <i className="fa-solid fa-bars"></i>
                                </h3>
                                <div>
                                  <p className="flex m-0">
                                    {" "}
                                    7 Days left:
                                    <span className="LeftDate">(21/12/22)</span>
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
                                  Week 4 <i className="fa-solid fa-bars"></i>
                                </h3>
                                <div>
                                  <p className="flex m-0">
                                    {" "}
                                    14 Days left:
                                    <span className="LeftDate">(21/12/22)</span>
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
                                  Week 4 <i className="fa-solid fa-bars"></i>
                                </h3>
                                <div>
                                  <p className="flex m-0">
                                    {" "}
                                    21 Days left:
                                    <span className="LeftDate">(21/12/22)</span>
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

                  {/* Elective Key Area Card */}
                  <div className="Gridcard SocialGridcard">
                    <div className="Gridsocialsec">
                      <div className="GridiamgeCard">
                        <div className="Gridimage">
                          <img
                            // src={
                            //   process.env.REACT_APP_AWS_INTEREST_URL + data?.imageUrl
                            // }
                            src={image.mathMatics}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="GridDetails">
                      <div className="GridCardTitle">
                        <h3 data-toggle="modal" data-target="#coursedetailpage">
                          Technology <span>Ages: 5-10</span>
                        </h3>
                      </div>
                      <div className="GridCardFullDetails">
                        <div className="GridCardTitleDesc">
                          <div className="gridSchool p-0 ">
                            <div className="GridTeacher  align-items-center">
                              <span className="ProfileChild">
                                <i className="fa-light fa-bullseye-arrow"></i>{" "}
                              </span>
                              <div className="teachername">
                                {" "}
                                <span className="skilledlist">Area:</span>
                                Technology
                              </div>
                            </div>
                          </div>
                          <div className="GridTeacher d-block align-items-center">
                            <div className="teachername ">
                              <i className="fa-light fa-school mr-2"></i>School
                              Name
                            </div>
                            <div className="teachername ">
                              <i className="fa-solid fa-user mr-2"></i> Britney
                              Watson
                            </div>
                          </div>

                          <div className="InSchoolCheckbox">
                            <div className="signupType m-0">
                              <label className="Selcheckbox p-0">
                                <p>In School</p>
                                <input
                                  type="Checkbox"
                                  id="Public"
                                  checked
                                  name="Question"
                                  value="PUBLIC"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>

                          <div className="ListIcon">
                            <span
                              className="threeDots"
                              aria-haspopup="true"
                              aria-expanded="false"
                              id="navbardropdownAct1"
                              data-toggle="dropdown"
                            >
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                            </span>

                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="navbardropdownAct1"
                            >
                              <li>
                                {" "}
                                <div className="ActivityCategory border-0">
                                  <h4 className="d-flex align-items-center p-0 border-0">
                                    <i className="fa-regular fa-comments mr-2"></i>{" "}
                                    Activity
                                  </h4>
                                </div>
                              </li>

                              <li>Week 1</li>
                              <li>Week 1</li>
                              <li>Week 1</li>
                              <li>Week 1</li>
                            </ul>
                          </div>
                        </div>

                        <div className="gridActivity">
                          <div className="CourseardDesc">
                            <p className="d-flex">
                              <span>
                                {" "}
                                <i className="fa-regular fa-notebook mr-2 mt-1"></i>
                              </span>{" "}
                              An online chat text message service allows you to
                              receive and reply to text messages from customers.
                              All a customer needs is their mobile phone
                            </p>
                          </div>

                          <div className="activityListitems mt-3">
                            <div className="Activity TeachersLive align-items-center">
                              <div className="TeacherActivityimg">
                                <img src={image.vikylogoicon} alt="" />
                              </div>
                              <div className="ActivitycrdTitle flex">
                                <h3 className="ActivyTitleName">
                                  <span className="flex pointer">
                                    Learning Center{" "}
                                  </span>
                                </h3>
                                <div className="ShareYourActivity flex Addschoolcard">
                                  <div className="dropdownlistmodl">
                                    <span
                                      className="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa-solid fa-bars"></i>
                                    </span>
                                    <ul
                                      className="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li>
                                        <span className="pointer">
                                          {" "}
                                          <i className="fa-regular fa-memo-circle-info"></i>{" "}
                                          Show Details
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex w-100 loadmoreAddActivity">
                            <div className="ActivityTitle w-100">
                              <h4 className="d-flex align-items-center w-100 flex videoDescription">
                                <div className="allYtypeactivityList">
                                  <span
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="flex"
                                  >
                                    {" "}
                                    <i className="fa-solid fa-circle-plus mr-2"></i>{" "}
                                    Add Activity{" "}
                                  </span>
                                </div>
                              </h4>
                            </div>
                            <div className="loadmoreActivity">
                              Load More{" "}
                              <i className="fa-solid fa-circle-plus"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Social Science ,Science Key Area Card */}
                  {/* <div className="Gridcard">
                    <div className="MultipleBranchSub flex w-100">
                      <div className="flex">
                        <div className="Gridsocialsec justify-content-center">
                          <h4 className="mr-3 ">Science</h4>
                        </div>
                        <p className="ml-3">
                          Please Select Science course that you are studying in
                          school.
                        </p>
                      </div>
                      <span className="mr-3">
                        {" "}
                        <i className="fa-thin fa-pencil ml-2"></i>
                      </span>
                    </div>
                  </div> */}
                  {/* <div className="Gridcard SpecialCatCard">
                <div className="spacelistDesc Topicspeclistitem">
                  <div className="speclistimage">
                    <img src={image.musicinstrumnt} />
                  </div>
                  <div className="specialistTitle">
                    <h3 className="mb-2 flex w-100">
                      Music
                      <span className="">
                        <i className="fa-solid fa-pen-to-square fontawsomeicon"></i>
                      </span>{" "}
                    </h3>
                    <p className="speclistdesctext">
                      A musical instrument is a device created or adapted to
                      make musical sounds. In principle, any object that
                      produces sound can be considered a musical instrument—it
                      is through purpose that the object becomes a musical
                      instrument. A person who plays a musical instrument is
                      known as an instrumentalist.
                    </p>
                  </div>
                  <ul className="spaclistcontactlist flex">
                    <li>Singing</li>
                    <li>Dance</li>
                    <li>Music Instrument</li>
                  </ul>
                </div>
              </div> */}
                  {/* <div className="addfncCard text-center flex  justify-content-center">
                  <div>
                    <img src={image.AddnewCourse} />

                    <h3 className="mb-2 mt-2">Please Add Your First Course</h3>
                    <p>
                      Add Your First Course in any dimensions which is listing
                      below:
                    </p>
                    <button className="btn btn-primary mt-4 mr-2">
                      <i className="fa-solid fa-circle-plus mr-2"></i>Add Course
                    </button>
                    <button className="btn btn-primary mt-4">
                      <span className="RounAnimation"></span>{" "}
                      <i className="fa-solid fa-circle-plus mr-2"></i>Add Course
                    </button>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Home>

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
              <div className="modal-body p-0 pb-0">
                <div className="flex p-3 flex-wrap">
                  <div className="Pathwayslist" id="multiCollapseExample2">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <div className="pathwaysListitem flex flex-wrap">
                      <h3 className="mb-3 w-100">
                        Please Select Your Pathway:
                      </h3>
                      <label className="Selcheckbox">
                        Health Science
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        Humanities
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        STEM
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        Agriculture
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        Career and Technical
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        Performing & Visual Arts
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="Selcheckbox">
                        College Prep
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>

                      <label className="Selcheckbox">
                        Business & Management
                        <input
                          type="radio"
                          id=""
                          name="Subject"
                          checked
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="Submitpathways text-right">
                      <button type="button" className="btn-blue btn-login">
                        <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="halfPagePOpup HolisticProgress EnrollcConfimation">
        <div
          className="modal fade"
          id="schoolactivity15"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body p-0 pb-0">
                <SelectPicker
                  data={datax}
                  groupBy="role"
                  style={{ width: 224 }}
                />
                <hr />
                <p>Sort:</p>
                <SelectPicker
                  data={datax}
                  groupBy="role"
                  sort={(isGroup) => {
                    if (isGroup) {
                      return (a, b) => {
                        return compare(a.groupTitle, b.groupTitle);
                      };
                    }

                    return (a, b) => {
                      return compare(a.value, b.value);
                    };
                  }}
                  style={{ width: 224 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Success;

import React, { useState } from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import { SelectPicker, Rating } from "../../utils/Packages";
import RoundProgress from "../controls/RoundProgress";
import Link from "antd/es/typography/Link";
import VickyComingSoon from "../widget/VickyComingSoon";
const CourseStaticPage = () => {
  return (
    <div>
      <Home>
        <div className="d-flex flex-wrap SpecialLeftpanel w-100">
          <div className="d-flex w-100 align-items-start overflow-visible">
           {/* tabbing */}
               {/* <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100'>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Let's create a learning plan for Adam</span>
                          </h2>
                  </div>
                 <div className="learner_plan setup_one p-4">
                
                  <div className="paceSteps">
                    <div className="">
                      <h3 className="d-flex align-items-start paceseltitle">
                        <span>Select a pace that you think will allow Adam to comfortably complete courses on Bloomster.
                          <img src={image.chat_icon} className="ml-2 ichat_icon pointer " />
                        </span>
                      </h3>
                      <p className=" pt-3">You know your child the best. Select a pace that would allow Adam to
                        learn new skills in a fun and engaging way without feeling like it is a chore or homework.
                      </p>
                    </div>
                    <div className="ScenecerelateddQuiz p-0 d-flex align-items-baseline justify-content-between">
                      <div class="signupType m-0 pt-3 mt-3">
                        <div class="PaceModeSel mb-3">
                          <h3 className=""> How many times Adam would sit for coursework per week? <span className="mandatoryField">*</span>
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
                      <div class="signupType m-0 pt-3 mt-3 seltimedaysit">
                        <div class="PaceModeSel mb-3">
                          <h3 className=""> How many minutes would Adam spend in a sitting? <span className="mandatoryField">*</span>
                            <div className="selectecPaceWeek">
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
                    <div className="next_button p-10">
                      <div className="buttonDistribotion mt-4 pt-4">
                        <button
                          type="submit"
                          data-toggle="modal"
                          data-target="#schoolactivity75"
                          className="btn-blue btn-login d-block mb-5 w-auto"
                        >
                          Next
                          <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                    
                  
              
                 
             
                </div>  
              
                </div>
                </div>
                <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Adam's learning plan</span>
                          </h2>
                  </div>
                  </div>
                  <div className="learning_plan_summry p-3 ScenecerelateddQuiz allcourselj">
                    <h4 className="mb-3">Skill(s) and Course(s) will be added per your selections on the left panel. </h4>
                    <p>Selected Pace: <strong>One course every two (2) week(s).</strong></p>
                    <div className="lerner_jounry_plan ">
                      <div className="flexone mb-4 p-10 pb-2 ml-1">
                        <div className="User_inisal mr-2">
                        
                          <i class="fa-light fa-circle"></i>
                        </div>
                        <div className="userPLan_start">
                          <h4>Start of Adam's Learning Journey </h4>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>31</strong>, 2024</p>
                        </div>
                     
                      </div>
                      <div className="userplan_democrd">
                      <div className="flexone mb-5 plan_course_name m-0">
                        <div className="User_inisal mr-2">
                    
                       
                           <i class="fa-solid fa-graduation-cap"></i>
                        
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Course Name</strong></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                    
                          <i class="fa-sharp fa-solid fa-location-dot"></i>

                        </div>
                        <div className="userPLan_start">
                          <p>Adam learned a nre [skill] in just a week.</p>
                        </div>
                     
                      </div>
                      
                        </div>
                        <div className="mt-3 pt-2 Contionur_Arrow">
                      <h4>
                        Adam contiures to grow into a well-rounded individual.
                      </h4>
                     </div>
                    </div>
                  </div>
                    
                  
              
                 
             
                </div>  */}
            {/* Learner Plan  Page */}
            {/* Setup 1 */}
                  {/* <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100'>
                    <div class="tabgrid m-0 socialgridtab flex">
                    <ul>
                      <li class="tabs ">
                       <img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt="" /> Series</li>
                       <li class="tabs "><img src="/static/media/wavehand.91fc2cb19269b40e14ba.png" alt="" /> Characters</li>
                       <li class="tabs "><img src="/static/media/peronalitytypeicon.79f37f000c6a6ae2cec7.png" alt="" /> Personality Type</li>
                       <li class="tabs active-tabs"><img src="/static/media/multipleintellQuiz.62730ce0e5081c061ab6.png" alt="" /> Multiple Intelligences</li>
                    </ul>
                    </div>
                 <div className="learner_plan setup_one p-4">
                
                  <div className="paceSteps">
                  <div className="">
                    <h3 className="d-flex align-items-start paceseltitle">
                    <span>Select a pace that you think will allow Adam to comfortably complete courses on Bloomster.
                    <img src={image.chat_icon} className="ml-2 ichat_icon pointer " />
                    </span>
                    </h3>
                  <p className=" pt-3">You know your child the best. Select a pace that would allow Adam to 
                     learn new skills in a fun and engaging way without feeling like it is a chore or homework.
                  </p>
                  </div>
                    <div className="ScenecerelateddQuiz p-0 d-flex align-items-baseline justify-content-between">
                    <div class="signupType m-0 pt-3 mt-3">
                    <div class="PaceModeSel mb-3">
                      <h3 className=""> How many times Adam would sit for coursework per week? <span className="mandatoryField">*</span>
                       <div className="selectecPaceWeek">
                      <label class="Selcheckbox m-0 ActiveQQst">
                      <input type="radio" name="skill" defaultChecked/> 2 <span>Sittings</span>
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
                    <div class="signupType m-0 pt-3 mt-3 seltimedaysit">
                    <div class="PaceModeSel mb-3">
                      <h3 className=""> How many minutes would Adam spend in a sitting? <span className="mandatoryField">*</span>
                       <div className="selectecPaceWeek">
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
                    <div className="next_button p-10">
                  <div className="buttonDistribotion mt-4 pt-4">
                          <button
                            type="submit"
                            data-toggle="modal"
                            data-target="#schoolactivity75"
                            className="btn-blue btn-login d-block mb-5 w-auto"
                          >
                            Next
                            <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                          </button>
                        </div>
                  </div>
                  </div>
                  </div>
                 
                   </div>
                 </div>   
               
              <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Adam's learning plan</span>
                          </h2>
                  </div>
                  </div>
                  <div className="learning_plan_summry p-3 ScenecerelateddQuiz allcourselj">
                    <h4 className="mb-3">Skill(s) and Course(s) will be added per your selections on the left panel. </h4>
                    <p>Selected Pace: <strong>One course every two (2) week(s).</strong></p>
                    <div className="lerner_jounry_plan ">
                      <div className="flexone mb-4 p-10 pb-2 ml-1">
                        <div className="User_inisal mr-2">
                        
                          <i class="fa-light fa-circle"></i>
                        </div>
                        <div className="userPLan_start">
                          <h4>Start of Adam's Learning Journey </h4>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>31</strong>, 2024</p>
                        </div>
                     
                      </div>
                      <div className="userplan_democrd">
                      <div className="flexone mb-5 plan_course_name m-0">
                        <div className="User_inisal mr-2">
                    
                       
                           <i class="fa-solid fa-graduation-cap"></i>
                        
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Course Name</strong></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                    
                          <i class="fa-sharp fa-solid fa-location-dot"></i>

                        </div>
                        <div className="userPLan_start">
                          <p>Adam learned a nre [skill] in just a week.</p>
                        </div>
                     
                      </div>
                      
                        </div>
                        <div className="mt-3 pt-2 Contionur_Arrow">
                      <h4>
                        Adam contiures to grow into a well-rounded individual.
                      </h4>
                     </div>
                    </div>
                  </div>
                    
                  
              
                 
             
                </div>    */}
           {/* setup 2 */}
               {/* <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100 '>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Let's create a learning plan for Adam</span>
                     
                          </h2>
                  </div>
                  <div className="learner_plan p-4 setup_two ljpopups">
                  <div class="backpageStrip flex p-0">
                  <a href="#"><span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
                  <a href="#">Next<span class=""><i class="fa-solid fa-angle-right ml-1"></i></span></a></div>
                    <div class="ScenecerelateddQuiz  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                      <div class="signupType m-0 ">
                        <h4 class="mb-3 pb-3">
                          Great! You've taken the first step of emporing Adam with essential life skills. Let's start Adam's learning journey by selecting from one of the options below.
                        </h4>
                       
                        <div class="flexone mb-3">
                          <label class="Selcheckbox m-0 ActiveQQst">
                            <div className="QQtitle">
                              <p className="palnquestiontitle">I like the reccommended learning plan for Adam.  <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /> </p>
                              <p>Reccommendation based on most popular courses.</p>
                            </div>
                            <input type="radio" name="skill0" checked /><span class="checkmark"></span></label>

                        </div>
                        <div class="flexone mb-3">
                          <label class="Selcheckbox m-0 ActiveQQst">
                            <div className="QQtitle">
                              <p className="palnquestiontitle">I want to select demensions and skills where Adam needs help. <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                              <p>Click on the dimension names to understand what each one covers.</p>
                            </div>

                            <input type="radio" name="skill0" /><span class="checkmark"></span></label>

                        </div>
                        <div class="flexone mb-3">
                          <label class="Selcheckbox m-0 ActiveQQst">
                            <div className="QQtitle">
                              <p className="palnquestiontitle">I want to select a pathway which focuses on an area where Adam needs help. <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                              <p>Pathway is a set of courses curated by experts on a particular subject matter where adolescents generally need help.</p>
                            </div>
                            <input type="radio" name="skill0" /><span class="checkmark"></span></label>

                        </div>

                      </div>
                    </div>

                    <div className="next_button p-10">
                      <div className="buttonDistribotion mt-4 pt-4">
                        <button
                          type="submit"
                          data-toggle="modal"
                          data-target="#schoolactivity75"
                          className="btn-blue btn-login d-block mb-5 w-auto"
                        >
                          <i className="fa-solid fa-paper-plane"></i>Select Plan

                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
                <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel home_page_rgt_pnl setuptwo_rPnl">
                      <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Adam's learning plan</span>
                       
                          </h2>
                  </div>
                  </div>
                  <div className="learning_plan_summry p-3 ScenecerelateddQuiz p-0">
                  <div className="learnerplanOrderone">
                    <p className="Selected_paced">Selected Pace: <strong>One course every two (2) week(s).</strong>   </p>
                 </div>
                 <div className="learner_Planrighpnl">
                    <div className="lerner_jounry_plan">
                      <div className="flexone selStartPlan">
                        <div className="User_inisal mr-2">
                  
                          <i class="fa-light fa-circle"></i>
                        </div>
                        <div className="userPLan_start w-100">
                          <h4 className="mb-0">Start of Adam's Learning Journey </h4>
                          <p className="timint_date">
                         <span>March <strong>1</strong>, 2024 - March <strong>31</strong>, 2024</span> 
                         <a href="#" className="changes_pace ml-2 pl-2">Change Pace</a>
                          </p>
                         
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong>  <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                       
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                      
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong> <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                        
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong> <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                       
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong> <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark ">
                        <div className="User_inisal mr-2 continue_journey">
                       
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                
                    </div>
                    <div className="mt-3 pt-2 Contionur_Arrow">
                      <h4>
                        Adam contiures to grow into a well-rounded individual.
                      </h4>
                   </div>
                   </div>
                   <div className="learner_planordr_three">
					<div className="form-group BDsubmitbutton d-flex m-0">
									<div className="buttonDistribotion">
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
                  
              
                 
             
                    </div>                        */}
              
                 {/* setup 2 2nd condition checked */}
                {/* <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100 '>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Let's create a learning plan for Adam</span>
                      <span><img src={image.chat_icon} className="chat_icon pointer"/></span>
                          </h2>
                    </div>
                    <div class="NhPageWrap p-0">
                   <img src={image.bar} className="w-100" />
                   </div>
                 </div>   
                 </div>
                 <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading summery_plan">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Adam's learning plan</span>
                        <span>
                        <div class="form-check form-switch fixedexpandall flexone p-0 ">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Plan</label><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /></div>
                        </span>
                          </h2>
                   </div>
                   </div>
                  <div className="learning_plan_summry p-3 ScenecerelateddQuiz p-0 allcourselj">
                    <p className="Selected_paced">Selected Pace: <strong>One course every two (2) week(s).</strong>   </p>
                    <p className="flex mt-2">
                      <a href="#" className="d-block">Show snapshot</a>
                     
                      </p>
                 
                    <div className="lerner_jounry_plan">
                      <div className="flexone selStartPlan">
                        <div className="User_inisal mr-2">
                          <img src={image.start_level} />
                        </div>
                        <div className="userPLan_start w-100">
                          <h4 className="mb-0">Start of Adam's Learning Journey </h4>
                          <p className="flex">
                         <span>March <strong>1</strong>, 2024 - March <strong>31</strong>, 2024</span> 
                         <a href="#" className="changes_pace">Change Pace</a>
                          </p>
                         
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                           <img src={image.Holisticchartball} />
                         
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong></p>
                          <p>March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
                          <p><a href="#">Show details</a></p>
                        </div>
                     
                      </div>
                      <div className="flexone">
                        <div className="User_inisal mr-2">
                        <img src={image.PlanNavigation} />
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                           <img src={image.Holisticchartball} />
                         
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong></p>
                          <p>March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
                          <p><a href="#">Show details</a></p>
                        </div>
                     
                      </div>
                      <div className="flexone">
                        <div className="User_inisal mr-2">
                        <img src={image.PlanNavigation} />
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                           <img src={image.Holisticchartball} />
                        
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong></p>
                          <p>March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
                          <p><a href="#">Show details</a></p>
                        </div>
                     
                      </div>
                      <div className="flexone">
                        <div className="User_inisal mr-2">
                        <img src={image.PlanNavigation} />
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                           <img src={image.Holisticchartball} />
                      
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong></p>
                          <p>March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024</p>
                          <p><a href="#">Show details</a></p>
                        </div>
                     
                      </div>
                      <div className="flexone">
                        <div className="User_inisal mr-2">
                        <img src={image.PlanNavigation} />
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                
                    </div>
                    <div className="lernarContinue">
                      <h4>
                        Adam contiures to grow into a well-rounded individual*.
                      </h4>
                      <p>*We will recommend the next plan towards the end of this plan or if Adam completes the above courses sooner.</p>
                    </div>
                  </div>
                    
                   
              
                 
             
                 </div>   
                 <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100 '>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Let's create a learning plan for Adam</span>
                      <span><img src={image.chat_icon} className="chat_icon pointer"/></span>
                          </h2>
                    </div>
                    <div class="NhPageWrap p-0">
                   <img src={image.bar} className="w-100" />
                   </div>
                 </div>   
                 </div>
                 <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading summery_plan">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Adam's learning plan</span>
                        <span>
                        <div class="form-check form-switch fixedexpandall flexone p-0 ">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Expand All</label><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" /></div>
                        </span>
                          </h2>
                   </div>
                   </div>
                  <div className="learning_plan_summry p-3 ScenecerelateddQuiz p-0 allcourselj">
                    <img src={image.nodes} />
                  </div>
                    
                   
              
                 
             
                 </div>   */}
            {/* setup 3 */}
      
                    <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100 '>
                 <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                   <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                     <span> <img src={image.courselevel4} className='mr-2' alt="" />
                       Let's select the areas where you want Adam to focus.</span>
                   </h2>
                 </div>
                 <div className="learner_plan p-4 setup_two ljpopups setup_three">
                 <div class="backpageStrip flex p-0">
                  <a href="#"><span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
                  <a href="#">Next<span class=""><i class="fa-solid fa-angle-right ml-1"></i></span></a>
                 </div>
                  <div className="">
                  <div class="ScenecerelateddQuiz custom_pathways  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                  <div class="signupType m-0 w-100 random_selection">
                  <h4 class="w-100 flex-wrap p-0">
                  <strong class="">Let's select the areas where you want Adam to focus. </strong>
                  <p className="onliner_Sel w-100 p-0">We recommend up to 3 areas at a time. Plans can range from 2 to 6 courses.</p>
                  </h4>
                  <div  className="" id="AreasFocus">
                  <div class="learnerPlan_modelQue" >
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="randomskills" checked />
                  <span class="checkmark"></span>
                  </label>
                  </div>
                 
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="randomskills"  />
                  <span class="checkmark"></span>
                  </label>
                  </div>
                 
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="randomskills"  />
                  <span class="checkmark"></span>
                  </label>
                  </div>
                 
                  </div>
                  </div>
                  </div>
                  <div class="signupType m-0 w-100 pt-4">
                  <h4 class="flex p-0">
                  <strong class="">Here are the courses based on your selections above.</strong>
                  </h4>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>

                  </div>
                  </div>
             
                    <div className="next_button p-10">
                  <div className="buttonDistribotion ">
                          <button
                            type="submit"
                            data-toggle="modal"
                            data-target="#schoolactivity75"
                            className="btn-blue btn-login d-block mb-5 w-auto"
                          >
                           Next<i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                          
                          </button>
                        </div>
                  </div>
                  </div>
                  </div>
                </div>

                   </div>
                   <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel setuptwo_rPnl">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Your Draft Selections</span>
                      </h2>
                  </div>
                  </div>
                  <div className="p-3  p-0 allcourselj">
                     <div className="DraftSelctionList">
                 
                     <div className="DS_List">
                     <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Dimension
                    
                     </h4>
                     <i>Dimension will be added per your selections.</i>
                      <ul className="DSdimensionList">
                        <li>
                    
                        </li>
                      </ul>
                      <div className="DS_List">
                      <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skills
                          </h4>
                          <i>Skills will be added per your selections.</i>
                           <ul className="DSskillsList">
                             <li>
                              
                             </li>
                           </ul>
                           <div className="DS_List">
                           <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Courses
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                                 <li></li>
                               </ul>
                      </div>
                       </div>
                       
                      </div>
        

                    
                     </div>   
                  </div>
                  
              
                 
             
                    </div>    



           
            {/* setup 4 */}
             <div className="LeftbarPannel p-0" id="">
              <div className='CourseCardWrapper fullHeight100 '>
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                  <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                    <span> <img src={image.courselevel4} className='mr-2' alt="" />
                      Let's create a learning plan for Adam</span>
                  </h2>
                </div>
                <div className="learner_plan p-4 setup_two ljpopups setup_three">
                  <div class="backpageStrip flex p-0">
                    <a href="#"><span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
                    <a href="#">Next<span class=""><i class="fa-solid fa-angle-right ml-1"></i></span></a>
                  </div>
                  <div className="">
                    <div class="ScenecerelateddQuiz  custom_pathways flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                    <div class="signupType m-0 random_selection">
                    <h4 class="flex-wrap">
                       <strong class="">I want Adam to focus on the following dimensions.</strong>
                       <p className="onliner_Sel w-100 p-0">We recommend up to 3 dimensions at a time. Plans can range from 2 to 6 courses.</p>
                    </h4>
                <div className="Dimension_skill_tree">
                <div className="DS_tree">
                <h2>
                <i class="fa-regular fa-dash mr-3"></i>Social
                 <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                   <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication
</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Conflicy Resolution</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication</p>
                      </div>
                      <input type="checkbox" name="randomskills" checked />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  </div>
                  <div className="DS_tree">
                <h2><i class="fa-regular fa-dash mr-3"></i>Emotional
                <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                </h2>
                   <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Self-Confidence</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Fear Management</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Conflicy Resolution</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  </div>
                  <div className="DS_tree">
                <h2><i class="fa-regular fa-dash mr-3"></i>Intellectual
                <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                </h2>
                   <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication
</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Conflicy Resolution</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  </div>
                  <div className="DS_tree">
                <h2><i class="fa-regular fa-dash mr-3"></i>Mindfulness
                <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                </h2>
                   <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication
</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Conflicy Resolution</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  </div>
                  <div className="DS_tree">
                <h2><i class="fa-regular fa-dash mr-3"></i>Physical
                <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                </h2>
                   <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication
</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Responsible Decision Making</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Conflicy Resolution</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                    <div>
                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                    <div class="QQtitle">
                       <p class="palnquestiontitle">Effective Communication</p>
                      </div>
                      <input type="checkbox" name="randomskills"  />
                      <span class="checkmark"></span>
                      </label>
                      <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                      </div>
                  </div>
                  </div>
                  </div>
                      </div>
                    </div>

                    <div className="next_button p-10">
                      <div className="buttonDistribotion mt-4 pt-4">
                        <button
                          type="submit"
                          data-toggle="modal"
                          data-target="#schoolactivity75"
                          className="btn-blue btn-login d-block mb-5 w-auto"
                        >
                          Next<i className="fa-solid fa-arrow-right m-0 ml-2"></i>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
             </div>
             <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel setuptwo_rPnl">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Your Draft Selections</span>
                      
                          </h2>
                  </div>
                  </div>
                  <div className="p-3 ScenecerelateddQuiz p-0 allcourselj">
                     <div className="DraftSelctionList">
                   
                      <div className="DS_List">
                     <h4 className="flexone mb-2"><i class="fa-solid fa-play mr-2"></i>Dimension(s)
                     
                    
                     </h4>
                      <ul className="DSdimensionList">
                        <li>
                        <i class="fa-regular fa-hyphen mr-2"></i>Social <i class="fa-regular fa-trash-can"></i>

                          <div className="DS_List">
                           <h4 className="flexone ActivateStateLayer ActivateStateSkills"><i class="fa-solid fa-play mr-2"></i>Skill(s) 
                          </h4>
                         
                           <ul className="DSskillsList">
                           <li>
                           <i class="fa-regular fa-hyphen mr-2"></i> Conflict Resolution <i class="fa-regular fa-trash-can"></i>
                             <div className="DS_List">
                              <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                             
                               </ul>
                            </div>
                             </li>
                             <li>
                             <i class="fa-regular fa-hyphen mr-2"></i> Effective Communication <i class="fa-regular fa-trash-can"></i>
                             <div className="DS_List">
                           <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                                
                               </ul>
                            </div>
                             </li>
                           </ul>
                        
                          </div>
                        </li>
                        <li>
                        <i class="fa-regular fa-hyphen mr-2"></i> Emotional <i class="fa-regular fa-trash-can"></i>

                          <div className="DS_List">
                          <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skill(s) 
                          </h4>
                           <i>Skills will be added per your selections.</i> 
                           <ul className="DSskillsList">
                           <li>
                          
                             <div className="DS_List">
                              <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Courses(s)
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                              
                               </ul>
                            </div>
                             </li>
                             
                           </ul>
                         
                          </div>
                        </li>
                      </ul>
                   
                       
                      </div>

                    
                     </div>   
                  </div>
                  
              
                 
             
             </div>      
            {/* setup 5 */}
                
              <div className="LeftbarPannel p-0" id="">
              <div className='CourseCardWrapper fullHeight100 '>
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                  <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                    <span> <img src={image.courselevel4} className='mr-2' alt="" />
                      Let's create a learning plan for Adam</span>
                  </h2>
                </div>
                <div className="learner_plan p-4 setup_two ljpopups setup_three">
                  <div class="backpageStrip flex p-0">
                    <a href="#"><span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
                    <a href="#">Next<span class=""><i class="fa-solid fa-angle-right ml-1"></i></span></a>
                  </div>
                  <div className="">
                    <div class="ScenecerelateddQuiz  custom_pathways flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                    <div class="signupType m-0 random_selection">
                    <h4 class="flex-wrap">
                       <strong class="">Here are the courses based on skills you selected in the previous step.</strong>
                       <p className="onliner_Sel w-100 p-0">We recommend up to 3 dimensions at a time. Plans can range from 2 to 6 courses.</p>
                    </h4>
                    <div className="Dimension_skill_tree setup_five">
                   <div className="DS_tree">
                   <div className="DimTitleSlect">
                   <h2>
                   <i class="fa-regular fa-dash mr-3"></i>Social
                     <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                   </h2>
                   </div>
                   <div class="learnerPlan_modelQue">
                   <h2>
                    Effective Communication
                    <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                 <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
                 
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                 
                  </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                   <h2>
                    Conflict Resolution
                    <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                 <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
             
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                 
                  </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                   <h2>
                    Effective Communication
                    <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                 <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
               
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
              
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                
                  </div>
                  </div>
                 
                  </div>
                  <div className="DS_tree">
                   <div className="DimTitleSlect mt-5">
                   <h2>
                   <i class="fa-regular fa-dash mr-3"></i>Emotional
                     <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                   </h2>
                   </div>
                   <div class="learnerPlan_modelQue">
                   <h2>
                    Effective Communication
                    <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                 <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
                 
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                 
                  </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                   <h2>
                    Conflict Resolution
                    <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                 <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
             
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                 
                  </div>
                  </div>
                  <div class="learnerPlan_modelQue">
                   <h2>
                    Effective Communication
                    <span><img src={image.chat_icon} className="ml-2 ichat_icon pointer"/></span>
                 </h2>
                 <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Processing Fear & Anxiety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                  </div>
               
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Relationship & Conflict Management</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
              
                  </div>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Sound Decision-Making & Internet Safety</p>
                  </div>
                  <input type="checkbox" name="skill0" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons pointer"><i class="fa-solid fa-up-right-from-square ml-2"></i></span>
                  </div>
                
                  </div>
                  </div>
                 
                  </div>
              
                  </div>
                      </div>
                    </div>

                    <div className="next_button p-10">
                      <div className="buttonDistribotion mt-4 pt-4">
                        <button
                          type="submit"
                          data-toggle="modal"
                          data-target="#schoolactivity75"
                          className="btn-blue btn-login d-block mb-5 w-auto"
                        >
                          Next<i className="fa-solid fa-arrow-right m-0 ml-2"></i>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
             </div>
             <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel setuptwo_rPnl">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Your Draft Selections</span>
                      
                          </h2>
                  </div>
                  </div>
                  <div className="p-3 ScenecerelateddQuiz p-0 allcourselj">
                     <div className="DraftSelctionList">
                   
                      <div className="DS_List">
                     <h4 className="flexone mb-2"><i class="fa-solid fa-play mr-2"></i>Dimension(s)
                     
                    
                     </h4>
                      <ul className="DSdimensionList">
                        <li>
                        <i class="fa-regular fa-hyphen mr-2"></i>Social <i class="fa-regular fa-trash-can"></i>

                          <div className="DS_List">
                           <h4 className="flexone ActivateStateLayer ActivateStateSkills"><i class="fa-solid fa-play mr-2"></i>Skill(s) 
                          </h4>
                         
                           <ul className="DSskillsList">
                           <li>
                           <i class="fa-regular fa-hyphen mr-2"></i> Conflict Resolution <i class="fa-regular fa-trash-can"></i>
                             <div className="DS_List">
                              <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                             
                               </ul>
                            </div>
                             </li>
                             <li>
                             <i class="fa-regular fa-hyphen mr-2"></i> Effective Communication <i class="fa-regular fa-trash-can"></i>
                             <div className="DS_List">
                           <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Course(s)
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                                
                               </ul>
                            </div>
                             </li>
                           </ul>
                        
                          </div>
                        </li>
                        <li>
                        <i class="fa-regular fa-hyphen mr-2"></i> Emotional <i class="fa-regular fa-trash-can"></i>

                          <div className="DS_List">
                          <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Skill(s) 
                          </h4>
                           <i>Skills will be added per your selections.</i> 
                           <ul className="DSskillsList">
                           <li>
                          
                             <div className="DS_List">
                              <h4 className="flexone"><i class="fa-solid fa-play mr-2"></i>Courses(s)
                               </h4>
                              <i>Courses will be added per your selections.</i>
                               <ul className="DSCoursenameList">
                              
                               </ul>
                            </div>
                             </li>
                             
                           </ul>
                         
                          </div>
                        </li>
                      </ul>
                   
                       
                      </div>

                    
                     </div>   
                  </div>
                  
              
                 
             
             </div>  
                  
                   {/* setup 6 */}
                     <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100 '>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Let's create a learning plan for Adam</span>
                      <span><img src={image.chat_icon} className="chat_icon pointer"/></span>
                          </h2>
                  </div>
                 <div className="learner_plan setup_two ljpopups setup_three pathwayslearner">
                 <div class="backpageStrip flex">
                  <a href="#"><span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
                  <a href="#">Next<span class=""><i class="fa-solid fa-angle-right ml-1"></i></span></a>
                 </div>
                  <div className="">
                  <div class="ScenecerelateddQuiz  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                  <div class="signupType m-0 ">
                  <h4 class="mb-3">
                  <strong class="">
                    Where do you think Adam needs support?
                  <img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 pointer jinfoicon" alt=""/>
                  </strong>
                  </h4>
                  <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Pathways one</p>
                  </div>
                  <input type="radio" name="skill0" checked="" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons">
                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                          </span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                   <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Pathways one</p>
                  </div>
                  <input type="radio" name="skill0" checked="" />
                  <span class="checkmark"></span>
                  </label>
                   <span className="coursedtlicons">
                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                          </span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                    <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Pathways one</p>
                  </div>
                  <input type="radio" name="skill0" checked="" />
                  <span class="checkmark"></span>
                  </label>
                    <span className="coursedtlicons">
                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                          </span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                    <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Pathways one</p>
                  </div>
                  <input type="radio" name="skill0" checked="" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons">
                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                          </span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                    <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Pathways one</p>
                  </div>
                  <input type="radio" name="skill0" checked="" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons">
                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                          </span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>
                    <div class="learnerPlan_modelQue">
                  <div>
                  <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                  <div class="QQtitle">
                  <p class="palnquestiontitle">Pathways one</p>
                  </div>
                  <input type="radio" name="skill0" checked="" />
                  <span class="checkmark"></span>
                  </label>
                  <span className="coursedtlicons">
                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                          </span>
                  </div>
                  <p class="onliner_Sel w-100">Recommendation based on most popular courses.</p>
                  </div>

                  </div>
               
                  </div>
                
             
                    <div className="next_button p-10">
                  <div className="buttonDistribotion mt-3">
                          <button
                            type="submit"
                            data-toggle="modal"
                            data-target="#schoolactivity75"
                            className="btn-blue btn-login d-block mb-5 w-auto"
                          >
                           Next<i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                          
                          </button>
                        </div>
                  </div>
                  </div>
                  </div>
                 
                   </div>
                    </div>   
                    <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel setuptwo_rPnl">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                        Adam's learning plan</span>
                        <span><img src={image.chat_icon} className="chat_icon pointer"/></span>
                          </h2>
                  </div>
                  </div>
                  <div className="learning_plan_summry p-3 ScenecerelateddQuiz p-0 allcourselj">
                    <p className="Selected_paced">Selected Pace: <strong>One course every two (2) week(s).</strong>   </p>
                 
                 
                    <div className="lerner_jounry_plan">
                      <div className="flexone selStartPlan">
                        <div className="User_inisal mr-2">
                  
                          <i class="fa-light fa-circle"></i>
                        </div>
                        <div className="userPLan_start w-100">
                          <h4 className="mb-0">Start of Adam's Learning Journey </h4>
                          <p className="timint_date">
                         <span>March <strong>1</strong>, 2024 - March <strong>31</strong>, 2024</span> 
                         <a href="#" className="changes_pace ml-2 pl-2">Change Pace</a>
                          </p>
                         
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong>  <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                       
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                      
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong> <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                        
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong> <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark">
                        <div className="User_inisal mr-2">
                       
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                      <div className="d-flex align-items-start plan_course_name">
                        <div className="User_inisal mr-2">
                          
                           <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="userPLan_start">
                          <p><strong>Comminication Climb</strong> <i class="fa-solid fa-up-right-from-square"></i></p>
                          <p className="timint_date">March <strong>1</strong>, 2024 - March <strong>8</strong>, 2024 
                          <a href="#" className="ml-2 pl-2">Show details</a>
                          </p>
                        </div>
                     
                      </div>
                      <div className="flexone LPdestination_mark ">
                        <div className="User_inisal mr-2 continue_journey">
                       
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <div className="userPLan_start course_destination">
                          <p>Adam is communicating more effectively.</p>
                        </div>
                     
                      </div>
                
                    </div>
                    <div className="mt-3 pt-2 Contionur_Arrow">
                      <h4>
                        Adam contiures to grow into a well-rounded individual.
                      </h4>
                   </div>
                  </div>
                  
              
                 
             
                    </div>    
                   {/* <div className="LeftbarPannel p-0" id="">
                    <div className='CourseCardWrapper fullHeight100 '>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.gameicon} className='mr-2' alt="" />
                        Let's create a learning plan for Adam</span>
                      <span><img src={image.chat_icon} className="chat_icon pointer"/></span>
                          </h2>
                  </div>
                    <img src={image.gamesborder} width="100%" /> 
                 
                   </div>
                    </div>   
                    <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel">
                    <div className="heading p-0 border-0">
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.gameicon} className='mr-2' alt="" />
                        Game Instruction</span>
                        <span><img src={image.chat_icon} className="chat_icon pointer"/></span>
                          </h2>
                     </div>
                    </div>
                    <div className="pagescrollauto">
                     <div className="welcomeGmae p-2">
                     <h4 className="">
                     <img src={image.gamegreed} />
                      Game Story title!</h4>
                     <p className="">
                     Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as 
                     “pain itself.” Lorem ipsum presents the sample font and orientation of writing 
                     on web pages and other software applications where content is not the main concern 
                     of the developer.
                     <br />
                     <br />
                     Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as 
                     “pain itself.” Lorem ipsum presents the sample font and orientation of writing 
                     on web pages and other software applications where content is not the main concern 
                     of the developer.
                     <br />
                     Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as 
                     “pain itself.” Lorem ipsum presents the sample font and orientation of writing 
                     on web pages and other software applications where content is not the main concern 
                     of the developer.
                     </p>
                     </div>
                     <div className="wel_clisting_inst p-3">
                     <div class="welcomscreenContent">
                     <ul className="m-0">
                     <li> <i class="fa-solid fa-caret-right mr-2"></i><h4> We’ve created a tool for you to check out new life skills</h4></li>
                     <li><i class="fa-solid fa-caret-right mr-2"></i><h4>It will be available as soon as Ugyu completes this course.</h4></li>
                     </ul>
                     </div>
                    </div>
                    </div>
                 
             
                    </div>   */}



            {/* Course journey */}
             {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100">
                <div class="p-0 heading">
                  <div class="tabgrid w-100 m-0">
                    <ul>
                      <li class="tabs active-tabs">
                        <img
                          src="/static/media/courselevel4.4b1d2aa2e9975beaed79.png"
                          alt=""
                        />
                        Social
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/CollegeJourneyicon.d572ab784968643d58af.png"
                          alt=""
                        />
                        Emotional
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/courselevel5.36cfa68b04b35b08960d.png"
                          alt=""
                        />
                        Spiritual
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/courselevel2.9e9d0c0df6b5d524c2e3.png"
                          alt=""
                        />
                        Physical
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/courselevel3.8d05ee34d850fd1b9359.png"
                          alt=""
                        />
                        Intellectual
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gridSection mx-2">
                  <div className="skillSeltaglist coursepagelist">
                    <h4 className="flex mt-3 mb-2">
                      Skills:

                    </h4>
                    <div class="intrestlisting dimpagetags">
                      <div class="Course_filter mr-3">
                        <span>
                          <img src={image.CourseTitleIcon} alt="" />
                        </span>
                      </div>
                      <div class="instlistitem">
                        <div class="carditem ">

                          <label class="Selcheckbox ActiveQQst m-0">
                            <span class="QQtitle flexone pointer"> <h4 class="flex w-100">Conflict Resolution </h4></span>
                            <input type="checkbox" id="Public" name="skill0" value="PUBLIC" />
                            <span class="checkmark"></span></label>


                        </div>
                      </div>
                      <div class="instlistitem">
                        <div class="carditem ">

                          <label class="Selcheckbox ActiveQQst m-0">
                            <span class="QQtitle flexone pointer"> <h4 class="flex w-100">Relationship Management</h4></span>
                            <input type="checkbox" id="Public" name="skill0" value="PUBLIC" />
                            <span class="checkmark"></span></label>


                        </div>
                      </div>
                      <div class="instlistitem">
                        <div class="carditem ">

                          <label class="Selcheckbox ActiveQQst m-0">
                            <span class="QQtitle flexone pointer"> <h4 class="flex w-100">Effective Communication </h4></span>
                            <input type="checkbox" id="Public" name="skill0" value="PUBLIC" />
                            <span class="checkmark"></span></label>


                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-2 mb-2 pl-2 ml-1">
                    Courses:
                  </h4>
                  <div className="JourneyCoursecard newCourseCard">
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

                        <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div>
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
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
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className=""
                          >
                            <div className="">
                              <p className="p-0">

                                <a href=""> <span class="SCourseLevel"><img src={image.sCourseleve3lcon} className="mr-2" alt="" />Level 1 of 5</span><span className="cardSubtitles"><i class="fa-solid fa-up-right-from-square"></i></span></a>
                              </p>
                            </div>

                            <div>
                              <p className="p-0">
                                <span class="SCourseLevel">
                                  <img src={image.CourseTitleIcon} className="mr-2" alt="" />Social & Cultural Awareness</span>
                              </p>
                            </div>

                            <div class="priceWrap w-auto p-0">
                              <button class="btn-blue btn-login d-block w-100 m-0 w-auto">
                                <i class="fa-solid fa-paper-plane mr-2"></i>
                                Enroll
                              </button>
                            </div>
                          </h3>
                        </div>

                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
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
                                    <span className="ThumnailTeacher">S2</span>
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
                                    <span className="ThumnailTeacher">S3</span>
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
                                    <span className="ThumnailTeacher">S4</span>
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
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notenrolledskill">
                    <h4 className="mb-3">We offer more courses in the following skills you have not explored yet:</h4>
                    <ul className="flexone">
                      <li><img src={image.CourseTitleIcon} />Conflict Resolution</li>
                      <li><img src={image.CourseTitleIcon} />Effective Communication</li>
                      <li><img src={image.CourseTitleIcon} />Responsible Decision Making</li>
                    </ul>
                    <h5>
                      <a href=""> Click here </a> to view available courses in the above skills and enroll.
                    </h5>
                  </div>



                </div>
              </div>
            </div>  */}
            {/* Course pathway */}
            {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100">
                <div class="p-0 heading border-0">
              
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span>
                        <img src={image.pathwaysicon} className='mr-2' alt="" />Selected Pathway</span>
                      </h2>
                  </div>
                </div>
               
                <div className="gridSection mx-2 px-1 mb-2 pb-1">
                <div className="skillSeltaglist coursepagelist pl-0">
                  
                
                  <div className="coveredDimensionpathway">
                  <h4 className=" mt-3 mb-3">
                   <img src={image.CourseTitleIcon} className="mr-2" />
                    Skills covered in this learner pathway
                  </h4>
                  <div className="skillSeltaglist coursepagelist pl-0">
                 
                    <div class="intrestlisting dimpagetags">
                      <div class="instlistitem">
                        <div class="carditem ">
                         
                          <label class="Selcheckbox ActiveQQst m-0 p-0">
                          <span class="QQtitle flexone pointer"> <h4 class="flex w-100">Conflict Resolution </h4></span>

                       
                          </label>
                         
                         
                        </div>
                      </div>
                      <div class="instlistitem">
                        <div class="carditem ">
                         
                          <label class="Selcheckbox ActiveQQst m-0 p-0">
                          <span class="QQtitle flexone pointer"> <h4 class="flex w-100">Relationship Management</h4></span>
                     
                          </label>
                          
                         
                        </div>
                      </div>
                      <div class="instlistitem">
                        <div class="carditem ">
                         
                          <label class="Selcheckbox ActiveQQst m-0 p-0">
                          <span class="QQtitle flexone pointer"> <h4 class="flex w-100">Effective Communication </h4></span>
                       
                          </label>
                           
                         
                        </div>
                      </div>
                    </div>
                  </div>
                   
                
                  </div>
                  <div class="CourseardDesc mt-3 px-0">
                       <div class="d-flex">
                       <span><img src={image.pathwaydesc} alt=""/></span>
                       <p id="textheight" class="pathwatdestxt">
                       <span class="">
                           This pathway combines four courses to create a comprehensive set to teach nutrition, fosters self-confidence, cultivates compassion, and understanding on the importance of diversity. By the end of this pathway students will be able to understand and demonstrate complex concepts such as:
                        </span>
                    
                       </p>
                       </div>
                   </div>
                 <div className="welcomscreenContent patwaysbulleys p-0 w-100 ">
                    <ul className="p-0 w-100">
                      <li>
                        {" "}
                        <i class="fa-solid fa-play mr-2 mt-1"></i>
                        <h4>Using self-awareness</h4>
                      </li>
                      <li>
                        <i class="fa-solid fa-play mr-2 mt-1"></i>
                        <h4>
                           Communicating with compassion
                        </h4>
                      </li>
                      <li>
                        <i class="fa-solid fa-play mr-2 mt-1"></i>
                        <h4>
                           Analyzing conflict
                        </h4>
                      </li>
                     
                    </ul> 
             
                  </div>
                  <div className="coveredDimensionpathway">
                  <h4 className=" mt-3">
                   <img src={image.mortarboard} className="mr-2" />
                   Courses included in this learner pathway
                   </h4>
                  </div>
                </div>
             
                <div className="JourneyCoursecard newCourseCard">
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

                        <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div>
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
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
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className="justify-content-start"
                          >
                      <div className="w-40">
                          <p className="p-0">
                            
                           <a href=""> <span class="SCourseLevel"><img src={image.sCourseleve3lcon} className="mr-2" alt=""/>Level 1 of 5</span><span className="cardSubtitles"><i class="fa-solid fa-up-right-from-square"></i></span></a>
                          </p>
                        </div>
                      
                        <div className="w-40">
                          <p className="p-0">
                             <span class="">
                          <img src={image.CourseTitleIcon} className="mr-2" alt=""/>Social & Cultural Awareness</span>
                          </p>
                        </div>
                       
                       
                       
                          </h3>
                        </div>

                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
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
                                    <span className="ThumnailTeacher">S2</span>
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
                                    <span className="ThumnailTeacher">S3</span>
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
                                    <span className="ThumnailTeacher">S4</span>
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
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="JourneyCoursecard newCourseCard">
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

                        <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div>
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
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
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className="justify-content-start"
                          >
                      <div className="w-40">
                          <p className="p-0">
                            
                           <a href=""> <span class="SCourseLevel"><img src={image.sCourseleve3lcon} className="mr-2" alt=""/>Level 1 of 5</span><span className="cardSubtitles"><i class="fa-solid fa-up-right-from-square"></i></span></a>
                          </p>
                        </div>
                      
                        <div className="w-40">
                          <p className="p-0">
                             <span class="">
                          <img src={image.CourseTitleIcon} className="mr-2" alt=""/>Social & Cultural Awareness</span>
                          </p>
                        </div>
                       
                           
                          </h3>
                        </div>

                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
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
                                    <span className="ThumnailTeacher">S2</span>
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
                                    <span className="ThumnailTeacher">S3</span>
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
                                    <span className="ThumnailTeacher">S4</span>
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
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="JourneyCoursecard newCourseCard">
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

                        <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div>
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
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
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className="justify-content-start"
                          >
                      <div className="w-40">
                          <p className="p-0">
                            
                           <a href=""> <span class="SCourseLevel"><img src={image.sCourseleve3lcon} className="mr-2" alt=""/>Level 1 of 5</span><span className="cardSubtitles"><i class="fa-solid fa-up-right-from-square"></i></span></a>
                          </p>
                        </div>
                      
                        <div className="w-40">
                          <p className="p-0">
                             <span class="">
                          <img src={image.CourseTitleIcon} className="mr-2" alt=""/>Social & Cultural Awareness</span>
                          </p>
                        </div>
                       
                     
                          </h3>
                        </div>

                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
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
                                    <span className="ThumnailTeacher">S2</span>
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
                                    <span className="ThumnailTeacher">S3</span>
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
                                    <span className="ThumnailTeacher">S4</span>
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
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>                 
                  
                   <div className="JourneyCoursecard">
                    <div class="GridCardTitle">
                      <h3 data-toggle="modal" data-target="#datapage">
                        <div class="pointer">
                          <img
                            src={image.coursecardJourney}
                            alt=""
                            className="mr-2"
                          />
                          Close Reading (Grade:6)
                        </div>
                        <span className="Score_points">
                          <span className="score_bedge">
                            <span class="earnnoCoin">0</span>
                            <img src={image.score_badge} alt="" />
                          </span>
                          <span class="earnnoCoin">0</span>
                          <img src={image.money_bag} alt="" />
                        </span>
                      </h3>
                    </div>
                    <div className="JCcourselevel flex">
                      <p className="flexone">
                        <img
                          src={image.CourseTitleIcon}
                          alt=""
                          className="mr-2"
                        />
                        <strong>Skill Name</strong>
                      </p>
                      <ul>
                        <li className="ActiveLevel">Course 1</li>
                        <li>Course 2</li>
                        <li>Course 3</li>
                        <li>Course 4</li>
                        <li>Course 5</li>
                      </ul>
                    </div>
                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
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
                                <span className="ml-1">(0)</span>
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
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className=""
                          >
                            <div class="pointer flexone">
                              <span class="gradeiconimage ml-5 d-flex">
                                <img src={image.mortarboard} />
                              </span>
                              Close Reading I (Grade:6)
                            </div>
                           
                            <div className="flex w-40">
                              <div className="position-relative Coursecompprcent">
                                <p className="p-0">
                                  <span>
                                    <RoundProgress data={10} className="m-1" />
                                  </span>

                                  <span className="courserelatedCertificate"></span>
                                </p>
                              </div>
                              <div className="GridTeacher align-items-center justify-content-end">
                                <span class="TeacherActivityimg pointer">
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
                                      <span className="ml-1">(0)</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </h3>
                        </div>
                        <div className="GridCardFullDetails pt-0">
                          <div class="CourseardDesc pt-0">
                            <div class="d-flex">
                              <span>
                                <img src={image.myhc_92884} alt="" />
                              </span>
                              <p
                                id="textheight"
                                class="text textdescription coursetextheght"
                              >
                                <span class="textdesc">
                                  As individuals, our goals are personal to
                                  either the sport we play or how fast we can
                                  run and how high we can jump. For each age
                                  group you reach, there are benchmarks or
                                  standards we need to achieve to determine your
                                  health and growth{" "}
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
                                    <span className="ThumnailTeacher">S1</span>
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
                                    <span className="ThumnailTeacher">S2</span>
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
                                    <span className="ThumnailTeacher">S3</span>
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
                                    <span className="ThumnailTeacher">S4</span>
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
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.reviewicon} alt="" />
                              Review
                            </li>
                            <li>
                              <img src={image.challenge} alt="" />
                              Challenge
                            </li>
                            <li>
                              <img src={image.evaluateicon} alt="" />
                              Evaluate
                            </li>
                            <li>
                              <img src={image.coursegameicon} alt="" />
                              Game
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="JourneyCoursecard">
                
                   
                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
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
                                <span className="ml-1">(0)</span>
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
                        <div class="pointer">
                       
                          Close Reading (Grade:6)
                        </div>
                      </h3>
                    </div>
                        <div class="GridCardTitle border-0">
                          <div
                            data-toggle="modal"
                            data-target="#datapage"
                            className=""
                          >
                            <div class="pointer flexone">
                            <p className="flexone">
                           <img
                             src={image.CourseTitleIcon}
                             alt=""
                             className="mr-2"
                             />
                             <strong>Skill Name</strong>
                            </p>
                           </div>
                           
                            <div className="flex">
                              <div className="position-relative Coursecompprcent">
                                <p className="p-0">
                                  <span>
                                    <RoundProgress data={10} className="m-1" />
                                  </span>

                                  <span className="courserelatedCertificate"></span>
                                </p>
                              </div>
                           
                            </div>
                            <div class="pointer flexone">
                            <p className="flexone">
                           <img
                             src={image.compassicon}
                             alt=""
                             className="mr-2"
                             />
                             <strong>Journey</strong>
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
                                    <span className="ThumnailTeacher">S1</span>
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
                                    <span className="ThumnailTeacher">S2</span>
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
                                    <span className="ThumnailTeacher">S3</span>
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
                                    <span className="ThumnailTeacher">S4</span>
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
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.reviewicon} alt="" />
                              Review
                            </li>
                            <li>
                              <img src={image.challenge} alt="" />
                              Challenge
                            </li>
                            <li>
                              <img src={image.evaluateicon} alt="" />
                              Evaluate
                            </li>
                            <li>
                              <img src={image.coursegameicon} alt="" />
                              Game
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
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
                
                      </h3>
                      </div> 
                      <div className="GridCardFullDetails">
                        <div className="GridCardTitleDesc">
                          
                        <div class="flex">
                        <span class="gradeiconimage ml-5 d-flex">
                        <img src={image.CourseTitleIcon} />
                        <span class="flex">Skills</span></span>
                        </div>
                       
                      
                        <div className="position-relative Coursecompprcent">
                        <p className="">
                        <span>
                          <RoundProgress
                            data={10}
                            className="m-1"
                          />
                        </span>
                      </p>

                       </div>
                     <div>
                          <p>
                          <span class="SCourseLevel">
                          <img src={image.coursecardJourney} className="mr-2" alt=""/>journey</span>
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
                                <span className="ThumnailTeacher">S1</span>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
                              </div>
                              
                            </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                            <h3 className="ActivyTitleName">
                              <div className="pointer">
                                <span className="ThumnailTeacher">S2</span>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
                              </div>
                              
                            </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                            <h3 className="ActivyTitleName">
                              <div className="pointer">
                                <span className="ThumnailTeacher">S3</span>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
                              </div>
                              
                            </h3>
                            </div>
                          </div>
                          <div className="Activity selfmadeActivity weeklyActivity cardLock">
                            <div className="ActivitycrdTitle activityCap">
                            <h3 className="ActivyTitleName">
                              <div className="pointer">
                                <span className="ThumnailTeacher">S4</span>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
                              </div>
                              
                            </h3>
                            </div>
                          </div>
                        </div>
                       </div>
                       <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img src={image.Powericon} className="electriIcon" alt="" />
                              Learner Center
                            </li>
                        
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
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
                                
                                  (0)
                                </span>
                              </span>
                            </div>
                          
                        </div>
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
                        <span class="flex">Grade: <strong>6</strong></span></span>
                        </div>
                        <div>
                          <p>
                             <span class="SCourseLevel">
                          <img src={image.sCourseleve3lcon} alt=""/>Level 1</span>
                          </p>
                        </div>
                        <div>
                            <p> 
                              <span class="SCourseLevel pointer">
                            <img src={image.rewardimg}alt=""/>Reward</span>
                            </p>
                        </div>
                        <div className="position-relative Coursecompprcent">
                        <p className="">
                   
                     
                      
                        <span>
                          <RoundProgress
                            data={10}
                            className="m-1"
                          />
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
                            
                                 (0)
                               </span>
                             </span>
                           </div>
                         
                     
                        </div>
                       </div>
                       </div>
                       <div class="CourseardDesc">
                       <div class="d-flex">
                       <span><img src={image.myhc_92884} alt=""/></span>
                       <p id="textheight" class="text textdescription coursetextheght">
                       <span class="textdesc">As individuals, our goals are personal to either the sport we play or how fast we can run and how high we can jump. For each age group you reach, there are benchmarks or standards we need to achieve to determine your health and growth </span>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                                
                                  (0)
                                </span>
                              </span>
                            </div>
                          
                        </div>
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
                        <span class="flex">Grade: <strong>6</strong></span></span>
                        </div>
                        <div>
                          <p>
                             <span class="SCourseLevel">
                          <img src={image.sCourseleve3lcon} alt=""/>Level 1</span>
                          </p>
                        </div>
                        <div>
                            <p> 
                              <span class="SCourseLevel pointer">
                            <img src={image.rewardimg}alt=""/>Reward</span>
                            </p>
                        </div>
                        <div className="position-relative Coursecompprcent">
                        <p className="">
                   
                     
                      
                        <span>
                          <RoundProgress
                            data={10}
                            className="m-1"
                          />
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
                            
                                 (0)
                               </span>
                             </span>
                           </div>
                         
                     
                        </div>
                       </div>
                       </div>
                       <div class="CourseardDesc"><div class="d-flex"><span><img src={image.myhc_92884} alt=""/></span><p id="textheight" class="text textdescription coursetextheght"><span class="textdesc">As individuals, our goals are personal to either the sport we play or how fast we can run and how high we can jump. For each age group you reach, there are benchmarks or standards we need to achieve to determine your health and growth </span><span class="read-or-hide pointer"><span class="readmoretxt">...Read More</span></span></p></div></div>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
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
                              <strong class="Activitymenubar ml-2 pointer " aria-haspopup="true" aria-expanded="false" id="barlistdropdown" data-toggle="dropdown"> <i class="fa-solid fa-bars"></i></strong>
                              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="barlistdropdown"><li class="pointer"><p class="pointer"><img src="/static/media/Seriesicon.a32722861d712e5109ed.png" alt=""/> Series</p></li><li class="pointer"><p><img src="/static/media/SceneRefrence.e51d5930c91333126fdd.png" alt=""/>References</p></li></ul>
                              </div>
                              
                            </h3>
                            </div>
                          </div>
                        </div>
                       </div>
                       </div> 
                      
                  </div>      
                </div>
                <div class="LeftPanelFooter">
                   <button class="btn-blue btn-login d-block  ml-auto w-auto">
                   <i class="fa-solid fa-paper-plane mr-2"></i>Enroll</button>
                   </div>
              </div>
               </div>  */}
            {/* <div className="RightbarPannel p-0 rightpannelSticky">
                    <div className="heading">
                        <h2 className="flex">
                            <span>
                                <img src={image.compassicon} alt="" className="mr-2" />
                                Learner Journey
                            </span>
                             </h2>
                    
                    </div>
                 <div className='alltypeCourseFilter'>
                <div class="alltypeCourseFilter">
                <div class="ScenecerelateddQuiz p-0 allcourselj">
                <div class="dimensionshorting border-0 p-0 lernerjourrecumCourse whereYouleftwtrap">
                <div class="madeYourownJourney mb-3 pt-2  mt-3">
                <h3> 
                <a href="#">
                <i class="fa-solid fa-minus mr-2"></i>
                Create your own pathway</a></h3></div>
                <h2 class="h1 text-center m-minus-15 orbutton">
                <span class="bg-white">or</span></h2>
                <h3 class="mb-3 pb-3">Select from the below curated pathways</h3>
                <div class="signupType m-0 mb-3">
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                  
                      <li className="Intellectualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel3} alt="" />
                      </div>
                      <p className="mb-0">Intellectual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Emotionaldimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.CollegeJourneyicon} alt="" />
                      </div>
                      <p className="mb-0">Emotional</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                </div></div></div></div>

                 </div> 
                </div>   */}



            {/* patwaytabbing */}
            {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100">
                <div class="p-0 heading border-0">
                  <div class="tabgrid w-100 m-0">
                    <ul>
                      <li class="tabs active-tabs">
                        <img
                          src={image.pathwaysicon}
                          alt=""
                        />
                        Pathways
                      </li>
                      <li class="tabs">
                        <img src={image.mypathwaysicon} alt="" /> My Pathway
                       </li>
                  
                    </ul>
                  </div>
                </div>
                <div className="notenrollednanycourses">
                <div className="notenrolldimtxt LessionDtlOverview">
                <h3>
                  Overall Pathway Brochure: What is a Pathway and how it can help your child.
                </h3>
                </div>
               
                </div>
              </div>
               </div> 
             <div className="RightbarPannel p-0 rightpannelSticky">
                    <div className="heading">
                        <h2 className="flex">
                            <span>
                                <img src={image.compassicon} alt="" className="mr-2" />
                                Learner Journey
                            </span>
                             </h2>
                    
                    </div>
                 <div className='alltypeCourseFilter'>
                <div class="alltypeCourseFilter">
                <div class="ScenecerelateddQuiz p-0 allcourselj">
                <div class="dimensionshorting border-0 p-0 lernerjourrecumCourse whereYouleftwtrap">
                <div class="madeYourownJourney mb-3 pt-2  mt-3">
                <h3> 
                <a href="#">
                <i class="fa-solid fa-minus mr-2"></i>
                Create your own pathway</a></h3></div>
                <h2 class="h1 text-center m-minus-15 orbutton">
                <span class="bg-white">or</span></h2>
                <h3 class="mb-3 pb-3">Select from the below curated pathways</h3>
                <div class="signupType m-0 mb-3">
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                  
                      <li className="Intellectualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel3} alt="" />
                      </div>
                      <p className="mb-0">Intellectual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Emotionaldimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.CollegeJourneyicon} alt="" />
                      </div>
                      <p className="mb-0">Emotional</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                </div></div></div></div>

                 </div> 
                </div>   */}


            {/* Learner pathway Brochure */}
            {/* <div className="LeftbarPannel p-0" id="">
                <div className="CourseCardWrapper fullHeight100">
                  <div class="p-0 heading border-0">
                    <div class="tabgrid w-100 m-0">
                      <ul>
                        <li class="tabs active-tabs w-50">
                          <img
                            src={image.pathwaysicon}
                            alt=""
                          />
                          What is a Pathway?
                        </li>
                        <li class="tabs w-50">
                          <img src={image.mypathwaysicon} alt="" /> My Pathway
                        </li>
                    
                      </ul>
                    </div>
                  </div>
                  <div className="learnerpathwaybar mt-3">
                      <div className="pathwaybar1"></div>
                      <div className="pathwaybar2"></div>
                      <div className="pathwaybar3"></div>
                      <div className="pathwaybar4"></div>
                      <div className="pathwaybar5"></div>
                      <div className="pathwaybar6"></div>
                  </div>
                  <div className="learnerpathwaysec">
                      
                      <div className="d-flex align-items-center mb-3 pl-3 pr-3">
                        <div>                          
                      <img src={image.pathway_icon} />

                        </div>
                      <div>
                      <h2>Pathways</h2>
                      <h4> Build skills through curated sets of courses that target current 
                        and complex issues children commonly face.</h4>
                      </div>
                        </div>
                  </div>                
                  <div className="pathwaysarrow">
                    <img src={image.pathway_icon1} className="pl-1" />
                  </div>
                  <div className="learnerpathwaysec">
                      <h4 className="p-0"><strong>Pathways provide a holistic solution to issues such as:</strong></h4>
                  </div>
                  <div className="pathwayslistitm">
                      <span>
                        <ul>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Peer Pressure</li>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Attention Issues</li>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Managing Emotions</li>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Independence and Safety</li>  
                        </ul>
                      </span>
                      <span>
                        <ul>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Fear and Anxiety</li>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Attitude and Mindset</li>
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />Proper Communication</li>                          
                          <li><img src={image.Capturevdfhfveh} className="mr-2" />And Many More...</li>
                        </ul>
                      </span>
                  </div>
                 
                  <div className="learnerpathwaysec">
                     <span className="d-flex align-items-center pathway_root">
                      <span>
                          <img src={image.pathway_img} className="iconstyle" />
                     </span>

                     <h4 className="p-3"> Built by professionals in childhood development to create a program tailored to your 
                      child’s needs.</h4>
                      </span>
                      <span className="d-flex align-items-center pathway_root">
                      <span>
                          <img src={image.pathway_img1} className="iconstyle" />
                     </span>

                     <h4 className="p-3"> Pathways are the easiest and quickest way to get your child onto a 
                      structured learning path.</h4>
                      </span>
                 </div>
                 
                 <div className="learnerpathwaysec">
                     <div className="d-flex align-items-center pb-3 mb-3 pl-3 pr-3">                      
                    <img src={image.pathway_icon} />
                     <h4> Finding the right Pathway for your child is easy. Simply select what you'd like to address 
                      from the right-side menu.<br/>
OR <br/>
<a href="#">Create Your Own Pathway!</a></h4>
                      </div>
                 </div>
                 <div className="learnerpathwaybar">
                    <div className="pathwaybar2"></div>
                    <div className="pathwaybar3"></div>
                    <div className="pathwaybar4"></div>
                    <div className="pathwaybar5"></div>
                    <div className="pathwaybar6"></div>
                    <div className="pathwaybar1"></div>
                 </div>
                </div>
              </div> 
               
               

               <div className="RightbarPannel p-0 rightpannelSticky">
                    <div className="heading">
                        <h2 className="flex">
                            <span>
                                <img src={image.compassicon} alt="" className="mr-2" />
                                Learner Journey
                            </span>
                             </h2>
                    
                    </div>
                 <div className='alltypeCourseFilter'>
                <div class="alltypeCourseFilter">
                <div class="ScenecerelateddQuiz p-0 allcourselj">
                <div class="dimensionshorting border-0 p-0 lernerjourrecumCourse whereYouleftwtrap">
                <div class="madeYourownJourney mb-3 pt-2  mt-3">
                <h3> 
                <a href="#">
                <i class="fa-solid fa-minus mr-2"></i>
                Create your own pathway</a></h3></div>
                <h2 class="h1 text-center m-minus-15 orbutton">
                <span class="bg-white">or</span></h2>
                <h3 class="mb-3 pb-3">Select from the below curated pathways</h3>
                <div class="signupType m-0 mb-3">
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                  
                      <li className="Intellectualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel3} alt="" />
                      </div>
                      <p className="mb-0">Intellectual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Emotionaldimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.CollegeJourneyicon} alt="" />
                      </div>
                      <p className="mb-0">Emotional</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                <label class="Selcheckbox ActiveQQst  EnroledJournyCourse flex-wrap p-0">
                <span class="QQtitle"> 
                <img src={image.pathwaysicon} className="ml-0 mr-2" />
               
                Handling stress and managing emotions</span>
                <ul className="w-100 flexone">
                      <li className="Socialdimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel4} alt="" />
                      </div>
                      <p className="mb-0">Social</p>
                      </li>
                      <li className="Physicaldimpathway">
                      <div className="CDimenCircle">
                        <img src={image.courselevel2} alt="" />
                      </div>
                      <p className="mb-0">Physical</p>
                      </li>
                      <li className="Spriritualdimpathway"> 
                      <div className="CDimenCircle">
                        <img src={image.courselevel5} alt="" />
                      </div>
                      <p className="mb-0">Spriritual</p>
                      </li>
                    </ul> 
                </label>
                </div></div></div></div>

                 </div> 
                </div>   */}


            {/*     <div className="LeftbarPannel p-0" id="">
                <div className="CourseCardWrapper fullHeight100">
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading p-0 border-0">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                      <div class="tabgrid w-100 m-0">
                    <ul>
                      <li class="tabs active-tabs">
                        <img
                          src="/static/media/courselevel4.4b1d2aa2e9975beaed79.png"
                          alt=""
                        />
                        Social
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/CollegeJourneyicon.d572ab784968643d58af.png"
                          alt=""
                        />
                        Emotional
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/courselevel5.36cfa68b04b35b08960d.png"
                          alt=""
                        />
                        Spiritual
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/courselevel2.9e9d0c0df6b5d524c2e3.png"
                          alt=""
                        />
                        Physical
                      </li>
                      <li class="tabs">
                        <img
                          src="/static/media/courselevel3.8d05ee34d850fd1b9359.png"
                          alt=""
                        />
                        Intellectual
                      </li>
                    </ul>
                  </div>
                       </h2>
                </div>
                <div className="notenrollednanycourses flex">
                <div className="notenrolldimtxt  w-40">
                <h3>
                  You have not enrolled in any courses in the Social dimension yet. <a href="">
                  
                   Click here </a> to view available courses and enroll.
                  </h3>
                </div>
               <div className="notenrolldimimg w-60">
                <img src={image.nocourseenrollimage} />
               </div>
                </div>
                </div>
              </div> 
             <div className="RightbarPannel p-0 rightpannelSticky">
                    <div className="heading">
                        <h2 className="flex">
                            <span>
                                <img src={image.compassicon} alt="" className="mr-2" />
                                Learner Journey
                            </span>
                             </h2>
                    
                    </div>
                    <div class="pagescrollauto">
                    <div class="holisticflowr dimension_skilflow rghtpnl_Skill">
                    <div class="skilanddimensioncircle">
                    <div class="dimensionskills Emotional_Skils_center" width="30px" height="30px">
                    <p>0<span class="percentage_sign">%</span></p></div><div class="skillCircleList AllSkillschart">

                    </div></div>
                    </div>
                    <div class=" ScenecerelateddQuiz p-0 allcourselj">
                    <div class=" notenrolledanycrs">
                   <div class="LessionDtlOverview p-3">
                    <p class="">You have not enrolled in any courses yet. 
                    <a href="javascript:void(0)">Click here</a> to view available courses and enroll.</p>
                    </div> 
                    </div></div></div>
                </div> */}
            {/* <div className="RightbarPannel p-0 rightpannelSticky">
              <div className="heading">
                <h2 className="flex">
                  <span>
                    <img
                      src={image.DiemensionProgress}
                      alt=""
                      className="mr-2"
                    />
                    Progress: Social
                  </span>
                </h2>
              </div>
               <div className="alltypeCourseFilter">
                <div class="alltypeCourseFilter">
                  <div class="ScenecerelateddQuiz p-0 allcourselj">
                    <div class="dimensionshorting border-0 p-0 lernerjourrecumCourse whereYouleftwtrap">
                      <div class="madeYourownJourney mb-3 pt-2  mt-3">
                        <h3>
                          <a href="#">
                            <i class="fa-solid fa-minus mr-2"></i>Create Your
                            Own Journey
                          </a>
                        </h3>
                      </div>
                      <h2 class="h1 text-center m-minus-15 orbutton">
                        <span class="bg-white">or</span>
                      </h2>
                      <h3 class="mb-3 pb-3">
                        Select what Ugyu is struggling with to discover tailored
                        learning journeys
                      </h3>
                      <div class="signupType m-0 mb-3">
                        <label class="Selcheckbox ActiveQQst  EnroledJournyCourse">
                          <span class="QQtitle">
                            Handling stress and managing emotions
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                            checked=""
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Eating healthy and fostering a positive self-image
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Communicating effectively, positively, and
                            assertively
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Being more independent while staying safe
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Dealing with peer pressure and conflicts
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Being more positive and being grateful
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Being more self and socially aware
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Being a self-starter and being considerate
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Being more responsible and discerning
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">Focus and follow through</span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Self-confidence issues and dealing with rejection
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Understanding internet safety and making sound
                            decision
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Impulse control and attention disorder
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Making new friends and effective communication
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="Selcheckbox ActiveQQst  ">
                          <span class="QQtitle">
                            Being money smart and thinking critically
                          </span>
                          <input
                            type="radio"
                            id="Public"
                            name="dimensionQuestion"
                            value="PUBLIC"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div> */}
            {/* <div className="LeftbarPannel p-0" id="">   
                    <div className='CourseCardWrapper fullHeight100'>
                    <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                      <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                        <span> <img src={image.mortarboard} className='mr-2' alt="" />Enrolled Courses</span></h2></div>
                    <div className='gridSection coursepagelist pt-0'>
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
                              <span className="ml-1">(0)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="priceWrap enrolledBtn">
                        <img src={image.enrolledicon} alt="" className="mr-2" />
                        Enrolled
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
                                  <span className="ml-1">(0)</span>
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
                              <span className="ml-1">(0)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="priceWrap enrolledBtn">
                        <img src={image.enrolledicon} alt="" className="mr-2" />
                        Enrolled
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
                                  <span className="ml-1">(0)</span>
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
                 <div className="RightbarPannel p-0 rightpannelSticky">
                    <div className="heading">
                        <h2 className="flex">
                            <span>
                                <img src={image.mortarboard} alt="" className="mr-2" />
                                View Courses
                            </span> 
                        </h2>
                    
                    </div>
                    <div className="RPenrolledCourseList notenrolledanycrs">

<div className="LessionDtlOverview p-3">
  <p className="">
    <strong>
    Please click the button below to view other available courses and enroll.
    </strong>
    <button
    type="submit"
    className="btn-blue btn-login d-block  w-auto  mt-3 left_auto m-auto"
  >
  <i className="fa-solid fa-paper-plane mr-2"></i>View Available Courses
  </button>
  </p>
</div>


</div>
                </div>    */}
            {/* Home Page */}
            {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100">
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                  <h2
                    data-toggle="collapse"
                    class="m-0 pt-0 pb-1 w-100 flex justify-content-between "
                  >
                    <span>
                      {" "}
                      <img src={image.Chartimgicon} className="mr-2" alt="" />
                      Holistic View
                    </span>{" "}
                    <span>
                      <img src={image.chat_icon} className="chat_icon" alt="" />
                    </span>
                  </h2>
                </div>
                <div className="NhPageWrap">
                  <h3>A statement about Adam's overall/holistic growth.</h3>
                  <div className="NHProgreschartList flex flex-wrap">
                    <div className="NHProgresslistitem SoicialitemsNH">
                      <h4 className="text-center"> <img src={image.courselevel4} alt="" />
                          Social Dimension
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                          </h4>
                      <div className="NHPreogressouter">
                      <p style={{ bottom: "20%"}}>20%</p>  
                        <div className="NHProgressinner" style={{ width: "20%", height: "20%" }}>
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-3 ">
                        <h4>
                          Progress
                        </h4>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            className="chat_icon"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem NhHolisticProgress allitemsNH">
                      
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "65%"}}>30%</p> 
                         
             
                        <div className="NHProgressinner" style={{ width: "30%", height: "30%" }}>
                         <h3>AS</h3>
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-3">
                        <h4>
                          <img src="" alt="" />
                          Overall Progress
                        </h4>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem EmotionalitemsNH">
                    <h4 className="text-center"> <img src={image.CollegeJourneyicon} alt="" />
                          Emotional Dimension
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                          </h4>
                      <div className="NHPreogressouter">
                      <p style={{ bottom: "40%"}}>40%</p>  
                        <div className="NHProgressinner" style={{ width: "40%", height: "40%" }}>
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-3">
                        <h4>
                           Progress
                        </h4>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem SpritualitemsNH">
                    <h4 className="text-center">  <img src={image.courselevel5} alt="" />
                          Mindfulness Dimension
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                          </h4>
                      <div className="NHPreogressouter">
                      <p style={{ bottom: "60%"}}>60%</p> 
                        <div
                          className="NHProgressinner"
                          style={{ width: "60%", height: "60%" }}
                        >
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-3 ">
                        <h4>
                          Progress
                        </h4>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem PhysicalitemsNH">
                    <h4 className="text-center"> <img src={image.courselevel2} alt="" />
                          Physical Dimension
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                          </h4>
                      <div className="NHPreogressouter">
                      <p style={{ bottom: "20%"}}>20%</p> 
                        <div className="NHProgressinner" style={{ width: "20%", height: "20%" }}>
                        
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-3">
                        <h4>
                          Progress
                        </h4>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem IntellectualitemsNH">
                    <h4 className="text-center"> <img src={image.courselevel3} alt="" />
                          Intellectual Dimension
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                          </h4>
                      <div className="NHPreogressouter">
                      <p style={{ bottom: "80%"}}>80%</p> 
                        <div className="NHProgressinner" style={{ width: "80%", height: "80%" }}>
                          
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-3">
                        <h4>
                           Progress
                        </h4>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
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
                                <img src={image.mortarboard} alt="" className="mr-2" />
                                Our commitment to you
                            </span> 
                           
                        </h2>
                    
                    </div>
                    <div className='popularcourse'>
                      <p>A strong statement/mission-statement demonstrating
                        our commitment to helping patent with their child's holistic development.</p>
                      <h4>Most Popular Courses</h4>
                      <ul>
                        <li>
                          <span>Understanding Conflict</span>
                          <button
                          type="submit"
                          className="btn-blue btn-login d-block pt-1 pb-1 w-auto left_auto"
                          ><i className="fa-solid fa-paper-plane mr-2"></i>Enroll </button>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <button
                          type="submit"
                          className="btn-blue btn-login d-block pt-1 pb-1 w-auto left_auto"
                          ><i className="fa-solid fa-paper-plane mr-2"></i>Enroll </button>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <button
                          type="submit"
                          className="btn-blue btn-login d-block pt-1 pb-1 w-auto left_auto"
                          ><i className="fa-solid fa-paper-plane mr-2"></i>Enroll </button>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <button
                          type="submit"
                          className="btn-blue btn-login d-block pt-1 pb-1 w-auto left_auto"
                          ><i className="fa-solid fa-paper-plane mr-2"></i>Enroll </button>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <button
                          type="submit"
                          className="btn-blue btn-login d-block pt-1 pb-1 w-auto left_auto"
                          ><i className="fa-solid fa-paper-plane mr-2"></i>Enroll </button>
                        </li>
                      </ul>
                      <h4 className='pt-3 flex'>Courses Coming Soon 
                      <span>Release Date: <img src={image.chat_icon} alt="" className="ml-1" /></span></h4>
                      <ul>
                        <li>
                          <span>Understanding Conflict</span>
                          <span className=" pt-1 pb-1 w-auto ml-auto"
                          >August 2023 </span>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <span className=" pt-1 pb-1 w-auto ml-auto"
                          >August 2023 </span>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <span className=" pt-1 pb-1 w-auto ml-auto"
                          >August 2023 </span>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <span className=" pt-1 pb-1 w-auto ml-auto"
                          >August 2023 </span>
                        </li>
                        <li>
                          <span>Understanding Conflict</span>
                          <span className=" pt-1 pb-1 w-auto ml-auto"
                          >August 2023 </span>
                        </li>
                      </ul>
                    </div>
                   
                </div>     */}
            {/* HOme 2 */}
            {/* ]<div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100 Hometwowrap">
                <div class="heading  gridSection d-flex w-100 p-0 Home_two">
                  <div class="tabgrid w-100 m-0 border-0">
                    <ul>
                      <li class="tabs active-tabs">
                        <img src={image.courselevel4} alt="" />
                        Social
                      </li>
                      <li class="tabs">
                        <img src={image.CollegeJourneyicon} alt="" />
                        Emotional
                      </li>
                      <li class="tabs">
                        <img src={image.courselevel5} alt="" />
                        Spiritual
                      </li>
                      <li class="tabs">
                        <img src={image.courselevel2} alt="" />
                        Physical
                      </li>
                      <li class="tabs">
                        <img src={image.courselevel3} alt="" />
                        Intellectual
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img
                      src={image.chat_icon}
                      className="chat_icon mr-2"
                      alt=""
                    />
                  </span>
                </div>
                <div className="backpageStrip flex">
                  <a href="#" className="flexone">
                    <span className="">
                      <i class="fa-solid fa-angle-left mr-1"></i>
                    </span>
                    Back
                  </a>
                </div>
                <div className="NhPageWrap">
                  <h3 className="text-center">Adam is working on five (5) skills in the <span className="">Social </span>dimension.</h3>
                    
                  <div className="NHProgreschartList flex flex-wrap">
                    <div className="NHProgresslistitem skillsliitem">
                      <h4 className="text-center mb-3 pb-2">1. Conflict Resolution  <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          /></h4>
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "20%" }}>20%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "20%", height: "20%" }}
                        ></div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            className="chat_icon"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem soicialitemsNH simneskillcombo">
                      <p className="text-center mt-3 mb-3">
                        {" "}
                        <a href="#" className="text-center  m-auto">
                          {" "}
                          <strong
                            data-toggle="modal"
                            data-target="#schoolactivity50"
                          >
                            What can Adam do next in the Social dimension?
                          </strong>
                        </a>
                      </p>
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "65%" }}>30%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "30%", height: "30%" }}
                        ></div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                          <img src="" alt="" />
                          Social Dimension Progress 
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">2. Effective Communication  <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          /></h4>
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "40%" }}>40%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "40%", height: "40%" }}
                        ></div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">3. Relationship Management  <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          /></h4>
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "60%" }}>60%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "60%", height: "60%" }}
                        ></div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1 ">
                        <h5>
                        Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">4. Responsible Decision Making
                    <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                    </h4>
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "20%" }}>20%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "20%", height: "20%" }}
                        ></div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">5. Social & Cultural Awareness  <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          /></h4>
                      <div className="NHPreogressouter">
                        <p style={{ bottom: "80%" }}>80%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "80%", height: "80%" }}
                        ></div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
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
                                <img src={image.Chartimgicon} alt="" className="mr-2" />
                                Holistic View
                            </span> 
                            <span><img src={image.chat_icon} className="chat_icon" alt="" /></span>
                        </h2>
                    
                    </div>
                  
                       <div className="HolisticgrowthFlwr">
                       <div className="HGmaincircle flextwo">
                        <div className="HGInner_cirlce flextwo flex-wrap">
                          <p className="w-100 text-center">100%</p>
                          <h3  className="w-100 text-center">AS</h3>
                        </div>
                       
                       
                          <div className="HolinnerProgcircle HGSocialcrl flextwo">
                          <div className="Dimen_Circle_inner ">
                              <p>100%</p>
                          </div>
                         
                        </div>
                       
                        <div className="HolinnerProgcircle HGEmotionalcrl flextwo">
                        <div className="Dimen_Circle_inner ">
                              <p>100%</p>
                          </div>
                        </div>
                      
                        <div className="HolinnerProgcircle HGMindfulnesscrl flextwo">
                        <div className="Dimen_Circle_inner ">
                              <p>100%</p>
                          </div>
                        </div>
                      
                        <div className="HolinnerProgcircle HGphysicalcrl flextwo">
                        <div className="Dimen_Circle_inner ">
                              <p>100%</p>
                          </div>
                        </div>
                       
                          
                        <div className="HolinnerProgcircle  HGintellectualcrl flextwo">
                        <div className="Dimen_Circle_inner ">
                              <p>100%</p>
                          </div>
                        </div>
                      </div>
                        <h4 className="text-center mt-5 pt-5">Overall Progress <img src={image.chat_icon} className="chat_icon" alt="" /></h4>
                      </div>
                      <div className="Holisticcharttengent">
                      <ul className="flex flex-wrap">
                       <li><span className="GRtengent OverallTeggent"></span>Overall Progress</li>
                        <li><span className="GRtengent SocialTeggent"></span>Social</li>
                        <li><span className="GRtengent EmotionalTeggent"></span>Emotional</li>
                        <li><span className="GRtengent MindfulnessTeggent"></span>Spiritual</li>
                        <li><span className="GRtengent PhysicalTeggent"></span>Physical</li>
                        <li><span className="GRtengent intelTeggent"></span>Intellectual</li>
                        
                      
                      </ul>
                    </div>
                   
             </div>    */}
            {/* HOme 3 */}
            {/* <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100 Hometwowrap">
              <div class="heading  gridSection d-flex w-100 p-0 Home_two">
                <div class="tabgrid w-100 m-0 border-0">
                  <ul>
                 <li class="tabs active-tabs"><img src={image.courselevel4} alt=""/>Social</li>
                  <li class="tabs"><img src={image.CollegeJourneyicon} alt=""/>Emotional</li>
                  <li class="tabs"><img src={image.courselevel5} alt=""/>Spiritual</li>
                  <li class="tabs"><img src={image.courselevel2} alt=""/>Physical</li>
                  <li class="tabs"><img src={image.courselevel3} alt=""/>Intellectual</li>
                  </ul>

                  </div>
                  <span>
                      <img src={image.chat_icon} className="chat_icon mr-2" alt="" />
                    </span>
                  </div>
             <div className="backpageStrip flex">
              <a href="#" className="flexone"><span className=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
             </div>
                <div className="NhPageWrap">
                  <h3 className="text-center">Adam is working on five (5) skills in the <span className="">Social </span>dimension.</h3>
                    
                  <div className="NHProgreschartList flex flex-wrap">
                    <div className="NHProgresslistitem skillsliitem">
                      <h4 className="text-center mb-3 pb-2">1. Conflict Resolution</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"20%"}}>20%</p>
                        <div className="NHProgressinner" style={{ width: "20%", height: "20%" }}>
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            className="chat_icon"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem soicialitemsNH simneskillcombo">
                    <p className="text-center mt-3 mb-3">   <a href="#" className="text-center  m-auto"> <strong   data-toggle="modal"
                          data-target="#schoolactivity50">What can Adam do next in the Social dimension?</strong></a></p> 
                      <div className="NHPreogressouter">
                      <p style={{bottom:"65%"}}>30%</p>
                        <div className="NHProgressinner" style={{ width: "30%", height: "30%" }}>
                      
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                          <img src="" alt="" />
                          Social dimension Progress 
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">2. Effective Communication</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"40%"}}>40%</p>
                        <div className="NHProgressinner" style={{ width: "40%", height: "40%" }}>
                        
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">3. Relationship Management</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"60%"}}>60%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "60%", height: "60%" }}
                        >
                          
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1 ">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">4. Responsible Decision Making</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"20%"}}>20%</p>
                        <div className="NHProgressinner" style={{ width: "20%", height: "20%" }}>
                      
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">5. Social & Cultural Awareness </h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"80%"}}>80%</p>
                        <div className="NHProgressinner" style={{ width: "80%", height: "80%" }}>
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
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
                                <img src={image.courselevel4} alt="" className="mr-2" />
                                Social Dimension
                            </span> 

                            <div className="form-check form-switch m-0 flex">
                     <label
                      className="form-check-label pointer"
                      for="flexSwitchCheckDefault"
                    >
                      Section
                    </label>
                    <input
                      className="form-check-input avltogglebutton pointer"
                      type="radio"
                      
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                        </h2>
                    
                    </div>

                    <div className="courseskillbox">
                      <h4
                       data-toggle="collapse"
                       href="#Homethree"
                      
                       aria-expanded="false"
                       className="flex HomeProgresstilt"
                      > Conflict Resolution <span> <i className="fa fa-chevron-down icon-show"></i></span></h4>
                      <div   className={`panel-collapse `}
                        id="Homethree">
                      <p className="dmskills"><strong>Skill</strong>: Conflict Resolution</p>
                    
                    <div className="skillprogrs">
                      <span>20%</span>
                      <p><strong>Course Progress </strong> <img src={image.chat_icon}  alt="" className="pl-1 chat_icon" /></p>
                    </div>

                    <div className="progressstyl">
                      <span className="proficencyprog">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Proficiency</p>
                      </span>
                      <span className="CompltProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Completion</p>
                      </span>
                      <span className="TimProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Timing</p>
                      </span>
                    </div>
                    </div>
                    </div>
                    <div className="courseskillbox">
                      <h4
                       data-toggle="collapse"
                       href="#Homethree1"
                      
                       aria-expanded="false"
                       className="flex HomeProgresstilt"
                      >Relationship Management <span> <i className="fa fa-chevron-down icon-show"></i></span></h4>
                      <div   className={`panel-collapse collapse`}
                        id="Homethree1">
                      <p className="dmskills"><strong>Skill</strong>:Relationship Management</p>
                    
                    <div className="skillprogrs">
                      <span>20%</span>
                      <p><strong>Course Progress </strong> <img src={image.chat_icon}  alt="" className="pl-1 chat_icon" /></p>
                    </div>

                    <div className="progressstyl">
                      <span className="proficencyprog">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Proficiency</p>
                      </span>
                      <span className="CompltProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Completion</p>
                      </span>
                      <span className="TimProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Timing</p>
                      </span>
                      
                    </div>
                    </div>
                    </div>
                    
                    
                       
                      
                   
<<<<<<< HEAD
<<<<<<< HEAD
             </div>   
              
              {/* <div className="LeftbarPannel p-0" id="">
=======
             </div>               */}
            {/* HOme 4 */}
            {/* <div className="LeftbarPannel p-0" id="">
>>>>>>> 801adf1800f325b30b754b0bc540e3414eec773d
=======
             </div>               */}
            {/* HOme 4 */}
            {/* <div className="LeftbarPannel p-0" id="">
>>>>>>> 9e9292f3b61bc155e9efb27012176613d28dfe1d
              <div className="CourseCardWrapper fullHeight100 Hometwowrap">
              <div class="heading  gridSection d-flex w-100 p-0 Home_two">
                <div class="tabgrid w-100 m-0 border-0">
                  <ul>
                 <li class="tabs active-tabs"><img src={image.courselevel4} alt=""/>Social</li>
                  <li class="tabs"><img src={image.CollegeJourneyicon} alt=""/>Emotional</li>
                  <li class="tabs"><img src={image.courselevel5} alt=""/>Spiritual</li>
                  <li class="tabs"><img src={image.courselevel2} alt=""/>Physical</li>
                  <li class="tabs"><img src={image.courselevel3} alt=""/>Intellectual</li>
                  </ul>

                  </div>
                  <span>
                      <img src={image.chat_icon} className="chat_icon mr-2" alt="" />
                    </span>
                  </div>
             <div className="backpageStrip flex">
              <a href="#" className="flexone"><span className=""><i class="fa-solid fa-angle-left mr-1"></i></span>Back</a>
             </div>
                <div className="NhPageWrap">
                  <h3 className="text-center">Adam is working on two (5) skills in the <span className="">Social </span>dimension.</h3>
                    
                  <div className="NHProgreschartList flex flex-wrap">
                    <div className="NHProgresslistitem skillsliitem">
                      <h4 className="text-center mb-3 pb-2">1. Conflict Resolution</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"20%"}}>20%</p>
                        <div className="NHProgressinner" style={{ width: "20%", height: "20%" }}>
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            className="chat_icon"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem soicialitemsNH simneskillcombo">
                    <p className="text-center mt-3 mb-3">   <a href="#" className="text-center  m-auto"> <strong   data-toggle="modal"
                          data-target="#schoolactivity50">What can Adam do next in the Social dimension?</strong></a></p> 
                      <div className="NHPreogressouter">
                      <p style={{bottom:"65%"}}>30%</p>
                        <div className="NHProgressinner" style={{ width: "30%", height: "30%" }}>
                      
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                          <img src="" alt="" />
                          Social dimension Progress 
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">2. Effective Communication</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"40%"}}>40%</p>
                        <div className="NHProgressinner" style={{ width: "40%", height: "40%" }}>
                        
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">3. Relationship Management</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"60%"}}>60%</p>
                        <div
                          className="NHProgressinner"
                          style={{ width: "60%", height: "60%" }}
                        >
                          
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1 ">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">4. Responsible Decision Making</h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"20%"}}>20%</p>
                        <div className="NHProgressinner" style={{ width: "20%", height: "20%" }}>
                      
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="NHProgresslistitem skillsliitem">
                    <h4 className="text-center mb-3 pb-2">5. Social & Cultural Awareness </h4>
                      <div className="NHPreogressouter">
                      <p style={{bottom:"80%"}}>80%</p>
                        <div className="NHProgressinner" style={{ width: "80%", height: "80%" }}>
                         
                        </div>
                      </div>
                      <div className="NHDimeProgName flextwo mt-1">
                        <h5>
                        Skill Progress
                        </h5>{" "}
                        <span>
                          <img
                            src={image.chat_icon}
                            alt=""
                            className="chat_icon"
                          />
                        </span>
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
                                <img src={image.courselevel4} alt="" className="mr-2" />
                                Social Dimension
                            </span> 
                            <div className="form-check form-switch m-0 flex">
                     <label
                      className="form-check-label pointer"
                      for="flexSwitchCheckDefault"
                    >
                      Section
                    </label>
                    <input
                      className="form-check-input avltogglebutton pointer"
                      type="radio"
                      
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                         
                        </h2>
                    
                    </div>
                     <div className="progressHomes">
                    
                   
                    <div className="progresslistitm">
                    <div className="courseskillbox">
                      <h4
                       data-toggle="collapse"
                       href="#Homethree2"
                      
                       aria-expanded="false"
                       className="flex HomeProgresstilt"
                      >Relationship Management <span> <i className="fa fa-chevron-down icon-show"></i></span></h4>
                      <div   className={`panel-collapse `}
                        id="Homethree2">
                      <p className="dmskills"><strong>Skill</strong>: Relationship Management</p>
                    
                    <div className="skillprogrs">
                      <span>20%</span>
                      <p><strong>Course Progress </strong><img src={image.chat_icon}  alt="" className="pl-1 chat_icon" /></p>
                      <div className="courseprogrsPopup">
                        <h4></h4>
                      </div>
                    </div>

                    <div className="progressstyl">
                      <span className="proficencyprog">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Proficiency</p>
                      </span>
                      <span className="CompltProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Completion</p>
                      </span>
                      <span className="TimProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Timing</p>
                      </span>
                    </div>
                    <div class="indivisectionprog flex">
                      <div class="graphbatteryprogress">
                        <span className="secProgTxt">30%</span>
                        <span class="batterycells" style={{height:"30%"}}></span>
                        <span className="secProgTxtName flexone">Section 1<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">50%</span>
                        <span class="batterycells" style={{height:"50%"}}></span>
                         <span className="secProgTxtName flexone">Section 2<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">70%</span>
                        <span class="batterycells" style={{height:"70%"}}></span>
                        <span className="secProgTxtName flexone">Section 3<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">60%</span>
                        <span class="batterycells" style={{height:"60%"}}></span>
                        <span className="secProgTxtName flexone">Section 4<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div className="courseskillbox">
                      <h4
                       data-toggle="collapse"
                       href="#Homethree1"
                      
                       aria-expanded="false"
                       className="flex HomeProgresstilt"
                      >Understanding Conflict <span> <i className="fa fa-chevron-down icon-show"></i></span></h4>
                      <div   className={`panel-collapse collapse`}
                        id="Homethree1">
                      <p className="dmskills"><strong>Skill</strong>: Conflict Resolution</p>
                    
                    <div className="skillprogrs">
                      <span>20%</span>
                      <p><strong>Course Progress </strong><img src={image.chat_icon}  alt="" className="pl-1 chat_icon" /></p>
                    </div>

                    <div className="progressstyl">
                      <span className="proficencyprog">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Proficiency</p>
                      </span>
                      <span className="TimProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Timing</p>
                      </span>
                      <span className="CompltProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Completion</p>
                      </span>
                    </div>
                    <div class="indivisectionprog flex">
                      <div class="graphbatteryprogress">
                        <span className="secProgTxt">30%</span>
                        <span class="batterycells" style={{height:"30%"}}></span>
                        <span className="secProgTxtName flexone">Section 1<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">50%</span>
                        <span class="batterycells" style={{height:"50%"}}></span>
                         <span className="secProgTxtName flexone">Section 2<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">70%</span>
                        <span class="batterycells" style={{height:"70%"}}></span>
                        <span className="secProgTxtName flexone">Section 3<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">60%</span>
                        <span class="batterycells" style={{height:"60%"}}></span>
                        <span className="secProgTxtName flexone">Section 4<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                  

                    
                    
                       
                      
                   
             </div>        */}
            {/* Dimension View */}
            {/* <div className="LeftbarPannel p-0" id="">
              <div className=" CourseCardWrapper position-relative">
                <div class="heading  gridSection d-flex w-100 p-0 Home_two">
                  <div class="tabgrid w-100 m-0 border-0">
                    <ul>
                      <li class="tabs active-tabs">
                        <img src={image.courselevel4} alt="" />
                        Social
                      </li>
                      <li class="tabs">
                        <img src={image.CollegeJourneyicon} alt="" />
                        Emotional
                      </li>
                      <li class="tabs"> 
                        <img src={image.courselevel5} alt="" />
                        Spiritual
                      </li>
                      <li class="tabs">
                        <img src={image.courselevel2} alt="" />
                        Physical
                      </li>
                      <li class="tabs">
                        <img src={image.courselevel3} alt="" />
                        Intellectual
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img
                      src={image.chat_icon}
                      className="chat_icon mr-2"
                      alt=""
                    />
                  </span>
                </div>
                <div className="gridSection mt-2">
                  <div className="content-tabs gridBody">
                    <div className=" content active-content">
                      <div class="SocialCoursecardWrap">
                        <h4
                          data-toggle="collapse"
                          class="flex KATitle collapse pointer"
                          aria-expanded="false"
                          href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616"
                        >
                          <span>
                            <img src={image.CourseTitleIcon} alt="" /> Math{" "}
                          </span>{" "}
                          <span>
                            {" "}
                            <strong className="mr-3">Curriculum</strong>
                            <strong className="mr-3">Resources</strong>{" "}
                            <span>
                              {" "}
                              <i class="fa-solid fa-angle-down"></i>
                            </span>
                          </span>
                        </h4>
                      </div>
                    </div>
                    <p className="nocourseenrolAvvl">
                      No courses enrolled. Please click on the Courses link to
                      enroll in available courses.
                    </p>
                    <div className=" content active-content">
                      <div class="SocialCoursecardWrap">
                        <h4
                          data-toggle="collapse"
                          class="flex KATitle collapse pointer"
                          aria-expanded="false"
                          href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616"
                        >
                          <span>
                            <img src={image.CourseTitleIcon} alt="" /> English{" "}
                          </span>{" "}
                          <span>
                            {" "}
                            <strong className="mr-3">Curriculum</strong>
                            <strong className="mr-3">Resources</strong>{" "}
                            <span>
                              {" "}
                              <i class="fa-solid fa-angle-down"></i>
                            </span>
                          </span>
                        </h4>
                      </div>
                    </div>
                    <p className="nocourseenrolAvvl">
                      No courses enrolled. Please click on the Courses link to
                      enroll in available courses.
                    </p>
                    <div className=" content active-content">
                      <div class="SocialCoursecardWrap">
                        <h4
                          data-toggle="collapse"
                          class="flex KATitle collapse pointer"
                          aria-expanded="false"
                          href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616"
                        >
                          <span>
                            <img src={image.CourseTitleIcon} alt="" /> Science{" "}
                          </span>
                          <span>
                            {" "}
                            <i class="fa-solid fa-angle-down"></i>
                          </span>
                        </h4>
                      </div>
                    </div>
                    <p className="nocourseenrolAvvl">
                      No courses enrolled. Please click on the Courses link to
                      enroll in available courses.
                    </p>
                    <div className=" content active-content">
                      <div class="SocialCoursecardWrap">
                        <h4
                          data-toggle="collapse"
                          class="flex KATitle collapse pointer"
                          aria-expanded="false"
                          href="#socialcardAcordian0ba1c649-d311-4df4-9228-ed2a0be34616"
                        >
                          <span>
                            <img src={image.CourseTitleIcon} alt="" /> Social
                            Science{" "}
                          </span>
                          <span>
                            {" "}
                            <i class="fa-solid fa-angle-down"></i>
                          </span>
                        </h4>
                      </div>
                    </div>
                    <p className="nocourseenrolAvvl">
                      No courses enrolled. Please click on the Courses link to
                      enroll in available courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="RightbarPannel p-0 rightpannelSticky">
              <div className="heading">
                <h2 className="flex">
                  <span>
                    <img
                      src={image.DiemensionProgress}
                      alt=""
                      className="mr-2"
                    />
                    <span>Progress</span>: Social
                  </span>
                  <div class="form-check form-switch m-0 flex p-0">
                    <label
                      class="form-check-label pointer"
                      for="flexSwitchCheckDefault"
                    >
                      Enrolled
                    </label>
                    <input
                      class="form-check-input avltogglebutton pointer"
                      type="radio"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </h2>
              </div>
              <div className="holisticflowr dimension_skilflow rghtpnl_Skill">
                <div className="skilanddimensioncircle">
                  <div className="dimensionskills social_Skils_center">
                    <h5>Social</h5>
                  </div>
                  <div className="skillCircleList AllSkillschart">
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                    <div className="skill_pnlcircle">
                      <div className="Skill_innercircle">
                        <p>10%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-3">
                <h4>In-Progress Courses</h4>
                <div class="form-check form-switch m-0 flex p-0">
                  <label
                    class="form-check-label pointer"
                    for="flexSwitchCheckDefault"
                  >
                    Section
                  </label>
                  <input
                    class="form-check-input avltogglebutton pointer"
                    type="radio"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
              <div className="courseskillbox">
                <h4
                  data-toggle="collapse"
                  href="#Homethree"
                  aria-expanded="true"
                  className="flex HomeProgresstilt"
                >
                  Understanding Conflict{" "}
                  <span>
                    {" "}
                    <i className="fa fa-chevron-down icon-show"></i>
                  </span>
                </h4>
                <div className={`panel-collapse `} id="Homethree">
                  <p className="dmskills">
                    <strong>Skill</strong>: Conflict Resolution
                  </p>

                  <div className="skillprogrs">
                    <span>20%</span>
                    <p>
                      <strong>Course Progress </strong>{" "}
                      <img
                        src={image.chat_icon}
                        alt=""
                        className="pl-1 chat_icon"
                      />
                    </p>
                  </div>

                  <div className="progressstyl">
                    <span className="proficencyprog">
                      <div className="position-relative Coursecompprcent m-auto">
                        <p className="">
                          <RoundProgress data={10} className="m-1" />
                        </p>
                      </div>
                      <p>Proficiency</p>
                    </span>
                    <span className="TimProgress">
                      <div className="position-relative Coursecompprcent m-auto">
                        <p className="">
                          <RoundProgress data={10} className="m-1" />
                        </p>
                      </div>
                      <p>Timing</p>
                    </span>
                    <span className="CompltProgress">
                      <div className="position-relative Coursecompprcent m-auto">
                        <p className="">
                          <RoundProgress data={10} className="m-1" />
                        </p>
                      </div>
                      <p>Completion</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="courseskillbox">
                <h4
                  data-toggle="collapse"
                  href="#Homethree1"
                  aria-expanded="false"
                  className="flex HomeProgresstilt"
                >
                  Understanding Conflict{" "}
                  <span>
                    {" "}
                    <i className="fa fa-chevron-down icon-show"></i>
                  </span>
                </h4>
                <div className={`panel-collapse collapse`} id="Homethree1">
                  <p className="dmskills">
                    <strong>Skill</strong>: Conflict Resolution
                  </p>

                  <div className="skillprogrs">
                    <span>20%</span>
                    <p>
                      <strong>Course Progress </strong>{" "}
                      <img
                        src={image.chat_icon}
                        alt=""
                        className="pl-1 chat_icon"
                      />
                    </p>
                  </div>

                  <div className="progressstyl">
                    <span className="proficencyprog">
                      <div className="position-relative Coursecompprcent m-auto">
                        <p className="">
                          <RoundProgress data={10} className="m-1" />
                        </p>
                      </div>
                      <p>Proficiency</p>
                    </span>
                    <span className="TimProgress">
                      <div className="position-relative Coursecompprcent m-auto">
                        <p className="">
                          <RoundProgress data={10} className="m-1" />
                        </p>
                      </div>
                      <p>Timing</p>
                    </span>
                    <span className="CompltProgress">
                      <div className="position-relative Coursecompprcent m-auto">
                        <p className="">
                          <RoundProgress data={10} className="m-1" />
                        </p>
                      </div>
                      <p>Completion</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="progresslistitm">
                    <div className="courseskillbox">
                      <h4
                       data-toggle="collapse"
                       href="#Homethree2"
                      
                       aria-expanded="false"
                       className="flex HomeProgresstilt"
                      >Relationship Management <span> <i className="fa fa-chevron-down icon-show"></i></span></h4>
                      <div   className={`panel-collapse `}
                        id="Homethree2">
                      <p className="dmskills"><strong>Skill</strong>: Relationship Management</p>
                    
                    <div className="skillprogrs">
                      <span>20%</span>
                      <p><strong>Course Progress </strong><img src={image.chat_icon}  alt="" className="pl-1 chat_icon" /></p>
                      <div className="courseprogrsPopup">
                        <h4></h4>
                      </div>
                    </div>

                    <div className="progressstyl">
                      <span className="proficencyprog">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Proficiency</p>
                      </span>
                      <span className="CompltProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Completion</p>
                      </span>
                      <span className="TimProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Timing</p>
                      </span>
                    </div>
                    <div class="indivisectionprog flex">
                      <div class="graphbatteryprogress">
                        <span className="secProgTxt">30%</span>
                        <span class="batterycells" style={{height:"30%"}}></span>
                        <span className="secProgTxtName flexone">Section 1<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">50%</span>
                        <span class="batterycells" style={{height:"50%"}}></span>
                         <span className="secProgTxtName flexone">Section 2<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">70%</span>
                        <span class="batterycells" style={{height:"70%"}}></span>
                        <span className="secProgTxtName flexone">Section 3<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">60%</span>
                        <span class="batterycells" style={{height:"60%"}}></span>
                        <span className="secProgTxtName flexone">Section 4<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div className="courseskillbox">
                      <h4
                       data-toggle="collapse"
                       href="#Homethree1"
                      
                       aria-expanded="false"
                       className="flex HomeProgresstilt"
                      >Understanding Conflict <span> <i className="fa fa-chevron-down icon-show"></i></span></h4>
                      <div   className={`panel-collapse collapse`}
                        id="Homethree1">
                      <p className="dmskills"><strong>Skill</strong>: Conflict Resolution</p>
                    
                    <div className="skillprogrs">
                      <span>20%</span>
                      <p><strong>Course Progress </strong><img src={image.chat_icon}  alt="" className="pl-1 chat_icon" /></p>
                    </div>

                    <div className="progressstyl">
                      <span className="proficencyprog">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Proficiency</p>
                      </span>
                      <span className="TimProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Timing</p>
                      </span>
                      <span className="CompltProgress">
                        <div className="position-relative Coursecompprcent m-auto">
                             <p className="">
                              <RoundProgress data={10} className="m-1" />
                              </p>                             
                        </div>
                        <p>Completion</p>
                      </span>
                    </div>
                    <div class="indivisectionprog flex">
                      <div class="graphbatteryprogress">
                        <span className="secProgTxt">30%</span>
                        <span class="batterycells" style={{height:"30%"}}></span>
                        <span className="secProgTxtName flexone">Section 1<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">50%</span>
                        <span class="batterycells" style={{height:"50%"}}></span>
                         <span className="secProgTxtName flexone">Section 2<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">70%</span>
                        <span class="batterycells" style={{height:"70%"}}></span>
                        <span className="secProgTxtName flexone">Section 3<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                      <div class="graphbatteryprogress">
                      <span className="secProgTxt">60%</span>
                        <span class="batterycells" style={{height:"60%"}}></span>
                        <span className="secProgTxtName flexone">Section 4<img src={image.chat_icon} className="ml-1 chat_icon" alt="" /></span>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div> 
            </div> */}

            <div className="Addrewardform  Whatadmcndo">
              <div className="modal fade" id="schoolactivity50" role="dialog">
                <div className="modal-dialog modal-lg certificatePopup">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="heading p-0 border-0 w-100">
                        <h2 className="flex">
                          <span className="flex">
                            {" "}
                            <img
                              src={image.AddLearner}
                              alt=""
                              className="mr-2"
                            />
                            What can Adam do next?
                          </span>
                          <button
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={() => hideShowBox()}
                          >
                            <i className="fa-regular fa-xmark m-0"></i>
                          </button>
                        </h2>
                      </div>
                    </div>

                    <div className="modal-body">
                      <h4 className="mb-3">
                        How can Adam advance in this dimension?
                      </h4>
                      <ul>
                        <li>
                          <img src={image.Electiclistiocn} alt="" /> Adam should
                          attempt all Knowledge Check and Exercise questions.
                        </li>
                        <li>
                          <img src={image.Electiclistiocn} alt="" />
                          Adam should attempt to complete each section in less
                          than 168 hour or 7 days.
                        </li>
                        <li>
                          <img src={image.Electiclistiocn} alt="" />
                          Adam can enroll in the below course(s)
                        </li>
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <div className="form-group BDsubmitbutton d-flex m-0">
                        <div className="buttonDistribotion">
                          <button
                            type="submit"
                            data-toggle="modal"
                            data-target="#schoolactivity75"
                            className="btn-blue btn-login d-block mb-5"
                          >
                            Next
                            <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
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

export default CourseStaticPage;
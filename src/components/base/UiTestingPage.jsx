import React, { useState } from "react";
import Home from "../Home";
import * as image from "../../resources/images";
const UiTestingPage = ({ color, value, data }) => {

    return (
        <div>
            <Home>
                <div className="d-flex flex-wrap SpecialLeftpanel w-100">
                    <div className="d-flex w-100 align-items-start overflow-visible">

                        {/* {/ Start Growth Survey 1 Screen /} */}
                        <div className="LeftbarPannel p-0" id="GrowthSurvey">
                            <div className='CourseCardWrapper fullHeight100 '>
                                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                                    <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                                            Let's create a learning plan for Adam
                                        </span>

                                    </h2>
                                </div>

                                <div className="p-5">
                                    <div className="topHeading d-flex align-items-center">
                                            <span className="pe-2">
                                                <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                                            </span>
                                            <h3>
                                                Introduction
                                            </h3>
                                    </div>
                                    <div className="introContent pt-4">
                                        <p>
                                            The growth survey is an easy way for you to see how much you gain from each course. You will
                                            take the survey now before you begin lessons to see your starting placement and then again after
                                            the course to see your final placement. Then you will compare them side by side!

                                        </p>

                                        <p>All growth is good growth so no matter where you place on the chart, you should be proud! This is not a test,
                                            there are no wrong answers, answer honestly to how the questions relate to your life.
                                        </p>


                                        <p>The growth survey only takes a few minutes, click the button below to get started.</p>
                                    </div>

                                    <div className="pt-5 mt-5 beginAssessmentbtn">
                                        <button className="btn-blue btn-login d-block  m-auto w-auto">
                                            <i className="fa-solid fa-paper-plane mr-2"></i>Begin Survey
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {/ End Growth Survey 1 Screen /} */}

                        {/* {/ Start Growth Survey 2 Screen /} */}
                        {/* <div className="LeftbarPannel p-0" id="GrowthSurvey">
                            <div className='CourseCardWrapper fullHeight100 '>
                                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                                    <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                                            Let's create a learning plan for Adam
                                        </span>

                                    </h2>
                                </div>
                                <div className="quizblok">
                                    <div className="backpageStrip p-0">
                                        <a href="#" className="flexone">
                                            <span className="">
                                                <i class="fa-solid fa-angle-left mr-1"></i>
                                            </span>
                                            Back
                                        </a>
                                    </div>
                                    <span className="Progresslistitem m-0">
                                        <span
                                            className={`diemensionalProgress progressbar1`}
                                            style={{
                                                maxWidth: `${0}%`,
                                                background: color ? color : "#20c997",
                                            }}
                                        ></span>
                                    </span>
                                    <span className='procompt'>
                                        1 of 12
                                    </span>
                                    <div className="backpageStrip p-0">
                                        <a href="#"
                                        >Next
                                            <span class="">
                                                <i class="fa-solid fa-angle-right ml-1"></i>
                                            </span></a>
                                    </div>
                                </div>
                                <div className="pt-4 ps-5 pe-5 smqzQueslist"> 
                                    <div className="topHeading ps-2">
                                        <span><img src={image.questionIcon} className='mr-2' alt=""  style={{maxWidth:'35px'}}/> 
                                            I am not easily influenced by other people.
                                        </span>  
                                    </div>

                                    <div className="pt-3">
                                        <label class="Selcheckbox">
                                            Not at all like me
                                            <input type="radio" id="#" value="0" />
                                            <span class="checkmark"></span>
                                        </label>

                                        <label class="Selcheckbox">
                                            Kinda like me
                                            <input type="radio" id="#" value="0" />
                                            <span class="checkmark"></span>
                                        </label>

                                        <label class="Selcheckbox">
                                            This is like me
                                            <input type="radio" id="#" value="0" />
                                            <span class="checkmark"></span>
                                        </label>

                                        <label class="Selcheckbox">
                                            A lot like me
                                            <input type="radio" id="#" value="0" />
                                            <span class="checkmark"></span>
                                        </label>

                                        <label class="Selcheckbox">
                                            Kinda like me
                                            <input type="radio" id="#" value="0" />
                                            <span class="checkmark"></span>
                                        </label>
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
                        </div> */}
                        {/* {/ End Growth Survey 2 Screen /} */}

                        {/* {/ Start Growth Survey 3 Screen /} */}
                        {/* <div className="LeftbarPannel p-0" id="GrowthSurvey">
                            <div className='CourseCardWrapper fullHeight100 '>
                                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                                    <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                                        <span> <img src={image.courselevel4} className='mr-2' alt="" />
                                            Let's create a learning plan for Adam
                                        </span>

                                    </h2>
                                </div>
                                <div className="quizblok">
                                    <div className="backpageStrip p-0">
                                        <a href="#" className="flexone">
                                            <span className="">
                                                <i class="fa-solid fa-angle-left mr-1"></i>
                                            </span>
                                            Back
                                        </a>
                                    </div>
                                    <span className="Progresslistitem m-0">
                                        <span
                                            className={`diemensionalProgress progressbar1`}
                                            style={{
                                                maxWidth: `${0}%`,
                                                background: color ? color : "#20c997",
                                            }}
                                        ></span>
                                        <span>
                                            1 of 13
                                        </span>
                                    </span>
                                    <div className="backpageStrip p-0">
                                        <a href="#"
                                        >Next
                                            <span class="">
                                                <i class="fa-solid fa-angle-right ml-1"></i>
                                            </span></a>
                                    </div>
                                </div>
                                <div className="growthsurveytextAreatypeQuestion pt-4 ps-5 pe-5">
                                    <div className="topHeading">
                                        <span>
                                            <img src={image.questionIcon} className='mr-2' alt="" />
                                            I am not easily influenced by other people.
                                        </span>
                                      
                                    </div>
                                    <div class="textareabox">
                                        <textarea name="" id="" placeholder="Write Your Answer...">
                                        </textarea>
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
                        </div> */}
                        {/* {/ End Growth Survey 3 Screen /} */}

                        {/* {/ Start Right Side Panel /} */}
                        <div className="RightbarPannel p-0 rightpannelSticky">
                            <div className="heading p-0 border-0">
                                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading summery_plan">
                                    <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                                        <span> <img src={image.growthsurveyPreviewIcon} className='mr-2' alt="" />
                                            Growth Survey Preview</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="ScenecerelateddQuiz allcourselj growthsurveyPreview p-0">
                        {/* {/ Collapse1 /} */}
                        <div className="growthSurveyCollapse">
                                    <h3 className="mt-3 flex">
                                        <div className="">
                                            <span className="collapse-title">Pre Growth Survey Behavior</span>
                                        </div>
                                        <span
                                            className="pointer"
                                            data-toggle="collapse"
                                            href={`#GrowthSurveyColl`}
                                            aria-expanded="true"
                                        >
                                            <i className="fa fa-chevron-down icon-show"></i>
                                        </span>
                                    </h3>

                                    <div className="panel-collapse collapse show" id="GrowthSurveyColl">
                                        <div className="p-3">
                                            <div className="pb-3 d-flex flex-column">
                                                <span className="question">
                                                    <i class="fa fa-question-circle-o pr-2" aria-hidden="true"></i>
                                                    I am not easily influenced by other people.
                                                </span>

                                                <span className="answer">
                                                    <img src={image.greentickarrow} className="mr-2" />
                                                    I am not easily influenced by other people.
                                                </span>
                                            </div> 

                                            <div className="pb-3 d-flex flex-column">
                                                <span className="question">
                                                    <i class="fa fa-question-circle-o pr-2" aria-hidden="true"></i>
                                                    I am not easily influenced by other people.
                                                </span>

                                                <span className="answer">
                                                    <img src={image.greentickarrow} className="mr-2" />
                                                    I am not easily influenced by other people.
                                                </span>
                                            </div> 

                                            <div className="pb-3  d-flex flex-column">
                                                <span className="question">
                                                    <i class="fa fa-question-circle-o pr-2" aria-hidden="true"></i>
                                                    I am not easily influenced by other people.
                                                </span>

                                                <span className="answer">
                                                    <img src={image.greentickarrow} className="mr-2" />
                                                    I am not easily influenced by other people.
                                                </span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                        {/* {/ Collapse2 /} */}
                        <div className="growthSurveyCollapse">
                                    <h3 className="mt-3 flex">
                                        <div className="">
                                            <span className="collapse-title">Pre Growth Survey Knowledge</span>
                                        </div>
                                        <span
                                            className="pointer"
                                            data-toggle="collapse"
                                            href={`#GrowthSurveyColl1`}
                                            aria-expanded="true"
                                        >
                                            <i className="fa fa-chevron-down icon-show"></i>
                                        </span>
                                    </h3>

                                    <div className="panel-collapse collapse show" id="GrowthSurveyColl1">
                                       
                                    <div className="p-3">
                                            <div className="pb-3 d-flex flex-column">
                                                <span className="question">
                                                    <i class="fa fa-question-circle-o pr-2" aria-hidden="true"></i>
                                                    I am not easily influenced by other people.
                                                </span>

                                                <span className="answer">
                                                    <img src={image.greentickarrow} className="mr-2" />
                                                    I am not easily influenced by other people.
                                                </span>
                                            </div> 

                                            <div className="pb-3 d-flex flex-column">
                                                <span className="question">
                                                    <i class="fa fa-question-circle-o pr-2" aria-hidden="true"></i>
                                                    I am not easily influenced by other people.
                                                </span>

                                                <span className="answer">
                                                    <img src={image.greentickarrow} className="mr-2" />
                                                    I am not easily influenced by other people.
                                                </span>
                                            </div> 

                                            <div className="pb-3  d-flex flex-column">
                                                <span className="question">
                                                    <i class="fa fa-question-circle-o pr-2" aria-hidden="true"></i>
                                                    I am not easily influenced by other people.
                                                </span>

                                                <span className="answer">
                                                    <img src={image.greentickarrow} className="mr-2" />
                                                    I am not easily influenced by other people.
                                                </span>
                                            </div> 
                                        </div>  
                                    </div>
                                </div> 
                        </div>
                        </div>
                        {/* {/ End Right Side Panel /} */}


                        {/* {/ Start Right Side Panel /} */}
                        {/* <div className="RightbarPannel p-0 rightpannelSticky">
                            <div className="heading p-0 border-0">
                                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading summery_plan">
                                    <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between ">
                                        <span> <img src={image.growthSurveyIcon} className='mr-2' alt="" />
                                            Growth Survey Data</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="ScenecerelateddQuiz allcourselj growthsurveyData p-0">
                                <div class="p-3">
                                    <div className="d-flex pt-">
                                        <div className="pe-4 levelNames">
                                            <p>Pro</p>
                                            <p>Advanced</p>
                                            <p>Beginner</p>
                                        </div>

                                        <div className="gradientBox">
                                            <div className="gradientStar">
                                                <img src={image.starIcon} className='mr-2' alt=""/>
                                            </div>
                                            <div className="gradientCircle">
                                                <i className="fa fa-circle fa-lg pe-2" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-around pt-4 align-item-center">
                                        <div className="placementname">
                                            <i className="fa fa-circle fa-lg pe-2" aria-hidden="true"></i>
                                            <span>Current Placement</span>
                                        </div>
                                        <div className="placementname">
                                            <span>
                                                <img src={image.starIcon} className='mr-2' alt="" style={{width:'28px'}} />
                                            </span>
                                            <span>Projected Placement</span>
                                        </div>
                                    </div>      
                                </div>
                            </div>
                        </div> */}
                        {/* {/ End Right Side Panel /} */}
                    </div>
                </div>
            </Home>
        </div>

    );
}
export default UiTestingPage;
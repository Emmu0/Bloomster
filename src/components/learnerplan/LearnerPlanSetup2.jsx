import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized } from "../../utils/helper";
import { getDimensionPlanData } from "../../redux/actions/APIs";

const LearnerPlanSetup2 = ({ submitLeanerPlan, loader, handleNext, selectPlan, getPlan, handleBack, handleRecommendedPopUp, handleDimensionPlanPopup }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const { defaultChildData, dashboardData } = useSelector((state) => state.collections);

    return (
        <div className="learner_plan p-4 setup_two ljpopups">
            <div className="">
                <div class="ScenecerelateddQuiz  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                    <div class="signupType m-0 ">
                        <h4 class="">
                            {/* <strong class="">Great! You've taken the first step of emporing {getCapitalized(defaultChildData?.firstName)} with essential life skills. Let's start {getCapitalized(defaultChildData?.firstName)}'s learning journey by selecting from one of the options below.</strong> */}
                            <strong class="">Next let's build the courses for {getCapitalized(defaultChildData?.firstName)}'s learning journey by selecting from one of the options below.</strong>
                        </h4>
                        {/* Option 1 */}
                        <div class="learnerPlan_modelQue">
                            <div>
                                <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                    <div className="QQtitle">
                                        <p className="palnquestiontitle">
                                            Recommend a learning plan for {getCapitalized(defaultChildData?.firstName)}.
                                        </p>
                                    </div>
                                    <input type="radio" name="skill0" defaultChecked={getPlan === "standard plan" && dashboardData?.userPlans?.isrecommendedplan} onChange={() => selectPlan("standard plan")} />
                                    <span class="checkmark"></span>
                                </label>
                                <spn onClick={() => handleRecommendedPopUp(true)}>
                                    <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                </spn>
                            </div>
                            <p className="onliner_Sel w-100">
                                We selected a few of our most popular courses to create a learning plan for {getCapitalized(defaultChildData?.firstName)}.
                            </p>
                        </div>
                        {/* Option 2 */}
                        <div class="learnerPlan_modelQue">
                            <div>
                                <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                    <div className="QQtitle">
                                        <p className="palnquestiontitle">
                                            I want to filter courses based on the areas {getCapitalized(defaultChildData?.firstName)} needs help with.
                                        </p>
                                    </div>
                                    <input type="radio" name="skill0" defaultChecked={getPlan === "bloomster plan"} onChange={() => selectPlan("bloomster plan")} />
                                    <span class="checkmark"></span>
                                </label>
                                <spn onClick={() => handleRecommendedPopUp(true)}>
                                    <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                </spn>
                            </div>
                            <p className="onliner_Sel w-100">
                            
                                You will select some common themes where you want {getCapitalized(defaultChildData?.firstName)} to focus and learn new skills.
                            </p>
                        </div>
                        {/* Option 3 */}
                        <div class="learnerPlan_modelQue">
                            <div>
                                <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                    <div className="QQtitle">
                                        <p className="palnquestiontitle">
                                            I want to select a pathway which focuses on an area where {getCapitalized(defaultChildData?.firstName)} needs help.
                                        </p>
                                    </div>
                                    <input type="radio" name="skill0" defaultChecked={getPlan === "pathway plan"} onChange={() => selectPlan("pathway plan")} />
                                    <span class="checkmark"></span>
                                </label>
                                <spn onClick={() => handleRecommendedPopUp(true)}>
                                    <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                </spn>
                            </div>
                            <p className="onliner_Sel w-100">
                                Pathway is a set of courses curated by experts on a particular subject matter where adolescents generally need help.
                            </p>
                        </div>
                        {/* Option 4 */}
                        {/* <div class="flexone learnerPlan_modelQue"> */}
                        <div className="learnerPlan_modelQue">
                            <div>
                                <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                    <div className="QQtitle">
                                        <p className="palnquestiontitle">
                                            I want to select demensions and skills where {getCapitalized(defaultChildData?.firstName)} needs help.
                                        </p>
                                    </div>
                                    <input type="radio" name="skill0" defaultChecked={getPlan === "dimension plan"} onChange={() => selectPlan("dimension plan")} /><span class="checkmark"></span></label>
                                <spn onClick={() => handleDimensionPlanPopup(true)}><img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></spn>
                            </div>
                            <p className="onliner_Sel w-100">
                                Customize which dimension(s) and skill(s) you want {getCapitalized(defaultChildData?.firstName)} to focus on in the next few weeks.
                            </p>
                        </div>
                        {/* </div> */}
                        {/* <div class="flexone learnerPlan_modelQue">
                            <label class="Selcheckbox m-0 ActiveQQst">
                                <div className="QQtitle">
                                    <p className="palnquestiontitle">I want to select a pathway which focuses on an area where {getCapitalized(defaultChildData?.firstName)} needs help. <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                                    <p>Pathway is a set of courses curated by experts on a particular subject matter where adolescents generally need help.</p>
                                </div>
                                <input type="radio" name="skill0" defaultChecked={getPlan === "pathway plan"} onChange={() => selectPlan("pathway plan")} /><span class="checkmark"></span></label>

                        </div> */}
                    </div>
                </div>
                <div className="next_button p-10">
                    <div className="buttonDistribotion justify-content-between">
                        <button
                            type="submit"
                            onClick={() => handleBack()}
                            className="btn-blue btn-login d-block mb-5 w-auto"
                        ><i className="fa-solid fa-arrow-left m-0 mr-2"></i>Back
                        </button>
                        {
                            getPlan !== "standard plan" && (
                                <>
                                    <button
                                        type="submit"
                                        data-toggle="modal"
                                        data-target="#schoolactivity75"
                                        className="btn-blue btn-login d-block mb-5 w-auto"
                                        onClick={() => handleNext(true)}
                                    >
                                        Next<span>
                                            <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                                        </span>
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnerPlanSetup2;

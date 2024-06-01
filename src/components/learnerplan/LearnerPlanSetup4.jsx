import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized, getSequnceSort } from "../../utils/helper";
import { getDimensionPlanData } from "../../redux/actions/APIs";

const LearnerPlanSetup4 = ({ dimensions }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const { defaultChildData, getDimPlanData } = useSelector((state) => state.collections);

    return (
        <div className="learner_plan p-4 setup_two ljpopups">
            <div className="">
                <div class="ScenecerelateddQuiz  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                    <div class="signupType m-0 ">
                        <h4 class="mb-3 pb-3">
                            <strong class="">Great! Let's select skill in the social dimension that you would like {getCapitalized(defaultChildData?.firstName)} to learn.
                                <img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 pointer jinfoicon" alt="" />
                            </strong>
                        </h4>
                        <div class="flexone mb-3">
                            <label class="Selcheckbox m-0 ActiveQQst">
                                <div className="QQtitle">
                                    <p className="palnquestiontitle">Conflict Resolution<img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /> </p>
                                    <p>One liner for the skill.</p>
                                </div>
                                <input type="checkbox" name="skill0" checked /><span class="checkmark"></span></label>

                        </div>
                        <div class="flexone mb-3">
                            <label class="Selcheckbox m-0 ActiveQQst">
                                <div className="QQtitle">
                                    <p className="palnquestiontitle">Effective Communication<img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                                    <p>One liner for the skill</p>
                                </div>

                                <input type="checkbox" name="skill0" /><span class="checkmark"></span></label>

                        </div>
                        <div class="flexone mb-3">
                            <label class="Selcheckbox m-0 ActiveQQst">
                                <div className="QQtitle">
                                    <p className="palnquestiontitle">Responsible Decision Making<img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                                    <p>One liner for the skill</p>
                                </div>
                                <input type="radio" name="skill0" /><span class="checkmark"></span></label>

                        </div>
                        <div class="flexone mb-3">
                            <label class="Selcheckbox m-0 ActiveQQst">
                                <div className="QQtitle">
                                    <p className="palnquestiontitle">Leadership<img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                                    <p>One liner for the skill</p>
                                </div>
                                <input type="radio" name="skill0" /><span class="checkmark"></span></label>

                        </div>
                        <div class="flexone mb-3">
                            <label class="Selcheckbox m-0 ActiveQQst">
                                <div className="QQtitle">
                                    <p className="palnquestiontitle">Relationship Management<img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /></p>
                                    <p>One liner for the skill</p>
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
                            Next<i className="fa-solid fa-arrow-right m-0 ml-2"></i>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnerPlanSetup4;

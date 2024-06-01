import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized, getSequnceSort } from "../../utils/helper";
import { getDimensionPlanData } from "../../redux/actions/APIs";

const LearnerPlanSetup3 = ({ submitLeanerPlan, loader, handleNext, handleOnDimensionClick, getPlan }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const { defaultChildData, getDimPlanData } = useSelector((state) => state.collections);
    console.log('checkbox : ', getDimPlanData);
    return (
        <div className="learner_plan p-4 setup_two ljpopups setup_three">
            <div className="">
                <div class="ScenecerelateddQuiz custom_pathways  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                    <div class="signupType m-0 ">
                        <h4 class="">
                            <strong class="">I want {getCapitalized(defaultChildData?.firstName)} to focus on the following dimensions.<img src="/static/media/chat-icon.2a607af3ca378ac033c1.png" class="ml-2 pointer jinfoicon" alt="" /></strong>
                        </h4>
                        {
                            getSequnceSort(getDimPlanData?.records)?.map((dim, index) => (
                                <div class="flexone mb-3" key={index}>
                                    <label class="Selcheckbox m-0 ActiveQQst">
                                        <div className="QQtitle">
                                            <p className="palnquestiontitle">{dim?.name}  <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" /> </p>
                                            <p>{dim?.oneliner}</p>
                                        </div>
                                        <input type="checkbox" name="skill0" onChange={() => handleOnDimensionClick(index, dim)} /><span class="checkmark"></span></label>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="next_button p-10">
                    <div className="buttonDistribotion mt-4 pt-4">
                        <button
                            type="submit"
                            data-toggle="modal"
                            data-target="#schoolactivity75"
                            className="btn-blue btn-login d-block mb-5 w-auto"
                            onClick={() => handleNext(true)}
                        >
                            Next<i className="fa-solid fa-arrow-right m-0 ml-2"></i>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnerPlanSetup3;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized } from "../../utils/helper";
import { getLearnerPlanWeekWise } from "../../redux/actions/APIs";

const LearnerPlanSetup1 = ({ corNum, selcteNumberOfCourse, handleNext }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const { defaultChildData } = useSelector((state) => state.collections);
    const [selectedSitting, setSelectedSitting] = useState(2);
    const [selectedMinutes, setSelectedMinutes] = useState(30);
    let sittings = ["2", "3", "4"];
    let minutes = ["30", "45", "60"];

    const handleSitting = (value) => {
        console.log('selectedSitting : ', selectedSitting);
        setSelectedSitting(value)
    }

    const handleMinutes = (value) => {
        setSelectedMinutes(value)
    }


    const handleSetup1Next = (result) => {
        let obj = {
            "sittings": selectedSitting,
            "duration": selectedMinutes,
            "userId": params?.id
        }
        //  dispatch(getLearnerPlanWeekWise(obj))
        handleNext(result);
    }

    return (
        <div className="learner_plan setup_one p-4">
            <div className="paceSteps mt-0">
                <div className="">
                    <h3 className="d-flex align-items-start paceseltitle">
                        <span>Select a pace that you think will allow {getCapitalized(defaultChildData?.firstName)} to comfortably complete courses on Bloomster.
                            <img src={image.chat_icon} className="ml-2 ichat_icon pointer " />
                        </span>
                    </h3>
                    <p className=" pt-3">You know your child the best. Select a pace that would allow {getCapitalized(defaultChildData?.firstName)} to
                        learn new skills in a fun and engaging way without feeling like it is a chore or homework.
                    </p>
                </div>
                <div className="ScenecerelateddQuiz p-0 d-flex align-items-baseline justify-content-between">
                    <div class="signupType m-0 pt-3 mt-3">
                        <div class="PaceModeSel mb-3">
                            <h3 className=""> How many times {getCapitalized(defaultChildData?.firstName)} would sit for coursework per week? <span className="mandatoryField">*</span>
                                <div className="selectecPaceWeek">
                                    {
                                        sittings?.map((value, index) => (
                                            <label class="Selcheckbox m-0 ActiveQQst">
                                                <input type="radio" name="skill0" onClick={() => handleSitting(value)} defaultChecked={value == 2 ? true : false} /> {value} <span>Sittings</span>
                                                <span class="checkmark"> </span>
                                            </label>
                                        ))
                                    }
                                </div>

                            </h3>
                            {/* <p>We recommend at least {convertedNumber(selectedSitting)} ({selectedSitting}) sittings per week for optimal learning experience.</p> */}
                        </div>
                    </div>
                    <div class="signupType m-0 pt-3 mt-3 seltimedaysit">
                        <div class="PaceModeSel mb-3">
                            <h3 className=""> How many minutes would {getCapitalized(defaultChildData?.firstName)} spend in a sitting? <span className="mandatoryField">*</span>
                                <div className="selectecPaceWeek">
                                    {
                                        minutes?.map((value, index) => (
                                            <label class="Selcheckbox m-0 ActiveQQst">
                                                <input type="radio" name="minutes" defaultChecked={index == 0 ? true : false} onClick={() => handleMinutes(value)} /> {value} <span>Minutes</span>
                                                <span class="checkmark"> </span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </h3>
                            {/* <p>
                                We recommend at least {selectedMinutes} mins per sitting for optimal learning experience
                            </p> */}
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
                            onClick={() => handleSetup1Next(true)}
                        >
                            Next
                            <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnerPlanSetup1;

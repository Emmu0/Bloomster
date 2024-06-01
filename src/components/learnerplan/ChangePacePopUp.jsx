import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized } from "../../utils/helper";
import { getDimensionPlanData, getDimensionUpdatePlan } from "../../redux/actions/APIs";
import { getDashboard } from "../../redux/actions/Home";
import { duration } from "moment";

const ChangePacePopUp = ({ handleShowPlanModule }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const { defaultChildData, response, dashboardData } = useSelector((state) => state.collections);
    const [selectedSitting, setSelectedSitting] = useState(2);
    const [selectedMinutes, setSelectedMinutes] = useState(30);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (dashboardData) {
            console.log('dashboardData 1: ', dashboardData?.duration);
            setSelectedSitting(dashboardData?.sittings);
            setSelectedMinutes(dashboardData?.duration);
        }
    }, [dashboardData])

    let sittings = ["2", "3", "4"];
    let minutes = [30, 45, 60];

    const handleSitting = (value) => {
        console.log('selectedSitting : ', selectedSitting);
        setSelectedSitting(value)
    }

    const handleMinutes = (value) => {
        setSelectedMinutes(value)
    }

    const submitPlan = () => {
        setLoader(true);
        let planData = {
            "sittings": selectedSitting,
            "duration": selectedMinutes,
            "userId": defaultChildData?.id
        }
        dispatch(getDimensionUpdatePlan(planData));
    }

    useEffect(() => {
        if (response) {
            dispatch(getDashboard(defaultChildData?.id));
            setLoader(false);
            handleShowPlanModule(false);
        }
    }, [response])

    return (
        <div className="modal d-block fade show newinfo_popup newinfo_popupdimension newEnrollCoursPopup pacechangepopuo" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="heading border-0 p-0 w-100">
                            <h2 className="flex">
                                <span>
                                    <img src={image.paceIcon} alt="" className="mr-2" />
                                    Change Pace
                                </span>
                                <button className="btn btn-primary" data-dismiss="modal" onClick={() => handleShowPlanModule(false)}>
                                    <i className="fa-regular fa-xmark m-0"></i>
                                </button>
                            </h2>
                        </div>
                    </div>
                    <div className="modal-body  m-0 pt-0 paceSteps">
                        <div class="ScenecerelateddQuiz border-0">
                            <div class="signupType  w-100">
                                <div class="PaceModeSel mb-3">
                                    <h3 className=""> How many times {getCapitalized(defaultChildData?.firstName)} would sit for coursework? <span className="mandatoryField">*</span>
                                        <div className="selectecPaceWeek">
                                            {/* <label class="Selcheckbox m-0 ActiveQQst">
                                                <input type="radio" name="skill" /> 1 <span>Sittings</span>
                                                <span class="checkmark"> </span>
                                            </label> */}
                                            {sittings?.map((value, index) => (
                                                <label class="Selcheckbox m-0 ActiveQQst">
                                                    <input type="radio" name="skill" onClick={() => handleSitting(value)} checked={value == selectedSitting ? true : false} /> {value} <span>Sittings</span>
                                                    <span class="checkmark"> </span>
                                                </label>
                                            ))}

                                        </div>

                                    </h3>
                                    <p>We recommend at least {convertedNumber(selectedSitting)} ({selectedSitting}) sittings per week for optimal learning experience.</p>
                                </div>


                            </div>
                            <div class="signupType m-0 pt-3 mt-3 seltimedaysit w-100">
                                <div class="PaceModeSel mb-3">
                                    <h3 className=""> How many minutes would {getCapitalized(defaultChildData?.firstName)} spend in a sitting? <span className="mandatoryField">*</span>
                                        <div className="selectecPaceWeek mb-0">
                                            {
                                                minutes?.map((value, index) => (
                                                    <label class="Selcheckbox m-0 ActiveQQst" key={index}>
                                                        <input type="radio" name="minutes" checked={value === selectedMinutes ? true : false} onClick={() => handleMinutes(value)} /> {value} <span>Minutes</span>
                                                        <span class="checkmark"> </span>
                                                    </label>
                                                ))
                                            }
                                        </div>
                                    </h3>
                                    <p>
                                        We recommend at least {selectedMinutes} mins per sitting for optimal learning experience.
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
                                        onClick={() => handleShowPlanModule(false)}
                                    >
                                        <i className="fa-solid fa-xmark"></i> Close
                                    </button>
                                    {loader ?
                                        (
                                            <div className="justify-content-end">
                                                <button
                                                    className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
                                                    disabled
                                                >
                                                    <span className="RounAnimation mr-1"></span>{" "}

                                                    Please Wait...
                                                </button>
                                            </div>
                                        ) :
                                        (<button
                                            type="button"
                                            className="btn-blue btn-login d-block mb-5"
                                            onClick={() => submitPlan()}
                                        >
                                            <i class="fa-solid fa-paper-plane mr-2"></i>Submit
                                        </button>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePacePopUp;

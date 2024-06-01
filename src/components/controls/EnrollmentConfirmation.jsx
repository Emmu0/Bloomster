import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import {
    enrollModal,
    lockPopup,
    parentToolsModal,
    resetEnroll,
    showModal,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import RoundProgress from "./RoundProgress";
import { formatDate, getCapitalized, getSequnceSort, getUrlSegment } from "../../utils/helper";
import {
    courseEnrollment,
    enrollCourseJourny,
    enrollFromCourseJourney,
    getAllUsersDetail,
    getJournyCourseData,
    getJournyCourses,
    getRewardData,
    sendCollabrationEmail,
} from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "../notifications/Success";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddReward from "../setting/AddReward";

const EnrollmentConfirmation = ({ data }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        defaultChildData,
        getParentToolResponses
    } = useSelector((state) => state.collections);

    const [showReward, setShowReward] = useState(false);
    const [rewardObj, setRewardObj] = useState({});

    const closeEnrollmentRewardPopup = () => {
        dispatch(parentToolsModal());
    }

    const handleReward = () => {
        closeEnrollmentRewardPopup();
        dispatch(parentToolsModal({
            isShowReward: true, data: {
                data: data,
                activityId: "",
                userId: defaultChildData?.id,
            }
        }));
        //  dispatch(getRewardData());
    };

    return (
        <div className="downgradepopup newEnrollCoursPopup enrollZindex Enrlconforrewa">
            <div
                className="modal show d-flex"
                id="schoolactivity128"
                role="dialog"
            >
                <div className="modal-dialog modal-lg mt-0 mb-0">
                    <div className="modal-content courseInformation">
                        <div className="modal-header">
                            <div className="heading border-0 p-0 w-100">
                                <h2 className="flex w-100">
                                    <span>
                                        <img src={image.mortarboard} alt="" className="mr-2" />
                                        Enrollment Confirmation
                                    </span>
                                    <button
                                        className="btn btn-primary"
                                        data-dismiss="modal"
                                        onClick={() => closeEnrollmentRewardPopup()}
                                    >
                                        <i className="fa-regular fa-xmark m-0"></i>
                                    </button>
                                </h2>
                            </div>
                        </div>
                        <div className="modal-body pt-1 feeAnalysispopup rewardlisting">
                            <div className=" heighlightcong mt-4">
                                <div className="signupType m-0 mb-4 pb-4">
                                    <div className="flextwo mb-3 w-100">
                                        <label className="Selcheckbox m-0 ActiveQQst">
                                            <input type="radio" name="skill0" checked />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <h3 className="mt-5 pt-5 mb-2  text-center">
                                    Congratulations! You have successfully enrolled{" "}
                                    {getCapitalized(defaultChildData?.firstName)} in the
                                    course:
                                    {/* Relationship Building Basics */}
                                    <span className="d-block mt-2"> {data?.name}</span>
                                </h3>
                            </div>
                            <h4 className="recumdedgift flex align-items-start mt-3">
                                <img src={image.Powericon} className="mr-2 mt-1" />
                                We recommend adding a reward to encourage{" "}
                                {getCapitalized(defaultChildData?.firstName)} to complete
                                the course. See rewards other parents are using to encourage
                                their children.
                            </h4>

                            <div className="welcomscreenContent lockContentPOpups p-0">
                                <ul className="pl-3 pt-3  flex-wrap">
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <p>Movie night with friends</p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <p>Sleep over with friends</p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <p>Dessert or snack at a restaurant of their choice</p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <p>One hour screen time</p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <p>Choose a family activity for the weekend</p>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <p>An extra hour of free playtime</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="form-group BDsubmitbutton d-flex m-0">
                                <div className="buttonDistribotion">
                                    <div className="buttonDistribotion">
                                        <button
                                            type="button"
                                            className="btn-blue btn-login d-block mb-5 cancelbutton"
                                            onClick={() => closeEnrollmentRewardPopup()}
                                        >
                                            <i className="fa-solid fa-xmark"></i>Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn-blue btn-login d-block mb-5"
                                            onClick={() => handleReward()}
                                        >
                                            <i className="fa-solid fa-paper-plane mr-2"></i>Add
                                            Reward
                                        </button>
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

export default EnrollmentConfirmation;



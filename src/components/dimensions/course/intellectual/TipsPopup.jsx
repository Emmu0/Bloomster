import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import { getCapitalized } from "../../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { enrollModal, parentToolsModal } from "../../../../redux/actions";

const TipsPopup = ({ data }) => {
    const dispatch = useDispatch();
    const {
        defaultChildData,
        loggedInUser
    } = useSelector((state) => state.collections);

    const parentTooEnroll = () => {
        dispatch(enrollModal(data));
        closePopup();
    };

    const closePopup = () => {
        dispatch(parentToolsModal());
    }

    return (
        <div className="coursecardmenulocked   AddChildPopup lockedcontentpopup">
            <div className="modal d-block" role="dialog"
                id="schoolactivity136"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content courseInformation schoolcourse">
                        <div className="modal-header NuggetPopupTitle">
                            <div className="heading border-0 w-100 NuggetVickyImage p-0">
                                <h4 className="flex">
                                    <span>
                                        {" "}
                                        <img
                                            src={image.locked_icon}
                                            alt=""
                                            className="mr-2 p-1"
                                        />
                                        Tips to better support {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)}
                                    </span>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => closePopup()}

                                    >
                                        <i className="fa-regular fa-xmark m-0"></i>
                                    </button>
                                </h4>
                            </div>
                        </div>

                        <div className="modal-body Subject_Curriculam  flex align-items-center feeAnalysispopup">

                            <div className="welcomscreenContent">
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <h4>
                                            {" "}
                                            We've gathered valuable tips to enhance your support for {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} on their learning journey.
                                        </h4>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>
                                        <h4>
                                            {" "}
                                            You can access them when you enroll {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} in this course.
                                        </h4>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-play mr-2 mt-1"></i>{" "}
                                        <h4>
                                            Click 'Enroll' to kickstart {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)}'s learning journey.
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer closebtnreset">
                            <div className="form-group BDsubmitbutton d-flex m-0 ">
                                <button
                                    type="button"
                                    className="btn-blue btn-login d-block mb-5 cancelbutton m-0 ml-auto"
                                    onClick={() => closePopup()}
                                >
                                    <i className="fa-solid fa-xmark mr-2"></i> Close
                                </button>
                                <button
                                    type="button"
                                    className="btn-blue btn-login d-block ml-0 w-auto"
                                    onClick={() => parentTooEnroll()}
                                >
                                    <i className="fa-solid fa-paper-plane mr-2"></i>
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TipsPopup;
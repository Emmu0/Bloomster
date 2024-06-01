import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import RoundProgress from "../../../controls/RoundProgress";
import { useDispatch } from "react-redux";
import { parentToolsModal } from "../../../../redux/actions";

const CourseProgressPopup = () => {
    const dispatch = useDispatch();
    const close = () => {
        dispatch(parentToolsModal());
    }

    return (
        <div className="newinfo_popupdimension newEnrollCoursPopup course_progress">
            <div className="modal fade show d-block" id="schoolactivity47" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content courseInformation">
                        <div className="modal-header">
                            <div className="heading border-0 p-0 w-100">
                                <h2 className="flex">
                                    <span>
                                        <img src={image.mortarboard} className="mr-2" />
                                        How is course progress calculated?
                                    </span>
                                    <button className="btn btn-primary" data-dismiss="modal" onClick={() => close()}>
                                        <i className="fa-regular fa-xmark m-0"></i>
                                    </button>
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body p-3">

                            <div className="newenrolledpopup">

                                <div className="newenrollepopup"
                                    id=""
                                >
                                    <h3 className="mb-3 ">
                                     Course progress is calculated based on Proficiency, Completion, & Pace as illustrated below.{" "}
                                    </h3>
                                    <div className="Course_evaluation">
                                        <div className="skillprogrs">
                                            <span>Progress</span>
                                        </div>

                                        <div className="progressstyl">
                                            <span className="proficencyprog">
                                                <img src={image.blueArrow} alt="" />
                                                <div className="position-relative Coursecompprcent m-auto">
                                                    <p className="">
                                                        <RoundProgress data={60} className="m-1" />
                                                    </p>
                                                </div>
                                                <p>Proficiency</p>
                                            </span>
                                            <span className="CompltProgress">
                                                <img src={image.smallArrow} alt="" />
                                                <div className="position-relative Coursecompprcent m-auto">
                                                    <p className="">
                                                        <RoundProgress data={30} className="m-1" />
                                                    </p>
                                                </div>
                                                <p>Completion</p>
                                            </span>
                                            <span className="TimProgress">
                                                <img src={image.blueArrow} alt="" />
                                                <div className="position-relative Coursecompprcent m-auto">
                                                    <p className="">
                                                        <RoundProgress data={10} className="m-1" />
                                                    </p>
                                                </div>
                                                <p>Pace</p>
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="recommendtxt">Recommended Pace </h4>
                                    <div className="coursesteps">
                                        <ul className="flex">
                                            <li>
                                                <span className="startsteps">Start</span>

                                                <span className="Completeindays">
                                                    <p>4 days</p>
                                                    <img src={image.smallArrow} alt="" />
                                                </span>
                                                {/* <p className="m-0">
                                                    <strong>Today</strong>
                                                </p> */}
                                            </li>
                                            <li>
                                                <span className="Coursesteps">S1</span>
                                                <span className="Completeindays">
                                                    <p>4 days</p>
                                                    <img src={image.smallArrow} alt="" />
                                                </span>
                                                {/* <p>08/11/2023</p> */}
                                            </li>
                                            <li>
                                                {" "}
                                                <span className="Coursesteps">S2</span>
                                                <span className="Completeindays">
                                                    <p>4 days</p>
                                                    <img src={image.smallArrow} alt="" />
                                                </span>
                                                {/* <p>08/15/2023</p> */}
                                            </li>
                                            <li>
                                                {" "}
                                                <span className="Coursesteps">S3</span>
                                                <span className="Completeindays">
                                                    <p>4 days</p>
                                                    <img src={image.smallArrow} alt="" />
                                                </span>
                                                {/* <p>08/19/2023</p> */}
                                            </li>
                                            <li className="Coursesteps">
                                                <span className="Coursesteps">S4</span>
                                                <span className="Completeindays"></span>
                                                {/* <p>08/23/2023</p> */}
                                            </li>
                                        </ul>
                                    </div>
                                    <h5 class="text-left pl-0 pt-3 pb-3"><i class="fa-regular fa-note mr-2"></i>Note: Watch the entire video / illustration to earn 10 points and get completion credit!</h5>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer dontshowagain">
                            <div className="form-group BDsubmitbutton m-0 d-flex">
                                <div className="buttonDistribotion justify-content-start">
                                    <button
                                        type="button"
                                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                                        onClick={() => close()}
                                    >
                                        <i className="fa-solid fa-xmark"></i> Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default CourseProgressPopup;
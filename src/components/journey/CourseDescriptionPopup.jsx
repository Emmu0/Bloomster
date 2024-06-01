import React from "react";
import { useState } from "react";
import * as image from "../../resources/images";

const CourseDescriptionPopup = ({ data, handleCourseInfoData }) => {
    return (
        <div className="newinfo_popupdimension">
            <div className="modal show d-flex" role="dialog">
                <div className="modal-dialog modal-lg skillmodalpopup">
                    <div className="modal-content courseInformation">
                        <div className="modal-header">
                            <div className="heading border-0 p-0 w-100">
                                <h2 className="flex">
                                    <span>
                                        <img src={image.mortarboard} className="mr-2" />
                                        {data?.name}
                                    </span>
                                    <button className="btn btn-primary" onClick={() => handleCourseInfoData(false, [])}>
                                        <i className="fa-regular fa-xmark m-0"></i>
                                    </button>
                                </h2>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="infopopup_wrap  align-items-start">
                                <div className="infopopupright align-items-start pb-2">
                                    <div className="WelcomScreen">
                                        <div className="welcomscreenContent welcomscreentwo ">

                                            <div className="w-40 pr-3 courseimageskilldesc">
                                                <img src={data?.imageUrl} />
                                            </div>

                                            <div className="w-100  pb-0 coursedescstyl">
                                                <p>{data.description}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer dontshowagain">
                            <div className="form-group BDsubmitbutton m-0 d-flex">
                                <div className="buttonDistribotion">
                                    <button
                                        type="button"
                                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                                        onClick={() => handleCourseInfoData(false, [])}
                                    >
                                        <i className="fa-solid fa-xmark"></i> Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CourseDescriptionPopup;

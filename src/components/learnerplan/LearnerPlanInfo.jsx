import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
const LearnerPlanInfo = ({ closePopup }) => {
    const { modalData } = useSelector((state) => state.collections);
    return (
        <div className="sharepopup AreyousurePopup areyousurenewpopup">
            <div className="modal d-flex" id="schoolactivity164" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content courseInformation schoolcourse">
                        {/* <div className="modal-header">
                            <div className="heading p-0 border-0 w-100">
                                <h2 className="flex">
                                    <span className="flex">
                                        {" "}
                                        <img src={modalData?.icon} alt="" className="mr-2" />
                                        {modalData?.title}
                                    </span>
                                    <button className="btn btn-primary" data-dismiss="modal" onClick={() => closePopup()}>
                                        <i className="fa-regular fa-xmark m-0"></i>
                                    </button>
                                </h2>
                            </div>
                        </div> */}

                        <div className="modal-body   p-5  mx-3">
                            <div class="ScenecerelateddQuiz sharewithfrnd  p-0">
                            <h3><img src={image.Powericon} className="mr-3"  alt=""/> {modalData?.title}</h3>
                                <p className="mb-3 pb-2 pt-2 mt-3 text-left">{modalData?.message}</p>
                            </div>
                            <div className="buttonDistribotion justify-content-center">
                                    <button
                                        type="button"
                                        className="btn-blue btn-login d-block mb-5 cancelbutton w-auto "
                                        onClick={() => closePopup()}
                                    >
                                        Close
                                    </button>
                        </div>
                          

                               
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default LearnerPlanInfo;
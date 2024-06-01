import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized } from "../../utils/helper";
import { PATHS } from "../../utils";
import { resetResponse, showModal } from "../../redux/actions";
import { NavLink } from "react-bootstrap";
const LearnerPlanRedirectionPopUp = ({ handleRedirectPopUp }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { defaultChildData } = useSelector((state) => state.collections);

    const redirectToHome = () => {
        dispatch(showModal({ type: "DimensionHintPopup" }));
        dispatch(resetResponse());
        history.push({
            pathname: PATHS.HOME,
            //  state: { showGuidePopUp: true }
        });
    }
    return (
        <div className="sharepopup  AreyousurePopup areyousurenewpopup welcome_new_poup">
            <div className="modal  show d-flex" id="schoolactivity161" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content courseInformation schoolcourse ">
                        <div className="modal-body p-5 pb-3 mx-3">
                            <div className="sharewithfrnd ">
                                <h3 className="text-center">Welcome to Bloomster!</h3>
                                <p className="mb-3 pb-2 pt-2 mt-3 text-left" >
                                    Let's get started by building a learning plan for {getCapitalized(defaultChildData?.firstName)}. We will walk you through this process in the next few screens.
                                    starting with a recommended plan on the right side of your screen.
                                </p>
                                <p className="mb-3 pb-2 ">
                                    This only takes a few minutes and plans can be changed at any time.
                                </p>

                                <div className="buttonDistribotion justify-content-center flex-wrap mt-3">
                                   
                                    <button
                                        type="button"
                                        className="btn-blue btn-login d-block mb-5 w-auto"
                                        onClick={() => handleRedirectPopUp(false)}
                                    >Create a Learning Plan</button>
                                     <p onClick={() => redirectToHome()} className="pointer w-100 text-decoration-underline text-center  skipfornow">Skip for Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LearnerPlanRedirectionPopUp;
/** @format */

import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, useHistory } from "../../utils/Packages";
import { showModal } from "../../redux/actions";
import { PATHS } from "../../utils";
import { pilotUserDataPostAPI } from "../../redux/actions/FeedbackAPIs";
const PilotUserThanks = (pilotUser) => {
  const [isPilotUserValid, setIsPilotUserValid] = useState(
    pilotUser.pilotUser.isValid
  );
  const history = useHistory();
  const pilotUserSignUpLink =
    PATHS.LANDINGPAGE +
    "?pilotverification=" +
    pilotUser.pilotUser.verificationCode;
  const dispatch = useDispatch();
  const hidePilotUser = () => {
    dispatch(pilotUserDataPostAPI());
    dispatch(showModal());
  };
  const redirectOnSignUP = () =>{
    history.push(PATHS.LANDINGPAGE +
      "?pilotverification=" +
      pilotUser.pilotUser.verificationCode);
  }
  return (
    <>
      <Modal show={true} className="AddChildPopup">
        <Modal.Header>
          <div className="modal-title flex h4">
            <span>
              {" "}
              <img src={image.upcomminguser} alt="" className="" /> Access
              Request Confirmation
            </span>
          </div>
          <Button data-dismiss="modal" onClick={() => hidePilotUser()}>
            <i className="fa-regular fa-xmark m-0"></i>
          </Button>
        </Modal.Header>
        <div className="modal-body addChildProf Subject_Curriculam Thanksmessage ">
          <div className="EnrollTitle flex pt-4">
            
            <div className="LessionDtlOverview">
              {!isPilotUserValid ? (
                <p>
                  Thank you for requesting access for my beta. I’ll revert back
                  with next steps soon.
                </p>
              ) : (
                <p>
                  Your access code has been verified. Click below to complete your sign up.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="modal-footer ">
        
          <div className="form-group BDsubmitbutton d-flex m-0 fsignupBtn">
          {isPilotUserValid ? (
            <button
              onClick={() => redirectOnSignUP()}
              type="button"
              className="btn-blue btn-login d-block mb-5 m-0 ml-auto"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>{" "} 
              Complete Your Sign Up
            </button>
            ) : (
              <button
                  onClick={() => hidePilotUser()}
                  type="button"
                  className="btn-blue btn-login d-block mb-5 cancelbutton m-0  ml-auto"
                >
                  <i className="fa-solid fa-xmark mr-2"></i> Close
                </button>
            )}
          </div>
        
        </div>
      </Modal>
    </>
  );
};

export default PilotUserThanks;

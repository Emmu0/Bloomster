/** @format */

import React from "react";
import { Modal } from "../../utils/Packages";
import * as image from "../../resources/images";
import { useDispatch } from "react-redux";
import { PATHS } from "../../utils";

const TimeOutModal = () => {
  const dispatch = useDispatch();

  const close = () => {localStorage.removeItem("access_token");
    window.location.assign(PATHS.LANDINGPAGE);
  };
  return (
    <Modal
      id="common-modal"
      size="lg"
      centered={true}
      show={true}
      className="AddChildPopup sessionTimeOut"
    >
      <Modal.Header className={`sessiontimeouthdr`}>
        <div className="heading border-0 p-0 w-100">
          <h2 className="flex">
            <span>
              <img src={image.sessiontimer} alt="" className="mr-2" />
              Session Timeout
            </span>
            <button className="btn btn-primary" onClick={() => close()}>
              <i className="fa-regular fa-xmark m-0"></i>
            </button>
          </h2> 
        </div>{" "}
      </Modal.Header>
      <Modal.Body className="">
        <div className="sessionTimeoutt Thanksmessage ">
          <div className="EnrollTitle  pt-4 mt-4">
            
            <div className="popupboxstyl">
              <p>Your session has expired. Please sign in again.</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <div className="form-group BDsubmitbutton d-flex m-0 priceWrap p-0">
          <button
            type="button"
            className="btn-blue btn-login d-block mb-5 m-0 ml-auto"
            onClick={() => close()}
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>Sign In
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default TimeOutModal;

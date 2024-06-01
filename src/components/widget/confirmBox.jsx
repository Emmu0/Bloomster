import React from "react";
import * as image from "../../resources/images";

const ConfirmBox = () => {
  return (
    <div className="halfPagePOpup HolisticProgress EnrollcConfimation">
      <div
        className="modal d-flex"
        id="schoolactivity14"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body p-0 pb-3">
              <div className="flex p-3 flex-wrap">
                <div className="Poupleftimage">
                  <img src={image.vickylearingbnr} alt="..." />
                </div>
                <div className="popuprightmsg flex flex-wrap">
                  <div>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                    <h3 className="mb-3">Enroll your course now</h3>
                    <p> You will be redirected on course link</p>
                  </div>
                  <div className="form-group BDsubmitbutton d-flex">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5  cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i>Cancel
                      </button>
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                      >
                        <i className="fa-solid fa-paper-plane"></i> Ok
                      </button>
                    </div>
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

export default ConfirmBox;

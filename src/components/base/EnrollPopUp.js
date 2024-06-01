import React, { useEffect } from "react";
import * as image from "../../resources/images";
import { enrollLearner, turnNotification } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";
import { swal } from "../../utils/Packages";
import { resetEnrollResponse } from "../../redux/actions";

import Modal from "react-bootstrap/Modal";

const EnrollPopUp = ({ courseEnrollDetail, close }) => {
  const dispatch = useDispatch();

  const { getSelectedUser, enrollResponse } = useSelector(
    (state) => state.collections
  );
  const { courseLink, courseId } = courseEnrollDetail;

  useEffect(() => {
    if (enrollResponse?.success && courseLink && courseLink !== "") {
      window.open(courseLink, "_blank");
      dispatch(resetEnrollResponse());
    } else if (enrollResponse && !enrollResponse?.success) {
      new swal({
        title: "Enroll Failed!",
        timer: 2000,
        text: "failed.",
        type: "Error",
      });
      dispatch(resetEnrollResponse());
    }
  }, [enrollResponse, courseLink]);

  const _onSubmit = () => {
    dispatch(enrollLearner(getSelectedUser?.id, courseId));
    dispatch(turnNotification(true));
    setTimeout(() => {
      close();
    }, 1000);
    // dispatch(turnNotification(true));
  };

  return (
    <Modal
      id="common-modal"
      size="lg"
      centered={true}
      show={true}
      className="courseInformation"
      onHide={() => close()}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header className={`hoosrSubModlPopup p-0`}>
        <div className="heading w-100 border-0">
          <h2>
            {" "}
            {/* Choose Your Subject: */}
            <button
              type="button"
              className="close close-icon"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close()}
            >
              <i className="fa-regular fa-xmark m-0"></i>
            </button>
          </h2>
        </div>
      </Modal.Header>

      <Modal.Body className="fullWidthPopup forlikepopup p-0">
        <div className="d-flex ">
          <div className="flex p-3 flex-wrap">
            <div className="Poupleftimage">
              <img src={image.vickylearingbnr} alt="..." />
            </div>
            <div className="popuprightmsg flex flex-wrap">
              <div>
                <h3 className="mb-3">Enroll your course now</h3>
                <p> You will be redirected on course link</p>
              </div>
            </div>
          </div>
          {/* <div className="modal-body mt40 likesignup p-0">
            <form
              name="addchildform"
              className="bg-white p content"
              onSubmit={handleSubmit(_onSubmit)}
            >
              <div className="modal-body Subject_Curriculam">
                <ul className="SlecteSub">
                  {data &&
                    data.map((vl, ky) => (
                      <li key={ky}>
                        <div className="signupType m-0">
                          <label className="Selcheckbox" htmlFor={vl?.name}>
                            <input
                              {...register("subject", { required: true })}
                              type="radio"
                              value={vl?.name}
                              id={vl?.name}
                            />

                            <span className="checkmark"></span>
                            <span> {vl?.name}</span>
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </form>
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer p-0 pl-3 pr-3">
        <div className="form-group BDsubmitbutton d-flex mt-2 mb-2">
          <button
            type="button"
            className="btn-blue btn-login d-block mb-5 cancelbutton"
            onClick={() => close()}
          >
            <i className="fa-solid fa-xmark"></i>Cancel
          </button>
          <button
            type="button"
            onClick={() => _onSubmit()}
            className="btn-blue btn-login d-block mb-5"
          >
            <i className="fa-solid fa-paper-plane"></i> Ok
          </button>
          {/* <button
            type="submit"
            className="btn-blue btn-login d-block mb-5 ml-auto"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>Submit
          </button> */}
        </div>
      </Modal.Footer>
    </Modal>

    // <div className="halfPagePOpup HolisticProgress EnrollcConfimation">
    //   <div
    //     className="modal d-flex"
    //     id="schoolactivity14"
    //     role="dialog"
    //     aria-labelledby="exampleModalCenterTitle"
    //     aria-hidden="true"
    //   >
    //     <div className="modal-dialog modal-lg">
    //       <div className="modal-content">
    //         <div className="modal-body p-0 pb-3">
    //           <div className="flex p-3 flex-wrap">
    //             <div className="Poupleftimage">
    //               <img src={image.vickylearingbnr} alt="..." />
    //             </div>
    //             <div className="popuprightmsg flex flex-wrap">
    //               <div>
    //                 <button
    //                   type="button"
    //                   className="close"
    //                   data-dismiss="modal"
    //                   onClick={() => close()}
    //                 >
    //                   &times;
    //                 </button>
    //                 <h3 className="mb-3">Enroll your course now</h3>
    //                 <p> You will be redirected on course link</p>
    //               </div>
    //               <div className="form-group BDsubmitbutton d-flex">
    //                 <div className="buttonDistribotion">
    //                   <button
    //                     type="button"
    //                     className="btn-blue btn-login d-block mb-5 mr-3 cancelbutton"
    //                     onClick={() => close()}
    //                   >
    //                     <i className="fa-solid fa-xmark"></i>Cancel
    //                   </button>
    //                   <button
    //                     type="button"
    //                     onClick={() => _onSubmit()}
    //                     className="btn-blue btn-login d-block mb-5 mr-3"
    //                   >
    //                     <i className="fa-solid fa-paper-plane"></i> Ok
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default EnrollPopUp;

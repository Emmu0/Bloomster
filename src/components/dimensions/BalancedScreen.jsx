import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import InfoModal from "../controls/InfoModal";
import {
  showModal,
  resetResponse,
  resetEmailResponse,
} from "../../redux/actions";
import { getDimensionData } from "../../redux/actions/APIs";
import { BALANCED, CUSTOMIZED } from "../../utils/DataObjects";
import * as image from "../../resources/images";
import { Modal } from "../../utils/Packages";
import { PATHS } from "../../utils";

const BalancedScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { alluserdetails, addLearner, getdimension, signupresponse } =
    useSelector((state) => state.collections);

  const [newUserId, setNewUserId] = useState("");
  const [initialData, setInitialData] = useState(undefined);

  let userData = alluserdetails?.records[0];

  useEffect(() => {
    if (addLearner?.success) {
      setNewUserId(addLearner?.recordId);
      let newChild = userData?.children.filter(
        (data) => data.id === addLearner?.recordId
      );

      setInitialData(newChild[0]);
    } else if (signupresponse?.success) {
      setNewUserId(signupresponse?.records[0].childId);
    }
  }, [addLearner, alluserdetails, signupresponse]);

  const showModalBox = (obj) => {
    dispatch(showModal(obj));
    setTimeout(() => {
      hideShowModalBox();
    }, 3000);
  };

  const hideShowModalBox = () => {
    dispatch(showModal());
    dispatch(getDimensionData(newUserId));
    if (addLearner?.success) {
      dispatch(resetResponse());
      dispatch(resetEmailResponse());

      history.push(
        PATHS.DIMENSION_STR + getdimension?.records[3]?.id + "/" + newUserId
      );
    } else {
      dispatch(resetEmailResponse());
      dispatch(resetResponse());
      // history.push(PATHS.HOME);
      history.push(
        PATHS.DIMENSION_STR + getdimension?.records[3]?.id + "/" + newUserId
      );
    }
  };

  return (
    <>
      <Modal
        className="Custom_balanceprofile SelectYourProfile"
        show={true}
        backdrop="static"
        keyboard={false}
        onHide={() => dispatch(showModal())}
      >
        <Modal.Header className="pt-0 pb-0">
          <div className="modal-title flex h4 w-100">
            <div className="NuggetPopupTitle border-0 w-100 p-0 flex">
              <div className="NuggetVickyImage d-flex align-items-center">
                <img src={image.Robovicky} alt="" className="mr-2" />
                <h4> Starting Profile</h4>
              </div>{" "}
            </div>
            {/* <i className="fa-solid fa-id-card mr-2 fontawsomeicon"></i> */}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div className="signupType m-0 flex-wrap">
                <label className="Selcheckbox">
                  <span>
                    Balanced <InfoModal data={BALANCED} />
                  </span>
                  <span className="d-block">(Recommended)</span>
                  <input
                    type="radio"
                    id="Public"
                    name="Question"
                    value="PUBLIC"
                    checked={true}
                  ></input>
                  <span className="checkmark"></span>
                </label>
                <label className="Selcheckbox border-0">
                  <span>
                    {" "}
                    Customize <InfoModal data={CUSTOMIZED} />
                  </span>
                  <span className="d-block course" style={{ color: "#3ec093" }}>
                    (Coming Soon...)
                  </span>
                  <input
                    type="radio"
                    id="Private"
                    name="Question"
                    value="PRIVATE"
                    disabled={true}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5 ml-auto"
              onClick={() => showModalBox({ type: "Loading" })}
              // onClick={() => handleContinue()}
            >
              Continue <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
    // <div className="SelectYourProfile">
    //   <div className="modal d-flex" id="schoolactivity18" role="dialog">
    //     <div className="modal-dialog modal-lg">
    //       <div className="modal-content">
    //         <div className="modal-body p-0 ">
    //           <div className="signupType m-0">
    //             <label className="Selcheckbox">
    //               <span>
    //                 Balanced Starting Profile <InfoModal data={"Hello"} />
    //               </span>
    //               <span className="d-block">(Recommended)</span>
    //               <input
    //                 type="radio"
    //                 id="Public"
    //                 name="Question"
    //                 value="PUBLIC"
    //                 checked={true}
    //               ></input>
    //               <span className="checkmark"></span>
    //             </label>
    //             <label className="Selcheckbox">
    //               <span>
    //                 {" "}
    //                 Customize Starting Profile <InfoModal data={"Hello"} />
    //               </span>
    //               <span className="d-block course" style={{ color: "#3ec093" }}>
    //                 (...Coming Soon)
    //               </span>
    //               <input
    //                 type="radio"
    //                 id="Private"
    //                 name="Question"
    //                 value="PRIVATE"
    //                 disabled={true}
    //               ></input>
    //               <span className="checkmark"></span>
    //             </label>
    //           </div>
    //         </div>

    //         <div className="modal-footer p-0 pl-3 pr-3">
    //           <div className="form-group BDsubmitbutton d-flex mt-2 mb-2">
    //             <button
    //               type="button"
    //               className="btn-blue btn-login d-block mb-5 ml-auto"
    //               onClick={() => handleContinue()}
    //             >
    //               Continue <i className="fa-solid fa-arrow-right ml-2"></i>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BalancedScreen;

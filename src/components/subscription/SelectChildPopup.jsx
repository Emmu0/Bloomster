import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChilModal } from "../../redux/actions";
import { getCapitalized } from "../../utils/helper";

const SelectChildPopup = ({}) => {
  const dispatch = useDispatch();
  const { alluserdetails, selectChildObj } = useSelector(
    (state) => state.collections
  );

  const [selectedChild, setSelectedChild] = useState(null);
  const [submitLoader, setSubmitLoader] = useState(false);

  let userObj = alluserdetails.records[0];
  let children = userObj?.children;

  const handleChildSelection = (childIndex) => {
    setSelectedChild(childIndex);
  };

  const chooseChild = () => {
    return (
      <div className="ScenecerelateddQuiz p-0 border-0">
        <div className="signupType rangetypeQuestion textAreatypeQuestion mb-2">
          <h4 className="mb-2 d-flex">
            Select the child to take the subscription for:
          </h4>
          {children.map((child, index) => (
            <label className="Selcheckbox align-items-start" key={index}>
              {getCapitalized(child.name)}
              <input
                type="radio"
                onChange={() => handleChildSelection(child)}
                id={`option${index}`}
                name="option"
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="downgradepopup">
      <div className="modal d-flex show" style={{ zIndex: "999999999" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex w-100">
                  <span>
                    <i className="fa-solid fa-ballot-check mr-2"></i>
                    Select Child
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => dispatch(selectChilModal())}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>
            <div className="modal-body pt-1">
              <div className="subscriptioncardwrap feeAnalysispopup">
                {chooseChild()}
              </div>
            </div>
            <div className="modal-footer">
              <div className="form-group BDsubmitbutton d-flex m-0">
                <div className="buttonDistribotion">
                  <div className="buttonDistribotion">
                    {submitLoader ? (
                      <button
                        className="btn-blue btn-login d-block mb-5 "
                        disabled
                        key={Math.random()}
                      >
                        <span className="RounAnimation"></span> Please Wait...
                      </button>
                    ) : (
                      <>
                        {" "}
                        <button
                          onClick={() => dispatch(selectChilModal())}
                          type="button"
                          className="btn-blue btn-login d-block mb-5 cancelbutton"
                        >
                          <i className="fa-solid fa-xmark"></i> Cancel
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              selectChilModal({
                                selectedOption: selectChildObj,
                                selectedChildId: selectedChild,
                              })
                            )
                          }
                          type="button"
                          disabled={!selectedChild ? true : false}
                          className="btn-blue btn-login d-block mb-5"
                        >
                          <i className="fa-solid fa-paper-plane mr-2"></i>
                          Confirm
                        </button>
                      </>
                    )}
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

export default SelectChildPopup;

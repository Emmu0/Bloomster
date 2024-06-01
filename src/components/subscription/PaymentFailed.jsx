import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  billingPlan,
  downGradeUser,
  resetPaymentError,
} from "../../redux/actions";
import * as image from "../../resources/images";
import { PATHS } from "../../utils";
import { useEffect } from "react";
import { SITEURL } from "../../utils/Messages";

const PaymentFailed = ({ close, handleCloseSelect, handleOpen }) => {
  const { paymentFailure } = useSelector((state) => state.collections);

  const dispatch = useDispatch();
  const history = useHistory();

  const _resetClose = () => {
    dispatch(resetPaymentError());
    dispatch(billingPlan());
    dispatch(downGradeUser());
    close();
  };

  const _back = () => {
    handleOpen();
    // handleCloseSelect("preview");
  };
  return (
    <div className="modal-content courseInformation">
      <div className="modal-header">
        <div className="heading p-0 border-0">
          <h2 className="flex">
            {" "}
            <span>
              <img src={image.subscription} className="mr-2" />
              Subscription: Error{" "}
            </span>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={() => _resetClose()}
            >
              <i className="fa-regular fa-xmark m-0"></i>
            </button>
          </h2>
        </div>
      </div>
      <div className="modal-body Subject_Curriculam d-flex justify-content-center align-items-center  ">
        <div className="bodyTitle  mb-3">
          <div className="subtitleHeadinhg flex justify-content-center">
            <div className="bodyimagetitle flex">
              <div className="d-flex w-100 text-center">
                <span className="w-100 top_head mb-0">
                  <span className="subscription_error">
                    {" "}
                    <img src={image.subscription_error} />
                  </span>

                  {typeof paymentFailure === "string" &&
                  paymentFailure === "paymentFailure" ? (
                    <h2 className="text-center">
                      {" "}
                      Oops! It looks like there's an issue with your payment
                      information.
                      <br />
                      Please go back and make sure everything is entered
                      correctly.
                      <br />
                      <br />
                      <span>
                        {" "}
                        If you have been charged incorrectly, you can contact us
                        at{" "}
                        <a href="mailto:support@bloomster.com">
                          support@{SITEURL.urlName}
                        </a>
                        .
                      </span>{" "}
                    </h2>
                  ) : (
                    <h2 className="text-center">
                      {" "}
                      Oops! It looks like something went wrong.
                      <br />
                      <br />
                      <span>
                        If you have been charged incorrectly, you can contact us
                        at{" "}
                        <a href="mailto:support@Bloomster.com">
                          support@{SITEURL.urlName}
                        </a>
                        .
                      </span>
                    </h2>
                  )}

                  {/* <p>Some Fields are incorrect </p>
                  <button
                    type="button"
                    onClick={() => _redirect()}
                    className="btn-blue btn-login d-block mt-3 m-auto w-auto left_auto"
                  >
                    <i className="fa-regular fa-house mr-2"></i> Go to Home
                  </button> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="form-group BDsubmitbutton d-flex m-0">
          <div className="buttonDistribotion">
            <div className="buttonDistribotion">
              <button
                type="button"
                onClick={() => _back()}
                className="btn-blue btn-login d-block mb-5"
              >
                <i className="fa-solid fa-arrow-left"></i> Back
              </button>
              <button
                type="button"
                data-dismiss="modal"
                onClick={() => _resetClose()}
                className="btn-blue btn-login d-block mb-5 cancelbutton"
              >
                <i className="fa-solid fa-xmark"></i>Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentFailed;

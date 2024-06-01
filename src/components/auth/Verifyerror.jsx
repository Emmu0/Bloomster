/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/actions";
import * as image from "../../resources/images";
import WebLayout from "../layout/WebLayout";
const VerifyError = () => {
  const dispatch = useDispatch();

  const showModalBox = (obj) => {
    dispatch(showModal(obj));
  };
  return (
    <div>
      <WebLayout className="outerPagesHeader">
        <div>
          <div className="Successpage text-center">
            <h3 className=" mb-3">
              You have already<span className="greencolo"> completed </span>{" "}
              your sign up.
              <br />
              Please click the button below to sign in.
            </h3>

            <div className="Successimsge flex  m-auto">
              <div className="w-25 m-auto">
                <img src={image.verifyaccount} alt="..." />
              </div>
            </div>
            <div className="ErrorDescription w-100 my-3">
              <a href={"#"} onClick={() => showModalBox({ type: "SignIn" })}>
                <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>Sign In
              </a>
            </div>
          </div>
        </div>
      </WebLayout>
    </div>
  );
};

export default VerifyError;

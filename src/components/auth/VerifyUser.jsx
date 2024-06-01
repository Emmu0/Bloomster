/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { showModal } from "../../redux/actions";

import { getVerifyUser } from "../../redux/actions/APIs";
import * as image from "../../resources/images";
import WebLayout from "../layout/WebLayout";
import { PATHS } from "../../utils";
import { Link, useHistory } from "react-router-dom";

const VerifyUser = () => {
  const history = useHistory();
  const { verifyUserData, responseError, verifyErr, modalData } = useSelector(
    (state) => state.collections
  );

  const params = useParams();
  const dispatch = useDispatch();
  const [viewHtml, setViewHtml] = useState("");
  useEffect(() => {
    if (params?.token && !verifyErr) {
      dispatch(getVerifyUser(params?.token));
    }
  }, [!verifyErr]);
  useEffect(() => {
    if (responseError) {
      setViewHtml("error");
    }
  }, [responseError]);
  useEffect(() => {
    if (verifyUserData) {
      setViewHtml("success");
    }
  }, [verifyUserData]);

  const showModalBox = (obj) => {
    if (obj.type === "SignIn") {
      history.push(PATHS.USERSIGNIN);
    } else {
      dispatch(showModal(obj));
    }
  };

  return (
    <div>
      <WebLayout className="outerPagesHeader">
        {viewHtml === "error" && (
          <div>
            <div className="Successpage text-center">
              <h3 className=" mb-3">
                You have already <span className="greencolo">verified</span>{" "}
                your account.
                <br /> Please click the button below to proceed.
              </h3>

              <div className="Successimsge flex  m-auto">
                <div className="w-25 m-auto">
                  <img src={image.verifyaccount} alt="..." />
                </div>
              </div>

              {localStorage.getItem("access_token") ? (
                <div className="ErrorDescription w-100">
                  <Link
                    to={PATHS.HOME}
                    onClick={() => showModalBox({ type: "SignIn" })}
                  >
                    <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>
                    Go to Home
                  </Link>
                </div>
              ) : (
                <div className="ErrorDescription w-100">
                  <a
                    href={"#"}
                    onClick={() => showModalBox({ type: "SignIn" })}
                  >
                    <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>
                    Sign In
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
        {viewHtml === "success" && (
          <>
            <div className="Successpage text-center">
              <h3 className=" mb-3">
                Your account has been verified{" "}
                <span className="greencolo">successfully</span>. <br /> Please
                click the button below to sign in.
              </h3>
              <div className="Successimsge flex m-auto">
                <div className="w-25 m-auto">
                  <img src={image.verifyaccount} alt="..." />
                </div>
              </div>
              {/* <div className="ErrorDescription w-100">
                <a href={"#"} onClick={() => showModalBox({ type: "SignIn" })}>
                  <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>Sign
                  In
                </a>
              </div> */}
              {localStorage.getItem("access_token") ? (
                <div className="ErrorDescription w-100">
                  <Link to={PATHS.HOME}>
                    <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>
                    Go to Home
                  </Link>
                </div>
              ) : (
                <div className="ErrorDescription w-100">
                  <a
                    href={"#"}
                    onClick={() => showModalBox({ type: "SignIn" })}
                  >
                    <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>
                    Sign In
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </WebLayout>
    </div>
  );
};

export default VerifyUser;

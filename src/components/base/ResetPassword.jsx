/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useForm, yupResolver, Yup } from "../../utils/Packages";
import { PATHS, TOAST_TIMER } from "../../utils";

import { useParams, useHistory } from "react-router-dom";
import { resetPassword } from "../../redux/actions/APIs";
import { resetPasswordRes } from "../../redux/actions";
import Topbar from "./Topbar";
import { Heading } from "../profile";
import * as image from "../../resources/images";

import {
  SPECIAL_CHAR,
  GET_LOWER_CASE,
  GET_UPPER_CASE,
  GET_NUMBER,
} from "../../utils/Regex";
import { MSG } from "../../utils/Messages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "../notifications/Error";
import Success from "../notifications/Success";
import { ShimmerContentBlock } from "react-shimmer-effects";

const ResetPassword = () => {
  let history = useHistory();

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required(MSG.NEWPASSREQ)
      .matches(RegExp("(.*[a-z].*)"), MSG.STRNGPWD)
      .matches(RegExp("(.*[A-Z].*)"), MSG.STRNGPWD)
      .matches(RegExp("(.*\\d.*)"), MSG.STRNGPWD)
      .matches(RegExp('[!@#$%^&*(),.?":{}|<>_]'), MSG.STRNGPWD)
      .min(8, "Password Length must be 8 characters or more."),
    confirmPassword: Yup.string()
      .required(MSG.CPASSREQ)
      .oneOf([Yup.ref("newPassword")], "Passwords do not match"),
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState,
    setError,
    clearErrors,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;
  const { error, resetResponse } = useSelector((state) => state.collections);
  const [type, setType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");

  const dispatch = useDispatch();
  const params = useParams();
  const [eightState, getEightState] = useState(false);
  const [specialCharState, getSpecialCharState] = useState(false);
  const [upperCaseComplexity, getUpperCaseComplexity] = useState(false);
  const [lowerCaseComplexity, getLowerCaseComplexity] = useState(false);
  const [numberComplexity, getNumberComplexity] = useState(false);

  const [passwordComplexity, setPasswordComplexity] = useState(false);
  const [resetLoader, setResetLoader] = useState(false);

  useEffect(() => {
    if (params?.token) {
      dispatch(resetPassword({}, params.token));
      if (error && error.match("expired")) {
        setResetLoader(false);
        history.push(PATHS.VERIFYRESET);
      }
    }
  }, [error]);

  useEffect(() => {
    if (error) {
      setResetLoader(false);
    }
  }, [error]);

  useEffect(() => {
    if (resetResponse?.success === true) {
      toast.info(<Success response={resetResponse} />);

      setTimeout(() => {
        setResetLoader(false);
        history.push(PATHS.LANDINGPAGE);
        dispatch(resetPasswordRes());
      }, 5000);
    }
  }, [resetResponse]);

  const _onSubmit = (values) => {
    if (getValues("newPassword") !== getValues("confirmPassword")) {
      return false;
    }

    let data = {
      newPassword: values?.newPassword,
    };

    setResetLoader(true);
    dispatch(resetPassword(data, params.token));
  };

  const toggleShow = () => {
    setType(type === "text" ? "password" : "text");
  };

  const confirmPasswordShow = () => {
    setConfirmType(confirmType === "text" ? "password" : "text");
  };

  const typePassword = (flag) => {
    if (flag === "New Password") {
      let item = document.getElementById("newPassword").value;

      if (item.length == 0) {
        setError("newPassword", {
          type: "custom",
          message: MSG.NEWPASSREQ,
        });
      } else if (item.length >= 8) {
        getEightState(true);
        clearErrors("newPassword");
      } else if (item.length < 8) {
        setError("newPassword", {
          type: "custom",
          message: MSG.STRNGPWD,
        });
        getEightState(false);
        setPasswordComplexity(true);
      }

      // if (item.length >= 8) {
      //   getEightState(true);
      // } else {
      //   getEightState(false);
      // }
      if (SPECIAL_CHAR.test(item)) {
        getSpecialCharState(true);
      } else {
        setPasswordComplexity(true);
        getSpecialCharState(false);
      }

      if (GET_LOWER_CASE.test(item)) {
        getLowerCaseComplexity(true);
      } else {
        setPasswordComplexity(true);
        getLowerCaseComplexity(false);
      }

      if (GET_UPPER_CASE.test(item)) {
        getUpperCaseComplexity(true);
      } else {
        setPasswordComplexity(true);
        getUpperCaseComplexity(false);
      }
      if (GET_NUMBER.test(item)) {
        getNumberComplexity(true);
      } else {
        setPasswordComplexity(true);
        getNumberComplexity(false);
      }

      if (getValues("confirmPassword") === "") {
      } else if (item !== getValues("confirmPassword")) {
        setError("confirmPassword", {
          type: "custom",
          message: MSG.PWDNOTMTCH,
        });
      } else if (
        getValues("confirmPassword") !== "" &&
        item === getValues("confirmPassword")
      ) {
        clearErrors("confirmPassword");
      }
    }
  };

  // const checkPassword = () => {
  //   setRandom(Math.random());
  // };

  useEffect(() => {
    if (error && !error?.match("expired")) {
      toast.error(<Error error={error} />, {
        position: "top-center",
        autoClose: TOAST_TIMER,
      });
    }
    setTimeout(() => {
      dispatch(resetPasswordRes());
    }, 5000);
  }, [error]);

  const resetForm = () => {
    getEightState(false);
    getSpecialCharState(false);
    getUpperCaseComplexity(false);
    getLowerCaseComplexity(false);
    getNumberComplexity(false);
    reset();
  };

  return (
    <>
      <div className="reserpasswordhedaer">
        <Topbar />

        <div className="Main">
          <div className="MainContent resetPassword">
            <div className="LeftbarPannel m-auto p-0 ">
              <Heading title={"Reset Password"} icon={image.changepassword} />

              <div className="PannelContent basicdetailsform px-5">
                <div className="wrapper changepasword">
                  <div className="Accountrelated">
                    <form
                      name="forgotpassword"
                      className="bg-white content"
                      onSubmit={handleSubmit(_onSubmit)}
                    >
                      <div className="input-group" key="password">
                        <label htmlFor="newPassword">
                          New Password
                          <span className="mandatoryField">*</span>
                        </label>
                        <div className=" mb15 " key={type}>
                          <div className="">
                            <span
                              htmlFor="newPassword"
                              className="form-label PasswordeyeIcon"
                              onClick={() => toggleShow()}
                            >
                              <i
                                className={`fa-solid ${
                                  type === "password"
                                    ? "fa-eye-slash"
                                    : "fa-eye"
                                } `}
                              ></i>
                            </span>

                            <input
                              {...register("newPassword", {
                                required: {
                                  value: true,
                                  message: MSG.PASSREQ,
                                },
                              })}
                              type={type}
                              id="newPassword"
                              onChange={() => typePassword("New Password")}
                              className={`form-control ${
                                errors.newPassword && "is-invalid"
                              }`}
                            />
                          </div>
                        </div>
                        {errors.newPassword && (
                          <p className="text-danger">
                            {errors.newPassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="input-group" key="confirmPassword">
                        <label htmlFor="confirmpassword">
                          Confirm Password
                          <span className="mandatoryField">*</span>
                        </label>
                        <div className=" mb15 " key={confirmType}>
                          <div className="">
                            <span
                              htmlFor="confirmPassword"
                              className="form-label PasswordeyeIcon"
                            >
                              {getValues("confirmPassword") !== "" &&
                                getValues("confirmPassword") !== undefined &&
                                (getValues("newPassword") ===
                                getValues("confirmPassword") ? (
                                  <span>
                                    <i className="fa-solid fa-check text-success" />
                                  </span>
                                ) : (
                                  <span>
                                    <i className="fa-solid fa-xmark text-danger" />
                                  </span>
                                ))}
                            </span>
                            <input
                              {...register("confirmPassword", {
                                onBlur: (e) => {
                                  confirmPasswordShow("password");
                                },
                                required: {
                                  value: true,
                                  message: MSG.CPASSREQ,
                                },
                                validate: (val) => {
                                  if (watch("newPassword") != val) {
                                    return MSG.PWDNOTMTCH;
                                  }
                                },
                              })}
                              className={`form-control ${
                                errors.confirmPassword ? "is-invalid" : ""
                              }`}
                              type={"password"}
                              id={"confirmPassword"}
                            />
                          </div>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-danger">
                            {errors.confirmPassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="input-group full-width basic_details_form changepasswordbutns">
                        <div className="form-group BDsubmitbutton d-flex">
                          {!resetLoader && (
                            <button
                              type="button"
                              onClick={() => resetForm()}
                              className="btn-blue btn-login d-block mb-5 cancelbutton"
                            >
                              <i className="fa-solid fa-xmark"></i> Cancel
                            </button>
                          )}
                          {resetLoader ? (
                            <button
                              type="button"
                              className="btn-blue btn-login d-block mb-5 changepasswordbtn left_auto"
                              key={Math.random()}
                              disabled
                            >
                              <span className="RounAnimation mr-1"></span>
                              Please Wait...
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn-blue btn-login d-block mb-5 changepasswordbtn"
                            >
                              <i className="fa-regular fa-circle-check"></i>
                              Reset Password
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
                    <div className="PasswordIntruction">
                      <h4>Password must use:</h4>
                      <ul className="list-group">
                        <li
                          className={`list-group-item bg-light d-flex ${
                            eightState && "text-success"
                          }`}
                        >
                          {eightState ? (
                            <span className="check"></span>
                          ) : (
                            <div>
                              <i className="fa fa-minus-circle circleIcon" />
                            </div>
                          )}{" "}
                          {MSG.EIGHTCHAR}
                        </li>

                        <li
                          className={`list-group-item bg-light d-flex ${
                            upperCaseComplexity && lowerCaseComplexity
                              ? "text-success"
                              : ""
                          }`}
                        >
                          {upperCaseComplexity && lowerCaseComplexity ? (
                            <span className="check"></span>
                          ) : (
                            <div>
                              <i className="fa fa-minus-circle circleIcon" />
                            </div>
                          )}
                          {MSG.UPPRLWRCHAR}
                        </li>
                        <li
                          className={`list-group-item bg-light d-flex ${
                            numberComplexity ? "text-success" : ""
                          }`}
                        >
                          {numberComplexity ? (
                            <span className="check"></span>
                          ) : (
                            <div>
                              <i className="fa fa-minus-circle circleIcon" />
                            </div>
                          )}
                          {MSG.ONENUM}
                        </li>

                        <li
                          className={`list-group-item bg-light d-flex ${
                            specialCharState ? "text-success" : ""
                          }`}
                        >
                          {specialCharState ? (
                            <span className="check"></span>
                          ) : (
                            <div>
                              <i className="fa fa-minus-circle circleIcon" />
                            </div>
                          )}
                          {MSG.SPCLCHAR}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

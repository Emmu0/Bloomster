/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, yupResolver, Yup } from "../../utils/Packages";

import Home from "../Home";
import * as image from "../../resources/images";
import { Profile, Heading } from "./";
import { changePassword } from "../../redux/actions/APIs";
import { breadcrumb, isLoading } from "../../redux/actions";
import {
  SPECIAL_CHAR,
  GET_LOWER_CASE,
  GET_UPPER_CASE,
  GET_NUMBER,
} from "../../utils/Regex";
import { MSG } from "../../utils/Messages";

const ChangePassword = () => {
  const { getSelectedUser, loading, response, error } = useSelector(
    (state) => state.collections
  );
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required(MSG.OLDPASSREQ),
    newPassword: Yup.string()
      .required(MSG.NEWPASSREQ)
      .matches(RegExp("(.*[a-z].*)"), MSG.STRNGPWD)
      .matches(RegExp("(.*[A-Z].*)"), MSG.STRNGPWD)
      .matches(RegExp("(.*\\d.*)"), MSG.STRNGPWD)
      .matches(RegExp('[!@#$%^&*(),.?":{}|<>_]'), MSG.STRNGPWD)
      .min(8, "Password Length must be 8 characters or more"),
    confirmPassword: Yup.string()
      .required(MSG.CPASSREQ)
      .oneOf([Yup.ref("newPassword")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
    clearErrors,
    setError,
    watch,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;
  let dispatch = useDispatch();
  const [eightState, getEightState] = useState(false);
  const [specialCharState, getSpecialCharState] = useState(false);
  const [upperCaseComplexity, getUpperCaseComplexity] = useState(false);
  const [lowerCaseComplexity, getLowerCaseComplexity] = useState(false);
  const [numberComplexity, getNumberComplexity] = useState(false);

  const [pass, confirmPassShow] = useState("");
  const [passwordComplexity, setPasswordComplexity] = useState(false);
  const [enrollLoader, setEnrollLoader] = useState(false);
  const [samePass, setSamePass] = useState(false);

  useEffect(() => {
    reset();
  }, [getSelectedUser?.id]);

  useEffect(() => {
    dispatch(
      breadcrumb({ title: "Change Password", icon: image.changepassword })
    );
  }, [getSelectedUser]);

  useEffect(() => {
    if (response?.success || error) {
      setEnrollLoader(false);
    }
  }, [response, error]);

  const _onSubmit = (value, e) => {
    if (passwordComplexity) {
      setError("newPassword", {
        type: "custom",
        message: MSG.STRNGPWD,
      });
      return false;
    }

    if (samePass) {
      setError("newPassword", {
        type: "custom",
        message: MSG.MATCH_PASS,
      });
      return false;
    }

    setEnrollLoader(true);

    let formData = {
      oldPassword: value.currentPassword,
      newPassword: value.newPassword,
    };
    dispatch(changePassword(formData, getSelectedUser.id));
    getEightState(false);
    getSpecialCharState(false);
    getUpperCaseComplexity(false);
    getLowerCaseComplexity(false);
    getNumberComplexity(false);
    reset();
  };

  const resetForm = () => {
    getEightState(false);
    getSpecialCharState(false);
    getUpperCaseComplexity(false);
    getLowerCaseComplexity(false);
    getNumberComplexity(false);
    reset();
  };

  const [type, setType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");

  const toggleShow = () => {
    setType(type === "text" ? "password" : "text");
  };
  const confirmPasswordShow = () => {
    setConfirmType(confirmType === "text" ? "password" : "text");
  };

  const [icon, setIcon] = useState("");

  const handleConfirm = (e) => {
    item = e.target.value;
    if (getValues("newPassword") === item) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };
  const typePassword = (flag) => {
    setPasswordComplexity(false);
    if (flag === "New Password") {
      let item = document.getElementById("newPassword").value;

      if (item.length == 0) {
        setError("newPassword", { type: "custom", message: MSG.NEWPASSREQ });
      } else if (item.length >= 8) {
        getEightState(true);
        // clearErrors(["newPassword"]);
      } else if (item.length < 8) {
        getEightState(false);
        setError("newPassword", { type: "custom", message: MSG.EIGHTCHAR });
        setPasswordComplexity(true);
      }

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

      if (item === getValues("currentPassword")) {
        // setPasswordComplexity(true);
        setError("newPassword", { type: "custom", message: MSG.MATCH_PASS });
        setSamePass(true);
      } else if (item !== getValues("currentPassword")) {
        setSamePass(false);
        clearErrors("newPassword");
      }

      // if (item === getValues("confirmPassword") && item.length >= 8 ) {
      //   clearErrors("confirmPassword");
      //   setSamePass(false);
      // } else {
      //   // setPasswordComplexity(true);
      //   // setSamePass(true);
      //   setError("confirmPassword", {
      //     type: "custom",
      //     message: MSG.PWDNOTMTCH,
      //   });
      // }

      if (getValues("confirmPassword") === "") {
        // setError("confirmPassword", {
        //   type: "custom",
        //   message: MSG.CPASSREQ,
        // });
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
        setSamePass(false);
      }
    }
  };

  const handleOldPassword = (e) => {
    let item = e.target?.value;

    if (item === getValues("newPassword") && getValues("newPassword") !== "") {
      // setPasswordComplexity(true);
      setSamePass(true);
      setError("newPassword", { type: "custom", message: MSG.MATCH_PASS });
      // clearErrors("currentPassword")
    } else if (
      item !== getValues("newPassword") &&
      getValues("newPassword") !== ""
    ) {
      setSamePass(false);
      clearErrors("newPassword");
    } else {
      clearErrors("currentPassword");
      // clearErrors("newPassword");
    }
  };

  return (
    <Home>
      <div className="LeftbarPannel p-0" id="changePassword">
        <div className="PannelContent basicdetailsform px-5">
          <div className="wrapper changepasword">
            <div className="Accountrelated">
              <form
                name="changepasswordform"
                className="bg-white content"
                onSubmit={handleSubmit(_onSubmit)}
              >
                <div className="input-group">
                  <label>
                    Current Password<span className="mandatoryField">*</span>
                  </label>
                  <div>
                    <input
                      type="password"
                      {...register("currentPassword")}
                      className={`form-control ${
                        errors.currentPassword && "is-invalid"
                      }`}
                      onChange={handleOldPassword}
                      list="browsers"
                      autoComplete="off"
                    />
                  </div>

                  {errors.currentPassword && (
                    <p className="text-danger">
                      {errors.currentPassword?.message}
                    </p>
                  )}
                </div>
                <div className="input-group" key="password">
                  <label htmlFor="newPassword">
                    New Password<span className="mandatoryField">*</span>
                  </label>
                  <div className=" mb15 " key={type}>
                    <div className="">
                      <span
                        htmlFor="password"
                        className="form-label PasswordeyeIcon"
                        onClick={() => toggleShow()}
                      >
                        <i
                          className={`fa-solid ${
                            type === "password" ? "fa-eye-slash" : "fa-eye"
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
                    <p className="text-danger">{errors.newPassword?.message}</p>
                  )}
                </div>
                <div className="input-group" key="confirmPassword">
                  <label htmlFor="confirmpassword">
                    Confirm Password<span className="mandatoryField">*</span>
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
                          required: true,
                        })}
                        type={"password"}
                        id={"confirmPassword"}
                        className={`form-control ${
                          errors.confirmPassword && "is-invalid"
                        }`}
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
                   {!enrollLoader &&  <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 cancelbutton ml-auto"
                      onClick={() => resetForm()}
                    >
                      <i className="fa-solid fa-xmark"></i> Cancel
                    </button>}

                    {enrollLoader ? (
                      <button
                        className="btn-blue btn-login d-block mb-5 changepasswordbtn left_auto"
                        key={Math.random()}
                        disabled
                      >
                        <span className="RounAnimation mr-1"></span> Please
                        Wait...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 changepasswordbtn"
                      >
                        <i className="fa-regular fa-circle-check"></i>
                        Change Password
                      </button>
                    )}
                  </div>
                </div>
              </form>
              <div className="PasswordIntruction">
                <h4>Password must use:</h4>
                <ul className="list-group">
                  <li className={`list-group-item bg-light d-flex`}>
                    {eightState ? (
                      <span className="check"></span>
                    ) : (
                      <div>
                        <i className="fa fa-minus-circle circleIcon" />
                      </div>
                    )}{" "}
                    {MSG.EIGHTCHAR}
                  </li>

                  <li className={`list-group-item bg-light d-flex`}>
                    {upperCaseComplexity && lowerCaseComplexity ? (
                      <span className="check"></span>
                    ) : (
                      <div>
                        <i className="fa fa-minus-circle circleIcon" />
                      </div>
                    )}
                    {MSG.UPPRLWRCHAR}
                  </li>

                  <li className={`list-group-item bg-light d-flex`}>
                    {numberComplexity ? (
                      <span className="check"></span>
                    ) : (
                      <div>
                        <i className="fa fa-minus-circle circleIcon" />
                      </div>
                    )}
                    {MSG.ONENUM}
                  </li>

                  <li className={`list-group-item bg-light d-flex`}>
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
      <Profile />
    </Home>
  );
};

export default ChangePassword;

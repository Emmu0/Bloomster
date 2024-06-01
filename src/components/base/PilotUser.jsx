/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { SelectPickerVal } from "../../utils/helper";
import { MSG } from "../../utils/Messages";
import {
  useForm,
  Controller,
  SelectPicker,
  Modal,
  Button,
} from "../../utils/Packages";
import { EMAIL_REGEX, NAME_REGEX } from "../../utils/Regex";
import { getState } from "../../redux/actions/APIs";
import { showModal } from "../../redux/actions";
import { pilotUserDataPostAPI } from "../../redux/actions/FeedbackAPIs";
import { Select } from "antd";
const PilotUser = () => {
  const [countryid, setCountryid] = useState(
    "07e0880a-9504-4a4b-96e3-aad9a450670f"
  );
  const { getstate } = useSelector((state) => state.collections);
  const { pilotUserDataResponse } = useSelector((state) => state.feedback);

  const countryId = countryid;
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  useEffect(() => {
    dispatch(getState(countryId));
  }, []);

  useEffect(() => {
    if (pilotUserDataResponse && pilotUserDataResponse?.records.length > 0) {
      dispatch(
        showModal({
          type: "ThanksPilotUser",
          pilotUser: pilotUserDataResponse.records[0],
        })
      );
    }
  }, [pilotUserDataResponse]);

  const hidePilotUser = () => {
    dispatch(showModal());
  };
  const [enrollLoader, setEnrollLoader] = useState(false);
  useEffect(() => {
    setEnrollLoader(false);
  }, []);
  const _onSubmit = (values) => {
    setEnrollLoader(true);
    dispatch(pilotUserDataPostAPI(values));
  };

  return (
    <>
      <div
        className="fade SignupPopup AddChildPopup modal show d-block invite_frnd"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <div className="modal-title flex h4">
                  <img src={image.upcomminguser} alt="" className="" />
                  Request Access for Beta
                </div>
                <button
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => hidePilotUser()}
                >
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </div>
              <div>
                <form
                  name="freesignin"
                  className="bg-white content"
                  onSubmit={handleSubmit(_onSubmit)}
                >
                  <div className="modal-body p-0">
                    <div className="modal-body addChildProf Subject_Curriculam">
                      <div className="EnrollTitle flex">
                        {/* <div className="NuggetVickyImage">
                          <img
                            src={image.Robovicky_right_half}
                            className="mr-3"
                            alt=""
                          />
                        </div> */}
                        <div className="LessionDtlOverview knwyourself">
                          <p>{MSG.PILOTLAUNCH}</p>
                        </div>
                      </div>
                      <div className="wrapper mt-3">
                        <div className="input-group">
                          <label htmlFor="">
                            Parent First Name
                            <span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <input
                              type="text"
                              className={`form-control ${
                                errors.firstname ? "is-invalid" : ""
                              }`}
                              {...register("firstname", {
                                required: {
                                  value: true,
                                  message: MSG.FNAMEREQ,
                                },
                                pattern: {
                                  value: NAME_REGEX,
                                  message: "First name " + MSG.ALPHAREQ,
                                },
                                maxLength: {
                                  value: 15,
                                  message: MSG.MAX15CHREQ,
                                },
                              })}
                            />
                            <div className="invalid-feedback">
                              {errors?.firstname?.message}
                            </div>
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="">
                            Parent Last Name
                            <span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <input
                              type="text"
                              className={`form-control ${
                                errors.lastname ? "is-invalid" : ""
                              }`}
                              {...register("lastname", {
                                required: {
                                  value: true,
                                  message: MSG.LNAMEREQ,
                                },
                                pattern: {
                                  value: NAME_REGEX,
                                  message: "Last name " + MSG.ALPHAREQ,
                                },
                                maxLength: {
                                  value: 15,
                                  message: MSG.MAX15CHREQ,
                                },
                              })}
                            />
                            <div className="invalid-feedback">
                              {errors?.lastname?.message}
                            </div>
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="">
                            Parent Email/Username
                            <span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <input
                              type="text"
                              className={`form-control ${
                                errors.username ? "is-invalid" : ""
                              }`}
                              {...register("username", {
                                required: {
                                  value: true,
                                  message: MSG.EMAILREQ,
                                },
                                pattern: {
                                  value: EMAIL_REGEX,
                                  message: MSG.INVEMAILREQ,
                                },
                              })}
                            />
                            <div className="invalid-feedback">
                              {errors?.username?.message}
                            </div>
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="">
                            State<span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <Controller
                              {...register("state", {
                                required: true,
                              })}
                              control={control}
                              render={({ field: { onChange, value } }) => {
                                onChange = (event) => {
                                  setValue("state", event);
                                  clearErrors("state");
                                };
                                return (
                                  <Select
                                    style={{ width: 120 }}
                                    showSearch
                                    placeholder="Select a State"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    filterOption={(input, option) => {
                                      return (
                                        option.props.children
                                          .toLowerCase()
                                          .indexOf(input.toLowerCase()) === 0
                                      );
                                    }}
                                  >
                                    {getstate?.records &&
                                      SelectPickerVal(
                                        getstate?.records,
                                        "label"
                                      ).map((vl, ky) => (
                                        <Option key={ky} value={vl.value}>
                                          {vl.label}
                                        </Option>
                                      ))}
                                  </Select>
                                );
                              }}
                            />
                            {errors.state && (
                              <p className="invalid-feedback">{MSG.STATEREQ}</p>
                            )}
                          </div>
                        </div>
                        <div className="input-group">
                          <label htmlFor="">Access Code</label>
                          <div className="form-group">
                            <input
                              type="text"
                              className={`form-control ${
                                errors.accesscode ? "is-invalid" : ""
                              }`}
                              {...register("accesscode")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer w-100">
                      <div className="form-group BDsubmitbutton d-flex m-0 ">
                        <div className="buttonDistribotion">
                          {enrollLoader ? (
                            <button
                              className="btn-blue btn-login d-block ml-0 w-auto"
                              key={Math.random()}
                              disabled
                            >
                              <span className="RounAnimation mr-1"></span>{" "}
                              Please Wait...
                            </button>
                          ) : (
                            <>
                              <button
                                type="button"
                                className="btn-blue btn-login d-block mb-5 cancelbutton ml-auto"
                                onClick={() => hidePilotUser()}
                              >
                                <i className="fa-solid fa-xmark mr-2"></i>{" "}
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="btn-blue btn-login d-block ml-0 w-auto"
                              >
                                <i className="fa-solid fa-paper-plane mr-2"></i>
                                Submit
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* { isThanks &&
          <PilotUserThanks hidePilotUser={hidePilotUser}/>
        } */}
    </>
  );
};

export default PilotUser;

/** @format */

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as image from "../../resources/images";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import { MSG } from "../../utils/Messages";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/Regex";
import { helpFormData } from "../../redux/actions/FeedbackAPIs";
const Anythingelse = () => {
  const dispatch = useDispatch();
  const [successState, setSuccessState] = useState(false);
  const [plsWait, setplsWait] = useState();
  const { register, handleSubmit, setValue, formState, reset } = useForm({
    mode: "onTouched",
  });
  const { errors } = formState;

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "Anything Else?",
      })
    );
  }, []);

  const _onSubmit = (values) => {
    setplsWait(true);
    setTimeout(()=>{
      dispatch(helpFormData(values));
      reset();
      setSuccessState(true,  setplsWait(undefined));
    }, 1000)
  };

  return (
    <Home>
      <div className="LeftbarPannel p-0" id="create_login">
        <div className="PannelContent basicdetailsform  px-5">
          {!successState ? (
            <div className="wrapper flex">
              <div className="w-60">
                <h2>How can we help?</h2>
                <p>Please provide details below</p>

                <form
                  name="usersignup"
                  className="content"
                  onSubmit={handleSubmit(_onSubmit)}
                >
                  <div className="flex align-items-start query_style">
                    <div className="input-group  w-100">
                      <label>
                        Name<span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          {...register("name", {
                            required: {
                              value: true,
                              message: MSG.REQNAME,
                            },
                            pattern: {
                              value: NAME_REGEX,
                              message: "Name" + MSG.ALPHAREQ,
                            },
                            maxLength: {
                              value: 15,
                              message: MSG.MAX15CHREQ,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex align-items-start query_style w-100">
                    <div className="input-group  w-100">
                      <label>
                        Email<span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            required: {
                              value: true,
                              message: MSG.REQEMAIL,
                            },
                            pattern: {
                              value: EMAIL_REGEX,
                              message: MSG.INVEMAILREQ,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.email?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex align-items-start query_style w-100">
                    <div className="input-group  w-100">
                      <label>
                        I need help with
                        <span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group">
                        <textarea
                          placeholder="Let us know how we can help..."
                          className={`form-control text-rows ${
                            errors.description ? "is-invalid" : ""
                          }`}
                          cols="64"
                          {...register("description", {
                            required: {
                              value: true,
                              message:
                                "Please enter details of your help request",
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.description?.message}
                        </div>
                      </div>
                      {plsWait ? 
                      (  
                      <div className="anythingels_btn w-100">

                        <button
                        className="anythingels_btn btn-login mt-3 plswait"
                        key={Math.random()}
                        disabled
                      >
                        <span className="RounAnimation mr-1"></span>{" "}
                        Please Wait...
                      </button>
                      </div>
                    ) : (
                         <button
                         type="submit"
                         className="anythingels_btn btn-login mt-3 w-25"
                       >
                         <i className="fa-solid fa-paper-plane ml-1"></i>{" "}
                         Submit
                       </button>
                      )
                      }
                    </div>
                  </div>
                </form>
              </div>
                
            </div>
          ) : (
            <div className="anything_succes text-center">
              <h2> Thank you for filling out the help form!</h2>
              <p>
                I have received your help request and will do my best to respond
                at the earliest.
              </p>
              <div className="Successimsge flex w-60 m-auto">
             {/* <div className="w-40">
                <img src={image.vicky_logo_LP} alt="" className="robovicky" />
                </div> */}
                <div className="w-100">
                <img src={image.The_Shopify_Thank_You_Page} alt="..." />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <HelpSection />
    </Home>
  );
};
export default Anythingelse;

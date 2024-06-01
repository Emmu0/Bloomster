/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useForm } from "../../utils/Packages";
import { showModal, getPathName } from "../../redux/actions";
import { MSG, SITEFNAME } from "../../utils/Messages";
import { EMAIL_REGEX, CHAR_REGEX, NAME_REGEX } from "../../utils/Regex";
import { getSubscriberFormData } from "../../redux/actions/APIs";

const SubscriberForm = ({ locationState }) => {
  const location = useLocation();
  const { subscribResponseData, getPath } = useSelector(
    (state) => state.collections
  );

  const [subsMsg, setSubsMsg] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const dispatch = useDispatch();
  const showModalBox = (obj) => {
    dispatch(showModal(obj));
  };

  const _onSubmit = (values) => {
    let formData = {
      name: values?.name,
      email: values?.email,
      isUnsubscribed: false,
    };

    dispatch(getSubscriberFormData(formData));

    dispatch(getPathName(location.pathname));
  };
  // useEffect(() => {
  //   if (subscribResponseData?.success) {
  //     reset();
  //     dispatch(getSubscriberFormData());

  //     if(location.pathname.includes(["providerflow"]) || location.pathname.includes(["blog"])){
  //       setSubsMsg(false);
  //     }
  //     else if(location.pathname.includes(["/"])){
  //       setSubsMsg(true);
  //     }
  //   }
  // }, [subscribResponseData]);

  return (
    <section className="subscribe_style">
      <div className="container">
        {getPath === locationState && subscribResponseData?.success ? (
          <div className="subscribe_box_style">
            <h4>
              Thank you for <span>subscribing!</span>
            </h4>
            <h2>
              {" "}
              Welcome to <span>{SITEFNAME.NAME}’s </span>tribe!
            </h2>
            <p>
              We look forward to sharing inspiration, resources and news on
              helping your children thrive in a rapidly changing world.
            </p>
          </div>
        ) : subscribResponseData?.success ? (
          ""
        ) : (
          <>
            <div className="subscribe_box_style mt-3">
              <h2>
                <span>Subscribe </span>to Our Newsletter
              </h2>
              <p>
                Get inspiration, resources, and updates on holistic growth for
                your child delivered straight to your inbox.{" "}
                <span onClick={() => showModalBox({ type: "SignUp" })}>
                  Click here
                </span>{" "}
                to sign up.
              </p>
            </div>
            <form
              className="subscribe_box_style1 d-flex align-items-start justify-content-between"
              onSubmit={handleSubmit(_onSubmit)}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
                <div className="invalid-feedback">{errors?.name?.message}</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
                <div className="invalid-feedback">{errors?.email?.message}</div>
              </div>

              <button type="submit" key={Math.random()}>
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default SubscriberForm;

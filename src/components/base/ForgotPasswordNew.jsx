/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Modal, Button, toast } from "../../utils/Packages";
import { forgotPassword } from "../../redux/actions/APIs";
import { EMAIL_REGEX } from "../../utils/Regex";
import {
  isLoading,
  resetGuestResponse,
  showModal,
  resetLoginResponseFailure,
} from "../../redux/actions";
import { MSG } from "../../utils/Messages";
import Success from "../notifications/Success";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading, loginResponseError, forgotResponse } = useSelector(
    (state) => state.collections
  );

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onTouched",
  });
  const { errors } = formState;

  useEffect(() => {
    dispatch(resetLoginResponseFailure());
  }, []);

  const _onSubmit = (value) => {
    dispatch(isLoading(true));
    dispatch(forgotPassword(value));
  };

  useEffect(() => {
    if (forgotResponse && forgotResponse?.success) {
      reset();
      toast.info(<Success response={forgotResponse} />);

      dispatch(isLoading(false));
      dispatch(resetGuestResponse());
      dispatch(showModal());
    }
  }, [forgotResponse]);

  useEffect(() => {
    if (loginResponseError) {
      dispatch(isLoading(false));
    }
  }, [loginResponseError]);

  const handleChange = () => {
    dispatch(resetLoginResponseFailure());
  };

  return (
    <>
      <Modal show={true}>
        <div id="signin">
          <form
            name="forgotpassword"
            className="bg-white content"
            onSubmit={handleSubmit(_onSubmit)}
          >
            <Modal.Body className="pt-0 px-0">
              <Modal.Header>
                <div className="heading flex p-0 border-0 w-100">
                  <h2>
                    <i className="fa-solid fa-id-card mr-2 fontawsomeicon"></i>
                    Forgot My Password
                  </h2>{" "}
                  <Button
                    data-dismiss="modal"
                    onClick={() => dispatch(showModal())}
                  >
                    <i className="fa-solid fa-xmark m-0"></i>
                  </Button>
                </div>
              </Modal.Header>
              <div className="wrapper mx-auto signin_box_styl">
                <div className="input-group">
                  <label>
                    Email/Username
                    <span className="mandatoryField">*</span>
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.username ? "is-invalid" : ""
                      }`}
                      {...register("username", {
                        onChange: (e) => handleChange(e),
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
                      {errors.username?.message}
                    </div>
                  </div>
                </div>
                {loginResponseError && (
                  <p className="text-danger">{loginResponseError}</p>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="form-group BDsubmitbutton flex m-0">
                {!loading && (
                  <button
                    disabled={loading ? true : false}
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton ml-auto"
                    onClick={() => dispatch(showModal())}
                  >
                    <i className="fa-solid fa-xmark mr-2"></i> Cancel
                  </button>
                )}

                {loading ? (
                  <button
                    className="btn-blue btn-login d-block mb-5 ml-auto left_auto"
                    disabled
                    key={Math.random()}
                  >
                    <span className="RounAnimation mr-1"></span> Please Wait...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block mb-5 "
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i> Send Link
                  </button>
                )}
              </div>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPassword;

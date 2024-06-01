import React, { useState, useEffect } from "react";
import { useForm } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { toast } from "react-toastify";
import Success from "../notifications/Success";
import * as image from "../../resources/images";
import {
  userSignin,
  socialLogin,
  getAllUsersDetail,
  varificationEmail,
} from "../../redux/actions/APIs";
import { showModal, resetLoginResponseFailure } from "../../redux/actions";
import WebLayout from "../layout/WebLayout";
import { EMAIL_REGEX } from "../../utils/Regex";
import { MSG } from "../../utils/Messages";
import { Modal, Button } from "../../utils/Packages";
import { PATHS } from "../../utils";
import {
  Link,
  NavLink,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Topbar from "./Topbar";
import Footer from "../layout/Footer";
import SecHeader from "./SecHeader";
import ForgotPassword from "./ForgotPasswordNew";

const SignInPG = () => {
  const {
    loginResponseError,
    signinresponse,
    alluserdetails,
    isAuth,
    modalData,
    emailResponse,
  } = useSelector((state) => state.collections);

  const { register, handleSubmit, setValue, formState, clearErrors, getValues } = useForm({
    mode: "onTouched",
  });

  const { errors } = formState;
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const [isAutofilled, setIsAutofilled] = useState(false);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch(resetLoginResponseFailure());
  }, []);

  useEffect(() => {
    if (signinresponse) {
      setLoader(false);
    }
  }, [signinresponse, loader]);

  useEffect(() => {
    if (signinresponse && alluserdetails) {
      if (alluserdetails?.records[0].children.length > 0) {
        let childObj = alluserdetails?.records[0].children;
        history.push(PATHS.COURSEPAGE_STR + childObj[0]?.id);
      } else if (alluserdetails?.record[0].role.name === "LEARNER") {
        history.push(PATHS.COURSEPAGE_STR + alluserdetails?.record[0]?.id);
      }
    }
  }, [signinresponse, alluserdetails]);

  useEffect(() => {
    if (loginResponseError) {
      setLoader(false);
      // dispatch(isLoading(false));
    }
  }, [loginResponseError]);

  const handleChecked = (e) => {
    console.log(e.target.checked, "checked");
  };

  useEffect(() => {
    if (
      localStorage.getItem("username") !== "" &&
      localStorage.getItem("checkbox")
    ) {
      setValue("username", localStorage.getItem("username"));
    }
  }, []);

  const _onSubmit = (values) => {
    if (loginResponseError) {
      dispatch(resetLoginResponseFailure());
    }
    const rmCheck = document.getElementById("rememberMe"),
      emailInput = document.getElementById("username");
    if (rmCheck.checked && emailInput.value !== "") {
      localStorage.setItem("username", emailInput.value);
      localStorage.setItem("checkbox", rmCheck.value);
    } else {
      localStorage.setItem("username", "");
      localStorage.setItem("checkbox", "");
    }
    setLoader(true);
    dispatch(userSignin(values));
    if (!alluserdetails && isAuth) {
      dispatch(getAllUsersDetail());
    }
  };

  const showHide = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const _socialLogin = (response) => {
    if (response.profileObj !== undefined) {
      let data = {
        jwt: response.tokenId !== undefined ? response.tokenId : "",
      };
      setLoader(true);
      dispatch(socialLogin(data)).then(() => { });
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_SOCIAL_GOOGLE_KEY,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const hideSign = () => {
    dispatch(showModal());
    history.push(PATHS.LANDINGPAGE);
  };

  const handleChangeEmail = () => {
    clearErrors("username");
    dispatch(resetLoginResponseFailure());
  };

  const handleChange = (e) => {
    setIsAutofilled("password", e.target.value);
    clearErrors("password");
    dispatch(resetLoginResponseFailure());
  };

  const handlePasswordRemove = () => {
    setIsAutofilled("password", "");
    clearErrors("password");
    dispatch(resetLoginResponseFailure());
  };
  const _forgotPassword = () => {
    dispatch(resetLoginResponseFailure());
    dispatch(showModal({ type: "forgotPassword" }));
  };

  //verify user tost message 13 May 2024
  useEffect(() => {
    if (emailResponse && emailResponse?.success) {
      toast.info(<Success response={emailResponse} />, {});
    }
  }, [emailResponse]);

  //verify user name API 13 May 2024
  const varifyEmail = (userName) => {
    dispatch(varificationEmail(userName));
  };

  return (
    <div>
      {/* <WebLayout className="outerPagesHeader"> */}
      <div className="hubSpotthemeSec signin_pg">
        <SecHeader />
        <div className="outerPagesHeader">
          <div show={true} className="AddChildPopup verifyusereffect">
            <div className="modal-dialog flex">
              <div className="modal-content w-100">
                <div id="signin" className="Sign_in Signinnewformat">
                  {/* <Modal.Header> */}
                  {/* <div className="modal-title flex h4">
                    <img src={image.Signinicon} alt="" className="mr-2" />
                    Sign In{" "}
                  </div> */}
                  {/* <Button data-dismiss="modal" onClick={() => hideSign()}>
              <i className="fa-regular fa-xmark m-0"></i>
            </Button> */}
                  {/* </Modal.Header> */}
                  <div className="signin_uptitle">
                    <h2>Sign In</h2>
                  </div>
                  <div className="wrapper mx-auto signin_box_styl">
                    <form
                      name="freesignin"
                      className="bg-white content"
                      onSubmit={handleSubmit(_onSubmit)}
                    >
                      <Modal.Body className='pt-0 px-0'>
                        {loginResponseError && (
                          <p className='text-danger'>
                            {loginResponseError}
                            <a
                              href='#'
                              className='ps-1 verifyaccount'
                              onClick={() =>
                                varifyEmail(getValues("username"))
                              }>
                              Resend Verification Email
                            </a>
                          </p>
                        )}
                        <div className='input-group'>
                          <label>
                            Email/Username
                            <span className='mandatoryField'>*</span>
                          </label>
                          <div className='form-group'>
                            <input
                              type='text'
                              // placeholder="Email/Username"
                              className={`form-control ${errors.username ? "is-invalid" : ""
                                }`}
                              id='username'
                              {...register("username", {
                                onChange: (e) => handleChangeEmail(e),
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
                            <div className='invalid-feedback'>
                              {errors.username?.message}
                            </div>
                          </div>
                        </div>
                        <div className='input-group position-relative'>
                          <label>
                            Password<span className='mandatoryField'>*</span>
                          </label>
                          <div className='form-group'>
                            <input
                              className={`form-control ${errors.password ? "is-invalid" : ""
                                }`}
                              {...register("password", {
                                onChange: (e) => handleChange(e),
                                required: {
                                  value: true,
                                  message: MSG.PASSREQ,
                                },
                              })}
                              type={type}
                              id={"password"}
                              name='password'
                              autoComplete={
                                isAutofilled ? "off" : "new-password"
                              }
                              onBlur={() => handlePasswordRemove()}
                            />
                            <div className='invalid-feedback'>
                              {errors.password?.message}
                            </div>
                          </div>
                          <div onClick={() => showHide()}>
                            {type === "password" ? (
                              <span className='PasswordeyeIcon'>
                                <i className='fa-solid fa-eye-slash'></i>
                              </span>
                            ) : (
                              <p>
                                <span className='PasswordeyeIcon'>
                                  <i className='fa-solid fa-eye'></i>
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                        <p className='pb-4 mb-0 forgot-pass flex mb-0'>
                          <label htmlFor='rememberMe' className='rembrme'>
                            <input
                              type='checkbox'
                              className='mr-2'
                              id='rememberMe'
                              onChange={handleChecked}
                            />
                            <span className=''> Remember Me</span>
                          </label>

                          <span
                            onClick={() => _forgotPassword()}
                            className='forgot_password pointer'>
                            {" "}
                            Forgot Password?
                          </span>
                        </p>
                      </Modal.Body>

                      <div className=' w-75 p-0 m-auto'>
                        {loader ? (
                          <button
                            type='button'
                            className='btn-blue btn-login d-block'
                            key={Math.random()}
                            disabled>
                            <span className='RounAnimation mr-1'></span> Please
                            Wait...
                          </button>
                        ) : (
                          <button
                            type='submit'
                            className='btn-blue btn-login d-block '>
                            {/* <i className="fa-solid fa-paper-plane mr-2"></i> */}
                            Sign In
                          </button>
                        )}

                        <h2 className='h1 text-center m-minus-15 orbutton'>
                          <span className='bg-white'>or</span>
                        </h2>

                        <div className='text-center '>
                          <GoogleLogin
                            clientId={process.env.REACT_APP_SOCIAL_GOOGLE_KEY}
                            className={`mb-5 w-100 text-center justify-content-center`}
                            buttonText='Sign in with Google'
                            onSuccess={_socialLogin}
                            onFailure={_socialLogin}
                            cookiePolicy={"single_host_origin"}
                          />
                        </div>
                      </div>
                      <p className='text-center signinsignupline mb-3'>
                        Don't have an account?{" "}
                        <NavLink to={PATHS.USERSIGNUP}> Sign Up</NavLink> now
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="rightside_Signup w-50">
								
								<div className="bloomster_Heighlighter signin_heighlighter flextwo">
									<img src={image.bannerimg} />
								</div>
							</div> */}
            </div>
          </div>
        </div>
        <div className='hubspotFooter'>
          <div className='container-fluid footer-dnd-area2 footer__container content-wrapper'>
            <div className='hubPrimaryFooter'>
              <div className='flex align-items-start'>
                <div className='logoFooter'>
                  <img src={image.vicky_logo_LP} />
                  <div className='seocialiconlist'>
                    <ul>
                      <li>
                        <a
                          href='https://www.facebook.com/bloomsterlearning'
                          target='_blank'>
                          <i className='fa-brands fa-facebook'></i>
                        </a>
                        <a
                          href='https://www.instagram.com/bloomsterlearning'
                          target='_blank'>
                          <i className='fa-brands fa-square-instagram'></i>
                        </a>
                        {/* added by alfaiz on 19-04-2024 */}
                        <a
                          href='https://tiktok.com/@bloomsterlearning'
                          target='_blank'>
                          <i className='fa-brands fa-tiktok'></i>
                        </a>
                        <a
                          href='https://www.linkedin.com/company/bloomsterlearning'
                          target='_blank'>
                          <i className='fa-brands fa-linkedin'></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='FooterAddInfo'>
                  <h3>
                    <NavLink to={PATHS.USERSIGNUP}>
                      {" "}
                      Sign Up for Bloomster today!
                    </NavLink>
                  </h3>
                  <p>
                    411 S Melville Ave., Tampa, FL 33606
                    <br />
                    <a href='mailto:contact@bloomster.com'>
                      contact@bloomster.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='hubsecondryFoorer flex'>
              <div className='hubSeccopyright'>
                <p>© 2024 Balanced Tech Inc. All Rights Reserved.</p>
              </div>

              <div className='ourpolicyandters'>
                <ul>
                  <li>
                    <a
                      href={`https://bloomster.com/termsandprivacypolicy`}
                      target='_blank'>
                      Terms of Use{" "}
                    </a>{" "}
                    |{" "}
                  </li>{" "}
                  <li>
                    <a
                      href={`https://bloomster.com/termsandprivacypolicy`}
                      target='_blank'>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </WebLayout> */}
      {modalData?.type === "forgotPassword" && <ForgotPassword />}
    </div>
  );
};

export default SignInPG;

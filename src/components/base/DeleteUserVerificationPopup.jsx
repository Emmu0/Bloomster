import React, { useEffect, useState } from "react";
import { useForm, yupResolver, Yup, Modal, Button } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import {
    getAllUsersDetail,
    getDimensions,
    settingVerify,
    userAuthenticate,
    userDelete,
    userSignin,
} from "../../redux/actions/APIs";
import {
    isLoading,
    parentLoginAction,
    childLogin,
    resetLoginResponseFailure,
    showModal,
    resetResponse,
    enrollmentPopup,
    parentToolsModal,
    showModalObj,
    dimStore,
    setCourseModal,
    resetLoginResponse,
} from "../../redux/actions";
import { ModalFooter, NavLink } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { MSG } from "../../utils/Messages";
const DeleteUserVerificationPopup = ({ close, data }) => {
    const formSchema = Yup.object().shape({
        password: Yup.string().required(MSG.PASSREQ),
    });

    const formOptions = { resolver: yupResolver(formSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    const {
        loggedInUser,
        loginResponseError,
        getdimension,
        alluserdetails,
        validateUser,
        parentLogin,
        setting_responseOK,
        isAuth,
        modalObj,
        modalData,
        enrollmentObj,
        signinresponse,
        userAuthResponse,
        response
    } = useSelector((state) => state.collections);
    const dispatch = useDispatch();
    const [type, setType] = useState("password");
    const history = useHistory();
    const [enrollLoader, setEnrollLoader] = useState(false);
    const [isToastShown, setIsToastShown] = useState(false);
    const [msgResponse, setMsgResponse] = useState();
    const [massageResponse, setMassageResponse] = useState();
    const [isAutofilled, setIsAutofilled] = useState(false);
    const [userData, setUserData] = useState(false);


    useEffect(() => {
        if (loginResponseError) {
            if (loginResponseError === "You have entered an incorrect Email/Username or Password") {
                setMsgResponse("You have entered an incorrect password");
            }
            else {
                setMassageResponse(loginResponseError);
            }
        }


    }, [loginResponseError]);


    useEffect(() => {
        if (userAuthResponse?.success && data) {
            data.confirmPassword = userData?.password
            dispatch(userDelete(data));
            dispatch(resetLoginResponse());
        }
    }, [userAuthResponse])

    useEffect(() => {
        if (response) {
            setEnrollLoader(false);
        }
    }, [response]);

    useEffect(() => {
        if (loginResponseError) {
            setEnrollLoader(false);
            dispatch(resetLoginResponseFailure());
        }
    }, [loginResponseError]);

    const handleChange = (e) => {
        setIsAutofilled("passworde", e.target.value);
        setMsgResponse();
        dispatch(resetLoginResponseFailure());
    };

    const handlePasswordRemove = () => {
        setIsAutofilled("password", "");
        dispatch(resetLoginResponseFailure());
    };

    useEffect(() => {
        dispatch(resetLoginResponseFailure());
    }, []);

    const _verifyOnSubmit = (formData) => {
        if (formData) {
            setEnrollLoader(true);
            setUserData(formData);
            let obj = { "password": formData?.password, "username": data?.userEmail }
            dispatch(userAuthenticate(obj))
        }
    };

    const showHide = () => {
        setType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    return (
        <div className="BDsubmitbutton Addchieldbtn  addEnrichbtn pr-10">
            <Modal show={true} className="AddChildPopup parent_signin">
                <Modal.Header>
                    <Modal.Title>
                        <img src={image.ParentsLogin} className="mr-2" />
                        Password Required
                    </Modal.Title>
                    <Button data-dismiss="modal" onClick={() => close()}>
                        <i className="fa-regular fa-xmark"></i>
                    </Button>
                </Modal.Header>

                <div className="wrapper">
                    <div id="signin">
                        <div className="wrapper mx-auto">
                            <form
                                name="freesignin"
                                className="bg-white p content"
                                onSubmit={handleSubmit(_verifyOnSubmit)}
                            >
                                <Modal.Body>
                                    <div className="input-group">
                                        <span className="parentloginst">
                                            {
                                                data?.isDelete
                                                    ? "To confirm account deletion, enter your password and click ‘Confirm’."
                                                    : "To confirm account deactivation, enter your password and click ‘Confirm’."
                                            }
                                        </span>
                                        {massageResponse && (
                                            <p className="text-danger">{massageResponse}</p>
                                        )}
                                    </div>
                                    <div className="input-group">
                                        <label className="m-0">
                                            Email/Username
                                            <span className="mandatoryField">*</span>
                                        </label>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                disabled
                                                className="form-control"
                                                value={
                                                    data?.userEmail
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group position-relative">
                                        <label>
                                            Password <span className="mandatoryField">*</span>
                                        </label>

                                        <div className="form-group">
                                            <input
                                                className={`form-control ${errors.password ? "is-invalid" : ""
                                                    }`}
                                                {...register("password", {
                                                    onChange: (e) => handleChange(e),
                                                })}
                                                type={type}
                                                autoComplete={isAutofilled ? "off" : "password"}
                                                onBlur={() => handlePasswordRemove()}
                                            />

                                            <div className="invalid-feedback">
                                                {errors.password?.message}
                                                {msgResponse}
                                            </div>
                                            <div onClick={() => showHide()}>
                                                {type === "password" ? (
                                                    <span className="PasswordeyeIcon">
                                                        <i className="fa-solid fa-eye-slash"></i>
                                                    </span>
                                                ) : (
                                                    <p>
                                                        <span className="PasswordeyeIcon">
                                                            <i className="fa-solid fa-eye"></i>
                                                        </span>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <ModalFooter>
                                    <div className="form-group BDsubmitbutton d-flex justify-content-end m-0">
                                        <div className="buttonDistribotion">
                                            {enrollLoader ? (
                                                <button
                                                    className="btn-blue btn-login d-block mb-5 "
                                                    key={Math.random()}
                                                    disabled
                                                >
                                                    <span className="RounAnimation mr-1"></span> Please
                                                    Wait...
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => close()}
                                                        className="btn-blue btn-login d-block mb-5  ml-auto  cancelbutton"
                                                    >
                                                        <i className="fa-solid fa-xmark mr-2"></i>
                                                        <span> Cancel </span>
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn-blue btn-login d-block mb-5"
                                                    >
                                                        <i className="fa-solid fa-paper-plane mr-2"></i>
                                                        <span>
                                                            Confirm
                                                        </span>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </ModalFooter>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DeleteUserVerificationPopup;

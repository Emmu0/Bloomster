/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  useForm,
  Controller,
  moment,
  SelectPicker,
  Modal,
  Button,
  DatePicker,
} from "../../utils/Packages";
import { PATHS } from "../../utils";
import { NAME_REGEX } from "../../utils/Regex";
import * as image from "../../resources/images";
import { SelectPickerVal, onBlurDate } from "../../utils/helper";
import { getGradeLevel, AddNewChild } from "../../redux/actions/APIs";
import { MSG } from "../../utils/Messages";
import { getChildName } from "../../redux/actions";

const AddChild = ({ openModal, data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loadingIsOnWork, setLoadingIsOnWork] = useState(undefined);
  const [loader, setLoader] = useState(false);

  const {
    gradelevel,
    alluserdetails,
    addLearner,
    updateResponse,
    dimension,
    selectedDim,
    getdimension,
    error,
  } = useSelector((state) => state.collections);

  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    reset,
    control,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    if (!gradelevel) {
      dispatch(getGradeLevel());
    }
  }, [gradelevel]);

  useEffect(() => {
    if (error) {
      setLoader(false);
    }
  }, [error]);

  const [errorMsg, setErrorMsg] = useState(false);
  const [msg, setMsg] = useState("");

  const [dayDdiv, setDayDiv] = useState("");
  const [monthDdiv, setMonthDiv] = useState("");
  const [yearDdiv, setYearDiv] = useState("");

  const _onBlur = (
    field,
    relation,
    setValue,
    setError,
    formType,
    formMsg1,
    formMsg2,
    clearErrors,
    formMsg3
  ) => {
    const parentDivWithAddedChild = document.querySelector("div.addChild");
    if (parentDivWithAddedChild) {
      const innerDiv = parentDivWithAddedChild.querySelector(
        "div.react-date-picker__wrapper"
      );
      const innerDivClass = innerDiv.querySelector(
        ".react-date-picker__inputGroup"
      );
      let monthDiv = innerDivClass.querySelector(
        ".react-date-picker__inputGroup__month"
      );

      let dayDiv = innerDivClass.querySelector(
        ".react-date-picker__inputGroup__day"
      );
      let yearDiv = innerDivClass.querySelector(
        ".react-date-picker__inputGroup__year"
      );

      let userSelectedDt =
        dayDiv.value + "." + monthDiv.value + "." + yearDiv.value;

      setDayDiv(dayDiv.value);
      setMonthDiv(monthDiv.value);
      setYearDiv(yearDiv.value);

      onBlurDate(
        field,
        relation,
        setValue,
        setError,
        userSelectedDt,
        formMsg1,
        formMsg2,
        yearDiv,
        clearErrors,
        formMsg3,
        setErrorMsg,
        setMsg
      );
    }
  };

  useEffect(() => {
    if (addLearner?.success) {
      history.push(PATHS.COURSEPAGE_STR + addLearner?.recordId);
      dispatch(AddNewChild());
      setTimeout(() => {
        setIsOpen(false);
        setLoader(false);
      }, 300);
    }
  }, [addLearner, alluserdetails, getdimension]);

  useEffect(() => {
    if (updateResponse) {
      setLoadingIsOnWork(true);
    }
  }, [updateResponse]);

  const showChildModal = () => {
    setIsOpen(true);
    reset();
  };

  const _onSubmit = (values) => {
    setLoader(true);

    if (dayDdiv == "" || monthDdiv == "" || yearDdiv == "") {
      setError("dateOfBirth", { type: "custom", message: "Invalid Date" });
      setLoader(false);
      return false;
    }

    if (errorMsg === true) {
      setError("dateOfBirth", { type: "custom", message: msg });
      setLoader(false);
      return false;
    }
    dispatch(getChildName(values.firstName));
    let formData = {
      firstName: values.firstName,
      lastName: values.lastName,
      dateOfBirth: moment(values.dateOfBirth).format("YYYY-MM-DD"),
      levelId: "d683a3c0-91af-4069-b5d2-96c57e791380",
    };

    dispatch(
      AddNewChild(
        formData,
        alluserdetails?.records[0]?.id,
        selectedDim,
        dimension
      )
    );
  };

  return (
    <div className='BDsubmitbutton Addchieldbtn  addEnrichbtn '>
      {!openModal && !data && (
        <strong
          className='d-block active'
          onClick={() => {
            showChildModal();
          }}>
          Add Learner<span>+</span>
        </strong>
      )}

      {data && (
        <strong
          className='d-block active'
          onClick={() => {
            showChildModal();
          }}>
          <span
            onClick={() => {
              showChildModal();
            }}>
            +
          </span>
          Add Learner
        </strong>
      )}

      <Modal show={isOpen ? true : false} className='AddChildPopup'>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <img src={image.AddLearner} className='mr-2' /> Add Learner
          </Modal.Title>
          <Button data-dismiss='modal' onClick={() => setIsOpen(false)}>
            <i className='fa-regular fa-xmark'></i>
          </Button>
        </Modal.Header>
        <form
          name='addchildform'
          className='bg-white  p content'
          onSubmit={handleSubmit(_onSubmit)}>
          <Modal.Body className='addChildProf'>
            <div className='wrapper'>
              <div className='input-group'>
                <label className='m-0'>
                  First Name<span className='mandatoryField'>*</span>
                </label>
                <div className='form-group'>
                  <input
                    type='text'
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: MSG.FNAMEREQ,
                      },
                      pattern: {
                        value: NAME_REGEX,
                        message: "First name" + MSG.ALPHAREQ,
                      },
                      maxLength: {
                        value: 15,
                        message: MSG.MAX15CHREQ,
                      },
                    })}
                  />
                  <div className='invalid-feedback'>
                    {errors?.firstName?.message}
                  </div>
                </div>
              </div>
              <div className='input-group'>
                <label>
                  Last Name<span className='mandatoryField'>*</span>
                </label>
                <div className='form-group'>
                  <input
                    type='text'
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: MSG.LNAMEREQ,
                      },
                      pattern: {
                        value: NAME_REGEX,
                        message: "Last name" + MSG.ALPHAREQ,
                      },
                      maxLength: {
                        value: 15,
                        message: MSG.MAX15CHREQ,
                      },
                    })}
                  />

                  <div className='invalid-feedback'>
                    {errors?.lastName?.message}
                  </div>
                </div>
              </div>
              <div className='input-group calender'>
                <label>
                  Date of Birth<span className='mandatoryField'>*</span>
                </label>
                <span className='clenderIcon'>
                  {" "}
                  <img alt='...' src={image.Calendericon} />
                </span>
                <Controller
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: MSG.DOBREQ,
                    },
                  })}
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    onChange = (event) => {
                      setValue("dateOfBirth", event);
                      clearErrors("dateOfBirth");
                    };

                    return (
                      <DatePicker
                        className={`form-control addChild p-0 w-100 border-1 ${
                          errors.dateOfBirth ? "is-invalid" : ""
                        }`}
                        clearIcon={null}
                        oneTap
                        defaultActiveStartDate={
                          new Date(moment().subtract(2, "years"))
                        }
                        onBlur={(e) => {
                          _onBlur(
                            "dateOfBirth",
                            "child",
                            setValue,
                            setError,
                            "child",
                            MSG.AGE02,
                            MSG.AGE18,
                            clearErrors,
                            MSG.MAXAGE
                          );
                        }}
                        dayPlaceholder={"dd"}
                        monthPlaceholder={"mm"}
                        yearPlaceholder={"yyyy"}
                        format='MM/dd/yyyy'
                        placement={"topEnd"}
                        onChange={onChange}
                        value={value}
                        maxDate={new Date()}
                      />
                    );
                  }}
                />

                {errors.dateOfBirth && (
                  <p className='text-danger'>{errors?.dateOfBirth?.message}</p>
                )}
              </div>
              {/* <div className="input-group">
                <label>
                  Grade
                  <span className="mandatoryField">*</span>
                </label>

                <div className="form-group">
                  <Controller
                    {...register("grade", {
                      required: true,
                    })}
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      onChange = (event) => {
                        setValue("grade", event);
                        clearErrors("grade");
                        dispatch(getGradeLevel());
                      };
                      return (
                        <SelectPicker
                          onChange={onChange}
                          placement={"topStart"}
                          className={`${errors.grade ? "is-invalid" : ""}`}
                          data={SelectPickerVal(gradelevel?.records, "grade")}
                          searchable={false}
                          cleanable={false}
                        />
                      );
                    }}
                  />

                  {errors.grade && (
                    <p className="invalid-feedback"> {MSG.GRADEREQ}</p>
                  )}
                </div>
              </div> */}
            </div>
          </Modal.Body>

          <Modal.Footer className='modal-footer'>
            <div className='input-group full-Width-group basic_details_form m-0'>
              <div className='form-group BDsubmitbutton d-flex m-0'>
                <div className='buttonDistribotion'>
                  {loader ? (
                    ""
                  ) : (
                    <button
                      type='button'
                      className='btn-blue btn-login d-block mb-5 cancelbutton '
                      onClick={() => setIsOpen(false)}>
                      <i className='fa-solid fa-xmark'></i> Cancel
                    </button>
                  )}
                  {loader && (
                    <button
                      type='button'
                      className='btn-blue btn-login d-block mb-5 '
                      disabled={true}>
                      <span className='RounAnimation mr-1'></span> Please
                      wait...
                    </button>
                  )}{" "}
                  {loader === false && (
                    <button
                      type='submit'
                      className='btn-blue btn-login d-block mb-5 '>
                      <i className='fa-solid fa-paper-plane'></i> Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddChild;

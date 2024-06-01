import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { isLoading } from "../../redux/actions";
import * as image from "../../resources/images";
import {
  PhoneInput,
  Controller,
  SelectPicker,
  ShimmerCategoryList,
  Modal,
  Button,
} from "../../utils/Packages";
import Spinner from "../base/Spinner";
import {
  addTeacherToSchool,
  updateTeacher,
  addTeacherToEnrichment,
  getCourses,
} from "../../redux/actions/APIs";
import { COUNTRYDATA } from "../../utils/DataObjects";
import { useDispatch, useSelector } from "react-redux";
import {
  formatPhoneNumber,
  getDialingCode,
  SelectPickerVal,
} from "../../utils/helper";
import { EMAIL_REGEX, CHAR_REGEX, MOBILE_REGEX } from "../../utils/Regex";
import { MSG } from "../../utils/Messages";
import ModalFooter from "rsuite/esm/Modal/ModalFooter";
import { ShimmerThumbnail } from "react-shimmer-effects";

const Teacher = ({ addTeacherForm, teacherId, type, enrichId, courseName }) => {
  const [countryCode, setCountryCode] = useState("");
  const [enrollLoader, setEnrollLoader] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const { getSelectedUser, loading, courseItem, response } = useSelector(
    (state) => state.collections
  );
  const [dialingCode, setDialingCode] = useState(undefined);
  const [random, setRandom] = useState(Math.random());
  const dispatch = useDispatch();

  useEffect(() => {
    if (response) {
      setEnrollLoader(false);
    }
  }, [response]);

  // useEffect(() => {
  //   if (!learnerId) return;
  //   dispatch(getCourses(learnerId));
  // }, []);

  const resetCancel = () => {
    reset();
    dispatch(getCourses());
    addTeacherForm();
  };

  useEffect(() => {
    courseItem?.records &&
      courseItem?.records?.map((m, index) => {
        if (courseName === m.id) {
          setValue("courseId", courseName);
        }
      });
    setRandom(Math.random());
  }, [courseName, courseItem?.records]);

  const _onTeacherSubmit = (values) => {
    setEnrollLoader(true);

    if (type === "enrichment") {
      let countryCde = countryCode
        ? "+" + countryCode
        : getDialingCode(dialingCode);

      let formData = {
        enrichmentId: enrichId,
        courseId: values.courseId,
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        email: values.email,
        mobile: countryCde + "##" + values.mobile,
      };

      if (teacherId) {
        dispatch(updateTeacher(formData, getSelectedUser.id, teacherId)).then(
          () => {
            setTimeout(() => {
              addTeacherForm();
            }, 1000);
          }
        );
      } else {
        dispatch(addTeacherToEnrichment(formData, getSelectedUser.id)).then(
          () => {
            setTimeout(() => {
              addTeacherForm();
            }, 1000);
          }
        );
      }
    } else {
      let countryCde = countryCode
        ? "+" + countryCode
        : getDialingCode(dialingCode);

      let formData = {
        schoolId: getSelectedUser?.schoolDetails?.school?.id,
        courseId: values.courseId,
        subject: values.subject,
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        email: values.email,
        mobile: countryCde + "##" + values.mobile,
      };
      if (teacherId) {
        dispatch(updateTeacher(formData, getSelectedUser.id, teacherId)).then(
          () => {
            setTimeout(() => {
              addTeacherForm();
            }, 1000);
          }
        );
      } else {
        dispatch(addTeacherToSchool(formData, getSelectedUser.id)).then(() => {
          setTimeout(() => {
            addTeacherForm();
          }, 1000);
        });
      }
    }
  };

  useEffect(() => {
    COUNTRYDATA.map((vl, ky) => {
      if (vl?.name === getSelectedUser?.country) {
        setDialingCode(vl?.code);
      }
    });
  }, [getSelectedUser?.country]);
  const mobileNumberFormat = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    if (formattedPhoneNumber) {
      setValue("mobile", formattedPhoneNumber);
    }
  };

  return (
    <div className="d-flex">
      {loading ? <Spinner /> : ""}
      <Modal show={true} className="AddChildPopup">
        <Modal.Header>
          <Modal.Title>
            <img src={image.addActivity} className="mr-2" />
            {teacherId ? "Edit" : "Add"} Teacher
          </Modal.Title>
          <Button data-dismiss="modal" onClick={() => resetCancel()}>
            <i className="fa-regular fa-xmark"></i>
          </Button>
        </Modal.Header>

        {courseItem && courseItem?.records?.length > 0 ? (
          <div className="wrapper mx-auto">
            <form
              name="teacherinformation"
              className="bg-white content"
              onSubmit={handleSubmit(_onTeacherSubmit)}
            >
              <div className="teachergroup basicdetailsform ">
                <Modal.Body>
                  <div className="bg-white content wrapper mx-auto">
                    <div className="input-group">
                      <label className="m-0">
                        Courses<span className="mandatoryField">*</span>
                      </label>

                      <div className="form-group">
                        <div key={Math.random()}>
                          <Controller
                            {...register("courseId", {
                              required: true,
                            })}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              onChange = (event) => {
                                setValue("courseId", event);
                                clearErrors("courseId");
                              };
                              return (
                                <SelectPicker
                                  onChange={onChange}
                                  searchable={false}
                                  cleanable={false}
                                  defaultValue={value}
                                  className={`${
                                    errors.courseId ? "is-invalid" : ""
                                  }`}
                                  data={SelectPickerVal(courseItem?.records)}
                                />
                              );
                            }}
                          />
                        </div>
                      </div>
                      {errors.courseId && (
                        <p className="text-danger">{MSG.SUBREQ}</p>
                      )}
                    </div>
                    <div className="input-group">
                      <label>
                        First Name
                        <span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          {...register("firstName", {
                            required: {
                              value: true,
                              message: MSG.FNAMEREQ,
                            },
                            pattern: {
                              value: CHAR_REGEX,
                              message: "First name" + MSG.ALPHAREQ,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.firstName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Middle Name</label>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.middleName ? "is-invalid" : ""
                          }`}
                          {...register("middleName", {
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Middle name" + MSG.ALPHAREQ,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.middleName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>
                        Last Name<span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                          {...register("lastName", {
                            required: {
                              value: true,
                              message: MSG.LNAMEREQ,
                            },
                            pattern: {
                              value: CHAR_REGEX,
                              message: "Last name" + MSG.ALPHAREQ,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.lastName?.message}
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
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
                              message: MSG.EMAILREQ,
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
                    <div className="input-group">
                      <label>
                        Mobile<span className="mandatoryField">*</span>
                      </label>
                      <div className="form-group d-flex flex-wrap Teacherphonenumber">
                        {dialingCode && (
                          <PhoneInput
                            country={dialingCode?.toLowerCase()}
                            inputClass={"countryCode"}
                            inputId={"countryCode"}
                            onChange={(phone) => setCountryCode(phone)}
                            disabled={true}
                          />
                        )}
                        <input
                          type="text"
                          maxLength="15"
                          className={`form-control ${
                            errors.mobile ? "is-invalid" : ""
                          }`}
                          {...register("mobile", {
                            onChange: (e) => mobileNumberFormat(e),
                            required: {
                              value: true,
                              message: MSG.MOBNUMREQ,
                            },
                            pattern: {
                              value: MOBILE_REGEX,
                              message: MSG.INVMOBNUMREQ,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors?.mobile?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="input-group full-width basic_details_form">
                    <div className="form-group BDsubmitbutton d-flex m-0">
                     <div className="buttonDistribotion">
                     {!enrollLoader && <button
                          type="button"
                          className="btn-blue btn-login d-block mb-5 cancelbutton"
                          onClick={resetCancel}
                        >
                          <i className="fa-solid fa-xmark"></i> Cancel
                        </button>}

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
                          <button
                            type="submit"
                            className="btn-blue btn-login d-block mb-5 "
                          >
                            <i className="fa-solid fa-paper-plane"></i> Save
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Modal.Footer>
              </div>
            </form>
          </div>
        ) : (
          <ShimmerThumbnail height={305} rounded />
        )}
      </Modal>
    </div>
  );
};

export default Teacher;

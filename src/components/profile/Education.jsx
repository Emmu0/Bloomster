/** @format */

import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller, moment } from "../../utils/Packages";
import { Profile, SchoolList } from ".";
import Home from "../Home";
import * as image from "../../resources/images";

import {
  addUserEducation,
  getAllFields,
  getDegrees,
  getAllSchoolsByKeyWords,
} from "../../redux/actions/APIs";
import { isLoading, breadcrumb } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { MONTHS } from "../../utils/DataObjects";
import {
  generateArrayOfYears,
  SelectPickerVal,
  generateArrayOfFromYears,
  generateEndMonth
} from "../../utils/helper";

import { useParams } from "react-router-dom";

import SearchField from "../controls/SearchField";

import AddressForm from "../controls/AddressForm";
import UploadPhoto from "./UploadPhoto";
import SelectPicker from "rsuite/SelectPicker";
import "rsuite/dist/rsuite.css";

const Education = () => {
  const childRef = useRef();

  const {
    register,
    setValue,
    resetField,
    reset,
    handleSubmit,
    control,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm();
  const [random, setRandom] = useState(0);
  const {
    schoolsbykeyword,
    fielddetail,
    degreedetail,
    getSelectedUser,
    response,
    loading,
  } = useSelector((state) => state.collections);
  const path = useParams();
  const [openForm, setOpenForm] = useState(false);
  const [toggleClick, SetToggleClick] = useState(false);
  const [schoolData, setSchoolData] = useState(null);

  const [stateDisable, setStateDisable] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [addressData, getAddressData] = useState({});

  const [enrollLoader, setEnrollLoader] = useState(false);

  useEffect(() => {
    dispatch(breadcrumb({ title: "Education", icon: image.mortarboard }));
  }, [path?.id]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (getSelectedUser?.educations?.length === 0) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  }, [getSelectedUser, path.id]);

  useEffect(() => {
    dispatch(getAllFields());
    dispatch(getDegrees());
    if (response?.success) {
      setOpenForm(false);
      reset();
      getAddressData({});
      setSchoolData(null);
      setEnrollLoader(false);
    }
  }, [response]);

  const _onSubmit = (value) => {
    let endYearObj = generateArrayOfFromYears(
      getValues("startYear"),
      getValues("startMonth"),
      getValues("endMonth")
    );
    let check = endYearObj.filter((vl) => vl.value === getValues("endYear"));
    if (check.length === 0) {
      resetField("endYear");
      return false;
    }

    let values = value;
    setEnrollLoader(true);
    if (schoolData) {
      values.schoolId = schoolData.id;
    }

    if (toggleState === 2) {
      value.type = "COLLEGE";
      delete values.schoolType;
    }

    if (toggleState === 1) {
      value.type = "SCHOOL";
      delete values.fieldId;
      delete values.degreeId;
    }

    if (toggleState === 3) {
      value.type = "OTHER";
      delete values.fieldId;
      delete values.degreeId;
      delete values.address1;
      delete values.address2;
      delete values.zip;
      delete values.city;
      delete values.country;
      delete values.schoolType;
      delete values.state;
    }

    if (toggleState === 3 && schoolData) {
      values.schoolId = schoolData.id;
    }

    if (values?.startMonth && values?.startYear) {
      values.startDate = values?.startMonth + ", " + values?.startYear;
      delete values?.startMonth;
      delete values?.startYear;
    }
    if (values?.endMonth && values?.endYear) {
      values.endDate = values?.endMonth + ", " + values?.endYear;
      delete values?.endMonth;
      delete values?.endYear;
    }

    dispatch(addUserEducation(values, getSelectedUser.id)).then(() => {
      if (response?.success) {
        reset();
      }
    });
  };

  // const generateEndMonth = (months, endMonth, endYear) => {
  //   let studentYear = [];
  //   // console.log("@@studentYear", studentYear);
  //   const maxYear = new Date().getFullYear();
  //   const maxMonth = new Date().getMonth() + 1;
  
  //   if (endYear === maxYear && endMonth >= maxMonth) {
  //     for (const month of months) {
  //       resetField("endMonth");
  //       if (month.value <= maxMonth && month.value <= endMonth) {         
  //         studentYear.push(month);
  //       }
  //     }
  //   } else if (endYear === maxYear && endMonth < maxMonth) {
  //     for (const month of months) {
     
  //       if (month.value <= maxMonth) {
  //         studentYear.push(month);
  //       }
  //     }
  //   } else {
  //     studentYear = [...months];
  //   }
  
  //   return studentYear;
  // }

  const toggleTab = (index) => {
    setToggleState(index);
    reset();
    setRandom(Math.random());
    reset({
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    });
    resetField("startMonth");
    resetField("startYear");
    resetField("endMonth");
    resetField("endYear");

    SetToggleClick(!toggleClick);
    setStateDisable(false);
    getAddressData({});
  };

  const resetCancel = () => {
    setStateDisable(false);
    setRandom(Math.random());
    resetFieldsSchool();
    SetToggleClick(!toggleClick);
    resetField("schoolName");
    resetField("degreeId");
    resetField("fieldId");
    resetField("type");
    resetField("startDate");
    resetField("endDate");
    resetField("address1");
    resetField("address2");
    resetField("country");
    resetField("state");
    resetField("city");
    resetField("zip");
    resetField("activities");
    resetField("description");
    reset({
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    });

    resetField("startMonth");
    resetField("startYear");
    resetField("endMonth");
    resetField("endYear");
    resetField("diploma");
    reset();
  };

  const resetFieldsSchool = () => {
    setStateDisable(false);
    getAddressData({});
    resetField("name");
    resetField("address1");
    resetField("address2");
    resetField("country");
    resetField("state");
    resetField("city");
    resetField("zip");
  };

  const selectAddress = (data) => {
    getAddressData(data);
  };

  const addEducationHandler = () => {
    setOpenForm(!openForm);
    getAddressData({});
    reset();
  };

  return (
    <Home>
      <div className='LeftbarPannel p-0' id='Educations' key={random}>
        {openForm == true ? <UploadPhoto color={"#1ec1d9"} /> : ""}
        <div className='PannelContent basicdetailsform px-5 Profile_form education_form'>
          {openForm == true ? (
            <>
              <div className='tabgrid Educationtab'>
                <ul>
                  <li
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    <i className='fa-light fa-school-flag'></i> School (K-12)
                  </li>
                  <li
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    <i className='fa-light fa-building-columns'></i> University
                    / College
                  </li>
                  <li
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>
                    <i className='fa-light fa-building-user'></i> Others
                    (Certificate / Diploma)
                  </li>
                </ul>
              </div>
              <form
                name='userEducation'
                className='bg-white content'
                onSubmit={handleSubmit(_onSubmit)}>
                      <div className="fomfiledList flex flex-wrap">
                <div className='input-group placeholderseach'>
                  <div className='search'>
                    <div className='searchInputs'>
                      <SearchField
                        placeholder={
                          toggleState === 1
                            ? "Search School...*"
                            : toggleState === 2
                            ? "Search University/College...*"
                            : toggleState === 3
                            ? "Search Institute...*"
                            : ""
                        }
                        resetFields={resetFieldsSchool}
                        name='schoolName'
                        toggleClick={toggleClick}
                        id='schoolName'
                        isLoading={isLoading}
                        setValue={setValue}
                        setSchoolData={setSchoolData}
                        schoolData={schoolData}
                        type='schoolName'
                        selectAddress={selectAddress}
                        dataFetched={schoolsbykeyword}
                        commonFetch={getAllSchoolsByKeyWords}
                        setCompanyStateDisable={setStateDisable}
                        ref={childRef}
                        register={register}
                        error={errors.schoolName ? true : false}
                      />
                      {errors.schoolName && toggleState === 1 && (
                        <p className='text-danger'>School Name is required</p>
                      )}
                      {errors.schoolName && toggleState === 2 && (
                        <p className='text-danger'>
                          University/College name is required
                        </p>
                      )}
                      {errors.schoolName && toggleState === 3 && (
                        <p className='text-danger'>
                          Institute Name is required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {toggleState === 1 && (
                  <div className='signupType m-0 publicprivateToggle'>
                    <label className='Selcheckbox'>
                      Public
                      <input
                        type='radio'
                        id='Public'
                        {...register("schoolType", {
                          required: true,
                        })}
                        value='PUBLIC'
                        defaultChecked></input>
                      <span className='checkmark'></span>
                    </label>
                    <label className='Selcheckbox'>
                      Private
                      <input
                        type='radio'
                        id='Private'
                        {...register("schoolType", {
                          required: true,
                        })}
                        value='PRIVATE'></input>
                      <span className='checkmark'></span>
                    </label>
                  </div>
                )}
                {toggleState === 3 && (
                  <div className='input-group'>
                    {/* <label>
                      Certificate/Diploma
                      <span className="mandatoryField">*</span>
                    </label> */}
                    <div className='form-group'>
                      <input
                        type='text'
                        className={`form-control ${
                          errors.diploma ? "is-invalid" : ""
                        }`}
                        placeholder='Add Certificate/Diploma'
                        {...register("diploma", {
                          required: true,
                          maxLength: 250,
                        })}
                      />
                      {errors.diploma && errors.diploma.type == "maxLength" && (
                        <p className='text-danger'>
                          Enter Maximum 240 Character
                        </p>
                      )}
                      {errors.diploma && errors.diploma.type == "required" && (
                        <p className='text-danger'>
                          Certificate/Diploma is required
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {toggleState === 2 && (
                  <div className='parrell_filed'>
                    <div className='input-group'>
                      <label>
                        Degree<span className='mandatoryField'>*</span>
                      </label>
                      <div className='form-group '>
                        {degreedetail?.records && (
                          <Controller
                            {...register("degreeId", {
                              required: true,
                            })}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              onChange = (event) => {
                                setValue("degreeId", event);
                                clearErrors("degreeId");
                              };
                              return (
                                <SelectPicker
                                  onChange={onChange}
                                  searchable={false}
                                  cleanable={false}
                                  className={`${
                                    errors.degreeId ? "is-invalid" : ""
                                  }`}
                                  data={SelectPickerVal(degreedetail?.records)}
                                />
                              );
                            }}
                          />
                        )}

                        {errors.degreeId && (
                          <p className='text-danger'>Degree is required</p>
                        )}
                      </div>
                    </div>
                    <div className='input-group'>
                      <label>
                        Field of Study
                        <span className='mandatoryField'>*</span>
                      </label>

                      <div
                        className='form-group'
                        data-toggle='collapse'
                        href='#toyear'
                        aria-selected='false'>
                        {fielddetail?.records && (
                          <Controller
                            {...register("fieldId", {
                              required: true,
                            })}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              onChange = (event) => {
                                setValue("fieldId", event);
                                clearErrors("fieldId");
                              };
                              return (
                                <SelectPicker
                                  onChange={onChange}
                                  cleanable={false}
                                  className={`${
                                    errors.fieldId ? "is-invalid" : ""
                                  }`}
                                  data={SelectPickerVal(fielddetail?.records)}
                                  searchable={true}
                                />
                              );
                            }}
                          />
                        )}

                        {errors.fieldId && (
                          <p className='text-danger'>
                            Field of Study is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className='parrell_filed'>
                  <div className='input-group  datespl calender'>
                    <label>
                      From<span className='mandatoryField'>*</span>
                    </label>

                    <div className='Selectcalenderyr '>
                      <div className='form-group w-100 mr-2'>
                        <Controller
                          {...register("startMonth", {
                            required: true,
                          })}
                          control={control}
                          render={({ field: { onChange, value } }) => {
                            onChange = (event) => {
                              setValue("startMonth", event);
                              clearErrors("startMonth");
                            };
                            return (
                              <SelectPicker
                                onChange={onChange}
                                cleanable={false}
                                searchable={false}
                                className={`${
                                  errors.startMonth ? "is-invalid" : ""
                                }`}
                                data={MONTHS}
                              />
                            );
                          }}
                        />
                        {errors.startMonth && (
                          <p className='text-danger'>Start month is required</p>
                        )}
                      </div>
                      <div className='form-group w-100 ml-2'>
                        <Controller
                          {...register("startYear", {
                            required: true,
                          })}
                          control={control}
                          render={({ field: { onChange, value } }) => {
                            onChange = (event) => {
                              setValue("startYear", event);
                              clearErrors("startYear");
                            };
                            return (
                              <SelectPicker
                                onChange={onChange}
                                searchable={false}
                                cleanable={false}
                                className={`${
                                  errors.startYear ? "is-invalid" : ""
                                }`}
                                data={generateArrayOfYears()}
                              />
                            );
                          }}
                        />
                        {errors.startYear && (
                          <p className='text-danger'>Start year is required</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='input-group calender  datespl' key={random}>
                    <label>
                      To<span className='mandatoryField'>*</span>
                    </label>

                    <div className='Selectcalenderyr'>
                      <div className='form-group w-100 mr-2'>
                        <Controller
                          {...register("endMonth", {
                            required: true,
                          })}
                          control={control}
                          render={({ field: { onChange, value } }) => {                            
                            onChange = (event) => {                             
                                setValue("endMonth", event);
                              clearErrors("endMonth");                            
                            };
                            return (
                              <SelectPicker
                                onChange={onChange}
                                searchable={false}
                                cleanable={false}
                                className={`${
                                  errors.endMonth ? "is-invalid" : ""
                                }`}
                                // data={MONTHS}
                                data={generateEndMonth(MONTHS, getValues("endMonth"), getValues("endYear"))}
                              />
                            );
                          }}
                        />

                        {errors.endMonth && (
                          <p className='text-danger'>End month is required</p>
                        )}
                      </div>
                      <div
                        className='form-group w-100 ml-2'
                        data-toggle='collapse'
                        href='#toyear'>
                        {/* <Controller
                          {...register("endYear", {
                            required: {
                              value: true,
                              message: "Field is Required",
                            },
                            validate: {
                              positiveNumber: (value) => {
                                return (
                                  generateArrayOfFromYears(
                                    getValues("startYear"),
                                    getValues("startMonth"),
                                    getValues("endMonth")
                                  ).length === 0 || "Field is Required"
                                );
                              },
                            },
                          })}
                          id="endYear"
                          control={control}
                          render={({ field: { onChange, value } }) => {
                            onChange = (event) => {
                              setValue("endYear", event);
                              clearErrors("endYear");
                            };

                            return (
                              <SelectPicker
                                onChange={onChange}
                                searchable={false}
                                cleanable={false}
                                className={`${
                                  errors.endYear ? "is-invalid" : ""
                                }`}
                                data={generateArrayOfFromYears(
                                  getValues("startYear"),
                                  getValues("startMonth"),
                                  getValues("endMonth")
                                )}
                              />
                            );
                          }}
                        /> */}
                        <Controller
                          {...register("endYear", {
                            required: {
                              value: true,
                              message: "Field is Required",
                            },
                            validate: {
                              positiveNumber: (value) => {
                                return (
                                  generateArrayOfFromYears(
                                    getValues("startYear"),
                                    getValues("startMonth"),
                                    getValues("endMonth"),                                   
                                  ).length > 0
                                );
                              },
                            },
                          })}
                          id='endYear'
                          control={control}
                          render={({ field }) => {
                            const onChange = (event) => {
                              field.onChange(event);
                              clearErrors("endYear");

                              const maxYear = new Date().getFullYear();
                              const maxMonth = new Date().getMonth() + 1;

                              if(event === maxYear && getValues("endMonth") >= maxMonth){                              
                                setValue("endMonth", "");                                
                              }

                            }

                            return (
                              <SelectPicker
                                onChange={onChange}
                                searchable={false}
                                cleanable={false}
                                className={`${
                                  errors.endYear ? "is-invalid" : ""
                                }`}
                                data={generateArrayOfFromYears(
                                  getValues("startYear"),
                                  getValues("startMonth"),
                                  getValues("endMonth"),
                                  getValues("endYear"),
                                )}
                              />
                            );
                          }}
                        />
                        {errors.endYear && (
                          <p className='text-danger'>End year is required</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {toggleState != 3 ? (
                  <>
                    <div className='form-title margintitle'>
                      <h3 data-toggle='collapse'>
                        <i className='fa-light fa-address-book mr-2'></i>{" "}
                        Address{" "}
                      </h3>
                    </div>
                    <AddressForm
                      errors={errors}
                      register={register}
                      setValue={setValue}
                      addressData={addressData}
                      showAddress={true}
                      type='addressform2'
                    />
                  </>
                ) : (
                  ""
                )}

                <div className='form-title margintitle'>
                  <h3 data-toggle='collapse'>
                    <i className='fa-light fa-memo-circle-info mr-2'></i>
                    Activity and Description{" "}
                  </h3>
                </div>
                <div className='input-group'>
                  <label>Activities</label>
                  <div className='Activityined'>
                    <div>
                      <textarea
                        className={`form-control text-rows ${
                          errors.activities ? "is-invalid" : ""
                        }`}
                        cols='64'
                        // placeholder='Activities'
                        {...register("activities")}></textarea>
                    </div>
                  </div>
                </div>
                <div className='input-group'>
                  <label>Description</label>
                  <div className='Activityined'>
                    <div>
                      <textarea
                        className={`form-control text-rows ${
                          errors.description ? "is-invalid" : ""
                        }`}
                        cols='64'
                        // placeholder='Description'
                        {...register("description")}></textarea>
                    </div>
                  </div>
                </div>
                </div>
                <div className='input-group full-Width-group basic_details_form mt-2'>
                  <div className='form-group BDsubmitbutton d-flex m-0'>
                    {getSelectedUser?.educations?.length == 0 ? (
                      ""
                    ) : (
                      <>
                        <button
                          type='button'
                          className='btn-blue btn-login d-block mb-5'
                          onClick={() => setOpenForm(false)}>
                          <i className='fa-solid fa-arrow-left'></i> Back
                        </button>
                      </>
                    )}

                    <div className='buttonDistribotion'>
                      {!enrollLoader && <button
                        type='button'
                        className='btn-blue btn-login d-block mb-5 cancelbutton'
                        onClick={() => {
                          setRandom(Math.random());
                          resetCancel();
                        }}>
                        <i className='fa-solid fa-xmark'></i> Cancel
                      </button>}

                      {enrollLoader ? (
                        <button
                          className='btn-blue btn-login d-block mb-5 '
                          key={Math.random()}
                          disabled>
                          <span className='RounAnimation mr-1'></span> Please
                          Wait...
                        </button>
                      ) : (
                        <button
                          type='submit'
                          className='btn-blue btn-login d-block mb-5 '>
                          <i className='fa-solid fa-paper-plane'></i> Save
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className='main_box'>
              {getSelectedUser?.educations?.length > 0
                ? getSelectedUser?.educations
                    ?.sort(
                      (a, b) =>
                        b.startDate.split(" ")[1] - a.startDate.split(" ")[1]
                    )
                    ?.map((value, key) => (
                      <React.Fragment key={key}>
                        <SchoolList edu={value} />
                      </React.Fragment>
                    ))
                : ""}
              <>
                {!openForm ? (
                  <div className='form-group BDsubmitbutton Addchieldbtn   addEnrichbtn d-flex pr-10'>
                    <strong
                      onClick={() => addEducationHandler()}
                      className='d-block  ml-auto'>
                      Add Education <span>+</span>
                    </strong>
                  </div>
                ) : (
                  ""
                )}
              </>
            </div>
          )}
        </div>
      </div>
      <Profile />
    </Home>
  );
};

export default Education;

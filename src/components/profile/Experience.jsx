/** @format */

import React, { useState, useEffect } from "react";
import { useForm } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { MONTHS } from "../../utils/DataObjects";
import {
  generateArrayOfYears,
  generateArrayOfFromYears,
} from "../../utils/helper";

import Home from "../Home";
import * as image from "../../resources/images";
import { isLoading } from "../../redux/actions";
import UploadPhoto from "./UploadPhoto";
import {
  createUserExperience,
  getCompaniesByKeyWords,
  getTitlesByKeyWords,
  getIndustryByKeyWords,
  getDivisionByKeyWords,
} from "../../redux/actions/APIs";
import { breadcrumb } from "../../redux/actions";
import Profile from "./Profile";
import CompanyList from "./CompanyList";

import SearchField from "../controls/SearchField";
import AddressForm from "../controls/AddressForm";
import { Controller } from "../../utils/Packages";
import SelectPicker from "rsuite/SelectPicker";
import "rsuite/dist/rsuite.css";
const Experience = () => {
  const {
    register,
    setValue,
    resetField,
    handleSubmit,
    reset,
    control,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm();

  const {
    companyByKeywords,
    getSelectedUser,
    response,
    titleByKeywords,
    industryByKeywords,
    divisionByKeywords,
    loggedInUser,
  } = useSelector((state) => state.collections);

  const [openForm, setOpenForm] = useState(false);
  const [currentlyWork, setCurrentlyWork] = useState(false);

  const [expData, setExpData] = useState(null);
  const [titleData, setTitleData] = useState(null);
  const [divData, setDivData] = useState(null);
  const [indData, setIndData] = useState(null);
  const [stateDisable, setStateDisable] = useState(false);
  const [addressData, getAddressData] = useState({});
  const [toggleClick, SetToggleClick] = useState(false);
  const [random, setRandom] = useState(0);
  const [titleError, setTitleError] = useState("");
  const [divError, setDivError] = useState("");
  const [indError, setIndError] = useState("");

  const [enrollLoader, setEnrollLoader] = useState(false);

  const [isTitleClicked, setIsTitleClicked] = useState(false);
  const [isDivClicked, setIsDivClicked] = useState(false);
  const [isInduClicked, setIsInduClicked] = useState(false);

  useEffect(() => {
    if (response) {
      setEnrollLoader(false);
    }
  }, [response]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(breadcrumb({ title: "Experience", icon: image.experience }));
  }, [loggedInUser]);

  useEffect(() => {
    if (
      getSelectedUser?.experiences &&
      getSelectedUser?.experiences?.length === 0
    ) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  }, [getSelectedUser]);

  useEffect(() => {
    if (response?.success) {
      setOpenForm(false);
      reset();
      getAddressData({});
      setExpData(null);
      setTitleData(null);
      setDivData(null);
      setIndData(null);
    }
  }, [response]);

  const addExperienceHandler = () => {
    setCurrentlyWork(false);
    setOpenForm(!openForm);
    reset();
    getAddressData({});
    setTitleError("");
    setDivError("");
    setIndError("");
  };

  const _onSubmit = (values) => {
    setEnrollLoader(true);
    if (expData) {
      values.companyId = expData.id;
    }
    if (titleData) {
      values.titleId = titleData.id;
    } else {
      setTitleError("Please select title from search");
      setEnrollLoader(false);
    }
    if (divData) {
      values.divisionId = divData.id;
    } else {
      setDivError("Please select division from search");
      setEnrollLoader(false);
    }
    if (indData) {
      values.industryId = indData.id;
    } else {
      setIndError("Please select industry from search");
      setEnrollLoader(false);
    }

    if (values?.startMonth && values?.startYear) {
      values.startDate = values?.startMonth + " " + values?.startYear;
      delete values?.startMonth;
      delete values?.startYear;
    }
    values.isCurrentlyWorking = true;
    if (values?.endMonth && values?.endYear) {
      values.endDate = values?.endMonth + " " + values?.endYear;
      values.isCurrentlyWorking = false;
      delete values?.endMonth;
      delete values?.endYear;
    }
    if (titleData && divData && indData) {
      dispatch(createUserExperience(values, getSelectedUser.id));
    }
  };

  const currentworkhandler = (event) => {
    if (event.target.value == true) {
      setCurrentlyWork(currentlyWork);
    } else {
      setCurrentlyWork(!currentlyWork);
    }
    if (getValues("endMonth") || getValues("endYear")) {
      setValue("endMonth", null);
      setValue("endYear", null);
    }
  };

  const resetCancel = () => {
    setStateDisable(false);
    setRandom(Math.random());
    setCurrentlyWork(false);
    resetFieldsCompany();
    SetToggleClick(!toggleClick);
    resetField("companyName");
    resetField("type");
    resetField("startMonth");
    resetField("endMonth");
    resetField("startYear");
    resetField("endYear");
    resetField("address1");
    resetField("address2");
    resetField("country");
    resetField("state");
    resetField("city");
    resetField("zip");
    resetField("description");
    resetField("titleId");
    resetField("divisionId");
    resetField("industryId");
    reset({
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      type: "",
    });
  };

  const resetFieldsCompany = () => {
    setStateDisable(false);
    getAddressData({});
    resetField("companyName");
    resetField("address1");
    resetField("address2");
    resetField("country");
    resetField("state");
    resetField("city");
    resetField("zip");
  };

  const resetFieldTitle = () => {
    resetField("titleId");
  };
  const resetFieldDivision = () => {
    resetField("divisionId");
  };
  const resetFieldIndustry = () => {
    resetField("industryId");
  };
  const selectAddress = (data) => {
    getAddressData(data);
  };

  return (
    <Home>
      <div className='LeftbarPannel p-0' id='Experince_form' key={random}>
        {openForm == true ? <UploadPhoto color={"#1ec1d9"} /> : ""}
        <>
          <div className='PannelContent basicdetailsform px-5 Profile_form'>
            <div className='wrapper'>
              {openForm ? (
                <>
                  <form
                    name='userExperience'
                    className='bg-white content'
                    onSubmit={handleSubmit(_onSubmit)}>
                    <div className="fomfiledList flex flex-wrap">
                      <div className='form-title'>
                        <h3 data-toggle='collapse'>
                          <i className='fa-light fa-id-badge mr-2'></i>Job Details{" "}
                        </h3>
                      </div>
                      <div className='input-group'>
                        <label>
                          Company Name
                          <span className='mandatoryField'>*</span>
                        </label>
                        <div className='search'>
                          <div className='searchInputs'>
                            <SearchField
                              placeholder={"Search..."}
                              resetFields={resetFieldsCompany}
                              name='companyName'
                              toggleClick={toggleClick}
                              isLoading={isLoading}
                              setValue={setValue}
                              setExpData={setExpData}
                              expData={expData}
                              type='companyName'
                              selectAddress={selectAddress}
                              dataFetched={companyByKeywords}
                              commonFetch={getCompaniesByKeyWords}
                              setCompanyStateDisable={setStateDisable}
                              register={register}
                              error={errors.companyName ? true : false}
                            />
                            {errors.companyName && (
                              <p className='text-danger'>
                                Company Name is required
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='input-group'>
                        <label>
                          Title<span className='mandatoryField'>*</span>
                        </label>
                        <div className='search'>
                          <div className='searchInputs'>
                            <SearchField
                              placeholder={"Search..."}
                              resetFields={resetFieldTitle}
                              name='titleId'
                              toggleClick={toggleClick}
                              isLoading={isLoading}
                              setValue={setValue}
                              setTitleData={setTitleData}
                              titleData={titleData}
                              type='titleId'
                              dataFetched={titleByKeywords}
                              commonFetch={getTitlesByKeyWords}
                              register={register}
                              setTitleError={setTitleError}
                              error={errors.titleId || titleError ? true : false}
                              isClicked={isTitleClicked}
                              setIsClicked={setIsTitleClicked}
                            />
                            {errors.titleId && (
                              <p className='text-danger'>
                                Title Name is required
                              </p>
                            )}
                            {titleError && (
                              <p className='text-danger'>{titleError}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='input-group'>
                        <label>
                          Division<span className='mandatoryField'>*</span>
                        </label>
                        <div className='search'>
                          <div className='searchInputs'>
                            <SearchField
                              placeholder={"Search..."}
                              resetFields={resetFieldDivision}
                              name='divisionId'
                              toggleClick={toggleClick}
                              isLoading={isLoading}
                              setValue={setValue}
                              setDivData={setDivData}
                              divData={divData}
                              type='divisionId'
                              dataFetched={divisionByKeywords}
                              commonFetch={getDivisionByKeyWords}
                              register={register}
                              setTitleError={setDivError}
                              error={errors.divisionId || divError ? true : false}
                              isClicked={isDivClicked}
                              setIsClicked={setIsDivClicked}
                            />
                            {errors.divisionId && (
                              <p className='text-danger'>
                                Division Name is required
                              </p>
                            )}
                            {divError && (
                              <p className='text-danger'>{divError}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='input-group'>
                        <label>
                          Industry<span className='mandatoryField'>*</span>
                        </label>
                        <div className='search'>
                          <div className='searchInputs'>
                            <SearchField
                              placeholder={"Search..."}
                              resetFields={resetFieldIndustry}
                              name='industryId'
                              toggleClick={toggleClick}
                              isLoading={isLoading}
                              setValue={setValue}
                              setIndData={setIndData}
                              indData={indData}
                              type='industryId'
                              dataFetched={industryByKeywords}
                              commonFetch={getIndustryByKeyWords}
                              register={register}
                              setTitleError={setIndError}
                              error={errors.industryId || indError ? true : false}
                              isClicked={isInduClicked}
                              setIsClicked={setIsInduClicked}
                            />
                            {errors.industryId && (
                              <p className='text-danger'>
                                Industry Name is required
                              </p>
                            )}
                            {indError && (
                              <p className='text-danger'>{indError}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='input-group'>
                        <label>
                          Employment Type
                          <span className='mandatoryField'>*</span>
                        </label>
                        <div
                          className='form-group'
                          data-toggle='collapse'
                          href='#EmploymentType'>
                          <Controller
                            {...register("type", {
                              required: true,
                            })}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              onChange = (event) => {
                                setValue("type", event);
                                clearErrors("type");
                              };
                              return (
                                <SelectPicker
                                  onChange={onChange}
                                  cleanable={false}
                                  searchable={false}
                                  className={`${errors.type ? "is-invalid" : ""}`}
                                  data={[
                                    { label: "Employed", value: "Employed" },
                                    {
                                      label: "Self-employed",
                                      value: "Self-employed",
                                    },
                                  ]}
                                />
                              );
                            }}
                          />

                          {errors.type && (
                            <p className='text-danger'>
                              Employment Type is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className='parrell_filed'>
                        <div className='input-group  calender datespl'>
                          <label>
                            From
                            <span className='mandatoryField'>*</span>
                          </label>

                          <div className='Selectcalenderyr'>
                            <div
                              className='form-group w-100 mr-2'
                              data-toggle='collapse'
                              href='#ExpStartMont'>
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
                                      searchable={false}
                                      cleanable={false}
                                      className={`${errors.startMonth ? "is-invalid" : ""
                                        }`}
                                      data={MONTHS}
                                    />
                                  );
                                }}
                              />
                              {errors.startMonth && (
                                <p className='text-danger'>
                                  Start date is required
                                </p>
                              )}
                            </div>
                            <div
                              className='form-group w-100 ml-2'
                              data-toggle='collapse'
                              href='#ExpStartYear'>
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
                                      className={`${errors.startYear ? "is-invalid" : ""
                                        }`}
                                      data={generateArrayOfYears()}
                                    />
                                  );
                                }}
                              />

                              {errors.startYear && (
                                <p className='text-danger'>
                                  Start year is required
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className='input-group'>
                          <div className='form-group currentlyWorking'>
                            <input
                              name='isCurrentlyWorking'
                              type='checkbox'
                              checked={currentlyWork}
                              onChange={currentworkhandler}
                              className={`checkboccuuently`}
                            />
                            <label className="pointer" onClick={() => setCurrentlyWork(!currentlyWork)}>Currently Working</label>
                          </div>
                        </div>
                        {currentlyWork ? (
                          ""
                        ) : (
                          <div
                            className='input-group calender datespl'
                            key={random}>
                            <label>
                              To
                              <span className='mandatoryField'>*</span>
                            </label>
                            <div className='Selectcalenderyr'>
                              <div
                                className='form-group w-100 mr-2'
                                data-toggle='collapse'
                                href='#ExpendMonth'>
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
                                        className={`${errors.endMonth ? "is-invalid" : ""
                                          }`}
                                        data={MONTHS}
                                      />
                                    );
                                  }}
                                />

                                {errors.endMonth && (
                                  <p className='text-danger'>
                                    End date is required
                                  </p>
                                )}
                              </div>
                              <div
                                className='form-group ml-2 w-100'
                                data-toggle='collapse'
                                href='#ExpendYear'>
                                <Controller
                                  {...register("endYear", {
                                    required: true,
                                  })}
                                  control={control}
                                  render={({ field: { onChange, value } }) => {
                                    if (
                                      getValues("endMonth") ==
                                      getValues("startMonth") ||
                                      getValues("endMonth") <
                                      getValues("startMonth")
                                    ) {
                                      if (
                                        getValues("startYear") ==
                                        getValues("endYear") &&
                                        getValues("endMonth")
                                      ) {
                                        setValue("endYear", null);
                                      }
                                    }
                                    onChange = (event) => {
                                      setValue("endYear", event);
                                      clearErrors("endYear");
                                      if (getValues("startMonth") === event) {
                                        setValue("endYear", " ");
                                      }
                                    };
                                    return (
                                      <SelectPicker
                                        onChange={onChange}
                                        searchable={false}
                                        cleanable={false}
                                        className={`${errors.endYear ? "is-invalid" : ""
                                          }`}
                                        data={generateArrayOfFromYears(
                                          getValues("startYear"),
                                          getValues("startMonth"),
                                          getValues("endMonth")
                                        )}
                                      />
                                    );
                                  }}
                                />

                                {errors.endYear && (
                                  <p className='text-danger'>
                                    End year is required
                                  </p>
                                )}
                              </div>
                            </div>
                            {errors.endDate && (
                              <p className='text-danger'>End date is required</p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className='form-title margintitle'>
                        <h3 data-toggle='collapse'>
                          <i className='fa-light fa-address-book mr-2'></i>Address{" "}
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
                      <div className='form-title margintitle'>
                        <h3 data-toggle='collapse'>
                          <i className='fa-light fa-memo-circle-info'></i>
                          Description{" "}
                        </h3>
                      </div>
                      <div className='input-group Activityined full-Width-group'>
                        <div className='Activityined'>
                          <div>
                            <textarea
                              className={`form-control text-rows ${errors.description ? "is-invalid" : ""
                                }`}
                              cols='64'
                              // placeholder="Description"
                              {...register("description")}></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='input-group full-Width-group basic_details_form'>
                      <div className='form-group BDsubmitbutton d-flex m-0'>
                        {getSelectedUser?.experiences?.length == 0 ? (
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
                              <span className='RounAnimation mr-1'></span>{" "}
                              Please Wait...
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
                <div>
                  {getSelectedUser?.experiences?.length > 0
                    ? getSelectedUser?.experiences
                      ?.sort(
                        (a, b) =>
                          b.startDate.split(" ")[1] -
                          a.startDate.split(" ")[1]
                      )
                      ?.map((value, key) => (
                        <React.Fragment key={key}>
                          <CompanyList exp={value} />
                        </React.Fragment>
                      ))
                    : ""}
                  {!openForm ? (
                    <div className='form-group BDsubmitbutton Addchieldbtn   addEnrichbtn pr-10 d-flex'>
                      <strong
                        onClick={() => addExperienceHandler()}
                        className=' d-block  ml-auto'>
                        Add Experience <span>+</span>
                      </strong>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      </div>
      <Profile />
    </Home>
  );
};

export default Experience;

/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, ShimmerText } from "../../utils/Packages";
import Home from "../Home";
import * as image from "../../resources/images";

import { Profile, Teacher } from "./";

import {
  getAllSchoolsByKeyWords,
  addStudentEducation,
  getCourses,
  deleteEduTeacher,
  deleteUserSchool,
} from "../../redux/actions/APIs";
import { isLoading, breadcrumb } from "../../redux/actions";

import SearchField from "../controls/SearchField";
import AddressForm from "../controls/AddressForm";
import UploadPhoto from "./UploadPhoto";
import { formatMobNo, getCapitalized } from "../../utils/helper";
import { MSG } from "../../utils/Messages";

import DeletePopup from "../controls/DeletePopup";

const SchoolInfo = () => {
  const {
    register,
    setValue,
    reset,
    resetField,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const { schoolsbykeyword, getSelectedUser, response } = useSelector(
    (state) => state.collections
  );
  const [openForm, setOpenForm] = useState(false);
  const [openTeacherForm, setOpenTeacherForm] = useState(false);
  const [teacherId, setTeacherId] = useState(0);

  const [schoolData, setSchoolData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [stateDisable, setStateDisable] = useState(false);
  const [addressData, getAddressData] = useState({});
  const [toggleClick, SetToggleClick] = useState(false);
  const [learnerId, setLearnerId] = useState();

  const [term, setTerm] = useState();

  const [enrollLoader, setEnrollLoader] = useState(false);
  const [startPopup, setStartPopup] = useState(false);
  const [interestId, setInterestId] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [delType, setDelType] = useState("");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    reset();
    setSchoolData();
    getAddressData("");
  }, [getSelectedUser?.id]);

  useEffect(() => {
    if (getSelectedUser?.schoolDetails?.school) {
      setOpenForm(false);
      reset();
      setFilteredData([]);
      setSchoolData();
      setTerm("");
    } else {
      setOpenForm(true);
    }
  }, [getSelectedUser]);

  useEffect(() => {
    if (response) {
      setEnrollLoader(false);
      // setLoader(false);
    }
  }, [response]);

  const [loading, setloading] = useState(undefined);
  const [techerLoading, settecherLoading] = useState(undefined);

  const _onSubmit = (values) => {
    // return false;
    setloading(true);
    setEnrollLoader(true);

    if (schoolData) {
      values.schoolId = schoolData.id;
      values.name = "schoolName";
    }

    // setEnrollLoader(true);
    dispatch(addStudentEducation(values, getSelectedUser.id)).then(() => {
      if (response?.success) {
        reset();
      }
    });
  };

  const OpenTeacherHandler = (id) => {
    dispatch(getCourses(id));
    setOpenTeacherForm(true);
  };

  const resetFieldsSchool = () => {
    reset();
    setStateDisable(false);
    getAddressData({});
    resetField("name");
    resetField("address1");
    resetField("address2");
    resetField("country");
    resetField("state");
    resetField("city");
    resetField("zip");
    reset();
  };

  useEffect(() => {
    setStateDisable(false);
    reset({
      name: "",
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
      zip: "",
    });
  }, []);

  const resetCancel = () => {
    setStateDisable(false);
    resetFieldsSchool();
    SetToggleClick(!toggleClick);
  };

  const selectAddress = (data) => {
    getAddressData(data);
  };

  const addTeacherForm = () => {
    settecherLoading(true);
    setOpenTeacherForm(false);
  };

  useEffect(() => {
    dispatch(
      breadcrumb({ title: "School Information", icon: image.enrichment })
    );
  }, [getSelectedUser?.id]);

  const deleteInt = (type, id, schoolid, courseid) => {
    if (type === "school") {
      setStartPopup(true);
      setInterestId(id);
      setDelType("school");
    } else if (type === "teacher") {
      setStartPopup(true);
      setInterestId(id);
      setSchoolId(schoolid);
      setCourseId(courseid);
      setDelType("teacher");
    }
  };

  const handleDelete = () => {
    setloading(true);
    setLoader(true);
    if (delType === "school") {
      // setLoader(true)
      dispatch(deleteUserSchool(getSelectedUser.id, interestId)).then(() => {
        setStartPopup(false);
        setLoader(false);
        reset();
        getAddressData("");
      });
    } else if (delType === "teacher") {
      // setLoader(true)
      dispatch(
        deleteEduTeacher(
          getSelectedUser.id,
          interestId,
          schoolId,
          courseId,
          "school"
        )
      ).then(() => {
        setStartPopup(false);
        setLoader(false);
        reset();
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      settecherLoading(false);
      setloading(false);
    }, 1500);
  }, [getSelectedUser]);

  return (
    <Home>
      <div className="LeftbarPannel p-0" id="School_information">
        {openForm == true ? <UploadPhoto color={"#1ec1d9"} /> : ""}
        <div className="PannelContent basicdetailsform px-5 Profile_form">
          <>
            {openForm === true ? (
              <>
                <div className="wrapper">
                  <form
                    name="schoolinformation"
                    className="bg-white content"
                    onSubmit={handleSubmit(_onSubmit)}
                  >
                    <div className="fomfiledList flex flex-wrap">
                      <div className="form-title">
                        <h3 data-toggle="collapse">
                          <i className="fa-solid fa-school mr-2"></i> School{" "}
                        </h3>
                      </div>
                      <div className="flex w-100 mobileWrap">
                        <div className="input-group placeholderseach">
                          <div className="search">
                            <div className="searchInputs">
                              <SearchField
                                placeholder={"Search School..."}
                                resetFields={resetFieldsSchool}
                                name="schoolName"
                                toggleClick={toggleClick}
                                isLoading={isLoading}
                                setValue={setValue}
                                setSchoolData={setSchoolData}
                                schoolData={schoolData}
                                type="schoolName"
                                selectAddress={selectAddress}
                                dataFetched={schoolsbykeyword}
                                commonFetch={getAllSchoolsByKeyWords}
                                setCompanyStateDisable={setStateDisable}
                                register={register}
                                error={errors.schoolName ? true : false}
                              />
                              {errors.schoolName && (
                                <p className="text-danger">{MSG.SCHOOLNMREQ}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="signupType m-0 mobmargin">
                            <label className="Selcheckbox mt-1">
                              Public
                              <input
                                type="radio"
                                id="Public"
                                {...register("schoolType", {
                                  required: true,
                                })}
                                value="PUBLIC"
                                defaultChecked
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                            <label className="Selcheckbox mt-1">
                              Private
                              <input
                                type="radio"
                                id="Private"
                                {...register("schoolType", {
                                  required: true,
                                })}
                                value="PRIVATE"
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-title margintitle">
                        <h3 data-toggle="collapse">
                          <i className="fa-light fa-address-book mr-2"></i>
                          Address{" "}
                        </h3>
                      </div>
                      <AddressForm
                        errors={errors}
                        register={register}
                        setValue={setValue}
                        addressData={addressData}
                        showAddress={true}
                        type="addressform2"
                      />
                    </div>
                    <div className="input-group full-Width-group basic_details_form mt-2 ">
                      <div className="buttonDistribotion">
                        <div className="form-group BDsubmitbutton d-flex m-0">
                          {getSelectedUser?.schoolDetails?.school ? (
                            <button
                              type="button"
                              className="btn-blue btn-login d-block mb-5"
                              onClick={() => history.goBack()}
                            >
                              <i className="fa-solid fa-arrow-left"></i> Back
                            </button>
                          ) : (
                            ""
                          )}
                          <div className="buttonDistribotion">
                            {!enrollLoader && (
                              <button
                                type="button"
                                onClick={() => resetCancel()}
                                className="btn-blue btn-login d-block mb-5 cancelbutton"
                              >
                                <i className="fa-solid fa-xmark"></i> Cancel
                              </button>
                            )}

                            {enrollLoader ? (
                              <button
                                className="btn-blue btn-login d-block mb-5 "
                                key={Math.random()}
                                disabled
                              >
                                <span className="RounAnimation mr-1"></span>{" "}
                                Please Wait...
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
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div>
                {!loading ? (
                  <div className="FieldinfoCard">
                    <div>
                      <div className="fcardTitle">
                        <div className="headingTitle">
                          {/* <img
                          src={image.schoolcardicon}
                          alt=""
                          className="mr-2"
                        /> */}
                          <span className="TeacherActivityimg d-block mr-2">
                            {" "}
                            <i className="fa-regular fa-school ActivityIcon"></i>
                          </span>

                          <div className="FcardDesc">
                            <h4>
                              {getSelectedUser?.schoolDetails?.school?.name}
                            </h4>

                            <h5>
                              {getSelectedUser?.schoolDetails?.school
                                ?.address1 +
                                " " +
                                getSelectedUser?.schoolDetails?.school
                                  ?.address2 +
                                ", " +
                                getSelectedUser?.schoolDetails?.school?.city +
                                " " +
                                getSelectedUser?.schoolDetails?.school?.state +
                                ", " +
                                getSelectedUser?.schoolDetails?.school?.zip}
                            </h5>
                          </div>

                          <div className="editcard">
                            <span
                              className=""
                              onClick={() =>
                                deleteInt(
                                  "school",
                                  getSelectedUser?.schoolDetails?.school?.id
                                )
                              }
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="teacherlist">
                        {/* {!techerLoading ? ( */}
                        <ul>
                          {getSelectedUser?.schoolDetails?.teachers &&
                            getSelectedUser?.schoolDetails?.teachers.map(
                              (value, key) => (
                                <li key={key}>
                                  <div className="teacherListitm">
                                    <img src={image.subject} />
                                    <div className="cardfield">
                                      Subject
                                      <span>
                                        {value?.courses &&
                                          value?.courses[0]?.name}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="teacherListitm">
                                    <img src={image.teachers} />
                                    <div className="cardfield">
                                      Teacher
                                      <span className="text-capitalize">
                                        {" "}
                                        {getCapitalized(value?.firstName) +
                                          " " +
                                          (value?.middleName
                                            ? value?.middleName
                                                .charAt(0)
                                                .toUpperCase()
                                            : "") +
                                          " " +
                                          getCapitalized(value?.lastName)}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="teacherListitm">
                                    <img src={image.teacheremail} />{" "}
                                    <div className="cardfield">
                                      Email
                                      <span>
                                        {" "}
                                        <a
                                          href={`mailto:${value?.email}`}
                                          target="blank"
                                        >
                                          {value?.email}
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="teacherListitm">
                                    <img src={image.phoneno} alt="..." />{" "}
                                    <div className="cardfield">
                                      Mobile
                                      <span>{formatMobNo(value?.mobile)}</span>
                                    </div>
                                  </div>

                                  <div className="editcard teacherListitm">
                                    <span
                                      onClick={() =>
                                        deleteInt(
                                          "teacher",
                                          getSelectedUser?.schoolDetails?.school
                                            ?.id,
                                          value?.id,
                                          value?.courses[0].id
                                        )
                                      }
                                    >
                                      {" "}
                                      <i className="fa-solid fa-trash-can"></i>
                                    </span>
                                  </div>
                                </li>
                              )
                            )}
                        </ul>
                        {/* ) : (
                          <ShimmerText line={5} gap={10} />
                        )} */}
                      </div>
                      <div className="form-group BDsubmitbutton Addchieldbtn addEnrichbtn d-flex pr-3 mt-2">
                        <strong
                          className="d-block  ml-auto"
                          onClick={() => {
                            setTeacherId(0);
                            OpenTeacherHandler(getSelectedUser?.id);
                            // setLearnerId(getSelectedUser?.id);
                            settecherLoading(true);
                            setloading(false);
                          }}
                        >
                          Add Teacher <span>+</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ShimmerText line={5} gap={10} />
                )}
              </div>
            )}

            {openTeacherForm == true ? (
              <Teacher
                teacherObj={teacherId}
                addTeacherForm={addTeacherForm}
                learnerId={learnerId}
              />
            ) : (
              ""
            )}
          </>
        </div>
      </div>

      <Profile resetForm={reset} isReset={true} />
      {startPopup && (
        <DeletePopup
          setStartPopup={setStartPopup}
          handleDelete={handleDelete}
          loader={loader}
        />
      )}
    </Home>
  );
};

export default SchoolInfo;

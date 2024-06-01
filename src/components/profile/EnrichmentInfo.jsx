/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Home from "../Home";
import * as image from "../../resources/images";
import Profile from "./Profile";
import Teacher from "./teacher";
import {
  getEnrichByKeyWords,
  addEnrichCenter,
  getCourses,
  deleteEduTeacher,
} from "../../redux/actions/APIs";
import { isLoading, breadcrumb } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { deleteEnrichment } from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import { ShimmerText } from "../../utils/Packages";

import SearchField from "../controls/SearchField";
import AddressForm from "../controls/AddressForm";
import UploadPhoto from "./UploadPhoto";
import { formatMobNo, getCapitalized, getName } from "../../utils/helper";
import DeletePopup from "../controls/DeletePopup";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EnrichmentInfo = () => {
  const {
    register,
    setValue,
    reset,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { enrichByKeywords, getSelectedUser, response } = useSelector(
    (state) => state.collections
  );
  const history = useHistory();
  const [openForm, setOpenForm] = useState(false);
  const [openTeacherForm, setOpenTeacherForm] = useState(false);
  const [teacherId, setTeacherId] = useState(0);
  const [enrichId, setEnrichId] = useState(0);

  const [enrichData, setEnrichData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [stateDisable, setStateDisable] = useState(false);
  const [addressData, getAddressData] = useState({});
  const [toggleClick, SetToggleClick] = useState(false);

  const [term, setTerm] = useState();

  const [enrollLoader, setEnrollLoader] = useState(false);

  const [startPopup, setStartPopup] = useState(false);
  const [enrichmentId, setEnrichmentId] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [delType, setDelType] = useState("");

  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    reset();
    setEnrichData();
    getAddressData("");
  }, [getSelectedUser?.id]);

  useEffect(() => {
    if (response) {
      setEnrollLoader(false);
    }
  }, [response]);

  useEffect(() => {
    if (
      getSelectedUser?.enrichmentDetails &&
      getSelectedUser?.enrichmentDetails?.length === 0
    ) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  }, [getSelectedUser]);

  const [loading, setloading] = useState(undefined);
  const [techerLoading, settecherLoading] = useState(undefined);
  const _onSubmit = (values) => {
    setloading(true);
    setEnrollLoader(true);
    dispatch(addEnrichCenter(values, getSelectedUser.id)).then(() => {
      if (response?.success) {
        reset();
      }
    });
  };

  const OpenTeacherHandler = (id) => {
    dispatch(getCourses());
    setOpenTeacherForm(true);
  };

  const resetFields = () => {
    setStateDisable(false);
    setTerm("");
    resetField("name");
    resetField("address1");
    resetField("address2");
    resetField("country");
    resetField("state");
    resetField("city");
    resetField("zip");
    setFilteredData([]);
  };

  const addTeacherForm = () => {
    setOpenTeacherForm(false);
    settecherLoading(true);
    setloading(false);
  };

  const editenrichment = (enrId) => {
    history.push(
      PATHS.EDIT_ENRICHMENTINFO_STR + enrId + "/" + getSelectedUser.id
    );
  };

  const resetFieldsEnrich = () => {
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
    resetFieldsEnrich();
    SetToggleClick(!toggleClick);
  };

  const selectAddress = (data) => {
    getAddressData(data);
  };
  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Enrichment Information",
        icon: image.enrichmentIcon,
      })
    );
  }, [param?.id]);

  const deleteInt = (type, id, schoolid, courseid) => {
    settecherLoading(true);
    if (type === "enrichment") {
      setStartPopup(true);
      setEnrichmentId(id);
      setDelType("enrichment");
    } else if (type === "teacher") {
      setStartPopup(true);
      setEnrichmentId(id);
      setSchoolId(schoolid);
      setCourseId(courseid);
      setDelType("teacher");
    }
  };

  const handleDelete = () => {
    setLoader(true);
    if (delType === "enrichment") {
      dispatch(deleteEnrichment(enrichmentId, getSelectedUser.id)).then(() => {
        setStartPopup(false);
        setLoader(false);
        reset();
        getAddressData("");
      });
    } else if (delType === "teacher") {
      dispatch(
        deleteEduTeacher(getSelectedUser.id, enrichmentId, schoolId, courseId)
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
      <div className='LeftbarPannel p-0' id='School_information'>
        {openForm == true ? <UploadPhoto color={"#1ec1d9"} /> : ""}
        <div className='PannelContent basicdetailsform px-5 Profile_form'>
          <>
            {openForm === true ? (
              <>
                <div className='wrapper'>
                  <form
                    name='schoolinformation'
                    className='bg-white content'
                    onSubmit={handleSubmit(_onSubmit)}>
                    <div className='fomfiledList flex flex-wrap'>
                      <div className='form-title'>
                        <h3 data-toggle='collapse'>
                          <i className='fa-solid fa-school mr-2'></i> Enrichment{" "}
                        </h3>
                      </div>
                      <div className='input-group placeholderseach'>
                        <div className='search'>
                          <div className='searchInputs'>
                            <SearchField
                              placeholder={"Search Enrichment..."}
                              resetFields={resetFieldsEnrich}
                              name='name'
                              toggleClick={toggleClick}
                              isLoading={isLoading}
                              setValue={setValue}
                              setEnrichData={setEnrichData}
                              enrichData={enrichData}
                              type='name'
                              selectAddress={selectAddress}
                              dataFetched={enrichByKeywords}
                              commonFetch={getEnrichByKeyWords}
                              setCompanyStateDisable={setStateDisable}
                              register={register}
                              error={errors.name ? true : false}
                            />
                            {errors.name && (
                              <p className='text-danger'>
                                Enrichment Name is required.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='form-title margintitle'>
                        <h3 data-toggle='collapse'>
                          <i className='fa-light fa-address-book mr-2'></i>
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
                    </div>
                    <div className='input-group full-Width-group basic_details_form mt-2 '>
                      <div className='buttonDistribotion'>
                        <div className='form-group BDsubmitbutton d-flex m-0'>
                          {getSelectedUser?.enrichmentDetails?.length === 0 ? (
                            ""
                          ) : (
                            <button
                              type='button'
                              className='btn-blue btn-login d-block mb-5 back_button'
                              onClick={() => {
                                setOpenForm(false);
                                reset();
                              }}>
                              <i className='fa-solid fa-arrow-left'></i> Back
                            </button>
                          )}
                          <div className='buttonDistribotion'>
                            {!enrollLoader && (
                              <button
                                type='button'
                                onClick={() => resetCancel()}
                                className='btn-blue btn-login d-block mb-5 cancelbutton'>
                                <i className='fa-solid fa-xmark'></i> Cancel
                              </button>
                            )}

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
                    </div>
                  </form>
                </div>
              </>
            ) : !loading ? (
              <div>
                {getSelectedUser?.enrichmentDetails &&
                getSelectedUser?.enrichmentDetails
                  ? getSelectedUser?.enrichmentDetails.map((val, ky) => (
                      <div className='FieldinfoCard' key={ky}>
                        <div>
                          <div className='fcardTitle'>
                            <div className='headingTitle'>
                              {/* <img
                                src={image.schoolcardicon}
                                alt=""
                                className="mr-2"
                              /> */}
                              <span className='TeacherActivityimg d-block mr-2'>
                                {" "}
                                <i className='fa-regular fa-school ActivityIcon'></i>
                              </span>

                              <div className='FcardDesc'>
                                <h4> {val?.enrichment?.name}</h4>
                                <h5>
                                  {val?.enrichment?.address1 +
                                    " " +
                                    val?.enrichment?.address2 +
                                    ", " +
                                    val?.enrichment?.city +
                                    " " +
                                    val?.enrichment?.state +
                                    ", " +
                                    val?.enrichment?.zip}
                                </h5>
                              </div>
                              <div className='editcard'>
                                {/* <span
																		className=''
																		onClick={() =>
																			editenrichment(
																				val?.enrichment?.id
																			)
																		}>
																		<i className='fa fa-pencil'></i>
																	</span> */}
                                <span
                                  className=''
                                  onClick={() =>
                                    deleteInt(
                                      "enrichment",
                                      val?.enrichment?.id,
                                      getSelectedUser.id
                                    )
                                  }>
                                  <i className='fa-solid fa-trash-can'></i>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className='teacherlist'>
                            {!techerLoading ? (
                              <ul>
                                {val.teachers?.map((value, key) => (
                                  <li key={key}>
                                    <div className='teacherListitm'>
                                      <img src={image.subject} alt='...' />
                                      <div className='cardfield'>
                                        Subject
                                        <span>
                                          {value?.courses &&
                                            value?.courses[0]?.name}
                                        </span>
                                      </div>
                                    </div>
                                    <div className='teacherListitm'>
                                      <img src={image.teachers} alt='...' />
                                      <div className='cardfield'>
                                        Teacher
                                        <span className='text-capitalize'>
                                          {getCapitalized(getName(value))}
                                        </span>
                                      </div>
                                    </div>
                                    <div className='teacherListitm'>
                                      <img src={image.teacheremail} alt='...' />{" "}
                                      <div className='cardfield'>
                                        Email
                                        <span> {value?.email}</span>
                                      </div>
                                    </div>

                                    <div className='teacherListitm'>
                                      <img src={image.phoneno} alt='...' />{" "}
                                      <div className='cardfield'>
                                        Mobile
                                        <span>
                                          {" "}
                                          {formatMobNo(value?.mobile)}
                                        </span>
                                      </div>
                                    </div>
                                    <div className='teacherListitm editcard'>
                                      <span
                                        onClick={() =>
                                          deleteInt(
                                            "teacher",
                                            val?.enrichment?.id,
                                            value.id,
                                            value?.courses[0]?.id
                                          )
                                        }>
                                        {" "}
                                        <i className='fa-solid fa-trash-can'></i>
                                      </span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <ShimmerText line={5} gap={10} />
                            )}
                          </div>
                          <div className='form-group BDsubmitbutton Addchieldbtn addEnrichbtn d-flex pr-3 mt-2'>
                            <strong
                              className='d-block ml-auto'
                              onClick={() => {
                                setTeacherId(0);
                                OpenTeacherHandler(0);
                                setEnrichId(val?.enrichment?.id);
                              }}>
                              Add Teacher <span>+</span>
                            </strong>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
                <div className='form-group BDsubmitbutton Addchieldbtn   addEnrichbtn pr-10 d-flex mt-2'>
                  <strong
                    className='d-block  ml-auto'
                    onClick={() => {
                      setOpenForm(true);
                      reset();
                      setFilteredData([]);
                      setEnrichData();
                      setTerm("");
                      setStateDisable(false);
                      getAddressData({});
                    }}>
                    Add Enrichment <span>+</span>
                  </strong>
                </div>
              </div>
            ) : (
              <ShimmerText line={5} gap={10} />
            )}

            {openTeacherForm == true ? (
              <>
                <Teacher
                  teacherObj={teacherId}
                  addTeacherForm={addTeacherForm}
                  type={"enrichment"}
                  enrichId={enrichId}
                />
              </>
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

export default EnrichmentInfo;

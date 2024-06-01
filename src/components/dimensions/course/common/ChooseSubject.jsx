import React, { useState } from "react";
import { useForm, useParams } from "../../../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import {
  enrollCourse,
  getDimensionData,
  getDimensions,
} from "../../../../redux/actions/APIs";
import { isLoading, setProviderModal } from "../../../../redux/actions";
import Modal from "react-bootstrap/Modal";
import * as image from "../../../../resources/images";
import { ShimmerCategoryList } from "../../../../utils/Packages";
import { getProfileName, htmlStrip, getImage } from "../../../../utils/helper";
import ReadMore from "../../../controls/ReadMore";
import ProviderProfile from "../../../controls/ProviderProfile";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DeletePopup from "../../../controls/DeletePopup";
import CourseRatings from "../../../controls/CourseRatings";
const ChooseSubject = ({
  data,
  close,
  intellectualid,
  selectedTab,
  handlePopUp,
  setDisable,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    selectedDim,
    dimension,
    loading,
    getSelectedUser,
    defaultChildData,
    response,
    getdimension,
  } = useSelector((state) => state.collections);
  const [startPopup, setStartPopup] = useState(false);
  const [ratingClass, setRatingClass] = useState(false);
  const [shimerLoader, setShimerLoader] = useState(true);
  const [selectCourseId, setSelectCourseId] = useState();
  const [type, setType] = useState();
  const [dimId, setDimId] = useState();

  let dimName = "Intellectual";
  if (intellectualid?.id) {
    dimName = intellectualid?.name;
  } else {
    dimName = selectedTab?.key?.value;
  }

  useEffect(() => {
    if (selectedTab === undefined) {
      setDimId({
        key: intellectualid?.id,
        value: intellectualid?.name,
      });
    } else {
      setDimId(selectedDim);
    }
  }, [selectedTab]);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const param = useParams();

  const [loader, setLoader] = useState(false);

  const _onSubmit = () => {
    setDisable(true);
    setLoader(true);
    setTimeout(() => {
      setDisable(false);
    }, 10000);

    dispatch(isLoading(true));
    let areaId = data?.area?.id;

    let courseId = selectCourseId;
    let userId = defaultChildData?.id;

    if (selectedDim) {
      dispatch(
        enrollCourse(userId, dimId, areaId, courseId, dimension, false)
      ).then(() => {
        close();
        setStartPopup(false);
        setDisable(true);
        setLoader(false);
        setTimeout(() => {
          setDisable(false);
        }, 7000);
      });
    }
  };

  const handleEnroll = (CourseId) => {
    setSelectCourseId(CourseId?.id);
    setStartPopup(true);
    setType("enroll");
  };

  const [enrollLoader, setEnrollLoader] = useState();

  const handleEnrollment = (data, skId) => {
    if (defaultChildData?.isSubscriber) {
      setEnrollLoader(data?.id);
      let areaId = skId;
      let courseId = data?.id;
      let userId = defaultChildData?.id;

      if (selectedDim) {
        dispatch(
          enrollCourse(userId, selectedDim, areaId, courseId, dimension, false)
        );
      } else {
        if (intellectualid?.id) {
          let dimData = {
            key: intellectualid?.id,
            value: intellectualid?.name,
          };

          dispatch(
            enrollCourse(
              userId,
              dimData,
              areaId,
              courseId,
              dimension,
              "dashboard"
            )
          );
        }
      }
    } else {
      handlePopUp(data, skId, "", true);
    }
  };

  useEffect(() => {
    if (response) {
      setEnrollLoader();
      if (
        data?.area?.name === "Social Studies" ||
        data?.area?.name === "Science"
      ) {
        dispatch(getDimensionData());
        dispatch(
          getDimensionData(defaultChildData?.id, selectedDim, selectedDim)
        );
      }
      setShimerLoader(undefined);
      setTimeout(() => {
        setShimerLoader(true);
      }, 2000);
    }
  }, [response]);

  const [ratingState, setRatingState] = useState("");
  const [rateState, setRateState] = useState(false);

  useEffect(() => {
    if (rateState) {
      setRatingState(data?.length - 1);
    } else {
      setRatingState("");
      setRateState(false);
    }
  }, [data, rateState]);

  
 const setProviderPopup = (provider, data) => {
  provider.courseObj = data;
  dispatch(setProviderModal(provider));
};

  return (
    <>
      <Modal
        id='common-modal'
        size='lg'
        centered={true}
        show={true}
        className={`courseInformation halfPagePOpup SchoolActivityPopup ${
          ratingClass ? "overflow-hidden" : " "
        }`}
        aria-labelledby='example-modal-sizes-title-sm'>
        <Modal.Header className={``}>
          <div className='heading w-100 p-0 border-0'>
            <h2 className='flex'>
              <span>
                <img src={image.Chooseyoyrcourse} alt='' /> Select Your Course:{" "}
                {data?.area?.name}
              </span>
              <button
                data-dismiss='modal'
                className='btn btn-primary'
                onClick={() => close()}>
                <i className='fa-regular fa-xmark m-0'></i>
              </button>
            </h2>
          </div>
        </Modal.Header>
        {/* 
        <div className="modal-title flex h4 w-100  border">
          <div className="EnrollTitle border-0 w-100 p-0 flex">
            <div className="NuggetVickyImage flex align-items-center w-100 px-2 mx-1">
              <h4>
                {" "}
                <div className="popupboxstyl mt-2 pt-2 pb-2">
                  <p>
                    You need to enroll in one of the available courses to
                    proceed.
                  </p>
                </div>
              </h4>
            </div>
          </div>
        </div> */}
        <form
          name='addchildform'
          className='bg-white p content'
          onSubmit={handleSubmit(_onSubmit)}>
          {shimerLoader && data ? (
            <Modal.Body className='fullWidthPopup forlikepopup p-0'>
              <div className='modal-body Subject_Curriculam pt-0 '>
                <div className='AllCoursesDimensionlist'>
                  {/* <h3 className="DiemenTitle mb-2">
                    {dimName == "Intellectual" ? (
                      <img src={image.courselevel3} className="mr-2" alt="" />
                    ) : (
                      <img src={image.courselevel2} className="mr-2" alt="" />
                    )}
                    {dimName}
                  </h3> */}
                  <div className='SocialCoursecardWrap'>
                    {data?.map((val, index) => (
                      <div
                        key={index}
                        className={`cardListoAsDie panel-collapse collapse show ${
                          ratingState === index ? "lastIndex" : ""
                        }`}
                        // className='cardListoAsDie panel-collapse collapse show'
                        id='red'>
                        <div className='Gridcard SocialGridcard'>
                          <div className='Gridsocialsec'>
                            <div className='GridiamgeCard'>
                              <div className='Gridimage'>
                                <img src={getImage(val?.imageUrl)} />
                              </div>
                              {data?.type === "PROVIDER" && (
                                <div className=' ratepopupp position-relative'>
                                  <CourseRatings
                                    data={val}
                                    setRatingClass={setRatingClass}
                                    setRateState={setRateState}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='GridDetails'>
                            <div className='GridCardTitle pe-none'>
                              <h3>{val?.name}</h3>
                            </div>
                            <div className='GridCardFullDetails'>
                              <div className='GridCardTitleDesc'>
                                <div className='GridCardTitleDesc w-100 p-0'>
                                  {getSelectedUser?.grade && (
                                    <div className=' flex'>
                                      <span className='gradeiconimage ml-5 d-flex'>
                                        <img src={image.mortarboard} alt='' />
                                        <span className=''>
                                          Grade:{" "}
                                          <strong>
                                            {getSelectedUser?.grade}
                                          </strong>
                                        </span>
                                      </span>
                                    </div>
                                  )}

                                  {val?.provider?.name && (
                                    <div className='GridTeacher align-items-center justify-content-end'>
                                      <span className='TeacherActivityimg mr-2 pointer'>
                                        {val?.provider?.imageUrl ? (
                                          <img
                                            src={val?.provider?.imageUrl}
                                            alt='...'
                                          />
                                        ) : (
                                          <span className='ProfileChild pointer'>
                                            {getProfileName(val?.provider)}
                                          </span>
                                        )}
                                      </span>
                                      <div className='teachername pointer'>
                                        <span  onClick={() =>
                                    setProviderPopup(val?.provider, val)
                                  }>{val?.provider?.name}</span>
                                        {Object.keys(val?.provider).length >
                                          0 &&
                                          val?.type === "PROVIDER" && (
                                            <ProviderProfile
                                              data={val}
                                              provId={val?.provider}
                                            />
                                          )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className='gridActivity'>
                                <div className='CourseardDesc px-0'>
                                  <p className='d-flex'>
                                    <span>
                                      <img src={image.myhc_92884} alt='' />
                                    </span>
                                    <ReadMore height={50}>
                                      {htmlStrip(val?.description)}
                                    </ReadMore>
                                  </p>
                                </div>

                                {val?.type === "PROVIDER" ? (
                                  <div className=' flex w-100 '>
                                    {!val?.isEnrolled &&
                                    enrollLoader === val?.id ? (
                                      <button
                                        className='btn-blue btn-login d-block ml-auto mr-2 my-2 w-auto'
                                        key={data?.area?.id}
                                        disabled>
                                        <span className='RounAnimation mr-1'></span>{" "}
                                        Please Wait...
                                      </button>
                                    ) : !val?.isEnrolled ? (
                                      <div className='priceWrap p-0'>
                                        <button
                                          className={`btn-blue btn-login d-block w-auto m-0 ml-auto mr-2 mb-2 mt-2`}
                                          onClick={() =>
                                            handleEnrollment(
                                              val,
                                              data?.area?.id
                                            )
                                          }
                                          type='button'>
                                          <i className='fa-solid fa-paper-plane mr-2'></i>{" "}
                                          Select
                                        </button>
                                      </div>
                                    ) : (
                                      <div className=' flex w-100'>
                                        <div className='priceWrap enrolledBtn d-flex justify-content-end'>
                                          <img
                                            src={image.enrolledicon}
                                            className='mr-1'
                                            alt=''
                                          />{" "}
                                          Selected
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : val?.isEnrolled ? (
                                  <div className=' flex w-100'>
                                    <div className='priceWrap enrolledBtn d-flex justify-content-end'>
                                      <img
                                        src={image.enrolledicon}
                                        className='mr-1'
                                        alt=''
                                      />{" "}
                                      Selected
                                    </div>
                                  </div>
                                ) : (
                                  <div className=' flex w-100'>
                                    <div className='priceWrap p-0'>
                                      <button
                                        className='btn-blue btn-login d-block w-auto m-0 ml-auto mr-2 mb-2 mt-2'
                                        type='button'
                                        onClick={() => handleEnroll(val)}>
                                        <i className='fa-solid fa-paper-plane mr-2'></i>{" "}
                                        Select
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>
          ) : (
            <ShimmerCategoryList items={6} categoryStyle='STYLE_SIX' />
          )}

          <Modal.Footer className='modal-footer'>
            <div className='input-group full-Width-group basic_details_form m-0'>
              <div className='form-group BDsubmitbutton d-flex m-0'>
                <div className='buttonDistribotion'>
                  {loading ? (
                    ""
                  ) : (
                    <button
                      type='button'
                      className='btn-blue btn-login d-block mb-5 cancelbutton'
                      onClick={() => close()}>
                      <i className='fa-solid fa-xmark'></i> Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
      {startPopup && (
        <DeletePopup
          setStartPopup={setStartPopup}
          handleDelete={_onSubmit}
          type={type}
          loader={loader}
        />
      )}
    </>
  );
};

export default ChooseSubject;

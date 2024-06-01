/** @format */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { AddVideo, AddLinks } from "../";
import { addActivityData } from "../../../redux/actions/APIs";
import { ResetSong, isLoading } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import ViewVideo from "./ViewVideo";
import { MSG } from "../../../utils/Messages";

const AddVdoActivity = ({ closeModal, obj, type, showActivityForm }) => {
  const { loggedInUser, dimension, selectedDim, addVideoResponse } =
    useSelector((state) => state.collections);
  const [loading, setloading] = useState();
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const params = useParams();
  const [filteredData, setFilteredData] = useState();
  const [videoPopup, setVideoPopup] = useState();
  const [selectedLink, setSelectedLink] = useState([]);

  const dispatch = useDispatch();
  const close = () => {
    setVideoPopup();
  };
  useEffect(() => {
    if (addVideoResponse) {
      setloading(false);
    }
  }, [addVideoResponse]);

  useEffect(() => {
    if (showActivityForm != null) {
      if (showActivityForm?.type) {
        setValue(`activityName`, showActivityForm?.obj?.name);
        setValue(`description`, showActivityForm?.obj?.description);
      }
    }
  }, [showActivityForm]);

  const _onSubmit = (values) => {
    // dispatch(isLoading(true));
    setloading(true);
    if (selectedLink?.length > 0 || values?.activityDetails?.length > 0) {
      let videoOBject = [];
      let courseArea = obj?.area;

      if (["Links", "Books"].includes(type)) {
        values?.activityDetails.map((val, key) => {
          videoOBject.push({
            link: val?.link,
            name: val?.name,
          });

          if (showActivityForm?.obj?.type === "CUSTOM") {
            values.activityId = showActivityForm?.obj?.id;
          }
        });
        values.activityDetails = videoOBject;
      }

      if (["Videos", "Video"].includes(type)) {
        selectedLink.map((val, key) => {
          if (val?.isChecked) {
            videoOBject.push({
              link: val?.link,
              name: val?.name,
            });
          }
          if (showActivityForm?.obj?.type === "CUSTOM") {
            values.activityId = showActivityForm.obj.id;
          }
        });
        values.activityDetails = videoOBject;
      }

      delete values?.activityDetails[0]?.sharing;
      delete values?.search;

      values.courseId = obj?.id;
      values.contentType = type;
      values.owner = loggedInUser?.id;
      values.userId = params?.id;
      values.inResourceAndNeedHelp = true;
      values.sharing = "PRIVATE";
      selectedLink.map((vl, ky) => {
        delete vl?.type;
      });
      dispatch(
        addActivityData(values, selectedDim, dimension, courseArea, obj)
      );
    } else {
      return false;
    }
  };

  const linkData = (data) => {
    setSelectedLink(data);
  };
  const resetField = (type) => {
    reset();
    dispatch(ResetSong("RESET_SONG"));
    setFilteredData();
  };
  const viewVideoScreen = (data) => {
    setVideoPopup(data);
  };
  const [totalSelected, setTotalSelected] = useState();
  const selectedvideo = (data) => {
    setTotalSelected(data);
  };

  return (
    <>
      <div className="halfPagePOpup">
        <div className="modal  d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <div className="heading border-0 p-0">
                  <h2 className="w-100 flex">
                    <span className="flex">
                      {/* <img src={image.yellowflag} className='mr-2' alt='...' /> */}
                      {(type === "Videos" || type === "Video") && (
                        <div className="mr-2">
                          <i className="fa-brands fa-youtube " />
                        </div>
                      )}
                      {type === "Books" && (
                        <div className="mr-2">
                          <i className="fa-solid fa-book" />
                        </div>
                      )}
                      {type === "Links" && (
                        <div className="mr-2">
                          <i className="fa-solid fa-link" />
                        </div>
                      )}
                      {showActivityForm.type == undefined ? "Add " : "Edit  "}
                      {type === "Books"
                        ? "Book"
                        : type === "Links"
                        ? "Link"
                        : "Video"}{" "}
                      Activity
                    </span>
                    <button
                      data-dismiss="modal"
                      className="btn btn-primary"
                      onClick={() => closeModal()}
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>
              <form onSubmit={handleSubmit(_onSubmit)}>
                <div className="modal-body">
                  <div className="bodyTitle"></div>
                  <div className="">
                    <div className="">
                      <div className="input-group">
                        <label>
                          Activity Name<span className="mandatoryField">*</span>
                        </label>
                        <div className="form-group ">
                          <input
                            type="text"
                            {...register("activityName", {
                              required: {
                                value: true,
                                message: MSG.ACTNAMEREQ,
                              },
                              maxLength: {
                                value: 100,
                                message: MSG.MAX100CHREQ,
                              },
                            })}
                            className={`form-control ${
                              errors.activityName ? "is-invalid" : ""
                            }`}
                            placeholder=""
                          />
                          {errors.activityName && (
                            <p className="text-danger">
                              {errors.activityName.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="input-group">
                        <label>Activity Description (Optional) </label>
                        <div className="Activityined">
                          <div className="form-group ">
                            <textarea
                              type="text"
                              {...register("description", {
                                maxLength: {
                                  value: 255,
                                  message: MSG.MAX255CHREQ,
                                },
                              })}
                              className={`form-control ${
                                errors.description ? "is-invalid" : ""
                              }`}
                              placeholder=""
                            />
                            {errors.description && (
                              <p className="text-danger">
                                {errors.description.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="form_right">
                      <div className="subheading ">
                        <h4>Sharing</h4>
                      </div>
                      <div className="input-group">
                        <div className="form-group forChildren">
                          <label className="Selcheckbox">
                            <i className="fa-regular fa-lock mr-2"></i>Private
                            (family only){" "}
                            <input
                              type="radio"
                              id="Public"
                              checked={true}
                              value="Private"
                              {...register("sharing", {
                                required: true,
                              })}
                            />
                            <span
                              className={`checkmark ${errors.type && "error"}`}
                            ></span>
                          </label>
                          <label className="Selcheckbox">
                            <i className="fa-regular fa-users mr-2"></i>{" "}
                            Community (family and friends)
                            <input
                              type="radio"
                              id="Private"
                              value="Community"
                              disabled={true}
                              {...register("sharing", {
                                required: true,
                              })}
                            />
                            <span
                              className={`checkmark ${errors.type && "error"}`}
                            ></span>
                          </label>
                          <label className="Selcheckbox">
                            <i className="fa-regular fa-globe mr-2"></i> Public
                            (everyone)
                            <input
                              type="radio"
                              id="Private"
                              value="Public"
                              disabled={true}
                              {...register("sharing", {
                                required: true,
                              })}
                            />
                            <span
                              className={`checkmark ${errors.type && "error"}`}
                            ></span>
                          </label>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {type === "Videos" && (
                    <AddVideo
                      register={register}
                      errors={errors}
                      dataType={type}
                      reset={reset}
                      linkData={linkData}
                      resetData={filteredData}
                      resetField={resetField}
                      viewVideoScreen={viewVideoScreen}
                      setValue={setValue}
                      showActivityForm={showActivityForm?.obj?.activityDetails}
                      selectedvideo={selectedvideo}
                    />
                  )}

                  {["Links", "Books"].includes(type) && (
                    <AddLinks
                      register={register}
                      unregister={unregister}
                      errors={errors}
                      dataType={type}
                      linkData={linkData}
                      setValue={setValue}
                      showActivityForm={showActivityForm?.obj?.activityDetails}
                    />
                  )}
                </div>
                <div className="modal-footer">
                  <div className="form-group BDsubmitbutton d-flex m-0">
                    <div className="buttonDistribotion">
                      <div className="buttonDistribotion">
                        {!loading && (
                          <button
                            onClick={() => {
                              closeModal();
                              setFilteredData(undefined);
                            }}
                            type="button"
                            className="btn-blue btn-login d-block mb-5 cancelbutton"
                          >
                            <i className="fa-solid fa-xmark"></i> Cancel
                          </button>
                        )}
                        {loading ? (
                          <button
                            className="btn-blue btn-login d-block mb-5 "
                            key={Math.random()}
                            disabled
                          >
                            <span className="RounAnimation mr-1"></span> Please
                            wait...
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn-blue btn-login d-block mb-5 "
                            disabled={totalSelected == 0 ? true : false}
                          >
                            <i className="fa-solid fa-paper-plane"></i> Submit{" "}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {videoPopup && <ViewVideo close={close} data={videoPopup} />}
    </>
  );
};
export default AddVdoActivity;

// 439

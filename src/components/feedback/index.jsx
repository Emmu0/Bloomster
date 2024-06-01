import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
// import { useDispatch } from "react-redux";
import { feedbackDataPostAPI } from "../../redux/actions/FeedbackAPIs";
import { MSG, SITEFNAME, SITENAME } from "../../utils/Messages";
import { useForm, Controller, SelectPicker } from "../../utils/Packages";
import Success from "../notifications/Success";
import { toast } from "react-toastify";
import { SelectPickerVal } from "../../utils/helper";
import RangeSlider1 from "../controls/RangeSlider1";
import { FeedbackServey } from "../../utils/DataObjects";

const Feedback = ({ closeModal }) => {
  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    clearErrors,
    reset,
    resetField,
    formState: { errors },
  } = useForm("onTouched");
  const { feedbackDataResponse } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const [plsWait, setplsWait] = useState();
  const [showModal, setShowModal] = useState(false);
  const [feedbackOptions, setFeedbackOptions] = useState([]);
  const [checkedData, setcheckedData] = useState(false);
  useEffect(() => {
    setShowModal(true);
    let options = [
      { name: "Dimensions" },
      { name: "Courses" },
      { name: "Quiz" },
      { name: "Knowledge Check" },
      { name: "Others" },
    ];
    setFeedbackOptions(options);
  }, []);
  useEffect(() => {
    if (feedbackDataResponse && feedbackDataResponse?.records.length > 0) {
      delete FeedbackServey?.question[0]?.answer;
      delete FeedbackServey?.question[1]?.answer;
      delete FeedbackServey?.question[2]?.answer;
      toast.info(<Success response={feedbackDataResponse} />);
      closeModal(false);
      setShowModal(false);
    }
    setplsWait(undefined);
  }, [feedbackDataResponse]);

  const handleClose = () => {
    delete FeedbackServey?.question[0]?.answer;
    delete FeedbackServey?.question[1]?.answer;
    delete FeedbackServey?.question[2]?.answer;
    setShowModal(false);
    closeModal(false);
  };

  const changeSurveyHandler = (e, ques, data) => {
    for (let i = 0; i < FeedbackServey?.question?.length; i++) {
      if (FeedbackServey?.question[ques].id == data?.id) {
        clearErrors("rangeslider" + data?.id, e);
        setValue("rangeslider" + data?.id, e);
        FeedbackServey.question[ques].answer = e;
        return;
      }
    }
  };
  const _onSubmit = (values) => {
    setplsWait(true);
    if (getValues("FeedbackSelectpicker")) {
      const TXT = document.getElementById("textarea").value;
      const formData = {
        description: TXT,
        vusage: getValues("FeedbackSelectpicker"),
        vcoverage: getValues("rangeslider" + FeedbackServey?.question[0]?.id),
        vease: getValues("rangeslider" + FeedbackServey?.question[1]?.id),
        vrecommend: getValues("rangeslider" + FeedbackServey?.question[2]?.id),
        vcontact: checkedData,
      };
      dispatch(feedbackDataPostAPI(formData));
    }
  };

  return (
    <>
      {showModal && (
        <div className="halfPagePOpup feedbacklabel SchoolActivityPopup">
          <div className="modal d-block" id="feedback-modal" role="dialog">
            <div className="modal-dialog modal-lg">
              <div className="modal-content courseInformation">
                <div className="modal-header">
                  <div className="heading border-0 p-0">
                    <h2 className="flex">
                      <span>
                        <img src={image.feedbackicon} className="mr-2" />
                        Feedback
                      </span>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={handleClose}
                      >
                        <i className="fa-regular fa-xmark m-0"></i>
                      </button>
                    </h2>
                  </div>
                </div>
                <form onSubmit={handleSubmit(_onSubmit)}>
                  <div className="modal-body pt-0 pb-0 d-flex align-content-center">
                    <div className="w-100 p-1 ml-3 pr-2">
                      <div className="input-group w-100">
                        <label htmlFor="feedback" className="feedback-label">
                          How often do you use {SITENAME.NAME}?
                          <span className="mandatoryField">*</span>
                        </label>
                        <div className="form-group">
                          <Controller
                            {...register("FeedbackSelectpicker", {
                              required: true,
                            })}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              onChange = (event) => {
                                setValue("FeedbackSelectpicker", event);
                                clearErrors("FeedbackSelectpicker");
                              };

                              return (
                                <SelectPicker
                                  onChange={onChange}
                                  className={`${errors?.FeedbackSelectpicker?.type ==
                                    "required"
                                    ? "is-invalid"
                                    : ""
                                    }`}
                                  data={SelectPickerVal(
                                    FeedbackServey?.FeedBacksPickerData,
                                    "FeedBackSurvey"
                                  )}
                                  searchable={false}
                                  defaultValue={value}
                                  cleanable={false}
                                />
                              );
                            }}
                          />
                          {errors?.FeedbackSelectpicker?.type == "required" && (
                            <div className="invalid-feedback">
                              {MSG?.FEEDBACKDROPMSG}
                            </div>
                          )}
                        </div>
                      </div>

                      {FeedbackServey?.question?.map((data, key) => (
                        <div className="ratingservayques">
                          <div className="input-group">
                            <label htmlFor="" className="mb-2">
                              {data?.question}
                              <span className="mandatoryField">*</span>
                            </label>
                            <Controller
                              {...register(`rangeslider` + data?.id, {
                                required: true,
                                min: 0,
                              })}
                              control={control}
                              render={({ field: { onChange, value } }) => {
                                return (
                                  <RangeSlider1
                                    onChange={onchange}
                                    className="pl-3"
                                    id={"rangeSlider" + data?.id}
                                    data={data}
                                    changeSurvey={changeSurveyHandler}
                                    ques={key}
                                  />
                                );
                              }}
                            />

                            <div className="scaleParameter">
                              <div className="flex">
                                <span>0</span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                              </div>
                              <div className="scaleParamerettext flex">
                                <span>{data?.minHelp}</span>
                                <span>{data?.maxHelp}</span>
                              </div>
                              {errors["rangeslider" + data?.id] && (
                                <p className=" text-danger">
                                  {MSG.SERVEYSCOREMSG}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="input-group w-100">
                        <label htmlFor="feedback" className="feedback-label">
                          What can {SITEFNAME.NAME} do to enhance your experience?
                        </label>
                        <div className="form-group">
                          <textarea
                            id="textarea"
                            className="form-control feedback-textarea1 mb-0"
                            placeholder="We would love to hear your suggestion!"
                            name="description"
                          ></textarea>
                        </div>
                      </div>

                      <div className="input-group w-100">
                        <div className="form-group " onClick={() => setcheckedData(!checkedData)}>
                          <input
                            type="checkbox"
                            className="checkfeedback pointer"
                            id="Public"
                            name="feedback"
                            value="PUBLIC"
                            checked={checkedData}
                          ></input>
                          <label className="pl-2 mt-2 mb-2 pointer">
                            {SITEFNAME.NAME} may contact me about my feedback
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <div className="form-group BDsubmitbutton d-flex m-0">
                      <div className="buttonDistribotion">
                        <div className="buttonDistribotion">
                          {!plsWait && <button
                            type="button"
                            className="btn-blue btn-login d-block mb-5 cancelbutton"
                            onClick={handleClose}
                          >
                            <i className="fa-solid fa-xmark"></i> Cancel
                          </button>}

                          {plsWait ? (
                            <button
                              className="btn-blue btn-login d-block mb-5"
                              key={Math.random()}
                              disabled
                            >
                              <span className="RounAnimation mr-1"></span>{" "}
                              Please Wait...
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn-blue btn-login d-block mb-5"
                            >
                              <i className="fa-solid fa-paper-plane ml-1"></i>{" "}
                              Submit
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
      )}
    </>
  );
};

export default Feedback;

/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { Rating, useForm, Controller } from "../../utils/Packages";
import RangeSlider1 from "../controls/RangeSlider1";
import { getSequnceSort } from "../../utils/helper";
import { MSG } from "../../utils/Messages";
// import { useForm } from "react-hook-form";

export default function AddRatings({
  data,
  showRating,
  saveRating,
  myRating,
  ratingUserId,
  type,
  setRatingClass,
  rate,
}) {
  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const [rateDataAvg, setRatingAvg] = useState(0);
  const [rateData, setRating] = useState(0);
  const [ratingLoader, setRatingLoader] = useState(false);
  //   const [ratingBody, setRatingBody] = useState()
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.collections);

  useEffect(() => {
    if (response) {
      setRatingLoader(false);
    }
  }, [response]);

  const [survey, setSurvey] = useState({ 0: 0, 1: 0 });

  const handleRating = (rate, e) => {
    if (rate) {
      setValue("rating", rate);
      setRating(rate);
      setRatingAvg(((rate / 100) * 5).toFixed(1));
    }
  };

  const [question, setQuestion] = useState();
  useEffect(() => {
    if (myRating && myRating[0]?.rating) {
      setValue("rating", myRating[0]?.rating);
      myRating[0]?.question?.map((data, key) => {
        setValue(
          "rangeslider" + data?.id,
          myRating[0]?.question[key]?.answer !== null
            ? myRating[0]?.question[key]?.answer
            : getValues("rangeslider" + data?.id)
        );
        return;
      });
    }
  }, [myRating]);
  const [enrollLoader, setEnrollLoader] = useState(false);
  useEffect(() => {
    setEnrollLoader(false);
  }, []);

  const onSubmit = async () => {
    setRatingLoader(true);
    dispatch(saveRating(rateData, ratingUserId, data));
  };

  let rating;

  if (myRating && myRating?.length > 0) {
    rating = myRating[0]?.rating;
  } else {
    rating = rateData;
  }

  let arrr = myRating && myRating[0]?.question;

  const changeSurveyHandler = (e, ques, data) => {
    setQuestion({ data: data, questionIndex: ques });
    for (let i = 0; i < myRating[0]?.question?.length; i++) {
      if (myRating[0]?.question[ques].id == data?.id) {
        clearErrors("rangeslider" + data?.id, e);
        setValue("rangeslider" + data?.id, e);
        myRating[0].question[ques].answer = e;
        return;
      }
    }
  };

  const _onSubmit = (e) => {
    setEnrollLoader(true);
    const inputText = document.getElementById("InputText")?.value;
    const textArea = document.getElementById("textArea")?.value;
    const ratingBody = {
      id: data?.id,
      rating: getValues("rating"),
      question: arrr,
      headline: inputText,
      review: textArea,
      createdDate: null,
      updatedDate: null,
    };
    dispatch(saveRating(ratingBody, ratingUserId, data));
  };

  return (
    <>
      {type === "provider" || type === "activity" || type === "resources" ? (
        <div
          className="modal d-block AddChildPopup RatingsModelPopup overflow-hidden"
          id="exampleModalLong"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header w-100">
                <div className="modal-title h4 w-100 flex">
                  <span className="d-flex">
                    {" "}
                    <img src={image.ratingsIcons} className="mr-2 " alt="" />
                    {type === "provider" ? (
                      <h4>Course Creator Review</h4>
                    ) : type === "activity" ? (
                      <h4>Activity Review</h4>
                    ) : (
                      type === "resources" && <h4>Resource Review</h4>
                    )}
                  </span>
                  <button
                    data-dismiss="modal"
                    className="btn btn-primary"
                    onClick={() => {
                      showRating();
                      setRatingClass && setRatingClass(false);
                    }}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </div>
              </div>

              <div className="modal-body RatetousPopup" key={rating}>
                {type === "provider" ? (
                  <h4>Provide a rating for the course creator</h4>
                ) : type === "activity" ? (
                  <h4>Please provide your Activity Rating below:</h4>
                ) : (
                  type === "resources" && (
                    <h4>Please provide your Resource Rating below:</h4>
                  )
                )}

                <h2 className="mt-3 mb-3">
                  {rateData
                    ? rateData
                    : myRating && myRating?.length > 0
                      ? myRating[0]?.rating
                      : ""}
                </h2>

                <Rating
                  initialValue={rating}
                  transition
                  allowHover
                  size={20}
                  className="mr-2"
                  emptyColor="#ccc"
                  fillColorArray={[
                    "#f17a45",
                    "#f17a45",
                    "#f17a45",
                    "#f17a45",
                    "#f17a45",
                  ]}
                  onClick={handleRating}
                />
              </div>
              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <div className="buttonDistribotion">
                    {!ratingLoader && myRating?.length === 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setRating(0);
                          setRatingAvg(0);
                        }}
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-window-restore"></i> Reset
                      </button>
                    )}

                    {!ratingLoader ? (
                      <button
                        type="button"
                        onClick={onSubmit}
                        disabled={rateData === 0 ? true : false}
                        className="btn-blue btn-login d-block mb-5 border-0"
                      >
                        <i className="fa-solid fa-paper-plane"></i>

                        {myRating?.length > 0 ? "Update" : "Submit"}
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        key={Math.random()}
                        className="btn-blue btn-login d-block mb-5 border-0"
                      >
                        <span className="RounAnimation mr-1"></span>
                        Please Wait...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="serveyPoup AreyousurePopup AddChildPopup">
          <div
            className="modal d-block AddChildPopup"
            id="exampleModalLong"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content courseInformation schoolcourse">
                <div className="modal-header w-100">
                  <div className="heading p-0 border-0 w-100 flex">
                    <h2 className="flex">
                      <span className="flex">
                        {" "}
                        <img
                          src={image.ratingsIcons}
                          className="mr-2 "
                          alt=""
                        />
                        <h4>Course Review </h4>
                      </span>
                    </h2>

                    <button
                      data-dismiss="modal"
                      className="btn btn-primary"
                      onClick={() => {
                        showRating();
                        setRatingClass && setRatingClass(false);
                      }}
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit(_onSubmit)}>
                  <div className="modal-body RatetousPopup" key={rating}>
                    <div className="ratingservaylistwrap">
                      <div className="ratingservayques servayratingsec">
                        <h3 className="mt-3">
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                          {data?.name}
                        </h3>
                        <h4>
                          {/* Please provide your  */}
                          Course rating{""}
                          <span className="mandatoryField">*</span>
                          {/* below: */}
                        </h4>
                      </div>
                      <div className=" d-flex mb-2">
                        {rateData ? (
                          <h2 className="mt-0 mb-0 mr-2">{rateData}</h2>
                        ) : myRating &&
                          myRating?.length > 0 &&
                          myRating[0]?.rating ? (
                          <h2 className="mt-1 mb-1 mr-2">
                            {myRating[0]?.rating}
                          </h2>
                        ) : (
                          ""
                        )}

                        <Controller
                          {...register("rating", {
                            min: 0,
                            required: true,
                          })}
                          control={control}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Rating
                                initialValue={
                                  myRating[0]?.rating ? myRating[0]?.rating : 0
                                }
                                transition
                                allowHover
                                size={20}
                                className="surveytop"
                                emptyColor="#ccc"
                                fillColorArray={[
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                ]}
                                onClick={(e) => {
                                  handleRating(e);
                                }}
                              />
                            );
                          }}
                        />
                      </div>
                      {errors?.rating?.type === "required" &&
                        getValues("rating") == null && (
                          <p className=" text-danger">{MSG.SERVEYRATINGMSG}</p>
                        )}

                      {getSequnceSort(myRating[0]?.question)?.map(
                        (data, key) => (
                          <div className="ratingservayques mb-2" key={data?.id}>
                            <div className="input-group">
                              <label htmlFor="" className="mb-2">
                                {data?.question}
                                {""}
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
                        )
                      )}

                      <div className="ratingservayques addservettext">
                        <div className="input-group">
                          <label htmlFor="" className="mb-2">
                            Would you like to tell others what you think about
                            this course?
                          </label>
                          <div className="form-group">
                            <label htmlFor="" className="mb-2">
                              Add a headline
                              <span className="mandatoryField">*</span>
                            </label>
                            <input
                              {...register(`headline`, {
                                maxLength: 255,
                                required: true,
                              })}
                              type="text"
                              className="form-control mb-3"
                              defaultValue={myRating[0]?.headline}
                              id="InputText"
                            />
                          </div>
                          {errors?.headline?.type == "required" && (
                            <p className=" text-danger">{MSG.HEADLINEREQ}</p>
                          )}
                          {errors?.headline?.type == "maxLength" && (
                            <p className=" text-danger">{MSG.MAX255CHREQ}</p>
                          )}
                          <div className="form-group">
                            <label htmlFor="" className="mb-2">
                              {" "}
                              Add a review
                            </label>
                            <textarea
                              name=""
                              id="textArea"
                              placeholder="What did you like or dislike about this course? What did you learn? What more or different did you expect from this course?"
                              defaultValue={myRating[0]?.review}
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="form-group BDsubmitbutton d-flex m-0">
                      <div className="buttonDistribotion">
                        {myRating?.length === 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              setRating(0);
                              setRatingAvg(0);
                            }}
                            className="btn-blue btn-login d-block mb-5 cancelbutton"
                          >
                            <i className="fa-solid fa-window-restore"></i> Reset
                          </button>
                        )}

                        <button
                          type="button"
                          className="btn-blue btn-login d-block mb-5 cancelbutton m-0"
                          onClick={() => {
                            showRating();
                            setRatingClass && setRatingClass(false);
                          }}
                        >
                          <i className="fa-solid fa-xmark"></i> Close
                        </button>
                        {enrollLoader ? (
                          <button
                            className="btn-blue btn-login d-block ml-3 w-auto"
                            key={Math.random()}
                            disabled
                          >
                            <span className="RounAnimation mr-1"></span> Please
                            Wait...
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="btn-blue btn-login d-block mb-5  border-0"
                          >
                            <i className="fa-solid fa-paper-plane"></i>
                            {myRating[0]?.id == null ? "Submit" : "Update"}
                          </button>
                        )}
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
}

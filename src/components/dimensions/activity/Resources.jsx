import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../resources/images";
import {
  useForm,
  SelectPicker,
  Controller,
  ShimmerCategoryList,
} from "../../../utils/Packages";
import ViewVideo from "./ViewVideo";
import {
  SelectPickerVal,
  getHostName,
  kFormatter,
} from "../../../utils/helper";
import { useParams } from "react-router-dom";
import { getLesson } from "../../../redux/actions/APIs";
import { MSG } from "../../../utils/Messages";
import ResourceRatings from "./ResourceRatings";
import VickyComingSoon from "../../widget/VickyComingSoon";
import { COMING_SOON } from "../../../utils/DataObjects";

const Resources = ({
  selectedCourse,
  tabsId,
  showResourceInnerDetail,
  selectLesson,
  handlePopUp,
  viewActivityFlag,
  providerPopup,
}) => {
  const param = useParams();
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    control,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const { getLessonResources, response, defaultChildData } = useSelector(
    (state) => state.collections
  );

  const [quizDataPoints, setQuizDataPoints] = useState();
  const [lessonModId, setLessonModId] = useState(tabsId);

  const [isActive, setActive] = useState(false);
  const [ratingPopup, setRatingPopup] = useState(false);

  const [modLessData, setModLessData] = useState();
  const [videoPopup, setVideoPopup] = useState();
  const [shimmerload, setShimmerload] = useState(true);
  const [resourceInnerData, setResourceInnerData] = useState();

  useEffect(() => {
    dispatch(getLesson());
  }, [response]);

  useEffect(() => {
    if (getLessonResources) {
      setQuizDataPoints(getLessonResources?.records);
    }
    if (!getLessonResources) {
      dispatch(getLesson(param?.id, lessonModId)).then(() => {
        setLessonModId(lessonModId);
      });
    }
  }, [getLessonResources, response]);

  // useEffect(() => {
  //   dispatch(getLesson(param?.id, lessonModId)).then(() => {
  //     setLessonModId(lessonModId);
  //   });
  // }, [response]);

  // useEffect(() => {
  //   if(!getLessonResources){
  //     dispatch(getLesson(param?.id, lessonModId));
  //   }
  // }, [param?.id, lessonModId]);

  useEffect(() => {
    if (getLessonResources) {
      setModLessData(getLessonResources);
    }
  }, [getLessonResources, response]);

  useEffect(() => {
    if (lessonModId) {
      // setModLessData(getLessonResources);
    } else if (getLessonResources?.records) {
      setShimmerload(undefined);
    }
  }, [getLessonResources?.records, lessonModId]);

  // useEffect(() => {
  //   if (tabsId) {
  //     setModLessData(getLessonResources);
  //   }
  //   setShimmerload(getLessonResources?.records);
  // }, [getLessonResources?.records, tabsId]);

  // useEffect(() => {
  //   if (tabsId && !getLessonResources?.records) {
  //     changeModuleLessonDetail(tabsId);
  //     setValue("lesson", tabsId);
  //   }
  // }, [tabsId]);
  useEffect(() => {
    if (getLessonResources?.records?.length === 0) {
      setShimmerload("COMINGSOON");
    } else {
      setShimmerload(undefined);
    }
  }, [getLessonResources]);

  const changeModuleLessonDetail = (data) => {
    // dispatch(getLesson(param?.id, data)).then(() => {
    //   setLessonModId(data);
    // });
  };

  const handleResourceInnerDetail = (
    indexNumber,
    lessonName,
    firstname,
    lastname,
    metadata,
    resourceContent
  ) => {
    let data = {
      indexNumber: indexNumber,
      lessonName: lessonName,
      firstname: firstname,
      lastname: lastname,
      metadata: metadata,
      resourceContent: resourceContent,
      subjectName: selectedCourse?.name,
    };

    setResourceInnerData(data);
    showResourceInnerDetail(data);
  };
  useEffect(() => {
    if (!response) {
      setRatingPopup(false);
    }
  }, [response]);

  const close = () => {
    setVideoPopup();
  };

  const redirectSite = (siteData) => {
    if (getHostName(siteData?.siteUrl) === "www.youtube.com") {
      setVideoPopup(siteData);
    } else {
      window.open(siteData?.siteUrl, "_blank");
    }
  };

  return (
    <>
      <div className='resoucecardTopic mb-4'>
        {selectLesson && selectLesson?.length > 0 && (
          <>
            <label>
              <h4 className='mb-2'>Select Lesson:</h4>
            </label>
            <div>
              <Controller
                {...register("lesson", {
                  required: true,
                })}
                control={control}
                render={({ field: { onChange, value } }) => {
                  onChange = (event) => {
                    dispatch(getLesson());
                    setModLessData(undefined);
                    setShimmerload(true);
                    // changeModuleLessonDetail(event);
                    setLessonModId(event);
                    setValue("tabId", event);
                    clearErrors("lesson");
                  };

                  return (
                    <SelectPicker
                      data={SelectPickerVal(selectLesson, "lessonResource")}
                      groupBy='module'
                      defaultValue={tabsId}
                      onChange={onChange}
                      cleanable={false}
                      searchable={true}
                      disabled={
                        !modLessData && shimmerload !== "COMINGSOON" && tabsId
                          ? true
                          : false
                      }
                    />
                  );
                }}
              />
            </div>
          </>
        )}
      </div>
      {modLessData &&
        modLessData?.records?.length > 0 &&
        lessonModId &&
        modLessData?.records?.map((val, key) => (
          <div className='resourseCard' key={key}>
            <div className='rsCard'>
              <div className='resourseCatdTitlelllllll flex'>
                <ResourceRatings
                  val={val}
                  viewActivityFlag={viewActivityFlag}
                  modlessonId={lessonModId}
                  providerPopup={providerPopup}
                  resourceType={"resourceProvider"}
                />
              </div>

              <div id='resourcecard2' className='panel-collapse collapse show'>
                <div className={isActive ? "ShowFullContent" : null}>
                  <div className='ReourcecrdLeftbar'>
                    <ul>
                      <li className='activeRTab pointer'>
                        <p
                          className='RconDropdwn'
                          data-toggle='collapse'
                          href='#resourcecard1'>
                          <span className='flex'>
                            <span>
                              <i className='fa-regular fa-message-captions mr-2'></i>
                              Content
                            </span>
                            <span>
                              <i className='fa-regular fa-angle-down'></i>
                            </span>
                          </span>
                        </p>
                        <div className='collapse' id='resourcecard1'>
                          <div className='w-100 prolistedvidoitem rescrdVidContent'>
                            {val?.metaDatas?.map((data, ky) => (
                              <div
                                className='ProbvidListItem checkoutVideo d-flex mb-2 position-relative'
                                key={ky}
                                onClick={() => redirectSite(data)}>
                                <div className='VideoThumbimg'>
                                  {data?.image ? (
                                    <img src={data.image} alt='' />
                                  ) : (
                                    <img
                                      src={image.noImage}
                                      className=''
                                      alt=''
                                    />
                                  )}
                                </div>
                                <div className='videoDescription pl-2  p-1'>
                                  <h3>{data?.title}</h3>
                                  <h5 className='mt-1 mb-1'>
                                    {data?.description}
                                  </h5>
                                  <a href='#'>
                                    <i className='fa-brands fa-youtube mr-2' />
                                    {getHostName(data?.siteUrl)}
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li
                        className='activeRTab ResoQuesPractice pointer'
                        onClick={() =>
                          handleResourceInnerDetail(
                            2,
                            val?.name,
                            val?.curatorDto?.firstName,
                            val?.curatorDto?.lastName,
                            val.metaDatas,
                            lessonModId
                          )
                        }
                        data-toggle='modal'
                        data-target='#resourceInnerModal'>
                        <p className='RconDropdwn'>
                          <span className='flex'>
                            <span>
                              <i className='fa-light fa-book-open-reader mr-2'></i>
                              Quiz
                            </span>
                            <span>
                              <span className='mr-2'>
                                <span className='earnnoCoin'>
                                  {(quizDataPoints &&
                                    kFormatter(
                                      quizDataPoints[0]?.quizPoints
                                    )) ||
                                    (quizDataPoints &&
                                      quizDataPoints[0]?.quizPoints)}
                                </span>
                                <img src={image.money_bag} alt='' />
                              </span>
                              <i className='fa-regular fa-angle-down'></i>
                            </span>
                          </span>
                        </p>
                      </li>

                      <li
                        className='activeRTab ResoQuesPractice pointer'
                        onClick={() => {
                          defaultChildData?.isSubscriber
                            ? handleResourceInnerDetail(
                                3,
                                val?.name,
                                val?.curatorDto?.firstName,
                                val?.curatorDto?.lastName,
                                val.metaDatas,
                                lessonModId
                              )
                            : handlePopUp();
                        }}
                        data-toggle='modal'
                        data-target={
                          defaultChildData?.isSubscriber
                            ? "#resourceInnerModal"
                            : ""
                        }>
                        <p className='RconDropdwn'>
                          <span className='flex'>
                            <span>
                              <i className='fa-regular fa-file-pen mr-2'></i>
                              Practice
                            </span>

                            <span>
                              {defaultChildData?.isSubscriber ? (
                                ""
                              ) : (
                                <span>
                                  <i className='fa-sharp fa-solid fa-lock mr-3'></i>
                                </span>
                              )}
                              <span>
                                <i className='fa-regular fa-angle-down'></i>
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li className='activeRTab pointer'>
                        <p
                          className='RconDropdwn'
                          data-toggle='collapse'
                          href='#resourcecard5'>
                          <span className='flex'>
                            <span>
                              <i className='fa-regular fa-diagram-predecessor mr-2'></i>
                              Basics
                            </span>
                            <span>
                              <i className='fa-regular fa-angle-down'></i>
                            </span>
                          </span>
                        </p>
                        <div
                          className='collapse hide panel-collapse'
                          id='resourcecard5'>
                          <div className='moduleList'>
                            <div className='submoduleList' id='module'>
                              <ul>
                                {val &&
                                  val?.basics?.map((data, key) => (
                                    <li
                                      className='d-flex justify-content-between'
                                      key={key}>
                                      {key + 1 + ". "}
                                      {data?.name}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='ExploreCard'
              data-toggle='modal'
              data-target='#resourceInnerModal'
              onClick={() =>
                handleResourceInnerDetail(
                  1,
                  val?.name,
                  val?.curatorDto?.firstName,
                  val?.curatorDto?.lastName,
                  val.metaDatas,
                  lessonModId
                )
              }>
              <h5 className='pointer'>Explore</h5>
              <i className='fa-regular fa-chevron-down pointer '></i>
            </div>
          </div>
        ))}

      {shimmerload === "COMINGSOON" && (
        <div className='p-5 m-auto resourcessc'>
          <VickyComingSoon description={COMING_SOON[2]?.description} />
        </div>
      )}
      {modLessData &&
        modLessData?.records?.length < 0 &&
        shimmerload === false &&
        MSG.NORESOURCEFOUND}
      {tabsId === undefined &&
        shimmerload === undefined &&
        modLessData === undefined &&
        "Choose Lesson"}
      {!modLessData && shimmerload !== "COMINGSOON" && tabsId && (
        <ShimmerCategoryList items={2} categoryStyle='STYLE_SIX' />
      )}
      {videoPopup && <ViewVideo close={close} data={videoPopup} />}
    </>
  );
};

export default Resources;

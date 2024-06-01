import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectPicker } from "rsuite";
import { getLesson } from "../../redux/actions/APIs";
import * as image from "../../resources/images";
import { ShimmerCategoryList } from "../../utils/Packages";
import { getHostName, SelectPickerVal } from "../../utils/helper";
import ResourceRatings from "../dimensions/activity/ResourceRatings";
import { ViewVideo } from "../dimensions/activity";
import { MSG } from "../../utils/Messages";
import {
  providerPracticeData,
  providerQuizData,
  providerQuizOption,
} from "../../redux/actions";

const ProviderResources = ({
  courseId,
  courseTitle,
  tabsId,
  lessonData,
  handleResourceTabs,
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

  const { getComplexData, loggedInUser, getLessonResources } = useSelector(
    (state) => state.collections
  );
  const [isActive, setActive] = useState(false);
  const [lessonModId, setLessonModId] = useState(tabsId);
  const [shimmerload, setShimmerload] = useState(undefined);
  const [modLessData, setModLessData] = useState();

  useEffect(() => {
    if (tabsId) {
      setModLessData(getLessonResources);
    }
    setShimmerload(getLessonResources?.records);
  }, [getLessonResources?.records, tabsId]);

  const handleModuleLessonDetail = (modLessId) => {
    dispatch(providerQuizData());
    dispatch(providerQuizOption());
    dispatch(providerPracticeData());
    dispatch(getLesson(loggedInUser?.id, modLessId, loggedInUser?.role.name));
    setLessonModId(modLessId);
  };

  const [videoPopup, setVideoPopup] = useState();

  const handleExploreData = (activeTab, data) => {
    //setExploreData(data);
    //setActiveTab(activeTab);
    //setShowExplore(true);
    handleResourceTabs(activeTab, data);
  };

  useEffect(() => {
    if (tabsId) {
      handleModuleLessonDetail(tabsId);
      setValue("lesson", tabsId);
    }
  }, [tabsId]);

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
      <div className="resoucecardTopic mb-4">
        <label>
          <h4 className="mb-2">Select Lesson:</h4>
        </label>
        {lessonData && lessonData?.length > 0 && (
          <div>
            <Controller
              {...register("lesson", {
                required: true,
              })}
              control={control}
              render={({ field: { onChange, value } }) => {
                onChange = (event) => {
                  dispatch(getLesson());
                  handleModuleLessonDetail(event);
                  setValue("lesson", tabsId);
                  clearErrors("lesson");
                  setShimmerload(undefined);
                };
                return (
                  <SelectPicker
                    data={SelectPickerVal(lessonData, "lessonResource")}
                    groupBy="module"
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
        )}
      </div>
      {modLessData && modLessData?.records?.length > 0 && shimmerload ? (
        modLessData?.records?.map((val, key) => (
          <div className="resourseCard" key={key}>
            <div className="rsCard">
              <div className="resourseCatdTitle flex">
                <ResourceRatings
                  val={val}
                  modlessonId={lessonModId}
                  resourceType={"resourceProvider"}
                  providerPopup={providerPopup}
                />
              </div>

              <div id="resourcecard2" className="panel-collapse collapse show">
                <div className={isActive ? "ShowFullContent" : null}>
                  <div className="ReourcecrdLeftbar">
                    <ul>
                      <li className="activeRTab pointer">
                        <p
                          className="RconDropdwn"
                          data-toggle="collapse"
                          href="#resourcecard1"
                        >
                          <span className="flex">
                            <span>
                              <i className="fa-regular fa-message-captions mr-2"></i>
                              Content
                            </span>
                            <span>
                              <i className="fa-regular fa-angle-down"></i>
                            </span>
                          </span>
                        </p>
                        <div className="collapse" id="resourcecard1">
                          <div className="w-100 prolistedvidoitem rescrdVidContent">
                            {val?.metaDatas?.map((data, ky) => (
                              <div
                                className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative"
                                key={ky}
                                onClick={() => redirectSite(data)}
                              >
                                <div className="VideoThumbimg">
                                  {data?.image ? (
                                    <img src={data.image} alt="" />
                                  ) : (
                                    <img
                                      src={image.noImage}
                                      className=""
                                      alt=""
                                    />
                                  )}
                                </div>
                                <div className="videoDescription pl-2  p-1">
                                  <h3>{data?.title}</h3>
                                  <h5 className="mt-1 mb-1">
                                    {data?.description}
                                  </h5>
                                  <a href="#">
                                    <i className="fa-brands fa-youtube mr-2" />
                                    {getHostName(data?.siteUrl)}
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li
                        className="activeRTab ResoQuesPractice pointer"
                        onClick={() => handleExploreData(2, val)}
                        data-toggle="modal"
                        data-target="#resourceInnerModal"
                      >
                        <p className="RconDropdwn">
                          <span className="flex">
                            <span>
                              <i className="fa-light fa-book-open-reader mr-2"></i>
                              Quiz
                            </span>

                            <span>
                              <span className="mr-2">
                                <span className="earnnoCoin"></span>
                              </span>
                              <i className="fa-regular fa-angle-down"></i>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li
                        className="activeRTab ResoQuesPractice pointer"
                        onClick={() => handleExploreData(3, val)}
                        data-toggle="modal"
                        data-target="#resourceInnerModal"
                      >
                        <p
                          className="RconDropdwn"
                          data-toggle="collapse"
                          href="#resourcecard4"
                        >
                          <span className="flex">
                            <span>
                              <i className="fa-regular fa-file-pen mr-2"></i>
                              Practice
                            </span>
                            <span>
                              <i className="fa-regular fa-angle-down"></i>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li className="activeRTab pointer">
                        <p
                          className="RconDropdwn"
                          data-toggle="collapse"
                          href="#resourcecard5"
                        >
                          <span className="flex">
                            <span>
                              <i className="fa-regular fa-diagram-predecessor mr-2"></i>
                              Basics
                            </span>
                            <span>
                              <i className="fa-regular fa-angle-down"></i>
                            </span>
                          </span>
                        </p>
                        <div
                          className="collapse hide panel-collapse"
                          id="resourcecard5"
                        >
                          <div className="moduleList">
                            <div className="submoduleList" id="module">
                              <ul>
                                {val &&
                                  val?.basics?.map((data, key) => (
                                    <li className="d-flex justify-content-between">
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
              className="ExploreCard"
              data-toggle="modal"
              data-target="#resourceInnerModal"
              onClick={() => handleExploreData(1, val)}
            >
              <h5 className="pointer">Explore</h5>
              <i className="fa-regular fa-chevron-down pointer "></i>
            </div>
          </div>
        ))
      ) : (
        <>
          {shimmerload == undefined ? (
            <ShimmerCategoryList items={2} categoryStyle="STYLE_SIX" />
          ) : (
            MSG.NORESOURCEFOUND
          )}
        </>
      )}

      {videoPopup && <ViewVideo close={close} data={videoPopup} />}
    </>
  );
};
export default ProviderResources;

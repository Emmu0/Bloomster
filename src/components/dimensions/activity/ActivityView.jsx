/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { swal, ShimmerCategoryList } from "../../../utils/Packages";
import { getHostName, textTrim, getSequnceSort } from "../../../utils/helper";
import { delActivityDetail, getMetaData } from "../../../redux/actions/APIs";
import ReactTooltip from "react-tooltip";
import { VideoCard, ViewVideo, ActivityList } from "./";
const ActivityView = ({
  records,
  data,
  closeModalSub,
  closeModalEdit,
  object,
  selectedCourse,
  dimName,
  type,
  showActivity,
  showViewActivity,
  showAddActivity,
}) => {
  const dispatch = useDispatch();
  const { getSelectedUser, courseList } = useSelector(
    (state) => state.collections
  );
  const [activityType, setActivityType] = useState(type);
  const [videoPopup, setVideoPopup] = useState();
  const [subjectChange, setSubjectChange] = useState(false);
  const viewVideo = (videoData) => {
    setVideoPopup(videoData);
  };
  const [selectedCourseName, setSelectedCourseName] = useState(
    selectedCourse?.name
  );
  const [courseData, setCourseData] = useState(selectedCourse?.activities);

  const [selectedSubActivity, setSelectedSubActivity] = useState(data);
  const [activities, setActivities] = useState([]);
  const [showSubData, setShowSubData] = useState(true);
  const [changeSubAct, setChangesSubAct] = useState(true);
  const [clickSubActivity, setClickSubActivity] = useState();

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
  const [shimerLoader, setShimerLoader] = useState(true);

  useEffect(() => {
    if (activities.length > 0) {
      changeSubData(activities[selectedSubActivity]?.id);
    }
    setTimeout(() => {
      setShimerLoader(true);
    }, 1000);
  }, [selectedSubActivity]);

  useEffect(() => {
    if (data && courseData) {
      courseData?.activities?.filter((val, index) => {
        if (val.sequence == data.sequence) {
          setSelectedSubActivity(val);
        }
      });
    }
  }, [records]);

  const changeSubData = (id) => {
    dispatch(getMetaData(id));
  };

  const deleteItem = (item) => {
    new swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(function (res) {
      if (res.isConfirmed) {
        dispatch(
          delActivityDetail(getSelectedUser?.id, data?.id, item?.id)
        ).then(() => {
          new swal({
            title: "Deleted!",
            timer: 2000,
            text: "Record has been deleted.",
            type: "success",
          });
        });
      }
    });
  };

  const changeCourse = (course) => {
    setShowSubData(false);
    setActivityType(undefined);
    setCourseData(course);
    setSelectedCourseName(course?.name);
    course?.courses?.map((val, ky) => {
      if (val?.type == "VICKY") {
        setClickSubActivity(val);
      }
    });
    let activityArr = [];
    clickSubActivity?.activities.map((vl, ky) => {
      if (ky > 0) {
        activityArr.push(vl);
      }
    });
    setSelectedSubActivity(data);
    setActivities(activityArr);
    showViewActivity(
      clickSubActivity?.activities,
      clickSubActivity,
      dimName,
      type
    );
    setSubjectChange(true);
  };
  const [ActivityIcon, setActivityIcon] = useState();

  const changeSubCourse = (subCourse) => {
    dispatch(getMetaData(subCourse.id));
    if (activityType) {
      setActivities([]);
    }
    setActivityIcon(false);
    setShimerLoader(undefined);
    clickSubActivity?.activities?.filter((val, index) => {
      if (val.id == subCourse.id) {
        showViewActivity(val, clickSubActivity, dimName, type);
        setSelectedSubActivity(val);
      }
    });
  };

  const subActivity = (data) => {
    setShowSubData(true);
    setSubjectChange(false);
    setActivityIcon(data);
    setActivityType([]);
    setShimerLoader(undefined);

    clickSubActivity?.activities.filter((val, index) => {
      if (val.id === data?.id) {
        showViewActivity(val, clickSubActivity, dimName, type);
        setSelectedSubActivity(val);
      }
    });
  };

  return (
    <>
      <div className="halfPagePOpup">
        <div className="modal d-block">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading p-0 border-0 flex">
                  <h2>
                    {selectedCourseName}
                    <span
                      className="ml-2 pointer"
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="navbardropdown"
                      data-toggle="dropdown"
                    >
                      <i className="fa-solid fa-circle-chevron-down" />
                    </span>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbardropdown"
                    >
                      {courseList &&
                        courseList?.skills &&
                        getSequnceSort(courseList?.skills)?.map(
                          (course, key) => (
                            <React.Fragment key={key}>
                              {course?.isEnrolled && (
                                <li
                                  onClick={() => {
                                    changeCourse(course);
                                    setChangesSubAct(true);
                                  }}
                                >
                                  {course?.name?.length > 18 ? (
                                    <ReactTooltip id={course?.name}>
                                      <p>{course?.name}</p>
                                    </ReactTooltip>
                                  ) : (
                                    ""
                                  )}
                                  <span className="SubFName pointer ">
                                    {course.name.charAt(0).toUpperCase()}
                                  </span>
                                  <span
                                    data-for={course.name}
                                    data-event-off=""
                                    data-tip
                                  >
                                    {textTrim(course.name, 18)}
                                  </span>
                                </li>
                              )}
                            </React.Fragment>
                          )
                        )}
                    </ul>
                  </h2>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => {
                      closeModalSub();
                    }}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </div>
              </div>

              <div className="ActivityViewFormat HalfScreenAct">
                {changeSubAct ? (
                  <div className="Changesubmange">
                    {!activityType && (
                      <div className="flex w-100 flex-wrap HalfScActF">
                        <h5 className="courChangeActivity">
                          All Activity List:
                        </h5>
                        <ActivityList
                          course={courseData?.courses}
                          selectedCourse={selectedCourse}
                          closeModalSub={closeModalSub}
                          showActivity={showActivity}
                          activities={activities}
                          selectedSubActivity={selectedSubActivity}
                          setSelectedSubActivity={setSelectedSubActivity}
                          subActivity={subActivity}
                          setChangesSubAct={setChangesSubAct}
                          changeSubAct={changeSubAct}
                          showViewActivity={showViewActivity}
                          dimName={dimName}
                          deleteItem={deleteItem}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}
                {showSubData ? (
                  <div className="border-bottom  pb-2 mb-3">
                    <div className="subtitleHeadinhg w-100">
                      <div className="bodyimagetitle align-items-baseline">
                        <div>
                          <h4 className="flex w-100">
                            <strong>
                              {(activities.length == 0 &&
                                selectedSubActivity?.contentType === "Books") ||
                              ActivityIcon?.contentType == "Books" ? (
                                <span>
                                  <i className="fa-solid fa-book mr-1" />
                                </span>
                              ) : (
                                <></>
                              )}
                              {(activities.length == 0 &&
                                selectedSubActivity?.contentType ===
                                  "Videos") ||
                              ActivityIcon?.contentType == "Videos" ? (
                                <span>
                                  <i className="fa-brands fa-youtube mr-1" />
                                </span>
                              ) : (
                                <></>
                              )}

                              {(activities.length == 0 &&
                                selectedSubActivity?.contentType === "Links") ||
                              ActivityIcon?.contentType == "Links" ? (
                                <span>
                                  <i className="fa-solid fa-link" />
                                </span>
                              ) : (
                                <></>
                              )}
                            </strong>
                            <strong className="mr-auto ml-2">
                              {selectedSubActivity?.name}
                            </strong>
                            {courseData && (
                              <div className="ListIcon flex">
                                <span
                                  className="mr-3 pointer"
                                  onClick={() => {
                                    showAddActivity(
                                      data?.contentType,
                                      data?.contentType,
                                      data
                                    );
                                    closeModalEdit();
                                  }}
                                >
                                  <i className="fa-regular fa-pencil"></i>
                                </span>
                                <span
                                  className="threeDots pointer"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  id="navbardropdownAct"
                                  data-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical" />
                                </span>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="navbardropdownAct"
                                >
                                  <li>
                                    {" "}
                                    <div className="ActivityCategory border-0">
                                      <h4 className="d-flex align-items-center p-0 border-0">
                                        <i className="fa-duotone fa-line-height"></i>{" "}
                                        {selectedCourseName}
                                      </h4>
                                    </div>
                                  </li>

                                  {selectedCourse?.activities &&
                                    selectedCourse?.activities?.length > 0 &&
                                    selectedCourse?.activities?.map(
                                      (value1, ky) => (
                                        <React.Fragment key={ky}>
                                          {value1 &&
                                            value1?.type === "CUSTOM" && (
                                              <li
                                                style={{
                                                  backgroundColor:
                                                    selectedSubActivity ==
                                                    value1
                                                      ? "#cae6ff"
                                                      : "",
                                                }}
                                                onClick={() => {
                                                  setSelectedSubActivity(
                                                    value1
                                                  );
                                                  changeSubCourse(value1);
                                                }}
                                              >
                                                {value1?.name?.length > 18 ? (
                                                  <ReactTooltip
                                                    id={value1?.name}
                                                  >
                                                    <p>{value1?.name}</p>
                                                  </ReactTooltip>
                                                ) : (
                                                  ""
                                                )}
                                                <span
                                                  className="SubFName"
                                                  data-for={value1.name}
                                                  data-event-off=""
                                                  data-tip
                                                >
                                                  {(value1?.contentType ===
                                                    "Videos" ||
                                                    value1?.contentType ===
                                                      "Video") && (
                                                    <span>
                                                      <i className="fa-brands fa-youtube mr-1" />
                                                    </span>
                                                  )}
                                                  {value1?.contentType ===
                                                    "Books" && (
                                                    <span>
                                                      <i className="fa-solid fa-book" />
                                                    </span>
                                                  )}
                                                  {value1?.contentType ===
                                                    "Links" && (
                                                    <span>
                                                      <i className="fa-solid fa-link" />
                                                    </span>
                                                  )}{" "}
                                                  {textTrim(
                                                    value1?.name
                                                      ?.charAt(0)
                                                      .toUpperCase() +
                                                      value1?.name?.slice(1),
                                                    18
                                                  )}
                                                </span>
                                              </li>
                                            )}
                                        </React.Fragment>
                                      )
                                    )}
                                </ul>
                              </div>
                            )}
                          </h4>

                          {showSubData && (
                            <p className="pt-2 pb-2">
                              {data?.description && data?.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {showSubData &&
                  selectedSubActivity?.contentType === "Videos" && (
                    <>
                      {" "}
                      <div className="">
                        <h4 data-toggle="collapse">
                          <i className="fa-brands fa-youtube mr-2" />
                          Video(s) :
                        </h4>
                      </div>
                      <div className="AviewListing flex flex-wrap mt-3">
                        {shimerLoader == true && records?.records ? (
                          records?.records.map((val, ky) => (
                            <div
                              className="AViewListitem border mb-3 pointer"
                              key={ky}
                            >
                              <VideoCard
                                object={object && object[ky]}
                                data={val}
                                viewVideo={viewVideo}
                                deleteItem={deleteItem}
                              />
                            </div>
                          ))
                        ) : (
                          <ShimmerCategoryList
                            items={2}
                            categoryStyle="STYLE_SIX"
                          />
                          // <>Unable to load</>
                        )}
                      </div>
                    </>
                  )}
                {showSubData &&
                  selectedSubActivity?.contentType === "Books" && (
                    <>
                      <div className="">
                        <h4 data-toggle="collapse">
                          <i className="fa-solid fa-book mr-2" />
                          Book(s) :
                        </h4>
                      </div>
                      <div className="AviewListing flex flex-wrap mt-3">
                        {shimerLoader == true && records?.records ? (
                          records?.records.map((val, ky) => (
                            <div
                              className="AViewListitem linkViewItem mb-3 border pointer"
                              onClick={() => redirectSite(val)}
                              key={ky}
                            >
                              {val?.image && (
                                <div className="LinkImage pointer">
                                  {<img src={val?.image} alt="..." />}
                                </div>
                              )}
                              <div className=" videoDescription m-2 LinkDescription">
                                <h4>{textTrim(val?.title, 50)}</h4>
                                <h3 className="m-0">
                                  {textTrim(val?.name, 30)}
                                </h3>
                                <p>{textTrim(val?.description, 150)}</p>
                                <a href="#" className="">
                                  <i className="fa-brands fa-youtube mr-2" />
                                  {getHostName(val?.siteUrl)}
                                </a>
                              </div>
                            </div>
                          ))
                        ) : (
                          <ShimmerCategoryList
                            items={2}
                            categoryStyle="STYLE_SIX"
                          />
                        )}
                      </div>
                    </>
                  )}
                {showSubData &&
                  selectedSubActivity?.contentType === "Links" && (
                    <>
                      <div className="">
                        <h4 data-toggle="collapse">
                          <i className="fa-solid fa-link mr-2" />
                          Link(s) :
                        </h4>
                      </div>
                      <div className="AviewListing flex flex-wrap mt-3">
                        {shimerLoader == true && records?.records ? (
                          records?.records.map((val, ky) => (
                            <div
                              className="AViewListitem linkViewItem mb-3 border pointer "
                              onClick={() => redirectSite(val)}
                              key={ky}
                            >
                              {val?.image && (
                                <div className="LinkImage pointer">
                                  <img src={val?.image} alt="..." />
                                </div>
                              )}
                              <div className=" videoDescription m-2 LinkDescription">
                                <h4>{textTrim(val?.title, 30)}</h4>
                                <h3 className="m-0">
                                  {textTrim(val?.name, 30)}
                                </h3>
                                <p>{textTrim(val?.description, 150)}</p>
                                <a href="#" className="">
                                  <i className="fa-brands fa-youtube mr-2" />
                                  {getHostName(val?.siteUrl)}
                                </a>
                              </div>
                            </div>
                          ))
                        ) : (
                          <ShimmerCategoryList
                            items={2}
                            categoryStyle="STYLE_SIX"
                          />
                        )}
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
        {videoPopup && <ViewVideo close={close} data={videoPopup} />}
      </div>
    </>
  );
};
export default ActivityView;

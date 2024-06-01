/** @format */

import React, { useState, useEffect } from "react";
import * as image from "../../../resources/images";
import { useSelector, useDispatch } from "react-redux";
import { swal } from "../../../utils/Packages";
import { deleteActivity } from "../../../redux/actions/APIs";

const ActivityList = ({
  selectedCourse,
  closeModalSub,
  showActivity,
  selectedSubActivity,
  subActivity,
  setChangesSubAct,
  changeSubAct,
  course,
}) => {
  const { getSelectedUser, dimension, selectedDim } = useSelector(
    (state) => state.collections
  );
  const [activitiCourse, setActivitiCourse] = useState();

  const [subCourseList, setSubCourseList] = useState(course && course[0]);
  const dispatch = useDispatch();
  const deleteAct = (obj) => {
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
          deleteActivity(
            obj?.owner,
            subCourseList?.id,
            obj?.id,
            getSelectedUser?.id,
            selectedDim,
            dimension,
            obj.area
          )
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

  useEffect(() => {
    if (course) {
      course?.map((val, index) => {
        if (val?.type == "VICKY") {
          setSubCourseList(val);
        }
      });
    }
  }, [course]);

  return (
    <>
      {subCourseList?.activities &&
        subCourseList?.activities.map(
          (activity, key) =>
            activity?.type === "VICKY" && (
              <div
                className="Activity TeachersLive align-items-center "
                key={key}
              >
                <div className="TeacherActivityimg">
                  {" "}
                  wwwwwww <img src={image.greenflag} alt="..." />
                </div>
                <div className="ActivitycrdTitle flex">
                  <>
                    <>
                      <span
                        className="pointer"
                        onClick={() => {
                          showActivity(
                            subCourseList?.modules,
                            "Vicky",
                            subCourseList?.name,
                            subCourseList
                          );
                          closeModalSub();
                        }}
                      >
                        Learning Center
                      </span>
                    </>
                    <div className="ShareYourActivity flex Addschoolcard">
                      <div className="dropdownlistmodl">
                        <span
                          className="Activitymenubar ml-2 pointer"
                          aria-haspopup="true"
                          aria-expanded="false"
                          id="barlistdropdown"
                          data-toggle="dropdown"
                        >
                          {" "}
                          <i className="fa-solid fa-bars" />
                        </span>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="barlistdropdown"
                        >
                          <li>
                            <span
                              className="pointer"
                              onClick={() => {
                                showActivity(
                                  subCourseList?.modules,
                                  "Vicky",
                                  subCourseList?.name,
                                  subCourseList
                                );
                                closeModalSub();
                              }}
                            >
                              <i className="fa-regular fa-memo-circle-info"></i>{" "}
                              Show Details
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            )
        )}

      <div
        className={`${
          subCourseList?.activities?.length > 0 ? "flex w-100 flex-wrap" : ""
        } `}
      >
        {subCourseList?.activities?.length > 0
          ? subCourseList?.activities.map(
              (activity, key) =>
                activity?.type === "CUSTOM" && (
                  <div className="Activity selfmadeActivity" key={key}>
                    <div
                      className="ActivitycrdTitle pointer flex "
                      style={{
                        color: selectedSubActivity == key ? "#006dcc" : "",
                      }}
                    >
                      <React.Fragment>
                        <h3
                          onClick={() => {
                            subActivity(activity);
                            setChangesSubAct(!changeSubAct);
                          }}
                        >
                          {activity &&
                            (activity?.contentType === "Videos" ||
                              activity?.contentType === "Video") && (
                              <span className="ThumnailTeacher">
                                <i className="fa-brands fa-youtube" />
                              </span>
                            )}
                          {activity && activity?.contentType === "Links" && (
                            <span className="ThumnailTeacher">
                              <i className="fa-solid fa-link" />
                            </span>
                          )}
                          {activity && activity?.contentType === "Books" && (
                            <span className="ThumnailTeacher">
                              <i className="fa-solid fa-book" />
                            </span>
                          )}
                          <>{activity?.name}</>
                        </h3>
                        <div className="ShareYourActivity flex Addschoolcard">
                          <div className="dropdownlistmodl">
                            <span
                              className="Activitymenubar ml-2 "
                              aria-haspopup="true"
                              aria-expanded="false"
                              id="barlistdropdown"
                              data-toggle="dropdown"
                            >
                              {" "}
                              <i className="fa-solid fa-bars" />
                            </span>
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="barlistdropdown"
                            >
                              <li>
                                <span
                                  className="pointer"
                                  onClick={() => {
                                    subActivity(activity?.id);
                                    setChangesSubAct(!changeSubAct);
                                  }}
                                >
                                  <i className="fa-regular fa-memo-circle-info"></i>{" "}
                                  Show Details
                                </span>
                              </li>
                              <li>
                                <span
                                  className=""
                                  onClick={() => deleteAct(activity)}
                                >
                                  <i className="fa-solid fa-trash-can" /> Delete
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </React.Fragment>
                    </div>
                  </div>
                )
            )
          : ""}
      </div>
    </>
  );
};

export default ActivityList;

import React, { useState, useEffect } from "react";
import Home from "../Home";
import { Profile } from "../profile";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerCategoryList } from "react-shimmer-effects";
import CourseCard from "../dimensions/course/intellectual/CourseCard";
import { useParams } from "react-router-dom";

import {
  getProviderCourse,
  getDimensions,
  getGradeLevel,
  getCuratorCourse,
  getCurriculam,
} from "../../redux/actions/APIs";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";
import { resetEnrollResponse } from "../../redux/actions";
import CurriculumDetails from "../dimensions/activity/CurriculumDetails";

import EnrollPopUp from "./EnrollPopUp";

import ProviderExploreView from "./ProviderExploreView";
import ProviderCurriculumDetails from "./ProviderCurriculumDetails";

const Courses = () => {
  const dispatch = useDispatch();

  const path = useParams();
  const [previewState, setPreviewState] = useState(false);

  const [showPopUp, setShowPopUp] = useState(false);

  const [curriculamData, setCurriculamData] = useState({
    type: false,
    name: "",
  });

  const [courseEnrollDetail, setCourseEnrollDetail] = useState(undefined);
  const [surveyId, setSurveyId] = useState(undefined);

  const [resourceInnerData, setResourceInnerData] = useState({});
  const [activeIndex, setActiveIndex] = useState();
  const [course, setCourse] = useState({});

  const {
    courseItem,
    loggedInUser,
    getSelectedUser,
    getdimension,
    gradelevel,
    curatorCourses,
    defaultChildData,
    journeyEnrollResponse,
    next_scene_response,
  } = useSelector((state) => state.collections);

  useEffect(() => {
    if (!getdimension) {
      dispatch(getDimensions());
    }
  }, [getdimension]);

  useEffect(() => {
    if (!gradelevel) {
      dispatch(getGradeLevel());
    }
  }, []);
  useEffect(() => {
    if (loggedInUser) {
      if (loggedInUser?.role?.name === "PROVIDER") {
        dispatch(getProviderCourse(path?.id));
        // dispatch(getCuratorCourse(path?.id));
      }
    }
  }, [path?.id, loggedInUser]);

  const close = () => {
    setPreviewState(false);

    // setCourseDetail(false);

    setShowPopUp(false);
    dispatch(resetEnrollResponse());
    setSurveyId(undefined);
  };

  const handleResourceTabs = (selectedIndex, data) => {
    setResourceInnerData(data);
    setActiveIndex(selectedIndex);
  };

  const openCurriculam = (data) => {
    setCurriculamData({
      type: !curriculamData?.type,
      name: data?.name,
      modules: data?.courseModules,
      enroll: 0,
    });
  };

  let publishedCourse = 0;
  courseItem &&
    courseItem?.records?.map((vl, ky) => {
      if (vl?.isPublished) {
        publishedCourse = 1;
      }
    });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== "") {
      } else {
        if (loggedInUser) {
          if (loggedInUser?.role?.name === "PROVIDER") {
            dispatch(getProviderCourse(path?.id));
          }
        }
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: loggedInUser?.role.name === "PROVIDER" && `My Courses`,
        icon: image.courses,
      })
    );
  }, [loggedInUser]);

  const [showCurriculum, setShowCurriculum] = useState(false);
  const [courseId, setCourseId] = useState();
  const [courseTitle, setCourseTitle] = useState();
  const handleCurriculamData = (courseId, courseName) => {
    setShowCurriculum(true);
    setCourseId(courseId);
    setCourseTitle(courseName);
    dispatch(
      getCurriculam(loggedInUser?.id, courseId, loggedInUser?.role.name)
    );
  };

  const closeModal = (isClose) => {
    setShowCurriculum(isClose);
  };

  return (
    <>
      {showPopUp && (
        <EnrollPopUp courseEnrollDetail={courseEnrollDetail} close={close} />
      )}
      <Home>
        <div className="LeftbarPannel p-0" id="School_information">
          <div
            className={` ${
              getSelectedUser?.role?.name === "PROVIDER" ? "providerflows" : ""
            }`}
          >
            {courseItem ? (
              courseItem?.records.map(
                (vl, ky) =>
                  vl?.skills &&
                  vl?.skills.map(
                    (vl2) =>
                      vl2.courses.length > 0 &&
                      vl2.courses.map((vl3) => {
                        vl3.dimension = {
                          key: vl?.id,
                          value: vl?.name,
                        };
                        return (
                          <div
                            className="PannelContent basicdetailsform px-5"
                            key={ky}
                          >
                            <CourseCard data={vl3} skills={vl2} />
                          </div>
                        );
                      })
                  )
              )
            ) : (
              <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
            )}
            {curatorCourses
              ? curatorCourses?.records.map((val, index) => (
                  <div className="GridDetails Intellprovidertype">
                    <div className="GridCardTitle">
                      <h3 data-toggle="modal" data-target="#datapage">
                        <div
                          onClick={() =>
                            handleCurriculamData(
                              val?.course_id,
                              val?.course_name
                            )
                          }
                          className="coursetxtname"
                        >
                          {val?.course_name} - {val?.level_name}
                        </div>
                      </h3>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <Profile />
      </Home>

      {showCurriculum && (
        <ProviderCurriculumDetails
          courseId={courseId}
          courseTitle={courseTitle}
          closeModal={closeModal}
          handleResourceTabs={handleResourceTabs}
        />
      )}

      {showCurriculum && (
        <ProviderExploreView
          resourceInnerData={resourceInnerData}
          tabIndex={activeIndex}
          courseTitle={courseTitle}
        />
      )}
      {curriculamData?.type && (
        <CurriculumDetails
          closeModal={openCurriculam}
          courseName={curriculamData}
          data={curriculamData?.modules}
          enroll={curriculamData?.enroll}
        />
      )}
    </>
  );
};
export default Courses;

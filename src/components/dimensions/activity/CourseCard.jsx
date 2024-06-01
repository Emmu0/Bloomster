import React, { useEffect, useState } from "react";
import { Rating } from "../../../utils/Packages";
import * as image from "../../../resources/images";
import { useParams } from "react-router-dom";
import { getProviderCourses } from "../../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerCategoryList } from "../../../utils/Packages";
const CourseCard = ({ selectedCourseId }) => {
  const path = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProviderCourses(path.id, selectedCourseId));
  }, [selectedCourseId]);

  const { providercousers } = useSelector((state) => state.collections);

  const [courseData, setCourseData] = useState({
    courses: [
      {
        id: "1",
        courseName: "Chess for Beginners - Level 1 (Once a Week, 10 Weeks)",
        courseDescription:
          "This is a beginner course to introduce students to the game of chess and build their critical and strategic thinking. The class size is small to ensure individual attention and personalized learning for kids.",
        courseImage: "https://loremflickr.com/200/200",
        courseRating: "3",
        providerImage: "",
        providerName: "Pankaj Goyal",
        providerRating: "1",
        coveredLesson: [
          {
            lessonName: "Identify an author's statement of opinionsVicky",
          },
          {
            lessonName: "Order of eventsVicky",
          },
          {
            lessonName: "Determine the main idea of a passageVicky",
          },
        ],
      },
      {
        id: "1",
        courseName:
          "Word Wizards! 3rd 4th 5th Grade Vocabulary | Strengthening Word Usage",
        courseDescription:
          "Following my unique & successful vocabulary acquisition teaching method, CARD: Connect-Apply-Repeat-Draw, students will interact with 6 CHALLENGING words using TEN research-based learning modalities & then play Blooket to master each word.",
        courseImage: "https://loremflickr.com/200/200",
        courseRating: "4",
        providerImage: "",
        providerName: "Chandra Soni",
        providerRating: "3",
        coveredLesson: [
          {
            lessonName: "Lesson 1",
          },
          {
            lessonName: "Lesson 2",
          },
          {
            lessonName: "Lesson 3",
          },
        ],
      },
    ],
  });
  return (
    <>
      {providercousers ? (
        <div className="TopicSpeclist flex flex-wrap mt-3">
          {providercousers?.records?.map((data, index) => (
            <div className="Topicspeclistitem flex" key={index}>
              <div className="speclistimage">
                <img src={courseData?.courses?.[index]?.courseImage} alt="" />
                <div className="RatingWrap1 flex mb-2">
                  <Rating
                    initialValue={courseData?.courses?.[index]?.courseRating}
                    transition={false}
                    allowHalfIcon
                    readonly
                    allowHover={false}
                    size={20}
                    emptyColor="#ccc"
                    fillColorArray={[
                      "#f17a45",
                      "#f17a45",
                      "#f17a45",
                      "#f17a45",
                      "#f17a45",
                    ]}
                  />
                  <span className="ratingCount flex">
                    <i className="fa-solid fa-angle-down ml-1" />{" "}
                    <span className="ml-1">
                      {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                      ({courseData?.courses?.[index]?.courseRating})
                    </span>
                  </span>
                </div>
              </div>
              <div className="spacelistDesc">
                <div className="specialistTitle">
                  <div className=" p-0">
                    <h4 className="">{data.name}</h4>
                    <span className="AddCorsebtn">
                      Add <i className="fa-solid fa-circle-plus ml-1"></i>
                    </span>
                    <p className="speclistdesctext">
                      <span>
                        {" "}
                        <i className="fa-regular fa-notebook mr-2 mt-1"></i>
                      </span>
                      {data.description}
                    </p>
                  </div>
                </div>
                <ul className="spaclistcontactlist pt-3">
                  <li className="d-flex w-100 justify-content-between">
                    <div className="Coursevidtitle pointer">
                      <h5
                        className="w-100 flex"
                        data-toggle="collapse"
                        href={`#CoveredLesson${index}`}
                        aria-expanded="true"
                      >
                        Covered Lesson{" "}
                        <i className="fa-light fa-chevron-down"></i>
                      </h5>
                      <ul
                        className="panel-collapse coverlesson collapse"
                        id={`CoveredLesson${index}`}
                        aria-expanded="true"
                      >
                        {courseData?.courses?.[index]?.coveredLesson?.map(
                          (lesson, i) => (
                            <li> {lesson?.lessonName} </li>
                          )
                        )}
                      </ul>
                      {/* <SelectPicker data={data} groupBy="role" style={{}} />   */}
                    </div>
                    <div className="TeacherName d-flex">
                      <div className="TeacherActivityimg mr-2">
                        <img src={image.CourseProviderThumb} alt="" />
                      </div>
                      <div className="techrrat ">
                        <h5 className="pointer">
                          {courseData?.courses?.[index]?.providerName}
                        </h5>
                        <div className="RatingWrap1   flex">
                          <Rating
                            initialValue={
                              courseData?.courses?.[index].providerRating
                            }
                            transition={false}
                            allowHalfIcon
                            readonly
                            allowHover={false}
                            size={20}
                            emptyColor="#ccc"
                            fillColorArray={[
                              "#f17a45",
                              "#f17a45",
                              "#f17a45",
                              "#f17a45",
                              "#f17a45",
                            ]}
                          />
                          <span className="ratingCount">
                            <i className="fa-solid fa-angle-down ml-1" />{" "}
                            <span className="ml-1">
                              {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                              ({courseData?.courses?.[index].providerRating})
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : providercousers?.recordId == null ? (
        <p>No record's found</p>
      ) : (
        <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
      )}
    </>
  );
};

export default CourseCard;

import React, { useEffect } from "react";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { showDimGuidanceModal } from "../../redux/actions/Home";
import { convertedNumber, getCapitalized } from "../../utils/helper";
import ReadMore from "../controls/ReadMore";

const DimGuidance = () => {
  const dispatch = useDispatch();
  const { getGuidanceData } = useSelector((state) => state.home);
  const { defaultChildData } = useSelector((state) => state.collections);
  const close = () => {
    dispatch(showDimGuidanceModal());
  };

  let childName =
    defaultChildData && getCapitalized(defaultChildData?.firstName);
  let skillCount = 0;
  let skillCompleteCount = 0;
  let remainingSkill = 0;
  let paceCourseArray = [];
  let allTimeCourse = [];

  getGuidanceData?.skills.filter((skill) => {
    if (skill.completion < 100 && (skill.completion || skill.isEnrolled)) {
      if (
        skill?.courses?.length > 0 &&
        skill?.abandonCourseCount !== skill?.courses?.length
      ) {
        if (
          skill?.courses.some(
            (course) =>
              course.isreporting === true &&
              (course.isEnrolled === true || course.progress > 0)
          )
        ) {
          skillCount += 1;
        }
      }
    } else if (skill.completion === 0 && skill.courses.length > 0) {
      remainingSkill += 1;
    } else if (
      skill.completion <= 100 &&
      (skill.completion || skill.isEnrolled)
    ) {
      skillCompleteCount += 1;
    }

    skill?.courses?.length > 0 &&
      skill?.courses.map((course) => {
        const existingCourseIndex = allTimeCourse.findIndex(
          (item) => item.course === course.name
        );

        if (existingCourseIndex === -1) {
          allTimeCourse.push({
            course: course.name,
            isReporting: course.isreporting,
            isEnrolled: course.isEnrolled,
            points: course.points,
            progress: course.progress,
            activities: course.activities.filter(
              (activity) => activity.progress > 0 || skill?.isEnrolled
            ),
          });
        } else {
          allTimeCourse[existingCourseIndex].activities.push(
            ...course.activities.filter((activity) => activity.progress > 0)
          );
        }

        if (course.isreporting && (course.isEnrolled || course.progress)) {
          paceCourseArray.push(course.name);
        }
      });
  });

  let courseItem = [];
  let coursePaceItem = [];
  allTimeCourse.forEach((course) => {
    if (course.activities.length > 0) {
      let courseItemForCourse = [];
      let courseItemForPace = [];
      let activityProficiencySumForCourse = 0;
      let activityPaceSumForCourse = 0;
      course.activities.forEach((activity) => {
        if (activity.proficiency > 0) {
          activityProficiencySumForCourse += activity.proficiency;
        }
        if (activity.timing < 100) {
          activityPaceSumForCourse += activity.timing;
        }
      });

      if (
        (activityProficiencySumForCourse / course.activities.length < 80 &&
          course.isReporting &&
          course?.isEnrolled &&
          course?.progress >= 80) ||
        (course?.points > 0 && course?.progress <= 80 && course.isReporting)
      ) {
        courseItemForCourse.push(course.course);
      }
      if (activityPaceSumForCourse) {
        courseItemForPace.push(course.course);
      }

      if (courseItemForPace.length > 0) {
        coursePaceItem.push([...new Set(courseItemForPace)]);
      }
      if (courseItemForCourse.length > 0) {
        courseItem.push([...new Set(courseItemForCourse)]);
      }
    }
  });

  return (
    <div className='Addrewardform  Whatadmcndo'>
      <div className='modal show d-flex' id='schoolactivity10' role='dialog'>
        <div className='modal-dialog modal-lg serveyPoup'>
          <div className='modal-content'>
            <div className='modal-header'>
              <div className='heading p-0 border-0 w-100'>
                <h2 className='flex'>
                  <span className='flex'>
                    {" "}
                    <img src={image.AddLearner} alt='' className='mr-2' />
                    What should {childName} do next?
                  </span>
                  <button className='btn btn-primary' onClick={() => close()}>
                    <i className='fa-regular fa-xmark m-0'></i>
                  </button>
                </h2>
              </div>
            </div>

            <div className='modal-body'>
              <div className='admactivy'>
                <h4 className='mb-3'>
                  <img src={image.CourseTitleIcon} alt='' /> Skills
                </h4>

                <ul>
                  {remainingSkill > 0 ? (
                    <>
                      {remainingSkill > 0 && skillCount > 0 ? (
                        <li>
                          <img src={image.Electiclistiocn} alt='' />
                          <span>
                            {childName} is working on{" "}
                            {convertedNumber(skillCount).toLowerCase()} (
                            {skillCount}){" "}
                            {skillCount === 1 ? "skill" : "skills"}
                          </span>{" "}
                          <span>
                            {skillCompleteCount > 0
                              ? `and has completed ${convertedNumber(
                                  skillCompleteCount
                                ).toLowerCase()} (${skillCompleteCount}) ${
                                  skillCompleteCount === 1 ? "skill" : "skills"
                                }`
                              : ""}
                          </span>{" "}
                          in the {getGuidanceData.name} dimension
                        </li>
                      ) : (
                        <li>
                          <img src={image.Electiclistiocn} alt='' />
                          {childName} has completed{" "}
                          {convertedNumber(skillCompleteCount).toLowerCase()} (
                          {skillCompleteCount}){" "}
                          {skillCompleteCount === 1 ? "skill" : "skills"} in the{" "}
                          {getGuidanceData.name} dimension.
                        </li>
                      )}

                      <li>
                        <img src={image.Electiclistiocn} alt='' />
                        Recommendation: start working on courses in the
                        remaining{" "}
                        {convertedNumber(remainingSkill).toLowerCase()} (
                        {remainingSkill}){" "}
                        {remainingSkill === 1 ? "skill" : "skills"} in the{" "}
                        {getGuidanceData.name} dimension
                      </li>
                    </>
                  ) : remainingSkill === skillCount ? (
                    <li className='pl-3'>
                      <div className='signupType m-0 mb-3'>
                        <div className='flextwo  w-100'>
                          <label className='Selcheckbox m-0 ActiveQQst'>
                            <span className='QQtitle'>
                              {childName} has completed all skills in{" "}
                              {getGuidanceData.name} dimension.
                            </span>
                            <input type='radio' name='skill0' checked />
                            <span className='checkmark'></span>
                          </label>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className='pl-3'>
                      <div className='signupType m-0 mb-3'>
                        <div className='flextwo  w-100'>
                          <label className='Selcheckbox m-0 ActiveQQst'>
                            <span className='QQtitle'>
                              {childName} is doing well in the{" "}
                              {getGuidanceData.name} dimension by working on all
                              available skills
                            </span>
                            <input type='radio' name='skill0' checked />
                            <span className='checkmark'></span>
                          </label>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div className='admactivy'>
                {courseItem.length > 0 && (
                  <>
                    <h4 className='mb-3'>
                      <img src={image.mortarboard} alt='' /> Courses
                    </h4>

                    <h5 className='mb-2 pl-3'>
                      <strong>Proficiency</strong>
                    </h5>

                    <ul>
                      <li>
                        <img src={image.Electiclistiocn} alt='' />
                        {childName}’s proficiency is less than 80% in the
                        courses:{" "}
                        <ReadMore limit={100} height={60}>
                          {courseItem.join(", ")}
                        </ReadMore>
                      </li>

                      <li>
                        <img src={image.Electiclistiocn} alt='' />
                        Recommendation: complete all knowledge checks, quizzes,
                        and exercises to enhance your comprehension of the
                        subject matter
                      </li>
                    </ul>
                  </>
                )}

                {coursePaceItem.toString().length > 1 && (
                  <>
                    {" "}
                    <h5 className='mb-2 pl-3'>
                      <strong>Pace</strong>
                    </h5>
                    <ul>
                      <li>
                        <img src={image.Electiclistiocn} alt='' />
                        {childName}’s pace is slower than recommended for the
                        courses: {coursePaceItem.join(", ")}{" "}
                      </li>
                      <li>
                        <img src={image.Electiclistiocn} alt='' />
                        Recommendation: complete remaining sections in four (4)
                        days or less for optimal retention of the subject matter
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className='modal-footer'>
              <div className='form-group BDsubmitbutton d-flex m-0'>
                <div className='buttonDistribotion'>
                  <button
                    type='button'
                    className='btn-blue btn-login d-block mb-5 cancelbutton'
                    onClick={() => close()}>
                    <i className='fa-solid fa-xmark'></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimGuidance;

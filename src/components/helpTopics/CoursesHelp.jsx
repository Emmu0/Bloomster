/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";
import { SITENAME } from "../../utils/Messages";

const CoursesHelp = () => {
  const dispatch = useDispatch();
  const { loggedInUser, defaultChildData } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "Course Details & Enrollment",
      })
    );
  }, [loggedInUser]);

  return (
    <div>
      <Home className="outerPagesHeader">
        <section className="helpdetails">
          <div className="container">
            <div className="HGprocess">
              <div className="d-flex mb-5 align-items-flex-start">
                <div className="LeftbarPannel p-0">
                  <div className="ProcessAccordian w-100" div id="accordion">
                    <div className="Processaccordianlist" id="heading1">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        <img src={image.SceneQuestionicon} />
                        Where can I view all available courses?{" "}
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse show"
                        id="collapse1"
                        aria-labelledby="heading1"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Select the{" "}
                              <img
                                src={image.mortarboard}
                                className="imgicon_styl"
                              />
                              <strong className="bluestyl">
                                {" "}
                                Course Catalog{" "}
                              </strong>{" "}
                              icon on the left navigation panel and this will
                              bring you to the course catalog page.
                            </li>
                            <li>
                              On the course catalog page, you have the option to
                              see our most popular courses by selecting the
                              <strong> Most Popular Courses </strong>option, or
                              use filters on the right panel to narrow down your
                              search.
                            </li>
                            <li>
                              You can filter by entering your search text,
                              selecting displayed tags, or by dimension and
                              skill from the right panel.
                            </li>
                            <li>
                              You have the option to select multiple tags, or
                              dimensions, or skills to broaden your search.
                            </li>
                            <li>
                              To remove a filter, simply select the X in front
                              of the search filter in the top menu, as shown
                              here.
                            </li>
                            <li>
                              Once you have found a course you are interested
                              in, simply click the <strong>Enroll</strong> button to get started.
                              <img
                                src={image.searchfilterss}
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="Processaccordianlist" id="heading2">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse2"
                        aria-controls="collapse2"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I see what courses my child is enrolled in?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse2"
                        aria-labelledby="heading2"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Select the{" "}
                              <strong className="bluestyl">
                                <img
                                  src={image.dimension3d}
                                  className="imgicon_styl"
                                />{" "}
                                My Dimensions
                              </strong> icon{" "}
                              on the left navigation panel to access the My
                              Dimensions page.
                            </li>
                            <li>
                              This will bring you to the{" "}
                              <strong>My Dimensions</strong> page where you will
                              see the courses you have enrolled in, categorized
                              by dimension and then by skill.
                            </li>
                            <li>
                              If you scroll to the bottom of the My Dimensions
                              page, you can see the skills you have not yet
                              explored. Simply click the skill name to view
                              available courses in that skill and enroll.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="Processaccordianlist" id="headingThree">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-controls="collapseThree"
                      >
                        <img src={image.SceneQuestionicon} />
                        Where can I see course details?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.mortarboard}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl">
                                {" "}
                                Courses Catalog{" "}
                              </strong>{" "}
                              icon from anywhere on the platform.
                            </li>

                            <li>
                              This will bring you to the Courses Catalog where
                              you can see the courses available to enroll in,
                              and the courses you are enrolled in.
                            </li>
                            <li>
                              Courses you are enrolled in are designated by a
                              green check and the word <strong>Enrolled</strong>{" "}
                              on the top right side of the course card.{" "}
                            </li>
                            <li>
                              To learn more about the course, click on the
                              course name. You will be able to see the detailed
                              course description, details for each of the four
                              (4) sections that make up this course.
                            </li>
                            <li>
                              Click <strong>Level X of Y</strong> or{" "}
                              <strong>Course X of Y</strong> under the course
                              name to see other courses that make up this series
                              of courses.
                              <img src={image.coursedetailss} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading4">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse4"
                        aria-controls="collapse4"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I find out the Dimensions and Skills you
                        currently offer courses in?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse4"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Select the{" "}
                              <img
                                src={image.mortarboard}
                                className="imgicon_styl"
                              />
                              <strong className="bluestyl">
                                {" "}
                                Course Catalog{" "}
                              </strong>{" "}
                              icon on the left navigation panel to access the
                              Course Catalog page.
                            </li>
                            <li>
                              On the courses page, you will see the five (5)
                              dimensions that make up your child’s holistic
                              growth and thirty-six (36) skills categorized
                              under these dimensions.
                            </li>
                            <li>
                              Click on a dimension or skill to see the courses
                              available in that dimension or skill respectively.
                            </li>
                            <li>
                              Skills we do not currently offer courses in are
                              grayed out and are not clickable.
                            </li>
                            <li>
                              In total, we have identified thirty-six (36)
                              skills across five (5) dimensions that we are
                              continuously adding courses to.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading5">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse5"
                        aria-controls="collapse5"
                      >
                        <img src={image.SceneQuestionicon} />
                        What course details are available to help me decide to
                        enroll in the course?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse5"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              For any course you are interested in, you can see
                              the course name, course section names, and the
                              rating. You can also see the other courses that
                              make up this series of courses.
                            </li>
                            <li>
                              To learn more about the course, click on the
                              course name. You will be able to see the detailed
                              course description and details for each of the
                              four (4) sections that make up this course.
                            </li>
                            <li>
                              Just under the course name on the top right you
                              can see the course rating based on user feedback.
                            </li>
                            <li>
                              Below the course rating, click Level X of Y or
                              Course X of Y to see other courses that make up
                              this series of courses.
                            </li>
                            <li>
                              On the top right, you can see the course provider
                              name and rating.
                              <img src={image.coursepagess} />
                            </li>
                            <li>
                              To learn more about the course provider, click on
                              the course provider name to see their profile
                              headline, qualifications, and experience.
                            </li>
                            <li>
                              In addition to the above information, you can
                              explore the first section of the course before
                              enrolling by clicking on the section 1 name,
                              absolutely free. This is to help you make an
                              informed decision on pursuing the course further.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading6">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse6"
                        aria-controls="collapse6"
                      >
                        <img src={image.SceneQuestionicon} />
                        Where can I learn more about the course provider?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse6"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click on the course name. The course provider’s
                              name and rating is at the top right of the screen.
                            </li>
                            <li>
                              To learn more about the course provider, click on
                              the course provider name to see their profile
                              headline, qualifications, and experience.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading7">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse7"
                        aria-controls="collapse7"
                      >
                        <img src={image.SceneQuestionicon} />I have completed
                        the lessons but still see less than 100% complete. What
                        do I need to do to get to 100% completion?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse7"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Course content for each course section consists of
                              three (3) components - scenes, knowledge checks,
                              and section exercises.
                            </li>
                            <li>
                              If you believe you have completed these three (3)
                              section components and still do not have a 100%
                              completion, make sure you have answered all
                              questions in the knowledge checks and section
                              exercises.
                            </li>
                            <li>
                              Refer to the steps below to identify questions you
                              need to answer to get to 100%:
                            </li>
                            <ul>
                              <li>
                                A green numbered circle above the question in a
                                knowledge check or a section exercise indicates
                                you have answered that question.
                              </li>
                              <li>
                                If a numbered circle is gray, it means you have
                                not answered that question.
                              </li>
                              <li>
                                While you are working on a question, the
                                numbered circle for that question will be blue.
                              </li>
                              <li>
                                Once you have completed the question, the circle
                                will turn green.
                              </li>
                              <li>
                                Once you have answered all the questions and
                                completed all the activities, you should achieve
                                100% completion.
                              </li>
                            </ul>
                            <li>
                              It is possible you might have skipped a scene.
                              Scenes you have watched have a green check mark on
                              the top right of the video or illustration.
                            </li>
                            <li>
                              To jump to scenes you have skipped, select the
                              down arrow on the top right of the comic strip or
                              video.
                            </li>
                            <li>
                              You will see a list of all scenes with either a
                              green check or no check in front of the scene
                              name. Scenes you have skipped will not have a
                              check in front of them. Complete watching these
                              scenes and you should achieve 100% completion.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading8">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse8"
                        aria-controls="collapse8"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I submit a review of a course?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse8"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              When viewing a course in the dimension or courses
                              tabs, you can see the ratings below the course
                              title and course image. By clicking on the rating
                              stars, you can see the breakdown of responses from
                              other parents and learners.
                            </li>
                            <li>
                              You can only review courses you have enrolled in.
                            </li>
                            <li>
                              Click the course rating and then click the{" "}
                              <strong>Review Course</strong> button. A form will
                              pop up where you can provide your course review.
                            </li>
                            <li>
                              Click submit in the bottom right of this popup to
                              submit your feedback.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading9">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse9"
                        aria-controls="collapse9"
                      >
                        <img src={image.SceneQuestionicon} />
                        Can I change a course review I have provided?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse9"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>Yes, you can.</li>
                            <li>
                              Click the course rating below the course image and
                              then click the Review <strong>Course</strong> button. A form will
                              pop up where you can view and update your existing
                              course review.
                            </li>
                            <li>
                              Make the necessary updates, when you’re finished
                              click the <strong>Update</strong> button.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading10">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse10"
                        aria-controls="collapse10"
                      >
                        <img src={image.SceneQuestionicon} />
                        Who can see the course review I have provided?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse10"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Any parent or child with access to the{" "}
                              {SITENAME.NAME} platform can view the aggregate
                              star rating provided by all the reviewers for a
                              course.
                            </li>
                            <li>
                              Currently, you cannot see others’ written reviews
                              and are limited to only seeing your own written
                              reviews.
                            </li>
                            <li>
                              We plan to add the capability to see others’
                              written reviews soon.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading11">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse11"
                        aria-controls="collapse11"
                      >
                        <img src={image.SceneQuestionicon} />
                        What are the different components that make up a course
                        and where can I find more about them?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse11"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              A course focuses on a primary and related skills
                              and is divided into 4 sections. Each section takes
                              about 60 minutes to complete and includes the
                              following components:
                              <ul>
                                <li>
                                  Series: A series of videos and illustrations
                                  with relatable characters and real-world
                                  application of relevant skills, presented in
                                  an engaging story form to make learning easy
                                  and fun. Earn points for viewing each video or
                                  illustration.
                                </li>
                                <li>
                                  Characters: Get to know the characters in the
                                  story. They are just like your friends and
                                  family!
                                </li>
                                <li>
                                  Knowledge Checks: Attempt the knowledge checks
                                  with one or more questions to validate your
                                  understanding. Learn why your selected option
                                  is correct or incorrect, and earn points!
                                </li>
                                <li>
                                  Section Exercise: Engage friends and family,
                                  reflect, and practice your learning in the
                                  real world at the end of each section. Come
                                  back to complete the exercise, earn points,
                                  and finish strong!
                                </li>
                                <li>
                                  Points Bag: Earn points as you go along. The
                                  more you do, the more you earn: win bragging
                                  rights with friends and family!
                                </li>
                                <li>
                                  References (optional): Interested in learning
                                  more? Some courses provide references and
                                  additional resources that can be found in the
                                  references tab to enhance your learning.
                                </li>
                              </ul>
                            </li>
                            <li>
                              A course guide providing the above information is
                              always available from within a course on the
                              bottom right of your screen.
                              <img src={image.coursesceneguidess} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading12">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse12"
                        aria-controls="collapse12"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I receive a Certificate of Completion for a
                        course?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse12"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              You receive a Certificate of Completion once you
                              complete all course requirements. You know you
                              have completed the course when you see 100% in the{" "}
                              <strong className="bluestyl">
                                Percentage Circle
                              </strong>
                              , located on the top right corner of the course
                              card.
                            </li>
                            <li>
                              To view your certificate click the{" "}
                              <strong className="bluestyl">
                                Learner Center
                              </strong>{" "}
                              found near the bottom left of the course card and
                              then on the menu that appears, click the{" "}
                              <strong className="bluestyl">Certificate</strong>{" "}
                              option.
                              <img src={image.viewcertificatess} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading13">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse13"
                        aria-controls="collapse13"
                      >
                        <img src={image.SceneQuestionicon} />
                        What are Parent Tools?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse13"
                        aria-labelledby="heading13"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Each course features Parent Tools to help you
                              better connect with your child, create a nurturing
                              home environment that supports their learning, and
                              assess critical life skills your child learned in
                              the course.
                            </li>
                            <li>
                              <strong className="bluestyl">Parent Tools</strong>{" "}
                              are located on the bottom left of the course card.
                              When you click Parent Tools you will see a menu
                              with the following tools:
                              <ul>
                                <li>
                                  Tips and insights for connecting with your
                                  child. This is locked until you enroll your
                                  child in a course. Once you have enrolled your
                                  child in the course, you can access this tool
                                  by confirming your username and password.
                                </li>
                                <li>
                                  A skill evaluation tool - a conversational
                                  survey, you complete with your child to assess
                                  critical life skills your child learned in the
                                  course. Skill evaluation is locked until your
                                  child completes 100% of the course. Once your
                                  child has completed the course, you can access
                                  this tool by confirming your username and
                                  password.
                                </li>
                              </ul>
                              <img src={image.parenttoolss} className="mt-2" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading14">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse14"
                        aria-controls="collapse14"
                      >
                        <img src={image.SceneQuestionicon} />
                        What information is available from the Learner Center?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse14"
                        aria-labelledby="heading14"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              The{" "}
                              <strong className="bluestyl">
                                Learner Center
                              </strong>
                              , located near the bottom left of the course card,
                              provides an in-depth view on your child’s progress
                              in a course and the option to view your course
                              certificate of completion.
                            </li>
                            <li>
                              Click the{" "}
                              <strong className="bluestyl">
                                Course Summary
                              </strong>{" "}
                              option to see both a summarized and detailed view
                              of progress in each section of the course.
                            </li>
                            <li>
                              Once a course is completed, a{" "}
                              <strong className="bluestyl">Certificate</strong>{" "}
                              option will appear in the Learner Center. Clicking
                              on this displays your child’s certificate of
                              completion that can be shared with friends and
                              family to celebrate your child’s accomplishments!
                              <img
                                src={image.learningcenterss}
                                className="mt-2"
                              />
                              <img
                                src={image.learningcenterpopupss}
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="RightbarPannel p-0">
                  <div className="heading">
                    <h2>Help Topics</h2>
                  </div>
                  <div className="imagePart w-100 text-left">
                    <ul>
                      <li className="active">
                      <i className="fa-regular fa-circle-nodes mr-2"></i>Courses
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>My and
                        Learner Profile
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>
                        Dimensions and Skills
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>Holistic
                        View and Progress
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>
                        Subscription Billing
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>
                        Anything else?
                      </li>
                    </ul>
                  </div>
                </div> */}

                <HelpSection />
              </div>
            </div>
          </div>
        </section>
      </Home>
    </div>
  );
};
export default CoursesHelp;

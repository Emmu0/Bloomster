/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";

const progressandscore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "Progress and Scoring",
      })
    );
  }, []);

  return (
    <Home>
      <div className="LeftbarPannel p-0">
        <div className="ProcessAccordian w-100" div id="accordion">
          <div className="Processaccordianlist" id="headingOne">
            <h4
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <img src={image.SceneQuestionicon} />
              What information does the Home Page's assortment of charts convey?{" "}
              <span className="AngleupDown">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </h4>
            <div
              className="ProcessStepDesc collapse show"
              id="collapseOne"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="WHDieList">
                <ul className="pl-3">
                  <li>
                    Your child's progress is displayed on their Home page. The
                    circle at the center shows the overall progress and five (5)
                    surrounding circles show the progress in each of the five
                    (5) dimensions.
                  </li>
                  <li>
                    Overall progress is your child's consolidated progress
                    across the five (5) dimensions.
                  </li>
                  <li>
                    To get a more detailed view of the progress in a specific
                    dimension, click on that dimension’s progress circle. After
                    clicking the dimension progress circle, you see the
                    following charts.
                  </li>
                  <div className="ml-3">
                    <h3>Left panel</h3>
                    <ul className="pl-3">
                      <li>
                        The circle at the center shows the consolidated progress
                        for all skills your child is working on in that
                        dimension.
                      </li>
                      <li>
                        The surrounding circles show progress in the skills that
                        make up this dimension. Skill progress is the average of
                        progress for completed and in-progress courses in that
                        skill.
                      </li>
                    </ul>
                    <h3>Right panel</h3>
                    <ul className="pl-3">
                      <li>
                        Shows your child’s overall progress and the progress in
                        each of the five (5) dimensions.
                      </li>
                    </ul>
                  </div>
                  <li>
                    To get a more detailed view of the progress in a skill,
                    click on the skill progress circle. Once you click a skill
                    progress circle, you will see the courses your child is
                    working on in that skill and the progress details for each
                    course.
                  </li>
                  <li>
                    Progress in a course is calculated based on your child’s
                    proficiency, completion, and pace.
                  </li>
                  <div className="ml-3">
                    <ul className="pl-3">
                      <li>
                        Proficiency: assesses your child's comprehension of the
                        subject matter. Proficiency can be increased by
                        completing knowledge checks, quizzes, and exercises.
                      </li>
                      <li>
                        Completion: quantifies content your child has accessed
                        from the total available content.
                      </li>
                      <li>
                        Pace: evaluates your child's learning pace compared to
                        the recommended optimal pace. The recommended pace to
                        complete one (1) section of a course is 4 days.
                      </li>
                    </ul>
                  </div>
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
              How can I evaluate the skills my child is learning?{" "}
              <span className="AngleupDown">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </h4>
            <div
              className="ProcessStepDesc collapse"
              id="collapse8"
              aria-labelledby="heading8"
              data-parent="#accordion"
            >
              <div className="WHDieList">
                <ul className="pl-3">
                  <li>
                    Each enrolled course features a skill evaluation - a
                    conversational survey, you complete with your child to
                    assess critical life skills your child learned in the
                    course.
                  </li>
                  <li>
                    The skill evaluation is locked until your child completes
                    100% of the course.
                  </li>
                  <li>
                    Once your child has completed the course click on{" "}
                    <strong class="bluestyl">Parent Tools</strong> on the bottom
                    left of the course card.
                  </li>
                  <li>
                    You will then see a menu with two (2) options. Click on{" "}
                    <strong class="bluestyl">
                      See what{" "}
                      <strong class="bluestyl text-lowercase">
                        [your child name]
                      </strong>
                    </strong>
                    learned and confirm your username and password to start the
                    skill evaluation.
                  </li>
                  <li>
                    On the first screen you will see the key concepts your child
                    learned in this course and a real-life scenario to
                    facilitate the conversation with your child and for you to
                    assess how well they can apply the learnings in the real
                    world.
                  </li>
                  <li>
                    Click <strong>Next</strong> to begin the evaluation. The
                    evaluation consists of five (5) questions and each question
                    has four (4) options for your child to select from.
                  </li>
                  <li>
                    Once you and your child complete all five (5) questions and
                    click Submit you will see a results screen with the
                    questions, the options your child selected, and what your
                    child’s responses demonstrate about your them vis-a-vis the
                    skills they have learned.
                    <img src={image.skillprogressss} className="mt-2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Processaccordianlist" id="headingTwo">
            <h4
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-controls="collapseTwo"
            >
              <img src={image.SceneQuestionicon} />
              How can I see the progress of all my children?{" "}
              <span className="AngleupDown">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </h4>
            <div
              className="ProcessStepDesc collapse"
              id="collapseTwo"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="WHDieList">
                <ul className="pl-3">
                  <li>We display information for one (1) child at a time.</li>
                  <li>
                    To switch between children, click the down arrow next to the
                    child's name in the top right corner. Then select the child
                    you want to review, and their progress will be displayed on
                    their Home page.
                  </li>
                  <img src={image.selectchildrenss} className="mt-2" />
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
              How is the overall progress calculated on the Home page?{" "}
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
                    Overall progress is your child's consolidated progress
                    across the five (5) dimensions.
                  </li>
                  <li>
                    Dimension progress is the consolidated progress for all
                    skills your child is working on in that dimension.
                  </li>
                  <li>
                    Skill progress is the average of progress for completed and
                    in-progress courses in that skill.
                  </li>
                  <li>
                    Progress in a course is calculated based on your child’s
                    proficiency, completion, and pace.
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
              How is the progress in a dimension calculated?{" "}
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
                    Progress in a dimension is calculated based on your child's
                    average skill progress for skills in that dimension.
                  </li>
                  <li>
                    Progress in a skill is calculated based on your child’s
                    average course progress for courses in that skill.
                  </li>
                  <li>
                    Progress in a course is calculated based on your child’s
                    proficiency, completion, and pace in that course.
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
              How is the progress in a skill calculated?{" "}
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
                    Progress in a skill is calculated based on your child’s
                    average course progress for courses in that skill.{" "}
                  </li>
                  <li>
                    Progress in a course is calculated based on your child’s
                    proficiency, completion, and pace.
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
              How is the progress for a course calculated?{" "}
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
                    Progress in a course is calculated based on your child’s
                    proficiency, completion, and pace.
                  </li>
                  <div className="WHDieList">
                    <ul className="pl-3">
                      <li>
                        Proficiency: assesses your child's comprehension of the
                        subject matter. You can increase your proficiency by
                        completing knowledge checks, quizzes, and exercises.
                      </li>
                      <li>
                        Completion: quantifies content your child has accessed
                        from the total available content
                      </li>
                      <li>
                        Pace: evaluates your child's learning pace compared to
                        the recommended optimal pace. The recommended pace to
                        complete one (1) section of a course is 4 days.
                      </li>
                    </ul>
                  </div>
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
              <img src={image.SceneQuestionicon} />
              How are the points and % completion calculated for a course?{" "}
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
                    Points are earned for completing course activities -
                    watching videos, answering knowledge check and quiz
                    questions, and completing the section exercises. The Point
                    Bag is located in the bottom right corner of the course
                    card. This shows points earned for that particular course.
                  </li>
                  <li>
                    Watching a video and answering a knowledge check or quiz
                    question earns you 10 points.
                  </li>
                  <li>
                    For courses with a section exercise, points are earned based
                    on the type of question:
                  </li>
                  <div className="WHDieList">
                    <ul className="pl-3">
                      <li>
                        You earn 20 points for completing a radio button (only
                        one option is correct) or a checkbox (more than one
                        option is correct) question.
                      </li>
                      <li>
                        You earn 30 points for completing a free text entry
                        question.
                      </li>
                    </ul>
                  </div>
                  <li>
                    Completion is represented as a % and quantifies content you
                    have accessed from the total available content - videos,
                    knowledge checks & quizzes, and exercises.
                  </li>
                  <li>
                    The{" "}
                    <strong class="bluestyl">
                      {" "}
                      <img
                        src={image.percenticon}
                        className="imgicon_styl"
                      />{" "}
                      Percentage Circle
                    </strong>{" "}
                    displayed at the right of each section shows the completion
                    % for that section.
                  </li>
                  <li>
                    The{" "}
                    <strong class="bluestyl">
                      {" "}
                      <img
                        src={image.percenticon}
                        className="imgicon_styl"
                      />{" "}
                      Percentage Circle
                    </strong>{" "}
                    located on the top right corner of the course card, shows
                    the completion % for that course.
                  </li>
                  <li>
                    For a more in-depth view on the progress in a course, you
                    can refer to the{" "}
                    <strong class="bluestyl">Learner Center</strong> found near
                    the bottom left of the course card.
                    <img src={image.percentcompletess} className="mt-2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HelpSection />
    </Home>
  );
};
export default progressandscore;

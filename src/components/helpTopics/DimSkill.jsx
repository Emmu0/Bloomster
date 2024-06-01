/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";
import { SITEFNAME } from "../../utils/Messages";

const DimSkill = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "My Dimensions",
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
              What do you mean by Dimensions and Skills?{" "}
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
                    Holistic growth is an approach that focuses on the whole
                    child. Growth and development are balanced across all
                    aspects of a child’s life, rather than focusing on just one
                    aspect.
                  </li>
                  <li>
                    This includes the Social, Emotional, Spiritual, Physical,
                    and Intellectual aspects - what we refer to as the five (5)
                    key dimensions intrinsic to an individual's ability to lead
                    a fulfilling life.
                  </li>
                  <li>
                    We believe all these dimensions are interconnected and
                    interdependent, and that all five (5) dimensions should be
                    nurtured and developed for a person to truly thrive and be
                    fulfilled.
                  </li>
                  <li>
                    We have identified thirty-six (36) skills across these five
                    (5) dimensions that prepare your child for whatever the
                    future may hold for them.
                  </li>
                  <li>
                    Some of the skills we offer are - self-confidence,
                    self-awareness, critical thinking, conflict resolution,
                    social and cultural awareness, effective communication,
                    mindfulness, meditation…and many more!
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
              How do I determine what Dimensions and Skills I should work on?{" "}
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
                  <li>
                    {SITEFNAME.NAME} seeks to balance learning across the five
                    (5) dimensions, so your child is developing holistically.
                  </li>
                  <li>
                    On the home page, you can see your child's overall progress,
                    progress by dimension, and then by skill within each
                    dimension.
                    <img src={image.homescreenss} className="mt-2" />
                    <img src={image.homescreenskillsss} className="mt-1" />
                  </li>
                  <li>
                    When you see low progress in a dimension, you can click on
                    that dimension’s progress circle to learn more about what is
                    contributing to low progress, and which skills your child
                    needs to focus on.
                  </li>
                  <li>
                    You can explore and enroll your child in our most popular
                    courses from the Home page right panel, or click the{" "}
                    <strong class="bluestyl"> Course Catalog</strong> icon to
                    search for courses based on different search criteria -
                    search text, search tags, dimensions, and skills.
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
              What does the right panel of the My Dimensions page show me?{" "}
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
                    On the <strong>My Dimensions</strong> page, you see the
                    courses you have enrolled in categorized by dimension and
                    then by skill.
                  </li>
                  <li>
                    The right panel shows you progress details for the dimension
                    you are currently viewing.
                  </li>
                  <li>
                    In the <strong>planetary view</strong> graph at the top, the
                    center circle shows the overall progress in that dimension.
                  </li>
                  <li>
                    The circles along the circumference show the overall
                    progress in the skills you are working on within this
                    dimension.
                  </li>
                  <li>
                    Below the planetary view graph, you will see in-depth
                    progress information about each course you have enrolled in.
                  </li>
                  <li>
                    Progress in a course is calculated based on your child’s
                    proficiency, completion, and pace.
                  </li>
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
                      Pace: evaluates your child's learning pace compared to the
                      recommended optimal pace. The recommended pace to complete
                      one (1) section of a course is 4 days.
                    </li>
                  </ul>
                </ul>
                <img src={image.planetaryview} />
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
              How do I see my enrolled courses on the My Dimensions page?{" "}
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
                      src={image.dimension3d}
                      className="imgicon_styl ml-2"
                    />{" "}
                    <strong class="bluestyl">My Dimensions</strong> icon on the
                    left navigation panel to access the My Dimensions page.
                  </li>
                  <li>
                    This will bring you to the <strong>My Dimensions</strong>{" "}
                    page, where you will see the courses you have enrolled in,
                    categorized by dimension and then by skill.
                  </li>
                  <li>
                    If you scroll to the bottom of the My Dimensions page, you
                    can see the skills you have not yet explored. Simply click
                    the skill name to view available courses in that skill and
                    enroll.
                    <img src={image.enrolledcoursess} className="mt-2" />
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
export default DimSkill;

/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";

const ParentLearnerProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "Learner Pathway",
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
              What is the purpose of a Learner Pathway?
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
                    Learner Pathways are curated sets of courses that target
                    current and complex issues children commonly face.
                  </li>
                  <li>
                    You know best what your child needs to work on or is
                    interested in. Based on your child’s interest or problem
                    areas, select the most relevant Learner Pathway for your
                    child.
                  </li>
                  <li>
                    You also have the option of creating your Custom Pathway by
                    selecting one (1) skill your child is most interested in or
                    needs to work on in each dimension.
                  </li>
                  <li>
                    Enrolling in a Learner Pathway allows for the most relevant
                    learning that addresses your child’s highest interest and/or
                    problem areas early.
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
              How do I enroll in a Learner Pathway?
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
                    Select the{" "}
                    <strong className="bluestyl">Learner Pathway</strong> icon
                    on the left navigation panel to access the Learner Pathway
                    page.
                  </li>
                  <li>
                    If you have not already created a Learner Pathway for your
                    child, you will be served with the Learner Pathway brochure
                    that explains what Learner Pathways are all about.
                  </li>
                  <li>
                    On the right, you will see a list of pathways that target
                    current and complex issues children commonly face.
                  </li>
                  <li>
                    When you select a pathway, you will see a curated set of
                    courses to address specific problem areas. On the left
                    panel, you can see the skills covered by this pathway, a
                    description on how this pathway can help your child, and the
                    course list for this pathway.
                  </li>
                  <li>
                    Click the <strong>Enroll</strong> button at the bottom right
                    of the course list to enroll in the selected Learner
                    Pathway.
                  </li>
                  <li>
                    You also have the option of creating your Learner Pathway.
                    <ul className="pl-3">
                      <li>
                        Select the <strong>Create Your Own Pathway</strong>{" "}
                        option from the right panel.
                      </li>
                      <li>
                        A pop-up will ask you to select one (1) skill your child
                        is most interested in or needs to work on in each
                        dimension.
                      </li>
                      <li>
                        Once you have made all the selections and hit next, you
                        will be presented with a list of recommended courses.
                      </li>
                      <li>
                        Click the <strong>Enroll</strong> button at the bottom
                        right of the course list to enroll in the Custom
                        Pathway.
                      </li>
                    </ul>
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
              How can I view the courses my child enrolled in as a part of their
              Learner Pathway and the course progress?
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
                    Select the
                    <img
                      src={image.pathwaysicon}
                      className="imgicon_styl ml-2"
                    />{" "}
                    <strong className="bluestyl"> Learner Pathway </strong> icon
                    on the left navigation panel.
                  </li>
                  <li>
                    If you have enrolled your child in a pathway, you will be
                    directed straight to the <strong>My Pathway</strong> tab
                    that has the details for the pathway you have enrolled your
                    child in.
                  </li>
                  <li>
                    When you are on the <strong>My Pathway</strong> tab, you can
                    see course progress details for the courses in this pathway
                    on the right panel.
                    <img src={image.myjourneyss} className="mt-2" />
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
              Can I enroll in more than one Learner Pathway?
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
                    At this time, you can only enroll in one Learner Pathway per
                    child.
                  </li>
                  <li>
                    You can enroll your child in other courses that are not part
                    of their Learner Pathway from the Courses page.
                    <ul>
                      <li>
                        Select the{" "}
                        <img src={image.mortarboard} className="imgicon_styl" />
                        <strong className="bluestyl"> Courses </strong> icon on
                        the left navigation panel to access the Courses page
                      </li>
                      <li>
                        On the Courses page, you have the option to see our most
                        popular courses by selecting the{" "}
                        <strong>Most Popular Courses </strong> option, or using
                        filters on the right panel to narrow down your search.
                      </li>
                      <li>
                        You can filter by entering your search text, selecting
                        displayed tags, or by dimension and skill from the right
                        panel.
                      </li>
                    </ul>
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
              How can I create a learner Pathway for each of my children?
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
                    {" "}
                    To switch between children, click the down arrow next to the
                    child's name in the top right corner. Then select the child
                    you want to create a Learner Pathway for.
                    <img src={image.mychildrenss} className="mt-2" />
                  </li>
                  <li>
                    Select the{" "}
                    <img
                      src={image.pathwaysicon}
                      className="imgicon_styl mr-2"
                    />
                    <strong className="bluestyl"> Learner Pathway </strong> icon
                    on the left navigation panel to access the Learner Pathway
                    page
                  </li>
                  <li>
                    If you have not already created a Learner Pathway for your
                    child, you will be served with the Learner Pathway brochure
                    that explains what Learner Pathways are all about.
                  </li>
                  <li>
                    On the right, you will see a list of pathways that target
                    current and complex issues children commonly face.
                  </li>
                  <li>
                    When you select a pathway, you will see a curated set of
                    courses to address specific problem areas. On the left
                    panel, you can see the skills covered by this pathway, a
                    description on how this pathway can help your child, and the
                    course list for this pathway.
                  </li>
                  <li>
                    Click the <strong>Enroll</strong> button at the bottom right
                    of the course list to enroll in the selected Learner
                    Pathway.
                  </li>
                  <li>
                    You also have the option of creating your Learner Pathway.
                    <ul className="pl-3">
                      <li>
                        Select the <strong>Create Your Own Pathway</strong>{" "}
                        option from the right panel.
                      </li>
                      <li>
                        A pop-up will ask you to select one (1) skill your child
                        is most interested in or needs to work on in each
                        dimension.
                      </li>
                      <li>
                        Once you have made all the selections and hit next, you
                        will be presented with a list of recommended courses.
                      </li>
                      <li>
                        Click the <strong>Enroll</strong> button at the bottom
                        right of the course list to enroll in the Custom
                        Pathway.
                      </li>
                    </ul>
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
export default ParentLearnerProfile;

/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";
import { SITEFNAME } from "../../utils/Messages";

const HolisticProgress = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "Holistic Perspective",
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
              What do you mean by Holistic Approach, and what does it consist
              of?{" "}
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
                    We believe that all these dimensions are interconnected and
                    interdependent, and that all five (5) dimensions should be
                    nurtured and developed for a person to truly thrive and be
                    fulfilled.
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
              What is the social dimension and why is it important for my
              child’s overall development?{" "}
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
                    {SITEFNAME.NAME}'s approach to education in the Social
                    Dimension explores skills such as Effective Communication,
                    Conflict Resolution, and Relationship Management.
                  </li>
                  <li>
                    Growth along the social dimension is vital for your child's
                    adaptability and success.
                  </li>
                  <li>
                    It encourages them to cooperate and connect with others,
                    resolve conflict, contribute to their communities, and make
                    responsible decisions.
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
              What is the emotional dimension and why is it important for my
              child’s overall development?{" "}
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
                    {SITEFNAME.NAME}'s approach to education in the Emotional
                    Dimension explores skills such as Self-Awareness, Self-Confidence, Self-Regulation, and Fear Management.
                  </li>
                  <li>
                    From developing a strong sense of self to building awareness
                    of their feelings, the development of emotional skills helps
                    your child grow into an emotionally intelligent, balanced
                    individual, capable of navigating the uncertainties of life.
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
              What is the spiritual dimension and why is it important for my
              child’s overall development?{" "}
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
                    {SITEFNAME.NAME}'s approach to education in the Spiritual
                    Dimension explores skills such as Gratitude, Mindfulness,
                    and Meditation.
                  </li>
                  <li>
                    By developing their spiritual dimension, your child can
                    connect with their purpose, learn to think and act
                    mindfully, and cultivate gratitude, to cope better with
                    life's stresses and safeguard their mental health.
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
              What is the physical dimension and why is it important for my
              child’s overall development?{" "}
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
                    {SITEFNAME.NAME}'s approach to education in the Physical
                    Dimension explores skills such as Yoga, Physical Fitness,
                    and Health & Nutrition.
                  </li>
                  <li>
                    The development of the physical dimension supports your
                    child in achieving their physical growth milestones,
                    developing healthy habits, boosting attention and memory,
                    and improving their long-term health.
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
              What is the intellectual dimension and why is it important for my
              child’s overall development?{" "}
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
                    {SITEFNAME.NAME}'s approach to education in the Intellectual
                    Dimension explores skills such as Critical Thinking, Problem Solving, Learning & Adapting, Creativity & Innovation, and Finance.
                  </li>
                  <li>
                    The development of the intellectual dimension cultivates
                    critical thinking, problem-solving, and analytical skills,
                    empowering your child to excel academically, adapt to a
                    changing world, and contribute innovatively.
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
export default HolisticProgress;

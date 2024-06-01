/** @format */

import React, { useState, useEffect } from "react";
import WebLayout from "../layout/WebLayout";
import * as image from "../../resources/images";
import OwlCarousel from "react-owl-carousel";
import { BLOG_DATA } from "../../utils/DataObjects";
import SubscriberForm from "./SubscriberForm";
const Landingpagedemo1 = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    animateOut: 1,
    animateIn: 1,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  const options2 = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    animateOut: 1,
    animateIn: 1,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <WebLayout className="home">
      <div className="NlandingPage">
        <div className="NLContent">
          <section className="NLbanner">
            <div className="container borderlendingtop flex">
              <div className="left_panel">
                <h2>
                  Holistic <span>Learning</span>
                </h2>
                <h4>
                  to Prepare Your Child for an Evolving <span>Future..!</span>
                </h4>
                <p>
                  Help your child stand apart by providing them with learning
                  beyond the classroom to develop the skills, competencies, and
                  abilities they need to persevere, adapt, and thrive in a
                  rapidly changing world.
                </p>
                <p>
                  Explore the benefits of an individualized, holistic education
                  that thoroughly prepares your child for whatever the future
                  may hold for them.
                </p>
                <button type="button" className="sub_btn btn-login d-block ">
                  <i className="fa-solid fa-paper-plane mr-2"></i> Request
                  Access
                </button>
              </div>
              <div className="right_panel position-relative">
                <div className="right_dimension_img">
                  <img alt="..." src={image.new_banner_img} />
                </div>
              </div>
            </div>
          </section>
          <section className="Why_holistic_growth">
            <div className="container flex">
              <div className="growth_left w-100">
                <div className="t_content text-center">
                  <h2>
                    What is <span>Holistic Growth</span> and Why Does it Matter?
                  </h2>
                  <p>
                    Every sector of business, economics, and society is adapting
                    to the ways our world is evolving, so why has education
                    stayed the same? The abilities to thrive socially, connect
                    mindfully, and emote safely are not independent of the
                    skills your child may develop in intellectual realms, but
                    schools aren’t teaching beyond math, science, and
                    literature. If a child gets top grades and high test scores,
                    but cannot manage his emotions, deal with conflict, or
                    handle stress, then the child cannot thrive. Holistic
                    education goes beyond the basics to prepare your child for
                    what the future will actually demand of them.
                  </p>
                </div>
                <div className="b_content flex text-center">
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.desire_learning} />
                    </span>
                    <h4>
                      Ignites a Lifelong <strong>Desire for Learning</strong>
                    </h4>
                  </div>
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.adaptability} />
                    </span>
                    <h4>
                      Fosters{" "}
                      <strong>Resilience, Adaptability & Agility</strong>
                    </h4>
                  </div>
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.community} />
                    </span>
                    <h4>
                      Emphasizes a <strong>Sense of Community</strong>
                    </h4>
                  </div>
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.score_success} />
                    </span>
                    <h4>
                      Sets the Foundation for <strong>Enduring Success</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d_world">
            <div className="container">
              <div className="disc_title">
                <h2>
                  Discover a World of Endless{" "}
                  <span>Learning Possibilities</span>
                </h2>
                <h4>
                  What Dimensions Does a <span>Holistic </span>Education Cover?
                </h4>
              </div>
              <div className="dimension_tab flex">
                <ul>
                  <li className="active1">
                    <img src={image.courselevel3} alt="..." />
                    Intellectual
                  </li>
                  <li className="active2">
                    <img src={image.courselevel2} alt="..." />
                    Physical
                  </li>
                  <li className="active3">
                    <img src={image.courselevel4} alt="..." />
                    Social
                  </li>
                  <li className="active4">
                    <img src={image.CollegeJourneyicon} alt="..." />
                    Emotional
                  </li>
                  <li className="active5">
                    <img src={image.courselevel5} alt="..." />
                    Spiritual
                  </li>
                </ul>
              </div>

              <div className="d-flex">
                <div className="dtab_content">
                  <p>
                    The development of the intellectual dimension facilitates
                    the building and expansion of your child's cognitive
                    processes. This includes their ability to analyze and
                    evaluate information in a meaningful way, build a knowledge
                    base, think abstractly and rationally, acquire language
                    skills, pursue academics, develop creativity, and more.
                  </p>

                  <div className="d-flex">
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Math</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>English</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Science</h4>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4> Social Studies</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Art</h4>
                    </div>
                  </div>
                </div>
                <div className="dtab_img">
                  <img src={image.dworld_img} alt="..." />
                </div>
              </div>

              <div className="d-flex">
                <div className="dtab_content">
                  <p>
                    The development of the physical dimension supports your
                    child in achieving their physical growth milestones,
                    developing healthy habits, boosting attention and memory,
                    building endurance, and improving long-term health.
                    Consequently, they can build a passion for physical fitness
                    that lasts a lifetime and better manage the physiological
                    and biological changes they experience during various stages
                    of their life.
                  </p>

                  <div className="d-flex">
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Gross & Fine Motor Skills</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4> Physical Fitness</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4> Health & Nutrition</h4>
                    </div>
                  </div>
                </div>
                <div className="dtab_img">
                  <img src={image.physical_img} alt="..." />
                </div>
              </div>

              <div className="d-flex">
                <div className="dtab_content">
                  <p>
                    The development of the social dimension builds knowledge of
                    healthy communication styles and social establishments,
                    which is vital for your child's well-being and success in
                    all aspects of their life. It encourages them to cooperate,
                    connect with others, resolve conflict, contribute to
                    communities, and make constructive choices and responsible
                    decisions.
                  </p>

                  <div className="d-flex">
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Social & Cultural Awareness</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Responsible Decision Making</h4>
                    </div>
                  </div>
                </div>
                <div className="dtab_img">
                  <img src={image.social_img} alt="..." />
                </div>
              </div>

              <div className="d-flex">
                <div className="dtab_content">
                  <p>
                    From developing a strong sense of self, building an
                    awareness of their emotions, expressing and managing their
                    feelings, to developing coping mechanisms to deal with
                    triggers; With the development of their emotional dimension,
                    your child can grow into a balanced individual capable of
                    navigating the uncertainties of life.
                  </p>

                  <div className="d-flex">
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Self Awareness</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Self Management</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Resilience</h4>
                    </div>
                  </div>
                </div>
                <div className="dtab_img">
                  <img src={image.emotion_img} alt="..." />
                </div>
              </div>

              <div className="d-flex">
                <div className="dtab_content">
                  <p>
                    The development of spiritual understanding curates grand and
                    stable concepts of self in a curious child. By developing
                    their spiritual dimension, your child can find their purpose
                    in life, think and act ethically, feel a sense of connection
                    and spiritual fulfillment, live authentically, and cultivate
                    gratitude to cope better with life's stresses and safeguard
                    their mental health from an early age.
                  </p>

                  <div className="d-flex">
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Mindfulness</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.skills_img} alt="..." />
                      <h4>Compassion</h4>
                    </div>
                  </div>
                </div>
                <div className="dtab_img">
                  <img src={image.spiritual_img} alt="..." />
                </div>
              </div>
            </div>
          </section>
          <section className="tl_journey">
            <div className="container">
              <div className="jrny_title">
                <h2>
                {SITEFNAME.NAME} Uniquely Tailors Your{" "}
                  <span>Child’s Learning Journey</span>
                </h2>
              </div>
              <div className="flex jrny_box_style">
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon1} alt="..." />
                  </span>
                  <h4>Uncovers Innate Potential</h4>
                  <div className="bordr_styl"></div>
                  <p>
                    Identifies the unique needs, interests, and goals of your
                    child.
                  </p>
                </div>
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon2} alt="..." />
                  </span>
                  <h4>Individualized & Dynamic Process</h4>
                  <div className="bordr_styl"></div>
                  <p>
                    Encourages active learning by personalizing the content and
                    pace of instruction.
                  </p>
                </div>
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon3} alt="..." />
                  </span>
                  <h4>Integrated Perspective</h4>
                  <div className="bordr_styl"></div>
                  <p>
                    Tracks your child’s progress to nudge them toward goal
                    achievement and course completion.
                  </p>
                </div>
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon4} alt="..." />
                  </span>
                  <h4>Value-Adding Mentoring</h4>
                  <div className="bordr_styl"></div>
                  <p>Provides timely feedback, coaching, and guidance.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="wp_love">
            <div className="container">
              <div className="wpl_title">
                <h2>
                  Here’s Why Parents Love <span>{SITEFNAME.NAME}</span>
                </h2>
              </div>
              <div className="flex pb-2">
                <div className="wpl_title w-50">
                  <p>
                    AI and Tech have launched our world into a future of
                    uncertainties. You might be wondering how to set your child
                    up for success when you don’t know what the future will
                    demand.
                  </p>
                  <p>
                    We believe children are curious about more than the
                    intellectual basics, so we decided to educate them
                    holistically, AKA not just intellectually, but physically,
                    socially, emotionally, and spiritually, too. When educated
                    in all of these dimensions, your child is able to learn real
                    skills like meditation, leadership, and personal finance
                    that aren't taught in a typical classroom, but truly make a
                    difference in how your child will grow up. While this type
                    of curated education is available on the market, it’s
                    typically inaccessible for most and priced for only a few to
                    thrive. {SITEFNAME.NAME} is seeking to prepare every child for the
                    future at a truly affordable investment for parents
                    everywhere.
                  </p>
                </div>
                <div className="w-50 parentsimg">
                  <img src={image.parentslove} />
                </div>
              </div>
              <div className="wpl_box_styl flex">
                <OwlCarousel className="owl-theme" {...options}>
                  <div className="wpl_box blue_back">
                    <h2>
                      <img alt="..." src={image.well_dev_icon} /> Well-Rounded
                      Development
                    </h2>
                    <p>
                      Holistic Education in the intellectual, physical, social,
                      emotional, and spiritual dimensions uses live-learner data
                      to evolve and curate coursework based on each user's
                      needs.
                    </p>
                  </div>
                  <div className="wpl_box green_back">
                    <h2>
                      <img alt="..." src={image.pd_expert} /> Programs Developed
                      by Experts
                    </h2>
                    <p>
                      Expertly curated, relevant, and engaging courses,
                      resources, online lectures, tutorials, videos, readings,
                      and interactive exercises that provide an in-depth
                      exploration of the subject matter.
                    </p>
                  </div>
                  <div className="wpl_box orange_back">
                    <h2>
                      <img alt="..." src={image.feedback_support} /> Learner
                      360-Degree View
                    </h2>
                    <p>
                      A smart panel that provides parents with a comprehensive
                      and real-time view of their child's development vis-à-vis
                      skills, areas, competencies, and dimensions.
                    </p>
                  </div>
                  <div className="wpl_box purple_back">
                    <h2>
                      <img alt="..." src={image.flexibility_img} /> Democratizes
                      Quality Education
                    </h2>
                    <p>
                      A truly affordable subscription plan that makes
                      future-focused holistic growth education accessible and
                      sustainable for all.
                    </p>
                  </div>
                  <div className="wpl_box red_back">
                    <h2>
                      <img alt="..." src={image.flexibility_img1} /> Flexibility
                      & Convenience
                    </h2>
                    <p>
                      Children can learn at their own pace from anywhere with a
                      stable internet connection.
                    </p>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </section>
          <section className="exp_blog">
            <div className="container">
              <div className="blog_title">
                <h2>
                  The Latest from <span>{SITEFNAME.NAME}</span>
                </h2>
                <button
                  type="button"
                  className="blog_btn btn-login"
                  onClick={() => history.push(PATHS.BLOG)}
                >
                  Explore Our Blog{" "}
                  <img
                    src={image.explore_arrow_white}
                    alt="..."
                    className="ml-2"
                  />
                </button>
              </div>
              <div className="explr_blog_styl flex">
                <OwlCarousel
                  className="owl-theme"
                  // margin={20}
                  // items={3}
                  // nav
                  // animateOut={1}
                  // animateIn={1}
                  // dots={0}
                  {...options2}
                >
                  {BLOG_DATA &&
                    BLOG_DATA.map((vl, ky) => (
                      <div
                        className="blog_box"
                        key={ky}
                        onClick={() => history.push(vl?.url)}
                      >
                        <img src={vl.image} alt="..." />
                        <h4>{vl?.title}</h4>
                        <p>{vl?.description}</p>
                        <p className="readmore_style">
                          Read More{" "}
                          <img
                            src={image.explore_arrow_blue}
                            alt="..."
                            className="ml-1"
                          />
                        </p>
                      </div>
                    ))}
                </OwlCarousel>
              </div>
            </div>
          </section>
          <SubscriberForm />
        </div>
      </div>
    </WebLayout>
  );
};

export default Landingpagedemo1;

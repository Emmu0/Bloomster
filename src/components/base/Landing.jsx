import React from "react";
import Topbar from "./Topbar";
import * as image from "../../resources/images";
import { SITEFNAME } from "../../utils/Messages";

const Landing = (props) => {
  return (
    <>
      <div className="NlandingPage">
        <div className="NLContent">
          <section className="NLbanner">
            <div className="container borderlendingtop flex">
              <div className="left_panel">
                <h2>
                  Think <span>Holistically</span>
                </h2>
                <h4>
                  {" "}
                  to transform your child's future{" "}
                  <img src={image.holistic_plane} alt="..." className="ml-1" />
                </h4>
                <p>
                  Equip your child with the skills, competencies, and abilities
                  they need to persevere, adapt and thrive in a rapidly changing
                  world.
                </p>
                <p>Explore personalized curriculum for your child.</p>
                <button type="submit" className="sub_btn btn-login d-block ">
                  <i className="fa-solid fa-paper-plane mr-2"></i> Sign Up
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
              <div className="growth_left">
                <div className="t_content">
                  <h3>why</h3>
                  <h2>
                    <span>Holistic Growth</span> matters?
                  </h2>
                  <p>
                    Trends such as globalization and artificial intelligence are
                    changing the skills needed for success. People need to rely
                    even more on their uniquely human capacity for creativity,
                    responsibility and the ability to “learn to learn”
                    throughout their life.
                  </p>
                </div>
                <div className="b_content flex text-center">
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.cap} />
                    </span>
                    <h4>Ignites a lifelong desire for learning</h4>
                    {/* <h4><strong>desire for earning</strong></h4> */}
                  </div>
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.cap} />
                    </span>
                    <h4> Prepares for enduring success</h4>
                    {/* <h4><strong> </strong></h4> */}
                  </div>
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.cap} />
                    </span>
                    <h4>Fosters resilience, adaptability & agility</h4>
                    <h4>
                      <strong></strong>
                    </h4>
                  </div>
                  <div className="box_style">
                    <span>
                      <img alt="..." src={image.cap} />
                    </span>
                    <h4>Emphasizes a sense of community</h4>
                    <h4>
                      <strong></strong>
                    </h4>
                  </div>
                </div>
                <button type="submit" className="sub_btn btn-login d-block ">
                  Learn More
                </button>
              </div>
              <div className="growth_right">
                <div className="text_style position-relative">
                  <div className="RoundAnimation">
                    <div className="circle11 basiccircle">
                      <div className="Round1">
                        <img src={image.leftmind} alt="..." />
                      </div>
                    </div>
                    <div className="circle11 circle12">
                      <div className="Round1">
                        <img src={image.physicalicon} alt="..." />
                      </div>
                    </div>
                    <div className="circle11 circle13">
                      <div className="Round1">
                        <img src={image.socialicon} alt="..." />
                      </div>
                    </div>
                    <div className="circle11 circle14">
                      <div className="Round1">
                        <img src={image.rightmind} alt="..." />
                      </div>
                    </div>
                    <div className="circle11 circle15">
                      <div className="Round1">
                        <img src={image.spiritualicon} alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d_world">
            <div className="container">
              <div className="disc_title">
                <h2>
                  Discover a world of endless{" "}
                  <span>learning possibilities</span>
                </h2>
              </div>
              <div className="dimension_tab flex">
                <ul>
                  <li className="active">Intellectual</li>
                  <li>Physical</li>
                  <li>Social</li>
                  <li>Emotional</li>
                  <li>Spiritual</li>
                </ul>
              </div>
              <div className="d-flex">
                <div className="dtab_content">
                  <p>
                    The development of the intellectual dimension facilitates
                    the building and expansion of your child's cognitive
                    processes. Which includes their ability to analyze and
                    evaluate information in a meaningful way, build a knowledge
                    base, think abstractly and rationally, acquire language
                    skills, pursue academics, learn art, and more.
                  </p>

                  <div className="flex">
                    <div className="flex dtags">
                      <img src={image.dskills} alt="..." />
                      <h4>Language skills</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.dskills} alt="..." />
                      <h4>Language skills</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.dskills} alt="..." />
                      <h4>Language skills</h4>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex dtags">
                      <img src={image.dskills} alt="..." />
                      <h4>Language skills</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.dskills} alt="..." />
                      <h4>Language skills</h4>
                    </div>
                    <div className="flex dtags">
                      <img src={image.dskills} alt="..." />
                      <h4>Language skills</h4>
                    </div>
                  </div>
                </div>
                <div className="dtab_img">
                  <img src={image.dworld_img} alt="..." />
                </div>
              </div>
            </div>
          </section>

          <section className="tl_journey">
            <div className="container">
              <div className="jrny_title">
                <h2>
                {SITEFNAME.NAME} tailors your <span>child’s learning journey</span>
                </h2>
              </div>
              <div className="flex jrny_box_style">
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon1} alt="..." />
                  </span>
                  <h4>Unique potential</h4>
                  <div className="bordr_styl"></div>
                  <p>
                    Identifies the unique needs, interests, and goals of your
                    child
                  </p>
                </div>
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon1} alt="..." />
                  </span>
                  <h4>Personalized learning</h4>
                  <div className="bordr_styl"></div>
                  <p>
                    Encourages active learning by personalizing the content and
                    pace of instruction
                  </p>
                </div>
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon1} alt="..." />
                  </span>
                  <h4>360-degree view</h4>
                  <div className="bordr_styl"></div>
                  <p>
                    Tracks your child progress to nudge them towards the best
                    version of themselves
                  </p>
                </div>
                <div className="jrny_box">
                  <span>
                    <img src={image.journey_icon1} alt="..." />
                  </span>
                  <h4>Actionable guidance</h4>
                  <div className="bordr_styl"></div>
                  <p>Provides timely feedback, coaching, and guidance</p>
                </div>
              </div>
            </div>
          </section>
          <section className="wp_love">
            <div className="container">
              <div className="wpl_title">
                <h2>
                  Here’s why parents love <span>{SITEFNAME.NAME}</span>
                </h2>
                <p>
                {SITEFNAME.NAME} is part platform, part personal coach nurturing
                  empowered, self-aware, conscientious and well-rounded
                  individuals by focusing on all dimensions of development and
                  providing personalized guidance throughout their learning
                  journey.
                </p>
              </div>
              <div className="wpl_box_styl flex">
                <div className="wpl_box blue_back">
                  <h2>
                    <img alt="..." src={image.well_dev_icon} /> Well-rounded
                    development
                  </h2>
                  <p>
                    Focuses on the five dimensions with varying degrees of
                    emphasis at each level of a learner's learning journey;
                    continuously learns and evolves using expert guidance and
                    live learner data.
                  </p>
                </div>
                <div className="wpl_box green_back">
                  <h2>
                    <img alt="..." src={image.pd_expert} /> Programs developed
                    by experts
                  </h2>
                  <p>
                    Expertly curated, relevant, and engaging courses, resources,
                    online lectures, tutorials, videos, readings, and
                    interactive exercises that provide an in-depth exploration
                    of the subject matter.
                  </p>
                </div>
                <div className="wpl_box orange_back">
                  <h2>
                    <img alt="..." src={image.feedback_support} /> Learner
                    360-degree view
                  </h2>
                  <p>
                    A smart panel that provides parents with a comprehensive and
                    real-time view of their child's development vis-à-vis
                    skills, areas, competencies, and dimensions.
                  </p>
                </div>
                <div className="wpl_box purple_back">
                  <h2>
                    <img alt="..." src={image.well_dev_icon} /> Democratize
                    quality education
                  </h2>
                  <p>
                    A truly affordable subscription plan that makes
                    future-focused holistic growth education accessible and
                    sustainable for all.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="wp_love">
            <div className="container">
              <div className="wpl_title">
                <h2>
                  Here’s why parents love <span>{SITEFNAME.NAME}</span>
                </h2>
                <p>
                {SITEFNAME.NAME} is part platform, part personal coach nurturing
                  empowered, self-aware, conscientious and well-rounded
                  individuals by focusing on all dimensions of development and
                  providing personalized guidance throughout their learning
                  journey.
                </p>
              </div>
              <div className="wpl_box_styl flex">
                <div className="wpl_box blue_back">
                  <h2>
                    <img alt="..." src={image.well_dev_icon} /> Well-rounded
                    development
                  </h2>
                  <p>
                    Focuses on five dimensions with varying degrees of emphasis
                    at each level of learners learning journey; continuously
                    learns and evolves using expert guidance and live learner
                    data.
                  </p>
                </div>
                <div className="wpl_box green_back">
                  <h2>
                    <img alt="..." src={image.pd_expert} /> Programs developed
                    by expert
                  </h2>
                  <p>
                    Expertly curated, relevant, & engaging courses, resources,
                    online lectures, tutorials, videos, readings, & interactive
                    exercises that provide an in-depth exploration of the
                    subject matter.
                  </p>
                </div>
                <div className="wpl_box orange_back">
                  <h2>
                    <img alt="..." src={image.feedback_support} /> Learner
                    360-degree view
                  </h2>
                  <p>
                    A smart panel that provides parents with a comprehensive &
                    real-time view of their child's development vis-à-vis
                    skills, areas, competencies, and dimensions.
                  </p>
                </div>
                <div className="wpl_box purple_back">
                  <h2>
                    <img alt="..." src={image.well_dev_icon} /> Democratize
                    quality education
                  </h2>
                  <p>
                    A truly affordable subscription plan that makes
                    future-focused holistic growth education accessible and
                    sustainable for all.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="exp_blog">
            <div className="container">
              <div className="blog_title">
                <h2>
                  The latest from <span>{SITEFNAME.NAME}</span>
                </h2>
                <button type="submit" className="blog_btn btn-login">
                  Explore the blog{" "}
                  <img
                    src={image.explore_arrow_white}
                    alt="..."
                    className="ml-2"
                  />
                </button>
              </div>
              <div className="explr_blog_styl flex">
                <div className="blog_box">
                  <img src={image.blog_img} alt="..." />
                  <h5>COMMUNITY STORIES</h5>
                  <h4>
                  {SITEFNAME.NAME} featured: Finding the Teachable Moments during
                    COVID-19 (Forbes)
                  </h4>
                  <p>
                    With a stable internet connection, students can learn at
                    their own pace from anywhere.
                  </p>
                  <p className="readmore_style">
                    Read More{" "}
                    <img
                      src={image.explore_arrow_blue}
                      alt="..."
                      className="ml-1"
                    />
                  </p>
                </div>
                <div className="blog_box">
                  <img src={image.blog_img} alt="..." />
                  <h5>COMMUNITY STORIES</h5>
                  <h4>
                  {SITEFNAME.NAME} featured: Finding the Teachable Moments during
                    COVID-19 (Forbes)
                  </h4>
                  <p>
                    With a stable internet connection, students can learn at
                    their own pace from anywhere.
                  </p>
                  <p className="readmore_style">
                    Read More{" "}
                    <img
                      src={image.explore_arrow_blue}
                      alt="..."
                      className="ml-1"
                    />
                  </p>
                </div>
                <div className="blog_box">
                  <img src={image.blog_img} alt="..." />
                  <h5>COMMUNITY STORIES</h5>
                  <h4>
                  {SITEFNAME.NAME} featured: Finding the Teachable Moments during
                    COVID-19 (Forbes)
                  </h4>
                  <p>
                    With a stable internet connection, students can learn at
                    their own pace from anywhere.
                  </p>
                  <p className="readmore_style">
                    Read More{" "}
                    <img
                      src={image.explore_arrow_blue}
                      alt="..."
                      className="ml-1"
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="subscribe_style">
            <div className="container">
              <div className="subscribe_box_style">
                <h2>
                  <span>Subscribe</span> to our newsletter
                </h2>
                <p>
                  Get the best educational content, the latest updates, and
                  offers delivered straight to your inbox. Click here to sign up
                </p>
              </div>
              <div className="subscribe_box_style1">
                <input type="text" placeholder="Name..." />
                <input type="text" placeholder="Email..." />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </section>
          <section className="footer_style">
            <div className="container">
              <h4>© 2022 {SITEFNAME.NAME}.com. All rights reserved.</h4>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Landing;

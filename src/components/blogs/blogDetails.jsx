import React from "react";
import { useHistory } from "react-router-dom";
import * as image from "../../resources/images";
import WebLayout from "../layout/WebLayout";
import { PATHS } from "../../utils";
import { SITEFNAME, SITENAME } from "../../utils/Messages";

const blogDetails = () => {
  const history = useHistory();
  return (
    <WebLayout className="outerPagesHeader">
      <section>
        <div className="container">
          <div className="blogdetailsstyl d-flex mb-3">
            <div className="blogdesc mb-3">
              <h2>The Merits of Social Emotional Learning</h2>
              <p className="centercstylleft">
                “It’s never that our young people lack greatness — it’s that
                society isn’t creating the conditions for all youth to tap into
                their power.” - Byron Sanders, Big Thought
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <p className="text-center">
                    <img src={image.WHolisticgbnr} />
                  </p>
                </div>
                <div className="w-50">
                  <p>
                    A child’s first reactions to the world are emotional. They
                    approach shapes, sounds, and colors with wonder, openly
                    expressing the urgency of their emotions. But because
                    emotions can be both positive and negative, the ability to
                    regulate them becomes more important with age.
                  </p>

                  <p>
                    Children can only build healthy relationships with their
                    friends, family, and fellow students by possessing emotional
                    awareness. It’s through this and having empathy for others
                    that balance can be achieved. Fortunately, a social
                    emotional learning curriculum (SEL) is an important part of
                    realizing this ability.{" "}
                  </p>

                  <p>
                    In a post-pandemic world, the necessity for this kind of
                    learning has only become more important. In data from the
                    National Survey of Children’s Health in 2020, it was
                    determined that 12% of children aged 3-17 had experienced
                    anxiety or depression, a 9% increase from 2016.
                  </p>
                </div>
              </div>

              <p>
                Where anxiety and mental health issues arise, {SITEFNAME.NAME} offers SEL
                solutions that can help children adapt. Through a focus on the
                social, emotional, and spiritual pillars of holistic growth,
                {SITEFNAME.NAME} provides a transformational online education that is the
                key to lifelong evolution.{" "}
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <h4>Greater Resilience </h4>

                  <p>
                    The pace of change in the world is undoubtedly speeding up,
                    and it can be difficult to keep up - even for the most
                    adaptable.{" "}
                  </p>

                  <p>
                    But a focus on social emotional learning for kids can help
                    them build the resilience that’s needed to take on new
                    challenges. After all, challenges offer an opportunity for
                    growth!
                  </p>

                  <p>
                    Through a personalized holistic learning journey, {SITEFNAME.NAME}
                    prioritizes a child’s self-awareness and helps them monitor
                    negative self-talk. Whether a child is learning a new
                    software program or how to ride a bike, they’ll be empowered
                    to try, try again until they prevail.{" "}
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.personalSkillgraphics} className="pl-3" />
                </div>
              </div>

              <h4>Improved Academic Performance</h4>
              <p>
                Academic performance is among the most common ways that a
                child’s success is defined in today’s world. And while grades
                will still be a priority in the years to come, emphasizing
                social emotional learning can actually improve them.{" "}
              </p>

              <p className="centercstyl">
                A 2011 landmark analysis of 213 studies involving 270,000
                students found that SEL interventions that address the five core
                competencies increased student’ academic performance by 11
                percentile points.
              </p>

              <p>
                Because SEL benefits their social and emotional needs, children
                develop confidence in their ability to manage other parts of
                their life. They can embrace problem solving techniques and
                teamwork while staying motivated in the face of adversity.{" "}
              </p>

              <p>
                Whether it’s math, science, or history, {SITENAME.NAME}’s alternative
                education promotes critical thinking so children can engage with
                their curriculum while rising to its challenges.{" "}
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <img src={image.peopleexplore} className="pl-3" />
                </div>

                <div className="w-50">
                  <h4>Better Mental Health </h4>

                  <p>
                    The world can be taxing to our well-being in the day-to-day.
                    But in a post-pandemic world, few things have suffered quite
                    like mental health.{" "}
                  </p>

                  <p>
                    Unfortunately, children are even more vulnerable to the
                    changes that have been wrought on daily life because of
                    their sensitivity. Homeschooling during the pandemic
                    minimized their ability to interact with others through
                    field trips, dances, and day-to-day conversation.{" "}
                  </p>

                  <p>
                    But social emotional learning activities can bridge the gap.
                    Because a child who practices SEL will understand their
                    feelings, they’ll be better equipped to ask for help when
                    they’re struggling.{" "}
                  </p>

                  <p>
                    An emphasis on holistic learning also means they’ll be able
                    to cultivate healthy outlets for self-expression. Whether
                    it’s through art, music, or a favorite sport, children will
                    have the means to get their frustrations out.{" "}
                  </p>
                </div>
              </div>

              <h4>Emotional Regulation </h4>

              <p>
                Between the ages of 11 and 15, children tend to become more
                introspective, requiring privacy to sustain their sense of self.
                Because they begin to value the opinions of others more, it’s
                important that they can be honest about their emotions without
                too much conflict.
              </p>

              <p>
                Social emotional learning can provide the tools children need to
                deal with their emotions more effectively. Whether they’re
                feeling anger, sadness, or happiness, they can balance emotional
                awareness with logic in a given situation.
              </p>

              <p>
                It is through an online education journey with {SITEFNAME.NAME} that
                children can respect themselves while respecting others. By
                minimizing interpersonal conflict, they can build and maintain
                healthy relationships with their friends and fellow students.{" "}
              </p>

              <hr />

              <h4>Increased Empathy</h4>

              <p>
                It’s an unfortunate trend many of us have observed, but even the
                statistics suggest that empathy has declined in recent years.
              </p>

              <p className="centercstyl">
                In a survey by the United Way of the National Capital Area in
                Washington, D.C., it was determined that empathy ratings from
                1022 respondents across the United States decreased by 14%
                between 2019 and 2022.
              </p>

              <p>
                Empathy, though, is an essential element of relationships. In
                order to be a good family member, friend, and teammate, it’s
                necessary to understand where others are coming from.
              </p>

              <p>
                By prioritizing the pillars of the social, emotional, and
                spiritual through SEL, {SITEFNAME.NAME} can help children understand the
                feelings of others. It is only through engaging with a different
                perspective that a child can offer genuine support and kindness.{" "}
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <h4>Social Emotional Learning Inspires Adaptability!</h4>

                  <p>
                    The challenges of a post-pandemic world have been immense
                    for nearly everyone. And for children who are trying to
                    succeed academically while grappling with their emotions,
                    life requires even more mettle.{" "}
                  </p>

                  <p>
                    But even as the world is changing at breakneck speed, a
                    child who engages with social emotional learning can adapt
                    to adverse times. Through the transformational holistic
                    growth journey {SITEFNAME.NAME} offers, a child will have the
                    foundation they need to continually evolve.{" "}
                  </p>

                  <p className="centercstyl">
                    Are you ready to begin an SEL journey that will empower your
                    child to succeed?{" "}
                    <a href="mailto:contact@bloomster.com">
                      <strong>Reach out</strong>
                    </a>{" "}
                    to us today to learn about our platform {SITEFNAME.NAME} and how it can
                    help your child seize the future!
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.SELblog} className="w-100" />
                </div>
              </div>
              <hr />

              <div className="blogpagination">
                <div className="blogpagination_style">
                  <div
                    className="blogpaginationTitle"
                    onClick={() => history.push(PATHS.BLOGDETAILSTHREE)}
                  >
                    <span className="flex mr-3 backblogclr">
                      <i className="fa-solid fa-chevron-left mr-2"></i>Prev
                    </span>
                    <span className="flex mt-3">
                      <img src={image.cpTeacherdtlBanner} />
                      <h4>
                        How a Holistic Growth Approach Prepares Your Child for
                        the Future
                      </h4>
                    </span>
                  </div>

                  <div
                    className="blogpaginationTitle  align-items-end"
                    onClick={() => history.push(PATHS.BLOGDETAILTWO)}
                  >
                    <span className="flex ml-3 backblogclr">
                      Next <i className="fa-solid fa-chevron-right ml-2"></i>
                    </span>
                    <span className="flex mt-3 text-right">
                      <h4>The Benefits of a Personalized Learning Journey</h4>
                      <img src={image.aboutmegraphics} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  );
};

export default blogDetails;

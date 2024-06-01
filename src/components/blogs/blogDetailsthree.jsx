import React from "react";
import { useHistory } from "react-router-dom";
import * as image from "../../resources/images";
import WebLayout from "../layout/WebLayout";
import { PATHS } from "../../utils";
import { SITEFNAME } from "../../utils/Messages";

const blogDetails = () => {
  const history = useHistory();
  return (
    <WebLayout className="outerPagesHeader">
      <section>
        <div className="container">
          <div className="blogdetailsstyl d-flex mb-3">
            <div className="blogdesc mb-3">
              <h2>
                How a Holistic Growth Approach Prepares Your Child for the
                Future{" "}
              </h2>
              <p className="centercstylleft">
                “The future is completely open and we are writing it from moment
                to moment.” – Pema Chodron
              </p>
              <div className="d-flex w-100">
                <div className="w-50">
                  <p className="text-center">
                    <img src={image.cpTeacherdtlBanner} />
                  </p>
                </div>
                <div className="w-50">
                  <p>
                    There was a time in life that the pace of change was slower.
                    More measured and muted, the changes wrought on the world
                    each day were easier to understand and adapt to.
                  </p>

                  <p>
                    But as accessibility to information has become more
                    integrated in our daily lives, change has sped up.
                    Environmental, political, and economic realities can shift
                    so rapidly that it can be hard to react. And when it comes
                    to our children, who we want to be a positive force for
                    change in their communities, the challenges can be
                    significant.{" "}
                  </p>

                  <p>
                    While it’s not possible to predict the future, an emphasis
                    on the five dimensions of holistic growth can help. A child
                    who nurtures each aspect of themselves will possess
                    self-awareness and the ability to adapt. Through a holistic
                    learning journey with {SITEFNAME.NAME}, they’ll develop the digital
                    literacy and critical thinking skills that will help them
                    achieve their potential so they can reach great heights.{" "}
                  </p>
                </div>
              </div>

              <div className="d-flex w-100">
                <div className="w-50">
                  <h4>Problem Solving & Critical Thinking </h4>

                  <p>
                    A child’s ability to understand and absorb information is
                    necessary for academic success. However, it’s problem
                    solving and critical thinking that enables them to dig
                    deeper, assessing problems and being able to propose
                    solutions.{" "}
                  </p>

                  <p>
                    According to a survey by Reboot Foundation, 95% of Americans
                    believe critical thinking is a necessary skill in today’s
                    world. And as our reliance on artificial intelligence and
                    automation increases, it’s set to become even more
                    important. Many routine jobs and tasks will become a thing
                    of the past, so a child will need to be dexterous and agile
                    in their approach to life.{" "}
                  </p>

                  <p>
                    In a world that is more interconnected and complex, the
                    emphasis {SITEFNAME.NAME} places on holistic growth for well-rounded
                    achievement can help develop this skill. By questioning the
                    nature of things, a child can come up with the kind of
                    solutions that spring from a deeper comprehension.{" "}
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.social_img} className="pl-3" />
                </div>
              </div>

              <h4>Creativity & Innovation</h4>
              <p>
                Standardized education often places a greater focus on the
                intellectual aspect of a child’s development. Artistic
                activities like drawing, acting, and music are forsaken in favor
                of facts. Unfortunately, it’s because of this that a child’s
                creativity can be curtailed at a young age.{" "}
              </p>

              <p className="centercstyl">
                But it’s the creative instinct – and innovation alongside it –
                that may actually have a greater stake in the future to come. As
                everyday tasks become less common, children need to look at
                things in a different way. By approaching things creatively
                through alternative education, they’ll be able to forge unique,
                inventive solutions for the world ahead.
              </p>

              <p>
                It’s through an emphasis on the five dimensions of holistic
                growth that they can use their creativity to shine, pushing the
                future forward by thinking outside of the box.{" "}
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <img src={image.peopleexplore} className="pl-3" />
                </div>

                <div className="w-50">
                  <h4>Adaptability & Flexibility</h4>

                  <p>
                    Even in today’s world, most of us understand the importance
                    of being able to deal with change. Whether it’s technology,
                    the pandemic, or the political landscape, what is
                    commonplace is always evolving – and it’s made adaptation
                    even more necessary.
                  </p>

                  <p>
                    That’s why a child’s ability to adapt will be one of the
                    most important markers for their future success. According
                    to a 2021 study by McKinsey & Company, people who possessed
                    this skill were 24% more likely to be gainfully employed.
                    With online education and virtual reality becoming more
                    integrated with the future of education, a child will need
                    to be able to adjust.{" "}
                  </p>

                  <p>
                    By understanding the curve and being able to shift with
                    external circumstances, they’ll be better poised to take on
                    new challenges at home, at school, and in their community.{" "}
                  </p>
                </div>
              </div>

              <h4>Communication & Collaboration </h4>

              <p>
                Few things are more important in life than the relationships we
                forge with others. And these relationships are built on
                communicating effectively to arrive at a point of understanding.
              </p>

              <p>
                It’s only through communication and emotional intelligence that
                people can truly collaborate, sharing their ideas to create
                synergy. By grasping their strengths and weaknesses, a child
                will bring their best to a sports team or a school assignment,
                contributing what only they can to the outcome.{" "}
              </p>

              <p>
                Through its diverse student network, {SITEFNAME.NAME} enables children to
                engage with different perspectives and collaborate with others.
                This means a child will take an expansive view of things to
                reach well-rounded, comprehensive solutions.{" "}
              </p>

              <hr />

              <h4>Social & Environmental Awareness</h4>

              <p>
                Whether through the news or social media, it’s easy to see there
                are myriad social and environmental issues impacting the world.
                Most of us live in communities that have seen protest,
                disruption, and even upheaval from the challenges of this
                particular time in history.
              </p>

              <p className="centercstyl">
                And while the problems may be immense, the pathway forward that
                holistic growth provides offers a solution. Through the
                self-awareness and empowerment championed by this approach,
                children can become natural drivers for change. In understanding
                their place in it, they will be able to make better choices for
                themselves and their communities.{" "}
              </p>

              <p>
                It may be a small step like using public transit or something
                bigger like implementing a recycling program or running for
                office. But whatever they choose to do, a mindful child is a
                child who will go out into the world and create change.{" "}
              </p>

              <hr />

              <div className="blogpagination">
                <div className="blogpagination_style">
                  <div
                    className="blogpaginationTitle"
                    onClick={() => history.push(PATHS.BLOGDETAILSFOUR)}
                  >
                    <span className="flex mr-3 backblogclr">
                      <i className="fa-solid fa-chevron-left mr-2"></i>Prev
                    </span>
                    <span className="flex mt-3">
                      <img src={image.blog_img} />
                      <h4>What is Holistic Growth?</h4>
                    </span>
                  </div>

                  <div
                    className="blogpaginationTitle align-items-end"
                    onClick={() => history.push(PATHS.BLOGDETAIL)}
                  >
                    <span className="flex ml-3 backblogclr">
                      Next <i className="fa-solid fa-chevron-right ml-2"></i>
                    </span>
                    <span className="flex mt-3 text-right">
                      <h4>The Merits of Social Emotional Learning</h4>
                      <img src={image.WHolisticgbnr} />
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

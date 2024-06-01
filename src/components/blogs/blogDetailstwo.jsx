import React from "react";

import { useHistory } from "react-router-dom";
import * as image from "../../resources/images";

import WebLayout from "../layout/WebLayout";
import { PATHS } from "../../utils";

import { showModal } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { SITEFNAME } from "../../utils/Messages";

const blogDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <WebLayout className="outerPagesHeader">
      {/* <div className="BlogList">
          <div className="SELbannerstyl text-center">
            <div className="container">
              <h3>
              The Merits of Social Emotional Learning
              </h3>
            </div>
          </div>
    </div> */}
      <section>
        <div className="container">
          <div className="blogdetailsstyl d-flex mb-3">
            <div className="blogdesc mb-3">
              <h2>The Benefits of a Personalized Learning Journey</h2>
              <p className="centercstylleft">
                “The function of education is to teach one to think intensively
                and to think critically. Intelligence plus character – that is
                the goal of true education.” - Martin Luther King, Jr.
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <p className="text-center">
                    <img src={image.aboutmegraphics} />
                  </p>
                </div>
                <div className="w-50">
                  <p>
                    Nearly every parent has fond memories of their school days,
                    whether it’s making friends and playing on the swings, or a
                    favorite classmate who made them laugh. It’s common to
                    romanticize the traditions of learning, but easy to forget
                    there can be many limitations in conventional education.
                  </p>

                  <p>
                    Fortunately, in an age of expansive technological adoption,
                    we have different choices. The advent of online learning has
                    made for a more personalized educational experience, one
                    that can actually be more fruitful for your child. According
                    to the Research Institute of America, eLearning increases
                    the retention of information by 25-60%, a staggering figure
                    compared to the 8-10% for face-to-face learning.
                  </p>

                  <p>
                    As technology becomes more integrated with the classroom,
                    it’s important to be aware of exactly how a personalized
                    learning plan can help your child. By having the right tools
                    to learn, they’ll be able to adapt to the world – and truly
                    transform.
                  </p>
                </div>
              </div>

              <div className="d-flex w-100">
                <div className="w-50">
                  <h4>A Tailored Learning Profile</h4>

                  <p>
                    The traditional classroom is a place that knows a lot about
                    the students in it. A child’s name, where they sit, and how
                    they participate are all a part of what makes a student
                    familiar to their classmates and teachers. Unfortunately,
                    where the traditional classroom can fall short is in having
                    true insight into a child’s strengths and weaknesses.
                  </p>

                  <p>
                    But it’s awareness of a child’s capacities that enables
                    personalized learning to help them flourish. Through a
                    unique learner profile, the progress a child is making
                    across the holistic growth spectrum will be readily
                    accessible to them. And by automatically curating
                    information and guiding learners, changes to a child’s
                    learning can be adjusted at every step.
                  </p>

                  <p>
                    By understanding their capabilities and points of weakness,
                    a child will be able to evolve in a way that surpasses the
                    standard report card.
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.peopleexplore} className="pl-3" />
                </div>
              </div>

              <h4>Learning Without Bias</h4>
              <p>
                As a parent, we want our children to learn everything so they
                can rise to the challenges of life. Unfortunately, we all have
                limitations when it comes to teaching our kids what they need to
                know. While some of us excel at math or science, others have a
                keen understanding of literature, history, or social issues.
                It’s this that can naturally create biases.
              </p>

              <p className="centercstyl">
                Fortunately, engaging with a customized learning journey for
                your child means their learning won’t be limited. Because your
                child will have access to information from every angle, they’ll
                be able to go beyond the weaknesses and biases of whoever their
                teacher is.
              </p>

              <p>
                Instead of a holistic learning journey that lacks balance, a
                platform like {SITEFNAME.NAME} will provide all the information your child
                needs to assess a subject critically and objectively.
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <img src={image.subscribePopup} className="pl-3" />
                </div>

                <div className="w-50">
                  <h4>Focused on Their Needs</h4>

                  <p>
                    Whether it’s history or English class, traditional schooling
                    often comes with a curriculum that’s set in stone. Because
                    of the regimented nature of this type of learning, even the
                    most interesting subjects can be less than engaging to many
                    children.
                  </p>

                  <p>
                    A personalized learning journey can be of great benefit
                    because it has the flexibility conventional education lacks.
                    Instead of a one-size-fits-all approach, the needs of the
                    child – and how they learn – are put first. By understanding
                    their capabilities, a personalized approach will be able to
                    nudge a child in the right direction. It will determine the
                    next best actions for their learning style and aptitudes so
                    they aren’t left behind.
                  </p>

                  <p>
                    A holistic growth approach that prioritizes a child’s
                    learning needs can help them engage with their strengths and
                    truly excel.
                  </p>
                </div>
              </div>

              <h4>It’s Integrated with Technology </h4>

              <p>
                Whether politically, socially, or economically, we wake up –
                each day – to a different world. And while it’s easy to see that
                things change quickly, few things shift as rapidly as
                technology.
              </p>

              <p>
                Given the primacy of technology, it’s unsurprising that many
                students would choose online education over the classroom. In a
                report from the University of the Potomac in Washington, D.C.,
                it was determined that 70% of students preferred the benefits of
                an online learning experience. With technology set to augment
                the traditional classroom, it’s different types of personalized
                learning that will define the future of education.
              </p>

              <p>
                Because a tailored learning journey uses AI technology to aid a
                child, they’ll have the proficiency to engage with the digital
                tools of today – and tomorrow. It’s this confidence that will
                make them a learner for life.
              </p>

              <hr />

              <h4>Personalized Learning is the Key</h4>

              <p>
                As technology continues to become more integrated with our daily
                lives, it will become a force in the future of education. The
                personalized approach this affords means your child will be able
                to benefit from a holistic growth journey that is
                transformative, and free from the limitations of conventional
                education.
              </p>

              <p className="centercstyl">
                Are you interested in a personalized learning journey that will
                inspire the best in your child?{" "}
                <strong onClick={() => dispatch(showModal({ type: "SignUp" }))}>
                  Click here
                </strong>{" "}
                to request access for {SITEFNAME.NAME} today to learn more about our
                innovative platform and why it’s the key.
              </p>

              <hr />

              <div className="blogpagination">
                <div className="blogpagination_style">
                  <div
                    className="blogpaginationTitle"
                    onClick={() => history.push(PATHS.BLOGDETAIL)}
                  >
                    <span className="flex mr-3 backblogclr">
                      <i className="fa-solid fa-chevron-left mr-2"></i>Prev
                    </span>
                    <span className="flex mt-3">
                      <img src={image.WHolisticgbnr} />
                      <h4>The Merits of Social Emotional Learning</h4>
                    </span>
                  </div>

                  <div
                    className="blogpaginationTitle align-items-end"
                    onClick={() => history.push(PATHS.BLOGDETAILSFIVE)}
                  >
                    <span className="flex ml-3 backblogclr">
                      Next <i className="fa-solid fa-chevron-right ml-2"></i>
                    </span>
                    <span className="flex mt-3 text-right">
                      <h4>
                        How Conventional Education is Limiting Your Child’s
                        Development
                      </h4>
                      <img src={image.education_blog} />
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

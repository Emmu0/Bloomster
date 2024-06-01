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
                How Conventional Education is Limiting Your Child’s Development
              </h2>
              <p className="centercstylleft">
                From socializing with our classmates to playground play, the
                experiences and interactions that we have as children are a
                large part of what makes us who we are. And because most of us
                spend so much time in a classroom, how we learn and what we’re
                taught really matter.
              </p>
              <div className="d-flex w-100">
                <div className="w-50">
                  <p className="text-center">
                    <img src={image.education_blog} />
                  </p>
                </div>
                <div className="w-50">
                  <p>
                    Conventional education isn’t without its benefits, but there
                    are many ways in which the traditional classroom experience
                    isn’t teaching our children what they need. In fact,
                    according to a report by the Lego Foundation, 90% of a
                    child’s creativity is lost during the school years.
                  </p>

                  <p>
                    But it’s creativity - and critical thinking – that will
                    enable a child to succeed in the world ahead. To understand
                    the importance of the progressive approach holistic growth
                    can provide, it’s important to know the drawbacks of
                    conventional education.
                  </p>
                </div>
              </div>

              <h4>Critical Thinking Isn’t Encouraged </h4>

              <p>
                The traditional classroom is chock full of facts. Whether it’s
                math or social studies, learning is frequently about absorbing
                information and being able to recall it when it comes to test
                time.
              </p>

              <p>
                Unfortunately, because traditional education emphasizes
                absorbing information, critical thinking is often bypassed.
                Instead of nurturing curiosity and being encouraged to ask
                questions, children learn to be passive listeners. But according
                to a Reboot Foundation survey, 35% of people believe a child is
                best taught critical thinking from age 6-12, making these the
                ideal years for their development.
              </p>
              <p>
                Where the conventional education system fails, a platform like
                {SITEFNAME.NAME} can help a young learner engage with the subject. By
                developing critical thinking skills, a child will be able to
                really listen, and have the capacity to question the world
                around them.{" "}
              </p>

              <h4>An Impersonal Learning Journey</h4>
              <p>
                A young child is interested in everything the world has to
                offer. Whether it’s an animal, a new toy, or an artwork, they
                possess the natural curiosity to take everything in.
                Unfortunately, standardized education often misses out on the
                natural inclination and creativity of younger children.
              </p>

              <p className="centercstyl">
                According to a well-known NASA study, 98% of preschoolers were
                considered to be creative geniuses. As this group of children
                moved into grade school, only 30% were still considered creative
                geniuses, with the number sliding further to 12% in their high
                school years.{" "}
              </p>

              <p>
                Unfortunately, because conventional education for students takes
                a one-size-fits-all approach, the different abilities of
                children aren’t acknowledged. While it’s important for a child
                to learn about many different things, forsaking their true
                talents leaves their best skills untapped.{" "}
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <img src={image.peopleexplore} className="pl-3" />
                </div>

                <div className="w-50">
                  <h4>A Lack of Flexibility </h4>

                  <p>
                    For many students, traditional education is something that
                    is done from Monday to Friday. Children are expected to be
                    in their desk and ready to learn for 7 hours a day, 5 days a
                    week.
                  </p>

                  <p>
                    Unfortunately, the regimented nature of this type of
                    schedule isn’t ideal for inspired learning. Given all the
                    time it takes to get to and participate in class, the
                    Brandon-Hall group determined that online learning takes
                    approximately 40-60% less time than a traditional classroom.
                    For this reason, it’s no surprise that many students are
                    making different choices.
                  </p>
                  <p>
                    Instead of a personalized learning approach that can inspire
                    engagement, a child often must stick to the rote schedule of
                    school life, a serious drawback for creative learners.
                  </p>
                </div>
              </div>

              <h4>Limited Interaction & Collaboration</h4>

              <p>
                One of the most important aspects of development for a child is
                the time they spend with others. Play with other children is
                full of fun, but it’s these interactions that help a child build
                relationships and develop social skills.{" "}
              </p>

              <p>
                Unfortunately, conventional education does not place emphasis on
                the teamwork and collaboration that will be huge assets in the
                workplace of tomorrow.{" "}
              </p>

              <p className="centercstyl">
                According to a statistic from Frost & Sullivan, collaboration
                improves innovation at work by 30%, with productivity up to 36%
                higher.
              </p>

              <p>
                Through interaction with other learners, an online education
                platform like {SITEFNAME.NAME} can help. A child can learn firsthand about
                the benefits of teamwork, understanding the importance of
                collaboration and community.
              </p>

              <div className="d-flex w-100">
                <div className="w-50">
                  <h4>Class Length</h4>

                  <p>
                    Many of us are familiar with the harrowing statistic on our
                    decreasing attention span. According to a 2015 Microsoft
                    study, the average attention span of a person has dropped
                    from 12 seconds in 2000 to just 8 seconds!
                  </p>

                  <p>
                    Even with the controversy around this statistic, there’s no
                    doubt that it can be hard to focus in an increasingly
                    digitized world. Most middle school children can only pay
                    attention for 24-36 minutes, which is significantly shorter
                    than the average class length of 45-60 minutes.{" "}
                  </p>
                  <p>
                    While this may render the standard class too long, online
                    learning can be more beneficial since it offers more
                    segmented learning. By interspersing videos and lectures
                    with interactive quizzes, student can remain engaged
                    throughout their chosen studies.{" "}
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.class_length} className="pl-3" />
                </div>
              </div>

              <h4>Conventional Learning Has Limits </h4>

              <p>
                Most of us have fond memories of the traditional classroom. But
                in an age of increasing digitization, it’s no surprise that
                there are many limitations in conventional education that can
                pose a problem for a child’s success.
              </p>

              <p>
                Fortunately, through a personalized learning journey, a student
                can access a more comprehensive education that is also more
                effective. Instead of being limited and not engaging their
                talents, they can get the best from a platform that is personal
                and ever-evolving.{" "}
              </p>

              <p>
                Are you interested in a holistic growth learning platform that
                will take your child to the next level? Reach out today to learn
                more about how {SITEFNAME.NAME} can accelerate your child’s success and
                inspire their future.{" "}
              </p>

              <hr />

              <div className="blogpagination">
                <div className="blogpagination_style">
                  <div
                    className="blogpaginationTitle"
                    onClick={() => history.push(PATHS.BLOGDETAILTWO)}
                  >
                    <span className="flex mr-3 backblogclr">
                      <i className="fa-solid fa-chevron-left mr-2"></i>Prev
                    </span>
                    <span className="flex mt-3">
                      <img src={image.aboutmegraphics} />
                      <h4>The Benefits of a Personalized Learning Journey</h4>
                    </span>
                  </div>

                  <div className="blogpaginationTitle"></div>
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

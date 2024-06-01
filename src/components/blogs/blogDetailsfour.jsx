import React from "react";
import { useHistory } from "react-router-dom";
import * as image from "../../resources/images";
import WebLayout from "../layout/WebLayout";
import { PATHS } from "../../utils";

const blogDetails = () => {
  const history = useHistory();
  return (
    <WebLayout className="outerPagesHeader">
      <section>
        <div className="container">
          <div className="blogdetailsstyl d-flex mb-3">
            <div className="blogdesc mb-3">
              <h2>What is Holistic Growth?</h2>
              <p className="centercstylleft">
                When you ask a child what they want to be when they grow up, you
                are likely to get all sorts of interesting answers. From an
                astronaut, a teacher, a zookeeper, a doctor, a wizard, an
                influencer to the president, the sky's the limit when it comes
                to their ambition. What's more, each time you ask this question,
                you might get a new answer. That is the beauty of a child's
                mind. They think imaginatively and dream big.
              </p>
              <div className="d-flex w-100">
                <div className="w-50">
                  <p className="text-center">
                    <img src={image.blog_img} />
                  </p>
                </div>
                <div className="w-50">
                  <p>
                    Of course, as a parent, you want your child to achieve their
                    career aspirations and have a bright future. This begins
                    with providing them with a quality education. However,
                    whether your child wants to become a firefighter, a
                    ventriloquist, or a professional athlete, to pursue their
                    calling, they need to be equipped with a wide variety of
                    skills, abilities, qualities and traits that go beyond their
                    academic education.
                  </p>
                  <p>Opening the door to limitless possibilities.</p>

                  <p>
                    Holistic growth focuses on the development of all those
                    attributes, competencies and faculties a child needs to
                    blossom into a confident, responsible and self-aware
                    individual capable of forging their future. It encompasses
                    the five key dimensions intrinsic to an individual's ability
                    to lead a fulfilling life: the intellectual, physical,
                    social, emotional and spiritual aspects.
                  </p>
                </div>
              </div>

              <p>
                Therefore, to encourage, enable, and empower your child in their
                life journey and help them achieve their dreams, you should
                ensure they receive an education that targets their holistic
                growth.
              </p>
              <h4>What is holistic growth education?</h4>
              <p>
                The holistic growth approach to education integrates and lays
                equal emphasis on the intellectual, physical, social, emotional
                and spiritual development of a child during each stage of their
                learning journey, starting from toddlerhood, early childhood,
                middle childhood, pre-adolescence, to adolescence and early
                adulthood.
              </p>

              <h4>The five dimensions of holistic growth.</h4>
              <div className="d-flex w-100 mt-3">
                <div className="w-50">
                  <h3>Intellectual development </h3>

                  <p>
                    The growth in a child's cognitive abilities is referred to
                    as their intellectual development. This includes their
                    ability to make observations, express themselves, learn fine
                    motor skills, process information, think logically,
                    comprehend abstract concepts, find solutions to problems,
                    build language skills, understand the cause-and-effect
                    relationship, acquire knowledge, pursue artistic endeavors,
                    expand their thinking, and more.
                  </p>

                  <p>
                    Through our interaction with the world around us, the
                    guidance we receive from our family members, caregivers and
                    educators, and as our brain develops from childhood through
                    adolescence, so does our intellect. Mental growth hence is
                    an ongoing process which can be fostered by creating a
                    conducive environment, adapting the teaching techniques to
                    match the unique learning needs of a child, providing timely
                    guidance, and aligning it with the other four dimensions of
                    holistic growth.
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.personalSkillgraphics} className="pl-3" />
                </div>
              </div>

              <div className="d-flex w-100 mt-3">
                <div className="w-50">
                  <img src={image.peopleexplore} className="pr-3" />
                </div>

                <div className="w-50">
                  <h3>Physical development </h3>

                  <p>
                    The physical changes our body undergoes during various
                    stages of infancy, childhood, adolescence and adulthood are
                    termed physical development. As we grow and mature, so does
                    our body. These changes occur in our height, weight, skin,
                    body mass index, hair, sexual maturity and in the
                    development of our fine motor skills and sensory processes
                    of olfaction (smell), gustation (taste), vision, and
                    hearing, and equilibrium (balance and body position).
                  </p>

                  <p>
                    While a child's genetic disposition and environmental
                    factors contribute to the pace and level of their physical
                    development, other factors like exercise, quality of sleep,
                    diet, and hygiene play a significant role in their physical
                    growth. When this aspect is supported by intellectual,
                    social, emotional and spiritual development, the child can
                    realize their physical potential.
                  </p>
                </div>
              </div>

              <div className="d-flex w-100 mt-3">
                <div className="w-50">
                  <h3>Social development</h3>

                  <p>
                    No person is an island. We are all social beings and rely on
                    each other to fulfill our needs. As a child begins to become
                    self-aware, they naturally start to interact with the people
                    around them. The development of the skills and behaviors
                    that enable them to communicate, cooperate and build
                    relationships with others is known as social development.
                  </p>

                  <p>
                    As with the other dimensions, a child's experiences,
                    environment and education contribute to the honing and
                    refining of their social skills. These characteristics and
                    qualities allow them to express their thoughts clearly,
                    build healthy relationships, be empathetic, and resolve
                    conflict throughout life.
                  </p>
                </div>
                <div className="w-50">
                  <img src={image.social_blog} className="pl-3" />
                </div>
              </div>

              <div className="d-flex w-100 mt-3">
                <div className="w-50 text-center">
                  <img src={image.emotion_img} className="pr-3 w-75" />
                </div>
                <div className="w-50">
                  <h3>Emotional development</h3>

                  <p>
                    From joy, envy, sadness, anger, boredom, fear, and affection
                    to sympathy and excitement, a person can experience a broad
                    spectrum of emotions. It is essential for a child to
                    understand the nature of these emotions. For example, how
                    and when feelings arise in them; the outcome of their
                    reactions; which thoughts and behaviors are detrimental to
                    their well-being; how to respond to a trigger, and more.
                  </p>

                  <p>
                    With guidance, counseling and training, their emotional
                    development can be nurtured. As a child develops a strong
                    emotional intelligence or emotional quotient, they are able
                    to cultivate positive emotions, effectively navigate the
                    uncertainties of life, build a coping mechanism to deal with
                    negative emotions, make better life choices, connect with
                    others on a deep level, contribute to society and experience
                    a sense of fulfillment.
                  </p>
                </div>
              </div>

              <div className="d-flex w-100">
                <div className="w-50">
                  <h3>Spiritual development</h3>

                  <p>
                    The ability to believe and have faith in something beyond
                    themselves inspires a person to conduct themselves in an
                    ethical manner, foster moral behavior, and find a sense of
                    meaning in life. Spiritual development provides a child with
                    the skills, tools and framework they need to withstand
                    adversities, become resilient and have an optimistic
                    mindset.
                  </p>

                  <p>
                    The ability to believe and have faith in something beyond
                    themselves inspires a person to conduct themselves in an
                    ethical manner, foster moral behavior, and find a sense of
                    meaning in life. Spiritual development provides a child with
                    the skills, tools and framework they need to withstand
                    adversities, become resilient and have an optimistic
                    mindset.
                  </p>
                </div>
                <div className="w-50 text-center">
                  <img src={image.spiritual_img} className="pl-3 w-75" />
                </div>
              </div>

              <p>
                Just as a diamond's facets help bring out its brilliance, when
                the various facets of a child's personality are polished, they
                help them sparkle. Parents can assist their children in
                discovering their inherent talent and bringing their dreams to
                fruition with the holistic growth of their five dimensions.
              </p>

              <hr />

              <div className="blogpagination">
                <div className="blogpagination_style">
                  <div className="blogpaginationTitle"></div>

                  <div
                    className="blogpaginationTitle align-items-end"
                    onClick={() => history.push(PATHS.BLOGDETAILSTHREE)}
                  >
                    <span className="flex ml-3 backblogclr">
                      Next <i className="fa-solid fa-chevron-right ml-2"></i>
                    </span>
                    <span className="flex mt-3 text-right">
                      <h4>
                        How a Holistic Growth Approach Prepares Your Child for
                        the Future
                      </h4>
                      <img src={image.cpTeacherdtlBanner} />
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

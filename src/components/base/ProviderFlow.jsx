import React, { useState } from "react";
import * as image from "../../resources/images";
import WebLayout from "../layout/WebLayout";
import SubscriberForm from "./SubscriberForm";
import { SITENAME } from "../../utils/Messages";

const ProviderFlow = () => {
  const [locationState, getLocationState] = useState("/providerflow");

  return (
    <WebLayout className="outerPagesHeader">
      <section className="aboutvicky aboutdarkback">
        <div className="container">
          <div className="LJbanner mt-5 pt-5">
            <div className="flex">
              <div className="bannerright w-50">
                <div className="whyholosticbaaner">
                  <img src={image.vickylearingbnr} />
                </div>
              </div>
              <div className="bannerleft w-50 pl-3 ml-3">
                <h2 className="mb-2">
                  Why <span>Holistic Growth</span> Matters
                </h2>

                <p>
                  It's difficult to predict what the world will look like in
                  2040, but we know our lives will be radically different. To
                  thrive in an unknown future, a child will need the self and
                  social awareness, emotional intelligence, resilience, critical
                  thinking, creativity, adaptability, and mindfulness that only
                  holistic growth can provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="providerF">
        <section className="wHbanner aboutvicky">
          <div className="container">
            <div className="flex">
              <div className="leftSide w-50 pr-5">
                <h4 className="pt-3">
                  Why <span>We're Here</span>{" "}
                </h4>
                <p>
                  Conventional education is failing our children by focusing
                  primarily on their academic and intellectual aspects, to the
                  detriment of their whole being. Where personalized education
                  can offer a tailored learning solution, it comes at a high
                  cost that makes it inaccessible to most people.
                </p>
                <p>
                  With {SITENAME.NAME}, we are changing that. {SITENAME.NAME} is an
                  affordable and interactive holistic learning platform that
                  encompasses the five key dimensions intrinsic to an
                  individual's ability to lead a fulfilling life. Using a
                  customized approach aligned to a child's strengths and
                  learning style, they can go - confidently - in the direction
                  of their dreams.
                </p>
              </div>
              <div className="rightside w-50 text-right">
                <div className="LjimageSec">
                  <img src={image.intellectualbnr} />
                </div>
              </div>
            </div>
            <div className="providerFlochrtimg mt-5 mb-3">
              <div className="text-center">
                <h2>
                  How <span>{SITENAME.NAME} </span>Does It Different
                </h2>
              </div>
            </div>
            <div className="ProviderResposiblity flex">
              <div className="ResponsiblityItems m-2 p-2">
                <img src={image.PrimarySkillicon}></img>
                <h4>Courses That Transform</h4>
                <p>
                  Transformative courseware covering 35 skills across 5
                  dimensions of holistic growth ensuring balanced development &
                  growth in all aspects of your child’s life.
                </p>
              </div>
              <div className="ResponsiblityItems m-2 p-2">
                <img src={image.Holisticbullseyes}></img>
                <h4>360-Degree Holistic View</h4>
                <p>
                  A comprehensive & integrated perspective that shows where your
                  child stands, {SITENAME.NAME} nudges your child towards success and
                  be the best version of themselves.
                </p>
              </div>
              <div className="ResponsiblityItems m-2 p-2">
                <img src={image.bar_menu}></img>
                <h4>Personalized Profile</h4>
                <p>
                {SITENAME.NAME} goes beyond the traditional classroom using
                  experts’ insights & your child’s unique interests to provide a
                  personalized profile for their learning journey.
                </p>
              </div>
              <div className="ResponsiblityItems m-2 p-2">
                <img src={image.learnerProfiles}></img>
                <h4>The Future of Education</h4>
                <p>
                  An intelligent learning platform and personal coach that
                  adapts to enable your child to become a lifelong learner
                  surpassing the current educational paradigm.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="sectionpadding aboutvicky">
        <div className="container">
          <div className="flex">
            <div className="leftSide w-50 pr-3 mr-3">
              <h4>
                What <span>We Value</span>
              </h4>
              <p>
                Trust and transparency are of the utmost importance in
                everything we do. It’s why we rely on the insight of experts in
                their field to offer a transformative learning journey for your
                child. We make it our mission to provide a balanced, empowering
                holistic growth education and a comprehensive 360-degree view of
                your child’s development across the five dimensions that we can
                be proud of, so it can - in turn - nurture the best in your
                child.
              </p>
            </div>
            <div className="rightside w-50 text-right pl-3">
              <div className="LjimageSec">
                <img src={image.whatwevalue} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscriberForm locationState={locationState} />
    </WebLayout>
  );
};

export default ProviderFlow;

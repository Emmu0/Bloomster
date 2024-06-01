/** @format */

import React from "react";

import WebLayout from "../layout/WebLayout";
import * as image from "../../resources/images";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { SITEFNAME } from "../../utils/Messages";

const WebHome = () => {
  return (
    <WebLayout className="outerPagesHeader">
      <div className="NlandingPage">
        <div className="guidebanner text-left">
          <div className="container">
            <h3>
              How to Guide - <span>{SITEFNAME.NAME}</span>
            </h3>
          </div>
        </div>
        <div className="NLContent">
          <section className="lsoon pt-3">
            <div className="container text-left">
              <div className="lsoon_title pb-3">
                <h4>
                  How to create a <span>separate login</span> for your{" "}
                  <span>learner</span>
                </h4>
                <hr></hr>
                <p>
                  <strong>Step 1:</strong> Click the{" "}
                  <span>
                    <img
                      src={image.top_profile_icon}
                      className="imgicon_styl"
                    />{" "}
                    Profile
                  </span>{" "}
                  icon at the top right of your page.
                </p>
                <img
                  src={image.profile_icon_screen}
                  className="text-center img_border"
                />

                <p>
                  <strong>Step 2:</strong> Under{" "}
                  <strong>Learner Profile</strong>, click the{" "}
                  <span>
                    <i className="fa-solid fa-pencil plusstyle"></i> Pencil{" "}
                  </span>{" "}
                  icon besides the learner you want to create a login for.
                </p>
                <img
                  src={image.learner_profile_screen}
                  className="text-center img_border"
                />

                <p>
                  <strong>Step 3:</strong> Click <strong>Create Login</strong>,
                  which can be found on the right menu under the learner’s
                  profile.
                </p>
                <img
                  src={image.create_login_screen}
                  className="text-center img_border"
                />

                <p>
                  <strong>Step 4:</strong> Enter the learner's{" "}
                  <strong>Email/Username</strong> and
                  <strong> Password</strong> and click the{" "}
                  <strong>Create Login</strong> button.
                </p>
                <img
                  src={image.learner_email_screen}
                  className="text-center img_border"
                />

                <p>
                  <strong>Step 5:</strong> Share the email/username and the
                  password with the learner and now they can login using these
                  credentials.
                </p>

                <h4 className="mt-3 pt-3">
                  How do I <span>add a learner</span> under my profile
                </h4>
                <hr></hr>
                <p>
                  <strong>Step 1:</strong> Click the{" "}
                  <span>
                    <img
                      src={image.top_profile_icon}
                      className="imgicon_styl"
                    />{" "}
                    Profile
                  </span>{" "}
                  icon at the top right of your page.
                </p>
                <img
                  src={image.profile_top_screen}
                  className="text-center img_border"
                />

                <p>
                  <strong>Step 2:</strong> Click{" "}
                  <span>
                    <i className="fa-solid fa-circle-plus plusstyle"></i> Add
                    Learner
                  </span>{" "}
                  icon, located under <strong>Learner Profile</strong>.
                </p>
                <img src={image.add_learner_screen} className="text-center" />

                <p>
                  <strong>Step 3:</strong> In the form that appears, fill in the
                  learner’s first name, last name, date of birth, and grade and
                  click the
                  <strong> Save</strong> button.
                </p>
                <img
                  src={image.addlearner_popup_screen}
                  className="text-center img_border"
                />

                <p className="pb-3 mb-3">
                  <strong>Step 4:</strong> You have now added a learner under
                  your profile.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WebLayout>
  );
};

export default WebHome;

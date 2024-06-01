/** @format */

import React from "react";

import * as image from "../../resources/images";

export default function LearnerEnrolledCourseJourney({}) {
  <div className="halfPagePOpup SchoolActivityPopup">
    <div className="modal fade" id="learnerEnrollJoruney" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content courseInformation schoolcourse">
          <div className="modal-header">
            <div className="heading border-0 p-0">
              <h2 className="flex">
                <span>
                  <img src={image.compassicon} alt="" className="mr-2" />
                  Learner Journey
                </span>
                <button className="btn btn-primary" data-dismiss="modal">
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </h2>
            </div>
          </div>

          <div className="modal-body Subject_Curriculam basicdetailsform  ">
            <div className="ljuserviewed">
              <h2 className="text-center mt-3 mb-2">
                Here is a learning journey for Adam
              </h2>
              <div className="ljuseraddedlist">
                <div className="ljuserlistitems phyitem flex">
                  <div className="ljuserlistitemimg">
                    <img src={image.mathMatics} alt="" />
                  </div>
                  <div className="ljuserlistitemDesc">
                    <h3 className="flex">
                      {" "}
                      <span>
                        {" "}
                        <img
                          src={image.CourseTitleIcon}
                          className="mr-2"
                          alt=""
                        />{" "}
                        Physical Fitness{" "}
                      </span>
                      <span>
                        <img src={image.chat_icon} alt="" />
                      </span>
                    </h3>
                    <div className="flex">
                      <div className="ljuserlistitemAsset">
                        <strong>
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                        </strong>
                        Benchmarks and Setting Realistic Goals
                      </div>
                      <div className="ljuserlistitemAsset">
                        <strong></strong>
                        <img src={image.courselevel2} className="mr-2" alt="" />
                        Physical
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ljuserlistitems sociitem flex">
                  <div className="ljuserlistitemimg">
                    <img src={image.userProfile} alt="" />
                  </div>
                  <div className="ljuserlistitemDesc">
                    <h3 className="flex">
                      <span>
                        {" "}
                        <img
                          src={image.CourseTitleIcon}
                          className="mr-2"
                          alt=""
                        />{" "}
                        Social & Cultural Awareness{" "}
                      </span>
                      <span>
                        <img src={image.chat_icon} alt="" />
                      </span>
                    </h3>
                    <div className="flex">
                      <div className="ljuserlistitemAsset">
                        <strong>
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                        </strong>
                        Social Identities - Making the Invisible, Visible
                      </div>
                      <div className="ljuserlistitemAsset">
                        <strong></strong>
                        <img src={image.courselevel4} className="mr-2" alt="" />
                        Social
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ljuserlistitems emotitem flex">
                  <div className="ljuserlistitemimg">
                    <img src={image.noImage} alt="" />
                  </div>
                  <div className="ljuserlistitemDesc">
                    <h3 className="flex">
                      <span>
                        {" "}
                        <img
                          src={image.CourseTitleIcon}
                          className="mr-2"
                          alt=""
                        />{" "}
                        Self Regulation
                      </span>{" "}
                      <span>
                        <img src={image.chat_icon} alt="" />
                      </span>
                    </h3>
                    <div className="flex">
                      <div className="ljuserlistitemAsset">
                        <strong>
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                        </strong>
                        What Color is your Emotion?
                      </div>
                      <div className="ljuserlistitemAsset">
                        <strong></strong>
                        <img
                          src={image.CollegeJourneyicon}
                          className="mr-2"
                          alt=""
                        />
                        Emotional
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ljuserlistitems sprotitem flex">
                  <div className="ljuserlistitemimg">
                    <img src={image.mathMatics} alt="" />
                  </div>
                  <div className="ljuserlistitemDesc">
                    <h3 className="flex">
                      <span>
                        {" "}
                        <img
                          src={image.CourseTitleIcon}
                          className="mr-2"
                          alt=""
                        />{" "}
                        Compassion{" "}
                      </span>{" "}
                      <span>
                        <img src={image.chat_icon} alt="" />
                      </span>
                    </h3>
                    <div className="flex">
                      <div className="ljuserlistitemAsset">
                        <strong>
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                        </strong>
                        A Story of Compassion - Anissa's Journey
                      </div>
                      <div className="ljuserlistitemAsset">
                        <strong></strong>
                        <img src={image.courselevel5} className="mr-2" alt="" />
                        Spritiual
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <div className="form-group BDsubmitbutton m-0 d-flex">
              <div className="buttonDistribotion">
                <button
                  type="button"
                  className="btn-blue btn-login d-block mb-5 cancelbutton"
                >
                  <i className="fa-solid fa-xmark"></i> Close
                </button>
                <button
                  type="submit"
                  className="btn-blue btn-login d-block mb-5 "
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

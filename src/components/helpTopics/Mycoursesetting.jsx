/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";
import { SITEFNAME, SITENAME } from "../../utils/Messages";

const CoursesHelp = () => {
  const dispatch = useDispatch();
  const { loggedInUser, defaultChildData } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "My & Course Settings",
      })
    );
  }, [loggedInUser]);

  return (
    <div>
      <Home className="outerPagesHeader">
        <section className="helpdetails">
          <div className="container">
            <div className="HGprocess">
              <div className="d-flex mb-5 align-items-flex-start">
                <div className="LeftbarPannel p-0">
                  <div className="ProcessAccordian w-100" div id="accordion">
                    <div className="Processaccordianlist" id="headingOne">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <img src={image.SceneQuestionicon} />
                        What is the purpose of asking for my personal details
                        such as address, education, experience, and interests?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse show"
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              The purpose of asking for personal details such as
                              address, education, experience, and interests, is
                              to help us better understand the needs and
                              preferences of both the parents and the learners.
                              This information will be used to tailor courses
                              for your child.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="headingTwo">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-controls="collapseTwo"
                      >
                        <img src={image.SceneQuestionicon} />
                        What is the purpose of asking for my child’s personal
                        details such as address, education, experience, and
                        interests?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Personal details you provide, such as address,
                              education, experience, and interests, enable us to
                              create a complete and accurate profile of your
                              child. This information is used to provide
                              tailored opportunities for your child's growth and
                              development.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="headingThree">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-controls="collapseThree"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I create a separate login for my child?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Under <strong> Learner Profile</strong>, click on
                              the child’s name you want to create a login for.
                            </li>
                            <li>
                              A menu will appear to view/add/edit different
                              profile details for this child.
                            </li>

                            <li>
                              Click <strong>Create Login.</strong> If instead of
                              Create Login, you see{" "}
                              <strong>Change Password,</strong> it means you
                              have already created a separate login for this
                              child.
                              <img src={image.createloginss} alt="" />
                            </li>
                            <li>
                              In the form that appears, enter the child's
                              email/username and password and click the{" "}
                              <strong>Create Login</strong> button.
                            </li>
                            <li>
                              Now this child can log in using the email/username
                              and password you entered in the step above.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading4">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse4"
                        aria-controls="collapse4"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I register additional learners under my profile?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse4"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Click the{" "}
                              <strong className="bluestyl">
                                <i class="fa fa-plus-circle add-icon-style"></i>{" "}
                                Add Learner
                              </strong>{" "}
                              icon, located under the list of existing learners.
                            </li>
                            <li>
                              In the form that appears, fill in the learner’s
                              first name, last name, date of birth, and grade,
                              and click the <strong>Save</strong> button.
                            </li>
                            <li>
                              You have now registered an additional learner
                              under your profile.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading5">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse5"
                        aria-controls="collapse5"
                      >
                        <img src={image.SceneQuestionicon} />
                        What profile details can I delete and how do I delete
                        them?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse5"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>You cannot delete a profile.</li>
                            <li>
                              If you want to edit a profile, look under{" "}
                              <strong>Learner Profile</strong>, and click on the
                              learner’s name you want to edit.
                            </li>
                            <li>
                              A menu will appear to view/add/edit different
                              profile details for this learner.
                            </li>
                            <li>
                              Pick the detail you want to edit, make the edits,
                              and then click the Save button.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading6">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse6"
                        aria-controls="collapse6"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I view profile details for all my learners?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse6"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Under the section <strong>Learner Profile</strong>
                              , you will see all your learners listed.
                            </li>
                            <li>Click on any learner’s name.</li>
                            <li>
                              A menu will appear to view/add/edit different
                              profile details for this learner.
                            </li>
                            <li>
                              Click on the option{" "}
                              <strong>Personal Details</strong> and you will be
                              led to the personal details page where you can
                              view this learner’s profile details.
                            </li>

                            <li>
                              On the right panel, you can see all learners
                              registered under your profile.
                            </li>
                            <li>
                              Clicking the <strong>Personal Details</strong>{" "}
                              menu under any learner will show you their profile
                              details.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading7">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse7"
                        aria-controls="collapse7"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I make changes to my current learner profile?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse7"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Under <strong>Learner Profile</strong>, click on
                              the learner’s name you want to make changes for.
                            </li>
                            <li>
                              A menu will appear to view/add/edit different
                              profile details for this learner.
                            </li>
                            <li>
                              Select the profile details - Personal Details,
                              Schools, Enrichment, Interests, etc. - you want to
                              change.
                            </li>
                            <li>
                              Enter the new information in the applicable fields
                              in the form that appears.
                            </li>
                            <li>
                              Click the <strong>Save</strong> button.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading8">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse8"
                        aria-controls="collapse8"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I prevent my learner from using another
                        learner's profile?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse8"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Under <strong>Learner Profile</strong>, click on
                              the learner’s name who will be using your device.
                            </li>
                            <li>
                              {" "}
                              A menu will appear to view/add/edit different
                              profile details for this learner.
                            </li>

                            <li>
                              Click on the option{" "}
                              <strong>Go to [Learner’s Name] </strong> Profile.
                            </li>
                            <li>
                              This switches the context from the parent (i.e.,
                              access to all learners under the parent) to that
                              specific learner (i.e., access to only this
                              learner’s profile).
                            </li>
                            <li>
                              Once the context has been switched, you can hand
                              the device to the learner to do their coursework
                              on {SITENAME.NAME} with the assurance they do not
                              have access to another learner’s profile.
                              <img src={image.learnerprofiless} alt="" />
                            </li>
                          </ul>
                          <h4>
                            OR you can create a separate login for each learner
                            by following the steps below:
                          </h4>
                          <ul>
                            <li>
                              Click the{" "}
                              <strong className="bluestyl">
                                <img
                                  src={image.profileiconss}
                                  className="imgicon_styl"
                                />{" "}
                                Profile
                              </strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Under <strong>Learner Profile</strong>, click on
                              the learner’s name you want to create a login for.
                            </li>
                            <li>
                              A menu will appear to view/add/edit different
                              profile details for this learner.
                            </li>
                            <li className="font-italic">
                              {" "}
                              Click <strong>Create Login.</strong> If instead of
                              Create Login, you see{" "}
                              <strong> Change Password,</strong> it means you
                              have already created a separate login for this
                              learner.
                            </li>
                            <li>
                              Enter the learner's email/username and password
                              and click the Create Login button.
                            </li>
                            <li>
                              Now this learner can log in using the
                              email/username and password you entered in the
                              step above.
                            </li>
                            <li>
                              Once <strong>separate logins</strong> are created
                              for each learner,
                              <strong>
                                {" "}
                                ask them to log in using their separate login
                              </strong>
                              .{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading9">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse9"
                        aria-controls="collapse9"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I add or change my or my learner’s profile
                        picture?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse9"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              To add or change your picture, click the{" "}
                              <strong className="bluestyl">
                                <i class="fa-light fa-pencil"></i> Edit
                              </strong>{" "}
                              icon, and from the menu select{" "}
                              <strong>Personal Details</strong>
                            </li>
                            <li>
                              To add or change a picture for a learner, under{" "}
                              <strong> Learner Profile</strong>, click on the
                              learner’s name.
                            </li>
                            <li>
                              A menu will appear to view/add/edit different
                              profile details for this learner.
                            </li>
                            <li>
                              Click on the option{" "}
                              <strong>Personal Details</strong>. This opens the{" "}
                              <strong>Personal Details</strong> page, where you
                              can view the learner’s profile details.
                            </li>
                            <li>
                              On the top left of the{" "}
                              <strong>Personal Details</strong> page, click the{" "}
                              <strong className="bluestyl">
                                <i class="fa-solid fa-camera"></i> Camera
                              </strong>{" "}
                              icon.
                            </li>
                            <li>
                              Click{" "}
                              <strong className="bluestyl">
                                <i class="fa-regular fa-circle-plus"></i> Add
                                Photo.
                              </strong>
                            </li>
                            <li>
                              Select a photo from your files and click{" "}
                              <strong>Open</strong>.
                            </li>
                            <li>Adjust the photo to fit the frame.</li>
                            <li>
                              Click the <strong>Save</strong> button.
                            </li>
                            <li>
                              You will now see the picture appear for the
                              respective profile.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading10">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse10"
                        aria-controls="collapse10"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I show and hide courses?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse10"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>Select ‘Settings’ from the dropdown menu.</li>
                            <li>
                              Settings can only be viewed and updated by a
                              parent; you will be required to verify your
                              password to confirm you are the parent.
                            </li>
                            <li>
                              After entering your password for verification, you
                              will see a list of all courses offered and the
                              different settings you can add/edit for a course.
                              <img
                                src={image.coursesettingmenuss}
                                alt=""
                                className="mt-2"
                              />
                            </li>
                            <li>
                              All courses are visible by default, but we
                              understand as a parent you might want to hide
                              certain courses from your child.
                            </li>
                            <li>
                              To hide a course, uncheck the box in front of it
                              under the column <strong>Show Course</strong>.
                              Please note once you have enrolled in a course,
                              you cannot hide it.
                            </li>
                            <li>
                              To show a course again, simply recheck the box in
                              front of it under the column{" "}
                              <strong>Show Course</strong>.
                            </li>
                            <li>
                              Click <strong>Save</strong> at the bottom of the
                              settings page to save your settings.
                              <img
                                src={image.settinghalfSS}
                                alt=""
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading11">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse11"
                        aria-controls="collapse11"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I make knowledge checks mandatory in a course?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse11"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>Select ‘Settings’ from the dropdown menu.</li>
                            <li>
                              Settings can only be viewed and updated by a
                              parent; you will be required to verify your
                              password to confirm you are the parent.
                            </li>
                            <li>
                              After entering your password for verification, you
                              will see a list of all courses offered, and the
                              different settings you can add/edit for a course.
                            </li>
                            <li>
                              To make knowledge checks mandatory in a course,
                              find the column that is labeled{" "}
                              <strong>KC* & Ex* Reqd</strong> (Knowledge Checks
                              and Section Exercise Required).
                            </li>
                            <li>
                              To turn this on for any given course, check the
                              box in the row of the course you’d like to turn
                              knowledge checks on for. When this box is checked,
                              knowledge checks and section exercises are
                              mandatory, and your child cannot progress in a
                              course until they complete them.
                            </li>
                            <li>
                              You can also choose to make knowledge checks and
                              exercises mandatory or discretionary for each
                              section within a course.
                            </li>
                            <li>
                              Click <strong>Save</strong> at the bottom of the
                              settings page to save your settings.
                              <img
                                src={image.settingkcboxss}
                                alt=""
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading12">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse12"
                        aria-controls="collapse12"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I add rewards for my child to encourage them to
                        complete a course?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse12"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              Select ‘Settings’ from the menu that appears to
                              display various course settings.
                            </li>
                            <li>
                              Settings can only be viewed and updated by a
                              parent; you will be required to verify your
                              password to confirm you are the parent.
                            </li>
                            <li>
                              After entering your password for verification, you
                              will see a list of all courses offered and the
                              different settings you can add/edit for a course.
                            </li>
                            <li>
                              To add a reward, click the{" "}
                              <strong className="bluestyl">Add Reward</strong>{" "}
                              icon under the column <strong>Reward</strong>.
                              Please note that you can only add rewards for
                              courses you have enrolled your child in.
                            </li>
                            <li>
                              A popup will appear that will prompt you to add
                              the Target Points (amount of points needed to
                              achieve the award), Reward Title, Reward
                              Description, and Expiry Date (date by which your
                              child needs to achieve the target points).
                            </li>
                            <li>
                              You can also choose to add a small picture (square
                              images work best) that will populate along with
                              the reward popup for your child.
                            </li>
                            <li>
                              You can also choose to add a reward for each
                              section within a course.
                              <img
                                src={image.addrewardss}
                                alt=""
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading13">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse13"
                        aria-controls="collapse13"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can my child see the rewards I have added for them?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse13"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              When you add a reward for a course, a treasure
                              chest icon appears on the course card.
                            </li>
                            <li>
                              On clicking the treasure chest icon, your child
                              can see the reward details - target points, title,
                              description, expiry date, and an image to
                              represent the reward.
                            </li>
                            <img
                              src={image.rewardsaddedss}
                              alt=""
                              className="mt-2"
                            />
                            <img
                              src={image.addedrewardpopupss}
                              alt=""
                              className="mt-1"
                            />
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading14">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse14"
                        aria-controls="collapse14"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I as the parent see the rewards I have added for
                        my child?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse14"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>Select ‘Settings’ from the dropdown menu.</li>
                            <li>
                              Settings can only be viewed and updated by a
                              parent; you will be required to verify your
                              password to confirm you are the parent.
                            </li>
                            <li>
                              After entering your password for verification, you
                              will see a list of all courses offered and the
                              different settings you can add/edit for a course.
                            </li>
                            <li>
                              The reward column will show a{" "}
                              <strong className="bluestyl">View Reward</strong>{" "}
                              icon when you have uploaded a reward for that
                              course or course section.
                            </li>
                            <li>
                              Click the{" "}
                              <strong className="bluestyl">View Reward</strong>{" "}
                              icon to view reward details and make changes.
                              <img
                                src={image.rewardsaddedforcoursess}
                                alt=""
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading15">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse15"
                        aria-controls="collapse15"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I show or hide rewards for the learner?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse15"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>Select ‘Settings’ from the dropdown menu.</li>
                            <li>
                              Settings can only be viewed and updated by a
                              parent; you will be asked to verify your password
                              to confirm you are the parent.
                            </li>
                            <li>
                              After entering your password for verification, you
                              will see a list of all courses offered and the
                              different settings you can add/edit for a course.
                            </li>
                            <li>
                              Rewards are visible to the learner by default.{" "}
                            </li>
                            <li>
                              To hide rewards for the learner, uncheck the box
                              in the row of the course under the column{" "}
                              <strong>Show Reward</strong>.
                            </li>
                            <li>
                              To show the reward again simply check the box.
                            </li>
                            <li>
                              Click <strong>Save</strong> at the bottom of the
                              settings page to save your settings.
                              <img
                                src={image.rewardsaddedforcoursess}
                                alt=""
                                className="mt-2"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading16">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse16"
                        aria-controls="collapse16"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I invite a friend to {SITEFNAME.NAME}?
                        <span className="AngleupDown">
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div
                        className="ProcessStepDesc collapse"
                        id="collapse16"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="WHDieList">
                          <ul className="pl-3">
                            <li>
                              Click the{" "}
                              <img
                                src={image.profileiconss}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl"> Profile</strong>{" "}
                              initials/picture at the top right of your page.
                            </li>
                            <li>
                              On the menu that appears, click the{" "}
                              <img
                                src={image.inviteafriend}
                                className="imgicon_styl"
                              />{" "}
                              <strong className="bluestyl">
                                Invite <span className="text-lowercase">a</span>{" "}
                                Friend
                              </strong>{" "}
                              option.
                            </li>
                            <li>
                              A form will open to enter your friend’s first
                              name, last name, email, and state.
                            </li>
                            <li>
                              Complete the form and hit submit. You are done!
                            </li>
                            <li>
                              An email will be sent to your friend with a link
                              to complete their sign-up. The email also lets
                              them know you are inviting them to join{" "}
                              {SITENAME.NAME}.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="RightbarPannel p-0">
                  <div className="heading">
                    <h2>Help Topics</h2>
                  </div>
                  <div className="imagePart w-100 text-left">
                    <ul>
                      <li className="active">
                      <i className="fa-regular fa-circle-nodes mr-2"></i>Courses
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>My and
                        Learner Profile
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>
                        Dimensions and Skills
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>Holistic
                        View and Progress
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>
                        Subscription Billing
                      </li>
                      <li>
                      <i className="fa-regular fa-circle-nodes mr-2"></i>
                        Anything else?
                      </li>
                    </ul>
                  </div>
                </div> */}

                <HelpSection />
              </div>
            </div>
          </div>
        </section>
      </Home>
    </div>
  );
};
export default CoursesHelp;

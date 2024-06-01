import React, { useEffect } from "react";
import * as image from "../../resources/images";
import Home from "../Home";
import { useDispatch } from "react-redux";
import { breadcrumb } from "../../redux/actions";
import HelpSection from "../helpTopics/HelpSection";

const HelpDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Course related FAQ's Process",
      })
    );
  }, []);
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
                        Where can I see course details?{" "}
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
                          <h3>To add or remove a website from your profile:</h3>
                          <ul className="pl-3">
                            <li>
                              {" "}
                              Click the{" "}
                              <strong>
                                <i className="fa-regular fa-circle-user"></i> Me
                              </strong>{" "}
                              icon at the top of your LinkedIn homepage.
                            </li>
                            <li>
                              Click <strong>View Profile</strong>.
                            </li>
                            <li>
                              Click <strong>Contact info</strong> in your
                              introduction section.
                            </li>
                            <li>
                              In the <strong>Contact Info</strong> pop-up
                              window, click the{" "}
                              <strong>
                                {" "}
                                <i className="fa-regular fa-pen"></i> Edit{" "}
                              </strong>
                              icon.
                            </li>
                            <li>
                              From the <strong>Edit contact</strong>info pop-up
                              window, you can:
                              <ul>
                                <li>
                                  <strong>Add website:</strong> Click{" "}
                                  <strong>
                                    <i className="fa-regular fa-plus"></i> Add
                                    website
                                  </strong>{" "}
                                  and copy and paste/type your website address
                                  into the Website URL field and choose Website
                                  type from the dropdown
                                </li>
                                <li>
                                  <strong>Remove website:</strong> Click{" "}
                                  <strong>Remove </strong>under the website you
                                  want to remove
                                </li>
                              </ul>
                            </li>
                            <li>
                              Click <strong>Save</strong>.
                            </li>
                          </ul>
                          <p>Refer to screenshot below</p>
                          <img src={image.coursehelp} />
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
                        What course details are available to help me decide to
                        enroll or not?{" "}
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
                          <h3>To add or remove a website from your profile:</h3>
                          <ul className="pl-3">
                            <li>
                              {" "}
                              Click the{" "}
                              <strong>
                                <i className="fa-regular fa-circle-user"></i> Me
                              </strong>{" "}
                              icon at the top of your LinkedIn homepage.
                            </li>
                            <li>
                              Click <strong>View Profile</strong>.
                            </li>
                            <li>
                              Click <strong>Contact info</strong> in your
                              introduction section.
                            </li>
                            <li>
                              In the <strong>Contact Info</strong> pop-up
                              window, click the{" "}
                              <strong>
                                {" "}
                                <i className="fa-regular fa-pen"></i> Edit{" "}
                              </strong>
                              icon.
                            </li>
                            <li>
                              From the <strong>Edit contact</strong>info pop-up
                              window, you can:
                              <ul>
                                <li>
                                  <strong>Add website:</strong> Click{" "}
                                  <strong>
                                    <i className="fa-regular fa-plus"></i> Add
                                    website
                                  </strong>{" "}
                                  and copy and paste/type your website address
                                  into the Website URL field and choose Website
                                  type from the dropdown
                                </li>
                                <li>
                                  <strong>Remove website:</strong> Click{" "}
                                  <strong>Remove </strong>under the website you
                                  want to remove
                                </li>
                              </ul>
                            </li>
                            <li>
                              Click <strong>Save</strong>.
                            </li>
                          </ul>
                          <p>Here you see the screenshot below</p>
                          <img src={image.coursehelp} />
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
                        Where can I learn more about the course provider?{" "}
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
                          <h3>To add or remove a website from your profile:</h3>
                          <ul className="pl-3">
                            <li>
                              {" "}
                              Click the{" "}
                              <strong>
                                <i className="fa-regular fa-circle-user"></i> Me
                              </strong>{" "}
                              icon at the top of your LinkedIn homepage.
                            </li>
                            <li>
                              Click <strong>View Profile</strong>.
                            </li>
                            <li>
                              Click <strong>Contact info</strong> in your
                              introduction section.
                            </li>
                            <li>
                              In the <strong>Contact Info</strong> pop-up
                              window, click the{" "}
                              <strong>
                                {" "}
                                <i className="fa-regular fa-pen"></i> Edit{" "}
                              </strong>
                              icon.
                            </li>
                            <li>
                              From the <strong>Edit contact</strong>info pop-up
                              window, you can:
                              <ul>
                                <li>
                                  <strong>Add website:</strong> Click{" "}
                                  <strong>
                                    <i className="fa-regular fa-plus"></i> Add
                                    website
                                  </strong>{" "}
                                  and copy and paste/type your website address
                                  into the Website URL field and choose Website
                                  type from the dropdown
                                </li>
                                <li>
                                  <strong>Remove website:</strong> Click{" "}
                                  <strong>Remove </strong>under the website you
                                  want to remove
                                </li>
                              </ul>
                            </li>
                            <li>
                              Click <strong>Save</strong>.
                            </li>
                          </ul>
                          <p>Refer to screenshot below</p>
                          <img src={image.coursehelp} />
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
                        What content can I view before enrolling?{" "}
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
                            <li> Intellectual Development Process</li>
                            <li>Social Development</li>
                            <li>Physical Development</li>
                            <li>Emotional Development</li>
                            <li>Spiritual Development</li>
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
                        What content can I view before subscribing?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading6">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse6"
                        aria-controls="collapse6"
                      >
                        <img src={image.SceneQuestionicon} />
                        How are the points and % completion calculated?{" "}
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
                        <h3>Write your Query Here?</h3>
                        <p>Please fill the folloing information below.</p>
                        <form name="usersignup" className="content">
                          <div className="flex align-items-start query_style">
                            <div className="input-group">
                              <label>
                                First Name
                                <span className="mandatoryField">*</span>
                              </label>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="parentFirstName"
                                />
                              </div>
                            </div>
                            <div className="input-group">
                              <label>
                                Last Name
                                <span className="mandatoryField">*</span>
                              </label>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="parentLastName"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex align-items-start query_style">
                            <div className="input-group">
                              <label>
                                Email<span className="mandatoryField">*</span>
                              </label>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="parentEmail"
                                />
                              </div>
                            </div>
                            <div className="input-group">
                              <label>
                                Mobile<span className="mandatoryField">*</span>
                              </label>
                              <div className="form-group">
                                <input
                                  type="number"
                                  className="form-control"
                                  name="parentEmail"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex align-items-start query_style">
                            <div className="input-group">
                              <label>
                                Query<span className="mandatoryField">*</span>
                              </label>
                              <div className="form-group">
                                <textarea
                                  type="text"
                                  placeholder="Write your query here..."
                                  className="form-control"
                                  name="parentEmail"
                                  rows="30"
                                  cols="20"
                                />
                              </div>
                              <button
                                type="button"
                                className="sub_btn btn-login mt-3 w-25"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading7">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse7"
                        aria-controls="collapse7"
                      >
                        <img src={image.SceneQuestionicon} />I have completed
                        the lessons but still see less than 100% complete. What
                        do I need to do to get to 100% completion?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading8">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse8"
                        aria-controls="collapse8"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I pick a speicifc curiculum in Science and
                        Social Studies?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading9">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse9"
                        aria-controls="collapse9"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I add an activity?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading10">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse10"
                        aria-controls="collapse10"
                      >
                        <img src={image.SceneQuestionicon} />
                        How can I find out what modules have resources and
                        courses and their number?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading11">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse11"
                        aria-controls="collapse11"
                      >
                        <img src={image.SceneQuestionicon} />
                        What happens when I flag something as ’Need Help’?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="Processaccordianlist" id="heading12">
                      <h4
                        data-toggle="collapse"
                        data-target="#collapse12"
                        aria-controls="collapse12"
                      >
                        <img src={image.SceneQuestionicon} />
                        How do I see courses my child has enrolled in?{" "}
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
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.{" "}
                        </p>
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

export default HelpDetail;

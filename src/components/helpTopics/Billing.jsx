/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "../Home";
import HelpSection from "./HelpSection";
import { breadcrumb } from "../../redux/actions";
import * as image from "../../resources/images";
import { SITENAME } from "../../utils/Messages";

const Billing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
        subTitle: "Subscription",
      })
    );
  }, []);

  return (
    <Home>
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
              How do I subscribe?{" "}
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
                <p>There are two ways to subscribe to {SITENAME.NAME}.</p>
                <h3>Method 1</h3>
                <ul className="pl-3">
                  <li>
                    Click the{" "}
                    <strong className="bluestyl">
                      <i className="fa-solid fa-paper-plane"></i> Enroll
                    </strong>{" "}
                    button for a course you want to enroll your child in.
                  </li>
                  <li>
                    A pop-up will appear asking you to become a subscriber to
                    access locked content. Click the{" "}
                    <img src={image.subscription} className="imgicon_styl" />{" "}
                    <strong className="bluestyl">Subscribe </strong>button.
                  </li>
                  <li>
                    A half screen with the available subscription plans will
                    open.
                  </li>
                  <li>
                    Pick the subscription plan that works best for you. We
                    recommend picking a family plan if you have more than one
                    child as it is more cost-effective.
                  </li>
                  <li>
                    Click the <strong>Next</strong> button on the bottom right
                    of the half screen.
                  </li>
                  <li>
                    You will now come to the billing details page where you
                    enter your credit card details.
                  </li>
                  <li>
                    Click the <strong>Proceed to Checkout</strong> button.
                  </li>
                  <li>
                    You will then have the opportunity to review your selected
                    subscription plan, credit card details, and address. You
                    will also be asked to agree to abide by the Terms &
                    Conditions mentioned.
                  </li>
                  <li>
                    If all the details are correct and you agree to the Terms &
                    Conditions, click the
                    <strong> Subscribe</strong> button and you will see a
                    message confirming your subscription.
                  </li>
                  <li>
                    You will also receive an email confirming your subscription.
                  </li>
                </ul>
                <h3>Method 2</h3>
                <ul className="pl-3">
                  <li>
                    Click the{" "}
                    <img src={image.profileiconss} className="imgicon_styl" />{" "}
                    <strong className="bluestyl"> Profile</strong>{" "}
                    initials/picture at the top right of your page.
                  </li>
                  <li>
                    Click the{" "}
                    <img src={image.subscription} className="imgicon_styl" />{" "}
                    <strong className="bluestyl">Subscribe</strong> option on
                    the dropdown menu.
                  </li>
                  <li>
                    A half screen with the available subscription plans will
                    open.
                  </li>
                  <li>
                    Pick the subscription plan that works best for you. We
                    recommend picking a family plan if you have more than one
                    child as it is more cost effective.
                  </li>
                  <li>
                    Click the Next button on the bottom right of the half
                    screen.
                  </li>
                  <li>
                    You will now come to the billing details page where you
                    enter your credit card details.
                  </li>
                  <li>
                    Click the <strong>Proceed to Checkout</strong> button.
                  </li>
                  <li>
                    You will then have the opportunity to review your selected
                    subscription plan, credit card details, and address. You
                    will also be asked to agree to abide by the Terms &
                    Conditions mentioned.
                  </li>
                  <li>
                    If all the details are correct and you agree to the Terms &
                    Conditions, click the <strong>Subscribe</strong> button and
                    you will see a message confirming your subscription.
                  </li>
                  <li>
                    You will also receive an email confirming your subscription.
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
              What are the different subscription plans available to me?{" "}
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
                    We offer 4 subscription plans to best suit your family’s
                    needs.
                  </li>
                  <li>
                    If you have one child, you can pick either the{" "}
                    <strong>Single Child - Monthly</strong> or the{" "}
                    <strong>Single Child - Annually</strong> plan.
                  </li>
                  <li>
                    If you have more than one child, we recommend you pick
                    either the <strong>Family - Monthly</strong> or the{" "}
                    <strong>Family - Annually</strong> plan as the family plan
                    will be more cost-effective compared to a{" "}
                    <strong>Single Child</strong> plan.
                  </li>
                  <li>
                    The annual plan in both cases - single child or family -
                    offers a 17% saving compared to the monthly plan.
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
              How secure is my credit card information?{" "}
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
                <ul>
                  <li>
                    We use Stripe
                    <a href="https://stripe.com" target={"_blank"}>
                      https://stripe.com{" "}
                    </a>{" "}
                    for all payment processing and do not store your credit card
                    information at any time.
                  </li>
                  <li>
                    You can learn more about how Stripe handles your credit card
                    information at
                    <a href="https://stripe.com/privacy" target={"_blank"}>
                      https://stripe.com/privacy
                    </a>
                    .
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
              What content can I view before subscribing?{" "}
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
                <ul>
                  <li>
                    Before subscribing to {SITENAME.NAME}, you can view
                    essential information such as the course name, provider
                    name, course section name, and course description.
                  </li>
                  <li>
                    To learn more about the course, click on the course name.
                    You will be able to see the detailed course description and
                    details for each of the four (4) sections that make up this
                    course.
                    <img src={image.coursepagess} className="mt-2" />
                  </li>
                  <li>
                    Just under the course name on the top right you can see the
                    course rating based on user feedback.
                  </li>
                  <li>
                    Below the course rating, click Level X of Y or Course X of Y
                    to see other courses that make up this series of courses.
                  </li>
                  <li>
                    On the top right, you can see the course provider name and
                    rating.
                  </li>
                  <li>
                    To learn more about the course provider, click on the course
                    provider name to see their profile headline, qualifications,
                    and experience.
                  </li>
                  <li>
                    In addition to the above information, you can explore the
                    first section of the course before enrolling by clicking on
                    the section 1 name, absolutely free. This is to help you
                    make an informed decision on subscribing to {SITENAME.NAME}.
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
              How do I cancel my subscription?{" "}
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
                <ul>
                  <li>
                    To cancel your subscription, click the{" "}
                    <img src={image.profileiconss} className="imgicon_styl" />{" "}
                    <strong className="bluestyl"> Profile</strong>{" "}
                    initials/picture at the top right of your page.{" "}
                  </li>
                  <li>
                    Click the{" "}
                    <img src={image.subscription} className="imgicon_styl" />{" "}
                    <strong className="bluestyl">Subscribe</strong> option on
                    the dropdown menu.
                  </li>
                  <li>
                    This will open a half screen that shows your current plan;
                    at the bottom left, there is a link to Cancel Plan.
                  </li>
                  <li>
                    Once you click this link, you will be asked to confirm your
                    cancellation. To do so, click the <strong>Confirm</strong>{" "}
                    button on the bottom right of the half screen.
                  </li>
                  <li>
                    Cancellation will take effect at the end of the current
                    billing period.
                  </li>
                  <li>
                    After the cancellation takes effect, you will lose access to
                    all locked content. You will still be able to access any
                    content you have unlocked up to and including the day prior
                    to your cancellation effective date.
                  </li>
                  <li>
                    At this time, we do not offer refunds for canceled plans.
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
              How do I upgrade my subscription?{" "}
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
                <ul>
                  <li>
                    To view your current subscription and upgrade to a different
                    plan, click the{" "}
                    <img src={image.profileiconss} className="imgicon_styl" />{" "}
                    <strong className="bluestyl"> Profile</strong>{" "}
                    initials/picture at the top right of your page.{" "}
                  </li>
                  <li>
                    Click the{" "}
                    <img src={image.subscription} className="imgicon_styl" />{" "}
                    <strong className="bluestyl">Subscribe</strong> option on
                    the dropdown menu.
                  </li>
                  <li>
                    This will open a half screen that shows your current other
                    available plans you can upgrade to.
                  </li>
                  <li>
                    Select the plan you want to upgrade your subscription to.
                  </li>
                  <li>
                    Click the <strong>Next</strong> button on the bottom right
                    of the half screen.
                  </li>
                  <li>
                    You will now come to the billing details page where you can
                    see the details of your credit card you used to subscribe
                    previously. You have the option to use the same credit card
                    or enter new credit card details.
                  </li>
                  <li>
                    Click the <strong>Proceed to Checkout</strong> button.
                  </li>
                  <li>
                    You will then have the opportunity to review your selected
                    subscription plan, credit card details, and address. You
                    will also be asked to agree to abide by the Terms &
                    Conditions mentioned.
                  </li>
                  <li>
                    If all the details are correct and you agree to the Terms &
                    Conditions, click the Subscribe button and you will see a
                    confirmation your subscription has been upgraded.
                  </li>
                  <li>
                    You will also receive an email confirming your upgrade.
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
              How do I downgrade my subscription?{" "}
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
                <ul>
                  <li>
                    To view your current subscription and downgrade to a
                    different plan, click the{" "}
                    <img src={image.profileiconss} className="imgicon_styl" />{" "}
                    <strong className="bluestyl"> Profile</strong>{" "}
                    initials/picture at the top right of your page.{" "}
                  </li>
                  <li>
                    Click the{" "}
                    <img src={image.subscription} className="imgicon_styl" />{" "}
                    <strong className="bluestyl">Subscribe</strong> option on
                    the dropdown menu.
                  </li>
                  <li>
                    This will open a half screen that shows your current other
                    available plans you can downgrade to.
                  </li>
                  <li>
                    Select the plan you want to downgrade your subscription to.
                  </li>
                  <li>
                    Click the <strong>Next</strong> button on the bottom right
                    of the half screen.
                  </li>
                  <li>
                    A pop-up will appear asking you to confirm your downgrade.
                    If you are downgrading from a family to a single child plan,
                    you will be asked to select the child you want to keep the
                    subscription for.
                  </li>
                  <li>
                    Click the Confirm button to confirm your downgrade. You will
                    see a message confirming your downgrade.
                  </li>
                  <li>
                    You will also receive an email confirming your downgrade.
                  </li>
                  <li>
                    Downgrades will take effect at the end of the current
                    billing period.
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
              What do I get as part of my free trial?{" "}
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
                <ul>
                  <li>
                    Your free one-month trial allows you to fully explore the
                    offerings of {SITENAME.NAME} for one child!{" "}
                  </li>
                  <li>
                    This includes the ability to:
                    <ul>
                      <li>Enroll your child in all courses.</li>
                      <li>
                        Enroll your child in a Learner Pathway - a set of four
                        (4) tailored courses based on the interest / problem
                        areas you select for your child.
                      </li>
                      <li>Access all locked content.</li>
                    </ul>
                  </li>
                  <li>
                    Your child will be able to experience the benefits of
                    holistic learning and you will be able to track your child’s
                    progress as they learn critical life skills to navigate
                    life’s uncertainties and unpredictabilities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HelpSection />
    </Home>
  );
};
export default Billing;

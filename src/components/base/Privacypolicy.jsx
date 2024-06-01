import React from "react";
import { PATHS } from "../../utils";
import WebLayout from "../layout/WebLayout";
import { SITEURL } from "../../utils/Messages";
import {
  Link,
  NavLink,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import * as image from "../../resources/images";
import SecHeader from "./SecHeader";
const Privacypolicy = () => {
  // useEffect(() => {
  // 	window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="outerPagesHeader hubSpotthemeSec">
      <SecHeader />
      <section>
        <div className="container mt-5 pt-5">
          <div className="privacypolicyweb mt-5 pt-5">
            <div className="providerFlochrtimg">
              <h2 className="text-center">Terms of Use and Privacy Policy</h2>
              <h5 className="pb-3 text-center">
                Last Modified January 22, 2024
              </h5>

              <div className="contentonpage">
                <ul>
                  <li>
                    <strong className="">#</strong>
                    <strong className="section_title">Section Name</strong>
                  </li>
                  <li>
                    <strong>1.</strong>
                    <a href="#Sectionone">General</a>
                  </li>
                  <li>
                    <strong>2.</strong>
                    <a href="#Sectiontwo">Provision of Services</a>
                  </li>
                  <li>
                    <strong>3.</strong>
                    <a href="#sectionthree">Your Account</a>
                  </li>
                  <li>
                    <strong>4.</strong>
                    <a href="#sectionfour">Use of Website Content</a>
                  </li>
                  <li>
                    <strong>5.</strong>
                    <a href="#sectionfive">Use Restrictions</a>
                  </li>
                  <li>
                    <strong>6.</strong>
                    <a href="#sectionsix">Payment and Billing</a>
                  </li>
                  <li>
                    <strong>7.</strong>
                    <a href="#sectionseven">Privacy Generally</a>
                  </li>
                  <li>
                    <strong>8.</strong>
                    <a href="#sectioneight">Children</a>
                  </li>
                  <li>
                    <strong>9.</strong>
                    <a href="#sectionnine">Intellectual Property</a>
                  </li>
                  <li>
                    <strong>10.</strong>
                    <a href="#sectionten">
                      Suspension and Termination; Voluntary Account Closure{" "}
                    </a>
                  </li>
                  <li>
                    <strong>11.</strong>
                    <a href="#sectioneleven">Security of Information</a>
                  </li>
                  <li>
                    <strong>12.</strong>
                    <a href="#sectiontwele">Third-Party Sites</a>
                  </li>
                  <li>
                    <strong>13.</strong>
                    <a href="#sectiontherteen">Disclaimer</a>
                  </li>
                  <li>
                    <strong>14.</strong>
                    <a href="#sectionfourteen">Limitation of Liability</a>
                  </li>
                  <li>
                    <strong>15.</strong>
                    <a href="#sectionfiveteen">Indemnification</a>
                  </li>
                  <li>
                    <strong>16.</strong>
                    <a href="#sectionsixteen">Disputes; Governing Law</a>
                  </li>
                  <li>
                    <strong>17.</strong>
                    <a href="#sectionseventeen">Entire Agreement</a>
                  </li>
                  <li>
                    <strong>18.</strong>
                    <a href="#sectioneighteen">Waiver and Severability</a>
                  </li>
                  <li>
                    <strong>19.</strong>
                    <a href="#sectionnineteen">
                      Your Rights Under US State Laws
                    </a>
                  </li>
                  <li>
                    <strong>20.</strong>
                    <a href="#sectiontwenty">Comments and Concerns</a>
                  </li>
                </ul>
              </div>
              <p>
                The below terms and conditions govern your access to and use of
                Bloomster.com, any Bloomster-branded mobile applicable and
                related applications, each including any content, functionality,
                and services offered on or through the same (collectively, and
                with any replacements thereof, the “Website”). The Website,
                along with any services and functionalities offered through the
                Website may collectively be referred to as “Services” herein.
              </p>
              <br />
              <p>
                USERS UNDER 13: If you are under the age of 13 and located
                within the United States, you may not use the Website unless
                your parent or other legal guardian consents to your use of the
                Website. Outside of the United States, the Website is offered
                and available only to users who are at least 18 years old, or
                the legal age of majority under applicable law, and you agree
                not to use or access the Website if you are not of such legal
                age of majority.
              </p>
              <br />
              <p>
                Within this policy, “you” or “User” means a user of the Website,
                and “we”, “us”, “our” or “Balanced Tech” refers to Balanced Tech
                Inc., a Delaware corporation.
              </p>
              <br />
              <ul>
                <li>
                  <p>
                    By using the Website, or by clicking to accept or agree to
                    this Policy when this option is made available to you, you
                    accept and agree to be bound by and to abide by these terms
                    (the “Policy”). If you do not want to agree to this Policy
                    at any time, you must not continue to access or use the
                    Website.
                  </p>
                </li>
              </ul>
            </div>
            <div className="termsofuserd mb-5">
              <div className="termslist mt-3 pt-3" id="Sectionone">
                <h3>
                  1. <strong>General.</strong>
                </h3>
                <p>
                  We may revise and update this Policy from time to time in our
                  sole discretion. All changes are effective immediately when we
                  post them, or if required by law, when we provide notice to
                  you of such changes. Such changes apply to all access to and
                  use of the Website thereafter, and your continued use of the
                  Website means that you accept and agree to the changes. You
                  are also subject to any additional posted policies and rules
                  related to specific Services and features which may be
                  presented to you at the time of accessing and/or using such
                  Services or features. All such policies are incorporated by
                  reference into this policy and made part of this policy.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="Sectiontwo">
                <h3>
                  2. <strong>Provision of Services</strong>.
                </h3>
                <p>
                  We reserve the right to withdraw or amend the Website in our
                  sole discretion without notice. We will not be liable if for
                  any reason all or any part of the Website is unavailable at
                  any time or for any period. From time to time, we may restrict
                  access to some parts of the Website, or the entire Website, to
                  some or all Users. We will send any notices and messages to
                  you via the email address you provide to us when creating an
                  Account on the Website, and you agree to keep your contact
                  information up to date.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionthree">
                <h3>
                  3. <strong>Your Account</strong>.
                </h3>
                <ul>
                  <li>
                    <strong>3.1 </strong>
                    Users are required to make an account to use certain
                    Services we offer (each, an “Account”). Without an Account,
                    you may be able to view our homepage and general information
                    about our Website and Services.
                  </li>
                  <br />
                  <li>
                    <strong>3.2 </strong>
                    Users of the Website include both a parent/guardian who
                    creates an Account for purposes of granting a student
                    (including a child) access to the educational content on the
                    Website, and also includes Users who create an Account for
                    personal use of the Services.
                  </li>
                  <br />
                  <li>
                    <strong>3.3 </strong>
                    All Users must provide true, accurate, current, and complete
                    information when creating an Account, and all Users agree to
                    promptly update Account information in the event it changes.
                    You are solely responsible for maintaining the
                    confidentiality of any password you choose; you should not
                    provide your Account information to any other person. Your
                    Account may be used only by you personally, or a child of
                    whom you are the parent or legal guardian; in the latter
                    case, you are responsible for monitoring your child’s use of
                    the Website. You are fully responsible for all activities
                    that occur under Account. You agree to immediately notify us
                    of any unauthorized use of your password or Account or any
                    other breach of security, and you agree to log out of your
                    Account at the end of each session. We are not liable for
                    any loss or damage arising from your failure to comply with
                    this section. You may terminate your use of the Services at
                    any time by logging into your Account and terminating your
                    Account when such option is made available to you;
                    otherwise, you may contact us at the email address set forth
                    in this policy to terminate your Account.
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionfour">
                <h3>
                  4. <strong>Use of Website Content</strong>.
                </h3>

                <ul>
                  <li>
                    <strong>4.1 </strong>
                    Certain content on the Website may be considered sensitive
                    by certain individuals. Certain content may in certain
                    circumstances be contrary to the personal views (whether
                    political, religious, or other societal views) of a User.
                    <strong>
                      {" "}
                      Parents and guardians who create an Account on behalf of
                      their child bear the sole responsibility of reviewing all
                      educational content, including all learning modules, in
                      advance of allowing your child to access such modules. We
                      recommend that you accompany a child through the learning
                      modules.{" "}
                    </strong>
                    You hereby waive any claims against Balanced Tech related
                    to, and hold Balanced Tech harmless from, any claims,
                    losses, or other liability related to the content of the
                    modules. You agree not to publicly make any disparaging or
                    derogatory statements, either orally or in writing,
                    regarding the specific content of the educational classes or
                    modules, where disparaging or derogatory statements include,
                    but are not limited to, any statement that may reasonably be
                    considered to be detrimental to Balanced Tech. If you do not
                    agree at any point with the views or educational materials
                    presented on the Website, your option and sole remedy is to
                    cease use of the Website and terminate your Account.
                  </li>
                  <br />
                  <li>
                    <strong>4.2 </strong> You agree and acknowledge that the
                    materials provided on the Website are not intended to be a
                    substitute for any formal education, nor does the use of the
                    Website satisfy any relevant government requirements related
                    to required education. The Website offers educational and
                    instructive games, intended only to be supplemental to a
                    child or student’s overall education. Balanced Tech does not
                    represent or warrant that any specific outcomes will occur
                    from a student’s use of the Website. You acknowledge and
                    agree that information we may obtain regarding an
                    individual’s use of the Website does not constitute student
                    education records.
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionfive">
                <h3>
                  5. <strong>Use Restrictions</strong>.{" "}
                </h3>
                <p>
                  All Users agree to comply with all applicable local, state,
                  national, and international laws and regulations in your use
                  of the Website. Users shall not (i) use the Services in any
                  manner that damages, disables, overburdens, or impairs any of
                  Balanced Tech’s websites or the Services or interferes with
                  any other party's use of the Services, or in any other manner
                  that is unlawful or prohibited by this policy; (ii) create an
                  Account for anyone other than yourself or use a false identity
                  to obtain an Account, log into an account on the Services
                  other than your Account, or give or allow anyone else access
                  to your Account, except as specifically contemplated herein;
                  (iii) Access data of a third party through the Services not
                  intended for you, or attempt to gain unauthorized access to
                  the Services; or (iv) lease, distribute, license, transfer,
                  sell, or otherwise commercially exploit the Services or your
                  access to the same.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionsix">
                <h3>
                  6. <strong>Payment and Billing</strong>.
                </h3>

                <ul>
                  <li>
                    <strong>6.1 </strong>
                    Certain Services are made available to Users free of charge.
                    However, if you access any Services for which require
                    payment, as presented to you prior to the use of such
                    Services, you agree to pay Balanced Tech the amounts
                    presented to you should you decide to access such Services.
                    All payments for the Services are final and non-refundable.
                    If you agree to a recurring payment, and save a payment
                    method to your Account, you hereby consent to Balanced Tech
                    charging that payment method without any further consent
                    from you, pursuant to the terms of the recurring payment as
                    presented to you (unless and until you terminate your
                    Account). We may use a third-party payment processor for
                    payments. Such payment processor may have separate terms of
                    use or service, and such third-party payment processor’s
                    terms of use are as set forth by such third-party on their
                    platforms.
                  </li>
                  <br />
                  <li>
                    <strong>6.2 </strong>
                    Any fees we may charge are exclusive of all taxes, levies,
                    or duties imposed by taxing authorities, and you shall be
                    responsible for payment of all such taxes, levies, or
                    duties, excluding only United States (federal or state). If
                    we are obliged to collect or pay taxes, the taxes will be
                    invoiced to you. If you believe a charge is incorrect, you
                    must contact us in writing within 30 days of the charge date
                    containing the amount in question to be eligible to receive
                    an adjustment or credit. You are responsible to reimburse us
                    for any costs of collection of amounts due hereunder,
                    including attorney’s fees and court costs.
                  </li>
                  <li>
                    <strong>6.2 </strong>
                    All references to a “chargeback” refer to a reversal of a
                    credit/debit card charge. There is no reason for a
                    chargeback to ever be filed. If you feel that you have been
                    incorrectly charged, or that your credit/debit card was used
                    fraudulently in connection with the Services, reach out to
                    us immediately. You agree to repay Balanced Tech all costs
                    and expenses incurred as a result of any chargeback you
                    file.
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionseven ">
                <h3>
                  7. <strong>Privacy Generally</strong>.
                </h3>

                <ul>
                  <li>
                    <ul>
                      <li>
                        <strong>7.1 Information We Collect.</strong> We may
                        collect certain information from you described in the
                        categories below (collectively, “Information”):
                        <br />
                        <ul>
                          <li>
                            <strong>A. </strong>
                            Information that identifies, relates to, describes,
                            is reasonably capable of being associated with, or
                            could reasonably be linked to, a particular person
                            or household, such as your name, email address, date
                            of birth, the date of birth of a student on whose
                            behalf you made an Account, and your address
                            (collectively “Personal Information”);
                          </li>
                          <br />
                          <li>
                            <strong>B. </strong>
                            Information which is about you but is not capable of
                            identifying an individual or household, such as the
                            grade a student is in, the interests of a student,
                            and related information; and
                          </li>
                          <br />
                          <li>
                            <strong>C. </strong>
                            Information regarding how the Services are accessed
                            and used by you, including but not limited to your
                            access times, browser type, browser version, the
                            pages of our Website that you visit, the time and
                            date of your visit, the time spent on those pages,
                            unique device identifiers, content you have accessed
                            or seen, the time spent on certain learning modules,
                            answers to any quiz-like questions presented via the
                            learning modules, and other similar data
                            (collectively, “Usage Data”).
                            <br />
                            We collect Information directly from you when you
                            provide it to us through the use of any of our
                            Services; automatically as you navigate through the
                            Website and Services; and from certain third parties
                            who we have engaged to perform services for us or
                            who may collect such data from you subject to their
                            own policies.
                            <br />
                            We do not attempt to collect Personal Information
                            from any User unless that User accesses the Services
                            through an Account. However, if any Information is
                            provided to us in any manner by any User, this
                            Privacy Policy will apply to such Information. Usage
                            Data and is collected for every User of the Website
                            and is not intended to be capable of personally
                            identifying you, except that we may associate such
                            Usage Data with your unique identifier in our
                            internal systems.
                          </li>
                        </ul>
                        <br />
                      </li>
                      <li>
                        <strong>7.2 Cookies. </strong>
                        Information may be obtained from you through the use of
                        cookies. Cookies are files with a small amount of data
                        which may include an anonymous unique identifier. We may
                        make cookies available to give you the best online
                        experience possible. The cookies we use do not contain
                        personally identifiable information; however, once you
                        choose to enter our site with personally identifiable
                        information that information may be linked to the data
                        stored in the cookie. You may be able to disable cookies
                        through your web browser or via other means, but in such
                        case, we may not be able to provide to you some of the
                        features and functionalities otherwise available via the
                        Website, or your Website experience may change.
                      </li>
                      <br />
                      <li>
                        <strong>7.3 Use of Your Information. </strong>
                        We may use your Information in the manners set forth
                        below.
                        <ul>
                          <li>
                            <strong>A. </strong>
                            We will use your Information to operate the Website,
                            perform or fulfill Services requested by you,
                            deliver information to you about our products and
                            service (including additional products and services
                            that may be of interest to you), to improve and
                            tailor our products and services to better fit our
                            Users, inform you of changes to our Website or our
                            policies, to solicit additional information from you
                            from time to time, and to provide information about
                            Balanced Tech’s current Services and any updated or
                            additional Services.
                          </li>
                          <br />
                          <li>
                            <strong>B. </strong>
                            We may use your Information to resolve disputes,
                            troubleshoot problems, and enforce our agreements
                            with you, including our policies, and complete any
                            purchases you make through the Website.
                          </li>
                          <br />
                          <li>
                            <strong>C. </strong>
                            We may use, reproduce, copy, and publish, and you
                            hereby grant permission for us and our licensors to
                            use, reproduce, copy, and publish Usage Data, and
                            any other Information which has been de-identified,
                            anonymized, and/or aggregated such that it is no
                            longer capable of identifying you. We may use the
                            same for any lawful purpose, including for our
                            marketing purposes, and for continuing to develop
                            our software through machine learning and/or
                            artificial intelligence.
                          </li>
                          <br />
                          <li>
                            <strong>D. </strong>
                            We may use your Information for any other specific
                            purpose that we communicate to you upon collection
                            of the same, and for any purpose that you approve or
                            for which you direct us to use such Information.
                          </li>
                        </ul>
                        <br />
                      </li>
                      <li>
                        <strong>7.4 Disclosure of Your Information. </strong>
                        We may disclose and share Information with third parties
                        as set forth below.
                        <ul>
                          <li>
                            <strong>A. </strong>
                            We may share your Information with our subsidiaries
                            and affiliates, and with contractors, service
                            providers, and other third parties who we have
                            engaged in order to continue to develop our Website,
                            improve our Services, and provide the Services to
                            you. For example, we may share your Information with
                            IT service providers, such that they may support our
                            IT systems, provide hosting, processing, and
                            analyzing services with respect to information and
                            data collected, and provide maintenance of such
                            systems, or on the basis of other legitimate
                            interests.
                          </li>
                          <li>
                            <strong>B. </strong>
                            We will not sell your Personal Information. However,
                            we may provide to third parties, without
                            consideration or for certain consideration, the
                            Usage Data, and data derived from other Information
                            (including Personal Information), which has been
                            de-identified, anonymized, and/or aggregated such
                            that it is no longer capable of identifying you.
                          </li>
                          <li>
                            <strong>C. </strong>
                            We may share your Information as part of a transfer
                            or assignment if we are acquired by, sold to, or
                            merged with another entity, or otherwise reorganized
                            or liquidated, provided that, if in connection with
                            such sale, merger, or other reorganization, the
                            collection, use, or disclosure or your Information
                            will differ from this policy, you will receive a
                            notification of the same as provided herein above,
                            and you may terminate your Account in your
                            discretion.
                          </li>
                          <li>
                            <strong>D. </strong>
                            We may share your Information in response to legal
                            processes, court orders, or government or regulatory
                            requests; to enforce other agreements with you,
                            including for billing and collection purposes; and
                            if we believe disclosure is necessary or appropriate
                            to investigate, prevent, or take action regarding
                            illegal activities, suspected fraud, situations
                            involving potential threats to the physical safety
                            of any person, violations of our terms of use, to
                            verify or enforce compliance with the policies
                            governing our sites and applicable laws or as
                            otherwise required or permitted by law or consistent
                            with legal requirements.
                          </li>
                          <li>
                            <strong>E. </strong>
                            We may share your Information with credit card
                            issuers and financial institutions in order to
                            obtain payment from you, such that they may process
                            payments and refunds, verify the absence of fraud,
                            or assist in debt collection, in the course of the
                            performance of a contract or on the basis of other
                            legitimate interests.
                          </li>
                          <li>
                            <strong>F. </strong>
                            We may share your Information as appropriate to
                            protect us, other Users, and third parties if we
                            believe that you may harm, or have harmed, the
                            property or rights of Balanced Tech, other Users, or
                            any other third party, to report, disclose, limit,
                            respond to, or prevent such conduct or activity.
                          </li>
                        </ul>
                      </li>
                      <br />
                      <li>
                        <strong>7.5 Your Choices Regarding Your Data. </strong>
                        Your Account may provide you with certain options with
                        respect to Information we collect from you, and we may
                        provide you with the option to update or delete certain
                        Information that we may have about you. If you delete
                        certain information, or decline to share certain
                        Information with us, we may not be able to provide to
                        you some of the features and functionalities otherwise
                        available via the Website.
                      </li>
                      <br />
                      <li>
                        <strong>7.6 Your Choices Regarding Your Data. </strong>
                        To the extent we rely on your consent to process any
                        Information, you may revoke that consent at any time. If
                        you wish to revoke such consent, or if at any time you
                        do not wish to receive the communications stated herein
                        from Balanced Tech, you may do so by sending your
                        request to Balanced Tech by email at
                        <a href="mailto:contact@bloomster.com">
                          {" "}
                          contact@bloomster.com
                        </a>
                        . It may take up to ten days for the change to be fully
                        effective. You may also be able to make these changes
                        via your Account. Notwithstanding the foregoing, we may
                        continuously maintain any Information that has been
                        de-identified, anonymized, and/or aggregated such that
                        it is no longer capable of identifying you.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectioneight">
                <h3>
                  8. <strong>Children</strong>.{" "}
                </h3>
                <p>
                  This policy applies to every User, including children under 13
                  when we have received the consent of a parent or other legal
                  guardian. We do not knowingly collect Personal Information
                  from children under 13 unless we have the consent of the
                  parent or other legal guardian of such child. If you become
                  aware that a child under 13 has provided us with Personal
                  Information without such consent, please contact us. If we
                  become aware that a child under 13 has provided us with
                  Personal Information without such consent, we will take steps
                  to terminate the child’s Account and delete any Personal
                  Information provided to us. We will not require a child to
                  disclose more Personal Information than is reasonably
                  necessary to access and use the Services and participate in
                  activities offered via the Website. If you are a parent or
                  other legal guardian who has provided consent for a child
                  under 13 to use the Website and Services, you have the right
                  to review your child’s collected Personal Information, request
                  deletion of the same, and at any time refuse to allow any
                  further collection or use of your child’s Personal
                  Information.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionnine">
                <h3>
                  9. <strong>Intellectual Property</strong>.
                </h3>

                <ul>
                  <li>
                    <strong>9.1 </strong>
                    As between Balanced Tech and you, Balanced Tech owns all of
                    the intellectual property rights related to and incorporated
                    within the Website, including but not limited to, (i) any
                    software code incorporated therein, and (ii) any materials
                    presented in any educational modules, including text,
                    pictures, videos, and related content. You agree you will
                    not try to discover any software code of the Website, or
                    reverse engineer any portion of the Website. You will not
                    attempt to copy or make derivatives of the content presented
                    in any learning module, whether for your own use outside of
                    the Website or to provide the same to others. You agree that
                    all of Balanced Tech’s trademarks, trade names, service
                    marks, trade dress, and other Balanced Tech logos and brand
                    features, and product and service names, are the property of
                    Balanced Tech (the "Provider Marks"). You agree not to
                    display or use in any manner the Provider Marks without
                    prior written consent from Provider.
                  </li>
                  <br />
                  <li>
                    <strong>9.2 </strong>
                    You agree that if you provide to us any comments, suggested
                    revisions, additions, ideas, developments, or concepts, such
                    feedback shall be the sole and exclusive property of
                    Balanced Tech, and you will have ‎no right, title or
                    interest of any kind or nature therein or thereto, or in and
                    to any ‎results and proceeds therefrom. Except as expressly
                    permitted by applicable law or as authorized by us, you
                    agree not to modify, rent, lease, loan, sell, distribute,
                    transmit, broadcast, publicly perform or create derivative
                    works based on the Services, such content or the Website, in
                    whole or in part. You agree not to access the Services by
                    any means other than through the interface that is provided
                    by Balanced Tech for use in accessing the Services. All
                    rights not expressly granted herein are fully reserved by
                    Balanced Tech.
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionten">
                <h3>
                  10.{" "}
                  <strong>
                    Suspension and Termination; Voluntary Account Closure
                  </strong>
                  .
                </h3>

                <ul>
                  <li>
                    <strong>10.1 </strong>
                    You agree that Balanced Tech may, without prior notice,
                    immediately terminate, suspend, or otherwise limit your
                    access to or use of the Services, by terminating your
                    Account or otherwise. Cause shall include, but not be
                    limited to: (a) breaches or violations of this policy or
                    other guidelines which may be provided to you from time to
                    time; (b) requests by law enforcement or other government
                    agencies; (c) discontinuance or material modification to the
                    Services; (d) unexpected technical or security issues or
                    problems; (e) extended periods of inactivity; (f) engagement
                    by you in fraudulent or illegal activities; and/or, (g)
                    nonpayment of any fees owed by you in connection with the
                    Services. Further, you agree that all terminations,
                    limitations of access and suspensions for cause shall be
                    made in Balanced Tech’s sole discretion and that Balanced
                    Tech will not be liable to you or any third party for any
                    termination of your Account or use of the Services. Upon any
                    such termination, cancellation, and/or suspension, you are
                    still responsible for payment of all amounts accrued and
                    owed by you.
                  </li>
                  <br />
                  <li>
                    <strong>10.2 </strong>
                    We will retain your Information for the entire time that you
                    keep your Account open. After you close your Account, we may
                    retain your Information: (i) for as long as necessary to
                    comply with any legal requirement, to protect our legal
                    interests, or otherwise pursue our legal rights and
                    remedies; (ii) on our backup and disaster recovery systems
                    in accordance with our backup and disaster recovery policies
                    and procedures; and (iii) for Information that has been
                    de-identified, anonymized, and/or aggregated in such a
                    manner that it is no longer capable of identifying you,
                    indefinitely.{" "}
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectioneleven">
                <h3>
                  11. <strong>Security of Information</strong>.{" "}
                </h3>
                <p>
                  We have put in place industry-standard procedures to safeguard
                  and help prevent unauthorized access, to maintain data
                  security, and to use correctly the Information we collect
                  online, such as dedicated virtual private servers, a web
                  application firewall, an encrypted database, and no
                  third-party access to the server. Unfortunately, we cannot
                  guarantee that 100% of the data transmissions are secure.
                  Therefore, while we strive to protect your Personal
                  Information, you acknowledge that: (a) there are limitations
                  to security and privacy of the Internet that are beyond our
                  control; (b) the security, integrity and privacy of the
                  Personal Information exchanged between you and us cannot be
                  guaranteed; and (c) any such information and data may be
                  viewed or tampered with in transit by a third party. For any
                  payments to Balanced Tech, we may use a third-party payment
                  processor to better ensure the security of your payment
                  information. Such third-party processor may have its own Terms
                  of Use and Privacy Policy. We recommend that you review such
                  third-party policies when making a payment to us to understand
                  the security measures such third-party has taken regarding
                  your payment information.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectiontwele">
                <h3>
                  12. <strong>Third-Party Sites</strong>.{" "}
                </h3>
                <p>
                  This document only addresses the use and disclosure of
                  Information that you provide to us. Other sites accessible
                  through our Website from time to time may have their own
                  privacy policies and data collection, use and disclosure
                  practices. If you are transferred to or navigate to third
                  party sites through links or frames provided through the
                  Services, you are cautioned to read such sites' terms and
                  conditions and privacy policies before using such sites in
                  order to be aware of their terms and conditions. You
                  acknowledge that Balanced Tech is not responsible for the
                  accuracy, copyright compliance, legality, decency, or any
                  other aspect of the contents, products, services, or any
                  transmissions received through such sites.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectiontherteen">
                <h3>
                  13. <strong>Disclaimer</strong>.{" "}
                </h3>
                <p>
                  BALANCED TECH MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE
                  SERVICES, THE WEBSITE, THE SUITABILITY OF THE INFORMATION
                  CONTAINED ON OR RECEIVED THROUGH USE OF THE SERVICES OR
                  WEBSITE, OR ANY RESULTS RECEIVED THROUGH THE SERVICES. THE
                  SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
                  WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. BALANCED
                  TECH SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                  NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM COURSE OF
                  DEALING, USAGE, OR TRADE PRACTICE. BALANCED TECH MAKES NO
                  WARRANTY OF ANY KIND THAT THE WEBSITE, PROVIDER MARKS, OR
                  OTHER INTELLECTUAL PROPERTY OF BALANCED TECH, OR ANY PRODUCTS
                  OR RESULTS OF THE USE THEREOF, WILL: MEET CUSTOMER’S OR ANY
                  OTHER PERSON’S REQUIREMENTS; OPERATE WITHOUT INTERRUPTION OR
                  BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; ACHIEVE ANY
                  INTENDED RESULT; BE COMPATIBLE OR WORK WITH ANY SOFTWARE,
                  SYSTEM OR OTHER SERVICES; OR BE SECURE, ACCURATE, RELIABLE,
                  COMPLETE, FREE OF HARMFUL CODE, OR ERROR FREE. BALANCED TECH
                  FURTHER MAKES NO WARRANTY OF ANY KIND THAT ANY DEFECTS OR
                  ERRORS OF THE PLATFORM WILL BE CORRECTED, OR THAT THE CONTENTS
                  OR ANY INFORMATION RECEIVED THROUGH THE SERVICES ARE FREE OF
                  VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionfourteen">
                <h3>
                  14. <strong>Limitation of Liability</strong>.{" "}
                </h3>
                <p>
                  UNDER NO CIRCUMSTANCES WILL BALANCED TECH, INCLUDING ITS
                  AFFILIATES, SUBSIDIARIES, PARENTS, SUCCESSORS, ASSIGNS,
                  OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SHAREHOLDERS, BE
                  LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE,
                  CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING, BUT NOT LIMITED
                  TO, LOST PROFITS, LOSS OF BUSINESS, DATA DELETION, DATA
                  CORRUPTION, OR LOSS OF DATA, LOSS OF PROGRAMS, FAILURE TO
                  STORE ANY INFORMATION OR OTHER CONTENT MAINTAINED OR
                  TRANSMITTED BY THE SERVICES, SERVICE INTERRUPTIONS,
                  INTERRUPTION OF BUSINESS, OR FOR THE COST OF PROCUREMENT OF
                  SUBSTITUTE SERVICES) ARISING OUT OF OR IN CONNECTION WITH THE
                  USE OF THE SERVICES, HOWEVER ARISING. SHOULD BALANCED TECH BE
                  FOUND LIABLE TO ANY USER UNDER ANY CLAIM OR CAUSE OF ACTION,
                  EACH USER AGREES THAT IN ANY CASE, THE MAXIMUM AMOUNT OF
                  DAMAGES THAT BALANCED TECH MAY BE LIABLE FOR ARISING FROM THIS
                  AGREEMENT OR THE USE OF THE WEBSITE OR SERVICES WILL NOT
                  EXCEED THE GREATER OF $100.00 OR TOTAL AMOUNT PAID TO BALANCED
                  TECH DURING THE 12 MONTH PERIOD PRECEDING THE EVENT GIVING
                  RISE TO THE CLAIM. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE
                  EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
                  DAMAGES, LIABILITY IN SUCH JURISDICTIONS SHALL BE LIMITED TO
                  THE MAXIMUM EXTENT PERMITTED BY LAW OF SUCH JURISDICTION.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionfiveteen">
                <h3>
                  15. <strong>Indemnification</strong>.{" "}
                </h3>
                <p>
                  You agree to defend, indemnify, and hold harmless Balanced
                  Tech, along with its affiliates, subsidiaries, parents,
                  successors, assigns, officers, directors, employees, agents,
                  and shareholders, from all liabilities, claims, demands, and
                  expenses, including attorney's fees, made by any third party
                  that arise from your use of the Services, your violation of
                  this policy or the Privacy Policy, or your violation of any
                  rights of another party. Balanced Tech reserves the right, at
                  your expense, to assume the exclusive defense and control of
                  any matter otherwise subject to indemnification by you, in
                  which event you shall cooperate with Balanced Tech in
                  asserting any available defenses.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionsixteen">
                <h3>
                  16. <strong>Disputes; Governing Law</strong>.
                </h3>
                <p>
                  YOU SHOULD READ THIS SECTION CAREFULLY AS IT MAY SIGNIFICANTLY
                  AFFECT YOUR LEGAL RIGHTS.{" "}
                </p>
                <ul>
                  <li>
                    <strong>16.1 </strong>
                    USERS AGREE THAT ANY CLAIMS WILL BE ADJUDICATED ON AN
                    INDIVIDUAL BASIS, AND ALL USERS WAIVE THE RIGHT TO
                    PARTICIPATE IN A CLASS, COLLECTIVE, OR OTHER JOINT ACTION
                    WITH AS AGAINST BALANCED TECH ARISING FROM THE USE OF THE
                    WEBSITE OR SERVICES PROVIDED.{" "}
                  </li>
                  <br />
                  <li>
                    <strong>16.2 </strong>
                    ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR
                    RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE
                    COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION
                    ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS
                    PERMANENTLY BARRED.
                  </li>
                  <br />
                  <li>
                    <strong>16.3 </strong>
                    This Agreement shall be governed by, construed, and enforced
                    in accordance with the laws of the State of Indiana without
                    giving effect to the conflicts or choice of law provisions
                    thereof. Any action or proceeding seeking to enforce any
                    provision of, or based upon any right arising out of, this
                    Agreement shall be brought in any court of appropriate
                    jurisdiction in Marion County, Indiana.
                  </li>
                </ul>
              </div>

              <div className="termslist mt-3 pt-3" id="sectionseventeen">
                <h3>
                  17. <strong>Entire Agreement</strong>.{" "}
                </h3>
                <p>
                  This Terms of Use, the Privacy Policy, and any terms
                  referenced within such policies as being incorporated into the
                  policies, and any other terms you may agree to as you navigate
                  the Website, contain the entire agreement between Balanced
                  Tech and you as a User of the Services. No other
                  communications, whether direct or indirect, between you and
                  Balanced Tech will, or are intended to, alter or supersede any
                  provision of this Terms of Use or Privacy Policy.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectioneighteen">
                <h3>
                  18. <strong>Waiver and Severability</strong>.{" "}
                </h3>
                <p>
                  No waiver by Balanced Tech of any term or condition set out in
                  these Terms of Use shall be deemed a further or continuing
                  waiver of such term or condition or a waiver of any other term
                  or condition, and any failure of Balanced Tech to assert a
                  right or provision under these Terms of Use shall not
                  constitute a waiver of such right or provision. If any
                  provision of these Terms of Use is held by a court or other
                  tribunal of competent jurisdiction to be invalid, illegal, or
                  unenforceable for any reason, such provision shall be
                  eliminated or limited to the minimum extent such that the
                  remaining provisions of the Terms of Use will continue in full
                  force and effect.
                </p>
              </div>
              <div className="termslist mt-3 pt-3" id="sectionnineteen">
                <h3>
                  19. <strong>Your Rights Under US State Laws</strong>.
                </h3>
                <ul>
                  <li>
                    <strong>19.1 </strong>
                    In the United States, depending on your state of residence,
                    and subject to certain exceptions, you may have some or all
                    of the following rights:
                    <ul>
                      <li>
                        <strong>A. Right to Know: </strong>
                        The right to request that we disclose to you the
                        Personal Information we collect, use, or disclose, and
                        to access the same.
                      </li>
                      <br />
                      <li>
                        <strong>B. Right to Request Correction: </strong>
                        The right to request that we correct inaccurate Personal
                        Information that we maintain about you.
                      </li>
                      <br />
                      <li>
                        <strong>C. Right to Request Deletion: </strong>
                        The right to request that we delete Personal Information
                        that we have collected from or about you. (Please note
                        that you may not be able to maintain an Account through
                        the Website without our retention of certain Personal
                        Information.)
                      </li>
                      <br />
                      <li>
                        <strong>D. Right to Portability: </strong>
                        The right to obtain a copy of your Personal Information
                        that you previously provided to us in a portable and, to
                        the extent technically feasible, readily usable format
                        that allows you to transmit the data to another
                        controller.
                      </li>
                      <br />
                      <li>
                        <strong>E. Right to Opt Out: </strong>
                        The right to opt out of the processing of your Personal
                        Information for purposes of targeted advertising and
                        profiling in furtherance of decisions that produce legal
                        or similarly significant effects concerning you.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>19.2</strong>
                    To submit a request to exercise your rights set forth in
                    this section, and as applicable, to appeal a consumer rights
                    action, you may use{" "}
                    <a href="mailto:contact@bloomster.com">
                      contact@bloomster.com
                    </a>
                    , or your Account if such option is made available to you.
                    We may require that you verify your identify to respond to
                    your request. If you are entitled to a substantive response,
                    we will deliver the requested information to you within 45
                    days (or will inform you that an extension of such timeframe
                    is necessary). You may make a request up to twice during a
                    12-month period. We will not discriminate against you for
                    exercising your rights pursuant to applicable state laws.
                  </li>
                </ul>
              </div>
              <div className="termslist mt-3 pt-3" id="sectiontwenty">
                <h3>
                  20. <strong>Comments and Concerns</strong>.{" "}
                </h3>
                <p>
                  We welcome our Users to reach out with any questions on this
                  policy by using the following contact email:{" "}
                  <a href="mailto:contact@bloomster.com">
                    contact@bloomster.com
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hubspotFooter">
        <div className="container-fluid footer-dnd-area2 footer__container content-wrapper">
          <div className="hubPrimaryFooter">
            <div className="flex align-items-start">
              <div className="logoFooter">
                <img src={image.vicky_logo_LP} />
                <div className="seocialiconlist">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/bloomsterlearning"
                        target="_blank"
                      >
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/bloomsterlearning"
                        target="_blank"
                      >
                        <i class="fa-brands fa-square-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/bloomsterlearning"
                        target="_blank"
                      >
                        <i class="fa-brands fa-linkedin"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FooterAddInfo">
                <h3>
                  <NavLink to={PATHS.USERSIGNUP} className="p-0">
                    {" "}
                    Sign Up for Bloomster today!
                  </NavLink>
                </h3>
                <p>
                  411 S Melville Ave.
                  <br />
                  Tampa, Florida 33606
                  <br />
                  USA
                  <br />
                  <a href="mailto:">contact@bloomster.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="hubsecondryFoorer flex">
            <div className="hubSeccopyright">
              <p>© 2024 Balanced Tech Inc. All Rights Reserved.</p>
            </div>

            <div className="ourpolicyandters">
              <ul>
                <li>
                  <a
                    href={`https://bloomster.com/termsandprivacypolicy`}
                    target="_blank"
                  >
                    Terms of Use{" "}
                  </a>{" "}
                  |{" "}
                </li>{" "}
                <li>
                  <a
                    href={`https://bloomster.com/termsandprivacypolicy`}
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;

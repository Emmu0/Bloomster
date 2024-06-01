import React from "react";
import { PATHS } from "../../utils";
import WebLayout from "../layout/WebLayout";
import { SITENAME, SITEURL } from "../../utils/Messages";

const Useraggrement = () => {
  return (
    <WebLayout className="outerPagesHeader">
      <section>
        <div className="container">
          <div className="termscondition mt-5 pt-5">
            <h4 className="mt-2 pt-2  text-center">
              Terms of <span>Use</span>
            </h4>
            <h5 className="pb-3 text-center">Effective March 15, 2023</h5>
            <p>
              The below terms and conditions govern your access to and use of{" "}
              <a href={process.env.REACT_APP_SITEURL} target="_blank">
                {SITEURL.urlName}
              </a>{" "}
              and related applications, including any content, functionality,
              and services offered on or through the same (collectively, and
              with any replacements thereof, the “Website”). The Website, along
              with any services and functionalities offered through the Website
              may collectively be referred to as “Services” herein.{" "}
            </p>

            <p>
              <strong>USERS UNDER 13:</strong> If you are under the age of 13
              and located within the United States, you may not use the Website
              unless your parent or other legal guardian consents to your use of
              the Website. Outside of the United States, the Website is offered
              and available only to users who are at least 18 years old, or the
              legal age of majority under applicable law, and you agree not to
              use or access the Website if you are not of such legal age of
              majority.
            </p>

            <p>
              Within this policy, “you” or “User” means a user of the Website,
              and “we”, “us”, “our” or “Balanced Tech” refers to Balanced Tech
              Inc., a Delaware corporation.{" "}
            </p>

            <p>
              By using the Website, or by clicking to accept or agree to the
              Terms of Use when this option is made available to you, you accept
              and agree to be bound by and to abide by these Terms of Use and
              our Privacy Policy, found at{" "}
              <a
                target="_blank"
                href={`https://bloomster.com/termsandprivacypolicy`}
              >
                https://www.{SITEURL.urlName}/termsandprivacypolicy
              </a>
              , incorporated herein by reference. If you do not want to agree to
              these Terms of Use or the Privacy Policy at any time, you must not
              continue to access or use the Website.{" "}
            </p>
          </div>
          <div className="termscondition mt-2 pt-2">
            <ul>
              <li>
                1. <strong>General.</strong> We may revise and update this
                policy from time to time in our sole discretion. All changes are
                effective immediately when we post them, or if required by law,
                when we provide notice to you of such changes. Such changes
                apply to all access to and use of the Website thereafter, and
                your continued use of the Website means that you accept and
                agree to the changes. You are also subject to any additional
                posted policies and rules related to specific Services and
                features which may be presented to you at the time of accessing
                and/or using such Services or features. All such policies are
                incorporated by reference into this policy and made part of this
                policy.
              </li>
              <li>
                2. <strong>Provision of Services.</strong> We reserve the right
                to withdraw or amend the Website in our sole discretion without
                notice. We will not be liable if for any reason all or any part
                of the Website is unavailable at any time or for any period.
                From time to time, we may restrict access to some parts of the
                Website, or the entire Website, to some or all Users. We will
                send any notices and messages to you via the email address you
                provide to us when creating an Account on the Website, and you
                agree to keep your contact information up to date.
              </li>
              <li>
                3. <strong>Your Account. </strong>
                <ul>
                  <li>
                    <strong>3.1.</strong> Users are required to make an account
                    to use certain Services we offer (each, an “Account”).
                    Without an Account, you may be able to view our homepage and
                    general information about our Website and Services.
                  </li>
                  <li>
                    <strong>3.2.</strong> Users of the Website include both a
                    parent/guardian who creates an Account for purposes of
                    granting a student (including a child) access to the
                    educational content on the Website, and also includes Users
                    who create an Account for personal use of the Services.
                  </li>
                  <li>
                    <strong>3.3.</strong> All Users must provide true, accurate,
                    current, and complete information when creating an Account,
                    and all Users agree to promptly update Account information
                    in the event it changes. You are solely responsible for
                    maintaining the confidentiality of any password you choose;
                    you should not provide your Account information to any other
                    person. Your Account may be used only by you personally, or
                    a child of whom you are the parent or legal guardian; in the
                    latter case, you are responsible for monitoring your child’s
                    use of the Website. You are fully responsible for all
                    activities that occur under Account. You agree to
                    immediately notify us of any unauthorized use of your
                    password or Account or any other breach of security, and you
                    agree to log out of your Account at the end of each session.
                    We are not liable for any loss or damage arising from your
                    failure to comply with this section. You may terminate your
                    use of the Services at any time by logging into your Account
                    and terminating your Account when such option is made
                    available to you; otherwise, you may contact us at the email
                    address set forth in this policy to terminate your Account.
                  </li>
                </ul>
              </li>
              <li>
                4. <strong>Use of Website Content. </strong>
                <ul>
                  <li>
                    <strong>4.1.</strong> Certain content on the Website may be
                    considered sensitive by certain individuals. Certain content
                    may in certain circumstances be contrary to the personal
                    views (whether political, religious, or other societal
                    views) of a User.
                    <strong>
                      Parents and guardians who create an Account on behalf of
                      their child bear the sole responsibility of reviewing all
                      educational content, including all learning modules, in
                      advance of allowing your child to access such modules
                    </strong>
                    . We recommend that you accompany a child through the
                    learning modules. You hereby waive any claims against
                    Balanced Tech related to, and hold Balanced Tech harmless
                    from, any claims, losses, or other liability related to the
                    content of the modules. You agree not to publicly make any
                    disparaging or derogatory statements, either orally or in
                    writing, regarding the specific content of the educational
                    classes or modules, where disparaging or derogatory
                    statements include, but are not limited to, any statement
                    that may reasonably be considered to be detrimental to
                    Balanced Tech. If you do not agree at any point with the
                    views or educational materials presented on the Website,
                    your option and sole remedy is to cease use of the Website
                    and terminate your Account.
                  </li>
                  <li>
                    <strong> 4.2. </strong> You agree and acknowledge that the
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
              </li>
              <li>
                5. <strong>Use Restrictions.</strong> All Users agree to comply
                with all applicable local, state, national, and international
                laws and regulations in your use of the Website. Users shall not
                (i) use the Services in any manner that damages, disables,
                overburdens, or impairs any of Balanced Tech’s websites or the
                Services or interferes with any other party's use of the
                Services, or in any other manner that is unlawful or prohibited
                by this policy; (ii) create an Account for anyone other than
                yourself or use a false identity to obtain an Account, log into
                an account on the Services other than your Account, or give or
                allow anyone else access to your Account, except as specifically
                contemplated herein; (iii) Access data of a third party through
                the Services not intended for you, or attempt to gain
                unauthorized access to the Services; or (iv) lease, distribute,
                license, transfer, sell, or otherwise commercially exploit the
                Services or your access to the same.
              </li>
              <li>
                6. <strong>Payment and Billing. </strong>
                <ul>
                  <li>
                    <strong>6.1.</strong> Certain Services are made available to
                    Users free of charge. However, if you access any Services
                    for which require payment, as presented to you prior to the
                    use of such Services, you agree to pay Balanced Tech the
                    amounts presented to you should you decide to access such
                    Services. All payments for the Services are final and
                    non-refundable. If you agree to a recurring payment, and
                    save a payment method to your Account, you hereby consent to
                    Balanced Tech charging that payment method without any
                    further consent from you, pursuant to the terms of the
                    recurring payment as presented to you (unless and until you
                    terminate your Account). We may use a third-party payment
                    processor for payments. Such payment processor may have
                    separate terms of use or service, and such third-party
                    payment processor’s terms of use are as set forth by such
                    third-party on their platforms.
                  </li>
                  <li>
                    <strong>6.2.</strong> Any fees we may charge are exclusive
                    of all taxes, levies, or duties imposed by taxing
                    authorities, and you shall be responsible for payment of all
                    such taxes, levies, or duties, excluding only United States
                    (federal or state). If we are obliged to collect or pay
                    taxes, the taxes will be invoiced to you. If you believe a
                    charge is incorrect, you must contact us in writing within
                    30 days of the charge date containing the amount in question
                    to be eligible to receive an adjustment or credit. You are
                    responsible to reimburse us for any costs of collection of
                    amounts due hereunder, including attorney’s fees and court
                    costs.
                  </li>
                  <li>
                    <strong>6.3.</strong> All references to a “chargeback” refer
                    to a reversal of a credit/debit card charge. There is no
                    reason for a chargeback to ever be filed. If you feel that
                    you have been incorrectly charged, or that your credit/debit
                    card was used fraudulently in connection with the Services,
                    reach out to us immediately. You agree to repay Balanced
                    Tech all costs and expenses incurred as a result of any
                    chargeback you file.
                  </li>
                </ul>
              </li>
              <li>
                7. <strong>Intellectual Property. </strong>
                <ul>
                  <li>
                    <strong>7.1.</strong> As between Balanced Tech and you,
                    Balanced Tech owns all of the intellectual property rights
                    related to and incorporated within the Website, including
                    but not limited to, (i) any software code incorporated
                    therein, and (ii) any materials presented in any educational
                    modules, including text, pictures, videos, and related
                    content. You agree you will not try to discover any software
                    code of the Website, or reverse engineer any portion of the
                    Website. You will not attempt to copy or make derivatives of
                    the content presented in any learning module, whether for
                    your own use outside of the Website or to provide the same
                    to others. You agree that all of Balanced Tech’s trademarks,
                    trade names, service marks, trade dress, and other Balanced
                    Tech logos and brand features, and product and service
                    names, are the property of Balanced Tech (the "Provider
                    Marks"). You agree not to display or use in any manner the
                    Provider Marks without prior written consent from Provider.
                  </li>
                  <li>
                    <strong>7.2.</strong> You agree that if you provide to us
                    any comments, suggested revisions, additions, ideas,
                    developments, or concepts, such feedback shall be the sole
                    and exclusive property of Balanced Tech, and you will have
                    ‎no right, title or interest of any kind or nature therein
                    or thereto, or in and to any ‎results and proceeds
                    therefrom. Except as expressly permitted by applicable law
                    or as authorized by us, you agree not to modify, rent,
                    lease, loan, sell, distribute, transmit, broadcast, publicly
                    perform or create derivative works based on the Services,
                    such content or the Website, in whole or in part. You agree
                    not to access the Services by any means other than through
                    the interface that is provided by Balanced Tech for use in
                    accessing the Services. All rights not expressly granted
                    herein are fully reserved by Balanced Tech.
                  </li>
                </ul>
              </li>
              <li>
                8. <strong>Suspension and Termination.</strong> You agree that
                Balanced Tech may, without prior notice, immediately terminate,
                suspend, or otherwise limit your access to or use of the
                Services, by terminating your Account or otherwise. Cause shall
                include, but not be limited to: (a) breaches or violations of
                this policy or other guidelines which may be provided to you
                from time to time; (b) requests by law enforcement or other
                government agencies; (c) discontinuance or material modification
                to the Services; (d) unexpected technical or security issues or
                problems; (e) extended periods of inactivity; (f) engagement by
                you in fraudulent or illegal activities; and/or, (g) nonpayment
                of any fees owed by you in connection with the Services.
                Further, you agree that all terminations, limitations of access
                and suspensions for cause shall be made in Balanced Tech’s sole
                discretion and that Balanced Tech will not be liable to you or
                any third party for any termination of your Account or use of
                the Services. Upon any such termination, cancellation, and/or
                suspension, you are still responsible for payment of all amounts
                accrued and owed by you.
              </li>
              <li>
                9. <strong>Third-Party Sites.</strong> If you are transferred to
                or navigate to third party sites through links or frames
                provided through the Services, you are cautioned to read such
                sites' terms and conditions and privacy policies before using
                such sites in order to be aware of their terms and conditions.
                You acknowledge that Balanced Tech is not responsible for the
                accuracy, copyright compliance, legality, decency, or any other
                aspect of the contents, products, services, or any transmissions
                received through such sites.
              </li>
              <li>
                10. <strong>Disclaimer.</strong> Balanced tech makes no
                representations or warranties about the services, the website,
                the suitability of the information contained on or received
                through use of the services or website, or any results received
                through the services. The services are provided "as is" without
                warranty of any kind, whether express, implied, statutory, or
                otherwise. Balanced tech specifically disclaims all implied
                warranties of merchantability, fitness for a particular purpose,
                title, and non-infringement, and all warranties arising from
                course of dealing, usage, or trade practice. Balanced tech makes
                no warranty of any kind that the website, provider marks, or
                other intellectual property of balanced tech, or any products or
                results of the use thereof, will: meet customer’s or any other
                person’s requirements; operate without interruption or be
                available at any particular time or location; achieve any
                intended result; be compatible or work with any software, system
                or other services; or be secure, accurate, reliable, complete,
                free of harmful code, or error free. Balanced tech further makes
                no warranty of any kind that any defects or errors of the
                platform will be corrected, or that the contents or any
                information received through the services are free of viruses or
                other harmful components.
              </li>
              <li>
                11. <strong>Limitation of Liability.</strong> Under no
                circumstances will balanced tech, including its affiliates,
                subsidiaries, parents, successors, assigns, officers, directors,
                employees, agents, or shareholders, be liable for any
                incidental, special, exemplary, punitive, consequential, or
                indirect damages (including, but not limited to, lost profits,
                loss of business, data deletion, data corruption, or loss of
                data, loss of programs, failure to store any information or
                other content maintained or transmitted by the services, service
                interruptions, interruption of business, or for the cost of
                procurement of substitute services) arising out of or in
                connection with the use of the services, however arising. Should
                balanced tech be found liable to any user under any claim or
                cause of action, each user agrees that in any case, the maximum
                amount of damages that balanced tech may be liable for arising
                from this agreement or the use of the website or services will
                not exceed the greater of $100.00 or total amount paid to
                balanced tech during the 12 month period preceding the event
                giving rise to the claim. Because some jurisdictions do not
                allow the exclusion or limitation of incidental or consequential
                damages, liability in such jurisdictions shall be limited to the
                maximum extent permitted by law of such jurisdiction.
              </li>
              <li>
                12. <strong>Indemnification.</strong> You agree to defend,
                indemnify, and hold harmless Balanced Tech, along with its
                affiliates, subsidiaries, parents, successors, assigns,
                officers, directors, employees, agents, and shareholders, from
                all liabilities, claims, demands, and expenses, including
                attorney's fees, made by any third party that arise from your
                use of the Services, your violation of this policy or the
                Privacy Policy, or your violation of any rights of another
                party. Balanced Tech reserves the right, at your expense, to
                assume the exclusive defense and control of any matter otherwise
                subject to indemnification by you, in which event you shall
                cooperate with Balanced Tech in asserting any available
                defenses.
              </li>
              <li>
                13. <strong>Disputes; Governing Law.</strong> You should read
                this section carefully as it may significantly affect your legal
                rights.
                <ul>
                  <li>
                    <strong>13.1.</strong> Users agree that any claims will be
                    adjudicated on an individual basis, and all users waive the
                    right to participate in a class, collective, or other joint
                    action with as against balanced tech arising from the use of
                    the website or services provided.
                  </li>
                  <li>
                    <strong>13.2.</strong> Any cause of action or claim you may
                    have arising out of or relating to these terms of use or the
                    website must be commenced within one (1) year after the
                    cause of action accrues; otherwise, such cause of action or
                    claim is permanently barred.
                  </li>
                  <li>
                    <strong>13.3.</strong> This Agreement shall be governed by,
                    construed, and enforced in accordance with the laws of the
                    State of Indiana without giving effect to the conflicts or
                    choice of law provisions thereof. Any action or proceeding
                    seeking to enforce any provision of, or based upon any right
                    arising out of, this Agreement shall be brought in any court
                    of appropriate jurisdiction in Marion County, Indiana.
                  </li>
                </ul>
              </li>
              <li>
                14. <strong>Entire Agreement.</strong> This Terms of Use, the
                Privacy Policy, and any terms referenced within such policies as
                being incorporated into the policies, and any other terms you
                may agree to as you navigate the Website, contain the entire
                agreement between Balanced Tech and you as a User of the
                Services. No other communications, whether direct or indirect,
                between you and Balanced Tech will, or are intended to, alter or
                supersede any provision of this Terms of Use or Privacy Policy.
              </li>
              <li>
                15. <strong>Waiver and Severability.</strong> No waiver by
                Balanced Tech of any term or condition set out in these Terms of
                Use shall be deemed a further or continuing waiver of such term
                or condition or a waiver of any other term or condition, and any
                failure of Balanced Tech to assert a right or provision under
                these Terms of Use shall not constitute a waiver of such right
                or provision. If any provision of these Terms of Use is held by
                a court or other tribunal of competent jurisdiction to be
                invalid, illegal, or unenforceable for any reason, such
                provision shall be eliminated or limited to the minimum extent
                such that the remaining provisions of the Terms of Use will
                continue in full force and effect.
              </li>
              <li className="mb-5">
                16. <strong>Comments and Concerns.</strong> We welcome our Users
                to reach out with any questions on this policy by using the
                following contact email:{" "}
                <a href="mailto:contact@bloomster.com">
                  contact@{SITEURL.urlName}
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>
    </WebLayout>
  );
};

export default Useraggrement;

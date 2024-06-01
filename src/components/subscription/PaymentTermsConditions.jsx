import React from "react";
import * as image from "../../resources/images";
const PaymentTermsConditions = ({ setAgree, agree }) => {
  return (
    <>
      <>
        <h4 className="flex mb-2">
          <span>
            <img
              src={image.termsandconditions}
              className="termsndcond mr-2"
              alt=""
            />
            Terms & Conditions (Ts&Cs)
          </span>{" "}
        </h4>
        <div className="UsedCarddtl BillingCardAdd  mb-3">
          <h5>
            <ul>
              <li>
                <h4>1. Free Trial Period</h4>
                <p>
                  <span>a.</span> The duration of the free trial period is
                  specified during the sign-up process.
                </p>
                <p>
                  <span>b.</span> The free trial ends when either (a) the free
                  trial period concludes or (b) you purchase a subscription,
                  whichever comes first.
                </p>
              </li>
              <li>
                <h4>2. Automatic Renewal</h4>
                <p>
                  <span>a.</span> Your subscription will automatically renew at
                  the end of each billing period (monthly or annually).
                </p>
                <p>
                  <span>b.</span> Renewal will occur unless you cancel your
                  subscription before the renewal date.
                </p>
              </li>
              <li>
                <h4>3. Upgrades</h4>
                <p>
                  <span>a.</span> You can upgrade to a higher-tier subscription
                  plan at any time.
                </p>
                <p>
                  <span>b.</span> Upgrades may result in changes to pricing,
                  features, or terms.
                </p>
                <p>
                  <span>c.</span> We will provide information on any pricing
                  adjustments.
                </p>
              </li>
              <li>
                <h4>4. Cancellations</h4>
                <p>
                  <span>a.</span> You can cancel your subscription at any time
                  through the subscription module.
                </p>
                <p>
                  <span>b.</span> Cancellations will take effect at the end of
                  the current billing period.
                </p>
                <p>
                  <span>c.</span> No refunds will be provided for partial
                  billing periods.
                </p>
              </li>
              <li>
                <h4>5. Downgrades</h4>
                <p>
                  <span>a.</span> You can downgrade to a lower-tier subscription
                  plan at any time.
                </p>
                <p>
                  <span>b.</span> Downgrades will take effect at the end of the
                  current billing period.
                </p>
                <p>
                  <span>c.</span> Downgrades may result in changes to pricing,
                  features, or terms.
                </p>
                <p>
                  <span>d.</span> We will provide information on any pricing
                  adjustments.
                </p>
              </li>
              <li>
                <h4>6. Billing and Payments</h4>
                <p>
                  <span>a.</span> We accept payment by Visa, Mastercard,
                  American Express, Discover, JCB, Diners Club, China UnionPay,
                  and debit cards.
                </p>
                <p>
                  <span>b.</span> Billing cycles are either Monthly or Annually
                  depending on the plan you select.
                </p>
                <p>
                  <span>c.</span> Pricing details are available from the
                  subscription page.
                </p>
              </li>
              <li>
                <h4>7. Refunds and Returns</h4>
                <p>
                  <span>a.</span> We do not offer refunds or returns for
                  subscription fees.
                </p>
                <p>
                  <span>b.</span> Exceptions may apply in accordance with
                  applicable laws.
                </p>
              </li>
              <li>
                <h4>8. Termination</h4>
                <p>
                  <span>a.</span> We reserve the right to terminate your
                  subscription for violations of these Ts&Cs.
                </p>
                <p>
                  <span>b.</span> Termination may result in the loss of access
                  to the service.
                </p>
              </li>
              <li>
                <h4>9. Privacy and Data Handling of Payment Details</h4>
                <p>
                  <span>a.</span>{" "}
                  <strong>
                    {" "}
                    We use Stripe{" "}
                    <a href="https://stripe.com" target="_blank">
                      (https://stripe.com){" "}
                    </a>{" "}
                    all payment processing and do not store your credit card
                    information at any time.
                  </strong>
                </p>
                <p>
                  <span>b.</span>{" "}
                  <strong>
                    You can learn more about how Stripe handles your credit card
                    information at{" "}
                    <a
                      href="https://stripe.com/privacy"
                      target="_blank"
                      className=""
                    >
                      https://stripe.com/privacy.
                    </a>
                  </strong>
                </p>
              </li>
              <li>
                <h4>10. Changes to Ts&Cs</h4>
                <p>
                  <span>a.</span> We reserve the right to update these Ts&Cs.
                  Notice of changes will be provided.
                </p>
              </li>
              <li>
                <h4>11. Governing Law and Jurisdiction</h4>
                <p>
                  <span>a.</span> This Ts&Cs shall be governed by and construed
                  in accordance with the laws of the State of Indiana, without
                  regard to its conflict of laws principles. Any legal action or
                  proceeding arising out of or relating to this Agreement shall
                  be brought in a court of competent jurisdiction in Marion
                  County, Indiana.
                </p>
              </li>
            </ul>
            {/* <span dangerouslySetInnerHTML={{ __html: data.address }} /> */}
          </h5>
        </div>
        <div className="tacbox input-group signupType  w-100 p-0 mt-1">
          <div className="mt-0 parentdob">
            <label for="tnc" className="Selcheckbox Qwrongopton">
              <span className="QQtitle">
                {" "}
                Above Ts&Cs govern your subscription to our services. By
                subscribing, you agree to abide by these Ts&Cs.
                <span className="mandatoryField">*</span>
              </span>
              <input
                id="tnc"
                type="checkbox"
                className="mr-2 termBox"
                onClick={() => setAgree(!agree)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </>
    </>
  );
};
export default PaymentTermsConditions;

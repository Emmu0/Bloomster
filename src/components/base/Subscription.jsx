import React, { useState } from "react";
import * as image from "../../resources/images";

const Subscriptions = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#subscriptionactivity"
      >
        Launch demo modal
      </button>
      <div className="halfPagePOpup SubscriptionActivityPopup">
        <div className="modal fade" id="subscriptionactivity" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    {" "}
                    <img src={image.subscription} className="mr-2" />
                    Subscription: Select a Plan{" "}
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam flex justify-content-center ">
                <div className="bodyTitle  mb-3 w-100">
                  {/* <div className="subtitleHeadinhg flex justify-content-center">
                    <div className="bodyimagetitle flex">
                      <div className="d-flex w-100 text-center">
                        <span className="w-100 top_head">
                          <span>
                            {" "}
                            <img src={image.vicky_logo_LP} />
                          </span>
                          <h2 className="text-center">
                            {" "}
                            Vicky Subscrption{" "}
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div> */}
                  <div className="subscriptionPackage d-flex mt-3">
                    <div className="monthlyPackage Activesubcard">
                      <div className="p-3">
                        <div className="signupType m-0">
                          <label className="Selcheckbox pl-0">
                            <input
                              type="Checkbox"
                              id="Public"
                              name="Question"
                              value="PUBLIC"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <h4> Monthly subscription </h4>
                      </div>
                      <div className="priceList">
                        <ul>
                          <li>
                            <span>$14</span> (Per Month)
                          </li>
                          <li>
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#Checkoutactivity"
                              className="subscribebtn d-block ml-auto mt-3"
                            >
                              Select{" "}
                              <i className="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="yearlyPackage">
                      <div className="p-3">
                        <div className="signupType m-0">
                          <label className="Selcheckbox pl-0">
                            <input
                              type="Checkbox"
                              id="Public"
                              name="Question"
                              value="PUBLIC"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <h4> Yearly subscription </h4>
                      </div>

                      <div className="priceList">
                        <ul>
                          <li>
                            <span>150$ </span> (Per Year)
                          </li>
                          <li>
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target="#Checkoutactivity"
                              className="subscribebtn d-block ml-auto mt-3"
                            >
                              Select{" "}
                              <i className="fa-solid fa-arrow-right ml-2"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 ml-auto"
                  >
                    <i className="fa-solid fa-arrow-right mr-2"></i> Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout half screen */}
      <div className="halfPagePOpup SubscriptionActivityPopup">
        <div className="modal fade" id="Checkoutactivity" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    <img src={image.subscription} className="mr-2" />
                    Subscription: Billing Details{" "}
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam">
                {/* <div className="bodyTitle  mb-3">
                  <div className="subtitleHeadinhg flex justify-content-center">
                    <div className="bodyimagetitle flex">
                      <div className="d-flex w-100 text-center">
                        <span className="w-100 top_head mb-0">
                          <h2 className="text-center">Billing Details </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="checkoutProcess d-flex">
                  <div className="billingAddress">
                    <h4>
                      <i className="fa-solid fa-money-check-pen mr-2"></i>
                      Payment Method{" "}
                    </h4>
                    <p className="pb-2">Please fill the required information</p>

                    <div className="w-100 d-flex mt-3 mb-2">
                      <div className="cardStyle">
                        <label className="Selcheckbox">
                          Credit Card <img src={image.credit_card} />
                          <input
                            type="radio"
                            id="Public"
                            name="Question"
                            value="PUBLIC"
                          ></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="cardStyle">
                        <label className="Selcheckbox">
                          Debit Card <img src={image.credit_card} />
                          <input
                            type="radio"
                            id="Public"
                            name="Question"
                            value="PUBLIC"
                          ></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="cardStyle">
                        <label className="Selcheckbox">
                          Paypal or UPI <img src={image.paypal} />
                          <input
                            type="radio"
                            id="Public"
                            name="Question"
                            value="PUBLIC"
                          ></input>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>

                    <form>
                      <div className="input-group">
                        <label>Card Holder Name</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name..."
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <label>
                          Card Number<span className="mandatoryField">*</span>
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name..."
                          />
                        </div>
                      </div>
                      <div className="input-group d-flex">
                        <div className="w-50 pr-3">
                          <label>
                            Expiry Date<span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group d-flex">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/YY"
                            />
                          </div>
                        </div>

                        <div className="w-50">
                          <label>
                            CVV<span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <input
                              className="form-control"
                              placeholder="CVV"
                              type="password"
                              pattern="[0-9]*"
                              inputmode="numeric"
                            />
                          </div>
                        </div>
                        <div className="form-title margintitle w-100">
                          <h3 className="flex justify-content-between">
                            <span>
                              <i className="fa-light fa-address-book mr-2"></i>
                              Billing Address{" "}
                            </span>

                            <>
                              <div className="signupType">
                                <label className="Selcheckbox">
                                  Same as Personal
                                  <input type="checkbox" />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </>
                          </h3>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 pb-2 pt-1">
                <div className="form-group BDsubmitbutton d-flex mt-2">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#PreviwAct"
                        className="btn-blue btn-login d-block mb-5 ml-3"
                      >
                        Proceed to Checkout{" "}
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Preview Page half screen */}
      <div className="halfPagePOpup SubscriptionActivityPopup">
        <div className="modal fade" id="PreviwAct" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading">
                  <h2>
                    <img src={image.subscription} className="mr-2" />
                    Subscription: Summary{" "}
                  </h2>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
              </div>
              <div className="modal-body Subject_Curriculam">
                <h4 className="flex mb-2">
                  <span>
                    <i className="fa-regular fa-bell mr-2"></i>Subscription
                  </span>{" "}
                  <span>
                    <i className="fa-light fa-pencil"></i>
                  </span>
                </h4>
                <div className="SUbscriptionPreview mb-3">
                  <h5>
                    Subscription: <span>Monthly</span>
                  </h5>
                  <h5>
                    Price: <span>15$</span>
                  </h5>
                </div>
                <h4 className="flex mb-2">
                  <span>
                    <i className="fa-regular fa-credit-card mr-2"></i>Card
                    Details
                  </span>{" "}
                  <span>
                    <i className="fa-light fa-pencil"></i>
                  </span>
                </h4>
                <div className="UsedCarddtl mb-3">
                  <h5>
                    Card Holder Name : <span>Ankit Agnihotri</span>
                  </h5>
                  <h5>
                    Card Number : <span>**********32</span>
                  </h5>
                  <h5>
                    {" "}
                    Expiry Date: <span>12/25</span>
                  </h5>
                </div>
                <h4 className="flex mb-2">
                  <span>
                    <i className="fa-regular fa-location-dot mr-2"></i>Address
                  </span>{" "}
                  <span>
                    <i className="fa-light fa-pencil"></i>
                  </span>
                </h4>
                <div className="BillingCardAdd mb-3">
                  <h5>
                    <span>
                      C5 Buliding no 10 Near Maruti Enclave Manahattan AB2345
                      U.S.A
                    </span>
                  </h5>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3 pb-2 pt-1">
                <div className="form-group BDsubmitbutton d-flex mt-2">
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#thanksactivity"
                        className="btn-blue btn-login d-block mb-5 ml-3"
                      >
                        Proceed to Checkout{" "}
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank you for subscrption half screen */}

      <div className="modal fade" id="thanksactivity" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content courseInformation">
            <div className="modal-header p-0">
              <div className="heading w-100">
                <h2>
                  Subscription{" "}
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </h2>
              </div>
            </div>
            <div className="modal-body Subject_Curriculam d-flex justify-content-center align-items-center  ">
              <div className="bodyTitle  mb-3">
                <div className="subtitleHeadinhg flex justify-content-center">
                  <div className="bodyimagetitle flex">
                    <div className="d-flex w-100 text-center">
                      <span className="w-100 top_head mb-0">
                        <span>
                          {" "}
                          <img src={image.vicky_logo_LP} />
                        </span>
                        <h2 className="text-center">
                          {" "}
                          Thank you for Subscription{" "}
                        </h2>
                        <p>
                          Now your Monthly subscrption is activated successfully{" "}
                        </p>
                        <button
                          type="button"
                          className="btn-blue btn-login d-block mt-3 m-auto"
                        >
                          <i className="fa-regular fa-house mr-2"></i> Go to
                          Home
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error for subscrption half screen */}

      <div className="modal fade" id="erroractivity" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content courseInformation">
            <div className="modal-header p-0">
              <div className="heading w-100">
                <h2>
                  Subscription: Error{" "}
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </h2>
              </div>
            </div>
            <div className="modal-body Subject_Curriculam d-flex justify-content-center align-items-center  ">
              <div className="bodyTitle  mb-3">
                <div className="subtitleHeadinhg flex justify-content-center">
                  <div className="bodyimagetitle flex">
                    <div className="d-flex w-100 text-center">
                      <span className="w-100 top_head mb-0">
                        <span>
                          {" "}
                          <img src={image.vicky_logo_LP} />
                        </span>
                        <h2 className="text-center">
                          {" "}
                          Please Check your Details, Something went wrong{" "}
                        </h2>
                        <p>Some Fields are incorrect </p>
                        <button
                          type="button"
                          className="btn-blue btn-login d-block mt-3 m-auto w-auto"
                        >
                          <i className="fa-regular fa-house mr-2"></i> Go to
                          Home
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

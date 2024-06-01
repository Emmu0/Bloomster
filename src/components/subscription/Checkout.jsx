import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../resources/images";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { billingPlan, getResetCard, subscriptionPageNode } from "../../redux/actions/index";
import { useForm } from "../../utils/Packages";
import AddressForm from "../../components/controls/AddressForm";
import Preview from "./Preview";
import { useEffect } from "react";
import { MSG } from "../../utils/Messages";
import { CHAR_REGEX } from "../../utils/Regex";
import { getCapitalized, getToken } from "../../utils/helper";
import { paymentUpdateInfo } from "../../redux/actions/APIs";
import axios from "axios";
import { API_BASE_PATH } from "../../utils";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Checkout = ({
  paymentData,
  getSelectedUser,
  close,
  closeSelect,
  handleCloseSelect,
  open,
  setOpen,
  subscribeData,
  existingSubscription,
  learnerId,
  showFormType,
  pymentEditInfo,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const params = useParams();
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkbox1, setcheckBox1] = useState(false);
  const [checkbox2, setcheckBox2] = useState(false);
  const [cvvCheck, setcvvCheck] = useState(false);

  const [cardNumberErr, setCardNumber] = useState(
    !existingSubscription?.subscription?.cardNumber
  );
  const [expiryErr, setExpiry] = useState(
    !existingSubscription?.subscription?.cardNumber
  );

  const [cvcErr, setCvc] = useState();

  const [getAddressData, setGetAddressData] = useState("");
  const [showForm, setShowForm] = useState(showFormType ? true : false);

  const {
    loggedInUser,
    billingDetails,
    clientSecObj,
    defaultChildData,
    response,
    paymentUpdateObj,
    resetCardResponse,
  } = useSelector((state) => state.collections);

  useEffect(() => {
    if (resetCardResponse) {
      resetSubForm(true);
      dispatch(getResetCard(false));
    }
  }, [resetCardResponse]);
  useEffect(() => {
    if (!open) {
      setcvvCheck(false);
    }
  }, [open]);
  const stripe = useStripe();
  const elements = useElements();

  const handleOpen = () => {
    setOpen(false);
    setcheckBox2(false);
    resetField("firstName");
  };

  const CARD_ELEMENT_OPTIONS = {
    placeholder: "CVV/CVC",
  };

  const card = elements?.getElement(
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
  );

  const cvcElement = elements?.getElement(CardCvcElement);

  const [expYear, setExpYear] = useState("");

  useEffect(() => {
    if (
      existingSubscription?.subscription?.isActive &&
      existingSubscription?.subscription?.cardNumber
    ) {
      let year = existingSubscription?.subscription?.expYear;
      const strId = String(year);
      let expireYear = strId?.substring(strId.length - 2);
      setExpYear(Number(expireYear));
    }
  }, [existingSubscription, expYear]);

  useEffect(() => {
    addDetails();
  }, [existingSubscription, expYear]);

  const addDetails = () => {
    if (
      existingSubscription?.subscription?.isActive &&
      existingSubscription?.subscription?.cardNumber
    ) {
      setValue(
        "cardHolderName",
        getCapitalized(existingSubscription?.subscription?.cardHolderName)
      );
      setValue(
        "cardNumber",
        "************" + existingSubscription?.subscription?.cardNumber
      );
      setValue(
        "expirydate",
        existingSubscription?.subscription?.expMonth + "/" + expYear
      );
      setValue("cvvnumber", "***");
    }
  };

  useEffect(() => {
    if (!billingDetails?.id) {
      dispatch(billingPlan());
    }
  }, []);
  const [clientSec, setClientSec] = useState();

  useEffect(() => {
    if (clientSecObj) {
      setClientSec({
        secret: clientSecObj?.records[0]?.client_secret,
        pm: clientSecObj?.records[0]?.paymentMethodId,
        pI: clientSecObj?.records[0]?.id,
      });
    }
  }, [clientSecObj]);

  const _onSubmit = async (values, event) => {
    if (!cvvCheck) {
      setCvc(MSG.CVVREQ);
      return false;
    }
    setIsSubmitClicked(true);

    event.preventDefault();
    if (showForm || !loggedInUser?.subscription?.cardNumber) {
      if (card) {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: card,
          billing_details: {
            name: values.firstName,
            address: {
              city: values?.city,
              country: "US",
              line1: values?.address1,
              line2: values?.address2,
              postal_code: values?.zip,
              state: values?.state,
            },
          },
        });
        if (error) {
          if (error?.code === "card_declined") {
            setCardNumber(error.message);
          } else if (error?.code === "incorrect_cvc") {
            setCardNumber(error.message);
          }
          return false;
        }
        if (paymentMethod !== undefined && paymentMethod.id !== undefined) {
          if (pymentEditInfo === "pymentEdit") {
            let data = {
              paymentId: paymentMethod?.id,
              learnerId: params?.id ? params?.id : defaultChildData?.id,

              line1: paymentMethod?.billing_details?.address?.line1,
              line2: paymentMethod?.billing_details?.address?.line2,
              city: paymentMethod?.billing_details?.address?.city,
              state: paymentMethod?.billing_details?.address?.state,

              country: "USA",
              postal_code: paymentMethod?.billing_details?.address?.postal_code,
              isCardModified: true,
              subscriptionStripeId:
                existingSubscription?.subscription?.stripeId,
              cardProvider: paymentMethod?.billing_details?.name,
              cardNumber: paymentMethod?.card?.last4,
              tnc: true,
            };

            dispatch(paymentUpdateInfo(loggedInUser?.id, data));
          } else {
            dispatch(billingPlan(paymentMethod));
            setOpen(true);
          }
        }

        if (!stripe || !elements) {
          return;
        }
      } else {
        setOpen(true);
      }
    } else {
      const accessToken = getToken();
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json", // Make sure to set the content type
      };

      const requestBody = {
        amount: paymentData?.selectedPlan?.amount * 1000,
        currency: paymentData.selectedPlan.currency,
        complete: false,
        elementType: "cardCvc",
        empty: false,
      };
      const response = await axios.post(
        `${API_BASE_PATH}/stripe/checkcvc/${loggedInUser?.id}`,
        requestBody,
        {
          headers: headers, // Pass the headers with the request
        }
      );

      const { client_secret, paymentMethodId, id } =
        response && response?.data?.records[0];

      if (paymentMethodId !== undefined && paymentMethodId !== undefined) {
        response.data.records[0].cvcElement = cvcElement;

        dispatch(billingPlan(response.data.records[0]));
        setOpen(true);
      }
    }
  };

  const handleChange = (e, type) => {
    if (type === "number" && e.elementType === "cardNumber") {
      if (e?.complete) {
        setCardNumber(undefined);
      } else if (e?.empty) {
        setCardNumber(MSG.CARDREQ);
      } else {
        setCardNumber(MSG.VALIDCARD);
      }
    }

    if (type === "expiry") {
      if (e?.complete) {
        setExpiry(undefined);
      } else if (e?.empty) {
        setExpiry(MSG.EXPDATEREQ);
      } else if (!e?.empty && !e?.complete) {
        setExpiry(MSG.VALIDEXP);
      } else {
        setExpiry(MSG.EXPDATEREQ);
      }
    }
    if (type === "number" && e.elementType === "cardCvc") {
      setcvvCheck(e.complete);
      if (e?.complete) {
        setCvc(undefined);
      } else if (e?.empty && cvvCheck === false) {
        setCvc(MSG.CVVREQ);
      } else if (!e?.empty && !e?.complete) {
        setCvc(MSG.VALIDCVV);
      }
      // else {
      //   setCvc(MSG.CVVREQ);
      // }
    }
  };

  useEffect(() => {
    setGetAddressData({
      address1: loggedInUser.subscription?.cardNumber
        ? loggedInUser.subscription?.billingAddress1
        : billingDetails?.billing_details?.address?.line1,
      address2: loggedInUser.subscription?.cardNumber
        ? loggedInUser.subscription?.billingAddress2
        : billingDetails?.billing_details?.address?.line2,
      city: loggedInUser.subscription?.cardNumber
        ? loggedInUser.subscription?.city
        : billingDetails?.billing_details?.address?.city,
      country: loggedInUser.subscription?.cardNumber
        ? loggedInUser.subscription?.country
        : billingDetails?.billing_details?.address?.country,
      state: loggedInUser.subscription?.cardNumber
        ? loggedInUser.subscription?.state
        : billingDetails?.billing_details?.address?.state,
      zip: loggedInUser.subscription?.cardNumber
        ? loggedInUser.subscription?.zipCode
        : billingDetails?.billing_details?.address?.postal_code,
      id: loggedInUser.subscription?.cardNumber
        ? existingSubscription?.subscribedUser?.id
        : billingDetails?.id,
    });
  }, [billingDetails, existingSubscription, loggedInUser]);

  const _reset = () => {
    addDetails();
    setCardNumber();
    setExpiry();
    setCvc();
    setShowForm(false);
  };

  const resetSubForm = () => {
    setCvc(undefined);
    if (cvcElement) {
      cvcElement.clear();
    }
    setShowForm(true);
    dispatch(billingPlan());
    reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0 || (open && isSubmitClicked)) {
      if (expiryErr) {
        setCardNumber(MSG.CARDREQ);
        setExpiry(MSG.EXPDATEREQ);
        setCvc(MSG.CVVREQ);
      }
    }
  }, [errors, open, expiryErr]);

  return (
    <>
      {open === false && (
        <div className="modal-content courseInformation">
          <form onSubmit={handleSubmit(_onSubmit)}>
            <div className="modal-header">
              <div className="heading p-0 border-0">
                <h2>
                  <img src={image.subscription} className="mr-2" />
                  Subscription: Payment Information{" "}
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => {
                    close();
                    dispatch(billingPlan());
                    dispatch(subscriptionPageNode());
                  }}
                >
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </div>
            </div>
            <div className="modal-body Subject_Curriculam checkoutbody">
              <div className="checkoutProcess d-flex">
                <div className="billingAddress">
                  <h4 className="flex">
                    <span>
                      <i className="fa-solid fa-money-check-pen mr-2"></i>
                      Payment Method
                    </span>
                    {loggedInUser?.subscription?.cardNumber &&
                      showForm &&
                      pymentEditInfo !== "pymentEdit" && (
                        <span
                          className="pointer  resetpointbtn border-0"
                          onClick={() => _reset()}
                        >
                          Reset Form
                        </span>
                      )}
                  </h4>

                  <p className="pb-2">Please fill the required information</p>

                  {showForm || !loggedInUser?.subscription?.cardNumber ? (
                    <>
                      <div className="input-group">
                        <label>
                          Card Holder Name
                          <span className="mandatoryField">*</span>
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            maxLength="100"
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                            placeholder="Your Name..."
                            {...register("firstName", {
                              required: {
                                value: true,
                                message: MSG.NAMEREQ,
                              },
                              pattern: {
                                value: CHAR_REGEX,
                                message: MSG.VALIDINFOREQ,
                              },
                              maxLength: {
                                value: 99,
                                message: MSG.MAX100CHREQ,
                              },
                            })}
                          />
                          {errors.firstName && (
                            <p className="text-danger">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="input-group ">
                        <label>
                          Card Number
                          <span className="mandatoryField">*</span>
                          <img src={image.credit_card} />
                        </label>
                        <div className="form-group">
                          <CardNumberElement
                            id="cc-number"
                            className={`form-control ${
                              isSubmitClicked && cardNumberErr
                                ? "is-invalid"
                                : ""
                            }`}
                            onChange={(event) => {
                              handleChange(event, "number");
                            }}
                          />

                          {(errors && isSubmitClicked) || cardNumberErr ? (
                            <p className="text-danger">{cardNumberErr}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="input-group d-flex">
                        <div className="w-50 pr-3">
                          <label>
                            Expiry Date
                            <span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <CardExpiryElement
                              id="expiry"
                              className={`form-control ${
                                isSubmitClicked && expiryErr ? "is-invalid" : ""
                              } `}
                              onChange={(event) => {
                                handleChange(event, "expiry");
                              }}
                            />

                            {(errors && isSubmitClicked) || expiryErr ? (
                              <p className="text-danger">{expiryErr}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="w-50">
                          <label>
                            CVV<span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <CardCvcElement
                              id="cvc"
                              className={`form-control ${
                                isSubmitClicked && cvcErr ? "is-invalid" : ""
                              } `}
                              onChange={(event) => {
                                handleChange(event, "number");
                              }}
                              options={CARD_ELEMENT_OPTIONS}
                            />

                            {(errors && isSubmitClicked) || cvcErr ? (
                              <p className="text-danger">{cvcErr}</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div
                          className="form-title margintitle w-100"
                          key={loggedInUser?.id}
                        >
                          <h3 className="flex justify-content-between">
                            <span>
                              <i className="fa-light fa-address-book mr-2"></i>
                              Billing Address{" "}
                            </span>
                          </h3>

                          {/* {existingSubscription && 
                           <div
                           className="flex flex-wrap align-items-baseline w-100"
                           key={existingSubscription?.subscribedUser?.id}
                         >
                           <AddressForm
                             showCheckout={true}
                             errors={errors}
                             register={register}
                             setValue={setValue}
                             addressData={existingSubscription?.subscribedUser}
                           />
                         </div>} */}

                          {billingDetails?.id === undefined &&
                          checkbox1 === false ? (
                            <div
                              className="flex flex-wrap align-items-baseline w-100"
                              key={getSelectedUser?.id}
                            >
                              <AddressForm
                                showCheckout={false}
                                errors={errors}
                                register={register}
                                setValue={setValue}
                                addressData={getSelectedUser}
                              />
                            </div>
                          ) : (
                            checkbox1 === true && (
                              <div
                                className="flex flex-wrap align-items-baseline w-100"
                                key={loggedInUser?.id}
                              >
                                <AddressForm
                                  showCheckout={true}
                                  errors={errors}
                                  register={register}
                                  setValue={setValue}
                                  addressData={loggedInUser}
                                />
                              </div>
                            )
                          )}

                          {billingDetails?.id && checkbox2 === false ? (
                            <div
                              className="flex flex-wrap align-items-baseline w-100"
                              key={getAddressData?.id}
                            >
                              {" "}
                              <AddressForm
                                showCheckout={true}
                                errors={errors}
                                register={register}
                                setValue={setValue}
                                addressData={getAddressData}
                                // showAddress={false}
                              />
                            </div>
                          ) : (
                            checkbox2 === true && (
                              <div
                                className="flex flex-wrap align-items-baseline w-100"
                                key={getAddressData?.id}
                              >
                                {" "}
                                <AddressForm
                                  showCheckout={true}
                                  errors={errors}
                                  register={register}
                                  setValue={setValue}
                                  addressData={getAddressData}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="input-group">
                        <label>
                          Card Holder Name
                          <span className="mandatoryField">*</span>
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            maxLength="100"
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                            {...register("cardHolderName")}
                            disabled
                          />
                        </div>
                        <span
                          className="UserEditForm"
                          onClick={() => {
                            resetSubForm(true);
                          }}
                        >
                          <i className="fa fa-pencil"></i>
                        </span>
                      </div>
                      <div className="input-group cardnumberedit">
                        <label>
                          Card Number
                          <span className="mandatoryField">*</span>
                          <img src={image.credit_card} />
                        </label>
                        <div className="form-group">
                          <input
                            type="text"
                            maxLength="100"
                            className={`form-control`}
                            {...register("cardNumber")}
                            disabled
                          />
                        </div>
                        <span
                          className="UserEditForm"
                          onClick={() => {
                            resetSubForm(true);
                          }}
                        >
                          <i className="fa fa-pencil"></i>
                        </span>
                      </div>
                      <div className="input-group d-flex">
                        <div className="w-50 pr-3 expirydateedit">
                          <label>
                            Expiry Date
                            <span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            <input
                              type="text"
                              maxLength="100"
                              className={`form-control`}
                              {...register("expirydate")}
                              disabled
                            />
                          </div>
                          <span
                            className="UserEditForm"
                            onClick={() => {
                              resetSubForm(true);
                            }}
                          >
                            <i className="fa fa-pencil"></i>
                          </span>
                        </div>

                        <div className="w-50">
                          <label>
                            CVV<span className="mandatoryField">*</span>
                          </label>
                          <div className="form-group">
                            {/* <CardCvcElement
                              options={
                                {
                                  // Your CardCvcElement options
                                }
                              }
                              onChange={handleChangeCVC}
                            /> */}

                            {/* <CardCvcElement
                              id="cardCvc"
                              onChange={handleChangeCVC}
                            /> */}

                            <CardCvcElement
                              id="cvc"
                              className={`form-control ${
                                isSubmitClicked && cvcErr ? "is-invalid" : ""
                              } `}
                              options={CARD_ELEMENT_OPTIONS}
                              // onChange={handleChangeCVC}
                              onChange={(event) => {
                                handleChange(event, "number");
                              }}
                            />

                            {(errors && isSubmitClicked) || cvcErr ? (
                              <p className="text-danger">{cvcErr}</p>
                            ) : (
                              ""
                            )}

                            {/* <input
                              type="text"
                              maxLength="100"
                              className={`form-control`}
                              {...register("cvvnumber")}
                              disabled
                            /> */}
                          </div>
                          {/* <span
                            className="UserEditForm"
                            onClick={() => {
                              resetSubForm();
                            }}
                          >
                            <i className="fa fa-pencil"></i>
                          </span> */}
                        </div>
                        <div
                          className="form-title margintitle w-100"
                          key={loggedInUser?.id}
                        >
                          <h3 className="flex justify-content-between">
                            <span>
                              <i className="fa-light fa-address-book mr-2"></i>
                              Billing Address{" "}
                            </span>
                          </h3>

                          <div
                            className="flex flex-wrap align-items-baseline w-100"
                            key={getAddressData?.id}
                          >
                            {" "}
                            <AddressForm
                              showCheckout={true}
                              errors={errors}
                              register={register}
                              setValue={setValue}
                              addressData={getAddressData}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="form-group BDsubmitbutton d-flex m-0">
                {pymentEditInfo === "pymentEdit" ? (
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5  cancelbutton left_auto"
                      onClick={closeSelect}
                    >
                      <i className="fa-solid fa-xmark mr-2"></i>Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-blue btn-login d-block mb-5 ml-3"
                      onClick={() => setIsSubmitClicked(true)}
                    >
                      Update
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                ) : (
                  <div className="buttonDistribotion">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 back_button"
                      onClick={closeSelect}
                    >
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </button>
                    <div className="buttonDistribotion">
                      {loading ? (
                        <button
                          className="spinner-border spinner-border-sm text-light"
                          role="status"
                        ></button>
                      ) : (
                        <button
                          type="submit"
                          className="btn-blue btn-login d-block mb-5 ml-3"
                          onClick={() => setIsSubmitClicked(true)}
                        >
                          Proceed to Checkout
                          {/* PAY ${paymentData?.amount} */}
                          <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      )}

      {open && (
        <Preview
          summaryPlanData={paymentData}
          close={close}
          handleOpen={handleOpen}
          handleCloseSelect={handleCloseSelect}
          subscribeData={subscribeData}
          selectedlearnerId={learnerId}
        />
      )}
    </>
  );
};
export default Checkout;

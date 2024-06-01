import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as image from "../../resources/images";
import {
	applyDiscount,
	renewSubscription,
	selectedPlan,
	upgradePlan,
} from "../../redux/actions/APIs";
import PaymentFailed from "./PaymentFailed";
import {
	getCapitalized,
	getLastTwoDigitsOfYear,
	getTwoDigitMonth,
} from "../../utils/helper";
import { COUNTRYDATA } from "../../utils/DataObjects";
import {
	billingPlan,
	downGradeUser,
	setPaymentFailure,
} from "../../redux/actions";
import PaymentTermsConditions from "./PaymentTermsConditions";
import ThanksPopUp from "./ThanksPopUp";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";

const Preview = ({
	summaryPlanData,
	close,
	handleOpen,
	handleCloseSelect,
	subscribeData,
	selectedlearnerId,
	paymentInfoType,
}) => {
	const stripe = useStripe();
	const [summaryOn, setSummaryOn] = useState(false);
	const [yearLastDigit, setYearLastDigit] = useState("");
	const [monthDigit, setMonthDigit] = useState("");
	const [agree, setAgree] = useState(false);
	const params = useParams();
	const history = useHistory();

	const {
		billingDetails,
		planData,
		typeSelected,
		paymentFailure,
		loggedInUser,
		defaultChildData,
		discountErr,
		discount,
		subscribeModal,
		modalData,
	} = useSelector((state) => state.collections);

	let existingSubscription = {};
	if (loggedInUser?.subscription) {
		if (loggedInUser.children.length > 0) {
			loggedInUser.children.map((val, ky) => {
				if (val?.isSubscriber && val.subscription) {
					existingSubscription = val;
					existingSubscription.subscribedUser = val;
					return false;
				}
			});
		}
	}

	let selectedPlanObj = [];
	planData &&
		planData?.records.map((vl, ky) => {
			if (vl?.id === summaryPlanData?.productId) {
				selectedPlanObj = vl;
			}
		});

	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const handleThanksButton = async () => {
		setLoading(true);
		if (
			existingSubscription &&
			existingSubscription?.id &&
			existingSubscription?.subscription?.cardNumber
		) {
			if (!billingDetails) {
				let data = {
					subscriptionStripeId: existingSubscription?.subscription?.stripeId,
					name: existingSubscription?.subscription?.cardHolderName,
					priceId: selectedPlanObj?.stripePriceId,
					planType: selectedPlanObj?.planType,
					learnerId: existingSubscription.subscribedUser?.id,
					cardProvider: existingSubscription?.subscription?.cardProvider,
					cardNumber: existingSubscription?.subscription?.cardNumber,
					line1: existingSubscription?.subscription?.billingAddress1,
					line2: existingSubscription?.subscription?.billingAddress2,
					city: existingSubscription?.subscription?.city,
					state: existingSubscription?.subscription?.state,
					postal_code: existingSubscription?.subscription?.zipCode,
					country: "USA",
					tnc: agree,
				};

				if (summaryPlanData?.downgradeObj) {
					data.learnerId = summaryPlanData?.downgradeObj?.childId?.id;
				}
				// data.previousPlanType = summaryPlanData?.downgradeObj?.previousPlanType;
				data.previousPlanType =
					existingSubscription?.subscription?.product?.planType;

				if (summaryPlanData?.renew) {
					dispatch(
						renewSubscription(
							data,
							existingSubscription?.subscription?.stripeId
						)
					);
				} else {
					dispatch(upgradePlan(data, loggedInUser?.id));
				}
			} else {
				if (summaryPlanData?.renew) {
					let data = {
						paymentId: billingDetails.paymentMethodId,
						learnerId: params?.id ? params?.id : defaultChildData?.id,
						priceId: selectedPlanObj?.stripePriceId,
						planType: selectedPlanObj?.planType,
						line1: existingSubscription.subscription.billingAddress1,
						line2: existingSubscription.subscription.billingAddress2,
						city: existingSubscription.subscription?.city,
						state: existingSubscription.subscription?.state,
						// country: billingDetails?.billing_details?.address?.country,
						country: "USA",
						postal_code: existingSubscription.subscription?.zipCode,
						isCardModified: false,
						subscriptionStripeId: existingSubscription?.subscription?.stripeId,
						cardProvider: existingSubscription?.subscription?.cardProvider,
						cardNumber: existingSubscription?.subscription?.cardNumber,
						name: existingSubscription?.subscription?.cardHolderName,
						tnc: agree,
					};

					if (summaryPlanData?.downgradeObj) {
						// data.previousPlanType =
						//   summaryPlanData?.downgradeObj?.previousPlanType;
						data.learnerId = summaryPlanData?.downgradeObj?.childId.id;
					}
					data.previousPlanType =
						existingSubscription?.subscription?.product?.planType;

					dispatch(
						renewSubscription(
							data,
							existingSubscription?.subscription?.stripeId
						)
					);
				} else {
					// Upgrade though CVV
					if (billingDetails?.client_secret) {
						try {
							const confirmedPaymentIntent1 = await stripe?.confirmCardSetup(
								billingDetails.client_secret,
								{
									payment_method: billingDetails.paymentMethodId,
									payment_method_options: {
										card: {
											cvc: billingDetails.cvcElement,
										},
									},
								}
							);

							if (confirmedPaymentIntent1?.setupIntent) {
								let data = {
									paymentId: billingDetails.paymentMethodId,
									learnerId: params?.id ? params?.id : defaultChildData?.id,
									priceId: selectedPlanObj?.stripePriceId,
									planType: selectedPlanObj?.planType,
									line1: existingSubscription.subscription.billingAddress1,
									line2: existingSubscription.subscription.billingAddress2,
									city: existingSubscription.subscription?.city,
									state: existingSubscription.subscription?.state,
									country: "USA",
									postal_code: existingSubscription.subscription?.zipCode,
									isCardModified: false,
									subscriptionStripeId:
										existingSubscription?.subscription?.stripeId,
									cardProvider:
										existingSubscription?.subscription?.cardProvider,
									cardNumber: existingSubscription?.subscription?.cardNumber,
									name: existingSubscription?.subscription?.cardHolderName,
									tnc: agree,
								};

								if (summaryPlanData?.downgradeObj) {
									// data.previousPlanType =
									//   summaryPlanData?.downgradeObj?.previousPlanType;
									data.learnerId = summaryPlanData?.downgradeObj?.childId.id;
								}
								data.previousPlanType =
									existingSubscription?.subscription?.product?.planType;

								dispatch(upgradePlan(data, loggedInUser?.id));
							} else {
								dispatch(setPaymentFailure("paymentFailure"));
								setLoading(false);
								return false;
							}
						} catch (e) {
							return false;
						}
					} else {
						if (billingDetails) {
							const data = {
								paymentId: billingDetails.id,
								subscriptionStripeId:
									existingSubscription.subscription.stripeId,
								priceId: selectedPlanObj.stripePriceId,
								planType: selectedPlanObj.planType,
								learnerId: loggedInUser.children[0]?.id,
								cardProvider: billingDetails?.card?.brand,
								name: billingDetails?.billing_details?.name,
								cardNumber: billingDetails?.card?.last4,
								line1: billingDetails?.billing_details?.address?.line1,
								line2: billingDetails?.billing_details?.address?.line2,
								city: billingDetails?.billing_details?.address?.city,
								state: billingDetails?.billing_details?.address?.state,
								postal_code:
									billingDetails?.billing_details?.address?.postal_code,
								country: "USA",
								tnc: agree,
								isCardModified: true,
							};

							dispatch(upgradePlan(data, loggedInUser?.id));
						}
					}
				}
			}
		} else {
			console.log("discount", discount);
			let data = {
				planData: selectedPlanObj,
				stripeObj: billingDetails,
				userId: selectedlearnerId?.id
					? selectedlearnerId?.id
					: params?.id
						? params?.id
						: defaultChildData?.id,
				tnc: agree,
				stripePromocode:
					discount &&
					discount?.records &&
					discount?.records[0]?.stripePromocode,
				promocode_id: discount && discount?.records && discount?.records[0]?.id,
			};

			dispatch(selectedPlan(data));
		}
		console.log('summaryPlanData ==> ', summaryPlanData);
		console.log('existingSubscription ==> ', existingSubscription);
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'Subscription',
			userSubscription: summaryPlanData.selectedPlan.name,
			username: existingSubscription.parentEmail
		});
	};

	useEffect(() => {
		if (modalData?.isDiscount) {
			handleDiscount("NEW25");
		}

	}, [])

	const handleDiscount = (value) => {
		let formData = {};
		if (!value) {
			let couponCode = document.getElementById("discount");
			formData = {
				productId: selectedPlanObj?.id,
				promoCode: couponCode?.value && couponCode?.value,
				userId: params?.id ? params?.id : defaultChildData?.id,
				stripePriceId: selectedPlanObj?.stripePriceId,
			};
		} else {
			formData = {
				productId: selectedPlanObj?.id,
				promoCode: value,
				userId: params?.id ? params?.id : defaultChildData?.id,
				stripePriceId: selectedPlanObj?.stripePriceId,
			};
		}
		console.log("formData : ", formData);
		dispatch(applyDiscount(formData));
		document.getElementById("promocode_id").classList.add("Apply_promocode");
	};

	let scriptString = '';
	useEffect(() => {
		if (typeSelected && typeSelected?.success) {

			setLoading(false);
			setSummaryOn(true);
			dispatch(downGradeUser());
			dispatch(applyDiscount());
			return;
			let myArray = [];
			myArray["summaryPlanData"] = JSON.stringify(summaryPlanData);
			myArray["existingSubscription"] = JSON.stringify({
				subscription: existingSubscription?.subscription?.cardNumber
			})

			localStorage.setItem("subscriptionData", JSON.stringify(
				{ myArray }
			));
			window.location.href = window.location.href + "?thankyou";
			return;
		}
	}, [typeSelected]);


	/*
	useEffect(() => {
		if (typeSelected && typeSelected?.success) {
			setLoading(false);
			// setSummaryOn(true);
			dispatch(downGradeUser());
			window.location.href = window.location.href + "?thankyou";
			console.log("isScubsCription#$%");
			localStorage.setItem("isScubsCription", JSON.stringify(
				{ summaryPlanData: summaryPlanData, existingSubscription: existingSubscription }
			));

		}
		return;
	}, [typeSelected]);
	*/

	useEffect(() => {
		if (typeSelected && typeSelected.success === false) {
			setLoading(false);
			dispatch(setPaymentFailure("paymentFailure"));
			dispatch(downGradeUser());
		}
	}, [typeSelected]);

	useEffect(() => {
		const str = billingDetails?.card?.exp_year;
		const str1 = billingDetails?.card?.exp_month;
		if (str && str1) {
			const yearLast2 = getLastTwoDigitsOfYear(str);
			setYearLastDigit(yearLast2);

			const monthDigit = getTwoDigitMonth(str1);
			setMonthDigit(monthDigit);
		}
	}, [billingDetails]);

	let data = {
		cardHolderName: "",
		cardNumber: "",
		expiryDate: "",
		yourPlan:
			getCapitalized(selectedPlanObj?.name) +
			(!["Family - Monthly", "Family - Yearly", "Family - Annually"].includes(
				selectedPlanObj?.name
			) && existingSubscription.id
				? " for " +
				getCapitalized(
					selectedlearnerId?.firstName
						? selectedlearnerId?.firstName
						: summaryPlanData?.downgradeObj?.childId?.firstName
							? summaryPlanData?.downgradeObj?.childId?.firstName
							: defaultChildData?.firstName
				)
				: ""),

		price: selectedPlanObj?.amount,
		address: {
			line1: "",
			line2: "",
			city: "",
			state: "",
			postal_code: "",
			country: "",
		},
	};

	summaryPlanData?.downgradeObj?.childId?.firstName;
	if (billingDetails?.billing_details?.name && billingDetails?.card?.last4) {
		const line1 = billingDetails?.billing_details?.address?.line1;
		const line2 = billingDetails?.billing_details?.address?.line2
			? `, ${billingDetails?.billing_details?.address?.line2}`
			: "";
		const city = billingDetails?.billing_details?.address?.city || "";
		const state = billingDetails?.billing_details?.address?.state || "";
		const postalCode =
			billingDetails?.billing_details?.address?.postal_code || "";

		const countryCode = (
			billingDetails?.billing_details?.address?.country || ""
		).toUpperCase(); // Convert input to uppercase

		const matchedCountry = COUNTRYDATA.find(
			(country) => country.code === countryCode
		);

		// const countryName = matchedCountry
		//   ? matchedCountry.name
		//   : "Unknown Country";
		const countryName = "USA";

		const country = countryName || "";

		const formattedAddress = `${line1}${line2} <br /> ${city}, ${state} ${postalCode} ${country}`;

		data.cardHolderName = billingDetails?.billing_details?.name;
		data.cardNumber = `**********${billingDetails?.card?.last4}`;
		data.expiryDate = `${monthDigit}/${yearLastDigit}`;

		data.address = formattedAddress;
	} else if (existingSubscription.subscription?.cardNumber) {
		data.cardHolderName = existingSubscription.subscription?.cardHolderName;
		data.cardNumber = `**********${existingSubscription.subscription?.cardNumber}`;
		data.expiryDate = `${getTwoDigitMonth(
			existingSubscription.subscription?.expMonth
		)}/${getLastTwoDigitsOfYear(existingSubscription.subscription?.expYear)}`;

		data.address = `${existingSubscription.subscription?.billingAddress1}${existingSubscription.subscription?.billingAddress2
			? ", " + existingSubscription.subscription?.billingAddress2
			: ""
			}
                  <br />
                  ${existingSubscription.subscription?.city +
			", " +
			existingSubscription.subscription?.state +
			" " +
			existingSubscription.subscription?.zipCode
			}

                 USA`;
	}
	const [discountVal, setDiscount] = useState(modalData?.isDiscount ? "NEW25" : "");

	const handleDiscountChange = (event) => {
		const inputValue = event.target.value;
		const sanitizedValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
		setDiscount(sanitizedValue);
	};
	return (
		<>
			{summaryOn === false && !paymentFailure && (
				<div className="modal-content courseInformation">
					{paymentInfoType !== "paymentInfoType" && (
						<div className="modal-header">
							<div className="heading p-0 border-0">
								<h2>
									<img src={image.subscription} className="mr-2" />
									Subscription: Summary{" "}
								</h2>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									onClick={() => {
										dispatch(applyDiscount());
										close();
										dispatch(billingPlan());
									}}
								>
									<i className="fa-regular fa-xmark m-0"></i>
								</button>
							</div>
						</div>
					)}
					<div className="modal-body Subject_Curriculam checkoutbody checkoutpreview">
						{paymentInfoType !== "paymentInfoType" && (
							<>
								<h4 className="flex mb-2">
									<span>
										<i className="fa-regular fa-bell mr-2"></i>Subscription
									</span>{" "}
									<span
										className="pointer"
										onClick={() => handleCloseSelect("preview")}
									>
										<i className="fa-light fa-pencil"></i>
									</span>
								</h4>
								<div className="SUbscriptionPreview mb-3">
									<h5>
										Your Plan: <span>{data.yourPlan}</span>
									</h5>

									<h5>
										Price:
										{discount && discount?.records?.length > 0 ? (
											<span className="price_Format">
												<del>${discount?.records[0]?.originalAmount}</del>
												&nbsp;&nbsp; ${
													discount?.records[0]?.disscountedAmmount
												}{" "}
												({discount?.records[0]?.disscountedPercent}% off)
											</span>
										) : (
											<span>${data.price} </span>
										)}
									</h5>

									{!existingSubscription?.subscription?.cardNumber && (
										<>
											<h5
												className={`flexone ${discount && discount?.records?.length > 0
													? "promo_code"
													: ""
													}`}
												id="promocode_id"
											>
												Promo Code:
												<div className="">
													<span className="flexone Discountcode ">
														<input
															type="text"
															id="discount"
															className="form-control"
															value={discountVal}
															disabled={
																discount && discount?.records?.length > 0
															}
															pattern="[A-Za-z0-9]*"
															onChange={handleDiscountChange}
															placeholder="Enter Promo Code"
														/>

														<button
															type="button"
															disabled={
																(discount && discount?.records?.length > 0 || discountVal?.length === 0)
															}
															className="btn-blue btn-login d-block w-auto  back_button"
															onClick={() => handleDiscount()}
														>
															Apply
														</button>
													</span>
													{discount && discount?.message && (
														<p className="error ">{discount.message}</p>
													)}
												</div>
											</h5>
										</>
									)}
								</div>
							</>
						)}

						<h4 className="flex mb-2">
							<span>
								<i className="fa-regular fa-credit-card mr-2"></i>Card Details
							</span>{" "}
							<span className="pointer" onClick={() => handleOpen()}>
								<i className="fa-light fa-pencil"></i>
							</span>
						</h4>
						<div className="UsedCarddtl mb-3">
							<h5>
								Card Holder Name:{" "}
								<span>{getCapitalized(data.cardHolderName)}</span>
							</h5>
							<h5>
								Card Number: <span>{data.cardNumber}</span>
							</h5>
							<h5>
								{" "}
								Expiry Date: <span>{data.expiryDate}</span>
							</h5>
						</div>
						<h4 className="flex mb-2">
							<span>
								<i className="fa-regular fa-location-dot mr-2"></i>Address
							</span>{" "}
							<span className="pointer" onClick={() => handleOpen()}>
								<i className="fa-light fa-pencil"></i>
							</span>
						</h4>
						<div className="BillingCardAdd mb-3 UsedCarddtl Addrsbille">
							<h5>
								Billing Address:
								<span dangerouslySetInnerHTML={{ __html: data.address }} />
							</h5>
						</div>

						{paymentInfoType !== "paymentInfoType" && (
							<PaymentTermsConditions setAgree={setAgree} agree={agree} />
						)}
					</div>

					{!paymentInfoType && (
						<div className="modal-footer">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion">
									<button
										type="button"
										className="btn-blue btn-login d-block mb-5 back_button"
										onClick={() => {
											handleOpen();
											dispatch(billingPlan());
											dispatch(applyDiscount());
										}}
									>
										<i className="fa-solid fa-arrow-left"></i> Back
									</button>
									<div className="buttonDistribotion">
										{loading ? (
											<button
												className="btn-blue btn-login d-block mb-5 "
												key={Math.random()}
												disabled
											>
												<span className="RounAnimation mr-1"></span> Please
												wait...
											</button>
										) : (
											<>
												{summaryPlanData?.renew ? (
													<button
														type="button"
														data-toggle="modal"
														disabled={!agree && true}
														data-target="#thanksactivity"
														className="btn-blue btn-login d-block mb-5 ml-3"
														onClick={() => handleThanksButton()}
													>
														<span>
															<i className="fa-solid fa-paper-plane ml-0"></i>
														</span>
														Renew
														{/* <i className='fa-solid fa-arrow-right ml-2'></i> */}
													</button>
												) : (
													<button
														type="button"
														data-toggle="modal"
														disabled={!agree && true}
														data-target="#thanksactivity"
														className="btn-blue btn-login d-block mb-5 ml-3"
														onClick={() => handleThanksButton()}
													>
														<span>
															<i className="fa-solid fa-paper-plane ml-0"></i>
														</span>
														Subscribe
														{/* <i className='fa-solid fa-arrow-right ml-2'></i> */}
													</button>
												)}
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					)}
					{
						summaryOn && (
							<>
								<script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=7f5c1aba"></script>
								{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PB4KV6HMT0"></script> */}
								<div dangerouslySetInnerHTML={{ __html: scriptString }} />
							</>
						)
					}
				</div>
			)}

			{summaryOn && (
				<ThanksPopUp
					data={summaryPlanData}
					close={close}
					subscribeData={subscribeData}
					existingSubscription={existingSubscription}
				/>
			)}
			{paymentFailure && (
				<PaymentFailed
					handleCloseSelect={handleCloseSelect}
					handleOpen={handleOpen}
					close={close}
				/>
			)}
		</>
	);
};
export default Preview;

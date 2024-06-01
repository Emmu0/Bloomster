import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useForm } from "../../utils/Packages";
import Checkout from "./Checkout";
import {
	cancelSubscriptionPlan,
	getBillingData,
	selectedPlan,
	stripePlans,
} from "../../redux/actions/APIs";
import { ShimmerCategoryList } from "../../utils/Packages";
import {
	planSequence,
	dateLongFormat,
	comparePlan,
	getMobileSubscriber,
} from "../../utils/helper";
import PriceCard from "./PriceCard";
import {
	downgradeModal,
	resetStripePlans,
	selectChilModal,
	selectedCheckOption,
} from "../../redux/actions";
import BillingHistory from "./BillingHistory";
import SelectChildPopup from "./SelectChildPopup";

import Preview from "./Preview";
import Tab from "./Tab";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// const stripePromise = loadStripe(
//   "pk_live_51Mav28EeGqaM3Xo2dpkKtcxPHZMdrydLEJqOohiA1EOykbHtnKEaAE12UeRIHpnpyQKSHNNjCDLxeua7hwQWatGZ00BCyUwJ85"
// );
const Common = ({ subscribeData, close }) => {
	const dispatch = useDispatch();
	const [selectP, setSelectP] = useState(undefined);
	const [selectedOption, setSelectedOption] = useState();
	const [openForm, setOpenForm] = useState(false);
	const [open, setOpen] = useState(false);
	const [activeTab, setActiveTab] = useState(1);
	const [submitLoader, setSubmitLoader] = useState(false);
	const [selectedlearnerId, setSelectedLearnerId] = useState("");
	const [pymentEditInfo, setpymentEditInfo] = useState();
	const [isSubscribed, setIsSubscribed] = useState(true);

	const {
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onTouched" });
	const [planType, setPlanType] = useState(false);

	const [planCard, setPlanCard] = useState([]);
	const [planCancel, setplanCancel] = useState();
	const {
		planData,
		loggedInUser,
		response,
		downGradeUserObj,
		selectChildObj,
		paymentUpdateObj,
		selectedcheckbox,
		modalData,
	} = useSelector((state) => state.collections);

	const handleCheckbox = (e, data) => {
		if (
			!e.target.checked ||
			(!e.target.checked && selectedOption?.productId === data?.id)
		) {
			setIsSubscribed(false);
			setSelectedOption("");
		} else {
			setIsSubscribed(true);
			setSelectedOption({
				productId: data.id,
				selectedPlan: data,
				courseObj: subscribeData,
			});
		}
	};

	useEffect(() => {
		if (paymentUpdateObj) {
			setSelectP();
			setActiveTab(3);
		}
	}, [paymentUpdateObj]);

	const chooseTab = (data) => {
		setpymentEditInfo();
		setplanCancel();
		setActiveTab(data);
	};
	useEffect(() => {
		if (downGradeUserObj && selectedOption) {
			selectedOption.downGradeUserObj = downGradeUserObj;
			let obj = {
				productId: selectedOption?.productId,
				selectedPlan: selectedOption?.selectedPlan,
				downgradeObj: downGradeUserObj,
			};

			setSelectedOption(obj);
			setSelectP(selectedOption);
		}
	}, [downGradeUserObj]);

	useEffect(() => {
		if (selectChildObj?.selectedOption) {
			setSelectP(selectChildObj?.selectedOption);

			// setSelectedLearnerId(selectChildObj?.selectedChildId?.id);
			setSelectedLearnerId(selectChildObj?.selectedChildId);
			dispatch(selectChilModal());
		}
	}, [selectChildObj, selectP]);

	useEffect(() => {
		if (activeTab === 2) {
			dispatch(getBillingData(loggedInUser?.id));
		}
	}, [activeTab]);

	useEffect(() => {
		if (!planData) {
			dispatch(stripePlans());
		}
	}, [planData]);

	let existingSubscription = [];

	if (loggedInUser?.subscription) {
		if (loggedInUser.children?.length > 0) {
			loggedInUser.children.map((val, ky) => {
				if (val?.isSubscriber) {
					existingSubscription = val;
					existingSubscription.subscription = loggedInUser?.subscription;
					existingSubscription.subscribedUser = val;

					// return false;
				}
			});
		}
	}

	useEffect(() => {
		if (
			existingSubscription?.subscription?.subscriptionStatus === "CANCELLED"
		) {
			let obj = {
				productId: existingSubscription?.subscription?.product.id,
				selectedPlan: existingSubscription?.subscription?.product,
				renew: true,
			};

			setSelectedOption(obj);
		}
	}, []);
	const _onSubmit = () => {
		setShowFormType(false);
		let currentPlan =
			existingSubscription &&
			existingSubscription?.subscription?.product?.planType;
		let selectedPlan = selectedOption?.selectedPlan?.planType;
		let check = comparePlan(currentPlan, selectedPlan);
		if (
			(selectedOption?.selectedPlan?.name === "Single Child - Monthly" ||
				selectedOption?.selectedPlan?.name === "Single Child - Annually") &&
			!existingSubscription?.subscription?.cardNumber &&
			loggedInUser?.children?.length > 1 &&
			check === "invalid"
		) {
			dispatch(selectChilModal(selectedOption));
			return false;
		} else if (check === "change" && loggedInUser?.children?.length > 1) {
			dispatch(downgradeModal(selectedOption));
			return false;
		} else if (check === "downgrade") {
			dispatch(downgradeModal(selectedOption));
			return false;
		} else {
			setSelectP(selectedOption);
		}
	};

	useEffect(() => {
		if (!selectP) {
			if (
				["YEARLY", "FAMILY_YEARLY"].includes(
					existingSubscription?.subscription?.product?.planType
				)
			) {
				setPlanType(true);
			} else if (
				["MONTHLY", "FAMILY_MONTHLY"].includes(
					existingSubscription?.subscription?.product?.planType
				)
			) {
				setPlanType(modalData?.isDiscount ? true : false);
			}
		}
	}, [selectP]);

	const closeSelect = (data) => {
		dispatch(resetStripePlans());
		setSelectP(undefined);
	};

	const handleCloseSelect = (type) => {
		if (type === "preview") {
			setOpen(true);
			setSelectP(undefined);
		}
	};
	const [showFormType, setShowFormType] = useState();
	const handleOpen = () => {
		setpymentEditInfo("pymentEdit");
		setOpen(false);
		setSelectP("");

		setSelectedOption();
		setShowFormType(true);
	};

	// const [selected, setSelected] = useState(0);

	// useEffect(() => {
	//   if (existingSubscription?.subscription && selected === 0) {
	//     setSelectedOption(existingSubscription?.subscription?.product?.id);
	//     setSelected(1);
	//   }
	// }, []);

	const onValueChange = (val) => {
		if (
			existingSubscription &&
			!existingSubscription?.subscription?.cardNumber
		) {
			let obj = {
				productId: val?.id,
				selectedPlan: val,
				courseObj: subscribeData,
			};

			setSelectedOption(obj);
		} else if (
			val.id !== existingSubscription.subscription.product.id &&
			existingSubscription?.subscription.cardNumber
		) {
			let obj = {
				productId: val.id,
				selectedPlan: val,
				courseObj: subscribeData,
			};

			setSelectedOption(obj);
		} else if (existingSubscription.length === 0) {
			let obj = {
				productId: val?.id,
				selectedPlan: val,
				courseObj: subscribeData,
			};

			setSelectedOption(obj);
		}
	};

	let isFamily = false;
	let isIndividual = false;
	if (existingSubscription?.subscription?.product?.planType) {
		let planArr =
			existingSubscription?.subscription?.product?.planType.split("_");
		if (planArr[0] === "FAMILY") {
			isFamily = true;
		} else {
			isIndividual = true;
		}
	}

	let planObj = [];
	useEffect(() => {
		if (
			existingSubscription?.subscription?.product?.planType ==
			"FAMILY_YEARLY" &&
			isFamily
		) {
			let check = !planType;

			setPlanType(check);

			planData?.records.map((vl, ky) => {
				if (vl.type === "yearly" && check) {
					planObj.push(vl);
				} else if (!planType && vl.type === "monthly") {
					planObj.push(vl);
				}
			});

			setPlanCard(planObj);
		}
	}, [existingSubscription?.subscription?.product?.planType]);

	useEffect(() => {
		if (planData) {
			planData?.records.map((vl, ky) => {
				if (vl.type === "yearly" && planType) {
					planObj.push(vl);
				} else if (!planType && vl.type === "monthly") {
					planObj.push(vl);
				}
			});

			setPlanCard(planObj);
		}
	}, [planData]);
	const handleCard = (e) => {
		let check = !planType;

		setPlanType(check);
		let planObj = [];
		planData?.records.map((vl, ky) => {
			if (vl.type === "yearly" && check) {
				planObj.push(vl);
			} else if (!check && vl.type === "monthly") {
				planObj.push(vl);
			}
		});

		setPlanCard(planObj);
	};

	const handleCancelPlane = (val) => {
		setplanCancel(val);
	};

	let stripeSubId = existingSubscription?.subscription?.stripeId;
	const cancelSubscription = () => {
		setSubmitLoader(true);
		dispatch(cancelSubscriptionPlan(stripeSubId));
	};

	useEffect(() => {
		if (response) {
			setSubmitLoader(false);
			close();
		}
	}, [response]);
	const _closeSub = () => {
		dispatch(resetStripePlans());
		close();
	};

	console.log('Common : ', planData, existingSubscription);

	const subscript = () => {
		return (
			<>
				<div className="modal-content courseInformation">
					<div className="modal-header">
						<div className="heading p-0 border-0">
							<h2 className="flex">
								{planCancel === "cancelPlan" ? (
									<span>
										{" "}
										<img
											src={image.cancelSubscription}
											alt=""
											className=""
										/>{" "}
										Cancel Subscription
									</span>
								) : (
									<span>
										<img src={image.subscription} className="mr-2" />
										Subscription
									</span>
								)}

								{planCancel === "cancelPlan" ? (
									<button
										type="button"
										className="close"
										onClick={() => chooseTab(1)}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								) : (
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										onClick={() => _closeSub()}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								)}
							</h2>
						</div>
					</div>
					{planData ? (
						<>
							<form onSubmit={handleSubmit(_onSubmit)}>
								<div className="modal-body Subject_Curriculam checkoutbody checkoutpreview paymentinfo pt-1">
									<Tab chooseTab={chooseTab} activeTab={activeTab} />
									{existingSubscription?.subscription?.androidId ? (
										<h3 className="SplNotiPlan">
											<i class="fa-regular fa-triangle-exclamation mr-2"></i>
											You purchased your subscription from an Android device. To
											manage your subscription please use your Android device.
										</h3>
									) : existingSubscription?.subscription?.appleId ? (
										<h3 className="SplNotiPlan">
											<i class="fa-regular fa-triangle-exclamation mr-2"></i>
											You purchased your subscription from an iOS device. To
											manage your subscription please use your iOS device.
										</h3>
									) : (
										""
									)}

									{activeTab === 1 && planCancel !== "cancelPlan" ? (
										<>
											<div className="chooseSubscription">
												<div className="form-check form-switch d-flex justify-content-center text-center p-0 subscriptionChoose">
													<label
														className="form-check-label d-flex w-90 m-auto p-0"
														htmlFor="flexSwitchCheckDefault"
													>
														<span>Monthly</span>
														<span className="position-relative">
															Annually{" "}
															<span className="saveuptomsg">
																Save 17% per year
															</span>{" "}
															{/* <div className="familydisclaimer">
                          {" "}
                          <strong className="disclamer">
                            For families with two or more children
                          </strong>
                        </div> */}
														</span>
													</label>
													<input
														onClick={() => handleCard()}
														className="form-check-input pointer"
														type="radio"
														id="planType"
														checked={planType}
													/>
												</div>
											</div>

											<div className="subscriptioncardwrap flex justify-content-center flex-wrap">
												{planCard &&
													planSequence(planCard).map((vl, ky) => (
														<React.Fragment key={ky}>
															<PriceCard
																data={vl}
																onValueChange={onValueChange}
																isIndividual={isIndividual}
																selectedOption={selectedOption}
																existingSubscription={existingSubscription}
																isFamily={isFamily}
																setSelectedOption={setSelectedOption}
																subscribeData={subscribeData}
																isSubscribed={isSubscribed}
																setIsSubscribed={setIsSubscribed}
																handleCheckbox={handleCheckbox}
															/>
														</React.Fragment>
													))}

												{existingSubscription?.subscription?.cardNumber &&
													existingSubscription?.subscription
														?.subscriptionStatus !== "CANCELLED" &&
													!getMobileSubscriber(
														existingSubscription?.subscription
													) && (
														<div className="cancelplan w-100 pointer">
															<p
																onClick={() => {
																	handleCancelPlane("cancelPlan");
																}}
															>
																Cancel Plan
															</p>
														</div>
													)}
											</div>
										</>
									) : activeTab === 1 && planCancel === "cancelPlan" ? (
										<div className="welcomscreenContent areyouscansubs p-4 m-5">
											<ul className="">
												<li>
													<i className="fa-solid fa-play mr-2"></i>
													<p>
														Your subscription is paid until{" "}
														{dateLongFormat(
															existingSubscription.subscription.nextBillDate,
															"flag"
														)}
														. If you would like to proceed with cancelling
														today, the cancellation will take effect from{" "}
														{dateLongFormat(
															existingSubscription.subscription.nextBillDate
														)}
														.
													</p>
												</li>
												<li>
													<i className="fa-solid fa-play mr-2"></i>
													<p>
														Effective{" "}
														{dateLongFormat(
															existingSubscription.subscription.nextBillDate
														)}
														, you will lose unlimited access to all content. You
														will still be able to access any content you have
														unlocked until{" "}
														{dateLongFormat(
															existingSubscription.subscription.nextBillDate,
															"flag"
														)}
														.
													</p>
												</li>
												<li className="mt-3">
													<p>
														Please confirm you wish to proceed with cancelling.
													</p>
												</li>
											</ul>
										</div>
									) : (
										""
									)}
									{activeTab === 2 && <BillingHistory />}
									{activeTab === 3 &&
										existingSubscription?.subscription?.cardNumber && (
											<Elements stripe={stripePromise}>
												<Preview
													paymentInfoType={"paymentInfoType"}
													handleOpen={handleOpen}
												/>
											</Elements>
										)}
								</div>
								{existingSubscription?.subscription?.androidId ||
									existingSubscription?.subscription?.appleId ? (
									<div className="modal-footer">
										<div className="form-group BDsubmitbutton d-flex m-0 pr p-0">
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5  cancelbutton left_auto"
												onClick={() => _closeSub()}
											>
												<i className="fa-solid fa-xmark mr-2"></i> Close
											</button>
										</div>
									</div>
								) : (
									<div className="modal-footer">
										<div className="form-group BDsubmitbutton d-flex m-0 pr p-0">
											{planCancel === "cancelPlan" ? (
												<>
													<button
														type="button"
														className="btn-blue btn-login d-block mb-5  cancelbutton left_auto"
														onClick={() => chooseTab(1)}
													>
														<i className="fa-solid fa-xmark mr-2"></i>Cancel
													</button>
												</>
											) : (
												<>
													<button
														type="button"
														className="btn-blue btn-login d-block mb-5  cancelbutton left_auto"
														onClick={() => close()}
													>
														<i className="fa-solid fa-xmark mr-2"></i>Close
													</button>

													{activeTab === 1 &&
														existingSubscription?.subscription
															?.subscriptionStatus === "CANCELLED" &&
														(selectedOption?.productId ===
															existingSubscription?.subscription?.product?.id ? (
															<button
																type="submit"
																className="btn-blue btn-login d-block mb-5 ml-2 "
															>
																<span className="mr-1">
																	<i className="fa-solid fa-paper-plane ml-0"></i>
																</span>{" "}
																Renew
															</button>
														) : (
															<button
																type="submit"
																className="btn-blue btn-login d-block mb-5 ml-2 "
															>
																Next
																<span>
																	<i className="fa-solid fa-arrow-right ml-2" />
																</span>
															</button>
														))}
												</>
											)}

											{activeTab === 1 && planCancel !== "cancelPlan" ? (
												existingSubscription?.subscription?.cardNumber &&
													existingSubscription?.subscription
														?.subscriptionStatus === "CANCELLED" ? (
													""
												) : (
													<button
														type="submit"
														className="btn-blue btn-login d-block mb-5 ml-2 "
														disabled={!selectedOption?.productId && true}
													>
														Next{" "}
														<span>
															<i className="fa-solid fa-arrow-right ml-2"></i>
														</span>
													</button>
												)
											) : (
												activeTab === 1 &&
												(submitLoader ? (
													<button
														className="btn-blue btn-login d-block mb-5 "
														disabled
														key={Math.random()}
													>
														<span className="RounAnimation"></span>
														Please Wait...
													</button>
												) : (
													<button
														type="button"
														onClick={() => cancelSubscription()}
														className="btn-blue btn-login d-block ml-0 w-auto"
													>
														<span>
															<i className="fa-solid fa-paper-plane mr-2"></i>
														</span>
														Confirm
													</button>
												))
											)}
										</div>
									</div>
								)}
							</form>
						</>
					) : (
						<ShimmerCategoryList items={6} categoryStyle="STYLE_SIX" />
					)}
				</div>
			</>
		);
	};

	return (
		<>
			{/* Subscription half screen */}
			{/* {selectP === undefined && subscript()} */}
			{openForm === false && selectP === undefined && subscript()}
			{/* Checkout Form half screen */}

			{selectP !== undefined && openForm === false && (
				<Elements stripe={stripePromise}>
					<Checkout
						paymentData={selectedOption}
						close={close}
						closeSelect={closeSelect}
						handleCloseSelect={handleCloseSelect}
						open={open}
						setOpen={setOpen}
						subscribeData={subscribeData}
						existingSubscription={existingSubscription}
						learnerId={selectedlearnerId}
						showFormType={showFormType}
						pymentEditInfo={pymentEditInfo}
					/>
				</Elements>
			)}
		</>
	);
};
export default Common;

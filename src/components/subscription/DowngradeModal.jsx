import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downGradeUser, downgradeModal } from "../../redux/actions";
import {
	comparePlan,
	dateLongFormat,
	getCapitalized,
} from "../../utils/helper";
import * as image from "../../resources/images";
import { downGradePlan } from "../../redux/actions/APIs";
import { useEffect } from "react";

const DowngradeModal = ({ data }) => {
	let selectedPlan = data.selectedPlan;
	const dispatch = useDispatch();
	const { alluserdetails, response, loggedInUser, typeSelected } = useSelector(
		(state) => state.collections
	);

	const [selectedChild, setSelectedChild] = useState(null);
	const [submitLoader, setSubmitLoader] = useState(false);

	let userObj = alluserdetails.records[0];
	let children = userObj?.children;
	let currentItem = userObj?.subscription?.product?.planType;
	let downgrade = comparePlan(currentItem, selectedPlan.planType);

	const ModalTitle = () => {
		if (downgrade !== "downgrade") {
			return (
				<span>
					<i className="fa-solid fa-ballot-check mr-2"></i>
					Select Child
				</span>
			);
		} else {
			return (
				<span>
					<img src={image.downgrade_sub} className="" /> Confirm Downgrade
				</span>
			);
		}
	};
	const chooseChild = () => {
		if (
			children.length > 1 &&
			["YEARLY", "MONTHLY"].includes(selectedPlan.planType)
		) {
			const isFamilyPlan = ["FAMILY_YEARLY", "FAMILY_MONTHLY"].includes(
				currentItem
			);
			if (isFamilyPlan) {
				return (
					<div className="ScenecerelateddQuiz p-0">
						<div className="signupType rangetypeQuestion textAreatypeQuestion mb-2">
							<h4 className="mb-2 d-flex">
								Select the child to keep the subscription for:
							</h4>
							{children.map((child, index) => (
								<label className="Selcheckbox align-items-start" key={index}>
									{getCapitalized(child.name)}
									<input
										type="radio"
										onChange={() => handleChildSelection(child)}
										id={`option${index}`}
										name="option"
									/>
									<span className="checkmark"></span>
								</label>
							))}
						</div>
					</div>
				);
			}
		}
	};

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

	useEffect(() => {
		if (downgrade === "change") {
			if (children && children?.length === 1) {
				setSelectedChild(children[0]);
			}
		}
	}, [children]);
	const handleChildSelection = (childIndex) => {
		setSelectedChild(childIndex);
	};

	const _downgrade = () => {
		setSubmitLoader(true);

		let data = {
			subscriptionStripeId: existingSubscription?.subscription?.stripeId,
			priceId: selectedPlan?.stripePriceId,
			planType: selectedPlan?.planType,
			learnerId: selectedChild?.id
				? selectedChild?.id
				: existingSubscription.subscribedUser?.id,
			cardProvider: existingSubscription?.subscription?.cardProvider,
			cardNumber: existingSubscription?.subscription?.cardNumber,
			previousPlanType: existingSubscription?.subscription?.product?.planType,
			line1: existingSubscription?.subscription?.billingAddress1,
			line2: existingSubscription?.subscription?.billingAddress2,
			city: existingSubscription?.subscription?.city,
			state: existingSubscription?.subscription?.state,
			postal_code: existingSubscription?.subscription?.zipCode,
			country: existingSubscription?.subscription?.country,
		};

		if (
			existingSubscription?.subscription?.product?.planType ===
			"FAMILY_MONTHLY" &&
			selectedPlan?.planType === "YEARLY"
		) {
			dispatch(
				downGradeUser({
					childId: selectedChild,
					previousPlanType:
						existingSubscription?.subscription?.product?.planType,
				})
			);

			dispatch(downgradeModal());
		} else {
			dispatch(downGradePlan(data, loggedInUser?.id));
		}
	};

	useEffect(() => {
		if (response || typeSelected) {
			setSubmitLoader(false);
			dispatch(downgradeModal());
		}
	}, [response, typeSelected]);
	let disabled = false;

	if (
		children?.length > 1 &&
		["YEARLY", "MONTHLY"].includes(selectedPlan.planType) &&
		["FAMILY_YEARLY", "FAMILY_MONTHLY"].includes(currentItem) &&
		!selectedChild
	) {
		disabled = true;
	} else {
		disabled = false;
	}
	// disabled={
	//   (children?.length > 1 &&
	//     ["YEARLY", "MONTHLY"].includes(
	//       selectedPlan.planType
	//     ) &&
	//     ["FAMILY_YEARLY", "FAMILY_MONTHLY"].includes(
	//       currentItem
	//     ) &&
	//     chooseChild() !== null) ||
	//   (children?.length > 1 && selectedChild)

	return (
		<div className="downgradepopup">
			<div className="modal d-flex show" style={{ zIndex: "999999999" }}>
				<div className="modal-dialog modal-lg">
					<div className="modal-content courseInformation">
						<div className="modal-header">
							<div className="heading border-0 p-0 w-100">
								<h2 className="flex w-100">
									{ModalTitle()}
									<button
										className="btn btn-primary"
										onClick={() => dispatch(downgradeModal())}
									>
										<i className="fa-regular fa-xmark m-0"></i>
									</button>
								</h2>
							</div>
						</div>
						<div className="modal-body pt-1">
							<div className="subscriptioncardwrap  feeAnalysispopup">
								{chooseChild()}
								<div className="welcomscreenContent lockContentPOpups p-0">
									<ul className="p-0">
										{currentItem === "FAMILY_YEARLY" &&
											["YEARLY", "MONTHLY"].includes(selectedPlan.planType) && (
												<>
													<li>
														{" "}
														<i className="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Your current subscription is paid until{" "}
															{dateLongFormat(
																userObj?.subNeextBillDate,
																"flag"
															)}
															. If you downgrade today, your new plan will take
															effect from{" "}
															{dateLongFormat(userObj?.subNeextBillDate)}.
														</h4>
													</li>
													{loggedInUser?.children?.length > 1 && (
														<li>
															{" "}
															<i className="fa-solid fa-play mr-2 mt-1"></i>
															<h4>
																Effective{" "}
																{dateLongFormat(userObj?.subNeextBillDate)}, only
																the selected child will have unlimited access to
																all content. Your other children will still be
																able to access any content they have unlocked
																until{" "}
																{dateLongFormat(
																	userObj?.subNeextBillDate,
																	"flag"
																)}
																.
															</h4>
														</li>
													)}
												</>
											)}
										{currentItem === "FAMILY_MONTHLY" &&
											["MONTHLY"].includes(selectedPlan.planType) && (
												<>
													<li>
														{" "}
														<i className="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Your current subscription is paid until{" "}
															{dateLongFormat(
																userObj?.subNeextBillDate,
																"flag"
															)}
															. If you downgrade today, your new plan will take
															effect from{" "}
															{dateLongFormat(userObj?.subNeextBillDate)}.
														</h4>
													</li>
													{loggedInUser?.children?.length > 1 && (
														<li>
															{" "}
															<i className="fa-solid fa-play mr-2 mt-1"></i>
															<h4>
																Effective{" "}
																{dateLongFormat(userObj?.subNeextBillDate)},
																only the selected child will have unlimited
																access to all content. Your other children will
																still be able to access any content they have
																unlocked until{" "}
																{dateLongFormat(
																	userObj?.subNeextBillDate,
																	"flag"
																)}
																.
															</h4>
														</li>
													)}
												</>
											)}

										{currentItem === "FAMILY_YEARLY" &&
											["FAMILY_MONTHLY"].includes(selectedPlan.planType) && (
												<>
													<li>
														{" "}
														<i className="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Your current subscription is paid until{" "}
															{dateLongFormat(
																userObj?.subNeextBillDate,
																"flag"
															)}
															. If you downgrade today, your new plan will take
															effect from{" "}
															{dateLongFormat(userObj?.subNeextBillDate)}.
														</h4>
													</li>
												</>
											)}

										{currentItem === "FAMILY_MONTHLY" &&
											selectedPlan.planType === "YEARLY" && (
												<>
													<li>
														{" "}
														<i className="fa-solid fa-play mr-2 mt-1"></i>
														<h4>
															Effective {dateLongFormat(new Date())}, only the
															selected child will have unlimited access to all
															content. Your other children will still be able to
															access any content they have unlocked until you
															confirm the change.
														</h4>
													</li>
												</>
											)}

										{selectedPlan.planType === "MONTHLY" &&
											currentItem === "YEARLY" && (
												<li>
													{" "}
													<i className="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Your current subscription is paid until{" "}
														{dateLongFormat(userObj?.subNeextBillDate, "flag")}.
														If you downgrade today, your new plan will take
														effect from{" "}
														{dateLongFormat(userObj?.subNeextBillDate)}.
													</h4>
												</li>
											)}
										{/*Scenario #3*/}
										{selectedPlan.planType === "FAMILY_MONTHLY" &&
											currentItem === "YEARLY" && (
												<li>
													{" "}
													<i className="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Effective{" "}
														{dateLongFormat(userObj?.subNeextBillDate)}, only
														the selected child will have access to locked
														content. Your other children will still be able to
														access any content they have unlocked up to and
														including{" "}
														{dateLongFormat(userObj?.subNeextBillDate, "flag")}.
													</h4>
												</li>
											)}
										{downgrade === "downgrade" ? (
											<li className="mt-3 pb-0">
												<h4>
													Please confirm you wish to proceed with downgrading.
												</h4>
											</li>
										) : (
											<li className="mt-3 pb-0">
												<h4>Please confirm you wish to proceed.</h4>
											</li>
										)}
									</ul>
								</div>
							</div>
						</div>

						<div className="modal-footer">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion">
									<div className="buttonDistribotion">
										{submitLoader ? (
											<button
												className="btn-blue btn-login d-block mb-5 "
												disabled
												key={Math.random()}
											>
												<span className="RounAnimation"></span> Please Wait...
											</button>
										) : (
											<>
												{" "}
												<button
													onClick={() => dispatch(downgradeModal())}
													type="button"
													className="btn-blue btn-login d-block mb-5 cancelbutton"
												>
													<i className="fa-solid fa-xmark"></i> Cancel
												</button>
												<button
													onClick={() => _downgrade()}
													type="button"
													// disabled={
													//   children?.length > 1 &&
													//   !selectedChild &&
													//   selectedPlan.planType != "FAMILY_MONTHLY"
													//     ? true
													//     : false
													// }
													// disabled={
													//   (children?.length > 1 &&
													//     ["YEARLY", "MONTHLY"].includes(
													//       selectedPlan.planType
													//     ) &&
													//     ["FAMILY_YEARLY", "FAMILY_MONTHLY"].includes(
													//       currentItem
													//     ) &&
													//     chooseChild() !== null) ||
													//   (children?.length > 1 && selectedChild)
													// }
													disabled={disabled}
													className="btn-blue btn-login d-block mb-5"
												>
													<i className="fa-solid fa-paper-plane mr-2"></i>
													Confirm
												</button>
											</>
										)}
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

export default DowngradeModal;

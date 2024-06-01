import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import {
	dateFormatter,
	getCapitalized,
	getMobileSubscriber,
} from "../../utils/helper";

const PriceCard = ({
	data,
	onValueChange,
	isIndividual,
	selectedOption,
	existingSubscription,
	isFamily,
}) => {
	let mousePointer = "";
	if (!isFamily && !isIndividual) {
		mousePointer = "pointer";
	}
	return (
		<div
			onClick={() => onValueChange(data)}
			className={`subscriptioncard mt-3 ${mousePointer} ${selectedOption?.productId === data?.id ? "SubsActivecard" : ""
				}
          ${existingSubscription?.subscription?.product?.id === data?.id &&
					!selectedOption
					? "SubsActivecard"
					: ""
				}  pointer ${existingSubscription?.subscription?.product?.planType === "YEARLY"
					? data?.planType === "FAMILY_MONTHLY"
						? "disableSubscard"
						: ""
					: ""
				}${existingSubscription?.subscription?.product?.id === data?.id
					? "SubsActivecard"
					: getMobileSubscriber(existingSubscription?.subscription) &&
					"disableSubscard"
				}`}
			key={data?.id}
		>
			<div className="subscriptioncardtitle">
				<h4>{data?.name}</h4>
				{existingSubscription?.subscription?.product?.id === data?.id && (
					<div className="">
						{existingSubscription?.subscription?.cardNumber ||
							getMobileSubscriber(existingSubscription?.subscription) ? (
							<div className="curruntplanstrip">
								<p>Current Plan</p>
							</div>
						) : (
							<div className="curruntplanstrip freeplan">
								<p className="">Free Trial</p>
							</div>
						)}
					</div>
				)}
				<div className="signupType m-0">
					<div className="flexone  filtetags w-100">
						<label className="Selcheckbox ActiveQQst m-0 w-100">
							<input
								type="radio"
								id="Public"
								name="dimension"
								value="PUBLIC"
								checked={
									(existingSubscription?.subscription?.cardNumber ||
										getMobileSubscriber(existingSubscription?.subscription)) &&
									existingSubscription?.subscription?.product?.id ===
									data?.id &&
									!selectedOption
								}
							/>
							<span className="checkmark"></span>
						</label>
					</div>
				</div>

				{selectedOption?.productId === data?.id && (
					<div className="signupType m-0">
						<div className="flexone filtetags w-100">
							<label className="Selcheckbox ActiveQQst m-0 w-100">
								<input
									type="radio"
									id="Public"
									name="dimension"
									value="PUBLIC"
									checked={selectedOption?.productId === data?.id}
								/>{" "}
								<span className="checkmark"></span>
							</label>
						</div>
					</div>
				)}
				<div className="cardpricewrap">
					<h2>
						{" "}
						${data.amount}
						<span className="d-block text-center">
							{data?.planType === "MONTHLY" ||
								data?.planType === "FAMILY_MONTHLY"
								? "per month"
								: "per year"}
						</span>
					</h2>
				</div>
				<p className="savedprice">
					<strong>
						{" "}
						{data?.planType === "FAMILY_YEARLY" && "Save $80 per year"}
					</strong>
				</p>
				<p className="savedprice">
					<strong> {data?.planType === "YEARLY" && "Save $40 per year"}</strong>
				</p>
				<p>
					{existingSubscription?.subscription?.product?.id === data?.id &&
						!existingSubscription?.subscription?.cardNumber &&
						!getMobileSubscriber(existingSubscription?.subscription) && (
							<strong>
								<>Free Trial ends on</>{" "}
								{dateFormatter(
									existingSubscription?.subscription?.nextBillDate
								)}
							</strong>
						)}
					{
						//console.log('existingSubscription : ', existingSubscription?.subscription, data)
					}
					{existingSubscription?.subscription?.product?.id === data?.id &&
						(existingSubscription?.subscription?.cardNumber || getMobileSubscriber(existingSubscription?.subscription)) &&
						existingSubscription?.subscription?.subscriptionStatus ===
						"CANCELLED" && (
							<strong>
								<>
									Plan cancelled, effective on{" "}
									{dateFormatter(
										existingSubscription?.subscription?.nextBillDate
									)}
								</>
							</strong>
						)}

					{existingSubscription?.subscription?.downgradeProductStripeId ===
						data?.stripeId && (
							<strong>
								<>
									New plan effective from{" "}
									{dateFormatter(
										existingSubscription?.subscription?.nextBillDate,
										"flag"
									)}
								</>
							</strong>
						)}

					{(existingSubscription?.subscription?.cardNumber || getMobileSubscriber(existingSubscription?.subscription)) &&
						existingSubscription?.subscription?.downgradeProductStripeId &&
						existingSubscription?.subscription?.product?.id === data?.id && (
							<strong>
								<>
									Plan downgraded, ends on{" "}
									{dateFormatter(
										existingSubscription?.subscription?.nextBillDate
									)}
								</>
							</strong>
						)}

					{existingSubscription?.subscription?.product?.id === data?.id &&
						(existingSubscription?.subscription?.cardNumber || getMobileSubscriber(existingSubscription?.subscription)) &&
						existingSubscription?.subscription?.subscriptionStatus ===
						"ACTIVE" &&
						!existingSubscription?.subscription?.downgradeProductStripeId && (
							<strong>
								<>
									Auto renews on{" "}
									{dateFormatter(
										existingSubscription?.subscription?.nextBillDate,
										"flag"
									)}
								</>
							</strong>
						)}

					{existingSubscription?.subscription?.product?.id === data?.id &&
						(existingSubscription?.subscription?.cardNumber || getMobileSubscriber(existingSubscription?.subscription)) &&
						existingSubscription?.subscription?.subscriptionStatus ===
						"RENEW" &&
						!existingSubscription?.subscription?.downgradeProductStripeId && (
							<strong>
								<>
									Renewal effective from{" "}
									{dateFormatter(
										existingSubscription?.subscription?.nextBillDate,
										"flag"
									)}
								</>
							</strong>
						)}

					<br />
				</p>
			</div>

			<div className="Subscriptioncardconlist ">
				<ul className="">
					<li>
						<img src={image.rightCheck} alt="" />
						Unlimited access to all content
					</li>
					<li>
						<img src={image.rightCheck} alt="" />
						{data?.planType === "MONTHLY" || data?.planType === "YEARLY"
							? existingSubscription?.subscription?.product.id === data?.id
								? `Access for one child (${getCapitalized(
									existingSubscription?.subscribedUser?.firstName
								)})`
								: existingSubscription?.subscription
									?.downgradeProductStripeId === data?.stripeId
									? `Access for one child  (${getCapitalized(
										existingSubscription?.subscription?.downgradeSubsLearnerName
									)})`
									: `Access for one child`
							: "No limit on the number of children"}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PriceCard;

/** @format */

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../../utils/Packages";
import ProgressBar from "../controls/ProgressBar";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import { courseRatingModal, setCourseModal, setShowMore } from "../../redux/actions";
import { getCourseRating, getCourseReviewRating } from "../../redux/actions/APIs";
import { getCourseDetails } from "../../redux/actions/Home";
let userData;
let overAllRatingData;
export default function RatingWizad(
	{
		ratingData,
		showRating,
		data,
		onClickOutside1,
		type,
		resourceType,
		teacherPro,
		activityRatType,
		coursedata,
		setRatingClass,
		providerModal,
	},
	props
) {
	const { overAllRating, loggedInUser } = useSelector(
		(state) => state.collections
	);

	const dispatch = useDispatch();

	if (data?.resourceType === "resourceProvider") {
		userData = data?.courseData?.curatorDto;
	} else if (resourceType === "resourceProvider") {
		userData = data?.curatorDto;
	} else if (data.curatorDto) {
		userData = data.curatorDto;
	} else if (teacherPro === "teacherPro") {
		userData = data;
	} else if (activityRatType === "activityRatType" || type === "resources") {
		userData = data;
	} else {
		userData = data?.provider;
	}

	const ref = useRef(null);
	const { onClickOutside } = props;

	let overAllRatingData = overAllRating?.records[0];

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				onClickOutside1("dd");
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [onClickOutside]);

	const _closeCourseDetailPage = () => {
		dispatch(getCourseDetails());
		dispatch(setCourseModal());
		dispatch(setShowMore());
	};

	const courseReviewMdal = (course) => {
		//	_closeCourseDetailPage();
		dispatch(courseRatingModal({ type: "ShowCourseRating", courseObj: course }));
		dispatch(getCourseRating());
		dispatch(getCourseReviewRating(course?.id));
	}

	return (
		<div
			ref={ref}
			className="RatingPopupdiv dropdown-menu d-block dropdown-menu-end"
		>
			{!overAllRatingData ? (
				<ShimmerCategoryItem items={1} categoryStyle="STYLE_SIX" />
			) : (
				<>
					<Rating
						initialValue={
							!isNaN(overAllRatingData?.averageRating[0])
								? overAllRatingData?.averageRating[0]
								: 0
						}
						allowFraction
						allowHover={false}
						readonly={true}
						size={20}
						emptyColor="#ccc"
						fillColorArray={[
							"#f17a45",
							"#f17a45",
							"#f17a45",
							"#f17a45",
							"#f17a45",
						]}
					/>
					{!isNaN(overAllRatingData?.averageRating[0])
						? Number.isInteger(overAllRatingData?.averageRating[0]) ? overAllRatingData?.averageRating[0] : overAllRatingData?.averageRating[0].toFixed(2)
						: 0}{" "}
					out of 5
					{type === "provider" ? (
						<p>
							{userData?.userCount ? userData.userCount : 0}{" "}
							{userData?.userCount > 1 ? "global ratings" : "global rating"}
						</p>
					) : activityRatType === "activityRatType" || type === "resources" ? (
						<p>
							{userData?.countOfUserRating ? userData.countOfUserRating : 0}{" "}
							{userData?.countOfUserRating > 1
								? "global ratings"
								: "global rating"}
							{/* <a href="#" className="ml-2">(See parent and learner reviews)</a> */}
						</p>
					) : (
						<p>
							{data?.countOfUsersRating ? data?.countOfUsersRating : 0}{" "}
							{data?.countOfUsersRating > 1
								? "global ratings - "
								: "global rating - "}
							{data?.countOfUsersRating > 0 ? (<a href="#" className="" onClick={() => courseReviewMdal(data)}> See parent and learner reviews <i class="fa-sharp fa-light fa-arrow-right ml-1"></i></a>) : ""}
						</p>
					)}
					<div className="Aratinglist">
						{overAllRatingData?.data.map((value, index) => (
							<div className="ratingitem flex mb-3" key={index}>
								<div className="Aratinngstar">{value?.name}</div>
								<div className="ratingProgressbar">
									<p>
										<ProgressBar
											value={value?.averageRating}
											data={overAllRatingData}
										/>
									</p>
								</div>
								<div className="Aratingpercentage">
									{!isNaN(value?.averageRating) ? value?.averageRating : 0}%
								</div>
							</div>
						))}
					</div>
					{loggedInUser?.role?.name !== "PROVIDER" &&
						(data?.isEnrolled === true ||
							coursedata?.curatorDto ||
							(coursedata?.isEnrolled === true && type === "provider") ||
							activityRatType === "activityRatType" ||
							data.resourceType === "resourceProvider" ||
							resourceType === "resourceProvider" ||
							(data?.courseObj?.isEnrolled === true &&
								teacherPro === "teacherPro") ||
							(data?.courseObj?.isEnrolled === true &&
								type === "provider" &&
								teacherPro === "teacherPro") ||
							type === "resources" ? (
							<div
								className="AddReviewBtn text-center pointer"
								data-id={`${data.name}_rating_btn`}
								onClick={() => {
									showRating(ratingData, data);
									setRatingClass && setRatingClass(true);
								}}
							>
								<span className="pointer">
									{ratingData?.success && activityRatType === "activityRatType"
										? "Rate Activity"
										: type === "resources"
											? "Rate Resource"
											: data.resourceType === "resourceProvider" ||
												resourceType === "resourceProvider" ||
												teacherPro === "teacherPro"
												? "Rate Course Creator"
												: type === "provider"
													? "Rate Course Creator"
													: activityRatType === "activityRatType"
														? "Rate Activity"
														: "Review Course"}
									<i className="fa-solid fa-angle-right ml-2"></i>
								</span>
							</div>
						) : (
							""
						))}
				</>
			)}
		</div>
	);
}

import React, { useEffect } from "react";
import {
	addRatingsData,
	getActivityRating,
	getCourseRating,
} from "../../redux/actions/APIs";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import RatingWizad from "../widget/RatingWizad";
import AddRatings from "../widget/AddRatings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CourseRatings = ({ data, setRatingClass, setRateState }) => {
	const dispatch = useDispatch();
	const params = useParams();

	const [ratingPopup, setRatingPopup] = useState(false);
	const [ratingWizadId, setRatingWizadId] = useState("");
	const [myRating, setMyRating] = useState(0);
	const [activityData1, setActivityData] = useState("");
	const [showWizad, setShowWizad] = useState(undefined);
	const [showActivityPopup, setShowActivityPopup] = useState("");

	const [upatedRating, setUpdateRating] = useState("");

	const {
		response,
		selectedDim,
		dimension,
		getSelectedUser,
		courseRating,
		ratingData,
		defaultChildData,
	} = useSelector((state) => state.collections);

	useEffect(() => {
		if (response && response?.success) {
			if (
				response.objectName === "CourseRating" &&
				data.id === response.recordId
			) {
				data.countOfUsersRating = response.recordsCount;
				data.rating = response.records[0]?.avgRating;
			}

			showRating();
		}
	}, [response, data]);

	useEffect(() => {
		if (response?.success && setRatingClass) {
			setRatingClass(false);
		}
	}, [response]);

	const saveRating = async (rating, userId, data) => {
		if (setRatingClass) {
			setRatingClass(false);
		}
		if (setRateState) {
			setRateState(false);
		}
		let ratingType = "activities";

		if (activityData1?.type === "PROVIDER") {
			ratingType = "course";
		} else {
			ratingType = "activities";
		}

		if (activityData1?.id) {
			dispatch(
				addRatingsData(
					rating,
					activityData1?.id,
					userId,
					ratingType,
					dimension,
					selectedDim,
					params?.id
				)
			);
		}
	};

	const showRating = (data, activityData) => {
		setShowActivityPopup(activityData?.type);
		setActivityData(activityData);
		setMyRating(data?.length > 0 && data?.records);
		setRatingPopup(!ratingPopup);
		setShowWizad(false);
		if (!data && !activityData) {
			dispatch(getCourseRating());
			setRatingPopup(false);
		}
	};

	const showRatingWizad = (record, type) => {
		let userId;
		if (getSelectedUser?.id) {
			userId = getSelectedUser?.id;
		} else {
			userId = defaultChildData?.id;
		}

		if (setRateState) {
			setRateState(true);
		}

		setShowWizad({ type: type, status: true });
		setRatingWizadId("");
		if (record?.isEnrolled) {
			dispatch(getCourseRating(userId, record?.id));
		}
		setShowWizad({ type: type, status: true });
		dispatch(getActivityRating(record?.id)).then(() => {
			setRatingWizadId(record?.id);
		});
	};

	const onClickOutside1 = (data) => {
		setShowWizad(undefined);
		if (setRateState) {
			setRateState(false);
		}
	};

	return (
		<>
			<div
				className="RatingWrap1  flex  dropdown-toggle mt-1 justify-content-center"
				onClick={() => showRatingWizad(data, "course")}
			>
				<div className="d-flex align-items-center">
					<Rating
						initialValue={data?.rating ? data?.rating : 0}
						transition
						allowFraction
						readonly
						size={20}
						fillColorArray={[
							"#f17a45",
							"#f19745",
							"#f1a545",
							"#f1b345",
							"#f1d045",
						]}
					/>

					<span className="ratingCount" key={Math.random()}>
						<i className="fa-solid fa-angle-down ml-1" />{" "}
						<span className="ml-1">
							{data?.countOfUsersRating ? data?.countOfUsersRating : "0"}
						</span>
					</span>
				</div>
			</div>

			{showWizad?.type === "course" &&
				showWizad?.status === true &&
				data.id === ratingWizadId && (
					<RatingWizad
						className=""
						onClickOutside1={onClickOutside1}
						showRating={showRating}
						data={data}
						// props={props}
						ratingData={courseRating}
						setRatingClass={setRatingClass}
					/>
				)}

			<div className="GridCardList">
				{showActivityPopup === "PROVIDER" && ratingPopup && (
					<AddRatings
						saveRating={saveRating}
						showRating={showRating}
						data={data}
						myRating={courseRating?.records}
						ratingUserId={
							getSelectedUser?.id ? getSelectedUser?.id : defaultChildData?.id
						}
						setRatingClass={setRatingClass}
					/>
				)}

				{showActivityPopup === "CUSTOM" && ratingPopup && (
					<div className="GridCardList">
						<AddRatings
							saveRating={saveRating}
							showRating={showRating}
							data={data}
							myRating={ratingData?.records}
							ratingUserId={
								getSelectedUser?.id ? getSelectedUser?.id : defaultChildData?.id
							}
							type="activity"
							setRatingClass={setRatingClass}
						/>
					</div>
				)}
			</div>
		</>
	);
};
export default CourseRatings;

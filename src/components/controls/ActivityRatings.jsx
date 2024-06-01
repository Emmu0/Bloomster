import React from "react";
import {
  addRatingsData,
  getActivityRating,
  getCourseRating,
} from "../../redux/actions/APIs";
import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import RatingWizad from "../widget/RatingWizad";
import AddRatings from "../widget/AddRatings";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ActivityRatings = ({ data }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const [ratingPopup, setRatingPopup] = useState(false);
  const [ratingWizadId, setRatingWizadId] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [activityData1, setActivityData] = useState("");
  const [showWizad, setShowWizad] = useState(undefined);

  const [activityRecord, setActivityRecord] = useState("");
  const [showActivityPopup, setShowActivityPopup] = useState("");

  const { response, selectedDim, dimension, getSelectedUser, ratingData } =
    useSelector((state) => state.collections);

  useEffect(() => {
    if (response?.success) {
      showRating();
    }
  }, [response]);

  const saveRating = async (rating, userId, data) => {
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
  };

  const showRatingWizad = (record, type) => {
    setShowWizad({ type: type, status: true });
    setRatingWizadId("");
    if (type === "course") {
      dispatch(getCourseRating(getSelectedUser?.id, record?.id)).then(() => {
        setShowWizad({ type: type, status: true });
        dispatch(getActivityRating(record?.id)).then(() => {
          setRatingWizadId(record?.id);
        });
      });
    } else if (type === "activity") {
      setShowWizad({ type: type, status: true });
      dispatch(getActivityRating(record?.id)).then(() => {
        setActivityRecord(record);
        setRatingWizadId(record?.id);
      });
    }
  };

  const onClickOutside1 = (data) => {
    setShowWizad(false);
  };

  return (
    <>
      <div className="RatingWrap1   flex  dropdown-toggle" key={data?.id}>
        <div
          className="pointer flex"
          onClick={() => showRatingWizad(data, "activity")}
        >
          <Rating
            initialValue={!isNaN(data?.rating) ? data?.rating : 0}
            transition={false}
            allowFraction
            readonly
            allowHover={false}
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
          <span className="ratingCount">
            <i className="fa-solid fa-angle-down ml-1" />{" "}
            <span className="ml-1">
              {data?.countOfUserRating ? data?.countOfUserRating : 0}{" "}
            </span>
          </span>
        </div>
      </div>

      {showWizad?.type === "activity" &&
        showWizad?.status === true &&
        data?.id === ratingWizadId && (
          <RatingWizad
            ratingData={ratingData}
            showRating={showRating}
            data={activityRecord}
            onClickOutside1={onClickOutside1}
            activityRatType={"activityRatType"}
          />
        )}

      <div className="GridCardList">
        {showActivityPopup === "CUSTOM" && ratingPopup && (
          <div className="GridCardList">
            <AddRatings
              saveRating={saveRating}
              showRating={showRating}
              data={data}
              myRating={ratingData?.records}
              ratingUserId={getSelectedUser?.id}
              type="activity"
            />
          </div>
        )}
      </div>
    </>
  );
};
export default ActivityRatings;

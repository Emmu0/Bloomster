import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import RatingWizad from "../widget/RatingWizad";
import AddRatings from "../widget/AddRatings";
import {
  getActivityRating,
  addRatingsData,
  getProviderRating,
} from "../../redux/actions/APIs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
let userData;
const ProviderProfile = ({
  data,
  resourceType,
  teacherPro,
  coursedata,
  modlessonId,
  setRatingClass,
  provId,
  setRateState,
}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const {
    dimension,
    selectedDim,
    response,
    providerRating,
    getSelectedUser,
    defaultChildData,
    providerModal,
  } = useSelector((state) => state.collections);
  const [showWizad, setShowWizad] = useState(undefined);
  const [activityData1, setActivityData] = useState("");
  const [ratingWizadId, setRatingWizadId] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [ratingPopup, setRatingPopup] = useState(false);

  if (providerModal?.resourceType === "resourceProvider") {
    userData = providerModal?.courseData?.curatorDto;
  } else if (data.curatorDto) {
    userData = data.curatorDto;
  } else if (teacherPro === "teacherPro") {
    userData = data;
  } else {
    userData = data?.provider;
  }

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

    dispatch(getProviderRating(userId, provId?.id));

    setShowWizad({ type: type, status: true });
    dispatch(getActivityRating(provId?.id)).then(() => {
      setRatingWizadId(provId?.id);
    });
  };

  const onClickOutside1 = (data) => {
    setShowWizad(undefined);
    if (setRateState) {
      setRateState(false);
    }
  };

  useEffect(() => {
    if (response && response?.success) {
      if (
        response?.objectName === "ProviderRating" &&
        data.provider?.id === response?.recordId
      ) {
        data.provider.userCount = response.recordsCount;
        data.provider.avgRating = response.records[0]?.avgRating;
      } else if (
        response?.objectName === "ProviderRating" &&
        data?.curatorDto?.id === response?.recordId
      ) {
        data.curatorDto.userCount = response.recordsCount;
        data.curatorDto.avgRating = response.records[0]?.avgRating;
      }
      setRatingPopup(false);
      // showRating();
    }
  }, [response, data.curatorDto, data.provider]);

  useEffect(() => {
    if (!response) {
      setRatingPopup(false);
    }
  }, [response]);

  const showRating = (data, activityData) => {
    setActivityData(activityData);
    setMyRating(data?.length > 0 && data?.records);
    setRatingPopup(!ratingPopup);
    setShowWizad(false);
  };

  const saveRating = async (rating, userId, data) => {
    if (setRatingClass) {
      setRatingClass(false);
    }
    if (setRateState) {
      setRateState(false);
    }
    let ratingType = "activities";
    let activityProvider;

    if (activityData1?.type === "PROVIDER") {
      ratingType = "provider";
      activityProvider = activityData1?.provider;
    } else if (teacherPro === "teacherPro") {
      ratingType = "provider";
      activityProvider = activityData1;
    } else if (
      providerModal?.resourceType === "resourceProvider" ||
      resourceType === "resourceProvider"
    ) {
      ratingType = "provider";
      activityProvider = activityData1?.curatorDto;
    }

    if (activityData1?.id) {
      dispatch(
        addRatingsData(
          rating,
          activityProvider?.id,
          userId,
          ratingType,
          dimension,
          selectedDim,
          params?.id,
          "resourceProvider",
          modlessonId
        )
      );
    }
  };

  return (
    <>
      <div
        className="RatingWrap1  flex  dropdown-toggle TeacherratingCount"
        onClick={() => showRatingWizad(userData, "provider")}
        key={Math.random()}
      >
        <div className="d-flex align-items-center">
          <Rating
            initialValue={
              userData?.avgRating
                ? userData?.avgRating
                : userData?.providerRatingAverage
                ? userData?.providerRatingAverage
                : 0
            }
            // initialValue={
            //   userData?.providerRatingAverage
            //     ? userData?.providerRatingAverage
            //     : 0
            // }
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

          <span className="ratingCount">
            <i className="fa-solid fa-angle-down ml-1" />{" "}
            <span className="ml-1">
              {userData?.userCount
                ? userData?.userCount
                : userData?.countOfProviderRating
                ? userData?.countOfProviderRating
                : 0}
              {/* {userData?.countOfProviderRating
                ? userData?.countOfProviderRating
                : 0} */}
            </span>
          </span>
        </div>
      </div>

      {showWizad && provId?.id === ratingWizadId && (
        <div className="ratepopupp position-relative">
          <RatingWizad
            onClickOutside1={onClickOutside1}
            showRating={showRating}
            data={data}
            ratingData={providerRating}
            type={"provider"}
            resourceType={resourceType}
            teacherPro={teacherPro}
            coursedata={coursedata}
            setRatingClass={setRatingClass}
          />
        </div>
      )}
      {ratingPopup && (
        <AddRatings
          saveRating={saveRating}
          showRating={showRating}
          data={data}
          myRating={providerRating?.records}
          // loggedInUser={loggedInUser}
          ratingUserId={
            getSelectedUser?.id ? getSelectedUser?.id : defaultChildData?.id
          }
          type={"provider"}
          setRatingClass={setRatingClass}
        />
      )}
    </>
  );
};

export default ProviderProfile;

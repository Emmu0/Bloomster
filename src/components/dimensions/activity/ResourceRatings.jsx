import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileName } from "../../../utils/helper";
import { Rating } from "react-simple-star-rating";
import RatingWizad from "../../widget/RatingWizad";
import AddRatings from "../../widget/AddRatings";
import ProviderProfile from "../../controls/ProviderProfile";
import {
  getResourceRating,
  getActivityRating,
  ResourceRating,
} from "../../../redux/actions/APIs";
import { setProviderModal } from "../../../redux/actions";

const ResourceRatings = ({ val, modlessonId, resourceType }) => {
  const dispatch = useDispatch();

  const [ratingWizadId, setRatingWizadId] = useState("");
  const [showWizad, setShowWizad] = useState(false);
  const [activityData, setActivityData] = useState("");
  const [ratingPopup, setRatingPopup] = useState(false);

  const {
    resourcesRatingData,
    getComplexData,
    getLessonResources,
    response,
    dimension,
    selectedDim,
    getSelectedUser,
    overAllRating,
    providerModal,
  } = useSelector((state) => state.collections);

  useEffect(() => {
    if (response && response?.success) {
      if (
        response.objectName === "ResourceRating" &&
        val.id === response.recordId
      ) {
        val.countOfUserRating = response.recordsCount;
        val.rating = response.records[0]?.avgRating;
      }
      setRatingPopup(false);
      // showRating();
    }
  }, [response, val]);

  useEffect(() => {
    if (!response) {
      setRatingPopup(false);
    }
  }, [response]);

  const ratingResource = (data) => {
    setShowWizad(true);
    dispatch(getResourceRating(getSelectedUser?.id, val?.id)).then(() => {
      dispatch(getActivityRating(val?.id)).then(() => {
        setRatingWizadId(val.id);
        setShowWizad(true);
      });
    });
  };

  const showRating = (data, rating) => {
    setActivityData(rating);
    setRatingPopup(!ratingPopup);
  };

  const onClickOutside1 = (data) => {
    setShowWizad(false);
  };

  const saveRating = async (userId, rating) => {
    if (activityData?.id) {
      dispatch(
        ResourceRating(
          rating,
          activityData?.id,
          userId,
          dimension,
          selectedDim,
          modlessonId
        )
      );
    }
  };
  const _providerPopup = (data, obj) => {
    dispatch(setProviderModal(data));
  };
  return (
    <div className="Resorctitledtl flex ss">
      <div className="Topicnme flex">
        <div className="Topicomage">
          <i className="fa-regular fa-file-lines mr-2"></i>
        </div>
        <div className="TopicTitle ratepopupp position-relative">
          <h3>{val?.name}</h3>

          {/* {viewActivityFlag && ( */}
          <div className="RatingWrap1 flex dropdown-toggle" key={val?.id}>
            <div className="pointer flex" onClick={() => ratingResource(val)}>
              <Rating
                initialValue={!isNaN(val?.rating) ? val?.rating : 0}
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
                  {val?.countOfUserRating ? val?.countOfUserRating : 0}
                </span>
              </span>
            </div>
          </div>
          {/* )} */}
          {showWizad && val?.id === ratingWizadId && (
            <RatingWizad
              ratingData={resourcesRatingData}
              showRating={showRating}
              data={val}
              onClickOutside1={onClickOutside1}
              type={"resources"}
            />
          )}

          {val?.islocked && (
            <span className="Activitymenubar ml-2 pointer">
              <i className="fa-sharp fa-solid fa-lock"></i>
            </span>
          )}
        </div>

        {ratingPopup && (
          <AddRatings
            saveRating={saveRating}
            showRating={showRating}
            data={val}
            myRating={resourcesRatingData?.records}
            ratingUserId={getSelectedUser?.id}
            type={"resources"}
          />
        )}
      </div>

      {val?.curatorDto?.name && (
        <div className="Topicnme flex">
          <span
            className="TeacherActivityimg mr-2 pointer"
            onClick={() => _providerPopup(val?.curatorDto, val)}
          >
            {val?.curatorDto?.imageUrl ? (
              <img src={val?.curatorDto?.imageUrl} alt="..." />
            ) : (
              <span className="ProfileChild">
                {getProfileName(val?.curatorDto)}
              </span>
            )}
          </span>
          <div className="teachername">
            <span
              className="pointer"
              onClick={() => _providerPopup(val?.curatorDto, val)}
            >
              {val?.curatorDto?.name}
            </span>
            {Object.keys(val?.curatorDto).length > 0 && (
              <ProviderProfile
                data={val}
                resourceType={resourceType}
                modlessonId={modlessonId}
                provId={val?.curatorDto}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default ResourceRatings;

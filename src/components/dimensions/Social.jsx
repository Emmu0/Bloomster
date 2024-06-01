/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getImage, getSequnceSort } from "../../utils/helper";
import { swal, Rating } from "../../utils/Packages";
import WeekActivity from "./course/social/WeekActivity";
import * as image from "../../resources/images";
import {
  getActivityRating,
  getCourseRating,
  addRatingsData,
  getProviderRating,
} from "../../redux/actions/APIs";
import RatingWizad from "../widget/RatingWizad";
import AddRatings from "../widget/AddRatings";
import SocialList from "./SocialList";
import ReadMore from "../controls/ReadMore";
const Social = ({ courseDetail, handlePopUp, index }, props) => {
  const dispatch = useDispatch();
  const path = useParams();

  const {
    loggedInUser,
    ratingData,
    response,
    dimension,
    selectedDim,
    getSelectedUser,
  } = useSelector((state) => state.collections);
  const [visibleActivity, setVisibleActivity] = useState(7);
  const [selectedActivity, setSelectedActivity] = useState(
    courseDetail?.courseDetail && courseDetail?.courseDetail[0]?.activities
  );
  const [loadMore, setLoadMore] = useState(false);
  const [activityData1, setActivityData] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [showWizad, setShowWizad] = useState({ type: "", status: false });

  const [ratingPopup, setRatingPopup] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (response) {
      setRatingPopup(false);
    }
  }, [response]);

  const enrollNow = (data) => {
    new swal({
      position: "top-center",
      icon: "success",
      title: "Success",
      timer: 2000,
      text: "Enrolled Successfully",
      type: "success",
    });
  };
  const onClickOutside1 = (data) => {
    setShowWizad({ type: showWizad.type, status: false });
  };
  const saveRating = async (rating, userId, data) => {
    if (activityData1?.id) {
      if (showWizad?.type === "provider") {
        dispatch(
          addRatingsData(
            rating,
            activityData1?.provider?.id,
            userId,
            showWizad?.type,
            dimension,
            selectedDim,
            params?.id
          )
        );
      } else {
        dispatch(
          addRatingsData(rating, activityData1?.id, userId, showWizad?.type)
        );
      }
    }
  };
  const showRatingWizad = (data, type) => {
    if (type === "course") {
      dispatch(getActivityRating(courseDetail.id)).then(() => {
        setShowWizad({ type: type, status: true });
        dispatch(getCourseRating(loggedInUser?.id, courseDetail.id)).then(
          () => {
            setMyRating(ratingData?.records);
          }
        );
      });
    } else if (type === "provider") {
      dispatch(getActivityRating(courseDetail.provider?.id)).then(() => {
        setShowWizad({ type: type, status: true });
        dispatch(getProviderRating(path?.id, courseDetail.provider?.id)).then(
          () => {
            setMyRating(ratingData?.records);
          }
        );
      });
    } else {
      dispatch(getActivityRating(courseDetail.id)).then(() => {
        setShowWizad({ type: type, status: true });
        dispatch(getProviderRating(path?.id, courseDetail.id)).then(() => {
          setMyRating(ratingData?.records);
        });
      });
    }
  };

  const showRating = (data, activityData) => {
    setRatingPopup(!ratingPopup);
    setActivityData(activityData);
    setMyRating(data?.records);
    setShowWizad({ type: showWizad.type, status: false });
  };

  return (
    <div>
      <div className="SocialCoursecardWrap">
        <h4
          data-toggle="collapse"
          className="flex KATitle"
          aria-expanded="true"
          href={"#socialcardAcordian1"}
        >
          {courseDetail?.skill}
          <i className="fa-solid fa-angle-down"></i>
        </h4>
        <div
          className="AllsCaedwrap collapse AllsCaedwrap"
          id="socialcardAcordian1"
        >
          <div
            className="Gridcard SocialGridcard "
            id="collapseOne"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="Gridsocialsec">
              <div className="GridiamgeCard">
                <div className="Gridimage">
                  <img alt="" src={getImage(courseDetail.imageUrl)} />
                </div>
                <div className=" ratepopupp position-relative">
                  <div
                    className="RatingWrap1  flex  dropdown-toggle mt-2"
                    onClick={() => showRatingWizad(courseDetail, "course")}
                  >
                    <div className="d-flex align-items-center">
                      <Rating
                        initialValue={
                          courseDetail?.rating ? courseDetail?.rating : 0
                        }
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
                          {courseDetail?.countOfUsersRating
                            ? courseDetail?.countOfUsersRating
                            : "0"}
                        </span>
                      </span>
                    </div>
                  </div>
                  {showWizad.type === "course" && showWizad.status === true && (
                    <RatingWizad
                      className=""
                      onClickOutside1={onClickOutside1}
                      showRating={showRating}
                      data={courseDetail}
                      ratingData={ratingData}
                    />
                  )}
                  <ul>
                    <li>
                      <p className="flex">
                        <span className="gradeiconimage ml-5">
                          <img src={image.mortarboard} alt="" />
                          <span className="mt-1 d-inline-block">
                            Grade:{" "}
                            <strong>{getSelectedUser?.level?.name}</strong>
                          </span>
                        </span>
                      </p>
                    </li>
                    {/* <li>
                  <i className="fa-regular fa-share-nodes"></i> Share
                </li> */}
                  </ul>
                </div>
              </div>
              <div className="priceWrap">
                <button
                  className={`btn-blue btn-login d-block w-100 m-0`}
                  onClick={() => enrollNow(courseDetail)}
                  disabled={courseDetail?.isEnrolled ? true : false}
                >
                  <i className="fa-solid fa-paper-plane"></i>{" "}
                  {courseDetail?.isEnrolled ? "Enrolled" : "Enroll"}
                </button>
              </div>
            </div>
            <div className="GridDetails">
              <div className="GridCardTitle">
                <h3 data-toggle="modal" data-target="#coursedetailpage">
                  {courseDetail?.name}
                  <span>
                    90
                    <img src={image.money_bag} alt="" />
                  </span>
                  {/* <span>
                Ages: {courseDetail?.ageFrom}-{courseDetail?.ageTo}
              </span> */}
                </h3>
              </div>
              <div className="GridCardFullDetails">
                <div className="GridCardTitleDesc">
                  {/* <div className='gridSchool w-50 p-0 ml-3'>
										<div className='GridTeacher'>
											<span className=''>
												<img src={image.mortarboard} alt='' />
											</span>
											<div className='teachername'>
												{" "}
												<span className='skilledlist'>Course:</span>
												{courseDetail?.skill}
											</div>
										</div>
									</div> */}
                  <div className="GridTeacher w-100 align-items-center justify-content-end">
                    <span className="TeacherActivityimg mr-2">
                      <img src={image.userProfile} alt="..." />
                    </span>
                    <div className="teachername pointer">
                      Britney Watson
                      <div
                        className="RatingWrap1  flex  dropdown-toggle TeacherratingCount"
                        // key={courseDetail.id}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <Rating
                            initialValue="0"
                            ratingValue={20}
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
                              {/* ({courseDetail.activityRating ? courseDetail.activityRating : "0"} ) */}
                              0
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className='ListIcon'>
										<span
											className='threeDots'
											aria-haspopup='true'
											aria-expanded='false'
											id='navbardropdownAct1'
											data-toggle='dropdown'>
											<i className='fa-solid fa-ellipsis-vertical'></i>
										</span>

										<ul
											className='dropdown-menu dropdown-menu-end'
											aria-labelledby='navbardropdownAct1'>
											<li>
												{" "}
												<div className='ActivityCategory border-0'>
													<h4 className='d-flex align-items-center p-0 border-0'>
														<i className='fa-duotone fa-line-height mr-2'></i>
														{courseDetail?.name}
													</h4>
												</div>
											</li>

											{courseDetail.activities &&
												getSequnceSort(courseDetail.activities)?.map(
													(socialData, index) => (
														<SocialList
															index={index}
															socialData={socialData}
															handlePopUp={handlePopUp}
														/>
													)
												)}
										</ul>
									</div> */}
                </div>
                <div className="gridActivity">
                  <div className="CourseardDesc">
                    <p className="d-flex align-items-center">
                      <span>
                        {" "}
                        <img src={image.myhc_92884} alt="" />
                      </span>{" "}
                      <ReadMore limit={300} height={50}>
                        {courseDetail?.description}
                      </ReadMore>
                    </p>
                  </div>
                  <div className="activityListitems mt-3">
                    {courseDetail &&
                      courseDetail.activities &&
                      getSequnceSort(courseDetail.activities).map(
                        (activity, key) => {
                          if (!loadMore && key + 1 > visibleActivity) return;
                          return (
                            <React.Fragment>
                              <WeekActivity
                                activity={activity}
                                keyvalue={key}
                                handlePopUp={handlePopUp}
                                courseObj={courseDetail}
                              />
                            </React.Fragment>
                          );
                        }
                      )}
                  </div>

                  {selectedActivity &&
                    selectedActivity?.length > 6 &&
                    visibleActivity <= selectedActivity?.length && (
                      <div
                        className="loadmoreActivity"
                        onClick={() => setVisibleActivity((prev) => prev + 6)}
                      >
                        See More <i className="fa-regular fa-chevron-down"></i>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          {ratingPopup && (
            <AddRatings
              saveRating={saveRating}
              showRating={showRating}
              data={courseDetail}
              myRating={myRating}
              loggedInUser={loggedInUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Social;

/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as image from "../../resources/images";
import { getSequnceSort, kFormatter, showRoundValue } from "../../utils/helper";
import RoundProgress from "../controls/RoundProgress";
export default function Cards({ widgetOpen }) {
  const history = useHistory();
  const [widgetShw, setWidgetShw] = useState(false);
  const { loggedInUser, ribbonData } = useSelector(
    (state) => state.collections
  );

  window.onscroll = function () {
    myscrollFunction();
  };
  var header = document.getElementById("dimensionCommanCard");
  function myscrollFunction() {
    if (window.pageYOffset > 0) {
      header?.classList?.add("sticky");
    } else {
      header?.classList?.remove("sticky");
    }
  }

  const back = () => {
    if (
      loggedInUser?.role?.name !== "PROVIDER" &&
      !window.location.pathname.includes(["/profile/home"])
    ) {
      return (
        <div className="backicon">
          <span onClick={() => history.goBack()}>
            <i className="fa-solid fa-angle-left mr-1"></i>Back
          </span>
        </div>
      );
    } else if (
      loggedInUser?.role?.name === "PROVIDER" &&
      !window.location.pathname.includes(["base/courses/" + loggedInUser?.id])
    ) {
      return (
        <div className="backicon">
          <span onClick={() => history.goBack()}>
            <i className="fa-solid fa-angle-left mr-1"></i>Back
          </span>
        </div>
      );
    }
  };

  const widgetShow = () => {
    setWidgetShw(!widgetShw);
    widgetOpen(!widgetShw);
  };
  let pctAll = [];
  let userTotal = 0;
  ribbonData &&
    ribbonData?.records[0]?.ribbonDtos &&
    ribbonData?.records[0]?.ribbonDtos.length > 0 &&
    getSequnceSort(ribbonData?.records[0]?.ribbonDtos).map((vl, ky) => {
      pctAll.push(vl?.pctCompleted);
      let sum = pctAll.reduce((e, i) => e + i);
      let total = sum / pctAll.length;
      userTotal = total;
    });

  return (
    <>
      <div className="dimensionCardWrap position-relative ">
        <div
          className="flipIcon collapsed hide"
          data-toggle="collapse"
          data-target="#dimensionCommanCard"
          onClick={() => widgetShow()}
        >
          <React.Fragment>
            {localStorage.getItem("widgetCard" + loggedInUser?.id) ? (
              <i className={`fa-solid fa-angles-up`} />
            ) : (
              <i className={`fa-solid fa-angles-down`} />
            )}
          </React.Fragment>
        </div>
      </div>

      {back()}

      <div
        className={`diemensionCard collapse ${
          localStorage.getItem("widgetCard" + loggedInUser?.id)
            ? "show"
            : "hide"
        }  `}
        id="dimensionCommanCard"
      >
        <div className="cardleftpannel d-flex justify-content-between">
          {ribbonData?.records[0] &&
            getSequnceSort(ribbonData?.records[0]?.ribbonDtos)?.map(
              (cardData, key) => (
                <div className="Card flex " key={key}>
                  <div className="ribbonDimenson flex flex-wrap">
                    <div className="totlecout">
                      <span className="totleCourse">
                        <span>
                          {" "}
                          <i className="fa-regular fa-dash mr-1"></i> Available
                          Courses:{" "}
                        </span>
                        <strong>{cardData?.available}</strong>
                      </span>
                      <span className="totleCourse">
                        <span>
                          {" "}
                          <i className="fa-regular fa-dash mr-1"></i> Enrolled
                          Courses:{" "}
                        </span>
                        <strong>{cardData?.enrolled}</strong>
                      </span>
                      <span className="totleCourse">
                        <span>
                          {" "}
                          <i className="fa-regular fa-dash mr-1"></i> Completed
                          Courses:{" "}
                        </span>
                        <strong>{cardData?.complete}</strong>
                      </span>
                    </div>
                    <div className="position-relative p-0 dicardrightside">
                      <div className="position-relative round_progress">
                        {/* <RoundProgress data={cardData?.progress} /> */}
                        <div className="skillprogrs">
                          <span>
                            {showRoundValue(cardData?.progress)}
                            <span className="percentage_sign">%</span>
                          </span>
                        </div>
                        {/* <div className="skillprogrs"><span>{Number.isFinite(cardData?.progress) ? (cardData?.progress?.toFixed(1) < 0.5 ? (cardData?.progress === 0 ? cardData?.progress : cardData?.progress?.toFixed(1)) : Math.round(cardData?.progress)) : ""}<span className="percentage_sign">%</span></span></div> */}
                      </div>
                      <span className="d-block ribbonPoint">
                        <span className="earnnoCoin">
                          {kFormatter(cardData?.points) || cardData?.points}
                        </span>
                        <img src={image.money_bag} alt="" />
                      </span>
                    </div>
                  </div>

                  <div className="flex w-100">
                    <span className="BedgesLeft"> </span>
                  </div>
                </div>
              )
            )}
        </div>

        <div className="cardrightpannel d-flex">
          <div className="Card flex">
            <div className="totlecout">
              <span className="totleCourse">
                <span>
                  {" "}
                  <i className="fa-regular fa-dash mr-1"></i> Available Courses:{" "}
                </span>
                <strong>{ribbonData?.records[0].availableCourses}</strong>
              </span>
              <span className="totleCourse">
                <span>
                  {" "}
                  <i className="fa-regular fa-dash mr-1"></i> Enrolled Courses:{" "}
                </span>
                <strong>{ribbonData?.records[0].enrolledCourses}</strong>
              </span>
              <span className="totleCourse">
                <span>
                  {" "}
                  <i className="fa-regular fa-dash mr-1"></i> Completed Courses:{" "}
                </span>
                <strong>{ribbonData?.records[0].completedCourses}</strong>
              </span>
            </div>
            <div className=" ribbonDimenson flex w-100 justify-content-between">
              <p>
                <strong>Overall Progress</strong>{" "}
              </p>
              <div className=" flex">
                <div className="position-relative w-auto mr-3 round_progress">
                  {/* <RoundProgress data={ribbonData?.records[0].progress} /> */}
                  <div className="skillprogrs">
                    <span>
                      {showRoundValue(ribbonData?.records[0].progress)}
                      <span className="percentage_sign">%</span>
                    </span>
                  </div>
                  {/* <div className="skillprogrs"><span>{ribbonData?.records[0].progress?.toFixed(1) < 0.5 ? (ribbonData?.records[0].progress === 0 ? ribbonData?.records[0].progress : ribbonData?.records[0].progress?.toFixed(1)) : Math.round(ribbonData?.records[0].progress)}<span className="percentage_sign">%</span></span></div> */}
                </div>
                <span className="BedgesLeft ">
                  {" "}
                  <span className="earnnoCoin">
                    {ribbonData?.records[0].badges}
                  </span>
                  <img src={image.score_badge} className="medal_width" alt="" />
                </span>
                <span>
                  <span className="earnnoCoin">
                    {kFormatter(ribbonData?.records[0].points) ||
                      ribbonData?.records[0].points}
                  </span>
                  <img src={image.money_bag} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

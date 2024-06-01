/** @format */

import React, { useEffect, useState } from "react";
import { Modal, ShimmerCategoryList } from "../../utils/Packages";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/actions";

import HolisticChart from "./HolisticChart";
import { getDashboard, getHolistic } from "../../redux/actions/Home";
import ShowOverallProgressPopup from "../home/ShowOverallProgressPopup";
import { getCapitalized, showRoundValue } from "../../utils/helper";
import { ShimmerText } from "react-shimmer-effects";

const HolisticModal = () => {
  const { getHolisticObj, dashboardData } = useSelector((state) => state.home);
  const { defaultChildData } = useSelector((state) => state.collections);

  const dispatch = useDispatch();

  useEffect(() => {
    if (defaultChildData?.id) {
      dispatch(getDashboard(defaultChildData?.id));
      dispatch(getHolistic(defaultChildData?.id));
    }
  }, []);
  const close = () => {
    dispatch(showModal());
  };
  const [activeTab, setActiveTab] = useState("Dimension");

  let totalProgress = 0;
  let numDimensions = 0;

  dashboardData &&
    dashboardData?.dimensions &&
    dashboardData.dimensions.forEach((vl, ky) => {
      totalProgress += vl.progress;
      numDimensions++;
    });

  const avgValue = totalProgress / numDimensions + 20;

  const [showOverallProgressPopup, setShowOverallProgressPopup] =
    useState(false);

  const handleShowOverallProgressPopup = (result) => {
    setShowOverallProgressPopup(result);
  };

  return (
    <>
      <Modal
        id="common-modal"
        size="lg"
        centered={true}
        show={true}
        className="courseInformation holisticmodal AddChildPopup"
      >
        <Modal.Header className={`hoosrSubModlPopup`}>
          <div className="heading border-0 p-0 w-100">
            <h2 className="flex">
              <span>
                <img src={image.Chartimgicon} className="mr-2" /> Holistic View
              </span>
              <button onClick={() => close()} className="btn btn-primary">
                <i className="fa-regular fa-xmark m-0"></i>
              </button>
            </h2>
          </div>
        </Modal.Header>

        <Modal.Body className="p-0">
          <div className="tabgrid w-100 m-0">
            <ul>
              <li
                class={`tabs  ${
                  activeTab === "Dimension" ? "active-tabs" : ""
                } w-50`}
                onClick={() => setActiveTab("Dimension")}
              >
                <img src={image.dimension3d} />
                Dimension
              </li>
              <li
                class={`tabs  ${
                  activeTab === "Quadrant" ? "active-tabs" : ""
                } w-50`}
                onClick={() => setActiveTab("Quadrant")}
              >
                <img src={image.quadrant_icon} alt="" />
                Quadrant
              </li>
            </ul>
          </div>
          {dashboardData && getHolisticObj ? (
            <>
              <div
                className={`DChartWrap ${
                  activeTab === "Dimension" ? "d-none" : ""
                }`}
              >
                <HolisticChart
                  data={getHolisticObj && getHolisticObj?.records[0]}
                />
              </div>

              <div
                className={`DChartWrap m-0 mt-5 mb-5 ${
                  activeTab === "Quadrant" ? "d-none" : ""
                }`}
              >
                {dashboardData?.dimensions && (
                  <div className="Holisticdimeview">
                    <div className="HolisticgrowthFlwr">
                      <div className="HGmaincircle flextwo">
                        <div
                          className="HGInner_cirlce flextwo flex-wrap"
                          style={{
                            width: avgValue + "%",
                            height: avgValue + "%",
                            minWidth: avgValue + "%",
                          }}
                        >
                          <p className="w-100 text-center">
                            {" "}
                            {dashboardData?.progress.toFixed()}
                            <span className="percentage_sign">%</span>
                          </p>
                          {/* {avgValue >= 30 && (
                        <h3 className="w-100 text-center">
                          {getProfileName(defaultChildData)}
                        </h3>
                      )}{" "} */}
                        </div>
                        {dashboardData &&
                          dashboardData?.dimensions &&
                          dashboardData.dimensions.map((vl, ky) => {
                            return (
                              <div
                                className={`HolinnerProgcircle HG${vl.name}crl flextwo`}
                                key={ky}
                              >
                                <div
                                  className="Dimen_Circle_inner "
                                  style={{
                                    height: `calc(${vl?.progress}% + 9px)`,
                                    width: `calc(${vl?.progress}% + 9px)`,
                                    minWidth: `calc(${vl?.progress}% + 9px)`,
                                  }}
                                >
                                  <p
                                    className={
                                      vl.progress > 9
                                        ? "planetProgress"
                                        : vl.progress === 100
                                        ? "fullprogress"
                                        : vl.dimPro === 0
                                        ? "plazeroprogress"
                                        : vl.dimPro < 0.51
                                        ? "planetprog"
                                        : ""
                                    }
                                  >
                                    {/* {vl.progress} */}
                                    {showRoundValue(vl?.dimPro)}
                                    {/* {vl?.dimPro?.toFixed(1) < 0.5 ? (vl?.dimPro === 0 ? vl?.dimPro : vl?.dimPro?.toFixed(1)) : Math.round(vl?.dimPro)} */}
                                    <span className="percentage_sign">%</span>
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      <h4 className="text-center mt-5 pt-3">
                        {getCapitalized(defaultChildData.firstName)}'s Overall
                        Progress{" "}
                        <img
                          src={image.chat_icon}
                          className="chat_icon pointer"
                          alt=""
                          onClick={() => handleShowOverallProgressPopup(true)}
                        />
                      </h4>
                    </div>
                    <div className="Holisticcharttengent">
                      <ul className="flex flex-wrap">
                        <li>
                          <span className="GRtengent OverallTeggent"></span>
                          Overall Progress
                        </li>
                        <li>
                          <span className="GRtengent SocialTeggent"></span>
                          Social
                        </li>
                        <li>
                          <span className="GRtengent EmotionalTeggent"></span>
                          Emotional
                        </li>
                        <li>
                          <span className="GRtengent SpritiualTeggent"></span>
                          Spiritual
                        </li>
                        <li>
                          <span className="GRtengent PhysicalTeggent"></span>
                          Physical
                        </li>
                        <li>
                          <span className="GRtengent intelTeggent"></span>
                          Intellectual
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <ShimmerText line={5} gap={10} />
          )}
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5 m-0 ml-auto cancelbutton"
              onClick={() => close()}
            >
              <i className="fa-solid fa-xmark mr-2"></i>Close
            </button>
            {/* <button
            type="button"
            onClick={() => _onSubmit()}
            className="btn-blue btn-login d-block mb-5 mr-3"
          >
            <i className="fa-solid fa-paper-plane"></i> Ok
          </button> */}
            {/* <button
            type="submit"
            className="btn-blue btn-login d-block mb-5 ml-auto"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>Submit
          </button> */}
          </div>
        </Modal.Footer>
      </Modal>
      {showOverallProgressPopup && (
        <ShowOverallProgressPopup
          handleShowOverallProgressPopup={handleShowOverallProgressPopup}
        />
      )}
    </>
  );
};

export default HolisticModal;

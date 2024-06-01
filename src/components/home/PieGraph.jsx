import React, { useState } from "react";
import * as image from "../../resources/images";
import {
  getCapitalized,
  getDimIcon,
  isDimension,
  showRoundValue,
} from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  dimView,
  sideBarProgress,
  showGrowthModal,
  showSkillModal,
  dimSkillData,
  showSkillgrowthModal,
  showDimGuidanceModal,
} from "../../redux/actions/Home";
import { selectTab } from "../../redux/actions";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";
import { getJourny } from "../../redux/actions/APIs";
import { useEffect } from "react";

const PieGraph = ({
  DimData,
  skillLoader,
  ky,
  totalEnrolledSkilled,
  totalSkill,
  skillCompleteCount,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { getdimension, defaultChildData, selectedDim } = useSelector(
    (state) => state.collections
  );
  const { dimViewObj, growthSkillPopup } = useSelector((state) => state.home);
  const [showAdam, setShowAdam] = useState();

  const _handleClick = (data, dimData) => {
    if (!dimViewObj) {
      dispatch(sideBarProgress());
    }
    if (isDimension(data) && !dimViewObj) {
      let selectedDim =
        getdimension && getdimension?.records.find((obj) => obj?.name === data);
      dispatch(
        selectTab({
          key: selectedDim?.id,
          value: selectedDim?.name,
        })
      );
      dispatch(dimView(data));
      dispatch(dimSkillData(dimData));
    } else {
      if (!dimData?.skills && (DimData?.isEnrolled || DimData?.completion)) {
        dispatch(sideBarProgress(data));
        dispatch(dimSkillData(dimData));
      }
    }
  };

  const showDimModal = (data, type) => {
    if (isDimension(data?.name) && type === "dim") {
      dispatch(showGrowthModal(data));
    } else {
      dispatch(showSkillModal(data));
    }
  };

  const handleSkillModal = (data) => {
    dispatch(showSkillgrowthModal(data));
  };

  const coursePageRedirect = (skill) => {
    dispatch(getJourny(false));
    let filter = {
      name: selectedDim?.value,
      skillIds: [{ id: skill.id, value: skill.name }],
    };

    history.push({
      pathname: PATHS.COURSEPAGE_STR + defaultChildData?.id,
      type: "dimCatlog",
      state: {
        data: { filter: [filter] },
      },
    });
  };
  const _guidance = (object) => {
    dispatch(showDimGuidanceModal(object));
  };

  useEffect(() => {
    if (DimData?.name === selectedDim?.value) {
      setShowAdam(DimData);
    }
  }, [DimData, selectedDim]);

  return (
    <>
      {skillLoader ? (
        <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
      ) : (
        <div
          className={`NHProgresslistitem ${isDimension(DimData?.name)
            ? DimData?.name + "itemsNH"
            : "skillsliitem "
            } ${dimViewObj && DimData?.skills?.length > 0
              ? " soicialitemsNH simneskillcombo"
              : ""
            }`}
        >
          {(totalEnrolledSkilled &&
            dimViewObj &&
            DimData?.skills?.length > 0 &&
            showAdam?.completion !== 100 &&
            totalEnrolledSkilled > 0) ||
            (dimViewObj &&
              DimData?.proficiency < 80 &&
              DimData?.skills?.length > 0 &&
              totalSkill > 0 &&
              skillCompleteCount > 0) ? (
            <p className="text-center mt-3 mb-3">
              {" "}
              <a
                href="#"
                onClick={() => _guidance(DimData)}
                className="text-center  m-auto"
              >
                {" "}
                <strong data-toggle="modal" data-target="#schoolactivity50">
                  {" "}
                  What should {getCapitalized(defaultChildData?.firstName)} do
                  next?
                  {/* {selectedDim && selectedDim?.value}  */}
                </strong>
              </a>
            </p>
          ) : (
            ""
          )}
          {!dimViewObj && DimData?.skills?.length ? (
            <h4 className="text-center flextwo mb-2">
              {getDimIcon(DimData.name)}
              {DimData?.name} Dimension
              <span className="pointer" onClick={() => showDimModal(DimData, "dim")}>
                <img src={image.chat_icon} className="chat_icon" alt="" />
              </span>
            </h4>
          ) : (
            (!isDimension(DimData?.name) || !DimData?.hasOwnProperty("skills")) && (
              <h4 className="text-center  pb-2">
                {DimData && DimData?.index}. {DimData?.name}
                <span className="pointer" onClick={() => showDimModal(DimData, "skill")}>
                  <img src={image.chat_icon} className="chat_icon" alt="" />
                </span>
              </h4>
            )
          )}
          <div
            className={`NHPreogressouter  ${DimData?.progress > 80 ? "flextwo" : ""
              } ${!dimViewObj ? "pointer" : ""} ${dimViewObj && (DimData?.isEnrolled || DimData?.completion > 0)
                ? "pointer"
                : ""
              } `}
            onClick={() => _handleClick(DimData?.name, DimData)}
          >
            <div
              className={`NHProgressinner ${DimData?.progress > 80 ? "flextwo" : ""
                }`}
              style={{
                width: `calc(${DimData?.progress}% + ${dimViewObj && isDimension(DimData?.name) ? "12.5px" : "9px"
                  })`,
                height: `calc(${DimData?.progress}% + ${dimViewObj && isDimension(DimData?.name) ? "12.5px" : "9px"
                  })`,
              }}
            >
              <p>
                {!dimViewObj ? showRoundValue(DimData?.dimPro) : ""}
                {dimViewObj
                  ? ky === 1
                    ? showRoundValue(DimData?.dimPro)
                    : showRoundValue(DimData?.skillPro, DimData)
                  : ""}
                {/* {!dimViewObj ? (DimData?.dimPro?.toFixed(1) < 0.5 ? (DimData?.dimPro === 0 ? DimData?.dimPro : DimData?.dimPro?.toFixed(1)) : Math.round(DimData?.dimPro)) : ""} */}
                {/* {dimViewObj ? ky === 1 ? (DimData?.dimPro?.toFixed(1) < 0.5 ? (DimData?.dimPro === 0 ? DimData?.dimPro : DimData?.dimPro?.toFixed(1)) : Math.round(DimData?.dimPro)) : (DimData?.skillPro?.toFixed(1) < 0.5 ? (DimData?.skillPro === 0 ? DimData?.skillPro : DimData?.skillPro?.toFixed(1)) : Math.round(DimData?.skillPro)) : ""} */}
                <span className="percentage_sign">%</span>
              </p>
            </div>
          </div>
          {dimViewObj && DimData.skills ? (
            <div className="NHDimeProgName flextwo mt-1">
              <h5>
                <img src="" alt="" />
                {DimData && DimData?.name} Dimension Progress
              </h5>{" "}
              <span
                className="pointer"
                onClick={() => handleSkillModal(DimData)}
              >
                <img src={image.chat_icon} alt="" className="chat_icon" />
              </span>
            </div>
          ) : !dimViewObj ? (
            <div className="NHDimeProgName flextwo mt-2 ">
              <h4>Progress</h4>
              <span
                className="pointer"
                onClick={() => handleSkillModal(DimData)}
              >
                <img src={image.chat_icon} className="chat_icon" alt="" />
              </span>
            </div>
          ) : DimData?.completion > 0 ||
            (DimData.isEnrolled &&
              !["Math", "English"].includes(DimData?.name)) ||
            DimData?.name === "Science" ||
            DimData?.name === "Social Studies" ? (
            <div className="NHDimeProgName flextwo mt-2 ">
              <h4>Progress</h4>

              <span
                className="pointer"
                onClick={() => handleSkillModal(DimData)}
              >
                <img src={image.chat_icon} className="chat_icon" alt="" />
              </span>
            </div>
          ) : (
            <div className="NHDimeProgName flextwo mt-2 ">
              <h4 className="pointer">
                <a
                  href="javascript:void(0)"
                  onClick={() => coursePageRedirect(DimData)}
                >
                  Explore Courses
                </a>
              </h4>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PieGraph;

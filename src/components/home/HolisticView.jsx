import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as image from "../../resources/images";
import PieGraph from "./PieGraph";
import Sidebar from "./Sidebar";
import {
  getCapitalized,
  getProfileName,
  showRoundValue,
} from "../../utils/helper";

import { selectTab, showModal, viewLernerPlan } from "../../redux/actions";
import {
  ShimmerCategoryItem,
  ShimmerSimpleGallery,
} from "react-shimmer-effects";
import { showOverallModal } from "../../redux/actions/Home";
import { useState } from "react";
import { holisticSkillData } from "../../utils/DataObjects";
import ShowOverallProgressPopup from "./ShowOverallProgressPopup";
import {
  getDimensionPlanData,
  getJourny,
  getJournyCourses,
  getLearnerPlanTags,
  getUpdateLearnerPlan,
} from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LearnerPlanRightPanel from "../learnerplan/LearnerPlanRightPanel";

const HolisticView = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { defaultChildData } = useSelector((state) => state.collections);
  const { dashboardData, showoverModal } = useSelector((state) => state.home);

  const [message, setMessage] = useState();
  const [showOverallProgressPopup, setShowOverallProgressPopup] =
    useState(false);

  const handleShowOverallProgressPopup = (result) => {
    setShowOverallProgressPopup(result);
  };

  const [toggleState, setToggleState] = useState(true);
  const [weeks, setWeeks] = useState(0);
  useEffect(() => {
    dispatch(selectTab());
    if (dashboardData?.userPlans?.length > 0) {
      setToggleState(true);
      setWeeks(parseInt(dashboardData?.week));
    } else {
      setToggleState(false);
    }
  }, [dashboardData]);

  let socialObj = [];
  let emotionalObj = [];
  let spiritualObj = [];
  let physicalObj = [];
  let intellectualObj = [];

  dashboardData &&
    dashboardData?.dimensions.map((obj) => {
      if (obj.name === "Physical") {
        physicalObj = obj;
      } else if (obj.name === "Mindfulness") {
        spiritualObj = obj;
      } else if (obj.name === "Social") {
        socialObj = obj;
      } else if (obj.name === "Emotional") {
        emotionalObj = obj;
      } else if (obj.name === "Intellectual") {
        intellectualObj = obj;
      }
    });

  const handleClickHere = () => {
    dispatch(getJourny(false));

    history.push({
      pathname: PATHS.COURSEPAGE_STR + defaultChildData?.id,
      state: { isFilter: true },
    });
  };

  const showOverall = () => {
    dispatch(showOverallModal(true));
  };

  let progressCount = 0;

  dashboardData &&
    dashboardData?.dimensions.map((vl) => {
      progressCount += vl.dimPro;
    });

  const handleToggleState = (state) => {
    setToggleState(state);
  };

  const _redirectLearnerPlan = () => {
    history.push(PATHS.STR_LEARNER_PLAN + defaultChildData?.id);
  };

  const handleMoreOptions = (type) => {
    if (type === "changePace") {
      history.push({
        pathname: PATHS.STR_LEARNER_PLAN + defaultChildData?.id,
        state: {
          show: "changePace",
          screen: 1,
        },
      });
    } else if (type === "createNewPlan") {
      dispatch(getUpdateLearnerPlan(defaultChildData?.id));
      history.push({
        pathname: PATHS.STR_LEARNER_PLAN + defaultChildData?.id,
        state: {
          show: "recommended",
          screen: 1,
        },
      });
      dispatch(getLearnerPlanTags());
      dispatch(getJourny());
      dispatch(getDimensionPlanData());
      dispatch(getJournyCourses());
    } else if (type === "courseCatlog") {
      history.push(PATHS.COURSEPAGE_STR + defaultChildData?.id);
    }
  };
  //Why A Plan add message 16 may 2024
  const handlePopUpOpen = (type) => {
    if (type === "whyplan") {
      dispatch(
        showModal({
          type: "learnerPlanInfo",
          title: "Why A Plan?",
          icon: image.Calendericon,
          message: `Creating a learning plan helps parents and students work Bloomster into a regular habit and maintain consistency for maximum effectiveness.
`,
        })
      );
    }
  };

  return (
    <>
      <div className='LeftbarPannel p-0' id=''>
        <div className='CourseCardWrapper fullHeight100'>
          <div className='form-title mt-0 mb-0 Enrollcoursetitle heading'>
            <h2
              data-toggle='collapse'
              className='m-0 pt-0 pb-1 w-100 flex justify-content-between '>
              <span>
                {" "}
                <img src={image.Chartimgicon} className='mr-2' alt='' />
                Holistic View
              </span>{" "}
              <span>
                <img
                  src={image.chat_icon}
                  className='chat_icon pointer'
                  alt=''
                  onClick={() => showOverall()}
                />
              </span>
              {/* <div className="learner_pLan_dropdown">
								<span aria-haspopup="true"
									className="pointer"
									aria-expanded="false"

									id="leanerplndrpdwn"
									data-toggle="dropdown">
									<i class="fa-sharp fa-solid fa-bars"></i>
								</span>
								<ul className="dropdown-menu dropdown-menu-end lPDropdwnList dropdwn_leaner_" aria-labelledby="leanerplndrpdwn">
									<li>
										<p className="flexone" onClick={() => showOverall()}> <img src={image.Chartimgicon} className="mr-2" />Understanding Holistic Growth</p>
									</li>

									<li>
										<p className="flexone" onClick={() => _redirectLearnerPlan()}> <img src={image.newleaner_plan} className="mr-2" />Create New Plan</p>

									</li>

								</ul>
							</div> */}
            </h2>
          </div>
          {dashboardData ? (
            <div className='NhPageWrap'>
              {/* {
								dashboardData?.userPlans?.length === 0 && (
									<h4 className="stripLeaner_plan">
										<a href="javascript:void(0)" onClick={() => _redirectLearnerPlan()}>Create learner plan for {getCapitalized(defaultChildData.firstName)}</a>
									</h4>
								)
							} */}

              <h3 className='text-left mt-4 statementabthome'>
                {dashboardData?.progress <= 0 && (
                  <>
                    {/* Explore our most popular courses on your right or{" "}
										<a href="#" onClick={() => handleClickHere()}>
											click here
										</a>{" "}
										to explore other courses to begin{" "}
										{defaultChildData &&
											getCapitalized(defaultChildData.firstName)}
										's holistic growth journey. */}
                    Here is{" "}
                    {defaultChildData &&
                      getCapitalized(defaultChildData.firstName)}
                    's overall and dimensional progress. Click on the dimension
                    bubbles to explore a dimension.
                  </>
                )}
                {dashboardData?.progress > 0 &&
                  dashboardData?.progress <= 15 && (
                    <>
                      {defaultChildData &&
                        getCapitalized(defaultChildData.firstName)}{" "}
                      has taken their first steps towards their holistic growth.
                      They can accelerate their progress by countinuing their
                      current course or enrolling in other courses by{" "}
                      <a href='#' onClick={() => handleClickHere()}>
                        clicking here
                      </a>
                      .
                    </>
                  )}
                {dashboardData?.progress > 15 &&
                  dashboardData?.progress <= 50 && (
                    <>
                      {defaultChildData &&
                        getCapitalized(defaultChildData.firstName)}{" "}
                      is making good progress in their holistic growth journey.
                      Click on each dimension circle to learn more about their
                      progress or{" "}
                      <a href='#' onClick={() => handleClickHere()}>
                        click here
                      </a>{" "}
                      to explore more courses.
                    </>
                  )}
                {dashboardData?.progress > 50 && (
                  <>
                    {defaultChildData &&
                      getCapitalized(defaultChildData.firstName)}{" "}
                    is well on their way to becoming a well-rounded individual.
                    Click on each dimension circle to learn more about their
                    progress and decide what to work on next.{" "}
                  </>
                )}
              </h3>
              {/* <h3 className="text-center mt-4 statementabthome" id="statementabthome" dangerouslySetInnerHTML={{ __html: message }}></h3> */}
              <div className='NHProgreschartList flex flex-wrap'>
                <PieGraph
                  name={"Social"}
                  DimData={socialObj}
                  skillData={holisticSkillData[0]}
                />
                <div className='NHProgresslistitem NhHolisticProgress allitemsNH'>
                  <div className={`NHPreogressouter`}>
                    <div
                      className={`NHProgressinner ${showRoundValue(dashboardData?.progress) > 80
                        ? "flextwo"
                        : ""
                        }`}
                      style={{
                        width: `calc(${showRoundValue(
                          dashboardData?.progress
                        )}% + 12.5px)`,
                        height: `calc(${showRoundValue(
                          dashboardData?.progress
                        )}% + 12.5px)`,
                      }}>
                      <p
                        style={{
                          bottom:
                            showRoundValue(dashboardData?.progress) / 2 +
                            50 +
                            "%",
                        }}>
                        {" "}
                        {/* need to do some change in css */}
                        {showRoundValue(dashboardData?.progress)}
                        <span className='percentage_sign'>%</span>
                      </p>
                      {/* {progressCount >= 30 && (
                        <h3>{getProfileName(defaultChildData)}</h3>
                      )} */}
                    </div>
                  </div>
                  <div className='NHDimeProgName flextwo mt-2'>
                    <h4>
                      <img src='' alt='' />
                      {getCapitalized(defaultChildData.firstName)}'s Overall
                      Progress
                    </h4>{" "}
                    <span
                      className='pointer'
                      onClick={() => handleShowOverallProgressPopup(true)}>
                      <img src={image.chat_icon} alt='' className='chat_icon' />
                    </span>
                  </div>
                </div>
                <PieGraph
                  name={"Emotional"}
                  DimData={emotionalObj}
                  skillData={holisticSkillData[3]}
                />
                <PieGraph
                  name={"Intellectual"}
                  DimData={intellectualObj}
                  skillData={holisticSkillData[2]}
                />
                <PieGraph
                  name={"Mindfulness"}
                  DimData={spiritualObj}
                  skillData={holisticSkillData[4]}
                />

                <PieGraph
                  name={"Physical"}
                  DimData={physicalObj}
                  skillData={holisticSkillData[1]}
                />
              </div>
            </div>
          ) : (
            <div className='NhPageWrap'>
              <div className='NHProgreschartList'>
                <ShimmerSimpleGallery
                  imageType='circular'
                  imageHeight={200}
                  caption
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {true ? (
        <div className='RightbarPannel p-0 rightpannelSticky newcoursecardpanel home_page_rgt_pnl'>
          <LearnerPlanRightPanel
            screen={1}
            selectedSitting={2}
            selectedMinutes={30}
            handleMoreOptions={handleMoreOptions}
            selectedOption={"home"}
            handlePopUpOpen={handlePopUpOpen}
            coursePlanTree={[]}
          />
        </div>
      ) : (
        <>
          {dashboardData ? (
            <Sidebar
              data={dashboardData}
              handleToggleState={handleToggleState}
              toggleState={toggleState}
            />
          ) : (
            <div className='RightbarPannel p-0 rightpannelSticky'>
              <ShimmerCategoryItem items={4} categoryStyle='STYLE_SIX' />
            </div>
          )}
        </>
      )}

      {/* {dashboardData ? (
				<Sidebar data={dashboardData} />
			) : (
				<div className="RightbarPannel p-0 rightpannelSticky">
					<ShimmerCategoryItem items={4} categoryStyle="STYLE_SIX" />
				</div>
			)} */}

      {showOverallProgressPopup && (
        <ShowOverallProgressPopup
          handleShowOverallProgressPopup={handleShowOverallProgressPopup}
        />
      )}
    </>
  );
};

export default HolisticView;

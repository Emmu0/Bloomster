import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DimTab } from "../dimensions/course/common";
import { parentLoginAction, selectTab } from "../../redux/actions";
import { dimView, sideBarProgress } from "../../redux/actions/Home";
import PieGraph from "./PieGraph";
import Sidebar from "./Sidebar";
import { convertedNumber, getCapitalized } from "../../utils/helper";
import { useState } from "react";
import { getSequnceSort } from "../../utils/helper";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { holisticSkillData } from "../../utils/DataObjects";
import { getJourny, getSettingData } from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DimenstionalView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { getdimension, selectedDim, defaultChildData } = useSelector(
    (state) => state.collections
  );

  const { skillProg, dashboardData } = useSelector((state) => state.home);
  const [selectedTab, setSelectedTab] = useState();
  const [skillLoader, setSkillLoader] = useState(false);
  const [skillProgress, setSkillProgress] = useState([]);

  useEffect(() => {
    if (skillProgress) {
      setSkillLoader(false);
    }
  }, [skillProgress, selectedDim]);

  useEffect(() => {
    if (selectedDim) {
      dimensionProgressData(selectedDim);
    }
  }, []);

  useEffect(() => {
    if (defaultChildData?.id === dashboardData?.id) {
      dimensionProgressData(selectedDim);
    }
  }, [dashboardData?.id]);

  const dimensionProgressData = (object) => {
    if (object.value) {
      let dimSkillDAta = dashboardData.dimensions.find(
        (data) => data.name === object.value
      );

      let masterArr = [];
      if (dimSkillDAta) {
        const newSkillProgress = [...dimSkillDAta.skills];
        let index = 1;
        getSequnceSort(newSkillProgress).map((vl, ky) => {
          if (vl.courses.length > 0) {
            vl.index = index;
            masterArr.push(vl);
            index = index + 1;
          }
        });
        masterArr.splice(1, 0, dimSkillDAta);
        setSkillProgress(masterArr);
      }
    }
  };

  useEffect(() => {
    if (selectedDim?.value) {
      dimensionProgressData(selectedDim?.value);
    }
  }, []);

  const toggleTab = (index, data) => {
    dispatch(sideBarProgress());
    dispatch(
      selectTab({
        key: data.id,
        value: data?.name,
      })
    );
    dimensionProgressData({
      key: data.id,
      value: data?.name,
    });
  };
  const _back = () => {
    if (skillProg) {
      dispatch(sideBarProgress());
      return false;
    }
    dispatch(selectTab());
    dispatch(dimView());
  };

  let totalEnrolledSkilled = 0;
  let skillCompleteCount = 0;
  let remainingSkill = 0;
  let totalSkill = 0;

  let dimSkillDAta = dashboardData.dimensions.find(
    (data) => data.name === selectedDim?.value
  );

  dimSkillDAta.skills.map((vl) => {
    if (vl.courses.length > 0) {
      totalSkill += 1;
    }
  });

  if (selectedDim && selectedDim?.value) {
    skillProgress?.filter((skill) => {
      if (skill.completion < 100 && (skill.completion || skill.isEnrolled)) {
        if (
          skill?.courses?.length > 0 &&
          skill?.abandonCourseCount !== skill?.courses?.length
        ) {
          if (
            skill?.courses.some(
              (course) =>
                course.isreporting === true &&
                (course.isEnrolled === true || course.progress > 0)
            )
          ) {
            totalEnrolledSkilled += 1;
          }
        }
      } else if (skill?.completion === 0 && skill?.courses?.length > 0) {
        remainingSkill += 1;
      } else if (
        skill.completion <= 100 &&
        (skill.completion || skill.isEnrolled)
      ) {
        skillCompleteCount += 1;
      }
    });
  }

  let holisticData = [];
  holisticSkillData.map((vl) => {
    if (vl.dimension === selectedDim?.value) {
      holisticData = vl;
    }
  });

  useEffect(() => {
    if (dashboardData) {
      dashboardData?.dimensions?.map((val) => {
        if (selectedDim?.value === val?.name) {
          setSelectedTab(val);
        }
      });
    }
  }, [dashboardData, selectedDim]);

  const coursePageRedirect = (skillId) => {
    dispatch(getJourny(false));
    let filter = [
      {
        name: selectedTab?.name,
        skillIds: [],
      },
    ];

    selectedTab?.skills
      .filter(
        (val) =>
          val?.courseCount !== 0 &&
          val?.name !== "Science" &&
          val?.name !== "Social Studies"
      )
      .forEach((vl) => {
        filter[0].skillIds.push({ id: vl.id, value: vl.name });
      });

    if (skillId) {
      history.push({
        pathname: PATHS.COURSEPAGE_STR + defaultChildData?.id,
        type: "dimCatlog",
        state: {
          data: { isFilter: true, filter: filter },
        },
      });
    }
  };

  const handleSetting = () => {
    let userId = defaultChildData?.id;
    let levelId = defaultChildData?.level?.id;
    dispatch(parentLoginAction("verifyUser"));
    dispatch(getSettingData(userId, levelId));
  };

  return (
    <>
      <div className="LeftbarPannel p-0" id="">
        <div className="CourseCardWrapper fullHeight100 Hometwowrap">
          <div className="heading  gridSection d-flex w-100 p-0 Home_two">
            <DimTab
              toggleTab={toggleTab}
              data={getdimension}
              toggleState={selectedDim}
            />
          </div>
          {skillLoader ? (
            <ShimmerSimpleGallery
              imageType="circular"
              imageHeight={200}
              caption
            />
          ) : (
            <>
              <div className="backpageStrip flex">
                <a href="#" onClick={() => _back()}>
                  <span className="">
                    <i className="fa-solid fa-angle-left mr-1"></i>
                  </span>
                  Back
                </a>
              </div>
              {dashboardData ? (
                <div
                  className={`NhPageWrap ${convertedNumber(
                    skillProgress.length - 1
                  )}Circle`}
                >
                  <h3 className="text-center statementabthome">
                    {remainingSkill > 0 && totalEnrolledSkilled > 0 ? (
                      <>
                        <span>
                          {getCapitalized(defaultChildData?.firstName)} is
                          working on{" "}
                          {totalEnrolledSkilled &&
                            convertedNumber(
                              totalEnrolledSkilled
                            ).toLowerCase()}{" "}
                          ({totalEnrolledSkilled}){" "}
                          {totalEnrolledSkilled === 1 ? "skill" : "skills"}
                        </span>{" "}
                        <span>
                          {skillCompleteCount > 0
                            ? `and has completed ${convertedNumber(
                                skillCompleteCount
                              ).toLowerCase()} (${skillCompleteCount}) ${
                                skillCompleteCount === 1 ? "skill" : "skills"
                              }`
                            : ""}
                        </span>{" "}
                        in the {selectedDim && selectedDim?.value} dimension.
                      </>
                    ) : totalEnrolledSkilled === 0 &&
                      skillCompleteCount === 0 ? (
                      <>
                        <div className="signupType m-0 mb-3">
                          <div className="flextwo  w-100">
                            <h3 className="text-center statementabthome">
                              {totalSkill !== 0 ? (
                                <>
                                  {getCapitalized(defaultChildData?.firstName)}{" "}
                                  has not started working on the{" "}
                                  {selectedDim && selectedDim?.value} dimension
                                  yet.{" "}
                                  <a
                                    href="javascript:void(0)"
                                    onClick={() =>
                                      coursePageRedirect(selectedDim?.key)
                                    }
                                  >
                                    Click here{" "}
                                  </a>{" "}
                                  to view available courses and enroll.
                                </>
                              ) : (
                                <>
                                  {getCapitalized(defaultChildData?.firstName)}{" "}
                                  is not working on the {selectedDim?.value}{" "}
                                  dimension as you have chosen to hide all
                                  courses.{" "}
                                  <a href="#" onClick={() => handleSetting()}>
                                    Click here
                                  </a>{" "}
                                  to update your settings to bring the courses
                                  back into view and enroll.
                                </>
                              )}
                            </h3>
                          </div>
                        </div>
                      </>
                    ) : remainingSkill === totalEnrolledSkilled ? (
                      <>
                        <div className="signupType m-0 mb-3">
                          <div className="flextwo  w-100">
                            <h3 className="text-center statementabthome">
                              {getCapitalized(defaultChildData?.firstName)} has
                              completed all skills in {selectedDim?.value}{" "}
                              dimension.
                            </h3>
                          </div>
                        </div>
                      </>
                    ) : remainingSkill > 0 &&
                      totalEnrolledSkilled === 0 &&
                      skillCompleteCount > 0 ? (
                      <>
                        <div className="signupType m-0 mb-3">
                          <div className="flextwo  w-100">
                            <h3 className="text-center statementabthome">
                              {getCapitalized(defaultChildData?.firstName)} has
                              completed{" "}
                              {convertedNumber(
                                skillCompleteCount
                              ).toLowerCase()}{" "}
                              ({skillCompleteCount}){" "}
                              {skillCompleteCount === 1 ? "skill" : "skills"} in
                              the {selectedDim?.value} dimension.
                            </h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="signupType m-0 mb-3">
                          <div className="flextwo  w-100">
                            <h3 className="text-center statementabthome">
                              {getCapitalized(defaultChildData?.firstName)} is
                              doing well in the {selectedDim?.value} dimension
                              by working on all available skills.
                            </h3>
                          </div>
                        </div>
                      </>
                    )}
                  </h3>
                  <div className="NHProgreschartList flex flex-wrap">
                    {skillProgress &&
                      skillProgress.map((vl, ky) => (
                        <React.Fragment key={ky}>
                          <PieGraph
                            name={"Skills"}
                            DimData={vl}
                            ky={ky}
                            skillLoader={skillLoader}
                            skillData={holisticData}
                            totalEnrolledSkilled={totalEnrolledSkilled}
                            totalSkill={totalSkill}
                            skillCompleteCount={skillCompleteCount}
                          />
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              ) : (
                <ShimmerSimpleGallery
                  imageType="circular"
                  imageHeight={200}
                  caption
                />
              )}
            </>
          )}
        </div>
      </div>

      <Sidebar dashboardData={dashboardData} />
    </>
  );
};

export default DimenstionalView;

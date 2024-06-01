import React from "react";

import * as image from "../../../../resources/images";

import { beginMultiQuiz } from "../../../../redux/actions";

import { postData } from "../../../../redux/actions/PersonalityAPIs";
import { useDispatch } from "react-redux";

const Tab = ({ socialActivityData, selectTabs, selectedTab }) => {
  const dispatch = useDispatch();
  let tabCounter = 0;

  return (
    <>
      <ul>
        {socialActivityData?.records[0]?.series && (
          <>
            <li
              className={`tabs ${selectedTab === "Series" ? "active-tabs" : ""
                }`}
              onClick={() => selectTabs("Series")}>
              <img src={image.LessonIcon1} alt='' style={{ width: "24px" }} />{" "}
              Lesson
            </li>
            {/* Growth Survey 9 May 2024 */}
            {socialActivityData &&
              socialActivityData?.records[0]?.skillName ===
              "Conflict Resolution" ? (
              <li
                className={`tabs ${selectedTab === "growth" ? "active-tabs" : ""
                  }`}
                onClick={() => selectTabs("growth")}>
                <img src={image.growthSurveyIcon} alt='' /> Growth Survey
              </li>
            ) : (
              socialActivityData?.records[0]?.series?.charImage && (
                <li
                  className={`tabs ${selectedTab === "Characters" ? "active-tabs" : ""
                    }`}
                  onClick={() => selectTabs("Characters")}>
                  <img src={image.wavehand} alt='' /> Characters
                </li>
              )
            )}

            {/*---------------- Start Added By Afaiz for More Tabs ----------------*/}
            <li
              className='tabs learner_pLan_dropdown '
              style={{ width: "20%" }}>
              <span
                aria-haspopup='true'
                aria-expanded='false'
                id='MoreItemsTeb'
                data-toggle='dropdown'>
                <img src={image.moreitems} alt='' style={{ width: "24px" }} />
                <span className='ms-1'>More</span>
                <i className='fa-regular fa-angle-down ms-2'></i>
              </span>
              <ul
                className='dropdown-menu dropdown-menu-end lPDropdwnList tabingmenuDropdown'
                aria-labelledby='MoreItemsTeb'>
                {socialActivityData?.records[0]?.skillName ===
                  "Conflict Resolution"
                  ? socialActivityData?.records[0]?.series?.charImage && (
                    <li
                      className={`tabs ${selectedTab === "Characters"
                        ? "active-tabs w-100"
                        : "w-100"
                        }`}
                      onClick={() => selectTabs("Characters")}>
                      <img src={image.wavehand} alt='' /> Characters
                    </li>
                  )
                  : ""}
                {/* {["Intellectual"].includes(
                              innerSocialDim?.name
                            ) && (
                              <li
                                className={`tabs ${
                                  selectedTab === "Quiz" ? "active-tabs" : ""
                                }`}
                                onClick={() => selectTabs("Quiz")}
                              >
                                <i className="fa-solid fa-book-open-reader"></i>{" "}
                                Quiz
                              </li>
                            )} */}
                {socialActivityData?.records[0]?.series?.reference && (
                  <li
                    className={`tabs ${selectedTab === "References"
                      ? "active-tabs w-100"
                      : "w-100"
                      }`}
                    onClick={() => selectTabs("References")}>
                    <img src={image.SceneRefrence} alt='' /> References
                  </li>
                )}
                {socialActivityData?.records[0]?.series?.quiz?.id && (
                  <li
                    className={`tabs ${selectedTab === "Quiz" ? "active-tabs w-100" : "w-100"
                      }`}
                    onClick={() => selectTabs("Quiz")}>
                    <img src={image.ActiveAudio} alt='' /> Quiz
                  </li>
                )}
                {socialActivityData?.records[0]?.series?.practice?.id && (
                  <li
                    className={`tabs ${selectedTab === "Practice" ? "active-tabs w-100" : "w-100"
                      }`}
                    onClick={() => selectTabs("Practice")}>
                    <img src={image.sceneArrow} alt='' /> Practice
                  </li>
                )}
                {socialActivityData?.records[0]?.series?.personalityType &&
                  socialActivityData?.records[0]?.series?.personalityType !==
                  "EQ" && (
                    <>
                      <li
                        className={`tabs ${selectedTab === "Personalities"
                          ? "active-tabs w-100"
                          : "w-100"
                          }`}
                        onClick={() => {
                          dispatch(postData());
                          selectTabs("Personalities");
                        }}>
                        <img src={image.peronalitytypeicon} alt='' />{" "}
                        Personality Type
                      </li>

                      {/* <li
										className={`tabs ${selectedTab === "multiQuiz" ? "active-tabs" : ""
											}`}
										onClick={() => {
											dispatch(beginMultiQuiz(false));
											selectTabs("multiQuiz");
										}}
									>
										<img src={image.multipleintellQuiz} alt="" /> Multiple
										Intelligences
									</li> */}
                    </>
                  )}

                {socialActivityData?.records[0]?.series?.personalityType &&
                  socialActivityData?.records[0]?.series?.personalityType ===
                  "EQ" && (
                    <li
                      className={`tabs ${selectedTab === "empthyQuiz"
                        ? "active-tabs w-100"
                        : "w-100"
                        }`}
                      onClick={() => selectTabs("empthyQuiz")}>
                      <img src={image.empathyicon} alt='' /> Empathy Check
                    </li>
                  )}
                <li
                  className={`tabs ${selectedTab === "multiQuiz" ? "active-tabs w-100" : "w-100"
                    }`}
                  onClick={() => {
                    dispatch(beginMultiQuiz(false));
                    selectTabs("multiQuiz");
                  }}>
                  <img src={image.multipleintellQuiz} alt='' /> Multiple
                  Intelligences
                </li>
              </ul>
            </li>
            {/*----------------End Added By Afaiz for More Tabs------------------*/}
          </>
        )}
      </ul>
    </>
  );
};

export default Tab;
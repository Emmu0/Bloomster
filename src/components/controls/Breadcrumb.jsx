import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUrlSegment } from "../../utils/helper";
import { useParams, useHistory } from "react-router-dom";
import { defaultChild, showModal } from "../../redux/actions";

import { PATHS } from "../../utils";
import ReactTooltip from "react-tooltip";
import { textTrim } from "../../utils/helper";
import {
  sceanIndex,
  resetBreadCrumb,
  resetResponse,
  selectTab,
} from "../../redux/actions";
import BreadcrumbUser from "./BreadcrumbUser";
import { dimView } from "../../redux/actions/Home";

import { useState } from "react";
const Breadcrumb = ({ dimredirect }) => {
  const history = useHistory();
  const param = useParams();

  const dispatch = useDispatch();
  const {
    selectedDim,
    socialActivityData,
    getSelectedUser,
    loggedInUser,
    breadcrumbData,
    getdimension,
    defaultChildData,
    modalData,
    startEnrollCourses,
    next_scene_response,
    homePageObj,
  } = useSelector((state) => state.collections);

  useEffect(() => {
    dispatch(resetBreadCrumb());
    dispatch(sceanIndex());
  }, [param?.id]);

  useEffect(() => {
    if (modalData?.type === "courseHint") {
      dispatch(showModal());
    }
  }, [getUrlSegment()[0], param?.id]);

  let urlSegment = [];
  let urlSegmetId1;
  let urlSegmetcorId;

  if (breadcrumbData?.title) {
    urlSegment[0] = breadcrumbData?.title;
    if (breadcrumbData?.subTitle) {
      urlSegment[1] = breadcrumbData?.subTitle;
    }
  } else {
    if (socialActivityData) {
      urlSegment[0] = socialActivityData?.records[0]?.dimName;
    } else {
      if (selectedDim?.value) {
        urlSegment[0] = selectedDim?.value;
      } else {
        let selectedDim1 =
          getdimension &&
          getdimension?.records.find((data) => data?.id === param?.dimId);

        urlSegment[0] = selectedDim1?.name;
      }
    }
  }

  if (
    socialActivityData?.records &&
    (getUrlSegment()[1] === "social-lessons" ||
      getUrlSegment()[0] === "lesson-details")
  ) {
    urlSegment[1] = socialActivityData?.records[0]?.skillName;
    urlSegmetId1 = socialActivityData?.records[0]?.skillId;
    urlSegmetcorId = socialActivityData?.records[0]?.courseId;
  }
  if (
    socialActivityData?.records &&
    (getUrlSegment()[1] === "social-lessons" ||
      getUrlSegment()[0] === "lesson-details")
  ) {
    urlSegment[2] = socialActivityData?.records[0]?.courseName;
  }

  if (
    socialActivityData?.records &&
    (getUrlSegment()[1] === "social-lessons" ||
      getUrlSegment()[0] === "lesson-details")
  ) {
    urlSegment[3] = socialActivityData?.records[0]?.activityName;
  }

  if (selectedDim === "Series") {
    if (socialActivityData?.records) {
      if (breadcrumbData?.name === undefined) {
        urlSegment[4] = socialActivityData?.records[0]?.series?.scenes[0]?.name;
      } else {
        urlSegment[4] = breadcrumbData?.name;
      }
    }
  } else if (selectedDim === "Characters") {
    if (socialActivityData?.records) {
      urlSegment[4] = "Characters";
    }
  } else if (selectedDim === "Personalities") {
    if (socialActivityData?.records) {
      urlSegment[4] = "Personality Type";
    }
  } else if (selectedDim === "References") {
    if (socialActivityData?.records) {
      urlSegment[4] = "References";
    }
  } else if (selectedDim === "Lessons") {
    if (socialActivityData?.records) {
      urlSegment[4] = "Lessons";
    }
  } else if (selectedDim === "Quiz") {
    if (socialActivityData?.records) {
      urlSegment[4] = "Quiz";
    }
  } else if (selectedDim === "empthyQuiz") {
    if (socialActivityData?.records) {
      urlSegment[4] = "Empathy Check";
    }
    {
      /* Growth Survey 9 May 2024 */
    }
  } else if (selectedDim === "growth") {
    if (socialActivityData?.records) {
      urlSegment[4] = "Growth Survey";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  useEffect(() => {
    if (loggedInUser?.role?.name === "LEARNER") {
      dispatch(defaultChild(loggedInUser));
    } else if (loggedInUser?.children.length > 0 && !param?.id) {
      if (!defaultChildData || defaultChildData.length == 0) {
        if (!homePageObj) {
          dispatch(defaultChild(loggedInUser?.children[0]));
        }
      }
    } else if (param?.id && getSelectedUser?.role?.name === "LEARNER") {
      dispatch(defaultChild(getSelectedUser));
    } else {
      if (getSelectedUser?.role?.name === "LEARNER") {
        dispatch(defaultChild(getSelectedUser));
      }
    }
  }, [
    param,
    getSelectedUser,
    defaultChildData,
    dispatch,
    loggedInUser,
    defaultChild,
  ]);

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".breadCrum");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("breadsticky")
      : header.classList.remove("breadsticky");
  };
  let obj = {};
  if (getSelectedUser?.id) {
    obj = getSelectedUser;
  } else {
    obj = loggedInUser;
  }

  let redirect = history.location?.state?.course;

  useEffect(() => {
    if (redirect && next_scene_response) {
      redirect.points = next_scene_response?.records[0]?.points;
    }
  }, [next_scene_response, redirect]);

  const _redirectBack = (index, urlSegment) => {
    if (loggedInUser) {
      if (loggedInUser?.role?.name != "PROVIDER") {
        if (urlSegment[0] === "Learner Journey") {
        } else if (
          urlSegment?.length > 1 &&
          urlSegment[0] !== "Home" &&
          (urlSegment[0] == "Help"
            ? index === 0
            : index === 0 || index === 1 || index === 2)
        ) {
          dispatch(resetResponse());
          dispatch(sceanIndex());
          let dimName = socialActivityData?.records[0]?.dimName;
          let selectedDim1 = getdimension?.records.find(
            (data) => data?.name === dimName
          );
          if (selectedDim1?.id) {
            dispatch(
              selectTab({
                key: selectedDim1?.id,
                value: selectedDim1?.name,
              })
            );
            /*
						if (index === 0) {
							history.push(
								PATHS.DIMENSION_STR + selectedDim1?.id + "/" + param.id
							);
						} else
							*/
            if ([0, 1, 2].includes(index)) {
              if (
                redirect?.isEnrolled ||
                redirect?.points > 0 ||
                redirect?.ucoursePoints > 0
              ) {
                history.push({
                  pathname:
                    PATHS.DIMENSION_STR + selectedDim1?.id + "/" + param.id,
                  state: { courseId: urlSegmetcorId },
                  urlSegmetcorId,
                });
              } else {
                let filter = {
                  name: urlSegment[0],
                  skillIds: [{ id: param.skillId, value: urlSegment[1] }],
                };
                history.push({
                  pathname: PATHS.COURSEPAGE_STR + param?.id,
                  type: "dimCatlog",
                  state: {
                    data: { filter: [filter] },
                  },
                });
              }
            }
          } else {
            if (
              urlSegment?.length > 0 &&
              index === 0 &&
              getUrlSegment()[0] === "help"
            ) {
              history.push(PATHS.HELP);
            } else {
              history.goBack();
            }
          }
        } else if (urlSegment[0] === "Home" && index === 0) {
          dispatch(selectTab());
          dispatch(dimView());
        } else if (urlSegment[0] === "Learner Journey" && index === 0) {
          return false;
        }
      }
    }
  };

  let displayUser = [];
  if (
    getSelectedUser?.role?.name === "LEARNER" ||
    getSelectedUser?.role?.name === undefined
  ) {
    displayUser = defaultChildData;
  } else if (param?.id && getSelectedUser?.role?.name !== "LEARNER") {
    displayUser = getSelectedUser;
  }

  return useMemo(
    () => (
      <div
        className={`breadCrum ${
          getSelectedUser?.role?.name === "PROVIDER" ? "providerBreadcrumb" : ""
        }`}
        id='breadcrum'
        key={Math.random()}>
        <div className='heading border-0'>
          <h2 className='flex border-0'>
            <ul>
              {urlSegment &&
                urlSegment.map((vl, ky) => (
                  <li
                    key={ky}
                    className={
                      urlSegment.length > 1 &&
                      (urlSegment[0] == "Help" ||
                      urlSegment[0] == "Home" ||
                      urlSegment[0] === "Learner Journey"
                        ? ky === 0
                        : ky === 0 || ky === 1 || ky === 2)
                        ? getSelectedUser?.role?.name !== "PROVIDER" &&
                          "pointer"
                        : urlSegment.length === ky + 1
                        ? " bActivepage "
                        : ""
                    }
                    onClick={() => _redirectBack(ky, urlSegment)}>
                    {ky === 0 && !breadcrumbData?.icon && (
                      <i className='fa-duotone  fa-flag-swallowtail'></i>
                    )}
                    {ky === 0 && breadcrumbData?.icon && (
                      <img src={breadcrumbData?.icon} />
                    )}
                    <ReactTooltip id={vl} place='bottom' className={"tooltip"}>
                      <p>{vl}</p>
                    </ReactTooltip>
                    {urlSegment[ky] && ky !== 0 ? <span>&#62;</span> : ""}

                    <span data-for={vl} data-event-off='' data-tip>
                      {textTrim(vl, 35)}
                    </span>
                  </li>
                ))}
            </ul>

            {obj && (
              <>
                <div key={getUrlSegment()[0]} className='bredcrumbuser'>
                  <BreadcrumbUser
                    data={displayUser}
                    dimredirect={dimredirect}
                  />
                </div>
              </>
            )}
          </h2>
        </div>
      </div>
    ),
    [breadcrumbData, displayUser, socialActivityData, selectedDim]
  );
};

export default Breadcrumb;

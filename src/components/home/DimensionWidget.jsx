/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import {
  getDimIcon,
  kFormatter,
  textTrim,
  getSequnceSort,
} from "../../utils/helper";
import { getHelpModal, selectTab } from "../../redux/actions";
import RoundProgress from "../controls/RoundProgress";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const DimensionWidget = ({ data, chooseSubject, disable }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { defaultChildData, getdimension } = useSelector(
    (state) => state.collections
  );
  let areas = [];

  if (data?.areas && data?.areas.length > 0) {
    areas = data?.areas;
  } else {
    areas = data?.skills;
  }
  const openHelp = (data) => {
    dispatch(getHelpModal(data));
  };

  const _redirectLesson = (dimdata, type, areadata, course) => {
    let selectedDim1 = getdimension?.records.find(
      (data) => data?.name === dimdata.name
    );

    if (selectedDim1?.id) {
      dispatch(
        selectTab({
          key: selectedDim1?.id,
          value: selectedDim1?.name,
        })
      );

      if (!localStorage.getItem("History")) {
        // this is direct redirect throug the rouiting
        if (type === "dim") {
          history.push({
            pathname:
              PATHS.DIMENSION_STR +
              selectedDim1?.id +
              "/" +
              defaultChildData.id,
            state: { skillId: areadata?.id },
          });
        } else if (type === "cor") {
          history.push({
            pathname:
              PATHS.DIMENSION_STR +
              selectedDim1?.id +
              "/" +
              defaultChildData.id,
            state: { courseId: course?.id },
          });
        }
      } else {
        // If the localstorage is already avail then this code repace the available the local storage
        let arr = [];
        if (localStorage.getItem("History")) {
          arr = JSON.parse(localStorage.getItem("History"));

          JSON.parse(localStorage.getItem("History")).map((vl, ky) => {
            if (vl.uuid == defaultChildData.id) {
              arr[ky] = {
                uuid: defaultChildData.id,
                dimension: { key: dimdata.id, value: dimdata.name },
              };
            } else {
              let userData = arr.filter(
                (dta) => dta.uuid == defaultChildData.id
              );

              if (userData.length === 0) {
                arr.push({
                  uuid: defaultChildData.id,
                  dimension: { key: dimdata.id, value: dimdata.name },
                });
              }
            }
          });
        } else {
          if (dimdata) {
            arr.push({
              uuid: defaultChildData.id,
              dimension: { key: dimdata.id, value: dimdata.name },
            });
          }
        }
        // if (arr.length > 0) {
        //   localStorage.setItem("History", JSON.stringify(arr));
        // }

        if (type === "dim") {
          history.push({
            pathname:
              PATHS.DIMENSION_STR +
              selectedDim1?.id +
              "/" +
              defaultChildData.id,
            state: { skillId: areadata?.id },
          });
        } else if (type === "cor") {
          history.push({
            pathname:
              PATHS.DIMENSION_STR +
              selectedDim1?.id +
              "/" +
              defaultChildData.id,
            state: { courseId: course?.id },
          });
        }
        // availablity of history redirect from this code
        if (localStorage.getItem("History")) {
          let dimFilter = JSON.parse(localStorage.getItem("History")).filter(
            (dta) => dta.uuid == defaultChildData.id
          );

          if (
            JSON.parse(localStorage.getItem("History"))?.length > 0 &&
            dimFilter[0]?.dimension?.key
          ) {
            if (type === "dim") {
              history.push({
                pathname:
                  PATHS.DIMENSION_STR +
                  dimFilter[0]?.dimension?.key +
                  "/" +
                  defaultChildData.id,
                state: { skillId: areadata?.id },
              });
            } else if (type === "cor") {
              history.push({
                pathname:
                  PATHS.DIMENSION_STR +
                  dimFilter[0]?.dimension?.key +
                  "/" +
                  defaultChildData.id,
                state: { courseId: course?.id },
              });
            }
          }
        }
      }
    }
  };

  return (
    <div className='DDasborditem' id={`widget${data?.name}`}>
      <div className='heading d-flex'>
        <h2 className='flex w-100'>
          <span
            className='pointer'
            onClick={() => _redirectLesson(data, "dim")}>
            {getDimIcon(data)} {data?.name}
          </span>
          <span className='pointer' onClick={() => openHelp(data)}>
            <img src={image.chat_icon} alt='' className='infoiconimg' />
          </span>
        </h2>
        <div className='VKprofile'>
          <div className='vkprofilename'>
            <a href='#'></a>
          </div>
        </div>
      </div>
      <div className='DimensionDashboadcard '>
        <div className='SocialCoursecardWrap'>
          <h4 className='flex KATitle skillandcours p-0 border-0'>
            <span>
              <img src={image.CourseTitleIcon} alt='' /> Skills and Courses
            </span>
          </h4>
        </div>

        {areas &&
          getSequnceSort(areas).map((areadata, key) => (
            <React.Fragment key={key}>
              <div className='SocialCoursecardWrap' key={key}>
                <h4
                  data-toggle='collapse'
                  className={`flex KATitle ${
                    areadata?.courses?.length > 0 && "pointer"
                  }`}
                  aria-expanded='false'
                  href={
                    (["Intellectual", "Physical"].includes(data.name) &&
                      (areadata.isEnrolled === true ||
                        areadata?.type === "PROVIDER")) ||
                    ["Social", "Emotional", "Spiritual"].includes(data.name)
                      ? `#DBCourses${areadata?.id}`
                      : ""
                  }
                  key={key}>
                  <span>
                    <i className='fa-regular fa-dash mr-1'></i>
                    {areadata.name}
                  </span>
                  {(["Intellectual", "Physical"].includes(data.name) &&
                    (areadata.isEnrolled ||
                      (areadata?.type === "PROVIDER" &&
                        areadata?.courses?.length > 0))) ||
                  (["Social", "Emotional", "Spiritual"].includes(data.name) &&
                    areadata?.courses?.length > 0) ? (
                    areadata?.courses?.length > 0 && (
                      <div className='position-relative CourseAchiveAndProgress flex justify-content-end'>
                        <div className='Coursecompprcent mr-3 position-relative'>
                          {/* <p>
                          <RoundProgress data={areadata?.pctCompleted} />
                        </p> */}
                        </div>
                        <div className='Course_Achivement'>
                          <span>
                            <span className='earnnoCoin justify-content-end'>
                              {areadata?.points
                                ? kFormatter(areadata?.points)
                                : 0}
                            </span>
                            <img src={image.money_bag} alt='' />
                          </span>
                        </div>

                        <i className='fa-solid fa-angle-down'></i>
                      </div>
                    )
                  ) : areadata?.courses?.length > 0 ? (
                    <>
                      {
                        ["Intellectual", "Physical"].includes(data.name) && (
                          <span
                            className=' pointer'
                            data-toggle='modal'
                            data-target='#chooseCourse'
                            key={data.name}>
                            <button
                              disabled={disable ? true : false}
                              onClick={() =>
                                chooseSubject(areadata, "nocard", data)
                              }
                              style={{ background: "none" }}>
                              <i className='fa-regular fa-pencil ml-2' />
                            </button>
                          </span>
                        )
                        // : (

                        //  <span className=' pointer'>
                        //       <i className='fa-solid fa-angle-down'></i>
                        //     </span>

                        // )
                      }
                    </>
                  ) : (
                    areadata.courseCount === 0 && (
                      <div className='Course_progressbar'>
                        Coming Soon...
                        <span
                          className='pointer'
                          onClick={() => openHelp(areadata)}>
                          <i className='fa-light fa-circle-info ml-2'></i>
                        </span>
                      </div>
                    )
                  )}
                </h4>
                <div
                  className='intrestlisting  collapse'
                  id={`DBCourses${areadata?.id}`}>
                  <ul className='w-100'>
                    {areadata?.courses &&
                      getSequnceSort(areadata?.courses)?.map((dat1, ky) => (
                        <li key={ky} className=''>
                          <div
                            className='Progressbarlisting d-flex align-items-center justify-content-between pointer'
                            onClick={() =>
                              _redirectLesson(data, "cor", areadata, dat1)
                            }>
                            {dat1.name?.length > 32 ? (
                              <ReactTooltip id={dat1.name}>
                                <p>{dat1.name}</p>
                              </ReactTooltip>
                            ) : (
                              ""
                            )}
                            <span
                              data-for={dat1.name}
                              data-event-off=''
                              data-tip>
                              <img
                                src={image.mortarboard}
                                alt=''
                                className='mr-2'
                              />{" "}
                              {textTrim(dat1.name, 32) &&
                                textTrim(dat1.name, 32)}
                            </span>

                            <div className='position-relative CourseAchiveAndProgress flex justify-content-end'>
                              <div className='Coursecompprcent mr-3'>
                                <p className='text-center'>
                                  <RoundProgress data={dat1?.completion} />
                                </p>
                              </div>

                              <div className='Course_Achivement'>
                                <span>
                                  <span className='earnnoCoin'>
                                    {dat1?.points
                                      ? kFormatter(dat1?.points)
                                      : 0}
                                  </span>
                                  <img src={image.money_bag} alt='' />
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default DimensionWidget;

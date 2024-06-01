import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as image from "../../../resources/images";
import { getSequnceSort } from "../../../utils/helper";
import { ShimmerCategoryList } from "../../../utils/Packages";
import ReactTooltip from "react-tooltip";
import { MSG } from "../../../utils/Messages";
import { getLesson } from "../../../redux/actions/APIs";

const CurriculamModule = ({
  lessonModuleDetail,
  needHelp,
  isCompleted,
  tabChange,
  activityType,
  shimerLoader,
}) => {
  const { getSelectedUser } = useSelector((state) => state.collections);
  const [renderC, setRenderC] = useState(1);

  // const needHelpClick = (id1, id2, needHelps) => {
  // 	if (getSelectedUser?.role?.name !== "PROVIDER") {
  // 		needHelp(id1, id2, needHelps);
  // 	}
  // };

  // const chooseTab = (data) => {
  //   setActiveTab(data);
  // };

  const resourceTab = (data) => {
    dispatch(getLesson());
    if (activityType === "Vicky" && data?.isComplex && data?.countOfResources) {
      tabChange(data?.moduleLessonId);
    }
  };

  const [initialState, setinitialState] = useState([]);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    if (lessonModuleDetail) {
      // lessonModuleDetail.map((data) => {
      // 	initialState.push(false);
      // });
      dispatch({ type: "collaps-all" });
    }
  }, [lessonModuleDetail]);

  function reducer(state, { type, key }) {
    switch (type) {
      case "expand-all":
        let arr = [];
        lessonModuleDetail.map((data) => {
          arr.push(true);
        });
        return arr;
      case "collaps-all":
        let newArr = [];
        lessonModuleDetail &&
          lessonModuleDetail?.map((data) => {
            newArr.push(false);
          });
        return newArr;
      case "toggle":
        let newState = [...state];
        newState[key] = !newState[key];
        return newState;
      default:
        throw new Error("reducer configuration");
    }
  }

  return (
    <React.Fragment>
      <div className='tableCurrForm position-relative'>
        <div className='form-check form-switch fixedexpandall'>
          <label
            className={
              state?.length === lessonModuleDetail?.length
                ? "form-check-label"
                : ""
            }
            htmlFor='flexSwitchCheckDefault'>
            Expand All
          </label>

          <input
            className='form-check-input'
            type='checkbox'
            checked={
              state?.every((s) => s === true) &&
              !state?.every((s) => s === false) &&
              true
            }
            role={"switch"}
            id='flexSwitchCheckDefault'
            onChange={() => {
              state.every((s) => s === true)
                ? dispatch({ type: "collaps-all" })
                : dispatch({ type: "expand-all" });
            }}
          />
        </div>
        <table className='w-100 curriculumntable'>
          <thead>
            <tr>
              <th>
                <h5>Module & Lesson </h5>
              </th>
              <th>
                <ReactTooltip id={"resourceTab"}>
                  <p>{MSG.RESOURCETAB}</p>
                </ReactTooltip>
                <h5>
                  Resources
                  <span
                    className='Tooltiphelp'
                    data-for={"resourceTab"}
                    data-event-off=''
                    data-tip>
                    <i className='fa-regular fa-circle-question ml-1'></i>
                  </span>
                </h5>
              </th>
              <th>
                <ReactTooltip id={"courseTab"}>
                  <p>{MSG.COURSETAB}</p>
                </ReactTooltip>
                <h5>
                  Courses
                  <span
                    className='Tooltiphelp'
                    data-for={"courseTab"}
                    data-event-off=''
                    data-tip>
                    <i className='fa-regular fa-circle-question ml-1'></i>
                  </span>
                </h5>
              </th>
              <th>
                <ReactTooltip id={"helpTab"}>
                  <p>{MSG.HELPTAB}</p>
                </ReactTooltip>
                <h5>
                  Need Help
                  <span
                    className='Tooltiphelp'
                    data-for={"helpTab"}
                    data-event-off=''
                    data-tip>
                    <i className='fa-regular fa-circle-question ml-1'></i>
                  </span>
                </h5>{" "}
              </th>
              <th>
                <ReactTooltip id={"completeTab"}>
                  <p>{MSG.COMPLETEDTAB}</p>
                </ReactTooltip>
                <h5>
                  Completed
                  <span
                    className='Tooltiphelp'
                    data-for={"completeTab"}
                    data-event-off=''
                    data-tip>
                    <i className='fa-regular fa-circle-question ml-1'></i>
                  </span>
                </h5>{" "}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='w-100 p-0 border-0' colSpan='5'>
                {shimerLoader === true && lessonModuleDetail ? (
                  lessonModuleDetail?.length > 0 &&
                  getSequnceSort(lessonModuleDetail).map((val, key) => (
                    <table
                      className='w-100 border Nestedtable mb-3'
                      key={key}
                      width='100%'>
                      <tbody>
                        <tr className='pointer'>
                          <th
                            data-toggle='collapse'
                            aria-expanded='false'
                            href={`#module${key}`}
                            onClick={() => {
                              dispatch({ type: "toggle", key: key });
                            }}>
                            {val?.name}
                          </th>

                          <th
                            data-toggle='collapse'
                            aria-expanded='false'
                            href={`#module${key}`}
                            onClick={() => {
                              dispatch({ type: "toggle", key: key });
                            }}></th>
                          <th
                            data-toggle='collapse'
                            aria-expanded='false'
                            href={`#module${key}`}
                            onClick={() => {
                              dispatch({ type: "toggle", key: key });
                            }}></th>
                          <th
                            data-toggle='collapse'
                            aria-expanded='false'
                            href={`#module${key}`}
                            onClick={() => {
                              dispatch({ type: "toggle", key: key });
                            }}></th>
                          <th valign='baseline'>
                            <div className='position-relative'>
                              <label className='Selcheckbox m-0'>
                                <input
                                  type='checkbox'
                                  id='Public'
                                  name='schoolType'
                                  className='pointer'
                                  value='PUBLIC'
                                  checked={val?.isCompleted}
                                  onClick={() => {
                                    isCompleted(
                                      val?.id,
                                      "All",
                                      !val?.isCompleted
                                    );
                                    setRenderC(Math.random());
                                  }}
                                />
                                <span className='checkmark'></span>
                              </label>
                              <span
                                className='DownArrow'
                                data-toggle='collapse'
                                aria-expanded='false'
                                href={`#module${key}`}
                                onClick={() => {
                                  dispatch({ type: "toggle", key: key });
                                }}>
                                <i className='fa-regular fa-chevron-down'></i>
                              </span>
                            </div>
                          </th>
                        </tr>
                        <tr
                          className={`submoduleList panel-collapse collapse ${
                            (state.every((s) => s === true) && !state) ||
                            state[key] == true
                              ? "show"
                              : "hide"
                          }`}
                          id={`module${key}`}>
                          <td colSpan='5' className='w-100 p-0 border-0'>
                            {val?.lesssons &&
                              getSequnceSort(val?.lesssons).map((vl1, ky1) => (
                                <table
                                  width='100%'
                                  className={`w-100  Nestedtable ${
                                    vl1?.lesson?.isDifficult
                                      ? "Resorveavlleson"
                                      : ""
                                  }`}
                                  key={ky1}>
                                  <tbody>
                                    <tr key={ky1}>
                                      <td>
                                        {vl1?.name.length > 40 && (
                                          <ReactTooltip id={vl1?.name}>
                                            <p>{vl1?.name}</p>
                                          </ReactTooltip>
                                        )}
                                        {/* <ReactTooltip
                                            overridePosition={({
                                              left,
                                              top,
                                            }) => ({ left: 2, top: 2 })}
                                            scrollHide={false}
                                            id={vl1?.lesson?.name}>
                                            <p>{vl1?.lesson?.name}</p>
                                          </ReactTooltip> */}
                                        <span
                                          data-for={vl1?.name}
                                          data-event-off=''
                                          data-tip
                                          onClick={() => {
                                            vl1?.isComplex &&
                                            vl1?.countOfResources > 0
                                              ? resourceTab(vl1)
                                              : "";
                                          }}
                                          className={
                                            vl1?.isComplex &&
                                            vl1?.countOfResources > 0
                                              ? "text-blue pointer"
                                              : ""
                                          }>
                                          {ky1 + 1}.{" "}
                                          {vl1?.name.length > 40
                                            ? vl1?.name?.substring(0, 40) +
                                              "..."
                                            : vl1?.name}
                                          {vl1?.description && (
                                            <p className='text-dark'>
                                              {vl1?.description === "null" ||
                                              vl1?.description === ""
                                                ? ""
                                                : vl1?.description}
                                            </p>
                                          )}
                                        </span>
                                      </td>
                                      <td
                                        onClick={() => {
                                          vl1?.isComplex &&
                                          vl1?.countOfResources > 0
                                            ? resourceTab(vl1)
                                            : "";
                                        }}>
                                        {vl1?.isComplex &&
                                        vl1?.countOfResources > 0 ? (
                                          <div className='text-blue pointer'>
                                            <i className='fa-regular fa-folder-open mr-2'></i>
                                            {vl1?.countOfResources}
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </td>
                                      <td>
                                        {vl1?.countOfCourses > 0 && (
                                          <span>
                                            {" "}
                                            <i className='fa-duotone fa-books mr-2'></i>
                                            ({vl1?.countOfCourses})
                                          </span>
                                        )}
                                      </td>
                                      <td>
                                        <img
                                          src={
                                            !vl1?.needHelp
                                              ? image.exclamationhexagon
                                              : image.exclamationfillhexagon
                                          }
                                          alt=''
                                          className='pointer'
                                          onClick={() =>
                                            needHelp(
                                              val?.id,
                                              vl1?.id,
                                              !vl1?.needHelp
                                            )
                                          }
                                        />
                                      </td>
                                      <td>
                                        <label className='Selcheckbox'>
                                          <input
                                            type='checkbox'
                                            id='Public'
                                            name='schoolType'
                                            value='PUBLIC'
                                            checked={vl1?.isCompleted}
                                            disabled={
                                              getSelectedUser?.role?.name !==
                                              "PROVIDER"
                                                ? false
                                                : true
                                            }
                                            onClick={() =>
                                              isCompleted(
                                                val?.id,
                                                vl1?.id,
                                                !vl1?.isCompleted
                                              )
                                            }
                                          />
                                          <span className='checkmark '></span>
                                        </label>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                ) : (
                  <ShimmerCategoryList items={3} categoryStyle='STYLE_SIX' />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default CurriculamModule;

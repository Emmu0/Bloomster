import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ShimmerCategoryList } from "react-shimmer-effects";
import ReactTooltip from "react-tooltip";
import { getSequnceSort } from "../../utils/helper";
import { getLesson } from "../../redux/actions/APIs";

const ProviderCurriculamModule = ({ tabProChange, getCurriculamData }) => {
  const [isActive, setActive] = useState();
  const dispatch = useDispatch();
  const toggledClass = () => {
    if (isActive) {
      setActive();
    } else {
      setActive("show");
    }
  };
  const resourceTab = (data) => {
    dispatch(getLesson());
    if (data?.isComplex && data?.countOfResources) {
      tabProChange(data?.moduleLessonId);
    }
  };
  return (
    <React.Fragment>
      <div className='tableCurrForm position-relative'>
        <div className='form-check form-switch'>
          <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
            Expand All
          </label>
          <input
            className='form-check-input'
            type='checkbox'
            role='switch'
            id='flexSwitchCheckDefault'
            onChange={() => toggledClass()}
          />
        </div>
        <table className='w-100 curriculumntable'>
          <thead>
            <tr>
              <th>
                <h5>Module & Lesson </h5>
              </th>
              <th>
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
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='w-100 p-0 border-0' colSpan='5'>
                {getCurriculamData?.records ? (
                  getSequnceSort(getCurriculamData?.records).map((val, key) => (
                    <table
                      className='w-100 border Nestedtable mb-3'
                      key={key}
                      width='100%'>
                      <tbody>
                        <tr className='pointer'>
                          <th
                            data-toggle='collapse'
                            aria-expanded={false}
                            href={`#module${key}`}>
                            {val?.name}
                          </th>
                          <th
                            data-toggle='collapse'
                            aria-expanded='true'
                            href={`#module${key}`}></th>

                          <th valign='baseline'>
                            <div className='position-relative'>
                              <span
                                className='DownArrow'
                                data-toggle='collapse'
                                aria-expanded='false'
                                href={`#module${key}`}>
                                <i className='fa-regular fa-chevron-down'></i>
                              </span>
                            </div>
                          </th>
                        </tr>
                        <tr
                          className={`submoduleList panel-collapse collapse ${isActive}`}
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
                                        {vl1?.name.length > 40 ? (
                                          <ReactTooltip id={vl1?.name}>
                                            <p>{vl1?.name}</p>
                                          </ReactTooltip>
                                        ) : (
                                          ""
                                        )}
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

export default ProviderCurriculamModule;

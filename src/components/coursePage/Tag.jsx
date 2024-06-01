import React from "react";

import * as image from "../../resources/images";

const Tag = ({ removeFilter, filterMasterObj, selectedTab, checkobj }) => {
  return (
    <>
      {filterMasterObj ? (
        <div className="intrestlisting coursecalalogtagtaglist">
          <div className="Course_filter mr-3">
            <span>
              <img src={image.course_filter} alt="" />
            </span>
          </div>

          <div className="flexone flex-wrap">
            {selectedTab === "Dimensions" &&
              checkobj.length > 0 &&
              filterMasterObj &&
              filterMasterObj.length > 0 &&
              filterMasterObj.map(
                (value, key) =>
                  value.skillIds.length > 0 && (
                    <React.Fragment key={key}>
                      <div
                        className={`instlistitem ${value?.name}_dim_tag`}
                        key={key}
                      >
                        <div className="carditem ">
                          <h4 className="flex w-100">
                            {value?.name}
                            <span
                              className="crossmark ml-3"
                              onClick={() => removeFilter(value)}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </span>
                          </h4>
                        </div>
                      </div>
                      {value.skillIds.map((vl, ky) => (
                        <div className="instlistitem" key={ky}>
                          <div className="carditem ">
                            <h4 className="flex w-100">
                              {vl?.value}
                              <span
                                className="crossmark ml-3"
                                onClick={() => removeFilter(vl, value)}
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </span>
                            </h4>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  )
              )}
            {(filterMasterObj?.length === 0 ||
              filterMasterObj?.filter?.length === 0) && (
              <div className="instlistitem">
                <div className="carditem ">
                  <h4 className="flex w-100">Most Popular Courses</h4>
                </div>
              </div>
            )}

            {filterMasterObj?.type === "Search" &&
              filterMasterObj?.filter.length > 0 &&
              filterMasterObj?.filter?.map((value, key) => (
                <div className="instlistitem" key={key}>
                  <div className="carditem ">
                    <h4 className="flex w-100">
                      {value}
                      <span
                        className="crossmark ml-3"
                        onClick={() => removeFilter(value)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="intrestlisting">
          <div className="Course_filter mr-3">
            <span>
              <img src={image.course_filter} alt="" />
            </span>
          </div>

          <div className="instlistitem">
            <div className="carditem ">
              <h4 className="flex w-100">Most Popular Courses</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tag;

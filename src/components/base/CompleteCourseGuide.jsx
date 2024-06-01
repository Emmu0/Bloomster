import React, { useEffect, useState, useRef } from "react";
import * as image from "../../resources/images";
import { showModal } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_GUIDE, COURSE_GUIDE_INT } from "../../utils/DataObjects";

const CompleteCourseGuide = ({ guideType }) => {
  const { socialActivityData } = useSelector((state) => state.collections);
  const [collaps, setCollaps] = useState();
  const [ccGuide, setCcGuide] = useState(true);
  const dispatch = useDispatch();

  const closeGuide = (flag) => {
    tabChange("");
    setCcGuide(flag);
    dispatch(showModal());
  };

  let dataObj = [];

  COURSE_GUIDE.map((value) => {
    if (
      (socialActivityData?.records[0]?.dimName === "Intellectual" &&
        value.title !== "Characters") ||
      (socialActivityData?.records[0]?.series?.charDesc &&
        !socialActivityData?.records[0]?.isAcademic)
    ) {
      dataObj.push(value);
    } else if (socialActivityData?.records[0]?.dimName !== "Intellectual") {
      dataObj.push(value);
    }
  });

  const tabChange = (title) => {
    if (title !== collaps) {
      setCollaps(title);
    } else {
      setCollaps();
    }
  };

  return (
    <div className="coursepup textDemo" id="CompletecourseGuide">
      <div
        className="Alltypecourseguidepopup textDemo d-flex "
        id="Alltypecourseguidepopup"
        role="dialog"
      >
        <div className="modal-dialog modal-lg textDemo">
          <div className="modal-content courseInformation schoolcourse textDemo">
            <div className="modal-header textDemo">
              <div className="heading p-0 border-0 w-100 textDemo">
                <h2 className="flex textDemo">
                  <span className="flex textDemo">
                    {" "}
                    <img
                      src={image.course_journey}
                      alt=""
                      className="textDemo mr-2"
                    />
                    Course Guide
                  </span>
                  <button
                    className="btn closeguidepopup"
                    data-dismiss="modal"
                    onClick={() => closeGuide(true)}
                  >
                    <i className="fa-light fa-square-minus m-0"></i>
                  </button>
                </h2>
              </div>
            </div>
            {guideType === "Intellectual_Guide" ? (
              <div className="modal-body coursebody">
                <div className="sharewithfrnd pb-0">
                  <p>
                    A course covers a set of related lessons and is divided into
                    4 modules. Each section takes about 30-60 minutes to
                    complete and includes the following elements.
                  </p>{" "}
                  <div
                    className="ProcessAccordian w-100 textDemo"
                    div
                    id="accordion"
                  >
                    {COURSE_GUIDE_INT?.map((val, key) => (
                      <div
                        className="Processaccordianlist courseStepDesc textDemo"
                        id="headingOne"
                      >
                        <h4
                          data-toggle="collapse"
                          data-target={"#collapseOne" + val?.title}
                          aria-controls={"collapseOne" + val?.title}
                          aria-expanded={collaps == val?.title && "true"}
                          onClick={() => tabChange(val?.title)}
                          className="textDemo"
                        >
                          <img src={val?.icon} className="textDemo" />

                          {val?.title}
                          <span className="AngleupDown topstyle textDemo">
                            <i className="fa-solid fa-angle-down textDemo"></i>
                          </span>
                        </h4>
                        <div
                          className={`courseStepDesc collapse textDemo ${collaps == val?.title && "show"
                            }`}
                          id={"collapseOne" + val?.sequence}
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="coursedesc textDemo">
                            <p className="textDemo">{val?.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="modal-body coursebody">
                <div className="sharewithfrnd pb-0">
                  {socialActivityData?.records[0]?.dimName ===
                    "Intellectual" ? (
                    <p>
                      A course focuses on a primary and related skills and is
                      divided into 4 modules. Each module takes about 30-60
                      minutes to complete and includes the following elements.
                    </p>
                  ) : (
                    <p>
                      A course focuses on a primary and related skills and is
                      divided into 4 modules. Each module takes about 30-60
                      minutes to complete and includes the following elements.
                    </p>
                  )}

                  <div
                    className="ProcessAccordian w-100 textDemo"
                    div
                    id="accordion"
                  >
                    {dataObj?.map((val, key) => (
                      <div
                        className="Processaccordianlist courseStepDesc textDemo"
                        id="headingOne"
                      >
                        <h4
                          data-toggle="collapse"
                          data-target={"#collapseOne" + val?.title}
                          aria-controls={"collapseOne" + val?.title}
                          aria-expanded={collaps == val?.title && "true"}
                          onClick={() => tabChange(val?.title)}
                          className="textDemo"
                        >
                          <img src={val?.icon} className="textDemo" />

                          {val?.title}
                          <span className="AngleupDown topstyle textDemo">
                            <i className="fa-solid fa-angle-down textDemo"></i>
                          </span>
                        </h4>
                        <div
                          className={`courseStepDesc collapse textDemo ${collaps == val?.title && "show"
                            }`}
                          id={"collapseOne" + val?.sequence}
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="coursedesc textDemo">
                            <p className="textDemo">
                              {socialActivityData?.records[0]?.dimName ===
                                "Intellectual" &&
                                socialActivityData?.records[0]?.series
                                  ?.charDesc &&
                                socialActivityData?.records[0]?.isAcademic
                                ? val?.desc
                                : val?.descArt}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompleteCourseGuide;

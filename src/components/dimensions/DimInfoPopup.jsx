import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "../../utils/Packages";
import {
  GetRibbon,
  getDimensionData,
  postAbandoned,
} from "../../redux/actions/APIs";
import * as image from "../../resources/images";
import { textTrim } from "../../utils/helper";
import ReactTooltip from "react-tooltip";
import { resetResponse } from "../../redux/actions";
import Success from "../notifications/Success";

const DimInfoPopup = ({ closeDipInfoPopup, coursesData }) => {
  const dispatch = useDispatch();

  const { courseList, defaultChildData, selectedDim, postResponse } =
    useSelector((state) => state.collections);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const abondanChecked = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };
  const handleSubmit = () => {
    setSubmitLoader(true);
    dispatch(postAbandoned(defaultChildData?.id, selectedIds));
  };

  useEffect(() => {
    if (postResponse) {
      toast.info(<Success response={postResponse} />);
      dispatch(
        getDimensionData(defaultChildData?.id, selectedDim, selectedDim)
      );
      dispatch(GetRibbon(defaultChildData?.id));
      setSubmitLoader(false);
      closeDipInfoPopup(courseList?.name);
      dispatch(postAbandoned());
    }
  }, [postResponse]);

  return (
    <div className="newinfo_popup">
      <div className="modal d-flex" role="dialog">
        <div className="modal-dialog modal-lg abundantpopup">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex">
                  <span>
                    <img src={image.mortarboard} className="mr-2" />
                    Courses: Confirm Interest
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => closeDipInfoPopup(courseList?.name)}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="infopopup_wrap  align-items-start">
                <div className="infopopupright align-items-start pb-2">
                  <div className="info_related_text w-100">
                    <div className="infopopup_txt">
                      <p className="m-0 text-left">
                        Your progress is slower than recommended for the courses
                        listed below. Kindly confirm if you are not interested
                        in continuing these courses.
                      </p>
                    </div>
                  </div>
                  <div className="intrestpopup w-100 mt-3">
                    <div className="confirmintrest">
                      <table>
                        <>
                          <tr>
                            <th>Not Interested</th>
                            <th>Course Name</th>
                            <th>Section In-Progress</th>
                            <th>Your Pace</th>
                            <th>Recommended Pace</th>
                          </tr>
                          {coursesData.map((cor, ky) => (
                            <tr key={ky}>
                              <td>
                                <div className="signupType checkycourse">
                                  <label className="Selcheckbox ActiveQQst w-100 m-0">
                                    <input
                                      type="checkbox"
                                      id={cor.id}
                                      name="dimensionQuestion"
                                      value="PUBLIC"
                                      checked={selectedIds.includes(cor.id)}
                                      onChange={() => abondanChecked(cor?.id)}
                                    />
                                    <span className="checkmark intrestcheckmark"></span>
                                  </label>
                                </div>
                              </td>
                              <td
                                data-for={cor?.name}
                                data-tip
                                data-event-off=""
                              >
                                {cor?.name?.length > 45 && (
                                  <ReactTooltip
                                    id={cor?.name}
                                    className="tooltip"
                                  >
                                    <p>{cor?.name}</p>
                                  </ReactTooltip>
                                )}

                                {textTrim(cor?.name, 45)}
                              </td>
                              <td>Section #{cor?.secInPro}</td>
                              <td>
                                {cor?.yourPace == 0
                                  ? "Less than 1 day"
                                  : cor?.yourPace + " days"}
                              </td>
                              <td>
                                {cor?.recommendedPace == 0
                                  ? "Less than 1 day"
                                  : cor?.recommendedPace + " days"}
                              </td>
                            </tr>
                          ))}
                        </>
                      </table>
                      <p>
                        Courses you are not interested in will be excluded from
                        all reports. You can resume them at your convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="form-group BDsubmitbutton m-0 d-flex">
                <div className="buttonDistribotion">
                  <button
                    type="button"
                    onClick={() => closeDipInfoPopup(courseList?.name)}
                    className="btn-blue btn-login d-block mb-5 cancelbutton"
                  >
                    <i className="fa-solid fa-xmark"></i> Close
                  </button>
                  {submitLoader ? (
                    <button
                      className="btn-blue btn-login d-block mb-5 "
                      disabled
                      key={Math.random()}
                    >
                      <span className="RounAnimation"></span> Please wait...
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSubmit()}
                      disabled={selectedIds?.length >= 1 ? false : true}
                      className="btn-blue btn-login d-block mb-5 submitbutton"
                    >
                      <i className="fa-solid fa-paper-plane"></i> Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimInfoPopup;

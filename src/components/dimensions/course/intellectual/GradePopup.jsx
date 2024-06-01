import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";
import {
  getDimensionData,
  subMitUserGrade,
} from "../../../../redux/actions/APIs";
import { useEffect, useState } from "react";
import { selectedUser } from "../../../../redux/actions";
import { getUserDetails } from "../../../../utils/helper";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const GradePopup = ({ handleCloseGradePopup, data, showActivity }) => {
  const {
    defaultChildData,
    gradelevel,
    userGradeResponse,
    alluserdetails,
    path,
    dimension,
  } = useSelector((state) => state.collections);

  const dispatch = useDispatch();
  const params = useParams();
  const [levelId, setLevelId] = useState();
  const [loader, setLoader] = useState(false);

  const getGradeId = (gradeId) => {
    setLevelId(gradeId);
  };

  const handleUserGrade = () => {
    setLoader(true);
    dispatch(subMitUserGrade(defaultChildData?.id, levelId));
    dispatch(selectedUser(getUserDetails(alluserdetails, path)));
  };

  // useEffect(() => {
  // 	if (userGradeResponse) {
  // 		let skillData = [];
  // 		dispatch(
  // 			getDimensionData(
  // 				params?.id,
  // 				{ key: params?.dimId, value: "Intellectual" },
  // 				dimension
  // 			)
  // 		).then(() => {
  // 			if (dimension) {
  // 				if ("Intellectual" in dimension) {
  // 					dimension["Intellectual"]?.skills?.map((skill, index) => {
  // 						if (skill?.id === data?.id) {
  // 							skillData = skill;
  // 						}
  // 					});
  // 				}

  // 				handleCloseGradePopup(false, []);
  // 				setLoader(false);
  // 				showActivity(
  // 					undefined,
  // 					"Vicky",
  // 					skillData?.name,
  // 					skillData?.courses[0],
  // 					skillData,
  // 					data?.isResource
  // 				).then(() => {
  // 					dispatch(subMitUserGrade());
  // 				});
  // 			}
  // 		});
  // 		dispatch(selectedUser(getUserDetails(alluserdetails, path)));
  // 	}
  // }, [userGradeResponse]);

  useEffect(() => {
    if (userGradeResponse) {
      let skillData = [];
      let selectCourse = [];
      dispatch(
        getDimensionData(
          params?.id,
          { key: params?.dimId, value: "Intellectual" },
          dimension
        )
      ).then(() => {
        if (dimension) {
          if ("Intellectual" in dimension) {
            dimension["Intellectual"]?.skills?.map((skill, index) => {
              if (skill?.id === data?.id) {
                skillData = skill;
                skill?.courses.map((course, key) => {
                  if (course?.type === "VICKY") selectCourse = course;
                });
              }
            });
          }
          handleCloseGradePopup(false, []);
          setLoader(false);
          showActivity(
            undefined,
            "Vicky",
            skillData?.name,
            selectCourse,
            skillData,
            data?.isResource
          ).then(() => {
            dispatch(subMitUserGrade());
          });
        }
      });
    }
  }, [userGradeResponse]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch dimension data
  //       const dimensionData = await dispatch(
  //         getDimensionData(
  //           params?.id,
  //           { key: params?.dimId, value: "Intellectual" },
  //           dimension
  //         )
  //       );

  //       // Extract skill data from dimension
  //       let skillData = null;
  //       if (dimensionData && "Intellectual" in dimensionData) {
  //         skillData = dimensionData["Intellectual"]?.skills?.find(
  //           (skill) => skill?.id === data?.id
  //         );
  //       }

  //       // Close grade popup and set loader to false
  //       handleCloseGradePopup(false);
  //       setLoader(false);

  //       // Show activity and dispatch submit user grade action
  //       if (skillData) {
  //         await showActivity(
  //           undefined,
  //           "Vicky",
  //           skillData?.name,
  //           skillData?.courses[0],
  //           skillData,
  //           data?.isResource
  //         );
  //         dispatch(subMitUserGrade());
  //       }

  //       // Dispatch action to select user
  //       dispatch(selectedUser(getUserDetails(alluserdetails, path)));
  //     } catch (error) {
  //       // Handle error if necessary
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Call fetchData function when userGradeResponse changes
  //   if (userGradeResponse) {
  //     fetchData();
  //   }
  // }, [
  //   userGradeResponse,
  //   params?.id,
  //   params?.dimId,
  //   dimension,
  //   data?.id,
  //   data?.isResource,
  //   alluserdetails,
  //   path,
  //   dispatch,
  // ]);

  return (
    <div className="newinfo_popupdimension">
      <div
        className="modal fade show d-block"
        id="schoolactivity111"
        role="dialog"
      >
        <div className="modal-dialog modal-lg gradepopup">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex">
                  <span>
                    <img src={image.mortarboard} className="mr-2" />
                    Select Your Grade
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => handleCloseGradePopup(false, [])}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="infopopup_wrap  align-items-start">
                <div className="infopopupright align-items-start pb-2">
                  <div className="WelcomScreen">
                    <div className=" welcomscreentwo ">
                      <div className="w-100">
                        {/* <div class="input-group">
													<label for="" className="d-flex">Select Grade <span class="mandatoryField">*</span></label>
													<div class="form-group">
														<select className="w-100" onChange={(e) => getGradeId(e)}>
															<option value="0">Select Grade</option>
															{gradelevel?.records?.map((val) => (
																<option value={val?.id}>{val?.name}</option>
															))}
														</select>

													</div>
												</div> */}
                        {/* grade in radio button type */}
                        <div className="signupType m-0 mt-3 pt-1 flex-wrap ">
                          {/* <h4 className="mb-2"><i className="fa-light fa-clipboard-question mr-2"></i>Select  Grade</h4> */}
                          {gradelevel?.records?.map((val) => (
                            <label className="Selcheckbox w-100 ActiveQQst mb-3 ">
                              <span className="QQtitle">Grade {val?.name}</span>
                              <input
                                type="radio"
                                id="Public"
                                name="Question"
                                value="PUBLIC"
                                onClick={() => getGradeId(val?.id)}
                              ></input>
                              <span className="checkmark"></span>
                            </label>
                          ))}
                          {/* <label className="Selcheckbox   w-100 ActiveQQst mb-3">
														<span className='QQtitle'>Grade 7</span>
														<input
															type="radio"
															id="Public"
															name="Question"
															checked
															value="PUBLIC"
														></input>
														<span className="checkmark"></span>
													</label>
													<label className="Selcheckbox  w-100 ActiveQQst">
														<span className='QQtitle'>Grade 8</span>
														<input
															type="radio"
															id="Public"
															name="Question"
															checked
															value="PUBLIC"
														></input>
														<span className="checkmark"></span>
													</label> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer dontshowagain">
              <div className="form-group BDsubmitbutton m-0 d-flex">
                <div className="buttonDistribotion">
                  <>
                    {loader ? (
                      <div className="buttonDistribotion justify-content-end">
                        <button
                          className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
                          disabled
                        >
                          <span className="RounAnimation mr-1"></span> Please
                          Wait...
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn-blue btn-login d-block mb-5 cancelbutton"
                          onClick={() => handleCloseGradePopup(false, [])}
                        >
                          <i className="fa-solid fa-xmark"></i> Close
                        </button>
                        <button
                          type="submit"
                          className="btn-blue btn-login d-block mb-5"
                          disabled={levelId ? false : true}
                          onClick={() => handleUserGrade()}
                        >
                          <i className={"fa-solid fa-paper-plane mr-2"}></i>{" "}
                          Submit
                        </button>
                      </>
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GradePopup;

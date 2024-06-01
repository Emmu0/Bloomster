import React, { useState } from "react";
import * as image from "../../resources/images";
import HolisticGrowthFooter from "./HolisticGrowthFooter";
import { resetLoginResponse, showModal } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { dontShowAgain } from "../../redux/actions/Home";
import HolisticScene1 from "./HolisticScene1";
import HolisticScene2 from "./HolisticScene2";
import HolisticScene3 from "./HolisticScene3";
import { SITENAME } from "../../utils/Messages";

const HolisticGrowthPopup = () => {
  const dispatch = useDispatch();
  const { defaultChildData } = useSelector((state) => state.collections);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [totalItems, setTotalItems] = useState();

  const holisticData = {
    dimensionModal: [
      {
        CourseImg: image.blueArrow,
        Value: {
          X: "At the root level you enroll your child in courses",
          Y: "The sole purpose of a course is to teach your child a skill",
        },
        skills:
          "Skills include: critical thinking, problem solving, conflict resolution, mindfulness and many more...",
      },
      {
        CourseImg: image.blueArrow,
        Value: {
          X: "Your child's learning in skills contribute to their learning in a dimension",
          Y: "A dimension is the area or the aspect of your child's growth",
        },
        skills:
          "We focus on five dimensions: Social, Emotional, Spiritual, Physical, and Intellectual",
      },
      {
        CourseImg: image.blueArrow,
        Value: {
          X: "Your child's learning in the five dimensions contribute to their overall holistic growth",
          Y: "Holistic development prepares your child for the challenges of the future",
        },
      },
    ],
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataToShow = holisticData?.dimensionModal?.slice(startIndex, endIndex);

  const totalItem = holisticData?.dimensionModal?.length;
  const totalPages = Math.ceil(totalItem / itemsPerPage);

  const isNext = (data) => {
    if (data === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };


  const closePopup = () => {
    if (defaultChildData?.id) {
      let dontShow = document.getElementById("dontshow");
      if (dontShow.checked) {
        dispatch(
          dontShowAgain(defaultChildData?.id)
        );
      }
    }
    dispatch(resetLoginResponse());
    dispatch(showModal());
  };

  return (
    <>
      <div className="newinfo_popupdimension entryPOuopwrap">
        <div className="modal d-flex" id="schoolactivity43" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0 w-100">
                  <h2 className="flex">
                    <span>
                      <img src={image.greenflag} className="mr-2" />
                      {SITENAME.NAME}: Holistic Growth Model -{" "}
                      {currentPage == 1 && "Courses"}
                      {currentPage == 2 && "Skills"}
                      {currentPage == 3 && "Dimensions"} ({currentPage} of{" "}
                      {totalPages})
                    </span>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={() => closePopup()}
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
                      <div className="nextbackonpoup flex">
                        {currentPage > 1 && (
                          <span onClick={() => isNext("back")}>
                            <i className="fa-solid fa-angle-left mr-1"></i>Back
                          </span>
                        )}
                        {currentPage < 3 && (
                          <span
                            className="ml-auto"
                            data-toggle="modal"
                            onClick={() => isNext("next")}
                            data-target="#schoolactivity44"
                          >
                            Next<i className="fa-solid fa-angle-right ml-1"></i>
                          </span>
                        )}
                      </div>
                      {currentPage === 1 ? (
                        <HolisticScene1 />
                      ) : currentPage === 2 ? (
                        <HolisticScene2 />
                      ) : (
                        <HolisticScene3 />
                      )}
                      <div className="welcomesceerelatetext mt-3">
                        <ul>
                          <li className="flexone">
                            <span>
                              <i className="fa-solid fa-play mr-2"></i>
                            </span>
                            <h4>{dataToShow[0]?.Value?.X}</h4>
                          </li>
                          <li className="flexone">
                            <span>
                              <i className="fa-solid fa-play mr-2"></i>
                            </span>
                            <h4>{dataToShow[0]?.Value?.Y}</h4>
                          </li>
                        </ul>
                        {dataToShow[0]?.skills ? (
                          <h4 className="skillinclude">
                            {/* <strong>Skills include:</strong>{" "} */}
                            {dataToShow[0]?.skills}
                          </h4>
                        ) : (
                          <h4 className="skillinclude blankspace">&nbsp;</h4>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <HolisticGrowthFooter
                close={closePopup}
                currentPage={currentPage}
              />
              {/* <div className="modal-footer dontshowagain">
                <div className="form-group BDsubmitbutton m-0 d-flex">
                  <div className="buttonDistribotion justify-content-start">
                  <div className='signupType'>
						
									<label
										className={`Selcheckbox ActiveQQst m-0`}>
										<span className="QQtitle">Don't Show Again</span>
										<input
											type="radio"
											id="Public"
											name="dimensionQuestion"
											value="PUBLIC"></input>
										<span className="checkmark"></span>
									</label>
							
						</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="newinfo_popupdimension">
        <div className="modal fade" id="schoolactivity44" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading border-0 p-0 w-100">
                  <h2 className="flex">
                    <span>
                      <img src={image.greenflag} className="mr-2" />
                      VickyKnows: Holistic Growth Model - Skills (2 of 3)
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="infopopup_wrap  align-items-start">
                  <div className="infopopupright align-items-start pb-2">
                     <div className="WelcomScreen">
                      <div className="nextbackonpoup flex">
                      <span data-toggle="modal"
                        data-target="#schoolactivity43"><i className="fa-solid fa-angle-left mr-1"></i>Back</span>
                        <span className="ml-auto" data-toggle="modal"
                            data-target="#schoolactivity45">Next<i className="fa-solid fa-angle-right ml-1"></i></span>
                      </div>
                      <div className="welcomscreenContent welcomscreentwo">
                            <div className="welcirculuarContent flextwo Wlsocial_skill">
                              <h3>Dimension</h3>
                            </div>
                            <div className="Welcomedimenlist flex">
                              <div className="Welcomecontentlist">
                              <div className="leftarrowpopup"><img src={image.blueArrow} alt="" /></div>
                                <p>Course 1</p>
                              </div>
                              <div className="Welcomecontentlist">
                              <div className="leftarrowpopup rightarrowpopup"><img src={image.blueArrow} alt="" /></div>
                                <p>Course 2</p>
                              </div>
                            </div>
                      </div>
                      <div className="welcomesceerelatetext">
                        <ul>
                            <li className="flexone">
                             
                            <span><i className="fa-solid fa-play mr-2"></i></span>
                            <h4> Your child's learning in skills contribute to their learning in a dimension</h4></li>
                             <li className="flexone">
                            
                            <span><i className="fa-solid fa-play mr-2"></i></span>
                            <h4>A dimension is the area or the aspect of your child's growth</h4></li>
                        </ul>
                        <h4 className="skillinclude"><strong>Skills include:</strong> Social, Emotional, Spiritual, Physical, and Intellectual</h4>
                      </div>
                     </div>
                 
                  </div>
                </div>
              </div>
              <div className="modal-footer dontshowagain">
                <div className="form-group BDsubmitbutton m-0 d-flex">
                  <div className="buttonDistribotion justify-content-start">
                  <div className='signupType'>
						
									<label
										className={`Selcheckbox ActiveQQst m-0`}>
										<span className="QQtitle">Don't Show Again</span>
										<input
											type="radio"
											id="Public"
											name="dimensionQuestion"
											value="PUBLIC"></input>
										<span className="checkmark"></span>
									</label>
							
						</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="newinfo_popupdimension">
        <div className="modal fade" id="schoolactivity45" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
             <div className="modal-header">
                <div className="heading border-0 p-0 w-100">
                  <h2 className="flex">
                    <span>
                      <img src={image.greenflag} className="mr-2" />
                      VicktKnows: Holistic Growth Model - Dimensions  (3 of 3)
                    </span>
                    <button className="btn btn-primary" data-dismiss="modal">
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="infopopup_wrap  align-items-start">
                  <div className="infopopupright align-items-start pb-2">
                     <div className="WelcomScreen">
                      <div className="nextbackonpoup flex">
                      <span data-toggle="modal"
                        data-target="#schoolactivity44"><i className="fa-solid fa-angle-left mr-1"></i>Back</span>
                             </div>
                      <div className="welcomscreenContent welcomscreentwo">
                            <div className="welcirculuarContent flextwo Wlsocial_skill wlHolistic">
                              <h3>Holistic</h3>
                            </div>
                            <div className="Welcomedimenlist flex">
                              <div className="Welcomecontentlist dimensionone">
                              <div className="leftarrowpopup "><img src={image.blueArrow} alt="" /></div>
                                <p>Diemnsion 1</p>
                              </div>
                              <div className="Welcomecontentlist dimensiontwo">
                              <div className="leftarrowpopup rightarrowpopup "><img src={image.blueArrow} alt="" /></div>
                                <p>Diemnsion 2</p>
                              </div>
                            </div>
                      </div>
                      <div className="welcomesceerelatetext">
                        <ul>
                            <li className="flexone">
                             
                            <span><i className="fa-solid fa-play mr-2"></i></span>
                            <h4> Your child's learning in skills contribute to their learning in a dimension</h4></li>
                             <li className="flexone">
                            
                            <span><i className="fa-solid fa-play mr-2"></i></span>
                            <h4>A dimension is the area or the aspect of your child's growth</h4></li>
                        </ul>
                         <h4 className="skillinclude">&nbsp;</h4>
                      </div>
                     </div>
                 
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HolisticGrowthPopup;

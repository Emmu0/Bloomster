import React from "react";
import * as image from "../../resources/images";
import { useDispatch } from "react-redux";
import { showOverallModal } from "../../redux/actions/Home";

const ShowOverallProgressPopup = ({ handleShowOverallProgressPopup }) => {
  let dispatch = useDispatch();
  return (
    <div className="newinfo_popup holisticview holistic_view_popup">
      <div className="modal d-flex" id="schoolactivity93" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex">
                  <span>
                    <i class="fa-duotone fa-circle-three-quarters-stroke mr-2"></i>
                    Overall Progress
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => handleShowOverallProgressPopup(false)}
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
                    <div className="welcomscreenContent welcomscreentwo flex">
                      <div className="w-60">
                        <ul>
                          <li>
                            {" "}
                            <span>
                              <i class="fa-solid fa-play mr-2"></i>
                            </span>
                            Overall progress is your child’s consolidated
                            progress across the five (5) dimensions
                          </li>
                          <li>
                            {" "}
                            <span>
                              <i class="fa-solid fa-play mr-2"></i>
                            </span>
                            Dimension progress is the consolidated progress for
                            all skills your child is working on in that
                            dimension
                          </li>
                          <li>
                            {" "}
                            <span>
                              <i class="fa-solid fa-play mr-2"></i>
                            </span>
                            Skill progress is the average of progress for
                            completed and in-progress courses in that skill
                          </li>
                          <li>
                            {" "}
                            <span>
                              <i class="fa-solid fa-play mr-2"></i>
                            </span>
                            Progress in a course is calculated based on your
                            child’s proficiency, completion, and pace
                          </li>
                        </ul>
                      </div>
                      <div className="w-40">
                        <img src={image.overallprogressimg} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer dontshowagain">
              <div className="form-group BDsubmitbutton m-0 d-flex">
                <div className="buttonDistribotion">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton"
                    onClick={() => handleShowOverallProgressPopup(false)}
                  >
                    <i className="fa-solid fa-xmark"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOverallProgressPopup;

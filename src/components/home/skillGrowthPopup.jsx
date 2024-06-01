import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import {
  showGrowthModal,
  showSkillModal,
  showSkillgrowthModal,
} from "../../redux/actions/Home";
import { GROWTHDATA } from "../../utils/DataObjects";
import { getDimIcon } from "../../utils/helper";
const SkillGrowth = ({ data }) => {
  const { selectedDim } = useSelector((state) => state.collections);
  const { growthSkillPopup } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(showSkillgrowthModal());
  };

  return (
    <div className="newinfo_popupdimension">
      <div className="modal  show d-flex" id="schoolactivity39" role="dialog">
        <div className="modal-dialog modal-lg skillmodalpopup">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex">
                  <span>
                    {growthSkillPopup?.skills?.length > 0 ? (
                      getDimIcon(growthSkillPopup.name)
                    ) : (
                      <img src={image.CourseTitleIcon} className="mr-2" />
                    )}{" "}
                    Progress: {growthSkillPopup.name}
                  </span>
                  <button className="btn btn-primary" onClick={() => close()}>
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="infopopup_wrap  align-items-start">
                <div className="infopopupright align-items-start pb-2">
                  <div className="WelcomScreen">
                    <div className="welcomscreenContent welcomscreentwo">
                      <ul>
                        <li>
                          {" "}
                          <span>
                            <i class="fa-solid fa-play mr-2"></i>
                          </span>
                          {growthSkillPopup?.skills?.length > 0
                            ? "Dimension progress is the consolidated progress for all skills your child is working on in that dimension"
                            : "Skill progress is the average of progress for completed and in-progress courses in that skill"}
                        </li>
                        {growthSkillPopup?.skills?.length > 0 && (
                          <li>
                            {" "}
                            <span>
                              <i class="fa-solid fa-play mr-2"></i>
                            </span>
                            Skill progress is the average of progress for
                            completed and in-progress courses in that skill
                          </li>
                        )}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="form-group BDsubmitbutton m-0 d-flex">
                <div className="buttonDistribotion">
                  <button
                    type="button"
                    onClick={() => close()}
                    className="btn-blue btn-login d-block mb-5 cancelbutton"
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

export default SkillGrowth;

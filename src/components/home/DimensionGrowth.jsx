/** @format */

import { useDispatch } from "react-redux";
import * as image from "../../resources/images";
import { showGrowthModal } from "../../redux/actions/Home";
import { GROWTHDATA } from "../../utils/DataObjects";
import { getDimIcon } from "../../utils/helper";
const DimensionGrowth = ({ data, showDimensionPopup }) => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(showGrowthModal());
    if (showDimensionPopup) {
      showDimensionPopup(false, []);
    }
  };

  let skillData = [];
  GROWTHDATA.map((vl) => {
    if (vl.title === data.name) {
      skillData = vl.skills;
    }
  });

  return (
    <div className="modal  d-flex show newinfo_popup newinfo_popupdimension">
      <div className="modal-dialog modal-lg">
        <div className="modal-content courseInformation">
          <div className="modal-header">
            <div className="heading border-0 p-0 w-100">
              <h2 className="flex">
                <span>
                  {getDimIcon(data.name)} {data.name} Dimension
                </span>
                <button
                  onClick={() => close()}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </h2>
            </div>
          </div>

          <div className="modal-body pb-1">
            <div className="infopopup_wrap  align-items-start">
              <div className="infopopupright flex align-items-start">
                <div className="info_related_text w-50">
                  <h4 className="">{data.alert}</h4>
                  <div className="infopopup_txt mt-3">
                    {/* <p>&nbsp;</p> */}
                    <p className="m-0">{data.description}</p>
                  </div>
                </div>
                <div className="holisticflowr w-50">
                  <div className="skilanddimensioncircle Holisticgtflr  mt-2">
                    <div className="Holosticcircle">
                      <h4>Holistic Growth</h4>
                    </div>
                    <div className="Dimen_Circle SocicalCircle">
                      {/* <p>Social</p> */}
                    </div>
                    <div className="Dimen_Circle EmotionalCircle">
                      {/* <p>Emotional</p> */}
                    </div>
                    <div className="Dimen_Circle SpritiuslCircle">
                      {/* <p>Mindfulness</p> */}
                    </div>
                    <div className="Dimen_Circle PhysicalCircle">
                      {/* <p>Physical</p> */}
                    </div>
                    <div className="Dimen_Circle intellectualCircle">
                      {/* <p>Intellectual</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="infopopupleft flexone justify-content-left ">
                {/* <div className="holisticflowr skills_flow">
                      <div className="Singlr_skill">
                        <div className="skill_pnlcircle">
                          <p>Conflict Resolution</p>
                        </div>
                      </div>
                    </div> */}

                {/* <p className="uppercarrowicon text-center flexone">
                      <span>
                       <strong>Skill contributes to Dimension</strong>
                         
                      <img src={image.upperarrowicon} alt="" />
                      </span>
                    </p> */}
                <div className="holisticflowr dimension_skilflow">
                  <div className="skilanddimensioncircle">
                    <div
                      className={`dimensionskills ${data.name}_Skils_center`}
                    >
                      <h5 className="mt-3 pt-3">{data.name}</h5>
                    </div>
                    <div className="skillCircleList">
                      {skillData.map((vl, ky) => (
                        <div className="skill_pnlcircle" key={ky}>
                          <p>{vl}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="uppercarrowicon angleuppericon text-center flexone">
                  <img src={image.angleforwrdarow_dim} alt="" />
                  <strong>Dimension contributes to Holistic Growth</strong>
                </p>
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
  );
};

export default DimensionGrowth;

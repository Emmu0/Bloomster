/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { Modal } from "react-bootstrap";
import Vicky from "../controls/Vicky";
import { GROWTHDATA } from "../../utils/DataObjects";

const DimensionCourseSkillsPopup = ({
  handleShowInfoPopup,
  infoPopupData,
  dimName,
  selectedDimension,
  type,
}) => {
  const { selectedDim } = useSelector((state) => state.collections);

  let skillData = [];
  GROWTHDATA.map((vl) => {
    // if (vl.title === dimName ) {
    //   if (vl.skills.find((obj) => obj === infoPopupData.name)) {
    //     skillData = [...new Set([infoPopupData.name, ...vl.skills])];
    //   }else {
    //     skillData = [infoPopupData.name, ...vl.otherSkills];
    //   }
    // }else
    if (vl.title === selectedDimension?.dimName) {
      skillData = vl.skills;
      // if (vl.skills.find((obj) => obj === infoPopupData.name)) {
      //   console.log(vl, "obj")
      //   skillData = [...new Set([...vl.skills])];
      // }else {
      //   skillData = [infoPopupData.name, ...vl.otherSkills];
      // }
    }
  });

  return (
    // <Modal show={true} className='AddChildPopup' id='infopopup'>
    //   <Modal.Body className='addChildProf p-0'>
    //     <div className='d-none'>
    //       <audio controls id='pollyId' src=''></audio>
    //     </div>

    //     <span className='Abouttaginfo'>
    //       <div className=' NuggetPopup '>
    //         <div className='NuggetPopupTitle flex'>
    //           <div className='NuggetVickyImage'>
    //             <h4 className='flex'>
    //               <img src={image.Info_Popup_pose} alt='' className='mr-3' />{" "}
    //               {infoPopupData?.name}
    //             </h4>
    //           </div>
    //           <div className='powrBulbicon'>
    //             <img src={image.Powericon} alt='' />
    //           </div>
    //         </div>
    //         <div className='NuggetPopupDesc justify-content-between d-flex'>
    //           <p
    //             dangerouslySetInnerHTML={{
    //               __html: infoPopupData?.description
    //                 ? infoPopupData?.description
    //                 : infoPopupData,
    //             }}
    //           />
    //           <Vicky
    //             text={
    //               infoPopupData?.description
    //                 ? infoPopupData?.description
    //                 : infoPopupData
    //             }
    //           />
    //         </div>
    //         <div className='input-group full-Width-group basic_details_form NuggetPopupFooter'>
    //           <div className='form-group BDsubmitbutton d-flex m-0'>
    //             <div className='buttonDistribotion'>
    //               <button
    //                 type='button'
    //                 onClick={() => handleShowInfoPopup(false, [])}
    //                 className='btn-blue btn-login d-block mb-5 cancelbutton pointer'>
    //                 <i className='fa-solid fa-xmark'></i> Close
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </span>
    //   </Modal.Body>
    // </Modal>
    <div className="modal  d-flex show newinfo_popup newinfo_popupdimension">
      <div className="modal-dialog modal-lg">
        <div className="modal-content courseInformation">
          <div className="modal-header">
            <div className="heading border-0 p-0 w-100">
              <h2 className="flex">
                <span>
                  <img src={image.courselevel4} className="mr-2" />
                  {selectedDimension?.dimName} Dimension{">"}{" "}
                  {infoPopupData.name}
                </span>

                <button
                  onClick={() => handleShowInfoPopup(false, [])}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </h2>
            </div>
          </div>

          <div className="modal-body">
            <div className="infopopup_wrap  align-items-start">
              <div className="infopopupright flex align-items-start">
                <div className="info_related_text w-50">
                  <h4 className="">{selectedDimension?.dimAlert}</h4>
                  <div className="infopopup_txt mt-3">
                    {/* <p>&nbsp;</p> */}
                    <p className="m-0">{infoPopupData.description}</p>
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
                <div className="holisticflowr skills_flow">
                  <div className="Singlr_skill">
                    <div className="skill_pnlcircle">
                      <p>Conflict Resolution</p>
                    </div>
                  </div>
                </div>

                <p className="uppercarrowicon text-center flexone">
                  <span>
                    <strong>Skill contributes to Dimension</strong>

                    <img src={image.upperarrowicon} alt="" />
                  </span>
                </p>
                <div className="holisticflowr dimension_skilflow">
                  <div className="skilanddimensioncircle">
                    <div
                      className={`dimensionskills ${selectedDimension?.dimName}_Skils_center`}
                    >
                      <h5 className="">{selectedDimension?.dimName}</h5>
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
                  onClick={() => handleShowInfoPopup(false, [])}
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

export default DimensionCourseSkillsPopup;

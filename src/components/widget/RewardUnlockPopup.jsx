/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as image from "../../resources/images";
import { useEffect } from "react";
import { sendRewardEmail } from "../../redux/actions/APIs";
import { getCapitalized } from "../../utils/helper";

export default function RewardUnlockPopup({
  handleShowRewardUnlockPopup,
  rewardData,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const param = useParams();

  const { defaultChildData, socialActivityData } = useSelector(
    (state) => state.collections
  );

  /*
  useEffect(() => {
    if (socialActivityData && defaultChildData) {
      let data = {
        userCourseId: socialActivityData?.records[0]?.ucId,
        userActivityId: socialActivityData?.records[0]?.activityId,
        uaPoints: socialActivityData?.records[0]?.points,
        ucPoints: socialActivityData?.records[0]?.ucPoints,
        learnerId: defaultChildData?.id,
        courseId: socialActivityData?.records[0]?.courseId,
      };

      //	dispatch(sendRewardEmail(data));
    }
  }, [socialActivityData]);
  */

  return (
    <div className="newinfo_popupdimension">
      <div
        className="modal fade show d-block"
        id="schoolactivity98"
        role="dialog"
      >
        <div className="modal-dialog modal-lg skillmodalpopup">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex">
                  <span>
                    <img src={image.congratulationpopup} className="mr-2" />
                    Congratulations! Reward Unlocked
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => handleShowRewardUnlockPopup(false)}
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
                    <div className="congconfeti">
                      <img src={image.congratulation_confeti} alt="" />
                    </div>
                    <div className="welcomscreenContent welcomscreentwo">
                      <p className="text-left rewardtext">
                        Fantastic job,{" "}
                        <strong>{getCapitalized(defaultChildData?.firstName)}!</strong> You've
                        met your target and unlocked a reward from your parents.
                      </p>
                      <div className="rewardfortaravh text-center">
                        {rewardData?.imageUrl != null ? (
                          <img src={rewardData?.imageUrl} alt="" />
                        ) : (
                          <img src={image.rewardimg} alt="" />
                        )}
                      </div>
                      <h4 className="text-center">{getCapitalized(rewardData?.rewardName)}</h4>
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
                    className="btn-blue btn-login d-block mb-5 cancelbutton ml-auto"
                    onClick={() => handleShowRewardUnlockPopup(false)}
                  >
                    <i className="fa-solid fa-xmark mr-2"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  applyDiscount,
  courseEnrollment,
  getAllUsersDetail,
  selectedPlan,
} from "../../redux/actions/APIs";

import * as image from "../../resources/images";
import { billingPlan, downGradeUser } from "../../redux/actions";
import { SITENAME } from "../../utils/Messages";

const ThanksPopUp = ({ data, close, subscribeData, existingSubscription }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { typeSelected, selectedDim, dimension, defaultChildData } =
    useSelector((state) => state.collections);
  useEffect(() => {
    dispatch(applyDiscount());
    dispatch(billingPlan());
    dispatch(downGradeUser());
  }, []);

  // useEffect(() => {
  //   //userId, dimId, skillId, courseId, dimension
  //   if (typeSelected) {
  //     if (selectedDim) {
  //       let dimObj = selectedDim;
  //       if (!dimObj?.key) {
  //         dimObj = data.courseObj.courseObj.dimension;
  //       }

  //       console.log(
  //         "STEP 2",
  //         defaultChildData?.id,
  //         dimObj,
  //         data?.courseObj?.skillId,
  //         data?.courseObj?.courseObj?.id,
  //         dimension,
  //         dimObj?.value
  //       );
  //       dispatch(
  //         courseEnrollment(
  //           defaultChildData?.id,
  //           dimObj,
  //           data?.courseObj?.skillId,
  //           data?.courseObj?.courseObj?.id,
  //           dimension,
  //           dimObj?.value
  //         )
  //       );
  //     } else {
  //       if (subscribeData?.dimension) {
  //         console.log("STEP 1", data, subscribeData);
  //         dispatch(
  //           courseEnrollment(
  //             defaultChildData?.id,
  //             subscribeData?.dimension?.key,
  //             data?.courseObj?.skillId,
  //             data?.courseObj?.courseObj?.id,
  //             dimension,
  //             subscribeData?.dimension?.value
  //           )
  //         );
  //       }
  //     }
  //   }
  // }, [typeSelected]);

  const thankyou = () => {
    let areaId = data?.courseObj?.skillId;
    if (typeSelected) {
      dispatch(selectedPlan());
      dispatch(getAllUsersDetail());
    }
    history.push({
      state: { skillId: areaId },
    });
    close();
  };
  return (
    <div className="modal d-flex" id="thanksactivity" role="dialog">
      <div className=" modal-dialog modal-lg show">
        <div className="modal-content courseInformation">
          <div className="modal-header">
            <div className="heading p-0 border-0">
              <h2>
                <span>
                  <img src={image.subscription} alt="" /> Subscription:
                  Confirmation{" "}
                </span>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => thankyou()}
                >
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </h2>
            </div>
          </div>
          <div className="modal-body Subject_Curriculam d-flex justify-content-center align-items-center  checkouthanksyoumsg">
            <div className="bodyTitle  mb-3">
              <div className="subtitleHeadinhg flex justify-content-center">
                <div className="bodyimagetitle flex">
                  <div className="d-flex w-100 text-center">
                    <div className="thanksyoupage">
                      <div className="thanksmsg  p-0 m-auto">
                        <span className="">
                          {" "}
                          <img src={image.subscription_success} />
                        </span>
                        <div className="flex justify-content-center mt-3 ">
                          <div className=" ">
                            <h2 className="text-center">
                              {" "}
                              {typeSelected?.objectName !==
                                "Subscription Renew" &&
                                (existingSubscription?.subscription?.cardNumber
                                  ? `Your payment was successful. Your subscription has been upgraded.`
                                  : `Congratulations! Your payment was successful. Welcome to the ${SITENAME.NAME} family as our valued subscriber!`)}
                              {typeSelected?.objectName ===
                                "Subscription Renew" &&
                                `Your ${SITENAME.NAME} subscription has been renewed.`}
                            </h2>
                            <p className="text-center tytxtmessage">
                              {/* Now your{" "}
                              {typeSelected &&
                                typeSelected?.records &&
                                typeSelected?.records[0]?.type}{" "}
                              subscrption is activated successfully{" "} */}
                              {/* Click continue to proceed */}
                            </p>
                          </div>
                        </div>
                        {/* <div className="priceWrap p-0">
                          <button
                            type="button"
                            className="btn-blue btn-login d-block mt-3 m-auto w-auto px-3 py-2 "
                            onClick={() => thankyou()}
                          >
                            Continue{" "}
                            <i className="fa-regular fa-arrow-right ml-2"></i>
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="form-group BDsubmitbutton d-flex m-0">
              <div className="buttonDistribotion">
                <div className="buttonDistribotion">
                  <button
                    type="button"
                    data-dismiss="modal"
                    onClick={() => thankyou()}
                    className="btn-blue btn-login d-block mb-5 cancelbutton"
                  >
                    <i className="fa-solid fa-xmark"></i>Close
                  </button>
                  {/* <button
                    type="submit"
                    onClick={() => thankyou()}
                    className="btn-blue btn-login d-block mb-5"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Continue
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThanksPopUp;

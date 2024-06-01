import React from "react";
import * as image from "../../resources/images";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setSubscribeModal, subscriptionPageNode } from "../../redux/actions";
import { getCapitalized } from "../../utils/helper";
import { SITENAME } from "../../utils/Messages";

const SubscribePopUp = ({ handleSubscribe, closePopup }) => {
  const { loggedInUser, alluserdetails } = useSelector(
    (state) => state.collections
  );

  let existingSubscription = {};

  if (loggedInUser?.subscription) {
    if (loggedInUser.children?.length > 0) {
      loggedInUser.children.map((val, ky) => {
        if (val?.isSubscriber) {
          existingSubscription = val;
          existingSubscription.subscription = loggedInUser?.subscription;

          return false;
        }
      });
    }
  }
  const dispatch = useDispatch();
  const _closePopup = () => {
    dispatch(setSubscribeModal());
    dispatch(subscriptionPageNode());
    if (closePopup) {
      closePopup();
    }
  };
  let freeTrial = false;
  let nextBillDt =
    alluserdetails?.records[0]?.subscription?.nextBillDate &&
    new Date(alluserdetails?.records[0]?.subscription?.nextBillDate);
  const currentDate = new Date();
  if (
    alluserdetails?.records[0]?.subscription &&
    alluserdetails?.records[0].role.name === "PARENT" &&
    nextBillDt &&
    nextBillDt > currentDate &&
    !alluserdetails.records[0].subscription.cardNumber
  ) {
    freeTrial = true;
  }

  return (
    <div>
      <Modal
        id="common-modal"
        size="lg"
        centered={true}
        show={true}
        className="courseInformation SubscriptionModlPopup br-none"
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header className="pt-0 pb-0">
          <div className="modal-title flex h4 w-100">
            <div className="NuggetPopupTitle border-0 w-100 p-0 flex">
              <div className="NuggetVickyImage d-flex align-items-center">
                <img src={image.subscription} alt="" className="mr-2 p-1" />
                <h4>Subscribe Now</h4>
              </div>{" "}
              <button
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => _closePopup()}
              >
                <i className="fa-regular fa-xmark m-0"></i>
              </button>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="fullWidthPopup forlikepopup p-0">
          <div className="d-flex ">
            <div className="flex p-3  SubsCorsePopup">
              {/* <div className='Poupleftimage'>
                <img src={image.subscribePopup} />
              </div> */}
              <div className="popuprightmsg flex flex-wrap w-100 welcomscreenContent">
                <div className="EnrollcConfimation">
                  <ul>
                    {!existingSubscription?.id && (
                      <li>
                        <h4 className="mb-3 mt-2 text-center">
                          Subscribe now to enroll in this course and for
                          unlimited access to all content
                        </h4>
                      </li>
                    )}

                    {!freeTrial && existingSubscription?.id && (
                      <>
                        <li>
                          <i className="fa-solid fa-play mr-2 mt-1"></i>
                          <h4 className="secondchildtxt">
                            You are currently subscribed only for{" "}
                            <strong>
                              {getCapitalized(existingSubscription?.firstName)}
                            </strong>
                            .{" "}
                          </h4>
                        </li>
                        <li>
                          <i className="fa-solid fa-play mr-2 mt-1"></i>
                          <h4>
                            Upgrade to a <strong> family plan</strong> for
                            unlimited access for all your children.
                          </h4>
                        </li>
                      </>
                    )}

                    {freeTrial && existingSubscription?.id && (
                      <>
                        <li>
                          <i className="fa-solid fa-play mr-2 mt-1"></i>
                          <h4 className="secondchildtxt">
                            Your free one-month trial allows you to fully
                            explore the offerings of {SITENAME.NAME} for{" "}
                            <strong>{existingSubscription?.firstName}</strong>.{" "}
                          </h4>
                        </li>
                        <li>
                          {" "}
                          <i className="fa-solid fa-play mr-2 mt-1"></i>
                          <h4 className="secondchildtxt">
                            Upgrade to a <strong> family plan</strong> for
                            unlimited access for all your children.
                          </h4>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5  ml-auto cancelbutton"
              onClick={() => _closePopup()}
            >
              <i className="fa-solid fa-xmark mr-2"></i>Close
            </button>
            {loggedInUser?.role?.name !== "LEARNER" && (
              <button
                type="button"
                className="btn-blue btn-login d-block mb-5"
                onClick={() => handleSubscribe()}
              >
                <i className="fa-solid fa-paper-plane mr-2"></i> Subscribe
              </button>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubscribePopUp;

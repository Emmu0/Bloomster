import React from "react";
import * as image from "../../resources/images";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../utils";
import WebLayout from "../layout/WebLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUnsubscribed } from "../../redux/actions/APIs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { SITEFNAME } from "../../utils/Messages";

const UnSubscribe = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.collections);
  const param = useParams();
  const _unsubscribed = () => {
    dispatch(getUnsubscribed(param?.token));
  };

  return (
    <WebLayout className="outerPagesHeader">
      <div className="modal-dialog modal-lg show unsubscribepopup">
        <div className="modal-content courseInformation schoolcourse">
          <div className="unsubscribe_styl">
            {response && response?.success ? (
              <div className="modal-body Subject_Curriculam text-center">
                <h4>Thanks for your subscrption</h4>
                <p className="pt-2">
                  We will get back to you regarding your query..!
                </p>
              </div>
            ) : (
              <>
                <div className="modal-body AddChildPopup Subject_Curriculam text-center p-0">
                  <div className="modal-header pl-0 pb-0 pt-0">
                    <div className="heading p-0 border-0 w-100">
                      <h2 className="unsubsvickyimg w-100 flex">
                        <span>
                          <img src={image.Robovicky} alt="" className="mr-2" />
                          Unsubscribe
                        </span>
                        <button
                          className="btn btn-primary"
                          data-dismiss="modal"
                          onClick={() => setIsOpen(false)}
                        >
                          <i className="fa-regular fa-xmark"></i>
                        </button>
                      </h2>
                    </div>
                  </div>
                  <h4>We are sorry to see you go and hope to see you again.</h4>
                  <img src={image.delete_img} alt="" className="w-50 p-3 m-2" />
                  <p className="mb-3">
                    Are you sure you want to unsubscribe from {SITEFNAME.NAME}’s
                    newsletter?
                  </p>
                </div>
                <div className="modal-footer">
                  <div className="unsubscribe_ftr">
                    <button
                      onClick={() => {
                        history.push(PATHS.HOME);
                      }}
                      type="button"
                      className="btn-blue btn-login d-block cancelbutton  w-auto ml-auto"
                    >
                      <i className="fa-solid fa-xmark mr-2"></i> No
                    </button>
                    <buttont
                      onClick={() => _unsubscribed()}
                      className="btn-blue btn-login d-block w-auto pointer ml-2"
                    >
                      <i className="fa-solid fa-paper-plane mr-2"></i>Yes
                    </buttont>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </WebLayout>
  );
};
export default UnSubscribe;

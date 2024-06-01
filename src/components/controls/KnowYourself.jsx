import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { showModal, beginMultiQuiz } from "../../redux/actions";
import { PATHS } from "../../utils";
import { useHistory } from "react-router-dom";

import { postData } from "../../redux/actions/PersonalityAPIs";

const KnowYourself = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const { defaultChildData } = useSelector((state) => state.collections);

  const handleChange = () => {
    dispatch(postData());
    dispatch(showModal());
    history.push(PATHS.PROFILEPERSONALITY_STR + defaultChildData?.id);
  };

  const handleSmartQuiz = () => {
    dispatch(showModal());
    dispatch(beginMultiQuiz(false));
    history.push({
      pathname: PATHS.PROFILESMARTQUIZ_STR + defaultChildData?.id,
      state: { userId: defaultChildData?.id },
    });
  };

  return (
    <div className="halfPagePOpup knowsyourself">
      <div className="modal d-flex" id="schoolactivity38" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0">
                <h2 className="flex">
                  <span>
                    <img src={image.knowyoyrselfcolored} className="mr-2" />
                    Know Yourself
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => dispatch(showModal())}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>

            <div className="modal-body Subject_Curriculam flex flex-wrap align-content-center">
              <div className="EnrollTitle flex w-100  justify-content-center selectionofquiztxt m-0">
                <div className="NuggetVickyImage">
                  <img src={image.Robovicky_right} className="mr-2" alt="" />
                </div>
                <div className="LessionDtlOverview knwyourself">
                  <p>
                    A happy, well-balanced person is constantly re-evaluating
                    who they are as a person and what they have learned. These
                    assessments will help you monitor your development in how
                    you are “Smart” and who <strong>you</strong> are as a
                    person. These tests will <strong>also</strong> help you
                    better understand the people you encounter in your life and
                    how to use everybody’s combined “Smarts” and “Types” to
                    tackle any challenge.
                  </p>
                  <p>
                    Select an assessment below to begin your journey to{" "}
                    <strong>“Knowing Yourself”</strong> and ways to improve your
                    skills.
                  </p>
                </div>
              </div>
              <div className="flex w-100 justify-content-end knowyourcardWrap">
                <div
                  className="knowyouselfcard pointer"
                  onClick={() => handleSmartQuiz()}
                >
                  <img src={image.howyousmart} alt="" />
                  <h2>Check Your Smarts</h2>
                </div>
                <div
                  className="knowyouselfcard pointer"
                  onClick={() => handleChange()}
                >
                  <img src={image.personalitybnr} alt="" />
                  <h2>Check Your Personality Type</h2>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="form-group BDsubmitbutton d-flex m-0">
                <div className="buttonDistribotion">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 m-0 cancelbutton"
                    onClick={() => dispatch(showModal())}
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

export default KnowYourself;

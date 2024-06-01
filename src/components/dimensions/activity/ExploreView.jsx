import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { kFormatter } from "../../../utils/helper";

import ExploreBasics from "./ExploreBasics";
import * as image from "../../../resources/images";
import ExploreContent from "./ExploreContent";
import ExplorePractice from "./ExplorePractice";
import ExploreQuiz from "./ExploreQuiz";

import ResourceRatings from "./ResourceRatings";
import { getLesson } from "../../../redux/actions/APIs";

const ExploreView = ({
  selectedCourse,
  resourceInnerData,
  lessonResources,
  handlePopUp,
  areaId,
  providerPopup,
}) => {
  const {
    getLessonResources,
    quizData,
    getSelectedUser,
    response,
    defaultChildData,
  } = useSelector((state) => state.collections);

  const dispatch = useDispatch()

  const [quizDataPoints, setQizDataPoints] = useState();
  const [activeTab, setActiveTab] = useState(1);

  const [ratingPopup, setRatingPopup] = useState(false);
  const [providerRecord, setproviderRecord] = useState();

  useEffect(() => {
    setActiveTab(resourceInnerData?.indexNumber);
    setproviderRecord(getLessonResources && getLessonResources?.records[0]);
  }, [resourceInnerData]);

  useEffect(() => {
    if (quizData) {
      setQizDataPoints(quizData?.records);
    } else {
      setQizDataPoints(getLessonResources?.records);
    }
  }, [quizData, getLessonResources]);

  useEffect(() => {
    dispatch(getLesson());
  }, [response]);

  useEffect(() => {
    if (getLessonResources) {
      setproviderRecord(getLessonResources && getLessonResources?.records[0]);
    }
  }, [getLessonResources, response]);

  const chooseTab = (data) => {
    if (data === 3) {
      if (getSelectedUser?.isSubscriber || defaultChildData?.isSubscriber) {
        setActiveTab(data);
      } else {
        handlePopUp();
      }
    } else {
      setActiveTab(data);
    }
  };

  const [showPractice, setShowPractice] = useState(false);
  const [result, setresult] = useState(undefined);
  const close = () => {
    setShowPractice(false);
    setresult(undefined);
  };
  const QuizpopUp = (data) => {
    setresult(data);
  };

  useEffect(() => {
    if (!response) {
      setRatingPopup(false);
    }
  }, [response]);

  return (
    <>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div className="modal fade show" id="resourceInnerModal" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation">
              <div className="modal-header">
                <div className="heading p-0 border-0">
                  <h2 className="w-100 flex">
                    <span>
                      {" "}
                      <img
                        src={image.CourseTitleIcon}
                        className="mr-2"
                        alt=""
                      />
                      {resourceInnerData?.subjectName}
                    </span>

                    <button
                      data-dismiss="modal"
                      className="btn btn-primary"
                      onClick={() => chooseTab(5)}
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>
              <span className="closeback pointer" data-dismiss="modal">
                <span className="backHalscreen" onClick={() => chooseTab(5)}>
                  Back
                </span>
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </span>
              <div className="modal-body Subject_Curriculam  pt-0">
                <div className="bodyTitle">
                  <div className="subtitleHeadinhg flex"></div>
                </div>
                <div className="mt-3 mb-3 flex">
                  <ResourceRatings
                    val={providerRecord}
                    modlessonId={resourceInnerData?.resourceContent}
                    providerPopup={providerPopup}
                    resourceType={"resourceProvider"}
                  />
                </div>

                <div className="tabgrid AddActivityTab">
                  <ul key={activeTab}>
                    <li
                      onClick={() => chooseTab(1)}
                      className={`tabs1${activeTab} ${
                        activeTab == 1 ? "active-tabs" : ""
                      } `}
                    >
                      <i className="fa-regular fa-message-captions"></i>
                      Content
                    </li>
                    <li
                      onClick={() => chooseTab(2)}
                      className={`tabs1 ${
                        activeTab == 2 ? " active-tabs " : ""
                      } `}
                    >
                      <i className="fa-light fa-book-open-reader"></i>
                      Quiz
                      <span className="ml-3 resoQuizscore">
                        <span className="earnnoCoin">
                          {(quizDataPoints &&
                            kFormatter(quizDataPoints[0]?.quizPoints)) ||
                            (quizDataPoints && quizDataPoints[0]?.quizPoints)}
                        </span>
                        <img src={image.money_bag} alt="" />
                      </span>
                    </li>
                    <li
                      onClick={() => chooseTab(3)}
                      className={`tabs1 ${
                        activeTab == 3 ? "active-tabs" : ""
                      } `}
                    >
                      <i className="fa-regular fa-file-pen"></i>
                      Practice
                      {defaultChildData?.isSubscriber ? (
                        ""
                      ) : (
                        <span>
                          <i className="fa-sharp fa-solid fa-lock ml-3"></i>
                        </span>
                      )}
                    </li>
                    <li
                      onClick={() => chooseTab(4)}
                      className={`tabs1 ${
                        activeTab == 4 ? "active-tabs" : ""
                      } `}
                    >
                      <i className="fa-regular fa-diagram-predecessor"></i>
                      Basics
                    </li>
                  </ul>
                </div>
                {activeTab == 1 && (
                  <ExploreContent
                    resourceInnerData={resourceInnerData?.metadata}
                  />
                )}
                {activeTab == 2 && (
                  <ExploreQuiz
                    resourceInnerData={resourceInnerData}
                    selectedCourse={selectedCourse}
                    dataResult={QuizpopUp}
                    areaId={areaId}
                    selectedQuizIndex={0}
                  />
                )}
                {activeTab == 3 && (
                  <ExplorePractice
                    areaId={areaId}
                    selectedCourse={selectedCourse}
                    practice={lessonResources}
                    resourceInnerData={resourceInnerData}
                    selectedQuizIndex={0}
                  />
                )}
                {activeTab == 4 && (
                  <ExploreBasics resourceInnerData={resourceInnerData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPractice && (
        <div className="modal fade d-block show" id="myModal" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header p-0">
                <div className="heading w-100">
                  <h2 className="flex">
                    <span>
                      Practice{" "}
                      <i className="fa-sharp fa-solid fa-lock mr-3"></i>
                    </span>
                    <button
                      type="button"
                      className="close"
                      onClick={() => close()}
                    >
                      &times;
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                Practice section will be unlock after subscription
              </div>
              <div className="modal-footer p-1">
                <div className="input-group full-Width-group basic_details_form">
                  <div className="form-group BDsubmitbutton m-0 d-flex">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                        onClick={() => close()}
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 "
                      >
                        <i className="fa-solid fa fa-unlock"></i> Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreView;

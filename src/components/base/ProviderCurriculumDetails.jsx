import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProviderCurriculamModule from "./ProviderCurriculamModule";
import ProviderResources from "./ProviderResources";
import * as image from "../../resources/images";
import { getSequnceSort } from "../../utils/helper";
import { getCurriculam, getLesson } from "../../redux/actions/APIs";
import {
  providerPracticeData,
  providerQuizData,
  providerQuizOption,
} from "../../redux/actions";

const ProviderCurriculumDetails = ({
  closeModal,
  courseId,
  courseTitle,
  handleResourceTabs,
  providerPopup,
}) => {
  const { response, getCurriculamData, getLessonResources } = useSelector(
    (state) => state.collections
  );
  const dispatch = useDispatch();
  const [tabsId, setTabsId] = useState(undefined);
  const [activeTab, setActiveTab] = useState(1);
  const [random, setRandom] = useState(Math.random());
  const [lessonModuleDetail, setLessonModuleDetail] = useState(undefined);

  const chooseTab = (data) => {
    dispatch(getLesson());
    setTabsId(lessonData[0]?.modLessId);
    setActiveTab(data);
  };
  useEffect(() => {
    setRandom(Math.random());
  }, [response]);

  const handleClose = () => {
    closeModal(false);
    dispatch(getCurriculam());
    dispatch(providerQuizData());
    dispatch(providerQuizOption());
    dispatch(providerPracticeData());
  };

  const tabProChange = (modlessId) => {
    setTabsId(modlessId);
    setActiveTab(2);
  };

  useEffect(() => {
    if (getCurriculamData?.records) {
      setTimeout(() => {
        setLessonModuleDetail(getCurriculamData?.records);
      }, 1000);
    }
  }, [getCurriculamData?.records]);

  let selectLessonName = [];
  let complextObj = [];
  selectLessonName = getCurriculamData?.records?.map((item, key) => {
    if (item?.isComplex) {
      selectLessonName = getSequnceSort(item?.lesssons)?.map(
        (vl, ky) =>
          vl?.isComplex &&
          vl?.countOfResources &&
          complextObj.push({
            modLessId: vl.moduleLessonId,
            lesson: vl.name,
            module: item.name,
            sequence: item.sequence,
          })
      );
      return complextObj;
    }
  });

  let lessonData = [];
  selectLessonName &&
    getSequnceSort(complextObj)?.map(
      (vl, ky) => (
        lessonData.push(vl), (lessonData = getSequnceSort(lessonData))
      )
    );
  lessonData = getSequnceSort(lessonData);

  return (
    <>
      <div className="halfPagePOpup SchoolActivityPopup">
        <div
          className="modal fade show d-block"
          id="schoolactivity4"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          data-aos="fade-left"
        >
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
                      {courseTitle}
                    </span>

                    <button
                      data-dismiss="modal"
                      className="btn btn-primary"
                      onClick={() => handleClose()}
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam basicdetailsform">
                <div className="tabgrid AddActivityTab">
                  <ul>
                    <li
                      onClick={() => chooseTab(1)}
                      className={`tabs1 ${
                        activeTab == 1 ? "active-tabs" : ""
                      } `}
                    >
                      <i className="fa-regular fa-folders"></i> Curriculum
                    </li>
                    <li
                      onClick={() => chooseTab(2)}
                      className={`tabs1 ${
                        activeTab == 2 ? "active-tabs" : ""
                      } ${!lessonModuleDetail ? "disableSubscard" : ""}`}
                    >
                      <button disabled={!lessonModuleDetail ? true : false}>
                        <i className="fa-regular fa-person-chalkboard"></i>{" "}
                        Resources
                      </button>
                    </li>
                  </ul>
                </div>
                {/*-------------------------------*/}
                {activeTab === 1 && (
                  <ProviderCurriculamModule
                    tabProChange={tabProChange}
                    getCurriculamData={getCurriculamData}
                  />
                )}
                {activeTab === 2 && (
                  <ProviderResources
                    courseId={courseId}
                    courseTitle={courseTitle}
                    tabsId={tabsId}
                    lessonData={lessonData}
                    handleResourceTabs={handleResourceTabs}
                    providerPopup={providerPopup}
                  />
                )}
                {/*-------------------------------*/}
              </div>
              <div className="modal-footer">
                <div className="input-group full-Width-group basic_details_form m-0">
                  <div className="form-group BDsubmitbutton m-0 d-flex">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton m-0"
                        onClick={() => handleClose()}
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
      </div>
    </>
  );
};

export default ProviderCurriculumDetails;

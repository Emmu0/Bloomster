import react, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import ExploreBasics from "../dimensions/activity/ExploreBasics";
import ExploreContent from "../dimensions/activity/ExploreContent";
import ResourceRatings from "../dimensions/activity/ResourceRatings";
import ProviderExplorePractice from "./ProviderExplorePractice";
import ProviderExploreQuiz from "./ProviderExploreQuiz";

const ProviderExploreView = ({
  resourceInnerData,
  tabIndex,
  modlessonId,
  courseTitle,
  providerPopup,
}) => {
  const [activeTab, setActiveTab] = useState(tabIndex);

  const chooseTab = (data) => {
    setActiveTab(data);
  };

  useEffect(() => {
    setActiveTab(tabIndex);
  }, [tabIndex]);

  return (
    <>
      <div className='halfPagePOpup SchoolActivityPopup'>
        <div className='modal fade show' id='resourceInnerModal' role='dialog'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content courseInformation'>
              <div className='modal-header'>
                <div className='heading p-0 border-0'>
                  <h2 className='w-100 flex'>
                    <span>
                      {" "}
                      <img
                        src={image.CourseTitleIcon}
                        className='mr-2'
                        alt=''
                      />
                      {courseTitle}
                    </span>
                    {/* onClick={() => chooseTab(5)} */}
                    <button data-dismiss='modal' className='btn btn-primary'>
                      <i className='fa-regular fa-xmark m-0'></i>
                    </button>
                  </h2>
                </div>
              </div>
              {/* onClick={() => chooseTab(5)} */}
              <span className='closeback pointer' data-dismiss='modal'>
                <span className='backHalscreen'>Back</span>
                <i className='fa-sharp fa-solid fa-arrow-right'></i>
              </span>
              <div className='modal-body Subject_Curriculam  pt-0'>
                <div className='bodyTitle'>
                  <div className='subtitleHeadinhg flex'></div>
                </div>
                <div className='mt-3 mb-3 flex'>
                  <ResourceRatings
                    val={resourceInnerData}
                    modlessonId={modlessonId}
                    resourceType={"resourceProvider"}
                    providerPopup={providerPopup}
                  />
                </div>

                <div className='tabgrid AddActivityTab'>
                  <ul key={activeTab}>
                    <li
                      onClick={() => chooseTab(1)}
                      className={`tabs1${activeTab} ${
                        activeTab == 1 ? "active-tabs" : ""
                      } `}>
                      <i className='fa-regular fa-message-captions mr-2'></i>
                      Content
                    </li>
                    <li
                      onClick={() => chooseTab(2)}
                      className={`tabs1 ${
                        activeTab == 2 ? " active-tabs " : ""
                      } `}>
                      <i className='fa-light fa-book-open-reader mr-2'></i>
                      Quiz
                      <span className='ml-3 resoQuizscore'>
                        <span className='earnnoCoin'>
                          {/* {quizDataPoints &&
                                                        kFormatter(quizDataPoints[0]?.quizPoints)} */}
                        </span>
                        {/* <img src={image.money_bag} alt="" /> */}
                      </span>
                    </li>
                    <li
                      onClick={() => {
                        chooseTab(3);
                      }}
                      className={`tabs1 ${
                        activeTab == 3 ? "active-tabs" : ""
                      } `}>
                      <i className='fa-regular fa-file-pen mr-2'></i>
                      Practice
                      {/* <i className="fa-sharp fa-solid fa-lock ml-3"></i> */}
                    </li>
                    <li
                      onClick={() => chooseTab(4)}
                      className={`tabs1 ${
                        activeTab == 4 ? "active-tabs" : ""
                      } `}>
                      <i className='fa-regular fa-diagram-predecessor mr-2'></i>
                      Basics
                    </li>
                  </ul>
                </div>

                {activeTab == 1 && (
                  <ExploreContent
                    resourceInnerData={resourceInnerData?.metaDatas}
                  />
                )}
                {activeTab == 2 && <ProviderExploreQuiz />}
                {activeTab == 3 && <ProviderExplorePractice />}

                {activeTab == 4 && <ExploreBasics />}
              </div>

              {/* <div className='modal-footer p-0 pl-3 pr-3 mb-3'></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderExploreView;

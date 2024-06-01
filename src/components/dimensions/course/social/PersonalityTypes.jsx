import React, { useEffect } from "react";
import { ShimmerCategoryItem } from "./../../../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import {
  begunQuiz,
  personalitiesResponseData,
  personalityQuizResponse,
  ptquizData,
} from "../../../../redux/actions/PersonalityAPIs";
const PersonalityTypes = ({ isShowRepeatQuiz }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personalitiesResponseData());
    dispatch(personalityQuizResponse());
  }, []);

  const {
    personalitiesResponse,
    personalityQuizSelectedData,
    personalityQuizData,
  } = useSelector((state) => state.personality);

  useEffect(() => {
    if (personalityQuizSelectedData) {
      dispatch(ptquizData());
      dispatch(personalityQuizResponse());
      dispatch(personalitiesResponseData());
      // dispatch(begunQuiz(false));
      // showRepeatQuiz(true);
      // setIsBeginQuizShow(false);
    }
  }, [personalityQuizSelectedData]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".RightbarPannel");
    const scrollTop = window.scrollY;
    scrollTop >= 0
      ? header.classList.add("rightpannelSticky")
      : header.classList.remove("rightpannelSticky");
  };

  let learnerPersonalityType =
    personalitiesResponse?.records[0]?.learnerpersonality;

  let introvertTypes = personalitiesResponse?.records[0]?.INTROVERT;
  let extrovertTypes = personalitiesResponse?.records[0]?.EXTROVERT;

  const begunQz = () => {
    dispatch(begunQuiz(true));
  };

  return (
    <>
      {
        // personalityQuizData?.length > 0 &&
        // personalitiesResponse?.records[0]?.learnerpersonality[0] == null &&
        !personalityQuizSelectedData &&
          introvertTypes &&
          introvertTypes.length > 0 &&
          learnerPersonalityType != null &&
          learnerPersonalityType.length > 0 &&
          learnerPersonalityType[0] == null && (
            <div className="LessionDtlOverview">
              <div className="p-2">
                <p>
                  <strong>Take Your Personality Quiz</strong>{" "}
                </p>
                <div className="startQuiz mt-3">
                  <button
                    id="rightPanelBeginQuiz"
                    className="btn-blue btn-login d-block  w-auto"
                    onClick={() => begunQz(true)}
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i> Begin Quiz
                  </button>
                </div>
              </div>
            </div>
          )
      }

      <div className="personalityListing  pb-3 mb-3">
        {
          // personalitiesResponse?.records[0]?.learnerpersonality[0] !== null ?
          learnerPersonalityType != null &&
            learnerPersonalityType?.length > 0 &&
            learnerPersonalityType[0]?.id != null && (
              <div className="personalitylistitem p-3 yourpersonalitytyped">
                <h3 className=" pb-3 text-left">Your Personality Type:</h3>
                <div className="">
                  {learnerPersonalityType.map((learnerPType, index) => (
                    <div
                      key={index}
                      className="AViewListitem border-0 mb-3 pb-3 pointer"
                    >
                      <div className="VideoThumbimg LinkImage pointer">
                        <img src={learnerPType.imageUrl} alt="..." />
                      </div>
                      <div className="videoDescription ml-2 LinkDescription">
                        <h4 className="m-0 mb-2">{learnerPType.name}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: learnerPType.description,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          //   : <div className="mt-5 m-3">
          //   <ShimmerCategoryItem items={1} categoryStyle='STYLE_SIX' />
          // </div>
        }

        {
          // personalityQuizData?.length >= 0 &&
          learnerPersonalityType != null &&
            learnerPersonalityType.length > 0 &&
            learnerPersonalityType[0]?.id != null && (
              <div className="personalitylistitem">
                <div className="otherPersonlity mt-3">
                  <h3 className=" text-left">Other Personality Types:</h3>
                </div>
              </div>
            )
        }
        {
          // personalityQuizData?.length >= 0 &&
          introvertTypes && introvertTypes.length > 0 ? (
            <div className="personalitylistitem p-3">
              <h3 className=" pb-3 text-left">Introverts:</h3>
              <div className="AviewListing flex flex-wrap mt-3">
                {introvertTypes?.map((ptype, index) => (
                  <div
                    key={index}
                    className="AViewListitem border-0 mb-3 pb-3 pointer"
                  >
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={ptype.imageUrl} alt="..." />
                    </div>
                    <div className="videoDescription ml-2 LinkDescription">
                      <h4 className="m-0 mb-2">{ptype.name}</h4>
                      <p>{ptype.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-5 m-3">
              <ShimmerCategoryItem items={1} categoryStyle="STYLE_SIX" />
            </div>
          )
        }

        {
          // personalityQuizData?.length >= 0 &&
          extrovertTypes && extrovertTypes.length > 0 ? (
            <div className="personalitylistitem p-3">
              <h3 className=" pb-3 text-left">Extroverts:</h3>
              <div className="AviewListing flex flex-wrap mt-3">
                {extrovertTypes?.map((ptype, index) => (
                  <div
                    key={index}
                    className="AViewListitem border-0 mb-3 pb-3 pointer"
                  >
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={ptype.imageUrl} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">{ptype.name}</h4>
                      <p>{ptype.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="m-3">
              <ShimmerCategoryItem items={1} categoryStyle="STYLE_SIX" />
            </div>
          )
        }
      </div>
      {introvertTypes && introvertTypes.length > 0 && isShowRepeatQuiz && (
        <div style={{ visibility: "hidden" }} className="RightPanelFooter">
          <button
            className="btn-blue btn-login d-block  ml-auto w-auto mt-3 mb-3 mr-3"
            onClick={() => showQuiz(true)}
          >
            <i className="fa-solid fa-paper-plane mr-2"></i> Retake Quiz
          </button>
        </div>
      )}
    </>
  );
};
export default PersonalityTypes;

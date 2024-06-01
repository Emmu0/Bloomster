import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../../../resources/images";
import {
  begunQuiz,
  personalityQuizDataPostAPI,
  personalitiesResponseData,
  personalityQuizResponse,
  ptquizData,
} from "../../../../redux/actions/PersonalityAPIs";
import { ShimmerCategoryItem, useParams } from "./../../../../utils/Packages";

const PersonalityQuiz = ({
  setIsBeginQuizShow,
  personalityQuizData,
  showRepeatQuiz,
  questioncount,
}) => {
  const { loggedInUser } = useSelector((state) => state.collections);
  const { personalityQuizSelectedData } = useSelector(
    (state) => state.personality
  );

  const dispatch = useDispatch();
  const param = useParams();
  const [quizData, setQuizData] = useState([personalityQuizData]);
  const [shimmer, setshimmer] = useState(undefined);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [quizQuestionCount, setQuizQuestionCount] = useState(0);
  const [waitLoader, setWaitLoader] = useState(false);

  useEffect(() => {
    dispatch(personalitiesResponseData());
  }, []);

  useEffect(() => {
    if (personalityQuizSelectedData) {
      setWaitLoader(false);
      dispatch(begunQuiz(false));
      showRepeatQuiz(true);
      setIsBeginQuizShow(false);
      dispatch(ptquizData());
      dispatch(personalityQuizResponse());
      dispatch(personalitiesResponseData());
      // dispatch(begunQuiz(false));
      // showRepeatQuiz(true);
      // setIsBeginQuizShow(false);
    }
  }, [personalityQuizSelectedData]);

  useEffect(() => {
    setQuizData(personalityQuizData);
    if (personalityQuizData) {
      setQuizQuestionCount(personalityQuizData.length - 1);
      //setQuizData(getDimShuffle(personalityQuizData));
      setTimeout(() => {
        setshimmer(true);
      }, 800);
    }
  }, [personalityQuizData]);

  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleContinue = (nextQuestionIndex) => {
    setCurrentQIndex(nextQuestionIndex + 1);
    setPaginationNumber(paginationNumber + 1);
    setIsOptionSelected(false);
  };
  const handleBack = (nextQuestionIndex) => {
    setCurrentQIndex(nextQuestionIndex - 1);
    setPaginationNumber(paginationNumber - 1);
    setIsOptionSelected(true);
  };

  const selectOption = (event, currentQuestionIndex, selectedOptIndx) => {
    let data = [...personalityQuizData];
    data[currentQuestionIndex].attempted = event.target.checked;
    data[currentQuestionIndex].options[selectedOptIndx].attempted =
      event.target.checked;
    data[currentQuestionIndex].options[selectedOptIndx].isCorrect =
      event.target.checked;
    data[currentQuestionIndex].options.forEach((option, index) => {
      if (index !== selectedOptIndx) {
        option.attempted = false;
        option.isCorrect = false;
      }
    });
    setQuizData(data);
    setIsOptionSelected(true);
  };
  const isProvider = loggedInUser?.role?.name === "PROVIDER" ? true : false;
  const handleSubmit = () => {
    setWaitLoader(true);
    dispatch(personalityQuizDataPostAPI(param.id, isProvider, quizData));
    // dispatch(personalityQuizResponse());
    // dispatch(ptquizData());
    // dispatch(begunQuiz(false));
    // showRepeatQuiz(true);
    // setIsBeginQuizShow(false);
    // dispatch(personalitiesResponseData());
  };

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

  return (
    <>
      {shimmer && quizData?.length > 0 ? (
        <div className="ScenecerelateddQuiz">
          <div className="LRSlidearrow" style={{ textAlign: "center" }}>
            <span
              className={`pointer ${currentQIndex == 0 ? "DissableArrow" : ""}`}
              onClick={() => {
                handleBack(currentQIndex);
              }}
            >
              <i className="fa-light fa-chevron-left"></i>
            </span>
            <span className="ScenePagination" style={{ margin: "16px" }}>
              <strong className="mr-2 ">{paginationNumber}</strong>
              of
              <strong className="ml-2">{questioncount}</strong>
            </span>

            <span
              className={`pointer ${
                !quizData[currentQIndex]?.attempted ||
                currentQIndex >= quizQuestionCount
                  ? "DissableArrow"
                  : ""
              }`}
              onClick={() => {
                handleContinue(currentQIndex);
              }}
            >
              <i className="fa-light fa-chevron-right"></i>
            </span>
          </div>
          <div
            className="signupType rangetypeQuestion textAreatypeQuestion personalitytypeqli"
            key="mykey"
          >
            <h4 className="mb-2 d-flex">
              <span>
                <img src={image.SceneQuestionicon} alt="" />
              </span>
              {quizData && quizData[currentQIndex]?.question}
            </h4>
            {quizData &&
              quizData[currentQIndex]?.options.map((rdOpt, index) => (
                <label className="Selcheckbox" key={rdOpt?.id}>
                  {rdOpt.question}
                  <input
                    id={rdOpt.id}
                    value={rdOpt.id}
                    name="p_quiz_opt"
                    checked={rdOpt.attempted}
                    type="radio"
                    onChange={(event) =>
                      selectOption(event, currentQIndex, index)
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
          </div>
        </div>
      ) : (
        <div className="mt-5 m-3">
          <ShimmerCategoryItem items={1} categoryStyle="STYLE_SIX" />
        </div>
      )}

      {quizData && quizData.length > 0 ? (
        <div className="input-group full-Width-group basic_details_form RightPanelFooter">
          <div className="form-group BDsubmitbutton d-flex m-0 takeyourQuiz priceWrap p-0">
            { currentQIndex !== 0 &&
              <button
              type="submit"
              className="btn-blue btn-login d-block mb-5  ml-0 back_button"             
              onClick={() => {
               handleBack(currentQIndex);
             }}
            >
              <i className="fa-solid fa-arrow-left mr-2 m-0"></i>Back
              
            </button>
            }
            {currentQIndex < quizQuestionCount && (
              <>
            <button
                type="submit"
                className="btn-blue btn-login d-block mb-5  ml-auto"
                disabled={!quizData[currentQIndex]?.attempted}
                onClick={() => {
                  handleContinue(currentQIndex);
                }}
              >
                Continue
                <i className="fa-solid fa-arrow-right ml-2 m-0"></i>
              </button>
              </>
            )}

            {currentQIndex >= quizQuestionCount &&
              (!waitLoader ? (
                <button
                  type="submit"
                  className="btn-blue btn-login d-block mb-5 ml-auto"
                  disabled={!quizData[currentQIndex]?.attempted}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i> Submit
                </button>
              ) : (
                <>
                  <button
                    // type="button"
                    className="btn-blue btn-login d-block mb-5 ml-auto"
                    disabled
                  >
                    <span className="RounAnimation mr-1"></span>Please Wait
                  </button>
                </>
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PersonalityQuiz;

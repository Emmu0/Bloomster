import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  personalitiesResponseData,
  personalityQuizResponse,
} from "../../../../redux/actions/PersonalityAPIs";
import PersonalityQuiz from "./PersonalityQuiz";
import PersonalityTypes from "./PersonalityTypes";

const PersonalitySidebar = (props) => {
  const param = useParams();
  const dispatch = useDispatch();
  const {
    personalitiesResponse,
    personalityQuizData,
    begunQuizType,
    personalityQuizSelectedData,
  } = useSelector((state) => state.personality);

  const { loggedInUser } = useSelector((state) => state.collections);
  const [learnerPersonalityType, setLearnerPersonalityType] = useState([]);
  const [radioQuestionOpt, setRadioQuestionOpt] = useState();
  const [isShowRepeatQuiz, setIsShowRepeatQuiz] = useState(false);
  const [personalityQuestionCount, setPersonalityQuestionCount] = useState(0);
  const surveyName = "Personality Type Quiz";
  const isProvider = loggedInUser?.role?.name === "PROVIDER" ? true : false;
  const personalityName =
    personalitiesResponse?.records[0]?.learnerpersonality[0]?.name != null
      ? personalitiesResponse?.records[0]?.learnerpersonality[0]?.name
      : "Introvert";
  useEffect(() => {
    if (
      personalitiesResponse?.records[0]?.learnerpersonality[0]?.name != null
    ) {
      props.setIsBeginQuizShow(false);
    } else {
      props.setIsBeginQuizShow(true);
    }
    if (!personalitiesResponse) {
      dispatch(
        personalitiesResponseData(param.id, isProvider, personalityName)
      );
    } else {
      setLearnerPersonalityType(
        personalitiesResponse?.records[0]?.learnerpersonality
      );
      if (
        personalitiesResponse?.records[0]?.learnerpersonality[0]?.id != null
      ) {
        setIsShowRepeatQuiz(true);
      }
    }
  }, [personalitiesResponse]);

  useEffect(() => {
    dispatch(personalitiesResponseData(param.id, isProvider, personalityName));
  }, [param.id]);

  useEffect(() => {
    // if (!personalityQuizData) {
    //   dispatch(personalityQuizResponse(param.id, surveyName));
    // }
    if (personalityQuizData) {
      //setRadioQuestionOpt(personalityQuizData.records);
      setRadioQuestionOpt(personalityQuizData);
      setPersonalityQuestionCount(personalityQuizData.length);
    }
  }, [personalityQuizData]);

  useEffect(() => {
    if (begunQuizType) {
      dispatch(personalityQuizResponse(param.id, surveyName));
    } else {
      dispatch(personalityQuizResponse());
    }
  }, [begunQuizType]);

  useEffect(() => {
    if (begunQuizType === false) {
      dispatch(personalityQuizResponse());
    }
  }, [begunQuizType]);

  const showRepeatQuiz = (isRepeatShow) => {
    setIsShowRepeatQuiz(isRepeatShow);
    if (props.setShowRepeat) {
      props.setShowRepeat(isRepeatShow);
    }
    dispatch(personalityQuizResponse(param.id, surveyName));
  };

  return (
    <>
      <div className="heading w-100">
        <h2 className="w-100 flex">
          <span>
            <img src={image.bussinessdiagram} className="mr-2" alt="" />
            Personality Types
          </span>
        </h2>
      </div>
      {begunQuizType ? (
        <PersonalityQuiz
          setIsBeginQuizShow={props.setIsBeginQuizShow}
          personalityQuizData={radioQuestionOpt}
          showRepeatQuiz={showRepeatQuiz}
          questioncount={personalityQuestionCount}
        />
      ) : (
        <PersonalityTypes
          learnerPersonalityType={learnerPersonalityType}
          isShowRepeatQuiz={isShowRepeatQuiz}
        />
      )}
    </>
  );
};

export default PersonalitySidebar;

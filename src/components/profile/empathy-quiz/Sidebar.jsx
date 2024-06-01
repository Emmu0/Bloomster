import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../resources/images";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { getMultiQuiz } from "../../../redux/actions/APIs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ContentSidebar from "./ContentSidebar";

const Sidebar = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [dataLoad, setDataLoad] = useState(false);
  const [quizResponse, setQuizResponse] = useState("");
  const [quizRes, setQuizRes] = useState("");
  const { userAttemptedResponse, multiQuizData, beginQuiz } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    setDataLoad(true);
    dispatch(getMultiQuiz(params?.id));
  }, []);

  useEffect(() => {
    if (multiQuizData && multiQuizData.records[0]?.multiintel) {
      setQuizResponse(multiQuizData?.records[0]?.multiintel);
      setQuizRes(
        userAttemptedResponse && userAttemptedResponse?.records
          ? userAttemptedResponse?.records
          : multiQuizData.records[0]?.multiintel
      );
      setDataLoad(false);
    }
  }, [
    multiQuizData?.records[0]?.multiintel,
    quizResponse,
    quizRes,
    userAttemptedResponse,
  ]);

  return (
    <div>
      {dataLoad ? (
        <div>
          <ShimmerCategoryList items={5} categoryStyle="STYLE_SIX" />{" "}
        </div>
      ) : (
        <>
          <div className="heading d-flex">
            <h2 className="flex w-100">
              <span>
                <img src={image.empathyicon} className="mr-2" alt="" />
                How Empathetic Are You?
              </span>
            </h2>
          </div>
          <ContentSidebar beginQuiz={beginQuiz} />
        </>
      )}
    </div>
  );
};
export default Sidebar;

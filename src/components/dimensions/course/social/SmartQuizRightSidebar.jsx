import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { getMultiQuiz } from "../../../../redux/actions/APIs";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Intelligences } from "../../../../utils/DataObjects";
import Vicky from "../../../controls/Vicky";

const SmartQuizRightSidebar = () => {
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
                <img src={image.multipleintellQuiz} className="mr-2" alt="" />
                Multiple Intelligences
              </span>
            </h2>
          </div>
          {beginQuiz && quizRes.length === 0 ? (
            <div className="LessionDtlOverview">
              <div className="d-flex align-items-start flex-wrap">
                <div className="flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar">
                  <div>
                    <p className="Quiztimetxt">Don’t overthink it!</p>
                    <p>&nbsp;</p>
                    <p className="Quiztimetxt">
                      Be honest and answer the first one that seems right to
                      you.
                    </p>
                  </div>

                  <Vicky
                    text={
                      Intelligences?.title
                        ? Intelligences?.title
                        : Intelligences
                    }
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {quizRes.length > 0 ? (
            <div className="LessionDtlOverview">
              <div className="d-flex align-items-start flex-wrap">
                <div className="flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: Intelligences?.desc
                        ? Intelligences?.desc
                        : Intelligences,
                    }}
                  />
                  <Vicky
                    text={
                      Intelligences?.desc ? Intelligences?.desc : Intelligences
                    }
                  />
                </div>
              </div>
            </div>
          ) : (
            !beginQuiz && (
              <div className="LessionDtlOverview">
                <div className="d-flex align-items-start flex-wrap">
                  <div className="flex w-100 mb-3 align-items-start flex-wrap text-justify textcontentSidebar">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: Intelligences?.testDesc
                          ? Intelligences?.testDesc
                          : Intelligences,
                      }}
                    />
                    <Vicky
                      text={
                        Intelligences?.testDesc
                          ? Intelligences?.testDesc
                          : Intelligences
                      }
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};
export default SmartQuizRightSidebar;

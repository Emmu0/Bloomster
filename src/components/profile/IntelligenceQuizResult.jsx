import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../controls/ProgressBar";
import { getIntelligenceIcon, getSequnceSort } from "../../utils/helper";
import IntelligenceResultPopup from "./IntelligenceResultPopup";
import { ShimmerCategoryList } from "react-shimmer-effects";

const IntelligenceQuizResult = ({ quizResponse, loadRespone }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [description, setDescription] = useState("");
  const { userAttemptedResponse } = useSelector((state) => state.collections);
  let data =
    userAttemptedResponse && userAttemptedResponse?.records
      ? userAttemptedResponse?.records
      : quizResponse;

  // let data = quizResponse;

  const handleResult = (des) => {
    setDescription(des);
    setShowPopup(true);
  };

  document.body.addEventListener("click", function (event) {
    if (
      (event.target && event.target.classList.contains("fa-xmark")) ||
      event.target.getAttribute("fill") === "currentColor" ||
      event.target.getAttribute("data-dismiss") === "modal"
    ) {
      setShowPopup(false);
    }
  });

  return (
    <>
      <div className="quizblok">
        <div className="smartquizwrapper">
          {loadRespone ? (
            <ShimmerCategoryList items={5} categoryStyle="STYLE_SIX" />
          ) : (
            <>
              {data && (
                <h3 className="mb-3 quizrestitle">Your Different "Smarts"</h3>
              )}

              <div className="smqzQueslist inequeresultwrap">
                {data &&
                  getSequnceSort(data)?.map((userAttempt, ky) => (
                    <div
                      key={ky}
                      className="flex intequResult pointer"
                      onClick={() =>
                        handleResult(userAttempt?.surveyDescription)
                      }
                    >
                      <div className="intellegencename">
                        {userAttempt?.surveyName}
                        {getIntelligenceIcon(userAttempt)}
                      </div>
                      <ProgressBar value={userAttempt?.result} data={data} />
                      <div className="procompt">{userAttempt?.result}%</div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
      {showPopup && <IntelligenceResultPopup description={description} />}
    </>
  );
};

export default IntelligenceQuizResult;

import React from "react";

const GrowthProgress = ({
  color,
  value,
  quizData,
  selectedQuestionIndex,
  handleContinue,
}) => {
  return (
    <>
      <div className='quizblok'>
        <div
          className={`backpageStrip p-0 ${
            selectedQuestionIndex === 0 && "pe-none"
          }`}>
          <a
            href='#'
            className={`flexone ${selectedQuestionIndex === 0 && "disabled"}`}
            onClick={() => handleContinue(selectedQuestionIndex - 1, "Back")}>
            <span className=''>
              <i class='fa-solid fa-angle-left mr-1'></i>
            </span>
            Back
          </a>
        </div>
        <span className='Progresslistitem m-0'>
          <span
            className={`diemensionalProgress progressbar1`}
            style={{
              maxWidth: `${value}%`,
              background: color ? color : "#20c997",
            }}></span>
          <span className=''>
            {selectedQuestionIndex + 1} of {quizData.length}
          </span>
        </span>
        <span className='procompt'>
          {selectedQuestionIndex + 1} of {quizData.length}
        </span>

        <div
          className={`backpageStrip p-0 ${
            !quizData[selectedQuestionIndex]?.attempted && "pe-none"
          }`}>
          <span
            onClick={() => {
              handleContinue(selectedQuestionIndex + 1, "Next");
            }}
            className={` ${
              selectedQuestionIndex + 1 === quizData?.length &&
              "pe-none disabled "
            }`}>
            <a
              href='#'
              className={`${
                !quizData[selectedQuestionIndex]?.attempted && "disabled"
              }`}>
              Next
              <span class=''>
                <i class='fa-solid fa-angle-right ml-1'></i>
              </span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
export default GrowthProgress;

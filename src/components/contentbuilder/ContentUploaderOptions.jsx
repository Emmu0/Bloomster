import React from "react";
import { useState } from "react";
import "./ContentBuilder.css";
import Card from "react-bootstrap/Card";
import ContentCreater from "./ContentCreater";
import ContentUploaderAddAttribute from "./ContentUploaderAddAttribute";

const ContentUploaderOptions = ({
  questionData,
  type,
  handleRightPanel,
  handleLastClick,
}) => {
  const [attribute, setAttribute] = useState("root");
  const [showAddAttribute, setShowAddAttribute] = useState(false);
  var optionType = type;

  const handleSelect = (att) => {
    setAttribute(att);
  };

  const handleBack = () => {
    setShowAddAttribute(!showAddAttribute);
  };

  return (
    <div>
      {" "}
      {attribute === "root" && !showAddAttribute && (
        <div style={{ padding: 10, cursor: "pointer" }}>
          {" "}
          <Card className="ContentCard">
            {" "}
            <Card.Header className="ContentCardElement">
              <b>{type} With :</b>{" "}
            </Card.Header>
            <div
              className="ContentCardElement"
              onClick={() => handleSelect("twoOptions")}
            >
              2 Options
            </div>{" "}
            <div
              onClick={() => handleSelect("thirdOptions")}
              style={{ padding: 15 }}
            >
              3 Options
            </div>{" "}
          </Card>{" "}
          <div>
            <center>
              <button
                className="btn-black btn-login d-block  mt-4 mr-4 w-auto"
                onClick={handleBack}
              >
                Back
              </button>
            </center>
          </div>
        </div>
      )}
      {attribute != "root" && (
        <ContentCreater
          handleLastClick={handleLastClick}
          type={attribute}
          optionType={optionType}
          questionData={questionData}
          handleRightPanel={handleRightPanel}
        />
      )}{" "}
      {showAddAttribute && (
        <ContentUploaderAddAttribute
          handleRightPanel={handleRightPanel}
          handleLastClick={handleLastClick}
          optionType={optionType}
        />
      )}
    </div>
  );
};
export default ContentUploaderOptions;

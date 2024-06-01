import { useState } from "react";
import "./ContentBuilder.css";
import Card from "react-bootstrap/Card";
import ContentUploaderAddAttribute from "./ContentUploaderAddAttribute";
import ContentUploaderTextArea from "./ContentUploaderTextArea";

const ContentUploaderMain = ({ handleRightPanel }) => {
  const [attribute, setAttribute] = useState("root");

  const handleSelect = (att) => {
    setAttribute(att);
    handleRightPanel("Hello MAIN");
  };

  return (
    <div>
      {" "}
      {attribute === "root" && (
        <div style={{ padding: 10, cursor: "pointer" }}>
          {" "}
          <Card className="ContentCard">
            {" "}
            <Card.Header className="ContentCardElement">
              <b>Right Panel Content</b>{" "}
            </Card.Header>{" "}
            <div
              className="ContentCardElement"
              onClick={() => handleSelect("TextArea")}
            >
              Real World Application{" "}
            </div>{" "}
            <div
              style={{ padding: 15 }}
              onClick={() => handleSelect("KnowledgeSelect")}
            >
              Knowledge Check
            </div>{" "}
          </Card>{" "}
        </div>
      )}
      {attribute == "KnowledgeSelect" && (
        <ContentUploaderAddAttribute
          type={attribute}
          handleRightPanel={handleRightPanel}
        />
      )}{" "}
      {attribute == "TextArea" && (
        <ContentUploaderTextArea
          type={attribute}
          handleRightPanel={handleRightPanel}
        />
      )}{" "}
    </div>
  );
};
export default ContentUploaderMain;

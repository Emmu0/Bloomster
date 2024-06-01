import { useState } from "react";
import "./ContentBuilder.css";
import Card from "react-bootstrap/Card";
import ContentUploaderOptions from "./ContentUploaderOptions";
import ContentUploaderTextArea from "./ContentUploaderTextArea";
import ContentUploaderMain from "./ContentUploaderMain";
import ContentCreater from "./ContentCreater";

const ContentUploaderAddAttribute = ({questionData, handleRightPanel, handleLastClicks, optionType}) => {

  const [attribute, setAttribute] = useState("root");
  const [showMainCmp, setShowMainCmp] = useState(false);

  const [lastClickedShowCreater, setLastClickedShowCreater] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);


  const handleSelect = (att) => {
    setAttribute(att);

    setLastClicked(att);
  };

  const handleBack = () => {
    setShowMainCmp(!showMainCmp);
  };

  const handleLastClick = () => {
   
    setLastClickedShowCreater(!lastClickedShowCreater);
  };
  
  return (
    <div>
      {" "}
      {attribute === "root" && !showMainCmp && !lastClickedShowCreater && (
        <div style={{ padding: 10, cursor:'pointer'}}>
          {" "}
          <Card className="ContentCard">
            {" "}
            <Card.Header className="ContentCardElement">
            <img style={{width:20}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xqp7BvzdHWuu-fHOMqXAp0jIdm8JL35LEpG2Y8BWWEpq3iPBEL3qCmb2psgbYf6uG90&usqp=CAU"/>
              <b> Add Question</b>{" "}
            </Card.Header>{" "}
            <div className="ContentCardElement" onClick={handleLastClick}>Repeat Last Question</div>{" "}
            <div
              className="ContentCardElement"
              onClick={() => handleSelect("Radio Buttons")}
            >
              Radio Button Question{" "}
            </div>{" "}
            <div
              style={{ padding: 15 }}
              className="ContentCardElement"
              onClick={() => handleSelect("Checkboxes")}
            >
              Checkbox Question
            </div>{" "}
            <div
              style={{ padding: 15 }}
              onClick={() => handleSelect("AddTextArea")}
            >
              Text Area Question
            </div>{" "}
          </Card>{" "}
          <div>
            <center>
              <button className="btn-blue btn-login d-block  mt-4 mr-4 w-auto" onClick={handleBack}> Back </button>
            </center>
          </div>
        </div>
      )}
      {attribute == "Radio Buttons" && (
        <ContentUploaderOptions type={attribute} questionData={questionData} handleRightPanel={handleRightPanel} handleLastClick={lastClicked}/>
      )}{" "}
      {attribute == "Checkboxes" && <ContentUploaderOptions type={attribute} questionData={questionData} handleRightPanel={handleRightPanel} handleLastClick={lastClicked}/>}{" "}
      {attribute == "AddTextArea" && (
        <ContentUploaderTextArea type={attribute} questionData={questionData} handleRightPanel={handleRightPanel} handleLastClick={lastClicked}/>
      )}{" "}
      {showMainCmp && <ContentUploaderMain handleRightPanel={handleRightPanel}/>}
      {lastClickedShowCreater && <ContentCreater handleRightPanel={handleRightPanel} questionData={questionData} optionType={handleLastClicks} type={optionType} handleLastClick={handleLastClicks}/>}
    </div>
  );
};
export default ContentUploaderAddAttribute;

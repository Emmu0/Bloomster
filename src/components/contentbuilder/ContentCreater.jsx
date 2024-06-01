import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import ContentUploaderAddAttribute from "./ContentUploaderAddAttribute";

const ContentCreater = ({
  questionData,
  optionType,
  type,
  handleRightPanel,
  handleLastClick,
}) => {
  const styles = {
    main: {
      width: "100%",
      paddingLeft: "26%",
    },
    inputbox: {
      paddingLeft: "26%",
      margintop: "26%",
    },
    inputboxsame: {
      height: "40px",
      width: "30%",
    },
    radio: {
      height: "40px",
    },
    bigInput: {
      height: "40px",
      width: "89%",
    },
  };

  const [forms, setForms] = useState([{}]);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);

  const handleInputChange = (event, index) => {
    var updatedForms = [...forms];
    updatedForms[index][event.target.name] = event.target.value;
    setForms(updatedForms);
  };

  const handleBack = () => {
    if (currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1);
    }
  };

  const handleInsert = (event) => {
    event.preventDefault();

    if (questionData) {
      questionData = [...questionData, ...forms];
    } else {
      questionData = [...forms];
    }

    handleRightPanel(questionData);
    questionData = "";
  };

  const handleContinue = () => {
    setForms([...forms, {}]);
    setCurrentFormIndex(currentFormIndex + 1);
  };

  const [showAddAttribute, setShowAddAttribute] = useState(false);
  const handleChangeQueTyp = () => {
    if (questionData) {
      setForms([...questionData, ...forms]);
    }
    questionData = "";
    setShowAddAttribute(!showAddAttribute);
  };

  return (
    <div>
      {" "}
      {!showAddAttribute && (
        <>
          {forms.map((form, index) => {
            if (index === currentFormIndex) {
              return (
                <form key={index}>
                  <Card className="ContentCard" style={{ padding: 10 }}>
                    <div className="d-grid gap-3">
                      <div className="p-2 bg-light border">
                        <img
                          style={{ width: 25 }}
                          src="https://www.pngitem.com/pimgs/m/56-567651_exclamation-mark-yellow-blue-torn-paper-revealing-question.png"
                        />
                        <input
                          size="43"
                          type="text"
                          name="question"
                          placeholder="Enter Question"
                          value={form.question || ""}
                          className="roundedBorder"
                          onChange={(event) => handleInputChange(event, index)}
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <div>
                          {optionType == "Radio Buttons" && (
                            <>
                              <img
                                style={{ width: 20 }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryq_4j45elZ68Gui_VYPbwbt-gkOq1ujZ1g&usqp=CAU"
                              />{" "}
                            </>
                          )}
                          {optionType == "Checkboxes" && (
                            <>
                              <img
                                style={{ width: 20 }}
                                src="http://www.clker.com/cliparts/w/G/Y/C/o/Q/checkbox-unchecked-gray-md.png"
                              />{" "}
                            </>
                          )}
                          <input
                            style={styles.bigInput}
                            placeholder="Enter First Option"
                            type="text"
                            name="optionFirst"
                            value={form.optionFirst || ""}
                            className="roundedBorder"
                            onChange={(event) =>
                              handleInputChange(event, index)
                            }
                          />
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            style={styles.bigInput}
                            placeholder="Enter First Nuget"
                            name="nugetFirst"
                            value={form.nugetFirst || ""}
                            className="roundedBorder"
                            onChange={(event) =>
                              handleInputChange(event, index)
                            }
                          ></input>
                        </div>
                        <div>
                          {optionType == "Radio Buttons" && (
                            <>
                              <img
                                style={{ width: 20 }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryq_4j45elZ68Gui_VYPbwbt-gkOq1ujZ1g&usqp=CAU"
                              />{" "}
                            </>
                          )}
                          {optionType == "Checkboxes" && (
                            <>
                              <img
                                style={{ width: 20 }}
                                src="http://www.clker.com/cliparts/w/G/Y/C/o/Q/checkbox-unchecked-gray-md.png"
                              />{" "}
                            </>
                          )}
                          <input
                            style={styles.bigInput}
                            placeholder="Enter Second Option"
                            type="text"
                            name="optionSecond"
                            value={form.optionSecond || ""}
                            className="roundedBorder"
                            onChange={(event) =>
                              handleInputChange(event, index)
                            }
                          />
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            style={styles.bigInput}
                            placeholder="Enter Second Nuget"
                            name="nugetSecond"
                            value={form.nugetSecond || ""}
                            className="roundedBorder"
                            onChange={(event) =>
                              handleInputChange(event, index)
                            }
                          ></input>
                        </div>
                        {type == "thirdOptions" && (
                          <>
                            <div>
                              {optionType == "Radio Buttons" && (
                                <>
                                  <img
                                    style={{ width: 20 }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryq_4j45elZ68Gui_VYPbwbt-gkOq1ujZ1g&usqp=CAU"
                                  />{" "}
                                </>
                              )}
                              {optionType == "Checkboxes" && (
                                <>
                                  <img
                                    style={{ width: 20 }}
                                    src="http://www.clker.com/cliparts/w/G/Y/C/o/Q/checkbox-unchecked-gray-md.png"
                                  />{" "}
                                </>
                              )}
                              <input
                                style={styles.bigInput}
                                placeholder="Enter Third Option"
                                name="Option3"
                                value={form.Option3 || ""}
                                className="roundedBorder"
                                onChange={(event) =>
                                  handleInputChange(event, index)
                                }
                              ></input>
                            </div>
                            <div>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <input
                                style={styles.bigInput}
                                placeholder="Enter Third Nuget"
                                name="Nuget3"
                                value={form.Nuget3 || ""}
                                className="roundedBorder"
                                onChange={(event) =>
                                  handleInputChange(event, index)
                                }
                              ></input>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <Row>
                        &nbsp;&nbsp;&nbsp;
                        <Col xs={1}>
                          <button
                            className="btn-blue btn-login d-block  mt-4 mr-4 w-auto"
                            onClick={handleBack}
                          >
                            Back{" "}
                          </button>
                        </Col>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Col xs={1}>
                          <button
                            className="btn-blue btn-login d-block  mt-4 mr-4 w-auto"
                            onClick={handleInsert}
                          >
                            {" "}
                            Save{" "}
                          </button>
                        </Col>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Col xs={2}>
                          <button
                            className="btn-blue btn-login d-block  mt-4 mr-4 w-auto"
                            onClick={handleContinue}
                          >
                            {" "}
                            Continue{" "}
                          </button>
                        </Col>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Col xs={6}>
                          <button
                            className="btn-blue btn-login d-block  mt-4 mr-4 w-auto"
                            onClick={handleChangeQueTyp}
                          >
                            {" "}
                            Change Question Type{" "}
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </form>
              );
            }
            return null;
          })}
        </>
      )}
      {showAddAttribute && (
        <ContentUploaderAddAttribute
          questionData={forms}
          handleRightPanel={handleRightPanel}
          handleLastClicks={handleLastClick}
          optionType={type}
        />
      )}
    </div>
  );
};
export default ContentCreater;

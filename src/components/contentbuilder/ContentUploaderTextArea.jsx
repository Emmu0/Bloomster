import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { convertToRaw } from "draft-js";
import { Row, Col } from "react-bootstrap";
import ContentUploaderMain from "./ContentUploaderMain";
import ContentUploaderAddAttribute from "./ContentUploaderAddAttribute";

const ContentUploaderTextArea = ({ type, handleRightPanel, questionData }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [showMainCmp, setShowMainCmp] = useState(false);
  const [showAddAttribute, setShowAddAttribute] = useState(false);

  const handleSave = () => {
    let content = editorState.getCurrentContent();
    let markup = draftToHtml(convertToRaw(content));

    handleRightPanel(markup);
  };

  const handleBack = () => {
    if (type == "TextArea") {
      setShowMainCmp(!showMainCmp);
    } else {
      setShowAddAttribute(!showAddAttribute);
    }
  };

  return (
    <div>
      {" "}
      {!showMainCmp && !showAddAttribute && (
        <div>
          <Editor
            editorState={editorState}
            className="border"
            onEditorStateChange={setEditorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            required={!editorState.getCurrentContent().hasText() ? true : false}
          />
          <div>
            <Row>
              <Col xs={4}></Col>
              <Col xs={2}>
                <button
                  className="btn-black btn-login d-block  mt-4 mr-4 w-auto"
                  onClick={handleBack}
                >
                  Back
                </button>
              </Col>
              <Col xs={2}>
                <button
                  className="btn-black btn-login d-block  mt-4 mr-4 w-auto"
                  onClick={handleSave}
                >
                  Save
                </button>
              </Col>
              <Col xs={2}></Col>
              <Col xs={1}></Col>
            </Row>
          </div>
        </div>
      )}
      {showMainCmp && (
        <ContentUploaderMain handleRightPanel={handleRightPanel} />
      )}
      {showAddAttribute && (
        <ContentUploaderAddAttribute handleRightPanel={handleRightPanel} />
      )}
    </div>
  );
};
export default ContentUploaderTextArea;

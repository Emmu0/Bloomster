import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { feedbackDataPostAPI } from "../../redux/actions/FeedbackAPIs";
import Home from "../Home";

function Feedback() {
  const dispatch = useDispatch();
  const [feedbackDescription, setFeedbackDescription] = useState("");
  const [selectedRelatedTo, setSelectedRelatedTo] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    setShowModal(true);
    setShowOther(false);
  }, []);
  const handleClose = () => {
    setShowModal(false);
  };

  const onSelectOption = (event) => {
    setSelectedRelatedTo(event.target.value);
    if (selectedRelatedTo === "Others") {
      setShowOther(true);
    } else {
      setShowOther(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let feedbackData =
      "{" +
      '"relatedTo"' +
      ":" +
      '"' +
      selectedRelatedTo +
      '",' +
      '"description"' +
      ":" +
      '"' +
      feedbackDescription +
      '."' +
      "}";
    dispatch(feedbackDataPostAPI(feedbackData));
    setShowModal(false);
  };

  return (
    <Home>
      <div className="d-flex w-100 VCharboard">
        <Modal
          id="feedback-modal"
          size="lg"
          centered={true}
          show={showModal}
          className="halfPagePOpup"
          onHide={handleClose}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header>
            <div className="heading w-100 p-0 border-0">
              <h2 className="flex">
                Feedback
                <button
                  data-dismiss="modal"
                  className="btn btn-primary"
                  onClick={handleClose}
                >
                  <i className="fa-regular fa-xmark m-0"></i>
                </button>
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body className="fullWidthPopup forlikepopup basicdetailsform">
            <form
              className="feedback-form flex flex-wrap align-items-baseline"
              onSubmit={handleSubmit}
            >
              <div className="input-group w-100">
                <label htmlFor="feedback" className="feedback-label">
                  Please Select your Dimension:
                </label>
                <div className="form-group">
                  <select
                    className="feedback-input form-control"
                    value={selectedRelatedTo}
                    onChange={(event) => onSelectOption(event)}
                  >
                    <option value="">Select</option>
                    <option value="Dimensions">Dimensions</option>
                    <option value="Courses">Courses</option>
                    <option value="Quiz">Quiz</option>
                    <option value="Knowledge Check">Knowledge Check</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="">Please Add Your feedback</label>
                <div className="form-group">
                  <input type="text" />
                </div>
              </div>

              {showOther && (
                <div className="input-group">
                  <label htmlFor="feedback" className="feedback-label">
                    Please enter your feedback:
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => onSelectOption(event)}
                    />
                  </div>
                </div>
              )}
              {/* <button
                type="submit"
                className="btn-blue feedback-button mt-3 mb-3 mr-3"
              >
                Submit
              </button> */}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div className="form-group BDsubmitbutton d-flex m-0 ">
              <buttont
                type="submit"
                className="btn-blue btn-login d-block ml-auto w-auto"
              >
                <i className="fa-solid fa-paper-plane mr-2"></i>Submit
              </buttont>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </Home>
  );
}

export default Feedback;

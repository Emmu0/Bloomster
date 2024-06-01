import React, { useState } from "react";
//import ContentBuilder from "./ContentBuilder";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../resources/images";
import { useForm, Cropper } from "../../utils/Packages";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addContent } from "../../redux/actions/APIs";
import SearchField from "../controls/SearchField";
import { isLoading } from "../../redux/actions";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import options from "./data";
import options2 from "./data2";
import options3 from "./data3";
import options4 from "./data4";
import {
  frndSearchResponse,
  addResponse,
  groupsResponseData,
  addFriend,
  createdGroupPostAPI,
} from "../../redux/actions/MsgPanelAPIs";
import { Row, Col } from "react-bootstrap";
import { COLOR } from "rsuite/esm/utils";

const ScreensUploader = ({ handleLeftPanel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imgSrc, setImgSrc] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [fileError, setFileError] = useState("");
  const [imgURL, setImgURL] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  function onSelectFile(e) {
    const input = document.getElementById("fileimg");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0]?.size > 5242880) {
        input.value = "";
        setFileError("Choose file size less than 5 MB");
        return;
      } else {
        setFileError("");
        setImgSrc(e.target.files[0]);
        setIsShow(true);
      }
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result.toString() || "")
      );
      reader.onloadend = () => {
        setImgURL(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const dispatch = useDispatch();
  const { response, loggedInUser } = useSelector((state) => state.collections);

  const _onSubmit = () => {
    if (imageObj?.name) {
      setRandom(Math.random());
      dispatch(addContent(imageObj));
    }
  };
  const { getFriends } = useSelector((state) => state.messaging);
  const addFriends = (data) => {
    dispatch(addFriend(loggedInUser, data));
  };
  const [toggleClick, SetToggleClick] = useState(false);
  const [typeahead1Value, setTypeahead1Value] = useState("");
  const [typeahead2Value, setTypeahead2Value] = useState("");
  const [typeahead3Value, setTypeahead3Value] = useState("");
  const [typeahead4Value, setTypeahead4Value] = useState("");
  const [textInputValue, setTextInputValue] = useState("");
  const [valuesFromScreenUploader, setValuesFromScreenUploader] = useState([]);
  const resetFriends = () => {
    SetToggleClick(!toggleClick);
  };
  const handleTypeahead1Change = (newValue) => {
    setTypeahead1Value(newValue);
  };

  const handleTypeahead2Change = (newValue) => {
    setTypeahead2Value(newValue);
  };

  const handleTypeahead3Change = (newValue) => {
    setTypeahead3Value(newValue);
  };

  const handleTypeahead4Change = (newValue) => {
    setTypeahead4Value(newValue);
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const sendDataToLeftPanel = () => {
    let tempArr = [
      ...typeahead1Value,
      ...typeahead2Value,
      ...typeahead3Value,
      ...typeahead4Value,
      ...textInputValue,
      ...imgURL,
    ];
    setValuesFromScreenUploader(tempArr);
    handleLeftPanel(valuesFromScreenUploader);
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      {!isShow ? (
        <>
          <div className="SearchcHat">
            <Row>
              <Col>
                <Typeahead
                  id="basic-typeahead-single"
                  options={options}
                  placeholder="Choose a social..."
                  value={typeahead1Value}
                  onChange={handleTypeahead1Change}
                />
              </Col>
              <Col>
                <Typeahead
                  id="basic-typeahead-single"
                  options={options2}
                  placeholder="Choose a social..."
                  value={typeahead2Value}
                  onChange={handleTypeahead2Change}
                />
              </Col>
              <Col>
                <Typeahead
                  id="basic-typeahead-single"
                  options={options3}
                  placeholder="Choose a social..."
                  value={typeahead3Value}
                  onChange={handleTypeahead3Change}
                />
              </Col>
              <Col>
                <Typeahead
                  id="basic-typeahead-single"
                  options={options4}
                  placeholder="Choose a social..."
                  value={typeahead4Value}
                  onChange={handleTypeahead4Change}
                />
              </Col>
              <Col>
                <input
                  className="title-input"
                  type="text"
                  placeholder="Choose a title..."
                  value={textInputValue}
                  onChange={handleTextInputChange}
                />
              </Col>
            </Row>
            {/*<ContentBuilder
              typeahead1Value={typeahead1Value}
              typeahead2Value={typeahead2Value}
              typeahead3Value={typeahead3Value}
              typeahead4Value={typeahead4Value}
              textInputValue={textInputValue}
              imgURL={imgURL}
      />*/}
          </div>
        </>
      ) : (
        ""
      )}
      <div className="input-group mb-2 uploadimgwidth uploadimagealign">
        {!isShow ? (
          <>
            <label>
              Upload Image<span className="mandatoryField">*</span>
            </label>

            <div className="uploadCOrseimg flex uploadcorsimgalign">
              <div className="Courseimage mr-3">
                <Cropper
                  image={imgSrc}
                  crop={crop}
                  zoom={zoom}
                  cropShape="round"
                  showGrid={false}
                  aspect={3 / 3}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                />

                {Object.keys(errors).length > 0 && imgSrc === "" ? (
                  <p className="text-danger">Image is required</p>
                ) : (
                  imgSrc === undefined && (
                    <p className="text-danger">Image is required</p>
                  )
                )}
              </div>

              <div className="form-group Upload">
                {!imgSrc ? (
                  <>
                    <input
                      type="File"
                      className={`form-control `}
                      accept="image/*"
                      id="fileimg"
                      onChange={onSelectFile}
                    />
                    <span className="uplodedCImage d-flex align-items-center w-100  justify-content-center mr-0">
                      <img src={image.camera} className="mr-2" alt="..." />
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imgSrc && (
            <img
              src={imgSrc}
              className=""
              alt="..."
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </form>
  );
};
export default ScreensUploader;

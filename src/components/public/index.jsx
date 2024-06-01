/** @format */

import React, { useState } from "react";
import * as image from "../../resources/images";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addContent, addContent1 } from "../../redux/actions/APIs";
import { resetGuestResponse } from "../../redux/actions";

import { useSelector, useDispatch } from "react-redux";

import {
  useForm,
  useHistory,
  useParams,
  Cropper,
  Controller,
} from "../../utils/Packages";
import { PATHS } from "../../utils";

const Home = ({ children }, props) => {
  const [fileError, setFileError] = useState("");
  const [fileError1, setFileError1] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imageObj, setImgeOBj] = useState([]);
  const [imageObj1, setImgeOBj1] = useState([]);

  const [imgSrc, setImgSrc] = useState("");
  const [imgSrc1, setImgSrc1] = useState("");
  const [random, setRandom] = useState(Math.random());

  function onSelectFile(e) {
    const input = document.getElementById("fileimg");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0]?.size > 5242880) {
        input.value = "";
        setFileError("Choose file size less than 5 MB");
        return;
      } else {
        setFileError("");
      }
      setImgeOBj(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onSelectFile1(e) {
    const input = document.getElementById("fileimg1");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0]?.size > 5242880) {
        input.value = "";
        setFileError1("Choose file size less than 5 MB");
        return;
      } else {
        setFileError1("");
      }
      setImgeOBj1(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc1(reader.result.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  const dispatch = useDispatch();
  const { response, response1 } = useSelector((state) => state.collections);
  const _onSubmit = () => {
    if (imageObj?.name) {
      setRandom(Math.random());
      dispatch(addContent(imageObj));
    }
  };

  const _onSubmit1 = () => {
    if (imageObj1?.name) {
      setRandom(Math.random());
      dispatch(addContent1(imageObj1));
    }
  };

  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const onInternalChange = (currentContentState) => {
    const html = draftToHtml(currentContentState);

    setValue(`description`, html);
  };
  const resetForm = () => {
    reset();
    setImgeOBj([]);
    setImgSrc([]);
    setImgSrc1([]);
    dispatch(resetGuestResponse());
    window.location.assign(PATHS.PUBLIC_ADDCOURSE);
  };
  const [copyTitle, setCopyTitle] = useState("");
  const [copyTitle1, setCopyTitle1] = useState("");
  return (
    <div>
      <div className="LargeScreenBody ">
        <div className="Main">
          <div className="PannelContent basicdetailsform px-5 ">
            <div className="AddCourseformWrap container mt-5 border p-4 bg-white">
              <form onSubmit={handleSubmit(_onSubmit)} className="card p-3">
                <h2>Scene Image</h2>
                <hr />
                <div className="input-group mb-2 uploadimgwidth">
                  <label>
                    Upload Image<span className="mandatoryField">*</span>
                  </label>
                  <div className="uploadCOrseimg flex">
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
                      <input
                        type="File"
                        className={`form-control `}
                        accept="image/*"
                        id="fileimg"
                        onChange={onSelectFile}
                      />
                      {fileError && <p className="text-danger">{fileError}</p>}

                      <span className="uplodedCImage d-flex align-items-center w-100  justify-content-center mr-0">
                        {imgSrc ? (
                          ""
                        ) : (
                          <img src={image.camera} className="mr-2" alt="..." />
                        )}{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <input
                  type="text"
                  className="form-control"
                  value={response && response?.message}
                />
                {response?.message && (
                  <button
                    className="pointer btn btn-success mt-2"
                    onClick={() => {
                      setCopyTitle("Copied Url");
                      navigator.clipboard.writeText(response?.message);
                    }}
                  >
                    Copy Url
                  </button>
                )}

                <p>{copyTitle === "Copied Url" && "Url Copied"}</p>
                <div className="d-flex">
                  <button
                    type="submit"
                    name="preview"
                    className="btn-blue btn-login d-block  mt-4 mr-3 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane"></i> Save
                  </button>

                  <button
                    type="button"
                    onClick={() => resetForm()}
                    name="preview"
                    className="btn-blue btn-login d-block  mt-4 mr-3 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane"></i> Reset
                  </button>
                </div>
              </form>
              <form
                onSubmit={handleSubmit(_onSubmit1)}
                className="card p-3 mt-3"
              >
                <h2>Resource Image</h2>
                <hr />
                <div className="input-group mb-2 uploadimgwidth">
                  <label>
                    Upload Image<span className="mandatoryField">*</span>
                  </label>
                  <div className="uploadCOrseimg flex">
                    <div className="Courseimage mr-3">
                      <Cropper
                        image={imgSrc1}
                        crop={crop}
                        zoom={zoom}
                        cropShape="round"
                        showGrid={false}
                        aspect={3 / 3}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                      />

                      {Object.keys(errors).length > 0 && imgSrc1 === "" ? (
                        <p className="text-danger">Image is required</p>
                      ) : (
                        imgSrc1 === undefined && (
                          <p className="text-danger">Image is required</p>
                        )
                      )}
                    </div>
                    <div className="form-group Upload">
                      <input
                        type="File"
                        className={`form-control `}
                        accept="image/*"
                        id="fileimg1"
                        onChange={onSelectFile1}
                      />
                      {fileError1 && (
                        <p className="text-danger">{fileError1}</p>
                      )}

                      <span className="uplodedCImage d-flex align-items-center w-100  justify-content-center mr-0">
                        {imgSrc1 ? (
                          ""
                        ) : (
                          <img src={image.camera} className="mr-2" alt="..." />
                        )}{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <input
                  type="text"
                  className="form-control"
                  value={response1 && response1?.message}
                />
                {response1?.message && (
                  <button
                    className="pointer btn btn-success mt-2"
                    onClick={() => {
                      setCopyTitle1("Copied Url");
                      navigator.clipboard.writeText(response1?.message);
                    }}
                  >
                    Copy Url
                  </button>
                )}

                <p>{copyTitle1 === "Copied Url" && "Url Copied"}</p>
                <div className="d-flex">
                  <button
                    type="submit"
                    name="preview"
                    className="btn-blue btn-login d-block  mt-4 mr-3 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane"></i> Save
                  </button>

                  <button
                    type="button"
                    onClick={() => resetForm()}
                    name="preview"
                    className="btn-blue btn-login d-block  mt-4 mr-3 w-auto"
                  >
                    <i className="fa-solid fa-paper-plane"></i> Reset
                  </button>
                </div>
              </form>
              <form className="card p-3 mt-3">
                <h2>Text Editor</h2>
                <hr />
                <div className="form-group mt-3">
                  <Controller
                    {...register(`description`)}
                    control={control}
                    render={() => {
                      return (
                        <Editor
                          editorState={editorState}
                          className="border"
                          onEditorStateChange={setEditorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onChange={onInternalChange}
                          required={
                            !editorState.getCurrentContent().hasText()
                              ? true
                              : false
                          }
                        />
                      );
                    }}
                  />
                  {!editorState.getCurrentContent().hasText() &&
                    isSaveClicked && (
                      <p className="text-danger">Description is required.</p>
                    )}
                </div>
              </form>
              <hr />
              <h3>Preview</h3>
              <p
                className={`form-control h-auto`}
                style={{ height: "20px" }}
                rows="4"
                cols="50"
              >
                {getValues("description")}
              </p>{" "}
              {getValues("description") && (
                <button
                  className="pointer btn btn-success mt-2"
                  onClick={() => {
                    setCopyTitle("Copied Text");
                    navigator.clipboard.writeText(getValues("description"));
                  }}
                >
                  Copy Text
                </button>
              )}
              <p>{copyTitle === "Copied Text" && "Text Copied"}</p>
              <br />
              <button
                type="button"
                onClick={() => resetForm()}
                name="preview"
                className="btn-blue btn-login d-block  mt-4 mr-3 w-auto"
              >
                <i className="fa-solid fa-paper-plane"></i> Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

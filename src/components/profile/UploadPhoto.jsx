/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import Cropper from "react-easy-crop";
import {
  updateUserProfilePicture,
  deleteAvatar,
} from "../../redux/actions/APIs";
import {
  ShimmerCategoryList,
  Modal,
  Button,
  useForm,
} from "../../utils/Packages";
import getCroppedImg from "./CropImage";

import { API_PATHS, PATHS } from "../../utils";
import {
  formatMobNo,
  getAxios,
  getCapitalized,
  getName,
  getProfileName,
  getUrlSegment,
  textTrim,
} from "../../utils/helper";
import FadeLoader from "react-spinners/FadeLoader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ReactTooltip from "react-tooltip";
import { showProviderQuote } from "../../redux/actions";

const aspectRatios = [
  { value: 4 / 3, text: "4/3" },
  { value: 16 / 9, text: "16/9" },
  { value: 1 / 2, text: "1/2" },
];

const UploadPhoto = ({
  color,
  id,
  imageUrl,
  cropInit,
  zoomInit,
  errors,
  rotationInit,
  register,
  setValue,
  quoteMsg,
  aspectInit,
  resetQuote,
  resetField,
  topbarSelect,
  name,
  len,
  setLen,
}) => {
  // const {
  //   setValue
  // } = useForm();

  const { getSelectedUser, response_ok, loggedInUser, showQuote } = useSelector(
    (state) => state.collections
  );
  const userDetails = getSelectedUser;

  if (zoomInit == null) {
    zoomInit = 1;
  }
  if (cropInit == null) {
    cropInit = { x: 0, y: 0 };
  }
  if (rotationInit == null) {
    rotationInit = 1;
  }
  if (aspectInit == null) {
    aspectInit = aspectRatios[0];
  }
  const [zoom, setZoom] = useState(zoomInit);
  const [crop, setCrop] = useState(cropInit);
  const [quote, setQuote] = useState("");
  const [aspect, setAspect] = useState(aspectInit);

  const [imgSrc, setImgSrc] = useState(undefined);
  const [imageLoading, setImageLoading] = useState(false);

  const [croppedArea, setCroppedArea] = useState(null);
  const [rotation, setRotation] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [editState, setEditState] = useState(false);
  const [fileError, setFileError] = useState("");
  // const [len, setLen] = useState("");

  let [lodercolor, setlodercolor] = useState("#ffffff");

  useEffect(() => {
    if (imgSrc) {
      setEditState(true);
    }
  }, [imgSrc]);

  useEffect(() => {
    if (!topbarSelect && getSelectedUser?.imageUrl === null) {
      zoomInit = 1;
      rotationInit = 1;
      setZoom(zoomInit);
      setRotation(rotationInit);
    } else if (topbarSelect && loggedInUser?.imageUrl === null) {
      zoomInit = 1;
      rotationInit = 1;
      setZoom(zoomInit);
      setRotation(rotationInit);
    }
  }, [
    getSelectedUser?.imageUrl,
    loggedInUser?.imageUrl === null,
    topbarSelect,
  ]);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onRotationChange = (rotation) => {
    setRotation(rotation);
  };

  const showModal = () => {
    setIsOpen(true);
    if (!topbarSelect && getSelectedUser?.imageUrl) {
      setEditState(!editState);
    } else if (topbarSelect && loggedInUser?.imageUrl) {
      setEditState(!editState);
    }
    // reset();
  };

  const hideModal = () => {
    setIsOpen(false);
    setImgSrc(undefined);
    setEditState(false);
    if (loggedInUser?.imageUrl === null) {
      setEditState(false);
      setImgSrc(undefined);
    }
  };

  useEffect(() => {
    if (response_ok?.success) {
      setIsOpen(false);
    }
  }, [response_ok]);

  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => {
    inputRef.current.click();
    // setImgSrc("")
    // setEditState(true);
  };

  const dispatch = useDispatch();

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

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
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setImgSrc(reader.result.toString() || "");
      });
    }
  }

  const onUpload = () => {
    getCroppedImg(imgSrc, croppedArea, rotation).then((res) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        var file = dataURLtoFile(base64data, "image.jpg");
        {
          !topbarSelect
            ? dispatch(updateUserProfilePicture(file, getSelectedUser.id))
            : dispatch(updateUserProfilePicture(file, loggedInUser.id));
        }
      };

      (async () => {
        const response = await fetch(res);
        const imageBlob = await response.blob();
        reader.readAsDataURL(imageBlob);
      })();
    });
    setIsOpen(false);
    setImgSrc(undefined);
    setEditState(false);
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const removeAvatar = async (e) => {
    var url = !topbarSelect
      ? getSelectedUser?.imageUrl
      : loggedInUser?.imageUrl;
    var pathname = new URL(url).pathname.split("/")[2];
    setImgSrc(undefined);
    {
      !topbarSelect
        ? dispatch(deleteAvatar(userDetails.id, pathname))
        : dispatch(deleteAvatar(loggedInUser.id, pathname));
    }

    setEditState(false);
  };

  const getImageSrc = async () => {
    setImageLoading(true);
    var url = !topbarSelect
      ? getSelectedUser?.imageUrl
      : loggedInUser?.imageUrl;
    var pathname = new URL(url).pathname.split("/")[2];

    const instance = getAxios();
    await instance
      .get(`${API_PATHS.DOWNLOADIMAGEAPI + "/" + pathname}`)
      .then(async (response) => {
        if (response.status == 200) {
          // const imageBlob = await response.blob();
          // const imageObjectURL = URL.createObjectURL(imageBlob);

          const file = new Blob([response.request.responseURL], {
            type: "image/jpg",
          });
          const fileURL = URL.createObjectURL(file);

          setImgSrc(fileURL);
          // setImgSrc(getSelectedUser?.imageUrl);
        }
      })
      .finally(() => {
        setImageLoading(false);
      });
  };

  const history = useHistory();

  const resetQ = () => {
    setLen("");
    resetField("quote");
  };

  const handleQuote = () => {
    if (getSelectedUser?.role?.name === "PROVIDER") {
      if (getSelectedUser?.providerDetail?.quote) {
        setLen(getSelectedUser?.providerDetail?.quote);
        setValue("quote", getSelectedUser?.providerDetail?.quote);
      }
    }
  };
  // useEffect(()=>{
  //   if(getSelectedUser?.role?.name === "PROVIDER"){
  //     if(getSelectedUser?.providerDetail?.quote){
  //       setLen(getSelectedUser?.providerDetail?.quote)
  //       // setValue(name, getSelectedUser?.providerDetail?.quote);
  //     }}

  // },[getSelectedUser, len])

  return (
    <div className="p-0 upload_box">
      {!getSelectedUser ? (
        <ShimmerCategoryList items={1} categoryStyle="STYLE_SEVEN" />
      ) : (
        <>
          <div className="px-3 basicdetailsform">
            <div className="mx-auto w-100">
              <div className="content imgFrm d-flex w-100 align-items-center">
                <div className="UploadPhoto active">
                  <div
                    className="uploadedPhoto active"
                    onClick={() => {
                      if (!imgSrc) {
                        getImageSrc();
                      }

                      showModal();
                    }}
                  >
                    {!topbarSelect && (
                      <>
                        {getSelectedUser?.imageUrl ? (
                          <>
                            <img
                              src={getSelectedUser?.imageUrl}
                              className="active"
                              alt="..."
                            />
                          </>
                        ) : userDetails?.firstName ? (
                          <>
                            <span className="cameraiconImg">
                              <img
                                src={image.camera}
                                className="active"
                                alt="..."
                              />
                            </span>
                          </>
                        ) : (
                          <> </>
                        )}
                      </>
                    )}

                    {topbarSelect && (
                      <>
                        {loggedInUser?.imageUrl ? (
                          <>
                            <img
                              src={loggedInUser?.imageUrl}
                              alt="..."
                              className="active"
                            />
                          </>
                        ) : loggedInUser?.firstName ? (
                          <>
                            <span className="cameraiconImg">
                              <img
                                src={image.camera}
                                alt="..."
                                className="active"
                              />
                            </span>
                          </>
                        ) : (
                          <> </>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {!topbarSelect && (
                  <div className="Profile_details">
                    {getName(userDetails)?.length > 25 ? (
                      <ReactTooltip id={getName(userDetails)}>
                        <p>{getCapitalized(getName(userDetails))}</p>
                      </ReactTooltip>
                    ) : (
                      ""
                    )}
                    <h4
                      data-for={getName(userDetails)}
                      data-event-off=""
                      data-tip
                    >
                      {textTrim(getCapitalized(getName(userDetails), 25)) &&
                        textTrim(getCapitalized(getName(userDetails), 25))}

                      {getSelectedUser.isParent === false ? (
                        getSelectedUser.isActive ? (
                          <span className="VerifiedUser"> (Verified)</span>
                        ) : (
                          ""
                        )
                      ) : getSelectedUser.isActive ? (
                        <span className="VerifiedUser"> (Verified)</span>
                      ) : getSelectedUser.isActive === false ? (
                        <span className="unVerifiedUser"> (Not Verified)</span>
                      ) : ""
                      }
                    </h4>
                    <div className="userEmailAndNumbr mt-2 w-100">
                      <p className="p-0 d-flex">
                        {formatMobNo(getSelectedUser?.mobile) && (
                          <span>
                            <i className="fa-light fa-phone mr-2"></i>
                            {formatMobNo(getSelectedUser?.mobile)}
                          </span>
                        )}{" "}
                      </p>
                      <p className="d-flex p-0 align-items-center m-0">
                        {getSelectedUser?.email && (
                          <span>
                            <i className="fa-solid fa-envelope-dot mr-2"></i>
                            {getSelectedUser?.email}
                          </span>
                        )}{" "}
                      </p>
                    </div>

                    <div className="input-group w-100 ProfileQuote">
                      {userDetails?.role?.name === "PROVIDER" && (
                        <div className="form-group mt-1 flex flex-wrap">
                          {getUrlSegment()[1] === "about-us" && showQuote ? (
                            <>
                              <div className="flex w-100">
                                <i className="fa-solid fa-quote-left mr-2"></i>
                                <input
                                  type="text"
                                  {...register("quote", {
                                    onChange: (e) => setLen(e.target.value),
                                    required: true,
                                  })}
                                  value={len}
                                  // register={
                                  //   typeof register === "function" && {
                                  //     ...register(name, {
                                  //       required: true,
                                  //     }),
                                  //   }
                                  // }

                                  className={`form-control ${
                                    errors.quote ? "is-invalid" : ""
                                  }`}
                                  // id="addBio"
                                  maxLength="255"
                                  placeholder="Add Quote"
                                  // onChange={(e) => setLen(e.target.value)}
                                  // defaultValue={
                                  //   userDetails?.providerDetail?.quote
                                  // }
                                />
                              </div>
                              {len?.length > 0 ? (
                                <span className="cutQuote" onClick={resetQ}>
                                  <i className="fa-solid fa-xmark"></i>
                                </span>
                              ) : (
                                ""
                              )}
                              {errors?.quote && (
                                <div className="invalid-feedback">
                                  {" "}
                                  Quote is required{" "}
                                </div>
                              )}
                            </>
                          ) : (
                            <p className="flex w-100 p-0">
                              <i className="fa-solid fa-quote-left mr-2"></i>
                              {userDetails?.providerDetail?.quote ? (
                                textTrim(userDetails?.providerDetail?.quote, 80)
                              ) : (
                                <span>
                                  ------------------ Add Your Quote
                                  ----------------{" "}
                                </span>
                              )}

                              {getUrlSegment()[1] !== "about-us" &&
                              !showQuote ? (
                                <span
                                  className="pointer ml-auto "
                                  onClick={() =>
                                    history.push(
                                      PATHS.ABOUTUS_STR + userDetails.id
                                    )
                                  }
                                >
                                  <i className="fa-light fa-pencil"></i>
                                </span>
                              ) : (
                                <span
                                  className="pointer ml-auto "
                                  onClick={() => {
                                    handleQuote();
                                    dispatch(showProviderQuote(true));
                                  }}
                                >
                                  <i className="fa-light fa-pencil"></i>
                                </span>
                              )}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="BDsubmitbutton Addchieldbtn  addEnrichbtn  pr-10">
              <Modal
                show={isOpen}
                className="AddinterestWrapper AddChildPopup UploadProimagepopup"
              >
                <Modal.Header>
                  <Modal.Title>
                    {/* {!topbarSelect ? (
                      getSelectedUser?.imageUrl === null ? (
                        <p>Add Photo</p>
                      ) : (
                        <p>Edit Photo</p>
                      )
                    ) : loggedInUser?.imageUrl === null ? (
                      <p>Add Photo</p>
                    ) : (
                      <p>Edit Photo</p>
                    )} */} 

                    {loggedInUser?.imageUrl === null ? (
                      <p><i class="fa fa-camera mr-1 addphoto"></i> Add Photo</p>
                    ) : (
                      <p>Edit Photo</p>
                    )}
                  </Modal.Title>
                  {editState === false ? (
                    <Button data-dismiss="modal" onClick={() => hideModal()}>
                      <span>
                        {" "}
                        <i className="fa-regular fa-xmark m-0"></i>
                      </span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                        setImgSrc(undefined);
                        setEditState(false);
                      }}
                      // onClick={() => setEditState(false)}
                    >
                      {" "}
                      <span>
                        {" "}
                        <i className="fa-regular fa-xmark m-0"></i>
                      </span>
                    </Button>
                  )}
                </Modal.Header>
                <Modal.Body>
                  <div className="wrapper mx-auto">
                    <form id="imgFrm" className="content imgFrm">
                      {!topbarSelect && editState === false ? (
                        <div className="uploadedPhoto center_img">
                          {getSelectedUser?.imageUrl === null &&
                          userDetails?.firstName ? (
                            <>
                              <span> {getProfileName(userDetails)}</span>
                            </>
                          ) : (
                            <img src={getSelectedUser?.imageUrl} alt="..." />
                          )}
                        </div>
                      ) : (
                        ""
                      )}

                      {topbarSelect && editState === false ? (
                        <div className="uploadedPhoto center_img">
                          {loggedInUser?.imageUrl === null &&
                          loggedInUser?.firstName ? (
                            <>
                              <span> {getProfileName(loggedInUser)}</span>
                            </>
                          ) : (
                            <img src={loggedInUser?.imageUrl} alt="..." />
                          )}
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="UploadPhoto">
                        {editState === true ? (
                          imageLoading && (!imgSrc || !crop) ? (
                            <div
                              data-testid="container"
                              className="reactEasyCrop_Container"
                            >
                              <FadeLoader color={lodercolor}></FadeLoader>
                            </div>
                          ) : (
                            <React.Fragment>
                              <Cropper
                                image={imgSrc}
                                crop={crop}
                                rotation={rotation}
                                zoom={zoom}
                                cropShape="round"
                                showGrid={false}
                                aspect={3 / 3}
                                // aspect={aspect.value}
                                onCropChange={onCropChange}
                                onZoomChange={onZoomChange}
                                onCropComplete={onCropComplete}
                                onRotationChange={onRotationChange}
                              />
                            </React.Fragment>
                          )
                        ) : (
                          ""
                        )}

                        <div className="photoUploded">
                          <div className="input-group d-flex">
                            <div className="form-group ">
                              <input
                                type="file"
                                accept="image/*"
                                id="fileimg"
                                ref={inputRef}
                                style={{ display: "none" }}
                                onChange={onSelectFile}
                              />
                              {fileError && (
                                <p className="text-danger">{fileError}</p>
                              )}
                            </div>
                          </div>
                          <div className="BDsubmitbutton ">
                            <div className="Editbuttons d-flex justify-content-between flex-wrap">
                              {!topbarSelect ? (
                                editState === false ? (
                                  getSelectedUser?.imageUrl === null ||
                                  editState === false ? (
                                    <>
                                      <button
                                        className="add_btn"
                                        onClick={triggerFileSelectPopup}
                                        type="button"
                                      >
                                        {" "}
                                        <i className="fa fa-camera"></i> <br />{" "}
                                        Add Photo
                                      </button>
                                    </>
                                  ) : (
                                    <button
                                      className="edit_btn"
                                      onClick={() => {
                                        setEditState(true);
                                      }}
                                      type="button"
                                    >
                                      {" "}
                                      <i className="fa fa-pencil"></i> <br />{" "}
                                      Edit
                                    </button>
                                  )
                                ) : (
                                  <div className="slider custom-labels w-100 flex">
                                    <div className="Editprofilepic">
                                      <label className="w-100">Zoom</label>
                                      <input
                                        type="range"
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        value={zoom}
                                        onInput={(e) => {
                                          onZoomChange(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="Editprofilepic">
                                      <label className="w-100">Rotate</label>
                                      <input
                                        type="range"
                                        min={0}
                                        max={360}
                                        value={rotation}
                                        onInput={(e) => {
                                          onRotationChange(e.target.value);
                                        }}
                                      />{" "}
                                    </div>
                                  </div>
                                )
                              ) : editState === false ? (
                                loggedInUser?.imageUrl === null ||
                                editState === false ? (
                                  <>
                                    <button
                                      className="add_btn"
                                      onClick={triggerFileSelectPopup}
                                      type="button"
                                    >
                                      {" "}
                                      <i className="fa fa-camera"></i> <br />{" "}
                                      Add Photo
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    className="edit_btn"
                                    onClick={() => {
                                      setEditState(true);
                                    }}
                                    type="button"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil"></i> <br /> Edit
                                  </button>
                                )
                              ) : (
                                <div className="slider custom-labels w-100 flex">
                                  <div className="Editprofilepic">
                                    <label className="w-100">Zoom</label>
                                    <input
                                      type="range"
                                      min={1}
                                      max={3}
                                      step={0.1}
                                      value={zoom}
                                      onInput={(e) => {
                                        onZoomChange(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="Editprofilepic">
                                    <label className="w-100">Rotate</label>
                                    <input
                                      type="range"
                                      min={0}
                                      max={360}
                                      value={rotation}
                                      onInput={(e) => {
                                        onRotationChange(e.target.value);
                                      }}
                                    />{" "}
                                  </div>
                                </div>
                              )}

                              {editState ? (
                                <>
                                  <button
                                    className="add_btn"
                                    onClick={triggerFileSelectPopup}
                                    type="button"
                                  >
                                    {" "}
                                    <i className="fa fa-camera"></i> <br /> Add
                                    Photo
                                  </button>
                                  <button
                                    onClick={() => onUpload()}
                                    type="button"
                                    className="save_btn"
                                  >
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <br /> Save
                                  </button>
                                </>
                              ) : (
                                ""
                              )}

                              {!topbarSelect
                                ? getSelectedUser?.imageUrl && (
                                    <button
                                      onClick={() => removeAvatar()}
                                      type="button"
                                      className="remove_btn"
                                    >
                                      <i className="fa fa-trash"></i>
                                      <br /> Delete
                                    </button>
                                  )
                                : loggedInUser?.imageUrl && (
                                    <button
                                      onClick={() => removeAvatar()}
                                      type="button"
                                      className="remove_btn"
                                    >
                                      <i className="fa fa-trash"></i>
                                      <br /> Delete
                                    </button>
                                  )}
                            </div>
                          </div>

                          <div className="RemovePhoto"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UploadPhoto;

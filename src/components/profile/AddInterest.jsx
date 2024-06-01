/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";

import {
  addInterest,
  uploadInterestPic,
  getDimensions,
} from "../../redux/actions/APIs";
import { resetResponse } from "../../redux/actions";
import Cropper from "react-easy-crop";
import { swal, Modal, Button } from "../../utils/Packages";
import { MSG } from "../../utils/Messages";

const AddInterest = ({ openModel, setOpenModal, searchKey, setSearchKey }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { getSelectedUser, getdimension, addInt, uploadInterest } = useSelector(
    (state) => state.collections
  );

  const [tags, setTags] = useState([]);
  const [imageObj, setImgeOBj] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const hideModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    setTags([]);
    reset();
  }, [openModel]);
  useEffect(() => {
    if (!getdimension) {
      dispatch(getDimensions());
    }
  }, []);

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setImgeOBj(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const _onSubmit = (values) => {
    let formData = {
      name: values.interestId,
      dimensionName: values.dimensionName,
      description: values.description,
      longDescription: "longDescription",
      tags: tags,
    };

    dispatch(addInterest(formData, getSelectedUser.id)).then(() => {
      new swal({
        title: "Added!",
        timer: 2000,
        text: "Interest has been Added.",
        type: "success",
      });
      reset();
    });
  };
  useEffect(() => {
    if (addInt?.success) {
      if (addInt?.records[0]?.id && imageObj.length > 0) {
        dispatch(uploadInterestPic(imageObj, addInt?.records[0]?.id));
      }
      if (addInt?.success && uploadInterest?.success) dispatch(resetResponse());
      setOpenModal(false);
    }
  }, [addInt]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      e.target.value = null;
    }
  };

  const removeTags = (t) => {
    setTags(tags.filter((tag) => tag !== t));
  };
  return (
    <Modal show={openModel} className="AddinterestWrapper AddChildPopup ">
      <Modal.Header>
        <Modal.Title>Add Interest</Modal.Title>
        <Button data-dismiss="modal" onClick={() => hideModal()}>
          X
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="wrapper mx-auto">
          <form
            name="addchildform"
            className="bg-white p content"
            onSubmit={handleSubmit(_onSubmit)}
          >
            <div className="input-group">
              <label>
                Interest<span className="mandatoryField">*</span>
              </label>
              <div className="form-group">
                <input
                  type="text"
                  value={searchKey}
                  onInput={(e) => {
                    setSearchKey(e.target.value);
                  }}
                  className={`form-control ${
                    errors.interestId ? "is-invalid" : ""
                  }`}
                  {...register("interestId", {
                    required: {
                      value: true,
                      message: MSG.INTRESTREQ,
                    },
                  })}
                />
                {errors.interestId && (
                  <p className="text-danger">{MSG.INTRESTREQ}</p>
                )}
              </div>
            </div>
            <div className="input-group">
              <label>Upload Image</label>
              <div className="uploadCOrseimg d-flex align-items-center">
                <div className="Courseimage mr-3">
                  {/* <img src="https://picsum.photos/200"></img> */}
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
                </div>
                <div className="form-group imageuplodedbtn p-0 position-relative">
                  <input
                    type="File"
                    accept="image/*"
                    placeholder="Browse"
                    onChange={onSelectFile}
                    className={`form-control `}
                  />
                  <span className="uplodedCImage d-flex align-items-center w-100  justify-content-center mr-0">
                    <img
                      src={image.cloud_computing}
                      className="mr-2"
                      alt="..."
                    />
                    Upload
                  </span>
                </div>
              </div>
            </div>
            {/* <div className='input-group'>
							<label>Upload interest Photo</label>
							<div className='form-group'>
								<input
									type='file'
									accept='image/*'
									placeholder='Browse'
									onChange={onSelectFile}
									className='form-control uploadphoto form-input field-answers font-weight-lighter'></input>
							</div>
						</div> */}
            <div className="input-group">
              <label>
                Dimension
                <span className="mandatoryField">*</span>
              </label>
              <div className="form-group selectedField">
                <select
                  {...register("dimensionName", { required: true })}
                  className={`form-control select font-weight-medium mb15 ${
                    errors.dimensionName ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select dimension</option>
                  {getdimension?.records &&
                    getdimension?.records?.map((value, key) => (
                      <option key={key} value={value.name}>
                        {value.name}
                      </option>
                    ))}
                </select>
                {errors.dimensionName && (
                  <p className="text-danger">Dimension is required.</p>
                )}
              </div>
            </div>
            <div className="input-group">
              <label>Description</label>
              <div className="Activityined">
                <div>
                  <textarea
                    className={`form-control text-rows ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    cols="64"
                    placeholder="Description"
                    {...register("description")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="input-group">
              <label>#Tags (comma separated)</label>
              <div className="Activityined">
                <div className="form-control addTags">
                  <div className="tagaddedlist">
                    <ul>
                      {tags.map((tag) => {
                        return (
                          <li>
                            {tag}
                            <span onClick={() => removeTags(tag)}>
                              <i className="fa-solid fa-circle-xmark"></i>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <input
                    type="text"
                    className={`text-rows ${errors.tags ? "is-invalid" : ""}`}
                    cols="64"
                    placeholder="Tags"
                    {...register("tags", {
                      required: tags.length ? false : true,
                    })}
                    // onChange={(e)=>handleTags(e)}
                    onKeyPress={handleKeyPress}
                  ></input>
                  {errors.tags && (
                    <p className="text-danger">Tag is required.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="input-group mt-4 BDsubmitbutton childpopup d-flex">
              <button
                type="button"
                className="btn-blue btn-login d-block mb-5 cancelbutton"
                onClick={() => hideModal()}
              >
                <i className="fa-solid fa-xmark mr-2"></i> Cancel
              </button>
              <button
                type="submit"
                className="btn-blue btn-login d-block mb-5 "
              >
                <i className="fa-solid fa-paper-plane mr-2"></i> Save
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddInterest;

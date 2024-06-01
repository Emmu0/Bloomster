/** @format */

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "../../utils/Packages";
import Home from "../Home";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";

import UploadPhoto from "./UploadPhoto";
import {
  addProviderDetail,
  getSkills,
  // getServices,
  uploadProviderVideo,
} from "../../redux/actions/APIs";
import {
  breadcrumb,
  resetResponse,
  showProviderQuote,
} from "../../redux/actions";
import SearchField from "../controls/SearchField";
import { ShimmerCategoryList } from "../../utils/Packages";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const AboutUs = () => {
  const dispatch = useDispatch();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { getSelectedUser, skills, services, response, showQuote } =
    useSelector((state) => state.collections);

  const [iconsUpdate, setIconUpdate] = useState(false);
  const [tags, setTags] = useState([]);
  const [servicesTags, setServicesTags] = useState();
  const [fileError, setFileError] = useState("");
  const [sktags, setSkTags] = useState([]);
  const [skillsTags, setSkillsTags] = useState();
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [videoObj, setVideoObj] = useState([]);
  const [videoState, SetVideoState] = useState("");
  const [stateDisable, setStateDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceLoad, setServiceLoad] = useState(false);

  const [selectedPrimaryTag, setSelectedPrimaryTag] = useState();

  const [showForm, setShowForm] = useState(false);

  const [len, setLen] = useState("");

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // const [editorState, setEditorState] = useState({
  //   editorState: EditorState.createWithContent(
  //     convertFromRaw(JSON.parse(post.content)),
  //   ),
  // });

  useEffect(() => {
    dispatch(breadcrumb({ title: "About Me", icon: image.notebook }));
  }, [getSelectedUser]);

  function onSelectFile(e) {
    const input = document.getElementById("filevideo");
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0]?.size > 52428800) {
        input.value = "";
        setFileError("Choose file size less than 50 MB");
        return;
      } else {
        setFileError("");
      }
      setVideoObj(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        SetVideoState(reader.result.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  useEffect(() => {
    if (response && videoObj.length !== 0) {
      dispatch(uploadProviderVideo(videoObj, getSelectedUser?.id));

      dispatch(resetResponse());
    }
  }, [response]);

  useEffect(() => {
    if (response) {
      dispatch(showProviderQuote(false));
    }
  }, [response]);

  const _onSubmit = (values) => {
    if (!editorState.getCurrentContent().hasText()) {
      return;
    }

    let formData = {
      aboutMe: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      // skills: sktags.toString(),
      // services: tags.toString(),
      quote: values.quote,
    };

    dispatch(addProviderDetail(formData, getSelectedUser?.id)).then(() => {});
  };

  const onInternalChange = (currentContentState) => {
    const html = draftToHtml(currentContentState);
    setValue(`aboutMe`, html);
  };

  // useEffect(() => {
  //   if (getSelectedUser?.id) {
  //     dispatch(getSkills(getSelectedUser?.id));
  //     dispatch(getServices(getSelectedUser?.id));
  //   }
  // }, [getSelectedUser]);

  useEffect(() => {
    if (sktags?.length) {
      clearErrors("skills");
    }
    if (tags?.length) {
      clearErrors("services");
    }
  }, [sktags, tags]);

  useEffect(() => {
    if (skills?.records[0]) {
      setSkillsTags(skills?.records[0]);
      setServicesTags(services?.records[0]);
    }
  }, [services, skills]);

  const handleKeyPress = (e, type, tag) => {
    if (type === "select") {
      setTags([...tags, tag.name]);
      let t = servicesTags.filter((ctag) => ctag.name !== tag?.name);
      setServicesTags(t);
    }

    if (e.key === "Enter") {
      e.preventDefault();

      setTags([...tags, e.target.value]);

      e.target.value = null;
    }
  };

  const handleskillPress = (e, type, tag) => {
    if (type === "select") {
      setSkTags([...sktags, tag.name]);

      let t = skillsTags.filter((ctag) => ctag.name !== tag?.name);
      setSkillsTags(t);
    }

    if (e.key === "Enter") {
      e.preventDefault();

      setSkTags([...sktags, e.target.value]);

      e.target.value = null;
    }
  };

  const removeTags = (t) => {
    let x = services?.records[0].find((ctag) => ctag?.name === t);

    setTags(tags.filter((tag) => tag !== t));
    if (x) {
      setServicesTags([...servicesTags, x]);
    }
  };

  const removeskillTags = (t) => {
    let x = skills?.records[0]?.find((ctag) => ctag?.name === t);

    setSkTags(sktags.filter((tag) => tag !== t));
    if (x) {
      setSkillsTags([...skillsTags, x]);
    }
  };

  const resetCancel = () => {
    setStateDisable(false);
    resetField("aboutMe");
    resetField("quote");
    resetField("servicetags");
    resetField("sktags");
    setTags([]);
    setSkTags([]);
  };

  const handleSetValue = () => {
    if (getSelectedUser?.providerDetail) {
      if (getSelectedUser?.providerDetail?.aboutMe !== null) {
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(getSelectedUser?.providerDetail?.aboutMe)
            )
          )
        );
        setLen(getSelectedUser?.providerDetail?.quote);
      }
    }
  };

  useEffect(() => {
    handleSetValue();
  }, [
    getSelectedUser?.providerDetail?.aboutMe,
    getSelectedUser?.providerDetail?.quote,
  ]);

  useEffect(() => {
    let skillData = [];
    let serviceData = [];
    if (getSelectedUser?.providerDetail) {
      if (getSelectedUser?.providerDetail?.aboutMe !== null) {
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(getSelectedUser?.providerDetail?.aboutMe)
            )
          )
        );
        setLen(getSelectedUser?.providerDetail?.quote);
      }
    }

    if (getSelectedUser?.skills?.length > 0) {
      getSelectedUser.skills.map((vl, ky) => {
        skillData.push(vl?.name);
      });
      setSkTags(skillData);
    }

    if (getSelectedUser?.services?.length > 0) {
      getSelectedUser.services.map((vl, ky) => {
        serviceData.push(vl?.name);
      });
      setTags(serviceData);
    }
  }, [getSelectedUser]);

  return (
    <Home>
      <div className="LeftbarPannel p-0">
        <UploadPhoto
          color={"#1ec1d9"}
          setValue={setValue}
          errors={errors}
          register={register}
          resetField={resetField}
          name={"quote"}
          len={len}
          setLen={setLen}
        />
        <div className="PannelContent basicdetailsform px-5">
          <div className="wrapper mx-auto">
            <form
              className="bg-white content"
              name="basicdetailform"
              onSubmit={handleSubmit(_onSubmit)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              <div className="form-title ">
                <h3 data-toggle="collapse" className="flex">
                  <span>
                    <i className="fa-light fa-address-card mr-2"></i> About Me
                    <span className="mandatoryField">*</span>
                  </span>
                  {!showQuote && (
                    <span
                      className="pointer ml-auto "
                      onClick={() => dispatch(showProviderQuote(true))}
                    >
                      <i className="fa-light fa-pencil"></i>
                    </span>
                  )}
                </h3>
              </div>

              {!showQuote ? (
                <div className="input-group full-Width-group Activityined">
                  <div className={`form-group`}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: getSelectedUser?.providerDetail?.aboutMe,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="input-group full-Width-group Activityined"
                  key={Math.random()}
                >
                  <div className={`form-group`}>
                    <Controller
                      {...register(`aboutMe`)}
                      control={control}
                      render={() => {
                        return (
                          <Editor
                            editorStyle={{
                              border: "1px solid #C0C0C0",
                              height: "30vh",
                            }}
                            editorState={editorState}
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
                        <p className="text-danger">
                          You need to provide your profile details for the About
                          Me section
                        </p>
                      )}
                  </div>
                </div>
              )}

              {showQuote && (
                <div className="input-group full-Width-group basic_details_form">
                  <div className="form-group BDsubmitbutton d-flex">
                    <div className="buttonDistribotion justify-content-between">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5"
                        onClick={() => {
                          dispatch(showProviderQuote(false));
                          handleSetValue();
                        }}
                        // onClick={() => resetCancel()}
                      >
                        <i className="fa-solid fa-arrow-left"></i> Back
                      </button>
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 "
                        onClick={() => setIsSaveClicked(true)}
                      >
                        <i className="fa-solid fa-paper-plane"></i> Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Profile iconsUpdate={iconsUpdate} setIconUpdate={setIconUpdate} />
    </Home>
  );
};

export default AboutUs;

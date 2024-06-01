/** @format */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Home from "../Home";
import * as image from "../../resources/images";
import {
  getInterestByKeyWords,
  addInterest,
  getSkills,
  getInterestByID,
  getInterests,
  getTitlesByKeyWords,
  getPopularTitle,
  addUserSkill,
  deleteUserSkill,
  addUserTitle,
  deleteUserTitle,
  interestCategories,
  interestByCategoryId,
  getGradeLevel,
  getAllIndustries,
  deleteInterest,
} from "../../redux/actions/APIs";
import { isLoading, resetResponse } from "../../redux/actions";

import SelectedInterest from "./SelectedInterest";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  swal,
  ShimmerCategoryList,
  ShimmerCategoryItem,
  SelectPicker,
  Controller,
  ReactTooltip,
} from "../../utils/Packages";
import { userTitle } from "../../utils/DataObjects";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  SelectPickerVal,
  getCapitalized,
  SelectPickerName,
} from "../../utils/helper";
import { breadcrumb } from "../../redux/actions";
import { MSG } from "../../utils/Messages";
import DeletePopup from "../controls/DeletePopup";

const Interests = () => {
  const {
    register,
    setValue,
    reset,
    resetField,
    control,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [filteredData, setFilteredData] = useState(undefined);
  const [interestData, setInterestData] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const [isEmptySearchBox, setIsEmptySearchBox] = useState(true);
  const [openModel, setOpenModal] = useState(false);
  const [term, setTerm] = useState();
  const [dbTerm, setDbTerm] = useState(term);
  const [count, setCount] = useState(-1);
  const [showMYDataWithFilter, setShowMYDataWithFilter] = useState(false);

  const [secondaryState, setSecondaryState] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  const [tags, setTags] = useState([]);
  const [sktags, setSkTags] = useState([]);

  const [categoryid, setCategoryid] = useState("");
  const [levelid, setLevelid] = useState("");
  const [industryid, setIndustryid] = useState("");

  const [limit, setLimit] = useState();

  const [end, setEnd] = useState(12);
  const [loadDataLength, setLoadDataLength] = useState();

  const [dataState, setDataState] = useState(undefined);

  const [startPopup, setStartPopup] = useState(false);
  const [interestId, setInterestId] = useState("");
  const [interestType, setInterestType] = useState("");

  const [userData, setUserData] = useState([]);
  const [userData1, setUserData1] = useState([]);
  const [userData2, setUserData2] = useState([]);
  const [loader, setLoader] = useState(false);

  let categoryId = categoryid;
  let levelId = levelid;

  const {
    interestByKeywords,
    error,
    getSelectedUser,
    skills,
    getinterests,
    interestById,
    titleByKeywords,
    popularTitle,
    response,
    getinterestcategories,
    getinterestcategoriesbyid,
    gradelevel,
    getinterestlevelbyid,
    getallindustries,
    titlesByCharacter,
    alphabetData,
    loggedInUser,
  } = useSelector((state) => state.collections);

  useEffect(() => {
    setUserData(getSelectedUser?.interests);
    setUserData1(getSelectedUser?.skills);
    setUserData2(getSelectedUser?.titles);
  }, [getSelectedUser]);

  useEffect(() => {
    if (
      response?.success &&
      response?.objectName === "Interest" &&
      response?.records?.length > 0
    ) {
      setUserData((oldArray) => [...oldArray, response?.records[0]]);
    } else if (
      response?.success &&
      response?.objectName === "Skill" &&
      response?.records?.length > 0
    ) {
      setUserData1((oldArray) => [...oldArray, response?.records[0]]);
    } else if (
      response?.success &&
      response?.objectName === "Title" &&
      response?.records?.length > 0
    ) {
      setUserData2((oldArray) => [...oldArray, response?.records[0]]);
    }
  }, [response]);

  useEffect(()=>{
    if(response){
      setLoader(false);
      setStartPopup(false);
    }
  },[response])

  useEffect(() => {
    dispatch(interestCategories());
    dispatch(getGradeLevel());
    dispatch(getAllIndustries());
  }, []);

  useEffect(() => {
    if (!gradelevel) {
      dispatch(getGradeLevel());
    }
  }, [gradelevel]);

  useEffect(() => {
    if (term !== "") {
      dispatch(resetResponse());
    }
  }, [term]);

  const loadMoreData = () => {
    setEnd(end + 12);
  };

  // useEffect(()=>{
  //   if (!categoryId) return
  //   dispatch(interestByCategoryId(categoryId));
  //   if (!levelId) return
  //   dispatch(interestByLevelId(levelId));
  // },[categoryId, levelId])

  // const changeCategory = (event) => {
  //   if(toggleState === 1){
  //     setCategoryid(event?.target?.value);
  //   } else if(toggleState === 2){
  //     setLevelid(event?.target?.value)
  //   }
  //   else if(toggleState === 3){
  //    setIndustryid(event?.target?.value);
  //  }
  // };

  useEffect(() => {
    if (response?.success) {
      reset();
    }
  });

  const userLevelId = loggedInUser?.children[0]?.level?.id;

  useEffect(() => {
    if (toggleState === 2) {
      if (getSelectedUser?.id) {
        if (getSelectedUser?.role?.name === "PARENT") {
          if (dbTerm) {
            dispatch(getSkills(getSelectedUser?.id, userLevelId, dbTerm));
          } else {
            dispatch(getSkills(getSelectedUser?.id, userLevelId));
          }
        } else {
          if (dbTerm) {
            dispatch(
              getSkills(getSelectedUser?.id, getSelectedUser?.level?.id, dbTerm)
            );
          } else {
            dispatch(
              getSkills(getSelectedUser?.id, getSelectedUser?.level?.id)
            );
          }
        }
      }
    }
    // dispatch(getPopularTitle());
  }, [getSelectedUser, dbTerm]);

  const toggleTab = (index) => {
    reset();
    // resetFields();
    setToggleState(index);
    setTerm("");
    setDbTerm("");
    setEnd(12);
    setFilteredData("");
  };

  useEffect(() => {
    if (interestByKeywords?.recordsCount > 0 && filteredData) {
      dispatch(isLoading(false));
    }
  }, [error]);

  useEffect(() => {
    dispatch(breadcrumb({ title: "Interests", icon: image.addintresr }));
  }, [loggedInUser]);

  useEffect(() => {
    if (count === -1) {
      const timerId = setTimeout(() => {
        setDbTerm(term);
      }, 500);
      return () => clearTimeout(timerId);
    }
    setCount(-1);
  }, [term]);

  useEffect(() => {
    if (toggleState === 1) {
      dispatch(getInterestByKeyWords(dbTerm));
    }
    if (toggleState === 3) {
      dispatch(getTitlesByKeyWords(dbTerm));
    }
  }, [dbTerm]);

  useEffect(() => {
    if (toggleState === 1) {
      const newFilter = interestByKeywords?.records?.filter((value) => {
        return value?.name?.toLowerCase().includes(term?.toLowerCase());
      });
      setFilteredData(newFilter);
    } else if (toggleState === 2) {
      const newFilter = skills?.records[0]?.filter((value) => {
        return value?.name?.toLowerCase().includes(term?.toLowerCase());
      });
      setFilteredData(newFilter);
    } else if (toggleState === 3) {
      const newFilter = titleByKeywords?.records?.filter((value) => {
        return value?.name?.toLowerCase().includes(term?.toLowerCase());
      });
      setFilteredData(newFilter);
    } else {
      const newFilter = "";
      setFilteredData("");
    }

    setSearchKey(term);
    if (term) {
      setIsEmptySearchBox(false);
    } else {
      setIsEmptySearchBox(true);
    }
  }, [interestByKeywords, skills, titleByKeywords]);

  useEffect(() => {
    if (filteredData && filteredData?.length) {
      setSecondaryState(filteredData);
    } else if (filteredData?.length === 0 || filteredData === undefined) {
      setSecondaryState("");
    }

    // setSecondaryState(filteredData.slice(0, 12));
  }, [filteredData]);

  // useEffect(() => {
  //   if(!getinterestcategoriesbyid?.records) {setDataState(getinterests?.records)}
  //   if (getinterestcategoriesbyid?.records) {setDataState(getinterestcategoriesbyid?.records)}
  //   if (!getinterestlevelbyid?.records) {setDataState(skills?.records[0])}
  //   if (getinterestlevelbyid?.records) {setDataState(getinterestlevelbyid?.records)}
  //   if (!titlesByCharacter?.records) {setDataState(popularTitle?.records[0])}
  //   if (titlesByCharacter?.records) {setDataState(titlesByCharacter?.records)}

  // }, [getinterests, getinterestcategoriesbyid, skills, getinterestlevelbyid, popularTitle, titlesByCharacter]);

  const selectData = (item) => {
    // setMyArray([...myArray,item])
    dispatch(isLoading(true));
    setInterestData(item);
    setTerm(item.name);
    setValue("name", item.name, { shouldValidate: true });
    setFilteredData(undefined);
  };

  const resetFields = () => {
    reset();
    // setSecondaryState("");
    setIsEmptySearchBox(!isEmptySearchBox);
    setFilteredData(undefined);
    setTerm("");
  };

  const handleModal = () => {
    setOpenModal(!openModel);
    reset();
    setFilteredData(undefined);
    resetFields();
    setInterestData();
    setTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.target.value.length === 1 && e.key === "Backspace") {
      setFilteredData(undefined);
    }

    if (e.key === "ArrowDown" && count !== filteredData?.length) {
      setCount((pre) => pre + 1);
    }
    if (e.key === "ArrowUp" && count !== -1) {
      setCount((pre) => pre - 1);
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (count !== -1 && count <= filteredData?.length) {
        setTerm(filteredData[count]?.name);
        selectData(filteredData[count]);
      }
      if (count === -1) {
        setShowMYDataWithFilter(true);
        setTerm(e.target.value);
      }
    }
  };
  useEffect(() => {
    if (filteredData?.length === 0) {
      setShowMYDataWithFilter(false);
    }
  }, [filteredData]);

  let searchTerm = document.getElementById("searchInterest")?.value;

  const fetchMoreData = (to, from) => {
    setTimeout(() => {
      setSecondaryState([...secondaryState, ...filteredData.slice(to, from)]);
    }, 2000);
  };
  useEffect(() => {
    dispatch(getInterests());
    dispatch(getPopularTitle());
  }, []);

  useEffect(() => {
    dispatch(getInterestByID(getSelectedUser?.id));
  }, [getSelectedUser]);

  // interestData = getinterestcategoriesbyid?.records
  //                 interestCateData = getinterestcategoriesbyid?.records
  //                 levelData = getinterestlevelbyid?.records
  //                 titleData = titlesByCharacter?.records

  useEffect(() => {
    if (toggleState === 1 && !getinterestcategoriesbyid?.records) {
      setLoadDataLength(getinterests?.records?.length);
    } else if (toggleState === 1 && getinterestcategoriesbyid?.records) {
      setLoadDataLength(getinterestcategoriesbyid?.records?.length);
    } else if (toggleState === 2 && !getinterestlevelbyid?.records) {
      setLoadDataLength(skills?.records[0]?.length);
    } else if (toggleState === 2 && getinterestlevelbyid?.records) {
      setLoadDataLength(getinterestlevelbyid?.records?.length);
    } else if (toggleState === 3 && !titlesByCharacter?.records) {
      setLoadDataLength(popularTitle?.records[0]?.length);
    } else if (toggleState === 3 && titlesByCharacter?.records) {
      setLoadDataLength(titlesByCharacter?.records?.length);
    }
  }, [
    loadDataLength,
    toggleState,
    getinterestcategoriesbyid,
    getinterests,
    getinterestlevelbyid,
    skills,
    getinterestlevelbyid,
    popularTitle,
    titlesByCharacter,
  ]);

  const [intId, setIntId] = useState("");
  const [delId, setDelId] = useState("");

  const handleInterest = (values, type) => {
    setIntId(values.id);
    let formData = {
      interestId: values.id,
      name: values.name,
      // dimensionName: "Physical",
      // description: "",
      // tags: "",
      // description: values.description,
      // tags: values?.tags
      //   ?.toString()
      //   ?.substring(1, values?.tags?.toString().length - 1)
      //   ?.split(","),
    };

    if (type === "interested") {
      dispatch(addInterest(formData, getSelectedUser.id, values.id));
    } else if (type === "skills") {
      dispatch(addUserSkill(formData, getSelectedUser.id, values.id));
    } else if (type === "title") {
      dispatch(addUserTitle(formData, getSelectedUser.id, values.id));
    }
  };

  const handleKeyPress1 = (e, type, tag) => {
    if (type === "select") {
      setTags([...tags, tag.name]);
      let t = userTitle?.records[0].filter((ctag) => ctag.value !== tag?.value);
      // setServicesTags(t);
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
      let t = skills?.records[0].filter((ctag) => ctag.value !== tag?.value);
      // userSkills?.records[0]
      // setSkillsTags(t);
    }

    if (e.key === "Enter") {
      e.preventDefault();

      setSkTags([...sktags, e.target.value]);

      e.target.value = null;
    }
  };

  const resetsearchField = () => {
    // setStateDisable(false);
    resetField("name");
    setFilteredData("");
  };

  const handleCategory = () => {
    setTerm("");
    dispatch(interestCategories());
  };
  const handleGradeLevel = () => {
    setTerm("");
    dispatch(getGradeLevel());
  };

  const deleteInt = (id, type) => {
    setDelId(id);
    setStartPopup(true);
    setInterestId(id);
    setInterestType(type);
  };

  const handleDelete = () => {
    setLoader(true)
    if (interestType === "interested") {
      dispatch(deleteInterest(getSelectedUser.id, interestId));
      // setStartPopup(false);
    } else if (interestType === "skills") {
      dispatch(deleteUserSkill(getSelectedUser.id, interestId));
      // setStartPopup(false);
    } else if (interestType === "titles") {
      dispatch(deleteUserTitle(getSelectedUser.id, interestId));
      // setStartPopup(false);
    }
  };

  return (
    <Home>
      <div className="LeftbarPannel p-0" id="intrest_form">
        <div className="tabgrid intresttab">
          <ul>
            <li
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <i className="fa-solid fa-heart-circle-check"></i>General
              Interest(s)
            </li>
            <li
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <i className="fa-solid fa-arrow-up-right-dots"></i> Self
              Improvement(s)
            </li>
            <li
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <i className="fa-solid fa-user-tie"></i>Career Interest(s)
            </li>
          </ul>
        </div>
        <div className="PannelContent basicdetailsform  px-5">
          <div className="wrapper mx-auto ">
            <form
              className={`bg-white content inte ${
                toggleState === 1 ? "geninterstsplcls" : ""
              }`}
            >
              <div className="input-group searchInputs searchinrest">
                {toggleState === 1 && <label>Browse by Category</label>}

                <div className="form-group selectedField ">
                  {toggleState === 1 && (
                    <Controller
                      {...register("interestCat")}
                      noRef={true}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        onChange = (event) => {
                          dispatch(interestByCategoryId(event));
                          resetFields();
                        };
                        return (
                          <SelectPicker
                            onChange={onChange}
                            onOpen={() => handleCategory()}
                            className={`${
                              errors.interestCat ? "is-invalid" : ""
                            }`}
                            data={SelectPickerVal(
                              getinterestcategories?.records
                            )}
                            searchable={true}
                            defaultValue={getCapitalized(value)}
                            cleanable={false}
                          />
                        );
                      }}
                    />
                  )}
                  {/* {toggleState === 2 && (
                    <Controller
                      {...register("skillCate")}
                      noRef={true}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        onChange = (event) => {
                          dispatch(interestByLevelId(event));
                          resetFields();
                        };
                        return (
                          <SelectPicker
                            onChange={onChange}
                            onOpen={() => handleGradeLevel()}
                            className={`${
                              errors.interestCat ? "is-invalid" : ""
                            }`}
                            data={SelectPickerVal(gradelevel?.records)}
                            searchable={true}
                            defaultValue={getCapitalized(value)}
                            cleanable={false}
                          />
                        );
                      }}
                    />
                  )} */}

                  {/* {toggleState === 3 && (
                    <Controller
                      {...register("titleCat")}
                      noRef={true}
                      control={control}
                      render={({ field: { onChange, value } }) => {
                        onChange = (event) => {
                          dispatch(searchByCharacter(event));
                          resetFields();
                        };

                        return (
                          <SelectPicker
                            onChange={onChange}
                            onOpen={() => handletitle()}
                            className={`${errors.titleCat ? "is-invalid" : ""}`}
                            data={SelectPickerName(alphabetData?.alphbetic)}
                            searchable={true}
                            defaultValue={getCapitalized(value)}
                            cleanable={false}
                          />
                        );
                      }}
                    />
                  )} */}
                </div>
              </div>
              <p className="flex">
                {toggleState === 1 && <span className="ortag">OR</span>}
              </p>

              <div className="input-group searchInputs searchinrest">
                {toggleState === 1 && (
                  <label className="">Search Interest </label>
                )}
                {toggleState === 2 &&
                  getSelectedUser?.role?.name === "PARENT" && (
                    <label className="">Search Skills </label>
                  )}
                {toggleState === 2 &&
                  getSelectedUser?.role?.name !== "PARENT" && (
                    <label className="">What would you like to work on? </label>
                  )}
                {toggleState === 3 &&
                  getSelectedUser?.role?.name === "PARENT" && (
                    <label className="">Search Titles </label>
                  )}
                {toggleState === 3 &&
                  getSelectedUser?.role?.name !== "PARENT" && (
                    <label className="">
                      What would you like to become when you grow up?{" "}
                    </label>
                  )}

                <div className="search">
                  <div className="searchInputs">
                    <input
                      type="text"
                      placeholder={"Search..."}
                      {...register("name", {
                        required: true,
                      })}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      value={term}
                      onChange={(e) => {
                        setTerm(e.target.value);
                        // dispatch(resetResponse());
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          setTerm(e.target.value);
                        }
                      }}
                      autoComplete="off"
                      id={"searchInterest"}
                    />

                    {errors.name && (
                      <p className="text-danger">{MSG.INTRESTREQ}</p>
                    )}
                    <div className="searchIcon"></div>

                    {searchTerm == "" ? (
                      <span className="" key={Math.random()}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                    ) : searchTerm !== "" && filteredData === undefined ? (
                      <>
                        <div className="spinner" />
                      </>
                    ) : (
                      <span
                        className="closeicon"
                        key={Math.random()}
                        onClick={resetFields}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div></div>
              {searchTerm !== "" && filteredData === undefined ? (
                <ShimmerCategoryList items={1} />
              ) : !showMYDataWithFilter && filteredData && searchTerm !== "" ? (
                <div
                  className="w-100"
                  // id="scrollableDiv"
                  // style={{ height: "429px", overflow: "auto" }}
                >
                  {/* <InfiniteScroll
                    dataLength={secondaryState?.length}
                    next={() =>
                      fetchMoreData(
                        secondaryState?.length,
                        secondaryState?.length + 10
                      )
                    }
                    hasMore={filteredData?.length > secondaryState?.length}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  > */}
                  <div className="intresttile w-100 ">
                    <h3>Searched interest result: </h3>

                    <div className="intrestlisting">
                      {/* {toggleState === 1 ? (
                        secondaryState &&
                        secondaryState
                          .filter(
                            (record) =>
                              interestById &&
                              interestById?.records &&
                              !interestById?.records?.some(
                                (a) => a.name === record.name
                              )
                          )
                          ?.slice(0, end)
                          ?.map((value, index) => (
                            <div className="instlistitem">
                              <div className="carditem ">
                                <h4
                                  className={
                                    index === count
                                      ? "flex w-100 text-white bg-dark"
                                      : ""
                                  }
                                  onClick={() =>
                                    handleInterest(value, "interested")
                                  }
                                  key={index}
                                >
                                  <span
                                    className="d-flex align-items-center pr-2"
                                    title={value.name}
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {value.name.length > 12
                                      ? `${value?.name?.substring(0, 24)}...`
                                      : value.name}
                                  </span>{" "}
                                  <span className="HurtCount">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    {value?.interested
                                      ? value?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      ) : secondaryState === "" ? <p>No result found</p> : <ShimmerCategoryList
                      items={1}
                      categoryStyle="STYLE_SEVEN"
                    />} */}

                      {toggleState === 1 ? (
                        secondaryState !== "" ? (
                          secondaryState &&
                          secondaryState
                            .filter(
                              (record) =>
                                // interestById &&
                                userData &&
                                !userData?.some((a) => a.name === record.name)
                            )
                            ?.slice(0, end)
                            ?.map((value, index) => (
                              <div className="instlistitem">
                                <div className="carditem ">
                                  <h4
                                    className={
                                      index === count
                                        ? "flex w-100 text-white bg-dark"
                                        : ""
                                    }
                                    // onClick={() =>
                                    //   handleInterest(value, "interested")
                                    // }
                                    key={index}
                                  >
                                    <button
                                      className="d-flex align-items-center pr-2"
                                      disabled={
                                        intId === value.id ? true : false
                                      }
                                      onClick={() =>
                                        handleInterest(value, "interested")
                                      }
                                      title={value.name}
                                    >
                                      <i className="fa-solid fa-circle-plus"></i>{" "}
                                      {value.name.length > 20
                                        ? `${value?.name?.substring(0, 20)}...`
                                        : value.name}
                                    </button>{" "}
                                    <span className="HurtCount">
                                      <i className="fa-regular fa-heart"></i>{" "}
                                      {value?.interested
                                        ? value?.interested + "K"
                                        : ""}
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            ))
                        ) : secondaryState == "" ? (
                          <p>No result found</p>
                        ) : (
                          <ShimmerCategoryList
                            items={1}
                            categoryStyle="STYLE_SEVEN"
                          />
                        )
                      ) : (
                        ""
                      )}

                      {toggleState === 2 ? (
                        secondaryState !== "" ? (
                          secondaryState &&
                          secondaryState
                            .filter(
                              (record) =>
                                // getSelectedUser &&
                                userData1 &&
                                !userData1?.some((a) => a.name === record.name)
                            )
                            ?.slice(0, end)
                            ?.map((value, index) => (
                              <div className="instlistitem">
                                <div className="carditem ">
                                  <h4
                                    className={
                                      index === count
                                        ? "flex w-100 text-white bg-dark"
                                        : ""
                                    }
                                    // onClick={() =>
                                    //   handleInterest(value, "skills")
                                    // }
                                    key={index}
                                  >
                                    <button
                                      className="d-flex align-items-center pr-2"
                                      disabled={
                                        intId === value.id ? true : false
                                      }
                                      onClick={() =>
                                        handleInterest(value, "skills")
                                      }
                                      title={value.name}
                                    >
                                      <i className="fa-solid fa-circle-plus"></i>{" "}
                                      {value.name.length > 20
                                        ? `${value?.name?.substring(0, 20)}...`
                                        : value.name}
                                    </button>{" "}
                                    <span className="HurtCount">
                                      <i className="fa-regular fa-heart"></i>{" "}
                                      {value?.interested
                                        ? value?.interested + "K"
                                        : ""}
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            ))
                        ) : secondaryState == "" ? (
                          <p>No result found</p>
                        ) : (
                          <ShimmerCategoryList
                            items={1}
                            categoryStyle="STYLE_SEVEN"
                          />
                        )
                      ) : (
                        ""
                      )}

                      {toggleState === 3 ? (
                        secondaryState !== "" ? (
                          secondaryState &&
                          secondaryState
                            .filter(
                              (record) =>
                                // getSelectedUser &&
                                userData2 &&
                                !userData2?.some((a) => a.name === record.name)
                            )
                            ?.slice(0, end)
                            ?.map((value, index) => (
                              <div className="instlistitem">
                                <div className="carditem ">
                                  <h4
                                    className={
                                      index === count
                                        ? "flex w-100 text-white bg-dark"
                                        : ""
                                    }
                                    // onClick={() =>
                                    //   handleInterest(value, "title")
                                    // }
                                    key={index}
                                  >
                                    <button
                                      className="d-flex align-items-center pr-2"
                                      disabled={
                                        intId === value.id ? true : false
                                      }
                                      onClick={() =>
                                        handleInterest(value, "title")
                                      }
                                      title={value.name}
                                    >
                                      <i className="fa-solid fa-circle-plus"></i>{" "}
                                      {value.name.length > 20
                                        ? `${value?.name?.substring(0, 20)}...`
                                        : value.name}
                                    </button>{" "}
                                    <span className="HurtCount">
                                      <i className="fa-regular fa-heart"></i>{" "}
                                      {value?.interested
                                        ? value?.interested + "K"
                                        : ""}
                                    </span>
                                  </h4>
                                </div>
                              </div>
                            ))
                        ) : secondaryState == "" ? (
                          <p>No result found</p>
                        ) : (
                          <ShimmerCategoryList
                            items={1}
                            categoryStyle="STYLE_SEVEN"
                          />
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  {secondaryState?.length > end && (
                    <p
                      className="LoadMoreIntrstitem col-12 p-3"
                      onClick={loadMoreData}
                    >
                      See More <i className="fa-regular fa-chevron-down"></i>
                    </p>
                  )}

                  {/* </InfiniteScroll> */}
                </div>
              ) : (
                <>
                  <div className="intresttile w-100 ">
                    <h3>Or you may choose from below: </h3>
                  </div>
                  {/* <p>{kFormatter(3150)}</p>
                  <p>{kFormatter(41620)}</p> */}

                  <div className="intrestlisting">
                    {toggleState === 1 && !getinterestcategoriesbyid?.records
                      ? getinterests?.records
                          ?.filter(
                            (record) =>
                              // getSelectedUser &&
                              userData &&
                              !userData?.some((a) => a.name === record.name)
                          )
                          .slice(0, end)
                          .map((item, ind) => (
                            <div className="instlistitem" key={Math.random()}>
                              <div className="carditem ">
                                {item.name.length > 15 ? (
                                  <ReactTooltip id={item?.name}>
                                    <p>{item?.name}</p>
                                  </ReactTooltip>
                                ) : (
                                  ""
                                )}
                                <h4 className="flex w-100">
                                  {/* <span
                                    className="d-flex  align-items-center"
                                    // onClick={() =>
                                    //   handleInterest(item, "interested")
                                    // }
                                    title={item.name}  
                                                         
                                  > */}
                                  <button
                                    data-for={item?.name}
                                    data-event-off=""
                                    data-tip
                                    disabled={intId === item.id ? true : false}
                                    onClick={() =>
                                      handleInterest(item, "interested")
                                    }
                                    className="d-flex  align-items-center"
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {/* {"hello"} */}
                                    {item.name.length > 20
                                      ? `${item?.name?.substring(0, 20)}...`
                                      : item.name}
                                  </button>

                                  {/* </span>{" "} */}
                                  <span>
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    {item?.interested
                                      ? item?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      : toggleState === 1 && getinterestcategoriesbyid?.records
                      ? getinterestcategoriesbyid?.records
                          ?.filter(
                            (record) =>
                              // getSelectedUser &&
                              userData &&
                              !userData?.some((a) => a.name === record.name)
                          )
                          .slice(0, end)
                          .map((cate, i) => (
                            <div className="instlistitem" key={i}>
                              <div className="carditem ">
                                <h4 className="flex w-100">
                                  <button
                                    className="d-flex  align-items-center"
                                    disabled={intId === cate.id ? true : false}
                                    onClick={() =>
                                      handleInterest(cate, "interested")
                                    }
                                    title={cate.name}
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {cate?.name.length > 20
                                      ? `${cate?.name?.substring(0, 20)}...`
                                      : cate?.name}
                                  </button>{" "}
                                  <span>
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    {cate?.interested
                                      ? cate?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      : ""}

                    {toggleState === 2 && !getinterestlevelbyid?.records
                      ? skills?.records[0]
                          ?.filter(
                            (record) =>
                              // getSelectedUser &&
                              userData1 &&
                              !userData1?.some((a) => a.name === record.name)
                          )
                          .slice(0, end)
                          .map((tag, index) => (
                            <div className="instlistitem" key={index}>
                              <div className="carditem ">
                                <h4 className="flex w-100">
                                  <button
                                    className="d-flex align-items-center pr-2"
                                    disabled={intId === tag.id ? true : false}
                                    // onClick={(e) => handleskillPress(e, "select", tag)}
                                    onClick={() =>
                                      handleInterest(tag, "skills")
                                    }
                                    title={tag.name}
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {tag.name.length > 20
                                      ? `${tag?.name?.substring(0, 20)}...`
                                      : tag.name}
                                  </button>{" "}
                                  <span className="HurtCount">
                                    <i className="fa-regular fa-heart"></i>
                                    {tag?.interested
                                      ? tag?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      : toggleState === 2 && getinterestlevelbyid?.records
                      ? getinterestlevelbyid?.records
                          ?.filter(
                            (record) =>
                              // getSelectedUser &&
                              userData1 &&
                              !userData1?.some((a) => a.name === record.name)
                          )
                          .slice(0, end)
                          .map((lev, index) => (
                            <div className="instlistitem" key={index}>
                              <div className="carditem ">
                                <h4 className="flex w-100">
                                  <button
                                    className="d-flex align-items-center pr-2"
                                    disabled={intId === lev.id ? true : false}
                                    // onClick={(e) => handleskillPress(e, "select", tag)}
                                    onClick={() =>
                                      handleInterest(lev, "skills")
                                    }
                                    title={lev.name}
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {lev.name.length > 20
                                      ? `${lev?.name?.substring(0, 20)}...`
                                      : lev.name}
                                  </button>{" "}
                                  <span className="HurtCount">
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    {lev?.interested
                                      ? lev?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      : ""}

                    {toggleState === 3 && !titlesByCharacter?.records
                      ? popularTitle?.records[0]
                          ?.filter(
                            (record) =>
                              // getSelectedUser &&
                              userData2 &&
                              !userData2?.some((a) => a.name === record.name)
                          )
                          .slice(0, end)
                          .map((item, ind) => (
                            <div className="instlistitem" key={ind}>
                              <div className="carditem ">
                                <h4 className="flex w-100">
                                  <button
                                    className="d-flex  align-items-center"
                                    disabled={intId === item.id ? true : false}
                                    onClick={() =>
                                      handleInterest(item, "title")
                                    }
                                    title={item.name}
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {item.name.length > 20
                                      ? `${item?.name?.substring(0, 20)}...`
                                      : item.name}
                                  </button>{" "}
                                  <span>
                                    <i className="fa-regular fa-heart"></i>{" "}
                                    {item?.interested
                                      ? item?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      : toggleState === 3 && titlesByCharacter?.records
                      ? titlesByCharacter?.records
                          ?.filter(
                            (record) =>
                              // getSelectedUser &&
                              userData2 &&
                              !userData2?.some((a) => a.name === record.name)
                          )
                          .slice(0, end)
                          .map((tag, ind) => (
                            <div className="instlistitem" key={ind}>
                              <div className="carditem ">
                                <h4 className="flex w-100">
                                  <button
                                    className="flex"
                                    disabled={intId === tag.id ? true : false}
                                    // onClick={(e) => handleKeyPress1(e, "select", tag)}
                                    onClick={() => handleInterest(tag, "title")}
                                    title={tag.name}
                                  >
                                    <i className="fa-solid fa-circle-plus"></i>{" "}
                                    {tag.name.length > 20
                                      ? `${tag?.name?.substring(0, 20)}...`
                                      : tag.name}
                                  </button>{" "}
                                  <span className="HurtCount">
                                    <i className="fa-regular fa-heart"></i>
                                    {tag?.interested
                                      ? tag?.interested + "K"
                                      : ""}
                                  </span>
                                </h4>
                              </div>
                            </div>
                          ))
                      : ""}

                    {loadDataLength > end && (
                      <p
                        className=" LoadMoreIntrstitem col-12 p-3"
                        onClick={loadMoreData}
                      >
                        See More <i className="fa-regular fa-chevron-down"></i>
                      </p>
                    )}
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <SelectedInterest
        interestData={interestData}
        showMYDataWithFilter={showMYDataWithFilter}
        tags={tags}
        sktags={sktags}
        setSkTags={setSkTags}
        deleteInt={deleteInt}
        delId={delId}
      />

      {startPopup && (
        <DeletePopup
          setStartPopup={setStartPopup}
          handleDelete={handleDelete}
          setDelId={setDelId}
          loader={loader}
        />
      )}
    </Home>
  );
};

export default Interests;

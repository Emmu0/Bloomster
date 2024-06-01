/** @format */

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileName } from "../../utils/helper";
import { searchCourseTag } from "../../redux/actions";

const SearchField = ({
  placeholder,
  name,
  dataFetched,
  commonFetch,
  isLoading,
  setValue,
  type,
  setExpData,
  setTitleData,
  setDivData,
  setIndData,
  resetFields,
  setCompanyStateDisable,
  setEnrichData,
  setSchoolData,
  selectAddress,
  toggleClick,
  error = false,
  register,
  required,
  setLoder,
  addFriends,
  setIsClicked,
  setSearchTermData,
  handleMostPopular,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [stateDisable, setStateDisable] = useState(false);
  const [term, setTerm] = useState();
  const [term2, setTerm2] = useState();
  const [dbTerm, setDbTerm] = useState(term);
  const [count, setCount] = useState(-1);
  const [isSearchRest, setIsSearchRest] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState();
  const dispatch = useDispatch();
  const { getSelectedUser, courseTagObj, getResponse } = useSelector(
    (state) => state.collections
  );

  const searchRef = useRef(null);
  useEffect(() => {
    if (!courseTagObj || getResponse) {
      resetField();
    }
  }, [courseTagObj, getResponse]);
  useEffect(() => {
    setTerm2("");
    setFilteredData([]);
    setStateDisable(false);
  }, [getSelectedUser?.id]);

  useEffect(() => {
    setTerm2("");
    setFilteredData([]);
    setStateDisable(false);
  }, [toggleClick]);

  useEffect(() => {
    if (count === -1) {
      const timerId = setTimeout(() => {
        if (
          type === "courseSkills" ||
          type === "providerSkills" ||
          type === "providerServices" ||
          type === "courseseconSkills"
        ) {
          setLoder(true);
        }
        setDbTerm(term);
        if (
          type === "courseSkills" ||
          type === "providerSkills" ||
          type === "providerServices" ||
          type === "courseseconSkills" ||
          type === "getUsersForFriends"
        ) {
          setTimeout(() => {
            setLoder(false);
          }, 2000);
        }
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
    setCount(-1);
  }, [term]);

  useEffect(() => {
    setValue(name, term);
  }, [term]);

  useEffect(() => {
    setFilteredData([]);
    setTerm("");
    setStateDisable(false);
  }, []);

  const resetField = () => {
    setTerm("");
    setTerm2("");
    resetFields();
    setStateDisable(false);
    setFilteredData();
    //setTitleError("");
    // setDivError("");
    // setIndError("");
    dispatch(searchCourseTag());
    if (handleMostPopular) {
      handleMostPopular();
    }
  };

  useEffect(() => {
    if (
      type === "providerSkills" ||
      type === "providerServices" ||
      type === "searchedSkill" ||
      type === "courseSkills" ||
      type === "courseseconSkills"
    ) {
      dispatch(commonFetch(getSelectedUser?.id, dbTerm));
    } else {
      if (term?.length >= 3) {
        dispatch(commonFetch(dbTerm));
      }
    }
  }, [dbTerm]);

  const selectData = (item) => {
    if (setSearchTermData) {
      setSearchTermData();
    }

    if (item?.name) {
      setTerm2(item?.name);
    } else {
      setTerm2(item);
      dispatch(searchCourseTag(item));
    }
    dispatch(isLoading(true));
    setFilteredData([]);

    if (type === "titleId") {
      setTitleData(item);
      setValue("titleId", item?.name, { shouldValidate: true });
      setIsClicked(true);
      setFilteredData([]);
      setStateDisable(stateDisable);
    }
    if (type === "industryId") {
      setIndData(item);
      setValue("industryId", item?.name, { shouldValidate: true });
      setFilteredData([]);
      setStateDisable(stateDisable);
    }
    if (type === "divisionId") {
      setDivData(item);
      setFilteredData([]);
      setValue("divisionId", item?.name, { shouldValidate: true });
      setStateDisable(stateDisable);
    }

    if (type === "companyName") {
      setExpData(item);
      selectAddress(item);
      setValue("companyName", item?.name, { shouldValidate: true });
      setValue("address1", item?.address1, { shouldValidate: true });
      setValue("address2", item?.address2, { shouldValidate: true });
      setValue("country", item?.country, { shouldValidate: true });
      setValue("state", item?.state, { shouldValidate: true });
      setValue("city", item?.city, { shouldValidate: true });
      setValue("zip", item?.zip, { shouldValidate: true });
      setStateDisable(stateDisable);
      setCompanyStateDisable(stateDisable);
    }
    if (type === "name") {
      setEnrichData(item);
      selectAddress(item);
      setValue("name", item?.name, { shouldValidate: true });
      setValue("address1", item?.address1, { shouldValidate: true });
      setValue("address2", item?.address2, { shouldValidate: true });
      setValue("country", item?.country, { shouldValidate: true });
      setValue("state", item?.state, { shouldValidate: true });
      setValue("city", item?.city, { shouldValidate: true });
      setValue("zip", item?.zip, { shouldValidate: true });
      setStateDisable(stateDisable);
      setCompanyStateDisable(stateDisable);
    }
    if (type === "schoolName") {
      setSchoolData(item);
      selectAddress(item);
      setValue("schoolName", item?.name, { shouldValidate: true });
      setValue("address1", item?.address1, { shouldValidate: true });
      setValue("address2", item?.address2, { shouldValidate: true });
      setValue("country", item?.country, { shouldValidate: true });
      setValue("state", item?.state, { shouldValidate: true });
      setValue("city", item?.city, { shouldValidate: true });
      setValue("zip", item?.zip, { shouldValidate: true });
      setStateDisable(stateDisable);
      setCompanyStateDisable(stateDisable);
    }

    setStateDisable(!stateDisable);
  };

  const handleKeyPress = (e) => {
    setTerm(e.target.value);
    setTerm2(e.target.value);
    //setTitleError("");
    // setDivError("");
    // setIndError("");

    if (type && e.target.value) {
      setValue(type, e.target.value);
    }

    if (e.target.value.length === 1 && e.key === "Backspace") {
      setFilteredData();
    }

    if (e.key === "ArrowDown" && count !== filteredData.length) {
      setCount((pre) => pre + 1);
    }
    if (e.key === "ArrowUp" && count !== -1) {
      setCount((pre) => pre - 1);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (count !== -1 && count <= filteredData.length) {
        setTerm(filteredData[count]?.name);
        selectData(filteredData[count]);
      }
    }
  };

  useEffect(() => {
    const newFilter = dataFetched?.records?.filter((value) => {
      if (value?.name) {
        return value?.name?.toLowerCase().includes(term?.toLowerCase());
      } else {
        return value;
      }
    });

    setFilteredData(newFilter);
  }, [dataFetched]);

  const addFriendClick = (friendDetails) => {
    addFriends(friendDetails);
    resetField();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      setIsSearchRest(event.target.value);
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(event.target.value);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearchToggle = (e) => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    if (!isSearchRest) {
      setFilteredData([]);
      setIsSearchOpen(false);
      if (!stateDisable) {
        setTerm2("");
      }
    }
  }, [isSearchRest, stateDisable]);

  return (
    <div className='search common_search' onClick={handleSearchToggle}>
      <div className='searchInputs' ref={searchRef}>
        <input
          type='text'
          placeholder={placeholder}
          // id={id}
          name={name}
          className={error ? "form-control is-invalid" : "form-control"}
          value={term2}
          onInput={(e) => {
            setTerm(e.target.value);
            setTerm2(e.target.value);
            // setIsClicked(false);
          }}
          // onBlur={() => handleClicked()}
          register={
            typeof register === "function" && {
              ...register(name, {
                required: required === false ? false : true,
              }),
            }
          }
          onKeyDown={handleKeyPress}
          autoComplete='off'
          disabled={type === "getUsersForFriends" ? false : stateDisable}
        />

        {term === "" && term2 === "" ? (
          <span className='' key={Math.random()}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </span>
        ) : term !== "" && filteredData === undefined ? (
          <>
            <div className='spinner' />
          </>
        ) : (
          <span className='closeicon' key={Math.random()} onClick={resetField}>
            <i className='fa-solid fa-xmark'></i>
          </span>
        )}
      </div>
      {isSearchOpen ||
      type === "interested" ||
      type === "searchedTitles" ||
      type === "providerSkills"
        ? ""
        : type !== "getUsersForFriends" &&
          filteredData &&
          filteredData !== 0 && (
            <ul className=' border-0'>
              {filteredData.slice(0, 15)?.map((value, index) => {
                return (
                  <li
                    className={index === count ? "text-white bg-dark" : ""}
                    onClick={() => {
                      selectData(value);
                    }}
                    key={index}>
                    <span className='font-weight-bold'>
                      {value.name ? value.name : value}
                    </span>{" "}
                    {value.address1 &&
                      `${value.address1 ? value.address1 : ""} 
                    ${value.address2 === null ? "" : +", " + value.address2}`}
                  </li>
                );
              })}{" "}
            </ul>
          )}
      {type !== "getUsersForFriends"
        ? ""
        : filteredData &&
          type === "getUsersForFriends" &&
          filteredData !== 0 && (
            <ul className=' '>
              {filteredData.slice(0, 15)?.map((value, index) => {
                return (
                  <li
                    className={index === count ? "text-white bg-dark" : ""}
                    key={index}>
                    {" "}
                    <div className='chatProfile d-flex'>
                      <div className='ChatProImg'>
                        <div className='chatlist-ring'>
                          {value.imageUrl !== undefined &&
                          value.imageUrl !== null &&
                          value.imageUrl !== "" &&
                          value.imageUrl !== "imageUrl" ? (
                            <img src={value.imageUrl} alt='' />
                          ) : (
                            getProfileName(value)
                          )}
                        </div>
                      </div>
                      <div className='ChatName flex-row flex'>
                        <div>
                          <h4 className='flex'>{value.name} </h4>
                          <p>
                            {" "}
                            {value.city && value.state
                              ? value.city + ", " + value.state
                              : ""}
                          </p>
                        </div>
                        <span
                          className='AddinFrndlist'
                          onClick={() => addFriendClick(value)}>
                          {" "}
                          <i className='fa-light fa-circle-plus'></i>
                        </span>
                        {/*<span className="AddinFrndlist"  onClick={() => addFriends(value)}> <i className="fa-light fa-circle-plus"></i></span>*/}
                      </div>
                    </div>
                  </li>
                );
              })}{" "}
            </ul>
          )}
    </div>
  );
};
export default SearchField;

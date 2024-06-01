import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { swal, useForm, ShimmerCategoryList } from "../../utils/Packages";
import * as image from "../../resources/images";
import { getInterestByID } from "../../redux/actions/APIs";
import { userTitle } from "../../utils/DataObjects";

const SelectedInterest = ({
  tags,
  sktags,
  setTags,
  setSkTags,
  deleteInt,
  delId,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { getSelectedUser, interestById, userSkills, response } = useSelector(
    (state) => state.collections
  );
  const dispatch = useDispatch();

  const [array, setArray] = useState([]);
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);

  useEffect(() => {
    setArray(getSelectedUser?.interests);
    setArray1(getSelectedUser?.skills);
    setArray2(getSelectedUser?.titles);
  }, [getSelectedUser]);

  useEffect(() => {
    if (
      response?.success &&
      response?.objectName === "Interest" &&
      response?.records?.length > 0
    ) {
      setArray((oldArray) => [...oldArray, response?.records[0]]);
    } else if (
      response?.success &&
      response?.objectName === "Skill" &&
      response?.records?.length > 0
    ) {
      setArray1((oldArray) => [...oldArray, response?.records[0]]);
    } else if (
      response?.success &&
      response?.objectName === "Title" &&
      response?.records?.length > 0
    ) {
      setArray2((oldArray) => [...oldArray, response?.records[0]]);
    }
  }, [response]);

  const userId = getSelectedUser?.id;
  useEffect(() => {
    dispatch(getInterestByID(userId));
  }, [userId]);

  useEffect(() => {
    if (response?.success) {
      reset();
    }
  });

  const removeTags = (t) => {
    let x = userTitle?.find((ctag) => ctag?.key === t);

    setTags(tags.filter((tag) => tag !== t));
    // if (x) {
    //   setServicesTags([...servicesTags, x]);
    // }
  };

  const removeskillTags = (t) => {
    let x = userSkills?.records[0]?.find((ctag) => ctag?.key === t);

    setSkTags(sktags.filter((tag) => tag !== t));
    // if (x) {
    //   setSkillsTags([...userSkills?.records[0], x]);
    // }
  };

  return (
    <div className='RightbarPannel p-0'>
      <div className='heading'>
        <h2>
          <img src={image.Selectintest} alt='' className='mr-2' />
          My Selections
        </h2>
      </div>
      <div className={`PannelContent`}>
        <div className='selectedintrestlist'>
          <div className='profile_division'>
            <div className='Profileheading '>
              <h4
                data-toggle='collapse'
                href='#multiCollapseExample1'
                aria-expanded='true'
                className={
                  "panel-title heding-title justify-content-between p-2"
                }>
                <span className='Username'>
                  <span className=''>
                    {" "}
                    <i className='fa-solid fa-heart-circle-check mr-2'></i>
                    General Interest(s)
                  </span>
                </span>

                <i className='fa fa-chevron-down icon-show'></i>
              </h4>
            </div>

            <div
              className={"panel-collapse collapse show"}
              // className="panel-collapse collapse show"
              id='multiCollapseExample1'>
              <div className='intrestlisting'>
                {
                  //   interestById ? (
                  // interestById?.
                  array ? (
                    array?.map((value, ky) => (
                      <div className='instlistitem' key={ky}>
                        <div className='carditem '>
                          <h4 className='flex w-100'>
                            <span className='d-flex align-items-center pr-2'>
                              {/* {value.name.length > 12
                              ? `${value.name.substring(0, 12)}...`
                              : value.name} */}
                              {value?.name}
                            </span>{" "}
                            <span className='HurtCount'>
                              <i className='fa-solid fa-heart'></i> 84K
                            </span>
                            <button
                              className='crossmark'
                              disabled={delId === value?.id ? true : false}
                              onClick={() =>
                                deleteInt(value?.id, "interested")
                              }>
                              <i className='fa-solid fa-xmark'></i>
                            </button>
                          </h4>
                        </div>
                      </div>
                    ))
                  ) : (
                    <ShimmerCategoryList items={1} />
                  )
                }
              </div>
            </div>
            <div className='Profileheading '>
              <h4
                data-toggle='collapse'
                href='#multiCollapseExample2'
                aria-expanded='true'
                className={
                  "panel-title heding-title justify-content-between p-2"
                }>
                <span className='Username'>
                  <span className=''>
                    {" "}
                    <i className='fa-solid fa-arrow-up-right-dots mr-2'></i>{" "}
                    Self Improvement(s)
                  </span>
                </span>

                <i className='fa fa-chevron-down icon-show'></i>
              </h4>
            </div>
            <div
              className={"panel-collapse collapse show"}
              // className="panel-collapse collapse show"
              id='multiCollapseExample2'>
              <div className='intrestlisting'>
                {/* // sktags ? (
							// !!sktags?.length &&
              // sktags */}
                {array1?.map((value, ind) => (
                  <div className='instlistitem' key={ind}>
                    <div className='carditem '>
                      <h4 className='flex w-100'>
                        <span className='d-flex align-items-center pr-2'>
                          {/* {value?.name.length > 12
                            ? `${value?.name.substring(0, 12)}...`
                            : value?.name} */}
                          {value?.name}
                        </span>{" "}
                        <span className='HurtCount'>
                          <i className='fa-solid fa-heart'></i> 84K
                        </span>
                        <button
                          disabled={delId === value.id ? true : false}
                          onClick={() => deleteInt(value.id, "skills")}
                          className='crossmark'>
                          <i className='fa-solid fa-xmark'></i>
                        </button>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='Profileheading '>
              <h4
                data-toggle='collapse'
                href='#multiCollapseExample3'
                aria-expanded='true'
                className={
                  "panel-title heding-title justify-content-between p-2"
                }>
                <span className='Username'>
                  <span className=''>
                    {" "}
                    <i className='fa-solid fa-user-tie mr-2'></i>Career
                    Interest(s)
                  </span>
                </span>

                <i className='fa fa-chevron-down icon-show'></i>
              </h4>
            </div>

            <div
              className={"panel-collapse collapse show"}
              // className="panel-collapse collapse show"
              id='multiCollapseExample3'>
              <div className='intrestlisting'>
                {/* {tags ? (
							!!tags?.length &&
              tags */}
                {array2?.map((value, index) => (
                  <div className='instlistitem' key={index}>
                    <div className='carditem '>
                      <h4 className='flex w-100'>
                        <span className='d-flex align-items-center pr-2'>
                          {value?.name}
                        </span>{" "}
                        <span className='HurtCount'>
                          <i className='fa-solid fa-heart'></i> 84K
                        </span>
                        {/* <span onClick={() => removeTags(value)} className="crossmark">                      */}
                        <button
                          disabled={delId === value.id ? true : false}
                          onClick={() => deleteInt(value.id, "titles")}
                          className='crossmark'>
                          <i className='fa-solid fa-xmark'></i>
                        </button>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedInterest;

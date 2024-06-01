/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { swal, ShimmerCategoryList } from "../../utils/Packages";
import Home from "../Home";
import * as image from "../../resources/images";
import { Profile } from "../profile";
import { getInterestByID, deleteInterest } from "../../redux/actions/APIs";
import Spinner from "../base/Spinner";
import {
  totalViews,
  getProfileName,
  getName,
  getCapitalized,
} from "../../utils/helper";
import { PATHS } from "../../utils";

const InterestList = () => {
  let history = useHistory();
  const { getSelectedUser, interestById, loggedInUser } = useSelector(
    (state) => state.collections
  );
  const dispatch = useDispatch();
  const userId = getSelectedUser?.id;
  useEffect(() => {
    dispatch(getInterestByID(userId));
  }, [userId]);

  const parentLogin = (id) => {
    history.push(PATHS.INTERESTLIST_STR + id);
  };

  const deleteInt = (id) => {
    new swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(function (res) {
      if (res.isConfirmed) {
        dispatch(deleteInterest(getSelectedUser.id, id)).then(() => {
          new swal({
            title: "Deleted!",
            timer: 2000,
            text: "Record has been deleted.",
            type: "success",
          });
        });
      }
    });
  };

  let myImage = {
    Intellectual: image.leftmind,
    Physical: image.physicalicon,
    Emotinal: image.rightmind,
    Social: image.socialicon,
    Spiritual: image.spiritualicon,
  };

  return (
    <>
      <Home>
        <div className='LeftbarPannel p-0' id='School_information'>
          <div className='heading d-flex'>
            <h2>
              <i className='fa-regular fa-heart mr-2'></i>
              Interest
            </h2>
            <div className='VKprofile'>
              <div className='vkprofilename nav-item dropdown mr-0 d-flex align-items-center'>
                <div
                  className='nav-link dropdown-toggle px-0 p-0 d-flex align-items-center'
                  href='#'
                  aria-haspopup='true'
                  aria-expanded='false'
                  id=''
                  data-toggle='dropdown'>
                  {loggedInUser?.isParent === true ? (
                    getSelectedUser.imageUrl ? (
                      <img
                        alt='...'
                        className='rounded-circle'
                        src={getSelectedUser?.imageUrl}
                      />
                    ) : (
                      <span className='ProfileChild'>
                        {getProfileName(getSelectedUser)}
                      </span>
                    )
                  ) : (
                    ""
                  )}

                  {loggedInUser?.isParent === true && (
                    <>
                      {/* fullname */}
                      {getCapitalized(getName(getSelectedUser))}
                    </>
                  )}

                  {loggedInUser?.isParent === true ? (
                    <i className='fa-solid fa-angle-down ml-2'></i>
                  ) : (
                    ""
                  )}
                </div>
                {loggedInUser?.isParent === true ? (
                  <div
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='navbardrop'>
                    <a className='dropdown- ProfileDetails'>
                      <div
                        className='listMedia'
                        onClick={() => parentLogin(loggedInUser.id)}>
                        <span className='ProfileChild'>
                          {loggedInUser?.imageUrl ? (
                            <img
                              className='rounded-circle'
                              alt='...'
                              src={loggedInUser?.imageUrl}
                            />
                          ) : loggedInUser?.firstName ? (
                            <>{getProfileName(loggedInUser)}</>
                          ) : (
                            <Spinner />
                          )}
                        </span>
                        <div className='MenuProfile_name'>
                          <h4>{getCapitalized(getName(loggedInUser))}</h4>
                        </div>
                      </div>
                    </a>

                    {loggedInUser?.parent && (
                      <span className='dropdown- lowerProfile'>
                        <span className='ProfileChild'>
                          {getProfileName(loggedInUser?.parent)}
                        </span>
                        <span className='Menuprofile_name'>
                          {loggedInUser?.firstName ? (
                            getCapitalized(getName(loggedInUser?.parent))
                          ) : (
                            <Spinner />
                          )}
                        </span>
                      </span>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className='PannelContent basicdetailsform px-5 d-flex justify-content-between flex-wrap'>
            {interestById ? (
              interestById?.records?.map((value) => (
                <div className='instlistitem'>
                  <div className='carditem'>
                    <div className='intlikes ml-auto'>
                      <div className='cardDimension mr-3'>
                        <img
                          alt='...'
                          src={myImage[`${value?.dimension?.name}`]}
                        />
                      </div>
                      <div className='d-flex align-items-center hearticon'>
                        <img alt='...' src={image.Fill_heart} />
                        {totalViews(value?.interested)}
                      </div>
                    </div>
                    <div className='card_image'>
                      {value?.imageUrl && (
                        <img
                          alt='...'
                          className='mr-2 rounded-circle'
                          src={value.imageUrl}
                        />
                      )}
                    </div>
                    <div className='cardDescription p-2'>
                      <h4 className='d-flex justify-content-between'>
                        {value.name}
                      </h4>
                      <p> {value.description}</p>
                    </div>
                  </div>
                  <div className='tagslist d-flex align-items-center justify-content-between'>
                    <div className='tagtitle'>
                      <img alt='...' src={image.price_tag}></img>
                    </div>
                    <ul className='mr-auto'>
                      {value?.tags?.map((val) => (
                        <li>#{val}</li>
                      ))}
                    </ul>
                    <div className='BDsubmitbutton Addchieldbtn  addEnrichbtn  pr-10 m-0 p-1 mr-2'>
                      <strong
                        className='d-block'
                        onClick={() => deleteInt(value.id)}>
                        <i className='fa-solid fa-trash-can'></i>
                      </strong>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <ShimmerCategoryList items={1} categoryStyle='STYLE_SEVEN' />
            )}
          </div>
        </div>
        <Profile />
      </Home>
    </>
  );
};
export default InterestList;

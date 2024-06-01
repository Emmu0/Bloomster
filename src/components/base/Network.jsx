import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";

const Network = () => {
  return (
    <Home>
      <div className="d-flex w-100 VCharboard">
        <div className="LeftbarPannel p-0 overflow-auto" id="NetworkBoard">
          <div className="heading flex">
            <h2>
              <img src={image.message_color} className="mr-2" alt="" /> My
              Network Updates{" "}
            </h2>
            <div className="VKprofile">
              <div className="vkprofilename">
                <a href="#">
                  <i className="fa fa-user"></i>Sara Smith
                </a>
              </div>
            </div>
          </div>

          <div className="networkBoard">
            <div className="networkPost">
              <div className="w-100 d-flex">
                <div className="imageProfile mr-2">
                  <div className="chatlist-ring">
                    <img src={image.userProfile} alt="" />
                  </div>
                </div>
                <div className="postField">
                  <input
                    type="text"
                    placeholder="Share your thoughts..."
                    className="form-control"
                  />
                </div>
              </div>
              <div className="w-100 d-flex mt-2 submitPost pt-2 justify-content-between">
                <div className="articleUpload">
                  <span>
                    <i className="fa-regular fa-image mr-2"></i>Photo
                  </span>
                  <span>
                    <i className="fa-regular fa-file-pen mr-2"></i>Article
                  </span>
                </div>
                <span>
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block ml-auto w-100"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="networkBoard">
            <div className="networkPost">
              <div className="w-100 d-flex">
                <div className="imageProfile mr-2">
                  <div className="chatlist-ring">
                    <img src={image.userProfile} alt="" />
                  </div>
                </div>
                <div className="postField">
                  <h4>Adam Markram</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <p>
                    <span>
                      1W . Edited{" "}
                      <i className="fa-solid fa-earth-americas ml-1"></i>
                    </span>
                  </p>
                </div>
                <div className="ListIcon">
                  <span
                    className="threeDots"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id="navbardropdownAct1"
                    data-toggle="dropdown"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </span>

                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbardropdownAct1"
                  >
                    <li>
                      {" "}
                      <div className="ActivityCategory border-0">
                        <h4 className="d-flex align-items-center p-0 border-0">
                          <i className="fa-regular fa-comments mr-2"></i>{" "}
                          Activity
                        </h4>
                      </div>
                    </li>

                    <li>Week 1</li>
                    <li>Week 1</li>
                    <li>Week 1</li>
                    <li>Week 1</li>
                  </ul>
                </div>
              </div>
              <div className="w-100">
                <div className="timelinePost mt-2">
                  <p>
                    Today’s my Googleversary ! Officially been at Google for two
                    years It’s been an incredible journey of learning and
                    collaborating with some of the most inspiring people I’ve
                    ever known{" "}
                    <a href="#" className="postHashtags">
                      #google
                    </a>
                    <a href="#" className="postHashtags">
                      {" "}
                      #learning{" "}
                    </a>
                    <a href="#" className="postHashtags">
                      {" "}
                      #googleversary
                    </a>
                  </p>
                </div>
                <div className="timelinePost mt-3">
                  <p>
                    <i className="fa-light fa-thumbs-up mr-2"></i>
                    <a href="#">Britney Watson and 6 others</a>
                  </p>
                </div>
                <div className="timelineComment mt-3">
                  <span>
                    <a href="#">
                      <i className="fa-light fa-thumbs-up mr-2"></i>Like
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-comment-dots mr-2"></i>
                      Comments
                    </a>
                  </span>
                </div>
              </div>
              <div className="w-100 p-3 flex">
                <div className="imageProfile mr-2">
                  <div className="chatlist-ring">
                    <img src={image.userProfile} alt="" />
                  </div>
                </div>
                <div className="postField">
                  <input
                    type="text"
                    placeholder="Add a Comment..."
                    className="form-control"
                  />
                </div>
                <span>
                  <button
                    type="submit"
                    className="sendBtn login d-block ml-2 w-100"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>
                  </button>
                </span>
              </div>
              <div className="w-100">
                <span className="mostRelevant">
                  Most Relevant<i className="fa-solid fa-caret-down ml-2"></i>
                </span>
              </div>
              <div className="w-100 p-3 d-flex">
                <div className="imageProfile mr-2">
                  <div className="chatlist-ring">
                    <img src={image.userProfile} alt="" />
                  </div>
                </div>
                <div className="  d-flex flex-wrap w-100">
                  <div className="commentBox flex">
                    <div className="postField">
                      <h4>Adam Markram</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <p className="postComment">Well said. I totally agree</p>
                    </div>
                    <div className="ListIcon">
                      <span
                        className="threeDots"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="navbardropdownAct1"
                        data-toggle="dropdown"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbardropdownAct1"
                      >
                        <li>
                          {" "}
                          <div className="ActivityCategory border-0">
                            <h4 className="d-flex align-items-center p-0 border-0">
                              <i className="fa-regular fa-comments mr-2"></i>{" "}
                              Activity
                            </h4>
                          </div>
                        </li>

                        <li>Week 1</li>
                        <li>Week 1</li>
                        <li>Week 1</li>
                        <li>Week 1</li>
                      </ul>
                    </div>
                  </div>

                  <div className="timelineComment mt-3 border-0 p-0">
                    <span>
                      <a href="#">
                        <i className="fa-light fa-thumbs-up mr-2"></i>Like
                      </a>
                    </span>
                    |
                    <span>
                      <a href="#">
                        <i className="fa-light fa-thumbs-up mr-2"></i>Reply
                      </a>
                    </span>
                  </div>
                  <div className="w-100 p-3 flex">
                    <div className="imageProfile mr-2">
                      <div className="chatlist-ring">
                        <img src={image.userProfile} alt="" />
                      </div>
                    </div>
                    <div className="postField">
                      <input
                        type="text"
                        placeholder="Add a Comment..."
                        className="form-control"
                      />
                    </div>
                    <span>
                      <button
                        type="submit"
                        className="sendBtn login d-block ml-2 w-100"
                      >
                        <i className="fa-solid fa-paper-plane mr-2"></i>
                      </button>
                    </span>
                  </div>
                  <div className="w-100 p-3 d-flex">
                    <div className="imageProfile mr-2">
                      <div className="chatlist-ring">
                        <img src={image.userProfile} alt="" />
                      </div>
                    </div>
                    <div className="  d-flex flex-wrap w-100">
                      <div className="commentBox flex">
                        <div className="postField">
                          <h4>Adam Markram</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                          <p className="postComment">
                            Well said. I totally agree
                          </p>
                        </div>
                        <div className="ListIcon">
                          <span
                            className="threeDots"
                            aria-haspopup="true"
                            aria-expanded="false"
                            id="navbardropdownAct1"
                            data-toggle="dropdown"
                          >
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </span>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbardropdownAct1"
                          >
                            <li>
                              {" "}
                              <div className="ActivityCategory border-0">
                                <h4 className="d-flex align-items-center p-0 border-0">
                                  <i className="fa-regular fa-comments mr-2"></i>{" "}
                                  Activity
                                </h4>
                              </div>
                            </li>

                            <li>Week 1</li>
                            <li>Week 1</li>
                            <li>Week 1</li>
                            <li>Week 1</li>
                          </ul>
                        </div>
                      </div>
                      <div className="timelineComment mt-3 border-0 p-0">
                        <span>
                          <a href="#">
                            <i className="fa-light fa-thumbs-up mr-2"></i>Like
                          </a>
                        </span>
                        |
                        <span>
                          <a href="#">
                            <i className="fa-light fa-thumbs-up mr-2"></i>Reply
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="networkBoard">
            <div className="networkPost">
              <div className="w-100 d-flex">
                <div className="imageProfile mr-2">
                  <div className="chatlist-ring">
                    <img src={image.CourseProviderThumb} alt="" />
                  </div>
                </div>
                <div className="postField">
                  <h4>Britney Watson</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                  <p>
                    <span>
                      1W . Edited{" "}
                      <i className="fa-solid fa-earth-americas ml-1"></i>
                    </span>
                  </p>
                </div>
                <div className="ListIcon">
                  <span
                    className="threeDots"
                    aria-haspopup="true"
                    aria-expanded="false"
                    id="navbardropdownAct1"
                    data-toggle="dropdown"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </span>

                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbardropdownAct1"
                  >
                    <li>
                      {" "}
                      <div className="ActivityCategory border-0">
                        <h4 className="d-flex align-items-center p-0 border-0">
                          <i className="fa-regular fa-comments mr-2"></i>{" "}
                          Activity
                        </h4>
                      </div>
                    </li>

                    <li>Week 1</li>
                    <li>Week 1</li>
                    <li>Week 1</li>
                    <li>Week 1</li>
                  </ul>
                </div>
              </div>
              <div className="w-100">
                <div className="timelinePost mt-2">
                  <p>
                    Today’s my Googleversary ! Officially been at Google for two
                    years It’s been an incredible journey of learning and
                    collaborating with some of the most inspiring people I’ve
                    ever known{" "}
                    <a href="#" className="postHashtags">
                      #google
                    </a>
                    <a href="#" className="postHashtags">
                      {" "}
                      #learning
                    </a>
                    <a href="#" className="postHashtags">
                      {" "}
                      #googleversary
                    </a>
                  </p>
                </div>
                <div className="timelinePost mt-3">
                  <p>
                    <i className="fa-light fa-thumbs-up mr-2"></i>
                    <a href="#">Adam Markram and 6 others</a>
                  </p>
                </div>
                <div className="timelineComment mt-3">
                  <span>
                    <a href="#">
                      <i className="fa-light fa-thumbs-up mr-2"></i>Like
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fa-regular fa-comment-dots mr-2"></i>
                      Comments
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RightbarPannel p-0">
          <div className="heading">
            <h2>
              <img src={image.network_color} className="mr-2" alt="" /> My
              Network
            </h2>
          </div>
          <div className="tabgrid cbTabs m-0">
            <ul>
              <li className="tabs active-tabs">
                <i className="fa-regular fa-messages"></i> Friends
              </li>
              <li className="tabs">
                <i className="fa-regular fa-users"></i> Groups
              </li>
              <li className="tabs">
                <i className="fa-regular fa-user"></i> Providers
              </li>
            </ul>
          </div>
          <div className="ProListingwrap">
            <div className="SearchcHat">
              <div className="input-group placeholderseach">
                <div className="form-group">
                  <span className="">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="search..."
                    className="form-control"
                  />
                  <div className="searchIcon"></div>
                </div>
              </div>
            </div>
            <div className="chat-list">
              <div className="chatProfile d-flex ActiveChat">
                <div className="ChatProImg">
                  <div className="chatlist-ring">
                    <img src={image.userProfile} alt="" />
                  </div>
                </div>

                <div className="ChatName">
                  <h4 className="flex">
                    Adam Markram <span>13:00</span>
                  </h4>
                  <p>
                    <span>Sara: </span>Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className="chatProfile d-flex">
                <div className="ChatProImg">
                  <div className="chatlist-ring">
                    <img src={image.CourseProviderThumb} alt="" />
                  </div>
                </div>

                <div className="ChatName">
                  <h4 className="flex">
                    Britney Watson <span>13:00</span>
                  </h4>
                  <p>
                    <span>Sara: </span>Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className="chatProfile d-flex">
                <div className="ChatProImg">
                  <div className="chatlist-ring">
                    <img src={image.holisticJounrey} alt="" />
                  </div>
                </div>

                <div className="ChatName">
                  <h4 className="flex">
                    Christina Martin <span>13:00</span>
                  </h4>
                  <p>
                    <span>Sara: </span>Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Network;

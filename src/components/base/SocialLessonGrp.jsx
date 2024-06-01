import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import { Profile } from "../profile";

const SocialLessonGrp = () => {
  return (
    <Home>
      <div className="d-flex w-100 VCharboard">
        <div className="LeftbarPannel p-0" id="ChatBoard">
          <div className="heading flex">
            <h2>
              <img src={image.message_color} className="mr-2" alt="" /> Messages{" "}
            </h2>
            <div className="VKprofile">
              <div className="vkprofilename">
                <a href="#">
                  <i className="fa fa-user"></i>Sara Smith
                </a>
              </div>
            </div>
          </div>
          <div className="chatingBoard">
            <div className="chatProfile d-flex">
              <div className="ChatProImg">
                <div className="chatlist-ring">
                  <img src={image.userProfile} alt="" />
                </div>
              </div>
              <div className="chatbordProStrip flex">
                <div className="ChatName">
                  <h4 className="flex">College Friends</h4>
                  <span>Ankit, Pankaj, Mohit, Chandra, Vishal, Akanksha</span>
                </div>
                <div className="_1QVfy _3UaCz flex">
                  <div className="searchtxtChat">
                    <span className="">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                  <div className="conversation-menu-button">
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
                          <div
                            className="ActivityCategory border-0"
                            data-toggle="modal"
                            data-target="#schoolactivity23 "
                          >
                            <h4 className="d-flex align-items-center p-0 border-0">
                              <i className="fa-regular fa-comments mr-2"></i>
                              Group Information
                            </h4>
                          </div>
                        </li>

                        <li>
                          <i className="fa-light fa-trash"></i> clear message
                        </li>
                        <li>
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                          Exit Group
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MessageChatList">
              <div className="conversation-panel-messages">
                <div className="qh5tioqs">
                  <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                      <span>05/11/22</span>
                    </div>
                  </div>
                  <div className="focusable-list-item message-in">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10 AM</span>
                      <div className="copyable-text">
                        <span>Hi</span>
                      </div>
                    </div>
                  </div>
                  <div className="focusable-list-item message-out">
                    <div className="msg-container">
                      <div className="copyable-text">
                        <span>Hi</span>
                      </div>
                    </div>
                  </div>
                  <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                      <span>Yesturday</span>
                    </div>
                  </div>
                  <div className="focusable-list-item message-in">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <span>How are you</span>
                      </div>
                    </div>
                  </div>
                  <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                      <span>Today</span>
                    </div>
                  </div>
                  <div className="focusable-list-item message-out">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <span>i am good </span>
                      </div>
                    </div>
                  </div>
                  <div className="focusable-list-item message-in">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <span>Whats going on </span>
                      </div>
                    </div>
                  </div>
                  <div className="focusable-list-item message-out">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <span>
                          An online chat text message service allows you to
                          receive and reply to text messages from customers. All
                          a customer needs is their mobile phone
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                      <span>05/11/22</span>
                    </div>
                  </div>
                  <div className="focusable-list-item message-in">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <span>Hi</span>
                      </div>
                    </div>
                  </div>
                  <div className="focusable-list-item message-out">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <span>Hi</span>
                        <div className="_1beEj">
                          <div className="l7jjieqr">
                            <span>
                              <img src={image.chatbox_blue_tick} alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                      <span>Yesturday</span>
                    </div>
                  </div>
                  <div className="focusable-list-item message-in">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10</span>
                      <div className="copyable-text">
                        <div className="blue_color">
                          <span>Chandra </span>
                        </div>
                        <span>How are you guys</span>
                      </div>
                    </div>
                  </div>
                  <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                      <span>Today</span>
                    </div>
                  </div>
                  <div className="focusable-list-item message-out">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10 AM</span>
                      <div className="copyable-text">
                        <div className="green_color">
                          <span>Sara Smith</span>
                        </div>

                        <span>i am good, How are you all </span>
                        <div className="_1beEj">
                          <div className="l7jjieqr">
                            <span>
                              <img src={image.chatbox_grey_tick} alt="" />
                            </span>
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
                                    <i className="fa-regular fa-comments mr-2"></i>
                                    Message Activity
                                  </h4>
                                </div>
                              </li>

                              <li>
                                <i className="fa-light fa-pen-to-square"></i>
                                Edit
                              </li>
                              <li>
                                <i className="fa-light fa-flag mr-2"></i>Report
                              </li>
                              <li>
                                <i className="fa-light fa-trash-can mr-2"></i>
                                Delete
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="focusable-list-item message-in">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10 AM</span>
                      <div className="copyable-text">
                        <div className="blue_color">
                          <span>Ankit Agnihotri</span>
                        </div>
                        <span>Whats going on </span>
                        <div className="_1beEj"></div>
                      </div>
                    </div>
                  </div>
                  <div className="focusable-list-item message-out">
                    <div className="msg-container">
                      <span className="l7jjieqr">10:10 AM</span>
                      <div className="copyable-text">
                        <div className="green_color">
                          <span>Sara Smith</span>
                        </div>
                        <span>
                          An online chat text message service allows you to
                          receive and reply to text messages from customers. All
                          a customer needs is their mobile phone
                        </span>
                        <div className="_1beEj">
                          <div className="l7jjieqr">
                            <span>
                              <i className="fa-light fa-check"></i>
                            </span>
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
                                    <i className="fa-regular fa-comments mr-2"></i>
                                    Message Activity
                                  </h4>
                                </div>
                              </li>

                              <li>
                                <i className="fa-light fa-pen-to-square"></i>
                                Edit
                              </li>
                              <li>
                                <i className="fa-light fa-flag mr-2"></i>Report
                              </li>
                              <li>
                                <i className="fa-light fa-trash-can mr-2"></i>
                                Delete
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ChatFooter">
              <div className="_2cYbV">
                <div className="copyable-area flex">
                  <div className="basicShareContent d-flex">
                    <div className="emozi">
                      <span>
                        <i className="fa-regular fa-face-smile"></i>
                      </span>
                    </div>
                    <div className="shareTypeContent">
                      <span>
                        <i className="fa-regular fa-paperclip"></i>
                      </span>
                    </div>
                  </div>

                  <div className="inputchatBoxWrap d-flex">
                    <div className="inputChatbox">
                      <div className="input-Group">
                        <div className="input-form">
                          <input
                            type="text"
                            placeholder="Type a Message"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="SendChatTxt flex">
                      <span>
                        <i className="fa-solid fa-paper-plane-top"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="RightbarPannel p-0">
          <div className="heading">
            <h2>          
            <img src={image.network_color} className="mr-2" alt="" /> My Network
            </h2>
          </div>
          <div className="tabgrid cbTabs m-0">
          <ul>
            <li className='tabs'>
            <i className="fa-regular fa-user-group"></i>Friends
            </li>
            <li className="tabs active-tabs">
               <i className="fa-regular fa-users"></i> Groups
            </li>
            <li className='tabs'>
               <i className="fa-regular fa-user"></i> Providers
            </li>
          </ul>
          </div>
          <div className='ProListingwrap'>
          <div className='SearchcHat'>
            <div className='input-group placeholderseach'>
                <div className='form-group'> 
                  <span className="">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                    <input type="text" placeholder="search..." className='form-control' />
                    <div className="searchIcon"></div>
                </div>
                </div>
          </div>
          <div className='CreateNewGroup'>
            <div className='CNgroup'>
                <div className='chatlist-ring'><i className="fa-solid fa-circle-plus"></i></div>
                <h4> Create New Group</h4>
            </div>
          </div>
          <div className='chat-list'>
            <div className='chatProfile d-flex ActiveChat'>
          <div className='ChatProImg'>
          <div className='chatlist-ring'>
               <img src={image.userProfile} alt="" />
             </div>
          </div>
            
             <div className='ChatName'>
                <h4 className='flex'>Adam Markram <span>13:00</span></h4>
                <p><span>Sara: </span>Lorem ipsum dolor sit amet, consectetur</p>
             </div>

            </div>
            <div className='chatProfile d-flex'>
          <div className='ChatProImg'>
          <div className='chatlist-ring'>
               <img src={image.CourseProviderThumb} alt="" />
             </div>
          </div>
            
             <div className='ChatName'>
                <h4 className='flex'>Britney Watson <span>13:00</span></h4>
                <p><span>Sara: </span>Lorem ipsum dolor sit amet, consectetur</p>
             </div>

            </div>
            <div className='chatProfile d-flex'>
          <div className='ChatProImg'>
          <div className='chatlist-ring'>
               <img src={image.holisticJounrey} alt="" />
             </div>
          </div>
            
             <div className='ChatName'>
                <h4 className='flex'>Christina Martin <span>13:00</span></h4>
                <p><span>Sara: </span>Lorem ipsum dolor sit amet, consectetur</p>
             </div>

            </div>
          </div>
          </div>

         </div>   
        {/* <div className="RightbarPannel p-0">
          <div className="heading">
            <h2>
              <img src={image.network_color} className="mr-2" alt="" /> My
              Network
            </h2>
          </div>
          <div className="chatingBoard">
            <div className="tabgrid cbTabs m-0">
              <ul>
                <li className="tabs">
                  <i className="fa-regular fa-user-group"></i> Friends
                </li>
                <li className="tabs active-tabs">
                  <i className="fa-regular fa-users"></i> Groups
                </li>
                <li className="tabs">
                  <i className="fa-regular fa-user"></i> Providers
                </li>
              </ul>
            </div>
            <div className="ProListingwrap">
              <h5>New Group</h5>
              <div className="AddGroupName">
                <div className="input-Group">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Group Title..."
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="chat-list SelGropmember">
                <p className="ml-2 mt-2">* Select Member For Group</p>
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
                <div className="chatProfile d-flex">
                  <div className="ChatProImg">
                    <div className="chatlist-ring">
                      <img src={image.userProfile} alt="" />
                    </div>
                  </div>

                  <div className="ChatName">
                    <h4 className="flex">
                      Adam Markram
                      <div className="signupType m-0">
                        <label className="Selcheckbox pl-0">
                          <input
                            type="Checkbox"
                            id="Public"
                            name="Question"
                            value="PUBLIC"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </h4>
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
                      Britney Watson
                      <div className="signupType m-0">
                        <label className="Selcheckbox pl-0 pr-0">
                          <input
                            type="Checkbox"
                            id="Public"
                            name="Question"
                            value="PUBLIC"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </h4>
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
                      Christina Martin
                      <div className="signupType m-0">
                        <label className="Selcheckbox pl-0">
                          <input
                            type="Checkbox"
                            id="Public"
                            name="Question"
                            value="PUBLIC"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="ChatFooter">
              <div className="_2cYbV">
                <div className="form-group BDsubmitbutton d-flex m-0">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 mr-3 cancelbutton"
                  >
                    <i className="fa-solid fa-xmark mr-2"></i>Cancel
                  </button>
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 mr-3"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="hoosrSubModlPopup">
        <div className="modal fade" id="schoolactivity23" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content courseInformation schoolcourse">
              <div className="modal-header p-0">
                <div className="heading border-0 w-100">
                  <h2>
                    <img src={image.userProfile} className="mr-2" /> Group
                    Information
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body Subject_Curriculam">
                <div className="chatingBoard">
                  <div className="CGroupInfo">
                    <div className="CGInfoimage">
                      <img src={image.userProfile} alt="" />
                    </div>
                    <div className="CGNamedtl flex justify-content-center ">
                      <div className="CGNatitle w-75 p-0 position-relative">
                        <h3 className="text-center">Group Name </h3>
                        <div className="CGEditGroup ml-3">
                          <span>
                            <i className="fa-light fa-pencil"></i>{" "}
                          </span>
                        </div>
                        <div className="input-group d-none">
                          <div className="form-group">
                            <input
                              type="text"
                              maxLength=""
                              value="Group Name"
                              className={`form-control `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="GroupParicipent">
                      <p className="text-center mt-2">
                        Created By <span>You</span>
                      </p>
                    </div>
                  </div>
                  <div className="CGPrticipentList">
                    <h5 className="mt-3 mb-2">
                      <p>15 Participants</p>
                    </h5>
                    <div className="CGParticpntItems">
                      <div className="chat-list">
                        <div className="chatProfile d-flex ActiveChat">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <i className="fa-light fa-circle-plus"></i>
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">Add Participants</h4>
                          </div>
                        </div>
                        <div className="chatProfile d-flex ActiveChat">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <img src={image.userProfile} alt="" />
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">Adam Markram</h4>
                          </div>
                        </div>
                        <div className="chatProfile d-flex">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <img src={image.CourseProviderThumb} alt="" />
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">Britney Watson</h4>
                          </div>
                        </div>
                        <div className="chatProfile d-flex">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <img src={image.holisticJounrey} alt="" />
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">Christina Martin</h4>
                          </div>
                        </div>
                      </div>
                      <div className="chat-list">
                        <div className="chatProfile d-flex">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <img src={image.userProfile} alt="" />
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">
                              Adam Markram
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
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
                              Britney Watson
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0 pr-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
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
                              Christina Martin
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
                          </div>
                        </div>
                        <div className="chatProfile d-flex">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <img src={image.userProfile} alt="" />
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">
                              Adam Markram
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
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
                              Britney Watson
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0 pr-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
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
                              Christina Martin
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
                          </div>
                        </div>
                        <div className="chatProfile d-flex">
                          <div className="ChatProImg">
                            <div className="chatlist-ring">
                              <img src={image.userProfile} alt="" />
                            </div>
                          </div>

                          <div className="ChatName">
                            <h4 className="flex">
                              Adam Markram
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
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
                              Britney Watson
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0 pr-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
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
                              Christina Martin
                              <div className="signupType m-0">
                                <label className="Selcheckbox pl-0">
                                  <input
                                    type="Checkbox"
                                    id="Public"
                                    name="Question"
                                    value="PUBLIC"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer p-0 pl-3 pr-3">
                <div className="form-group BDsubmitbutton d-flex mt-2 mb-2">
                  <button
                    type="submit"
                    className="btn-blue btn-login d-block mb-5 ml-auto"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i>Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default SocialLessonGrp;

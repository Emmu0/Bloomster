import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import { Profile } from "../profile";

const Chatbox = () => {
  return (
    <Home>
      <div className="d-flex w-100 flex-wrap">
        <div className="breadCrum">
          <div className="heading border-0">
            <h2 className="flex border-0">
              <ul>
                <li>
                  {" "}
                  <i className="fa-solid fa-brain"></i> Intellectual{" "}
                  <span>&#62;</span>
                </li>
                <li>
                  CourseName <span>&#62;</span>
                </li>
                <li className="bActivepage">Week</li>
              </ul>
              <div className="VKprofile">
                <div className="vkprofilename">
                  <a href="#">
                    <i className="fa fa-user"></i>Sid02 Sid02
                  </a>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <div className="d-flex w-100 VCharboard">
          <div className="LeftbarPannel p-0" id="ChatBoard">
            <div className="heading flex">
              <h2>
                <img src={image.message_color} className="mr-2" alt="" />{" "}
                Messages{" "}
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
                    <h4 className="flex">Adam Markram</h4>
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
                              data-target="#Proifilrinfo "
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
                        <div className="copyable-text">
                          <span>i am good </span>
                        </div>
                      </div>
                    </div>
                    <div className="focusable-list-item message-in">
                      <div className="msg-container">
                        <div className="copyable-text">
                          <span>Whats going on </span>
                        </div>
                      </div>
                    </div>
                    <div className="focusable-list-item message-out">
                      <div className="msg-container">
                        <div className="copyable-text">
                          <span>
                            An online chat text message service allows you to
                            receive and reply to text messages from customers.
                            All a customer needs is their mobile phone
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
                        <div className="copyable-text">
                          <span>Hi</span>
                        </div>
                      </div>
                    </div>
                    <div className="focusable-list-item message-out">
                      <div className="msg-container">
                        <div className="copyable-text">
                          <span>Hi</span>
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
                                  <i className="fa-light fa-flag mr-2"></i>
                                  Report
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
                    <div className="_1-FMR_15WYQ focusable-list-item">
                      <div className="Dateitems">
                        <span>Yesturday</span>
                      </div>
                    </div>
                    <div className="focusable-list-item message-in">
                      <div className="msg-container">
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
                        <span className="l7jjieqr">10:10 AM</span>
                        <div className="copyable-text">
                          <span>i am good </span>
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
                                  <i className="fa-light fa-flag mr-2"></i>
                                  Report
                                </li>
                                <li>
                                  <i className="fa-light fa-trash-can mr-2"></i>
                                  Delete Message
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
                          <span>Whats going on </span>
                          <div className="_1beEj"></div>
                        </div>
                      </div>
                    </div>
                    <div className="focusable-list-item message-out">
                      <div className="msg-container">
                        <span className="l7jjieqr">10:10 AM</span>
                        <div className="copyable-text">
                          <span>
                            An online chat text message service allows you to
                            receive and reply to text messages from customers.
                            All a customer needs is their mobile phone
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
                                  <i className="fa-light fa-flag mr-2"></i>
                                  Report
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
          {/* <div className="LeftbarPannel p-0" id="ChatBoard">
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
                  <h4 className="flex">Adam Markram</h4>
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
                            <div className="ActivityCategory border-0" data-toggle="modal" data-target="#Proifilrinfo ">
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
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>Exit Group
                          </li>
                         
                        </ul>
                         </div>
                  </div>
                </div>
              </div>
             </div>
             <div className="MessageChatList">
             <div className="AcceptanceRequest">
                <div className="requestedProfile flex">
                  <div className="RequestedProimage">
                    <img src={image.userProfile} alt="" />
                  </div>
                  <div className="requProfilename">
                    <h3 className="mb-2">Adam Makram</h3>
                    <p><span><i className="fa-regular fa-people-roof"></i></span> 3 Mitual Friends</p>
                  </div>
                </div>
                <div className="requestProButtons">
                  <p><strong>Adam</strong> wants to connect with you</p>
                  <div className="ReqActbuttonList mt-3 flex">
                    <button className="btn-blue btn-login d-block cancelbutton">Block</button>
                    <button className="btn-blue btn-login d-block">Accept</button>
                  </div>
                </div>
              </div>
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
                        <span>Hello </span>
                        <div className="_1beEj">
                       
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
                <div className="smilyicon">{'			'}
			 
       <p className="text wrapped" id="regular">  		
<span className="emojiIcon">&#128512;</span>	
<span className="emojiIcon">&#128513;</span>
<span className="emojiIcon">&#128514;</span>
<span className="emojiIcon">&#128515;</span>
<span className="emojiIcon">&#128516;</span>
<span className="emojiIcon">&#128517;</span>
<span className="emojiIcon">&#128518;</span>
<span className="emojiIcon">&#128519;</span>
<span className="emojiIcon">&#128520;</span>
<span className="emojiIcon">&#128521;</span>
<span className="emojiIcon">&#128522;</span>
<span className="emojiIcon">&#128523;</span>
<span className="emojiIcon">&#128524;</span>
<span className="emojiIcon">&#128525;</span>
<span className="emojiIcon">&#128526;</span>
<span className="emojiIcon">&#128527;</span>
<span className="emojiIcon">&#128528;</span>
<span className="emojiIcon">&#128529;</span>
<span className="emojiIcon">&#128530;</span>
<span className="emojiIcon">&#128531;</span>
<span className="emojiIcon">&#128532;</span>
<span className="emojiIcon">&#128533;</span>
<span className="emojiIcon">&#128534;</span>
<span className="emojiIcon">&#128535;</span>
<span className="emojiIcon">&#128536;</span>
<span className="emojiIcon">&#128537;</span>
<span className="emojiIcon">&#128538;</span>
<span className="emojiIcon">&#128539;</span>
<span className="emojiIcon">&#128540;</span>
<span className="emojiIcon">&#128541;</span>
<span className="emojiIcon">&#128542;</span>
<span className="emojiIcon">&#128543;</span>
<span className="emojiIcon">&#128544;</span>
<span className="emojiIcon">&#128545;</span>
<span className="emojiIcon">&#128546;</span>
<span className="emojiIcon">&#128547;</span>
<span className="emojiIcon">&#128548;</span>
<span className="emojiIcon">&#128549;</span>
<span className="emojiIcon">&#128550;</span>
<span className="emojiIcon">&#128551;</span>
<span className="emojiIcon">&#128552;</span>
<span className="emojiIcon">&#128553;</span>
<span className="emojiIcon">&#128554;</span>
<span className="emojiIcon">&#128555;</span>
<span className="emojiIcon">&#128556;</span>
<span className="emojiIcon">&#128557;</span>
<span className="emojiIcon">&#128558;</span>
<span className="emojiIcon">&#128559;</span>
<span className="emojiIcon">&#128560;</span>
<span className="emojiIcon">&#128561;</span>
<span className="emojiIcon">&#128562;</span>
<span className="emojiIcon">&#128563;</span>
<span className="emojiIcon">&#128564;</span>
<span className="emojiIcon">&#128565;</span>
<span className="emojiIcon">&#128566;</span>
<span className="emojiIcon">&#128567;</span>
<span className="emojiIcon">&#128568;</span>
<span className="emojiIcon">&#128569;</span>
<span className="emojiIcon">&#128570;</span>
<span className="emojiIcon">&#128571;</span>
<span className="emojiIcon">&#128572;</span>
<span className="emojiIcon">&#128573;</span>
<span className="emojiIcon">&#128574;</span>
<span className="emojiIcon">&#128575;</span>
<span className="emojiIcon">&#128576;</span>
<span className="emojiIcon">&#128577;</span>
<span className="emojiIcon">&#128578;</span>
<span className="emojiIcon">&#128579;</span>
<span className="emojiIcon">&#128580;</span>
       </p>
               </div>
              </div>
            </div>
          </div>
        </div> */}
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
                  <i className="fa-regular fa-user-group"></i> Friends
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
                <div className="chatProfile d-flex">
                  <div className="ChatProImg">
                    <div className="chatlist-ring">
                      <img
                        src="/static/media/holistic_journey.074d0cdf56778c1f2da2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="ChatName flex-row flex">
                    <div>
                      <h4 className="flex">Christina Martin </h4>
                      <p>User@gmail.com</p>
                    </div>
                    <span className="AddinFrndlist">
                      {" "}
                      <i className="fa-light fa-circle-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hoosrSubModlPopup">
          <div className="modal fade" id="Proifilrinfo" role="dialog">
            <div className="modal-dialog modal-lg">
              <div className="modal-content courseInformation schoolcourse">
                <div className="modal-header p-0">
                  <div className="heading border-0 w-100">
                    <h2>
                      <img src={image.userProfile} className="mr-2" /> Profile
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
                          <h3 className="text-center">Adam Markram </h3>
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
                      <div className="CGPrifileBlock">
                        <ul>
                          <li>
                            <i className="fa-solid fa-trash-can mr-2"></i>Delete
                            Contact
                          </li>
                          <li>
                            <i className="fa-solid fa-ban mr-2"></i>Block
                            Contact
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
      </div>
    </Home>
  );
};

export default Chatbox;

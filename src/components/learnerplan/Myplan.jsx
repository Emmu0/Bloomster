import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import RoundProgress from "../controls/RoundProgress";
import { Rating } from "react-simple-star-rating";

const Myplan = () => {
  return (
    <div>
      <Home>
        <div className="d-flex flex-wrap SpecialLeftpanel w-100">
          <div className="d-flex w-100 align-items-start overflow-visible">
            <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100 ">
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                  <h2
                    data-toggle="collapse"
                    class="m-0 pt-0 pb-1 w-100 flex justify-content-between "
                  >
                    <span>
                      {" "}
                      <img src={image.doc_icon} className="mr-2 rocket_img_" alt="" />
                       Plan Name
                    </span>
                  </h2>
                </div>
                <div className="learner_plan setup_two ljpopups setup_three">
                  <div className="gridSection coursepagelist pt-2">
                  <div class="learnerplanOrderone">
                 
                  <div class="Selected_paced mt-3 mb-3 pb-2 flexone ">
                  <p className="p-0"><span>Sessions per week: </span>Two   (2) </p>
                  <p className="p-0 duration_Time"><span>Duration per session: </span> 30 minutes</p>
                  </div>
                  </div>
                  <div className="Leaner_plan_Courselist mt-3">
                
                  <div className="JourneyCoursecard newCourseCard">
                    <div class="GridCardTitle">
                      <h3 data-toggle="modal" data-target="#datapage">
                        <div class="pointer cardSubtitles">
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                          Understanding Our Social Identities
                          <span>
                            <i class="fa-solid fa-up-right-from-square"></i>
                          </span>
                        </div>
                        <div class="priceWrap w-auto p-0">
                              <button class="btn-blue btn-login d-block w-100 m-0 w-auto">
                                <i class="fa-solid fa-paper-plane mr-2"></i>
                                Enroll
                              </button>
                            </div>
                        
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
                      <div className="Gridsocialsec">
                        <div className="GridiamgeCard">
                          <div className="Gridimage courseCardImg">
                            <img src={image.mathMatics} alt="" />
                          </div>
                          <div className=" ratepopupp position-relative">
                            <div className="RatingWrap1  flex  dropdown-toggle mt-2 justify-content-center">
                              <Rating
                                initialValue={2}
                                transition={false}
                                allowHalfIcon
                                readonly
                                allowHover={false}
                                size={20}
                                emptyColor="#ccc"
                                fillColorArray={[
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                ]}
                              />
                              <span className="ratingCount">
                                <i className="fa-solid fa-angle-down ml-1" />{" "}
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                       
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
                                    <div>Goals on Goals on Goals!</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S2</span>
                                    <div>How Well Do We Know Ourselves?..</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S3</span>
                                    <div>Not all goals can be winners.....</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S4</span>
                                    <div>But What About the Perks?</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className=""
                          >
                            <div>
                              <p className="p-0">
                                <span class="SCourseLevel">
                                  <img src={image.CourseTitleIcon} className="mr-2" alt="" />Social & Cultural Awareness</span>
                              </p>
                            </div>
                       <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div> 
                            
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="JourneyCoursecard newCourseCard">
                    <div class="GridCardTitle">
                      <h3 data-toggle="modal" data-target="#datapage">
                        <div class="pointer cardSubtitles">
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                          Understanding Our Social Identities
                          <span>
                            <i class="fa-solid fa-up-right-from-square"></i>
                          </span>
                        </div>
                        <div class="priceWrap w-auto p-0">
                              <button class="btn-blue btn-login d-block w-100 m-0 w-auto">
                                <i class="fa-solid fa-paper-plane mr-2"></i>
                                Enroll
                              </button>
                            </div>
                        
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
                      <div className="Gridsocialsec">
                        <div className="GridiamgeCard">
                          <div className="Gridimage courseCardImg">
                            <img src={image.mathMatics} alt="" />
                          </div>
                          <div className=" ratepopupp position-relative">
                            <div className="RatingWrap1  flex  dropdown-toggle mt-2 justify-content-center">
                              <Rating
                                initialValue={2}
                                transition={false}
                                allowHalfIcon
                                readonly
                                allowHover={false}
                                size={20}
                                emptyColor="#ccc"
                                fillColorArray={[
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                ]}
                              />
                              <span className="ratingCount">
                                <i className="fa-solid fa-angle-down ml-1" />{" "}
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                       
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
                                    <div>Goals on Goals on Goals!</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S2</span>
                                    <div>How Well Do We Know Ourselves?..</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S3</span>
                                    <div>Not all goals can be winners.....</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S4</span>
                                    <div>But What About the Perks?</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className=""
                          >
                            <div>
                              <p className="p-0">
                                <span class="SCourseLevel">
                                  <img src={image.CourseTitleIcon} className="mr-2" alt="" />Social & Cultural Awareness</span>
                              </p>
                            </div>
                       <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div> 
                            
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="JourneyCoursecard newCourseCard">
                    <div class="GridCardTitle">
                      <h3 data-toggle="modal" data-target="#datapage">
                        <div class="pointer cardSubtitles">
                          <img
                            src={image.mortarboard}
                            alt=""
                            className="mr-2"
                          />
                          Understanding Our Social Identities
                          <span>
                            <i class="fa-solid fa-up-right-from-square"></i>
                          </span>
                        </div>
                        <div class="priceWrap w-auto p-0">
                              <button class="btn-blue btn-login d-block w-100 m-0 w-auto">
                                <i class="fa-solid fa-paper-plane mr-2"></i>
                                Enroll
                              </button>
                            </div>
                        
                      </h3>
                    </div>

                    <div className="Gridcard SocialGridcard border-0 mt-0 ">
                      <div className="Gridsocialsec">
                        <div className="GridiamgeCard">
                          <div className="Gridimage courseCardImg">
                            <img src={image.mathMatics} alt="" />
                          </div>
                          <div className=" ratepopupp position-relative">
                            <div className="RatingWrap1  flex  dropdown-toggle mt-2 justify-content-center">
                              <Rating
                                initialValue={2}
                                transition={false}
                                allowHalfIcon
                                readonly
                                allowHover={false}
                                size={20}
                                emptyColor="#ccc"
                                fillColorArray={[
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                  "#f17a45",
                                ]}
                              />
                              <span className="ratingCount">
                                <i className="fa-solid fa-angle-down ml-1" />{" "}
                                <span className="ml-1">3</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="GridDetails">
                       
                        <div className="coursecardnav flex">
                          <ul className="w-60 d-flex">
                            <li>
                              <img src={image.gensettings} alt="" />
                              Parent Tools
                            </li>
                            <li>
                              <img
                                src={image.Electiclistiocn}
                                className="electriIcon"
                                alt=""
                              />
                              Learner Center
                            </li>
                          </ul>
                          <ul className="w-30 flex justify-content-end">
                            <li>
                              <img src={image.rewardimg} alt="" />
                              Reward
                            </li>
                            <li>
                              <span className="Score_points">
                                <span className="score_bedge">
                                  <span class="earnnoCoin">0</span>
                                  <img src={image.score_badge} alt="" />
                                </span>
                                <span class="earnnoCoin">0</span>
                                <img src={image.money_bag} alt="" />
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="gridActivity">
                          <div className="activityListitems mt-2">
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S1</span>
                                    <div>Goals on Goals on Goals!</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S2</span>
                                    <div>How Well Do We Know Ourselves?..</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S3</span>
                                    <div>Not all goals can be winners.....</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                            <div className="Activity selfmadeActivity weeklyActivity cardLock">
                              <div className="ActivitycrdTitle activityCap">
                                <h3 className="ActivyTitleName">
                                  <div className="pointer">
                                    <span className="ThumnailTeacher">S4</span>
                                    <div>But What About the Perks?</div>
                                  </div>
                                  <div className="dropdownlistmodl flex">
                                    <div className="position-relative Coursecompprcent">
                                      <p className="">
                                        <RoundProgress
                                          data={10}
                                          className="m-1"
                                        />
                                      </p>
                                    </div>
                                    <strong
                                      class="Activitymenubar ml-2 pointer "
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      id="barlistdropdown"
                                      data-toggle="dropdown"
                                    >
                                      {" "}
                                      <i class="fa-solid fa-bars"></i>
                                    </strong>
                                    <ul
                                      class="dropdown-menu dropdown-menu-end"
                                      aria-labelledby="barlistdropdown"
                                    >
                                      <li class="pointer">
                                        <p class="pointer">
                                          <img
                                            src="/static/media/Seriesicon.a32722861d712e5109ed.png"
                                            alt=""
                                          />{" "}
                                          Series
                                        </p>
                                      </li>
                                      <li class="pointer">
                                        <p>
                                          <img
                                            src="/static/media/SceneRefrence.e51d5930c91333126fdd.png"
                                            alt=""
                                          />
                                          References
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="GridCardTitle border-0">
                          <h3
                            data-toggle="modal"
                            data-target="#datapage"
                            className=""
                          >
                            <div>
                              <p className="p-0">
                                <span class="SCourseLevel">
                                  <img src={image.CourseTitleIcon} className="mr-2" alt="" />Social & Cultural Awareness</span>
                              </p>
                            </div>
                       <div className="position-relative Coursecompprcent">
                          <p className="p-0">
                            <span>
                              <RoundProgress data={10} className="m-1" />
                            </span>

                            <span className="courserelatedCertificate"></span>
                          </p>
                        </div> 
                            
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
        
                </div>
              </div>
            </div>
            <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel setuptwo_rPnl">
              <div className="heading p-0 border-0">
                <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                  <h2
                    data-toggle="collapse"
                    class="m-0 pt-0 pb-1 w-100 flex justify-content-between "
                  >
                    <span>
                      {" "}
                      <img src={image.my_plan_icons} className="mr-2" alt="" />
                      My Plan
                    </span>
                  </h2>
                </div>
              </div>
              <div class="learning_plan_summry  ScenecerelateddQuiz p-0  setuptwo_rPnl">
                <div class="learner_Planrighpnl pb-3">
                  <div class="lerner_jounry_plan m-0">
                    <div
                      class="Multi_learner_plan"
                      data-toggle="collapse"
                      href="#learner_planone"
                      aria-expanded="true"
                    >
                      <h5 class="flex">
                        <i class="fa-light fa-rocket-launch mr-2"></i>Plan:
                        <p class="timint_date mr-auto ml-2 mt-1">
                          <span>May 20, 2024 - Sep 8, 2024</span>
                        </p>
                        <p className="multiplelening_dpdwn learner_pLan_dropdown">
                        <span
                         aria-haspopup='true'
                          aria-expanded='false'
                          id='lernercennter'
                           className=''
                           data-toggle='dropdown'
                        >

                         <i class="fa-solid fa-bars mr-3"></i>
                        </span>
                        <ul
                                className='dropdown-menu lPDropdwnList dropdown-menu-end'
                                aria-labelledby='lernercennter'>
                                <li
                                  className={`pointer _Course Summary`}
                                 >
                                  <p>
                                    {/* <img src={image.CourseTitleIcon} alt='' className="mr-2" /> */}
                                    <i class="fa-light fa-pencil active mr-2"></i>
                                    Edit Plan
                                  </p>
                                </li>
                                <li
                                  className={`pointer _Course Summary`}
                                 >
                                  <p>
                                    <img src={image.courseScheduleIcon} alt='' className="mr-2" />
                                    Course schedule
                                  </p>
                                </li>
                              
                           </ul>
                        <span>
                          <i class="fa-regular fa-chevron-down"></i>
                        </span>
                        </p>
                       
                      </h5>
                      <div className="flexone MultiplanPacedesc">
                      <div className="flexone">
                      <p className="mr-3">Sessions:<strong> Two(2)</strong></p>
                      <p>Duration:<strong> 30 minutes</strong></p>
                      </div>
                      <div className="ml-3">
                      {/* <span>
                          {" "}
                          <i class="fa-light fa-image-polaroid mr-3"></i>
                        </span>
                        <span>
                          <i class="fa-light fa-pencil active mr-3"></i>
                        </span> */}
                      </div>
                      </div>
                    </div>
                    <div
                      class="panel-collapse collapse show Plandetal_collapse"
                      id="learner_planone"
                    >
                      <div class="LPrpcomponent ">
                        <div class="d-flex align-items-center plan_course_name">
                          <div class="User_inisal mr-2">
                            <i class="fa-solid fa-graduation-cap"></i>
                          </div>
                          <div class="userPLan_start">
                            <p class="outCometxt">Course:<span className="inprogress_Course complete_course">Complete</span></p>
                            <p class="flexone">
                              <div
                                data-for="Making Responsible Choices"
                                data-event-off=""
                                data-tip="true"
                              >
                                <strong class="pointer Course_NamePland">
                                  Making Responsible Choices
                                </strong>
                              </div>
                              <span class="pointer">
                                <i class="fa-solid fa-up-right-from-square"></i>
                              </span>
                            </p>
                            <p class="timint_date">
                              May 20, 2024 - June 16, 2024{" "}
                              <span><i class="fa-light fa-calendar ml-3 p-0"></i></span>
                              <a href="javascript:void(0)" class="ml-2">
                                Show details
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class="flexone LPdestination_mark">
                          <div class="User_inisal mr-2">
                            {" "}
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </div>
                          <div class="userPLan_start course_destination">
                            <p class="outCometxt">Outcome:</p>
                            <p>
                              <div
                                data-for="is starting to make more responsible choices!"
                                data-event-off=""
                                data-tip="true"
                              >
                                <span>
                                  Viratrr is starting to make more responsible
                                  choices!
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="LPrpcomponent ">
                        <div class="d-flex align-items-center plan_course_name">
                          <div class="User_inisal mr-2">
                            <i class="fa-solid fa-graduation-cap"></i>
                          </div>
                          <div class="userPLan_start">
                            <p class="outCometxt">Course: <span className="inprogress_Course">In Progress</span></p>
                            <p class="flexone">
                              <div
                                data-for="Building Leadership Skills"
                                data-event-off=""
                                data-tip="true"
                              >
                                <strong class="pointer Course_NamePland">
                                  Building Leadership Skills
                                </strong>
                              </div>
                              <span class="pointer">
                                <i class="fa-solid fa-up-right-from-square"></i>
                              </span>
                            </p>
                            <p class="timint_date">
                              May 20, 2024 - Jun 16, 2024{" "}
                              <span><i class="fa-light fa-calendar ml-3 p-0"></i></span>
                              <a href="javascript:void(0)" class="ml-2">
                                Show details
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class="flexone LPdestination_mark">
                          <div class="User_inisal mr-2">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </div>
                          <div class="userPLan_start course_destination">
                            <p class="outCometxt">Outcome:</p>
                            <p>
                              <div
                                data-for="can demonstrate leadership behavior!"
                                data-event-off=""
                                data-tip="true"
                              >
                                <span>
                                  Viratrr can demonstrate leadership behavior!
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="Contionur_Arrow">
                        <h4 class="flexone align-items-center">
                          <span class="p-0 mr-2 flagchecked">
                            <i class="fa-solid fa-flag-checkered"></i>
                          </span>
                          Viratrr has grown through this learning plan and is
                          ready for a new set of courses!
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="lerner_jounry_plan m-0">
                    <div
                      class="Multi_learner_plan"
                      data-toggle="collapse"
                      href="#learner_plantwo"
                      aria-expanded="true"
                    >
                      <h5 class="flex">
                        <i class="fa-light fa-rocket-launch mr-2"></i>Plan:
                        <p class="timint_date mr-auto ml-2 mt-1">
                          <span>May 20, 2024 - Sep 8, 2024</span>
                        </p>
                        <p className="multiplelening_dpdwn learner_pLan_dropdown">
                        <span
                         aria-haspopup='true'
                          aria-expanded='false'
                          id='lernercennter'
                           className=''
                           data-toggle='dropdown'
                        >

                         <i class="fa-solid fa-bars mr-3"></i>
                        </span>
                        <ul
                                className='dropdown-menu lPDropdwnList dropdown-menu-end'
                                aria-labelledby='lernercennter'>
                                <li
                                  className={`pointer _Course Summary`}
                                 >
                                  <p>
                                    {/* <img src={image.CourseTitleIcon} alt='' className="mr-2" /> */}
                                    <i class="fa-light fa-pencil active mr-2"></i>
                                    Edit Plan
                                  </p>
                                </li>
                                <li
                                  className={`pointer _Course Summary`}
                                 >
                                  <p>
                                    <img src={image.courseScheduleIcon} alt='' className="mr-2" />
                                    Course Schedule
                                  </p>
                                </li>
                              
                           </ul>
                        <span>
                          <i class="fa-regular fa-chevron-down"></i>
                        </span>
                        </p>
                       
                      </h5>
                      <div className="flexone MultiplanPacedesc">
                      <div className="flexone">
                      <p className="mr-3">Sessions:<strong>Two(2)</strong></p>
                      <p>Duration:<strong>30 minutes</strong></p>
                      </div>
                      <div className="ml-3">
                      {/* <span>
                          {" "}
                          <i class="fa-light fa-image-polaroid mr-3"></i>
                        </span>
                        <span>
                          <i class="fa-light fa-pencil active mr-3"></i>
                        </span> */}
                      </div>
                      </div>
                    </div>
                    <div
                      class="panel-collapse collapse Plandetal_collapse"
                      id="learner_plantwo"
                    >
                      <div class="LPrpcomponent ">
                        <div class="d-flex align-items-center plan_course_name">
                          <div class="User_inisal mr-2">
                            <i class="fa-solid fa-graduation-cap"></i>
                          </div>
                          <div class="userPLan_start">
                            <p class="outCometxt">Course:</p>
                            <p class="flexone">
                              <div
                                data-for="Making Responsible Choices"
                                data-event-off=""
                                data-tip="true"
                              >
                                <strong class="pointer Course_NamePland">
                                  Making Responsible Choices
                                </strong>
                              </div>
                              <span class="pointer">
                                <i class="fa-solid fa-up-right-from-square"></i>
                              </span>
                            </p>
                            <p class="timint_date">
                              May 20, 2024 - Jun 16, 2024{" "}
                              <span><i class="fa-light fa-calendar ml-2 p-0"></i></span>
                              <a href="javascript:void(0)" class="ml-2">
                                Show details
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class="flexone LPdestination_mark">
                          <div class="User_inisal mr-2">
                            {" "}
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </div>
                          <div class="userPLan_start course_destination">
                            <p class="outCometxt">Outcome:</p>
                            <p>
                              <div
                                data-for="is starting to make more responsible choices!"
                                data-event-off=""
                                data-tip="true"
                              >
                                <span>
                                  Viratrr is starting to make more responsible
                                  choices!
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="LPrpcomponent ">
                        <div class="d-flex align-items-center plan_course_name">
                          <div class="User_inisal mr-2">
                            <i class="fa-solid fa-graduation-cap"></i>
                          </div>
                          <div class="userPLan_start">
                            <p class="outCometxt">Course:</p>
                            <p class="flexone">
                              <div
                                data-for="Building Leadership Skills"
                                data-event-off=""
                                data-tip="true"
                              >
                                <strong class="pointer Course_NamePland">
                                  Building Leadership Skills
                                </strong>
                              </div>
                              <span class="pointer">
                                <i class="fa-solid fa-up-right-from-square"></i>
                              </span>
                            </p>
                            <p class="timint_date">
                              June 17, 2024 - July 14, 2024{" "}
                              <span><i class="fa-light fa-calendar ml-2 p-0"></i></span>
                              <a href="javascript:void(0)" class="pl-2 ml-2">
                                Show details
                              </a>
                            </p>
                          </div>
                        </div>
                        <div class="flexone LPdestination_mark">
                          <div class="User_inisal mr-2">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                          </div>
                          <div class="userPLan_start course_destination">
                            <p class="outCometxt">Outcome:</p>
                            <p>
                              <div
                                data-for="can demonstrate leadership behavior!"
                                data-event-off=""
                                data-tip="true"
                              >
                                <span>
                                  Viratrr can demonstrate leadership behavior!
                                </span>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="Contionur_Arrow ">
                        <h4 class="flexone align-items-center">
                          <span class="p-0 mr-2 flagchecked">
                            <i class="fa-solid fa-flag-checkered"></i>
                          </span>
                          Viratrr has grown through this learning plan and is
                          ready for a new set of courses!
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </Home>
    </div>
  );
};

export default Myplan;

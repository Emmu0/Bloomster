import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import DoughnutChart from "../home/DoughnutChart";
import RoundProgress from "../controls/RoundProgress";
const Enrilledandprogress = () => {
  let data = [
    {
      label: "Self Awareness",
      outer: 20,
      inner: 10,
      differnece: 10,
    },
    {
      label: "Self Regulation",
      outer: 20,
      inner: 10,
      differnece: 10,
    },
    {
      label: "Emotional Intelligence",
      outer: 20,
      inner: 10,
      differnece: 10,
    },
    {
      label: "Resilience",
      outer: 20,
      inner: 10,
      differnece: 10,
    },
  ];
  return (
    <div>
      <Home>
        <div className="d-flex flex-wrap SpecialLeftpanel w-100">
          <div className="d-flex w-100 align-items-start overflow-visible">
            <div className="LeftbarPannel p-0" id="">
              <div className="CourseCardWrapper fullHeight100"></div>
            </div>

            <div className="RightbarPannel p-0 rightpannelSticky enrolledCourseAssetsstr">
              <div className="heading">
                <h2 className="flex">
                  <span className="d-flex align-items-center">
                    <img
                      src={image.DiemensionProgress}
                      alt=""
                      className="mr-2"
                    />
                    Emotional: Progress
                  </span>
                  <div className="form-check form-switch m-0 flex">
                    <label
                      className="form-check-label pointer"
                      for="flexSwitchCheckDefault"
                    >
                      Progress
                    </label>
                    <input
                      className="form-check-input avltogglebutton pointer"
                      type="radio"
                      checked
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </h2>
              </div>
          
              <div className="Rpprogresbar">
                <div className="fusionchart position-relative text-center">
                  {/* <DoughnutChart doughnutData={data}></DoughnutChart> */}
                  <img src={image.donutchart_image} alt="" />
                  {/* <div className="chartprofilemenu">
                    <img src={image.userProfile} alt="" />
                  </div> */}

                  <div className="text-dark bg-secondary fw-bold  chartprofilemenu">
                    RP
                  </div>
                </div>
                <div className="DChartWrap">
                  <div className="DChartWrap chartlistprogrss">
                    <div className={`DchartContnr  donatchartEmotional`}>
                      <div className="ProgressDetails courseProgresschart w-100">
                        <ul className="Cprogreslisting">
                          <li>
                            70% - Self Awareness <span>[2]</span>
                            <span
                              className="TotleCProg"
                              style={{ width: "70%" }}
                            ></span>
                            <div className="leftexpendgraph">
                              <div className="expendgraphicon">
                                <img src={image.expendicon} alt="" />
                              </div>
                             </div>
                            <div className="rightexpendgraph">
                              <div className="progresssignals">
                                <span className="prosignal1 ActProSignl"></span>
                                <span className="prosignal2 ActProSignl"></span>
                                <span className="prosignal3"></span>
                                <span className="prosignal4"></span>
                                <span className="prosignal5"></span>
                              </div>
                                {/* <div className="graphbatteryprogress">
                                <span className="batterycells"></span>
                             
                              </div> */}
                            </div>
                          </li>
                          <li>
                            50% - Self Regulation <span>[1]</span>
                            <span
                              className="TotleCProg"
                              style={{ width: "40%" }}
                            ></span>
                            <div className="leftexpendgraph">
                              <div className="expendgraphicon">
                                <img src={image.expendicon} alt="" />
                              </div>
                             </div>
                            <div className="rightexpendgraph">
                            <div className="graphbatteryprogress">
                                <span className="batterycells"></span>
                               
                              </div>
                              {/* <div className="progresssignals">
                                <span className="prosignal1 ActProSignl"></span>
                                <span className="prosignal2 ActProSignl"></span>
                                <span className="prosignal3"></span>
                                <span className="prosignal4"></span>
                                <span className="prosignal5"></span>
                              </div> */}
                            </div>
                          </li>
                          <li>
                            20% - Emotional Intelligence <span>[3]</span>
                            <span
                              className="TotleCProg"
                              style={{ width: "20%" }}
                            ></span>
                             <div className="leftexpendgraph">
                              <div className="expendgraphicon">
                                <img src={image.expendicon} alt="" />
                              </div>
                             </div>
                            <div className="rightexpendgraph">
                            <div className="graphbatteryprogress">
                                <span className="batterycells"></span>
                               
                              </div>
                              {/* <div className="progresssignals">
                                <span className="prosignal1 ActProSignl"></span>
                                <span className="prosignal2 ActProSignl"></span>
                                <span className="prosignal3"></span>
                                <span className="prosignal4"></span>
                                <span className="prosignal5"></span>
                              </div> */}
                            </div>
                          
                          </li>
                          <li>
                            90% - Resilience <span>[1]</span>
                            <span
                              className="TotleCProg"
                              style={{ width: "90%" }}
                            ></span>
                          </li>
                        
                        </ul>
                        <div className="DcverticleParameter"></div>
                        <div className="DcHorizontalParameter">
                          <span>PROFICIENCY</span>
                          <ul>
                            <li>0</li>
                            <li>25</li>
                            <li>50</li>
                            <li>75</li>
                            <li>100</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="RightbarPannel p-0 rightpannelSticky enrolledCourseAssetsstr">
              <div className="heading">
                <h2 className="flex">
                  <span className="d-flex align-items-center">
                    <img
                      src={image.DiemensionProgress}
                      alt=""
                      className="mr-2"
                    />
                    Emotional: Progress
                  </span>
                  <div className="form-check form-switch m-0 flex">
                    <label
                      className="form-check-label pointer"
                      for="flexSwitchCheckDefault"
                    >
                      Progress
                    </label>
                    <input
                      className="form-check-input avltogglebutton pointer"
                      type="radio"
                      checked
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </h2>
              </div>
          
              <div className="Rpprogresbar">
                <div className="fusionchart position-relative text-center">
                  {/* <DoughnutChart doughnutData={data}></DoughnutChart> */}
                  <img src={image.donutchart_image} alt="" />
                  {/* <div className="chartprofilemenu">
                    <img src={image.userProfile} alt="" />
                  </div> */}

                  {/* <div className="text-dark bg-secondary fw-bold  chartprofilemenu">
                    RP
                  </div> */}
                
                  </div>
                  <div className="skillsgraphtitle">
                  <h3 className="text-center"><img src={image.prependicon} alt="" /> 50% - Self-Awareness  <span>[3]</span></h3>
                  </div>
                   <div className="DChartWrap">
                      <div className="DChartWrap chartlistprogrss">
                        <div className={`DchartContnr  donatchartEmotional`}>
                          <div className="ProgressDetails courseProgresschart w-100">
                           <ul className="Cprogreslisting">
                            <li>
                            50% - Course #1 
                            <span
                              className="TotleCProg"
                              style={{ width: "50%" }}
                            ></span>
                            <div className="leftexpendgraph">
                              <div className="expendgraphicon inficononchart">
                                <img src={image.chat_icon} alt="" />
                              </div>
                             </div>
                            <div className="rightexpendgraph">
                              {/* <div className="graphbatteryprogress">
                                <span className="batterycells"></span>
                              </div> */}
                                  <div className="progresssignals">
                                <span className="prosignal1 ActProSignl"></span>
                                <span className="prosignal2 ActProSignl"></span>
                                <span className="prosignal3"></span>
                                <span className="prosignal4"></span>
                                <span className="prosignal5"></span>
                              </div>
                            </div>
                          </li>
                          <li>
                            40% - Course #2
                            <span
                              className="TotleCProg"
                              style={{ width: "40%" }}
                            ></span>
                            <div className="leftexpendgraph">
                            <div className="expendgraphicon inficononchart">
                                <img src={image.chat_icon} alt="" />
                              </div>
                             </div>
                            <div className="rightexpendgraph">
                            {/* <div className="graphbatteryprogress">
                                <span className="batterycells"></span>
                               </div> */}
                                  <div className="progresssignals">
                                <span className="prosignal1 ActProSignl"></span>
                                <span className="prosignal2 ActProSignl"></span>
                                <span className="prosignal3"></span>
                                <span className="prosignal4"></span>
                                <span className="prosignal5"></span>
                              </div>
                            </div>
                          </li>
                          <li>
                            60% - Course #3
                            <span
                              className="TotleCProg"
                              style={{ width: "60%" }}
                            ></span>
                             <div className="leftexpendgraph">
                             <div className="expendgraphicon inficononchart">
                                <img src={image.chat_icon} alt="" />
                              </div>
                             </div>
                            <div className="rightexpendgraph">
                            {/* <div className="graphbatteryprogress">
                                <span className="batterycells"></span>
                           
                              </div> */}
                                  <div className="progresssignals">
                                <span className="prosignal1 ActProSignl"></span>
                                <span className="prosignal2 ActProSignl"></span>
                                <span className="prosignal3"></span>
                                <span className="prosignal4"></span>
                                <span className="prosignal5"></span>
                              </div>
                            </div>
                          
                          </li>
                          <li>
                            90% - Course #4
                            <span
                              className="TotleCProg"
                              style={{ width: "90%" }}
                            ></span>
                          </li>
                       
                        </ul>
                        <div className="DcverticleParameter"></div>
                        <div className="DcHorizontalParameter">
                          <span>PROFICIENCY</span>
                          <ul>
                            <li>0</li>
                            <li>25</li>
                            <li>50</li>
                            <li>75</li>
                            <li>100</li>
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
    </div>
  );
};

export default Enrilledandprogress;

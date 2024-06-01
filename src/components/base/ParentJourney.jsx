/** @format */

import React, { useState, useEffect } from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import { Profile } from "../profile";
import { useSelector } from "react-redux";

const ParentJourney = () => {
  const { loggedInUser } = useSelector((state) => state.collections);
  const [toggleState, setToggleState] = useState(1);
  const [temp, setTemp] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
    // reset();
  };

  useEffect(() => {
    let data =
      toggleState === 3
        ? loggedInUser?.experiences?.length && loggedInUser?.experiences
        : loggedInUser?.educations?.length && loggedInUser?.educations;
    let dataType =
      toggleState === 1
        ? "SCHOOL"
        : toggleState === 2
        ? "COLLEGE"
        : toggleState === 3
        ? "EXPERIENCES"
        : "";

    let dataType2 = toggleState === 2 ? "OTHER" : "";
    let tempProvider = [];

    // data =
    //   toggleState === 3
    //     ? data
    //     : data?.filter((d) => d.type === dataType || d.type === dataType2);
    // data?.sort((a, b) => a.startDate.split(" ")[1] - b.startDate.split(" ")[1]);

    if (toggleState === 3) {
      for (let i = 0; i < data?.length; ) {
        if (i % 3 == 0) {
          let a = (
            <div className="w-100 childone">
              <div className="EdExpulistitems">
                <div className="EdExitemimage">
                  <img src={image.experiencejourneyicon} />
                </div>
                <div className="EdExitemDesc">
                  <h3>{data[i]?.company?.name}</h3>
                  <p>
                    {data[i]?.company?.address1 +
                      ", " +
                      data[i]?.company?.address2 +
                      ", " +
                      data[i]?.company?.city +
                      ", " +
                      data[i]?.company?.state +
                      ", " +
                      data[i]?.company?.country}
                  </p>
                  <ul>
                    <li>
                      <span>Industry: </span>
                      {data[i]?.industry?.name}
                    </li>
                    <li>
                      <span>Division: </span>
                      {data[i]?.division?.name}
                    </li>
                    <li>
                      <span>From: </span>
                      {data[i]?.startDate} to {data[i]?.endDate}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
          i++;
          tempProvider.push(a);
        } else {
          let b = (
            <div className="w-100 d-flex flex-wrap flex-row-reverse">
              <div className="EdExpulistitems">
                <div className="EdExitemimage">
                  <img src={image.experiencejourneyicon} />
                </div>
                <div className="EdExitemDesc">
                  <h3>{data[i]?.company?.name}</h3>
                  <p>
                    {data[i]?.company?.address1 +
                      ", " +
                      data[i]?.company?.address2 +
                      ", " +
                      data[i]?.company?.city +
                      ", " +
                      data[i]?.company?.state +
                      ", " +
                      data[i]?.company?.country}
                  </p>
                  <ul>
                    <li>
                      <span>Industry: </span>
                      {data[i]?.industry?.name}
                    </li>
                    <li>
                      <span>Division: </span>
                      {data[i]?.division?.name}
                    </li>
                    <li>
                      <span>From: </span>
                      {data[i]?.startDate} to {data[i]?.endDate}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="EdExpulistitems">
                {data[i + 1]?.company && (
                  <>
                    <div className="EdExitemimage">
                      <img src={image.experiencejourneyicon} alt="..." />
                    </div>
                    <div className="EdExitemDesc">
                      <h3>{data[i + 1]?.company?.name}</h3>
                      <p>
                        {data[i + 1]?.company?.address1 +
                          ", " +
                          data[i + 1]?.company?.address2 +
                          ", " +
                          data[i + 1]?.company?.city +
                          ", " +
                          data[i + 1]?.company?.state +
                          ", " +
                          data[i + 1]?.company?.country}
                      </p>
                      <ul>
                        <li>
                          <span>Industry: </span>
                          {data[i]?.industry?.name}
                        </li>
                        <li>
                          <span>Division: </span>
                          {data[i]?.division?.name}
                        </li>
                        <li>
                          <span>From: </span>
                          {data[i + 1]?.startDate} to {data[i + 1]?.endDate}
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
          i++;
          i++;
          tempProvider.push(b);
        }
      }
    } else {
      for (let i = 0; i < data?.length; ) {
        if (i % 3 == 0) {
          let a = (
            <div className="w-100 childone">
              <div className="EdExpulistitems">
                <div className="EdExitemimage">
                  <img src={image.experiencejourneyicon} />
                </div>
                <div className="EdExitemDesc">
                  <h3>{data[i]?.school?.name}</h3>
                  {dataType2 !== "OTHER" && (
                    <p>
                      {data[i]?.school?.address1 +
                        ", " +
                        data[i]?.school?.address2 +
                        ", " +
                        data[i]?.school?.city +
                        ", " +
                        data[i]?.school?.state +
                        ", " +
                        data[i]?.school?.country}
                    </p>
                  )}
                  <ul>
                    <li>
                      <span>From: </span>
                      {data[i]?.startDate} to {data[i]?.endDate}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
          i++;
          tempProvider.push(a);
        } else {
          let b = (
            <div className="w-100 d-flex  flex-row-reverse">
              <div className="EdExpulistitems">
                <div className="EdExitemimage">
                  <img src={image.experiencejourneyicon} />
                </div>
                <div className="EdExitemDesc">
                  <h3>{data[i]?.school?.name}</h3>
                  <p>
                    {data[i]?.school?.address1 +
                      ", " +
                      data[i]?.school?.address2 +
                      ", " +
                      data[i]?.school?.city +
                      ", " +
                      data[i]?.school?.state +
                      ", " +
                      data[i]?.school?.country}
                  </p>
                  <ul>
                    <li>
                      <span>From: </span>
                      {data[i]?.startDate} to {data[i]?.endDate}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="EdExpulistitems">
                {data[i + 1]?.school && (
                  <>
                    <div className="EdExitemimage">
                      <img src={image.experiencejourneyicon} />
                    </div>
                    <div className="EdExitemDesc">
                      <h3>{data[i + 1]?.school?.name}</h3>
                      <p>
                        {data[i + 1]?.school?.address1 +
                          ", " +
                          data[i + 1]?.school?.address2 +
                          ", " +
                          data[i + 1]?.school?.city +
                          ", " +
                          data[i + 1]?.school?.state +
                          ", " +
                          data[i + 1]?.school?.country}
                      </p>
                      <ul>
                        <li>
                          <span>From: </span>
                          {data[i + 1]?.startDate} to {data[i + 1]?.endDate}
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
          if (!data[i + 1]?.school) {
            i++;
          } else {
            i++;
            i++;
          }

          tempProvider.push(b);
        }
      }
    }
    setTemp(tempProvider);
  }, [loggedInUser?.educations, toggleState]);
  return (
    <>
      <Home>
        <div className="LeftbarPannel p-0" id="School_information">
          <div className="heading d-flex">
            <h2>
              <i className="fa-regular fa-heart mr-2"></i>
              Education Journey
            </h2>
          </div>
          <div className="PannelContent ">
            <div className="JourneyTitle">
              <div className="dates">Date</div>
              <div className="MainTitle">Education and Experience</div>
            </div>
            <div className="educationJourney d-flex">
              <div className="journeytab">
                <ul>
                  <li
                    className={toggleState === 1 ? "tabs Activetab" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    <h4>School (K-12)</h4>
                    <h3>1984 1997</h3>
                  </li>

                  <li
                    className={toggleState === 2 ? "tabs Activetab" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    <h4>College/Others</h4>
                    <h3>1997 2019</h3>
                  </li>
                  <li
                    className={toggleState === 3 ? "tabs Activetab" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    <h4>Experienced/Others</h4>
                    <h3>2020 2022</h3>
                  </li>
                </ul>
              </div>

              <div className="educationList ExperienceJourneyunit">
                <div className="threeitemRow">
                  {temp.map((tem, index) => tem)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Profile />
      </Home>
    </>
  );
};
export default ParentJourney;

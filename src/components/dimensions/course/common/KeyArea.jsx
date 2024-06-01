import React, { useState, useEffect, useMemo } from "react";
import { getSequnceSort, textTrim, getToolTip } from "../../../../utils/helper";

import * as image from "../../../../resources/images";
import { MSG } from "../../../../utils/Messages";
import { getHelpModal } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProgressBar from "../../../controls/ProgressBar";
const KeyArea = ({ data, setSubject, tag, tab }) => {
  const [stop, setStop] = useState();
  const dispatch = useDispatch();
  const options = {
    margin: 0,
    startPosition: stop,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    animateOut: 1,
    animateIn: 1,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 4,
      },
      1366: {
        items: 5,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".PMSkillList");
    const scrollTop = window.scrollY;
    scrollTop >= 0
      ? header.classList.add("PSticky")
      : header.classList.remove("PSticky");
  };

  const openHelp = (data, key) => {
    dispatch(getHelpModal(data));
    setStop(key);
  };

  document.querySelectorAll(" p * div ");

  return (
    <div className="PMSkillList wpl_box_styl w-100" key={data[0]?.id}>
      <ul>
        <li className="skilcontroltitle">
          <h5>
            <span>
              <img src={image.skillsvicky} alt="" />
            </span>
            <span
              className="pointer"
              onClick={() => openHelp(MSG.KEYAREAEXP)}
            ></span>
            Skills
          </h5>
        </li>

        <OwlCarousel className="owl-theme" {...options}>
          {getSequnceSort(data).map((value, key) => (
            <React.Fragment key={key}>
              <li key={value}>
                <span
                  className="pointer"
                  onClick={() => openHelp(value, key)}
                  id={`keyarea${key}`}
                >
                  <img src={image.chat_icon} alt="" className="infoiconimg" />
                </span>

                {value.courseCount === 0 && (
                  <div className="Course_progressbar">Coming Soon...</div>
                )}

                {value?.name.length >= 10 && (
                  <p> {getToolTip(value?.name, 30)}</p>
                )}

                <p key={key}>
                  <span data-for={value?.name} data-event-off="" data-tip>
                    {textTrim(value?.name, 30)}
                  </span>

                  {value.isEnrolled === true ||
                  (value.type === "PROVIDER" && value?.courses.length > 0) ? (
                    value?.courses.length > 0 && (
                      <span
                        className="Course_progressbar"
                        key={value?.proficiency}
                      >
                        <span className="TotleProgressInsub">
                          {Math.round(value?.proficiency)}%
                        </span>

                        <ProgressBar
                          value={Math.round(value?.proficiency)}
                          data={data}
                        />
                      </span>
                    )
                  ) : ["Intellectual"].includes(tab?.value) &&
                    value?.type === "VICKY" &&
                    !value?.isEnrolled &&
                    value?.courses.length > 0 ? (
                    <span onClick={() => setSubject(value)}>
                      <span className="pointer" key={data.key}>
                        <i className="fa-regular fa-pencil ml-3"></i>
                      </span>
                    </span>
                  ) : (
                    value?.courses.length > 0 &&
                    value?.type !== "VICKY" && (
                      <span
                        className="Course_progressbar"
                        key={value?.proficiency}
                      >
                        <span className="TotleProgressInsub">
                          {Math.round(value?.proficiency)}%
                        </span>

                        <ProgressBar
                          value={Math.round(value?.proficiency)}
                          data={data}
                        />
                      </span>
                    )
                  )}
                </p>
              </li>
            </React.Fragment>
          ))}
        </OwlCarousel>
      </ul>
    </div>
  );
};

export default KeyArea;

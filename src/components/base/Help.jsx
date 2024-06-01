import React, { useState, useEffect } from "react";

import * as image from "../../resources/images";

import Home from "../Home";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PATHS } from "../../utils";
import { breadcrumb } from "../../redux/actions";
import { ViewVideo } from "../dimensions/activity";
import OwlCarousel from "react-owl-carousel";
import { Carousel } from "react-bootstrap";
const Help = () => {
  const dispatch = useDispatch();
  const [videoPopup, setVideoPopup] = useState();

  useEffect(() => {
    dispatch(
      breadcrumb({
        title: "Help",
      })
    );
  }, []);

  const history = useHistory();

  const openVideo = (data) => {
    setVideoPopup({
      siteUrl: data.link,
      title: data.title,
    });
  };

  const close = () => {
    setVideoPopup();
  };

  const helpVideo = [
    {
      image:
        "https://vickyknows.s3.amazonaws.com/scenes/Platform_Organization.png",
      link: "https://vickyknows.s3.amazonaws.com/scenes/Platform_Organization.mp4",
      title: "How is the platform organized?",
    },
    {
      image: "https://vickyknows.s3.amazonaws.com/scenes/Explore_Courses.png",
      link: "https://vickyknows.s3.amazonaws.com/scenes/Explore_Courses.mp4",
      title: "Selecting the right course for my child",
    },
    {
      image: "https://vickyknows.s3.amazonaws.com/scenes/Check_Progress.png",
      link: "https://vickyknows.s3.amazonaws.com/scenes/Check_Progress.mp4",
      title: "Checking my child's progress",
    },
    {
      image:
        "https://vickyknows.s3.amazonaws.com/scenes/What_Is_Learner_Pathway.png",
      link: " https://vickyknows.s3.amazonaws.com/scenes/What_Is_Learner_Pathway.mp4",
      title: "Understanding Learner Pathways",
    },
  ];

  const options = {
    margin: 30,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],  
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 1000,
    animateOut: 1,
    animateIn: 1,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <Home className="outerPagesHeader">
      {videoPopup && <ViewVideo close={close} data={videoPopup} />}
      <section className="help_banner"></section>
      <section className="helpbody">
        <div className="container">
          <div className="helptitle">
            <h2>I need help with...</h2>
          </div>
          <div className="helpvideos">
            {helpVideo.length <= 3 && (
              <div className="helpvideosection">
                {helpVideo.map((value, key) => (
                  <span
                    className="text-center"
                    key={key}
                    onClick={() => openVideo(value)}
                  >
                    <img src={value.image} />
                    <h4 className="text-center">{value.title}</h4>
                  </span>
                ))}
              </div>
            )}
            {helpVideo.length > 3 && (
              <OwlCarousel className="owl-theme mb-3" id="helpVideosCarousel"  {...options}>
                {helpVideo.map((value, key) => (
                  <span
                    className="text-center"
                    key={key}
                    onClick={() => openVideo(value)}
                  >
                    <img src={value.image} className="help-carousel-imgs" />
                    <h4 className="text-center pt-3">{value.title}</h4>
                  </span>
                ))}
              </OwlCarousel>
            )}

            {videoPopup && <ViewVideo close={close} data={videoPopup} />}
          </div>

          <div className="helpcardlisting flex flex-wrap">
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.PROGRESSSCORING)}
            >
              <img src={image.money_bag} alt="..." />
              <h4>Progress & Scoring</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.HELPCOURSE)}
            >
              <img src={image.mortarboard} alt="..." />
              <h4>Course Details & Enrollment</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.HELPUSERPROFILE)}
            >
              <img src={image.pathway_icon} alt="..." />
              <h4>Learner Pathway</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.COURSESETTING)}
            >
              <img src={image.bar_menu} alt="..." />
              <h4>My & Course Settings</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.HELPDIMSKILL)}
            >
              <img src={image.dimension3d} alt="..." />
              <h4>My Dimensions</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.HELPHOLISTICVIEW)}
            >
              <img src={image.Holisticbullseyes} alt="..." />
              <h4>Holistic Perspective</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.HELPBILLING)}
            >
              <img src={image.subscription} alt="..." />
              <h4>Subscription</h4>
            </div>
            <div
              className="helpcards"
              onClick={() => history.push(PATHS.HELPQUERY)}
            >
              <img src={image.rectangulatqmark} alt="..." />
              <h4>Anything Else?</h4>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
};

export default Help;

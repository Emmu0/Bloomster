import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerCategoryList } from "../../../../utils/Packages";
import { NextScene } from "../../../../redux/actions/APIs";
import { getSequnceSort } from "../../../../utils/helper";
import { sceanIndex } from "../../../../redux/actions";
import useSound from "use-sound";
import correct from "../../../../resources/sound/right.mp3";

const LessonSeries = ({
  data,
  handleNext,
  videoStep,
  congratulationPopup,
  videoSceneHandler,
}) => {
  const [play] = useSound(correct);
  const { next_scene_response, socialActivityData, loggedInUser } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    if (congratulationPopup) {
      setPlayVideo(false);
    }
  }, [congratulationPopup]);
  const param = useParams();
  const dispatch = useDispatch();
  const [playVideo, setPlayVideo] = useState(true);
  const [duration, setduration] = useState();
  const [apiTrigger, setApiTriggered] = useState(false);
  const [sceanId, setSceanId] = useState();

  useEffect(() => {
    if (videoStep) {
      setApiTriggered(false);
    }
  }, [videoStep]);

  useEffect(() => {
    if (socialActivityData !== undefined) {
      if (loggedInUser?.role?.name === "PROVIDER" && isNaN(videoStep)) {
        videoSceneHandler(0);
      } else {
        videoSceneHandler(videoStep);
      }
      //	videoStep = socialActivityData?.records[0]?.currentScene - 1;
      //	setVideoStep(socialActivityData?.records[0]?.currentScene - 1);
    }
  }, [socialActivityData?.records]);

  useEffect(() => {
    if (next_scene_response && next_scene_response.objectName === "Scene") {
      socialActivityData?.records[0].series.lessons.map((vl) => {
        vl.scenes.map((vl2) => {
          if (vl2.id === sceanId) {
            vl2.isCompleted = true;
          }
        });
      });
      data &&
        getSequnceSort(data).map((vl) => {
          if (vl.id === sceanId) {
            vl.isCompleted = true;
          }
        });
      play();
    }
    if (data) {
      dispatch(sceanIndex(data[videoStep]));
    }
  }, [next_scene_response]);

  const [showVideoTextLine, setShowVideoTextLine] = useState(false);

  const onPrgress = (e) => {
    if (loggedInUser?.role?.name !== "PROVIDER") {
      const seventyFivePercent = 0.85;
      const seventyFiveTime = duration * seventyFivePercent;
      let sceanData = getSequnceSort(data);
      if (
        !getSequnceSort(socialActivityData?.records[0]?.series?.scenes)[
          videoStep
        ]?.isCompleted &&
        e.playedSeconds >= 5 &&
        e.playedSeconds < 16
      ) {
        setShowVideoTextLine(true);
      } else {
        setShowVideoTextLine(false);
      }
      if (
        parseInt(seventyFiveTime.toFixed()) <=
        parseInt(e.playedSeconds.toFixed())
      ) {
        let isSkill = false;

        if (!apiTrigger && !sceanData[videoStep].isCompleted) {
          setSceanId(sceanData[videoStep]?.id);
          dispatch(
            NextScene(
              param?.id,
              param?.activityId,
              param?.courseId,
              param?.skillId,
              sceanData[videoStep]?.id,
              isSkill
            )
          );
          setApiTriggered(true);
        }
      }
    }
  };
  const readyTime = (e) => {
    setduration(e.getDuration());
  };

  const _handleNext = (flag) => {
    handleNext(flag);
    setApiTriggered(false);
  };
  useEffect(() => {
    if (!congratulationPopup) {
      setPlayVideo(true);
    }
  }, [videoStep]);
  const _onSeek = (e) => {
    setPlayVideo(true);
  };

  return (
    <React.Fragment>
      <div className="ConversionStory">
        {data ? (
          <div className="StoryScene">
            {showVideoTextLine && (
              <div className="videoinfotext">
                <p>
                  <i class="fa-sharp fa-light fa-circle-info mr-2"></i>
                  Enjoy the complete video and earn 10 points!
                </p>
              </div>
            )}
            {data && data[videoStep]?.videourl && (
              <ReactPlayer
                width={"100%"}
                height="100%"
                controls={true}
                onPlay={() => {
                  setPlayVideo(true);
                }}
                onPause={() => {
                  setPlayVideo(false);
                }}
                onSeek={(e) => _onSeek(e)}
                playing={playVideo}
                url={data && data[videoStep]?.videourl}
                config={{file: {attributes: {controlsList: "nodownload",},},}}
                onReady={(e) => readyTime(e)}
                onProgress={(e) => onPrgress(e)}
              />
            )}
          </div>
        ) : (
          <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
        )}

        <div className="input-group full-Width-group basic_details_form pagebuttonStrip">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              disabled={videoStep + data?.length === data?.length}
              type="button"
              className="btn-blue btn-login d-block mb-5 back_button"
              onClick={() => _handleNext(false)}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i> Back
            </button>

            <div className="buttonDistribotion">
              <button
                disabled={videoStep === data?.length - 1}
                type="button"
                className="btn-blue btn-login d-block mb-5"
                onClick={() => _handleNext(true)}
              >
                Next<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LessonSeries;

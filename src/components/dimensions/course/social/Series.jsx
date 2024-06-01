import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerCategoryList } from "../../../../utils/Packages";
import { NextScene } from "../../../../redux/actions/APIs";
import { useParams } from "react-router-dom";
import { getSequnceSort } from "../../../../utils/helper";
import { showModal } from "../../../../redux/actions";
import * as image from "../../../../resources/images";
import { valHooks } from "jquery";
import { array } from "yup";

const Series = (props) => {
  const param = useParams();
  const { modalData, socialActivityData, loggedInUser, next_scene_response } =
    useSelector((state) => state.collections);
  const [apitrigger, setapitrigger] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [completeSceneArray, setCompleteSceneArray] = useState([]);

  useEffect(() => {
    props?.setPlayVideo(true);
    setapitrigger(false);
  }, [props?.currentScene]);

  const dispatch = useDispatch();
  const handleNext = (isNext) => {
    window.scrollTo(0, 0);
    props?.handleSeriesSceneStep(isNext);
    setapitrigger(false);
  };

  useEffect(() => {
    if (next_scene_response) {
      //	console.log('next_scene_response : ', next_scene_response);
      //	&& 	props?.seriesScenes[props?.currentScene]?.videourl
      let myArray = completeSceneArray;
      if (next_scene_response?.records[0]?.compScene) {
        if (!myArray?.includes(props?.seriesScenes[props?.currentScene]?.id)) {
          myArray.push(props?.seriesScenes[props?.currentScene]?.id);
          setCompleteSceneArray(myArray);
        }
      }
    }
  }, [next_scene_response]);

  useEffect(() => {
    if (props?.seriesScenes) {
      setTimeout(() => {
        props?.setSeriesScenesData(props?.seriesScenes);
      }, 3000);

      let myArray = completeSceneArray;
      props?.seriesScenes?.map((value, index) => {
        if (
          value?.isCompleted &&
          !myArray?.includes(value?.id) &&
          value?.videourl
        ) {
          myArray.push(value?.id);
        }
      });
      setCompleteSceneArray(myArray);
    }
  }, [props?.currentScene]);

  useEffect(() => {
    if (modalData?.type == "SignIn") {
      dispatch(showModal());
    }
    if (modalData?.type === "congratulation") {
      props.setPlayVideo(false);
    }
  }, [modalData?.type, props.playVideo]);

  useEffect(() => {
    if (props.showCongratulationModel === true) {
      props.setPlayVideo(false);
    }
  }, [props.showCongratulationModel]);

  const [duration, setduration] = useState();

  const readyTime = (e) => {
    setduration(e.getDuration());
  };
  const endedhandler = (e) => {};
  const stpOnUnmount = (e) => {};
  const onseeked = (e) => {};
  const ondurationchange = (e) => {};

  const [showVideoTextLine, setShowVideoTextLine] = useState(false);

  const onPrgress = (e, isCompleted, sceneId) => {
    const seventyFivePercent = 0.85;

    const seventyFiveTime = duration * seventyFivePercent;

    if (
      !props?.seriesScenes[props?.currentScene]?.isCompleted &&
      !props?.senceCompletedArray?.includes(
        props?.seriesScenes[props?.currentScene]?.id
      ) &&
      e.playedSeconds >= 5 &&
      e.playedSeconds < 16
    ) {
      setShowVideoTextLine(true);
    } else {
      setShowVideoTextLine(false);
    }

    if (
      parseInt(seventyFiveTime.toFixed()) <= e.playedSeconds.toFixed() &&
      !apitrigger &&
      loggedInUser?.role?.name !== "PROVIDER"
    ) {
      // 	let isSkill = true;
      let sceanData = getSequnceSort(
        socialActivityData?.records[0]?.series?.scenes
      );

      let isSkill = true;
      /*
			if (
				socialActivityData?.records[0]?.dimName == "Social" ||
				socialActivityData?.records[0]?.dimName == "Emotional" ||
				socialActivityData?.records[0]?.dimName == "Spiritual"
			) {
				isSkill = true;
			}
			*/
      dispatch(
        NextScene(
          param?.id,
          param?.activityId,
          param?.courseId,
          param?.skillId,
          sceanData[props?.currentScene]?.id,
          isSkill
        )
      );
      setapitrigger(true);
    }
  };

  const _onSeek = (e) => {
    props.setPlayVideo(true);
  };
  const _isPlaying = () => {
    dispatch(showModal());
    props.setPlayVideo(true);
  };
  const _isPause = () => {
    props.setPlayVideo(false);
  };
  return (
    <React.Fragment>
      <div className='ConversionStory'>
        {props?.seriesScenesData ? (
          <div className='StoryScene'>
            {showVideoTextLine && (
              <div className='videoinfotext'>
                <p>
                  <i className='fa-sharp fa-light fa-circle-info mr-2'></i>
                  Enjoy the complete video and earn 10 points!
                </p>
              </div>
            )}
            {completeSceneArray?.includes(
              props?.seriesScenes[props?.currentScene]?.id
            ) && (
              <div className='videoinfotext'>
                <p className='video_viewedicon'>
                  <img src={image.enrolledicon} />
                </p>
              </div>
            )}
            {props?.seriesScenes &&
            props?.seriesScenes[props?.currentScene]?.videourl ? (
              <ReactPlayer
                width={"100%"}
                height='100%'
                controls={true}
                onPlay={() => _isPlaying()}
                onPause={() => _isPause()}
                onSeek={(e) => _onSeek(e)}
                playing={props.playVideo}
                url={props?.seriesScenes[props?.currentScene]?.videourl}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
                onReady={(e) => readyTime(e)}
                onEnded={(e) => endedhandler(e)}
                stopOnUnmount={(e) => stpOnUnmount(e)}
                onDuration={(e) => ondurationchange(e)}
                onProgress={(e) =>
                  onPrgress(
                    e,
                    props?.seriesScenes[props?.currentScene]?.isCompleted,
                    props?.seriesScenes[props?.currentScene]?.id
                  )
                }
              />
            ) : (
              <LazyLoadImage
                key={
                  props?.seriesScenesData &&
                  props?.seriesScenesData[props?.currentScene]?.id
                }
                effect='blur'
                placeholderSrc={
                  props?.seriesScenesData[props?.currentScene]?.imageurl
                }
                src={
                  props?.seriesScenesData &&
                  props?.seriesScenesData[props?.currentScene]?.imageurl
                }
                alt=''
              />
            )}
          </div>
        ) : (
          <ShimmerCategoryList items={3} categoryStyle='STYLE_SIX' />
        )}

        <div className='input-group full-Width-group basic_details_form pagebuttonStrip'>
          <div className='form-group BDsubmitbutton d-flex m-0'>
            <button
              disabled={props?.currentScene == 0 ? true : false}
              type='button'
              className='btn-blue btn-login d-block mb-5 back_button'
              onClick={() => handleNext(false)}>
              <i className='fa-solid fa-arrow-left mr-2'></i> Back
            </button>

            <div className='buttonDistribotion'>
              <button
                disabled={
                  props?.isKcRequiredDisabled ||
                  props?.currentScene == props?.seriesScenes?.length - 1 ||
                  props?.isNextButtonDisable
                    ? true
                    : false
                }
                type='button'
                className='btn-blue btn-login d-block mb-5'
                onClick={() => handleNext(true)}>
                Next<i className='fa-solid fa-arrow-right ml-2 m-0'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Series;

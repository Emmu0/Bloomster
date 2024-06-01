/** @format */

import React, { useState, useEffect } from "react";
import { textTrim, getHostName } from "../../../utils/helper";
import ReactTooltip from "react-tooltip";

const VideoCard = ({ data, viewVideo, searchActivity }) => {
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    if (data) {
      setVideoData(data);
    } else {
      setVideoData(searchActivity);
    }
  }, [data, searchActivity]);

  return (
    <>
      <div className='VideoThumbimg LinkImage pointer'>
        <img
          onClick={() => viewVideo(videoData)}
          src={
            searchActivity
              ? searchActivity?.image
              : data?.snippet?.thumbnails?.default?.url
              ? data?.snippet?.thumbnails?.default?.url
              : data?.image
          }
          alt='...'
        />
      </div>

      <div
        className='videoDescription ml-2 LinkDescription'
        onClick={() => viewVideo(videoData)}>
        {videoData?.title?.length > 80 ? (
          <ReactTooltip id={videoData?.title}>
            <p>{videoData?.title}</p>
          </ReactTooltip>
        ) : (
          ""
        )}
        <h4
          className='m-0'
          data-for={videoData?.title}
          data-event-off=''
          data-tip>
          {searchActivity
            ? searchActivity?.name
            : data?.snippet?.title
            ? textTrim(data?.snippet?.title, 80)
            : textTrim(data?.title, 80)}
        </h4>
        <p>
          {searchActivity
            ? searchActivity?.description
            : data?.snippet?.description
            ? textTrim(data?.snippet?.description, 150)
            : textTrim(data?.description, 150)}
        </p>
        <a href='#' className=''>
          <i className='fa-brands fa-youtube mr-2' />
          {searchActivity
            ? searchActivity?.siteUrl || searchActivity?.link
            : getHostName(data?.snippet?.siteUrl || data?.siteUrl)}
        </a>
      </div>
    </>
  );
};
export default VideoCard;

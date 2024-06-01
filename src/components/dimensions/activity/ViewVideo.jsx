/** @format */

import React from "react";
import ReactPlayer from "react-player/lazy";
import { textTrim } from "../../../utils/helper";
import ReactTooltip from "react-tooltip";

const ViewVideo = ({ data, close }) => {
  let url = data?.sensitivevideourl;
  if (!url) {
    url = data?.siteUrl;
  }

  return (
    <div className="halfPagePOpup d-flex justify-content-between" tabIndex="1">
      <div
        className="modal d-block videoActivityPopup"
        id="exampleModalLo"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {data?.title?.length > 60 ? (
                <ReactTooltip id={data?.title}>
                  <p>{data?.title}</p>
                </ReactTooltip>
              ) : (
                ""
              )}
              <h3
                className="modal-title"
                id="exampleModalLongTitle"
                data-for={data?.title}
                data-event-off=""
                data-tip
              >
                {data?.snippet
                  ? textTrim(data?.snippet?.title, 60)
                  : textTrim(data?.name, 60)
                  ? textTrim(data?.name, 60)
                  : textTrim(data?.title, 60)
                  ? textTrim(data?.title, 60)
                  : textTrim(url, 60)}
              </h3>
              <button onClick={() => close()} className="btn btn-primary">
                <i className="fa-regular fa-xmark m-0"></i>
              </button>
            </div>
            <div className="modal-body RatetousPopup">
              <ReactPlayer
                width={"100%"}
                height="389px"
                controls={true}
                playing={true}
                url={url}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewVideo;

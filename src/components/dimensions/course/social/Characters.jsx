import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactPlayer from "react-player";

const Characters = ({ charimage }) => {
  return (
    <div className="lessonDtl">
      <div className="StoryScene">
        {charimage.endsWith(".mp4") ? (
          <ReactPlayer
            width={"100%"}
            height="100%"
            controls={true}
            playing={true}
            url={charimage}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        ) : (
          <LazyLoadImage
            key={charimage}
            effect="blur"
            placeholderSrc={charimage}
            src={charimage}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Characters;

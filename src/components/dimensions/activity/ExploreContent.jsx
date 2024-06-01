import { useState, useEffect } from "react";
import ViewVideo from "./ViewVideo";
import { getHostName } from "../../../utils/helper";
import * as image from "../../../resources/images";
import VickyComingSoon from "../../widget/VickyComingSoon";
import { COMING_SOON } from "../../../utils/DataObjects";
import { ShimmerCategoryList } from "react-shimmer-effects";

const ExploreContent = (resourceInnerData) => {
  const [videoPopup, setVideoPopup] = useState();
  const [shimmerload, setShimmerload] = useState();
  const close = () => {
    setVideoPopup();
  };

  useEffect(() => {
    if (resourceInnerData) {
      setTimeout(() => {
        setShimmerload(resourceInnerData);
      }, 1000);
    }
  }, [resourceInnerData]);

  const redirectSite = (siteData) => {
    if (getHostName(siteData?.siteUrl) === "www.youtube.com") {
      setVideoPopup(siteData);
    } else {
      window.open(siteData?.siteUrl, "_blank");
    }
  };

  return (
    <>
      {shimmerload?.resourceInnerData?.length > 0 ? (
        <div>
          {resourceInnerData?.resourceInnerData &&
            resourceInnerData?.resourceInnerData?.map((data, key) => (
              <div className="w-100 " key={key}>
                <div
                  className="ProbvidListItem checkoutVideo d-flex mb-2 position-relative pointer"
                  onClick={() => redirectSite(data)}
                >
                  <div className="VideoThumbimg">
                    {data?.image ? (
                      <img src={data.image} alt="" />
                    ) : (
                      <img src={image.noImage} className="" alt="" />
                    )}
                  </div>
                  <div className="videoDescription pl-2  p-1">
                    <h3>{data.title}</h3>
                    <h5 className="mt-1 mb-2">{data.description}</h5>
                    <a href="#">
                      <i className="fa-brands fa-youtube mr-2" />
                      {getHostName(data?.siteUrl)}
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {videoPopup && <ViewVideo close={close} data={videoPopup} />}
        </div>
      ) : shimmerload === undefined ? (
        <ShimmerCategoryList items={2} categoryStyle="STYLE_SIX" />
      ) : (
        <div className="p-5 m-auto resourcessc">
          <VickyComingSoon description={COMING_SOON[2]?.description} />
        </div>
      )}
    </>
  );
};

export default ExploreContent;

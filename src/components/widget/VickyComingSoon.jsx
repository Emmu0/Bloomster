import React from "react";
import * as image from "../../resources/images";

const VickyComingSoon = ({ description }) => {
  return (
    <div className="flex flextwo commingSoonPage">
      {/* <div className="vickyrobot">
        <img src={image.Robovicky_right} alt="" />
      </div> */}
      <div className="LessionDtlOverview">
        <h2 className="mb-5 text-center">Coming Soon</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VickyComingSoon;

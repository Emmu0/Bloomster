import React from "react";
import * as image from "../../resources/images";
const TokenError = () => {
  return (
    <div>
      <p className="text-left ml-3 mt-3 pl-3 logoerror">
        <img src={image.vicky_logo_LP} className=""></img>
      </p>
      <div className="Successpage text-center">
        <h3 className=" mb-3">
          Your Token has been <span>'Expired'</span>{" "}
        </h3>
        <h2 className="">Please Check again</h2>
        <div className="Successimsge">
          <img src={image.error_page_img} />
        </div>
        <div className="ErrorDescription w-100">
          <a href="#">
            <i className=" icon icon-dapulse-home  h4 mb-0 mr-2"></i>Go To Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TokenError;

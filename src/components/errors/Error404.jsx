/** @format */

import React from "react";
import * as image from "../../resources/images";
import { useHistory } from "react-router";
import { PATHS } from "../../utils";

const Error404 = (props) => {
  const history = useHistory();
  if (window.location?.search.includes("?nl=")) {
    return false;
  }

  const reDirectGoTo = () => {
    let access = localStorage.getItem("access_token");
    if (access) {
      history.push(PATHS.HOME);
    } else {
      history.push(PATHS.LANDINGPAGE);
    }
  };

  return (
    <div className=''>
      <div className='container'>
        <div className='erroe404 d-flex justify-content-center flex-wrap'>
          <div className='ErrorImage'>
            <img src={image.Error404gif2} />
          </div>
          <div className='ErrorDescription w-100'>
            <h2>Page Not Found</h2>
            <p>Seems like you're lost</p>

            <button
              className='pointer btn-blue btn-login mt-2 m-0 w-auto'
              onClick={() => reDirectGoTo()}>
              <i className=' icon icon-dapulse-home h4 mb-0 mr-2'></i>Go To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;

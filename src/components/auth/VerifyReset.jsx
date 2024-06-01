/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as image from "../../resources/images";
import { PATHS } from "../../utils";
const VerifyReset = () => {
  const history = useHistory();

  return (
    <div>
      <div className='Successpage text-center'>
        <h3 className=' mb-3'>
          Your reset password link is <span>expired</span>.<br /> Please click
          the button below to sign in.
        </h3>

        <div className='Successimsge flex m-auto'>
          {/* <div className='w-50'>
            <img src={image.vicky_left_thumb} alt='' className='robovicky' />
          </div> */}
          <div className='w-25 m-auto'>
            <img src={image.error_page_img} alt='...' />
          </div>
        </div>
        <div className='ErrorDescription w-100'>
          <a href='#' onClick={() => history.push(PATHS.LANDINGPAGE)}>
            <i className=' icon icon-dapulse-home  h4 mb-0 mr-2'></i>
            Go To Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyReset;

/** @format */

import React from "react";
import * as image from "../../resources/images";
import SignIn from "./SignIn";
import { SITEFNAME } from "../../utils/Messages";
//import SignUp from "./SignUp";
const LandingPage = () => {
  return (
    <div className='container-fluid landing-page'>
      <div className='container-fluid d-flex landing_page_style'>
        <div className='logostyle'>
          <h3 className='Logo'>
            {" "}
            <img alt='...' src={image.newvickylogo} />
          </h3>
        </div>
        <div className='menustyle'>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='container-fluid banner_back_style d-flex'>
        <div className='form_style'>
          <div className='container-fluid head_style'>
            <h2>Think</h2>
            <h4>
              <span>Holistic</span>ally
            </h4>
          </div>
          <div className='container-fluid'>
            <SignIn />
          </div>
        </div>
        <div className='banner_style'>
          <div className='dimension_style1 d-flex'>
            <div className='physical'>
              <img alt='...' src={image.physicalicon} />
              <h4>Physical</h4>
            </div>
            <div className='intelectual'>
              <img alt='...' src={image.intelectualicon} />
              <h4>Intelectual</h4>
            </div>
            <div className='social'>
              <img alt='...' src={image.socialicon} />
              <h4>Social</h4>
            </div>
          </div>
          <div className='dimension_style2 d-flex'>
            <div className='emotional'>
              <img alt='...' src={image.emaotionalicon} />
              <h4>Emotional</h4>
            </div>
            <div className='spiritual'>
              <img alt='...' src={image.spiritualicon} />
              <h4>Spiritual</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid holistic_growth d-flex'>
        <div
          className='img_style code code--small code--left aos-init aos-animate'
          data-aos='fade-right'>
          <img alt='...' src={image.holisticgrowth} />
        </div>
        <div className='text_style'>
          <h4>
            Why
            <br />
            <span>Holistic Growth?</span>
          </h4>
        </div>
      </div>
      <div className='container-fluid learning_growth d-flex'>
        <div className='text_style1'>
          <h4>
            How {SITEFNAME.NAME} can help
            <br />
            <span>you in your learning Journey?</span>
          </h4>
        </div>
        <div className='img_style1'>
          <img alt='...' src={image.learningjourney} />
        </div>
      </div>
      <div className='container-fluid personal_coach d-flex'>
        <div className='img_style2'>
          <img alt='...' src={image.personalcoach} />
        </div>
        <div className='text_style2'>
          <h4>
            Your personal coach for
            <br />
            <span>life - be your best self!</span>
          </h4>
        </div>
      </div>
      <div className='container-fluid explore d-flex'>
        <div className='text_style3'>
          <h4>
            Let the right people know
            <br />
            <span>you’re open to explore!</span>
          </h4>
        </div>
        <div className='img_style3'>
          <img alt='...' src={image.peopleexplore} />
        </div>
      </div>
      <div className='container-fluid footer'>
        <h4>
          © 2022 <a href='#'> {SITEFNAME.NAME}.com. </a> All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default LandingPage;

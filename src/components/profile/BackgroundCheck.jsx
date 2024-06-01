/** @format */

import React, { useEffect } from "react";

import { Profile } from ".";
import Home from "../Home";
import * as image from "../../resources/images";

import { useDispatch } from "react-redux";
import { breadcrumb } from "../../redux/actions";
const BackgroundCheck = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      breadcrumb({ title: "Background Check", icon: image.mortarboard })
    );
  }, []);
  return (
    <Home>
      <div className="LeftbarPannel p-0" id="Educations">
        <div className="PannelContent basicdetailsform px-5">
          <a href="#">background Checked link</a>
        </div>
      </div>
      <Profile />
    </Home>
  );
};

export default BackgroundCheck;

/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { swal } from "../../utils/Packages";
import WebLayout from "../layout/WebLayout";
import * as image from "../../resources/images";

const WebHome = () => {
  const { response } = useSelector((state) => state.collections);

  useEffect(() => {
    if (response && response?.success) {
      new swal({
        position: "top-center",
        icon: "success",
        title: "Success",
        timer: 2000,
        text: response?.message,
        type: "success",
      });
    }
  }, [response]);

  return (
    <WebLayout className="outerPagesHeader">
      <div className="NlandingPage">
        <div className="NLContent">
          <section className="lsoon">
            <div className="container text-center">
              <div className="lsoon_title">
                <h2>Coming Soon..!</h2>
                <h4>
                  An intelligent learning{" "}
                  <span>platform-cum-personal coach</span> to prepare your child
                  to thrive in a rapidly changing world
                </h4>
                <img src={image.comingsoon} className="text-center" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </WebLayout>
  );
};

export default WebHome;

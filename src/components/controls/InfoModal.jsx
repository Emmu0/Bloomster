/** @format */

import React from "react";

import * as image from "../../resources/images";
import Vicky from "./Vicky";

const InfoModal = ({ data }) => {
  return (
    <span className="Abouttaginfo">
      <img src={image.chat_icon} alt="" className="infoiconimg ml-2" />
      <div className=" NuggetPopup abExplanation">
        <div className="NuggetPopupTitle flex">
          <div className="NuggetVickyImage">
            <h4 className="flex">
              {" "}
              <img src={image.Info_Popup_pose} alt="" className="mr-2" />{" "}
              {data?.title}
            </h4>
          </div>
          <div className="powrBulbicon">
            <img src={image.Powericon} alt="" />
          </div>
        </div>
        <div className="NuggetPopupDesc d-flex">
          <p>{data?.description}</p>
          <Vicky text={data?.description} />
        </div>
      </div>
    </span>
  );
};

export default InfoModal;

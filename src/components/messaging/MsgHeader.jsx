import React from "react";

import * as image from "../../resources/images";
import { getCapitalized, getProfileName } from "../../utils/helper";
import { Heading } from "../profile";
const MsgHeader = ({ data, currentFrndId, currentGrpId }) => {
  return (
    <>
      <Heading title={"Messages"} icon={image.message_color} />
      {data
        .filter((friendRec) =>
          currentGrpId
            ? friendRec.id === currentGrpId
            : friendRec.id === currentFrndId
        )
        .map((friendRec, index) => {
          return (
            <div className="chatProfile d-flex">
              <div className="ChatProImg" key={index}>
                <div className="chatlist-ring">
                  {friendRec.imageUrl !== undefined &&
                  friendRec.imageUrl !== null ? (
                    <img src={friendRec?.imageUrl} alt="" />
                  ) : (
                    getProfileName(friendRec.name)
                  )}
                </div>
              </div>
              <div className="chatbordProStrip flex">
                <div className="ChatName">
                  <h4 className="flex">{getCapitalized(friendRec.name)}</h4>
                </div>
                <div className="_1QVfy _3UaCz flex">
                  <div className="searchtxtChat">
                    <span className="">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                  <div className="conversation-menu-button">
                    <span>
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MsgHeader;

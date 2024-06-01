import React, { useState, useEffect } from "react";
import { getCapitalized, getProfileName } from "../../utils/helper";
const Groups = ({ data, handleTabToggling }) => {
  useEffect(() => {
    if(data.length > 0){
      handleTabToggling(data[0].id);
    }
    
  }, []);

  return (
    <div className="chat-list">
      {data &&
        data?.map((groupRec, index) => {
          return (
            <div
              className="chatProfile d-flex"
              key={index}
              onClick={() => handleTabToggling(groupRec.id)}
            >
              <div className="ChatProImg">
                 <div className="chatlist-ring">
                {groupRec?.imageUrl ? (
               
                  <img src={groupRec.imageUrl} alt="" />
               
              ) : (
                getProfileName(groupRec.name)
              )}
               </div>
              </div>
              <div className="ChatName">
                <h4 className="flex">
                {getCapitalized(groupRec.name)}
                  <span>{groupRec?.lastMessage?.createdDate}</span>
                  {/*<div className="signupType m-0">
                    <label className="Selcheckbox pl-0">
                      <input
                        type="Checkbox"
                        id="Public"
                        name="Question"
                        value="PUBLIC"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>*/}
                </h4>
                <p>{groupRec?.lastMessage?.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Groups;

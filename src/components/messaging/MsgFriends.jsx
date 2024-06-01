import React from "react";
import moment from "moment";
import { useEffect } from "react";
import { getCapitalized, getProfileName } from "../../utils/helper";

const MsgFriends = ({
  data,
  handleTabToggling,
  getCurrentFriend,
  isGrpParticipant,
  handleClickParticipantIds,
}) => {
  const handleClick = (friendUserId, friendId, friendIsActive) => {
    handleTabToggling(friendUserId);
    getCurrentFriend(friendUserId, friendId, friendIsActive);
  };
  useEffect(() => {
    if (data) {
      handleTabToggling(data[0]?.id);
    }
  }, []);

  useEffect(() => {
    if (data !== null && data !== undefined && data.length > 0) {
    }
  }, []);

  return (
    <div className="chat-list">
      {data.map((friendRec, index) => {
        return (
          <div
            className="chatProfile d-flex"
            key={index}
            onClick={() =>
              handleClick(friendRec.id, friendRec.friendId, friendRec.isActive)
            }
          >
            <div className="ChatProImg">
              <div className="chatlist-ring">
                {friendRec?.imageUrl ? (
                  <img src={friendRec.imageUrl} alt="" />
                ) : (
                  getProfileName(friendRec)
                )}
              </div>
            </div>
            <div className="ChatName" id={friendRec.id}>
              <h4 className="flex">
                {getCapitalized(friendRec.name)}
                {friendRec?.lastMessage && (
                  <span>
                    {moment(friendRec.lastMessage.createdDate).format("m:mm a")}
                  </span>
                )}

                {isGrpParticipant && (
                  <div
                    className="signupType m-0"
                    onClick={() => handleClickParticipantIds(friendRec.id)}
                  >
                    <label className="Selcheckbox pl-0">
                      <input
                        type="Checkbox"
                        id="Public"
                        name="Question"
                        value="PUBLIC"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                )}
              </h4>

              {friendRec?.lastMessage && <p>{friendRec.lastMessage.content}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MsgFriends;

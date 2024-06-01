import React, { useState } from "react";
import moment from "moment";
const ChatBody = ({ data, currentGrpId, loggedInUser }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(
    loggedInUser.id
  );

  return (
    <div className='MessageChatList'>
      <div className='conversation-panel-messages'>
        {data.messages.map((chatRecord, index) => {
          return (
            <div className='qh5tioqs' key={index}>
              <div className='_1-FMR_15WYQ focusable-list-item'>
                <div className='Dateitems'>
                  <span>{chatRecord.friendlyDate}</span>
                </div>
              </div>

              {chatRecord.msgs.reverse().map((messageChat, index) => {
                return (
                  <div
                    key={index}
                    className={`focusable-list-item message-${
                      messageChat?.fromUser?.id === currentLoggedInUser
                        ? "out"
                        : "in"
                    }`}>
                    <div className='msg-container'>
                      <span className='l7jjieqr'>
                        {moment(messageChat?.createdDate?.split("+")[0]).format(
                          "hh:mm a"
                        )}
                      </span>
                      <div className='copyable-text'>
                        {(() => {
                          if (currentGrpId) {
                            return (
                              <div className='blue_color'>
                                <span>{messageChat.fromUser.name}</span>
                              </div>
                            );
                          }
                        })()}
                        <span>{messageChat.content}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ChatBody;

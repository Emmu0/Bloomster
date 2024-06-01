import React from "react";
const ChatFooter = () => {
  return (
    <>
      <div className="ChatFooter">
        <div className="_2cYbV">
          <div className="copyable-area flex">
            <div className="basicShareContent d-flex">
              <div className="emozi">
                <span>
                  <i className="fa-regular fa-face-smile"></i>
                </span>
              </div>
            </div>

            <div className="inputchatBoxWrap d-flex">
              <div className="inputChatbox">
                <div className="input-Group">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Type a Message"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="SendChatTxt flex">
                <span>
                  <i className="fa-solid fa-paper-plane-top"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatFooter;

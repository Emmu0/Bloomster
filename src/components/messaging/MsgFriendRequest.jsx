import React  from "react";
import * as image from "../../resources/images";
const MsgFriendRequest = () => {
    return (
        <div className="MessageChatList">
            <div className="AcceptanceRequest">
                <div className="requestedProfile flex">
                <div className="RequestedProimage">
                    <img src={image.userProfile} alt="" />
                </div>
                <div className="requProfilename">
                    <h3 className="mb-2">Adam Makram</h3>
                    <p><span><i class="fa-regular fa-people-roof"></i></span> 3 Mitual Friends</p>
                </div>
                </div>
                <div className="requestProButtons">
                <p><strong>Adam</strong> wants to connect with you</p>
                <div className="ReqActbuttonList mt-3 flex">
                    <button className="btn-blue btn-login d-block cancelbutton">Block</button>
                    <button className="btn-blue btn-login d-block">Accept</button>
                </div>
                </div>
            </div>
            <div className="conversation-panel-messages">
            <div className="qh5tioqs">
                <div className="_1-FMR_15WYQ focusable-list-item">
                    <div className="Dateitems">
                    <span>05/11/22</span>
                    </div>
                </div>
                <div className="focusable-list-item message-in">
                    <div className="msg-container">
                    <span className="l7jjieqr">10:10 AM</span>
                    <div className="copyable-text">
                        <span>Hello </span>
                        <div className="_1beEj">
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};
export default MsgFriendRequest;
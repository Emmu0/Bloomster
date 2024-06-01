import React from "react";
const MsgRightFooter = ({ createNewGroup }) => {
  return (
    <>
      <div className="ChatFooter">
        <div className="_2cYbV">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5  cancelbutton"
              onClick={() => createNewGroup(false)}
            >
              <i className="fa-solid fa-xmark mr-2"></i>Cancel
            </button>
            <button
              type="button"
              className="btn-blue btn-login d-block mb-5"
              onClick={() => createNewGroup(true)}
            >
              <i className="fa-solid fa-paper-plane mr-2"></i> Create Group
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MsgRightFooter;
/** @format */

import React from "react";
const IntelligenceResultPopup = ({ description }) => {
  return (
    <div className="modal d-flex" id="schoolactivity39" role="dialog">
      <div
        className="modal-dialog modal-lg"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
};

export default IntelligenceResultPopup;

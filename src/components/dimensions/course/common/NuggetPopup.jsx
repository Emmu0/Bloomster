import React from "react";
import * as image from "../../../../resources/images";
const NuggetPopup = () => {
  return (
    <div className="NuggetPopup d-none">
      <div className="NuggetPopupTitle flex">
        <div className="NuggetVickyImage">
          <h4>
            {" "}
            <img src={image.Robovicky} alt="" className="mr-2" /> That is
            Correct!
          </h4>
        </div>
        <div className="powrBulbicon">
          <img src={image.Audioicon} alt="" />
          <img src={image.Powericon} alt="" />
        </div>
      </div>
      <div className="NuggetPopupDesc">
        <p>
          {" "}
          The Theory of Intersectionality seeks to explain how we all have
          various identities that interact with one another to influence the way
          in which we move through the world. Well Done!
        </p>
      </div>
      <div className="NuggetPopupFooter">
        <div className="input-group full-Width-group basic_details_form">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              type="submit"
              className="btn-blue btn-login d-block mb-5 ml-auto"
            >
              <i className="fa-light fa-forward mr-2"></i> Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuggetPopup;

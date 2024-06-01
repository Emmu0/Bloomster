import React from "react";
import * as image from "../../resources/images";

const HolisticScene3 = () => {
  return (
    <div className="welcomscreenContent welcomscreentwo">
      <div className="welcirculuarContent flextwo Wlsocial_skill wlHolistic">
        <h3>Holistic Growth</h3>
      </div>
      <div className="Welcomedimenlist flex">
        <div className="Welcomecontentlist dimensionone">
          <div className="leftarrowpopup ">
            <img src={image.blueArrow} alt="" />
          </div>
          <p>Dimension 1</p>
        </div>
        <div className="Welcomecontentlist dimensiontwo">
          <div className="leftarrowpopup rightarrowpopup ">
            <img src={image.blueArrow} alt="" />
          </div>
          <div className="flextwo">
          <p>Dimension 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolisticScene3;

import React from "react";
import * as image from "../../resources/images";

const HolisticScene2 = () => {
  return (
    <div className="welcomscreenContent welcomscreentwo">
      <div className="welcirculuarContent flextwo Wlsocial_skill">
        <h3>Dimension</h3>
      </div>
      <div className="Welcomedimenlist flex">
        <div className="Welcomecontentlist">
          <div className="leftarrowpopup">
            <img src={image.blueArrow} alt="" />
          </div>
          <p>Skill 1</p>
        </div>
        <div className="Welcomecontentlist">
          <div className="leftarrowpopup rightarrowpopup">
            <img src={image.blueArrow} alt="" />
          </div>
          <p>Skill 2</p>
        </div>
      </div>
    </div>
  );
};

export default HolisticScene2;

import React from "react";
import * as image from "../../resources/images";

const HolisticScene1 = () => {
  return (
    <div className="welcomscreenContent">
      <div className="welcirculuarContent flextwo">
        <h3>Skill</h3>
      </div>
      <div className="Welcomedimenlist flex">
        <div className="Welcomecontentlist">
          <div className="leftarrowpopup">
            <img src={image.blueArrow} alt="" />
          </div>
          <div className="flextwo">
          <p className="p-0">Course 1</p>
          </div>
        </div>
        <div className="Welcomecontentlist">
          <div className="leftarrowpopup rightarrowpopup">
            <img src={image.blueArrow} alt="" />
          </div>
          <p>Course 2</p>
        </div>
      </div>
    </div>
  );
};

export default HolisticScene1;

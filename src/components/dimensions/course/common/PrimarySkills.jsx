import React, { useState } from "react";
import SkillSwap from "./SkillSwap";
import InfoModal from "../../../controls/InfoModal";
import { MSG } from "../../../../utils/Messages";

const PrimarySkills = () => {
  const [showSkills, setShowSkills] = useState(undefined);
  const showSkillSwap = () => {
    setShowSkills(true);
  };
  const close = () => {
    setShowSkills(undefined);
  };

  return (
    <div className="PMSkillList">
      <h5>
        <i className="fa-regular fa-bullseye-arrow mr-2"></i>Primary Skills:
        <span onClick={() => showSkillSwap()}>
          {" "}
          <i className="fa-thin fa-pencil ml-2 pointer"></i>
        </span>
      </h5>
      <div className="intrestlisting">
        <div className="instlistitem">
          <div className="carditem ">
            <h4 className="flex">
              Self-Confidence
              <span
                data-toggle="dropdown"
                id="SelectSubjectbranch"
                aria-haspopup="true"
              >
                {" "}
                <InfoModal data={MSG.KEYAREAEXP} />
              </span>
              <div
                className="SlecteSub dropdown-menu"
                aria-labelledby="SelectSubjectbranch"
              >
                <h5> Self-Confidence</h5>
                <p>
                  We use this extra class to reduce the horizontal padding on
                  either side of the caret by 25% and remove the margin-left
                  that’s added for regular button dropdowns. Those extra changes
                  keep the caret centered in the split button and provide a more
                  appropriately sized hit area next to the main button.
                </p>
              </div>
            </h4>
          </div>
        </div>
        <div className="instlistitem">
          <div className="carditem">
            <h4 className="flex">
              Cleaning and Organization...
              <i className="fa-regular fa-check ml-2"></i>
            </h4>
          </div>
        </div>
        <div className="instlistitem">
          <div className="carditem">
            <h4 className="flex">
              Impulse Control
              <InfoModal data={MSG.KEYAREAEXP} />
            </h4>
          </div>
        </div>
        <div className="instlistitem">
          <div className="carditem">
            <h4 className="flex">
              Empathy & Emotional Intel...
              <InfoModal data={MSG.KEYAREAEXP} />
            </h4>
          </div>
        </div>
        <div className="instlistitem">
          <div className="carditem">
            <h4 className="flex">
              Self-Care
              <InfoModal data={MSG.KEYAREAEXP} />
            </h4>
          </div>
        </div>
        <div className="instlistitem">
          <div className="carditem">
            <h4 className="flex">
              Patience
              <InfoModal data={MSG.KEYAREAEXP} />
            </h4>
          </div>
        </div>
      </div>
      {showSkills && <SkillSwap close={close} />}
    </div>
  );
};

export default PrimarySkills;

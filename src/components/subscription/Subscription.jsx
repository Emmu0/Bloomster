import React, { useState } from "react";
import Common from "./Common";
import * as image from "../../resources/images";

const Subscription = ({ subscribeData, close }) => {
  const [openCkeck, setOpencheck] = useState(false);

  const handleCheckout = () => {
    setOpencheck(true);
  };

  const closeCheckout = () => {
    setOpencheck(false);
  };

  return (
    <div>
      <div className="halfPagePOpup SchoolActivityPopup subscriptionwrapcard">
        <div
          className="modal d-flex"
          id="subscriptionactivity"
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <Common
              close={close}
              subscribeData={subscribeData}
              handleCheckout={handleCheckout}
              closeCheckout={closeCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

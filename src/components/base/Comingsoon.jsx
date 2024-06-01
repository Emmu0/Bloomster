import React, { useEffect } from "react";
import Home from "../Home";

import { breadcrumb } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { getUrlSegment } from "../../utils/helper";
import VickyComingSoon from "../widget/VickyComingSoon";
import { COMING_SOON } from "../../utils/DataObjects";
import { useState } from "react";

const Comingsoon = () => {
  const dispatch = useDispatch();
  const [comingSoonText, setComingSoonText] = useState();

  useEffect(() => {
    if (getUrlSegment()[0] === "network") {
      COMING_SOON.map((val) => {
        if (val?.title === "network") {
          setComingSoonText(val?.description);
        }
      });
      dispatch(breadcrumb({ title: "Network" }));
    } else if (getUrlSegment()[0] === "messaging") {
      COMING_SOON.map((val) => {
        if (val?.title === "messaging") {
          setComingSoonText(val?.description);
        }
      });
      dispatch(breadcrumb({ title: "Messaging" }));
    }
  }, []);

  return (
    <div>
      <Home>
        <div className="d-flex w-100 align-items-start overflow-visible">
          <div className="LeftbarPannel p-0">
            <VickyComingSoon description={comingSoonText} />
          </div>
          <div className="RightbarPannel fullrightpannelheight"></div>
        </div>
      </Home>
    </div>
  );
};

export default Comingsoon;

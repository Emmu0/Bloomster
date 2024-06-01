/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../utils";
import ScrollToTop from "react-scroll-to-top";
import { SITENAME, SITEURL } from "../../utils/Messages";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="container-fluid footer">
      <div className="LargeScrenResponsive">
        <h4>
          &#169; {year}{" "}
          <a href={process.env.REACT_APP_SITEURL} target="_blank">
            {SITEURL.urlName}
          </a>
          . All Rights Reserved.
          <span className="pl-3 ml-3">
            {" "}
            <a
              href={`https://bloomster.com/termsandprivacypolicy`}
              className="pblink mr-2"
              target="_blank"
            >
              Terms of Use
            </a>{" "}
            |{" "}
            <a
              href={`https://bloomster.com/termsandprivacypolicy`}
              className="pblink ml-2"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
          </span>
        </h4>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Footer;

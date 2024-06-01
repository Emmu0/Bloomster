import React from "react";
import WebLayout from "../layout/WebLayout";
import SecHeader from "./SecHeader";
import { PATHS } from "../../utils";
import { NavLink } from "react-bootstrap";
import * as image from "../../resources/images";
const Contactus = () => {
  return (
    <div className="hubSpotthemeSec">
      {/* <WebLayout className="outerPagesHeader deleteAccountpage"> */}
      <SecHeader />
      <div className="providerF">
        <div className="BlogList">
          <div className="Blogbanner text-left">
            <div className="container">
              <h3>
                <span>Contact us</span>
              </h3>
            </div>
          </div>
          <div className="container">
            <div className="Contact_us">
              <h2 className="text-center">We are here to help!</h2>
              <p className="text-center">
                Have a question? Want to share your feedback? Write to us at{" "}
                <a href="mailto:support@bloomster.com">support@bloomster.com</a>
                .
              </p>

              {/* <ul className='contactuslist'>
            <li>
                <p><strong>Write to us note</strong> </p>
                <p>userone@gmail.com</p>
            </li>
           </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hubspotFooter">
        <div className="container-fluid footer-dnd-area2 footer__container content-wrapper">
          <div className="hubPrimaryFooter">
            <div className="flex align-items-start">
              <div className="logoFooter">
                <img src={image.vicky_logo_LP} />
                <div className="seocialiconlist">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/bloomsterlearning"
                        target="_blank"
                      >
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/bloomsterlearning"
                        target="_blank"
                      >
                        <i class="fa-brands fa-square-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/bloomsterlearning"
                        target="_blank"
                      >
                        <i class="fa-brands fa-linkedin"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="FooterAddInfo">
                <h3>
                  <NavLink to={PATHS.USERSIGNUP} className="p-0">
                    {" "}
                    Sign Up
                  </NavLink>{" "}
                  for Bloomster today!
                </h3>
                <p>
                  411 S Melville Ave.
                  <br />
                  Tampa, Florida 33606
                  <br />
                  USA
                  <br />
                  <a href="mailto:contact@bloomster.com">
                    contact@bloomster.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="hubsecondryFoorer flex">
            <div className="hubSeccopyright">
              <p>© 2024 Balanced Tech Inc. All Rights Reserved.</p>
            </div>

            <div className="ourpolicyandters">
              <ul>
                <li>
                  <a
                    href={"https://bloomster.com/termsandprivacypolicy"}
                    target="_blank"
                  >
                    Terms of Use{" "}
                  </a>{" "}
                  |{" "}
                </li>{" "}
                <li>
                  <a
                    href={"https://bloomster.com/termsandprivacypolicy"}
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </WebLayout> */}
    </div>
  );
};

export default Contactus;

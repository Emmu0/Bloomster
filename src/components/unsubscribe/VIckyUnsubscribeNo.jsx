import React from "react";
import * as image from "../../resources/images";
import { PATHS } from "../../utils";
import { SITENAME } from "../../utils/Messages";
export const VickyUnsubscribeNo = (props) => {
  return (
    <div className="unsubscribebox">
      <table lassName="unsubscribeboxTable">
        <tbody>
          <tr className="unsubscribeboxTableRow">
            <td valign="top" colSpan={1} className="unsubscribeVickyLogodata">
              <a href="#">
                <img
                  src={image.Vicky_White_Logo}
                  className="unsubscribeVickyLogo"
                />
              </a>
            </td>
          </tr>
          <tr className="unsubscribeboxTableRowSpace">
            <td colSpan={2}>&nbsp;</td>
          </tr>
          <tr className="unsubscribeboxTableBody">
            <td
              valign="top"
              colSpan={1}
              className="unsubscribetableData"
              style={{ padding: "15px 0px 30px 0px" }}
            >
              <p
                style={{
                  fontSize: "24px",
                  lineHeight: "1.3",
                  padding: "10px 0px",
                  margin: 0,
                  marginBottom: "15px",
                  fontWeight: 600,
                  color: "#393939",
                }}
              >
                I am so glad you stayed!
              </p>
              <img
                src={image.vicky_robo_icon}
                width="220px"
                style={{
                  background: "#eee",
                  border: "1px solid #e9b72f",
                  padding: "10px 15px 0px 15px",
                }}
              />
            </td>
          </tr>
          <tr className="unsubscribeboxTableRowSpace">
            <td colSpan={2} style={{ padding: "0px 90px" }}></td>
          </tr>
          <tr className="unsubscribeboxTableRowSpace">
            <td colSpan={2} style={{ padding: "0px 80px" }}>
              <p
                style={{
                  fontSize: "16px",
                  color: "#393939",
                  fontWeight: 400,
                  paddingBottom: "10px",
                  textAlign: "center",
                  lineHeight: "1.2",
                  margin: "5px 0px 35px 0px",
                }}
              >
                I look forward to sharing inspiration, resources, and news on
                helping your child thrive in a rapidly changing world.
              </p>
            </td>
          </tr>
          <tr className="unsubscribeboxTableRowSpace">
            <td colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                textAlign: "center",
                background: "#e46666",
                color: "#fff",
                height: "30px",
                fontWeight: "bold",
                paddingRight: "20px",
              }}
            >
              © 2023{" "}
              <a
                href={process.env.REACT_APP_SITEURL}
                target="_blank"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                {SITENAME.NAME}.com
              </a>
              . All Rights Reserved.{" "}
              <a
                href={`https://bloomster.com/termsandprivacypolicy`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  paddingLeft: "20px",
                }}
                target="_blank"
              >
                Terms of Use
              </a>{" "}
              |{" "}
              <a
                href={`https://bloomster.com/termsandprivacypolicy`}
                style={{ color: "#fff", textDecoration: "none" }}
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VickyUnsubscribeNo;

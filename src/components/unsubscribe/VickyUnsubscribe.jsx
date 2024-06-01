import React, { useState, useEffect } from "react";
import * as image from "../../resources/images";
import VickyUnsubscribeYes from "./VickyUnsubscribeYes";
import { VickyUnsubscribeNo } from "./VIckyUnsubscribeNo";
import { getUnsubscribed } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PATHS } from "../../utils";
import { SITENAME } from "../../utils/Messages";
export const VickyUnsubscribe = () => {
  const { response } = useSelector((state) => state.collections);
  const [isViewYes, setIsViewYes] = useState();
  const [isViewNo, setIsViewNo] = useState();

  const dispatch = useDispatch();
  const param = useParams();
  function handleYes() {
    dispatch(getUnsubscribed(param?.token));
    setIsViewYes(true);
  }
  function handleNo() {
    setIsViewNo(true);
  }
  useEffect(() => {
    if (response) {
      setIsViewYes(true);
    }
  }, [response]);

  return (
    <>
      {!isViewYes && !isViewNo && (
        <div className="unsubscribebox">
          <table className="unsubscribeboxTable">
            <tbody>
              <tr className="unsubscribeboxTableRow">
                <td
                  valign="top"
                  colSpan={1}
                  className="unsubscribeVickyLogodata"
                >
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
                <td valign="top" colSpan={1} className="unsubscribetableData">
                  <h4
                    style={{
                      fontSize: "32px",
                      lineHeight: 1,
                      padding: 0,
                      margin: 0,
                      fontWeight: 600,
                      color: "#0e2d4a",
                    }}
                  >
                    Unsubscribe
                  </h4>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1,
                      padding: "10px 0px",
                      margin: 0,
                      marginBottom: "15px",
                      fontWeight: 600,
                      color: "#393939",
                    }}
                  >
                    I am sorry to see you go..!
                  </p>
                  <img
                    src={image.unsubscribe_nugget}
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
                <td colSpan={2} style={{ padding: "0px 90px" }}>
                  &nbsp;
                </td>
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
                      margin: "5px 0px 15px 0px",
                    }}
                  >
                    Are you sure you want to unsubscribe <br />
                    from {SITENAME.NAME}' newsletter?
                  </p>
                </td>
              </tr>
              <tr className="unsubscribeboxTableRowSpace">
                <td
                  colSpan={2}
                  style={{ padding: "0px 80px", textAlign: "center" }}
                >
                  <button
                    onClick={handleNo}
                    style={{
                      fontSize: "16px",
                      textDecoration: "none",
                      background: "#1b476f",
                      padding: "7px 40px",
                      margin: "0px 10px",
                      color: "#fff",
                      borderRadius: "20px",
                    }}
                  >
                    No
                  </button>
                  <button
                    onClick={handleYes}
                    style={{
                      fontSize: "16px",
                      textDecoration: "none",
                      background: "transparent",
                      padding: "7px 40px",
                      margin: "0px 10px",
                      color: "#1b476f",
                      borderRadius: "20px",
                      border: "1px solid #1b476f",
                    }}
                  >
                    Yes
                  </button>
                </td>
              </tr>
              <tr className="unsubscribeboxTableRowSpace">
                <td colSpan={2}>&nbsp;</td>
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
      )}
      {isViewYes && <VickyUnsubscribeYes />}
      {isViewNo && <VickyUnsubscribeNo />}
    </>
  );
};

export default VickyUnsubscribe;

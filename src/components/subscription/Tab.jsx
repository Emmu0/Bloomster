import React from "react";
import { useSelector } from "react-redux";
import * as image from "../../resources/images";

const Tab = ({ chooseTab, activeTab }) => {
  const { loggedInUser } = useSelector((state) => state.collections);
  return (
    <>
      {" "}
      <div className="tabgrid w-100 mb-4 pb-2">
        <ul>
          <li
            onClick={() => chooseTab(1)}
            className={`tabs1 ${activeTab == 1 ? "active-tabs" : ""} `}
          >
            <img src={image.planicon} alt="" />
            Plan
          </li>
          <li
            onClick={() => chooseTab(2)}
            className={`tabs1 ${activeTab == 2 ? "active-tabs" : ""} `}
          >
            <img src={image.billingHistory} alt="" />
            Billing History
          </li>
          {loggedInUser?.subscription?.cardNumber && (
            <>
              <li
                onClick={() => chooseTab(3)}
                className={`tabs1 ${activeTab == 3 ? "active-tabs" : ""} `}
              >
                <img src={image.paymentinformation} alt="" />
                Payment Information
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
export default Tab;

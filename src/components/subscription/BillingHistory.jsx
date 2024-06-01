import React from "react";

import { useSelector } from "react-redux";
import { dateLongFormat } from "../../utils/helper";
import { ShimmerCategoryList } from "react-shimmer-effects";

const BillingHistory = () => {
  const { billingData } = useSelector((state) => state.collections);
  const _openInvoice = (obj) => {
    if (obj && obj.invoiceUrl) {
      window.open(obj.invoiceUrl, "_blank");
    }
  };
  return (
    <>
      {billingData ? (
        <div className="billingHistryTabl mt-4">
          <table width="100%" className="w-100">
            <tbody>
              <tr>
                <th>
                  <h5>Date</h5>
                </th>
                <th>
                  <h5>Invoice Number</h5>
                </th>
                <th>
                  <h5>Amount</h5>
                </th>
                <th>
                  <h5>View</h5>
                </th>
              </tr>
            </tbody>
            <tbody>
              {billingData &&
                billingData?.records.map((val, key) => (
                  <tr key={key}>
                    <td>
                      <p>{dateLongFormat(val?.invoiceDate)}</p>
                    </td>
                    <td>
                      <p>{val?.invoiceNumber}</p>
                    </td>
                    <td>
                      <p>${val?.amount}</p>
                    </td>
                    <td>
                      <p
                        className="viewinv pointer"
                        onClick={() => _openInvoice(val)}
                      >
                        View
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
            {billingData?.records?.length === 0 && (
              <td colSpan={4}>
                <p className="text-center">No Record Found</p>
              </td>
            )}
          </table>
          {}
        </div>
      ) : (
        <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
      )}
    </>
  );
};
export default BillingHistory;

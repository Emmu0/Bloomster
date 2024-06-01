import React from "react";
import { getDimIcon, getSequnceSortww } from "../../../../utils/helper";

const DimTab = ({ toggleTab, toggleState, data }) => {
  return (
    <div className='tabgrid w-100 m-0'>
      <ul>
        {getSequnceSortww(data?.records)?.map((value, key) => (
          <li
            key={key}
            className={
              toggleState?.key === value.id ? "tabs active-tabs" : "tabs"
            }
            onClick={() => toggleTab(key, value)}>
            {getDimIcon(value)}
            {value.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DimTab;

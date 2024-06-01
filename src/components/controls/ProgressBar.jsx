/** @format */
import { useMemo } from "react";

const ProgressBar = ({ color, value, data }) => {
  return useMemo(
    () => (
      <span className="Progresslistitem w-50 m-0">
        <span
          className={`diemensionalProgress progressbar1`}
          style={{
            maxWidth: `${value}%`,
            background: color ? color : "#20c997",
          }}
        ></span>
      </span>
    ),
    [data]
  );
};

export default ProgressBar;

/** @format */

import React, { useState } from "react";

import PuffLoader from "react-spinners/PuffLoader";

const Spinner = (props) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#329fff");

  return (
    <div className="sweet-loading">
      <PuffLoader color={color} loading={loading} size={60} />
    </div>
  );
};

export default Spinner;

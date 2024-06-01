/** @format */

import React from "react";
import * as image from "../../resources/images";

const Warning = ({ response }) => {
  return (
    <div>
      {/* <h2> My title</h2> */}
      <p>{response?.message}</p>
    </div>
  );
};

export default Warning;

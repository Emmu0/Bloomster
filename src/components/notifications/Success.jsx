/** @format */

import React from "react";
import * as image from "../../resources/images";
import { getCapitalized } from "../../utils/helper";

const Success = ({ response }) => {
  return (
    <div>
      {/* <h2> My title</h2> */}
      <p>{response?.message}</p>
    </div>
  );
};

export default Success;

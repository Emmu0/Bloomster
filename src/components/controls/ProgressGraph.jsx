/** @format */

import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";

const ProgressGraph = ({ data }) => {
  useEffect(() => {
    loadData(data);
  }, [data]);
  const [cursorPoint, setCursorPoint] = useState([]);
  const loadData = (data) => {
    if (data && data?.name) {
      setCursorPoint({
        x: data.x,
        y: data.y,
        name: data?.name,
      });
    }
  };

  return (
    <div className="DChartWrap chartlistprogrss">
      <div className={`DchartContnr donatchart${data?.name}`}>
        <div className="ProgressDetails">
          {cursorPoint && (
            <div
              className="ProgressDot"
              style={{
                left: `${cursorPoint?.x}%`,
                bottom: `${cursorPoint?.y}%`,
              }}
            >
              <img src={image.Dimensionchartball} alt="" />

              <span className="Coordinate">
                ({cursorPoint?.x},{cursorPoint?.y})
              </span>
            </div>
          )}

          <div className="starttoendpoint">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
        <div className="DcverticleParameter">
          <span>Understanding </span>
          <ul>
            <li>100</li>
            <li>75</li>
            <li>50</li>
            <li>25</li>
            <li></li>
          </ul>
        </div>
        <div className="DcHorizontalParameter">
          <span>Progress</span>
          <ul>
            <li></li>
            <li>25</li>
            <li>50</li>
            <li>75</li>
            <li>100</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgressGraph;

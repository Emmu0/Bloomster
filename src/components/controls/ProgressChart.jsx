/** @format */
import * as image from "../../resources/images";
const ProgressChart = ({ data }) => {
  return (
    <div className="DChartWrap">
      {/* <h3>{data?.title}</h3> */}
      <div className="DchartContnr">
        <div className="ProgressDetails">
          <div
            className="ProgressDot"
            style={{
              left: `${data?.x}%`,
              bottom: `${data?.y}%`,
            }}
          >
            <img src={image.Dimensionchartball} alt="" />
          </div>
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

export default ProgressChart;

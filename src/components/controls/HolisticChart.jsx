/** @format */
import { ShimmerThumbnail } from "react-shimmer-effects";
import * as image from "../../resources/images";
const HolisticChart = ({ data }) => {
  return (
    <div>
      {data ? (
        <div className="DChartWrap HolisticProgress">
          <h3>{data?.title} </h3>
          <div className="DchartContnr">
            <div className="ProgressDetails">
              <div
                className="ProgressDot"
                style={{
                  left: `${data?.x}%`,
                  bottom: `${data?.y}%`,
                }}
              >
                <img src={image.Holisticchartball}></img>
                <span className="Coordinate">
                  ({data?.x},{data?.y})
                </span>
              </div>
              <div className="starttoendpoint">
                <span>Follower</span>
                <span>Leader</span>
                <span>Challenger</span>
                <span>Explorer</span>
              </div>
            </div>
            <span className="HIPCharted">Intellectual and Physical</span>
            <div className="DcverticleParameter">
              <span>Performance</span>

              <ul>
                <li>100</li>
                <li>90</li>
                <li>80</li>
                <li>70</li>
                <li>60</li>
                <li>50</li>
                <li>40</li>
                <li>30</li>
                <li>20</li>
                <li>10</li>
                <li></li>
              </ul>
            </div>
            <div className="DcHorizontalParameter">
              <span className="HSESCharted">
                Social, Emotional, and Spiritual
              </span>
              <span>Readiness</span>
              <ul>
                <li></li>
                <li>10</li>
                <li>20</li>
                <li>30</li>
                <li>40</li>
                <li>50</li>
                <li>60</li>
                <li>70</li>
                <li>80</li>
                <li>90</li>
                <li>100</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <ShimmerThumbnail height={500} width={700} />
      )}
    </div>
  );
};

export default HolisticChart;

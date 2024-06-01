import React from "react";
import { useSelector } from "react-redux";

import { getSequnceSort } from "../../utils/helper";
import ReadMore from "../controls/ReadMore";
import Vicky from "../controls/Vicky";
const CourseJourney = ({ data, courseObj }) => {
  const { journeyData } = useSelector((state) => state.collections);

  let cData = data?.courseObj ? data?.courseObj : data;

  return (
    <>
      {journeyData?.records.length > 0 && (
        <div className="CourseJourney pt-3" id="CourseJourney">
          <h4 className="mb-3 ">
            {" "}
            {courseObj?.skillName && `Courses for ${courseObj?.skillName}`}
          </h4>

          {getSequnceSort(journeyData?.records)?.map((val, key) => (
            <div className="flex flex-wrap" key={key}>
              <div className="jrny_box">
                <span>
                  <span className="Lvlcount">
                    {cData?.isAcademic ? "C" + val?.sequence : "L" + val?.level}
                  </span>
                </span>
                <h4>
                  {val?.name}
                  <p className="your_AudioIocn">
                    <Vicky text={val?.description} />
                  </p>
                </h4>

                <div className="bordr_styl m-0"></div>
                <p>{val?.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default CourseJourney;

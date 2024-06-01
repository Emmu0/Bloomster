import React from "react";
import { useSelector } from "react-redux";
import ReadMore from "../../../controls/ReadMore";

const Lesson = () => {
  const { socialActivityData } = useSelector((state) => state.collections);
  let lessonDetail = {};
  if (socialActivityData != "") {
    lessonDetail = socialActivityData?.records[0]?.lesson;
  }
  return (
    <>
      {lessonDetail && (
        <div className="lessonDtl">
          <h4>{lessonDetail?.name}</h4>
          <br />
          <ReadMore limit={700} height={50}>
            {lessonDetail?.content}
          </ReadMore>
        </div>
      )}
    </>
  );
};

export default Lesson;

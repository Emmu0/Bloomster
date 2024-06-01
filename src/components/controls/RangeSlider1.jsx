import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateScore } from "../../redux/actions";
import { Slider } from "rsuite";

const RangeSlider1 = ({ ques, changeSurvey, data }) => {
  const dispatch = useDispatch();
  const { studentScore } = useSelector((state) => state.collections);

  const [value, getValue] = useState(ques.score);
  const [score, setScore] = useState([]);
  const [number, setnumber] = useState(0);
  const [number1, setnumber1] = useState(0);

  const handleChangeHorizontal = (e) => {
    changeSurvey(e, ques, data);
    dispatch(updateScore(e));
    getValue(e);
    setnumber(studentScore);
  };

  useEffect(() => {
    setScore(ques.title);
  }, [ques.title]);

  const changeValue = (data) => {
    data.answer = data?.answer ? data?.answer : 0;
    changeSurvey(data.answer, ques, data);
    setnumber1(1);
  };
  return (
    <div className="QstrangeSlider flex" onClick={() => changeValue(data)}>
      <Slider
        id={"rangeSlider" + data?.id}
        min={0}
        max={10}
        progress
        tooltip={true}
        barClassName="barClassName"
        handleClassName={data?.answer == null ? "" : "activeBall"}
        defaultValue={data?.answer == null ? 0 : data?.answer}
        onChange={(value) => {
          handleChangeHorizontal(value);
        }}
      />
      <span className="defaultScore">
        {/* {Number.isNaN(showData) ? Math.floor(value) : showData} */}
      </span>
    </div>
  );
};

export default RangeSlider1;

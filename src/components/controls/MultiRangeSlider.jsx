import { useRef, useState } from "react";

const MultiRangeSlider = ({ min, max, rangeValue, rangeValueTo }) => {
  const minValRef = useRef(null);
  const maxValRef = useRef(null);

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          rangeValue(event.target.value);
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
          rangeValue(event.target.value);
        }}
        className={"thumb thumb--zindex-3"}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          rangeValue(event.target.value);
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
          rangeValueTo(event.target.value);
        }}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </>
  );
};

export default MultiRangeSlider;

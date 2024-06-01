import React, { useEffect, useState } from "react";
import { setShowMore } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const ReadMore = ({ children, limit, height }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const [textheightone, settextheightone] = useState(true);
  const { showMore } = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showMore) {
      toggleReadMore();
    }
  }, [showMore]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    settextheightone(true);
    if (!isReadMore && textheightone === false) {
      dispatch(setShowMore());
    }
  };

  useEffect(() => {
    if (!isReadMore) {
      settextheightone(false);
      // dispatch(setShowMore());
    }
  }, [isReadMore, textheightone]);

  if (!limit) {
    limit = 200;
  }
  let divheight = height;
  document.querySelectorAll(" p * div ");
  // if (document.getElementById("textheight") && text) {
  //   divheight = document.getElementById("textheight")?.offsetHeight;
  // }

  return (
    <span
      id="textheight"
      className={`text textdescription ${
        textheightone ? "coursetextheght" : ""
      }`}
      key={Math.random()}
    >
      {isReadMore ? (
        <>
          <span
            className={isReadMore ? "textdesc" : "CoursecardTextDesc"}
            dangerouslySetInnerHTML={{
              __html: typeof text === "string" && text && text?.slice(0, limit),
            }}
          />
        </>
      ) : (
        <span
          className="textdesc"
          dangerouslySetInnerHTML={{
            __html: text && text,
          }}
        />
      )}

      {text && text.length >= limit && (
        <span onClick={toggleReadMore} className="read-or-hide pointer">
          {isReadMore ? (
            <span className={`readmoretxt`}>...Read More</span>
          ) : (
            <span className="readmoretxt leasstext"> Read Less</span>
          )}
        </span>
      )}
    </span>
  );
};

export default ReadMore;

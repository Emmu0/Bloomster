import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home";
import Personality from "../dimensions/course/social/Personality";
import PersonalitySidebar from "../dimensions/course/social/PersonalitySidebar";
import { breadcrumb } from "../../redux/actions";
const ProfilePersonality = (props) => {
  const { breadcrumbData } = useSelector((state) => state.collections);
  const [isBeginQuizShow, setIsBeginQuizShow] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!breadcrumbData) {
      setIsBeginQuizShow(false);
      dispatch(
        breadcrumb({ title: "Personality Type", icon: image.bussinessdiagram })
      );
    }
  }, [breadcrumbData]);
  return (
    <div>
      <Home>
        <div className='d-flex align-items-flex-start w-100'>
          <div className='LeftbarPannel p-0'>
            <div className='personalitylandingpage'>
              <Personality isBeginQuizShow={isBeginQuizShow} />
            </div>
          </div>
          <div className='RightbarPannel p-0 personalityrightpannel'>
            <PersonalitySidebar
              setIsBeginQuizShow={setIsBeginQuizShow}
              quizD={true}
            />
          </div>
        </div>
      </Home>
    </div>
  );
};

export default ProfilePersonality;

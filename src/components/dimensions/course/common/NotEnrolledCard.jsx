import React, { useState } from "react";
import InfoModal from "../../../controls/InfoModal";
import { MSG } from "../../../../utils/Messages";

const NotEnrolledCard = ({ data, setSubject }) => {
  return (
    <div className='Gridcard position-relative'>
      <div className='MultipleBranchSub flex w-100'>
        <div className='flex'>
          <div className='Gridsocialsec justify-content-center '>
            <h4 className='mr-3 '>{data?.name}</h4>
          </div>
          <p className='ml-3'>
            Please Select {data?.name} course that you are studying in school.
          </p>
        </div>
        {data?.courses?.length > 0 ? (
          <span
            className='mr-3 pointer'
            data-toggle='modal'
            data-target='#chooseCourse'
            onClick={() => setSubject(data, "nocard")}>
            {" "}
            <i className='fa-thin fa-pencil ml-2'></i>
          </span>
        ) : (
          <div className='Course_progressbar'>
            Coming Soon
            <InfoModal data={MSG.KEYAREAEXP} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotEnrolledCard;

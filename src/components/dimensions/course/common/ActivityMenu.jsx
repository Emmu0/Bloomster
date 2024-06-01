/** @format */

import React from "react";
import { useHistory, useParams } from "react-router-dom";
import * as image from "../../../../resources/images";
import { getProfileName, textTrim } from "../../../../utils/helper";
import { PATHS } from "../../../../utils";
const ActivityMenu = ({
  activityCards,
  data,
  showViewActivity,
  dimensionName,
  showActivity,
}) => {
  const history = useHistory();
  const params = useParams();
  const redirect = (value, data, dimensionName, type) => {
    if (value?.type === "VICKY") {
      showActivity(data?.modules, "Vicky", data?.name, data);
    } else {
      showViewActivity(value, data, dimensionName, "indiviual");
    }
  };
  const _redirectLesson = (data) => {
    if (data?.islocked) {
      return false;
    }
    history.push(PATHS.INTEL_DETAIL_STR + params.id + "/" + data?.id);
  };

  return (
    <div className='ListIcon'>
      <span
        className='threeDots'
        aria-haspopup='true'
        aria-expanded='false'
        id='navbardropdownAct'
        data-toggle='dropdown'>
        <i className='fa-solid fa-ellipsis-vertical'></i>
      </span>
      <ul
        className='dropdown-menu dropdown-menu-end'
        aria-labelledby='navbardropdownAct'>
        <li>
          {" "}
          <div className='ActivityCategory border-0'>
            <h4 className='d-flex align-items-center p-0 border-0'>
              <i className='fa-duotone fa-line-height'></i> {data?.name}
            </h4>
          </div>
        </li>

        {activityCards &&
          activityCards?.length > 0 &&
          activityCards?.map((value, ky) => (
            <React.Fragment key={ky}>
              {value?.type === "VICKY" ||
                (value?.name === "Learning Center" && (
                  <li>
                    <span
                      className='SubFName'
                      onClick={() =>
                        showActivity(data?.modules, "Vicky", data?.name, data)
                      }>
                      <div className='ActVityMenViky mr-2'>
                        <img src={image.greenflag} alt='...' />
                      </div>

                      {textTrim(
                        value?.name?.charAt(0).toUpperCase() +
                          value?.name?.slice(1),
                        18
                      )}
                    </span>
                  </li>
                ))}
              {value && value?.type === "ENRICHMENT" && (
                <li>
                  <span
                    className='SubFName'
                    onClick={() =>
                      redirect(value, data, dimensionName, "indiviual")
                    }>
                    {(value?.contentType === "Videos" ||
                      value?.contentType === "Video") && (
                      <div>
                        <i className='fa-brands fa-youtube mr-1' />
                      </div>
                    )}
                    {value?.contentType === "Books" && (
                      <div>
                        <i className='fa-solid fa-book' />
                      </div>
                    )}
                    {value?.contentType === "Links" && (
                      <div>
                        <i className='fa-solid fa-link' />
                      </div>
                    )}
                    {textTrim(
                      value?.name?.charAt(0).toUpperCase() +
                        value?.name?.slice(1),
                      18
                    )}
                  </span>
                </li>
              )}
              {value?.type === "PROVIDER" && (
                <li>
                  <span
                    className='SubFName'
                    onClick={() => _redirectLesson(data)}>
                    <div className='ActVityMenViky mr-2'>
                      <span onClick={() => _redirectLesson(data)}>
                        {getProfileName(value?.name)}
                      </span>
                    </div>

                    {textTrim(
                      value?.name?.charAt(0).toUpperCase() +
                        value?.name?.slice(1),
                      18
                    )}
                  </span>
                </li>
              )}
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
};

export default ActivityMenu;

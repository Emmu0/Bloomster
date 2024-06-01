/** @format */

import { useSelector } from "react-redux";
import { getCapitalized, getName } from "../../utils/helper";

const Heading = ({ title, icon, type }) => {
  const { getSelectedUser } = useSelector((state) => state.collections);
  return (
    <div className='heading d-flex'>
      <h2>
        {type === "icon" ? (
          <i
            className='icon icon-v2-solution-new  mb-0 h4'
            style={{ fontSize: "24px" }}></i>
        ) : (
          <img src={icon} alt='' className='mr-2' />
        )}

        {title}
      </h2>
      {getSelectedUser && (
        <div className='VKprofile'>
          <div className='vkprofilename'>
            <span className='text-dark'>
              <i className='fa fa-user'></i>
              {getCapitalized(getName(getSelectedUser))}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heading;

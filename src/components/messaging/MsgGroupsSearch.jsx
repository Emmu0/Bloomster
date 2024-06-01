import React from "react";

const GroupsSearch = ({ searchGroupName, createNewGroup }) => {
  const handleChange = (event) => {
    searchGroupName(event.target.value);
  };
  return (
    <div>
      <div className="SearchcHat">
        <div className="input-group placeholderseach">
          <div className="form-group">
            <span className="">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              placeholder="search..."
              className="form-control"
              onChange={handleChange}
            />
            <div className="searchIcon"></div>
          </div>
        </div>
      </div>
      <div className="CreateNewGroup pointer">
        <div className="CNgroup" onClick={() => createNewGroup(true)}>
          <div className="chatlist-ring">
            <i className="fa-solid fa-circle-plus"></i>
          </div>
          <h4> Create New Group</h4>
        </div>
      </div>
    </div>
  );
};

export default GroupsSearch;

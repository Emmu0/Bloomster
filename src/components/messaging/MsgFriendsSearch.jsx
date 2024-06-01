import React from "react";
import * as image from "../../resources/images";
const FriendsSearch = () => {
  return (
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
            />
            <div className="searchIcon"></div>
            </div>
        </div>
    </div>
  )
};
export default FriendsSearch;
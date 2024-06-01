import React, { useState, useEffect } from "react";
import { isLoading } from "../../redux/actions";
import { useForm } from "../../utils/Packages";
import SearchField from "../controls/SearchField";
import MsgFriends from "./MsgFriends";
import MsgGroups from "./MsgGroups";
import MsgAddGroupName from "./MsgAddGroupName";
import MsgGroupsSearch from "./MsgGroupsSearch";
import MsgRightFooter from "./MsgRightFooter";
import * as image from "../../resources/images";
import { useSelector, useDispatch } from "react-redux";
import {
  frndSearchResponse,
  addResponse,
  groupsResponseData,
  addFriend,
  createdGroupPostAPI,
} from "../../redux/actions/MsgPanelAPIs";
import { ShimmerCategoryItem } from "../../utils/Packages";
const MsgRightPanel = ({ currentFriendId, selectGroupId, currentTabState }) => {
  const {
    register,
    setValue,
    resetField,
    reset,
    handleSubmit,
    control,
    clearErrors,
    getValues,

    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [friendsRecords, setFriendsRecords] = useState();
  const [groupsRecords, setGroupsRecords] = useState();
  const [selectedFrndId, setSelectedFrndId] = useState();
  const [selectedGrpId, setSelectedGrpId] = useState();
  const { loggedInUser } = useSelector((state) => state.collections);
  const [toggleClick, SetToggleClick] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const { loggedInChatbox, getFriends, groupsResponse } = useSelector(
    (state) => state.messaging
  );

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
    currentTabState(index);
  };
  useEffect(() => {
    // 👇️ don't run on initial render
    if (
      toggleState !== undefined &&
      toggleState !== "" &&
      toggleState !== null
    ) {
      tabHandling();
    }
  }, [toggleState]);

  const tabHandling = () => {
    if (toggleState === 1) {
      dispatch(addResponse(loggedInUser));
    } else if (toggleState === 2) {
      dispatch(groupsResponseData());
    }
  };

  const handleTabToggling = (selectedFrndOrGrpId) => {
    if (toggleState === 1) {
      selectGroupId("");
      setSelectedGrpId("");
      setIsNewGroup(false);
      currentFriendId(selectedFrndOrGrpId);
      setSelectedFrndId(selectedFrndOrGrpId);
    } else if (toggleState === 2) {
      selectGroupId(selectedFrndOrGrpId);
      setSelectedGrpId(selectedFrndOrGrpId);
      currentFriendId("");
      setSelectedFrndId("");
    }
  };

  useEffect(() => {
    dispatch(addResponse(loggedInUser));
  }, []);

  useEffect(() => {
    if (loggedInChatbox && loggedInChatbox?.records.length > 0) {
      getCurrentFriend(
        loggedInChatbox.records[0].id,
        loggedInChatbox.records[0].friendId,
        loggedInChatbox.records[0].isActive
      );
      setFriendsRecords(loggedInChatbox);
    }
  }, [loggedInChatbox]);

  const resetFriends = () => {
    SetToggleClick(!toggleClick);
  };
  useEffect(() => {
    dispatch(groupsResponseData());
  }, []);

  useEffect(() => {
    if (groupsResponse && toggleState === 2) {
      setGroupsRecords(groupsResponse.records);
    }
  }, [groupsResponse]);

  const addFriends = (data) => {
    dispatch(addFriend(loggedInUser, data));
  };

  const getCurrentFriend = (friendUserId, friendId, friendIsActive) => {
    currentTabState(toggleState);
    currentFriendId(friendUserId, friendId, friendIsActive);
    setSelectedFrndId(friendUserId);
  };

  const searchGroupName = (grpName) => {
    if (grpName) {
      setGroupsRecords(
        groupsResponse.records.filter((grp) => {
          return grp.name.toLowerCase().includes(grpName.toLowerCase());
        })
      );
    } else {
      setGroupsRecords(groupsResponse.records);
    }
  };

  const [addGroupName, setAddGroupName] = useState("");
  const [participantIds, setParticipantIds] = useState([]);

  const handleClickParticipantIds = (friendId) => {
    let tempParticipantIds = [
      ...new Set([...participantIds, friendId, loggedInUser.id]),
    ];

    setParticipantIds(tempParticipantIds);
  };

  const handleChange = (groupName) => {
    setAddGroupName(groupName);
  };

  const createNewGroup = (isNewGroup) => {
    if (isNewGroup) {
      const createdGroup = {
        name: addGroupName,
        userIds: participantIds,
      };

      if (createdGroup?.name && createdGroup?.userIds) {
        dispatch(createdGroupPostAPI(createdGroup));
        setIsNewGroup(false);
      } else {
        setIsNewGroup(isNewGroup);
      }
    } else {
      setIsNewGroup(isNewGroup);
    }
    setAddGroupName("");
    setParticipantIds([]);
  };

  return (
    <div className="RightbarPannel p-0">
      <div className="heading">
        <h2>
          <img src={image.network_color} className="mr-2" alt="" /> My Network
        </h2>
      </div>
      <div className="tabgrid cbTabs m-0">
        <ul className="tab-list">
          <li
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <i className="fa-regular fa-user-group"></i> Friends
          </li>
          <li
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <i className="fa-regular fa-users"></i> Groups
          </li>
          <li
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <i className="fa-regular fa-user"></i> Providers
          </li>
        </ul>
      </div>
      {toggleState === 1 ? (
        <div className="ProListingwrap ">
          <div className="SearchcHat">
            <div className="input-group placeholderseach">
              <div className="form-group">
                <span className="">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <SearchField
                  placeholder="Search"
                  name="searchFriend"
                  resetFields={resetFriends}
                  toggleClick={toggleClick}
                  isLoading={isLoading}
                  setValue={setValue}
                  type="getUsersForFriends"
                  commonFetch={frndSearchResponse}
                  dataFetched={getFriends}
                  addFriends={addFriends}
                />
                <div className="searchIcon"></div>
              </div>
            </div>
          </div>
          {toggleState === 1 &&
          friendsRecords !== undefined &&
          friendsRecords !== null ? (
            <MsgFriends
              data={friendsRecords.records}
              handleTabToggling={handleTabToggling}
              getCurrentFriend={getCurrentFriend}
              isGrpParticipant={isNewGroup}
              handleClickParticipantIds={handleClickParticipantIds}
            ></MsgFriends>
          ) : (
            <ShimmerCategoryItem />
          )}
        </div>
      ) : (
        ""
        //"Records Not Found"
      )}
      {toggleState === 2 &&
      groupsRecords !== undefined &&
      groupsRecords !== null ? (
        <div className="ProListingwrap">
          {isNewGroup ? (
            <div className="h-100">
              <MsgAddGroupName handleChange={handleChange} />
              <MsgFriends
                data={friendsRecords.records}
                handleTabToggling={handleTabToggling}
                getCurrentFriend={getCurrentFriend}
                isGrpParticipant={isNewGroup}
                handleClickParticipantIds={handleClickParticipantIds}
              ></MsgFriends>
            </div>
          ) : (
            <MsgGroupsSearch
              searchGroupName={searchGroupName}
              createNewGroup={createNewGroup}
            />
          )}
          {!isNewGroup &&
          groupsRecords !== undefined &&
          groupsRecords !== null ? (
            <MsgGroups
              data={groupsRecords}
              handleTabToggling={handleTabToggling}
            ></MsgGroups>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
        // "Records Not Found"
      )}
      {isNewGroup ? <MsgRightFooter createNewGroup={createNewGroup} /> : ""}
    </div>
  );
};
export default MsgRightPanel;

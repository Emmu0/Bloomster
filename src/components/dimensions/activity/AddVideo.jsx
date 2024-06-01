/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { VideoCard } from "../";
import * as image from "../../../resources/images";
import { ResetSong } from "../../../redux/actions";
import InfiniteScroll from "react-infinite-scroll-component";
import { MSG } from "../../../utils/Messages";

const AddVideo = ({
  register,
  required,
  message,
  errors,
  linkData,
  viewVideoScreen,
  showActivityForm,
  selectedvideo,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [youtubeFilter, setYoutubeFilter] = useState([]);
  const [videoPopup, setVideoPopup] = useState();
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [query, setquery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editVideo, setEditVideo] = useState();
  const [totalSelected, setTotalSelected] = useState();
  const { resetSong, activyDetails } = useSelector(
    (state) => state.collections
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (resetSong === "RESET_SONG") {
      setFilteredData([]);
      dispatch(ResetSong(undefined));
      setquery("");
    }
  });
  // useEffect(() => {
  //   if(editVideo?.length <= 0){
  //     setTotalSelected(0);
  //   }if(editVideo?.length > 0){
  //     setTotalSelected(editVideo?.length);
  //   }
  // }, [])
  useEffect(() => {
    let videoObject = [];

    if (activyDetails != null) {
      activyDetails?.records.map((val, key) => {
        videoObject.push({
          description: val?.description,
          link: val?.siteUrl,
          name: val?.title,
          image: val?.image,
          isChecked: true,
        });
      });
    }
    setSelectedVideo(videoObject);
    setTotalSelected(videoObject?.length);
    selectedvideo(videoObject?.length);
    setEditVideo(videoObject);
  }, [activyDetails]);

  const youtubeApiSearch = (search, token) => {
    axios
      .create({
        baseURL: "https://www.googleapis.com/youtube/v3",
        params: {
          part: "snippet",
          maxResults: 10,
          key: "AIzaSyCASWzY6c15nhA2aNeG6qrxoS9OguacOzw",
          pageToken: token ? token : "",
        },
      })
      .get("/search", {
        params: {
          q: search,
        },
      })
      .then((data) => {
        setYoutubeFilter(data);
        if (filteredData?.length > 0) {
          let arr = [...data?.data?.items, ...filteredData];
          setFilteredData(arr);
        } else {
          setFilteredData(data?.data?.items);
        }

        //
      });
  };
  useEffect(() => {
    const handleKeyPress = () => {
      let search = document.getElementById("search").value;
      setSearchTerm(search);
      if (search !== "") {
        youtubeApiSearch(search);
      } else if (search === "" && query === "") {
        if (!showActivityForm) {
          setFilteredData(undefined);
        }
      }
    };

    const timerId = setTimeout(() => {
      handleKeyPress();
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchTerm, query]);

  const resetFields = () => {
    setFilteredData(undefined);
    setTotalSelected(0);
    selectedvideo(0);
    setquery("");
    // setSelectedVideo("");
    // setTotalSelected(0);
  };

  const addSong = (song) => {
    song.type = "Video";
    var filtered = filteredData.filter(function (el) {
      return el.id.videoId != song.id.videoId;
    });

    setFilteredData(filtered);
    setSelectedVideo((currentArray) => [...currentArray, song]);
  };

  const viewVideo = (data) => {
    viewVideoScreen(data);
    setVideoPopup(data);
  };

  linkData(selectedVideo);

  const youtubeNextPage = () => {
    let search = document.getElementById("search").value;
    youtubeApiSearch(search, youtubeFilter?.data?.nextPageToken);
  };

  const selectVideo = (index, isChecked, type) => {
    let prev = [];
    let nxt = [];
    if (type === "previous") {
      let array = [];

      const temp = [...editVideo];
      temp[index].isChecked = !temp[index].isChecked;
      setEditVideo(temp);

      let counter = 0;
      editVideo.map((value, index) => (value.isChecked ? counter++ : ""));

      setTotalSelected(counter);
      selectedvideo(counter);
      editVideo.map((video, index) => {
        if (video.isChecked && !video.isAddedToUserActivity) {
          array?.push({
            activityDetailId: video?.id?.videoId,
            name: video?.name,
            link: video?.link,
            isChecked: video.isChecked,
            sharing: "PRIVATE",
          });
        }
      });
      prev = array;
    } else if (type === "new") {
      let array = [];
      const temp = [...filteredData];
      temp[index].isChecked = !temp[index].isChecked;

      setFilteredData(temp);
      let counter = 0;

      filteredData.map((value, index) => (value.isChecked ? counter++ : ""));
      setTotalSelected(editVideo.length + counter);

      // setTotalSelected(counter);
      selectedvideo(counter);
      filteredData.map((video, index) => {
        if (video.isChecked && !video.isAddedToUserActivity) {
          array?.push({
            activityDetailId: video?.id?.videoId,
            name: video?.snippet?.title,
            link: "https://youtube.com/watch?v=" + video?.id?.videoId,
            isChecked: video.isChecked,
            sharing: "PRIVATE",
          });
        }
      });
      nxt = array;
    }
    if (prev.length == 0) {
      nxt.concat(editVideo);
      var arr3 = [...nxt, ...editVideo];
      setSelectedVideo(arr3);
    } else {
      setSelectedVideo(prev);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="form_left mt-3 w-100">
          <div className="input-group pb-2 mb-2">
            <label>
              Search Or Enter Video Link{" "}
              <span className="mandatoryField">*</span>
            </label>
            {searchTerm == "" ? (
              <span key={Math.random()}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            ) : searchTerm !== "" && filteredData === undefined ? (
              <>
                <div className="spinner" />
              </>
            ) : (
              <span
                className="closeicon"
                key={Math.random()}
                onClick={resetFields}
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
            )}

            <div className="searchInputs">
              <div className="form-group">
                <input
                  type="text"
                  id="search"
                  autoComplete="off"
                  // {...register("search", {
                  //   required: {
                  //     value: totalSelected <= 0 && query ? true : false,
                  //     message: MSG.VLINKREQ,
                  //   },
                  // })}
                  register={
                    typeof register === "function" && {
                      ...register("search", {
                        required:
                          required === totalSelected <= 0 && query
                            ? true
                            : false,
                        message:
                          message == "Please enter atleast one video link",
                      }),
                    }
                  }
                  className={`form-control ${
                    errors.search && query === "" ? "is-invalid" : ""
                  }`}
                  value={query}
                  onChange={(e) => setquery(e.target.value)}
                />
                {errors.search && query === "" && (
                  <p className="text-danger">
                    Please enter atleast one video link
                  </p>
                )}
              </div>
              {/* <div className="form-group">
                <input
                  type='text'
                  name={"search"}
                  id='search'
                  autoComplete='off'
                  {...register("search")}
                  value={query}
                  onChange={(e) => setquery(e.target.value)}
                  className={`form-control`}
                />

                {errors.search && (
                  <p className='text-danger'>{errors.search.message}</p>
                )}
              </div> */}
            </div>
          </div>
          <div className="subheading mb-3">
            <h3 className="mb-3 w-100 text-right">
              {<span>Selected Video : {totalSelected}</span>}
            </h3>

            {/* {filteredData &&
              filteredData?.length > 0 &&
              editVideo.length === 0 && (
                <div className="text-danger">Song is required</div>
              )} */}
          </div>

          <div className="searchVideoList mt-3">
            <ul className=" ">
              <>
                {editVideo &&
                  editVideo?.length > 0 &&
                  editVideo?.map((val, key) => (
                    <li className="d-flex mb-3 position-relative" key={key}>
                      <VideoCard
                        addSong={addSong}
                        type={`list`}
                        viewVideo={viewVideo}
                        searchActivity={val}
                      />
                      <span
                        onClick={() =>
                          selectVideo(key, val.isChecked, "previous")
                        }
                        className="flex mr-3 pr-3"
                      >
                        {val?.isChecked ? (
                          <img
                            key={Math.random()}
                            className="pointer"
                            src={image.rightCheck}
                            alt=""
                          />
                        ) : (
                          <span
                            key={Math.random()}
                            className="pointer uncheckbox"
                          ></span>
                        )}
                      </span>
                    </li>
                  ))}
              </>
              <div
                className="scrollableDiv"
                id="scrollableDiv"
                style={{ overflow: "auto" }}
              >
                {/* old selected vido should be outside the infinitescroll */}
                <InfiniteScroll
                  dataLength={filteredData && filteredData?.length} // all data
                  next={() => youtubeNextPage()} //
                  hasMore={true}
                  loader={
                    filteredData &&
                    filteredData.length > 0 &&
                    query && <h4>Loading...</h4>
                  }
                  pullDownToRefreshThreshold={100}
                  scrollableTarget="scrollableDiv"
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {filteredData &&
                    query &&
                    filteredData != 0 &&
                    filteredData?.map((value, index) => {
                      return (
                        <React.Fragment key={index}>
                          <li
                            className="d-flex mb-3 position-relative"
                            key={index}
                          >
                            <VideoCard
                              addSong={addSong}
                              type={`list`}
                              viewVideo={viewVideo}
                              data={value}
                            />
                            <span
                              onClick={() =>
                                selectVideo(index, value.isChecked, "new")
                              }
                              className="flex mr-3 pr-3"
                            >
                              {value?.isChecked ? (
                                <img
                                  key={Math.random()}
                                  className="pointer"
                                  src={image.rightCheck}
                                  alt=""
                                />
                              ) : (
                                <span
                                  key={Math.random()}
                                  className="pointer uncheckbox"
                                ></span>
                              )}
                            </span>
                          </li>
                        </React.Fragment>
                      );
                    })}
                </InfiniteScroll>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddVideo;

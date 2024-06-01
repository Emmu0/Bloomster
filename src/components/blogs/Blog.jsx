import React, { useState } from "react";
import * as image from "../../resources/images";
import { BLOG_DATA } from "../../utils/DataObjects";
import SubscriberForm from "../base/SubscriberForm";
import WebLayout from "../layout/WebLayout";

import { useHistory } from "react-router-dom";
import { SITEFNAME, SITENAME } from "../../utils/Messages";

const Blog = () => {
  const history = useHistory();
  const [end, setEnd] = useState(6);
  const [loadState, setLoadState] = useState(false);

  const [locationState, getLocationState] = useState("/blog");

  const loadMoreData = () => {
    setLoadState(true);
    () => {
      setEnd(end + 3);
      setLosetTimeoutadState(false);
    },
      2500;
  };
  return (
    <WebLayout className="outerPagesHeader">
      <div className="providerF">
        <div className="BlogList">
          <div className="Blogbanner text-left">
            <div className="container">
              <h3>
                <span>{SITENAME.NAME}'s</span> Blog
              </h3>
              <p>
                Inspiration & resources on helping your child thrive in a
                rapidly changing world
              </p>
            </div>
          </div>

          <section>
            <div className="container">
              <div className="Bloglist">
                <div className="bloglisting flex flex-wrap">
                  {BLOG_DATA?.slice(0, end)?.map((blog, i) => (
                    <div
                      className="BLogCard"
                      key={i}
                      onClick={() => history.push(blog?.url)}
                    >
                      <div className="blogcardImg">
                        <img src={blog.image} />
                      </div>
                      <div className="BlogCarddesc">
                        <div>
                          {/* <h5>({blog?.name})</h5> */}
                          <h4>{blog?.title}</h4>
                          <p>{blog.description}</p>
                        </div>
                        <div className="BlogTime position-relative">
                          <p className="readmore_style">
                            {blog?.value}{" "}
                            <img
                              src={image.explore_arrow_blue}
                              alt="..."
                              className="ml-1"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {BLOG_DATA?.length > end && (
                    <div className="text-center w-100 mb-5">
                      <button
                        type="button"
                        className="loadmore_btn mt-3 mb-3"
                        onClick={loadMoreData}
                        key={Math.random()}
                      >
                        {loadState === true ? (
                          <span className="RounAnimation mr-1"></span>
                        ) : (
                          ""
                        )}{" "}
                        Load More <i className="fa-regular fa-chevron-down"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <SubscriberForm locationState={locationState} />
        </div>
      </div>
    </WebLayout>
  );
};

export default Blog;

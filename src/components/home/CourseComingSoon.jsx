import { useState } from "react";
import * as image from "../../resources/images";
import { getEnviourment, textTrim } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { getCourseDetails } from "../../redux/actions/Home";
const CourseComingSoon = ({ data, handleSharePopup }) => {
  const { comingCourseObj } = useSelector((state) => state.home);
  const { defaultChildData } = useSelector((state) => state.collections);

  const [showAllCards, setShowAllCards] = useState(false);

  const visibleCourses = showAllCards
    ? comingCourseObj?.records
    : comingCourseObj?.records.slice(0, 5);

  let envObj = {
    DEV: "ea19e814-5c60-477c-9e1a-e4c82e530327",
    UAT: "7f082443-304a-4eea-a7b2-43a4fce064ba",
    PROD: "4cc11ebd-552d-4604-ab98-325b342c7be7"
  };

  const dispatch = useDispatch();

  const _openCourse = () => {
    let env = getEnviourment();
    dispatch(
      getCourseDetails(
        envObj[env],
        defaultChildData.id
      )
    );
  };
  return (
    <>
      {/* <div className="ourcommitmentWrap">
				<h4 className=" ">Bloomster News</h4>
				<p>Bloomster is always growing! Check out the courses we are currently working on.</p>
			</div>
			<h4 className="pt-3 mt-3 mb-2 flex">
				Courses Coming Soon
				<span>Release Date</span>
			</h4>
			<ul className="courseComminS">
				{visibleCourses &&
					visibleCourses.map((vl, index) => (
						<li key={index}>
							{vl.name.length > 30 ? (
								<ReactTooltip id={vl?.name}>{vl?.name}</ReactTooltip>
							) : (
								""
							)}
							<span data-for={vl.name} data-event-off="" data-tip>
								{textTrim(vl.name, 30)}
							</span>
							<span className=" pt-1 pb-1 w-auto ml-auto">
								{vl.releaseDate}
							</span>
						</li>
					))}

				{!showAllCards && comingCourseObj?.records.length > 5 ? (
					<li>
						<a href="#" onClick={() => setShowAllCards(true)}>
							Show More...
						</a>
					</li>
				) : comingCourseObj?.records.length === 5 ? (
					""
				) : (
					<li>
						<a href="#" onClick={() => setShowAllCards(false)}>
							Show Less
						</a>
					</li>
				)}

				{!showAllCards && comingCourseObj?.records.length > 5 && (
					<li>
						<a href="#" onClick={() => setShowAllCards(true)}>
							Show More...
						</a>
					</li>
				)}

				{showAllCards && comingCourseObj?.records.length > 5 && (
					<li>
						<a href="#" onClick={() => setShowAllCards(false)}>
							Show Less
						</a>
					</li>
				)}
			</ul> */}

      {/* Start Added By Alfaiz on 23-02-2024 for Latest News Right-Panel Section */}
      <div id="latestNews">
        <div className="section-headding">
          <h4>Latest News</h4>
        </div>

        <div className="d-inline-flex align-items-start pt-1">
          <img src={image.book_icon1} alt="" className="me-2" />
          <span className="newest-course">Newest Course:</span>
          <span
            className="newest-course-text font-weight-400 pointer"
            onClick={() => _openCourse()}
          >
            Identifying and Managing Bullies{" "}
          </span>
        </div>
        <br />

        <div className="d-inline-flex align-items-start pt-4">
          <img src={image.book_icon2} alt="" className="me-2" />
          <span className="coming-course">Coming March:</span>
          <span className="coming-course-text font-weight-400">
            Course on Creativity & Innovation - <i>Don't Wait: Create!</i>
          </span>
        </div>

        <div className="pt-4">
          <div className="d-flex align-items-center">
            <img
              src={image.new_feature_icon}
              alt=""
              className="me-1 new-feature-img"
            />
            <span>New Feature:</span>
          </div>
          <div className="d-flex align-items-center pt-3 ps-4">
            <img
              src={image.new_feature_img}
              alt=""
              className="new-feature-img1 me-3"
            />
            <p>
              Parents can now easily access rewards through the Parent Tools on
              the course card.
            </p>
          </div>
        </div>

        <div className="share-course">
          <span
            className="pointer d-flex align-items-start"
            onClick={() => handleSharePopup(true)}
          >
            <img src={image.shareyouridea} alt="" className="share-icon" />
            Share your course ideas with us, we’d love to hear from you!
          </span>
        </div>
      </div>
      {/* End Added By Alfaiz on 23-02-2024 for Latest News Right-Panel Section */}

      {/* <div className="devlopidea">
				<span
					className="pointer flexone"
					onClick={() => handleSharePopup(true)}
				>
					<img src={image.shareyouridea} alt="" /> Share your course ideas with
					us; we'd love to hear!
				</span>
			</div> */}
    </>
  );
};

export default CourseComingSoon;

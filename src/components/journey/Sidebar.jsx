import React from "react";
import * as image from "../../resources/images";
import { ShimmerCategoryList } from "react-shimmer-effects";
import CourseProgress from "../home/CourseProgress";
import { useState } from "react";
import CongratulationCard from "../widget/CongratulationCard";
import { useEffect } from "react";
import { useParams } from "../../utils/Packages";

const Sidebar = ({ enrollCourseData }) => {
	let params = useParams();
	const [isProgressShow, setProgressShow] = useState(true);

	let courses = [];

	enrollCourseData?.map((skill, index) => {
		skill?.skills?.map((course, key) => {
			courses.push(course);
		});
	});

	const [showCongratulationModel, setShowCongratulationModel] = useState(false);
	const [courseActivityId, setCourseActivityId] = useState([]);
	const getDataFromCourseProgress = (result, data) => {
		setCourseActivityId(data);
		setShowCongratulationModel(result);
	};

	return (
		<>
			<div className="RightbarPannel p-0 rightpannelSticky">
				<div className="heading">
					<h2 className="flex">
						<span>
							<img src={image.compassicon} alt="" className="mr-2" />
							Learner Journey Progress
						</span>
						{/* <div class="form-check form-switch m-0 flex p-0">
							<label
								class="form-check-label pointer"
								for="flexSwitchCheckDefault"
							>
								Section
							</label>
							<input
								class="form-check-input avltogglebutton pointer"
								type="radio"
								role="switch"
								id="flexSwitchCheckDefault"
								checked={isProgressShow}
								onClick={() => setProgressShow(!isProgressShow)}
							/>
						</div> */}
					</h2>
				</div>

				{/* {console.log(enrollCourseData, "enrollData")} */}
				{enrollCourseData ? (
					<CourseProgress
						courseObj={courses}
						showProgress={isProgressShow}
						getDataFromCourseProgress={getDataFromCourseProgress}
					/>
				) : (
					/*
							  <div className='RPenrolledCourseList notenrolledanycrs'>
								  <div className='LessionDtlOverview p-3'>
									  <p className=''>
										  <strong>
											  Please click the button below to view other available courses
											  and enroll.
										  </strong>
										  <button
											  onClick={() => history.push(PATHS.COURSEPAGE_STR + path.id)}
											  className='btn-blue btn-login d-block  w-auto  mt-3 left_auto m-auto'>
											  <i className='fa-solid fa-paper-plane mr-2'></i>View Available
											  Courses
										  </button>
									  </p>
								  </div>
							  </div>
							  */
					<ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
				)}
			</div>
			{showCongratulationModel && (
				<CongratulationCard
					courseActivityId={courseActivityId}
					handleOpenpopup={getDataFromCourseProgress}
					isContinueButtonClick={false}
				/>
			)}
		</>
	);
};
export default Sidebar;

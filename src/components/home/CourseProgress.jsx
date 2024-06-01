import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import RoundProgress from "../controls/RoundProgress";
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";
import { setCourseJourneyId } from "../../redux/actions";
import ReactTooltip from "react-tooltip";
import { getSequnceSort, getUrlSegment, textTrim } from "../../utils/helper";
import CongratulationCard from "../widget/CongratulationCard";
import { getJourny } from "../../redux/actions/APIs";
import CourseProgresComponent from "./CourseProgresComponent";
import CourseProgressPopup from "../dimensions/course/intellectual/CourseProgressPopup";

const CourseProgress = ({
	courseObj,
	showProgress,
	getDataFromCourseProgress,
	selectedTab,
	type,
	pathwayCourse
}) => {
	const { dimSkillObj } = useSelector((state) => state.home);
	const { getSelectedCourseJourneyId, defaultChildData, courseEnrollResponse } =
		useSelector((state) => state.collections);
	const dispatch = useDispatch();
	const params = useParams();
	const history = useHistory();
	const [isEnrolledCour, setIsEnrolledCour] = useState(false);
	const [isEnrolledTextLine, setIsEnrolledTextLine] = useState(true);

	let obj = [];
	if (courseObj) {
		obj = courseObj;
	} else {
		obj.push(dimSkillObj);
	}

	let isEnrolled = false;
	useEffect(() => {
		if (type === "dimension") {
			obj?.map((skill, value) => {
				if (!isEnrolledCour && skill.isEnrolled) {
					setIsEnrolledCour(true);
				}
			});
		} else {
			obj?.map((skill, value) => {
				skill?.courses?.map((course, index) => {
					if (
						course?.isreporting &&
						(course?.progress > 0 || course?.isEnrolled)
					) {
						//	isEnrolled = true;
						setIsEnrolledCour(true);
					}
				});
			});
		}
	}, [dimSkillObj, obj, params?.id]);

	const coursePageRedirect = () => {
		dispatch(getJourny(false));
		history.push({
			pathname: PATHS.COURSEPAGE_STR + params?.id,
			state: { isFilter: true, dimId: selectedTab?.key },
		});
	};

	const handleOpenpopup = (result, data, course, progress) => {
		if (progress > 0) {
			getDataFromCourseProgress(result, data, course);
		}
	};

	let courCount = 0;
	return (type === "dimension" || type === "journey") ? (
		<>
			{type === "dimension" ? (
				<div className=" ScenecerelateddQuiz p-0 allcourselj">
					{/* only for "Math", "English", "Science", "Social Studies" these course */}
					{/* {obj &&
						obj?.length > 0 &&
						obj?.map((skill, value) => (
							["Math", "English", "Science", "Social Studies"]?.includes(skill?.name) && skill?.courses?.map((cour, index) =>
								cour.isreporting &&
								(cour?.progress > 0 || cour?.isEnrolled) && (
									<CourseProgresComponent
										value={value}
										index={index}
										courCount={courCount}
										skill={skill}
										cour={cour}
										showProgress={showProgress}
										handleOpenpopup={handleOpenpopup}
									/>
								)

							)
						))
					} */}

					{/* {obj &&
						obj?.length > 0 &&
						obj?.map((skill, value) =>
							(skill?.isEnrolled && !["Social Studies", "Science"]?.includes(skill?.name)) &&
							skill?.courses?.map((cour, key) =>
								!["Math Resources", "English Resources"]?.includes(cour?.name) && (<CourseProgresComponent
									value={value}
									index={key}
									courCount={courCount++}
									skill={skill}
									cour={cour}
									showProgress={showProgress}
									handleOpenpopup={handleOpenpopup}
								/>)
							)
						)
					} */}

					{obj &&
						obj?.length > 0 &&
						obj?.map((skill, value) =>
							skill?.courses?.map((cour, key) =>
								((!["Social Studies", "Science"]?.includes(skill?.name) && cour?.isEnrolled) || cour?.progress > 0) && (
									<CourseProgresComponent
										value={value}
										index={key}
										courCount={courCount++}
										skill={skill}
										cour={cour}
										showProgress={showProgress}
										handleOpenpopup={handleOpenpopup}
									/>
								)
							)
						)
					}


					{/* {(type === "dimension" && !isEnrolledCour) && (
						<div className=" notenrolledanycrs">
							<div className="LessionDtlOverview p-3">
								<p className="">
									<>
										{isEnrolledTextLine &&
											"You have not enrolled in any courses yet."}{" "}
										<a
											href="javascript:void(0)"
											onClick={() => coursePageRedirect()}
										>
											Click here
										</a>{" "}
										to view available courses and enroll.
									</>
								</p>
							</div>
						</div>
					)} */}
				</div>
			) : (
				// {For Journey Right Panel}
				<div className=" ScenecerelateddQuiz p-0 allcourselj">
					{pathwayCourse &&
						pathwayCourse?.length > 0 &&
						pathwayCourse?.map((course, key) =>
							course?.isreporting && (
								<CourseProgresComponent
									index={key}
									courCount={courCount++}
									skill={course?.skill}
									cour={course}
									showProgress={showProgress}
									handleOpenpopup={handleOpenpopup}
								/>
							)
						)
					}
				</div>
			)}
		</>
	) : (
		<>
			{/* For Home Right Panel  */}
			<div className="ScenecerelateddQuiz p-0 allcourselj">
				{obj &&
					obj?.length > 0 &&
					obj?.map((skill, value) =>
						skill?.courses &&
						skill?.courses.map(
							(cour, index) =>
								cour.isreporting &&
								(cour?.progress > 0 || cour?.isEnrolled) && (
									<CourseProgresComponent
										value={value}
										index={index}
										courCount={courCount}
										skill={skill}
										cour={cour}
										showProgress={showProgress}
										handleOpenpopup={handleOpenpopup}
									/>
								)
						)
					)
				}
			</div>
		</>
	);
};

export default CourseProgress;

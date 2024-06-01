import React, { useState } from "react";
import * as image from "../../../../resources/images";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getSequnceSort } from "../../../../utils/helper";
const LessonNavBar = ({
	selectedTab,
	handleTabChange,
	handleNext,
	videoStep,
	data,
	handleQuizStep,
	quizCurrentIndex,
	providerSceneView
}) => {
	const [senceCompletedArray, setSenceCompletedArray] = useState([]);
	const [totalQuizQuestion, setTotalQuizQuestion] = useState([]);
	const [quizStep, setQuizStep] = useState(0);

	const { seriesData, socialActivityData, lastQuizKey } = useSelector(
		(state) => state.collections
	);

	useEffect(() => {
		if (lastQuizKey) {
			setQuizStep(0);
		}
	}, [lastQuizKey]);

	useEffect(() => {
		if (seriesData !== undefined) {
			setTotalQuizQuestion(seriesData?.records[0]?.quiz);
		}
	}, [seriesData]);

	const handleQuizNext = (result) => {
		let val = 0;
		if (result) {
			val = quizStep + 1;
		} else {
			val = quizStep - 1;
		}
		setQuizStep(val);
		handleQuizStep(val);
	};

	useEffect(() => {
		setQuizStep(quizCurrentIndex);
	}, [quizCurrentIndex]);

	return (
		<div className="tabgrid m-0 socialgridtab flex">
			<ul>
				<li
					className={"tabs " + (selectedTab === "Lessons" ? "active-tabs" : "")}
					onClick={() => handleTabChange("Lessons")}
				>
					<img src={image.lesson_icon} alt="" />
					Lessons
				</li>
				<li
					className={"tabs " + (selectedTab === "Series" ? "active-tabs" : "")}
					onClick={() => handleTabChange("Series")}
				>
					<img src={image.Seriesicon} alt="" />
					Series
				</li>
				<li
					className={"tabs " + (selectedTab === "Quiz" ? "active-tabs" : "")}
					onClick={() => handleTabChange("Quiz")}
				>
					<img src={image.book_open_reader} alt="" />
					Quiz
				</li>
				<li
					className={
						"tabs " + (selectedTab === "References" ? "active-tabs" : "")
					}
					onClick={() => handleTabChange("References")}
				>
					<img src={image.SceneRefrence} alt="" />
					References
				</li>
			</ul>
			{selectedTab === "Series" && socialActivityData && (
				<div className="LRSlidearrow CourseSlidearrrow">
					<span
						className={`pointer ${videoStep + data?.scenes?.length === data?.scenes?.length
							? "DissableArrow"
							: "" 
							}`}
						onClick={() => handleNext(false)}
					>
						{" "}
						<i className="fa-light fa-chevron-left"></i>
					</span>
					<span className="ScenePagination">
						<strong className="mr-2 "> {videoStep + 1}</strong>of
						<strong className="ml-2">{data?.scenes?.length}</strong>
					</span>
					<span
						className={`pointer ${videoStep === data?.scenes?.length - 1 ? "DissableArrow" : ""
							}`}
						onClick={() => handleNext(true)}
					>
						{" "}
						<i className="fa-light fa-chevron-right"></i>
					</span>
				</div>
			)}

			{selectedTab === "Quiz" && seriesData && (
				<div className="LRSlidearrow CourseSlidearrrow">
					<span
						className={`pointer ${quizStep === 0 ? "DissableArrow" : ""}`}
						onClick={() => handleQuizNext(false)}
					>
						{" "}
						<i className="fa-light fa-chevron-left"></i>
					</span>
					<span className="ScenePagination">
						<strong className="mr-2 "> {quizStep + 1}</strong>of
						<strong className="ml-2">{totalQuizQuestion?.length}</strong>
					</span>
					<span
						className={`pointer ${quizStep === totalQuizQuestion?.length - 1 ? "DissableArrow" : ""
							}`}
						onClick={() => handleQuizNext(true)}
					>
						{" "}
						<i className="fa-light fa-chevron-right"></i>
					</span>
				</div>
			)}
			{selectedTab === "Series" && (
				<div className="jumptopagescene dropdownlistmodl">
					<span
						className="Activitymenubar pointer jumptodropicn"
						aria-haspopup="true"
						aria-expanded="false"
						id={`barlistsubdropdown`}
						data-toggle="dropdown"
					>
						<i className="fa-regular fa-angle-down"></i>
					</span>
					<ul
						className="dropdown-menu dropdown-menu-end"
						aria-labelledby={`barlistsubdropdown`}
					>
						{data &&
							getSequnceSort(data?.scenes)?.map((val, index) => (
								<React.Fragment key={index}>
									<li
										className={`pointer d-flex align-items-center ${videoStep === index ? "SceneActivePage" : ""
											}`}
										onClick={() => handleTabChange("Series", index, val)}
									>
										<p className="text-left d-flex align-items-center">
											<span className="mr-1 jumponscene">{index + 1}</span>
											<span className="juweeknametext">{val?.name}</span>
										</p>

										{(val?.isCompleted ||
											senceCompletedArray.includes(val?.id) || providerSceneView.includes(val?.id)) && (
												<span className="flex">
													<img
														src={image.enrolledicon}
														alt=""
														className="alreadysceneed"
													/>
												</span>
											)}
									</li>
								</React.Fragment>
							))}
					</ul>
				</div>
			)}
		</div>
	);
};
export default LessonNavBar;

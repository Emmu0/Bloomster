/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as image from "../../../resources/images";
import { swal, useHistory, useParams, Rating } from "../../../utils/Packages";
import ReactTooltip from "react-tooltip";
import { deleteActivity, getMetaData } from "../../../redux/actions/APIs";
import { getProfileName, textTrim } from "../../../utils/helper";
import { selectTab } from "../../../redux/actions";
import { PATHS } from "../../../utils";
import WeekActivity from "../course/social/WeekActivity";
import RoundProgress from "../../controls/RoundProgress";
import { useState, useEffect } from "react";
import DeletePopup from "../../controls/DeletePopup";
import ActivityRatings from "../../controls/ActivityRatings";

const ActivityCard = ({
	skills,
	skillId,
	data,
	showViewActivity,
	courseData,
	showRatingWizad,
	showActivity,
	viewActivityFlag,
	dimensionName,
	showAddActivity,
	closeModal,
	handlePopUp,
	keyvalue,
	viewReward,
	handleCloseSKillModel,
	_authenticate
	// openScoreCard
}) => {
	const { getSelectedUser, dimension, selectedDim, getdimension, response } =
		useSelector((state) => state.collections);
	const param = useParams();
	const history = useHistory();
	const [startPopup, setStartPopup] = useState(false);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		if (!selectedDim) {
			let selectedDim1 = getdimension?.records.find(
				(data) => data?.id === param.dimId
			);
			dispatch(
				selectTab({
					key: selectedDim1?.id,
					value: selectedDim1?.name,
				})
			);
		}
	}, [selectedDim]);

	const dispatch = useDispatch();

	const [actObject, setActObject] = useState("");

	const deleteAct = (obj) => {
		setStartPopup(true);
		setActObject(obj);
	};

	const handleDelete = () => {
		setLoader(true);
		dispatch(
			deleteActivity(
				actObject?.owner,
				courseData?.id,
				actObject?.id,
				getSelectedUser?.id,
				selectedDim,
				dimension,
				actObject.area
			)
		).then(() => {
			setStartPopup(false);
			setLoader(false);
		});
	};

	const checkLocked = () => {
		new swal({
			position: "top-center",
			icon: "warning",
			title: "Locked",
			timer: 3000,
			text: "Course is locked",
			type: "warning",
		});
	};

	const params = useParams();
	const _redirectLesson = (data) => {
		if (data?.islocked) {
			checkLocked();
			return false;
		}

		history.push({
			pathname: PATHS.INTEL_DETAIL_STR + params.id + "/" + data?.id,
			state: { dimension: selectedDim, courseName: data?.name },
		});
	};

	const addLesson = (data) => {
		if (data?.islocked) {
			checkLocked();
			return false;
		}
		new swal({
			position: "top-center",
			icon: "success",
			title: "Success",
			timer: 3000,
			text: "Course Added Sucessfully",
			type: "success",
		});
	};

	return (
		<>
			{data && data?.type === "CUSTOM" && (
				<div className="Activity selfmadeActivity Course_Sections">
					<div className="ActivitycrdTitle ratepopupp flex">
						<>
							{data?.name?.length > 40 ? (
								<ReactTooltip id={data?.name}>
									<p>{data?.name}</p>
								</ReactTooltip>
							) : (
								""
							)}
							<div>
								<h3
									className="ActivyTitleName pointer"
									onClick={() => {
										showViewActivity(
											data,
											courseData,
											dimensionName,
											"indiviual"
										);
										closeModal();
									}}
									data-for={data.name}
									data-event-off=""
									data-tip
								>
									{" "}
									{(data?.contentType === "Video" ||
										data?.contentType === "Videos") && (
											<span className="ThumnailTeacher">
												<i className="fa-brands fa-youtube" />
											</span>
										)}
									{data?.contentType === "Books" && (
										<span className="ThumnailTeacher">
											<i className="fa-solid fa-book" />
										</span>
									)}
									{data?.contentType === "Links" && (
										<span className="ThumnailTeacher">
											<i className="fa-solid fa-link" />
										</span>
									)}{" "}
									{textTrim(data?.name, 40)
										? textTrim(data?.name, 40)
										: " Activity Name "}
								</h3>

								<div className="flex ratepopupp">
									{viewActivityFlag && (
										<ActivityRatings
											data={data}
										// showRatingWizad={showRatingWizad}
										// onClickOutside1={onClickOutside1}
										// saveRating={saveRating}
										/>
									)}
								</div>
							</div>
							<div className="ShareYourActivity flex">
								{viewActivityFlag && (
									<span>
										<i className="fa-solid fa-share-nodes" />
									</span>
								)}

								<div className="dropdownlistmodl">
									<span
										className="Activitymenubar ml-2 pointer "
										aria-haspopup="true"
										aria-expanded="false"
										id="barlistdropdown"
										data-toggle="dropdown"
									>
										{" "}
										<i className="fa-solid fa-bars" />
									</span>
									<ul
										className="dropdown-menu dropdown-menu-end"
										aria-labelledby="barlistdropdown"
									>
										{viewActivityFlag && (
											<li
												className="pointer"
												onClick={() => {
													showViewActivity(
														data,
														courseData,
														dimensionName,
														"individual"
													);
													closeModal();
												}}
											>
												<span>
													<i className="fa-regular fa-memo-circle-info"></i>{" "}
													Show Details
												</span>
											</li>
										)}
										<li
											onClick={() => {
												showAddActivity(
													data?.contentType,
													data?.contentType,
													data
												);
												dispatch(getMetaData(data?.id));
											}}
										>
											<span className="">
												<i className="fa-regular fa-pencil" /> Edit
											</span>
										</li>
										<li onClick={() => deleteAct(data)}>
											<span className="">
												<i className="fa-solid fa-trash-can" /> Delete
											</span>
										</li>
									</ul>
								</div>
							</div>
						</>
					</div>
				</div>
			)}
			{data && data?.type === "PROVIDER" && (
				<div className="Activity selfmadeActivity ">
					<div className="ActivitycrdTitle">
						<h3 className="ActivyTitleName">
							{" "}
							<span
								className="ThumnailTeacher"
								onClick={() => _redirectLesson(data)}
							>
								{textTrim(getProfileName(data?.name), 25)}
							</span>
							<div onClick={() => _redirectLesson(data)} className="pointer">
								{textTrim(data.name, 20)}
							</div>
							{/* <p onClick={() => addLesson(data)}>
                <i className="fa-solid fa-circle-plus"></i>
              </p> */}
							<div className="dropdownlistmodl">
								<span
									className="Activitymenubar ml-2 pointer "
									aria-haspopup="true"
									aria-expanded="false"
									id="barlistdropdown"
									data-toggle="dropdown"
								>
									<i className="fa-solid fa-bars"></i>
								</span>
								<ul
									className="dropdown-menu dropdown-menu-end"
									aria-labelledby="barlistdropdown"
								>
									<li onClick={() => addLesson(data)}>
										<span>
											<i className="fa-solid fa-circle-plus"></i>
										</span>{" "}
										<strong> Add Course</strong>
									</li>
									<li>
										<span
											className="pointer"
											onClick={() => _redirectLesson(data)}
										>
											{" "}
											<i className="fa-regular fa-memo-circle-info"></i> Show
											Details
										</span>
									</li>
									<li className="flex">
										{" "}
										<span>
											<i className="fa-regular fa-file-lines"></i> Lesson Name
										</span>{" "}
										<span>
											<i className="fa-solid fa-chevron-right"></i>
										</span>
										<ul className="LessonNameList">
											<li>Lesson Name 1</li>
											<li>Lesson Name 1</li>
											<li>Lesson Name 1</li>
											<li>Lesson Name 1</li>
											<li>Lesson Name 1</li>
										</ul>
									</li>
								</ul>
							</div>
						</h3>
						<div className="ratepopupp position-relative">
							<p className="d-flex">
								{/* {textTrim(data?.description, 20)} */}
								<b>Anna Whiteley </b>
								<div className="flex RatingWrap1 TeacherratingCount ratepopupp mr-auto ml-2">
									<div
										className="d-flex align-items-center"
										onClick={() => showRatingWizad(data)}
									>
										({" "}
										<Rating
											initialValue={data?.rating}
											transition={false}
											allowFraction
											readonly
											allowHover={false}
											size={20}
											emptyColor="#ccc"
											fillColorArray={[
												"#f17a45",
												"#f17a45",
												"#f17a45",
												"#f17a45",
												"#f17a45",
											]}
										/>
										<span className="ratingCount">
											<i className="fa-solid fa-angle-down ml-1" />{" "}
											<span className="ml-1">2</span>
										</span>
										)
									</div>
								</div>

								{data?.islocked && (
									<span className="Activitymenubar ml-2 pointer">
										<i className="fa-sharp fa-solid fa-lock"></i>
									</span>
								)}
							</p>
						</div>
					</div>
				</div>
			)}
			{data &&
				courseData?.type === "VICKY" &&
				data?.name === "Learning Center" && (
					<div className="Activity TeachersLive align-items-center">
						<div className="TeacherActivityimg">
							<img src={image.greenflag} alt="..." />
						</div>
						<div className="ActivitycrdTitle flex">
							<>
								<h3 className="ActivyTitleName">
									<span
										className="flex pointer"
										onClick={() => {
											showActivity(
												courseData?.modules,
												"Vicky",
												courseData?.name,
												courseData,
												skills
											);
										}}
									>
										Learning Center
									</span>
								</h3>
								<div className="ShareYourActivity flex Addschoolcard">
									<div className="position-relative Coursecompprcent ">
										<p>
											<RoundProgress data={data?.pctCompleted} />
										</p>
									</div>
									<div className="dropdownlistmodl">
										<span
											className="Activitymenubar ml-2 pointer "
											aria-haspopup="true"
											aria-expanded="false"
											id="barlistdropdown"
											data-toggle="dropdown"
										>
											{" "}
											<i className="fa-solid fa-bars" />
										</span>
										<ul
											className="dropdown-menu dropdown-menu-end"
											aria-labelledby="barlistdropdown"
										>
											<li
												className="pointer"
												onClick={() => {
													showActivity(
														courseData?.modules,
														"Vicky",
														courseData?.name,
														courseData,
														skills
													);
												}}
											>
												<span>
													<i className="fa-regular fa-memo-circle-info"></i>{" "}
													Show Details
												</span>
											</li>
											{/* <li onClick={() => deleteAct(data)}>
                      <span className="">
                        <i className="fa-solid fa-trash-can" /> Delete
                      </span>
                    </li> */}
										</ul>
									</div>
								</div>
							</>
						</div>
					</div>
				)}

			{courseData?.type === "PROVIDER" && (
				<WeekActivity
					activity={data}
					keyvalue={keyvalue}
					index={""}
					course={courseData}
					handlePopUp={handlePopUp}
					courseObj={[]}
					key={""}
					skills={skills}
					skillId={skillId}
					viewReward={viewReward}
					handleCloseSKillModel={handleCloseSKillModel}
					_authenticate={_authenticate}
				// openScoreCard={openScoreCard}
				/>
			)}

			{startPopup && (
				<DeletePopup
					setStartPopup={setStartPopup}
					handleDelete={handleDelete}
					loader={loader}
				/>
			)}
		</>
	);
};

export default ActivityCard;

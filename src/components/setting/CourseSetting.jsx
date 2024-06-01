import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as image from "../../resources/images";
import { ShimmerCategoryList } from "react-shimmer-effects";

import { getCourseObj } from "../../redux/actions";
import {
	getSequnceSort,
	getToolTip,
	textTrim,
	getUrlSegment,
	getCapitalized,
} from "../../utils/helper";
import { getRewardData } from "../../redux/actions/APIs";
import RewardPopUp from "../base/RewardPopUp";

const General = ({
	viewReward,
	courId,
	type,
	userId,
	state,
	collapseDispatch,
	setConfirmMsg,
	handleNextButtonClick,
	handleOpenReward
}) => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [totalItems, setTotalItems] = useState();

	const { settingData, response, defaultChildData, corData, dimDataObj } =
		useSelector((state) => state.collections);

	const [courseOBj, setCourseOBj] = useState([]);
	const [isChecked, setIsChecked] = useState(false);
	const [disableCourse, setdisableCourse] = useState("");
	const [loaderData, setLoaderData] = useState();
	const [last_index, setlast_index] = useState();


	useEffect(() => {
		setLoaderData();
		setTimeout(() => {
			setLoaderData(settingData);
		}, 2000);
	}, [settingData, defaultChildData?.id]);

	useEffect(() => {
		if (settingData) {
			showCourses();
			setCurrentPage(0);
		}
	}, [settingData, defaultChildData?.id]);

	const dimCourses =
		dimDataObj?.dimName &&
		courseOBj?.filter((val) => val?.dimName === dimDataObj?.dimName);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const totalItem =
		dimDataObj?.dimName && dimCourses ? dimCourses?.length : courseOBj?.length;
	const totalPages = Math.ceil(totalItem / itemsPerPage);

	const dataToShow =
		dimDataObj?.dimName && dimCourses
			? dimCourses?.slice(startIndex, endIndex)
			: courseOBj?.slice(startIndex, endIndex);

	useEffect(() => {
		if (dataToShow) {
			dataToShow?.map((val, index) => {
				getSequnceSort(val?.rewards)
			})
		}
	}, [dataToShow])

	useEffect(() => {
		if (type === "activity") {
			if (response?.records) {
				courseOBj?.map((val, key) => {
					val?.activities?.map((vl, ky) => {
						if (vl?.id === response?.records[0]?.activityId && response) {
							vl.isRewardAdded = true;
						}
					});
				});
				if (response) {
					setCourseOBj([...courseOBj]);
				}
			}
		} else {
			let courseData = [...dataToShow];
			courseData?.map((val, key) => {
				val?.activities?.map((vl, ky) => {
					if (vl?.id === courId && response) {
						vl.isRewardAdded = true;
					}
				});
			});
			let filterData = courseData.find((data) => data.id === courId);
			/*
			if (response) {
				filterData.isRewardAdded = true;
			}
			*/
		}
	}, [dataToShow, response]);

	/*
	const isNext = (data) => {
		handleNextButtonClick();
		if (data === "next") {
			kcRequired === !kcRequired;
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};
	*/

	const showCourses = (courseId, allSec, isComplete, key1, key2) => {
		let data = settingData?.records.sort((a, b) => {
			if (a.dimSequence !== b.dimSequence) {
				return a.dimSequence - b.dimSequence;
			} else if (a.skillSequence !== b.skillSequence) {
				return a.skillSequence - b.skillSequence;
			} else {
				return a.sequence - b.sequence;
			}
		});
		let dataObj = [];
		data.map((vl, ky) => {
			vl.sr = ky + 1;
			dataObj.push(vl);
		});

		setCourseOBj(dataObj);
		setTotalItems(settingData?.records);
	};

	const handleChangeShowReward = (key1, key2) => {
		setConfirmMsg(true);
		let dataObj = [];
		(settingData?.records).map((vl, ky) => {
			let falseCount = 0;
			let trueCount = 0;
			vl?.activities?.map((val, kay) => {
				if (ky === key1) {
					if (kay == key2) {
						val.showReward = !val.showReward;
					}
					if (!val.showReward) {
						falseCount++;
					}
					if (val.showReward) {
						trueCount++;
					}
				}
			});

			if (falseCount > 0 && ky === key1) {
				vl.showReward = false;
			}
			if (trueCount === vl?.activities?.length && ky === key1) {
				vl.showReward = true;
			}
			dataObj.push(vl);
		});
		setCourseOBj(dataObj);
		setTotalItems(settingData?.records);
	};

	const handleChangeKC = (key1, key2) => {
		setConfirmMsg(true);
		let dataObj = [];
		(settingData?.records).map((vl, ky) => {
			let falseCount = 0;
			let trueCount = 0;
			vl?.activities?.map((val, kay) => {
				if (ky === key1) {
					if (kay == key2) {
						val.kcRequired = !val.kcRequired;
					}
					if (!val.kcRequired) {
						falseCount++;
					}
					if (val.kcRequired) {
						trueCount++;
					}
				}
			});
			if (falseCount > 0 && ky === key1) {
				vl.kcRequired = false;
			}
			if (trueCount === vl?.activities?.length && ky === key1) {
				vl.kcRequired = true;
			}
			dataObj.push(vl);
		});
		setCourseOBj(dataObj);
		setTotalItems(settingData?.records);
	};

	const selects = (e, type) => {
		setConfirmMsg(true);
		dataToShow.map((vl, ky) => {
			if (e.target.checked) {
				if (type === "course") {
					vl.showCourse = true;
				} else if (type === "reward") {
					vl.showReward = true;
					(settingData?.records).map((vl, ky) => {
						vl?.activities?.map((val, kay) => {
							val.showReward = true;
						});
					});
				} else if (type === "kcRequired") {
					if (!vl?.isAcademic) {
						vl.kcRequired = true;
						vl?.activities?.map((val, kay) => {
							val.kcRequired = true;
						});
					}
				}
			} else {
				if (type === "course") {
					vl.showCourse = false;
				} else if (type === "reward") {
					vl.showReward = false;
					vl?.activities?.map((val, kay) => {
						val.showReward = false;
					});
				} else if (type === "kcRequired") {
					vl.kcRequired = false;
					vl?.activities?.map((val, kay) => {
						val.kcRequired = false;
					});
				}
			}
		});
		setCourseOBj([...courseOBj]);
		dispatch(getCourseObj(courseOBj));
	};

	const _showCourse = (data, type, key1) => {
		setConfirmMsg(true);
		let dataObj = [];
		if (type === "course") {
			data.showCourse = !data.showCourse;
			(settingData?.records).map((vl, ky) => {
				dataObj.push(vl);
			});
		} else if (type === "reward") {
			data.showReward = !data.showReward;
			(settingData?.records).map((vl, ky) => {
				if (key1 == ky) {
					vl?.activities?.map((v, k) => {
						v.showReward = data.showReward;
					});
				}
				dataObj.push(vl);
			});
		} else if (type === "kcRequired") {
			data.kcRequired = !data.kcRequired;
			(settingData?.records).map((vl, ky) => {
				if (key1 === ky) {
					vl?.activities?.map((v, k) => {
						v.kcRequired = data.kcRequired;
					});
				}
				dataObj.push(vl);
			});
		}
		setIsChecked(!isChecked);
		setCourseOBj(dataObj);
		dispatch(getCourseObj(courseOBj));
	};
	// let showCourse = dataToShow.every((data) => data.showCourse);
	let showReward = dataToShow.every((data) => data.showReward);
	let kcRequired = dataToShow.every(
		(data) => data.kcRequired || data.isAcademic
	);

	useEffect(() => {
		if (settingData && settingData?.records) {
			dispatch(getCourseObj(settingData?.records));
		}
	}, [settingData?.records]);

	useEffect(() => {
		if (
			getUrlSegment()[1] === "social-lessons" &&
			getUrlSegment()[2] === userId
		) {
			setdisableCourse(getUrlSegment()[3]);
		} else {
			setdisableCourse("");
		}
	}, [getUrlSegment()]);

	const [segementId, setSegmentId] = useState("");

	useEffect(() => {
		setSegmentId(getUrlSegment()[3]);
	}, [getUrlSegment()]);

	const showPrevButton = currentPage > 0;
	const showNextButton = currentPage < totalPages - 1;
	const displayPageNumbers = 2;

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		setlast_index(newPage);
	};

	const displayReward = (data, reward, isCourse) => {
		//	reward?.isExpired || reward?.isCompleted
		handleOpenReward(data);
		dispatch(getRewardData(defaultChildData?.id, reward?.id, isCourse));
	};

	return (
		<>
			{loaderData ? (
				<div className="settingtable ">
					<table className="w-100">
						<thead>
							<tr>
								<th>#</th>
								<th className="text-left">
									{" "}
									<span className="text-left">Course Name</span>
								</th>
								<th>
									{" "}
									{/* <label className="Selcheckbox">
                    <input
                      key={showCourse}
                      type="checkbox"
                      name="schoolType"
                      defaultChecked={showCourse}
                      onClick={(e) => selects(e, "course")}
                    />
                    <span className="checkmark "></span>
                  </label> */}
									Show Course
								</th>
								<th className="text-center">
									{" "}
									<span className="text-center"> Enrolled </span>
								</th>
								<th>
									{" "}
									<label className="Selcheckbox">
										<input
											key={showReward}
											type="checkbox"
											name="schoolType"
											defaultChecked={showReward}
											onClick={(e) => selects(e, "reward")}
										/>
										<span className="checkmark "></span>
									</label>
									Show Reward
								</th>

								<th>
									{" "}
									<label className="Selcheckbox">
										<input
											key={kcRequired}
											type="checkbox"
											name="schoolType"
											defaultChecked={kcRequired}
											onClick={(e) => selects(e, "kcRequired")}
										/>
										<span className="checkmark "></span>
									</label>
									KC* & Ex* Reqd.
								</th>
								<th>
									<span className="text-center">Reward </span>
								</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							{dataToShow?.map((val, key) => (
								<tr key={key}>
									<td className="w-100 p-0 border-0" colSpan="8">
										<table className="w-100" key={val.sr}>
											<tbody>
												<tr>
													<td>{key + 1 + startIndex}</td>
													<td>
														{val.name.length > 35 && (
															<p> {getToolTip(val?.name, 35)}</p>
														)}
														<span
															data-for={val.name}
															data-event-off=""
															data-tip
														>
															{textTrim(val?.name, 35)}
														</span>
													</td>
													<td>
														<label
															className={`Selcheckbox ${val?.id === disableCourse || val.enrolled
																? "disabledevent"
																: ""
																}`}
														>
															<input
																key={Math.random()}
																className="chk"
																type="checkbox"
																name="schoolType"
																onClick={() =>
																	_showCourse(val, "course", key + startIndex)
																}
																defaultChecked={val.showCourse}
																disabled={
																	val?.id === disableCourse || val.enrolled
																}
															/>
															<span className="checkmark "></span>
														</label>
													</td>
													<td className="enrolledcorse" key={val.enrolled}>
														<span className="text-center">
															{val.enrolled ? (
																<>
																	{" "}
																	<img src={image.enrolledicon} alt="" />
																</>
															) : (
																<>
																	<i className="fa-solid fa-circle-minus" />
																</>
															)}
														</span>
													</td>
													<td>
														<label className="Selcheckbox">
															<input
																key={Math.random()}
																type="checkbox"
																name="reward"
																defaultChecked={val?.showReward}
																onClick={() =>
																	_showCourse(val, "reward", key + startIndex)
																}
															/>{" "}
															<span className="checkmark "></span>
														</label>
													</td>
													<td>
														<label
															className={`Selcheckbox ${val?.id === disableCourse ? "disabledevent" : ""
																}`}
														>
															<input
																key={Math.random()}
																type="checkbox"
																name="kcRequired"
																defaultChecked={
																	(val?.kcRequired &&
																		val?.id !== disableCourse) ||
																	(val?.kcRequired &&
																		getUrlSegment()[3] === val?.id)
																}
																onClick={() =>
																	_showCourse(
																		val,
																		"kcRequired",
																		key + startIndex
																	)
																}
																disabled={val?.isAcademic}
															/>
															<span className="checkmark "></span>
														</label>
													</td>
													<td key={Math.random()} className="AdRedisabled">

														{val?.isRewardAdded ? (
															dataToShow[key]?.showCourse ? (
																<span
																	className="text-center"
																	aria-haspopup="true"
																	aria-expanded="false"
																	id="RewardDropdwnSeting"
																	data-toggle="dropdown"
																// onClick={() => viewReward(val, val.id, "", "")}
																>
																	<img src={image.rewardimg} />
																	<span className="rewarddwnicn">
																		<i className="fa-light fa-chevron-down ml-1"></i>
																	</span>

																	<ul className="dropdown-menu dropdown-menu-end newrewardDropdwn" aria-labelledby="RewardDropdwnSeting">
																		<li onMouseUp={(e) => {
																			((!getSequnceSort(val?.rewards)[0]?.isCompleted && !val?.rewards[0]?.isExpired) && val?.rewards?.length > 0) ?
																				viewReward(val, val.id, "", "") : ''
																		}}
																			className={`${((!val?.rewards[0]?.isCompleted && !val?.rewards[0]?.isExpired) && val?.rewards?.length > 0) ? 'AdRedisabled' : ''}`}
																		>
																			<p className="flex ">
																				<span className="flexone">
																					{/* <img src={image.rewardimg} alt="" /> */}
																					{/* <i class="fa-light fa-circle-plus mr-2"></i> */}
																					Add reward{" "}
																				</span>
																				{/* <span className="Activitymenubar ml-2">
																					<i className="fa-solid fa-key"></i>
																				</span> */}

																			</p>
																		</li>
																		{
																			getSequnceSort(val?.rewards)?.map((reward, index) => (
																				<li onMouseUp={() => {
																					(reward?.isExpired || reward?.isCompleted) ?
																						displayReward(val, reward, true) :
																						viewReward(val, reward?.id, "", "view")

																				}}>
																					<p class="text-left d-flex align-items-center">
																						<span class="jumponscene">R{index + 1}</span>
																						<span className={`juweeknametext`}>
																							{reward?.title}
																						</span>
																						<span>
																							{reward?.isExpired ?
																								<img src={image.rewardexpire} />
																								:
																								""
																							}
																							{reward?.isCompleted ?
																								<img src={image.newcheckicon} />
																								: ""}
																						</span>
																					</p>
																				</li>
																			))
																		}
																		{/* <li>
																		<p class="text-left d-flex align-items-center">
																			<span class="jumponscene">R2</span>
																			<span class="juweeknametext">Reward 2 Title</span>
																		</p>
																	</li> */}
																	</ul>

																	{/* <i className="fa-solid fa-circle-plus pointer" /> */}
																</span>


															) : (
																<span className="text-center text-secondary">
																	<a
																		href="#"
																		className="pe-none"
																		style={{ color: "#9e9e9e" }}
																	>
																		<i className="fa-sharp fa-solid fa-eye"></i>
																	</a>{" "}

																</span>
															)
														) : val.enrolled &&
															dataToShow[key]?.showCourse ? (
															<span
																className="text-center"
																aria-haspopup="true"
																aria-expanded="false"
																id="RewardDropdwnSeting"
																data-toggle={val?.points === val?.tpoints && val?.rewards?.length === 0 ? "" : "dropdown"}
															// onClick={() => viewReward(val, val.id, "", "")}
															>
																{
																	val?.points === val?.tpoints && val?.rewards?.length === 0 ? (
																		<>
																			<img src={image.rewardimg} className="trext disrewardTooltip" style={{ opacity: ".5" }} />
																			<div class="aboutProgdesc">
																				<div class="Courseporogresspopup">
																					<p class="m-0">
																						You cannot add a reward as your child has completed the course
																					</p>
																				</div>
																			</div>
																		</>
																	) : (
																		<>
																			<img src={image.rewardimg} className="trext2" />

																		</>
																	)

																}
																<span className="rewarddwnicn">
																	<i className="fa-light fa-chevron-down ml-1"></i>
																</span>

																<ul className="dropdown-menu dropdown-menu-end newrewardDropdwn" aria-labelledby="RewardDropdwnSeting">
																	{val?.points !== val?.tpoints && (
																		<li onMouseUp={(e) => {
																			(((!val?.rewards[0]?.isCompleted && !val?.rewards[0]?.isExpired) && val?.rewards?.length > 0)) ?
																				'' : viewReward(val, val.id, "", "")
																		}}
																			className={`${(((!val?.rewards[0]?.isCompleted && !val?.rewards[0]?.isExpired) && val?.rewards?.length > 0)) ? 'AdRedisabled' : ''}`}
																		>
																			<p className="flex">
																				<span className="flexone">
																					{/* <img src={image.rewardimg} alt="" /> */}
																					<i className="fa-solid fa-circle-plus mr-2"></i>
																					Add reward{" "}
																				</span>
																				<span className="Activitymenubar ml-2">
																					<i className="fa-solid fa-key"></i>
																				</span>
																			</p>
																		</li>)
																	}
																	<div class="aboutProgdesc"><div class="Courseporogresspopup"><p class="m-0">
																		You can add a reward once your child achieves current reward target
																	</p></div></div>
																	{
																		getSequnceSort(val?.rewards)?.map((reward, index) => (
																			<li onMouseUp={() => {
																				(reward?.isExpired || reward?.isCompleted) ?
																					displayReward(val, reward, true) :
																					viewReward(val, reward?.id, "", "view")

																			}}>
																				<p class="text-left d-flex align-items-center">
																					<span class="jumponscene">R{index + 1}</span>
																					<span className={`juweeknametext`}>
																						{getCapitalized(reward?.title)}
																					</span>
																					<span>
																						{reward?.isExpired ?
																							<img src={image.rewardexpire} />
																							:
																							""
																						}
																						{reward?.isCompleted ?
																							<img src={image.newcheckicon} />
																							: ""}
																					</span>
																					{
																						(!reward?.isExpired && !reward?.isCompleted) && (
																							<span className="Activitymenubar ml-2">
																								{/* <i className="fa-solid fa-key"></i> */}
																								<i class="fa-light fa-pencil active"></i>
																							</span>
																						)
																					}
																				</p>
																			</li>
																		))
																	}
																	{/* <li>
																		<p class="text-left d-flex align-items-center">
																			<span class="jumponscene">R2</span>
																			<span class="juweeknametext">Reward 2 Title</span>
																		</p>
																	</li> */}
																</ul>

																{/* <i className="fa-solid fa-circle-plus pointer" /> */}
															</span>
														) : (
															<span className="text-center">
																{/* <i
                                  className="fa-solid fa-circle-plus"
                                  style={{ color: "#9e9e9e" }}
                                /> */}
																<img src={image.rewardimg} style={{ opacity: ".5" }} />
															</span>
														)}
													</td>
													<td
														className="DownArrow "
														data-toggle="collapse"
														href={`#module${key}`}
														onClick={() => {
															collapseDispatch({ type: "toggle", key: key });
														}}
													>
														<i className="fa-light fa-chevron-down"></i>
													</td>
												</tr>
											</tbody>
										</table>
										<table
											className={`w-100 child_Table panel-collapse collapse ${(state.every((s) => s === true) && !state) ||
												state[key] == true
												? "show"
												: "hide"
												}`}
											id={`module${key}`}
										>
											<tbody>
												{getSequnceSort(val.activities)?.map((vl, ky) => (
													<tr key={Math.random()}>
														<td></td>
														<td>
															{vl.name.length > 20 && (
																<p>{getToolTip(vl?.name, 20)}</p>
															)}
															<span
																data-for={vl.name}
																data-event-off=""
																data-tip
															>
																S{ky + 1}: {textTrim(vl?.name, 35)}
															</span>
														</td>
														<td></td>
														<td></td>
														<td>
															{/* <label className="Selcheckbox">
                                <input
                                  type="checkbox"
                                  name="schoolType"
                                  value="PUBLIC"
                                  defaultChecked={vl?.showReward ? true : false}
                                  onClick={() => {
                                    handleChangeShowReward(
                                      key + startIndex,
                                      ky
                                    );
                                  }}
                                />

                                <span className="checkmark "></span>
                              </label> */}
														</td>
														<td>
															<label className="Selcheckbox">
																<input
																	type="checkbox"
																	name="schoolType"
																	value="PUBLIC"
																	disabled={
																		val?.id === disableCourse || val?.isAcademic
																	}
																	checked={vl?.kcRequired}
																	onClick={() => {
																		handleChangeKC(key + startIndex, ky);
																	}}
																/>

																<span className="checkmark "></span>
															</label>
														</td>

														<td key={Math.random()}>
															{/* {vl.isRewardAdded ? (
                                dataToShow[key]?.showCourse ? (
                                  <span className="text-center">
                                    <a
                                      href="#"
                                      onClick={() =>
                                        viewReward(val, val.id, vl.id, "view")
                                      }
                                    >
                                      <i className="fa-sharp fa-solid fa-eye"></i>
                                    </a>{" "}
                                 
                                  </span>
                                ) : (
                                  <span className="text-center text-secondary">
                                    <a
                                     
                                      className="pe-none"
                                      style={{ color: "#9e9e9e" }}
                                    >
                                      <i className="fa-sharp fa-solid fa-eye"></i>
                                    </a>{" "}
                                
                                  </span>
                                )
                              ) : val.enrolled &&
                                dataToShow[key]?.showCourse &&
                                !vl?.isCompleted ? (
                                <span
                                  className="text-center"
                                  onClick={() =>
                                    viewReward(
                                      vl,
                                      val.id,
                                      vl.id,
                                      "",
                                      ky,
                                      "activity"
                                    )
                                  }
                                >
                                  <span>
                                    <i className="fa-solid fa-circle-plus pointer" />
                                  </span>
                                </span>
                              ) : (
                                <span className="text-center">
                                  <i
                                    className="fa-solid fa-circle-plus"
                                    style={{ color: "#9e9e9e" }}
                                  ></i>
                                </span>
                              )} */}
														</td>
														<td></td>
													</tr>
												))}
											</tbody>
										</table>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					{/* <div className="Settingpagination LRSlidearrow">
						<span
							className={`${currentPage === 1 ? "pe-none" : "pointer"}`}
							style={{ color: currentPage === 1 ? "#dad7d7" : "" }}
							onClick={() => isNext("previous")}
							disabled={currentPage === 1}
						>
							<i className="fa-light fa-chevron-left"></i>
						</span>
						<span className="ScenePagination">
							{" "}
							<strong>
								{currentPage} of {totalPages}
							</strong>
						</span>

						<span
							className={`${currentPage >= totalPages ? "pe-none" : "pointer"}`}
							style={{
								color: currentPage >= totalPages ? "#dad7d7" : "",
							}}
							onClick={() => isNext("next")}
							disabled={currentPage >= totalPages}
						>
							<i className="fa-light fa-chevron-right"></i>
						</span>
					</div> */}
					<p className="text-left mt-3">
						KC* = Knowledge Check, Ex* = Module Exercise
					</p>

					<div className="pagination justify-content-center mt-3">
						<ul>
							<li>
								<span
									className={`flexone ${!showPrevButton ? "disabledIcon" : ""
										}`}
									onClick={() => handlePageChange(0)}
								>
									<i class="fa-light fa-angles-left"></i>
								</span>
							</li>

							<li>
								<span
									className={`flexone ${!showPrevButton ? "disabledIcon" : ""
										}`}
									onClick={() => handlePageChange(currentPage - 1)}
								>
									<i class="fa-light fa-chevron-left mr-1"></i>Prev
								</span>
							</li>

							{[...Array(displayPageNumbers).keys()].map((index) => {
								const pageNumber = currentPage + index;
								console.log("currentPage + index : ", index, currentPage, pageNumber, totalPages);
								return (
									pageNumber < totalPages && (
										<>
											{pageNumber > 0 &&
												currentPage + 1 === totalPages && (
													<li>
														<span
															key={pageNumber}
															onClick={() =>
																handlePageChange(pageNumber - 1)
															}
															className={
																pageNumber - 1 === currentPage
																	? "btn-primary active"
																	: ""
															}
														>
															{pageNumber}
														</span>
													</li>
												)}

											<li>
												<span
													key={pageNumber}
													onClick={() => handlePageChange(pageNumber)}
													className={
														pageNumber === currentPage
															? "btn-primary active"
															: ""
													}
												>
													{pageNumber + 1}
												</span>
											</li>
										</>
									)
								);
							})}
							<li>
								<span
									className={`flexone ${!showNextButton ? "disabledIcon" : ""
										}`}
									onClick={() => handlePageChange(currentPage + 1)}
								>
									Next<i class="fa-light fa-chevron-right ml-1"></i>
								</span>
							</li>
							<li>
								<span
									className={`flexone ${!showNextButton ? "disabledIcon" : ""
										}`}
									onClick={() => handlePageChange(totalPages - 1)}
								>
									<i class="fa-light fa-angles-right"></i>
								</span>
							</li>
						</ul>
					</div>

				</div>
			) : (
				<ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
			)}
		</>
	);
};

export default General;

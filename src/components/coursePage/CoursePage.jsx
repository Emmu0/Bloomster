import React, { useEffect } from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import { ShimmerCategoryList, useForm } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import {
	getRewardData,
	getStartEnrollCourses,
	fetchCourseTags,
	dimensionSkill,
	getSettingData,
	fetchDimMasterData,
} from "../../redux/actions/APIs";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { getRankSort, getSequnceSort, isDimension } from "../../utils/helper";
import CourseCard from "../dimensions/course/intellectual/CourseCard";
import {
	breadcrumb,
	cnamePageNode,
	countData,
	coursePageNode,
	isLoading,
	parentLoginAction,
	searchCourseTag,
} from "../../redux/actions";
import RewardPopUp from "../base/RewardPopUp";
import Certificate from "../base/Certificate";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DimensionGrowth from "../home/DimensionGrowth";
import SkillGrowth from "../home/SkillGrowth";
import Tag from "./Tag";
import {
	showGrowthModal,
	showSkillModal,
	tagsCourse,
} from "../../redux/actions/Home";
import SearchField from "../controls/SearchField";

const CoursePage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const params = useParams();
	const { register, resetField, setValue } = useForm();
	const {
		startEnrollCourses,
		defaultChildData,
		tagsCouresData,
		coursesbykeyword,
		courseTagObj,
		dimSkillObj,
		countSkillData,
		getResponse,
		courseEnrollResponse,
		coursePageObj,
		dimMasterDataRes,
		cnamePageObj,
		response,
	} = useSelector((state) => state.collections);

	const [courseData, setCourseData] = useState([]);
	const [isShowEnroll, setIsShowEnroll] = useState(false);
	const [openReward, setOpenReward] = useState();
	const [certificate, setCertificate] = useState();
	const [certificateData, setCertificateData] = useState();
	const [certificateskilldata, setcertificateskilldata] = useState();
	const [locationState, setLocationState] = useState({});
	const [searchTermData, setSearchTermData] = useState();
	const [showDimInfo, setShowDimInfo] = useState(false);
	const [infoPopupData, setinfoPopupData] = useState({});
	const [showInfoPopup, setShowInfoPopup] = useState(false);
	const [selectedDimension, setSelectedDimension] = useState([]);
	const [selectedTab, setSelectedTab] = useState("Search");
	let [filterMasterObj, setFilterMasterObj] = useState();

	useEffect(() => {
		if (response?.success) {
			if (filterMasterObj?.length === 0) {
				dispatch(getStartEnrollCourses(defaultChildData?.id));
			}
			else {
				dispatch(getStartEnrollCourses(params.id, filterMasterObj));
			}

		}
	}, [response]);

	useEffect(() => {
		if (
			(dimMasterDataRes && coursePageObj) ||
			(dimMasterDataRes && cnamePageObj)
		) {
			let filter = [];
			let skillName = "";
			dimMasterDataRes?.records?.map((dimension, dimIndex) => {
				dimension?.skills?.map((skill, index) => {
					skill?.courses?.map((cor, key) => {
						if (
							cor?.id === coursePageObj?.urlQuery[1] ||
							cor?.name?.toLowerCase() === cnamePageObj?.urlQuery?.toLowerCase()
						) {
							skillName = skill?.name;
							filter = [
								{
									name: dimension?.name,
									skillIds: [
										{
											id: skill?.id,
											value: skill.name,
										},
									],
								},
							];
						}
					});
				});
			});
			dispatch(coursePageNode());
			dispatch(cnamePageNode());
			// setSelectedTab("Dimensions");
			// setFilterMasterObj(filter);
			if (location?.type !== "dimCatlog" && filter.length === 1) {
				setSelectedTab("Dimensions");
				setFilterMasterObj(filter);
				dimSkillObj?.records?.map((dim, index) => {
					getSequnceSort(dim?.skills)?.map((skill, key) => {
						if (skill?.name === skillName && key >= 4) {
							toggleShowMore(filter[0]?.name);
						}
					});
				});
			}
		}
	}, [dimMasterDataRes]);

	useEffect(() => {
		if (!dimSkillObj || params?.id || getResponse) {
			dispatch(dimensionSkill(params?.id));
		}
		if (!tagsCouresData || getResponse) {
			if (location?.type !== "dimCatlog") {
				setFilterMasterObj([]);
			}
			dispatch(tagsCourse(params?.id));
		}
		// if (coursePageObj) {
		//   console.log("@@step3");
		//   dispatch(getStartEnrollCourses(params.id));
		// }
	}, [params?.id, getResponse, tagsCouresData]);

	useEffect(() => {
		if (location?.type == "dimCatlog") {
			history.replace({ ...history.location, state: {} });
		}
	}, [location?.type]);

	useEffect(() => {
		dispatch(fetchDimMasterData(defaultChildData?.id));
	}, []);

	const showDimModal = (data) => {
		if (isDimension(data?.name)) {
			dispatch(showGrowthModal(data));
		} else {
			dispatch(showSkillModal(data));
		}
	};

	useEffect(() => {
		if (
			courseEnrollResponse &&
			(filterMasterObj?.length === 0 || !filterMasterObj)
		) {
			dispatch(getStartEnrollCourses(params.id));
		}
	}, [courseEnrollResponse]);

	useEffect(() => {
		if (
			startEnrollCourses?.records &&
			startEnrollCourses?.records?.length > 0
		) {
			dispatch(countData(false));
			const allCourses = getSequnceSort(startEnrollCourses.records).flatMap(
				(dimension) => {
					const skills = getSequnceSort(dimension.skills);
					if (skills) {
						return skills.flatMap((skill) => {
							const courses = getSequnceSort(skill.courses);

							if (courses) {
								return courses.map((course) => {
									const modifiedCourse = {
										...course,
										skills: {
											id: skill.id,
											name: skill.name,
											description: skill.description,
											alert: skill.alert,
										},
										dimension: {
											key: dimension?.id,
											value: dimension?.name,
										},
									};

									return modifiedCourse;
								});
							} else {
								return [];
							}
						});
					} else {
						return [];
					}
				}
			);

			setCourseData(allCourses);
		} else {
			setCourseData([]);
			dispatch(countData(true));
		}
	}, [startEnrollCourses?.records]);

	useEffect(() => {
		if (location?.state?.data?.isFilter) {
			setSelectedTab("Dimensions");
			setFilterMasterObj(location?.state?.data?.filter);
		} else if (location?.state?.data?.filter) {
			setSelectedTab("Dimensions");
			if (location?.state?.data?.filter) {
				setFilterMasterObj(location?.state?.data?.filter);
			} else {
				let obj = location?.state?.data?.skill;
				let data = [{ key: obj?.dimension?.dimName, skills: [] }];
				setFilterMasterObj(data);
				showSkillWiseCourse(obj, obj?.dimension);
			}
		}
	}, [location]);

	useEffect(() => {
		dispatch(breadcrumb({ title: "Course Catalog" }));
		if (params?.id && !location?.state) {
			setFilterMasterObj();
			_getCourseCataloge();
		}
		setIsShowEnroll(false);
		let previousState = localStorage.getItem("previousState");
		if (previousState != null) {
			previousState = JSON.parse(previousState);
			let uistate = previousState?.uistate;
			for (let index = 0; index < uistate?.length; index++) {
				if (uistate[index]?.userid === defaultChildData?.id) {
					uistate[index].detail.scene = "";
					uistate[index].page = window.location.href;
					break;
				}
			}
			localStorage.setItem("previousState", JSON.stringify(previousState));
		}
	}, [params?.id, defaultChildData]);

	useEffect(() => {
		if (startEnrollCourses) {
			if (Object.keys(locationState).length > 0) {
				filter = locationState;
			}
		}
		if (location?.type != "dimCatlog") {
			history.replace({ ...history.location, state: {} });
		}
	}, [startEnrollCourses?.records]);

	const removeFilter = (node, dim) => {
		dispatch(searchCourseTag());
		if (
			filterMasterObj?.type === "Search" &&
			filterMasterObj.filter.length === 1
		) {
			handleCheckboxChange(node);

			dispatch(getStartEnrollCourses(params.id));
		} else if (filterMasterObj?.type === "Search") {
			handleCheckboxChange(node);
		} else if (selectedTab === "Dimensions" && !dim) {
			const nodeIndex = filterMasterObj.findIndex(
				(item) => item.name === node.name
			);

			if (nodeIndex !== -1) {
				const updatedFilter = filterMasterObj.filter(
					(item, index) => index !== nodeIndex
				);

				if (updatedFilter.length > 0) {
					setFilterMasterObj(updatedFilter);
				} else {
					dispatch(getStartEnrollCourses(params.id));
					setFilterMasterObj();
				}
			}
		} else if (selectedTab === "Dimensions" && node.id) {
			showSkillWiseCourse(node, dim);
		}
	};
	const viewReward = (data, isCourse, reward) => {
		console.log("### : ", data, isCourse, reward);
		setOpenReward(data);
		dispatch(getRewardData(params?.id, reward?.id, isCourse));
	};

	const viewCertificate = (data, courseData, skills) => {
		setCertificate(data);
		setCertificateData(courseData);
		setcertificateskilldata(skills);
	};

	const showDimensionPopup = (result, name, description, data) => {
		setinfoPopupData({
			name: name,
			description: description,
			alert: data?.alert,
		});
		setShowDimInfo(result);
	};

	const handleShowInfoPopup = (result, name, description, data, filter) => {
		setSelectedDimension(filter?.dimName);
		setShowInfoPopup(result);
		setinfoPopupData({
			name: name,
			description: description,
			alert: data?.alert,
			courses: data?.courseCount,
			courseCount: data?.courseCount,
		});
	};

	const setShowSkillPopup = (result) => {
		setShowInfoPopup(result);
	};

	const showSkillWiseCourse = (data, dimension) => {
		setFilterMasterObj((prevFilterMasterObj) => {
			const filterArray = Array.isArray(prevFilterMasterObj)
				? prevFilterMasterObj
				: [];

			const existingDimensionIndex = filterArray.findIndex(
				(item) => item.name === dimension?.name
			);

			if (existingDimensionIndex !== -1) {
				const updatedFilter = [...filterArray];
				const existingDimension = updatedFilter[existingDimensionIndex];
				const skillIndex = existingDimension.skillIds.findIndex(
					(skill) => skill.id === data?.id
				);

				if (skillIndex !== -1) {
					existingDimension.skillIds.splice(skillIndex, 1);

					if (!existingDimension.skillIds.length) {
						updatedFilter.splice(existingDimensionIndex, 1);
					}
				} else {
					existingDimension.skillIds.push({
						id: data?.id,
						value: data?.name,
					});
				}

				return updatedFilter;
			} else {
				const newFilterItem = {
					name: dimension?.name,
					skillIds: [{ id: data?.id, value: data?.name }],
				};

				return [...filterArray, newFilterItem];
			}
		});
	};

	const handleMostPopular = () => {
		setSearchTermData();
		setFilterMasterObj();
		dispatch(searchCourseTag());
		if (location?.type != "dimCatlog") {
			_getCourseCataloge();
		}
	};

	const selectTabs = (tab) => {
		dispatch(countData());
		setTotalSkillData();
		history.replace({ ...history.location, type: "", state: {} });
		setSelectedTab(tab);
		setSearchTermData();
		handleMostPopular();
	};

	const showTagsWiseCourse = (searchData) => {
		let searchManageFilter = [];
		if (searchData && searchData?.length > 0 && Array.isArray(searchData)) {
			setSearchTermData(searchData);
			searchData.map((item) => {
				searchManageFilter.push({ name: item });
			});
		}
	};

	const handleCheckboxChange = (value) => {
		const updatedData = searchTermData ? [...searchTermData] : [];
		const index = updatedData.indexOf(value);
		if (index !== -1) {
			updatedData.splice(index, 1);
		} else {
			updatedData.push(value);
		}
		setFilterMasterObj({ type: selectedTab, filter: updatedData });
		dispatch(searchCourseTag());
		setSearchTermData(updatedData);
		showTagsWiseCourse(updatedData);

		if (updatedData.length === 0) {
			dispatch(getStartEnrollCourses(params.id));
		}
	};

	useEffect(() => {
		if (courseTagObj) {
			setFilterMasterObj({ type: selectedTab, filter: [courseTagObj] });
		}
	}, [courseTagObj]);

	useEffect(() => {
		if (!courseTagObj && !location?.state) {
			setFilterMasterObj();
			_getCourseCataloge();
		}
	}, [courseTagObj]);

	const _getCourseCataloge = () => {
		if (location?.type != "dimCatlog" && !coursePageObj && !cnamePageObj) {
			dispatch(getStartEnrollCourses(params.id));
		}
	};

	useEffect(() => {
		if (filterMasterObj && ((filterMasterObj?.length > 0 || Object.keys(filterMasterObj).length))) {
			console.log('Step 1 : ', filterMasterObj)
			dispatch(getStartEnrollCourses(params.id, filterMasterObj));
		} else if (
			(location?.type != "dimCatlog" &&
				!coursePageObj &&
				!cnamePageObj) || (filterMasterObj && !coursePageObj && !cnamePageObj)
		) {
			console.log('Step 2')
			dispatch(getStartEnrollCourses(params.id));
		}
		setCurrentPage(0);
	}, [filterMasterObj, coursePageObj, cnamePageObj]);

	let checkobj;
	if (selectedTab === "Dimensions") {
		checkobj =
			filterMasterObj &&
			filterMasterObj.length > 0 &&
			filterMasterObj.filter((item) => {
				const hasNonBlankValues = item?.skillIds?.some(
					(skill) => skill.id !== "" || skill.value !== ""
				);
				return hasNonBlankValues;
			});
	}

	const [totalSkillData, setTotalSkillData] = useState();

	const _selectSkill = (data) => {
		if (data) {
			setFilterMasterObj((prevFilterMasterObj) => {
				const filterArray = Array.isArray(prevFilterMasterObj)
					? prevFilterMasterObj
					: [];

				const updateArray = (data?.skills || [])
					.filter(
						(value) =>
							value.actualCount > 0 &&
							value.name !== "Science" &&
							value.name !== "Social Studies"
					)
					.map((value) => ({
						id: value.id,
						value: value.name,
					}));

				const existingFilterItemIndex = filterArray.findIndex(
					(item) => item.name === data?.name
				);

				if (existingFilterItemIndex !== -1) {
					const existingFilterItem = filterArray[existingFilterItemIndex];
					let totalSkill = data.skills.filter(
						(data) =>
							data.actualCount > 0 &&
							data.name !== "Science" &&
							data.name !== "Social Studies"
					);

					if (
						!filterMasterObj ||
						(filterMasterObj &&
							filterMasterObj[0]?.skillIds?.length >= 0 &&
							totalSkill?.length !== existingFilterItem?.skillIds?.length)
					) {
						existingFilterItem.skillIds = updateArray;

						if (existingFilterItem.skillIds.length === 0) {
							filterArray.splice(existingFilterItemIndex, 1);
						}
					} else if (data.skills) {
						existingFilterItem.skillIds = [];

						if (existingFilterItem.skillIds.length === 0) {
							filterArray.splice(existingFilterItemIndex, 1);
						}
					}
				} else {
					const newFilterItem = {
						name: data?.name,
						skillIds: updateArray,
					};

					filterArray.push(newFilterItem);
				}

				return [...filterArray];
			});
		}
	};

	const handleSetting = () => {
		let userId = defaultChildData?.id;
		let levelId = defaultChildData?.level?.id;
		dispatch(parentLoginAction("verifyUser"));
		dispatch(getSettingData(userId, levelId));
	};

	useEffect(() => {
		if (filterMasterObj?.length > 0) {
			filterMasterObj.length > 0;
			setTotalSkillData(checkobj);
		}
	}, [filterMasterObj]);

	const [displayedItems, setDisplayedItems] = useState({});
	const toggleShowMore = (dimensionName) => {
		setDisplayedItems((prevDisplayedItems) => {
			const currentCount = prevDisplayedItems[dimensionName] || 4;
			return {
				...prevDisplayedItems,
				[dimensionName]: currentCount === 4 ? Infinity : 4,
			};
		});
	};
	const [showItems, setShowItems] = useState();
	useEffect(() => {
		if (dimSkillObj && dimSkillObj?.records?.length > 0) {
			const fData = dimSkillObj?.records?.map((val) => val?.actualCount === 0);
			const allConditionsTrue = fData.every((condition) => condition);
			setShowItems(allConditionsTrue);
		}
	}, [dimSkillObj]);

	const perPage = 10;
	const [currentPage, setCurrentPage] = useState(0);
	const [last_index, setlast_index] = useState();

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		setlast_index(newPage);
	};

	let startIndex = 0;
	let endIndex = 0;
	let slicedData = courseData;
	let totalPages = 0;
	let showPagination = false;
	if (filterMasterObj?.length === 0 || !filterMasterObj) {
		startIndex = currentPage * perPage;
		endIndex = startIndex + perPage;
		if (courseData.length > 0) {
			let courseObj = getRankSort(courseData);
			if (courseObj.length > 0) {
				slicedData = courseObj.slice(startIndex, endIndex);
				// slicedData = courseData.slice(startIndex, endIndex);
				totalPages = Math.ceil(courseData.length / perPage);
				showPagination = true;
			}
		}
	} else if (
		!filterMasterObj ||
		filterMasterObj?.length === 0 ||
		(filterMasterObj?.filter?.length === 0 && true)
	) {
		startIndex = currentPage * perPage;
		endIndex = startIndex + perPage;
		let courseObj = getRankSort(courseData);
		if (courseObj) {
			slicedData = courseObj.slice(startIndex, endIndex);
		}
		// slicedData = courseData.slice(startIndex, endIndex);
		totalPages = Math.ceil(courseData.length / perPage);
		showPagination = true;
	}
	const showPrevButton = currentPage > 0;
	const showNextButton = currentPage < totalPages - 1;
	const displayPageNumbers = 2;
	let recommandedTag = false;
	if (selectedTab === "Search" && !showPagination) {
		slicedData = getRankSort(slicedData);
		recommandedTag = true;
	}

	return (
		<Home>
			<div className="d-flex flex-wrap SpecialLeftpanel w-100">
				<div className="d-flex w-100 align-items-start overflow-visible">
					<div className="LeftbarPannel p-0" id="">
						<div className="CourseCardWrapper fullHeight100">
							<div className="form-title mt-0 mb-0 Enrollcoursetitle heading flex">
								<h2
									data-toggle="collapse"
									className="m-0 pt-0 pb-1 w-100 flex justify-content-between "
								>
									<span>
										<img src={image.mortarboard} className="mr-2" alt="" />
										Available Courses {isShowEnroll && `[${courseData.length}]`}
									</span>
								</h2>
								{showPagination && (
									<div className="pagination">
										<ul>
											<li>
												<span
													className={`flexone ${!showPrevButton ? "disabledIcon" : ""
														}`}
													onClick={() => handlePageChange(0)}
												>
													<i className="fa-light fa-angles-left"></i>
												</span>
											</li>

											<li>
												<span
													className={`flexone ${!showPrevButton ? "disabledIcon" : ""
														}`}
													onClick={() => handlePageChange(currentPage - 1)}
												>
													<i className="fa-light fa-chevron-left mr-1"></i>Prev
												</span>
											</li>

											{[...Array(displayPageNumbers).keys()].map((index) => {
												const pageNumber = currentPage + index;

												return (
													pageNumber < totalPages && (
														<React.Fragment key={index}>
															{pageNumber > 0 &&
																currentPage + 1 === totalPages && (
																	<li key={pageNumber}>
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
														</React.Fragment>
													)
												);
											})}
											<li>
												<span
													className={`flexone ${!showNextButton ? "disabledIcon" : ""
														}`}
													onClick={() => handlePageChange(currentPage + 1)}
												>
													Next<i className="fa-light fa-chevron-right ml-1"></i>
												</span>
											</li>
											<li>
												<span
													className={`flexone ${!showNextButton ? "disabledIcon" : ""
														}`}
													onClick={() => handlePageChange(totalPages - 1)}
												>
													<i className="fa-light fa-angles-right"></i>
												</span>
											</li>
										</ul>
									</div>
								)}
							</div>

							{!countSkillData ? (
								<div className="gridSection coursepagelist pt-2">
									<Tag
										removeFilter={removeFilter}
										filterMasterObj={filterMasterObj}
										selectedTab={selectedTab}
										checkobj={checkobj}
									/>

									{startEnrollCourses && courseData.length > 0
										? slicedData?.map(
											(data, key) =>
												data?.activities?.length > 0 && (
													<React.Fragment key={key}>
														<CourseCard
															data={data}
															viewReward={viewReward}
															viewCertificate={viewCertificate}
															skills={data?.skills}
															recommanded={recommandedTag}
														/>
													</React.Fragment>
												)
										)
										: (courseData.length === 0 || showItems) && (
											<div className="nocoursefoundsrch">
												<h3>
													You have chosen to hide all courses.{" "}
													<span onClick={() => handleSetting()}>
														Click here
													</span>{" "}
													to update your settings to bring the courses back
													into view!
												</h3>
											</div>
										)}
									{showPagination && (
										<div className="pagination pagedown_pagination">
											<ul>
												<li>
													<span
														className={`flexone ${!showPrevButton ? "disabledIcon" : ""
															}`}
														onClick={() => handlePageChange(0)}
													>
														<i className="fa-light fa-angles-left"></i>
													</span>
												</li>

												<li>
													<span
														className={`flexone ${!showPrevButton ? "disabledIcon" : ""
															}`}
														onClick={() => handlePageChange(currentPage - 1)}
													>
														<i className="fa-light fa-chevron-left mr-1"></i>
														Prev
													</span>
												</li>

												{[...Array(displayPageNumbers).keys()].map((index) => {
													const pageNumber = currentPage + index;
													return (
														pageNumber < totalPages && (
															<React.Fragment key={`${index}_bottom`}>
																{pageNumber > 0 &&
																	currentPage + 1 === totalPages && (
																		<li key={`${pageNumber}_bottomNm`}>
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
															</React.Fragment>
														)
													);
												})}
												<li>
													<span
														className={`flexone ${!showNextButton ? "disabledIcon" : ""
															}`}
														onClick={() => handlePageChange(currentPage + 1)}
													>
														Next
														<i className="fa-light fa-chevron-right ml-1"></i>
													</span>
												</li>
												<li>
													<span
														className={`flexone ${!showNextButton ? "disabledIcon" : ""
															}`}
														onClick={() => handlePageChange(totalPages - 1)}
													>
														<i className="fa-light fa-angles-right"></i>
													</span>
												</li>
											</ul>
										</div>
									)}
								</div>
							) : (
								<ShimmerCategoryList items={4} categoryStyle="STYLE_SEVEN" />
							)}
						</div>
					</div>
					<div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel">
						<div className="heading p-0 border-0">
							<h2 className="flex">
								<div className="tabgrid w-100 m-0 shorting_courses">
									<ul className="flexone">
										<li
											className={`tabs w-50 ${selectedTab === "Search" ? "active-tabs" : ""
												}`}
											onClick={() => selectTabs("Search")}
										>
											Search & Tags
										</li>
										<li
											className={`tabs w-50 ${selectedTab === "Dimensions" ? "active-tabs" : ""
												}`}
											onClick={() => selectTabs("Dimensions")}
										>
											Dimensions & Skills
										</li>
									</ul>
								</div>
							</h2>
						</div>

						{selectedTab === "Dimensions" && (
							<div className="alltypeCourseFilter">
								{dimSkillObj ? (
									<div className="ScenecerelateddQuiz p-0 allcourselj searchtxtui">
										<div className="filtersetAllcourse m-0 border-0">
											<div className="signupType m-0 ">
												<label className="Selcheckbox ActiveQQst m-0">
													<span className="QQtitle">Most Popular Courses</span>

													<input
														type="radio"
														id="Public"
														name="Question"
														checked={
															filterMasterObj?.length === 0 || !filterMasterObj
														}
														value="PUBLIC"
														onClick={() => {
															handleMostPopular();
															setTotalSkillData();
															if (location?.type == "dimCatlog") {
																history.replace({
																	...history.location,
																	state: {},
																});
																dispatch(getStartEnrollCourses(params.id));
															}
														}}
													/>
													<span className="checkmark"></span>
												</label>
											</div>
										</div>

										{getSequnceSort(dimSkillObj?.records)?.map(
											(dimension, key) => (
												<div
													className="dimensionshorting checkedtagislist"
													key={dimension?.name}
												>
													<h3 className="mb-3 flex ">
														<div className="flexone">
															<div
																className={`signupType m-0  ${dimension?.actualCount === 0
																	? "disalbled pe-none"
																	: ""
																	}`}
																key={Math.random()}
															>
																<label className="Selcheckbox ActiveQQst m-0">
																	<span className="dimtagHead flexone ">
																		{dimension?.name}
																	</span>

																	<input
																		type="checkbox"
																		id="dimName"
																		name={dimension?.name}
																		value={dimension?.name}
																		onClick={() => _selectSkill(dimension)}
																		checked={
																			filterMasterObj &&
																				!filterMasterObj.type &&
																				filterMasterObj?.some((item) => {
																					let totalSkill =
																						dimension.skills.filter(
																							(data) =>
																								data.actualCount > 0 &&
																								data.name !== "Science" &&
																								data?.name !== "Social Studies"
																						);

																					return (
																						item?.name === dimension?.name &&
																						item?.skillIds?.length ==
																						totalSkill.length
																					);
																				})
																				? true
																				: false
																		}
																		disabled={
																			dimension?.actualCount === 0
																				? true
																				: false
																		}
																	/>
																	<span className="checkmark"></span>
																</label>
															</div>
															<span
																className="pointer"
																onClick={() => showDimModal(dimension)}
															>
																<img
																	src={image.chat_icon}
																	className="chat_icon"
																/>
															</span>
														</div>
														<span
															className="pointer"
															data-toggle="collapse"
															href={`#DimenskillColl${key}`}
															aria-expanded="true"
														>
															<i className="fa fa-chevron-down icon-show"></i>
														</span>
													</h3>
													<div className="Searchtagspacing">
														<div
															className="signupType m-0  panel-collapse collapse show "
															id={`DimenskillColl${key}`}
														>
															{getSequnceSort(dimension?.skills)
																?.slice(0, displayedItems[dimension?.name] || 4)
																.map((skill, index) => (
																	<div
																		className={`flexone mb-3 filtetags  ${skill?.actualCount === 0 ||
																			skill?.name === "Science" ||
																			skill?.name === "Social Studies"
																			? "disalbled"
																			: ""
																			}`}
																		key={Math.random()}
																	>
																		<label className="Selcheckbox ActiveQQst m-0">
																			<span
																				className={`QQtitle flexone pointer`}
																			>
																				{skill?.name}
																			</span>

																			<input
																				type="checkbox"
																				id="Public"
																				name={"skill" + key}
																				value="PUBLIC"
																				onClick={() =>
																					showSkillWiseCourse(skill, dimension)
																				}
																				checked={
																					filterMasterObj &&
																						!filterMasterObj.type &&
																						filterMasterObj?.some(
																							(item) =>
																								item?.name === dimension?.name &&
																								item?.skillIds?.some(
																									(skillOBj) =>
																										skillOBj.id === skill?.id
																								)
																						)
																						? true
																						: false
																				}
																				disabled={
																					skill?.actualCount === 0 ||
																						skill?.name === "Science" ||
																						skill?.name === "Social Studies"
																						? true
																						: false
																				}
																			></input>

																			<span className="checkmark"></span>
																		</label>

																		<span
																			className=""
																			onClick={() =>
																				handleShowInfoPopup(
																					true,
																					skill?.name,
																					skill?.description,
																					skill,
																					{
																						dimId: dimension?.id,
																						dimName: dimension?.name,
																					}
																				)
																			}
																		>
																			<img
																				src={image.chat_icon}
																				className="ml-2 ichat_icon pointer"
																				alt=""
																			/>
																		</span>
																	</div>
																))}
														</div>
														{
															dimension?.skills?.length > 4 && (
																<div className="SeeMoreTxt">
																	<p
																		key={displayedItems[dimension?.name]}
																		className="pointer"
																		onClick={() => toggleShowMore(dimension?.name)}
																	>
																		{displayedItems &&
																			(displayedItems[dimension?.name] ===
																				undefined ||
																				displayedItems[dimension?.name] === 4
																				? "Show More..."
																				: "Show Less")}
																	</p>
																</div>
															)
														}
													</div>
												</div>
											)
										)}
									</div>
								) : (
									<ShimmerCategoryList items={4} categoryStyle="STYLE_SEVEN" />
								)}
							</div>
						)}

						{selectedTab === "Search" && (
							<div className="alltypeCourseFilter">
								<div className="ScenecerelateddQuiz p-0 allcourselj searchtxtui">
									<div className="filtersetAllcourse">
										<div className="signupType m-0 ">
											<label className="Selcheckbox ActiveQQst m-0">
												<span className="QQtitle">Most Popular Courses</span>

												<input
													type="radio"
													id="Public"
													name="Question"
													checked={
														!filterMasterObj ||
														filterMasterObj?.length === 0 ||
														(filterMasterObj?.filter?.length === 0 && true)
													}
													value="PUBLIC"
													onClick={() => {
														handleMostPopular();
														if (location?.type == "dimCatlog") {
															dispatch(getStartEnrollCourses(params.id));
															history.replace({
																...history.location,
																state: {},
															});
														}
													}}
												></input>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
									<div className="Searchtagspacing">
										<div className="input-group searchInputs searchinrest">
											<div className="search">
												<div className="searchInputs">
													<SearchField
														setValue={setValue}
														commonFetch={fetchCourseTags}
														resetFields={resetField}
														dataFetched={coursesbykeyword}
														register={register}
														type="courses"
														isLoading={isLoading}
														setSearchTermData={setSearchTermData}
														handleMostPopular={handleMostPopular}
														placeholder={"Enter search text here..."}
													/>
												</div>
											</div>
										</div>
										<div className="dimensionshorting">
											<h5 className="flex mb-3 mt-3">
												Or select from the below tags:
											</h5>

											<div className="signupType m-0 mb-3">
												{tagsCouresData?.records?.map((value, key) => (
													<div className="flexone mb-3 filtetags" key={key}>
														<label
															className="Selcheckbox ActiveQQst m-0"
															key={key}
														>
															<span className="QQtitle flexone">{value}</span>
															<input
																type="checkbox"
																id="Public"
																name="Question"
																checked={
																	searchTermData?.includes(value) &&
																	filterMasterObj !== undefined &&
																	true
																}
																value="PUBLIC"
																onClick={() => handleCheckboxChange(value)}
															></input>
															<span className="checkmark"></span>
														</label>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{openReward && (
				<RewardPopUp
					closeReward={viewReward}
					rewardDataWithoutAPI={openReward}
				/>
			)}

			{certificate && (
				<Certificate
					_redirectLesson={viewCertificate}
					certificateData={certificateData}
					certificateskilldata={certificateskilldata}
				/>
			)}

			{showDimInfo && (
				<DimensionGrowth
					data={infoPopupData}
					showDimensionPopup={showDimensionPopup}
				/>
			)}

			{showInfoPopup && (
				<SkillGrowth
					data={infoPopupData}
					dimName={selectedDimension}
					setShowSkillPopup={setShowSkillPopup}
				/>
			)}
		</Home>
	);
};

export default CoursePage;

import React, { useEffect, useState } from "react";
import * as image from "../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	completeLesson,
	needHelpLesson,
	getCurriculam,
	getLesson,
	getDimensionData,
} from "../../../redux/actions/APIs";
import ReactTooltip from "react-tooltip";
import { getSequnceSort, kFormatter, textTrim } from "../../../utils/helper";
import { CourseDropDown } from "../course/common";
import { CurriculamModule, CourseCard, Grades, Resources, NeedHelp } from "./";
import VickyComingSoon from "../../widget/VickyComingSoon";
import { COMING_SOON } from "../../../utils/DataObjects";

const CurriculumDetails = ({
	data,
	closeModal,
	type,
	courseName,
	showViewActivity,
	dimensionName,
	selectedTab,
	showResourceInnerDetail,
	handlePopUp,
	providerPopup,
	setShowChooseSubject,
	state,
	tabIndex,
	selectedLesson,
	toggleTab,
}) => {
	const param = useParams();
	const dispatch = useDispatch();
	const {
		getCurriculamData,
		response,
		getSelectedUser,
		responseErrorData,
		quizResponse,
		dimension,
		defaultChildData
	} = useSelector((state) => state.collections);

	const [courseItem, setcourseItem] = useState(selectedTab?.tag);
	// const [activeTab, setActiveTab] = useState(
	// 	courseName?.type === "VICKY" ? 1 : 5
	// );
	const [activeTab, setActiveTab] = useState(tabIndex);
	const [activityType, setActivityType] = useState(type);
	const [selectedCourseName, setCourseName] = useState(courseName);
	const [courseId, setCourseId] = useState(courseName?.courseId);
	const [lessonModuleDetail, setLessonModuleDetail] = useState(undefined);
	const [random, setRandom] = useState(Math.random());
	const [shimerLoader, setShimerLoader] = useState(true);
	const [resourcesData, setResourcesData] = useState({});
	const [selectedResource, setSelectedResource] = useState(0);
	const [tabsId, setTabsId] = useState(undefined);

	useEffect(() => {
		if (selectedLesson) {
			setTabsId(selectedLesson);
		}
	}, [selectedLesson]);
	useEffect(() => {
		if (responseErrorData) {
			$("#resourceInnerModal").addClass("hide");
			$("#resourceInnerModal").removeClass("show");
			$("#resourceInnerModal").css("display", "none");
			setActiveTab(1);
		}
	}, [responseErrorData]);
	useEffect(() => {
		if (getCurriculamData?.records) {
			setTimeout(() => {
				setLessonModuleDetail(getCurriculamData?.records);
			}, 2000);
		}
	}, [getCurriculamData?.records]);

	const needHelp = (moduleId, lessonId, needHelp) => {
		setRandom(Math.random());

		// dispatch(
		// 	needHelpLesson(
		// 		param?.id,
		// 		moduleId,
		// 		lessonId,
		// 		needHelp,
		// 		selectedCourseName?.id
		// 	)
		// );
	};

	const isCompleted = (moduleId, lessonId, isComplete) => {
		setRandom(Math.random());
		// dispatch(
		// 	completeLesson(
		// 		param?.id,
		// 		moduleId,
		// 		lessonId,
		// 		isComplete,
		// 		selectedCourseName?.id
		// 	)
		// );
	};

	useEffect(() => {
		setRandom(Math.random());
	}, [response]);

	const changeModuleLessonDetail = (data) => {
		dispatch({ type: "collaps-all" });
		let CurriculamVal = [];
		if (data) {
			data?.courses?.map((val, index) => {
				if (val?.type == "VICKY") {
					CurriculamVal?.push(val);
				}
			});
		}
		setShimerLoader(undefined);
		setLessonModuleDetail();
		dispatch(getCurriculam(getSelectedUser?.id, CurriculamVal[0]?.id)).then(
			() => {
				setCourseName(CurriculamVal[0]);
				setCourseId(CurriculamVal[0]?.id);
				setActiveTab(1);
				setTimeout(() => {
					setShimerLoader(true);
				}, 3000);
			}
		);
	};

	const tabChange = (modlessId, state) => {
		setTabsId(modlessId);
		setActiveTab(2);
	};
	const tabNChange = () => {
		setActiveTab(3);
	};

	const changeResource = (index) => {
		setSelectedResource(index);
	};

	let selectLessonName = [];
	let complextObj = [];
	selectLessonName = getCurriculamData?.records?.map((item, key) => {
		if (item?.isComplex) {
			selectLessonName = getSequnceSort(item?.lesssons)?.map(
				(vl, ky) =>
					vl?.isComplex &&
					vl?.countOfResources &&
					complextObj.push({
						modLessId: vl.moduleLessonId,
						lesson: vl.name,
						module: item.name,
						sequence: item.sequence,
					})
			);
			return complextObj;
		}
	});

	let selectLesson = [];
	selectLessonName &&
		getSequnceSort(complextObj)?.map(
			(vl, ky) => (
				selectLesson.push(vl), (selectLesson = getSequnceSort(selectLesson))
			)
		);

	selectLesson = getSequnceSort(selectLesson);

	const [totalPoint, setTotalPoint] = useState(
		courseName?.activities[0]?.points
	);

	useEffect(() => {
		if (quizResponse) {
			dispatch(
				getDimensionData(
					param?.id,
					{ key: param?.dimId, value: "Intellectual" },
					dimension
				)
			).then(() => {
				if (dimension) {
					if ("Intellectual" in dimension) {
						dimension["Intellectual"]?.skills?.map((skill, index) => {
							skill?.courses?.map((course, key) => {
								if (course?.id === courseName?.id) {
									setTotalPoint(course?.activities[0]?.points);
								}
							});
						});
					}
				}
			});
		}
	}, [quizResponse]);

	// useEffect(() => {
	// 	if (selectLesson) {
	// 		chooseTab(2);
	// 	}
	// }, [selectLesson])

	const chooseTab = (data) => {
		dispatch(getLesson());
		if (selectLesson) {
			setTabsId(selectLesson[0]?.modLessId);
		}
		setActiveTab(data);
	};
	return (
		<>
			<div className='halfPagePOpup SchoolActivityPopup'>
				<div
					className='modal fade show d-block'
					id='schoolactivity4'
					role='dialog'
					aria-labelledby='exampleModalCenterTitle'
					aria-hidden='true'
					data-aos='fade-left'>
					<div className='modal-dialog modal-lg'>
						<div className='modal-content courseInformation'>
							<div className='modal-header'>
								<div className='heading p-0 border-0'>
									<CourseDropDown
										selectedCourseName={selectedCourseName}
										courseItem={selectedTab?.tag}
										changeModuleLessonDetail={changeModuleLessonDetail}
										closeModal={closeModal}
									/>
								</div>
							</div>

							<div className='modal-body Subject_Curriculam basicdetailsform'>
								<div className='fixedtoppar'>
									<div className='bodyTitle  mb-3'>
										<div className='subtitleHeadinhg flex'>
											{activityType === "Vicky" && (
												<div className='bodyimagetitle flex'>
													<span>
														<img
															src={image.vikylogoicon}
															alt='...'
															className='mr-2'
														/>
													</span>
													<div>
														<h4 className='justify-content-between'>
															{" "}
															<strong> Learning Center</strong>{" "}
														</h4>
														<p>
															Hi, Here is how I can help you with{" "}
															{selectedTab?.tag?.map((value, index) => (
																selectedCourseName?.skillId === value?.id &&
																value?.courses.map((course, key) => (
																	course?.type === "VICKY" &&
																	course?.name + " (Grade:" + defaultChildData?.grade + ")"
																))
															))}
														</p>
													</div>
												</div>
											)}

											<div className='ListIcon'>
												{" "}
												<span
													className='threeDots'
													aria-haspopup='true'
													aria-expanded='false'
													id='navbardropdownAct'
													data-toggle='dropdown'>
													<i className='fa-solid fa-ellipsis-vertical'></i>
												</span>
												<ul
													className='dropdown-menu dropdown-menu-end'
													aria-labelledby='navbardropdownAct'>
													<li>
														{" "}
														<div className='ActivityCategory border-0'>
															<h4 className='d-flex align-items-center p-0 border-0'>
																<i className='fa-duotone fa-line-height'></i>{" "}
																{selectedCourseName?.name}
															</h4>
														</div>
													</li>
													{selectedCourseName?.activities &&
														selectedCourseName?.activities.length > 1 &&
														selectedCourseName?.activities.map((value, ky) => (
															<React.Fragment key={ky}>
																{value && value?.type === "CUSTOM" && (
																	<li>
																		{/* {value?.name?.length > 18 ? (
                                      <ReactTooltip id={value?.name}>
                                        <p>{value?.name}</p>
                                      </ReactTooltip>
                                    ) : (
                                      ""
                                    )} */}
																		<span
																			className='SubFName'
																			data-for={value.name}
																			data-event-off=''
																			data-tip
																			onClick={() => {
																				showViewActivity(
																					value,
																					selectedCourseName,
																					dimensionName,
																					"indiviual"
																				);
																				closeModal();
																			}}>
																			{value?.contentType === "Videos" && (
																				<span>
																					<i className='fa-brands fa-youtube mr-1' />
																				</span>
																			)}
																			{value?.contentType === "Books" && (
																				<span>
																					<i className='fa-solid fa-book' />
																				</span>
																			)}
																			{value?.contentType === "Links" && (
																				<span>
																					<i className='fa-solid fa-link' />
																				</span>
																			)}{" "}
																			{textTrim(
																				value?.name?.charAt(0).toUpperCase() +
																				value?.name?.slice(1),
																				18
																			)}
																		</span>
																	</li>
																)}
															</React.Fragment>
														))}
												</ul>
											</div>
										</div>
									</div>
									<div className='tabgrid AddActivityTab flex'>
										<ul className='w-75 p-0'>
											{courseName?.type === "VICKY" && (
												<li
													onClick={() => chooseTab(1)}
													className={`tabs1 ${activeTab == 1 ? "active-tabs" : ""
														} `}>
													<i className='fa-regular fa-folders'></i> Curriculum
												</li>
											)}

											{courseName?.type === "VICKY" &&
												activityType === "Vicky" && (
													<>
														<li
															onClick={() => chooseTab(2)}
															className={`tabs1 ${activeTab == 2 ? "active-tabs" : ""
																} ${!lessonModuleDetail ? "disableSubscard" : ""
																}`}>
															<button
																disabled={!lessonModuleDetail ? true : false}>
																<i className='fa-regular fa-person-chalkboard'></i>{" "}
																Resources
															</button>
														</li>
													</>
												)}
										</ul>
										<div className='point_bag pr-2'>
											<span>
												<span className='earnnoCoin'>
													{kFormatter(totalPoint) || totalPoint}
												</span>
												<img src={image.money_bag} alt='' />
											</span>
										</div>
									</div>
								</div>
								{/*-------------------------------*/}
								{activeTab === 1 && (
									<CurriculamModule
										lessonModuleDetail={
											lessonModuleDetail ? lessonModuleDetail : data
										}
										tabChange={tabChange}
										tabNChange={tabNChange}
										random={random}
										activityType={activityType}
										needHelp={needHelp}
										isCompleted={isCompleted}
										shimerLoader={shimerLoader}
									/>
								)}
								{/*-------------------------------*/}
								{/* {activeTab === 2 && !tabsId && (
                  <VickyComingSoon description={COMING_SOON[2]?.description} />
                )} */}

								{activeTab === 2 && tabsId && (
									<Resources
										resourcesData={resourcesData}
										changeResource={changeResource}
										selectedResource={selectedResource}
										lessonModuleDetail={lessonModuleDetail}
										activeTab={activeTab}
										tabsId={tabsId}
										selectedCourse={selectedCourseName}
										showResourceInnerDetail={showResourceInnerDetail}
										selectLesson={selectLesson}
										handlePopUp={handlePopUp}
										viewActivityFlag={true}
										loggedInUser={getSelectedUser}
										providerPopup={providerPopup}
										setShowChooseSubject={setShowChooseSubject}
									/>
								)}
							</div>
							<div className='modal-footer'>
								<div className='input-group full-Width-group basic_details_form m-0'>
									<div className='form-group BDsubmitbutton m-0 d-flex'>
										<div className='buttonDistribotion'>
											<button
												type='button'
												className='btn-blue btn-login d-block mb-5 cancelbutton m-0'
												onClick={() => closeModal()}>
												<i className='fa-solid fa-xmark'></i> Close
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CurriculumDetails;

/** @format */

import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { getSequnceSort, textTrim } from "../../../../utils/helper";
import * as image from "../../../../resources/images";
import { useSelector } from "react-redux";
const CourseDropDown = ({
	selectedCourseName,
	courseItem,
	changeModuleLessonDetail,
	closeModal,
}) => {
	const [corseDropdown, setCorseDropdown] = useState(true);
	const { getSelectedUser, defaultChildData } = useSelector(
		(state) => state.collections
	);

	return (
		<h2 className='flex'>
			<span>
				<img src={image.CourseTitleIcon} className='mr-2' alt='' />
				{courseItem?.map(
					(value, index) =>
						selectedCourseName?.skillId === value?.id &&
						value?.courses.map(
							(course, key) =>
								course?.type === "VICKY" &&
								course?.name + " (Grade:" + defaultChildData?.grade + ")"
						)
				)}
				{/* {selectedCourseName?.name + " (Grade:" + defaultChildData?.grade + ")"} */}
				{corseDropdown && (
					<>
						{" "}
						<span
							className='ml-2 pointer'
							aria-haspopup='true'
							aria-expanded='false'
							id='navbardropdown'
							data-toggle='dropdown'>
							<i className='fa-regular fa-chevron-down'></i>
						</span>
						<ul
							className='dropdown-menu dropdown-menu-end'
							aria-labelledby='navbardropdown'>
							{courseItem &&
								getSequnceSort(courseItem)?.map((value, index) => (
									<React.Fragment key={index}>
										{["Math", "English", "Science", "Social Studies"]?.includes(
											value?.name
										) &&
											selectedCourseName?.skillId !== value?.id &&
											((["Math", "English"]?.includes(
												value?.name
											) || value?.isEnrolled)) &&
											value?.courses?.length > 0 &&
											value?.courses?.map(
												(course, key) =>
													course?.type === "VICKY" && (
														<li
															key={index}
															className='pointer'
															onClick={() => changeModuleLessonDetail(value)}>
															{course.name?.length > 17 ? (
																<ReactTooltip id={course?.name}>
																	<p>{course?.name}</p>
																</ReactTooltip>
															) : (
																""
															)}
															<span className='SubFName'>
																{course?.name.charAt(0)}
															</span>
															<span className='SubjFullname'>
																<span
																	data-for={course?.name}
																	data-event-off=''
																	data-tip>
																	{textTrim(course?.name, 18)}
																</span>
															</span>
														</li>
													)
											)}
									</React.Fragment>
								))}
						</ul>
					</>
				)}
			</span>
			<button
				data-dismiss='modal'
				className='btn btn-primary'
				onClick={() => closeModal()}>
				<i className='fa-regular fa-xmark m-0'></i>
			</button>
		</h2>
	);
};

export default CourseDropDown;

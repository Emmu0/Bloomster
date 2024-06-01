import React from "react";
import * as image from "../../../../resources/images";
import SkillGrowth from "../../../home/SkillGrowth";
import { useState } from "react";
const SkillCourseIcon = ({
	data,
	openHelp,
	setSubject,
	selectedTab,
	disable,
	showActivity,
	handleShowInfoPopup,
	handleCurriResourcePopup,
}) => {
	let courseResource = data?.courses?.find((obj) => obj.type === "VICKY");

	return (
		<React.Fragment>
			{data?.showCount > 0 &&
				!["Social Studies", "Science", "English", "Math"]?.includes(
					data?.name
				) && (
					<span
						data-toggle='collapse'
						aria-expanded='true'
						className='pointer updown_arrow_singl'
						href={`#socialcardAcordian${data?.id}`}>
						<i className='fa-solid fa-angle-down' />
					</span>
				)}
			{["English", "Math"]?.includes(data?.name) && (
				<>
					<span className='curiresoevent'>
						<span className='mr-3 pr-3 resocurrinfopopup'>
							<strong
								className=' pointer'
								onClick={() =>
									showActivity(
										undefined,
										"Vicky",
										data?.name,
										courseResource,
										data
									)
								}>
								Curriculum
							</strong>
							<img
								src={image.chat_icon}
								className='ml-2 chat_icon pointer'
								alt
								onClick={() => handleCurriResourcePopup(true, false)}
							/>
						</span>
						<span className='resocurrinfopopup pr-3 mr-3'>
							<strong
								className='pointer'
								onClick={() =>
									showActivity(
										undefined,
										"Vicky",
										data?.name,
										courseResource,
										data,
										true
									)
								}>
								Resources
							</strong>
							<img
								src={image.chat_icon}
								className='ml-2 chat_icon pointer'
								alt
								onClick={() => handleCurriResourcePopup(true, true)}
							/>
						</span>
						{data?.courses?.length > 1 && (
							<span
								data-toggle='collapse'
								aria-expanded='true'
								className='pointer updown_arrow'
								href={`#socialcardAcordian${data?.id}`}>
								<i className='fa-solid fa-angle-down' />
							</span>
						)}
					</span>
				</>
			)}

			{data?.courses?.length >= 3 &&
				["Social Studies", "Science"]?.includes(data?.name) && (
					<span
						className='updown_arrow_singl pointer'
						data-toggle='modal'
						data-target='#chooseCourse'
						key={selectedTab?.key?.value}>
						<button
							disabled={disable ? true : false}
							onClick={() => setSubject(data, "nocard")}
							style={{ background: "none" }}>
							<i className='fa-regular fa-pencil ml-2' />
						</button>
					</span>
				)}
			{data?.courses?.length == 1 &&
				["Social Studies", "Science"]?.includes(data?.name) && (
					<span className='curiresoevent'>
						<span className='mr-3 pr-3 resocurrinfopopup'>
							<strong
								className=' pointer'
								onClick={() =>
									showActivity(
										undefined,
										"Vicky",
										data?.name,
										data?.courses[0],
										data
									)
								}>
								Curriculum
							</strong>
							<img
								src={image.chat_icon}
								className='ml-2 chat_icon pointer'
								alt
								onClick={() => handleCurriResourcePopup(true, false)}
							/>
						</span>
						<span className='resocurrinfopopup pr-3 mr-3'>
							<strong
								className='pointer'
								onClick={() =>
									showActivity(
										undefined,
										"Vicky",
										data?.name,
										data?.courses[0],
										data,
										true
									)
								}>
								Resources
							</strong>
							<img
								src={image.chat_icon}
								className='ml-2 chat_icon pointer'
								alt
								onClick={() => handleCurriResourcePopup(true, true)}
							/>
						</span>
					</span>
				)}
			{data.courseCount === 0 && (
				<div className='Course_progressbar'>
					Coming Soon...
					<span
						className='pointer'
						onClick={() => handleShowInfoPopup(true, data)}>
						{" "}
						{/** openhelp */}
						<img src={image.chat_icon} alt='' className='infoiconimg' />
					</span>
				</div>
			)}
		</React.Fragment>
	);
};

export default SkillCourseIcon;

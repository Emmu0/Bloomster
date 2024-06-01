import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Home from "../Home";
import { breadcrumb, resetResponse } from "../../redux/actions";
import * as image from "../../resources/images";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { getSequnceSort } from "../../utils/helper";
import CourseCard from "../dimensions/course/intellectual/CourseCard";

import { getJournyEnrollData, getRewardData } from "../../redux/actions/APIs";

import Certificate from "../base/Certificate";
import RewardPopUp from "../base/RewardPopUp";
import SubscribePopUp from "../dimensions/SubscribePopUp";
import Subscription from "../subscription/Subscription";

import Sidebar from "./Sidebar";

const JourneySkills = () => {
	const dispatch = useDispatch();
	const path = useParams();

	const { journeyEnrollResponse, defaultChildData, response } = useSelector(
		(state) => state.collections
	);
	const [courseDetail, setCourseDetail] = useState(false);
	const [enrollCourseData, setEnrollCourseData] = useState([]);
	const [showCourseDetail, setShowCourseDetail] = useState("");
	const [skillId, setSkillId] = useState("");
	const [courseDetailId, setCourseDetailId] = useState("");
	const [rewardWK, setRewardWK] = useState();
	const [openReward, setOpenReward] = useState();
	const [teacherDataOpen, setTeacherDataOpen] = useState(false);
	const [showSubs, setShowSubs] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [certificate, setCertificate] = useState();
	const [certificateData, setCertificateData] = useState();
	const [certificateskilldata, setcertificateskilldata] = useState();
	const [ratingClass, setRatingClass] = useState(false);

	const [isChooseSubject, setIsChooseSubject] = useState(false);

	const [teacherData, showTeacherData] = useState(undefined);
	const [showmodal, setShowModal] = useState(false);
	const [showActivityForm, setActivityForm] = useState({});
	useEffect(() => {
		dispatch(
			breadcrumb({
				title: "Learner Journey",
			})
		);
	}, [path?.id]);

	useEffect(() => {
		setEnrollCourseData();
	}, [path?.id]);

	useEffect(() => {
		if (journeyEnrollResponse && journeyEnrollResponse?.records?.length > 0) {
			journeyEnrollResponse?.records[0]?.skills?.map((data, key) => {
				data?.courses?.map((cData, key) => {
					if (cData?.id == showCourseDetail?.id) {
						setShowCourseDetail(cData);
						showTeacherData(cData.provider);
					}
				});
			});
		}
	}, [journeyEnrollResponse, response]);

	useEffect(() => {
		if (journeyEnrollResponse && journeyEnrollResponse?.records?.length > 0) {
			setEnrollCourseData(journeyEnrollResponse?.records);
		}
	}, [journeyEnrollResponse, response]);

	const handlePopUp = (data, skillId, dimName, location) => {
		let obj = {
			courseObj: data,
			skillId: skillId,
		};

		setSubscribeData(obj);
		setShowPopUp(true);
		setShowSubs(false);
		if (location) {
			setIsChooseSubject(true);
		}
	};

	const viewCertificate = (data, courseData, skills) => {
		setCertificate(data);
		setCertificateData(courseData);
		setcertificateskilldata(skills);
	};

	const viewReward = (data, isCourse, wk) => {
		setOpenReward(data);
		setRewardWK(wk);
		dispatch(getRewardData(defaultChildData?.id, data?.id, isCourse));
	};

	const closeModal = () => {
		setActivityForm(undefined);
		showTeacherData(undefined);
		setCourseDetail(false);
		setShowCourseDetail(undefined);
		setShowModal(false);
		dispatch(resetResponse());
	};
	const closePro = () => {
		setActivityForm(undefined);
		showTeacherData(undefined);
		setTeacherDataOpen(false);

		if (!courseDetail) {
			setCourseDetail(false);
			setShowCourseDetail(undefined);
		}
		setShowModal(false);
		dispatch(resetResponse());
	};

	useEffect(() => {
		dispatch(getJournyEnrollData());
		if (defaultChildData || response) {
			// dispatch(getJournyData(defaultChildData.id, defaultChildData.level.id));

			dispatch(
				getJournyEnrollData(defaultChildData?.id, defaultChildData.level.id)
			);
		}
	}, [path.id, defaultChildData, response]);

	// useEffect(()=>{
	// 	if(defaultChildData){
	// 		dispatch(
	// 			getJournyEnrollData(defaultChildData?.id, defaultChildData?.level?.id)
	// 		);
	// 	}	
	// },[path.id, defaultChildData])

	return (
		<>
			<Home>
				<div className="LeftbarPannel p-0" id="School_information">
					<div className="form-title mt-0 mb-0 Enrollcoursetitle heading">
						<h2
							data-toggle="collapse"
							className="m-0 pt-0 pb-1 w-100 flex justify-content-between "
						>
							<span>
								{" "}
								<img src={image.mortarboard} alt="" className="mr-2" /> Enrolled
								Courses{" "}
							</span>
						</h2>
					</div>

					{enrollCourseData ? (
						<div className={`modal-body Subject_Curriculam `}>
							<div className="ljuserviewed">
								{ }
								{getSequnceSort(enrollCourseData)?.map(
									(value, index) =>
										value?.skills.length > 0 && (
											<div className="gridSection" key={index}>
												{value?.skills.map((vl, ky) =>
													vl?.courses.map((vl1, ky1) => (
														<React.Fragment key={ky1}>
															<CourseCard
																skills={vl}
																data={vl1}
																handlePopUp={handlePopUp}
																viewReward={viewReward}
																viewCertificate={viewCertificate}
																setRatingClass={setRatingClass}
															/>
														</React.Fragment>
													))
												)}
											</div>
										)
								)}
							</div>
						</div>
					) : (
						<ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
					)}
				</div>
				<Sidebar enrollCourseData={enrollCourseData} />
			</Home>

			{showSubs && (
				<Subscription close={closeSub} subscribeData={subscribeData} />
			)}
			{/* {showPopUp && (
        <SubscribePopUp
          handleSubscribe={handleSubscribe}
          closePopup={closePopup}
        />
      )} */}

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
		</>
	);
};
export default JourneySkills;

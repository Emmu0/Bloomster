import React, { useEffect, useState } from "react";
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";
import Vicky from "../controls/Vicky";
import { useDispatch, useSelector } from "react-redux";
import {
	courseSectionModal,
	enrollModal,
	lockPopup,
	parentLoginAction,
	setCourseModal,
	setProviderModal,
	setSubscribeModal,
	showModalObj,
} from "../../redux/actions";

const CourseContent = ({ data, value, _closeModal, handlePopUp, index }) => {
	const params = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const {
		selectedDim,
		defaultChildData,
		startEnrollCourses,
		getSelectedUser,
		loggedInUser,
		setting_responseOK,
		courseSectionObj
	} = useSelector((state) => state.collections);

	const [sectionData, setSectionData] = useState([]);

	const [userSignInId, setuserSignInId] = useState("");

	useEffect(() => {
		let sensitiveCourseArray = JSON.parse(
			localStorage.getItem("sensitiveCourse")
		);
		setuserSignInId(
			sensitiveCourseArray?.find((val) => val?.userid === defaultChildData?.id && val?.id === value?.id)
		);
	}, []);

	useEffect(() => {
		if (setting_responseOK && courseSectionObj?.isDetailPage) {
			dispatch(enrollModal());
			if (localStorage.getItem("sensitiveCourse")) {
				let sensitiveCourseArray = JSON.parse(
					localStorage.getItem("sensitiveCourse")
				);
				let userExists = false;
				sensitiveCourseArray?.map((value, key) => {
					if (value?.userid === defaultChildData?.id && value?.id === courseSectionObj?.course?.id) {
						userExists = true;
						return;
					}
				});
				if (!userExists) {
					let obj = {
						id: courseSectionObj?.course?.id,
						userid: defaultChildData?.id,
					};
					sensitiveCourseArray.push(obj);
					localStorage.setItem(
						"sensitiveCourse",
						JSON.stringify(sensitiveCourseArray)
					);
				}
			} else {
				localStorage.setItem(
					"sensitiveCourse",
					JSON.stringify([
						{ id: courseSectionObj?.course?.id, userid: defaultChildData?.id },
					])
				);
			}

			let course = {
				id: courseSectionObj?.course?.id,
				skillId: courseSectionObj?.course?.skillId,
			};
			_redirectLesson(courseSectionObj?.activity, course);
			dispatch(courseSectionModal());
		}
	}, [setting_responseOK, courseSectionObj]);

	const _redirectLesson = (data, value) => {
		if (
			loggedInUser?.role?.name !== "PROVIDER" &&
			index != 0 &&
			!defaultChildData?.isSubscriber
		) {
			dispatch(setSubscribeModal(data));
			if (handlePopUp) {
				handlePopUp(data, value?.id);
			}
			return;
		}

		if (data.isLocked && loggedInUser?.role?.name !== "PROVIDER") {
			dispatch(lockPopup({ isLocked: data?.isLocked, type: value }));
			dispatch(courseSectionModal({ sectionRecord: value }));
			return false;
		}

		if (value?.isSensitive && !value?.isEnrolled && !userSignInId && loggedInUser?.role?.name !== "PROVIDER") {
			setSectionData({ activity: data, type: "Series", course: value });
			dispatch(showModalObj({ isCourse: true, isSection: true }));
			dispatch(parentLoginAction("verifyUser"));
			dispatch(courseSectionModal({ activity: data, isDetailPage: "Series", course: value }));
			return;
		}

		_closeModal();
		let LessonDetail;
		if (data?.isLesson) {
			LessonDetail = PATHS.LESSIONDETAIL_STR;
		} else {
			LessonDetail = PATHS.SOCIALCOURSE_STR;
		}
		dispatch(setCourseModal());
		dispatch(setProviderModal());
		const userId = params?.id ? params?.id : defaultChildData?.id;
		history.push({
			pathname:
				LessonDetail +
				userId +
				"/" +
				value?.id +
				"/" +
				value?.skillId +
				"/" +
				data?.id,
			state: {
				course: value,
			},
		});
	};

	return (
		<div className="CourseWeekdtl flex align-items-center">
			<div className="Weektitledtl">
				Module <span>{data?.sequence}</span>
			</div>
			{value?.isLearnerRightPanel ? (
				<div className="weelyCoursedesc align-items-center p-0 position-relative">
					<h4>
						{data?.name}
					</h4>
					<p className="your_AudioIocn">
						<Vicky text={data?.description} />
					</p>
					{data?.description && (
						<p
							dangerouslySetInnerHTML={{
								__html: data?.description,
							}}
						/>
					)}
				</div>
			) : (
				<div className="weelyCoursedesc align-items-center p-0 position-relative">
					<h5 onClick={() => _redirectLesson(data, value)} className="w-50">
						{data?.name}
						{value?.isSensitive &&
							!value?.isEnrolled &&
							index === 0 &&
							!userSignInId && loggedInUser?.role?.name !== "PROVIDER" && (
								<span className="Activitymenubar ml-2">
									<i class="fa-solid fa-key"></i>
								</span>
							)}
						{data?.isLocked && (
							<span className="Activitymenubar ml-2 pointer">
								<i className="fa-sharp fa-solid fa-lock"></i>
							</span>
						)}
					</h5>
					<p className="your_AudioIocn">
						<Vicky text={data?.description} />
					</p>
					{data?.description && (
						<p
							dangerouslySetInnerHTML={{
								__html: data?.description,
							}}
						/>
					)}
				</div>
			)}
		</div>
	);
};
export default CourseContent;

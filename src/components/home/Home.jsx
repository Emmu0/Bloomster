/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "../Home";
import { PATHS } from "../../utils";
import { useHistory } from "react-router-dom";
import { breadcrumb, homePageNode } from "../../redux/actions";
import { getDimensionData, popularCourses } from "../../redux/actions/APIs";
import { getDashboard } from "../../redux/actions/Home";

import HolisticView from "./HolisticView";
import DimenstionalView from "./DimenstionalView";
import { getUrlSegment } from "../../utils/helper";
import { comingSoonCourse } from "../../redux/actions/Home";
import DimensionGrowth from "./DimensionGrowth";
import SkillGrowth from "./SkillGrowth";
import SkillGrowthPopup from "./skillGrowthPopup";
import ShowOverAllPopup from "./ShowOverAllPopUp";
import DimGuidance from "./DimGuidance";

const Dashboard = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const {
		alluserdetails,
		isAuth,
		loggedInUser,
		signupresponse,
		signinresponse,
		getdimension,
		nfRedirect,
		defaultChildData,
		selectedDim,
		dashboardData,
	} = useSelector((state) => state.collections);

	const {
		dimViewObj,
		growthModal,
		growthSkillObj,
		growthSkillPopup,
		showoverModal,
		getGuidanceData,
	} = useSelector((state) => state.home);

	useEffect(() => {
		if (signinresponse?.success) {
			if (loggedInUser?.role?.name === "PARENT") {
				dispatch(getDimensionData(loggedInUser?.children[0].id));
			} else if (loggedInUser?.role?.name === "LEARNER") {
				dispatch(getDimensionData(loggedInUser.id));
			}
		}
	}, [signinresponse, loggedInUser]);

	useEffect(() => {
		dispatch(
			breadcrumb({
				title: "Home",
				subTitle: dimViewObj
					? `${selectedDim?.value} Dimension`
					: "Overall Progress",
			})
		);
	}, [dimViewObj, selectedDim]);

	useEffect(() => {
		if (loggedInUser && loggedInUser?.role?.name !== "PROVIDER") {
			dispatch(comingSoonCourse());
		}
	}, [loggedInUser]);

	useEffect(() => {
		if (defaultChildData?.id) {
			dispatch(popularCourses(defaultChildData?.id));
		}
	}, [defaultChildData?.id]);
	useEffect(() => {
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
	}, []);

	useEffect(() => {
		if (
			loggedInUser?.uistate &&
			loggedInUser?.uistate !== "null" &&
			signinresponse
		) {
			localStorage.setItem("previousState", loggedInUser?.uistate);
		}
	}, [loggedInUser, signinresponse]);

	useEffect(() => {
		if (history.location.state === "?nl=true" && alluserdetails) {
			dispatch(getDimensionData(alluserdetails?.records[0]?.children[0]?.id));
		}
	}, [history.location.state, alluserdetails]);

	useEffect(() => {
		if (
			history.location.state === "?nl=true" &&
			alluserdetails &&
			alluserdetails?.records[0].role.name === "PARENT" &&
			getdimension
		) {
			history.push(
				PATHS.DIMENSION_STR +
				getdimension?.records[3]?.id +
				"/" +
				alluserdetails?.records[0]?.children[0]?.id
			);
		}
	}, [history.location.state, alluserdetails, getdimension]);

	let scriptString = '';
	useEffect(() => {
		if (getdimension) {
			if (signupresponse?.success) {
				// window.dataLayer = window.dataLayer || [];
				// scriptString = `        
				// <script> ` +
				// 	function gtag() { dataLayer.push(arguments); }
				// gtag('js', new Date());
				// gtag('config', 'G-PB4KV6HMT0');
				// + `</script>
				// `;
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					userEmail: signupresponse?.records[0]?.childName
				});
				/*
				history.push(
					PATHS.COURSEPAGE_STR + signupresponse?.records[0]?.childId
				);
				*/
				//	history.push(PATHS.AFTERSIGNUP);
				//	history.push(PATHS.STR_LEARNER_PLAN + signupresponse?.records[0]?.childId)
				if (signupresponse?.records[0]?.isUserPlan) {
					history.push(PATHS.HOME);
				}
				else {
					history.push(PATHS.STR_LEARNER_PLAN + signupresponse?.records[0]?.childId)
				}
			} else if (isAuth && loggedInUser?.role?.name === "PROVIDER") {
				history.push({
					pathname: PATHS.COURSE_STR + alluserdetails?.recordId,
					state: { edit: true },
				});
			} else if (signinresponse && isAuth && loggedInUser) {
				//	when at the time login uistate is empty

				if (nfRedirect) {
					history.push(nfRedirect);
				} else {
					if (
						(loggedInUser?.uistate == null ||
							loggedInUser?.uistate == "" ||
							loggedInUser?.uistate == "null") &&
						localStorage.getItem("previousState") === null
					) {
						/*
						if (loggedInUser?.role?.name === "PARENT") {
							history.push(
								PATHS.DIMENSION_STR +
								getdimension?.records[3]?.id +
								"/" +
								loggedInUser?.children[0]?.id
							);
						} else if (loggedInUser?.role?.name === "LEARNER") {
							history.push(
								PATHS.DIMENSION_STR +
								getdimension?.records[3]?.id +
								"/" +
								loggedInUser?.id
							);
						}
						*/
					}
				}
			}
		}
	}, [signupresponse, loggedInUser, alluserdetails, getdimension]);

	useEffect(() => {
		if (defaultChildData?.id) {
			if (defaultChildData?.id !== dashboardData?.id) {
				dispatch(getDashboard(defaultChildData?.id));
			}
		}
	}, [defaultChildData]);

	return (
		<div className="homeparents newinfo_popupdimension">
			{
				signupresponse?.success && (
					<>
						<script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=7f5c1aba"></script>
						<script async src="https://www.googletagmanager.com/gtag/js?id=G-YDEWY8TH56"></script>
						<div dangerouslySetInnerHTML={{ __html: scriptString }} />
					</>
				)
			}
			<Home>
				{!dimViewObj && <HolisticView />}
				{dimViewObj && <DimenstionalView />}
			</Home>

			{getGuidanceData && <DimGuidance />}

			{growthModal && <DimensionGrowth data={growthModal} />}
			{growthSkillObj && (
				<SkillGrowth data={growthSkillObj} dimName={selectedDim?.value} />
			)}
			{growthSkillPopup && <SkillGrowthPopup data={growthSkillPopup} />}
			{showoverModal && <ShowOverAllPopup data={showoverModal} />}
		</div>
	);
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import * as image from "../../resources/images";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { PATHS } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { defaultChild, getChildName, resetResponse, showModal } from "../../redux/actions";
import { getUrlSegment } from "../../utils/helper";
import { dimView, getDashboard } from "../../redux/actions/Home";

const SidebarParent = ({
	activeTab,
	handleCloseSKillPopup,
	_dimensionRediret,
}) => {
	const path = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const { loggedInUser, defaultChildData, alluserdetails } = useSelector(
		(state) => state.collections
	);

	const [dimIcon, setDimIcon] = useState("");
	const [homeIcon, setHomeIcon] = useState("");
	const [courIcon, setCourIcon] = useState("");
	const [journeyIcon, setJourneyIcon] = useState("");

	useEffect(() => {
		if (path?.dimId && getUrlSegment()[0] === "dimensions") {
			setDimIcon(path?.id);
		} else if (getUrlSegment()[0] === "courses") {
			setCourIcon(path?.id);
		} else if (getUrlSegment()[0] === "journey") {
			setJourneyIcon(path?.id);
		} else if (getUrlSegment()[0] === "home") {
			setHomeIcon(defaultChildData?.id);
		}
	}, [path, defaultChildData]);

	const coursePageRedirect = (val) => {
		if (window.location?.search.includes("?learnerId=")) {
			let querySt = window.location?.search.toString().split("?learnerId=");

			history.push(PATHS.COURSEPAGE_STR + querySt[1]);
		} else {
			history.push(PATHS.COURSEPAGE_STR + defaultChildData?.id);
		}
	};

	const learnerJourneyRedirect = (data) => {
		if (data?.children?.length > 0) {
			history.push(PATHS.LEARNER_PATHWAY_STR + data?.children[0]?.id);
		} else if (data && data?.role?.name === "LEARNER") {
			history.push(PATHS.LEARNER_PATHWAY_STR + data?.id);
		}
		/*
		  if (data && data?.isJourney) {
			if (data?.children?.length > 0 && data?.children[0]?.isJourney) {
			  history.push(PATHS.LEARNER_JOURNEY_STR + data?.children[0]?.id);
			} else if (data && data?.role?.name === "LEARNER") {
			  history.push(PATHS.LEARNER_JOURNEY_STR + data?.id);
			} else {
			  dispatch(
				showModal({
				  type: "journeySkills",
				  childId: loggedInUser?.children[0]?.id,
				})
			  );
			  dispatch(getChildName(loggedInUser?.children[0]?.firstName));
			}
		  } else {
			dispatch(
			  showModal({
				type: "journeySkills",
				childId: loggedInUser?.children[0]?.id,
			  })
			);
			dispatch(getChildName(loggedInUser?.children[0]?.firstName));
		  }
		  */
	};

	const handleMyPlan = () => {
		history.push(PATHS.MYPLAN);
	}

	const homeRedirect = (obj) => {
		dispatch(dimView());
		dispatch(showModal());
		dispatch(getDashboard());
		dispatch(defaultChild(defaultChildData));
		dispatch(getDashboard(defaultChildData?.id));
		dispatch(resetResponse());
		dispatch(showModal({ type: "LearnerPlanRedirectionPopUp" }));
		history.push({
			pathname: PATHS.HOME,
		});
	};

	const homeRedirect2 = (obj) => {
		dispatch(dimView());
		dispatch(showModal());
		dispatch(getDashboard());
		dispatch(getDashboard(defaultChildData?.id));
		dispatch(resetResponse());
		dispatch(showModal({ type: "LearnerPlanRedirectionPopUp" }));
		history.push(PATHS.HOME);
	};

	return (
		<>
			{loggedInUser?.children.length > 0 ? (
				<>
					<li
						id='headingOne'
						className={`ParentChildSidebar ${activeTab == "home" &&
							!localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
							? "ActiveSidebr"
							: ""
							}`}
						data-toggle='collapse'
						data-target='#home'
						aria-expanded={
							activeTab === "home" &&
							localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
						}
						key={Math.random()}>
						<div
							className='NsideBrDimWrap d-flex'
							onClick={() => homeRedirect()}>
							<span className=''>
								<i className='fa-regular fa-house'></i>
							</span>
							{/* <span className=''>
              <img src={image.logoiconwhite} alt='' className='' />
              </span> */}
							<span className='OpnNsidebartxt flex'>Home</span>
						</div>
					</li>
					<li
						id='headingTwo'
						className={`ParentChildSidebar  course_sideicon ${activeTab == "courses" &&
							!localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
							? "ActiveSidebr"
							: ""
							}`}
						key={Math.random()}
						data-toggle='collapse'
						data-target='#Courses'
						aria-expanded={
							activeTab == "courses" &&
								localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
								? "true"
								: "false"
						}>
						<div
							className='NsideBrDimWrap d-flex collapsed'
							data-toggle='collapse'
							data-target='#Courses'
							aria-expanded='true'
							onClick={() => {
								coursePageRedirect();
								dispatch(showModal());
							}}>
							<span className='flex'>
								<img src={image.coursecatalog} className='' />
							</span>
							<span className='OpnNsidebartxt'>Course Catalog</span>
						</div>
					</li>
					<li
						id='headingOne'
						className={`ParentChildSidebar dimsidebaricon dimensions mb-0`}>
						<div className='NsideBrDimWrap d-flex'
							data-toggle="collapse"
							href="#sidebar_Collasepe"
							aria-expanded="false"
						>
							<span className=''>
								<img src={image.mortarboard_white} alt='' className='' />
							</span>
							<span className='OpnNsidebartxt flex'>My Course <i class="fa-regular fa-chevron-down"></i></span>
						</div>
						<ul className={`panel-collapse collapse`}
							id="sidebar_Collasepe">
							<li className="collaspe_sidebartxt"><span className='OpnNsidebartxt flex'>My Course</span></li>
							<li
								id='headingOne'
								className={`ParentChildSidebar dimsidebaricon ${activeTab == "dimensions" &&
									!localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
									? "ActiveSidebr"
									: ""
									}`}
								data-toggle='collapse'
								data-target='#dimension'
								aria-expanded={
									activeTab === "dimensions" &&
									localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
								}
								key={Math.random()}>
								<div
									className='NsideBrDimWrap d-flex'
									onClick={() => handleMyPlan()}>
									<span className='LNAeroplanIcon'>
										<img src={image.myplan_icon} alt='' className='' />
									</span>
									<span className='OpnNsidebartxt flex'>My Plan</span>
								</div>
							</li>
							<li
								id='headingOne'
								className={`ParentChildSidebar dimsidebaricon ${activeTab == "dimensions" &&
									!localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
									? "ActiveSidebr"
									: ""
									}`}
								data-toggle='collapse'
								data-target='#dimension'
								aria-expanded={
									activeTab === "dimensions" &&
									localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
								}
								key={Math.random()}>
								<div
									className='NsideBrDimWrap d-flex'
									onClick={() => _dimensionRediret()}>
									<span className=''>
										<img src={image.sidebar3d} alt='' className='' />
									</span>
									<span className='OpnNsidebartxt flex'>My Dimensions</span>
								</div>
							</li>
						</ul>
					</li>
					{loggedInUser?.isJourney && (
						<li
							id='headingTwo'
							className={`ParentChildSidebar ${activeTab == "pathway" &&
								!localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
								? "ActiveSidebr"
								: ""
								}`}
							key={Math.random()}
							data-toggle='collapse'
							data-target='#journey'
							aria-expanded={
								activeTab == "pathway" &&
									localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
									? "true"
									: "false"
							}>
							<div
								className='NsideBrDimWrap d-flex collapsed'
								data-toggle='collapse'
								data-target='#journey'
								aria-expanded='true'
								onClick={() => {
									handleCloseSKillPopup();
								}}>
								<span className='flex'>
									<img src={image.pathwaysicon_white} alt='' />
									{/* <i class="fa-solid fa-location-dot"></i> 
                  <i class="fa-regular fa-location-dot"></i>*/}
								</span>
								<span className='OpnNsidebartxt'>
									<span>Learner Pathway </span>{" "}
									{/* <span>Pathways </span>{" "} */}
									{/* <i className="fa-regular fa-chevron-down"></i> */}
								</span>
							</div>
						</li>
					)}
					{/* <li
            id='headingOne'
            className={`ParentChildSidebar dimsidebaricon ${activeTab == "dimensions" &&
              !localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
              ? "ActiveSidebr"
              : ""
              }`}
            data-toggle='collapse'
            data-target='#dimension'
            aria-expanded={
              activeTab === "dimensions" &&
              localStorage.getItem("sidebarCollapse" + loggedInUser?.id)
            }
            key={Math.random()}>
            <div
              className='NsideBrDimWrap d-flex'
              onClick={() => _dimensionRediret()}>
              <span className=''>
                <img src={image.sidebar3d} alt='' className='' />
              </span>
              <span className='OpnNsidebartxt flex'>My Dimensions</span>
            </div>
          </li> */}
				</>
			) : (
				<>
					<li
						className={` ${activeTab == "home" ? "ActiveSidebr" : ""}`}
						onClick={() => {
							homeRedirect2();
						}}>
						<span className='d-flex'>
							<i className='fa-regular fa-house'></i>
							<span className='OpnNsidebartxt'>Home</span>
						</span>
					</li>

					<li
						data-toggle='collapse'
						href='#Courses'
						key={Math.random()}
						aria-expanded={
							activeTab === "courses" &&
							localStorage.getItem(
								"sidebarCollapse" + loggedInUser?.children[0]?.id
							)
						}
						className={`ParentChildSidebar course_sideicon ${activeTab == "courses" ? "ActiveSidebr" : ""
							}`}
						onClick={() => {
							coursePageRedirect(loggedInUser);
							dispatch(showModal());
						}}>
						<div className='NsideBrDimWrap d-flex'>
							<span className='flex'>
								<img src={image.mortarboard_white} className='' />
								<span className='OpnNsidebartxt'>Course Catalog</span>
							</span>
						</div>
					</li>

					{loggedInUser?.isJourney && (
						<li
							data-toggle='collapse'
							href='#pathway'
							key={Math.random()}
							aria-expanded={
								activeTab === "pathway" &&
								localStorage.getItem(
									"sidebarCollapse" + loggedInUser?.children[0]?.id
								)
							}
							className={`ParentChildSidebar ${activeTab == "pathway" ? "ActiveSidebr" : ""
								}`}
							onClick={() => {
								learnerJourneyRedirect(loggedInUser);
							}}>
							<div className='NsideBrDimWrap d-flex'>
								<span className='flex'>
									<img src={image.pathwaysicon_white} alt='' />
									<span className='OpnNsidebartxt'>Learner Pathway</span>
								</span>
							</div>
						</li>
					)}
					<li
						className={`ParentChildSidebar dimsidebaricon ${activeTab == "dimensions" ? "ActiveSidebr" : ""
							}`}
						onClick={() => _dimensionRediret(loggedInUser)}>
						<div className='NsideBrDimWrap d-flex'>
							<span>
								<img src={image.sidebar3d} alt='' className='' />
							</span>
							<span className='OpnNsidebartxt flex'>My Dimensions</span>
						</div>
					</li>
				</>
			)}
		</>
	);
};
export default SidebarParent;
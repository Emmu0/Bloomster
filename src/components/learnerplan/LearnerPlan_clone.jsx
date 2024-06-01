import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import {
	ShimmerCategoryItem,
	ShimmerSimpleGallery,
} from "react-shimmer-effects";
import { getDashboard, showOverallModal } from "../../redux/actions/Home";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../Home";
import { convertedNumber, dateFormatterWithMonthName, getCapitalized, getSequnceSort } from "../../utils/helper";
import LearnerPlanRightPanel from "./LearnerPlanRightPanel";
import { breadcrumb } from "../../redux/actions";
import { createLearnerPlan, getDimensionPlanData, getLearnerPlanWeekWise } from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import LearnerPlanSetup1 from "./LearnerPlanSetup1";
import LearnerPlanSetup2 from "./LearnerPlanSetup2";
import LearnerPlanSetup3 from "./LearnerPlanSetup3";
import LearnerPlanSetup4 from "./LearnerPlanSetup4";
import ChangePacePopUp from "./ChangePacePopUp";
import LearnerModulePlanDetails from "./LearnerModulePlanDetails";

const LearnerPlan = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const params = useParams();

	const { defaultChildData, learnerPlanResponse, response } = useSelector((state) => state.collections);
	const { dashboardData, showoverModal } = useSelector((state) => state.home);
	const [screnNumber, setScreenNumber] = useState(1);

	const [corNum, setCorNum] = useState(2);
	const [loader, setLoader] = useState(false);
	const [getPlan, setPlan] = useState("standard plan");
	const [showPacePopUp, setShowPacePopUp] = useState(false);
	const [showLearnerPlanModuleDetail, setShowLearnerPlanModuleDetail] = useState(false);

	const handleShowPlanModule = (result) => {
		setShowLearnerPlanModuleDetail(result);
	}

	const handleShowPacePopUp = (result) => {
		setShowPacePopUp(result);
	}

	useEffect(() => {
		dispatch(breadcrumb({ title: "Learner Plan" }));
		setScreenNumber(1);
	}, [params?.id, defaultChildData])

	const selcteNumberOfCourse = (num) => {
		setCorNum(num);
	}

	const handleNext = (result) => {
		let index = screnNumber;
		if (result) {
			setScreenNumber(++index);
		} else {
			setScreenNumber(--index);
		}
		if (index === 3) {
			dispatch(getDimensionPlanData(params?.id))
		}
	}

	const submitLeanerPlan = () => {
		setLoader(true);
		dispatch(createLearnerPlan(defaultChildData?.id, learnerPlanResponse?.records));
	}

	useEffect(() => {
		if (response?.success) {
			dispatch(getDashboard(defaultChildData?.id));
			history.push(PATHS.HOME);
			setLoader(false);
		}

	}, [response])

	useEffect(() => {
		document.title = "Bloomster";
	}, [])

	const selectPlan = (value) => {
		setPlan(value);
	};

	let dimensions = [];
	const handleOnDimensionClick = (index, dim) => {
		if (dimensions.includes(index)) {
			const item = dimensions.indexOf(index);
			if (item > -1) {
				dimensions.splice(item, 1)
			}
		} else {
			dimensions.push(index);
		}
		console.log('dim', dimensions.sort());
	}

	return (
		<Home>
			<div className="d-flex flex-wrap SpecialLeftpanel w-100">
				<div className="d-flex w-100 align-items-start overflow-visible">
					{/* Learner Plan  Page */}
					{/* Setup 1 */}
					<div className="LeftbarPannel p-0" id="">
						<div className="CourseCardWrapper fullHeight100">
							<div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
								<h2
									data-toggle="collapse"
									class="m-0 pt-0 pb-1 w-100 flex justify-content-between "
								>
									<span>
										{" "}
										<img src={image.courselevel4} className="mr-2" alt="" />
										Let's create a learning plan for {getCapitalized(defaultChildData?.firstName)}
									</span>
									{/* <span>
										<img src={image.chat_icon} className="chat_icon pointer" />
									</span> */}
								</h2>
							</div>
							<div class="backpageStrip flex">
								{screnNumber !== 1 ? (
									<a href="#" onClick={() => handleNext(false)}>
										<span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>
										Back
									</a>
								) : (<a href="#"></a>)}
								{screnNumber !== 2 && (
									<a href="#" onClick={() => handleNext(true)}>Next
										<span class=""><i class="fa-solid fa-angle-right ml-1"></i></span>
									</a>
								)}
							</div>
							{screnNumber === 1 &&
								<LearnerPlanSetup1
									corNum={corNum}
									selcteNumberOfCourse={selcteNumberOfCourse}
									handleNext={handleNext}
								/>
							}
							{screnNumber === 2 &&
								<LearnerPlanSetup2
									submitLeanerPlan={submitLeanerPlan}
									loader={loader}
									selectPlan={selectPlan}
									getPlan={getPlan}
									handleNext={handleNext}
								/>
							}

							{screnNumber === 3 &&
								<LearnerPlanSetup3
									handleNext={handleNext}
									handleOnDimensionClick={handleOnDimensionClick}
								/>
							}

							{screnNumber === 4 &&
								<LearnerPlanSetup4
									dimensions={dimensions}
								/>
							}
						</div>
					</div>

					<LearnerPlanRightPanel
						corNum={corNum}
						screnNumber={screnNumber}
						showToggle={false}
						handleNext={handleNext}
					/>
				</div>
			</div>
		</Home>
	);
};

export default LearnerPlan;

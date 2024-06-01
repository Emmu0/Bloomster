import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	datesorting,
	getCapitalized,
	getName,
	getUrlSegment,
	getUserIcon,
} from "../../utils/helper";
import { useParams, useHistory } from "react-router-dom";
import { PATHS } from "../../utils";
import { defaultChild, getChildName, showModal } from "../../redux/actions";
import { deleteDimension, getJournyData } from "../../redux/actions/APIs";
import {
	dimView,
	getDashboard,
	sideBarProgress,
} from "../../redux/actions/Home";
import { textTrim } from "../../utils/helper";
import ReactTooltip from "react-tooltip";
import { noop } from "jquery";

const BreadcrumbUser = ({ data, dimredirect }) => {
	const { loggedInUser, selectedDim, dimension, dashboardData } = useSelector(
		(state) => state.collections
	);
	const history = useHistory();
	const dispatch = useDispatch();
	const param = useParams();
	const [getUser, setUser] = useState(false);

	const userChange = (obj, data) => {
		dispatch(getDashboard());
		dispatch(sideBarProgress());
		if (data === "home") {
			//dispatch(getDim)
			dispatch(dimView());
			dispatch(defaultChild(obj));
			dispatch(getDashboard(obj?.id));

			history.push(PATHS.HOME + "?learnerId=" + obj?.id);
		} else if (getUrlSegment()[1] === "parent-courses") {
			history.push(PATHS.PARENT_COURSE_STR + obj?.id);
		} else if (data === "courses") {
			history.push(PATHS.COURSEPAGE_STR + obj?.id);
		} else if (data === "pathway") {
			dispatch(getChildName());
			history.push(PATHS.LEARNER_PATHWAY_STR + obj?.id);
			/*
				if (obj && obj?.isJourney) {
				  history.push(PATHS.LEARNER_JOURNEY_STR + obj?.id);
				} else {
				  dispatch(
					showModal({
					  type: "journeySkills",
					  childId: obj?.id,
					})
				  );
				  dispatch(getChildName(obj?.firstName));
				}
				*/
		} else if (data === "learnerplan") {
			if (obj?.id !== param?.id) {
				history.push(PATHS.HOME);
				dispatch(defaultChild(obj));
				dispatch(getDashboard(obj?.id));
			}
			else {
				history.push(PATHS.STR_LEARNER_PLAN + obj?.id)
			}

		} else {
			dimredirect(obj.id);
		}
	};
	// useEffect(() => {
	// 	if (dashboardData?.userPlans?.length > 0 && getUser) {
	// 		console.log("getUser12 : ", getUser);
	// 		setUser(false);
	// 		history.push(PATHS.HOME);
	// 	}
	// }, [dashboardData])
	return (
		<div className='VKprofile' key={data?.id}>
			<div className='vkprofilename'>
				<span className='insceptionFilter  ml-auto '>
					<div
						id='navbarDropdown'
						className='text-dark'
						role='button'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'>
						{getUserIcon(data, loggedInUser)}
						{textTrim(getCapitalized(getName(data), 20))}
						{loggedInUser?.children?.length > 1 &&
							(getUrlSegment()[0] === "home" ||
								getUrlSegment()[0] === "dimensions" ||
								getUrlSegment()[0] === "courses" ||
								getUrlSegment()[0] === "pathway" ||
								getUrlSegment()[0] === "learnerplan" ||
								getUrlSegment()[1] === "parent-courses") ? (
							<span>
								<i className='fa-regular fa-chevron-down' />
							</span>
						) : (
							""
						)}
					</div>
					{loggedInUser?.children.length > 1 &&
						(getUrlSegment()[0] === "home" ||
							getUrlSegment()[0] === "dimensions" ||
							getUrlSegment()[0] === "courses" ||
							getUrlSegment()[0] === "pathway" ||
							getUrlSegment()[0] === "learnerplan" ||
							getUrlSegment()[1] === "parent-courses") ? (
						<li className='Brumprofile'>
							<div
								className='Prifg dropdown-menu '
								aria-labelledby='navbarDropdown'>
								<ul className=''>
									{loggedInUser?.children &&
										datesorting(loggedInUser?.children).map((vl, ky) => (
											<li
												key={ky}
												onClick={() => userChange(vl, getUrlSegment()[0])}>
												<span data-for={getName(vl)} data-event-off='' data-tip>
													<i className='fa-regular fa-user mr-2'></i>
													{textTrim(getCapitalized(getName(vl), 18))}
												</span>
											</li>
										))}
								</ul>
							</div>
						</li>
					) : (
						""
					)}
				</span>
			</div>
		</div>
	);
};

export default BreadcrumbUser;

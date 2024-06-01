/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { PATHS } from "./index";
import { decodeToken } from "react-jwt";
import {
	cnamePageNode,
	coursePageNode,
	deletePageNode,
	dimPageNode,
	homePageNode,
	pathwayPageNode,
	subscriptionPageNode,
} from "../redux/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	const {
		isAuth,
		signupresponse,
		nfRedirect,
		getdimension,
		alluserdetails,
		defaultChildData,
		loggedInUser,
	} = useSelector((state) => state.collections);
	const dispatch = useDispatch();
	const history = useHistory();

	let role;
	let urlSegmetcorId = "";
	if (signupresponse) {
		const myDecodedToken = decodeToken(signupresponse?.records[0]?.jwt);
		role = myDecodedToken?.aud;
	}

	let queryString = "";
	if (true) {
		if (window.location?.search.includes("?course")) {
			const queryParameters = new URLSearchParams(location.search);
			let urlQuery = queryParameters.get("course");
			urlQuery = urlQuery ? urlQuery.split("/") : urlQuery;
			let corQuery = urlQuery
				? urlQuery[0]
				: localStorage.getItem("defauldChildId");
			queryString = "/courses/" + corQuery;
			dispatch(coursePageNode({ urlQuery: urlQuery }));
			if (!localStorage?.getItem("access_token")) {
				history.push(PATHS.USERSIGNIN);
			}
		} else if (window.location?.search.includes("?dimension")) {
			const queryParameters = new URLSearchParams(location.search);
			queryString = "/dimensions/" + queryParameters.get("dimension");
			let urlQuery = queryParameters.get("dimension");
			urlSegmetcorId = urlQuery.split("/")[2];
		} else if (window.location?.search.includes("?pathway")) {
			const queryParameters = new URLSearchParams(location.search);
			let learnerId = queryParameters.get("pathway");
			if (localStorage?.getItem("access_token")) {
				let result = learnerId
					? learnerId
					: localStorage.getItem("defauldChildId");
				queryString = "/pathway/" + result;
			} else {
				if (learnerId) {
					dispatch(
						pathwayPageNode({ isLearnerIdExists: true, childId: learnerId })
					);
				} else {
					dispatch(pathwayPageNode({ isLearnerIdExists: false }));
				}
				history.push(PATHS.USERSIGNIN);
			}
		} else if (window.location?.search.includes("?home")) {
			const queryParameters = new URLSearchParams(location.search);
			let childId = queryParameters.get("home");
			//	if (childId) {
			dispatch(homePageNode({ childId: childId }));
			//	}
			if (!localStorage?.getItem("access_token")) {
				history.push(PATHS.USERSIGNIN);
			}
		} else if (window.location?.search.includes("?subscription")) {
			console.log("subscrip1111 : ");
			const queryParameters = new URLSearchParams(location.search);
			let childId = queryParameters.get("subscription");
			if (localStorage?.getItem("access_token")) {
				let urlQuery = queryParameters.get("subscription");
				queryString = "/courses/" + localStorage.getItem("defauldChildId");
				dispatch(subscriptionPageNode({ childId: urlQuery }));
			} else {
				console.log("subscrip 3 : ");
				dispatch(subscriptionPageNode({ isPage: true }));
				history.push(PATHS.USERSIGNIN);
			}
		} else if (window.location?.search.includes("?dim")) {
			console.log("dim step 2");
			const queryParameters = new URLSearchParams(location.search);
			let dimName = queryParameters.get("dim")
				? queryParameters.get("dim")
				: "Social";
			dispatch(dimPageNode({ dimensionName: dimName }));
			if (!localStorage?.getItem("access_token")) {
				history.push(PATHS.USERSIGNIN);
			}
		} else if (window.location?.search.includes("?settings")) {
			dispatch(cnamePageNode({ isSetting: true }));
			history.push(PATHS.USERSIGNIN);
		} else if (window.location?.search.includes("?cname")) {
			const queryParameters = new URLSearchParams(location.search);
			let urlQuery = queryParameters.get("cname");
			urlQuery = urlQuery ? urlQuery.replaceAll("_", " ") : urlQuery;
			console.log("urlQuery course 1 : ", urlQuery);
			dispatch(cnamePageNode({ urlQuery: urlQuery }));
			if (!localStorage?.getItem("access_token")) {
				history.push(PATHS.USERSIGNIN);
			}
		} else if (window.location?.search.includes("?feedback")) {
			dispatch(cnamePageNode({ isFeedback: true }));
			history.push(PATHS.USERSIGNIN);
		}
	}

	if (window.location.href.includes("deleteaccount")) {
		queryString = "/deleteaccount";
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth && restricted ? (
					<Redirect
						to={{
							pathname: queryString ? queryString : PATHS.HOME,
							state: { courseId: urlSegmetcorId },
							urlSegmetcorId,
							// state: "?nl=true",
						}}
					/>
				) : (
					// <Redirect
					//   to={{
					//     pathname:  PATHS.DIMENSION_STR+"f83a9d8d-c582-4a38-bcc8-cd542a9400b7/33245a31-8475-406a-ae9d-e26de92677ad",
					//   }}
					// />
					<Component {...props} />
				)
			}
		/>
	);
};

export default PublicRoute;

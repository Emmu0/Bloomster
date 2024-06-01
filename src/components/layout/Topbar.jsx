/** @format */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as image from "../../resources/images";
import { showModal } from "../../redux/actions";
import { PATHS } from "../../utils";
import PaymentFailed from "../subscription/PaymentFailed";
import { SITEFNAME, SITENAME } from "../../utils/Messages";

const Topbar = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	});

	/* Method that will fix header after a specific scrollable */
	const isSticky = (e) => {
		const header = document.querySelector(".header");
		const scrollTop = window.scrollY;
		scrollTop >= 50
			? header.classList.add("is-sticky")
			: header.classList.remove("is-sticky");
	};

	const showModalBox = (obj) => {
		dispatch(showModal(obj));
	};
	const _redirectHome = () => {
		history.push(PATHS.LANDINGPAGE);
	};

	useEffect(() => {
		if (process.env.REACT_APP_PENDO_KEY) {
			(function (apiKey) {
				(function (p, e, n, d, o) {
					var v, w, x, y, z;
					o = p[d] = p[d] || {};
					o._q = o._q || [];
					v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
					for (w = 0, x = v.length; w < x; ++w)
						(function (m) {
							o[m] =
								o[m] ||
								function () {
									o._q[m === v[0] ? "unshift" : "push"](
										[m].concat([].slice.call(arguments, 0))
									);
								};
						})(v[w]);
					y = e.createElement(n);
					y.async = !0;
					y.src = "https://cdn.pendo.io/agent/static/" + apiKey + "/pendo.js";
					z = e.getElementsByTagName(n)[0];

					if (z && z.parentNode && y) {
						z.parentNode.insertBefore(y, z);
					}
				})(window, document, "script", "pendo");
				pendo.initialize({
					visitor: {
						id: "VISITOR-UNIQUE-ID", // Required if user is logged in, default creates anonymous ID
					},

					account: {
						id: "ACCOUNT-UNIQUE-ID", // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
					},
				});
			})(process.env.REACT_APP_PENDO_KEY);
		}
	}, []);

	return (
		<>
			<header className="header">
				<div className="container topbarlandindwidth">
					<div className="vickyLogo">
						<div className="logoTitle pointer">
							<a className="Logo" href={PATHS.LANDINGPAGE}>
								{" "}
								<img
									className="internallogo"
									src={image.newvickylogo}
									onClick={() => {
										history.push(PATHS.LOGIN);
									}}
									alt="..."
								/>
								<img
									className="landingpagelogo"
									src={image.vicky_logo_LP}
									onClick={() => {
										history.push(PATHS.LOGIN);
									}}
									alt="..."
								/>
							</a>
						</div>
						<div className="menuList landingpageMenu">
							<ul>
								<li>
									<NavLink to={PATHS.PROVIDERFLOW}>
										About {SITENAME.NAME}
									</NavLink>
								</li>
								<li>
									<NavLink to={PATHS.BLOG}>Blog</NavLink>
								</li>
								<li
								// onClick={() => showModalBox({ type: "SignIn" })}
								>
									<NavLink to={PATHS.USERSIGNIN}> Sign In</NavLink>
								</li>

								{process.env.REACT_APP_BLOCK_SIGNUP === "true" && (
									<li
										className="signup_styl"
									// onClick={() => showModalBox({ type: "SignUp" })}
									>
										<NavLink to={PATHS.USERSIGNUP}> Sign Up</NavLink>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Topbar;

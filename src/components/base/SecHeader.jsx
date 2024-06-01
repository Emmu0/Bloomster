import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import { getUrlSegment } from "../../utils/helper";


const SecHeader = () => {
	const [mobNavigation, semobNavigation] = useState(false)
	const mobile_navigationfun = () => {
		if (mobNavigation === true) {
			semobNavigation(false)
		}
		else {
			semobNavigation(true)
		}
	}
	return (
		<div className={`header-dnd-area2 en-header header ${mobNavigation === true ? "Mobile_Navigation" : ""}`}>
			<div className='container-fluid header__container content-wrapper'>
				<div className='flex'>
					<div className='bloomLogo'>
						<a href="https://bloomster.com/home"> <img src={image.vicky_logo_LP} /></a>
					</div>
					<div className='Hub_Navigation'>
						<ul>
							{
								window.location.origin === "https://platform.bloomster.com" ? (
									<>
									<li>
											<a href='https://bloomster.com/online-platform'>How Bloomster Works</a>
										</li>
										<li>
											<a href="https://bloomster.com/online-platform#pricing">Pricing</a>
										</li>
										<li>
											<a href="https://bloomster.com/how-bloomster-works">About</a>
										</li>
										<li>
											<a href="#">Resources <i class="fa-light fa-angle-down"></i></a>
											<ul className="menu__submenu">
												<li className="menu__item ">
												   <a href="https://bloomster.com/blog">Blog</a>
												</li>
												<li className="menu__item ">
												   <a href="https://bloomster.com/course-library">Course Library</a>
												</li>
												<li className="menu__item ">
												   <a href="https://bloomster.com/ebook/effective-communication">eBook: Effective Communication</a>
												</li>
												<li className="menu__item ">
												   <a href="https://bloomster.com/app">Mobile App</a>
												</li>
												
											
												
											</ul>
										</li>
									</>
								) : (
									<>
										<li>
											<a href='https://bloomster.com/online-platform'>How Bloomster Works</a>
										</li>
										<li>
											<a href="https://bloomster.com/online-platform#pricing">Pricing</a>
										</li>
										<li>
											<a href="https://bloomster.com/how-bloomster-works">About</a>
										</li>
										<li>
											<a href="#">Resources <i class="fa-light fa-angle-down"></i></a>
											<ul className="menu__submenu">
												<li className="menu__item ">
												   <a href="https://bloomster.com/blog">Blog</a>
												</li>
												<li className="menu__item ">
												   <a href="https://bloomster.com/course-library">Course Library</a>
												</li>
												<li className="menu__item ">
												   <a href="https://bloomster.com/ebook/effective-communication">eBook: Effective Communication</a>
												</li>
												<li className="menu__item ">
												   <a href="https://bloomster.com/app">Mobile App</a>
												</li>
												
											
												
											</ul>
										</li>
									</>
								)
							}
							<li>
								<NavLink
									to={PATHS.USERSIGNIN}
									className={
										getUrlSegment()[0] === "signin" ? "activepage" : ""
									}>
									Sign In
								</NavLink>
							</li>
							<li className='Singnupbtn'>
								<NavLink
									to={PATHS.USERSIGNUP}
									className={
										getUrlSegment()[0] === "signup" ? "activepage" : ""
									}>
									Sign Up
								</NavLink>
							</li>
						</ul>

					</div>
					<div className="mobileNavigation" onClick={mobile_navigationfun}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecHeader;

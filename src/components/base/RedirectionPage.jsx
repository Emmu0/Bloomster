import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import * as image from "../../resources/images";
const RedirectionPage = () => {
	const [redirectionDelay, setRedirectionDelay] = useState(1000000000);
	const [remainingTime, setRemainingTime] = useState(redirectionDelay / 1000);
	const redirectToExternalURL = () => {
		window.location.href = "https://bloomster.com";
	};
	useEffect(() => {
		const timeoutId = setTimeout(redirectToExternalURL, redirectionDelay);
		const intervalId = setInterval(() => {
			setRemainingTime((prevTime) => prevTime - 1);
		}, 1100);

		return () => {
			clearTimeout(timeoutId);
			clearInterval(intervalId);
		};
	}, [redirectionDelay]);

	const handleChangeDelay = (newDelay) => {
		setRedirectionDelay(newDelay);
		setRemainingTime(newDelay / 1000);
	};

	return (
		<div className="redirectioncontainer">
			<div className="container">
				<div className="redirectiomPage">
					<h2>Exciting News!</h2>
					<h3>
						<img src={image.vicky_oldlogo} />
						is now
					</h3>
					<div className="newbloomsterlogo">
						<img src={image.vicky_logo_LP} />
					</div>

					<ul>
						<li>Mobile App |</li> <li>Easier Interface |</li>{" "}
						<li>More Content</li>
					</ul>
					<div className="bllombtm">
						<button
							type="button"
							onClick={() => redirectToExternalURL()}
							className="btn-blue btn-login d-block mb-5 w-auto"
						>
							Go to Bloomster
							{/* <i class="fa-solid fa-paper-plane mr-2"></i>Go to Bloomster */}
						</button>
					</div>
					<div className="redirectionbantxt">
						<p>
							After {remainingTime > 0 ? remainingTime : 0} seconds, you will be automatically
							redirected to Bloomster.com.
						</p>
					</div>
				</div >
			</div >
		</div >
	);
};

export default RedirectionPage;

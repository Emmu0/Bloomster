/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../../utils/Packages";
import * as image from "../../resources/images";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHelpModal } from "../../redux/actions";
import Vicky from "./Vicky";
const InfoModal1 = ({ onClickOutside1 }, props) => {
	const { helpData } = useSelector((state) => state.collections);
	const [compimentry, setCompimentry] = useState("Explanation");

	const ref = useRef(null);
	const { onClickOutside } = props;
	const dispatch = useDispatch();
	let showbox = false;

	const close = () => {
		setCompimentry();
		dispatch(getHelpModal());
	};

	useEffect(() => {
		const handleClickOutside = async (event) => {
			if (
				typeof event.target.className === "string" &&
				event.target.className.includes("modal")
			) {
				await onClickOutside1();
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [onClickOutside]);

	if (helpData?.name) {
		showbox = true;
	} else {
		if (helpData) {
			showbox = true;
		}
	}
	
	return (
		<Modal show={showbox && true} className="AddChildPopup" id="infopopup">
			<Modal.Body className="addChildProf p-0">
				<div className="d-none">
					<audio controls id="pollyId" src=""></audio>
				</div>

				<span className="Abouttaginfo">
					<div className=" NuggetPopup ">
						<div className="NuggetPopupTitle flex">
							<div className="NuggetVickyImage">
								<h4 className="flex">
									<img src={image.Info_Popup_pose} alt="" className="mr-2" />{" "}
									{helpData?.name ? helpData?.name : compimentry}
								</h4>
							</div>
							<div className="powrBulbicon">
								<img src={image.Powericon} alt="" />
							</div>
						</div>
						<div className="NuggetPopupDesc justify-content-between d-flex">
							<p
								dangerouslySetInnerHTML={{
									__html: helpData?.description
										? helpData?.description
										: helpData,
								}}
							/>
							<Vicky
								text={helpData?.description ? helpData?.description : helpData}
							/>
						</div>
						<div className="input-group full-Width-group basic_details_form NuggetPopupFooter">
							<div className="form-group BDsubmitbutton d-flex m-0">
								<div className="buttonDistribotion">
									<button
										type="button"
										onClick={() => close()}
										className="btn-blue btn-login d-block mb-5 cancelbutton"
									>
										<i className="fa-solid fa-xmark"></i> Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</span>
			</Modal.Body>
		</Modal>
	);
};

export default InfoModal1;

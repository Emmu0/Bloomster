import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { convertedNumber, getCapitalized } from "../../utils/helper";
const DeletePlanActivities = ({
	closePlan,
	deletePlan,
	handleRemoveTagDimSkillCourse,
	handleRemoveDimensionSkillCourse,
	handleBack
}) => {
	const handleDelete = () => {
		if (deletePlan?.removeValue) {
			if (deletePlan?.dimType === "removeDimension") {
				handleRemoveDimensionSkillCourse(deletePlan?.removeValue, deletePlan?.dimension, deletePlan?.skill, deletePlan?.course, false, deletePlan?.type, deletePlan?.dimTree)
			} else {
				handleRemoveTagDimSkillCourse(deletePlan?.removeValue, deletePlan?.dimension, deletePlan?.skill, deletePlan?.course, false, deletePlan?.type, deletePlan?.dimTree)
			}
		} else {
			handleBack(true);
		}
		closePlan();
	}
	return (
		<div className="sharepopup  AreyousurePopup areyousurenewpopup">
			<div className="modal show d-flex" id="schoolactivity161" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content courseInformation schoolcourse">
						<div className="modal-body p-5  mx-3">
							<div className="sharewithfrnd ">
								<h3 className="text-center"><img src={image.exclamationTrangle} className="mr-3" />{deletePlan?.title ? deletePlan?.title : "Are you sure?"}</h3>
								<p className="mb-3 pb-2 pt-2 mt-3 text-left" >
									{deletePlan?.message}</p>
								<div className="buttonDistribotion justify-content-around">
									{deletePlan?.title === undefined ? (
										<>
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 cancelbutton w-auto ml-0"
												onClick={() => closePlan()}
											>
												Cancel
											</button>
											<button
												type="button"
												className="btn-blue btn-login d-block mb-5 w-auto"
												onClick={() => handleDelete()}
											>
												Ok
											</button>
										</>
									) : (
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 w-auto"
											onClick={() => closePlan()}
										>
										 Ok
										</button>
									)}
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
export default DeletePlanActivities;
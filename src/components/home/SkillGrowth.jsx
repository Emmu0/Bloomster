/** @format */

import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { showGrowthModal, showSkillModal } from "../../redux/actions/Home";
import { GROWTHDATA } from "../../utils/DataObjects";
import { getDimIconWithSpace } from "../../utils/helper";
const SkillGrowth = ({ data, dimName, setShowSkillPopup }) => {
	const { selectedDim, loggedInUser } = useSelector(
		(state) => state.collections
	);
	const dispatch = useDispatch();

	let skillData = [];
	GROWTHDATA.map((vl) => {
		if (vl?.title === dimName) {
			if (vl.skills.find((obj) => obj === data?.name)) {
				skillData = [...new Set([data.name, ...vl?.skills])];
			} else {
				skillData = [data?.name, ...vl?.otherSkills];
			}
		}
		// } else if (vl?.title === dimName) {
		// 	if (vl.skills.find((obj) => obj === data?.name)) {
		// 		skillData = [...new Set([data.name, ...vl?.skills])];
		// 	} else {
		// 		skillData = [data?.name, ...vl?.otherSkills];
		// 	}
		// 	//	handleSkillData(vl);
		// 	//	skillData = vl?.skills;

		// 	// if (vl.skills.find((obj) => obj === infoPopupData.name)) {
		// 	//   skillData = [...new Set([infoPopupData.name, ...vl.skills])];
		// 	// }else {
		// 	//   skillData = [infoPopupData.name, ...vl.otherSkills];
		// 	// }
		// }
	});

	const _close = () => {
		dispatch(showSkillModal());
		if (setShowSkillPopup !== undefined) {
			setShowSkillPopup(false);
			if (document.getElementById("pathwayinfopopup")) {
				document
					.getElementById("pathwayinfopopup")
					.classList.remove("PathwaySelLit");
			}
		}
	};

	return (
		<div className='newinfo_popupdimension'>
			<div className='newinfo_popup new_skill_popinfo'>
				<div className='modal  show d-flex' id='schoolactivity39' role='dialog'>
					<div className='modal-dialog modal-lg'>
						<div className='modal-content courseInformation'>
							<div className='modal-header'>
								<div className='heading border-0 p-0 w-100'>
									<h2 className='flex'>
										<span>
											{getDimIconWithSpace(
												dimName ? dimName : selectedDim?.value
											)}
											{dimName ? dimName : selectedDim?.value} <span>&gt;</span>{" "}
											{data?.name}
											{/* {(data?.name === "Science" ||
                        data?.name === "Social Studies" ||
                        data?.courses === 0) && (
                        <span className='color_green'> (Coming Soon...)</span>
                      )} */}
											{(data?.name === "Science" ||
												data?.name === "Social Studies") &&
												data?.courseCount > 0 &&
												loggedInUser.role.name !== "PROVIDER" && (
													<span className='color_green'> (Coming Soon...)</span>
												)}
										</span>
										<button
											className='btn btn-primary'
											onClick={() => _close()}>
											<i className='fa-regular fa-xmark m-0'></i>
										</button>
									</h2>
								</div>
							</div>

							<div className='modal-body pb-1'>
								<div className='infopopup_wrap  align-items-start'>
									<div className='infopopupright flex align-items-start'>
										<div className='info_related_text w-60'>
											<h4 className=''>{data?.alert}</h4>
											<div className='infopopup_txt mt-3'>
												{/* <p>&nbsp;</p> */}
												<p className='m-0'>{data?.description}</p>
											</div>
										</div>
										<div className='holisticflowr w-40 pt-0'>
											<div className='skilanddimensioncircle Holisticgtflr mt-3'>
												<div className='Holosticcircle'>
													<h4>Holistic Growth</h4>
												</div>
												<div className='Dimen_Circle SocicalCircle'>
													{/* <p>Social</p> */}
												</div>
												<div className='Dimen_Circle EmotionalCircle'>
													{/* <p>Emotional</p> */}
												</div>
												<div className='Dimen_Circle SpritiuslCircle'>
													{/* <p>Mindfulness</p> */}
												</div>
												<div className='Dimen_Circle PhysicalCircle'>
													{/* <p>Physical</p> */}
												</div>
												<div className='Dimen_Circle intellectualCircle'>
													{/* <p>Intellectual</p> */}
												</div>
											</div>
										</div>
									</div>
									<div className='infopopupleft flexone justify-content-left '>
										<div className='holisticflowr skills_flow'>
											<div className='Singlr_skill'>
												<div className='skill_pnlcircle'>
													<p>{data?.name}</p>
												</div>
											</div>
										</div>

										<p className='uppercarrowicon text-center flexone'>
											<span>
												<strong>Skill contributes to Dimension</strong>

												<img src={image.upperarrowicon} alt='' />
											</span>
										</p>
										<div className='holisticflowr dimension_skilflow'>
											<div className='skilanddimensioncircle'>
												<div
													className={`dimensionskills ${dimName ? dimName : selectedDim?.value
														}_Skils_center`}>
													<h5 className='mt-3 pt-3'>
														{dimName ? dimName : selectedDim?.value}
													</h5>
												</div>

												<div className='skillCircleList'>
													{skillData &&
														skillData.map((vl, ky) => (
															<div className='skill_pnlcircle' key={ky}>
																<p>{vl}</p>
															</div>
														))}
												</div>
											</div>
										</div>
										<p className='uppercarrowicon angleuppericon text-center flexone'>
											<img src={image.angleforwrdarow} alt='' />
											<strong>Dimension contributes to Holistic Growth</strong>
										</p>
									</div>
								</div>
							</div>
							<div className='modal-footer'>
								<div className='form-group BDsubmitbutton m-0 d-flex'>
									<div className='buttonDistribotion'>
										<button
											type='button'
											onClick={() => _close()}
											className='btn-blue btn-login d-block mb-5 cancelbutton'>
											<i className='fa-solid fa-xmark'></i> Close
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillGrowth;

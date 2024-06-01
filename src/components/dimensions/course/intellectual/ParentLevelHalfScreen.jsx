import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import "rsuite/dist/rsuite.css";
import { useDispatch, useSelector } from "react-redux";
import { getCapitalized } from "../../../../utils/helper";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
	getIntelligences,
	postIntelligences,
} from "../../../../redux/actions/APIs";
import Vicky from "../../../controls/Vicky";
import { parentToolsModal, resetGuestResponse } from "../../../../redux/actions";

const ParenLevelHalfScreen = ({ data }) => {
	const { getIntelligenceResponse, defaultChildData, response_ok, loggedInUser } =
		useSelector((state) => state.collections);
	const [selectedIndex, setSelecetedIndex] = useState(0);
	const [buttonDisabledArray, setButtonDisabledArray] = useState([]);
	const [isNext, setIsNext] = useState(false);
	const [intellienceData, setIntellienceData] = useState([]);
	const params = useParams();
	const dispatch = useDispatch();
	const [loader, setLoader] = useState(false);
	const handleNext = (isBoolean, index) => {
		if (isBoolean) {
			setSelecetedIndex(selectedIndex + 1);
		} else {
			setSelecetedIndex(selectedIndex - 1);
		}
	};

	const [random, setRandom] = useState();
	const handleOption = (question, index) => {
		setRandom(Math.random());
		question.attempted = true;
		question?.options?.map((opt, key) => {
			opt.attempted = false;
		});
		question.options[index].attempted = true;
		let data = intellienceData;
		data.push(question?.id);
		setIntellienceData(data);
	};

	const handleSubmit = () => {
		//setSelecetedIndex(selectedIndex + 1);
		const selectOptId = [];
		getIntelligenceResponse?.records.map((val, key) => {
			val.attempted &&
				val.options.map((data, ky) => {
					if (data.attempted) {
						selectOptId.push(data.id);
					}
				});
		});
		const surveyId = getIntelligenceResponse?.records[0]?.surveyId;
		if (loggedInUser?.role?.name !== "PROVIDER") {
			setLoader(true);
			dispatch(postIntelligences(params.id, surveyId, selectOptId));
		} else {
			setSelecetedIndex(5);
		}
	};

	useEffect(() => {
		if (getIntelligenceResponse) {
			if (getIntelligenceResponse?.records[0]?.attempted) {
				setSelecetedIndex(5);
				setIsNext(true);
			} else {
				setSelecetedIndex(0);
				setIsNext(false);
			}
			let obj = [];
			getIntelligenceResponse?.records?.map((value, index) => {
				obj = buttonDisabledArray;
				obj[index] = "1";
			});
			setButtonDisabledArray(obj);
		}
	}, [getIntelligenceResponse]);

	useEffect(() => {
		if (response_ok) {
			setLoader(false);
			setSelecetedIndex(5);
		}
	}, [response_ok]);

	const [isContentVisible, setIsContentVisible] = useState(false);

	const toggleContent = () => {
		setIsContentVisible(!isContentVisible);
	};

	const closePopup = () => {
		dispatch(parentToolsModal());
		dispatch(getIntelligences());
		dispatch(resetGuestResponse());
	};

	return (
		<React.Fragment key={getIntelligenceResponse?.records[selectedIndex]?.id}>
			{isNext ? (
				<div className="halfPagePOpup SchoolActivityPopup parentQuizsanalysis ljpopups">
					<div className="modal d-block" id="schoolactivity122" role="dialog">
						<div className="modal-dialog modal-lg">
							<div className="modal-content courseInformation">
								<div className="modal-header">
									<div className="heading border-0 p-0">
										<h2 className="flex">
											<span>
												<img src={image.skills_img} className="mr-2" /> See new
												life skills{" "}
												{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} has
												learned in this course
											</span>
											<button
												className="btn btn-primary"
												data-dismiss="modal"
												onClick={() => closePopup()}
											>
												<i className="fa-regular fa-xmark m-0"></i>
											</button>
										</h2>
									</div>
								</div>
								<div className="modal-body">
									<div className="subscriptioncardwrap feeAnalysispopup skillEvaluatoin">
										{/* <h3 className="mb-3">Key Learnings</h3> */}
										<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3 position-relative">
											<h4
												className="flex keyconcepttitle"
												data-toggle="collapse"
												href="#keyskilldropdwn"
												aria-expanded="true"
												onClick={toggleContent}
											>
												<strong>
													In the course <em>{data?.name}</em>,{" "}
													{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} learned
													the following concepts:
												</strong>
												{
													isContentVisible ? (<span>
														<i className="fa fa-chevron-up icon-show"></i>
													</span>) : (<span>
														<i className="fa fa-chevron-down icon-show"></i>
													</span>)
												}
											</h4>
											{isContentVisible && (
												<>
													<div className="position-relative">
														<div
															dangerouslySetInnerHTML={{
																__html:
																	getIntelligenceResponse?.records &&
																		getIntelligenceResponse?.records[0]?.learning
																		? getIntelligenceResponse?.records[0]
																			?.learning
																		: "",
															}}
															className="keyconceptListing"
														></div>
														<p className="your_AudioIocn">
															<Vicky
																text={
																	getIntelligenceResponse?.records[0]?.learning
																}
															/>
														</p>
													</div>
												</>
											)}

											{/* <ul
												className="p-0 w-100 panel-collapse collapse "
												id="keyskilldropdwn"
											>
												<li>
													{" "}
													<i className="fa-solid fa-play mr-2 mt-1"></i>
													<h4>Leadership involves leading and listening.</h4>
												</li>
												<li>
													<i className="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Leaders must develop problem-solving and
														decision-making skills.
													</h4>
												</li>
												<li>
													<i className="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Leaders must prioritize respect and inclusivity.
													</h4>
												</li>
												<li>
													<i className="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Leaders must exercise adaptability and resilience.
													</h4>
												</li>
											</ul> */}
										</div>
										<div className="ljourney">
											{selectedIndex < 5 && (
												<div className="ljourneysteps mt-4">
													<div className="ljourneyitems flex">
														<span
															className={`ljdimension ${selectedIndex >= 0 && "ljsocial"
																}`}
														>
															<span>1</span>
															<span className="tracks"></span>
														</span>
														<span
															className={`ljdimension ${selectedIndex >= 1 && "ljsocial"
																}`}
														>
															<span>2</span>
															<span className="tracks"></span>
														</span>
														<span
															className={`ljdimension ${selectedIndex >= 2 && "ljsocial"
																}`}
														>
															<span>3</span>
															<span className="tracks"></span>
														</span>
														<span
															className={`ljdimension ${selectedIndex >= 3 && "ljsocial"
																}`}
														>
															<span>4</span>
															<span className="tracks"></span>
														</span>
														<span
															className={`ljdimension ${selectedIndex >= 4 && "ljsocial"
																}`}
														>
															<span>5</span>
														</span>
													</div>
												</div>
											)}
											{
												<div className="ScenecerelateddQuiz Analysistxt pt-0">
													<p className="seneriotext position-relative">
														<span>
															<i className="fa-solid fa-quote-left"></i>
														</span>

														<em>
															{
																getIntelligenceResponse?.records[0]
																	?.instructions
															}
														</em>
														<i className="fa-solid fa-quote-right"></i>
														<p className="your_AudioIocn">
															<Vicky
																text={
																	getIntelligenceResponse?.records[0]
																		?.instructions
																}
															/>
														</p>
													</p>
													{selectedIndex === 5 && (
														<h4 className="SEheighlitedtitle flexone align-items-center">
															<img src={image.Powericon} className="mr-2" />
															Check out the highlighted text to discover what
															the selected option reveals about{" "}
															{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)}.
														</h4>
													)}
													{selectedIndex === 5 &&
														getIntelligenceResponse?.records?.map(
															(question, index) => (
																<div className="SkilEvalResult" key={index}>
																	<h4>
																		Question {index + 1}: {question?.question}
																	</h4>
																	{question?.options?.map(
																		(opt, key) =>
																			(opt?.attempted ||
																				opt?.isUserSelected) && (
																				<>
																					<p>
																						<p className="your_AudioIocn">
																							<Vicky
																								text={` ${`Question ${index + 1
																									}: ${question?.question}`}
                                                  ${`Here’s the option 
                                              ${getCapitalized(
																										defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName
																									)}  selected:`}
                                                  ${opt?.question} ${opt?.help
																									} `}
																							/>
																						</p>{" "}
																						<strong>
																							{getCapitalized(
																								defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName
																							)}{" "}
																							selected:{" "}
																						</strong>
																						{opt?.question}
																					</p>
																					<p className="flex align-items-start justify-content-start">
																						<img
																							src={image.Powericon}
																							className="mr-1"
																						/>
																						<em>{opt?.help}</em>
																					</p>
																				</>
																			)
																	)}
																</div>
															)
														)}
													{selectedIndex < 5 && (
														<div className="signupType m-0 mb-3">
															<h4 className="mb-3">
																<span className="m-0">
																	<img
																		src={image.SceneQuestionicon}
																		className=""
																		alt=""
																	/>
																</span>
																<strong className="">
																	{
																		getIntelligenceResponse?.records[
																			selectedIndex
																		]?.question
																	}
																	<span class="mandatoryField">*</span>
																</strong>

															</h4>
															{getIntelligenceResponse?.records[
																selectedIndex
															]?.options?.map((opt, index) => (
																<div
																	className="flexone mb-3"
																	key={Math.random()}
																>
																	<label className="Selcheckbox m-0 ActiveQQst">
																		<span className="QQtitle">
																			{opt?.question}
																		</span>
																		<input
																			type="radio"
																			name={"option" + selectedIndex}
																			id={"option" + selectedIndex}
																			defaultChecked={
																				opt?.attempted ? true : false
																			}
																			onClick={() => {
																				handleOption(
																					getIntelligenceResponse?.records[
																					selectedIndex
																					],
																					index
																				);
																			}}
																		/>
																		<span className="checkmark"></span>
																	</label>
																</div>
															))}
														</div>
													)}
												</div>
											}
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<div className="buttonDistribotion">
											{selectedIndex > 0 && selectedIndex < 5 && (
												<div className="buttonDistribotion justify-content-between">
													<button
														type="button"
														data-toggle="modal"
														data-target="#schoolactivity126"
														className="btn-blue btn-login d-block mb-5  m-0 back_button"
														onClick={() => handleNext(false)}
													>
														<i className="fa-solid fa-arrow-left mr-2"></i>Back
													</button>
												</div>
											)}

											{selectedIndex < 4 ? (
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5  m-0"
													onClick={() => handleNext(true)}
													disabled={
														!getIntelligenceResponse?.records[selectedIndex]
															?.attempted
													}
												>
													Next <i className="fa-solid fa-arrow-right ml-2" />
												</button>
											) : selectedIndex === 4 ? (
												<>
													{!loader ? (
														<button
															type="button"
															className="btn-blue btn-login d-block mb-5  m-0"
															onClick={() => handleSubmit()}
															disabled={
																!getIntelligenceResponse?.records[selectedIndex]
																	?.attempted
															}
														>
															<i className="fa-solid fa-paper-plane mr-2"></i>
															Submit
														</button>
													) : (
														<div className="buttonDistribotion justify-content-end">
															<button
																className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
																disabled
															>
																<span className="RounAnimation mr-1"></span>{" "}
																Please Wait...
															</button>
														</div>
													)}
												</>
											) : (
												<>
													<button
														type="button"
														className="btn-blue btn-login d-block mb-5 cancelbutton"
														onClick={() => closePopup()}
													>
														<i className="fa-solid fa-xmark"></i>Close
													</button>
												</>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="halfPagePOpup SchoolActivityPopup parentQuizsanalysis ljpopups">
					<div className="modal d-block" id="schoolactivity121" role="dialog">
						<div className="modal-dialog modal-lg">
							<div className="modal-content courseInformation">
								<div className="modal-header">
									<div className="heading border-0 p-0">
										<h2 className="flex">
											<span>
												<img src={image.skills_img} className="mr-2" /> See new
												life skills{" "}
												{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} has
												learned in this course
											</span>
											<button
												className="btn btn-primary"
												data-dismiss="modal"
												onClick={() => closePopup()}
											>
												<i className="fa-regular fa-xmark m-0"></i>
											</button>
										</h2>
									</div>
								</div>
								<div className="modal-body evalscreenfst">
									<div className="subscriptioncardwrap feeAnalysispopup skillEvaluatoin p-0">
										<h3 className="mb-2 mt-3 ml-3 pt-0">
											Here’s a tool to help you assess key concepts{" "}
											{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstNamedefaultChildData?.firstName)} learned in
											the course {data?.name}.
										</h3>
										<div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3 position-relative">
											<h4 className="keyconcepttitle">
												<strong>
													Key concepts{" "}
													{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} learned:
												</strong>
											</h4>

											<div className="position-relative">
												<p className="your_AudioIocn">
													<Vicky
														text={
															getIntelligenceResponse?.records &&
															getIntelligenceResponse?.records[0]?.learning
														}
													/>
												</p>
												<div
													dangerouslySetInnerHTML={{
														__html:
															getIntelligenceResponse?.records &&
																getIntelligenceResponse?.records[0]?.learning
																? getIntelligenceResponse?.records[0]?.learning
																: "",
													}}
													className="keyconceptListing"
												></div>
											</div>
										</div>
										<div className="ljourney">
											<h4 className=" mb-4 pt-3 ml-3">
												Use this scenario to get the conversation with{" "}
												{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} started.
											</h4>
											<div className="ScenecerelateddQuiz Analysistxt pt-0 pb-0">
												<p className="seneriotext position-relative">
													<p className="your_AudioIocn">
														<Vicky
															text={
																getIntelligenceResponse?.records &&
																getIntelligenceResponse?.records[0]
																	?.instructions
															}
														/>
													</p>
													<i className="fa-solid fa-quote-left"></i>
													<em>
														{getIntelligenceResponse?.records &&
															getIntelligenceResponse?.records[0]?.instructions}
													</em>{" "}
													<i className="fa-solid fa-quote-right"></i>
												</p>
												<p className="mt-4 pt-3">
													{" "}
													Based on the scenario above you will ask{" "}
													{getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} a few
													questions. Click ‘Next’ to begin.{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<div className="form-group BDsubmitbutton d-flex m-0">
										<div className="buttonDistribotion">
											<div className="buttonDistribotion">
												<button
													type="button"
													className="btn-blue btn-login d-block mb-5  m-0"
													onClick={() => setIsNext(true)}
												>
													Next <i className="fa-solid fa-arrow-right ml-2"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};
export default ParenLevelHalfScreen;

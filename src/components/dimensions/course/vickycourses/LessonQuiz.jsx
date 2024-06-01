import React, { useState, useEffect } from "react";
import { ShimmerCategoryList, useForm } from "../../../../utils/Packages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getSeriesQuiz,
	learnerAttemptQuiz,
} from "../../../../redux/actions/APIs";
import { getLastQuiz } from "../../../../redux/actions";
import { getSequnceSort } from "../../../../utils/helper";

const LessonQuiz = ({
	handleCongratulationPopup,
	quizStep,
	handleQuizStep,
	handleProviderQuizData,
}) => {
	const params = useParams();
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm();

	const { seriesData, lastQuizKey, learnerAtttemptedResponse, loggedInUser } =
		useSelector((state) => state.collections);
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isQuizAttempted, setIsQuizAttempted] = useState(false);

	useEffect(() => {
		dispatch(getSeriesQuiz());
		dispatch(learnerAttemptQuiz());
		setCurrentQuestion(14);
		setQuestions([]);
		reset();
		setIsQuizAttempted(seriesData?.records[0]?.isCompleted);
	}, []);

	useEffect(() => {
		setCurrentQuestion(quizStep);
	}, [quizStep]);
	useEffect(() => {
		if (lastQuizKey === 1) {
			setCurrentQuestion(0);
		}
	}, [lastQuizKey]);

	useEffect(() => {
		if (learnerAtttemptedResponse) {
			setLoading(false);
			handleCongratulationPopup(true, !isQuizAttempted);
			dispatch(learnerAttemptQuiz());
		}
	}, [learnerAtttemptedResponse]);

	useEffect(() => {
		if (lastQuizKey) {
			setCurrentQuestion(0);
		}
	}, [lastQuizKey]);
	const [questionId, setQuestionId] = useState("");

	useEffect(() => {
		dispatch(getSeriesQuiz(params.id, params.activityId));
	}, [params]);

	useEffect(() => {
		if (seriesData) {
			window.scrollTo(0, 0);
			seriesData?.records[0]?.quiz.map((vl) => {
				if (vl.attempted) {
					vl.isUserSelected = true;
				} else {
					vl.isUserSelected = false;
				}
			});
			setQuestions(getSequnceSort(seriesData?.records[0]?.quiz));
			setQuestionId(seriesData?.records[0]?.surveyId);
		}
	}, [seriesData]);

	const handleNext = (isNext) => {
		window.scrollTo(0, 0);
		dispatch(getLastQuiz(undefined));
		if (isNext && currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			handleQuizStep(currentQuestion + 1);
		} else if (!isNext && currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
			handleQuizStep(currentQuestion - 1);
		}
	};

	const onValueChange = (
		event,
		name,
		currentQuestion,
		optIndex,
		option,
		inputType
	) => {
		setValue(name, event.target.value);
		//  questions[currentQuestion].attempted = true;
		questions[currentQuestion].isUserSelected = true;
		if (inputType === "checkbox") {
			let question = questions[currentQuestion];
			question["options"][optIndex].isUserSelected =
				!question["options"][optIndex].isUserSelected;
			questions[currentQuestion] = question;
		} else {
			let data = [...questions];

			data[currentQuestion].options[optIndex].isUserSelected =
				event.target.checked;

			data[currentQuestion].options.forEach((option, index) => {
				if (index !== optIndex) {
					option.isUserSelected = false;
				}
			});
			setQuestions(data);
		}
	};

	let checkboxIds = [];
	for (let i = 0; i < seriesData?.records[0]?.quiz?.length; i++) {
		for (let j = 0; j < seriesData?.records[0]?.quiz[i].options.length; j++) {
			let opt = seriesData?.records[0]?.quiz[i].options;
			if (opt[j]?.isUserSelected) {
				checkboxIds.push(opt[j]?.id);
			}
		}
	}

	useEffect(() => {
		dispatch(getSeriesQuiz());
		dispatch(learnerAttemptQuiz());
		setQuestions([]);
		reset();
		setValue();
	}, [params.id]);

	const _onSubmit = (values) => {
		if (loggedInUser?.role?.name !== "PROVIDER") {
			let checkboxIds = [];
			for (let i = 0; i < seriesData?.records[0]?.quiz?.length; i++) {
				for (
					let j = 0;
					j < seriesData?.records[0]?.quiz[i].options.length;
					j++
				) {
					let opt = seriesData?.records[0]?.quiz[i].options;
					if (opt[j]?.isUserSelected) {
						checkboxIds.push(opt[j]?.id);
					}
				}
			}
			let formData = {
				optionIds: checkboxIds.join(","),
			};
			if (checkboxIds.length !== undefined) {
				setLoading(true);

				dispatch(
					learnerAttemptQuiz(params.id, questionId, formData, params.activityId)
				);
			}
		} else {
			handleProviderQuizData(questions);
		}
	};

	const allSelected = questions.every((question) => question.isUserSelected);

	return (
		<React.Fragment key={params.id}>
			<form onSubmit={handleSubmit(_onSubmit)} className="lesson_Quiz">
				<div className="QuizContent">
					<h4 className="mb-3 fst-italic">
						<i className="fa-light fa-circle-info mr-2"></i>Please make sure to
						answer all the questions in the quiz to receive an evaluation
					</h4>

					{questions.length > 0 ? (
						<div className="ScenecerelateddQuiz">
							<div key={currentQuestion}>
								<div
									className={`signupType m-0 mb-3 ${questions[currentQuestion]?.type === "RADIOQ"
											? ""
											: "checkboxtypeques"
										}`}
								>
									<h4 className="mb-3" key={currentQuestion}>
										<span className="m-0">
											<i className="fa-light fa-clipboard-question"></i>
										</span>{" "}
										<span
											className="imgrelatedquestion"
											dangerouslySetInnerHTML={{
												__html: questions[currentQuestion]?.question,
											}}
										/>
									</h4>

									{questions[currentQuestion]?.options.map(
										(option, optionIndex) => {
											const inputType =
												questions[currentQuestion].type === "RADIOQ"
													? "radio"
													: "checkbox";
											return (
												<label
													className={`Selcheckbox ${questions[currentQuestion].attempted &&
															option.isUserSelected &&
															!option.isCorrect
															? "Qwrongopton"
															: ""
														} ${questions[currentQuestion].attempted &&
															option.isUserSelected &&
															option.isCorrect
															? "Qrightopyion"
															: ""
														}  ${questions[currentQuestion].attempted &&
															option.isCorrect
															? "Qrightopyion"
															: ""
														} ${questions[currentQuestion]?.attempted
															? "pe-none"
															: ""
														}`}
													key={optionIndex + params.id}
												>
													{option?.question.substring(13, 18) == "https" ||
														option?.question.substring(13, 17) == "http" ? (
														<span
															className="QQtitle"
															dangerouslySetInnerHTML={{
																__html: option.question,
															}}
														/>
													) : (
														<span
															className="QQtitle"
															dangerouslySetInnerHTML={{
																__html: option.question,
															}}
														/>
													)}
													{questions[currentQuestion]?.attempted &&
														option?.isUserSelected ? (
														<input
															type={inputType}
															id="Public"
															disabled={option.isUserSelected}
															checked={
																option.isUserSelected === option.isCorrect
															}
														></input>
													) : questions[currentQuestion]?.attempted &&
														!option?.isUserSelected ? (
														<input
															type={inputType}
															id="Public"
															disabled="true"
															checked={
																!option?.isUserSelected && option?.isCorrect
															}
														></input>
													) : (
														<input
															type={inputType}
															{...register(
																`questions.${currentQuestion}.question`
															)}
															defaultChecked={""}
															value={option.id}
															onChange={(e) =>
																onValueChange(
																	e,
																	option.id,
																	currentQuestion,
																	optionIndex,
																	option,
																	inputType
																)
															}
														/>
													)}
													{!questions[currentQuestion]?.attempted ? (
														<span className="checkmark"></span>
													) : (
														<span className="checkmark"></span>
													)}
													{questions[currentQuestion]?.attempted &&
														!option?.isUserSelected &&
														option?.isCorrect && (
															<span className="checkmark "></span>
														)}

													{questions[currentQuestion]?.attempted &&
														option?.isUserSelected &&
														(option?.isUserSelected === option?.isCorrect ? (
															<>
																{" "}
																<span className="checkmark "></span>
															</>
														) : (
															<span className="WrongQuizAns">
																<i className="fa-solid fa-xmark m-0"></i>
															</span>
														))}
													{/* {"T" + option.isCorrect} */}
												</label>
											);
										}
									)}
								</div>
							</div>
						</div>
					) : (
						<ShimmerCategoryList items={2} />
					)}
				</div>

				<div className="input-group full-Width-group basic_details_form pagebuttonStrip">
					<div className="form-group BDsubmitbutton d-flex m-0">
						{currentQuestion > 0 && (
							<button
								disabled={currentQuestion === 0}
								type="button"
								className="btn-blue btn-login d-block mb-5 back_button"
								onClick={() => handleNext(false)}
							>
								<i className="fa-solid fa-arrow-left mr-2"></i> Back
							</button>
						)}

						{currentQuestion === questions?.length - 1 ? (
							!questions?.every((data) => data.attempted == true) && (
								<div className="buttonDistribotion">
									{loading ? (
										<button
											type="button"
											className="btn-blue btn-login d-block mb-5 changepasswordbtn"
											key={Math.random()}
											disabled
										>
											<span className="RounAnimation mr-1"></span>
											Please Wait...
										</button>
									) : (
										<button
											type="submit"
											className="btn-blue btn-login d-block mb-5"
											disabled={!allSelected ? true : false}
										>
											<i className="fa-solid fa-paper-plane mr-2"></i> Submit
										</button>
									)}
								</div>
							)
						) : (
							<div className="buttonDistribotion">
								<button
									type="button"
									key={Math.random()}
									className="btn-blue btn-login d-block mb-5"
									onClick={() => handleNext(true)}
								>
									Next <i className="fa-solid fa-arrow-right ml-2 m-0"></i>
								</button>
							</div>
						)}

						{questions?.every((data) => data.attempted) &&
							currentQuestion === questions?.length - 1 && (
								<div className="buttonDistribotion">
									<button
										type="button"
										onClick={() => handleCongratulationPopup(true)}
										className="btn-blue btn-login d-block mb-5"
									>
										Continue <i className="fa-solid fa-arrow-right ml-2" />
									</button>
								</div>
							)}
					</div>
				</div>
			</form>
		</React.Fragment>
	);
};

export default LessonQuiz;

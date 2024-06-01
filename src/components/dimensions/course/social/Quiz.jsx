import React, { useState, useEffect } from "react";
import { Controller, useForm, swal } from "../../../../utils/Packages";

const questions = [
  {
    question: "1. What did Mrs. Jones do?",
    type: "radio",
    options: [
      {
        id: "e2cdd4e4-df4b-417d-b81b-0190699be328",
        name: "1.She tokenized Shauna",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 5.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "8cb14d88-77b1-4123-9693-df7727e49192",
        name: "She tokenized the class",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 3.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
    ],
  },
  {
    question: "2. What did Mrs. Jones do?",
    type: "radio",
    options: [
      {
        id: "e2cdd4e4-df4b-417d-b81b-0190699be328",
        name: "She tokenized Shauna",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 5.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "8cb14d88-77b1-4123-9693-df7727e49192",
        name: "She tokenized the class",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 3.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
    ],
  },
  {
    question: "3. What did Mrs. Jones do?",
    type: "checkbox",
    options: [
      {
        id: "e2cdd4e4-df4b-417d-b81b-0190699be328",
        name: "She tokenized Shauna",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 5.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "8cb14d88-77b1-4123-9693-df7727e49192",
        name: "She tokenized the class",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 3.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
    ],
  },
  {
    question: "4. What did Mrs. Jones do?",
    type: "checkbox",
    options: [
      {
        id: "e2cdd4e4-df4b-417d-b81b-0190699be328",
        name: "She tokenized Shauna",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 5.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "8cb14d88-77b1-4123-9693-df7727e49192",
        name: "She tokenized the class",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 3.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
      {
        id: "c91a8e8a-6a25-40be-9db8-d6750e36d8d8",
        name: "She was helping Shauna share her experiences as a biracial student",
        help: null,
        isCorrect: false,
        attempted: false,
        sequence: 1,
        points: 11.0,
        answer: null,
        isUserSelected: false,
      },
    ],
  },
];
const Quiz = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    unregister,
    getValues,
    formState: { errors },
  } = useForm();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = (isNext) => {
    window.scrollTo(0, 0);
    if (isNext && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (!isNext && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const onValueChange = (event, name) => {
    setValue(name, event.target.value);
  };

  const _onSubmit = (formData) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(_onSubmit)}>
        <div className="QuizContent">
          <div className="ScenecerelateddQuiz">
            <div key={currentQuestion}>
              <div className="signupType m-0 mb-3">
                <h4 className="mb-3">
                  <span className="m-0">
                    <i className="fa-light fa-clipboard-question"></i>
                  </span>{" "}
                  {questions[currentQuestion].question}
                </h4>
                {questions[currentQuestion].options.map(
                  (option, optionIndex) => {
                    const inputType =
                      questions[currentQuestion].type === "radio"
                        ? "radio"
                        : "checkbox";
                    return (
                      <label className="Selcheckbox" key={optionIndex}>
                        <span className="QQtitle">{option.name}</span>
                        <input
                          type={inputType}
                          {...register(
                            `questions.${currentQuestion}.question`,
                            {
                              required: {
                                value: optionIndex === 0,
                                message: "Option is required",
                              },
                            }
                          )}
                          value={option.name}
                          onChange={(e) => onValueChange(e, option.name)}
                        />
                        <span className="checkmark"></span>
                      </label>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="input-group full-Width-group basic_details_form pagebuttonStrip">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <button
              disabled={currentQuestion === 0}
              type="button"
              className="btn-blue btn-login d-block mb-5 back_button"
              onClick={() => handleNext(false)}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i> Back
            </button>

            <div className="buttonDistribotion">
              <button
                type={
                  currentQuestion === questions.length - 1 ? "submit" : "button"
                }
                className="btn-blue btn-login d-block mb-5"
                onClick={() => {
                  currentQuestion <= questions.length - 1
                    ? handleNext(true)
                    : handleSubmit(_onSubmit);
                }}
              >
                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
                {currentQuestion === questions.length - 1 && (
                  <i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Quiz;

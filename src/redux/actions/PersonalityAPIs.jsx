/** @format */

//import axios from "axios";

import {
	PERSONALITYLIST,
	PERSONALITYQUIZ,
	SELECTEDPERSONALITYQUIZDATA,
	BEGUNQUIZ,
	//RESULTPERSONALITYTYPE
} from "./PersonalityTypes";
import { API_PATHS } from "../../utils";
import { getAxios, getDimShuffle } from "../../utils/helper";
import { responseFailure } from ".";
import { getAllUsersDetail } from "../../redux/actions/APIs";

export const begunQuiz = (flag) => async (dispatch) => {
	try {
		dispatch({ type: BEGUNQUIZ, payload: flag });
	} catch (error) {
		dispatch(responseFailure(error));
	}
};

export const personalitiesResponseData =
	(learnerId, isProvider, personalityName) => async (dispatch) => {
		try {
			if (learnerId) {
				const instance = getAxios();
				const { data } = await instance.get(
					API_PATHS.PERSONALITY_TYPES +
					learnerId +
					"/" +
					isProvider +
					"/" +
					personalityName
				);
				dispatch({ type: PERSONALITYLIST, payload: data });
			} else {
				dispatch({ type: PERSONALITYLIST, payload: undefined });
			}
		} catch (error) {
			dispatch(responseFailure(error));
		}
	};

export const personalityQuizResponse =
	(learnerId, surveyName) => async (dispatch) => {
		//const surveyName = 'Personality Type Quiz';
		try {
			if (learnerId && surveyName) {
				const instance = getAxios();
				const { data } = await instance.get(
					API_PATHS.PERSONALITY_QUIZ + learnerId + "/" + surveyName
				);
				let shuffleData = getDimShuffle(data.records);
				dispatch({ type: PERSONALITYQUIZ, payload: shuffleData });
			} else {
				dispatch({ type: PERSONALITYQUIZ, payload: undefined });
			}
		} catch (error) {
			dispatch(responseFailure(error));
		}
	};

export const personalityQuizDataPostAPI =
	(learnerId, isProvider, quizData) => async (dispatch) => {
		try {
			if (quizData && learnerId) {
				const instance = getAxios();
				const { data } = await instance.post(
					API_PATHS.PERSONALITY_SURVEY + learnerId + "/" + isProvider,
					quizData
				);
				dispatch({ type: SELECTEDPERSONALITYQUIZDATA, payload: data });
				dispatch(
					personalitiesResponseData(
						learnerId,
						isProvider,
						data?.records[0].name
					)
				);
				dispatch(getAllUsersDetail());
			} else {
				dispatch({ type: SELECTEDPERSONALITYQUIZDATA, payload: undefined });
			}
		} catch (error) {
			dispatch(responseFailure(error));
		}
	};

export const ptquizData = () => async (dispatch) => {
	dispatch({ type: PERSONALITYQUIZ, payload: undefined });
};

export const postData = () => async (dispatch) => {
	dispatch({ type: SELECTEDPERSONALITYQUIZDATA, payload: undefined });
};

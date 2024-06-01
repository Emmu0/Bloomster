/** @format */

import { FEEDBACKS, PILOTUSER, HELPINFO, INVITEFRIEND } from "./FeedbackTypes";
import { API_PATHS } from "../../utils";
import { getAxios, getUnauthedAxios } from "../../utils/helper";
import { responseFailure } from ".";

export const feedbackDataPostAPI = (feedbackData) => async (dispatch) => {
	try {
		if (feedbackData) {
			const instance = getAxios();
			const { data } = await instance.post(API_PATHS.FEEDBACK, feedbackData);
			dispatch({ type: FEEDBACKS, payload: data });
		} else {
			dispatch({ type: FEEDBACKS, payload: undefined });
		}
	} catch (error) {
		dispatch(responseFailure(error));
	}
};

export const pilotUserDataPostAPI = (pilotUserData) => async (dispatch) => {
	try {
		if (pilotUserData) {
			const instance = getUnauthedAxios();
			const { data } = await instance.post(API_PATHS.PILOT_USER, pilotUserData);
			dispatch({ type: PILOTUSER, payload: data });
		} else {
			dispatch({ type: PILOTUSER, payload: undefined });
		}
	} catch (error) {
		dispatch(responseFailure(error));
	}
};

export const inviteFriendDataPostAPI = (pilotUserData) => async (dispatch) => {
	try {
		if (pilotUserData) {
			const instance = getAxios();
			const { data } = await instance.post(
				API_PATHS.Invite_Friend,
				pilotUserData
			);
			dispatch({ type: INVITEFRIEND, payload: data });
		} else {
			dispatch({ type: INVITEFRIEND, payload: undefined });
		}
	} catch (error) {
		dispatch(responseFailure(error));
	}
};

export const inviteParentDataPostAPI = (body) => async (dispatch) => {
	try {
		if (body) {
			const instance = getAxios();
			const { data } = await instance.post(
				API_PATHS.Invite_Parent,
				body
			);
			dispatch({ type: INVITEFRIEND, payload: data });
		} else {
			dispatch({ type: INVITEFRIEND, payload: undefined });
		}
	} catch (error) {
		dispatch(responseFailure(error));
	}
};

export const helpFormData = (helpUserFormData) => async (dispatch) => {
	try {
		const instance = getAxios();
		const { data } = await instance.post(API_PATHS.HELP_INFO, helpUserFormData);
		dispatch({ type: HELPINFO, payload: data });
	} catch (error) {
		dispatch(responseFailure(error));
	}
};

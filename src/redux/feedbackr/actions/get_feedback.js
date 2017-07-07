import ActionTypes from './actionTypes.js';
import database from '../database';

export function getFeedback() {
	console.log("getFeedback");
  return dispatch => {
    dispatch(getFeedbackRequestedAction());
    return database.ref('/').once('value', snap => {
      const data = snap.val();
			console.log("data:", data);
      dispatch(getFeedbackFulfilledAction(data))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getFeedbackRejectedAction());
    });
  }
}


function getFeedbackRequestedAction() {
  return {
    type: ActionTypes.GET_FEEDBACK_REQUESTED
  };
}

function getFeedbackRejectedAction() {
  return {
    type: ActionTypes.GET_FEEDBACK_REJECTED
  }
}

function getFeedbackFulfilledAction(data) {
	console.log("getFeedbackFulfilledAction");
  return {
    type: ActionTypes.GET_FEEDBACK_FULFILLED,
    data
  };
}

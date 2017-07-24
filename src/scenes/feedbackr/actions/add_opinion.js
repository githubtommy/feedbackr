import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_OPINION.js");

// firebase.database.ServerValue.TIMESTAMP

export function addOpinion(opinionValue, topicName) {
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addOpinionRequestedAction());
    const opinionsRef = database.ref('/opinions');
		const opinion = {
			name: opinionValue,
			topic: topicName,
			date: date,
			type: "suggestion",
			user: "1CYPHxqH3kWHrbfvaKYcFmLf5LF3"}
    opinionsRef.push(opinion)
    .then(() => {
      dispatch(addOpinionFulfilledAction(opinion));
    })
    .catch((error) => {
      dispatch(addOpinionRejectedAction());
    });
  }
}


function addOpinionRequestedAction() {
  return {
    type: ActionTypes.ADD_OPINION_REQUESTED
  };
}

function addOpinionRejectedAction() {
  return {
    type: ActionTypes.ADD_OPINION_REJECTED
  }
}

function addOpinionFulfilledAction(fact) {
  return {
    type: ActionTypes.ADD_OPINION_FULFILLED,
    fact
  };
}

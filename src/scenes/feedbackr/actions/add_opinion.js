import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_OPINION.js");

// firebase.database.ServerValue.TIMESTAMP

export function addOpinion(opinionValue, topicName) {
	console.log("addOpinion: opinionValue, topicName:", opinionValue, topicName);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
  return dispatch => {
		console.log("dispatching addOpionionRequestedAction");
    dispatch(addOpinionRequestedAction());
    const opinionsRef = database.ref('/opinions');
		const opinion = {
			body: opinionValue,
			topic: topicName,
			date: date,
			type: "suggestion",
			user: "1CYPHxqH3kWHrbfvaKYcFmLf5LF3"}
    opinionsRef.push(opinion)
    .then(() => {
			console.log("dispatching addOpinionFulfilledAction");
      dispatch(addOpinionFulfilledAction(opinion));
    })
    .catch((error) => {
      dispatch(addOpinionRejectedAction());
    });
  }
}


function addOpinionRequestedAction() {
	console.log("addOpinionRequestedAction");
  return {
    type: ActionTypes.ADD_OPINION_REQUESTED
  };
}

function addOpinionRejectedAction() {
	console.log("addOpinionRejectedAction");
  return {
    type: ActionTypes.ADD_OPINION_REJECTED
  }
}

function addOpinionFulfilledAction(fact) {
	console.log("addOpinionFulfilledAction");
  return {
    type: ActionTypes.ADD_OPINION_FULFILLED,
    fact
  };
}

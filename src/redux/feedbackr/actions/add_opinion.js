import ActionTypes from './actionTypes';
import database from '../database';
import firebase from 'firebase'

console.log("LOADED: add_OPINION.js");

// firebase.database.ServerValue.TIMESTAMP

export function addOpinion(content) {
	console.log("addOpinion: ", content);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addOpinionRequestedAction());
    const factsRef = database.ref('/facts');
    factsRef.push({
      content,
			date
    })
    .then(() => {
      dispatch(addOpinionFulfilledAction({ content }));
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

import ActionTypes from './action_types';
import database from './database';
import firebase from 'firebase'

console.log("LOADED: add_fact.js");

// firebase.database.ServerValue.TIMESTAMP

export function addFact(content) {
	console.log("addFact: ", content);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addFactRequestedAction());
    const factsRef = database.ref('/facts');
    factsRef.push({
      content,
			date
    })
    .then(() => {
      dispatch(addFactFulfilledAction({ content }));
    })
    .catch((error) => {
      dispatch(addFactRejectedAction());
    });
  }
}


function addFactRequestedAction() {
  return {
    type: ActionTypes.ADD_FACT_REQUESTED
  };
}

function addFactRejectedAction() {
  return {
    type: ActionTypes.ADD_FACT_REJECTED
  }
}

function addFactFulfilledAction(fact) {
  return {
    type: ActionTypes.ADD_FACT_FULFILLED,
    fact
  };
}

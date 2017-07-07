import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_USER.js");

// firebase.database.ServerValue.TIMESTAMP

export function addUser(content) {
	console.log("addUser: ", content);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addUserRequestedAction());
    const factsRef = database.ref('/facts');
    factsRef.push({
      content,
			date
    })
    .then(() => {
      dispatch(addUserFulfilledAction({ content }));
    })
    .catch((error) => {
      dispatch(addUserRejectedAction());
    });
  }
}


function addUserRequestedAction() {
  return {
    type: ActionTypes.ADD_USER_REQUESTED
  };
}

function addUserRejectedAction() {
  return {
    type: ActionTypes.ADD_USER_REJECTED
  }
}

function addUserFulfilledAction(fact) {
  return {
    type: ActionTypes.ADD_USER_FULFILLED,
    fact
  };
}

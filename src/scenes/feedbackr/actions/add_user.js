import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_USER.js");

// firebase.database.ServerValue.TIMESTAMP

export function addUser(nameFirst, nameLast, location) {
	console.log("addUser: ", user);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	let user = {
		name_first: nameFirst,
		name_last: nameLast,
		location: location,
		date: date,
		opinions_count: 0
	}
  return dispatch => {
    dispatch(addUserRequestedAction());
    const usersRef = database.ref('/users');
    usersRef.push(user)
    .then(() => {
      dispatch(addUserFulfilledAction(user));
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

import ActionTypes from './actionTypes';
import database from '../database';

console.log("LOADED: get_domain.js");

export function getUser() {
	console.log("getUser");
  return dispatch => {
    dispatch(getUserRequestedAction());
    return database.ref('/').once('value', snap => {
      const fact = snap.val();
      dispatch(getUserFulfilledAction(fact))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getUserRejectedAction());
    });
  }
}


function getUserRequestedAction() {
  return {
    type: ActionTypes.GET_USESR_REQUESTED
  };
}

function getUserRejectedAction() {
  return {
    type: ActionTypes.GET_USESR_REJECTED
  }
}

function getUserFulfilledAction(fact) {
  return {
    type: ActionTypes.GET_USESR_FULFILLED,
    fact
  };
}

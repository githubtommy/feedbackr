import ActionTypes from './action_types';
import database from './database';

console.log("LOADED: get_fact.js");

export function getFact() {
	console.log("getFact");
  return dispatch => {
    dispatch(getFactRequestedAction());
    return database.ref('/').once('value', snap => {
      const fact = snap.val();
      dispatch(getFactFulfilledAction(fact))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getFactRejectedAction());
    });
  }
}


function getFactRequestedAction() {
  return {
    type: ActionTypes.GET_INVITE_REQUESTED
  };
}

function getFactRejectedAction() {
  return {
    type: ActionTypes.GET_INVITE_REJECTED
  }
}

function getFactFulfilledAction(fact) {
  return {
    type: ActionTypes.GET_INVITE_FULFILLED,
    fact
  };
}

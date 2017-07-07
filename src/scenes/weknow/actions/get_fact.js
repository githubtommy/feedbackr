import ActionTypes from './action_types';
import database from './database';

console.log("LOADED: get_fact.js");

export function getFact() {
	console.log("getFact");
  return dispatch => {
    dispatch(getFactRequestedAction());
    return database.ref('/').once('value', snap => {
      const data = snap.val();
			console.log("data:", data);
      dispatch(getFactFulfilledAction(data))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getFactRejectedAction());
    });
  }
}


function getFactRequestedAction() {
  return {
    type: ActionTypes.GET_FACT_REQUESTED
  };
}

function getFactRejectedAction() {
  return {
    type: ActionTypes.GET_FACT_REJECTED
  }
}

function getFactFulfilledAction(data) {
  return {
    type: ActionTypes.GET_FACT_FULFILLED,
    data
  };
}

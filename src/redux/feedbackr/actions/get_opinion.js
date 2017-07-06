import ActionTypes from './actionTypes';
import database from '../database';

console.log("LOADED: get_domain.js");

export function getOpinion() {
	console.log("getOpinion");
  return dispatch => {
    dispatch(getOpinionRequestedAction());
    return database.ref('/').once('value', snap => {
      const fact = snap.val();
      dispatch(getOpinionFulfilledAction(fact))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getOpinionRejectedAction());
    });
  }
}


function getOpinionRequestedAction() {
  return {
    type: ActionTypes.GET_OPINION_REQUESTED
  };
}

function getOpinionRejectedAction() {
  return {
    type: ActionTypes.GET_OPINION_REJECTED
  }
}

function getOpinionFulfilledAction(fact) {
  return {
    type: ActionTypes.GET_OPINION_FULFILLED,
    fact
  };
}

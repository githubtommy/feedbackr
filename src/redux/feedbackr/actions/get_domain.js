import ActionTypes from './actionTypes.js';
import database from '../database';

export function getDomain() {
	console.log("getDomain");
  return dispatch => {
    dispatch(getDomainRequestedAction());
    return database.ref('/domains').once('value', snap => {
      const domains = snap.val();
			console.log("domains:", domains);
      dispatch(getDomainFulfilledAction(domains))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getDomainRejectedAction());
    });
  }
}


function getDomainRequestedAction() {
  return {
    type: ActionTypes.GET_DOMAIN_REQUESTED
  };
}

function getDomainRejectedAction() {
  return {
    type: ActionTypes.GET_DOMAIN_REJECTED
  }
}

function getDomainFulfilledAction(domains) {
  return {
    type: ActionTypes.GET_DOMAIN_FULFILLED,
    domains
  };
}

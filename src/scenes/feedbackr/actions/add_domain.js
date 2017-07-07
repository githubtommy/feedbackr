import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_domain.js");

// firebase.database.ServerValue.TIMESTAMP

export function addDomain(content) {
	console.log("addDomain: ", content);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addDomainRequestedAction());
    const factsRef = database.ref('/facts');
    factsRef.push({
      content,
			date
    })
    .then(() => {
      dispatch(addDomainFulfilledAction({ content }));
    })
    .catch((error) => {
      dispatch(addDomainRejectedAction());
    });
  }
}


function addDomainRequestedAction() {
  return {
    type: ActionTypes.ADD_DOMAIN_REQUESTED
  };
}

function addDomainRejectedAction() {
  return {
    type: ActionTypes.ADD_DOMAIN_REJECTED
  }
}

function addDomainFulfilledAction(fact) {
  return {
    type: ActionTypes.ADD_DOMAIN_FULFILLED,
    fact
  };
}

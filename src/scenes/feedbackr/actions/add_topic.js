import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_TOPIC.js");

// firebase.database.ServerValue.TIMESTAMP

export function addTopic(content) {
	console.log("addTopic: ", content);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addTopicRequestedAction());
    const factsRef = database.ref('/facts');
    factsRef.push({
      content,
			date
    })
    .then(() => {
      dispatch(addTopicFulfilledAction({ content }));
    })
    .catch((error) => {
      dispatch(addTopicRejectedAction());
    });
  }
}


function addTopicRequestedAction() {
  return {
    type: ActionTypes.ADD_TOPIC_REQUESTED
  };
}

function addTopicRejectedAction() {
  return {
    type: ActionTypes.ADD_TOPIC_REJECTED
  }
}

function addTopicFulfilledAction(fact) {
  return {
    type: ActionTypes.ADD_TOPIC_FULFILLED,
    fact
  };
}

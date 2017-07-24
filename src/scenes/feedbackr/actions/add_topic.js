import ActionTypes from './actionTypes';
import database from '../data/database';
import firebase from 'firebase'

console.log("LOADED: add_TOPIC.js");

// firebase.database.ServerValue.TIMESTAMP

export function addTopic(topicValue, domainName) {
	console.log("addTopic: ")
	console.log("topicValue:", topicValue);
	console.log("domainName:", domainName);
	let date = firebase.database.ServerValue.TIMESTAMP;
	date = new Date();
	console.log("date:", date);
  return dispatch => {
    dispatch(addTopicRequestedAction());
    const topicsRef = database.ref('/topics');
		const topic = {name: topicValue, domain: domainName}
		console.log("topic:", topic);
    topicsRef.push(topic)
    .then(() => {
      dispatch(addTopicFulfilledAction({ topicValue, domainName }));
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

function addTopicFulfilledAction(topic) {
  return {
    type: ActionTypes.ADD_TOPIC_FULFILLED,
    topic
  };
}

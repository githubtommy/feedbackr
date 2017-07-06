import ActionTypes from './actionTypes.js';
import database from '../database';

export function getTopic() {
	console.log("getTopic");
  return dispatch => {
    dispatch(getTopicRequestedAction());
    return database.ref('/topics').once('value', snap => {
      const topics = snap.val();
			console.log("topics:", topics);
      dispatch(getTopicFulfilledAction(topics))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getTopicRejectedAction());
    });
  }
}


function getTopicRequestedAction() {
  return {
    type: ActionTypes.GET_DOMAIN_REQUESTED
  };
}

function getTopicRejectedAction() {
  return {
    type: ActionTypes.GET_DOMAIN_REJECTED
  }
}

function getTopicFulfilledAction(topics) {
  return {
    type: ActionTypes.GET_DOMAIN_FULFILLED,
    topics
  };
}

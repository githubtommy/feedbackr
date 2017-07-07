import ActionTypes from './actionTypes';
import database from '../data/database';

console.log("LOADED: event_topic_added.js");

export function watchEventTopicAdded(dispatch) {
  database.ref('/feedbackr').on('child_added', (snap) => {
    dispatch(getTopicAddedAction(snap.val()));
  });
}

function getTopicAddedAction(name) {
  return {
    type: ActionTypes.TOPIC_ADDED,
    name
  };
}

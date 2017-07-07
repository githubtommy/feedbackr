import ActionTypes from './actionTypes';
import database from '../data/database';

console.log("LOADED: DOMAIN_added_event.js");

export function watchEventDomainAdded(dispatch) {
  database.ref('/feedbackr').on('child_added', (snap) => {
    dispatch(getDomainAddedAction(snap.val()));
  });
}

function getDomainAddedAction(name) {
  return {
    type: ActionTypes.DOMAIN_ADDED,
    name
  };
}

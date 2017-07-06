import ActionTypes from './actionTypes';
import database from '../database';

console.log("LOADED: fact_added_event.js");

export function watchFactAddedEvent(dispatch) {
  database.ref('/facts').on('child_added', (snap) => {
    dispatch(getFactAddedAction(snap.val()));
  });
}

function getFactAddedAction(fact) {
  return {
    type: ActionTypes.FACT_ADDED,
    fact
  };
}

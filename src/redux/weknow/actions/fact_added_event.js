import ActionTypes from './action_types';
import database from './database';

console.log("LOADED: fact_added_event.js");

export function watchFacedAddedEvent(dispatch) {
  database.ref('/facts').on('child_added', (snap) => {
    dispatch(getFACT_ADDEDAction(snap.val()));
  });
}

function getFACT_ADDEDAction(fact) {
  return {
    type: ActionTypes.FACT_ADDED,
    fact
  };
}

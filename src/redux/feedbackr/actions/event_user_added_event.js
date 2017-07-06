import ActionTypes from './actionTypes';
import database from '../database';

console.log("LOADED: user_added_event.js");

export function watchEventUserAdded(dispatch) {
  database.ref('/feedbackr').on('child_added', (snap) => {
    dispatch(getUserAddedAction(snap.val()));
  });
}

function getUserAddedAction(user) {
  return {
    type: ActionTypes.User_ADDED,
    user
  };
}

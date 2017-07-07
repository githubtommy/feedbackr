import ActionTypes from './actionTypes';
import database from '../data/database';

console.log("LOADED: event_opinion_added.js");

export function watchEventOpinionAdded(dispatch) {
  database.ref('/feedbackr').on('child_added', (snap) => {
    dispatch(getOpinionAddedAction(snap.val()));
  });
}

function getOpinionAddedAction(opinion) {
  return {
    type: ActionTypes.OPINION_ADDED,
    opinion
  };
}

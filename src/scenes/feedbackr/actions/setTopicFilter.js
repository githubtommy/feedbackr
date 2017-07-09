import ActionTypes from './actionTypes';


export const setTopicFilter = (topicId) => {
	console.log("setTopicFilter: ", topicId);
  return dispatch => {
    dispatch({
      type: ActionTypes.SET_TOPIC_FILTER,
			topicId: topicId
    })
	}
}

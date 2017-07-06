import ActionTypes from './actions/actionTypes';

export function topic(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GET_TOPIC_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GET_TOPIC_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting topic.',
      });
    }
    case ActionTypes.GET_TOPIC_FULFILLED: {
			console.log("GET_TOPIC_FULFILLED");
			console.log("action:", action);
      const { topics } = action.topics;
			console.log("topics:", topics);
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got topic.',
        topics
      });
      newState.topics = [];
      if (topics) {
        newState.topics = Object.keys(topics).map(k => topics[k]);
      }
      return newState;
    }
    case ActionTypes.ADD_TOPIC_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.ADD_TOPIC_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding topic.',
      });
    }
    case ActionTypes.ADD_TOPIC_FULFILLED: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added topic.'
      });
      // newState.topics = newState.topics || [];
      // newState.topics = newState.topics.slice();
      // newState.topics.push(action.topic);
      return newState;
    }
    case ActionTypes.TOPIC_ADDED: {
      const newState = Object.assign({}, state);
      newState.topics = newState.topics || [];
      newState.topics = newState.topics.slice();
      newState.topics.push(action.topic);
      return newState;
    }
    default:
      return state;
  }
}

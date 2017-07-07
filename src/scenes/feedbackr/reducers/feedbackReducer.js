import ActionTypes from '../actions/actionTypes';

export function feedbackObj(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GET_FEEDBACK_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GET_FEEDBACK_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting feedback',
      });
    }

    case ActionTypes.GET_FEEDBACK_FULFILLED: {
			console.log("--------------------------------------------------");
			console.log("GET_FEEDBACK_FULFILLED");
			console.log("action:", action);
			const data = action.data;
			console.log("data:", data);

      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got feedback'
      });

			if (data) {
				console.log("YES feedback");
        newState.domains = Object.keys(data.domains).map(k => data.domains[k]);
        newState.topics = Object.keys(data.topics).map(k => data.topics[k]);
        newState.users = Object.keys(data.users).map(k => data.users[k]);
        newState.opinions = Object.keys(data.opinions).map(k => data.opinions[k]);
      }


			console.log("newState:", newState);
      return newState;
    }

    case ActionTypes.ADD_FEEDBACK_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.ADD_FEEDBACK_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding feedback',
      });
    }
    case ActionTypes.ADD_FEEDBACK_FULFILLED: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added feedback'
      });
      return newState;
    }
    case ActionTypes.FEEDBACK_ADDED: {
      const newState = Object.assign({}, state);
      newState.feedback = newState.feedback || [];
      newState.feedback = newState.feedback.slice();
      newState.feedback.push(action.feedback);
      return newState;
    }
    default:
      return state;
  }
}

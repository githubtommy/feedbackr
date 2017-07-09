import ActionTypes from '../actions/actionTypes';

const initialState = {
	domainFilter: "Consumer Products",
	topicFilter: "ipad"
}


export function domainFilterObj (state = initialState, action) {
  switch(action.type) {

    case ActionTypes.SET_DOMAIN_FILTER: {
			console.log("--------------------------------------------------");
			console.log("SET_DOMAIN_FILTER");
			console.log("state:", state);
			console.log("action:", action);
			return {
				...state,
				domainFilter: action.domainId ? action.domainId : state.domainFilter
			}
    }

    default:
      return state;
  }
}


export function topicFilterObj (state = initialState, action) {
  switch(action.type) {

    case ActionTypes.SET_TOPIC_FILTER: {
			console.log("--------------------------------------------------");
			console.log("SET_TOPIC_FILTER");
			console.log("state:", state);
			console.log("action:", action);
			return {
				...state,
				domainFilter: action.topicId ? action.topicId : state.topicId
			}
    }

    default:
      return state;
  }
}

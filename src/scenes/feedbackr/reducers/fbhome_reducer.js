import ActionTypes from '../actions/actionTypes';

const initialState = {
	domainFilter: "TV Shows"
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

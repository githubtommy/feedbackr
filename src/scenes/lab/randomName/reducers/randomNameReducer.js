import actionTypes from '../actions/actionTypes.js'

export function randomNameObj(state = {}, action) {
	console.log("randomNameObj");
	console.log("action:", action);
	switch (action.type) {

    case actionTypes.GET_RANDOM_NAME:
			console.log("YES, in GET_RANDOM_NAME");
      return {
        ...state,
        name: action.name
      }

    default:
      return state
  }
}

import actionTypes from './actionTypes.js'

export function randomNameObj(state = {}, action) {
	console.log("randomNameObj");
	console.log("action:", action);
	switch (action.type) {

    case actionTypes.GET_USER:
			console.log("YES, in GET_USER");
      return {
        ...state,
        name: action.name
      }

    default:
      return state
  }
}

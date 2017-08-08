import actionTypes from '../actions/actionTypes.js'

export function randomNameObj(state = {}, action) {
	switch (action.type) {

    case actionTypes.GET_RANDOM_NAME:
      return {
        ...state,
        name: action.name
      }

    default:
      return state
  }
}

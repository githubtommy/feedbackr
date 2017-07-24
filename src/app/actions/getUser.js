import actionTypes from './actionTypes.js'

const initialState = {
  userObj: null
}

let userObj = null

// Action

export const setUser = (userObj) => {

}
export const getUser = () => {
	console.log("getUser");
  return dispatch => {
    dispatch({
      type: actionTypes.GET_RANDOM_NAME,
			name: getRandom()
    })
  }
}

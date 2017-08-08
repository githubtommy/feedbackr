const	SET_USER = 'SET_USER'
const	GET_USER = 'GET_USER'

//
// Setup
//

const initialState = {
  user: null
}

let user

//
// Actions
//

export const setUser = (userArg) => {
	console.log("setUser: ",  userArg);
	user = userArg
  return dispatch => {
    dispatch({
      type: SET_USER
    })
  }
}

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER
    })
  }
}

//
// Reducer
//

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state
      }

    case GET_USER:
      return {
        ...state,
        user: user
      }

		default:
      return state
  }
}

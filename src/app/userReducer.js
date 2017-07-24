export const USER_REQUESTED = 'USER_REQUESTED'
export const USER_DELIVERED = 'USER_DELIVERED'

const initialState = {
	user: null
}

const userObj (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        isRequesting: true
      }

    case USER_DELIVERED:
      return {
        ...state,
        user: getUser
        isRequesting: !state.isRequesting
      }

    default:
      return state
  }
}

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export default userObj

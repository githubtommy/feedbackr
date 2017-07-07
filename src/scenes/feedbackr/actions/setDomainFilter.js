import ActionTypes from './actionTypes';


export const setDomainFilter = (domainId) => {
	console.log("setDomainFilter: ", domainId);
  return dispatch => {
    dispatch({
      type: ActionTypes.SET_DOMAIN_FILTER,
			domainId: domainId
    })
	}
}

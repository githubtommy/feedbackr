import ActionTypes from './actions/actionTypes';

export function domain(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GET_DOMAIN_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GET_DOMAIN_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting domain.',
      });
    }
    case ActionTypes.GET_DOMAIN_FULFILLED: {
			console.log("GET_DOMAIN_FULFILLED");
			console.log("action:", action);
      const domains = action.domains;
			console.log("domains:", domains);
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got domain.',
        domains
      });
      newState.domains = [];
      if (domains) {
        newState.domains = Object.keys(domains).map(k => domains[k]);
      }
      return newState;
    }
    case ActionTypes.ADD_DOMAIN_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.ADD_DOMAIN_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding domain.',
      });
    }
    case ActionTypes.ADD_DOMAIN_FULFILLED: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added domain.'
      });
      // newState.domains = newState.domains || [];
      // newState.domains = newState.domains.slice();
      // newState.domains.push(action.domain);
      return newState;
    }
    case ActionTypes.DOMAIN_ADDED: {
      const newState = Object.assign({}, state);
      newState.domains = newState.domains || [];
      newState.domains = newState.domains.slice();
      newState.domains.push(action.domain);
      return newState;
    }
    default:
      return state;
  }
}

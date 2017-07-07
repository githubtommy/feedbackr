import ActionTypes from './actions/action_types';

export function factsObj(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GET_FACT_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GET_FACT_REJECTED: {
			console.log("GET_FACT_REJECTED");
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting fact.',
      });
    }

		// ----------------------------------------------------------------------------------------------------

		case ActionTypes.GET_FACT_FULFILLED: {
			console.log("--------------------------------------------------");
			console.log("GET_FACT_FULFILLED");
			console.log("action:", action);
      const { siteTitle, siteSubtitle, facts } = action.data;

      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got fact.',
        siteTitle,
        siteSubtitle
      });
      newState.facts = [];
      if (facts) {
        newState.facts = Object.keys(facts).map(k => facts[k]);
      }
      return newState;
    }

		// ----------------------------------------------------------------------------------------------------

    case ActionTypes.ADD_FACT_REQUESTED: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.ADD_FACT_REJECTED: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding fact.',
      });
    }
    case ActionTypes.ADD_FACT_FULFILLED: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added fact.'
      });
      // newState.facts = newState.facts || [];
      // newState.facts = newState.facts.slice();
      // newState.facts.push(action.fact);
      return newState;
    }
    case ActionTypes.FACT_ADDED: {
      const newState = Object.assign({}, state);
      newState.facts = newState.facts || [];
      newState.facts = newState.facts.slice();
      newState.facts.push(action.fact);
      return newState;
    }
    default:
      return state;
  }
}

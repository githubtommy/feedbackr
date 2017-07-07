import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../scenes/counter/counterReducer'
import randomName from '../scenes/lab/randomName/randomNameReducer.js'
import { factsObj } from '../scenes/weknow/reducers/weKnowReducer.js';
import { feedbackObj } from '../scenes/feedbackr/reducers/feedbackReducer.js';
import { domainFilterObj } from '../scenes/feedbackr/reducers/fbhome_reducer.js';
export default combineReducers({
	feedbackObj,
	domainFilterObj,
  router: routerReducer,
  counter,
	randomName,
	factsObj
})

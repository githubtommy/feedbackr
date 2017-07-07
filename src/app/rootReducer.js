import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../redux/counter/counterReducer'
import randomName from '../redux/randomName/randomNameReducer.js'
import { factsObj } from '../redux/weknow/weKnowReducer.js';
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

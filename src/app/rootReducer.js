import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../redux/counter/counterReducer'
import randomName from '../redux/randomName/randomNameReducer.js'
import { factsObj } from '../redux/weknow/weKnowReducer.js';
import { feedbackObj } from '../redux/feedbackr/feedbackReducer.js';
export default combineReducers({
	feedbackObj,
  router: routerReducer,
  counter,
	randomName,
	factsObj
})

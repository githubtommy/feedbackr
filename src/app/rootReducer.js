import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../scenes/counter/counterReducer'
import { randomNameObj } from '../scenes/lab/randomName/reducers/randomNameReducer.js'
import { factsObj } from '../scenes/weknow/reducers/weKnowReducer.js';
import { feedbackObj } from '../scenes/feedbackr/reducers/feedbackReducer.js';
import { domainFilterObj } from '../scenes/feedbackr/reducers/fbhome_reducer.js';
import { topicFilterObj } from '../scenes/feedbackr/reducers/fbhome_reducer.js';
export default combineReducers({
	feedbackObj,
	domainFilterObj,
	topicFilterObj,
	randomNameObj,
  router: routerReducer,
  counter,
	factsObj
})

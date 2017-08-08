import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../scenes/counter/counterReducer'
import { randomNameObj } from '../scenes/material/randomName/reducers/randomNameReducer.js'
import { feedbackObj } from '../scenes/feedbackr/reducers/feedbackReducer.js';
import { userReducer } from '../app/user/userState.js';
import { domainFilterObj } from '../scenes/feedbackr/reducers/fbhome_reducer.js';
import { topicFilterObj } from '../scenes/feedbackr/reducers/fbhome_reducer.js';
import {factsObj} from '../scenes/weknow/reducers/weKnowReducer.js';
export default combineReducers({
	feedbackObj,
	userReducer,
	domainFilterObj,
	topicFilterObj,
	randomNameObj,
  router: routerReducer,
  counter,
	factsObj
})

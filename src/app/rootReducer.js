import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../redux/counter/counterReducer'
import randomName from '../redux/randomName/randomNameReducer.js'
import { fact } from '../redux/weknow/weKnowReducer.js';
import { domain } from '../redux/feedbackr/domainReducer.js';
import { topic } from '../redux/feedbackr/topicReducer.js';
import { user } from '../redux/feedbackr/userReducer.js';
import { opinion } from '../redux/feedbackr/opinionReducer.js';

export default combineReducers({
  router: routerReducer,
  counter,
	randomName,
	fact,
	domain,
	topic,
	user,
	opinion
})

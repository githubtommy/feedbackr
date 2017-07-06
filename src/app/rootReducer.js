import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../redux/counter/counterReducer'
import randomName from '../redux/randomName/randomNameReducer.js'
import { fact } from '../redux/weknow/weKnowReducer.js';

export default combineReducers({
  router: routerReducer,
  counter,
	randomName,
	fact
})

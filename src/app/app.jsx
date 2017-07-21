import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Home from '../scenes/home/home.jsx'
import FBWelcome from '../scenes/feedbackr/scene_welcome/FBWelcomeContainer.jsx'
import FBWelcome2 from '../scenes/feedbackr/scene_welcome2/FBWelcomeContainer2.jsx'
import FBCreateOpinionContainer from '../scenes/feedbackr/scene_createOpinion/FBCreateOpinionContainer.jsx'
import FBHome from '../scenes/feedbackr/scene_home/FBHomeContainer.jsx'
import Counter from '../scenes/counter/Counter.jsx'
import About from '../scenes/about/about.jsx'
import Bio from '../scenes/bio/bio.jsx'
import Lab from '../scenes/lab/lab.jsx'
import WeKnow from '../scenes/weknow/WeKnowContainer.jsx'
import NavTopContainer from './NavTopContainer.jsx'


import Swiper from '../scenes/swiper/Swiper.jsx'
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
//import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMoreVert from 'material-ui-icons/MoreVert'

class App extends React.Component {

	constructor() {
		super()
	}

	render() {

		console.log("====================");
		console.log("App RENDER")
		console.log("====================");
		// let page = this.props.location.pathname.substr(1);

		console.log("this:", this);
		console.log("this.props:", this.props);
		console.log("this.props.location:", this.props.location);
		const rightIconElement = (
			<IconButton
				touch={true}
			>
				<IconMoreVert color={grey400} />
				</IconButton>
		)

		const rightIconMenu = (
			<IconMenu iconButtonElement={rightIconElement}>
				<MenuItem>Reply</MenuItem>
				<MenuItem>Forward</MenuItem>
				<MenuItem>Delete</MenuItem>
			</IconMenu>
		)

		return (

			<div className="container">
				<NavTopContainer />
				<main>
					<Route exact path="/" component={FBWelcome2} />
					<Route exact path="/fbwelcome2" component={FBWelcome2} />
					<Route exact path="/fbhome" component={FBHome} />
					<Route exact path="/fb-create-opinion" component={FBCreateOpinionContainer} />
					<Route exact path="/counter" component={Counter} />
					<Route exact path="/about" component={About} />
					<Route exact path="/bio" component={Bio} />
					<Route exact path="/lab" component={Lab} />
					<Route exact path="/weknow" component={WeKnow} />
					<Route exact path="/swiper" component={Swiper} />
				</main>

			</div>
		)
	}
}

//const App = () => (
//
//)

export default App

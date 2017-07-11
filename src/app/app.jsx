import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../scenes/home/home.jsx'
import FBWelcome from '../scenes/feedbackr/scene_welcome/FBWelcomeContainer.jsx'
import FBWelcome2 from '../scenes/feedbackr/scene_welcome2/FBWelcomeContainer2.jsx'
import FBHome from '../scenes/feedbackr/scene_home/FBHomeContainer.jsx'
import Counter from '../scenes/counter/Counter.jsx'
import About from '../scenes/about/about.jsx'
import Bio from '../scenes/bio/bio.jsx'
import Lab from '../scenes/lab/lab.jsx'
import WeKnow from '../scenes/weknow/WeKnowContainer.jsx'

class App extends React.Component {
	render() {

		return (

			<div className="container">
				<header>
					<br />
					<Link to="/">Home</Link> | <Link to="/fbwelcome2">Welcome2</Link> | <Link to="/fbhome">Feedbackr Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/about">About</Link> | <Link to="/bio">Bio</Link> | <Link to="/lab">Lab</Link> | <Link to="/weknow">Things We Think We Know</Link>
					<br />
					<br />
				</header>

				<main>
					<Route exact path="/" component={FBWelcome} />
					<Route exact path="/fbwelcome2" component={FBWelcome2} />
					<Route exact path="/fbhome" component={FBHome} />
					<Route exact path="/counter" component={Counter} />
					<Route exact path="/about" component={About} />
					<Route exact path="/bio" component={Bio} />
					<Route exact path="/lab" component={Lab} />
					<Route exact path="/weknow" component={WeKnow} />
				</main>
			</div>
		)
	}
}

//const App = () => (
//
//)

export default App

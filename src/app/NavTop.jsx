import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Link, Redirect } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconMoreVert from 'material-ui-icons/MoreVert'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import './navtop.css'

export default class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectUrl: '',
			didRedirect: false,
			userName: props.name_first + " " + props.name_last
    };
  }

	handleNavButton = function(url) {
		console.log("handleNavButton");
		console.log("url:", url);
		//this.setState({redirect: true, redirectUrl: url});
		if (url == "/") {
			this.props.goCreate()
		} else if (url== "/fbwelcome2") {
			this.props.goRead()
		} else if (url== "/fb-create-opinion") {
			this.props.goCreate()
		} else if (url== "/fb-login") {
			this.props.goLogin("hello")
		}
	}

	getUserName = function() {
		console.log("getUserName");
		console.log("this.props:", this.props);
		return (this.props.user ? this.props.user.nameFirst + " " + this.props.user.nameLast : "Joe Blow")
	}




	render() {

		console.log("--------------------------------------------------");
		console.log("--------------------------------------------------");
		console.log("--------------------------------------------------");

		console.log("RENDER");
		console.log("this.props.user:", this.props.user);
		console.log("this.state.userName:", this.state.userName);

		// This works, but then NavTop is no longer rendered at the top of App
//		if (this.state.didRedirect) {
//			this.setState({redirect: false, didRedirect: false});
//		}
//
//		if (this.state.redirect && this.state.didRedirect === false) {
//			console.log("WILL REDIRECT");
//			this.state.didRedirect = true;
//			return <Redirect push to={this.state.redirectUrl} />;
//		}
//		console.log("WILL NOT REDIRECT");

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
			<div>

			<AppBar
				title="feedbackr"
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				className="topbar"
				>

					<FlatButton className="topbar" label="Read" onClick={this.handleNavButton.bind(this, "/fbwelcome2")} />
					<FlatButton className="topbar" label="Add" onClick={this.handleNavButton.bind(this, "/fb-create-opinion")} />
					<FlatButton className="topbar" label="Login" onClick={this.handleNavButton.bind(this, "/fb-login")} />
			</AppBar>

				<p>Hello {this.state.userName} </p>
				<div className="navBar">
					<Link to="/">Home</Link> | <Link to="/fbwelcome2">Welcome2</Link> | <Link to="/fbhome">Feedbackr Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/about">About</Link> | <Link to="/bio">Bio</Link> | <Link to="/lab">Lab</Link> | <Link to="/weknow">Things We Think We Know </Link> | <Link to="/swiper">Swiper</Link>
				</div>

			</div>
		)
	}
}

import React from 'react';
import { Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserList from './UserList.jsx'
import FlatButton from 'material-ui/FlatButton';
import IconChevronLeft from 'material-ui-icons/ChevronLeft';

import '../scene_welcome2/css/fbWelcome2b.css'
import '../../../app/pills.css'
import '../../../app/fonts/kudos_fonts.css'
import IconButton from 'material-ui/IconButton';

export default class FBLogin extends React.Component {

  constructor(props) {
    super(props);
		console.log("props:", props);
    this.state = {
			tempUser: props.tempUser
    }

		this.handleExitLogin = this.handleExitLogin.bind(this);
		this.handleUserSelect = this.handleUserSelect.bind(this);

  }

	componentDidMount() {;
    this.props.getFeedback();
  }

	handleExitLogin() {
		console.log("handleExitLogin");
	}

	handleUserSelect(user) {
		console.log("handleUserSelect");
		console.log("user:", user);
		this.props.keepUser(user)
	}

  render() {
		console.log("--------------------------------------------------");

		console.log("RENDER");
		console.log("this.state.tempUser:", this.state.tempUser);
		console.log("this.props.tempUser:", this.props.tempUser);
		let { domains, topics, users, opinions } = this.props.feedbackObj;

		if (this.props && this.props.feedbackObj && domains) {
			console.log("domains:", domains);
			console.log("users:", users);
		}

		return (
			<div id="returnBlock">
				{ (users && users.length > 0) ?
					<div>
						<FlatButton
							label="Exit"
							labelPosition="after"
							primary="true"
							onClick={this.handleExitLogin} />

							Fake Login: Choose a user

						<UserList
							users={users}
							handleUserSelect={this.handleUserSelect}
							/>

				</div> : null}
			</div>
    );
  }
}

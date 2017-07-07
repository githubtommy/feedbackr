import React from 'react';
import {Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import ReactTimestamp from 'react-timestamp'
import DomainList from './DomainList.jsx'
import { ListGroup } from "react-bootstrap";

export default class FBHomeComponent extends React.Component {

  constructor() {
    super();
		console.log("setting initial state");
    this.state = {
			MAX_INPUT_LENGTH: 150,
			remainingInputChars: 150,
      name: '',
			inputValue: ''
    };

		console.log("this.state:", this.state);

		this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
		console.log("componentDidMount");
    this.props.onGetFeedback();
  }

	// onChange={e => this.setState({ name: e.target.value })}
	handleInputChange(event) {
		let value = event.target.value;
		let remainingChars = this.state.MAX_INPUT_LENGTH - value.length;
		this.setState({remainingInputChars: remainingChars});
		this.setState({ name: event.target.value })
	}

	handleChange(event) {
		console.log("handleChange:");
	}

  render() {
		console.log("--------------------------------------------------");
		console.log("FBHomeComponent: this.props:", this.props);
		let { domains, topics, users, opinions } = this.props.feedbackObj;

		let topicsFiltered = [];
		let domainDefault = "TV Shows";


		if (domains && domainDefault && topics) {
			let domain0 = domains[0].name;
			// let topicsFiltered = topics.filter(domain => domain == domainDefault);

			topicsFiltered = topics.filter(function (topic) {
				console.log("- topic:", topic);
				return topic.domain == domainDefault;
			});
			console.log("domainDefault:", domainDefault);
			console.log("topicsFiltered:", topicsFiltered);
			console.log("domain0:", domain0);
		}

		console.log("domains:", domains);
		console.log("topics:", topics);
		console.log("topicsFiltered:", topicsFiltered);

		if (this.props.feedbackObj.feedback) {
			console.log("YES, feedback");
		}

//		if (this.props.feedback && this.props.feedback.feedback && this.props.feedback.feedback.domains) {
//			console.log("this.props.feedback.feedback.domains:", this.props.feedback.feedback.domains);
//
//			domains = this.props.feedback.feedback.domains
//			topics = this.props.feedback.feedback.topics
//			users = this.props.feedback.feedback.users
//			opinions = this.props.feedback.feedback.opinions
//		}



    return (
      <div className="container">
      <h1>DOMAIN DROPDOWN</h1>
      {domains && domains.length > 0 ? (
						<select>
							{domains.map((domain, index) => {
								return (
									<option key={index} value={domain.name}>{domain.name}</option>
								);
							})}

						</select>
          ) : <p>NO DOMAINS FOR DROPDOWN</p>}

			{topicsFiltered && topicsFiltered.length > 0 ? (
				<select>
					{topicsFiltered.map((topic, index) => {
						return (
							<option key={index} value={topic.name}>{topic.name}</option>
						);
					})}

				</select>
			) : <p>NO TOPICS FOR DROPDOWN</p>}

        <div className="meeting-list">
          <h2>topics</h2>
					{topicsFiltered && topicsFiltered.length > 0 ? (
						<ListGroup componentClass="ul">
							{topicsFiltered.map((topic, index) => {
								return (
									<li key={index} className="list-group-item">
										<p className="factList content">{topic.name}</p>
										<p className="factList ago"><ReactTimestamp time={topic.date} format="ago" /> ago</p>
									</li>
								);
							})}

						</ListGroup>
          ) : <p>NO TOPICS</p>}

        </div>


        <div className="meeting-list">
          <h2>users</h2>
					{users && users.length > 0 ? (
						<ListGroup componentClass="ul">
							{users.map((user, index) => {
								return (
									<li key={index} className="list-group-item">
										<p className="factList content">{user.name}</p>
										<p className="factList ago"><ReactTimestamp time={user.date} format="ago" /> ago</p>
									</li>
								);
							})}

						</ListGroup>
          ) : <p>NO USERS</p>}

        </div>

        <div className="meeting-list">
          <h2>opinions</h2>
					{opinions && opinions.length > 0 ? (
						<ListGroup componentClass="ul">
							{opinions.map((opinion, index) => {
								return (
									<li key={index} className="list-group-item">
										<p className="factList content">{opinion.body}</p>
										<p className="factList ago"><ReactTimestamp time={opinion.date} format="ago" /> ago</p>
									</li>
								);
							})}

						</ListGroup>
          ) : <p>NO OPINIONS</p>}

        </div>

        <div className="well">
          <h1>XXXXX</h1>
        </div>
        <div className="bg-warning meeting-summary">
          <div className="row">
           	<br />
            <div className="col-xs-4 col-xs-offset-1">
							<ButtonToolbar>
								<DropdownButton title="Subject" id="dropdown-size-large">
									<MenuItem eventKey="1">Animals</MenuItem>
									<MenuItem eventKey="2">Plants action</MenuItem>
									<MenuItem eventKey="3">Science</MenuItem>
								</DropdownButton>
							</ButtonToolbar>
							<br />
            </div>
          </div>


        </div>
        <div className="bg-info meeting-form">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
              	<br />
               	<p>I think I know that...</p>
                <textarea
                 	className="form-control input-lg"
                 	rows="3"
                 	maxLength={this.state.MAX_INPUT_LENGTH}
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange.bind(this)}
                />
                <br />
                <p>Remaining Characters: {this.state.remainingInputChars}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.onAddFact(this.state.name)}
                >Submit!</button>
                <br />
                <br />
              </div>
            </div>
        </div>

      </div>
    );
  }
}

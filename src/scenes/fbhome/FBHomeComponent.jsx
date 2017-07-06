import React from 'react';
import {Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import ReactTimestamp from 'react-timestamp'
import DomainList from './DomainList.jsx'
import { ListGroup } from "react-bootstrap";

export default class FBHomeComponent extends React.Component {

  constructor() {
    super();
    this.state = {
			MAX_INPUT_LENGTH: 150,
			remainingInputChars: 150,
      name: '',
			inputValue: ''
    };
  }

  componentDidMount() {
		console.log("componentDidMount");
    this.props.onGetDomain();
		this.props.onGetTopic();
  }

	// onChange={e => this.setState({ name: e.target.value })}
	handleInputChange(event) {
		let value = event.target.value;
		let remainingChars = this.state.MAX_INPUT_LENGTH - value.length;
		this.setState({remainingInputChars: remainingChars});
		this.setState({ name: event.target.value })
	}

  render() {
		console.log("FBHomeComponent: this.props:", this.props);
		console.log("this.state:", this.state);
		console.log("this.props:", this.props);
		const domains = this.props.domains;
		const topics= this.props.topics;
		const users = this.props.users;
		const opinions = this.props.opinions;

    //const { domains, topics, users, opinions } = this.props.facts;
//		const domains = [
//			{name: "Domain1", date: "1999"},
//			{name: "Domain2", date: "1999"}
//		]
//		const opinions = [
//			{body: "This is an opinion", date: "1999", topic: "fakeTopic", user: "tommyboy"}
//		]
    return (
      <div className="container">

        <div className="meeting-list">
          <h2>domains</h2>
					{domains && domains.length > 0 ? (
						<ListGroup componentClass="ul">
							{domains.map((domain, index) => {
								return (
									<li key={index} className="list-group-item">
										<p className="factList content">{domain.name}</p>
										<p className="factList ago"><ReactTimestamp time={domain.date} format="ago" /> ago</p>
									</li>
								);
							})}

						</ListGroup>
          ) : <p>NO DOMAINS</p>}

        </div>


        <div className="meeting-list">
          <h2>topics</h2>
					{topics && topics.length > 0 ? (
						<ListGroup componentClass="ul">
							{topics.map((topic, index) => {
								return (
									<li key={index} className="list-group-item">
										<p className="factList content">{topic.name}</p>
										<p className="factList ago"><ReactTimestamp time={topic.date} format="ago" /> ago</p>
									</li>
								);
							})}

						</ListGroup>
          ) : <p>NO DOMAINS</p>}

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
          ) : <p>NO DOMAINS</p>}

        </div>

       <div className="meeting-list">
          <h2>opinions </h2>
					{opinions && opinions.length > 0 ? (
						<ListGroup componentClass="ul">
							{opinions.map((fact, index) => {
								return (
									<li key={index} className="list-group-item">
										<p className="factList content">{fact.content}</p>
										<p className="factList ago"><ReactTimestamp time={fact.date} format="ago" /> ago</p>
									</li>
								);
							})}

						</ListGroup>
          ) : null}

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

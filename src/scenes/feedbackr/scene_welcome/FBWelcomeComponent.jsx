import React from 'react';
import {Grid, Row, Col, Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import ReactTimestamp from 'react-timestamp'
import { ListGroup } from "react-bootstrap";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../css/feedbackr.css'
import '../../../app/pills.css'
import '../../../app/fonts/kudos_fonts.css'
//import { setDomainFilter } from '../actions/setDomainFilter'

export default class FBWelcomeComponent extends React.Component {

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

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDomainDropdown = this.handleDomainDropdown.bind(this);
  }

  componentDidMount() {
		console.log("componentDidMount");
		this.props.setDomainFilter();
    this.props.getFeedback();
  }

	// onChange={e => this.setState({ name: e.target.value })}
	handleInputChange(event) {
		let value = event.target.value;
		let remainingChars = this.state.MAX_INPUT_LENGTH - value.length;
		this.setState({remainingInputChars: remainingChars});
		this.setState({ name: event.target.value })
	}

	handleDomainDropdown(key, event) {
		console.log("handleDomainDropdown:");
		this.props.setDomainFilter(key)
	}

  render() {
		console.log("--------------------------------------------------");
		console.log("FBWelcomeComponent: this.props:", this.props);
		console.log("this.props.fbHomeObj:", this.props.fbHomeObj);
		console.log("this.props.domainFilterObj:", this.props.domainFilterObj);
		let { domains, topics, users, opinions } = this.props.feedbackObj;
		let { domainFilter } = this.props.domainFilterObj;

		let topicsFiltered = [];

		console.log("domainFilter:", domainFilter);


		if (domains && topics) {
			let domain0 = domains[0].name;
			// let topicsFiltered = topics.filter(domain => domain == domainDefault);

			topicsFiltered = topics.filter(function (topic) {
				console.log("- topic:", topic);
				return topic.domain == domainFilter;
			});
			console.log("topicsFiltered:", topicsFiltered);
			console.log("domain0:", domain0);
		}

		console.log("domains:", domains);
		console.log("topics:", topics);
		console.log("topicsFiltered:", topicsFiltered);

		if (this.props.feedbackObj.feedback) {
			console.log("YES, feedback");
		}

    return (
      <div>
				<RaisedButton label="Primary" primary={true} style="primary" />
				<br />
				<br />
				<div><span className="kudoPillSecret">SUGGESTION</span></div>
				<br />
				<br />
				<Button className="pillify">BOOTSTRAP BUTTON</Button>

				{/* domain dropdown */}

				{domains && domains.length > 0 ? (
					<ButtonToolbar className="domainDropdown">
						<DropdownButton bsStyle="info" title={domainFilter} key="myKey" onSelect={this.handleDomainDropdown}>

							{domains.map((domain, index) =>
								{
									return (
										<MenuItem eventKey={domain.name} value={domain.name} >{domain.name} </MenuItem>
									);
								}
							)}

						</DropdownButton>
					</ButtonToolbar>
					) : <p>NO DOMAINS FOR DROPDOWN</p>
				}

        <div id="opinionList" className="meeting-list">
          <h2>opinions</h2>
					{opinions && opinions.length > 0 ? (
						<ListGroup componentClass="ul">
							{opinions.map((opinion, index) => {
								return (
									<Grid>
										<li key={index} className="list-group-item">
											<Row>
												<p className="opinionList content">{opinion.body}</p>
											</Row>
											<Row className="show-grid footer">
												<div className="col-sm-12 footer center-block">
														<Col xs={4} className="ago"><ReactTimestamp time={opinion.date} format="ago" /> ago</Col>
														<Col xs={4} className="topic">{opinion.topic}</Col>
														<Col xs={4} className="type"><span className="typePill">{opinion.type.toUpperCase()}</span></Col>
												</div>
											</Row>
										</li>
									</Grid>
								);
							})}

						</ListGroup>
          ) : <p>NO OPINIONS</p>}

        </div>

				<div>
					{topicsFiltered && topicsFiltered.length > 0 ? (
						<select>
							{topicsFiltered.map((topic, index) => {
								return (
									<option key={index} value={topic.name}>{topic.name}</option>
								);
							})}

						</select>
					) : <p>NO TOPICS FOR DROPDOWN</p>}

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

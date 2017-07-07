import React from 'react';
import {Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import ReactTimestamp from 'react-timestamp'
import FactList from './FactList.jsx'
import { ListGroup } from "react-bootstrap";
import "./factList.css"

export default class WeKnowComponent extends React.Component {

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
    this.props.onGetFact();
  }

	// onChange={e => this.setState({ name: e.target.value })}
	handleInputChange(event) {
		let value = event.target.value;
		let remainingChars = this.state.MAX_INPUT_LENGTH - value.length;
		this.setState({remainingInputChars: remainingChars});
		this.setState({ name: event.target.value })
	}

  render() {
		console.log("--------------------------------------------------");
		console.log("WeKnowComponent.render");
		console.log("this.props:", this.props);
    const { siteTitle, siteSubtitle, factCount, facts } = this.props.factsObj
		console.log("facts:", facts);
		console.log("siteTitle:", siteTitle);
    return (
      <div className="container">
       	<p>{siteTitle}</p>
        <div className="well">
          <h1>{siteTitle}</h1>
          <p>{siteSubtitle}</p>
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
        <div className="meeting-list">
          <h2>facts2</h2>
					{facts && facts.length > 0 ? (
						<ListGroup componentClass="ul">
							{facts.map((fact, index) => {
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
      </div>
    );
  }
}

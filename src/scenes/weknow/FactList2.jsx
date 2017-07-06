import React from 'react';
import {Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import { ListGroup } from "material-ui";


export class Row extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

	handleInputChange(event) {
		this.setState({ name: event.target.value })
	}

  render() {
    return (
      <div className="container">
      <	p>Placeholder in the compoent</p>
      </div>
    );
  }
}

export default class FactList extends React.Component {

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
		console.log("this.props:", this.props);
    const { siteTitle, siteSubtitle, factCount, facts } = this.props.fact;

    return (
      <div className="container">

        <div className="meeting-list">
          <h2>FACTS BABY</h2>
        </div>
      </div>
    );
  }
}

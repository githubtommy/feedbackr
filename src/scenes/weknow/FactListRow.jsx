import React from 'react'

export default class FactListRow extends React.Component {

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
			<li>dog</li>
    );
  }
}

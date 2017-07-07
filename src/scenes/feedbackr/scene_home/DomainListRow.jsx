import React from 'react'

export default class DomainListRow extends React.Component {

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

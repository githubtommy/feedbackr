import React from 'react';

export default class MyComponent extends React.Component {

  constructor() {
    super();
    this.state = {
			props: this.props,
			dog: "uma"
    };
  }

  componentDidMount() {
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

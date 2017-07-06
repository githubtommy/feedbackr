import React from 'react'
import FactListRow from './FactListRow.jsx'

export default class FactList extends React.Component {

  constructor(props) {
    super(props);
		console.log("CONSTRUCTOR");
		console.log("props:", props);
		console.log("this.props:", this.props);
    this.state = {
			facts: this.props.facts,
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
      <p>Factlist Will Go Here</p>
      {this.state.facts && this.state.facts.length > 0 ? (
				<ul>
					{this.state.facts.map((fact, index) => {
						return (
							<li key={index}>
								{fact.content}
							</li>
						);
					})}
				</ul>
			) : null}
      <FactListRow />
      </div>
    );
  }
}

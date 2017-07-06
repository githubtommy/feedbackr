import React from 'react'
import DomainListRow from './DomainListRow.jsx'

export default class FactList extends React.Component {

  constructor(props) {
    super(props);
		console.log("CONSTRUCTOR");
		console.log("props:", props);
		console.log("this.props:", this.props);
    this.state = {
			domains: this.props.domains,
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
      <p>Domain List Will Go Here</p>
      {this.state.domains && this.state.domains.length > 0 ? (
				<ul>
					{this.state.domains.map((fact, index) => {
						return (
							<li key={index}>
								{fact.content}
							</li>
						);
					})}
				</ul>
			) : null}
      <DomainListRow />
      </div>
    );
  }
}

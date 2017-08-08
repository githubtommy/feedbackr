import React from 'react'
import { Panel, Button } from 'react-bootstrap';

class PanelExample extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      panel2Open: true
    };
		this.handlePanel2Click = this.handlePanel2Click.bind(this)

  }

	handlePanel1Click(selectedKey) {
  	alert('You clicked on panel1:');
	}

	handlePanel2Click() {
		console.log("handlePanel2Click");
		this.setState({panel2Open: !this.state.panel2Open})

	}

	render() {

		return (

			<div>
				<h4>Basic Panel</h4>
				<Panel onClick={ this.handlePanel1Click }>
					Basic panel example
				</Panel>

				<h4>Collapsible Panel</h4>
				<Button onClick={ this.handlePanel2Click}>
						Click Me
					</Button>
					<Panel collapsible expanded={this.state.panel2Open}>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</Panel>

			</div>


		)




	}

}

export default PanelExample

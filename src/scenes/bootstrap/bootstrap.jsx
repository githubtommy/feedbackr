import React from 'react'
import { PageHeader, Well, ButtonToolbar, Button } from 'react-bootstrap';
import ModalExample from './ModalExample.jsx'
import NavExample from './NavExample.jsx'
import NavbarExample from './NavbarExample.jsx'
import NavbarFormExample from './NavbarFormExample.jsx'
import TabExample from './TabExample.jsx'
import LabelExample from './LabelExample.jsx'
import ProgressBarExample from './ProgressBarExample.jsx'
import TableExample from './TableExample.jsx'
import JumbotronExample from './JumbotronExample.jsx'
import PageHeaderExample from './PageHeaderExample.jsx'
import PanelExample from './PanelExample.jsx'

const Bootstrap = () => (



  <div>

  	<JumbotronExample />

		<hr />
		<h3>Buttons</h3>

		<ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>

	<hr />
		<h3>Modal</h3>
		<ModalExample />

<hr />
		<h3>Nav</h3>
		<NavExample />

<hr />
		<h3>Navbar</h3>
		<NavbarExample />

<hr />
		<h3>NavbarForm</h3>
		<NavbarFormExample />

<hr />
		<h3>Tab</h3>
		<TabExample />

<hr />
		<h3>Label</h3>
		<LabelExample />

<hr />
		<h3>ProgressBar</h3>
		<ProgressBarExample />

<hr />
		<h3>PanelExample</h3>
		<PanelExample />

<hr />
		<h3>PageHeader</h3>
		<PageHeaderExample />


<hr />
		<h3>Table</h3>
		<TableExample />


<hr />
		<h3>Well Component</h3>
		<Well>This is a Well component. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo commodo gravida. Donec vehicula semper nunc, ut vehicula arcu sagittis sed. Aenean nunc ipsum, tempus in arcu sed, malesuada fermentum sem. </Well>
  </div>
)

export default Bootstrap

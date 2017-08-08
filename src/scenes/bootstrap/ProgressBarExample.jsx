import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const ProgressBarExample = () => (
  <div>
    <ProgressBar bsStyle="success" now={40} />
    <ProgressBar bsStyle="info" now={20} />
    <ProgressBar bsStyle="warning" now={60} />
    <ProgressBar bsStyle="danger" now={80} />
    <ProgressBar active now={45} />
    <ProgressBar striped bsStyle="success" now={40} />
    <ProgressBar striped bsStyle="info" now={20} />
    <ProgressBar striped bsStyle="warning" now={60} />
    <ProgressBar striped bsStyle="danger" now={80} />
    <ProgressBar>
			<ProgressBar striped bsStyle="success" now={35} key={1} />
			<ProgressBar bsStyle="warning" now={20} key={2} />
			<ProgressBar active bsStyle="danger" now={10} key={3} />
		</ProgressBar>
  </div>
)

export default ProgressBarExample

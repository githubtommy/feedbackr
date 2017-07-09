import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRandomName } from './randomName/actions/getRandomName.js'
import { Button } from 'react-bootstrap';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

const Lab = props => (


  <div>

   				<DropDownMenu value={1} onChange={this.handleChange}  openImmediately={true}>
						<MenuItem value={1} primaryText="Never" />
						<MenuItem value={2} primaryText="Every Night" />
						<MenuItem value={3} primaryText="Weeknights" />
						<MenuItem value={4} primaryText="Weekends" />
						<MenuItem value={5} primaryText="Weekly" />
					</DropDownMenu>


    <h1>Laboratory Page</h1>
		<p>Name: {props.name}</p>
		<p> <Button bsStyle="warning" onClick={props.getRandomName}>Get Random Name</Button></p>
  </div>
)

//function mapStateToProps(state) {
//	console.log("LAB: mapStateToProps: ", state);
//  return {
//		name: state.randomNameObj.name
//  };
//}

const handleChange = function() {
		console.log("handleChange");
	}

const mapStateToProps = state => ({
  name: state.randomNameObj.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomName
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab)

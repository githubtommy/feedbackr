import React from 'react'
import '../scene_welcome2/css/fbWelcome2b.css'
import IconButton from 'material-ui/IconButton';
import IconTagFace from 'material-ui-icons/TagFaces'

import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import IconMoreVert from 'material-ui-icons/MoreVert'
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';

import {FormGroup} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'

import { Button } from 'react-bootstrap';

import './css/topic-list.css'
import {bootstrapUtils} from 'react-bootstrap/lib/utils';



class UserForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			nameFirst: '',
			nameLast: '',
			location: '',
			password: '',
			saveButtonDisabled: false
		}

		this.handleNameFirstChange = this.handleNameFirstChange.bind(this)
		this.handleNameLastChange = this.handleNameLastChange.bind(this)
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.handleSaveTap = this.handleSaveTap.bind(this)
	}

	updateSaveButton() {
		let allValid = this.isValidNameFirst() && this.isValidNameLast() && this.isValidLocation()
		let notAllValid = !allValid
		this.setState({saveButtonDisabled: notAllValid})
	}

	isValidNameFirst() {
		return (this.state.nameFirst.length > 0)
	}

	isValidNameLast() {
		return (this.state.nameFirst.length > 0)
	}

	isValidLocation() {
		return (this.state.location.length > 0)
	}

	handleNameFirstChange(event) {
		console.log("handleNameFirstChange");
		this.setState( {nameFirst: event.target.value} )
		this.updateSaveButton()
	}

	handleNameLastChange(event) {
		console.log("handleNameFirstChange");
		this.setState(	{nameLast: event.target.value} )
		this.updateSaveButton()
	}

	handleLocationChange(event) {
		console.log("handleLocationChange");
		this.setState(	{location: event.target.value} )
		this.updateSaveButton()
	}

	handleSaveTap() {
		console.log("handleSaveTap");
		this.props.addUser(this.state.nameFirst, this.state.nameLast, this.state.location)
	}

	saveButtonDisabled() {
		console.log("saveButtonDisabled");
		return (this.state.inputLength >= this.state.inputMinLength)
	}

	render() {

		const handler = function() {
			console.log("handler");
		}

		const muiStyles = {
			chip: {
				margin: 4,
				display: 'inline',
				width: '150px',
				minWidth: '150px !important',
			},
			listItem: {
				color: 'black',
				height: '44px',
				fontSize: '14px',
				borderTop: '1px gray solid',
				padding: '0 16px'
			},
			style: {
				border: '1px solid red',
				padding: '0',
				fontSize: '24px',
				color: 'red'
			},
			inputStyle: {
				padding: '10px 0px 20px 0px',
				fontSize: '24px',
				color: 'green'
			},
			textAreaStyle: {
				color: 'blue'
			}
		}

		const bootstrapStyles = {
			"color": "orange",
			"maxLength": "10"
		}

		return (
			<div>
				<h2>Create a User {this.props.topicFilter}</h2>
				<FormGroup>

					<FormControl
          	style={bootstrapStyles}
            type="text"
            value={this.state.nameFirst}
            placeholder="First name"
            onChange={this.handleNameFirstChange}
           />

					<FormControl
          	style={bootstrapStyles}
            type="text"
            value={this.state.nameLast}
            placeholder="Last name"
            onChange={this.handleNameLastChange}
           />

					<FormControl
          	style={bootstrapStyles}
            type="text"
            value={this.state.location}
            placeholder="Location"
            onChange={this.handleLocationChange}
          />


				</FormGroup>
				<FlatButton
					label="Save"
					labelPosition="after"
					primary="true"
					disabled={this.state.saveButtonDisabled}
					onClick={this.handleSaveTap} />

			</div>
		)
		}
}

export default UserForm

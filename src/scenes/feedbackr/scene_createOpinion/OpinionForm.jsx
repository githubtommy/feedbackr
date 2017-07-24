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



class OpinionForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			inputMaxLength: props.inputMaxLength,
			inputMinLength: 10,
			opinionLegth: '',
			inputCharsRemaining: '',
			saveButtonDisabled: false
		}

		this.inputMaxLength = props.opinionMaxLengh
		this.topicFilter = props.topicFilter
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSaveTap = this.handleSaveTap.bind(this)

		//bootstrapUtils.addStyle(FormControl, 'custom');
	}

	handleInputChange(event) {
		console.log("handleInputChange");
		console.log("event.target.name:", event.target.name);
		console.log("event.target.value:", event.target.value);
		let inputLength = event.target.value.length
		let saveButtonDisabled = inputLength <= this.state.inputMinLength
		console.log("inputLength:", inputLength);
		console.log("this.state.inputMinLength:", this.state.inputMinLength);
		console.log("saveButtonDisabled:", saveButtonDisabled);
		console.log("this.state.saveButtonDisabled:", this.state.saveButtonDisabled);
		this.setState(	{	inputValue: event.target.value,
										 	inputLength: inputLength,
											inputCharsRemaining: this.state.inputMaxLength - inputLength,
											saveButtonDisabled: saveButtonDisabled })
	}

	handleSaveTap() {
		console.log("handleSaveTap");
		this.props.addOpinion(this.state.inputValue, this.topicFilter)
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
				<h2>Create opinion for {this.props.topicFilter}</h2>
				<div>Characters Remaining: {this.state.inputCharsRemaining}</div>
				<FormGroup>
					<FormControl
          	style={bootstrapStyles}
            name="myFormControl"
            type="text"
            componentClass="textArea"
            value={this.state.inputValue}
            placeholder="Enter your opinion"
            onChange={this.handleInputChange}
            maxLength={this.state.inputMaxLength}
            multiLine={true}
            rows={5}
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

export default OpinionForm

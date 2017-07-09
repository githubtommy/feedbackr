import React from 'react';
import ReactTimestamp from 'react-timestamp'
import { ListGroup } from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// material-ui
import {List, ListItem} from 'material-ui/List';
import {Avatar} from 'material-ui'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
//import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';


// colors
import {pinkA200, blue600, red600, transparent} from 'material-ui/styles/colors';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import IconChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import IconMoreVert from 'material-ui-icons/MoreVert'
import IconMusicNote from 'material-ui-icons/MusicNote'
import IconTagFace from 'material-ui-icons/TagFaces'
import IconThumbDown from 'material-ui-icons/ThumbDown'
import ActionGrade from 'material-ui/svg-icons/action/grade';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

//import '../css/feedbackr.css'
import '../css/fbWelcome2b.css'
import '../../../app/pills.css'
import '../../../app/fonts/kudos_fonts.css'
//import { setDomainFilter } from '../actions/setDomainFilter'


export default class FBWelcomeComponent2 extends React.Component {

  constructor() {
    super();
		console.log("setting initial state");
    this.state = {
			MAX_INPUT_LENGTH: 150,
			remainingInputChars: 150,
      name: '',
			inputValue: '',
			dog: "uma the dog"
    };

		console.log("this.state:", this.state);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDomainDropdown = this.handleDomainDropdown.bind(this);
		//this.handleTopicTap = this.handleTopicTap.bind(this);
  }


  componentDidMount() {
		this.props.setDomainFilter();
    this.props.getFeedback();
		console.log("WILL INJESCT TAP EVENT PLUGIN");

  }

	handleTopicTap(value) {
		console.log("handleTopicTap");
		console.log("value:", value);
	}

	// onChange={e => this.setState({ name: e.target.value })}
	handleInputChange(event) {
		let value = event.target.value;
		let remainingChars = this.state.MAX_INPUT_LENGTH - value.length;
		this.setState({remainingInputChars: remainingChars});
		this.setState({ name: event.target.value })
	}

	handleDomainDropdown(key, event) {
		this.props.setDomainFilter(key)
	}

	handleDropDownChange(event, index, value) {
		console.log("handleDropDownChange: ");
		console.log("event:", event);
		console.log("index:", index);
		console.log("value:", value);
	}

  render() {
		console.log("--------------------------------------------------");

		let { domains, topics, users, opinions } = this.props.feedbackObj;
		let { domainFilter } = this.props.domainFilterObj;

		let topicsFiltered = [];

		if (domains && topics) {
			let domain0 = domains[0].name;
			// let topicsFiltered = topics.filter(domain => domain == domainDefault);

			topicsFiltered = topics.filter(function (topic) {
				return topic.domain == domainFilter;
			});
		}


		const rightIconElement = (
			<IconButton
				touch={true}
			>
				<IconMoreVert color={grey400} />
			</IconButton>
		)

		const rightIconMenu = (
			<IconMenu iconButtonElement={rightIconElement}>
				<MenuItem>Reply</MenuItem>
				<MenuItem>Forward</MenuItem>
				<MenuItem>Delete</MenuItem>
			</IconMenu>
		)


    return (
      <div id="returnBlock">


					<DropDownMenu value={3} onChange={this.handleDropDownChange}  >
						<MenuItem value={1} primaryText="Never"/>
						<MenuItem value={2} primaryText="EveryNight" />
						<MenuItem value={3} primaryText="Weeknights" />
						<MenuItem value={4} primaryText="Weekends" />
						<MenuItem value={5} primaryText="Weekly" />
					</DropDownMenu>

        {/* ----- material dynamic ----- */}


        <div>
					<h2>Opinions</h2>
					{opinions && opinions.length > 0 ? (
						<List className="opinionList">
							{opinions.map((opinion, index) => {
								return (
									<div>
										<p className="opinionList-divider"></p>

										<ListItem className="opinionList-item"
											disabled
											leftIcon={<IconTagFace color={pinkA200} />}
											rightIconButton={rightIconMenu}
											primaryText={
													<div className="opinionList-primary">
														<div className="opinionList-primary-opinion">{opinion.body}</div>
														<FlatButton style={{ fontSize: '16px' }} primary>{"Elizabeth Montgomery, Brooklyn NY"}</FlatButton>

													</div>
												}
											secondaryText={
												<div className="opinionList-secondary">
													<Chip className="opinionList-secondary-item left"
														onClick={this.handleTopicTap.bind(this, opinion.topic)}>{opinion.topic}</Chip>
													<Chip className="opinionList-secondary-item right" backgroundColor={"#ffffff"} labelColor={"#aaaaaa"}>6 days ago</Chip>
												</div>
											}

										/>
									</div>


								);
							})}

						</List>

          ) : <p>NO OPINIONS</p>}






        </div>

      </div>
    );
  }
}

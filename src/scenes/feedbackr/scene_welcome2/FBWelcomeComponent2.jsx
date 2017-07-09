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
		console.log("CONSTRUCTOR: setting initial state");
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
		this.handleTopicDropdown = this.handleTopicDropdown.bind(this);
  }


  componentDidMount() {
		console.log("componentDidMount");
//		/this.props.setDomainFilter();
		// TODO: improve how we set this default domainFilter state
    this.props.getFeedback();
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

	handleDomainDropdown(event, index, value) {
		console.log("handleDomainDropdown: ");
		console.log("event:", event);
		console.log("index:", index);
		console.log("value:", value);
		console.log("this:", this);
		this.props.setDomainFilter(value);
	}

	handleTopicDropdown(event, index, value) {
		console.log("handleTopicDropdown: ");
		console.log("event:", event);
		console.log("index:", index);
		console.log("value:", value);
		console.log("this:", this);
		this.props.setTopicFilter(value);
	}

  render() {
		console.log("--------------------------------------------------");

		console.log("RENDER");

		let { domains, topics, users, opinions } = this.props.feedbackObj;
		let { domainFilter } = this.props.domainFilterObj;
		let { topicFilter } = this.props.topicFilterObj;

		console.log("domainFilter:", domainFilter);
		console.log("topicFilter:", topicFilter);

		let topicsFiltered = [];
		let opinionsFiltered = [];

		if (domains && topics && opinions && domainFilter && topicFilter) {
			let domain0 = domains[0].name;
			// let topicsFiltered = topics.filter(domain => domain == domainDefault);

			if (domainFilter === "All Categories") {
				topicsFiltered = topics
			} else {
				topicsFiltered = topics.filter(function (topic) {
					return topic.domain == domainFilter;
				})
			}

			if (topicFilter === "All Topics") {
				opinionsFiltered = opinions
			} else {
				opinionsFiltered = opinions.filter(function (opinion) {
					return opinion.topic == topicFilter;
				})
			}

		// Get topics in the chosen domain
			console.log("topicsFiltered:", topicsFiltered);


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

        {/* ----- domain filter dropdown ----- */}
				{domains && domains.length > 0 ? (
					<DropDownMenu value={domainFilter} onChange={this.handleDomainDropdown}  >
						<MenuItem value={"All Categories"} primaryText={"All Categories"} />
						{domains.map((domain, index) =>
							{
								return (
									<MenuItem value={domain.name} primaryText={domain.name} />
								);
							}
						)}
					</DropDownMenu>
					) : <p>NO DOMAINS FOR DROPDOWN</p>
				}

        {/* ----- topic filter dropdown ----- */}
				{topicsFiltered && topicsFiltered.length > 0 ? (
					<DropDownMenu value={topicFilter} onChange={this.handleTopicDropdown}  >
						<MenuItem value={"all"} primaryText={"all"} />
						{topicsFiltered.map((topic, index) =>
							{
								return (
									<MenuItem value={topic.name} primaryText={topic.name} />
								);
							}
						)}
					</DropDownMenu>
					) : <p>NO TOPICS FOR DROPDOWN</p>
				}

        {/* ----- opinion list ----- */}

        <div>
					<h2>Opinions</h2>
					<p> Domain: {domainFilter}</p>
					<p> Topic: {topicFilter}</p>
					{opinionsFiltered && opinionsFiltered.length > 0 ? (
						<List className="opinionList">
							{opinionsFiltered.map((opinion, index) => {
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

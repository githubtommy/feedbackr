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
import './css/fbWelcome2b.css'
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

	getAllTopicsMenuPhrase(domainFilter) {
		console.log("getAllTopicsMenuPhrase");
		let result;
		if (domainFilter == "all") {
			result = "All Topics"
		} else {
			result = "All " + domainFilter
		}
		return result

	}



	// ----------------------------------------------------------------------------------------------------
	// ----------------------------------------------------------------------------------------------------
	// begin render
	// ----------------------------------------------------------------------------------------------------
	// ----------------------------------------------------------------------------------------------------

  render() {
		console.log("--------------------------------------------------");

		console.log("RENDER");

		let { domains, topics, users, opinions } = this.props.feedbackObj;
		let { domainFilter } = this.props.domainFilterObj;
		let { topicFilter } = this.props.topicFilterObj;

		console.log("domainFilter:", domainFilter);
		console.log("topicFilter:", topicFilter);
		console.log("opinions:", opinions);

		let topicsFiltered = [];
		let opinionsFiltered = [];
		let topicsInDomain = [];

		let testFunc = function() {
			console.log("TEST FUNC");
		}



		let topicIsInDomain = function (selectedTopic, domain) {
			console.log(" -------------------------");
			console.log("topicIsInDomain: ")
			console.log(" -------------------------");
			console.log("selectedTopic:", selectedTopic);
			console.log("domain:", domain);
			let result = false;
			for (let i = 0; i < domain.topics.length; i++) {
				let topic = domain.topics[i];
				console.log("LOOP:", i);
				console.log("topic:", topic);
				if (topic == selectedTopic) {
					console.log("YES, TOPIC IS IN DOMAIN");
					result = true;
					break;
				} else {
					console.log("NO TOPIC NOT IN DOMAIN");
				}
			}
			console.log("result:", result);
			return result
		}

		let getTopicsForDomain = function (domain, topics) {
			console.log(" ***************");
			console.log("topicIsInDomain: ")
			console.log(" ***************");






		}

		let getAllOpinionsForDomain = function(opinions, domains, domainFilter) {
			console.log(" --------------------------------------------------");
			console.log("getAllOpinionsForDomain");
			console.log(" --------------------------------------------------");
			console.log("opinions:", opinions);
			console.log("domains:", domains);
			console.log("domainFilter:", domainFilter);
			let domain = domains.filter(function (domain) {
					return domain.name == domainFilter;
				})
			console.log("domain:", domain);
			let result = []
			for (let i = 0; i < opinions.length; i++) {
				let opinion = opinions[i]
				console.log("LOOP #:", i);
				console.log("opinion:", opinion);
				console.log("-- opinion.topic:", opinion.topic);
				if (topicIsInDomain(opinion.topic, domain)) {
					result.push(opinion.topic)
				}
			}
			console.log("RESULT:", result);
			return result;
		}

		let getAllowedTopics = function(topics, domainFilter) {
			console.log("==================");
			console.log("getAllowedTopics");
			console.log("==================");
			let result = []
			for (var i = 0; i < topics.length; i++) {
				let topic = topics[i]
				console.log(i + ". topic:", topic);
				if (topic.domain === domainFilter) {
					result.push(topic)
				}
			}
			return result
		}

		let topicIsAllowed = function(topicToMatch, topics) {
			console.log("===== topicIsAllowed");
			let result = false
			for (var i = 0; i < topics.length; i++) {
    		let topic = topics[i];
				if (topic.name === topicToMatch) {
					console.log("FOUND A MATCH:", topic.name);
					result = true
					break
				}
			}

			return result
		}


		if (domains && topics && opinions && domainFilter && topicFilter) {

			if (domainFilter === "all") {
				topicsFiltered = topics
			} else {

				console.log("topicsInDomain:", topicsInDomain);
				topicsFiltered = topics.filter(function (topic) {
					return topic.domain == domainFilter;
				})
			}

			// Did the domain filter change?
			if (domainFilter != this.domainFilterOld) {
				console.log("SETTING TOPIC FILTER TO ALL TOPICS");
				topicFilter = "all"
			}

			if (topicFilter == "all") {
				if (domainFilter == "all") {
					opinionsFiltered = opinions
				} else {
					let topicsAllowed = getAllowedTopics(topics, domainFilter);
					opinionsFiltered = opinions.filter(function (opinion) {

						let result = false;
						result = topicIsAllowed(opinion.topic, topicsAllowed)
						return result
					})
				}
			} else {
				opinionsFiltered = opinions.filter(function (opinion) {
					return opinion.topic == topicFilter;
				})
			}
			this.domainFilterOld = domainFilter;
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

		// ----------------------------------------------------------------------------------------------------
		// ----------------------------------------------------------------------------------------------------
		// HTML
		// ----------------------------------------------------------------------------------------------------
		// ----------------------------------------------------------------------------------------------------

    return (
      <div id="returnBlock">

      	<div className="titleBar">feedbackr</div>
       	<div className="navBar">

          {/* ----- domain filter dropdown ----- */}
				{domains && domains.length > 0 ? (
					<DropDownMenu value={domainFilter} onChange={this.handleDomainDropdown}  >
						<MenuItem value={"all"} primaryText={"All Categories"} />
						{domains.map((domain, index) =>
							{
								return (
									<MenuItem value={domain.name} primaryText={domain.name} />
								);
							}
						)}
					</DropDownMenu>
					) : null
				}

        {/* ----- topic filter dropdown ----- */}
				{topicsFiltered && topicsFiltered.length > 0 ? (
					<DropDownMenu value={topicFilter} onChange={this.handleTopicDropdown}  >
						<MenuItem value={"all"} primaryText={this.getAllTopicsMenuPhrase(domainFilter)} />
						{topicsFiltered.map((topic, index) =>
							{
								return (
									<MenuItem value={topic.name} primaryText={topic.name} />
								);
							}
						)}
					</DropDownMenu>
					) : null
				}

       	</div>

        {/* ----- opinion list ----- */}

        <div>
					<h2 className="opinionList-title">Opinions on <span className="opinionList-title-topic">{this.getAllTopicsMenuPhrase(domainFilter)}</span></h2>
					{opinionsFiltered && opinionsFiltered.length > 0 ? (
						<List className="opinionList">
							{opinionsFiltered.map((opinion, index) => {
								return (
									<div>
										<p className="opinionList-divider"></p>

										<ListItem className="opinionList-item"
											disabled
											leftIcon={<IconTagFace color={"orangered"} />}
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

          ) : null}






        </div>

      </div>
    );
  }
}

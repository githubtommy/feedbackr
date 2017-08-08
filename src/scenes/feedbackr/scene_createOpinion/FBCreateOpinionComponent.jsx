import React from 'react';
import { Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DomainDropdown from '../parts/DomainDropdown.jsx'
import TopicDropdown from '../parts/TopicDropdown.jsx'
import TopicHeader from './TopicHeader.jsx'
import DomainList from './DomainList.jsx'
import TopicList from './TopicList.jsx'
import OpinionForm from './OpinionForm.jsx'
import TopicForm from './TopicForm.jsx'
import UserForm from './UserForm.jsx'
import FlatButton from 'material-ui/FlatButton';
import IconChevronLeft from 'material-ui-icons/ChevronLeft';

import '../scene_welcome2/css/fbWelcome2b.css'
import '../../../app/pills.css'
import '../../../app/fonts/kudos_fonts.css'
import DataHelper from '../helpers/DataHelper.jsx'
import IconAddCircle from 'material-ui-icons/AddCircle'
import IconButton from 'material-ui/IconButton';

export default class FBCreateOpinionComponent extends React.Component {

	static get MODE_DOMAINS() { return 'MODE_DOMAINS'; }
	static get MODE_TOPICS() { return 'MODE_TOPICS'; }
	static get MODE_CREATE_OPINION() { return 'MODE_CREATE_OPINION'; }
	static get MODE_CREATE_TOPIC() { return 'MODE_CREATE_TOPIC'; }
	static get MODE_CREATE_USER() { return 'MODE_CREATE_USER'; }
  constructor(props) {
    super(props);
    this.state = {
			mode: FBCreateOpinionComponent.MODE_DOMAINS
    }

		this.handleDomainDropdown = this.handleDomainDropdown.bind(this);
		this.handleTopicDropdown = this.handleTopicDropdown.bind(this);
//		this.handleAddOpinionButton = this.handleAddOpinionButton.bind(this)
		this.handleGoDomainsTap = this.handleGoDomainsTap.bind(this)
		this.handleGoTopicsTap = this.handleGoTopicsTap.bind(this)
		this.handleAddTopicTap = this.handleAddTopicTap.bind(this)
		this.handleAddUserTap = this.handleAddUserTap.bind(this)
		this.handleExitUserCreationTap = this.handleExitUserCreationTap.bind(this)
		this.addTopic = this.addTopic.bind(this)
		this.addOpinion = this.addOpinion.bind(this)
		this.addUser = this.addUser.bind(this)

  }

	componentDidMount() {;
    this.props.getFeedback();
  }

	handleDomainTap(domain) {
		console.log("handleDomainTap");
		console.log("domain:", domain);
		console.log("this:", this);
		console.log("this.state:", this.state);
		console.log("this.state.mode:", this.state.mode);
		this.setState({mode: FBCreateOpinionComponent.MODE_TOPICS})
		this.props.setDomainFilter(domain.name)
	}

	handleGoDomainsTap() {
		console.log("handleGoDomainsTap");
		this.setState({mode: FBCreateOpinionComponent.MODE_DOMAINS})
	}

	handleGoTopicsTap() {
		this.setState({mode: FBCreateOpinionComponent.MODE_TOPICS})
	}

	handleTopicTap(topic) {
		console.log("handleTopicTap");
		console.log("topic:", topic);
		this.props.setTopicFilter(topic.name)
		this.setState({mode: FBCreateOpinionComponent.MODE_CREATE_OPINION})
	}

	handleAddUserTap() {
		console.log("handleAddUserTap");
		this.setState({mode: FBCreateOpinionComponent.MODE_CREATE_USER})
	}

	handleExitUserCreationTap() {
		this.setState({mode: FBCreateOpinionComponent.MODE_DOMAINS})
	}

	handleDomainDropdown(event, index, value) {
		this.props.setDomainFilter(value);
	}

	handleTopicDropdown(event, index, value) {
		this.props.setTopicFilter(value);
	}

	handleAddTopicTap(event) {
		this.setState({mode: FBCreateOpinionComponent.MODE_CREATE_TOPIC})
	}

	addTopic(topicValue, domainName) {
		console.log("addTopic");
		console.log("topicValue:", topicValue);
		console.log("domainName:", domainName);
		console.log("this.props:", this.props);
		const user = this.props.userReducer.user
		this.props.addTopic(topicValue, domainName, user);
	}

	addOpinion(opinionValue, topicName) {
		console.log("addOpinion");
		console.log("opinionValue:", opinionValue);
		console.log("topicName:", topicName);
		console.log("this.props:", this.props);
		this.props.addOpinion(opinionValue, topicName);
	}

	addUser(nameFirst, nameLast, location) {
		console.log("addUser");
		this.props.addUser(nameFirst, nameLast, location);
		this.setState({mode: FBCreateOpinionComponent.MODE_DOMAINS})
	}

	testFunc() {
		console.log("testFunc");
	}

	isDomainPickerMode() {
		return this.state.mode === FBCreateOpinionComponent.MODE_DOMAINS
	}

	isTopicPickerMode() {
		return this.state.mode === FBCreateOpinionComponent.MODE_TOPICS
	}

	isCreateOpinionMode() {
		return this.state.mode === FBCreateOpinionComponent.MODE_CREATE_OPINION
	}

	isCreateTopicMode() {
		return this.state.mode === FBCreateOpinionComponent.MODE_CREATE_TOPIC
	}

	isCreateUserMode() {
		return this.state.mode === FBCreateOpinionComponent.MODE_CREATE_USER
	}

	renderDomainPicker() {

	}



  render() {
		console.log("--------------------------------------------------");

		console.log("RENDER");

		console.log("this.props.user:", this.props.user);
		let user
		let userName
		if (this.props.userReducer) {
		 user = this.props.userReducer.user
			userName = "pending"
			if (user) {
				userName = user.name_first + " " + user.name_last
			}

		}

		console.log("user:", user);
		console.log("userName:", userName);

		if (this.state.redirect) {
			return <Redirect push to={this.state.redirectUrl} />;
		}

		let { domains, topics, users, opinions } = this.props.feedbackObj;
		let { domainFilter } = this.props.domainFilterObj;
		let { topicFilter } = this.props.topicFilterObj;

		let topicsFiltered = [];
		let opinionsFiltered = [];
		let topicsInDomain = [];

		if (domains && topics && opinions && domainFilter && topicFilter) {

			//
			// set filtered topics
			//

			if (domainFilter === "all") {
				topicsFiltered = topics
			} else {

				console.log("topicsInDomain:", topicsInDomain);
				topicsFiltered = topics.filter(function (topic) {
					return topic.domain == domainFilter;
				})
			}

			//
			// update topicFilter
			//

			// If domainFilter changes, set topicFilter to "all"
			if (domainFilter != this.domainFilterOld) {
				topicFilter = "all"
			}

			//
			// filter the opinions based on domain/topic filters
			//

			if (topicFilter == "all") {
				if (domainFilter == "all") {
					opinionsFiltered = opinions
				} else {
					let topicsAllowed = DataHelper.getAllowedTopics(topics, domainFilter);
					opinionsFiltered = opinions.filter(function (opinion) {

						let result = false;
						result = DataHelper.topicIsAllowed(opinion.topic, topicsAllowed)
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

		console.log("======");
		console.log("RENDER THE HTML");
		console.log("======");

		let topicPickerShouldShow = this.isTopicPickerMode() && topicsFiltered && topicsFiltered.length > 0
		let domainPickerShouldShow = this.isDomainPickerMode() && domains && domains.length > 0
		let opinionCreatorShouldShow = this.isCreateOpinionMode()
		let topicCreatorShouldShow = this.isCreateTopicMode()
		let userCreatorShouldShow = this.isCreateUserMode()

		console.log("topicPickerShouldShow:", topicPickerShouldShow);
		console.log("domainPickerShouldShow:", domainPickerShouldShow);
		console.log("domainFilter:", domainFilter);

		return (
			<div id="returnBlock">

				{!userCreatorShouldShow ?
					<FlatButton
						label="Add User"
						labelPosition="after"
						icon={<IconAddCircle />}
						primary="true"
						onClick={this.handleAddUserTap} /> : null
				}

				{userCreatorShouldShow ?
					<div>
							<FlatButton
								label="Exit"
								labelPosition="after"
								icon={<IconChevronLeft />}
								primary="true"
								onClick={this.handleExitUserCreationTap} />
						<UserForm
							addUser={this.addUser}
						/>
					</div> : null
				}

				{domainPickerShouldShow ?
					<div>
					<DomainList
						domains={domains}
						handleDomainTap={this.handleDomainTap.bind(this)}
						/>
				</div> : ''}

				{topicPickerShouldShow ?
					<div>
						<FlatButton
							label="Categories"
							labelPosition="after"
							icon={<IconChevronLeft />}
							primary="true"
							onClick={this.handleGoDomainsTap} />

						<span className="opinionList-header-right">
							<IconButton
								iconStyle={{ height:36,  width:36}}
								style={{ height:72,  width:72, padding:16}}
								onTouchTap={this.handleAddTopicTap}
								>
								<IconAddCircle />
							</IconButton>
						</span>

						<TopicList
							topicsFiltered={topicsFiltered}
							handleTopicTap={this.handleTopicTap.bind(this)}
						/>
				</div> : ''}

				{topicCreatorShouldShow ?
					<div>
						<FlatButton
							label="Topics"
							labelPosition="after"
							icon={<IconChevronLeft />}
							primary="true"
							onClick={this.handleGoTopicsTap} />
					<TopicForm
						domainFilter={domainFilter}
						inputMaxLength={40}
						inputMinLength={5}
						addTopic={this.addTopic}
						/>
				</div> : ''}

				{opinionCreatorShouldShow ?
					<div>
					<FlatButton
						label="Topics"
						labelPosition="after"
						icon={<IconChevronLeft />}
						primary="true"
						onClick={this.handleGoTopicsTap} />
					<OpinionForm
						topicFilter={topicFilter}
						inputMaxLength={250}
						addOpinion={this.addOpinion}
						/>
				</div> : ''}


			</div>
    );
  }
}

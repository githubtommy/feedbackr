import React from 'react';
import { Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DomainDropdown from '../parts/DomainDropdown.jsx'
import TopicDropdown from '../parts/TopicDropdown.jsx'
import OpinionHeader from './OpinionHeader.jsx'
import OpinionList from './OpinionList.jsx'

import './css/fbWelcome2b.css'
import '../../../app/pills.css'
import '../../../app/fonts/kudos_fonts.css'
import DataHelper from '../helpers/DataHelper.jsx'


export default class FBWelcomeComponent2 extends React.Component {

  constructor() {
    super();
    this.state = {
    }

		this.handleDomainDropdown = this.handleDomainDropdown.bind(this);
		this.handleTopicDropdown = this.handleTopicDropdown.bind(this);
		this.handleAddOpinionButton = this.handleAddOpinionButton.bind(this)

  }

	componentDidMount() {;
    this.props.getFeedback();
  }

	handleTopicTap(value) {
		console.log("handleTopicTap");
		console.log("value:", value);
	}

	handleDomainDropdown(event, index, value) {
		this.props.setDomainFilter(value);
	}

	handleTopicDropdown(event, index, value) {
		this.props.setTopicFilter(value);
	}

	handleAddOpinionButton(event) {
		this.setState({redirect: true, redirectUrl: "/fb-create-opinion"});
	}

	testFunc() {
		console.log("testFunc");
	}

  render() {
		console.log("--------------------------------------------------");

		console.log("RENDER");
		console.log("this.props.user:", this.props.user);

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

		console.log("RETURN BLOCK");
		console.log("opinions:", opinions);
		console.log("domains:", domains);
		console.log("topics:", topics);
		console.log("domainFilter:", domainFilter);
		console.log("topicFilter:", topicFilter);

		return (
			<div id="returnBlock">

				{(domains && domains.length > 0) ?
					<div className="topButtonBar">
						<DomainDropdown
							domains={domains}
							domainFilter={domainFilter}
							changeHandler={this.handleDomainDropdown} />
						<TopicDropdown
							topicsFiltered={topicsFiltered}
							topicFilter={topicFilter}
							domainFilter={domainFilter}
							changeHandler={this.handleTopicDropdown} />
					</div>
				: null}

				{(opinionsFiltered && opinionsFiltered.length > 0) ?
					<div>

						<OpinionHeader
							domainFilter={domainFilter}
							topicFilter={topicFilter}
							domains={domains}
							addOpinionButtonHandler={this.handleAddOpinionButton}
						/>

						<OpinionList
							opinionsFiltered={opinionsFiltered}
							handleTopicTap={this.handleTopicTap}
							/>

					</div>
				:null}

			</div>
    );
  }
}

import React from 'react';
import {Grid, Row, Col, Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import ReactTimestamp from 'react-timestamp'
import { ListGroup } from "react-bootstrap";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// material-ui
import {List, ListItem} from 'material-ui/List';
import {Avatar} from 'material-ui'

import Divider from 'material-ui/Divider';
import IconChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import IconMoreVert from 'material-ui-icons/MoreVert'
import IconMusicNote from 'material-ui-icons/MusicNote'
import IconFace from 'material-ui-icons/TagFaces'
import IconThumbDown from 'material-ui-icons/ThumbDown'
import ActionGrade from 'material-ui/svg-icons/action/grade';

//import '../css/feedbackr.css'
import '../css/fbWelcome2b.css'
import '../css/listMod.css'
import '../../../app/pills.css'
import '../../../app/fonts/kudos_fonts.css'
//import { setDomainFilter } from '../actions/setDomainFilter'

// colors
import {pinkA200, blue600, red600, transparent} from 'material-ui/styles/colors';

export default class FBWelcomeComponent2 extends React.Component {

  constructor() {
    super();
		console.log("setting initial state");
    this.state = {
			MAX_INPUT_LENGTH: 150,
			remainingInputChars: 150,
      name: '',
			inputValue: ''
    };

		console.log("this.state:", this.state);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDomainDropdown = this.handleDomainDropdown.bind(this);
  }


  componentDidMount() {
		console.log("componentDidMount");
		this.props.setDomainFilter();
    this.props.getFeedback();
  }

	// onChange={e => this.setState({ name: e.target.value })}
	handleInputChange(event) {
		let value = event.target.value;
		let remainingChars = this.state.MAX_INPUT_LENGTH - value.length;
		this.setState({remainingInputChars: remainingChars});
		this.setState({ name: event.target.value })
	}

	handleDomainDropdown(key, event) {
		console.log("handleDomainDropdown:");
		this.props.setDomainFilter(key)
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

    return (
      <div id="returnBlock">


        {/* ----- material dynamic ----- */}

        <div>
					<h2>DYNAMIC OPINIONS</h2>
					{opinions && opinions.length > 0 ? (
						<List >
							{opinions.map((opinion, index) => {
								return (
									<div>

									<ListItem
										leftIcon={<ActionGrade color={pinkA200} />}
										primaryText={
												<div>
													<p>{opinion.body + opinion.body + opinion.body}</p>
													<p>{"— Elizabeth Montgomery"}</p>

												</div>
											}
										secondaryText={
											<div className="opinionListListItemFooter">
												<span className="footerItem left">{opinion.topic}</span>
												<span className="footerItem center">6 days ago</span>
											</div>
										}
										rightIcon={<IconChevronRight />} />
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

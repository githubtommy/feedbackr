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
import '../css/fbWelcome2.css'
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
		this.fakeOpinion1 = "The iphone is an amazing device. I love it to death. I could prolly live without it, but I'm not going to try. Now is the time for all good men to come to the aid of their country. The sly brown fox jumped over the lay dog. This block uses 250 chars."

		this.fakeOpinion2 = "I love my iphone to pieces"
		this.fakeOpinion3 = "It needs a battery that lasts at least two weeks and a button that can read your mind."
		this.fakeFooterText1 = "This is some fake footer text"

		this.fakePrimaryDiv = "<div className='opinionListPrimaryText'>{this.fakeOpinion2}</div>"

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
      <div>

        <div>

					<List>
						<ListItem
							primaryText={this.fakeOpinion1}
							leftIcon={<IconFace color={blue600} />}
							secondaryText={
								<div className="opinionListListItemFooter">
									<span className="footerItem left">Apple iPhone 5s</span>
									<span className="footerItem center">6 days ago</span>
									<span className="footerItem right">Brentley Smith</span>
								</div>
								}
						/>
						<ListItem
							primaryText={this.fakeOpinion2}
							leftIcon={<IconThumbDown color={blue600} />}
							secondaryText={
								<div className="opinionListListItemFooter">
									<span className="footerItem left">Apple iPhone 5s</span>
									<span className="footerItem center">6 days ago</span>
									<span className="footerItem right">Brentley Smith</span>
								</div>
								}
						/>
					</List>

        </div>




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





        {/* ----- material: earlier version ----- */}

        <div className="opinionList">
					<List>
						<div className="opinionListListItemDivider"></div>
						<ListItem
							className="opinionListListItem"
							leftIcon={<ActionGrade color={pinkA200} />}
							primaryText={this.fakeOpinion1}
							secondaryText={
								<div className="opinionListListItemFooter">
									<span className="footerItem left">Apple iPhone 5s</span>
									<span className="footerItem center">suggestion</span>
									<span className="footerItem right">6 days ago</span>
								</div>
							}
							rightIcon={<IconChevronRight />} />

						<div className="opinionListListItemDivider"></div>
						<ListItem
							className="opinionListListItem"
							primaryText={this.fakeOpinion1}
							rightIcon={<IconChevronRight />} />
						<div>
							<div className="footerLeft">Apple iPhone 5s</div>
							<div className="footerMiddle">suggestion</div>
							<div className="footerRight">6 days ago</div>
						</div>

					</List>
				</div>

      	<hr />
      	Bootstrap stuff below
      	<hr />


				<br />
				<br />
				<div><span className="kudoPillSecret">SUGGESTION</span></div>
				<br />
				<br />
				<Button className="pillify">BOOTSTRAP BUTTON</Button>

				{/* domain dropdown */}

				{domains && domains.length > 0 ? (
					<ButtonToolbar className="domainDropdown">
						<DropdownButton bsStyle="info" title={domainFilter} key="myKey" onSelect={this.handleDomainDropdown}>

							{domains.map((domain, index) =>
								{
									return (
										<MenuItem eventKey={domain.name} value={domain.name} >{domain.name} </MenuItem>
									);
								}
							)}

						</DropdownButton>
					</ButtonToolbar>
					) : <p>NO DOMAINS FOR DROPDOWN</p>
				}

        <div id="opinionList" className="meeting-list">
          <h2>opinions</h2>
					{opinions && opinions.length > 0 ? (
						<ListGroup componentClass="ul">
							{opinions.map((opinion, index) => {
								return (
									<Grid>
										<li key={index} className="list-group-item">
											<Row>
												<p className="opinionList content">{opinion.body}</p>
											</Row>
											<Row className="show-grid footer">
												<div className="col-sm-12 footer center-block">
														<Col xs={4} className="ago"><ReactTimestamp time={opinion.date} format="ago" /> ago</Col>
														<Col xs={4} className="topic">{opinion.topic}</Col>
														<Col xs={4} className="type"><span className="typePill">{opinion.type.toUpperCase()}</span></Col>
												</div>
											</Row>
										</li>
									</Grid>
								);
							})}

						</ListGroup>
          ) : <p>NO OPINIONS</p>}

        </div>

				<div>
					{topicsFiltered && topicsFiltered.length > 0 ? (
						<select>
							{topicsFiltered.map((topic, index) => {
								return (
									<option key={index} value={topic.name}>{topic.name}</option>
								);
							})}

						</select>
					) : <p>NO TOPICS FOR DROPDOWN</p>}

				</div>



        <div className="well">
          <h1>XXXXX</h1>
        </div>
        <div className="bg-warning meeting-summary">
          <div className="row">
           	<br />
            <div className="col-xs-4 col-xs-offset-1">
							<ButtonToolbar>
								<DropdownButton title="Subject" id="dropdown-size-large">
									<MenuItem eventKey="1">Animals</MenuItem>
									<MenuItem eventKey="2">Plants action</MenuItem>
									<MenuItem eventKey="3">Science</MenuItem>
								</DropdownButton>
							</ButtonToolbar>
							<br />
            </div>
          </div>


        </div>
        <div className="bg-info meeting-form">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
              	<br />
               	<p>I think I know that...</p>
                <textarea
                 	className="form-control input-lg"
                 	rows="3"
                 	maxLength={this.state.MAX_INPUT_LENGTH}
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange.bind(this)}
                />
                <br />
                <p>Remaining Characters: {this.state.remainingInputChars}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.onAddFact(this.state.name)}
                >Submit!</button>
                <br />
                <br />
              </div>
            </div>
        </div>

      </div>
    );
  }
}

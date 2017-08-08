import React from 'react'
import './css/fbWelcome2b.css'
import IconButton from 'material-ui/IconButton';
import IconTagFace from 'material-ui-icons/TagFaces'

import {List, ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import IconMoreVert from 'material-ui-icons/MoreVert'
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';



const OpinionList = (props) => {
	let opinionsFiltered = props.opinionsFiltered
	let handleTopicTap = props.handleTopicTap
	console.log("opinionsFiltered:", opinionsFiltered);

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
										onClick={handleTopicTap.bind(null, opinion.topic)}>{opinion.topic}</Chip>
									<Chip className="opinionList-secondary-item right" backgroundColor={"#ffffff"} labelColor={"#aaaaaa"}>6 days ago</Chip>
								</div>
							}
						/>
					</div>
				);
			})}
		</List>

	)
}

export default OpinionList

import React from 'react'
import '../scene_welcome2/css/fbWelcome2b.css'
import IconButton from 'material-ui/IconButton';
import IconTagFace from 'material-ui-icons/TagFaces'

import {List, ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import IconMoreVert from 'material-ui-icons/MoreVert'
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';

import './css/topic-list.css'

const TopicList = (props) => {
	let topicsFiltered = props.topicsFiltered
	let handleTopicTap = props.handleTopicTap

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
			}
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

	const rightChip = (
		<Chip
			style={muiStyles.chip}
			onClick={handleTopicTap.bind(null, "HANSI")}
			>
			{"HANSI"}
		</Chip>

	)

	/*

												<Chip
												style={muiStyles.chip}
												onClick={handleTopicTap.bind(null, topic.domain)}
												>
												{topic.domain}
											</Chip>

											*/

	return (

		<List className="topicList">
			{topicsFiltered.map((topic, index) => {
				return (
					<div>
						<p className="topicList-divider"></p>

						<ListItem
							id="myListItem"
							style={muiStyles.listItem}

							rightIconButton={rightChip}
							primaryText={
									<div className="topicList-primaryXXX">
										<span className="topicList-primary-item left">{topic.name}</span>
										<span className="topicList-primary-item center">

										</span>

									</div>
								}

						/>
					</div>
				);
			})}
		</List>

	)
}

export default TopicList

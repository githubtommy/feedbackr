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
	let domains = props.domains
	let handleDomainTap = props.handleDomainTap

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
			onClick={handleDomainTap.bind(null, "HANSI")}
			>
			{"HANSI"}
		</Chip>

	)

	return (
		<div>
			<h2>Choose a category</h2>
			<List className="topicList">
				{domains.map((domain, index) => {
					return (
						<div>
							<ListItem
								id="myListItem"
								style={muiStyles.listItem}
								onClick={handleDomainTap.bind(null, domain)}

								rightIconButton={rightChip}
								primaryText={
										<div className="topicList-primaryXXX">
											<span className="topicList-primary-item left">{domain.name}</span>
											<span className="topicList-primary-item center">

											</span>

										</div>
									}

							/>
						</div>
					);
				})}
			</List>
		</div>

	)
}

export default TopicList

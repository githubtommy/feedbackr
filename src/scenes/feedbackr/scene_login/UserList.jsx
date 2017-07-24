import React from 'react'
import '../scene_welcome2/css/fbWelcome2b.css'
import IconButton from 'material-ui/IconButton';
import IconTagFace from 'material-ui-icons/TagFaces'

import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

//import './css/topic-list.css'

const UserList = (props) => {

	let topicsFiltered = props.topicsFiltered
	let handleUserSelect = props.handleUserSelect

	console.log("props:", props);
	console.log("props.users:", props.users);

	const muiStyles = {
			listItem: {
				color: 'black',
				height: '44px',
				fontSize: '14px',
				borderTop: '1px gray solid',
				padding: '0 16px'
			}
	}

	return (

		<List className="userList">
			{props.users.map((user, index) => {
				return (
					<div>
						<p className="topicList-divider"></p>

						<ListItem
							id="myListItem"
							style={muiStyles.listItemXXX}
							onClick={handleUserSelect.bind(null, user)}
							primaryText={user.name_last + ", " + user.name_first}
							secondaryText={user.location}
						/>
					</div>
				);
			})}
		</List>

	)
}

export default UserList

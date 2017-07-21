import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

const TopicDropdown = (props) => {
	let topicsFiltered = props.topicsFiltered
	let topicFilter = props.topicFilter
	let domainFilter = props.domainFilter
	let changeHandler = props.changeHandler

	const getAllTopicsMenuPhrase = function(domainFilter) {
		console.log("getAllTopicsMenuPhrase");
		let result;
		if (domainFilter == "all") {
			result = "choose a category first"
		} else {
			result = "All Topics in " + domainFilter
		}
		return result

	}
	return (
		<DropDownMenu
			value={topicFilter}
			onChange={changeHandler}
			disabled={domainFilter==="all"}
			style={{backgroundColor: '#ff3636', color: '#ffffff', minWidth: "250px"}}
			labelStyle={{color: 'white'}}
			>
			<MenuItem
				value={"all"}
				primaryText={getAllTopicsMenuPhrase(domainFilter)}
				style={{backgroundColor: '#ff3636', color: '#ffffff', minWidth: "250px"}}
				/>
			{topicsFiltered.map((topic, index) =>
				{
					return (
						<MenuItem value={topic.name} primaryText={topic.name} />
					);
				}
			)}
		</DropDownMenu>
	)
}

export default TopicDropdown

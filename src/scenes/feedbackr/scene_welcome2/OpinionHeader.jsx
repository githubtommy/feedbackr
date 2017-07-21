import React from 'react'
import './css/fbWelcome2b.css'
import IconButton from 'material-ui/IconButton';
import IconAddCircle from 'material-ui-icons/AddCircle'

const OpinionHeader = (props) => {
	let domainFilter = props.domainFilter
	let topicFilter = props.topicFilter
	let domains = props.domains
	let addOpinionButtonHandler = props.addOpinionButtonHandler


	const getPhraseForOpinionHeader = function(domainFilter, topicFilter) {
		// Opinion on ____
		let result
		if (domainFilter === "all") {
			console.log("CASE 11");
			if (topicFilter === "all") {
				console.log("CASE 22");
				result = "All topics in all categories"
			} else {
				console.log("CASE 33");
				result = "All topics in category " + domainFilter
			}
		} else {
			console.log("CASE 44");
			if (topicFilter === "all") {
				console.log("CASE 55");
				result = "All topics in category " + domainFilter
			} else {
				console.log("CASE 66");
				result = topicFilter
			}
		}
		console.log("will return result");
		return result
	}

	return (
		<div className="opinionList-header">

			<span className="opinionList-header-left">
				<h2 className="opinionList-title">Opinions on <span className="opinionList-title-topic">{getPhraseForOpinionHeader(domainFilter, topicFilter)}</span></h2>
			</span>

			<span className="opinionList-header-right">
				<IconButton
					iconStyle={{ height:36,  width:36}}
					style={{ height:72,  width:72, padding:16}}
					onTouchTap={addOpinionButtonHandler}
					>
					<IconAddCircle />
				</IconButton>
			</span>

		</div>
	)

}

export default OpinionHeader

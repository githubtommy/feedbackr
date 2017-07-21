
export getAllowedTopics = (topics, domainFilter) => (
	let result = []
	for (var i = 0; i < topics.length; i++) {
		let topic = topics[i]
		console.log(i + ". topic:", topic);
		if (topic.domain === domainFilter) {
			result.push(topic)
		}
	}
	return result
)


const DataHelper = {

	testFunc: function(msg) {
		return "Hello " + msg
	},

	getAllowedTopics: function (topics, domainFilter) {
		let result = []
		for (var i = 0; i < topics.length; i++) {
			let topic = topics[i]
			console.log(i + ". topic:", topic);
			if (topic.domain === domainFilter) {
				result.push(topic)
			}
		}
		return result
	},

	topicIsAllowed: function (topicToMatch, topics) {
		console.log("topicIsAllowed");
			let result = false
			for (var i = 0; i < topics.length; i++) {
    		let topic = topics[i];
				if (topic.name === topicToMatch) {
					console.log("FOUND A MATCH:", topic.name);
					result = true
					break
				}
			}
			return result
	}

}



export default DataHelper

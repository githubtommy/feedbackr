import { connect } from 'react-redux';
import { getFeedback } from '../actions/get_feedback';
import { setDomainFilter } from '../actions/setDomainFilter';
import { setTopicFilter } from '../actions/setTopicFilter';
import { addDomain } from '../actions/add_domain';
import { watchEventDomainAdded } from '../actions/event_domain_added';
import FBWelcomeComponent2 from './FBWelcomeComponent2';
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

function mapStateToProps(state) {
	console.log("FBHomeContainer: mapStateToProps: ", state);
  return {
		feedbackObj: state.feedbackObj,
		domainFilterObj: state.domainFilterObj,
		topicFilterObj: state.topicFilterObj
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getFeedback,
	setDomainFilter,
	setTopicFilter,
	addDomain
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBWelcomeComponent2)

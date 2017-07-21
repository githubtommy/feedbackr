import { connect } from 'react-redux';
import { getFeedback } from '../actions/get_feedback';
import { setDomainFilter } from '../actions/setDomainFilter';
import { setTopicFilter } from '../actions/setTopicFilter';
import { addDomain } from '../actions/add_domain';
import { watchEventDomainAdded } from '../actions/event_domain_added';
import FBCreateOpinionComponent from './FBCreateOpinionComponent';
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
	console.log("FBCreateOpinionContainer: mapStateToProps: ", state);
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
)(FBCreateOpinionComponent)

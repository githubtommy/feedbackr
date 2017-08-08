import { connect } from 'react-redux';
import { getFeedback } from '../actions/get_feedback';
import { addTopic } from '../actions/add_topic';
import { addOpinion } from '../actions/add_opinion';
import { addUser } from '../actions/add_user';
import { setDomainFilter } from '../actions/setDomainFilter';
import { setTopicFilter } from '../actions/setTopicFilter';
import { addDomain } from '../actions/add_domain';
import { watchEventDomainAdded } from '../actions/event_domain_added';
import FBCreateOpinionComponent from './FBCreateOpinionComponent';
import { bindActionCreators } from 'redux'
//import userReducer from './user/userState'


function mapStateToProps(state) {
	console.log("FBCreateOpinionContainer: mapStateToProps: ", state);
  return {
		feedbackObj: state.feedbackObj,
		domainFilterObj: state.domainFilterObj,
		topicFilterObj: state.topicFilterObj,
		userReducer: state.userReducer
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getFeedback,
	addTopic,
	addOpinion,
	addUser,
	setDomainFilter,
	setTopicFilter,
	addDomain
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBCreateOpinionComponent)

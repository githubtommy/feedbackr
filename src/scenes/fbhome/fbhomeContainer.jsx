import { connect } from 'react-redux';
import { getDomain } from '../../redux/feedbackr/actions/get_domain';
import { getTopic } from '../../redux/feedbackr/actions/get_topic';
import { addDomain } from '../../redux/feedbackr/actions/add_domain';
import { watchEventDomainAdded } from '../../redux/feedbackr/actions/event_domain_added';
import FBHomeComponent from './FBHomeComponent';

function mapStateToProps(state) {
  return {
    domains: state.domains,
		topics: state.topics,
		users: state.users,
		opinions: state.opinions
  };
}

function mapDispatchToProps(dispatch) {
  watchEventDomainAdded(dispatch);
  return {
    onGetDomain: () => dispatch(getDomain()),
    onGetTopic: () => dispatch(getTopic()),
    onAddDomain: (value) => dispatch(addDomain(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBHomeComponent)

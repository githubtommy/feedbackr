import { connect } from 'react-redux';
import { getFeedback } from '../../redux/feedbackr/actions/get_feedback';
import { addDomain } from '../../redux/feedbackr/actions/add_domain';
import { watchEventDomainAdded } from '../../redux/feedbackr/actions/event_domain_added';
import FBHomeComponent from './FBHomeComponent';

function mapStateToProps(state) {
	console.log("FBHomeContainer: mapStateToProps: ", state);
  return {
		feedbackObj: state.feedbackObj
  };
}

function mapDispatchToProps(dispatch) {
  watchEventDomainAdded(dispatch);
  return {
    onGetFeedback: () => dispatch(getFeedback()),
    onAddDomain: (value) => dispatch(addDomain(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBHomeComponent)

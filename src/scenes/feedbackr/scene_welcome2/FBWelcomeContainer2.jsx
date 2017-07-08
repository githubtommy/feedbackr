import { connect } from 'react-redux';
import { getFeedback } from '../actions/get_feedback';
import { setDomainFilter } from '../actions/setDomainFilter';
import { addDomain } from '../actions/add_domain';
import { watchEventDomainAdded } from '../actions/event_domain_added';
import FBWelcomeComponent2 from './FBWelcomeComponent2';
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
	console.log("FBHomeContainer: mapStateToProps: ", state);
  return {
		feedbackObj: state.feedbackObj,
		domainFilterObj: state.domainFilterObj
  };
}

//function mapDispatchToProps(dispatch) {
//  watchEventDomainAdded(dispatch);
//  return {
//    onGetFeedback: () => dispatch(getFeedback()),
//		setDomainFilter: (value) => dispatch(setDomainFilter(value)),
//    onAddDomain: () => dispatch(addDomain())
//  };
//}

const mapDispatchToProps = dispatch => bindActionCreators({
	getFeedback,
	setDomainFilter,
	addDomain
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBWelcomeComponent2)

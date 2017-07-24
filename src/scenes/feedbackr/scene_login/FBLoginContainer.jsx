import { connect } from 'react-redux';
import { getFeedback } from '../actions/get_feedback';

import FBLogin from './FBLogin';
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
	console.log("FBLoginContainer: mapStateToProps: ", state);
  return {
		feedbackObj: state.feedbackObj
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getFeedback
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBLogin)

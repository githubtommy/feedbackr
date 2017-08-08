import { connect } from 'react-redux';
import { getFeedback } from '../actions/get_feedback';
import { userReducer } from '../../../app/user/userState'
import { getUser } from '../../../app/user/userState';
import { setUser } from '../../../app/user/userState';

import FBLogin from './FBLogin';
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
	console.log("FBLoginContainer: mapStateToProps: ", state);
  return {
		feedbackObj: state.feedbackObj,
		userReducer: state.userReducer
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
	getFeedback,
	getUser,
	setUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FBLogin)

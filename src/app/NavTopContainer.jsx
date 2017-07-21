import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavTop from './NavTop.jsx'

import { Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
	goHome: () => push("/"),
	goRead: () => push("/fbwelcome2"),
	goCreate: () => push("/fb-create-opinion")

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavTop)

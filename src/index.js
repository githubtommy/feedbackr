import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './app/store'
import App from './app/app.jsx'

import 'sanitize.css/sanitize.css'
import './app/index.css'

import './app/bootstrap-3.3.7-dist/css/bootstrap.css'
import './app/bootstrap-3.3.7-dist/css/bootstrap.css.map'
import './app/bootstrap-3.3.7-dist/css/bootstrap-theme.css'
import './app/bootstrap-3.3.7-dist/css/bootstrap-theme.css.map'

// For material-ui
//import 'app/roboto.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for material-ui because onClick is not fast enough .
// This dependency is temporary and will eventually go away
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import { Button } from 'react-bootstrap';

// For tap events in material-ui
// Inject this in index.js so it is injected only once per app load
import injectTapEventPlugin from 'react-tap-event-plugin';
import InjectTapEventPlugin from 'react-tap-event-plugin'

const target = document.querySelector('#root')

InjectTapEventPlugin()

render(
	<MuiThemeProvider>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<App />
				</div>
			</ConnectedRouter>
		</Provider>
	</MuiThemeProvider>,
  target
)

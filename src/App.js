import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import { ConnectedRouter } from 'connected-react-router'

import { userManager } from './Auth'
import { ShellRouter } from './Shell'

const App = ({ store, history }) => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <ConnectedRouter history={history}>
        <ShellRouter />
      </ConnectedRouter>
    </OidcProvider>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App

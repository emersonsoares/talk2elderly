import { createStore, compose, applyMiddleware } from 'redux'
import createOidcMiddleware from 'redux-oidc'

import history from './history'
import createRootReducer from './createRootReducer'
import { userManager } from '../Auth'
import { routerMiddleware } from 'connected-react-router'

const oidcMiddleware = createOidcMiddleware(userManager)

const createStoreWtMiddleware = compose(
  applyMiddleware(routerMiddleware(history), oidcMiddleware)
)(createStore)

const store = createStoreWtMiddleware(
  createRootReducer(history),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

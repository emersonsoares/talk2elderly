import React from 'react'
import { Switch, Route } from 'react-router'

import { Login, Logout, Callback, PrivateRoute } from '../Auth'
import ShellContainer from './ShellContainer'

const ShellRouter = () => (
  <Switch>
    <Route path='/auth/login' component={Login} />
    <Route path='/auth/logout' component={Logout} />
    <Route path='/auth/callback' component={Callback} />
    <PrivateRoute path='/' component={ShellContainer} />
  </Switch>
)

export default ShellRouter

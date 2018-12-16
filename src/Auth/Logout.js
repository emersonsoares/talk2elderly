import { Component } from 'react'
import userManager from './userManager'

class Logout extends Component {
  componentDidMount () {
    userManager.signoutRedirect()
    userManager.removeUser()
  }

  render () {
    return null
  }
}

export default Logout

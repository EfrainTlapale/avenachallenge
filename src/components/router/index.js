import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProfileSummary from '../profile/profileSummary'
import glamorous from 'glamorous'
import EditProfile from '../profile/editProfile'

const Container = glamorous.div({
  marginTop: '2rem'
})

class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Container className="container">
          <Route exact path='/' render={() => <ProfileSummary onLogout={this.props.onLogout}/> }/>
          <Route exact path='/edit' component={EditProfile}/>
        </Container>
      </Router>
    )
  }
}

export default AppRouter

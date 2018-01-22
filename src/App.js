import React, { Component } from 'react'
import Login from './components/login'
import Router from './components/router'

class App extends Component {
  state = {
    loggedIn: !!window.localStorage.getItem('jwt')
  };

  handleLogin = () => {
    this.setState(() => ({loggedIn: true}))
  }

  handleLogout = () => {
    window.localStorage.removeItem('jwt')
    this.setState(() => ({loggedIn: false}))
  }

  render () {
    return (
      <div>
        {this.state.loggedIn
          ? <Router onLogout={this.handleLogout}/>
          : <Login onLogin={this.handleLogin} />
        }
      </div>
    )
  }
}

export default App

import React, {Component} from 'react'
import glamorous from 'glamorous'
import yup from 'yup'
import PropTypes from 'prop-types'

const Container = glamorous.div({
  height: '100vh',
  width: '100vw',
  backgroundColor: '#EF5350',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const emailSchema = yup.string().email()

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  }

  state = {
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    },
    loading: false
  }

  handleInputChange = async (e) => {
    const field = e.target.id
    const value = e.target.value
    this.setState((prevState) => {
      const newState = {...prevState[field], ...{value}}
      return {
        [field]: newState
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const isEmailValid = await emailSchema.isValid(this.state.email.value)
    if (this.state.email.value && isEmailValid) {
      window.localStorage.setItem('jwt', 'jwtfromeserver')
      this.props.onLogin()
    } else {
      this.setState((prevState) => {
        return {
          email: {...prevState.email, ...{error: 'Please type a valid email'}}
        }
      })
    }
  }

  render () {
    return (
      <Container>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.handleInputChange}
                />
                {this.state.email.error && <small className="form-text text-muted">{this.state.email.error}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </Container>
    )
  }
}

export default Login

import React, {Component} from 'react'
import getProfile from '../../mockedData/getProfile'
import Loader from 'react-spinkit'
import glamorous from 'glamorous'
import {Link} from 'react-router-dom'

const CenteredContent = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

class Summary extends Component {
  state = {
    profile: {},
    loading: true
  }

  async componentDidMount () {
    const profile = await getProfile()
    this.setState(() => {
      return {
        profile,
        loading: false
      }
    })
  }
  render () {
    return (
      <React.Fragment>
        {this.state.loading
          ? <CenteredContent>
            <Loader/>
          </CenteredContent>
          : <div className="row">
            <div className="col-md-3">
              <div className="card col-md-12" style={{marginBottom: '20px', position: 'sticky', top: '2rem'}}>
                <img src={this.state.profile.picture} />
                <div className="card-body">
                  {this.state.profile.active && <span className="badge badge-success">Active</span>}
                  <h4>{this.state.profile.name}</h4>
                  <p>{this.state.profile.alias}</p>
                  <h5>{this.state.profile.title}</h5>
                  <p>{this.state.profile.about}</p>
                  <p>{this.state.profile.email}</p>
                  <p>{this.state.profile.clients} clients</p>
                  <a href={this.state.profile.link} className="badge badge-light">App Link</a>
                  <a href={'https://instagram.com/' + this.state.profile.instagram} className="badge badge-light">Instagram</a>
                  <a href={this.state.profile.facebook} className="badge badge-light">Facebook</a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card col-md-12" style={{marginBottom: '50px'}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-10">
                      <h3>Profile Summary</h3>
                      <Link to="/edit"><button className="btn btn-info">Edit Profile</button></Link>
                    </div>
                    <div className="col-md-2">
                      <button className="btn btn-primary" onClick={this.props.onLogout}>Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-md-12" style={{marginBottom: '20px'}}>
                <div className="card-body">
                  <h3 className='card-title'>Education</h3>
                  <ul className="list-group list-group-flush">
                    {this.state.profile.education.map(item => (
                      <li className="list-group-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card col-md-12" style={{marginBottom: '20px'}}>
                <div className="card-body">
                  <h3 className='card-title'>Specialities</h3>
                  <ul className="list-group list-group-flush">
                    {this.state.profile.specialities.map(item => (
                      <li className="list-group-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card col-md-12" style={{marginBottom: '20px'}}>
                <div className="card-body">
                  <h3 className='card-title'>Expertise</h3>
                  <ul className="list-group list-group-flush">
                    {this.state.profile.expertise.map(item => (
                      <li className="list-group-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card col-md-12" style={{marginBottom: '20px'}}>
                <div className="card-body">
                  <h3 className='card-title'>Languages</h3>
                  <ul className="list-group list-group-flush">
                    {this.state.profile.languages.map(item => (
                      <li className="list-group-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card col-md-12" style={{marginBottom: '20px'}}>
                <div className="card-body">
                  <h3 className='card-title'>Subscription</h3>
                  <p>{this.state.profile.subscriptionTerms}</p>
                  <p>{this.state.profile.subscriptionDescription}</p>
                </div>
              </div>
              <div className="card col-md-12" style={{marginBottom: '20px'}}>
                <div className="card-body">
                  <h3 className='card-title'>Payment</h3>
                  <p>Price: {this.state.profile.price}</p>
                  <p>Payment Code: {this.state.profile.paymentCode}</p>
                  <p>Payment Method: {this.state.profile.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default Summary

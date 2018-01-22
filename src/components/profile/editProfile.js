import React, {Component} from 'react'
import getProfile from '../../mockedData/getProfile'

const textFields = [
  {value: 'name', label: 'Name'},
  {value: 'title', label: 'Title'},
  {value: 'email', label: 'Email'},
  {value: 'about', label: 'About'},
  {value: 'subscriptionTerms', label: 'Subscription Terms'},
  {value: 'subscriptionDescription', label: 'Subsctiption Desctiption'},
  {value: 'price', label: 'Price'},
  {value: 'paymentMethod', label: 'Payment Method'},
  {value: 'instagram', label: 'Instagram'},
  {value: 'youtube', label: 'Youtube'},
  {value: 'facebook', label: 'Facebook'},
  {value: 'paymentCode', label: 'Payment Code'},
  {value: 'link', label: 'Link'}
]

class EditProfile extends Component {
  state = {
    active: false,
    about: '',
    alias: '',
    education: [],
    email: '',
    expertise: '',
    facebook: '',
    indentification: '',
    instagram: '',
    languages: [],
    link: '',
    name: '',
    paymentCode: '',
    paymentMethod: '',
    price: '',
    specialities: [],
    subscriptionDescription: '',
    subscriptionTerms: '',
    title: '',
    youtube: '',
    picture: ''
  }
  async componentDidMount () {
    const profile = await getProfile()
    this.setState(() => {
      return {...profile}
    })
  }

  handleTextInputChange = (e) => {
    const field = e.target.id
    const value = e.target.value
    this.setState(() => ({[field]: value}))
  }

  handleFileSelection = (e) => {
    const reader = new window.FileReader()
    const file = e.target.files[0]
    reader.onloadend = () => {
      this.setState(() => ({picture: reader.result}))
    }
    reader.readAsDataURL(file)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Data to be sended to update')
    console.log(this.state)
  }

  render () {
    return (
      <div className="card">
        <div className="card-body">
          <form>
            <img src={this.state.picture} alt="..." className="img-thumbnail" />
            <input type="file" className="btn btn-ligth" onChange={this.handleFileSelection}/>
            <div className="form-check" style={{marginBottom: '20px'}}>
              <input className="form-check-input" type="checkbox" checked={this.state.active} id="active"/>
              <label className="form-check-label" htmlFor="active">
            Active
              </label>
            </div>
            {textFields.map(field => (
              <div className="form-group" key={field.value}>
                <label htmlFor={field.value}>{field.label}</label>
                <input type="text" className="form-control" onChange={this.handleTextInputChange} value={this.state[field.value]} id={field.value}/>
              </div>
            ))}
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditProfile

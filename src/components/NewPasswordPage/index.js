import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class NewPasswordPage extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    passwordsList: [],
  }

  onAddBottom = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newList = {
      id: v4(),
      websitename: websiteName,
      passwords: password,
      username: userName,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newList],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {websiteName, userName, password} = this.state

    return (
      <div>
        <div>
          <h1>Add New Password</h1>
          <div>
            <form onSubmit={this.onAddBottom}>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  className="website"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={websiteName}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  className="username"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={userName}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  className="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
            </form>
          </div>
          <button type="submit"> Add </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="Password Manager"
          />
        </div>
      </div>
    )
  }
}

export default NewPasswordPage

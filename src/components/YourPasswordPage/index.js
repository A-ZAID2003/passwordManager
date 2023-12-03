import PasswordsList from '../PasswordsList'

import './index.css'

const YourPasswordPage = props => {
  const {passwordsList} = props

  deletePassItem = passwordId => {
    const {passwordsList} = this.props

    this.setState({
      passwordsList: passwordsList.filter(pass => password.id !== passwordId),
    })
  }

  return (
    <div>
      <div>
        <h1>Your Passwords</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input type="search" />
        </div>
      </div>

      {passwordsList.map(eachpassword => (
        <PasswordsList
          key={eachpassword.id}
          passwordDetails={eachpassword}
          deletePassItem={this.deletePassItem}
        />
      ))}

      <div>
        <input type="check-box" />
        <h1>Show Passwords</h1>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
          alt="no passwords"
        />
      </div>
    </div>
  )
}

export default YourPasswordPage

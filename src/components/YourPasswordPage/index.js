import PasswordsList from '../PasswordsList'

import './index.css'

const YourPasswordPage = () => (
  <div>
    <div>
      <h1>Your Passwords</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          alt="search"
        />
        <input />
      </div>
    </div>

    <PasswordsList />

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

export default YourPasswordPage

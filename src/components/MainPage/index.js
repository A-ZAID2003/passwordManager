import './index.css'

import YourPasswordPage from '../YourPasswordPage'
import NewPasswordPage from '../NewPasswordPage'

const MainPage = () => (
  <div>
    <div>
      <img
        alt="app logo"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
      />
    </div>
    <NewPasswordPage />
    <YourPasswordPage />
  </div>
)

export default MainPage

import './index.css'

const PasswordsList = props => {
  const {details} = props
  const {websiteName, userName, password} = details

  return (
    <ul>
      <li>
        <div>
          <p>{websiteName}</p>
          <p>{userName}</p>
          <p>{password}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            onClick={this.onClickDelete()}
          />
        </div>
      </li>
    </ul>
  )
}
export default PasswordsList

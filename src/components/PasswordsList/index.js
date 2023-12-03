import './index.css'

const PasswordsList = props => {
  const {details} = props
  const {id, websiteName, userName, password} = details

  const onDeletePassItem = () => {
    const {deletePassItem} = props
    deletePassItem(id)
  }

  return (
    <ul>
      <li>
        <div>
          <p>{websiteName}</p>
          <p>{userName}</p>
          <p>{password}</p>
        </div>
        <div>
          <button onClick={onDeletePassItem} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </ul>
  )
}
export default PasswordsList

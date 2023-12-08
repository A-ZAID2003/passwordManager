import './index.css'

const PasswordsList = props => {
  const {itemDetails, deletePassItem} = props
  const {id, websitename, username, passwords} = itemDetails

  const onDeletePassItem = () => {
    deletePassItem(id)
  }

  return (
    <ul>
      <li>
        <div>
          <p>{websitename}</p>
          <p>{username}</p>
          <p>{passwords}</p>
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

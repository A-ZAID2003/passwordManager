import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import PasswordsList from '../PasswordsList'
import Header from '../Header'

import './index.css'

class NewPasswordPage extends Component {
    state = {
        websiteName: '',
        userName: '',
        password: '',
        passwordsList: [],
        searchInput: ''
    }

    noPasswordsView = () => (
        <div>
            <Header />
            <hr />
            <div>
                <input type="checkbox" id="showpass" value="showpass" />
                <label htmlFor="showpass">Show passwords</label>
            </div>
            <div>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                    alt="no passwords"
                />
                <p>No Passwords</p>
            </div>
        </div>
    )
    onChangeSearchInput = event => {
        this.setState({ searchInput: event.target.value })
    }
    deletePassItem = id => {
        const { passwordsList } = this.state
        const filteredDataList = passwordsList.filter(each => each.id !== id)
        this.setState({ passwordsList: filteredDataList })
    }

    passwordView = () => {
        const { passwordsList } = this.state
        return (
            <div>
                <Header count={passwordsList.length} />
                <hr />
                <div>
                    <input type="checkbox" id="showpass" value="showpass" />
                    <label htmlFor="showpass">Show passwords</label>
                </div>
                {searchResults.map(eachPassword => (
                    <PasswordsList
                        key={eachPassword.id}
                        itemDetails={eachPassword}
                        deletePassItem={this.deletePassItem}
                    />
                ))}
            </div>
        )
    }

    renderSavedPasswords = () => {
        const { passwordsList } = this.state
        const passwordLength = passwordsList.length

        return passwordLength > 0 ? this.passwordView() : this.noPasswordsView()
    }

    onAddBottom = event => {
        event.preventDefault()
        const { websiteName, userName, password } = this.state
        const newItem = {
            id: uuidv4(),
            websitename: websiteName,
            passwords: password,
            username: userName,
        }
        this.setState(prevState => ({
            passwordsList: [...prevState.passwordsList, newItem],
            websiteName: '',
            userName: '',
            password: '',
        }))
    }

    onChangeWebsite = event => {
        this.setState({ websiteName: event.target.value })
    }

    onChangeUsername = event => {
        this.setState({ userName: event.target.value })
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    render() {
        const { websiteName, userName, password } = this.state

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
                                    type="text"
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
                                    type="text"
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
                                    type="password"
                                    onChange={this.onChangePassword}
                                    value={password}
                                />
                            </div>
                            <button type="submit" data-testid="delete">
                                Add
              </button>
                        </form>
                    </div>
                    <div>
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                            alt="Password Manager"
                        />
                    </div>

                    <div>{this.renderSavedPasswords()}</div>
                </div>
            </div>
        )
    }
}

export default NewPasswordPage

import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {count, passwordsList} = this.props
    const {searchInput} = this.state
    const searchResults = passwordsList.filter(eachpass =>
      eachpass.name.includes(searchInput),
    )

    return (
      <div>
        <h1>
          Your Passwords <p>{count > 0 ? count : 0}</p>
        </h1>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
      </div>
    )
  }
}

export default Header

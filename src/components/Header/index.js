import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    const {count, passwordsList} = this.props

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

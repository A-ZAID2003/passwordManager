import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    count: 0,
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          Your Passwords<span>{count}</span>
        </h1>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input type="search" />
        </div>
      </div>
    )
  }
}

export default Header

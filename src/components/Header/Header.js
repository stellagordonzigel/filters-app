import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className="header-container">
        <h1>App Name</h1>
        <p>filters created with <a href="https://github.com/una/CSSgram">CSSGram</a></p>
      </div>
    )
  }
}

export default Header

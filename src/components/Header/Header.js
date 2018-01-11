import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className="header-container">
        <h1>Pix</h1>
        <p>Filters created with <a href="https://github.com/una/CSSgram" target="_blank" rel="noopener noreferrer">CSSGram</a></p>
      </div>
    )
  }
}

export default Header

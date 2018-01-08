import React, { Component } from 'react'

import './Image.scss'
import './Image.css'

class Image extends Component {
  render () {
    return (
      <div>
        <figure className="original" id="images">
          <img className="test-image" src="https://hdwallsource.com/img/2014/5/beach-scenery-18736-19215-hd-wallpapers.jpg" alt="test" />
        </figure>
      </div>
    )
  }
}

export default Image

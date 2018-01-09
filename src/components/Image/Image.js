import React, { Component } from 'react'

import './Image.scss'
import './Image.css'

class Image extends Component {
  render () {
    return (
      <div>
        {/*<div id="page-wrapper">
          <h1>Image File Reader</h1>
          <div>
            Select an image file:
            <input type="file" id="fileInput" />
          </div>
          <div id="fileDisplayArea"></div>
        </div>*/}
        <div>
          <figure className="original" id="images">
            <div className="image-location"></div>
            <img className="test-image" src="https://hdwallsource.com/img/2014/5/beach-scenery-18736-19215-hd-wallpapers.jpg" alt="test" />
          </figure>
        </div>
      </div>
    )
  }
}

export default Image

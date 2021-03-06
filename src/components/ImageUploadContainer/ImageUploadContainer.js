import React, { Component } from 'react'

import './ImageUploadContainer.css'

import SocialShare from '../SocialShare/SocialShare'

class ImageUploadContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: 'https://hdwallsource.com/img/2014/5/beach-scenery-18736-19215-hd-wallpapers.jpg'
    }

    this.handleImageUpload = this.handleImageUpload.bind(this)
  }

  handleImageUpload(e) {
    e.preventDefault()
    let file = e.target.files[0]
    let reader = new FileReader()
    let imgUrl = reader.readAsDataURL(file)

    reader.onload = () => {
      this.setState({
        imgUrl: reader.result
      })
    }
  }

  render() {
    return(
      <div>
        <img src={this.state.imgUrl} className='starting-image' id='images' alt='Uploaded photo to be manipulated.'/>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleImageUpload} />
        </form>
        <br />
        <SocialShare
          imgUrl ={this.state.imgUrl}
        />
      </div>
    )
  }
}

export default ImageUploadContainer

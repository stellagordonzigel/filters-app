import React, { Component } from 'react'

// import '../Image/Image.css'
import './ImageUploadContainer.css'

class ImageUploadContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: 'https://hdwallsource.com/img/2014/5/beach-scenery-18736-19215-hd-wallpapers.jpg',
      imageUpload: false,
      file: '',
      createImage: ''
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


  componentDidMount() {
    let image = new Image()
    image.src = this.state.imgUrl
    let canvas = this.refs.canvas
    canvas.width = image.width
    canvas.height = image.height
    let ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0)
  }


  render() {
    return(
      <div>
        <figure id="images" alt="test">
          <img src={this.state.imgUrl} className='starting-image'/>
        </figure>

        <div>
          <form onSubmit={this.handleSubmit}>
           <input type="file" onChange={this.handleImageUpload} />
          </form>
        </div>
          <canvas ref="canvas" className="canvas" />
      </div>
    )
  }
}

export default ImageUploadContainer

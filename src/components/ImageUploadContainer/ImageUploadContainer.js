import React, { Component } from 'react'

import '../Image/Image.css'

class ImageUploadContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: 'https://hdwallsource.com/img/2014/5/beach-scenery-18736-19215-hd-wallpapers.jpg',
      imageUpload: false,
      file: '',
      createImage: ''
    }
    console.log(this.state.imgUrl)

    this.handleImageUpload = this.handleImageUpload.bind(this)
  }


  handleImageUpload(e) {
    e.preventDefault()
    let file = e.target.files[0]
    let reader = new FileReader()
    let imgUrl = reader.readAsDataURL(file)
    console.log(imgUrl)
    console.log(this.state)


    reader.onload = () => {
      this.setState({
        imgUrl: reader.result
      })
      console.log(reader.result)
    }
  }

  componentDidMount() {
    let image = new Image()
    console.log(this.state.imgUrl)
    image.src = this.state.imgUrl
    let canvas = this.refs.canvas
    canvas.width = image.width
    canvas.height = image.height
    let ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0)
    console.log(canvas)
    console.log(canvas.width)
    console.log(canvas.height)
  }


  render() {
    let {createImage} = this.state
    console.log(this.state.imgUrl)
    console.log(this.state)
    console.log(createImage)
    let preview = null

    if (createImage) {
      preview = (<img src={createImage} />)
    }

    return(
      <div>
        <figure className='starting-image' id="images" alt="test">
          <img src={this.state.imgUrl} />
        </figure>

        <div>
          <form onSubmit={this.handleSubmit}>
           <input type="file" onChange={this.handleImageUpload} />
          </form>

          {preview}
        </div>

        <figure className='original' id="images">
          <canvas ref="canvas" />
        </figure>

      </div>
    )
  }
}

export default ImageUploadContainer

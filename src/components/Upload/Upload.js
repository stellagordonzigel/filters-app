import React, { Component } from 'react'
import $ from 'jquery'
import Image from '../Image/Image'

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      image: ''
    }
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleImageUpload(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onload = () => {
      this.setState({
        file: file,
        image: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.file)
    // (this.state.file).append('.image-location')
    // $('div').add(this.state.file).addClass('image-location')
    // $( "<p>Test</p>" ).appendTo( ".inner" )
  }

  render () {
    let {image} = this.state
    let imagePreview = null
    if (image) {
      imagePreview = (<img src={image} alt="selected image"/>)
    } else {
      imagePreview = null
    }
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input type="file" onChange={this.handleImageUpload} />
         <button type="submit" onClick={this.handleSubmit}>Upload Image</button>
       </form>
       {imagePreview}
     </div>
    )
  }
}

export default Upload

import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import React, { Component } from 'react'
import './SocialShare.css'


const {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  TumblrShareButton,
  EmailShareButton,
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const PinterestIcon = generateShareIcon('pinterest')
const TumblrIcon = generateShareIcon('tumblr')
const EmailIcon = generateShareIcon('email')

class SocialShare extends Component {
  render () {
    const shareUrl = this.props.imgUrl
    const title = 'Check out my image created using Pix!'
    return (
      <div>
        <div className="social-icon-container">
          <div className="share-button-container">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <FacebookIcon
                size={32}
                round
              />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <TwitterIcon
                size={32}
                round
              />
            </TwitterShareButton>

            <PinterestShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <PinterestIcon
                size={32}
                round
              />
            </PinterestShareButton>

            <TumblrShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <TumblrIcon
                size={32}
                round
              />
            </TumblrShareButton>

            <EmailShareButton
              url={shareUrl}
              quote={title}
              className="share-button"
            >
              <EmailIcon
                size={32}
                round
              />
            </EmailShareButton>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialShare

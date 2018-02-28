import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './bannerWithMessage.css'

class BannerWithMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showBody: false
    }
    this.onClickShowBody = this.onClickShowBody.bind(this)
  }

  onClickShowBody () {
    this.setState({ ...this.state, showBody: !this.state.showBody })
  }

  render () {
    return (
      <div className="banner">
        <div className="head-banner">
          <span className="title-banner">{this.props.title}</span>
        </div>

        <div className="body-banner">
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }
}

BannerWithMessage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}

export default BannerWithMessage

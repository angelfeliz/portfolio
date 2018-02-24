import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        <div className="head-banner" onClick={() => this.onClickShowBody()}>
          <span className="title-banner">{this.props.title}</span>
        </div>
        {this.state.showBody ? (
          <div className="body-banner">
            <p>{this.props.children}</p>
          </div>
        ) : null}
      </div>
    )
  }
}

BannerWithMessage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
}

export default BannerWithMessage

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
    let styles = {
      minHeight: '12%',
      padding: '1% 1% .5% 0',
      width: '100%',
      backgroundColor: `${this.props.colorRGB}`,
      borderBottom: `4px solid ${this.props.palletColor}`,
      color: 'white',
      fontWeight: '200'
    }
    console.log(styles)
    console.log(this.props.palletColor)
    return (
      <div className="banner">
        <div style={styles}>
          <span className="title-banner">{this.props.title.toUpperCase()}</span>
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

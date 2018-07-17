import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { getReadme } from '../../helpers/gitHubApi'
import showdown from 'showdown'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: ''
    }
  }
  markerToText = text => {
    let converter = new showdown.Converter()
    return converter.makeHtml(text)
  }
  componentDidMount () {
    getReadme(this.props.owner, this.props.repo).then(data => {
      this.setState({ ...this.state, readme: data })
    })
  }
  render () {
    return (
      <div className="modal">
        <div className="flex-col">
          <div className="flex-row">
            <div className="white-box" />
            <div className="flex-col">
              <div className="white-box" />
              <div className="white-box" />
            </div>
          </div>
          <div className="flex-row">
            <div className="white-box" />
            <div className="white-box" />
            <div className="white-box" />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

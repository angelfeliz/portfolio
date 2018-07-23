import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { getReadme } from '../../helpers/gitHubApi'
// import showdown from 'showdown'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: ''
    }
  }
  /*  markerToText = text => {
    let converter = new showdown.Converter()
    return converter.makeHtml(text)
  }
  componentDidMount () {
    getReadme(this.props.owner, this.props.repo).then(data => {
      this.setState({ ...this.state, readme: data })
    })
  } */
  render () {
    console.log('item ', this.props)
    return (
      <div className="modal">
        <div className="button_container">
          <button onClick={() => this.props.onClickCloseModal()}>
            <i className="fa fa-window-close-o fa-2x" aria-hidden="true" />
          </button>
        </div>
        <div className="grid-container">
          <div className="use_case">
            <h2>{this.props.details.name}</h2>
          </div>
          <div className="project_img_1" />
          <div className="project_img_2" />
          <div className="project_img_3" />
          <div className="project_img_3" />
          <div className="detail" />
          <div className="logo" />
        </div>
      </div>
    )
  }
}

export default ProductDetail

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
            <p>{this.props.details.useCase}</p>
          </div>
          <div className="project_img_1">
            <img src={this.props.details.images[0]} />
          </div>
          <div className="project_img_2">
            <img src={this.props.details.images[1]} />
          </div>
          <div className="project_img_3">
            <img src={this.props.details.images[2]} />
          </div>

          <div className="detail">
            <h4>Stack used in the project</h4>
            <p>{this.props.details.stack}</p>
          </div>
          <div className="logo">
            <img src={this.props.details.logo} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

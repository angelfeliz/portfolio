import React, { Component } from 'react'
import clientsProject from '../../helpers/clientsProjectsDoc'
// import PropTypes from 'prop-types'
// import { getReadme } from '../../helpers/gitHubApi'
// import showdown from 'showdown'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: '',
      detail: {}
    }
  }
 /* openDetails = name => {
    let detail = clientsProject[this.props.language][name]
    console.log('detail ', detail)

    this.setState({
      ...this.state,
      showProductDetail: true,
      details: { ...detail }
    })
  }*/
  componentDidMount() {
    console.log('prop', this.props)
      let detail = clientsProject[this.props.language]['presupuesto']      
      
      this.setState({
        ...this.state,        
        details: { ...detail }
      })
  }
  render () {    
    return (
      <div className="modal">
        <div className="button_container" style={{display: 'none'}}>
          <button onClick={() => this.props.onClickCloseModal()}>
            <i className="fa fa-window-close-o fa-2x" aria-hidden="true" />
          </button>
        </div>
        <div className="grid-container">
          <div className="use_case">
            <h2>{this.state.details.name}</h2>
            <p>{this.state.details.useCase}</p>
          </div>
          <div className="project_img_1">
            <img src={this.state.details.images[0]} />
          </div>
          <div className="project_img_2">
            <img src={this.state.details.images[1]} />
          </div>
          <div className="project_img_3">
            <img src={this.state.details.images[2]} />
          </div>

          <div className="detail">
            <h4>Stack used in the project</h4>
            <p>{this.state.details.stack}</p>
          </div>
          <div className="logo">
            <img src={this.state.details.logo} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

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
      details: {}
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
  } */
  componentDidMount () {
    
    let key = this.props.location.state.code || 'presupuesto';
    let lan = this.props.location.language || 'en'
    let detail = clientsProject['en']['presupuesto'];
    console.log('prop', detail);
    this.setState({
      ...this.state,
      details: { ...detail }
    })
  }
  render () {
    console.log('state ', this.state)
    return (  
      <p>hello</p>   
    /* <div>
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
    */
    )
  }
}

export default ProductDetail

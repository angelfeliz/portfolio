import React, { Component } from 'react'
import clientsProject from '../../helpers/clientsProjectsDoc'
// import PropTypes from 'prop-types'
// import { getReadme } from '../../helpers/gitHubApi'
// import showdown from 'showdown'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    let language = this.props.location.state.language
    let code = this.props.location.state.code
    this.state = {
      readme: '',
      details: {
        ...clientsProject[language][code]
      }
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
    // let key = this.props.location.state.code || 'presupuesto'
    // let lan = this.props.location.language || 'en'
    // let detail = clientsProject['en']['presupuesto']
    // console.log('prop', detail)
    /* this.setState({
      ...this.state,
      details: { ...detail }
    }) */
  }
  render () {
    console.log('state ', this.props.location)
    return (
      <div>
        <div className="grid-container">
          <div className="logo">
            <img className="shadowing" src={this.state.details.logo} />
          </div>
          <div className="use_case shadowing">
            <h2>{this.state.details.name}</h2>
            <p>{this.state.details.useCase}</p>
          </div>
          <div className="project_img_1">
            <img className="shadowing" src={this.state.details.images[0]} />
          </div>
          <div className="project_img_2">
            <img className="shadowing" src={this.state.details.images[1]} />
          </div>
          <div className="project_img_3">
            <img className="shadowing" src={this.state.details.images[2]} />
          </div>

          <div className="detail shadowing">
            <div className="elements-top">
              <label>Type product</label>
              <span>Client work</span>
            </div>
            <div className="elements">
              <div className="element">
                <label>Segments</label>
                <ul className="unstyle_list">
                  <li>
                    <span>Frondend development</span>
                  </li>
                  <li>
                    <span>Backend development</span>
                  </li>
                </ul>
              </div>
              <div className="stack">
                <label>Stack</label>
                <ul className="unstyle_list_inherent">
                  {this.state.details.stack.map((item, index) => (
                    <li key={index}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

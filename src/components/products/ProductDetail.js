import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { getReadme } from '../../helpers/gitHubApi'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      readme: ''
    }
  }
  componentDidMount () {
    getReadme(this.props.owner, this.props.repo).then(data => {
      this.setState({ ...this.state, readme: data })
    })
  }
  render () {
    return (
      <div className={`full_screen ${this.props.show}`}>
        <div className="columns board_detail">
          <div className="column is-two-fifths left-side_detail">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
            <h4>{this.props.nameProject}</h4>
          </div>
          <div className="column right-side_detail">
            <div className="is-pulled-right">
              <button
                className=""
                onClick={() => {
                  this.props.onClickCloseModal()
                }}
              >
                close
              </button>
            </div>
            CHeck out what good bro
            <div>
              <i className="has-text-left">{this.props.url}</i>
              <p className="has-text-justified">this.state.readme</p>
              <div className="child-div"> </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

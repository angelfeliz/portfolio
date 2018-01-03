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
      <div className={`full_screen ${this.props.show}`}>
        <div className="columns board_detail">
          <div className="column is-two-fifths left-side_detail">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
            <h4>{this.props.repo}</h4>
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
              <i className="has-text-left">{this.props.url}</i>
              <span
                className="has-text-justified"
                dangerouslySetInnerHTML={{
                  __html: this.markerToText(this.state.readme)
                }}
              />
              <div className="child-div"> </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

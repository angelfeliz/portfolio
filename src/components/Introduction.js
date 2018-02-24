import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Introduction extends Component {
  render () {
    return (
      <div className="bg-image-section-1">
        {
          // backgroungImage is here
        }
        <section className="hero inner_section-00">
          <div className="hero-body speech">
            <div className="columns">
              <div className="column is-two-fifths">
                <img className="me" src={require('../images/me.jpg')} />
              </div>
              <div className="column is-half">
                <h1 className="title">Angel Rodriguez</h1>
                <h2 className="subtitle">Developer</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

Introduction.propTypes = {
  text: PropTypes.string,
  openBanner: PropTypes.func
}

export default Introduction

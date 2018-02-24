import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './introduction.css'

class Introduction extends Component {
  render () {
    return (
      <div className="bg-image-section-1">
        {
          // backgroungImage is here
        }
        <section className="container_screen">
          <div className="image_front_picture">
            <img className="me" src={require('../../images/me.jpg')} />
          </div>
          <div className="naming">
            <h1 className="title">Angel Rodriguez</h1>
            <h2 className="subtitle">Developer</h2>
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

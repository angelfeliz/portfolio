import React from 'react'
import PropTypes from 'prop-types'

const Presentation = props => {
  return (
    <div className="section bg-image-section-1">
      {
        // backgroungImage here
      }
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">Angel Rodriguez</h1>
              <h2 className="subtitle">Checkout</h2>
              <hr />
              <p />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Presentation.propTypes = {
  text: PropTypes.string
}

export default Presentation

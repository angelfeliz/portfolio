import React from 'react'
import './paralaxBanner.css'

const ParalaxBanner = props => {
  return (
    <div className="paralex_backgroud">
      <div className="message-container shadowing">
        <h3>Code quote</h3>
        <p className="message">
          {`"Writing clean code is what you must do in order to call yourself a professional.
There is no reasonable excuse for doing anything less than your best." Clean Code book`}.
        </p>
      </div>
    </div>
  )
}

export default ParalaxBanner

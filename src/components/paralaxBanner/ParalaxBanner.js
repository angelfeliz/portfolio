import React from 'react'
import './paralaxBanner.css'
import { valueString } from '../../helpers/valueString'

const ParalaxBanner = props => {
  return (
    <div className="paralex_backgroud">
      <div className="message-container shadowing">
        <h3>{valueString[props.language].code_quote[0]}</h3>
        <p className="message">{valueString[props.language].code_quote[1]}</p>
      </div>
    </div>
  )
}

export default ParalaxBanner

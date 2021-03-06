import React from 'react'
import './introduction.css'
import { valueString } from '../../helpers/valueString'

const Introduction = props => {
  return (
    <div className="bg-image-section-1">
      <section className="container_screen">
        {/* <div className="image_front_picture"> */}
        <div className="short-about">
          <div className="naming shadowing">
            <h1 className="title">Angel Rodriguez</h1>
            <h2 className="subtitle">Web Developer</h2>
          </div>
          <p className="shortSummary shadowing">
            {valueString[props.language].about}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Introduction

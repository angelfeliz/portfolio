import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { valueString } from '../helpers/valueString'
import BannerWithMessage from './BannerWithMessage'

class Presentation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showBanner: [{ 1: false, 2: false, 3: false }]
    }
  }

  render () {
    return (
      <div className="bg-image-section-1">
        {
          // backgroungImage is here
        }
        <section className="hero inner_section-01">
          <div className="hero-body speech">
            <div className="columns">
              <div className="column is-two-fifths" />
              <div className="column is-half">
                <p>{valueString.about}</p>
                <div className="section_of_question">
                  <div className="banners is-pulled-right">
                    <BannerWithMessage title={'Why work with me?'}>
                      {valueString.work_with_me}
                    </BannerWithMessage>

                    <BannerWithMessage title={'Work with team'}>
                      {valueString.team}
                    </BannerWithMessage>

                    <BannerWithMessage title={'About coding'}>
                      {valueString.code}
                    </BannerWithMessage>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

Presentation.propTypes = {
  text: PropTypes.string,
  openBanner: PropTypes.func
}

export default Presentation

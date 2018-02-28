import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { valueString } from '../../helpers/valueString'
import BannerWithMessage from '../bannerWithMessage/BannerWithMessage'
import './presentation.css'

class Presentation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showBanner: [{ 1: false, 2: false, 3: false }]
    }
  }

  render () {
    return (
      <div id="about" className="bg-image-section-2">
        {
          // backgroungImage is here
        }
        <section className="inner_section-01">
          <div className="banners">
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

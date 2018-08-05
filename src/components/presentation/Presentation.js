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
            <BannerWithMessage
              title={valueString[this.props.language].work_with_me[0]}
              palletColor={'#cacfd5'}
              colorRGB={'rgba(233,168,65,1)'}
            >
              {valueString[this.props.language].work_with_me[1]}
              <a
                rel="noopener noreferrer"
                href="https://chingu.io"
                target="_blank"
              >
                Chingu.io
              </a>
            </BannerWithMessage>

            <BannerWithMessage
              title={valueString[this.props.language].team[0]}
              palletColor={'#cacfd5'}
              colorRGB={'rgba(49,61,84,1)'}
            >
              {valueString[this.props.language].team[1]}
            </BannerWithMessage>

            <BannerWithMessage
              title={valueString[this.props.language].code[0]}
              palletColor={'#cacfd5'}
              colorRGB={'rgba(24,95,76,1)'}
            >
              {valueString[this.props.language].code[1]}
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

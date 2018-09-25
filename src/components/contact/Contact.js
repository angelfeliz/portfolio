import React from 'react'
import './contact.css'
import { valueString } from '../../helpers/valueString'

const Contact = props => {
  return (
    <section className="contact">
      <div className="contact-flex-row">
        <div>
          <p className="shortSummary">{valueString[props.language].about}</p>
        </div>
        <div className="container_image_footer">
          <p>Thank you for checking out my portfolio.</p>
        </div>
        <div className="contact-flex-col">
          <div>
            <a
              href="https://stackoverflow.com/users/2777253/angel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-stack-overflow fa-3x" aria-hidden="true" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/angelfeliz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-square fa-3x" aria-hidden="true" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/erodriguezfeliz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="contact-paragraph">
          <p>Build with ReactJs! Best regards.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

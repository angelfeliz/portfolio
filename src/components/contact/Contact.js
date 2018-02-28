import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-flex-row">
        <div className="container_image_footer">
          <p>Think for passing by my portfolio.</p>
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
          <p>Hope to hear from you! Best regards.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

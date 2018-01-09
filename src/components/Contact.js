import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-flex-row">
        <div>
          <p>CHeck out!!</p>
        </div>
        <div className="contact-paragraph">
          <p>Hope to hear from you! Best regards.</p>
        </div>

        <div className="contact-flex-col">
          <div>
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <span>erodriguezfeliz@gmail.com</span>
          </div>
          <div>
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            <span>https://www.linkedin.com/in/erodriguezfeliz/</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

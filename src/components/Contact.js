import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-flex-row">
        <div>
          I you like to contact me you can send me a email or linkedin, I will
          be catching up with you soon as posible.
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

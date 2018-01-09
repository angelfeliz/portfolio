import React from 'react'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-flex-row">
        <div>
          <p>CHeck out!!</p>
        </div>
        <div className="contact-paragraph">
          <p>
            {`This is my portfolio so far I hoope you've liked it was created with
            love and music. You can contact me through my social media networks
            for any questions suggestions or any topics like sports photography
            science innovation and projects to improve the quality of life of
            humanity.`}
          </p>
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

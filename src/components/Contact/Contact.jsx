import React from 'react'
import "./Contact.css";

const Contact = () => {
    return (
        <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-map-location-dot"></i>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <a href="geo:22.7196,75.8577?q=Indore%2C+Madhya+Pradesh">Indore, Madhya Pradesh </a>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:mohitpatidar2186@gmail.com">
                  mohitpatidar2186@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Contact

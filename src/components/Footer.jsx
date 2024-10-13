import '@fortawesome/fontawesome-free/css/all.min.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/samplelogo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <section className='about-section'>
          <div className='about-container'>
            <div className='footer-logo-container'>
              <img id='footer-logo' src={logo} alt="Logo" />
            </div>
            <div className='question-container'>
              <div className='question-title'>Questions?</div>
              <input 
                type="question" 
                placeholder='Type here'
              />
              <button className='submit-btn'>
                Submit
              </button>
            </div>
            <div className='socials-container'>
              <div className='socials-title'>
                Follow us
              </div>
              <div className='socials-logo-container'>
                <a className='social-logo' href='https://www.facebook.com/gym' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className='social-logo' href='https://www.instagram.com/gym' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
            <div className='contacts-container'>
              <div className='contacts-title'>
                Contact us
              </div>
              <div className='contact-info-container'>
                <div className='phone-container'>
                  <div className='phone-logo'>
                    <FontAwesomeIcon icon={faPhone} size="1x" />
                  </div>
                  <div className='phone-num'>
                    0912-345-6789
                  </div>
                </div>
                <div className='email-container'>
                  <div className='email-logo'>
                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                  </div>
                  <div className='email-ad'>
                    gym@email.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='menu-section'>
          <div className='menu-link'>
            <Link className='footer-link' to="/">HOME</Link>
            <Link className='footer-link' to="/Classes">CLASSES</Link>
            <Link className='footer-link' to="/Coaches">COACHES</Link>
            <Link className='footer-link' to="/Services">SERVICES</Link>
            <Link className='footer-link' to="/Facilities">FACILITIES</Link>
            <Link className='footer-link' to="/Membership">MEMBERSHIP</Link>
          </div>
          <div className='copyright-notice'>
            © 2024 All rights reserved.

          </div>
        </section>
      </div>
    </footer>
  );
}
export default Footer;
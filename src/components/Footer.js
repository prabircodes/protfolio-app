import './Footer.css'
import React from 'react'
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <div>
              <p>123 Housing Society</p>
              <p>Maharshtra, India</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
              +91 90000 00000
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
              info@email.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About me</h4>
          <p>
            This is Prabir Singh. I enjoy discussing new projects about UI/UX
            design and development.
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginright: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

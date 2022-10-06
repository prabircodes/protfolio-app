import './NavBar.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [clickNav, setClickNav] = useState(false)
  const handleClick = () => setClickNav(!clickNav)

  const [colorNav, setColorNav] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColorNav(true)
    } else {
      setColorNav(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <div className={colorNav ? 'header header-bg' : 'header'}>
      <Link to='/'>
        <h1>Portfolio.</h1>
      </Link>
      <ul className={clickNav ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/project'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact us</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {clickNav ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  )
}

export default NavBar

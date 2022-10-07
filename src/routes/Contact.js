import React from 'react'
import Footer from '../components/Footer'
import HeroSectionOther from '../components/HeroSectionOther'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroSectionOther heading='CONTACT US' text="Let's conncet to discuss" />
      <Footer />
    </div>
  )
}

export default Contact
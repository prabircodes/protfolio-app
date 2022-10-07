import React from 'react'
import Footer from '../components/Footer'
import HeroSectionOther from '../components/HeroSectionOther'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroSectionOther heading='ABOUT US' text='Who we are' />
      <Footer />
    </div>
  )
}

export default About

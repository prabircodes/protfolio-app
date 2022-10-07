import React from 'react'
import Footer from '../components/Footer'
import HeroSectionOther from '../components/HeroSectionOther'
import NavBar from '../components/NavBar'

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroSectionOther heading='PROJECTS' text='Some of my most recent works' />
      <Footer />
    </div>
  )
}

export default Project

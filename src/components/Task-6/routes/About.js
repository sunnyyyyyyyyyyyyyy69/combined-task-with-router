import React from 'react'
import Navbar from '../components/navbar'
import Footer from  '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import AboutCom from '../components/AboutCom';
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I'm a Front-End Developer"/>
      <AboutCom />
      <Footer />
    </div>
  )
}

export default About

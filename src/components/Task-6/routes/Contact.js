import React from 'react'
import Navbar from '../components/navbar'
import Footer from  '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Form  from '../components/form';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact

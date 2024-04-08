import React from 'react'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';

 const About = () => {
  return (
  <>
  <Helmet title='About'>
    <CommonSection title='About Us' />
    <AboutSection/>
  </Helmet>
  </>
  )
}
export default About
  
/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from './Hero'
import ProblemSection from './Problem'
import SolutionSection from './Solution'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Intro from './Intro'
import Newsletter from './Newsletter'
import Services from './Services'
import TestimonialSection from './Testimonial'

const Home = () => {
  return (
    <>
    <Navbar />
    <Intro />
    <Newsletter />
    <Services/>
    <HeroSection />
    <ProblemSection/>
    <SolutionSection />
    {/* <TestimonialSection /> */}
    <Footer />
    </>
  )
}

export default Home
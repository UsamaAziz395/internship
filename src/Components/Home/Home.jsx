import React from 'react'

import HeroSection from '../../Components/Hero Section/HeroSection'
import Features from '../../Components/Features/Features'
import Services from '../../Components/Services/Services'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import Expertise from '../../Components/Expertise/Expertise'
import Propertise from '../../Components/Properties/Propertise'
import Partners from '../../Components/Partners/Partners'
import Blogs from '../Blog/Blog.jsx'
import Dream from '../Dream Home/Dream.jsx'
import About from '../About/Aboutus.jsx'
import Facilities from '../Facilities/Facilities.jsx'
import Customers from '../Customer/Customer.jsx'
import Navbar from '../Navbar/Navbar.jsx'

function Home() {
  return (
    <>
  <Navbar />
  <HeroSection />
  <About />
  <Features />
  <Services />
  <Customers />/
  <Expertise />
  <Dream />
  <Propertise />
    <Partners />
    <Facilities />
    <Blogs />
 <Newsletter />
 <Footer />
 
    </>
  )
}

export default Home

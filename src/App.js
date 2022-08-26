import React from 'react'
import BackToTop from './components/BackToTop/BackToTop'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'
import Skills from './components/Skills/Skills'
import Team from './components/Team/Team'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
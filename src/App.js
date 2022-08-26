import React from 'react'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <div className='h-[2000px]'></div>
    </div>
  )
}

export default App
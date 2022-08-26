import React from 'react'
import Banner from './components/Banner/Banner'
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
      <div className='h-[2000px]'></div>
    </div>
  )
}

export default App
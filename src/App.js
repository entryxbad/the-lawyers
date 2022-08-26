import React from 'react'
import Banner from './components/Banner/Banner'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <div className='h-[2000px]'></div>
    </div>
  )
}

export default App
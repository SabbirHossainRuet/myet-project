import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Mission from './components/Mission/Mission'
import ETGuides from './components/ETGuides/ETGuides'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Mission />
      <ETGuides />
      <Services />
      <Contact />

    </div>
  )
}

export default App
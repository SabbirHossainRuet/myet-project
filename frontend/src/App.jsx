import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Mission from './components/Mission/Mission'
import ETGuides from './components/ETGuides/ETGuides'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Mission />
      <ETGuides />
      <Services />

    </div>
  )
}

export default App
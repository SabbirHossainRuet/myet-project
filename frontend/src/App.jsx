import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Mission from './components/Mission/Mission'
import ETGuides from './components/ETGuides/ETGuides'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Mission />
      <ETGuides />

    </div>
  )
}

export default App
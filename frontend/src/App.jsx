import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Mission from './components/Mission/Mission'
import ETGuides from './components/ETGuides/ETGuides'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import NewsLetter from './components/Newsletter/Newsletter'
import Clients from './components/Clients/Clients'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Mission />
      <ETGuides />
      <Services />
      <Contact />
      <hr />
      <NewsLetter />
      <hr />
      <Clients />


    </div>
  )
}

export default App
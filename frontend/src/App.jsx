// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Mission from './components/Mission/Mission'
// import ETGuides from './components/ETGuides/ETGuides'
// import Services from './components/Services/Services'
// import Contact from './components/Contact/Contact'
// import NewsLetter from './components/Newsletter/Newsletter'
// import Clients from './components/Clients/Clients'
// import EmployeeServices from './components/EmployeeServics/EmployeeServices'
// import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents'

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Mission />
//       <Services />
//       <ETGuides />
//       <Contact />
//       <NewsAndEvents />
//       <hr />
//       <NewsLetter />
//       <hr />
//       <EmployeeServices />
//       <Clients />


//     </div>
//   )
// }

// export default App



//NEW VERSION

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Mission from './components/Mission/Mission';
import ETGuides from './components/ETGuides/ETGuides';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NewsLetter from './components/Newsletter/Newsletter';
import Clients from './components/Clients/Clients';
import EmployeeServices from './components/EmployeeServics/EmployeeServices';
import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents';
import NewsDetails from './components/NewsDetails/NewsDetails';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Mission />
        <Services />
        <ETGuides />
        <Contact />
        <NewsAndEvents />
        <hr />
        <NewsLetter />
        <hr />
        <EmployeeServices />
        <Clients />
        <Routes>
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

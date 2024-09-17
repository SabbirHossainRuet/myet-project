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
import { Route, Routes } from 'react-router-dom';
import NewsDetails from './components/NewsDetails/NewsDetails';
import Home from './pages/Home/Home';
import ETGuidesDetails from './components/ETGuidesDetails/ETGuidesDetails';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/brief/:id" element={<ETGuidesDetails />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;


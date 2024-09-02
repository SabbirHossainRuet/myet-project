import React from 'react';
import './Home.css';
import Mission from '../../components/Mission/Mission';
import Services from '../../components/Services/Services';
import ETGuides from '../../components/ETGuides/ETGuides';
import Contact from '../../components/Contact/Contact';
import NewsAndEvents from '../../components/NewsAndEvents/NewsAndEvents';
import NewsLetter from '../../components/Newsletter/Newsletter';
import EmployeeServices from '../../components/EmployeeServics/EmployeeServices';
import Clients from '../../components/Clients/Clients';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
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
        </div>
    )
}

export default Home
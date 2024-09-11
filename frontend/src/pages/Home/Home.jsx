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
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Mission />
            <hr />
            <NewsAndEvents />
            <Services />
            <ETGuides />
            <Contact />
            <hr />
            <NewsLetter />
            <hr />
            <EmployeeServices />
            <Clients />
            <Footer />
        </div>
    )
}

export default Home
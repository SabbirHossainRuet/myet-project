import React, { useContext } from 'react';
import './EmployeeServices.css';
import { StoreContext } from '../Context/StoreContext';


const EmployeeServices = () => {

    const { employeeservices } = useContext(StoreContext);
    return (
        <div className='employee-services' id='employee-services'>
            <p className='title'>Employee Services</p>
            <div className="employee-container">
                <div className="employee-bundle">
                    {employeeservices.map((employeeservices, index) => (
                        <div className="employee-bundle-item" key={index}>

                            <p className='description'>{employeeservices.description}</p>

                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default EmployeeServices
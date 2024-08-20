import React, { useContext } from 'react'
import './Services.css'
import { StoreContext } from '../Context/StoreContext'

const Services = () => {
    const { services } = useContext(StoreContext);
    const formatTextWithLineBreaks = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };
    return (
        <div className='services' id='services'>
            <p className='title'>Services</p>
            <div className="services-container">
                <div className="services-bundle">
                    {services.map((item, index) => (
                        <div className="services-bundle-item" key={index}>
                            <h3>{item.name}</h3>
                            <p className='price'>{item.price === 0 ? "FREE" : `£${item.price}`}</p>
                            <p className='text'>
                                {formatTextWithLineBreaks(item.text)}
                            </p>

                            {/* <button>{item.price === 0 ? "Download" : "Buy"}</button> */}

                            <p className='description'>{item.description}</p>

                        </div>
                    ))
                    }

                </div>

            </div>
            <hr />




        </div >
    )


}

export default Services
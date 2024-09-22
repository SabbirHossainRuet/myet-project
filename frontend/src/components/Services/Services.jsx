import React, { useContext } from 'react'
import './Services.css'
import { StoreContext } from '../Context/StoreContext'

const Services = () => {
    const { services } = useContext(StoreContext);
    const { toggleCallbackForm, setShowDateTime, setFormTitle, } = useContext(StoreContext);

    const handleCallbackClick = () => {
        setShowDateTime(true);
        setFormTitle('Request A Callback');
        toggleCallbackForm();
    };
    const formatTextWithLineBreaks = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const formatTextWithUnderline = (text) => {
        const underlineStart = '__start__';
        const underlineEnd = '__end__';
    
        // Split the text by the underline start marker
        const parts = text.split(underlineStart).map((part, index) => {
            // Check if the part contains the underline end marker
            if (part.includes(underlineEnd)) {
                // Split at the underline end marker
                const [underlinedPart, remainingText] = part.split(underlineEnd);
                return (
                    <React.Fragment key={index}>
                        {/* Underline the part between markers */}
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleCallbackClick}>{underlinedPart}</span>
                        {/* Render the remaining part after the underline */}
                        {remainingText}
                    </React.Fragment>
                );
            } else {
                // If no underline end marker, return the normal part
                return <React.Fragment key={index}>{part}</React.Fragment>;
            }
        });
    
        return parts;
    };
    

    const animateFreeText = (text) => {
        return <span className="typewriter">{text}</span>;
    };
    return (
        <div className='services' id='services'>
            <p className='title'>Services</p>
            <div className="services-container">
                <div className="services-bundle">
                    {services.map((item, index) => (
                        <div className="services-bundle-item" key={index}>
                            <div className="header-items">
                                <h3>{item.name}</h3>
                                <hr />
                            </div>

                            <p className='price'>
                                {item.price === 0 ? animateFreeText("FREE") : `£${item.price}`}
                            </p>
                            <p className='text'>
                                {formatTextWithLineBreaks(item.text)}
                            </p>

                            {/* <button>{item.price === 0 ? "Download" : "Buy"}</button> */}

                            <p className='description'><span style={{ display: 'inline' }}>{formatTextWithUnderline(item.description)}</span></p>

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
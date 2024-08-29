import React, { useContext } from 'react'
import './ETGuides.css'
import { StoreContext } from '../Context/StoreContext'
import { loadStripe } from '@stripe/stripe-js';
import { FaGreaterThan } from "react-icons/fa6";

const ETGuides = () => {
    const { et_list, et_bundle } = useContext(StoreContext)
    const iconStyle = { fontSize: '40px' };

    const downloadPDF = (pdfUrl) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleButtonClick = (item) => {
        if (item.price === 0) {
            downloadPDF(item.pdfUrl);
        } else {
            makePayment(item);
        }
    };

    const makePayment = async (item) => {
        if (item.price === 0) {
            // Handle free items differently if needed
            return;
        }
        try {
            const stripe = await loadStripe("pk_test_51PqTJAJjhtr0rQfL7WUODYXVcoXd7bAOZQHDyi8vQ7mocFrX9oyQkOAPb5goUzIMHz5sWTLIQhmPZvxmtoJ65A6000QBDduzST");
            const body = { products: [item] };

            const headers = { "Content-Type": "application/json" };
            const response = await fetch("https://myet-project.onrender.com", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || "Failed to initiate payment");
            }

            const session = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                console.log(result.error.message);
            }
        } catch (error) {
            console.error("Error during payment process:", error.message);
        }
    };

    return (
        <div className='et-guides' id='et-guides'>
            <div className="et-guides-container">
                <p className='title'>Information Leaflets</p>
                <br />
                <hr />
                <div className="et-list-container">
                    <div className="et-list">
                        {et_list.map((item, index) => (
                            <>
                                <div className="et-list-item" key={index} style={{
                                    backgroundColor: index % 4 === 0 ? '#D5C183' :
                                        index % 4 === 1 ? '#D2A953' :
                                            index % 4 === 2 ? '#DC9344' :
                                                'rgb(221, 104, 21)'
                                }}>
                                    <h3>{item.name}</h3>
                                    <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
                                    <button onClick={() => handleButtonClick(item)}>{item.price === 0 ? "Download" : "Buy"}</button>
                                    <p className='description'>{item.description}</p>
                                    <div className="learn-more">
                                        <p>Learn more</p>
                                        <FaGreaterThan style={iconStyle} />

                                    </div>

                                </div>
                            </>
                        ))
                        }
                    </div>
                </div>
                <hr />
                <div className="et-bundle-container">
                    <div className="et-bundle">
                        {et_bundle.map((item, index) => (
                            <div className="et-bundle-item" key={index}>
                                <h3>{item.name}</h3>
                                <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
                                <p className='text'>{item.text}</p>
                                <button onClick={() => makePayment(item)}>{item.price === 0 ? "Download" : "Buy"}</button>

                                <p className='description'>{item.description}</p>

                            </div>
                        ))
                        }

                    </div>

                </div>

            </div>
            <hr />
        </div >
    )
}

export default ETGuides

//NEW VERSION

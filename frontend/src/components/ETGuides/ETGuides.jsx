// import React, { useContext } from 'react'
// import './ETGuides.css'
// import { StoreContext } from '../Context/StoreContext'
// import { loadStripe } from '@stripe/stripe-js';

// const ETGuides = () => {
//     const { et_list, et_bundle } = useContext(StoreContext)

//     const makePayment = async (item) => {
//         if (item.price === 0) {
//             // Handle free items differently if needed
//             return;
//         }
//         try {
//             const stripe = await loadStripe("pk_test_51PqTJAJjhtr0rQfL7WUODYXVcoXd7bAOZQHDyi8vQ7mocFrX9oyQkOAPb5goUzIMHz5sWTLIQhmPZvxmtoJ65A6000QBDduzST");
//             const body = { products: [item] };

//             const headers = { "Content-Type": "application/json" };
//             const response = await fetch("https://myet-project.onrender.com", {
//                 method: "POST",
//                 headers: headers,
//                 body: JSON.stringify(body)
//             });

//             if (!response.ok) {
//                 const errorResponse = await response.json();
//                 throw new Error(errorResponse.message || "Failed to initiate payment");
//             }

//             const session = await response.json();
//             const result = await stripe.redirectToCheckout({ sessionId: session.id });

//             if (result.error) {
//                 console.log(result.error.message);
//             }
//         } catch (error) {
//             console.error("Error during payment process:", error.message);
//         }
//     };

//     return (
//         <div className='et-guides' id='et-guides'>
//             <div className="et-guides-container">
//                 <p className='title'>ET1 Guides</p>
//                 <br />
//                 <hr />
//                 <div className="et-list-container">
//                     <div className="et-list">
//                         {et_list.map((item, index) => (
//                             <>
//                                 <div className="et-list-item" key={index}>
//                                     <h3>{item.name}</h3>
//                                     <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
//                                     <button onClick={() => makePayment(item)}>{item.price === 0 ? "Download" : "Buy"}</button>
//                                     <p className='description'>{item.description}</p>

//                                 </div>
//                             </>
//                         ))
//                         }
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="et-bundle-container">
//                     <div className="et-bundle">
//                         {et_bundle.map((item, index) => (
//                             <div className="et-bundle-item" key={index}>
//                                 <h3>{item.name}</h3>
//                                 <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
//                                 <p className='text'>{item.text}</p>
//                                 <button onClick={() => makePayment(item)}>{item.price === 0 ? "Download" : "Buy"}</button>

//                                 <p className='description'>{item.description}</p>

//                             </div>
//                         ))
//                         }

//                     </div>

//                 </div>

//             </div>
//             <hr />
//         </div >
//     )
// }

// export default ETGuides

//NEW VERSION

import { useContext, useRef, useState } from 'react';
import './ETGuides.css';
import { StoreContext } from '../Context/StoreContext';
import { loadStripe } from '@stripe/stripe-js';

const ETGuides = () => {
    const { et_list, et_bundle } = useContext(StoreContext);
    const listRef = useRef(null); // Ref for scrolling the card list
    const [activeBubble, setActiveBubble] = useState(0);

    const makePayment = async (item) => {
        if (item.price === 0) {
            // Handle free items
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

    // Function to handle scrolling to specific card
    const scrollToCard = (index) => {
        const cardWidth = listRef.current.children[0].offsetWidth + 20; // Including margin
        const scrollPosition = cardWidth * index - (listRef.current.clientWidth / 2 - cardWidth / 2);

        listRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
        });
        setActiveBubble(index);
    };


    // Track scroll position to update active bubble
    const handleScroll = () => {
        const cardWidth = listRef.current.children[0].offsetWidth + 20;
        const scrollLeft = listRef.current.scrollLeft;
        const currentIndex = Math.round(scrollLeft / cardWidth);
        setActiveBubble(currentIndex);
    };

    return (
        <div className='et-guides'>
            <div className="et-guides-container">
                <p className='title'>ET1 Guides</p>
                <div className="et-list-container" ref={listRef} onScroll={handleScroll}>
                    <div className="et-list">
                        {et_list.map((item, index) => (
                            <div className={`et-list-item ${activeBubble === index ? 'active' : ''}`} key={index}>
                                <h3>{item.name}</h3>
                                <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
                                <button onClick={() => makePayment(item)}>{item.price === 0 ? "Download" : "Buy"}</button>
                                <p className='description'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bubble navigation for scrolling */}
                <div className="bubble-container">
                    {et_list.map((_, index) => (
                        <div
                            key={index}
                            className={`bubble ${activeBubble === index ? 'active' : ''}`}
                            onClick={() => scrollToCard(index)}
                        />
                    ))}
                </div>

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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ETGuides;

import { useContext, useRef } from 'react'
import './ETGuides.css'
import { StoreContext } from '../Context/StoreContext'
import { loadStripe } from '@stripe/stripe-js';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import download from '../../assets/download.png'
import { useNavigate } from 'react-router-dom';



const ETGuides = () => {
    const navigate = useNavigate();

    const handleItemClick = (id) => {
        navigate(`/brief/${id}`);
    }

    // const formatTextWithACAS = (text) => {
    //     if (text.includes('ACAS')) {
    //         const parts = text.split('ACAS');
    //         return (
    //             <div className="text-container">
    //                 <div className="text-row">
    //                     {parts[0]}
    //                 </div>
    //                 <div className="text-row second-row">
    //                     <span className="acas-highlight">ACAS</span>
    //                     {parts[1]}
    //                 </div>
    //             </div>
    //         );
    //     } else {
    //         // If "ACAS" is not present, return text as-is
    //         return text;
    //     }
    // };

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 232;

        if (direction === 'left') {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        } else if (direction === 'right') {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };



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
                <p className='title'>InfoBriefs</p>
                <br />
                <div className="et-list-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        <FaLessThan />
                    </button>
                    <div className="et-list" ref={scrollRef}>
                        {et_list.map((item, index) => (
                            <>
                                <div className="et-list-item" key={item._id} style={{
                                    backgroundColor: index % 4 === 0 ? '#D5C183' :
                                        index % 4 === 1 ? '#D2A953' :
                                            index % 4 === 2 ? '#DC9344' :
                                                'rgb(221, 104, 21)'
                                }}>
                                    <h3>{item.name}</h3>
                                    <p className='price'>{item.price === 0 ? "Free" : `£${item.price}`}</p>
                                    {item.price === 0 ? (
                                        <img src={download} alt="" />
                                    ) : (
                                        <button onClick={() => handleButtonClick(item)}>
                                            Buy
                                        </button>
                                    )}

                                    <h2 className='description' onClick={() => handleButtonClick(item)}><u>
                                        {item.description}
                                    </u></h2>

                                    <h4>Learn more</h4>

                                    {/* <div className="thumbnail-container">
                                        {item.thumbnail && (
                                            <img
                                                src={item.thumbnail}
                                                alt={`${item.name} thumbnail`}
                                                className="thumbnail"
                                            />
                                        )}
                                    </div> */}

                                    <div className="thumbnail-container">
                                        {item.thumbnail && (
                                            <>
                                                <img
                                                    src={item.thumbnail}
                                                    alt={`${item.name} thumbnail`}
                                                    className="thumbnail"
                                                />
                                            </>
                                        )}
                                    </div>

                                    <div className="learn-more">
                                        <FaGreaterThan style={iconStyle} />

                                    </div>

                                </div>
                            </>
                        ))
                        }
                    </div>
                    <button className="scroll-button right" onClick={() => scroll('right')}>
                        <FaGreaterThan />
                    </button>
                </div>

                <div className="et-all-container">
                    <div className="et-rows-1">
                        <div className="row-items">
                            {et_list.slice(0, 5).map((item, index) => (
                                <div className="row-items-all" key={index} onClick={() => handleItemClick(item._id)}>
                                    <div className="rows-items-name-desc">
                                        <p className='name'>{item.name}</p>
                                        <p className='description'>{item.description}</p>
                                    </div>
                                    <p className='pointer'>{`>`}</p>
                                </div>
                            ))}
                            <div className="row-items-all" onClick={() => handleItemClick("help")}>
                                <div className="rows-items-name-desc">
                                    <p className='description'>{`Do you want to help others?`}</p>
                                </div>
                                <p className='pointer'>{`>`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="et-column">
                        <div className="et-rows-2">
                            <div className="row-items">
                                {et_list.slice(5, 8).map((item, index) => (
                                    <div className="row-items-all" key={index} onClick={() => handleItemClick(item._id)}>
                                        <div className="rows-items-name-desc">
                                            <p className='name'>{item.name}</p>
                                            <p className='description'>{item.description}</p>
                                        </div>
                                        <p className='pointer'>{`>`}</p>
                                    </div>
                                ))}
                            </div>
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
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div >
    )
}

export default ETGuides

//NEW VERSION

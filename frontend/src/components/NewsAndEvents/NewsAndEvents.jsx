// import { useContext, useState } from 'react';
// import './NewsAndEvents.css';
// import { StoreContext } from '../Context/StoreContext';
// import { Link } from 'react-router-dom';

// const NewsAndEvents = () => {

//     const { newsData } = useContext(StoreContext)
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 3;

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentNewsItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

//     const totalPages = Math.ceil(newsData.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//     const truncateSummary = (summary, maxLength) => {
//         if (summary.length > maxLength) {
//             return summary.slice(0, maxLength) + '...';
//         }
//         return summary;
//     };

//     return (
//         <div className="news-events-section" id='news-events-section'>
//             <p className='title'>News and Events</p>
//             <div className="news-container">
//                 {currentNewsItems.map((news) => (
//                     <div className="news-card" key={news._id}>
//                         <Link to={`/news/${news._id}`}>
//                             <div className="news-date">
//                                 <p className="day">{news.day}</p>
//                                 <p className="month">{news.month}</p>
//                                 <p className="year">{news.year}</p>
//                             </div>
//                             <div className="news-image">
//                                 <img src={news.image} alt={news.title} />
//                             </div>
//                             <div className="news-content">
//                                 <p className="news-tag">NEWS</p>
//                                 <h3 className="news-title">{news.title}</h3>
//                                 <p className="news-summary">
//                                     {truncateSummary(news.introSummary, 100)}
//                                     <Link to={`/news/${news._id}`} className="read-more-link">Read More</Link>
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//             <div className="pagination">
//                 <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//                     &lt;
//                 </button>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index + 1}
//                         onClick={() => handlePageChange(index + 1)}
//                         className={currentPage === index + 1 ? 'active' : ''}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//                 <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= newsData.length}>
//                     &gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NewsAndEvents;



//NEW VERSIONS WITH STRAPI

// import { useEffect, useState } from 'react';
// import './NewsAndEvents.css';
// import { fetchNewsAndEvents } from '../../apiService';
// import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';

// const NewsAndEvents = () => {
//     const [newsData, setNewsData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const itemsPerPage = 3;

//     useEffect(() => {
//         const getNewsData = async () => {
//             try {
//                 const data = await fetchNewsAndEvents();
//                 setNewsData(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getNewsData();
//     }, []);


//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentNewsItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(newsData.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     const truncateSummary = (summary, maxLength) => {
//         if (summary.length > maxLength) {
//             return summary.slice(0, maxLength) + '...';
//         }
//         return summary;
//     };


//     return (
//         <div className="news-events-section" id='news-events-section'>
//             <p className='title'>News and Events</p>
//             <div className="news-container">
//                 {currentNewsItems.map((news) => (
//                     <div className="news-card" key={news._id}>
//                         <Link to={`/news/${news._id}`}>
//                             <div className="news-date">
//                                 <p className="day">{new Date(news.attributes.date).getDate()}</p>
//                                 <p className="month">{new Date(news.attributes.date).toLocaleString('default', { month: 'short' })}</p>
//                                 <p className="year">{new Date(news.attributes.date).getFullYear()}</p>
//                             </div>
//                             <div className="news-image">
//                                 <img
//                                     src={`http://localhost:1337${news.attributes.image?.data?.attributes?.url}`}
//                                     alt={news.attributes.title}
//                                 />

//                             </div>
//                             <div className="news-content">
//                                 <p className="news-tag">NEWS</p>
//                                 <h3 className="news-title">{news.attributes.title}</h3>
//                                 <p className="news-summary">
//                                     <ReactMarkdown rehypePlugins={[rehypeRaw]}>
//                                         {truncateSummary(news.attributes.summary, 100)}
//                                     </ReactMarkdown>
//                                     <Link to={`/news/${news.id}`} className="read-more-link">Read More</Link>
//                                 </p>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//             <div className="pagination">
//                 <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//                     &lt;
//                 </button>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index + 1}
//                         onClick={() => handlePageChange(index + 1)}
//                         className={currentPage === index + 1 ? 'active' : ''}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//                 <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= newsData.length}>
//                     &gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NewsAndEvents;



// NEW VERSIONS WITH BOTH DESKTOP AND MOBILE RESPONSIVENESS
import { useContext, useState, useEffect } from 'react';
import './NewsAndEvents.css';
import { StoreContext } from '../Context/StoreContext';
import { Link } from 'react-router-dom';

const NewsAndEvents = () => {
    const { newsData } = useContext(StoreContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // For pagination (desktop)
    const [itemsToShow, setItemsToShow] = useState(4); // For "show more" functionality (mobile)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile detection

    // Update isMobile state on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Pagination logic for desktop
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNewsItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

    // "Show more" logic for mobile
    const mobileNewsItems = newsData.slice(0, itemsToShow);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const showMoreNews = () => setItemsToShow(prevCount => prevCount + 4);

    const showLessNews = () => {
        setItemsToShow(4);
        // Scroll to the top of the news section with an offset
        const newsSection = document.getElementById('news-events-section');
        if (newsSection) {
            const offsetTop = newsSection.offsetTop;
            const offset = -170; // Adjust this value as needed (negative for above the element, positive for below)
            window.scrollTo({
                top: offsetTop + offset,
                behavior: 'smooth'
            });
        }
    };


    const truncateSummary = (summary, maxLength) => {
        if (summary.length > maxLength) {
            return summary.slice(0, maxLength) + '...';
        }
        return summary;
    };

    return (
        <div className="news-events-section" id="news-events-section">
            <p className="title">News and Events</p>

            <div className="news-container">
                {/* Render news for desktop (pagination) or mobile (show more) */}
                {isMobile
                    ? mobileNewsItems.map((news) => (
                        <div className="news-card" key={news._id}>
                            <Link to={`/news/${news._id}`}>
                                <div className="news-date">
                                    <p className="day">{news.day}</p>
                                    <p className="month">{news.month}</p>
                                    <p className="year">{news.year}</p>
                                </div>
                                <div className="news-image">
                                    <img src={news.image} alt={news.title} />
                                </div>
                                <div className="news-content">
                                    <p className="news-tag">NEWS</p>
                                    <h3 className="news-title">{news.title}</h3>
                                    <p className="news-summary">
                                        {truncateSummary(news.introSummary, 100)}
                                        <Link to={`/news/${news._id}`} className="read-more-link">Read More</Link>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))
                    : currentNewsItems.map((news) => (
                        <div className="news-card" key={news._id}>
                            <Link to={`/news/${news._id}`}>
                                <div className="news-date">
                                    <p className="day">{news.day}</p>
                                    <p className="month">{news.month}</p>
                                    <p className="year">{news.year}</p>
                                </div>
                                <div className="news-image">
                                    <img src={news.image} alt={news.title} />
                                </div>
                                <div className="news-content">
                                    <p className="news-tag">NEWS</p>
                                    <h3 className="news-title">{news.title}</h3>
                                    <p className="news-summary">
                                        {truncateSummary(news.introSummary, 100)}
                                        <Link to={`/news/${news._id}`} className="read-more-link">Read More</Link>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>

            {/* Mobile-specific "More News" and "Less News" buttons */}
            {isMobile && (
                <div className="more-news-button-container">
                    {itemsToShow < newsData.length && (
                        <button className="more-news-button" onClick={showMoreNews}>
                            More News
                        </button>
                    )}
                    {itemsToShow > 4 && (
                        <button className="less-news-button" onClick={showLessNews}>
                            Less News
                        </button>
                    )}
                </div>
            )}

            {/* Pagination for desktop */}
            {!isMobile && (
                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        &lt;
                    </button>
                    {Array.from({ length: Math.ceil(newsData.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= newsData.length}>
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsAndEvents;



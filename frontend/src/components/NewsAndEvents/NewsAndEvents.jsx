import React, { useContext, useState } from 'react';
import './NewsAndEvents.css';
import { StoreContext } from '../Context/StoreContext';

const NewsAndEvents = () => {

    const { newsData } = useContext(StoreContext)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNewsItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="news-events-section">
            <div className="news-container">
                {currentNewsItems.map((news, index) => (
                    <div className="news-card" key={index}>
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
                            <p className="news-summary">{news.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;
                </button>
                <button onClick={() => handlePageChange(1)} className={currentPage === 1 ? 'active' : ''}>1</button>
                <button onClick={() => handlePageChange(2)} className={currentPage === 2 ? 'active' : ''}>2</button>
                <button onClick={() => handlePageChange(3)} className={currentPage === 3 ? 'active' : ''}>3</button>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= newsData.length}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default NewsAndEvents;



//NEW VERSIONS WITH STRAPI

//
//
//

// import React, { useEffect, useState } from 'react';
// import './NewsAndEvents.css';
// import { fetchNewsAndEvents } from '../../apiService'; // Adjust the path as needed

// const NewsAndEvents = () => {
//     const [newsData, setNewsData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const itemsPerPage = 3;

//     // Fetch news data from API
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

//     const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div className="news-events-section">
//             <div className="news-container">
//                 {currentNewsItems.map((news) => (
//                     <div className="news-card" key={news.id}>
//                         <div className="news-date">
//                             <p className="day">{new Date(news.attributes.date).getDate()}</p>
//                             <p className="month">{new Date(news.attributes.date).toLocaleString('default', { month: 'short' })}</p>
//                             <p className="year">{new Date(news.attributes.date).getFullYear()}</p>
//                         </div>
//                         <div className="news-image">
//                             <img src={news.attributes.image} alt={news.attributes.title} />
//                         </div>
//                         <div className="news-content">
//                             <p className="news-tag">NEWS</p>
//                             <h3 className="news-title">{news.attributes.title}</h3>
//                             <p className="news-summary">{news.attributes.summary}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="pagination">
//                 <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//                     &lt;
//                 </button>
//                 <button onClick={() => handlePageChange(1)} className={currentPage === 1 ? 'active' : ''}>1</button>
//                 <button onClick={() => handlePageChange(2)} className={currentPage === 2 ? 'active' : ''}>2</button>
//                 <button onClick={() => handlePageChange(3)} className={currentPage === 3 ? 'active' : ''}>3</button>
//                 <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= newsData.length}>
//                     &gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NewsAndEvents;


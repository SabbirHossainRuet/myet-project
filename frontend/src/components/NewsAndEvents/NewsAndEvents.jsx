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

//
//
//

import { useEffect, useState } from 'react';
import './NewsAndEvents.css';
import { fetchNewsAndEvents } from '../../apiService';
import { Link } from 'react-router-dom';

const NewsAndEvents = () => {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 3;

    useEffect(() => {
        const getNewsData = async () => {
            try {
                const data = await fetchNewsAndEvents();
                setNewsData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getNewsData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNewsItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const truncateSummary = (summary, maxLength) => {
        if (summary.length > maxLength) {
            return summary.slice(0, maxLength) + '...';
        }
        return summary;
    };

    return (
        <div className="news-events-section" id='news-events-section'>
            <p className='title'>News and Events</p>
            <div className="news-container">
                {currentNewsItems.map((news) => (
                    <div className="news-card" key={news._id}>
                        <Link to={`/news/${news._id}`}>
                        <div className="news-date">
                            <p className="day">{new Date(news.attributes.date).getDate()}</p>
                            <p className="month">{new Date(news.attributes.date).toLocaleString('default', { month: 'short' })}</p>
                            <p className="year">{new Date(news.attributes.date).getFullYear()}</p>
                        </div>
                        <div className="news-image">
                            <img src={news.attributes.image} alt={news.attributes.title} />
                        </div>
                        <div className="news-content">
                            <p className="news-tag">NEWS</p>
                            <h3 className="news-title">{news.attributes.title}</h3>
                            <p className="news-summary">
                                    {truncateSummary(news.summary, 100)}
                                    <Link to={`/news/${news._id}`} className="read-more-link">Read More</Link>
                            </p>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
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
        </div>
    );
};

export default NewsAndEvents;


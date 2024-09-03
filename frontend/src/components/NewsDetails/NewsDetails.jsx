import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import ReactMarkdown from 'react-markdown';
import './NewsDetails.css';

const NewsDetails = () => {
  const { id } = useParams();
  const { newsData } = useContext(StoreContext);
  const navigate = useNavigate();

  const newsItem = newsData.find((news) => news._id === id);

  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);

  if (!newsItem) {
    return <p>News not found</p>;
  }

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="news-detail-container">
      <div className="news-detail">
        <div className="news-detail-header">
          <h1>{newsItem.title}</h1>
          <p>{newsItem.day} {newsItem.month}, {newsItem.year}</p>
        </div>
        <div className="news-detail-image">
          <img src={newsItem.image} alt={newsItem.title} />
        </div>
        <div className="news-detail-content">
          <ReactMarkdown>{newsItem.summary || 'Summary not available.'}</ReactMarkdown>
        </div>
        <button onClick={goHome} className="go-home-button">Back to Home</button>
      </div>
    </div>
  );
};

export default NewsDetails;

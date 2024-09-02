import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import './NewsDetails.css';

const NewsDetails = () => {
  const { id } = useParams();
  const { newsData } = useContext(StoreContext);

  const newsItem = newsData.find((news) => news._id === parseInt(id));

  if (!newsItem) {
    return <p>News not found</p>;
  }

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
          <p>{newsItem.summary || 'Summary not available.'}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;

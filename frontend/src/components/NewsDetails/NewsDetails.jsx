import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
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
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => <h1 className="custom-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="custom-h2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="custom-h3" {...props} />,
              p: ({ node, ...props }) => <p className="custom-paragraph" {...props} />,
              a: ({ node, ...props }) => <a className="custom-link" {...props} />,
            }}
          >
            {newsItem.summary || 'Summary not available.'}
          </ReactMarkdown>
        </div>
        <button onClick={goHome} className="go-home-button">Back to News</button>
      </div>
    </div>
  );
};

export default NewsDetails;

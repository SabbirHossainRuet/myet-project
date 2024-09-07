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



  const navigateToSection = (sectionId, offset = 100) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto'
        });
      }
    }, 0);
  };

  return (
    <div className="news-detail-container">
      <div className="news-detail">

        <div className="news-detail-image">
          {newsItem.image && (
            <img src={newsItem.image} alt={newsItem.title} />)}
        </div>
        <div className="news-detail-header">
          <div className="date-and-text">
            <p>{newsItem.day} {newsItem.month}, {newsItem.year}</p>
            <span>by Employment Rights Network</span>
          </div>
          <hr />
        </div>
        <h1 className='header-title'>{newsItem.title}</h1>
        <div className="news-detail-content">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => <h1 className="custom-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="custom-h2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="custom-h3" {...props} />,
              p: ({ node, ...props }) => <p className="custom-paragraph" {...props} />,
              a: ({ node, ...props }) => <a className="custom-link" {...props} />,
              table: ({ node, ...props }) => <table className="custom-table" {...props} />,
              tr: ({ node, ...props }) => <tr className="custom-tr" {...props} />,
              th: ({ node, ...props }) => <th className="custom-th" {...props} />,
              td: ({ node, ...props }) => <td className="custom-td" {...props} />,
              ul: ({ node, ...props }) => <ul className="custom-ul" {...props} />,
              ol: ({ node, ...props }) => <ol className="custom-ol" {...props} />,
              li: ({ node, ...props }) => <li className="custom-li" {...props} />,
            }}
          >
            {newsItem.summary || 'Summary not available.'}
          </ReactMarkdown>
        </div>
        <button className='go-to-news-events' onClick={() => navigateToSection('news-events-section', 170)} >Back to News</button>
        <button className='go-to-services' onClick={() => navigateToSection('services', 200)}>Back to Services</button>
        <button className='go-to-newsletter' onClick={() => navigateToSection('newsletter', 200)}>Sign up here to our Newsletter</button>
      </div>
    </div>
  );
};

export default NewsDetails;


//NEW VERSION WITH STRAPI

// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import './NewsDetails.css';

// const NewsDetails = () => {
//   const { id } = useParams();
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("Fetching news item with ID:", id);
//   }, [id]);

//   useEffect(() => {
//     // Add a timeout to ensure the element is rendered
//     setTimeout(() => {
//       const element = document.getElementById('services');
//       console.log('Element with ID services:', element);
//     }, 1000); // Adjust timeout if necessary
//   }, []);
  

//   useEffect(() => {
//     const fetchNewsItem = async () => {
//       if (!id) {
//         setError(new Error('No ID provided'));
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await fetch(`http://localhost:1337/api/news-and-events/${id}?populate=*`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setNewsItem(data.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsItem();
//   }, [id]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!newsItem) return <p>News not found</p>;

//   const { attributes } = newsItem;

//   const navigateToSection = (sectionId, offset) => {
//     navigate('/');
//     setTimeout(() => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//         const offsetPosition = elementPosition - offset;
//         console.log(`Scrolling to section: ${sectionId}`);
//         console.log(`Element position: ${elementPosition}`);
//         console.log(`Offset position: ${offsetPosition}`);

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     }, 0);
//   };

//   return (
//     <div className="news-detail-container">
//       <div className="news-detail">

//         <div className="news-detail-image">
//           {attributes.image && (
//             <img src={`http://localhost:1337${attributes.image.data.attributes.url}`} alt={attributes.title} />
//           )}
//         </div>
//         <div className="news-detail-header">
//           <div className="date-and-text">
//             <p>{new Date(attributes.date).toLocaleDateString()}</p>
//             <span>by Employment Rights Network</span>
//           </div>
//           <hr />
//         </div>
//         <h1 className='header-title'>{attributes.title}</h1>
//         <div className="news-detail-content">
//           <ReactMarkdown
//             rehypePlugins={[rehypeRaw]}
//             components={{
//               h1: ({ node, ...props }) => <h1 className="custom-h1" {...props} />,
//               h2: ({ node, ...props }) => <h2 className="custom-h2" {...props} />,
//               h3: ({ node, ...props }) => <h3 className="custom-h3" {...props} />,
//               p: ({ node, ...props }) => <p className="custom-paragraph" {...props} />,
//               a: ({ node, ...props }) => <a className="custom-link" {...props} />,
//               table: ({ node, ...props }) => <table className="custom-table" {...props} />,
//               tr: ({ node, ...props }) => <tr className="custom-tr" {...props} />,
//               th: ({ node, ...props }) => <th className="custom-th" {...props} />,
//               td: ({ node, ...props }) => <td className="custom-td" {...props} />,
//               ul: ({ node, ...props }) => <ul className="custom-ul" {...props} />,
//               ol: ({ node, ...props }) => <ol className="custom-ol" {...props} />,
//               li: ({ node, ...props }) => <li className="custom-li" {...props} />,
//             }}
//           >
//             {attributes.summary || 'Summary not available.'}
//           </ReactMarkdown>
//         </div>
//         <button className='go-to-news-events' onClick={() => navigateToSection('news-events-section', 170)} >Back to News</button>
//         <button className='go-to-services' onClick={() => {
//           const element = document.getElementById('services');
//           if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//           } else {
//             console.log('Element with ID services not found');
//           }
//         }}>Back to Services</button>

//       </div>
//     </div>
//   );
// };

// export default NewsDetails;


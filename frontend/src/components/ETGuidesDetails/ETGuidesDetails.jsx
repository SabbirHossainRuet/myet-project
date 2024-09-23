import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { et_list } from '../../assets/assets';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './ETGuidesDetails.css';

const ETGuidesDetails = () => {
    const { id } = useParams();
    const [guideData, setGuideData] = useState(null);
    const [localItem, setLocalItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
        if (id === 'help') {
            const fetchHelpGuide = async () => {
                try {
                    const response = await fetch(`https://cms-2n8x.onrender.com/api/briefs?filters[name][$eq]=help`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch help guide data');
                    }
                    const data = await response.json();
                    console.log('Fetched Help Guide from Strapi:', data);
                    setGuideData(data.data[0]);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchHelpGuide();
        }

        else {

            const localGuide = et_list.find((item) => item._id === id);

            console.log(localGuide);
            if (localGuide) {
                setLocalItem(localGuide);
            }

            const fetchGuideData = async () => {
                try {
                    const response = await fetch(`https://cms-2n8x.onrender.com/api/briefs?filters[name][$eq]=${localGuide.name}`);

                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const data = await response.json();
                    console.log('Fetched Data from Strapi:', data);
                    setGuideData(data.data[0]);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            if (localGuide) {
                fetchGuideData();
            }
        }
    }, [id]);



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!guideData || (id !== 'help' && !localItem)) {
        return <p>No data found</p>;
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
                    behavior: 'smooth'
                });
            }
        }, 0);
    };

    return (
        <div className="guide-details-container">
            <div className="guide-details">
                <h1 className="guide-title">{guideData.attributes.subject}</h1>
                <div className="guide-details-content">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="custom-h1" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="custom-h2" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="custom-h3" {...props} />,
                            p: ({ node, ...props }) => <p className="custom-paragraph" {...props} />,
                            a: ({ node, ...props }) => <a className="custom-link" {...props} />,
                            ul: ({ node, ...props }) => <ul className="custom-ul" {...props} />,
                            ol: ({ node, ...props }) => <ol className="custom-ol" {...props} />,
                            li: ({ node, ...props }) => <li className="custom-li" {...props} />,
                        }}
                    >
                        {guideData.attributes.texts || 'No additional content available'}
                    </ReactMarkdown>
                    <button className='go-to-infobriefs' onClick={() => navigateToSection('et-guides', 200)} >Back to InfoBriefs</button>
                </div>
            </div>
        </div>
    );


};

export default ETGuidesDetails;

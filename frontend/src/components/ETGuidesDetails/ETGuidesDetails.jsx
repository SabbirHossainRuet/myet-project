import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { et_list } from '../../assets/assets';

const ETGuidesDetails = () => {
    const { id } = useParams();
    const [guideData, setGuideData] = useState(null);
    const [localItem, setLocalItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const localGuide = et_list.find((item) => item._id === id);
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
                setGuideData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (localGuide) {
            fetchGuideData();
        }
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!guideData || !localItem) {
        return <p>No data found</p>;
    }

    return (
        <div className="guide-details">
            <h1>{guideData.data[0]?.attributes.subject}</h1>  {/* Display the name from local data */}
            <p>{guideData.data[0]?.attributes.text || 'No additional content available'}</p>  {/* Display text from Strapi */}
        </div>
    );
};

export default ETGuidesDetails;

import { useParams } from 'react-router-dom'; // For accessing the route parameters
import { useEffect, useState } from 'react';

const ETGuidesDetails = () => {
    const { id } = useParams();
    const [guideData, setGuideData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const response = await fetch(`https://cms-2n8x.onrender.com/api/briefs/${id}`);
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

        fetchGuideData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!guideData) {
        return <p>No data found</p>;
    }

    return (
        <div className="guide-details">
            <h1>{guideData.data.attributes.subject}</h1>
            <p>{guideData.data.attributes.text}</p>
        </div>
    );
};

export default ETGuidesDetails;

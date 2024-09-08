
export const fetchNewsAndEvents = async () => {
    try {
        const response = await fetch('https://cms-2n8x.onrender.com/api/news-and-events?populate=*');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
};

// src/apiService.js

const API_URL = 'https://cms-2n8x.onrender.com/api';

export const submitCallbackForm = async (formData, showDateTime) => {
    try {
        console.log('Submitting form data:', formData);

        const apiUrl = showDateTime
            ? `${API_URL}/callback-requests`
            : `${API_URL}/enquiry-requests`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: formData }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Server error details:', errorData);
            throw new Error(`Network response was not ok: ${errorData.error.message || 'Unknown error'}`);
        }

        const data = await response.json();
        console.log('Submission successful:', data);
        return data;
    } catch (error) {
        console.error('Error submitting form:', error.message);
        throw error;
    }
};



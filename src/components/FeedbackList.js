import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = ({ refreshFeedbacks }) => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const response = await axios.get('http://localhost:5000/api/feedback');
            setFeedbacks(response.data);
        };
        fetchFeedbacks();
    }, [refreshFeedbacks]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/feedback/${id}`);
        setFeedbacks(feedbacks.filter(feedback => feedback._id !== id)); // Update state
    };

    return (
        <div>
            <h2>Feedbacks</h2>
            {feedbacks.map(feedback => (
                <div key={feedback._id}>
                    <h3>{feedback.name}</h3>
                    <p>{feedback.message}</p>
                    <button onClick={() => handleDelete(feedback._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default FeedbackList;

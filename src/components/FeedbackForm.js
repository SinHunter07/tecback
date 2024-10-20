import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ refreshFeedbacks }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/feedback', formData);
        refreshFeedbacks(); // Trigger refresh
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
            />
            <textarea
                placeholder="Message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FeedbackForm;

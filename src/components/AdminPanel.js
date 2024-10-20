import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import VisitorChart from './VisitorChart';

const AdminPanel = () => {
    const [refreshFeedbacks, setRefreshFeedbacks] = useState(false);

    const handleRefresh = () => {
        setRefreshFeedbacks(prev => !prev);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <FeedbackForm refreshFeedbacks={handleRefresh} />
            <FeedbackList refreshFeedbacks={refreshFeedbacks} />
            <VisitorChart />
        </div>
    );
};

export default AdminPanel;

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const VisitorChart = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const fetchVisitCount = async () => {
            const response = await axios.get('http://localhost:5000/api/visit');
            setVisitCount(response.data.count);
        };
        fetchVisitCount();
    }, []);

    const data = {
        labels: ['Visits'],
        datasets: [{
            label: 'Number of Visitors',
            data: [visitCount],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };

    return (
        <div>
            <h2>Visitor Count</h2>
            <Bar data={data} />
        </div>
    );
};

export default VisitorChart;

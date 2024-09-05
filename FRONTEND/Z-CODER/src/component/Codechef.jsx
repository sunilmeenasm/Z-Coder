// src/CodeChefRating.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Codechef = () => {
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const username=JSON.parse(localStorage.getItem("user"));
        const handle = username.codechef;
        if (!handle) {
            setError('CodeChef handle not found in localStorage');
            return;
        }

        const fetchRating = async () => {
            try {
                const response = await axios.get(`https://competitive-coding-api.herokuapp.com/api/codechef/${handle}`);
                if (response.data.status === 'Success') {
                    setRating(response.data.rating);
                } else {
                    setError('Error fetching data from CodeChef API');
                }
            } catch (err) {
                setError('Error fetching data from CodeChef API');
            }
        };

        fetchRating();
    }, []);

    return (
        <div>
            {error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : rating !== null ? (
                <div>CodeChef Rating: {rating}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Codechef;

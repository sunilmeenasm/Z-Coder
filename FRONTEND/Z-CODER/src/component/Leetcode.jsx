// src/LeetCodeRating.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leetcode = () => {
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const username=JSON.parse(localStorage.getItem("user"));
        const handle = username.leetcode;
        if (!handle) {
            setError('LeetCode handle not found in localStorage');
            return;     
        }

        const fetchRating = async () => {
            try {
                const response = await axios.get(`https://competitive-coding-api.herokuapp.com/api/leetcode/${handle}`);
                if (response.data.status === 'Success') {
                    setRating(response.data.rating);
                } else {
                    setError('Error fetching data from LeetCode API');
                }
            } catch (err) {
                setError('Error fetching data from LeetCode API');
            }
        };

        fetchRating();
    }, []);

    return (
        <div>
            {error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : rating !== null ? (
                <div>LeetCode Rating: {rating}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Leetcode;

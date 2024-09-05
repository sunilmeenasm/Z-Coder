// src/CodeforcesRating.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Codeforces = () => {
    const [rating, setRating] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const username=JSON.parse(localStorage.getItem("user"));
        const handle = username.codeforceshandle;
        if (!handle) {
            setError('Codeforces handle not found in localStorage');
            return;
        }

        const fetchRating = async () => {
            try {
                const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
                if (response.data.status === 'OK') {
                    setRating(response.data.result[0].rating);
                } else {
                    setError('Error fetching data from Codeforces API');
                }
            } catch (err) {
                setError('Error fetching data from Codeforces API');
            }
        };

        fetchRating();
    }, []);

    return (
        <div>
            {error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : rating !== null ? (
                <div>Codeforces Rating: {rating}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Codeforces;

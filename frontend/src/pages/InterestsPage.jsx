import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InterestsPage = () => {
    const [interests, setInterests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInterests = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;

                const res = await axios.get(`${baseUrl}/api/interests`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setInterests(res.data);
                console.log("Fetched interests:", res.data);
            } catch (err) {
                console.error('Failed to fetch interests:', err);
            }
        };
        fetchInterests();
    }, []);
    console.log(interests);

    const resetInterests = async () => {
        navigate('/protected');
    };

    return (
        <div className="flex flex-col rounded">
            <div className="flex flex-col self-center mt-8 mb-6 px-16 py-6 max-w-full rounded-3xl border border-solid border-[#C1C1C1] w-[576px]">
                <div className="text-center text-3xl font-semibold">Your Selected Interests</div>
                <ul className="space-y-3 mb-6">
                    {interests.map((interest) => (
                        <li key={interest._id} className="text-gray-700">
                            {interest.name}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={resetInterests}
                    className="mt-6 w-full bg-black text-white p-2 rounded"
                >
                    Back to Categories
                </button>
            </div>
        </div>
    );
};

export default InterestsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;

                // Fetch all categories
                const res = await axios.get(`${baseUrl}/api/categories?page=${page}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setCategories(res.data.categories);
                setTotalPages(res.data.totalPages);
            } catch (err) {
                console.error('Failed to fetch categories:', err);
            }
        };

        const fetchUserInterests = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;

                // Fetch user's selected interests
                const res = await axios.get(`${baseUrl}/api/interests`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });

                // Extract category IDs and pre-select them
                setSelectedCategories(res.data.map(interest => interest._id));
            } catch (err) {
                console.error('Failed to fetch interests:', err);
            }
        };

        fetchCategories();
        fetchUserInterests();
    }, [page]);

    const handleSelect = (category) => {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(category._id)) {
                return prevSelected.filter(id => id !== category._id);
            } else {
                return [...prevSelected, category._id];
            }
        });
    };

    const saveInterests = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_URL;

            await axios.post(`${baseUrl}/api/interests`, { categoryIds: selectedCategories }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage("Interests saved successfully!");
            navigate('/interests');
        } catch (err) {
            setMessage("Failed to save interests. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col rounded">
            <div className="flex flex-col self-center mt-8 mb-6 px-16 py-6 max-w-full rounded-3xl border border-solid border-[#C1C1C1] w-[576px]">
                <div className="text-center text-3xl font-semibold">
                    Please mark your interests!
                </div>
                <div className="text-center mt-6">
                    We will keep you notified.
                </div>

                <div className="h-px bg-gray-200 mb-6" />

                <h3 className="text-lg font-semibold mb-4">My saved interests!</h3>
                <ul className="space-y-3">
                    {categories.map((category) => (
                        <li key={category._id} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category._id)}
                                onChange={() => handleSelect(category)}
                                className="mr-3 w-4 h-4"
                            />
                            <span className="text-gray-700">{category.name}</span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={saveInterests}
                    className="mt-6 w-full bg-black text-white p-2 rounded"
                >
                    Save Interests
                </button>

                {message && <p className="text-center text-green-500 mt-4">{message}</p>}

                <div className="flex justify-center mt-4 space-x-2 text-gray-600">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="px-2"
                    >
                        &lt;&lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-2 ${page === i + 1 ? 'font-bold text-black' : 'text-gray-600'}`}
                        >
                            {i + 1}
                        </button>
                    )).slice(
                        Math.max(0, Math.min(page - 4, totalPages - 7)),
                        Math.max(7, Math.min(page + 3, totalPages))
                    )}
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className="px-2"
                    >
                        &gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProtectedPage;

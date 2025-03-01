import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const [code, setCode] = useState(['', '', '', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode);

        // Move focus to next input field if the current one is filled
        if (e.target.value && index < 7) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Handle backspace: if the current input is empty and backspace is pressed, move focus to the previous input
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const baseUrl = import.meta.env.VITE_API_URL;

            const res = await axios.post(`${baseUrl}/api/user/verify-email`, {
                email,
                verificationCode: code.join(''), // Join array to form string
            });
            setSuccess(res.data.message);

            setTimeout(() => {
                navigate('/protected');
            }, 1500);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to verify email');
        }
    };

    return (
        <div className="flex flex-col rounded">
            <div className="flex flex-col self-center mt-8 mb-6 px-16 py-6 max-w-full rounded-3xl border border-solid border-[#C1C1C1] w-[576px]">
                <div className="text-center text-3xl font-semibold">
                    Verify your email
                </div>
                <div className="text-center mt-8">
                    Enter the 8-digit code you have received on <br />
                    <span className="font-medium">{email}</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mt-12">
                        Code
                    </div>
                    <div className="flex gap-3 mt-2">

                        {Array(8).fill('').map((_, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                value={code[index]}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="flex shrink-0 bg-white rounded-md border border-solid border-[#C1C1C1] h-[47px] w-[47px] text-center text-lg font-medium"
                                maxLength={1}
                            />
                        ))}
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm text-center mt-4">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={code.some(digit => digit === '')}
                        className="w-full flex items-center justify-center text-white px-8 py-4 mt-10 font-medium bg-black rounded-md border border-black border-solid h-14"
                    >
                        {success ? 'Verified' : 'Verify'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;

'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('idle');
        
        try {
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate success
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
                Get the latest updates on civil engineering automation and industry developments.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Subscribe to Newsletter
                </button>
                {status === 'success' && (
                    <p className="text-green-600">Thank you for subscribing!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
} 
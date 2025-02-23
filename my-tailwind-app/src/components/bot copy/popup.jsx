import { useState } from "react";
import { CardElement, useStripe } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

const Popup = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe) return;
        setLoading(true);
        // Handle submission logic here
        setTimeout(() => {
            setLoading(false);
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }} 
                className="bg-white p-6 rounded-lg shadow-md w-96 relative"
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-libra font-semibold mb-4">Subscribe to Our Service</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        required
                    />
                    <CardElement className="mb-4" />
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button
                        type="submit"
                        disabled={!stripe || loading}
                        className="w-full bg-[#766C40] text-white py-2 rounded-md hover:bg-[#5E5740] transition-all duration-300"
                    >
                        {loading ? "Processing..." : "Subscribe"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Popup;

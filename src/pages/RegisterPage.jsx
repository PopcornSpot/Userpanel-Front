import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Background from "../assets/ticket-Image.jpg";
import Logo from "../assets/POPFINAL.png";
import { Link } from 'react-router-dom';

const initialState = {
    userName: '',
    email: '',
    mobileNumber: '',
};

function RegisterFormPage() {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:7000/user/register", formData);
            toast.success(response.data.Message);
            setFormData(initialState);
            navigate("/login");
        } catch (err) {
            toast.error(err.response?.data?.Message || "Registration failed. Please try again.");
        }
    };

    const handleReset = () => {
        setFormData(initialState);
    };

  

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-50">
            {/* Background Image Section */}
            <div className="hidden md:flex w-1/2 h-full">
                <img src={Background} alt="Background" className="w-full h-full object-cover" />
            </div>
    
            {/* Registration Form Section */}
            <div className="w-full md:w-1/2 h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 to-gray-200 justify-center px-6">
                <form 
                    className="w-full max-w-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl p-8 space-y-6 flex flex-col items-center" 
                    onSubmit={handleSubmit} 
                    onReset={handleReset}
                >
                    <img src={Logo} alt="Logo" className="w-28 h-auto mb-4" />
                    <h2 className="text-3xl font-bold text-white">Register</h2>
    
                    {/* Name Input */}
                    <div className="w-full">
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-100">Full Name</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Enter your name"
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>
    
                    {/* Email Input */}
                    <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
    
                    {/* Mobile Number Input */}
                    <div className="w-full">
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-100">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            pattern="[0-9]{10}"
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
    
                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                    >
                        Register
                    </button>
    
                    {/* Login Link */}
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-orange-500 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
    
}

export default RegisterFormPage;

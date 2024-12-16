import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const initialState = { 
    userName: '',
    email: '',
    mobileNumber: '',
}



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

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        
        try {
            await axios
              .post("http://localhost:7000/user/register", formData)
              .then((res) => {
                toast.success(res.data.Message);
                setFormData(initialState);
                navigate("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data.Message);
              });
          } catch (error) {
            console.log(error.message);
          }
    };

    const handleReset = () => {
        setFormData(initialState);
      };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form className="space-y-4" onSubmit={handleSubmit} onReset={handleReset}>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Enter your name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            pattern="[0-9]{10}"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterFormPage;

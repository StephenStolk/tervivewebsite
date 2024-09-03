import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const { name, email, phone, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Handle success (e.g., save token, redirect, show message)
      setSuccess('Account created successfully!');
      setError(null);

      // Redirect to the Dashboard
      navigate('/dashboard'); // Redirecting to Dashboard after signup

    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 text-gray-800">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Create an Account</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm font-medium text-gray-700 mb-4">Or sign up with</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300">
              <FaGoogle />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

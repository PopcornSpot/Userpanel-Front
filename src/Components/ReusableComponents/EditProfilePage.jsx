import React from "react";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";

const EditProfile = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="w-full fixed top-0 z-50 bg-white shadow-md">
        <NavBar />
      </div>

      <div className="p-6 mt-24 max-w-3xl mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-orange-400">
          Edit Profile
        </h1>

        <div className="mb-6">
          <label className="block text-xl font-medium text-gray-300 mb-3">
            Upload Profile Picture
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 transition duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xl font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-500 p-4 rounded-lg bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xl font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-500 p-4 rounded-lg bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xl font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your number"
            className="w-full border border-gray-500 p-4 rounded-lg bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xl font-medium text-gray-300 mb-2">
            Gender
          </label>
          <div className="flex gap-8 items-center text-white">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="mr-3 accent-orange-400"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-3 accent-orange-400"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                className="mr-3 accent-orange-400"
              />
              Other
            </label>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-10 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 text-xl font-bold">
            Save Changes
          </button>
        </div>
      </div>

      <div className="mt-6 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;

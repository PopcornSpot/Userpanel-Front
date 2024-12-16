import React from "react";
import image from "../../assets/LoginImagebg.jpg";
import { FaPencilAlt, FaUserFriends, FaWallet } from "react-icons/fa";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";

const ProfileCard = ({ title, value }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
    <p className="text-lg font-semibold text-gray-600">{title}</p>
    <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
  </div>
);

const ActionButton = ({ icon: Icon, label, colorClass }) => (
  <button
    className={`${colorClass} text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2`}
  >
    <Icon className="w-5 h-5" />
    {label}
  </button>
);

const UserProfile = () => {
  const userDetails = [
    { label: "Name", value: "Delli Babu" },
    { label: "Email", value: "delli@gmail.com" },
    { label: "Phone", value: "8248912249" },
    { label: "Gender", value: "Male" },
  ];

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="w-full fixed top-0 z-50 bg-white shadow-md">
        <NavBar />
      </div>

      
      <div className="mt-24 mb-6">
        <div className="p-6 text-2xl font-bold  text-start ml-5">
          Profile
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 bg-white p-8 rounded-lg shadow-lg mb-8 mx-4 md:mx-10">
      
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-300 to-blue-400 p-1 rounded-full shadow-lg">
            <img
              src={image}
              alt="User Profile"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

        
        <div className="flex flex-col gap-4 text-lg text-gray-700">
          {userDetails.map((detail, index) => (
            <p key={index}>
              <span className="font-semibold text-gray-800">{detail.label}:</span>{" "}
              {detail.value}
            </p>
          ))}
        </div>

       
        <div className="flex flex-col gap-4">
          <ActionButton
            icon={FaPencilAlt}
            label="Edit Profile"
            colorClass="bg-gradient-to-r from-green-500 to-green-600"
          />
          <ActionButton
            icon={FaUserFriends}
            label="Friends"
            colorClass="bg-gradient-to-r from-yellow-500 to-yellow-600"
          />
          <ActionButton
            icon={FaWallet}
            label="Subscriptions"
            colorClass="bg-gradient-to-r from-purple-500 to-purple-600"
          />
        </div>
      </div>

      
      <div className="mx-4 md:mx-10">
        <h1 className="text-2xl font-bold  mb-6">Statistics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProfileCard title="Total Money Spent" value="$2000" />
          <ProfileCard title="Total Tickets" value="5" />
          <ProfileCard title="Action Movie Preference" value="70%" />
        </div>
      </div>

      <div className="mt-10 bg-gray-100">
        <Footer />
      </div>
    </div>
  );
};

export default UserProfile;

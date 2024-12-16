import React from "react";
import image from "../../assets/LoginImagebg.jpg";
import PropTypes from "prop-types";
import {
  PencilSquareIcon,
  UserPlusIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const ProfileCard = ({ title, value }) => (
  <div className="bg-white shadow-md p-6 rounded-lg text-center">
    <p className="text-lg font-semibold text-gray-600">{title}</p>
    <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
  </div>
);

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const ActionButton = ({ icon: Icon, label, colorClass }) => (
  <button
    className={`${colorClass} text-white py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition duration-200 flex items-center gap-2`}
  >
    <Icon className="w-5 h-5" />
    {label}
  </button>
);

ActionButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
};

const UserProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      {/* Profile Header */}
      <div className="mb-6">
        <div className="p-4 text-lg font-semibold border-b border-gray-300 shadow-sm bg-white">
          Profile
        </div>
      </div>

      {/* User Information Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white p-6 rounded-lg shadow-md mb-6">
        {/* Profile Picture */}
        <div className="mb-4 md:mb-0">
          <img
            src={image}
            alt="User Profile"
            className="w-44 h-44 border-4 border-gray-200 shadow-md rounded-full"
          />
        </div>

        {/* User Details */}
        <div className="flex flex-col gap-4 text-lg text-gray-700">
          <p><span className="font-semibold">Name:</span> Mani</p>
          <p><span className="font-semibold">Email:</span> mani@gmail.com</p>
          <p><span className="font-semibold">Phone:</span> 8248912249</p>
          <p><span className="font-semibold">Gender:</span> Male</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 md:mt-0 flex flex-col gap-4">
          <ActionButton
            icon={PencilSquareIcon}
            label="Edit Profile"
            colorClass="bg-green-500"
          />
          <ActionButton
            icon={UserPlusIcon}
            label="Friends"
            colorClass="bg-yellow-500"
          />
          <ActionButton
            icon={RectangleStackIcon}
            label="Subscriptions"
            colorClass="bg-purple-500"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div>
        <h1 className="text-xl font-bold text-gray-700 mb-4">Statistics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProfileCard title="Total Money Spent" value="$2000" />
          <ProfileCard title="Total Tickets" value="5" />
          <ProfileCard title="Action Movie Preference" value="70%" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useEffect, useState } from "react";
import image from "../../assets/LoginImagebg.jpg";
import { FaPencilAlt, FaUserFriends, FaWallet } from "react-icons/fa";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const backendURL= "http://localhost:7000"

  const fetchUser = async () => {
    try {
      const authToken = localStorage.getItem("token");
      await axios
        .get("http://localhost:7000/user/getdetails",
           {
              headers: { Authorization: `Bearer ${authToken}` }
            }
        )
        .then((res) => {
          if(res.data.Error=="jwt expired"){
            navigate("/login") 
          }
          console.log(res.data.details.picture);
          // toast.success(res.data.Message)
          setUserDetails(res.data.details);
        })
        .catch((err) =>{
          if (err.status === 401) {
              return toast.error("Request to Login Again")
                }
          toast.error(err.response.data.Error)
        });
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className="w-full bg-gray-100 min-h-screen">
    
      <div className="w-full fixed top-0 z-50 bg-white shadow-md">
        <NavBar />
      </div>
      <div className="mt-24 mb-6">
        <div className="p-6 text-2xl font-bold text-start ml-5">Profile</div>
      </div>
      <div className="mx-4 md:mx-10 bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center md:items-start gap-8">
        
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-300 to-blue-400 p-1 rounded-full shadow-lg">
                <img
                //  src={userDetails.fileName 
                //   ? `${backendURL}/upload/${userDetails.fileName}` 
                //   : userDetails.picture}
                  src={image}
                  alt={userDetails.userName}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>

            <div className="text-lg text-gray-700 space-y-2">
              <p className="text-gray-500 flex"><strong className="block w-36">User Name:</strong>  {userDetails.userName}</p>
              <p className="text-gray-500 flex"><strong className="block w-36">Email:</strong>{userDetails.email}</p>
              <p className="text-gray-500 flex"><strong className="block w-36">Mobile Number:</strong> {userDetails.mobileNumber}</p>
            </div>

            <div className="flex gap-4">
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

          <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Statistics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ProfileCard title="Total Money Spent" value="$2000" />
              <ProfileCard title="Total Tickets" value="5" />
              <ProfileCard title="Action Movie Preference" value="70%" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-gray-100">
        <Footer />
      </div>
    </div>
  );
};

export default UserProfile;

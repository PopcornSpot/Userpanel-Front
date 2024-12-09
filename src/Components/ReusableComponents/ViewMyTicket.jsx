import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FiMapPin, FiHelpCircle } from "react-icons/fi"; // Importing React Icons

const TicketPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5]">
      <div className="w-96 bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Movie Information */}
        <div className="p-6 bg-[#FF5722] text-white">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50x70"
              alt="Movie Poster"
              className="w-16 h-20 object-cover rounded-md shadow-md"
            />
            <div className="ml-4">
              <h1 className="text-xl font-bold">Amaran (U/A)</h1>
              <p className="text-sm">Tamil, 2D</p>
              <p className="text-sm">Sun, 20 Nov | 10:00 AM</p>
              <p className="text-sm">PVR: VR, Chennai</p>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/100"
                alt="QR Code"
                className="w-24 h-24"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-700">1 Ticket(s)</p>
              <p className="text-xl font-bold text-[#FF5722]">SCREEN 2</p>
              <p className="text-sm font-medium text-[#2C2C2C]">DIAMOND-A19</p>
              <p className="text-sm text-gray-500 mt-2">
                BOOKING ID: <span className="font-semibold text-[#2C2C2C]">WPSC42Q</span>
              </p>
            </div>
          </div>
        </div>

        {/* View Location and Contact Support */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            
            {/* View Location Button */}
            <button className="flex items-center text-[#FF7043] text-sm font-semibold hover:text-[#E64A19]">
              <FiMapPin className="w-5 h-5 mr-1" />
              View Location
            </button>

            {/* Contact Support Button */}
            <button className="flex items-center text-[#FF7043] text-sm font-semibold hover:text-[#E64A19]">
              <FiHelpCircle className="w-5 h-5 mr-1" />
              Contact Support
            </button>

          </div>
        </div>

        {/* Total Amount Section */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-lg font-bold text-[#2C2C2C]">
            Total Amount: <span className="text-[#FF5722]">₹191.06</span>
          </p>
        </div>

        {/* Go Back to Home Button */}
        <div className="p-4 flex justify-center">
          <button 
            className="bg-[#FF5722] text-white px-6 py-2 rounded-lg w-full text-center shadow-md hover:bg-[#E64A19] transition-all duration-300"
            onClick={() => navigate("/home")}
          >
            Go Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default TicketPage;

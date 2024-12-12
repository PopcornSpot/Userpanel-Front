import React from "react";
import { FiSearch } from "react-icons/fi";
import image from "../assets/LoginImagebg.jpg"

// Reusable Card Component
const Card = ({ image, title, description, address }) => {
  return (
    <div className={`bg-gray-900 relative w-full sm:w-[300px] shadow-sm rounded-lg `}>
      
      {image && (
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover rounded-lg`}
        />
      )}
      <div className="absolute top-0 w-full h-full bg-gray-900 bg-opacity-90 rounded-lg"></div>
      <div className="absolute top-0 w-full h-full flex flex-col items-start justify-start mt-2 gap-1 p-4">
      <p className={`text-lg font-bold text-white`}>{title}</p>
      <p className={`text-gray-200`}>{description}</p>
      <p className={`text-gray-200 text-sm`}>{address}</p>
      </div>
    </div>
  );
};

const TheaterCard = () => {
  return (
    <div className={`bg-white p-7 shadow-md border border-b-gray-200`}>
    
      <div className={`flex flex-col sm:flex-row items-center justify-between border-1 rounded-sm shadow-md border-gray-950 p-3 bg-gray-200 mb-6`}>
        <h1 className={`font-semibold text-2xl text-gray-700 mb-4 sm:mb-0`}>
          Cinema in Chennai
        </h1>
        <div className={`flex items-center border-2 border-gray-400 rounded-lg w-full sm:w-[350px]`}>
          <input
            type="text"
            placeholder="Search by cinema or area"
            className={`flex-grow p-2 focus:outline-none rounded-l-lg`}
          />
          <button className={`p-2 bg-gray-400 hover:bg-gray-500 rounded-r-lg text-white`}>
            <FiSearch />
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7`}>
        <Card
          image={image}
          title="The Vijaya Park Multiplex: Injambakkam ECR 4K Atoms"
          description="4K Atmos Cinema experience with luxurious seating."
          address="No.56, Anna Enclave, Injambakkam, Chennai, Tamil Nadu 600155, India"
        />
        <Card
          image={image}
          title="PVR Cinemas: Phoenix Market City"
          description="Experience the latest movies in a premium environment."
          address="Phoenix Market City, Velachery, Chennai, Tamil Nadu 600042"
        />
        <Card
          image={image}
          title="Satyam Cinemas: Royapettah"
          description="A classic theater with Dolby Atmos sound systems."
          address="No.8, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014"
        />
        <Card
          image={image}
          title="The Grand Cinema: Anna Nagar"
          description="Enjoy a high-end cinematic experience."
          address="Anna Nagar Tower, Chennai, Tamil Nadu 600040"
        />
         <Card
          image={image}
          title="PVR Cinemas: Phoenix Market City"
          description="Experience the latest movies in a premium environment."
          address="Phoenix Market City, Velachery, Chennai, Tamil Nadu 600042"
        />
        <Card
          image={image}
          title="Satyam Cinemas: Royapettah"
          description="A classic theater with Dolby Atmos sound systems."
          address="No.8, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014"
        />
       
      </div>
    </div>
  );
};

export default TheaterCard;

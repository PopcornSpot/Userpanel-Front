import React, { useState } from "react";

const MovieDetailsCard = ({ movieDetails, onStatusChange }) => {
  const [status, setStatus] = useState("Pending");
  const [isVisible, setIsVisible] = useState(true); // For showing/hiding the card

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (onStatusChange) onStatusChange(newStatus);
  };

  const handleDelete = () => {
    setIsVisible(false); // Hide the card
  };

  if (!isVisible) return null; // Do not render the card if it's deleted

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{movieDetails.title || "Movie Title"}</h2>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            status === "Published" ? "bg-green-500" : "bg-yellow-400"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Movie Details */}
        <div>
          <p className="text-sm text-gray-600">
            <strong>Genre:</strong> {movieDetails.genre || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Language:</strong> {movieDetails.language || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Duration:</strong> {movieDetails.duration || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Release Date:</strong> {movieDetails.releaseDate || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Certificate:</strong> {movieDetails.certificate || "N/A"}
          </p>
        </div>

        {/* Synopsis and Additional Info */}
        <div>
          <p className="text-sm text-gray-600">
            <strong>Synopsis:</strong> {movieDetails.synopsis || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Cast:</strong> {movieDetails.cast || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Director:</strong> {movieDetails.director || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Ticket Price:</strong> ${movieDetails.ticketPrice || "N/A"}
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Poster */}
        <div className="flex items-center gap-4">
          {movieDetails.poster ? (
            <img
              src={URL.createObjectURL(movieDetails.poster)}
              alt="Poster"
              className="w-24 h-36 object-cover rounded-md"
            />
          ) : (
            <div className="w-24 h-36 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              No Poster
            </div>
          )}

          {/* Banner */}
          {movieDetails.banner ? (
            <img
              src={URL.createObjectURL(movieDetails.banner)}
              alt="Banner"
              className="w-36 h-24 object-cover rounded-md"
            />
          ) : (
            <div className="w-36 h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              No Banner
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => handleStatusChange("Published")}
            className={`px-4 py-2 font-medium rounded-md ${
              status === "Published" ? "bg-green-500 text-white" : "bg-gray-200"
            } hover:bg-green-600 transition`}
          >
            Publish
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;

import React, { useState } from "react";

const MovieCard = ({ movie, onDelete, onStatusChange }) => {
  const [status, setStatus] = useState(movie.status);

  const handleStatusChange = () => {
    const newStatus = "Published";
    setStatus(newStatus);
    if (onStatusChange) onStatusChange(newStatus, movie);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden mb-4">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{movie.title || "Untitled Movie"}</h2>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            status === "Published" ? "bg-green-500" : "bg-yellow-400"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Movie Details */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Details */}
        <div>
          <p className="text-sm text-gray-600">
            <strong>Genre:</strong> {movie.genre || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Language:</strong> {movie.language || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Duration:</strong> {movie.duration || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Release Date:</strong> {movie.releaseDate || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Certificate:</strong> {movie.certificate || "N/A"}
          </p>
        </div>

        {/* Right Details */}
        <div>
          <p className="text-sm text-gray-600">
            <strong>Synopsis:</strong> {movie.synopsis || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Cast:</strong> {movie.cast || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Director:</strong> {movie.director || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Ticket Price:</strong> ${movie.ticketPrice || "N/A"}
          </p>
        </div>
      </div>

      {/* Poster and Banner */}
      <div className="p-4 flex items-center gap-4">
        {/* Poster */}
        {movie.poster ? (
          <img
            src={URL.createObjectURL(movie.poster)}
            alt="Poster"
            className="w-24 h-36 object-cover rounded-md"
          />
        ) : (
          <div className="w-24 h-36 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            No Poster
          </div>
        )}

        {/* Banner */}
        {movie.banner ? (
          <img
            src={URL.createObjectURL(movie.banner)}
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
      <div className="p-4 flex gap-4">
        <button
          onClick={handleStatusChange}
          disabled={status === "Published"}
          className={`px-4 py-2 font-medium rounded-md ${
            status === "Published"
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-gray-200 hover:bg-green-600"
          } transition`}
        >
          {status === "Published" ? "Published" : "Publish"}
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: "",
      genre: "",
      language: "",
      duration: "",
      releaseDate: "",
      certificate: "",
      synopsis: "",
      cast: "",
      director: "",
      trailerUrl: "",
      ticketPrice: "",
      poster: null,
      banner: null,
      status: "Pending",
    },
  ]);

  const handleDelete = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleStatusChange = (newStatus, updatedMovie) => {
    setMovies(
      movies.map((movie) =>
        movie === updatedMovie ? { ...movie, status: newStatus } : movie
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          onDelete={() => handleDelete(index)}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default MovieList;

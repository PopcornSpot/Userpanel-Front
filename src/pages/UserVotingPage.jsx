import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const UserVotingPage = () => {
  const [pollData, setPollData] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState("");
  const { _id } = useParams(); // Extract poll ID from URL params

  // Fetch poll data when component loads
  useEffect(() => {
    const fetchPollData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/poll/getpoll/?_id=${_id}`
        );
        toast.success(response.data.Message);
        setPollData(response.data.getpoll);
      } catch (err) {
        toast.error(err.response?.data?.Error || "Failed to load poll data.");
      }
    };

    fetchPollData();
  }, [_id]);

  // Handle vote submission
  const handleVote = async () => {
    if (!selectedMovie) {
      alert("Please select a movie to vote for!");
      return;
    }

    // Update movie votes
    const updatedMovies = pollData.movies.map((movie) =>
      movie._id === selectedMovie
        ? { ...movie, votes: (movie.votes || 0) + 1 } // Increment votes safely
        : movie
    );

    try {
      const response = await axios.put(
        `http://localhost:7000/poll/update/?_id=${_id}`,
        { movies: updatedMovies }
      );
      toast.success(response.data.Message);
      alert("Your vote has been counted!");

      // Update local state with new poll data
      setPollData((prevData) => ({
        ...prevData,
        movies: updatedMovies,
      }));
    } catch (err) {
      toast.error(err.response?.data?.Error || "Failed to update vote.");
      console.error(err.message);
    }
  };

  // Show loading message if poll data is not yet loaded
  if (!pollData) {
    return <div>Loading poll...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">{pollData.pollName}</h1>
      <h3 className="text-lg mb-4">Vote for your favorite movie:</h3>
      <div className="mb-6">
        {pollData.movies.map((movie) => (
          <div key={movie._id} className="mb-2">
            <input
              type="radio"
              name="movieVote"
              id={movie._id}
              value={movie._id}
              checked={selectedMovie === movie._id}
              onChange={() => setSelectedMovie(movie._id)}
              className="mr-2"
            />
            <label htmlFor={movie._id} className="text-lg">
              {movie.movieName} - Votes: {movie.votes || 0}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleVote}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      >
        Vote
      </button>
    </div>
  );
};

export default UserVotingPage;

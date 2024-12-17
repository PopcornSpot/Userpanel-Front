import React, { useEffect, useState } from "react";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

const MovieBooking = () => {
  const [movie, setMovie] = useState({});
  const [showTimes, setShowTimes] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { _id } = useParams();

  const fetchMovie = async () => {
    try {
      const res = await axios.get(
        `http://localhost:7000/movie/user/getMovieDetails/?_id=${_id}`
      );
      toast.success(res.data.Message);
      toast.error(res.data.Error);
      setMovie(res.data.movie);
    } catch (error) {
      console.log(error.message);
      toast.error("Error fetching movie details.");
    }
  };

  const fetchTheatres = async () => {
    if (!movie.adminId) return;

    try {
      const res = await axios.get(
        `http://localhost:7000/theatre/user/gettheatredetails/?adminId=${movie.adminId}`
      );
      toast.success(res.data.Message);
      setTheatres(res.data.theatres);
    } catch (error) {
      console.log(error.message);
      toast.error("Error fetching theatre details.");
    }
  };

  const fetchShows = async () => {
    if (!movie.adminId) return;

    try {
      const res = await axios.get(
        `http://localhost:7000/show/user/getshowdetails/?adminId=${movie.adminId}`
      );
      const filteredShows = res.data.shows.filter(
        (show) => show.movie === movie.title
      );
      setShowTimes(filteredShows);
      const dates = filteredShows.map((show) => new Date(show.showDate));
      const lastDates = filteredShows.map((show) => new Date(show.lastDate));
      setStartDate(new Date(Math.min(...dates)));
      setEndDate(new Date(Math.max(...lastDates)));
    } catch (error) {
      console.log(error.message);
      toast.error("Error fetching showtimes.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovie();
      await fetchTheatres();
      await fetchShows();
    };
    fetchData();
  }, [_id, movie.adminId]);

  const getWeekDates = (start, end) => {
    const dates = [];
    const currentDate = new Date(start);

    while (currentDate <= end) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const weekday = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(currentDate);
      dates.push({ date: dateStr, weekday });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const allDates = getWeekDates(startDate, endDate);
  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const paginatedDates = allDates.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < allDates.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const groupedShowTimes = theatres.map((theatre) => {
    const showsForTheatre = showTimes.filter(
      (show) => show.theatreId === theatre._id
    );
    return { ...theatre, shows: showsForTheatre };
  });

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      <div className="w-full fixed top-0 z-50 shadow-md bg-white">
        <NavBar />
      </div>

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {movie.title} - {movie.language}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 font-medium rounded-full shadow-sm">
                {movie.genre}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex flex-wrap gap-3">
              {paginatedDates.map((dateObj, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  {dateObj.weekday} ({dateObj.date})
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={(currentPage + 1) * itemsPerPage >= allDates.length}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {groupedShowTimes.map((theatre) => (
              <div
                key={theatre._id}
                className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {theatre.theatreName} - {theatre.city}
                </h2>

                <div className="flex flex-wrap gap-4">
                  {theatre.shows.map((show, idx) => (
                    <div key={idx} className="flex flex-wrap gap-2">
                      {show.showTime.map((time, timeIdx) => (
                        <Link to={"/theatrelayout"}>
                        <button
                          key={timeIdx}
                          className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
                        >
                          {time}
                        </button>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieBooking;
